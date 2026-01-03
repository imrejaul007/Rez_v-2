# 🔒 Technical Boundaries & Hard Rules - RTMN Ecosystem

**Last Updated:** 2026-01-03
**Status:** ✅ MANDATORY - NON-NEGOTIABLE
**Purpose:** Clear technical boundaries to prevent architectural mistakes

---

## ⚠️ READ THIS FIRST

This document answers the questions:
- **What is Phase 1 vs Future?**
- **How is company data isolated?**
- **What MUST go through SDK?**
- **Who has authority to do what?**

**These are HARD RULES, not guidelines.**

---

## 1️⃣ DATA ISOLATION & COMPANY BOUNDARIES

### Database Strategy (DECLARED)

**Single Shared Database with Tenant Isolation**

```
┌─────────────────────────────────────────┐
│         PostgreSQL (Single DB)          │
├─────────────────────────────────────────┤
│  SHARED TABLES (Global)                 │
│  - users (global identity)              │
│  - wallets (global coins)               │
│  - coins_ledger (immutable)             │
│  - auth_sessions                        │
├─────────────────────────────────────────┤
│  TENANT-ISOLATED TABLES                 │
│  - merchants (has company_id)           │
│  - products (has company_id via merchant)│
│  - orders (has company_id via merchant) │
│  - offers (has company_id)              │
│  - bookings (has company_id)            │
└─────────────────────────────────────────┘
```

### Company Isolation Rules (ENFORCED)

#### Rule 1.1: User Identity is GLOBAL
```javascript
// ✅ CORRECT - Same user across all companies
const user = await User.findOne({ phone: '+919876543210' });
// User can use ReZ, Dinezy, Grocify with SAME account

// ❌ WRONG - Separate user per company
const rezUser = await RezUser.findOne({ phone });
const dinezyUser = await DinezyUser.findOne({ phone });
```

#### Rule 1.2: Merchants are COMPANY-SCOPED
```javascript
// ✅ CORRECT - Merchant belongs to ONE company
const merchant = await Merchant.create({
  business_name: 'Pizza Hut',
  company_id: 'wasil_dinezy',  // MANDATORY
  owner_id: userId
});

// Query MUST filter by company_id
const merchants = await Merchant.findAll({
  where: {
    company_id: req.user.companyId,  // ENFORCED in middleware
    status: 'active'
  }
});

// ❌ WRONG - Global merchant query
const merchants = await Merchant.findAll({ where: { status: 'active' } });
```

#### Rule 1.3: Cross-Company Data Access is FORBIDDEN
```javascript
// ❌ FORBIDDEN - Accessing other company's data
const allMerchants = await Merchant.findAll(); // NO FILTER

// ❌ FORBIDDEN - Manual company_id override
const merchant = await Merchant.findByPk(merchantId);
// Missing: if (merchant.company_id !== req.user.companyId) throw Error

// ✅ CORRECT - Company-scoped with check
const merchant = await Merchant.findOne({
  where: {
    id: merchantId,
    company_id: req.user.companyId
  }
});
if (!merchant) throw new AppError(8001, 'Merchant not found');
```

### Database Schema Additions (REQUIRED)

**All tenant-scoped tables MUST have:**
```sql
ALTER TABLE merchants ADD COLUMN company_id VARCHAR(50) NOT NULL;
ALTER TABLE products ADD COLUMN company_id VARCHAR(50) NOT NULL;
ALTER TABLE orders ADD COLUMN company_id VARCHAR(50) NOT NULL;
ALTER TABLE offers ADD COLUMN company_id VARCHAR(50) NOT NULL;
ALTER TABLE bookings ADD COLUMN company_id VARCHAR(50) NOT NULL;

CREATE INDEX idx_merchants_company ON merchants(company_id);
CREATE INDEX idx_products_company ON products(company_id);
CREATE INDEX idx_orders_company ON orders(company_id);
```

### Middleware Enforcement (MANDATORY)

```javascript
// middleware/enforceCompanyIsolation.js
function enforceCompanyIsolation(req, res, next) {
  // Set company context from JWT
  req.companyId = req.user.companyId; // From token

  // Override Sequelize queries globally
  const originalFindAll = Sequelize.Model.findAll;
  Sequelize.Model.findAll = function(options = {}) {
    if (this.rawAttributes.company_id) {
      options.where = {
        ...options.where,
        company_id: req.companyId
      };
    }
    return originalFindAll.call(this, options);
  };

  next();
}

// Apply globally
app.use(enforceCompanyIsolation);
```

