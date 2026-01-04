# EVENTS - EVENT BUS EMISSIONS

**Every event emitted during the order flow, in sequence.**

---

## 🎯 EVENT PHILOSOPHY

```
Events are emitted AFTER successful database commit.
Never emit events for operations that may rollback.
Events are immutable facts about what happened.
```

**If transaction fails → NO events emitted.**

---

## 📊 EVENT SEQUENCE

```
Order Flow Timeline:
├─ 1. order.validation_started
├─ 2. order.validation_completed
├─ 3. order.initiated
├─ 4. wallet.debit_started
├─ 5. wallet.debited (×4 - one per coin type)
├─ 6. order.paid
├─ 7. bizone.order_created
├─ 8. order.created
└─ 9. order.confirmation_sent
```

---

## EVENT 1: order.validation_started

**When**: User clicks "Place Order", before any mutations

### Payload:
```json
{
  "event": "order.validation_started",
  "version": "1.0",
  "timestamp": "2026-01-04T10:17:05.123Z",
  "data": {
    "user_id": "user_789",
    "merchant_id": "merch_bizone_001",
    "cart_value": 500,
    "campaign_code": "WEEKEND50",
    "delivery_pincode": "560001",
    "session_id": "sess_abc123"
  },
  "metadata": {
    "source": "order-service",
    "request_id": "req_125",
    "idempotency_key": "idem_user789_20260104_101700"
  }
}
```

### Consumers:
- Analytics Service (track conversion funnel)
- Monitoring (track validation latency)

---

## EVENT 2: order.validation_completed

**When**: Rules service completes all validation checks

### Payload:
```json
{
  "event": "order.validation_completed",
  "version": "1.0",
  "timestamp": "2026-01-04T10:17:08.456Z",
  "data": {
    "user_id": "user_789",
    "merchant_id": "merch_bizone_001",
    "can_checkout": true,
    "validations": {
      "min_order_value": true,
      "delivery_zone": true,
      "campaign_eligible": true,
      "user_kyc": true,
      "merchant_active": true
    },
    "duration_ms": 3333
  },
  "metadata": {
    "source": "rules-service",
    "request_id": "req_125"
  }
}
```

### Consumers:
- Analytics (track validation success rate)
- Monitoring (track validation performance)

---

## EVENT 3: order.initiated

**When**: Order record created with status=initiated (inside transaction)

### Payload:
```json
{
  "event": "order.initiated",
  "version": "1.0",
  "timestamp": "2026-01-04T10:17:10.789Z",
  "data": {
    "order_id": "order_101",
    "user_id": "user_789",
    "merchant_id": "merch_bizone_001",
    "merchant_name": "Fresh Mart BizOne",
    "merchant_company": "bizone",
    "order_value": 500,
    "discount": 50,
    "final_amount": 450,
    "campaign_code": "WEEKEND50",
    "campaign_id": "camp_weekend_001",
    "items_count": 2,
    "delivery_pincode": "560001"
  },
  "metadata": {
    "source": "order-service",
    "request_id": "req_125"
  }
}
```

### Consumers:
- Analytics (track order initiation rate)
- Monitoring (track order creation)
- Notification Service (prepare order confirmation)

---

## EVENT 4: wallet.debit_started

**When**: Before wallet transactions are created

### Payload:
```json
{
  "event": "wallet.debit_started",
  "version": "1.0",
  "timestamp": "2026-01-04T10:17:11.234Z",
  "data": {
    "user_id": "user_789",
    "transaction_type": "debit_order_payment",
    "total_amount": 450,
    "breakdown": [
      { "coin_type": "promo_coins", "amount": 200 },
      { "coin_type": "branded_coins", "amount": 150 },
      { "coin_type": "rez_coins", "amount": 100 }
    ],
    "related_order_id": "order_101"
  },
  "metadata": {
    "source": "wallet-service",
    "request_id": "req_125"
  }
}
```

### Consumers:
- Monitoring (track wallet debit latency)
- Fraud Detection (check for suspicious patterns)

---

## EVENT 5: wallet.debited (×4 times)

**When**: AFTER successful wallet transaction commit (one event per coin type)

### Payload 1: Promo Coins Debit
```json
{
  "event": "wallet.debited",
  "version": "1.0",
  "timestamp": "2026-01-04T10:17:12.567Z",
  "data": {
    "transaction_id": "txn_001",
    "user_id": "user_789",
    "transaction_type": "debit_order_payment",
    "coin_type": "promo_coins",
    "amount": 200,
    "balance_before": 200,
    "balance_after": 0,
    "related_entity": {
      "type": "order",
      "id": "order_101"
    },
    "metadata": {
      "campaign_code": "WEEKEND50",
      "merchant_id": "merch_bizone_001"
    }
  },
  "metadata": {
    "source": "wallet-service",
    "request_id": "req_125"
  }
}
```

