# 🔄 Order State Machine - RTMN Ecosystem

**Last Updated:** 2026-01-03
**Status:** ✅ DEFINITIVE STATE TRANSITIONS
**Purpose:** Exact order lifecycle, ownership, and finality rules

---

## ⚠️ CRITICAL: ORDER HAS ONE STATE MACHINE

**Order state is:**
- ✅ **Deterministic** (predictable transitions)
- ✅ **Owned by BizOne** (only BizOne updates status)
- ✅ **Event-driven** (emits events on transitions)
- ✅ **Audited** (all changes logged)

---

## 📊 ORDER STATES (Complete List)

```
pending
  ↓
confirmed
  ↓
processing
  ↓
ready_for_pickup (or) out_for_delivery
  ↓
delivered
  ↓
settled

(Alternative paths:)
pending → cancelled
confirmed → cancelled
processing → cancelled
delivered → returned → refunded
```

---

## 🔄 STATE TRANSITION MATRIX

| From | To | Trigger | Owner | Reversible? |
|------|----|---------| ------|-------------|
| `null` | `pending` | User places order | BizOne | ❌ |
| `pending` | `confirmed` | Payment captured | BizOne | ❌ |
| `pending` | `cancelled` | Payment failed / User cancels | BizOne / User | ❌ |
| `confirmed` | `processing` | Merchant accepts | BizOne | ❌ |
| `confirmed` | `cancelled` | Merchant rejects | BizOne | ❌ |
| `processing` | `ready_for_pickup` | Order ready (pickup) | BizOne | ❌ |
| `processing` | `out_for_delivery` | Delivery assigned | BizOne | ❌ |
| `processing` | `cancelled` | Merchant can't fulfill | BizOne | ❌ |
| `ready_for_pickup` | `delivered` | Customer picks up | BizOne | ❌ |
| `out_for_delivery` | `delivered` | Delivered & confirmed | BizOne | ❌ |
| `delivered` | `returned` | Customer returns (within 7 days) | User | ✅ (partial) |
| `delivered` | `settled` | Settlement processed | Finance | ❌ |
| `returned` | `refunded` | Refund processed | Finance | ❌ |

---

## 🎯 FINALITY RULES

### Q: When is an order "final"?

**A: An order reaches finality in these states:**

1. **`delivered`** (for coin credit)
   - ✅ Coins can be credited
   - ✅ Commission can be calculated
   - ⚠️ Still returnable within 7 days

2. **`settled`** (for financial finality)
   - ✅ Merchant paid out
   - ✅ Platform commission booked
   - ❌ No longer returnable

3. **`cancelled`** (terminal state)
   - ✅ No coins credited
   - ✅ No commission
   - ❌ Cannot be un-cancelled

4. **`refunded`** (terminal state)
   - ✅ Coins reversed
   - ✅ Commission reversed
   - ❌ Cannot be un-refunded

### Coin Credit Trigger

```javascript
// Coins credited ONLY on delivered
if (newStatus === 'delivered') {
  await rabtulSDK.wallet.credit({
    userId: order.user_id,
    amount: order.coins_earned,
    type: 'rez_coins',
    reason: 'purchase_cashback',
    orderId: order.id
  });
}
```

---

## 📋 STATE DEFINITIONS

### `pending`

**Definition:** Order created, awaiting payment

**Characteristics:**
- Payment not yet confirmed
- Inventory NOT reserved
- Can be cancelled without penalty
- Auto-cancels after 15 minutes if unpaid

**Allowed Actions:**
- User: Cancel
- System: Auto-cancel (timeout)

**Next States:** `confirmed`, `cancelled`

---

### `confirmed`

**Definition:** Payment captured, order confirmed

**Characteristics:**
- Payment held by gateway
- Inventory reserved
- Merchant notification sent
- Cancellation requires approval

**Allowed Actions:**
- Merchant: Accept (`processing`) or Reject (`cancelled`)
- User: Cancel (with merchant approval)

**Next States:** `processing`, `cancelled`

---

### `processing`

**Definition:** Merchant preparing order

**Characteristics:**
- Merchant is fulfilling
- ETA calculated
- User notified of progress

