# 🔒 Domain Ownership Contract - RTMN Ecosystem

**Last Updated:** 2026-01-03
**Status:** ✅ BINDING CONTRACT - MACHINE-ENFORCEABLE
**Purpose:** Explicit read/write/forbidden boundaries for all domains

---

## ⚠️ CRITICAL: THIS IS A BINDING CONTRACT

**Every domain listed below has:**
- **ONE Write Owner** (exclusive authority to mutate)
- **Specified Read Clients** (who can consume)
- **Enforcement Mechanism** (how violations are blocked)

**Violations of this contract:**
- ❌ Will cause data corruption
- ❌ Will break settlements
- ❌ Will fail audits
- ❌ Will be rejected in code review

---

## 📊 MASTER DOMAIN OWNERSHIP MATRIX

| Domain | Write Owner | Read Clients | Mutation Method | Forbidden Writers |
|--------|-------------|--------------|-----------------|-------------------|
| **Identity (Users)** | Rabtul Auth Service | All apps | `authSDK.register()` | Apps, BizOne, Adzy |
| **Wallet Ledger** | Rabtul Wallet Service | All apps | `walletSDK.credit()` | Apps, BizOne, Adzy |
| **Coin Balances** | Rabtul Wallet Service | All apps | `walletSDK.debit()` | Apps, BizOne, Adzy |
| **Coin Rules** | Rabtul (HQ-configured) | BizOne, Apps | `governanceSDK.updateRule()` | Apps, BizOne (read-only) |
| **Tier Upgrades** | Rabtul Tier Engine | Apps (display) | `tierSDK.evaluateUpgrade()` | Apps, BizOne |
| **Orders** | BizOne Order Service | Rabtul, Apps, Adzy | `bizoneSDK.createOrder()` | Apps directly |
| **Order Status** | BizOne Fulfillment | Rabtul, Apps | `bizoneSDK.updateStatus()` | Apps (read-only) |
| **Inventory** | BizOne Inventory | Wasil apps, ReZ | `bizoneSDK.updateStock()` | Apps directly |
| **Products** | BizOne Catalog | All apps | `bizoneSDK.createProduct()` | Apps, Rabtul |
| **Merchant Data** | BizOne (HQ approves) | All apps | `bizoneSDK.updateMerchant()` | Apps, Rabtul |
| **Campaigns** | Adzy Campaign Engine | ReZ, Wasil apps | `adzySDK.createCampaign()` | Apps, BizOne |
| **Offers** | BizOne (merchant) + Adzy (platform) | All apps | `offerSDK.create()` | Apps directly |
| **Settlements** | Finance Service | Rabtul, BizOne | `financeSDK.calculateSettlement()` | Apps, Merchants |
| **Audit Logs** | Rabtul Audit Service | HQ Admin only | Automatic (all services) | Manual writes |
| **Analytics Events** | All services (append) | Analytics Service | `analyticsSDK.track()` | Updates/deletes |
| **Visit Tracking** | Rabtul Engagement | Apps (display) | `engagementSDK.recordVisit()` | Apps directly |
| **Streaks** | Rabtul Engagement | Apps (display) | `engagementSDK.checkStreak()` | Apps directly |

---

## 🔐 ENFORCEMENT MECHANISMS

### 1. API Gateway Rules

```yaml
# api-gateway/rules/domain-ownership.yaml
identity:
  write_service: rabtul-auth
  allowed_methods: [POST, PUT, PATCH, DELETE]
  reject_from: [bizone-api, rez-api, adzy-api]
  error_code: 9001
  error_message: "Identity mutations must use authSDK"

wallet:
  write_service: rabtul-wallet
  allowed_methods: [POST, PUT, PATCH, DELETE]
  reject_from: [bizone-api, rez-api, adzy-api, merchant-api]
  error_code: 7007
  error_message: "Wallet mutations must use walletSDK"

orders:
  write_service: bizone-orders
  allowed_methods: [POST, PUT, PATCH, DELETE]
  reject_from: [rez-api, rabtul-api, adzy-api]
  error_code: 5008
  error_message: "Order mutations must use bizoneSDK"
```

