# 🚦 API Rate Limiting & Throttling Rules - RTMN Ecosystem

**Last Updated:** 2026-01-04
**Status:** ✅ RATE LIMITS DEFINED
**Purpose:** Prevent abuse, ensure fair usage, and protect infrastructure from overload

---

## ⚠️ THE RATE LIMITING PROBLEM

**Scenario:**
- User makes 10,000 API calls in 1 minute
- Merchant script queries products every second
- Malicious actor attempts credential stuffing

**Question:** How do we prevent abuse without blocking legitimate users?

**This document provides the DEFINITIVE answer.**

---

## 🎯 RATE LIMITING STRATEGY

### Three-Layer Defense

```javascript
// Layer 1: IP-based rate limiting (Nginx)
// Layer 2: User-based rate limiting (Application)
// Layer 3: Endpoint-specific throttling (Business logic)

const rateLimitingLayers = {
  layer_1_nginx: {
    purpose: 'Prevent DDoS and brute force attacks',
    scope: 'All incoming requests',
    limit: '1000 requests/minute per IP',
    action: 'Return 429 Too Many Requests'
  },

  layer_2_application: {
    purpose: 'Fair usage per user account',
    scope: 'Authenticated requests',
    limit: 'Varies by user tier (Basic, Silver, Gold, Prive)',
    action: 'Return 429 with Retry-After header'
  },

  layer_3_endpoint: {
    purpose: 'Protect expensive operations',
    scope: 'Specific endpoints (search, payment, etc.)',
    limit: 'Varies by endpoint criticality',
    action: 'Queue request or reject with backoff'
  }
};
```

---

## 📊 RATE LIMIT TIERS

### Tier 1: Anonymous Users (No Authentication)

**Use Case:** Browsing products, viewing restaurant menus, reading reviews

```javascript
const ANONYMOUS_RATE_LIMITS = {
  // Global limit per IP
  global: {
    requests: 100,
    window: '1 minute',
    burst: 150  // Allow brief spikes
  },

  // Endpoint-specific limits
  endpoints: {
    'GET /api/v1/products': {
      requests: 50,
      window: '1 minute',
      reason: 'Search and browse'
    },

    'GET /api/v1/restaurants': {
      requests: 50,
      window: '1 minute',
      reason: 'Restaurant discovery'
    },

    'POST /api/v1/auth/send-otp': {
      requests: 5,
      window: '15 minutes',
      reason: 'Prevent OTP spam'
    },

    'POST /api/v1/auth/verify-otp': {
      requests: 10,
      window: '15 minutes',
      reason: 'Allow retries for typos'
    }
  }
};

// Implementation
const rateLimit = require('express-rate-limit');

const anonymousLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100,
  message: {
    error: 'TOO_MANY_REQUESTS',
    message: 'Too many requests from this IP, please try again later.',
    retry_after: 60 // seconds
  },
  standardHeaders: true, // Return RateLimit-* headers
  legacyHeaders: false
});

app.use('/api/v1/', anonymousLimiter);
```

---

### Tier 2: Basic Users (Free Tier)

**Use Case:** Regular users with free account

```javascript
const BASIC_USER_RATE_LIMITS = {
  // Global limit per user
  global: {
    requests: 200,
    window: '1 minute',
    burst: 300
  },

  // Endpoint-specific limits
  endpoints: {
    'GET /api/v1/products': {
      requests: 100,
      window: '1 minute'
    },

    'POST /api/v1/orders': {
      requests: 10,
      window: '1 minute',
      reason: 'Prevent accidental duplicate orders'
    },

    'POST /api/v1/payments/initiate': {
      requests: 5,
      window: '5 minutes',
      reason: 'Financial operation protection'
    },

    'GET /api/v1/wallet/balance': {
      requests: 50,
      window: '1 minute'
    },

    'POST /api/v1/reviews': {
      requests: 5,
      window: '1 hour',
      reason: 'Prevent review spam'
    }
  }
};
```

---

### Tier 3: Premium Users (Silver, Gold, Prive)

**Use Case:** Paid users with premium features

