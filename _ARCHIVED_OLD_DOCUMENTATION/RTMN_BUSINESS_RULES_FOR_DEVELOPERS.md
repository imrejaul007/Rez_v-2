# 📕 RTMN BUSINESS RULES FOR DEVELOPERS (FINAL)

**Version:** 1.0
**Date:** 2026-01-03
**Status:** ✅ NON-NEGOTIABLE RULES

---

## ⚠️ READ THIS FIRST (NON-NEGOTIABLE)

> **Developers do NOT invent business logic.**
> **Developers IMPLEMENT business rules defined here.**
> **If something is not explicitly allowed below, it is NOT allowed.**

This document defines the **business rules and boundaries** for the entire RTMN ecosystem.
Every developer MUST read and follow these rules.

---

## 1️⃣ OWNERSHIP & AUTHORITY RULES

### Rule 1.1 — Single Source of Truth

**Rabtul is the ONLY source of truth for:**
- ✅ Wallet balances
- ✅ Coin rules & calculations
- ✅ Commission rules
- ✅ Eligibility rules
- ✅ User identity
- ✅ Merchant identity

**No app, no service, no database outside Rabtul can store final truth.**

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - Calculating coins in frontend
const coinsEarned = orderTotal * 0.05; // NO!

// ✅ CORRECT - Ask Rabtul
const response = await rabtulSDK.calculateCoinsForOrder(orderId);
```

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - Storing balance locally
user.walletBalance = 1250; // NO!

// ✅ CORRECT - Get from Rabtul
const balance = await rabtulSDK.wallet.getBalance(userId);
```

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - Calculating settlement in BizOne
const merchantPayout = orderTotal - commission; // NO!

// ✅ CORRECT - Ask Rabtul
const settlement = await rabtulSDK.settlement.calculate(orderId);
```

---

### Rule 1.2 — Governance Authority

**HQ (RTMN Holding) defines:**
- Coin types & expiry rules
- Commission slabs
- Discount limits
- Global campaign rules
- City/zone-specific rules

**Developers must expose admin-configurable rules, NOT hardcoded values.**

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - Hardcoded commission
const commission = orderTotal * 0.15; // NO!

// ✅ CORRECT - Get from HQ config
const commissionRate = await rabtulSDK.config.getCommissionRate(merchantId, category);
const commission = orderTotal * commissionRate;
```

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - Hardcoded caps
const MAX_COINS_PER_ORDER = 1000; // NO!

// ✅ CORRECT - Get from HQ config
const maxCoins = await rabtulSDK.config.getCoinCap('per_order');
```

---

## 2️⃣ IDENTITY & ACCESS RULES

### Rule 2.1 — One Identity, Many Apps

**One user = one Rabtul identity**
**One merchant = one Rabtul identity**
**One admin = one Rabtul identity**

✅ **CORRECT:** Same login across:
- ReZ (Customer App)
- BizOne (Merchant OS)
- All Wasil apps (Dinezy, Grocify, etc.)
- All growth apps (ReferralX, Quizzy, etc.)
- All discovery apps (AI-R, BuzzLoop, etc.)

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - App-level login system
app.createUser({ phone, password }); // NO!

// ✅ CORRECT - Use Rabtul Auth
await rabtulSDK.auth.register({ phone, password });
```

❌ **FORBIDDEN:**
- Separate auth databases per app
- App-specific user tables
- Duplicate identity systems

---

### Rule 2.2 — Role-Based Access Control (RBAC)

**Fixed Roles (Cannot be changed by apps):**
1. HQ Super Admin (Level 100)
2. HQ Admin (Level 80)
3. HQ Operator (Level 70)
4. HQ Support (Level 60)
5. Zone Admin (Level 65)
6. Merchant Owner (Level 50)
7. Merchant Manager (Level 40)
8. Merchant Staff (Level 30)
9. Prive Member (Level 20)
10. Customer (Level 10)
11. Guest (Level 0)

**Developers must:**
- ✅ Enforce permissions at API level
- ✅ Hide UI actions based on role
- ✅ Check role on every protected endpoint

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - UI-only permission check
if (user.role === 'admin') {
  showDeleteButton(); // Still callable via API!
}