### 2. SDK Header Signing

```javascript
// rabtul-sdk/auth.js
class RabtulSDK {
  async credit(params) {
    const signature = this.signRequest({
      service: 'rabtul-wallet',
      method: 'credit',
      timestamp: Date.now(),
      params
    });

    return axios.post('/api/wallet/credit', params, {
      headers: {
        'X-SDK-Version': '1.0.0',
        'X-SDK-Signature': signature,
        'X-Service-ID': 'rabtul-wallet'
      }
    });
  }
}

// API Gateway validates
function validateSDKRequest(req) {
  const signature = req.headers['x-sdk-signature'];
  const serviceId = req.headers['x-service-id'];

  if (!signature) {
    throw new Error('SDK signature required');
  }

  const domain = getDomainFromRoute(req.path);
  const allowedService = DOMAIN_OWNERSHIP[domain].write_service;

  if (serviceId !== allowedService) {
    throw new Error(`Domain ${domain} owned by ${allowedService}, not ${serviceId}`);
  }

  // Verify signature
  const valid = verifySignature(signature, req.body);
  if (!valid) {
    throw new Error('Invalid SDK signature');
  }
}
```

### 3. Database-Level Constraints

```sql
-- Prevent direct wallet writes
CREATE OR REPLACE FUNCTION prevent_direct_wallet_writes()
RETURNS TRIGGER AS $$
BEGIN
  IF current_setting('app.sdk_authorized', TRUE) IS NULL THEN
    RAISE EXCEPTION 'Direct wallet writes forbidden. Use walletSDK.';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER wallet_write_check
  BEFORE INSERT OR UPDATE ON wallets
  FOR EACH ROW EXECUTE FUNCTION prevent_direct_wallet_writes();

-- SDK sets flag before write
-- SET LOCAL app.sdk_authorized = 'true';
```

---

## 📋 DOMAIN-SPECIFIC CONTRACTS

### Identity Domain

**Owner:** Rabtul Auth Service

**Write Operations:**
```javascript
// ✅ ALLOWED - Via SDK
await rabtulSDK.auth.register({
  phone: '+919876543210',
  deviceInfo: {...}
});

await rabtulSDK.auth.updateProfile({
  userId,
  firstName: 'John',
  lastName: 'Doe'
});

// ❌ FORBIDDEN - Direct DB write
await db.users.update({
  first_name: 'John'
}, { where: { id: userId } });
```

**Read Operations:**
```javascript
// ✅ ALLOWED - All apps can read
const user = await rabtulSDK.auth.getUser(userId);

// ✅ ALLOWED - Apps can cache read data
redis.set(`user:${userId}`, JSON.stringify(user), 'EX', 3600);
```

---

### Wallet Domain

**Owner:** Rabtul Wallet Service

**Write Operations:**
```javascript
// ✅ ALLOWED - Credit via SDK
await rabtulSDK.wallet.credit({
  userId,
  amount: 100,
  type: 'rez_coins',
  reason: 'purchase_cashback',
  orderId, // For idempotency
  metadata: { orderAmount: 2000 }
});

// ✅ ALLOWED - Debit via SDK
await rabtulSDK.wallet.debit({
  userId,
  amount: 50,
  type: 'rez_coins',
  reason: 'redemption',
  orderId
});

// ❌ FORBIDDEN - Direct balance update
await db.wallets.update({
  rez_coins_balance: balance + 100
}, { where: { user_id: userId } });

// ❌ FORBIDDEN - Direct ledger write
await db.coins.create({
  wallet_id: walletId,
  amount: 100
});
```

**Read Operations:**
```javascript
// ✅ ALLOWED - Get balance
const balance = await rabtulSDK.wallet.getBalance(userId);

// ✅ ALLOWED - Get transaction history
const txns = await rabtulSDK.wallet.getTransactions(userId, { limit: 20 });
```

---

### Order Domain

**Owner:** BizOne Order Service