```javascript
const PREMIUM_USER_RATE_LIMITS = {
  // Silver tier
  silver: {
    global: {
      requests: 500,
      window: '1 minute',
      burst: 750
    }
  },

  // Gold tier
  gold: {
    global: {
      requests: 1000,
      window: '1 minute',
      burst: 1500
    }
  },

  // Prive tier (highest)
  prive: {
    global: {
      requests: 2000,
      window: '1 minute',
      burst: 3000
    },
    // Prive users get priority queue (no throttling on checkout)
    priority_endpoints: [
      'POST /api/v1/payments/initiate',
      'POST /api/v1/orders'
    ]
  }
};

// Implementation: Tier-based rate limiting
async function getUserRateLimit(userId) {
  const user = await db.users.findByPk(userId);
  const tier = user.loyalty_tier; // 'basic', 'silver', 'gold', 'prive'

  const limits = {
    basic: 200,
    silver: 500,
    gold: 1000,
    prive: 2000
  };

  return limits[tier] || 200; // Default to basic
}

// Middleware
async function userRateLimiter(req, res, next) {
  const userId = req.user.id;
  const key = `rate_limit:user:${userId}`;

  const current = await redis.incr(key);

  if (current === 1) {
    await redis.expire(key, 60); // 1 minute window
  }

  const maxRequests = await getUserRateLimit(userId);

  if (current > maxRequests) {
    const ttl = await redis.ttl(key);

    return res.status(429).json({
      error: 'RATE_LIMIT_EXCEEDED',
      message: `You have exceeded your rate limit (${maxRequests} requests/minute)`,
      retry_after: ttl,
      current_tier: req.user.loyalty_tier,
      upgrade_url: '/api/v1/subscriptions/upgrade'
    });
  }

  res.setHeader('X-RateLimit-Limit', maxRequests);
  res.setHeader('X-RateLimit-Remaining', maxRequests - current);
  res.setHeader('X-RateLimit-Reset', Date.now() + (await redis.ttl(key)) * 1000);

  next();
}
```

---

### Tier 4: Merchant APIs (BizOne, BizOS)

**Use Case:** Merchant dashboard, bulk operations

```javascript
const MERCHANT_RATE_LIMITS = {
  // Standard merchant
  standard: {
    global: {
      requests: 1000,
      window: '1 minute'
    },

    endpoints: {
      'GET /api/v1/merchant/orders': {
        requests: 200,
        window: '1 minute'
      },

      'POST /api/v1/merchant/products/bulk-upload': {
        requests: 10,
        window: '1 hour',
        reason: 'Expensive bulk operation'
      },

      'PUT /api/v1/merchant/products/:id': {
        requests: 100,
        window: '1 minute'
      },

      'POST /api/v1/merchant/campaigns': {
        requests: 20,
        window: '1 hour',
        reason: 'Campaign creation is expensive'
      }
    }
  },

  // Enterprise merchant (whitelisted)
  enterprise: {
    global: {
      requests: 5000,
      window: '1 minute'
    },
    whitelisted_ips: ['52.66.xx.xx', '13.127.xx.xx'], // Merchant server IPs
    no_throttling: true
  }
};
```

---

### Tier 5: Internal Services (Rabtul SDKs)

**Use Case:** Service-to-service communication

```javascript
const INTERNAL_SERVICE_RATE_LIMITS = {
  // Internal services have higher limits
  rabtul_auth_sdk: {
    requests: 10000,
    window: '1 minute',
    authentication: 'API_KEY + Request Signing'
  },

  rabtul_wallet_sdk: {
    requests: 10000,
    window: '1 minute',
    authentication: 'API_KEY + Request Signing'
  },

  // No rate limiting for critical internal services
  whitelisted_services: [
    'rabtul-auth',
    'rabtul-wallet',
    'rabtul-ledger'
  ]
};

// Implementation: Service authentication
function internalServiceAuth(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  const signature = req.headers['x-signature'];

  // Verify signature (from SDK_BOUNDARY_ENFORCEMENT.md)
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RABTUL_API_SECRET)
    .update(JSON.stringify(req.body))
    .digest('hex');

  if (signature !== expectedSignature) {
    return res.status(401).json({ error: 'INVALID_SIGNATURE' });
  }

  // Whitelisted services bypass rate limiting
  const service = req.headers['x-service-name'];
  if (INTERNAL_SERVICE_RATE_LIMITS.whitelisted_services.includes(service)) {
    req.rateLimit = { bypass: true };
    return next();
  }

  next();
}
```

---

## 🚨 ENDPOINT-SPECIFIC LIMITS

### High-Risk Endpoints (Financial, Security)

