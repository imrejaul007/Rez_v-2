# 📨 Event Schema Registry - RTMN Ecosystem

**Last Updated:** 2026-01-03
**Status:** ✅ CANONICAL EVENT DEFINITIONS
**Purpose:** Exact event schemas, ordering guarantees, retry policies

---

## ⚠️ CRITICAL: EVENTS ARE CONTRACTS

**All events MUST:**
- ✅ Have unique canonical names
- ✅ Include required fields
- ✅ Provide idempotency keys
- ✅ Follow ordering guarantees
- ✅ Support retries with backoff
- ✅ Handle dead-letter scenarios

---

## 📊 EVENT CATEGORIES

### 1. Order Events
### 2. Wallet Events
### 3. Campaign Events
### 4. User Events
### 5. Merchant Events
### 6. System Events

---

## 1️⃣ ORDER EVENTS

### `order.created`

**When:** User places order

**Schema:**
```typescript
{
  event_id: string;           // UUID (idempotency key)
  event_type: "order.created";
  version: "1.0";
  timestamp: string;          // ISO 8601
  source: "bizone-orders";

  data: {
    order_id: string;
    order_number: string;
    user_id: string;
    merchant_id: string;
    company_id: string;       // Tenant isolation

    items: Array<{
      product_id: string;
      quantity: number;
      price: number;
      subtotal: number;
    }>;

    totals: {
      subtotal: number;
      discount_amount: number;
      coins_redeemed: number;
      delivery_fee: number;
      tax_amount: number;
      total_amount: number;
    };

    delivery_address_id: string;
    payment_method: string;

    metadata: {
      ip_address: string;
      user_agent: string;
      device_id: string;
    };
  };
}
```

**Ordering Guarantee:** At-least-once delivery
**Retry Policy:** Exponential backoff (1s, 2s, 4s, 8s, 16s)
**Dead Letter:** After 5 failures → manual review

---

### `order.status_changed`

**When:** Order status transitions

**Schema:**
```typescript
{
  event_id: string;
  event_type: "order.status_changed";
  version: "1.0";
  timestamp: string;
  source: "bizone-fulfillment";

  data: {
    order_id: string;
    previous_status: OrderStatus;  // "pending", "confirmed", etc.
    new_status: OrderStatus;
    changed_by: string;            // user_id or "system"
    reason?: string;               // For cancellations

    metadata?: {
      delivery_partner_id?: string;
      estimated_delivery?: string;
      tracking_url?: string;
    };
  };
}
```

**Ordering Guarantee:** MUST maintain order (sequence number)
**Idempotency:** Event ID + order_id + status = unique
**Retry Policy:** Same as order.created

---

### `order.completed`

**When:** Order delivered and confirmed

**Schema:**
```typescript
{
  event_id: string;
  event_type: "order.completed";
  version: "1.0";
  timestamp: string;
  source: "bizone-fulfillment";

  data: {
    order_id: string;
    user_id: string;
    merchant_id: string;
    total_amount: number;

    // For coin calculation
    coins_to_award: number;
    coin_calculation_version: string; // Rule version used

    // For settlement
    commission_amount: number;
    merchant_payout: number;

    completed_at: string;
  };
}
```

**Triggers:**
- Coin credit (`wallet.credit.requested`)
- Settlement processing
- Analytics tracking

---

## 2️⃣ WALLET EVENTS

### `wallet.credit.requested`

**When:** Service requests coin credit

**Schema:**
```typescript
{
  event_id: string;
  event_type: "wallet.credit.requested";
  version: "1.0";
  timestamp: string;
  source: string;                // "bizone-orders", "adzy-campaigns", etc.

  data: {
    user_id: string;
    amount: number;
    coin_type: "rez_coins" | "branded_coins" | "promo_coins";
    reason: string;              // "purchase_cashback", "referral", etc.
    source_id: string;           // order_id, campaign_id, etc. (idempotency)

    metadata: {
      order_amount?: number;
      category?: string;
      merchant_id?: string;
    };
  };
}
```

**Idempotency Key:** `user_id` + `source_id` + `reason`

---

### `wallet.credit.confirmed`

**When:** Rabtul successfully credits wallet

**Schema:**
```typescript
{
  event_id: string;
  event_type: "wallet.credit.confirmed";
  version: "1.0";
  timestamp: string;
  source: "rabtul-wallet";
  correlation_id: string;        // Links to credit.requested

  data: {
    user_id: string;
    transaction_id: string;      // Ledger entry ID
    amount: number;
    coin_type: string;

    new_balance: {
      rez_coins: number;
      branded_coins: number;
      promo_coins: number;
      total: number;
    };

    expires_at: string;          // Coin expiry date
  };
}
```

