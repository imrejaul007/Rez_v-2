# 🎯 Reference Implementation Plan - RTMN Ecosystem

**Date:** 2026-01-04
**Status:** ✅ EXECUTION-READY
**Purpose:** Gold standard implementation that all other apps will follow

---

## ⚠️ CRITICAL PRINCIPLE

> **Build ONE perfect flow end-to-end.**
> **Then clone it 100 times.**
> **NOT: Build 100 different flows.**

---

## 🧩 THE REFERENCE FLOW (LOCKED)

### Flow Name: "ReZ → Merchant Purchase → Wallet → Settlement"

**Why this flow?**
- Exercises EVERY critical system
- Proves SDK enforcement
- Tests rule engine
- Validates wallet correctness
- Verifies event integrity
- Confirms settlement accuracy

**Once this works, every other app is a clone, not a new design.**

---

## 🏗️ SYSTEMS INVOLVED

| Layer | Component | Owner |
|-------|-----------|-------|
| **User App** | ReZ | RTMN Digital |
| **SDK** | @rabtul/core-sdk | Rabtul |
| **Core Services** | Rabtul Auth, Wallet, Rules | Rabtul |
| **Merchant App** | BizOne | RTMN Digital |
| **Finance** | Settlement Service | Rabtul |
| **Admin** | HQ Rules Dashboard | RTMN Digital |

---

## 🔁 STEP-BY-STEP REFERENCE FLOW (DEVELOPER VIEW)

### STEP 1: USER AUTH (SDK MANDATORY)

**ReZ App Code:**
```javascript
import { RabtulAuthSDK } from '@rabtul/auth-sdk';

// ❌ FORBIDDEN: Direct API call to auth
// ✅ REQUIRED: Use SDK only
const auth = new RabtulAuthSDK({
  apiKey: process.env.RABTUL_API_KEY,
  apiSecret: process.env.RABTUL_API_SECRET
});

async function login(phone) {
  // Step 1: Send OTP
  const { session_id } = await auth.sendOTP(phone);

  // Step 2: Verify OTP
  const { access_token, refresh_token, user } = await auth.verifyOTP(
    session_id,
    otp_code
  );

  // SDK automatically handles:
  // - Token storage
  // - Token refresh
  // - Session management

  return user;
}
```

**Rules Enforced:**
- ✅ No app-level auth
- ✅ Token issued only by Rabtul
- ✅ SDK validates all requests

**Output:**
```json
{
  "user_id": "user_123",
  "session_id": "sess_abc",
  "device_id": "device_xyz",
  "access_token": "eyJ...",
  "refresh_token": "eyJ..."
}
```

---

### STEP 2: DISCOVERY & ATTRIBUTION

**ReZ App Code:**
```javascript
import { RabtulAnalyticsSDK } from '@rabtul/analytics-sdk';

const analytics = new RabtulAnalyticsSDK({
  app_id: 'rez',
  user_id: currentUser.id
});

// User views merchant
async function viewMerchant(merchantId) {
  // Track view event
  await analytics.track('merchant.viewed', {
    merchant_id: merchantId,
    source: 'search_results',
    position: 3,
    campaign_id: 'weekend_deals'
  });

  // SDK automatically handles:
  // - Attribution tags
  // - Session continuity
  // - First-touch vs last-touch
}
```

**Event Emitted:**
```json
{
  "event_id": "evt_001",
  "event_type": "merchant.viewed",
  "version": "1.0",
  "timestamp": "2026-01-04T10:30:00Z",
  "user_id": "user_123",
  "merchant_id": "merch_456",
  "attribution": {
    "app_id": "rez",
    "source": "search_results",
    "campaign_id": "weekend_deals"
  }
}
```

---

### STEP 3: CHECKOUT ELIGIBILITY (CRITICAL GATE)

**Before checkout button is enabled:**

```javascript
import { RabtulRulesSDK } from '@rabtul/rules-sdk';

const rules = new RabtulRulesSDK({
  apiKey: process.env.RABTUL_API_KEY,
  apiSecret: process.env.RABTUL_API_SECRET
});

async function canUserCheckout(cart) {
  try {
    // Rabtul evaluates ALL rules
    const eligibility = await rules.canCheckout({
      user_id: currentUser.id,
      merchant_id: cart.merchant_id,
      items: cart.items,
      total: cart.total
    });

    // Returns:
    // - Coin eligibility
    // - Campaign eligibility
    // - Caps remaining
    // - Restrictions

    if (!eligibility.allowed) {
      // ❌ Block UI
      showError(eligibility.reason);
      return false;
    }

    // ✅ Enable checkout
    return true;

  } catch (error) {
    // Fail-safe: if rules service down, block checkout
    showError('Checkout temporarily unavailable');
    return false;
  }
}
```