### Payload 2: Branded Coins Debit
```json
{
  "event": "wallet.debited",
  "version": "1.0",
  "timestamp": "2026-01-04T10:17:12.567Z",
  "data": {
    "transaction_id": "txn_002",
    "user_id": "user_789",
    "transaction_type": "debit_order_payment",
    "coin_type": "branded_coins",
    "amount": 150,
    "balance_before": 150,
    "balance_after": 0,
    "related_entity": {
      "type": "order",
      "id": "order_101"
    }
  },
  "metadata": {
    "source": "wallet-service",
    "request_id": "req_125"
  }
}
```

### Payload 3: ReZ Coins Debit
```json
{
  "event": "wallet.debited",
  "version": "1.0",
  "timestamp": "2026-01-04T10:17:12.567Z",
  "data": {
    "transaction_id": "txn_003",
    "user_id": "user_789",
    "transaction_type": "debit_order_payment",
    "coin_type": "rez_coins",
    "amount": 100,
    "balance_before": 100,
    "balance_after": 0,
    "related_entity": {
      "type": "order",
      "id": "order_101"
    }
  },
  "metadata": {
    "source": "wallet-service",
    "request_id": "req_125"
  }
}
```

**Note**: All 4 events have SAME timestamp (atomic operation)

### Consumers:
- Analytics (track wallet usage patterns)
- Accounting (financial reconciliation)
- User Activity Log (transaction history)
- Notification (balance update push)

---

## EVENT 6: order.paid

**When**: Order status updated to 'paid' after successful wallet debit

### Payload:
```json
{
  "event": "order.paid",
  "version": "1.0",
  "timestamp": "2026-01-04T10:17:13.123Z",
  "data": {
    "order_id": "order_101",
    "user_id": "user_789",
    "merchant_id": "merch_bizone_001",
    "amount": 450,
    "payment_method": "wallet",
    "payment_breakdown": [
      { "type": "promo_coins", "amount": 200, "transaction_id": "txn_001" },
      { "type": "branded_coins", "amount": 150, "transaction_id": "txn_002" },
      { "type": "rez_coins", "amount": 100, "transaction_id": "txn_003" }
    ],
    "campaign_code": "WEEKEND50",
    "discount_applied": 50
  },
  "metadata": {
    "source": "order-service",
    "request_id": "req_125"
  }
}
```

### Consumers:
- BizOne Integration (trigger order creation)
- Analytics (track payment success rate)
- Accounting (revenue tracking)

---

## EVENT 7: bizone.order_created

**When**: BizOne confirms order creation via their API

### Payload:
```json
{
  "event": "bizone.order_created",
  "version": "1.0",
  "timestamp": "2026-01-04T10:17:14.789Z",
  "data": {
    "rabtul_order_id": "order_101",
    "bizone_order_id": "BZN_ORD_5678",
    "merchant_id": "merch_bizone_001",
    "status": "confirmed",
    "estimated_delivery": "2026-01-04T12:00:00Z",
    "tracking_url": "https://bizone.com/track/BZN_ORD_5678",
    "items_count": 2,
    "total_amount": 450
  },
  "metadata": {
    "source": "bizone-integration",
    "request_id": "req_125",
    "bizone_request_id": "bzn_req_999"
  }
}
```

### Consumers:
- Order Service (update order with BizOne reference)
- Monitoring (track BizOne integration health)
- Analytics (cross-company order tracking)

---

## EVENT 8: order.created

**When**: AFTER successful database commit (final step)

### Payload:
```json
{
  "event": "order.created",
  "version": "1.0",
  "timestamp": "2026-01-04T10:17:15.456Z",
  "data": {
    "order_id": "order_101",
    "user_id": "user_789",
    "user_name": "John Doe",
    "user_phone": "+91-9876543210",
    "merchant_id": "merch_bizone_001",
    "merchant_name": "Fresh Mart BizOne",
    "merchant_company": "bizone",
    "status": "created",
    "items": [
      {
        "product_id": "prod_123",
        "product_name": "Organic Apples (1 kg)",
        "quantity": 2,
        "unit_price": 150,
        "total": 300
      },
      {
        "product_id": "prod_124",
        "product_name": "Brown Bread (400g)",
        "quantity": 5,
        "unit_price": 40,
        "total": 200
      }
    ],
    "pricing": {
      "subtotal": 500,
      "discount": 50,
      "delivery_fee": 0,
      "total": 450
    },
    "payment": {
      "method": "wallet",
      "status": "paid",
      "transaction_ids": ["txn_001", "txn_002", "txn_003"]
    },
    "delivery": {
      "address": {
        "line1": "123, MG Road",
        "city": "Bangalore",
        "pincode": "560001"
      },
      "estimated_delivery": "2026-01-04T12:00:00Z"
    },
    "external_references": {
      "bizone_order_id": "BZN_ORD_5678",
      "bizone_tracking_url": "https://bizone.com/track/BZN_ORD_5678"
    },
    "campaign": {
      "code": "WEEKEND50",
      "campaign_id": "camp_weekend_001"
    },
    "created_at": "2026-01-04T10:17:15.456Z"
  },
  "metadata": {
    "source": "order-service",
    "request_id": "req_125",
    "idempotency_key": "idem_user789_20260104_101700"
  }
}
```