```javascript
const HIGH_RISK_ENDPOINTS = {
  // Payment initiation
  'POST /api/v1/payments/initiate': {
    anonymous: 0,        // Not allowed
    basic: 5,            // 5 per 5 minutes
    premium: 10,         // 10 per 5 minutes
    window: '5 minutes',
    cooldown: 10,        // 10 seconds between requests
    reason: 'Prevent payment fraud'
  },

  // OTP sending
  'POST /api/v1/auth/send-otp': {
    anonymous: 5,        // 5 per 15 minutes per IP
    basic: 5,            // Same (prevent OTP spam)
    premium: 5,          // Even premium users limited
    window: '15 minutes',
    cooldown: 60,        // 1 minute between OTP requests
    reason: 'Prevent SMS abuse ($0.05 per SMS)'
  },

  // Password reset
  'POST /api/v1/auth/reset-password': {
    anonymous: 3,
    basic: 3,
    premium: 3,
    window: '1 hour',
    cooldown: 300,       // 5 minutes between requests
    reason: 'Security: prevent account takeover attempts'
  },

  // Wallet withdrawal
  'POST /api/v1/wallet/withdraw': {
    anonymous: 0,
    basic: 3,
    premium: 10,
    window: '1 hour',
    cooldown: 600,       // 10 minutes between withdrawals
    reason: 'Financial operation, fraud prevention'
  }
};

// Implementation: Cooldown period
async function cooldownMiddleware(endpoint, cooldownSeconds) {
  return async (req, res, next) => {
    const userId = req.user?.id || req.ip;
    const key = `cooldown:${endpoint}:${userId}`;

    const lastRequest = await redis.get(key);

    if (lastRequest) {
      const elapsed = Date.now() - parseInt(lastRequest);
      const remaining = (cooldownSeconds * 1000) - elapsed;

      if (remaining > 0) {
        return res.status(429).json({
          error: 'COOLDOWN_ACTIVE',
          message: `Please wait ${Math.ceil(remaining / 1000)} seconds before trying again`,
          retry_after: Math.ceil(remaining / 1000)
        });
      }
    }

    await redis.setex(key, cooldownSeconds, Date.now().toString());
    next();
  };
}

// Usage
app.post(
  '/api/v1/payments/initiate',
  authMiddleware,
  cooldownMiddleware('payments/initiate', 10),
  paymentsController.initiate
);
```

---

### Expensive Endpoints (Search, Analytics)

```javascript
const EXPENSIVE_ENDPOINTS = {
  // Product search (Elasticsearch query)
  'GET /api/v1/products/search': {
    anonymous: 20,
    basic: 50,
    premium: 100,
    window: '1 minute',
    reason: 'Elasticsearch queries are expensive'
  },

  // Advanced filtering
  'POST /api/v1/products/filter': {
    anonymous: 10,
    basic: 30,
    premium: 60,
    window: '1 minute',
    reason: 'Complex database queries'
  },

  // Analytics dashboard
  'GET /api/v1/merchant/analytics': {
    merchant: 20,
    window: '1 minute',
    cache_ttl: 300,      // Cache for 5 minutes
    reason: 'Heavy aggregation queries'
  },

  // Bulk export
  'POST /api/v1/merchant/orders/export': {
    merchant: 5,
    window: '1 hour',
    max_records: 10000,  // Limit export size
    reason: 'CSV generation is CPU-intensive'
  }
};

// Implementation: Query complexity throttling
async function queryComplexityThrottling(req, res, next) {
  const filters = req.body.filters || {};

  // Calculate complexity score
  let complexity = 0;
  complexity += Object.keys(filters).length * 10;  // 10 points per filter
  complexity += filters.search ? 50 : 0;           // 50 points for text search
  complexity += filters.sort ? 20 : 0;             // 20 points for sorting
  complexity += filters.limit > 100 ? 30 : 0;      // 30 points for large result sets

  const maxComplexity = req.user.loyalty_tier === 'prive' ? 200 : 100;

  if (complexity > maxComplexity) {
    return res.status(400).json({
      error: 'QUERY_TOO_COMPLEX',
      message: 'Your query is too complex. Please simplify filters.',
      complexity_score: complexity,
      max_allowed: maxComplexity,
      suggestion: 'Remove some filters or reduce result limit'
    });
  }

  next();
}
```

---

## 🔄 THROTTLING STRATEGIES

### Strategy 1: Token Bucket Algorithm

**Use Case:** Allow bursts but maintain average rate