**Triggers:**
- Push notification to user
- Real-time balance update (Socket.IO)

---

### `wallet.debit.requested`

**When:** User redeems coins

**Schema:**
```typescript
{
  event_id: string;
  event_type: "wallet.debit.requested";
  version: "1.0";
  timestamp: string;
  source: "rez-checkout" | "dinezy-checkout";

  data: {
    user_id: string;
    amount: number;
    order_id: string;            // Idempotency key

    redemption_breakdown: {
      promo_coins: number;
      branded_coins: number;
      rez_coins: number;
    };
  };
}
```

---

### `wallet.debit.confirmed`

**When:** Rabtul successfully debits wallet

**Schema:**
```typescript
{
  event_id: string;
  event_type: "wallet.debit.confirmed";
  version: "1.0";
  timestamp: string;
  source: "rabtul-wallet";
  correlation_id: string;

  data: {
    user_id: string;
    transaction_id: string;
    amount: number;

    new_balance: {
      rez_coins: number;
      branded_coins: number;
      promo_coins: number;
      total: number;
    };
  };
}
```

---

## 3️⃣ CAMPAIGN EVENTS

### `campaign.attributed`

**When:** User action attributed to campaign

**Schema:**
```typescript
{
  event_id: string;
  event_type: "campaign.attributed";
  version: "1.0";
  timestamp: string;
  source: "adzy-attribution";

  data: {
    campaign_id: string;
    user_id: string;
    order_id?: string;
    action: "view" | "click" | "purchase";

    attribution_model: "first_touch" | "last_touch" | "weighted";

    journey: Array<{
      app: string;
      timestamp: string;
      action: string;
    }>;

    value?: number;              // For purchase attribution
  };
}
```

---

## 4️⃣ USER EVENTS

### `user.registered`

**Schema:**
```typescript
{
  event_id: string;
  event_type: "user.registered";
  version: "1.0";
  timestamp: string;
  source: "rabtul-auth";

  data: {
    user_id: string;
    phone: string;
    email?: string;
    tier: "basic";

    registration_method: "otp" | "google" | "facebook";
    referral_code?: string;

    metadata: {
      device_id: string;
      platform: "android" | "ios" | "web";
      app_version: string;
    };
  };
}
```

**Triggers:**
- Wallet creation
- Welcome email
- Referral credit (if applicable)

---

### `user.tier_upgraded`

**Schema:**
```typescript
{
  event_id: string;
  event_type: "user.tier_upgraded";
  version: "1.0";
  timestamp: string;
  source: "rabtul-tier-engine";

  data: {
    user_id: string;
    previous_tier: "basic" | "silver" | "gold" | "prive";
    new_tier: "silver" | "gold" | "prive";

    criteria_met: {
      total_spend_90d: number;
      order_count_90d: number;
    };
  };
}
```

---

## 5️⃣ MERCHANT EVENTS

### `merchant.approved`

**Schema:**
```typescript
{
  event_id: string;
  event_type: "merchant.approved";
  version: "1.0";
  timestamp: string;
  source: "hq-admin";

  data: {
    merchant_id: string;
    company_id: string;
    approved_by: string;         // admin user_id

    business_details: {
      name: string;
      category: string;
      gstin: string;
    };
  };
}
```

---

## 6️⃣ SYSTEM EVENTS

### `system.rule_changed`

**Schema:**
```typescript
{
  event_id: string;
  event_type: "system.rule_changed";
  version: "1.0";
  timestamp: string;
  source: "rabtul-governance";

  data: {
    rule_id: string;
    previous_version: string;
    new_version: string;

    changed_by: string;
    change_reason: string;

    effective_from: string;
    backward_compatible: boolean;
  };
}
```

---

## 🔄 EVENT ORDERING GUARANTEES

### Guarantee Levels

| Event Type | Ordering | Delivery | Notes |
|------------|----------|----------|-------|
| `order.*` | **Strict** | At-least-once | MUST maintain sequence |
| `wallet.*` | **Strict** | Exactly-once | No duplicates |
| `campaign.*` | **Eventual** | At-least-once | Can be reordered |
| `user.*` | **Eventual** | At-least-once | Can be reordered |
| `system.*` | **Strict** | At-least-once | MUST maintain sequence |

### Sequence Number Implementation

```typescript
{
  event_id: string;
  event_type: string;
  version: string;
  timestamp: string;

  // Sequence tracking
  sequence: {
    number: number;             // Auto-incrementing
    entity_id: string;          // order_id, user_id, etc.
    entity_type: string;        // "order", "wallet", etc.
  };

  // Previous event link (for strict ordering)
  previous_event_id?: string;

  data: {...};
}
```