### Consumers:
- **Notification Service** (send order confirmation SMS, push, email)
- **Analytics Service** (track successful orders)
- **Data Warehouse** (sync order data)
- **Commission Service** (calculate commissions)
- **Loyalty Service** (credit future cashback)
- **Fraud Detection** (post-order analysis)
- **Merchant Dashboard** (show new order)
- **Customer Support** (order created in system)

---

## EVENT 9: order.confirmation_sent

**When**: After notification successfully sent to user

### Payload:
```json
{
  "event": "order.confirmation_sent",
  "version": "1.0",
  "timestamp": "2026-01-04T10:17:17.123Z",
  "data": {
    "order_id": "order_101",
    "user_id": "user_789",
    "channels": ["sms", "push", "email"],
    "sent_at": "2026-01-04T10:17:17.123Z",
    "sms_id": "sms_12345",
    "push_id": "push_67890",
    "email_id": "email_11111"
  },
  "metadata": {
    "source": "notification-service",
    "request_id": "req_125"
  }
}
```

### Consumers:
- Analytics (track notification success)
- Monitoring (track notification delivery)

---

## 🚨 ERROR EVENTS

### Event: order.failed

**When**: Order creation fails at any step

```json
{
  "event": "order.failed",
  "version": "1.0",
  "timestamp": "2026-01-04T10:18:00.123Z",
  "data": {
    "order_id": "order_102",
    "user_id": "user_789",
    "merchant_id": "merch_bizone_001",
    "failure_reason": "WALLET_INSUFFICIENT_BALANCE",
    "failure_stage": "wallet_debit",
    "amount_required": 450,
    "amount_available": 300,
    "order_value": 450,
    "rollback_completed": true
  },
  "metadata": {
    "source": "order-service",
    "request_id": "req_126"
  }
}
```

### Event: wallet.debit_failed

**When**: Wallet debit fails

```json
{
  "event": "wallet.debit_failed",
  "version": "1.0",
  "timestamp": "2026-01-04T10:18:00.456Z",
  "data": {
    "user_id": "user_789",
    "transaction_type": "debit_order_payment",
    "amount_required": 450,
    "amount_available": 300,
    "failure_reason": "WALLET_INSUFFICIENT_BALANCE",
    "related_order_id": "order_102"
  },
  "metadata": {
    "source": "wallet-service",
    "request_id": "req_126"
  }
}
```

### Event: wallet.refunded

**When**: Order fails AFTER wallet debit, coins refunded

```json
{
  "event": "wallet.refunded",
  "version": "1.0",
  "timestamp": "2026-01-04T10:18:05.789Z",
  "data": {
    "user_id": "user_789",
    "refund_reason": "order_failed",
    "original_order_id": "order_103",
    "original_transaction_ids": ["txn_010", "txn_011"],
    "refund_transaction_ids": ["txn_012", "txn_013"],
    "refund_breakdown": [
      { "coin_type": "promo_coins", "amount": 200 },
      { "coin_type": "rez_coins", "amount": 100 }
    ],
    "total_refunded": 300
  },
  "metadata": {
    "source": "wallet-service",
    "request_id": "req_127"
  }
}
```

---

## 📊 EVENT STATS

| Event | Frequency | Avg Consumers | Retention |
|-------|-----------|---------------|-----------|
| order.validation_started | 10,000/day | 2 | 7 days |
| order.validation_completed | 9,500/day | 2 | 7 days |
| order.initiated | 9,200/day | 3 | 30 days |
| wallet.debit_started | 9,200/day | 2 | 7 days |
| wallet.debited | 36,800/day (×4) | 4 | 90 days |
| order.paid | 9,200/day | 3 | 90 days |
| bizone.order_created | 9,200/day | 3 | 90 days |
| order.created | 9,200/day | 8 | 365 days |
| order.failed | 800/day | 5 | 90 days |

---

## 🔄 EVENT GUARANTEES

### At-Least-Once Delivery
- Events MAY be delivered more than once
- Consumers MUST be idempotent
- Use `metadata.request_id` for deduplication

### Ordering
- Events for SAME entity (order_id) are ordered
- Events across entities have NO ordering guarantee

### Retry Policy
- Failed deliveries retry: 1s, 5s, 30s, 5min, 1hr
- After 5 failures → Dead Letter Queue
- Manual intervention required

---

## 🧪 TESTING EVENTS

### Unit Test:
```typescript
test('order creation emits correct events', async () => {
  const eventSpy = jest.spyOn(eventBus, 'emit');

  await createOrder(orderData);

  expect(eventSpy).toHaveBeenCalledWith('order.initiated', expect.objectContaining({
    data: expect.objectContaining({
      order_id: expect.any(String),
      user_id: 'user_789'
    })
  }));

  expect(eventSpy).toHaveBeenCalledWith('wallet.debited', expect.anything());
  expect(eventSpy).toHaveBeenCalledWith('order.created', expect.anything());
});
```

---

**Generated**: 2026-01-04
**Status**: PRODUCTION-READY
**Last Updated**: 2026-01-04
