# 🔐 SDK Boundary Enforcement - RTMN Ecosystem

**Last Updated:** 2026-01-03
**Status:** ✅ MANDATORY - TECHNICALLY ENFORCED
**Purpose:** Prevent apps from bypassing SDK and making direct API calls

---

## ⚠️ THE PROBLEM

**User said:** "All apps must use Rabtul SDK"

**Reality:** Nothing technically prevents an app from:
```javascript
// ❌ Bypassing SDK - direct API call
const response = await fetch('https://api.rtmn.in/wallet/credit', {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${userToken}` },
  body: JSON.stringify({
    userId,
    amount: 1000000 // Fraudulent credit
  })
});
```

**This is a CRITICAL security hole.**

---

## ✅ THE SOLUTION: 3-LAYER ENFORCEMENT

```
┌─────────────────────────────────────────────┐
│  Layer 1: SDK Request Signing               │
│  - SDK injects cryptographic signature      │
│  - API Gateway validates signature          │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│  Layer 2: Service-to-Service Auth           │
│  - Only registered SDK clients allowed      │
│  - Client credentials (mTLS)                │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│  Layer 3: Domain Authority Validation       │
│  - Check caller has write permission        │
│  - Reject unauthorized domains              │
└─────────────────────────────────────────────┘
```

---

## 🔑 LAYER 1: SDK REQUEST SIGNING

### How It Works

Every SDK request includes a cryptographic signature that proves it came from the official SDK.

### SDK Client (App Side)

```javascript
// @rabtul/wallet-sdk/src/client.js
class WalletSDK {
  constructor({ serviceId, apiKey, apiSecret }) {
    this.serviceId = serviceId; // e.g., 'rez-app'
    this.apiKey = apiKey;
    this.apiSecret = apiSecret; // NEVER exposed to frontend
    this.baseURL = 'https://api.rtmn.in';
  }