```javascript
class TokenBucket {
  constructor(capacity, refillRate) {
    this.capacity = capacity;        // Max tokens
    this.tokens = capacity;          // Current tokens
    this.refillRate = refillRate;    // Tokens per second
    this.lastRefill = Date.now();
  }

  async consume(tokens = 1) {
    this.refill();

    if (this.tokens >= tokens) {
      this.tokens -= tokens;
      return true;
    }

    return false; // Rate limit exceeded
  }

  refill() {
    const now = Date.now();
    const elapsed = (now - this.lastRefill) / 1000; // seconds
    const tokensToAdd = elapsed * this.refillRate;

    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
    this.lastRefill = now;
  }

  async getWaitTime(tokens = 1) {
    this.refill();

    if (this.tokens >= tokens) {
      return 0;
    }

    const deficit = tokens - this.tokens;
    return Math.ceil(deficit / this.refillRate); // seconds
  }
}

// Usage
const userBuckets = new Map();

async function tokenBucketMiddleware(req, res, next) {
  const userId = req.user.id;

  if (!userBuckets.has(userId)) {
    // 100 requests capacity, refill 2 tokens/second (120 per minute)
    userBuckets.set(userId, new TokenBucket(100, 2));
  }

  const bucket = userBuckets.get(userId);
  const allowed = await bucket.consume(1);

  if (!allowed) {
    const waitTime = await bucket.getWaitTime(1);

    return res.status(429).json({
      error: 'RATE_LIMIT_EXCEEDED',
      message: 'Too many requests',
      retry_after: waitTime
    });
  }

  next();
}
```

---

### Strategy 2: Leaky Bucket Algorithm

**Use Case:** Smooth out traffic spikes

```javascript
class LeakyBucket {
  constructor(capacity, leakRate) {
    this.capacity = capacity;        // Max queue size
    this.queue = [];                 // Request queue
    this.leakRate = leakRate;        // Requests per second
    this.processing = false;
  }

  async add(request) {
    if (this.queue.length >= this.capacity) {
      throw new Error('QUEUE_FULL');
    }

    this.queue.push(request);

    if (!this.processing) {
      this.startLeaking();
    }
  }

  async startLeaking() {
    this.processing = true;

    while (this.queue.length > 0) {
      const request = this.queue.shift();
      await this.processRequest(request);

      // Wait before processing next (leak rate)
      await new Promise(resolve =>
        setTimeout(resolve, 1000 / this.leakRate)
      );
    }

    this.processing = false;
  }

  async processRequest(request) {
    // Execute the actual request
    request.execute();
  }
}

// Usage for expensive operations
const searchBucket = new LeakyBucket(50, 10); // 50 capacity, 10 req/sec

async function leakyBucketMiddleware(req, res, next) {
  const requestWrapper = {
    execute: () => next()
  };

  try {
    await searchBucket.add(requestWrapper);
  } catch (error) {
    return res.status(429).json({
      error: 'QUEUE_FULL',
      message: 'Search service is busy. Please try again later.',
      retry_after: 30
    });
  }
}
```

---

### Strategy 3: Sliding Window Log

**Use Case:** Precise rate limiting without burst allowance

```javascript
class SlidingWindowLog {
  constructor(limit, windowMs) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.logs = new Map(); // userId -> [timestamps]
  }

  async isAllowed(userId) {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    // Get user's request log
    let timestamps = this.logs.get(userId) || [];

    // Remove requests outside window
    timestamps = timestamps.filter(ts => ts > windowStart);

    if (timestamps.length >= this.limit) {
      return {
        allowed: false,
        retryAfter: Math.ceil((timestamps[0] - windowStart) / 1000)
      };
    }

    // Add current request
    timestamps.push(now);
    this.logs.set(userId, timestamps);

    return { allowed: true };
  }
}

// Usage
const slidingWindow = new SlidingWindowLog(100, 60000); // 100 req/min

async function slidingWindowMiddleware(req, res, next) {
  const userId = req.user.id;
  const result = await slidingWindow.isAllowed(userId);

  if (!result.allowed) {
    return res.status(429).json({
      error: 'RATE_LIMIT_EXCEEDED',
      retry_after: result.retryAfter
    });
  }

  next();
}
```

---

## 📊 RATE LIMIT HEADERS (RFC 6585)