// ✅ CORRECT - Enforce on backend
app.delete('/api/users/:id', checkRole('super_admin'), deleteUser);
```

---

## 3️⃣ WALLET & COINS RULES (CRITICAL) 💰

### Rule 3.1 — Wallet Ownership

**Wallet belongs to USER**
**Wallet logic lives in RABTUL**

**Coin Types:**
1. **ReZ Coins** (universal, transferable, expiry-based)
2. **Branded Coins** (merchant-specific, non-transferable)
3. **Promo Coins** (campaign-based, limited validity)

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - Multiple wallet systems
appWallet.addCoins(50); // NO!
merchantWallet.creditCoins(100); // NO!

// ✅ CORRECT - One wallet in Rabtul
await rabtulSDK.wallet.credit({
  userId,
  amount: 50,
  type: 'rez_coins',
  reason: 'purchase_cashback',
  orderId
});
```

---

### Rule 3.2 — Coin Application Order (MANDATORY)

**ALWAYS apply coins in this order (cannot be changed):**

1. **Promo Coins** (first)
2. **Branded Coins** (second)
3. **ReZ Coins** (last)

```javascript
// ✅ CORRECT - Let Rabtul handle order
const discount = await rabtulSDK.wallet.calculateDiscount({
  userId,
  orderTotal: 1000,
  merchantId
});

// Rabtul will automatically apply in correct order:
// 1. Promo: 100 coins
// 2. Branded: 50 coins (Starbucks coins)
// 3. ReZ: 200 coins
// Total discount: 350 coins = ₹350
```

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - App-defined coin logic
let discount = 0;
discount += user.rezCoins; // Wrong order!
discount += user.promoCoins;
```

---

### Rule 3.3 — Wallet Mutations (Atomic & Logged)

**Every wallet change MUST:**
- ✅ Be atomic (all or nothing)
- ✅ Be logged (audit trail)
- ✅ Emit event (for real-time updates)
- ✅ Be idempotent (same request = same result)

```javascript
// ✅ CORRECT - Proper wallet mutation
await rabtulSDK.wallet.credit({
  userId,
  amount: 50,
  type: 'rez_coins',
  reason: 'purchase_cashback',
  orderId, // For idempotency
  metadata: {
    orderAmount: 1000,
    category: 'grocery'
  }
});

// This will:
// 1. Credit atomically
// 2. Log to audit table
// 3. Emit wallet.balanceUpdated event
// 4. Return same result if called again with same orderId
```

❌ **FORBIDDEN:**
```sql
-- ❌ WRONG - Direct DB write
UPDATE wallets SET balance = balance + 50 WHERE user_id = '123';
```

---

## 4️⃣ MERCHANT & BIZONE RULES

### Rule 4.1 — Merchant Single Brain

**Merchants ONLY operate via BizOne**

All merchant operations must go through BizOne:
- ✅ Product management
- ✅ Inventory updates
- ✅ Order fulfillment
- ✅ Offer creation
- ✅ Analytics viewing

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - Merchant dashboard in ReZ
rezApp.showMerchantDashboard(); // NO!

// ✅ CORRECT - Redirect to BizOne
window.location = 'bizone://merchant/dashboard';
```

❌ **FORBIDDEN:**
- Merchant dashboards in user apps
- Inventory edits outside BizOne
- Order management in customer apps

---

### Rule 4.2 — Orders & Inventory

**Orders from ANY app → BizOne**
**Inventory decrement → BizOne**
**Rabtul only listens to events**

```javascript
// ✅ CORRECT Flow:
// 1. User places order in ReZ/Dinezy/Grocify
await rezApp.createOrder(orderData);

// 2. Order event emitted
rabtul.emit('order.created', { orderId, merchantId });

// 3. BizOne receives event
bizOne.on('order.created', async (order) => {
  await decrementInventory(order.items);
  await notifyMerchant(order);
});

// 4. Rabtul updates settlement
rabtul.on('order.created', async (order) => {
  await calculateCommission(order);
  await updateMerchantBalance(order);
});
```

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - Inventory logic in user app
rezApp.decrementInventory(productId, qty); // NO!

// ❌ WRONG - Parallel order systems
dinezyApp.createOrder(); // Must go through unified system
```

---

## 5️⃣ PRICING, COMMISSION & SETTLEMENT RULES

### Rule 5.1 — Pricing Control

**Who controls what:**
- Merchant sets: **Base price**
- HQ defines: **Max discount**, **Commission slab**, **Coin caps**

**Rabtul validates EVERY order before finalization.**

```javascript
// ✅ CORRECT - Price validation flow
const order = {
  productId: '123',
  price: 499, // Merchant's price
  discount: 100, // Customer applied discount
  merchantId: 'merchant_456'
};