**Allowed Actions:**
- Merchant: Mark ready (`ready_for_pickup` or `out_for_delivery`)
- Merchant: Cancel (if can't fulfill)

**Next States:** `ready_for_pickup`, `out_for_delivery`, `cancelled`

---

### `ready_for_pickup`

**Definition:** Order ready for customer pickup

**Characteristics:**
- Customer notified
- QR code / OTP for verification
- Auto-cancels after 24 hours if not picked up

**Allowed Actions:**
- Merchant: Mark delivered (after pickup verification)

**Next States:** `delivered`, `cancelled` (timeout)

---

### `out_for_delivery`

**Definition:** Delivery partner assigned, in transit

**Characteristics:**
- Real-time tracking enabled
- Customer can see live location
- Delivery partner has order details

**Allowed Actions:**
- Delivery Partner: Mark delivered

**Next States:** `delivered`

---

### `delivered`

**Definition:** Order received by customer

**Characteristics:**
- Customer confirmed receipt
- Coins credited
- Return window opens (7 days)
- Eligible for settlement

**Allowed Actions:**
- Customer: Return (within 7 days)
- Finance: Settle (after hold period)

**Next States:** `returned`, `settled`

---

### `settled`

**Definition:** Financial settlement completed

**Characteristics:**
- Merchant paid out
- Platform commission booked
- No longer returnable
- **TERMINAL STATE**

**Allowed Actions:** None (terminal)

---

### `cancelled`

**Definition:** Order cancelled

**Characteristics:**
- Payment refunded (if captured)
- Inventory released
- No coins credited
- **TERMINAL STATE**

**Allowed Actions:** None (terminal)

---

### `returned`

**Definition:** Customer returned order

**Characteristics:**
- Return request approved
- Item inspection pending
- Refund processing initiated

**Allowed Actions:**
- Merchant: Approve/Reject return
- Finance: Process refund

**Next States:** `refunded`

---

### `refunded`

**Definition:** Refund completed

**Characteristics:**
- Payment returned to customer
- Coins reversed
- Commission reversed
- **TERMINAL STATE**

**Allowed Actions:** None (terminal)

---

## 🔐 OWNERSHIP & AUTHORITY

### Who Can Update Order Status?

| State Transition | Authority | Service | Method |
|------------------|-----------|---------|--------|
| `null` → `pending` | User | BizOne Orders | `createOrder()` |
| `pending` → `confirmed` | Payment Gateway | BizOne Orders | Webhook handler |
| `confirmed` → `processing` | Merchant | BizOne Fulfillment | `acceptOrder()` |
| `processing` → `ready_for_pickup` | Merchant | BizOne Fulfillment | `markReady()` |
| `processing` → `out_for_delivery` | Merchant | BizOne Fulfillment | `assignDelivery()` |
| `out_for_delivery` → `delivered` | Delivery Partner | BizOne Fulfillment | `confirmDelivery()` |
| `delivered` → `settled` | Finance Service | Finance Settlement | `processSettlement()` |
| Any → `cancelled` | Merchant/User/System | BizOne Orders | `cancelOrder()` |

### Code Enforcement

```javascript
// middleware/checkOrderAuthority.js
async function checkOrderUpdateAuthority(req, res, next) {
  const { orderId } = req.params;
  const { newStatus } = req.body;
  const userRole = req.user.role;

  const order = await db.orders.findByPk(orderId);
  const currentStatus = order.status;

  // Authority matrix
  const ALLOWED_TRANSITIONS = {
    'merchant_owner': ['confirmed→processing', 'processing→ready_for_pickup', 'processing→out_for_delivery'],
    'delivery_partner': ['out_for_delivery→delivered'],
    'customer': ['pending→cancelled', 'delivered→returned'],
    'finance_service': ['delivered→settled', 'returned→refunded']
  };

  const transition = `${currentStatus}→${newStatus}`;

  if (!ALLOWED_TRANSITIONS[userRole]?.includes(transition)) {
    throw new AppError(
      9001,
      `User role '${userRole}' cannot perform transition '${transition}'`,
      'You do not have permission to update this order'
    );
  }

  next();
}
```

---

## 📅 TIMELINE & SLAs

### Expected Transition Times

| Transition | Expected Time | SLA | Auto-Action if Exceeded |
|------------|---------------|-----|-------------------------|
| `pending` → `confirmed` | < 2 minutes | 15 minutes | Auto-cancel |
| `confirmed` → `processing` | < 30 minutes | 2 hours | Merchant alert |
| `processing` → `ready_for_pickup` | 30-60 minutes | 90 minutes | Customer notification |
| `processing` → `out_for_delivery` | 30-60 minutes | 90 minutes | Customer notification |
| `out_for_delivery` → `delivered` | 30 minutes | 2 hours | Escalation |
| `delivered` → `settled` | 7 days | 10 days | Auto-settle |

### Auto-Actions

```javascript
// cron/order-sla-monitor.js
async function monitorOrderSLAs() {
  // Auto-cancel pending orders after 15 minutes
  const expiredPending = await db.orders.findAll({
    where: {
      status: 'pending',
      created_at: { [Op.lt]: new Date(Date.now() - 15 * 60 * 1000) }
    }
  });

  for (const order of expiredPending) {
    await cancelOrder(order.id, 'Payment timeout');
  }

  // Auto-settle delivered orders after 7 days (no return window)
  const readyForSettlement = await db.orders.findAll({
    where: {
      status: 'delivered',
      delivered_at: { [Op.lt]: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
    }
  });

  for (const order of readyForSettlement) {
    await financeSDK.settlements.process(order.id);
  }
}

// Run every 5 minutes
setInterval(monitorOrderSLAs, 5 * 60 * 1000);
```

---

## 🔁 STATE TRANSITION IMPLEMENTATION

### Complete Example

```javascript
// bizone-orders/updateOrderStatus.js
async function updateOrderStatus(orderId, newStatus, metadata = {}) {
  const order = await db.orders.findByPk(orderId);

  if (!order) {
    throw new AppError(5002, 'Order not found');
  }

  const currentStatus = order.status;

  // Validate transition
  if (!isValidTransition(currentStatus, newStatus)) {
    throw new AppError(
      5005,
      `Invalid transition from '${currentStatus}' to '${newStatus}'`,
      'This status change is not allowed'
    );
  }

  // Begin transaction
  const transaction = await db.sequelize.transaction();

  try {
    // Update status
    await order.update({
      status: newStatus,
      [`${newStatus}_at`]: new Date(),
      updated_at: new Date()
    }, { transaction });

    // Record status history
    await db.order_status_history.create({
      order_id: orderId,
      from_status: currentStatus,
      to_status: newStatus,
      changed_by: metadata.changed_by || 'system',
      reason: metadata.reason,
      timestamp: new Date()
    }, { transaction });

    // Commit transaction
    await transaction.commit();

    // Emit event
    await publishEvent({
      event_type: 'order.status_changed',
      data: {
        order_id: orderId,
        previous_status: currentStatus,
        new_status: newStatus,
        changed_by: metadata.changed_by,
        metadata
      }
    });

    // Trigger side effects
    await handleSideEffects(order, currentStatus, newStatus);

    return order;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
}

// Side effects handler
async function handleSideEffects(order, fromStatus, toStatus) {
  // Credit coins on delivered
  if (toStatus === 'delivered') {
    await rabtulSDK.wallet.credit({
      userId: order.user_id,
      amount: order.coins_earned,
      type: 'rez_coins',
      reason: 'purchase_cashback',
      orderId: order.id
    });
  }

  // Reverse coins on refunded
  if (toStatus === 'refunded') {
    await rabtulSDK.wallet.debit({
      userId: order.user_id,
      amount: order.coins_earned,
      type: 'rez_coins',
      reason: 'refund_reversal',
      orderId: order.id
    });
  }

  // Send notifications
  await sendOrderStatusNotification(order, toStatus);

  // Update analytics
  await analyticsSDK.track('order_status_changed', {
    order_id: order.id,
    from_status: fromStatus,
    to_status: toStatus,
    user_id: order.user_id
  });
}
```

---

## ✅ STATE MACHINE CHECKLIST

Before implementing order status update:

- [ ] Valid transition per matrix?
- [ ] Authority checked (who can update)?
- [ ] Transaction used (atomic update)?
- [ ] Status history recorded?
- [ ] Event emitted?
- [ ] Side effects handled (coins, notifications)?
- [ ] Analytics tracked?
- [ ] SLA monitored?

**If ANY checkbox fails → DO NOT UPDATE**

---

**Status:** ✅ DEFINITIVE STATE MACHINE
**States Defined:** 9 states
**Transitions Defined:** 15+ transitions
**Last Updated:** 2026-01-03