  /**
   * All SDK methods use this signed request
   */
  async _signedRequest(method, path, body = null) {
    const timestamp = Date.now();
    const nonce = crypto.randomUUID();

    // Create signature payload
    const payload = {
      method,
      path,
      timestamp,
      nonce,
      body: body ? JSON.stringify(body) : ''
    };

    // Sign with HMAC-SHA256
    const signature = crypto
      .createHmac('sha256', this.apiSecret)
      .update(JSON.stringify(payload))
      .digest('hex');

    // Make request with signed headers
    const response = await fetch(`${this.baseURL}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-SDK-Service-ID': this.serviceId,
        'X-SDK-API-Key': this.apiKey,
        'X-SDK-Timestamp': timestamp.toString(),
        'X-SDK-Nonce': nonce,
        'X-SDK-Signature': signature,
        'X-SDK-Version': '1.0.0'
      },
      body: body ? JSON.stringify(body) : undefined
    });

    return response.json();
  }

  /**
   * Public method - uses signed request internally
   */
  async credit({ userId, amount, type, reason, orderId, metadata }) {
    return this._signedRequest('POST', '/wallet/credit', {
      userId,
      amount,
      type,
      reason,
      orderId,
      metadata
    });
  }
}
```

### API Gateway (Validation)

```javascript
// api-gateway/middleware/validateSDKSignature.js
async function validateSDKSignature(req, res, next) {
  // Extract headers
  const serviceId = req.headers['x-sdk-service-id'];
  const apiKey = req.headers['x-sdk-api-key'];
  const timestamp = req.headers['x-sdk-timestamp'];
  const nonce = req.headers['x-sdk-nonce'];
  const signature = req.headers['x-sdk-signature'];
  const sdkVersion = req.headers['x-sdk-version'];

  // 1. Check all headers present
  if (!serviceId || !apiKey || !timestamp || !nonce || !signature) {
    return res.status(403).json({
      success: false,
      error: {
        code: 9100,
        message: 'SDK signature required',
        userMessage: 'Invalid request - please update your app'
      }
    });
  }

  // 2. Validate timestamp (prevent replay attacks)
  const requestAge = Date.now() - parseInt(timestamp);
  if (requestAge > 60000) { // 1 minute window
    return res.status(403).json({
      success: false,
      error: {
        code: 9101,
        message: 'Request timestamp expired',
        userMessage: 'Request expired - please retry'
      }
    });
  }

  // 3. Check nonce (prevent duplicate requests)
  const nonceKey = `nonce:${serviceId}:${nonce}`;
  const nonceExists = await redis.get(nonceKey);
  if (nonceExists) {
    return res.status(403).json({
      success: false,
      error: {
        code: 9102,
        message: 'Duplicate request detected',
        userMessage: 'Duplicate request'
      }
    });
  }

  // Store nonce for 5 minutes
  await redis.setex(nonceKey, 300, '1');

  // 4. Lookup SDK client credentials
  const client = await db.sdk_clients.findOne({
    where: {
      service_id: serviceId,
      api_key: apiKey,
      is_active: true
    }
  });

  if (!client) {
    await logSecurityEvent({
      event: 'invalid_sdk_credentials',
      serviceId,
      apiKey,
      ip: req.ip
    });

    return res.status(403).json({
      success: false,
      error: {
        code: 9103,
        message: 'Invalid SDK credentials',
        userMessage: 'Unauthorized access'
      }
    });
  }

  // 5. Recreate signature and verify
  const payload = {
    method: req.method,
    path: req.path,
    timestamp,
    nonce,
    body: req.body ? JSON.stringify(req.body) : ''
  };

  const expectedSignature = crypto
    .createHmac('sha256', client.api_secret)
    .update(JSON.stringify(payload))
    .digest('hex');

  if (signature !== expectedSignature) {
    await logSecurityEvent({
      event: 'signature_mismatch',
      serviceId,
      expected: expectedSignature,
      received: signature,
      ip: req.ip
    });

    return res.status(403).json({
      success: false,
      error: {
        code: 9104,
        message: 'Invalid signature',
        userMessage: 'Invalid request signature'
      }
    });
  }

  // 6. Check SDK version compatibility
  const minVersion = '1.0.0';
  if (!isVersionCompatible(sdkVersion, minVersion)) {
    return res.status(426).json({
      success: false,
      error: {
        code: 9105,
        message: `SDK version ${sdkVersion} is outdated. Minimum: ${minVersion}`,
        userMessage: 'Please update your app to the latest version',
        action: 'FORCE_UPDATE'
      }
    });
  }

  // ✅ Valid SDK request
  req.sdkClient = client;
  req.serviceId = serviceId;
  next();
}

// Apply to ALL API routes
app.use('/api/*', validateSDKSignature);
```

---

## 🔒 LAYER 2: SERVICE-TO-SERVICE AUTH

### SDK Client Registration

Only registered services can get SDK credentials.

```sql
-- Table: sdk_clients
CREATE TABLE sdk_clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id VARCHAR(50) UNIQUE NOT NULL, -- 'rez-app', 'wasil-dinezy', 'bizone-api'
  service_name VARCHAR(100) NOT NULL,
  api_key VARCHAR(64) UNIQUE NOT NULL,
  api_secret VARCHAR(128) NOT NULL, -- Encrypted at rest
  allowed_scopes TEXT[], -- ['wallet:read', 'wallet:write', 'orders:read']
  rate_limit_per_minute INTEGER DEFAULT 1000,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  created_by UUID REFERENCES users(id),
  last_used_at TIMESTAMP
);

CREATE INDEX idx_sdk_clients_service_id ON sdk_clients(service_id);
CREATE INDEX idx_sdk_clients_api_key ON sdk_clients(api_key);

-- Seed data
INSERT INTO sdk_clients (service_id, service_name, api_key, api_secret, allowed_scopes) VALUES
('rez-app', 'ReZ Mobile App', 'rzk_live_xxxxxxxxxxxx', 'encrypted_secret_1', ARRAY['wallet:read', 'orders:write']),
('wasil-dinezy', 'Wasil Dinezy App', 'wzk_live_xxxxxxxxxxxx', 'encrypted_secret_2', ARRAY['wallet:read', 'bookings:write']),
('bizone-api', 'BizOne Backend', 'bzk_live_xxxxxxxxxxxx', 'encrypted_secret_3', ARRAY['orders:read', 'orders:write']);
```

### Scope Validation

```javascript
// middleware/validateScope.js
function requireScope(requiredScope) {
  return async (req, res, next) => {
    const client = req.sdkClient;

    if (!client.allowed_scopes.includes(requiredScope)) {
      await logSecurityEvent({
        event: 'insufficient_scope',
        serviceId: client.service_id,
        required: requiredScope,
        available: client.allowed_scopes
      });

      return res.status(403).json({
        success: false,
        error: {
          code: 9106,
          message: `Service '${client.service_id}' lacks scope '${requiredScope}'`,
          userMessage: 'Unauthorized operation'
        }
      });
    }

    next();
  };
}

// Usage
app.post('/api/wallet/credit',
  validateSDKSignature,
  requireScope('wallet:write'),
  creditWalletHandler
);
```

---

## 🚫 LAYER 3: DOMAIN AUTHORITY VALIDATION

### Enforce Domain Ownership

Combines with [DOMAIN_OWNERSHIP_CONTRACT.md](./DOMAIN_OWNERSHIP_CONTRACT.md)

```javascript
// middleware/enforceDomainOwnership.js
const DOMAIN_OWNERSHIP = {
  'wallet': {
    write_service: 'rabtul-wallet-service',
    allowed_via_sdk: ['rez-app', 'wasil-dinezy', 'grocify-app']
  },
  'orders': {
    write_service: 'bizone-orders',
    allowed_via_sdk: ['rez-app', 'bizone-api']
  },
  'campaigns': {
    write_service: 'adzy-engine',
    allowed_via_sdk: [] // No direct app access
  }
};

function enforceDomainOwnership(domain, operation) {
  return async (req, res, next) => {
    const serviceId = req.serviceId;
    const ownershipRules = DOMAIN_OWNERSHIP[domain];

    if (!ownershipRules) {
      return res.status(500).json({
        error: { code: 9999, message: `Domain '${domain}' not defined` }
      });
    }

    if (operation === 'write') {
      // Check if service is authorized writer
      const isDirectOwner = serviceId === ownershipRules.write_service;
      const isAllowedSDK = ownershipRules.allowed_via_sdk.includes(serviceId);

      if (!isDirectOwner && !isAllowedSDK) {
        await logSecurityEvent({
          event: 'unauthorized_domain_write',
          domain,
          serviceId,
          allowedServices: [
            ownershipRules.write_service,
            ...ownershipRules.allowed_via_sdk
          ]
        });

        return res.status(403).json({
          success: false,
          error: {
            code: 9107,
            message: `Service '${serviceId}' cannot write to domain '${domain}'`,
            userMessage: 'Unauthorized operation'
          }
        });
      }
    }

    next();
  };
}

// Usage
app.post('/api/wallet/credit',
  validateSDKSignature,
  enforceDomainOwnership('wallet', 'write'),
  creditWalletHandler
);
```

---

## 📦 SDK VERSION MANAGEMENT

### Versioning Policy

```javascript
// SDK Versioning Rules
const SDK_VERSIONS = {
  current: '1.2.0',
  minimum: '1.0.0', // Oldest version still supported
  deprecated: ['0.9.x'], // Warn users to upgrade
  sunset: ['0.8.x'], // Block requests
};

function isVersionCompatible(clientVersion, minVersion) {
  const clientParts = clientVersion.split('.').map(Number);
  const minParts = minVersion.split('.').map(Number);

  for (let i = 0; i < 3; i++) {
    if (clientParts[i] > minParts[i]) return true;
    if (clientParts[i] < minParts[i]) return false;
  }

  return true; // Equal versions
}

// Middleware to enforce version
async function enforceSDKVersion(req, res, next) {
  const clientVersion = req.headers['x-sdk-version'];

  // Check sunset versions (BLOCK)
  if (SDK_VERSIONS.sunset.some(v => clientVersion.startsWith(v.replace('.x', '')))) {
    return res.status(426).json({
      success: false,
      error: {
        code: 9108,
        message: `SDK version ${clientVersion} is no longer supported`,
        userMessage: 'Your app version is outdated. Please update from the App Store.',
        action: 'FORCE_UPDATE',
        updateURL: 'https://play.google.com/store/apps/details?id=com.rtmn.rez'
      }
    });
  }

  // Check deprecated versions (WARN)
  if (SDK_VERSIONS.deprecated.some(v => clientVersion.startsWith(v.replace('.x', '')))) {
    // Log deprecation warning
    await logDeprecationWarning({
      serviceId: req.serviceId,
      version: clientVersion,
      endpoint: req.path
    });

    // Add warning header
    res.setHeader('X-SDK-Deprecation-Warning', 'true');
  }

  // Check minimum version
  if (!isVersionCompatible(clientVersion, SDK_VERSIONS.minimum)) {
    return res.status(426).json({
      success: false,
      error: {
        code: 9109,
        message: `SDK version ${clientVersion} is below minimum ${SDK_VERSIONS.minimum}`,
        userMessage: 'Please update your app',
        action: 'UPDATE_RECOMMENDED'
      }
    });
  }

  next();
}
```

### SDK Update Notification

```javascript
// Push notification to users on outdated SDK
async function notifySDKUpdateRequired(userId, currentVersion) {
  await fcm.send({
    userId,
    notification: {
      title: 'Update Available',
      body: 'A new version of ReZ is available with exciting features!',
      icon: 'ic_update',
      color: '#FF5722'
    },
    data: {
      type: 'sdk_update_required',
      currentVersion,
      latestVersion: SDK_VERSIONS.current,
      updateURL: 'https://play.google.com/store/apps/details?id=com.rtmn.rez'
    }
  });
}
```

---

## 🚨 WHAT HAPPENS WHEN APPS BYPASS SDK?

### Detection Mechanisms

```javascript
// 1. Missing SDK headers
if (!req.headers['x-sdk-signature']) {
  await logSecurityEvent({
    event: 'sdk_bypass_attempt',
    method: req.method,
    path: req.path,
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    userId: req.user?.id
  });

  return res.status(403).json({
    success: false,
    error: {
      code: 9110,
      message: 'Direct API access not allowed',
      userMessage: 'Please use the official app'
    }
  });
}

// 2. Invalid signature
if (signature !== expectedSignature) {
  // Fraudulent attempt - could be:
  // - Developer trying to bypass SDK
  // - Hacked app
  // - Man-in-the-middle attack

  await logSecurityEvent({
    event: 'invalid_signature',
    severity: 'HIGH',
    serviceId: req.headers['x-sdk-service-id'],
    ip: req.ip,
    endpoint: req.path,
    payload: req.body
  });

  // Block user if repeated attempts
  const attemptKey = `bypass:${req.ip}`;
  const attempts = await redis.incr(attemptKey);
  await redis.expire(attemptKey, 3600); // 1 hour

  if (attempts > 5) {
    // Block IP
    await redis.setex(`blocked:${req.ip}`, 86400, '1');

    // Alert security team
    await alertSecurityTeam({
      event: 'repeated_sdk_bypass',
      ip: req.ip,
      attempts,
      details: req.body
    });
  }

  return res.status(403).json({
    success: false,
    error: {
      code: 9104,
      message: 'Invalid signature',
      userMessage: 'Security check failed'
    }
  });
}
```

### Consequences of Bypass

| Attempt Type | Detection | Response | Example |
|--------------|-----------|----------|---------|
| **Missing SDK headers** | Immediate | 403 Forbidden | Direct curl to API |
| **Invalid signature** | Immediate | 403 + Security log | Tampered request |
| **Repeated attempts** | After 5 attempts | IP blocked for 24h | Hacking attempt |
| **Fraudulent data** | Anomaly detection | Account suspended | Crediting fake coins |
| **Automated bot** | Rate limiting | CAPTCHA required | Scraping data |

---

## 🔐 SDK SECRET MANAGEMENT

### Environment-Based Secrets

```bash
# .env (Backend - NEVER commit)
SDK_CLIENT_REZ_APP_SECRET=prod_secret_xxxxxxxxxx
SDK_CLIENT_WASIL_SECRET=prod_secret_yyyyyyyyyy
SDK_CLIENT_BIZONE_SECRET=prod_secret_zzzzzzzzzz

# Rotate every 90 days
SDK_SECRET_ROTATION_DATE=2026-04-01
```

### Secret Rotation

```javascript
// cron/rotate-sdk-secrets.js
async function rotateSDKSecrets() {
  const clients = await db.sdk_clients.findAll({
    where: {
      last_secret_rotation: {
        [Op.lt]: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) // 90 days
      }
    }
  });

  for (const client of clients) {
    const newSecret = crypto.randomBytes(64).toString('hex');

    // Update database
    await client.update({
      api_secret_old: client.api_secret, // Keep old for grace period
      api_secret: newSecret,
      last_secret_rotation: new Date()
    });

    // Notify service owner
    await notifyServiceOwner({
      serviceId: client.service_id,
      message: `SDK secret rotated. Update your .env within 7 days.`,
      newSecret, // Sent via secure channel
      gracePeriodEnds: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    });
  }
}

// Run monthly
cron.schedule('0 0 1 * *', rotateSDKSecrets);
```

### Grace Period Validation

```javascript
// Allow both old and new secret during grace period
async function validateSignature(req, signature) {
  const client = req.sdkClient;

  // Try current secret
  const validWithCurrent = verifySignature(req, client.api_secret, signature);
  if (validWithCurrent) return true;

  // Try old secret (grace period)
  if (client.api_secret_old) {
    const gracePeriodActive = Date.now() - client.last_secret_rotation.getTime() < 7 * 24 * 60 * 60 * 1000;

    if (gracePeriodActive) {
      const validWithOld = verifySignature(req, client.api_secret_old, signature);
      if (validWithOld) {
        // Warn to update
        res.setHeader('X-SDK-Secret-Outdated', 'true');
        return true;
      }
    }
  }

  return false;
}
```

---

## 📊 MONITORING & ALERTS

### SDK Usage Metrics

```javascript
// Track SDK usage
async function trackSDKUsage(req) {
  const key = `sdk:usage:${req.serviceId}:${req.path}`;
  await redis.incr(key);
  await redis.expire(key, 86400); // 24 hours

  // Real-time dashboard
  await influxDB.write({
    measurement: 'sdk_requests',
    tags: {
      service_id: req.serviceId,
      endpoint: req.path,
      version: req.headers['x-sdk-version']
    },
    fields: {
      count: 1,
      latency: req.responseTime
    }
  });
}
```

### Security Alerts

```javascript
// Alert on suspicious activity
async function alertSecurityTeam(event) {
  // Slack notification
  await slack.send({
    channel: '#security-alerts',
    text: `🚨 Security Event: ${event.event}`,
    attachments: [{
      color: 'danger',
      fields: [
        { title: 'IP', value: event.ip, short: true },
        { title: 'Service', value: event.serviceId, short: true },
        { title: 'Details', value: JSON.stringify(event.details, null, 2) }
      ]
    }]
  });

  // Email to security team
  await sendEmail({
    to: 'security@rtmn.in',
    subject: `Security Alert: ${event.event}`,
    body: JSON.stringify(event, null, 2)
  });
}
```

---

## ✅ ENFORCEMENT CHECKLIST

Before any API goes live:

- [ ] SDK signature validation enabled?
- [ ] Service-to-service auth configured?
- [ ] Domain ownership enforced?
- [ ] SDK version check implemented?
- [ ] Rate limiting per SDK client?
- [ ] Security logging enabled?
- [ ] IP blocking for abuse?
- [ ] Secret rotation scheduled?
- [ ] Monitoring dashboard configured?
- [ ] Alerts for bypass attempts?

**If ANY checkbox unchecked → API is VULNERABLE**

---

## 🎯 SUMMARY

### What We Enforce

1. **SDK Signature Required** - All requests must be signed by official SDK
2. **Service-to-Service Auth** - Only registered SDK clients allowed
3. **Domain Authority** - Services can only write to owned domains
4. **Version Control** - Outdated SDK versions blocked
5. **Secret Rotation** - Credentials rotated every 90 days
6. **Abuse Detection** - IP blocking, anomaly detection, alerts

### What Developers Cannot Do

```javascript
// ❌ BLOCKED - Direct API call (no SDK signature)
fetch('https://api.rtmn.in/wallet/credit', { ... });

// ❌ BLOCKED - Bypassing SDK with fake signature
const fakeSignature = 'abc123';

// ❌ BLOCKED - Using expired SDK credentials
const oldApiKey = 'rzk_test_old_key';

// ❌ BLOCKED - Writing to unauthorized domain
// (rez-app cannot write to 'campaigns' domain)
```

### What Developers Must Do

```javascript
// ✅ CORRECT - Use official SDK
import { WalletSDK } from '@rabtul/wallet-sdk';

const wallet = new WalletSDK({
  serviceId: 'rez-app',
  apiKey: process.env.RABTUL_API_KEY,
  apiSecret: process.env.RABTUL_API_SECRET
});

await wallet.credit({ ... });
```

---

**Status:** ✅ ENFORCED AT RUNTIME
**Security Level:** High (3-layer defense)
**Last Updated:** 2026-01-03