// Rabtul validates
const validation = await rabtulSDK.order.validate(order);

if (!validation.allowed) {
  throw new Error(validation.reason);
  // Reasons could be:
  // - "Discount exceeds HQ limit of 20%"
  // - "Price below minimum allowed"
  // - "Merchant not eligible for this category"
}
```

---

### Rule 5.2 — Settlement Authority

**Settlement calculation:**
- ✅ Executed by BizOne (displays to merchant)
- ✅ Validated by Rabtul rules (enforces HQ limits)
- ✅ Paid by RTMN Finance (actual transfer)

```javascript
// ✅ CORRECT - Settlement flow
// 1. Order completed
await rabtulSDK.order.complete(orderId);

// 2. Rabtul calculates settlement
const settlement = await rabtulSDK.settlement.calculate({
  orderId,
  merchantId,
  orderAmount: 1000,
  commission: 150, // 15% as per HQ config
  coins Used: 50 // Customer used coins
});

// Result:
// {
//   merchantPayout: 850, // 1000 - 150 commission
//   platformFee: 150,
//   status: 'pending_payment',
//   paymentCycle: 'weekly'
// }
```

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - Settlement logic in user apps
customerApp.calculateMerchantPayout(); // NO!

// ❌ WRONG - Manual overrides without audit
merchantPayout = 900; // Bypasses rules!
```

---

## 6️⃣ CAMPAIGN & ADS RULES (ADZY)

### Rule 6.1 — Campaign Creation

**Who can create campaigns:**
- ✅ HQ can create **global campaigns** (all merchants)
- ✅ Merchants can **opt-in** to global campaigns via BizOne
- ✅ Merchants can create **local campaigns** (within HQ limits)

```javascript
// ✅ CORRECT - HQ creates global campaign
await hqAdmin.createCampaign({
  name: 'Diwali Sale',
  type: 'global',
  discount: '20%',
  budget: 1000000,
  startDate: '2026-10-20',
  endDate: '2026-10-30',
  categories: ['fashion', 'electronics']
});

// ✅ CORRECT - Merchant opts in
await merchantApp.optInToCampaign({
  campaignId: 'diwali_sale_2026',
  merchantId,
  commitment: {
    minDiscount: '20%',
    inventory: 'available'
  }
});

// ✅ CORRECT - Merchant creates local campaign
await merchantApp.createCampaign({
  name: 'Store Anniversary',
  type: 'local',
  discount: '15%', // Within HQ limit of 20%
  budget: 10000,
  merchantId
});
```

---

### Rule 6.2 — Attribution (MANDATORY)

**Every campaign MUST:**
- ✅ Have `campaign_id`
- ✅ Be traceable to `order_id`
- ✅ Show ROI to merchant

```javascript
// ✅ CORRECT - Campaign attribution
await rabtulSDK.order.create({
  userId,
  items,
  total: 1000,
  campaign: {
    id: 'diwali_sale_2026',
    source: 'push_notification',
    discount: 200
  }
});

// This enables:
// 1. Merchant sees: "50 orders from Diwali campaign"
// 2. Merchant sees: "ROI: ₹50,000 revenue from ₹10,000 discount"
// 3. HQ sees: "Campaign reached 10,000 users"
```

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - Unattributed promotions
await order.applyDiscount(200); // From where?

// ❌ WRONG - Wallet rewards without campaign reference
await wallet.credit(50, 'bonus'); // Which campaign?
```

---

## 7️⃣ EVENT & DATA RULES

### Rule 7.1 — Event-First Architecture

**Every meaningful action emits an event:**
- ✅ `user.registered`
- ✅ `product.viewed`
- ✅ `product.addedToCart`
- ✅ `order.created`
- ✅ `order.completed`
- ✅ `wallet.credited`
- ✅ `wallet.debited`
- ✅ `settlement.calculated`

**Events are immutable** (cannot be changed after emission).

```javascript
// ✅ CORRECT - Emit events for everything
await rabtulSDK.events.emit('order.created', {
  eventId: uuid(),
  timestamp: new Date(),
  userId,
  orderId,
  merchantId,
  amount: 1000,
  metadata: { ... }
});