---

## 2️⃣ SDK AUTHORITY & FORBIDDEN OPERATIONS

### What SDK Owns (ABSOLUTE AUTHORITY)

#### Rabtul SDK Has EXCLUSIVE Authority Over:

1. **Wallet Operations**
   - Credit coins
   - Debit coins
   - Calculate balances
   - Apply expiry
   - Ledger writes

2. **Coin Calculations**
   - Earning formulas
   - Redemption order
   - Eligibility checks
   - Caps and limits

3. **User Identity**
   - Registration
   - Authentication
   - Profile updates
   - Session management

4. **Business Rules Enforcement**
   - Tier upgrades
   - Streak tracking
   - Visit counting
   - Offer eligibility

### Apps are FORBIDDEN From:

```javascript
// ❌ FORBIDDEN - Direct wallet write
await db.wallets.update({
  rez_coins_balance: balance + 100
}, { where: { user_id: userId } });

// ❌ FORBIDDEN - Direct coin ledger write
await db.coins.create({
  wallet_id: walletId,
  amount: 100,
  type: 'rez_coins'
});

// ❌ FORBIDDEN - Custom coin calculation
const coins = orderTotal * 0.05; // NO!

// ❌ FORBIDDEN - Manual tier upgrade
await db.users.update({ tier: 'gold' }, { where: { id: userId } });

// ❌ FORBIDDEN - Bypassing redemption order
const discount = user.rezCoins; // Using ReZ coins first (WRONG ORDER)
```

### Apps MUST Use SDK:

```javascript
// ✅ CORRECT - Credit coins via SDK
await rabtulSDK.wallet.credit({
  userId,
  amount: coinsEarned,
  type: 'rez_coins',
  reason: 'purchase_cashback',
  orderId,
  metadata: { orderAmount, category }
});

// ✅ CORRECT - Calculate coins via SDK
const coinsEarned = await rabtulSDK.coins.calculateEarnings({
  userId,
  orderAmount,
  category,
  merchantId
});

// ✅ CORRECT - Apply redemption via SDK
const discountData = await rabtulSDK.wallet.calculateDiscount({
  userId,
  orderTotal,
  merchantId
});
// SDK enforces: Promo → Branded → ReZ order

// ✅ CORRECT - Check eligibility via SDK
const eligible = await rabtulSDK.offers.checkEligibility({
  userId,
  offerId,
  orderAmount
});
```

### SDK Contract (HARD RULES)

```javascript
// rabtul-sdk/contracts/wallet.js
class WalletSDK {
  /**
   * Credit coins to user wallet
   *
   * RULES ENFORCED:
   * - Idempotency (same orderId = same result)
   * - Audit logging (all credits logged)
   * - Event emission (wallet.balanceUpdated)
   * - Atomic operation (all or nothing)
   *
   * FORBIDDEN:
   * - Apps calling this multiple times for same order
   * - Manual balance adjustments
   * - Bypassing this method
   */
  async credit({ userId, amount, type, reason, orderId, metadata }) {
    // Idempotency check
    const existing = await db.coins.findOne({
      where: {
        source_id: orderId,
        reason
      }
    });
    if (existing) return existing; // Already credited

    // Atomic transaction
    const transaction = await db.sequelize.transaction();
    try {
      // Create ledger entry
      const coin = await db.coins.create({
        wallet_id: walletId,
        amount,
        coin_type: type,
        source: reason,
        source_id: orderId,
        expires_at: this.calculateExpiry(type),
        metadata
      }, { transaction });

      // Update wallet balance
      await db.wallets.increment(
        `${type}_balance`,
        { by: amount, where: { user_id: userId } },
        { transaction }
      );

      // Audit log
      await db.audit_logs.create({
        user_id: userId,
        action: 'coin_credit',
        entity_type: 'wallet',
        entity_id: walletId,
        new_values: { amount, type, reason },
        metadata
      }, { transaction });

      await transaction.commit();

      // Emit event
      rabtul.emit('wallet.balanceUpdated', {
        userId,
        amount,
        type,
        operation: 'credit'
      });

      return coin;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}
```

---

## 3️⃣ ADMIN vs BIZ OS AUTHORITY MATRIX