**Rabtul Rule Evaluation (Server-Side):**
```javascript
// Rabtul Rules Engine
async function evaluateCheckoutRules(request) {
  const { user_id, merchant_id, items, total } = request;

  // Get user context
  const user = await db.users.findByPk(user_id);
  const merchant = await db.merchants.findByPk(merchant_id);

  // Evaluate rules in priority order
  const rules = await getRulesForCheckout({
    user_tier: user.loyalty_tier,
    merchant_type: merchant.type,
    order_time: new Date()
  });

  // Apply rules deterministically
  for (const rule of rules) {
    const result = await evaluateRule(rule, {
      user,
      merchant,
      items,
      total
    });

    if (!result.allowed) {
      return {
        allowed: false,
        reason: result.reason,
        rule_id: rule.id
      };
    }
  }

  return { allowed: true };
}
```

---

### STEP 4: WALLET PREVIEW (NO MUTATION)

**ReZ App Code:**
```javascript
import { RabtulWalletSDK } from '@rabtul/wallet-sdk';

const wallet = new RabtulWalletSDK({
  apiKey: process.env.RABTUL_API_KEY,
  apiSecret: process.env.RABTUL_API_SECRET
});

async function previewPayment(cart) {
  // ❌ FORBIDDEN: Calculate coins in app
  // ✅ REQUIRED: Get preview from Rabtul

  const preview = await wallet.previewDebit({
    user_id: currentUser.id,
    merchant_id: cart.merchant_id,
    total: cart.total
  });

  // Returns breakdown:
  return preview;
  /*
  {
    "promo_coins_used": 50,
    "branded_coins_used": 100,
    "rez_coins_used": 150,
    "cash_payable": 700,
    "total": 1000,
    "coin_order": ["promo", "branded", "rez"],
    "user_balance_after": {
      "promo_coins": 0,
      "branded_coins": 400,
      "rez_coins": 850
    }
  }
  */
}
```

**CRITICAL: No balance changes yet**

---

### STEP 5: ORDER CREATION (BizOne OWNS THIS)

**ReZ sends intent only:**

```javascript
import { RabtulOrderSDK } from '@rabtul/order-sdk';

const orderSDK = new RabtulOrderSDK({
  apiKey: process.env.RABTUL_API_KEY,
  apiSecret: process.env.RABTUL_API_SECRET
});

async function createOrder(cart, payment) {
  // ReZ creates ORDER INTENT only
  const intent = await orderSDK.createIntent({
    merchant_id: cart.merchant_id,
    user_id: currentUser.id,
    items: cart.items,
    total: cart.total,
    payment_method: payment.method,
    delivery_address: user.default_address
  });

  // Returns:
  return intent;
  /*
  {
    "intent_id": "intent_abc123",
    "status": "pending_merchant_acceptance",
    "created_at": "2026-01-04T10:35:00Z"
  }
  */
}
```

**BizOne receives intent:**

```javascript
// BizOne Backend
async function handleOrderIntent(intent) {
  // Step 1: Validate inventory
  const available = await checkInventory(intent.items);

  if (!available) {
    await rabtulSDK.order.updateStatus(intent.id, 'rejected', {
      reason: 'OUT_OF_STOCK'
    });
    return;
  }

  // Step 2: Lock inventory
  await lockInventory(intent.items);

  // Step 3: Create order
  const order = await db.orders.create({
    intent_id: intent.id,
    merchant_id: intent.merchant_id,
    user_id: intent.user_id,
    items: intent.items,
    total: intent.total,
    status: 'created'
  });

  // Step 4: Emit event
  await rabtulSDK.events.emit('order.created', {
    order_id: order.id,
    merchant_id: order.merchant_id,
    user_id: order.user_id,
    total: order.total,
    status: 'created'
  });

  return order;
}
```

---

### STEP 6: WALLET MUTATION (ATOMIC)

**Rabtul Wallet Service (Triggered by order.created event):**

```javascript
// Rabtul Wallet Service
async function handleOrderCreated(event) {
  const { order_id, user_id, merchant_id, total } = event.data;

  // Start transaction
  const transaction = await db.sequelize.transaction();

  try {
    // Step 1: Debit user wallet
    const debit = await debitWallet({
      user_id,
      amount: total,
      reason: 'ORDER_PAYMENT',
      order_id,
      transaction
    });

    // Step 2: Create ledger entry
    await db.ledger_entries.create({
      user_id,
      type: 'DEBIT',
      amount: total,
      balance_before: debit.balance_before,
      balance_after: debit.balance_after,
      reason: 'ORDER_PAYMENT',
      order_id,
      created_at: new Date()
    }, { transaction });

    // Step 3: Emit event
    await emitEvent('wallet.debit.confirmed', {
      user_id,
      order_id,
      amount: total,
      promo_coins_used: debit.promo_coins_used,
      branded_coins_used: debit.branded_coins_used,
      rez_coins_used: debit.rez_coins_used
    });

    // Commit transaction
    await transaction.commit();

  } catch (error) {
    // Rollback transaction
    await transaction.rollback();

    // Emit failure event
    await emitEvent('wallet.debit.failed', {
      user_id,
      order_id,
      reason: error.message
    });

    // Update order status
    await rabtulSDK.order.updateStatus(order_id, 'failed_wallet', {
      reason: error.message
    });

    // Unlock inventory in BizOne
    await rabtulSDK.events.emit('order.failed', {
      order_id,
      reason: 'WALLET_DEBIT_FAILED'
    });
  }
}
```