// Other services listen
rabtul.on('order.created', calculateCoins);
bizOne.on('order.created', decrementInventory);
analytics.on('order.created', trackConversion);
```

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - State change without event
order.status = 'completed'; // Silent update!
await order.save();

// ✅ CORRECT - Emit event
await rabtulSDK.order.complete(orderId);
// This emits 'order.completed' event automatically
```

---

### Rule 7.2 — Analytics Ownership

**Analytics is READ-only for apps**
**Data pipelines belong to Rabtul**

```javascript
// ✅ CORRECT - Read analytics from Rabtul
const analytics = await rabtulSDK.analytics.get({
  merchantId,
  metric: 'revenue',
  period: 'last_7_days'
});

// Display in BizOne dashboard
showChart(analytics);
```

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - App-level analytics truth
let totalRevenue = 0;
orders.forEach(o => totalRevenue += o.amount); // Don't calculate yourself!

// ✅ CORRECT - Trust Rabtul
const totalRevenue = await rabtulSDK.analytics.getRevenue(merchantId);
```

---

## 8️⃣ FRONTEND BUSINESS RULES

### Rule 8.1 — Frontend Is a Client

**Frontend:**
- ✅ Displays data
- ✅ Sends intents (user wants to do X)
- ✅ Shows loading/error states

**Frontend NEVER:**
- ❌ Decides eligibility
- ❌ Calculates money/coins
- ❌ Enforces business rules

```javascript
// ❌ WRONG - Frontend decides eligibility
if (user.tier === 'prive' && order.total > 500) {
  showFreeDelivery(); // Business logic in frontend!
}

// ✅ CORRECT - Ask backend
const eligibility = await api.checkEligibility(userId, orderId);
if (eligibility.freeDelivery) {
  showFreeDelivery();
}
```

---

### Rule 8.2 — Error Transparency

**If Rabtul rejects an action:**
- ✅ Show exact reason to user
- ✅ Log event for debugging
- ❌ Do NOT retry blindly
- ❌ Do NOT hide error

```javascript
// ✅ CORRECT - Handle rejection properly
try {
  await rabtulSDK.wallet.debit(userId, 100);
} catch (error) {
  if (error.code === 'INSUFFICIENT_BALANCE') {
    showError('You don\'t have enough coins. Current balance: ' + error.balance);
  } else if (error.code === 'COINS_EXPIRED') {
    showError('Your coins expired on ' + error.expiryDate);
  }

  // Log for debugging
  await rabtulSDK.events.emit('wallet.debit.failed', {
    userId,
    amount: 100,
    error: error.code
  });
}
```

---

## 9️⃣ SDK MANDATORY USAGE RULES

### Rule 9.1 — SDK Is Mandatory

**All apps MUST use official SDKs:**
- ✅ **Auth SDK** (`@rabtul/auth-sdk`)
- ✅ **Wallet SDK** (`@rabtul/wallet-sdk`)
- ✅ **Rule SDK** (`@rabtul/rules-sdk`)
- ✅ **Event SDK** (`@rabtul/events-sdk`)

❌ **FORBIDDEN:**
```javascript
// ❌ WRONG - Direct API calls bypassing SDK
const response = await fetch('https://api.rabtul.in/wallet/balance', {
  headers: { 'Authorization': `Bearer ${token}` }
});

// ✅ CORRECT - Use SDK
import { WalletSDK } from '@rabtul/wallet-sdk';
const wallet = new WalletSDK({ token });
const balance = await wallet.getBalance(userId);
```

**Why SDK is mandatory:**
- Handles authentication
- Handles retries
- Handles versioning
- Handles validation
- Handles events
- Provides TypeScript types

---

### Rule 9.2 — Backward Compatibility

**SDK changes must be versioned**

**Breaking changes require:**
- ✅ Migration path documented
- ✅ Dual support window (min 3 months)
- ✅ Deprecation warnings

```javascript
// ✅ CORRECT - Versioned SDK usage
import { WalletSDK } from '@rabtul/wallet-sdk@v2';

// Old method (deprecated, still works)
await wallet.addCoins(50); // Shows warning in logs