### Clear Separation of Powers

| Action | Admin (HQ) | Biz OS (Merchant) | Notes |
|--------|-----------|-------------------|-------|
| **Create Merchant** | ✅ Yes | ❌ No | Only HQ onboards |
| **Approve Merchant** | ✅ Yes | ❌ No | HQ verifies KYC |
| **Suspend Merchant** | ✅ Yes | ❌ No | Fraud/compliance |
| **Create Product** | ❌ No | ✅ Yes | Merchant owns products |
| **Create Offer** | ✅ Platform-wide | ✅ Merchant-specific | Different scopes |
| **Mint Promo Coins** | ✅ Yes | ❌ No | Only HQ campaigns |
| **Mint Branded Coins** | ❌ No | ✅ Yes | Merchant loyalty |
| **Override Expiry** | ✅ Yes | ❌ No | Customer support only |
| **Reverse Transaction** | ✅ Yes (with approval) | ❌ No | Fraud cases |
| **View Analytics** | ✅ All companies | ✅ Own data only | Isolation enforced |
| **Modify Coin Rates** | ✅ Yes (global) | ❌ No | Platform rule |
| **Set Commission** | ✅ Yes | ❌ No (read-only) | HQ decides |
| **Fulfill Order** | ❌ No | ✅ Yes | Merchant workflow |
| **Cancel Order** | ✅ Yes (escalation) | ✅ Yes (normal) | Both can cancel |
| **Refund Payment** | ✅ Yes | ✅ Yes (request) | Merchant requests, HQ approves |

### Code Enforcement

```javascript
// middleware/checkAdminAuthority.js
function requireAdminLevel(minLevel) {
  return async (req, res, next) => {
    const ADMIN_LEVELS = {
      'super_admin': 100,
      'admin': 80,
      'operator': 70,
      'support': 60
    };

    const userLevel = ADMIN_LEVELS[req.user.role] || 0;

    if (userLevel < minLevel) {
      throw new AppError(
        9001,
        'Insufficient admin privileges',
        'You do not have permission for this action'
      );
    }

    next();
  };
}

// Usage
app.post('/api/admin/merchants/:id/suspend',
  authenticateToken,
  requireAdminLevel(80), // Admin or above
  suspendMerchant
);

app.post('/api/admin/coins/mint-promo',
  authenticateToken,
  requireAdminLevel(100), // Super Admin only
  mintPromoCoins
);
```

### Audit Requirements

**Every Admin Override MUST:**
1. Create audit log entry
2. Require approval reason
3. Emit event for monitoring
4. Notify affected parties

```javascript
async function overrideExpiry(req, res) {
  const { coinId, newExpiryDate, reason } = req.body;

  // Require reason
  if (!reason || reason.length < 10) {
    throw new AppError(9902, 'Override reason required (min 10 chars)');
  }

  const coin = await db.coins.findByPk(coinId);
  const oldExpiry = coin.expires_at;

  // Update
  await coin.update({ expires_at: newExpiryDate });

  // Audit log
  await db.audit_logs.create({
    user_id: req.user.id,
    action: 'override_expiry',
    entity_type: 'coin',
    entity_id: coinId,
    old_values: { expires_at: oldExpiry },
    new_values: { expires_at: newExpiryDate },
    metadata: {
      reason,
      admin_role: req.user.role
    }
  });

  // Notify user
  await sendNotification(coin.user_id, {
    type: 'coin_expiry_extended',
    message: `Your coins expiry extended to ${newExpiryDate}`,
    data: { coinId, reason }
  });

  // Emit for monitoring
  rabtul.emit('admin.override', {
    action: 'expiry_override',
    adminId: req.user.id,
    affectedUserId: coin.user_id,
    reason
  });

  res.json({ success: true });
}
```

---

## 4️⃣ PHASE BOUNDARIES (WHAT TO BUILD NOW)

### Phase 1 - MUST HAVE (Build This Now) ✅

**Core Platform:**
- [x] User registration & authentication
- [x] Wallet system with 3 coin types
- [x] Coin earning (purchase cashback)
- [x] Coin redemption (checkout)
- [x] Expiry enforcement
- [x] Tier system (Basic, Silver, Gold, Prive)

**ReZ App:**
- [x] Browse & shop (traditional e-commerce)
- [x] Cart & checkout
- [x] Order tracking
- [x] Wallet & transaction history
- [x] Profile & addresses