```javascript
// Standard RateLimit headers
function setRateLimitHeaders(res, limit, remaining, reset) {
  // RateLimit-* headers (draft standard)
  res.setHeader('RateLimit-Limit', limit);
  res.setHeader('RateLimit-Remaining', remaining);
  res.setHeader('RateLimit-Reset', reset);

  // Legacy X-RateLimit-* headers (for backward compatibility)
  res.setHeader('X-RateLimit-Limit', limit);
  res.setHeader('X-RateLimit-Remaining', remaining);
  res.setHeader('X-RateLimit-Reset', reset);

  // When rate limit exceeded
  if (remaining === 0) {
    res.setHeader('Retry-After', Math.ceil((reset - Date.now()) / 1000));
  }
}

// Example response headers
/*
HTTP/1.1 200 OK
RateLimit-Limit: 100
RateLimit-Remaining: 87
RateLimit-Reset: 1704448920000

HTTP/1.1 429 Too Many Requests
RateLimit-Limit: 100
RateLimit-Remaining: 0
RateLimit-Reset: 1704448920000
Retry-After: 45
*/
```

---

## 🚨 ABUSE DETECTION & BLOCKING

### Pattern-Based Abuse Detection

```javascript
class AbuseDetector {
  constructor() {
    this.patterns = {
      // Credential stuffing detection
      failed_login_attempts: {
        threshold: 10,
        window: 300000, // 5 minutes
        action: 'BLOCK_IP',
        duration: 3600000 // 1 hour
      },

      // Scraping detection
      rapid_pagination: {
        threshold: 50,
        window: 60000, // 1 minute
        pattern: 'GET /api/v1/products?page=*',
        action: 'CAPTCHA_REQUIRED'
      },

      // API key leakage detection
      multiple_ips_same_key: {
        threshold: 5,
        window: 3600000, // 1 hour
        action: 'REVOKE_API_KEY'
      }
    };
  }

  async detect(userId, ip, endpoint, apiKey) {
    // Credential stuffing detection
    const failedLogins = await this.getFailedLogins(ip);
    if (failedLogins >= 10) {
      await this.blockIP(ip, 3600000);
      await this.notifySecurityTeam('CREDENTIAL_STUFFING', { ip, attempts: failedLogins });
    }

    // Scraping detection
    const paginationRequests = await this.getPaginationRequests(userId);
    if (paginationRequests >= 50) {
      await this.requireCaptcha(userId);
    }

    // API key leakage detection
    const uniqueIPs = await this.getUniqueIPsForAPIKey(apiKey);
    if (uniqueIPs.length >= 5) {
      await this.revokeAPIKey(apiKey);
      await this.notifyMerchant(apiKey, 'API_KEY_COMPROMISED');
    }
  }

  async blockIP(ip, duration) {
    await redis.setex(`blocked_ip:${ip}`, duration / 1000, 'true');
  }

  async requireCaptcha(userId) {
    await redis.setex(`captcha_required:${userId}`, 3600, 'true');
  }

  async revokeAPIKey(apiKey) {
    await db.api_keys.update(
      { status: 'revoked', revoked_at: new Date() },
      { where: { key: apiKey } }
    );
  }
}

// Middleware
const abuseDetector = new AbuseDetector();

async function abuseDetectionMiddleware(req, res, next) {
  const userId = req.user?.id;
  const ip = req.ip;
  const endpoint = req.path;
  const apiKey = req.headers['x-api-key'];

  // Check if IP is blocked
  const isBlocked = await redis.get(`blocked_ip:${ip}`);
  if (isBlocked) {
    return res.status(403).json({
      error: 'IP_BLOCKED',
      message: 'Your IP has been temporarily blocked due to suspicious activity',
      contact: 'security@rtmn.digital'
    });
  }

  // Check if captcha required
  if (userId) {
    const captchaRequired = await redis.get(`captcha_required:${userId}`);
    if (captchaRequired && !req.body.captcha_token) {
      return res.status(403).json({
        error: 'CAPTCHA_REQUIRED',
        message: 'Please complete the captcha to continue'
      });
    }
  }

  // Run abuse detection (async, non-blocking)
  abuseDetector.detect(userId, ip, endpoint, apiKey).catch(console.error);

  next();
}
```

---

## 📈 RATE LIMIT MONITORING & ALERTING