// New method
await wallet.credit({
  amount: 50,
  type: 'rez_coins',
  reason: 'purchase_cashback'
});
```

---

## 🔟 SECURITY, AUDIT & COMPLIANCE RULES

### Rule 10.1 — Audit Everything

**Every action must be logged:**
- ✅ Admin actions (who changed what, when)
- ✅ Rule changes (old value → new value)
- ✅ Wallet mutations (every credit/debit)
- ✅ Configuration updates
- ✅ Permission changes

```javascript
// ✅ CORRECT - Auditable admin action
await hqAdmin.updateCommissionRate({
  merchantId,
  oldRate: 0.15,
  newRate: 0.12,
  reason: 'Performance bonus',
  approvedBy: 'super_admin_123'
});

// This logs to audit table:
// {
//   action: 'commission_rate_update',
//   actor: 'super_admin_123',
//   target: 'merchant_456',
//   oldValue: 0.15,
//   newValue: 0.12,
//   reason: 'Performance bonus',
//   timestamp: '2026-01-03T10:30:00Z',
//   ip: '192.168.1.1'
// }
```

---

### Rule 10.2 — Kill Switches (Emergency Control)

**HQ must be able to (without redeploying apps):**
- ✅ Disable an app globally
- ✅ Disable a merchant
- ✅ Freeze wallets (prevent withdrawals)
- ✅ Pause campaigns
- ✅ Force logout all users
- ✅ Rate limit APIs

```javascript
// ✅ CORRECT - Implement kill switch checks
app.use(async (req, res, next) => {
  const config = await rabtulSDK.config.getAppStatus(req.app.id);

  if (!config.enabled) {
    return res.status(503).json({
      error: 'Service temporarily unavailable',
      message: config.disabledMessage,
      estimatedResolution: config.eta
    });
  }

  next();
});
```

---

## 1️⃣1️⃣ FORBIDDEN SHORTCUTS (PIN THIS TO YOUR DESK)

❌ **NEVER DO THESE:**

1. ❌ Hardcoding business logic
2. ❌ Bypassing Rabtul for wallet/coins
3. ❌ Creating duplicate wallet systems
4. ❌ App-level settlement calculations
5. ❌ Silent failures (always log + emit)
6. ❌ UI-only validation (always validate backend)
7. ❌ Direct database writes (use SDKs)
8. ❌ Storing user passwords (use Rabtul Auth)
9. ❌ Creating custom auth systems
10. ❌ Ignoring role-based permissions

---

## 1️⃣2️⃣ DEVELOPER DECISION TREE (WHEN CONFUSED)

**If developer asks: "Where should this logic live?"**

```
┌─ Identity? ────────────────→ Rabtul
├─ Wallet / Coins? ────────────→ Rabtul
├─ Rules / Eligibility? ───────→ Rabtul
├─ Commission / Settlement? ───→ Rabtul
├─ Campaign Rules? ────────────→ Rabtul
├─ Merchant Operations? ───────→ BizOne
├─ Ads / Marketing? ───────────→ Adzy
├─ Display / UX? ──────────────→ App (ReZ/Dinezy/etc.)
└─ Still unsure? ──────────────→ DO NOT CODE → Ask Product Team
```

**Golden Rule:**
> "When in doubt, it belongs in Rabtul."

---

## 🏁 FINAL STATEMENT (THIS IS THE CONTRACT)

> **Rabtul decides.**
> **BizOne executes.**
> **Apps display.**
> **HQ governs.**

If your developers follow this rulebook, you can safely build **100+ apps without chaos**.

---

## 📋 CHECKLIST FOR EVERY NEW FEATURE

Before writing code, answer these:

- [ ] Does this involve money/coins? → Use Rabtul Wallet SDK
- [ ] Does this involve user identity? → Use Rabtul Auth SDK
- [ ] Does this involve business rules? → Use Rabtul Rules SDK
- [ ] Does this involve merchant operations? → Go through BizOne
- [ ] Does this need admin approval? → Check with HQ governance
- [ ] Does this emit an event? → Use Rabtul Events SDK
- [ ] Is this auditable? → Log via Rabtul
- [ ] Can HQ kill-switch this? → Check runtime config

If you answered "I don't know" to any → **STOP and ask Product Team**.

---

## 🚨 VIOLATIONS = CODE REVIEW REJECTION

Code that violates these rules will be **rejected** in code review.

No exceptions.

---

**END OF BUSINESS RULES DOCUMENT**

*This is a living document. Last updated: 2026-01-03*
*Questions? Contact: architecture@rtmn.in*