**Dinezy (Wasil):**
- [x] Restaurant discovery
- [x] Menu browsing
- [x] Table reservation (basic)
- [x] Order placement
- [x] ReZ coins earning

**BizOne (Merchant OS):**
- [x] Merchant registration
- [x] Product management
- [x] Order management
- [x] Offer creation (merchant-specific)
- [x] Basic analytics

**Admin (HQ):**
- [x] Merchant approval
- [x] Platform-wide offers
- [x] User management
- [x] Transaction monitoring

### Phase 2 - IMPORTANT (Build After Phase 1) 🔄

**Scan & Pay:**
- [ ] QR code generation
- [ ] Offline payment capture
- [ ] Receipt scanning
- [ ] Coins for offline purchases

**Social Commerce:**
- [ ] BuzzLoop (social feed)
- [ ] Product reviews
- [ ] User-generated content
- [ ] Referral system

**AI Discovery:**
- [ ] AI-R (recommendation engine)
- [ ] Personalization
- [ ] Smart search

**Advanced Booking:**
- [ ] Calendar integration
- [ ] Slot management
- [ ] Prepayment
- [ ] Cancellation policies

### Phase 3 - NICE TO HAVE (Future Vision) 🔮

**POS Integration:**
- [ ] Hardware integration
- [ ] Offline mode
- [ ] Inventory sync
- [ ] Multi-device support

**Advanced Analytics:**
- [ ] Predictive analytics
- [ ] Cohort analysis
- [ ] LTV modeling

**Enterprise Features:**
- [ ] Multi-location management
- [ ] Franchise support
- [ ] White-label solutions

### NEVER in v1 (Explicitly Out of Scope) ❌

- [ ] Cryptocurrency integration
- [ ] International payments (focus India only)
- [ ] B2B marketplace
- [ ] Stock trading
- [ ] Banking services

### Developer Guidance

```javascript
// ✅ CORRECT - Phase-aware development
if (PHASE >= 2) {
  // Scan & Pay features
  app.post('/api/scan-and-pay', scanAndPayHandler);
}

// ❌ WRONG - Building Phase 3 features in Phase 1
async function handleOrder() {
  // Don't build POS integration yet!
  if (isPOSEnabled) { /* Phase 3 - skip for now */ }
}
```

---

## 5️⃣ LEDGER IMMUTABILITY (CRITICAL)

### Rule: Coin Ledger is APPEND-ONLY

```javascript
// ✅ CORRECT - Reversal via new entry
async function reverseCoins(orderId, reason) {
  const originalCredit = await db.coins.findOne({
    where: { source_id: orderId, source: 'purchase_cashback' }
  });

  // Create DEBIT entry (not delete)
  await rabtulSDK.wallet.debit({
    userId: originalCredit.user_id,
    amount: originalCredit.amount,
    type: originalCredit.coin_type,
    reason: 'refund_reversal',
    orderId,
    metadata: {
      reversedCoinId: originalCredit.id,
      reverseReason: reason
    }
  });
}

// ❌ FORBIDDEN - Deleting ledger entries
await db.coins.destroy({ where: { id: coinId } }); // NEVER!

// ❌ FORBIDDEN - Updating ledger amounts
await db.coins.update({
  amount: newAmount
}, { where: { id: coinId } }); // NEVER!
```

### Audit Log is Also APPEND-ONLY

```javascript
// ❌ FORBIDDEN
await db.audit_logs.destroy({ where: { user_id: userId } });
await db.audit_logs.update({ action: 'modified' }, { where: { id } });
```

---

## ✅ SUMMARY: HARD RULES CHECKLIST

Before writing ANY code, verify:

- [ ] Company isolation enforced in all queries?
- [ ] Using SDK for wallet operations?
- [ ] Admin vs Merchant authority respected?
- [ ] Building Phase 1 features only?
- [ ] Ledger entries append-only?
- [ ] Audit logs for sensitive operations?
- [ ] Events emitted for all state changes?
- [ ] No direct database writes bypassing SDK?

**If ANY checkbox is unchecked → STOP and fix.**

---

**Status:** ✅ MANDATORY TECHNICAL RULES
**Violations:** Will cause data corruption, security breaches, compliance failures
**Last Updated:** 2026-01-03