**Write Operations:**
```javascript
// ✅ ALLOWED - Create order via BizOne SDK
await bizoneSDK.orders.create({
  merchantId,
  userId,
  items: [...],
  deliveryAddressId
});

// ✅ ALLOWED - Update status via BizOne SDK
await bizoneSDK.orders.updateStatus({
  orderId,
  status: 'out_for_delivery',
  metadata: { deliveryPartnerId }
});

// ❌ FORBIDDEN - Apps creating orders directly
await db.orders.create({
  user_id: userId,
  merchant_id: merchantId,
  total: 1000
});

// ❌ FORBIDDEN - Rabtul updating order status
// Rabtul can READ orders, not write
```

**Read Operations:**
```javascript
// ✅ ALLOWED - Rabtul reads for coin calculation
const order = await bizoneSDK.orders.get(orderId);
const coinsEarned = await rabtulSDK.coins.calculateEarnings({
  orderAmount: order.total_amount,
  userId: order.user_id
});

// ✅ ALLOWED - Apps display order status
const userOrders = await bizoneSDK.orders.list({
  userId,
  status: 'delivered'
});
```

---

### Campaign Domain

**Owner:** Adzy Campaign Engine

**Write Operations:**
```javascript
// ✅ ALLOWED - Create campaign via Adzy SDK
await adzySDK.campaigns.create({
  name: 'Summer Sale 2026',
  type: 'flash_sale',
  discount: 50,
  validFrom: '2026-06-01',
  validTo: '2026-06-30',
  targetAudience: { tier: ['gold', 'prive'] }
});

// ❌ FORBIDDEN - Apps creating campaigns
await db.campaigns.create({ name: 'My Sale' });

// ❌ FORBIDDEN - BizOne creating platform campaigns
// BizOne can create merchant-specific offers only
```

**Read Operations:**
```javascript
// ✅ ALLOWED - Apps display active campaigns
const activeCampaigns = await adzySDK.campaigns.getActive({
  userId,
  location: 'Mumbai'
});
```

---

## 🚨 VIOLATION DETECTION & ALERTS

### Automated Monitoring

```javascript
// monitoring/domain-violations.js
async function detectViolations() {
  // Check for direct DB writes bypassing SDK
  const directWrites = await db.query(`
    SELECT table_name, operation, user_role
    FROM audit_logs
    WHERE operation IN ('INSERT', 'UPDATE', 'DELETE')
      AND NOT (metadata->>'sdk_authorized' = 'true')
      AND table_name IN ('wallets', 'coins', 'users', 'orders')
      AND created_at > NOW() - INTERVAL '1 hour'
  `);

  if (directWrites.length > 0) {
    alertTeam({
      severity: 'CRITICAL',
      title: 'Domain Ownership Violation Detected',
      violations: directWrites,
      action: 'Immediate review required'
    });
  }
}

// Run every 5 minutes
setInterval(detectViolations, 5 * 60 * 1000);
```

---

## 📖 DECISION TREE FOR DEVELOPERS

```
Need to mutate data?
├─ Is it user identity? → Use authSDK
├─ Is it wallet/coins? → Use walletSDK
├─ Is it orders? → Use bizoneSDK
├─ Is it campaigns? → Use adzySDK
├─ Is it products? → Use bizoneSDK
└─ Is it analytics? → Use analyticsSDK (append-only)

Need to read data?
├─ Use corresponding SDK's read methods
└─ Can cache (with TTL)

Unsure?
└─ Check this contract → Find domain → Use owner's SDK
```

---

## ✅ ENFORCEMENT CHECKLIST

Before merging any PR, verify:

- [ ] All mutations go through domain owner SDK?
- [ ] No direct `db.table.create/update/delete` calls?
- [ ] SDK headers present in requests?
- [ ] API Gateway rules enforced?
- [ ] Database triggers active?
- [ ] Monitoring alerts configured?

**If ANY checkbox fails → PR BLOCKED**

---

**Status:** ✅ BINDING CONTRACT - ENFORCED
**Violations:** Immediate rollback + incident review
**Last Updated:** 2026-01-03