```javascript
// Metrics collection
class RateLimitMetrics {
  async recordRequest(userId, endpoint, allowed) {
    const metric = {
      user_id: userId,
      endpoint,
      allowed,
      timestamp: new Date()
    };

    // Store in Elasticsearch for analytics
    await elasticsearch.index({
      index: 'rate-limit-metrics',
      body: metric
    });

    // Increment counters
    const key = `metrics:rate_limit:${endpoint}:${allowed ? 'allowed' : 'rejected'}`;
    await redis.incr(key);
  }

  async getTopRateLimitedUsers(limit = 10) {
    // Query Elasticsearch for users hitting rate limits most
    const result = await elasticsearch.search({
      index: 'rate-limit-metrics',
      body: {
        query: {
          bool: {
            must: [
              { term: { allowed: false } },
              { range: { timestamp: { gte: 'now-1h' } } }
            ]
          }
        },
        aggs: {
          top_users: {
            terms: { field: 'user_id', size: limit }
          }
        }
      }
    });

    return result.aggregations.top_users.buckets;
  }

  async getEndpointRateLimitStats(endpoint) {
    const allowed = await redis.get(`metrics:rate_limit:${endpoint}:allowed`) || 0;
    const rejected = await redis.get(`metrics:rate_limit:${endpoint}:rejected`) || 0;

    return {
      endpoint,
      allowed: parseInt(allowed),
      rejected: parseInt(rejected),
      rejection_rate: rejected / (allowed + rejected) * 100
    };
  }
}

// Alerting
class RateLimitAlerting {
  async checkAlerts() {
    const metrics = new RateLimitMetrics();

    // Alert 1: High rejection rate
    const endpoints = ['/api/v1/products/search', '/api/v1/payments/initiate'];
    for (const endpoint of endpoints) {
      const stats = await metrics.getEndpointRateLimitStats(endpoint);

      if (stats.rejection_rate > 20) { // 20% rejection rate
        await this.sendAlert({
          severity: 'WARNING',
          message: `High rate limit rejection rate for ${endpoint}: ${stats.rejection_rate.toFixed(2)}%`,
          action: 'Consider increasing rate limits or investigating abuse'
        });
      }
    }

    // Alert 2: Repeated rate limit violations
    const topUsers = await metrics.getTopRateLimitedUsers(10);
    for (const user of topUsers) {
      if (user.doc_count > 100) { // 100+ rejections in 1 hour
        await this.sendAlert({
          severity: 'HIGH',
          message: `User ${user.key} exceeded rate limit ${user.doc_count} times in the last hour`,
          action: 'Investigate potential abuse or bot activity'
        });
      }
    }
  }

  async sendAlert(alert) {
    // Send to monitoring system (e.g., PagerDuty, Slack)
    console.error('[RATE_LIMIT_ALERT]', alert);

    // Store in database for audit trail
    await db.alerts.create({
      type: 'RATE_LIMIT',
      severity: alert.severity,
      message: alert.message,
      action: alert.action,
      created_at: new Date()
    });
  }
}

// Run alerting every 5 minutes
setInterval(() => {
  const alerting = new RateLimitAlerting();
  alerting.checkAlerts().catch(console.error);
}, 5 * 60 * 1000);
```

---

## 🎯 RATE LIMIT SUMMARY

### Rate Limits by User Tier

| User Tier | Global Limit | Payment Limit | Search Limit | OTP Limit |
|-----------|--------------|---------------|--------------|-----------|
| **Anonymous** | 100/min | ❌ Not allowed | 20/min | 5/15min |
| **Basic** | 200/min | 5/5min | 50/min | 5/15min |
| **Silver** | 500/min | 10/5min | 100/min | 5/15min |
| **Gold** | 1000/min | 10/5min | 100/min | 5/15min |
| **Prive** | 2000/min | No limit* | 100/min | 5/15min |
| **Merchant** | 1000/min | N/A | 50/min | N/A |
| **Enterprise** | 5000/min | N/A | 200/min | N/A |

*Prive users bypass payment cooldown but still have rate limit

### Rate Limiting Algorithms

| Algorithm | Use Case | Pros | Cons |
|-----------|----------|------|------|
| **Token Bucket** | General API rate limiting | Allows bursts, smooth average | Complex implementation |
| **Leaky Bucket** | Expensive operations (search) | Smooths traffic spikes | May delay legitimate requests |
| **Sliding Window** | Precise limiting | No burst allowance, accurate | Higher memory usage |
| **Fixed Window** | Simple use cases | Easy to implement | Burst at window boundaries |

### Key Principles

1. **Layer Defense** - IP (Nginx) → User (App) → Endpoint (Business logic)
2. **Tier-Based Limits** - Higher tiers = higher limits (incentivize upgrades)
3. **Cooldown Periods** - Financial operations require waiting between requests
4. **Abuse Detection** - Pattern-based detection with automatic blocking
5. **Graceful Degradation** - Return clear error messages with retry instructions

---

**Status:** ✅ RATE LIMITS DEFINED
**Default Algorithm:** Token Bucket (allows bursts, maintains average)
**Last Updated:** 2026-01-04