**If wallet fails:**
- Order moves to `failed_wallet`
- Inventory unlocks
- User notified

---

### STEP 7: ORDER CONFIRMATION

**BizOne handles wallet.debit.confirmed event:**

```javascript
// BizOne Backend
async function handleWalletDebitConfirmed(event) {
  const { order_id } = event.data;

  // Update order status
  const order = await db.orders.findOne({
    where: { id: order_id }
  });

  await order.update({ status: 'paid' });

  // Emit event
  await rabtulSDK.events.emit('order.paid', {
    order_id: order.id,
    merchant_id: order.merchant_id,
    user_id: order.user_id,
    paid_at: new Date()
  });

  // Notify merchant
  await sendMerchantNotification(order.merchant_id, {
    type: 'NEW_ORDER',
    order_id: order.id
  });
}
```

---

### STEP 8: SETTLEMENT PREVIEW (NO PAYOUT YET)

**Rabtul Settlement Service:**

```javascript
// Rabtul Settlement Service
async function handleOrderPaid(event) {
  const { order_id, merchant_id, user_id } = event.data;

  // Calculate settlement
  const settlement = await calculateSettlement({
    order_id,
    merchant_id,
    user_id
  });

  /*
  Settlement breakdown:
  {
    "order_total": 1000,
    "platform_commission": 50,      // 5%
    "merchant_payout": 950,
    "coin_liability": {
      "promo_coins": 50,            // Platform bears
      "branded_coins": 100,         // Merchant bears
      "rez_coins": 150              // Platform bears
    },
    "settlement_due_date": "2026-01-11T00:00:00Z",  // 7 days post-delivery
    "settlement_status": "pending_delivery"
  }
  */

  // Store settlement record
  await db.settlements.create({
    order_id,
    merchant_id,
    ...settlement,
    status: 'pending_delivery'
  });

  // Emit event
  await emitEvent('settlement.calculated', settlement);
}
```

---

### STEP 9: SETTLEMENT EXECUTION (7 DAYS POST-DELIVERY)

**Rabtul Settlement Service (Scheduled Job):**

```javascript
// Run daily at 2 AM
cron.schedule('0 2 * * *', async () => {
  // Get settlements due today
  const settlements = await db.settlements.findAll({
    where: {
      settlement_due_date: {
        [Op.lte]: new Date()
      },
      status: 'pending_settlement'
    }
  });

  for (const settlement of settlements) {
    await executeSettlement(settlement);
  }
});

async function executeSettlement(settlement) {
  const transaction = await db.sequelize.transaction();

  try {
    // Step 1: Transfer funds to merchant
    await transferToMerchant({
      merchant_id: settlement.merchant_id,
      amount: settlement.merchant_payout,
      order_id: settlement.order_id,
      transaction
    });

    // Step 2: Update settlement status
    await settlement.update({
      status: 'completed',
      settled_at: new Date()
    }, { transaction });

    // Step 3: Emit event
    await emitEvent('settlement.completed', {
      settlement_id: settlement.id,
      merchant_id: settlement.merchant_id,
      amount: settlement.merchant_payout,
      order_id: settlement.order_id
    });

    // Commit transaction
    await transaction.commit();

    // Notify merchant
    await sendMerchantNotification(settlement.merchant_id, {
      type: 'SETTLEMENT_COMPLETED',
      amount: settlement.merchant_payout,
      order_id: settlement.order_id
    });

  } catch (error) {
    await transaction.rollback();

    // Log error for manual review
    await db.settlement_failures.create({
      settlement_id: settlement.id,
      error: error.message,
      created_at: new Date()
    });
  }
}
```

---

### STEP 10: USER & MERCHANT NOTIFICATION

**User Notification:**
```javascript
// ReZ App listens to order.paid event
async function handleOrderPaid(event) {
  const { order_id, user_id } = event.data;

  // Send push notification
  await sendPushNotification(user_id, {
    title: 'Order Confirmed!',
    body: 'Your order has been confirmed and is being prepared.',
    data: { order_id }
  });

  // Send email receipt
  await sendEmail(user.email, {
    template: 'order_receipt',
    data: { order_id }
  });
}
```