### Consumer Processing

```javascript
async function processEventWithOrdering(event) {
  if (event.sequence) {
    const { number, entity_id, entity_type } = event.sequence;

    // Check for gaps
    const lastProcessed = await getLastProcessedSequence(entity_id, entity_type);

    if (number !== lastProcessed + 1) {
      // Out of order - enqueue for later
      await enqueueOutOfOrderEvent(event);
      return;
    }
  }

  // Process event
  await handleEvent(event);

  // Update processed sequence
  await updateLastProcessedSequence(event.sequence);
}
```

---

## 🔁 RETRY POLICIES

### Exponential Backoff

```javascript
const RETRY_CONFIG = {
  max_attempts: 5,
  initial_delay_ms: 1000,
  max_delay_ms: 60000,
  multiplier: 2,
  jitter: true
};

async function retryWithBackoff(fn, config = RETRY_CONFIG) {
  let delay = config.initial_delay_ms;

  for (let attempt = 1; attempt <= config.max_attempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === config.max_attempts) {
        // Max retries exceeded → Dead Letter Queue
        await sendToDeadLetterQueue(fn, error);
        throw error;
      }

      // Add jitter (±25%)
      const jitter = config.jitter ? (Math.random() - 0.5) * 0.5 : 0;
      const waitTime = Math.min(delay * (1 + jitter), config.max_delay_ms);

      await sleep(waitTime);
      delay *= config.multiplier;
    }
  }
}
```

### Dead Letter Queue

```javascript
async function sendToDeadLetterQueue(event, error) {
  await db.dead_letter_events.create({
    event_id: event.event_id,
    event_type: event.event_type,
    event_data: event,
    error_message: error.message,
    error_stack: error.stack,
    failed_at: new Date(),
    retry_count: 5,
    status: 'manual_review_required'
  });

  // Alert ops team
  await alertOps({
    severity: 'HIGH',
    title: `Event processing failed: ${event.event_type}`,
    event_id: event.event_id,
    error: error.message
  });
}
```

---

## 📖 EVENT PUBLISHING EXAMPLE

```javascript
// bizone-orders/publish-order-created.js
async function publishOrderCreated(order) {
  const event = {
    event_id: uuidv4(),
    event_type: 'order.created',
    version: '1.0',
    timestamp: new Date().toISOString(),
    source: 'bizone-orders',

    sequence: {
      number: await getNextSequence('order', order.id),
      entity_id: order.id,
      entity_type: 'order'
    },

    data: {
      order_id: order.id,
      order_number: order.order_number,
      user_id: order.user_id,
      merchant_id: order.merchant_id,
      company_id: order.company_id,

      items: order.items.map(item => ({
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price,
        subtotal: item.subtotal
      })),

      totals: {
        subtotal: order.subtotal,
        discount_amount: order.discount_amount,
        coins_redeemed: order.coins_redeemed,
        delivery_fee: order.delivery_fee,
        tax_amount: order.tax_amount,
        total_amount: order.total_amount
      },

      delivery_address_id: order.delivery_address_id,
      payment_method: order.payment_method,

      metadata: {
        ip_address: req.ip,
        user_agent: req.headers['user-agent'],
        device_id: req.body.device_id
      }
    }
  };

  // Publish to Kafka
  await kafka.send({
    topic: 'rtmn.orders',
    messages: [{
      key: order.id,              // Partition by order_id
      value: JSON.stringify(event),
      headers: {
        'event-type': 'order.created',
        'schema-version': '1.0'
      }
    }]
  });

  // Audit log
  await auditLog({
    action: 'event_published',
    event_type: 'order.created',
    event_id: event.event_id,
    entity_id: order.id
  });
}
```

---

## ✅ EVENT SCHEMA CHECKLIST

Before publishing ANY event:

- [ ] Event type in canonical format (`domain.action`)?
- [ ] Event ID (UUID) provided?
- [ ] Version specified?
- [ ] Timestamp in ISO 8601?
- [ ] Source service identified?
- [ ] Required fields present?
- [ ] Idempotency key included?
- [ ] Sequence number (if strict ordering)?
- [ ] Schema documented in this registry?
- [ ] Retry policy defined?

**If ANY checkbox fails → DO NOT PUBLISH**

---

**Status:** ✅ CANONICAL EVENT REGISTRY
**Total Events Defined:** 15+ core events
**Last Updated:** 2026-01-03