**Merchant Notification:**
```javascript
// BizOne App listens to settlement.completed event
async function handleSettlementCompleted(event) {
  const { merchant_id, amount, order_id } = event.data;

  // Send notification
  await sendMerchantNotification(merchant_id, {
    title: 'Settlement Completed',
    body: `₹${amount} has been transferred to your account`,
    data: { order_id, settlement_id: event.data.settlement_id }
  });
}
```

---

## 📌 WHAT THIS REFERENCE IMPLEMENTATION PROVES

### ✅ SDK Enforcement
- No direct API calls
- All requests signed
- Version control enforced

### ✅ Rule Determinism
- Rules evaluated at correct time
- Backward compatibility maintained
- Versioning works

### ✅ Wallet Correctness
- Mandatory coin order (Promo → Branded → ReZ)
- Atomic transactions
- Rollback on failure

### ✅ Event Integrity
- All events have schema
- Idempotency guaranteed
- Ordering preserved

### ✅ Merchant Isolation
- BizOne owns order lifecycle
- Cannot access other merchants' data
- Settlement calculated by Rabtul

### ✅ Settlement Accuracy
- 7-day window enforced
- Coin liability correct
- Platform commission calculated

---

## 🎯 TEMPLATE FOR OTHER APPS

Once this flow works, every other app follows the **exact same pattern**:

### Wasil Dinezy (Restaurant Booking)
```javascript
// Same SDK usage
import { RabtulAuthSDK, RabtulWalletSDK, RabtulOrderSDK } from '@rabtul/sdk';

// Same flow
1. Auth via SDK
2. Discovery & attribution
3. Checkout eligibility check
4. Wallet preview
5. Order intent (booking instead of purchase)
6. Wallet mutation
7. Booking confirmation
8. Settlement
9. Notifications
```

### Wasil Service Apps (Salon, Spa, etc.)
- **Identical SDK usage**
- **Identical event flows**
- **Identical settlement logic**

### Offline POS
- **Same SDK (local queue mode)**
- **Same events (sync when online)**
- **Same settlement**

---

## 🚀 IMPLEMENTATION CHECKLIST

### Phase 1: Core SDK Setup
- [ ] Install @rabtul/auth-sdk
- [ ] Install @rabtul/wallet-sdk
- [ ] Install @rabtul/order-sdk
- [ ] Install @rabtul/rules-sdk
- [ ] Install @rabtul/analytics-sdk
- [ ] Configure API keys
- [ ] Test SDK connectivity

### Phase 2: Reference Flow Implementation
- [ ] Implement STEP 1 (Auth)
- [ ] Implement STEP 2 (Discovery)
- [ ] Implement STEP 3 (Checkout eligibility)
- [ ] Implement STEP 4 (Wallet preview)
- [ ] Implement STEP 5 (Order intent)
- [ ] Implement STEP 6 (Wallet mutation)
- [ ] Implement STEP 7 (Order confirmation)
- [ ] Implement STEP 8 (Settlement preview)
- [ ] Implement STEP 9 (Settlement execution)
- [ ] Implement STEP 10 (Notifications)

### Phase 3: Testing
- [ ] Unit tests for each step
- [ ] Integration tests for full flow
- [ ] Architecture contract tests (see ARCHITECTURE_TEST_CASES.md)
- [ ] Performance tests
- [ ] Failure scenario tests

### Phase 4: Deployment
- [ ] Deploy to staging
- [ ] Run end-to-end tests
- [ ] Monitor for 7 days
- [ ] Fix any issues
- [ ] Deploy to production

### Phase 5: Template Creation
- [ ] Document reference implementation
- [ ] Create boilerplate code
- [ ] Create step-by-step guide
- [ ] Train other developers

### Phase 6: Clone to Other Apps
- [ ] Wasil Dinezy
- [ ] Wasil Service Apps
- [ ] Growth Apps
- [ ] Discovery Apps

---

## 🔐 ENFORCEMENT RULES

### Rule 1: No Custom Flows
All apps MUST follow the reference flow pattern.

### Rule 2: No Direct API Calls
All interactions MUST go through SDKs.

### Rule 3: No Local Rule Evaluation
All rules MUST be evaluated by Rabtul.

### Rule 4: No Wallet Calculations
All wallet operations MUST use Rabtul Wallet SDK.

### Rule 5: No Custom Events
All events MUST follow Event Schema Registry.

---

**Status:** ✅ EXECUTION-READY
**Next:** Implement reference flow + architecture tests
**Timeline:** 2-3 weeks for reference flow, then clone to all apps

🎉 **Once this works, scaling to 100 apps is just configuration, not new code!**
