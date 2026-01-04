# API CALLS - EXACT REQUEST/RESPONSE PAYLOADS

**Complete copy-paste-ready examples for every API call in the order flow.**

---

## 📋 CALL SEQUENCE

From user browsing to order confirmed:

```
1. GET /api/merchants/{id}
2. GET /api/merchants/{id}/products
3. POST /api/campaigns/validate-coupon
4. POST /api/orders
   ├─> POST /rules/validate-checkout
   ├─> POST /rules/calculate-coin-breakdown
   ├─> POST /wallet/debit
   └─> POST /bizone/api/orders
5. GET /api/orders/{id}
```

---

## 1️⃣ GET MERCHANT DETAILS

### Request:
```http
GET /api/merchants/merch_bizone_001 HTTP/1.1
Host: api.rabtul.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
X-SDK-Version: 2.1.0
```

### Response: 200 OK
```json
{
  "data": {
    "id": "merch_bizone_001",
    "name": "Fresh Mart BizOne",
    "type": "bizone",
    "company_id": "comp_bizone",
    "status": "active",
    "category": "grocery",
    "rating": 4.5,
    "total_orders": 1250,
    "delivery_zones": ["zone_north", "zone_central"],
    "min_order_value": 100,
    "delivery_fee": 40,
    "estimated_delivery_time": "30-45 mins",
    "logo_url": "https://cdn.rabtul.com/merchants/merch_bizone_001/logo.png",
    "cover_image_url": "https://cdn.rabtul.com/merchants/merch_bizone_001/cover.jpg",
    "tags": ["fast_delivery", "top_rated"],
    "operating_hours": {
      "open": "08:00",
      "close": "22:00",
      "is_open_now": true
    }
  },
  "metadata": {
    "request_id": "req_123",
    "timestamp": "2026-01-04T10:15:00Z"
  }
}
```

---

## 2️⃣ GET MERCHANT PRODUCTS

### Request:
```http
GET /api/merchants/merch_bizone_001/products?category=grocery&limit=20 HTTP/1.1
Host: api.rabtul.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
X-SDK-Version: 2.1.0
```

### Response: 200 OK
```json
{
  "data": {
    "products": [
      {
        "id": "prod_123",
        "merchant_id": "merch_bizone_001",
        "name": "Organic Apples (1 kg)",
        "description": "Fresh organic apples from Kashmir",
        "category": "grocery",
        "subcategory": "fruits",
        "price": 150,
        "mrp": 180,
        "discount_percent": 17,
        "stock_quantity": 50,
        "in_stock": true,
        "unit": "kg",
        "images": [
          "https://cdn.rabtul.com/products/prod_123/img1.jpg",
          "https://cdn.rabtul.com/products/prod_123/img2.jpg"
        ],
        "tags": ["organic", "fresh", "seasonal"]
      },
      {
        "id": "prod_124",
        "merchant_id": "merch_bizone_001",
        "name": "Brown Bread (400g)",
        "price": 40,
        "mrp": 45,
        "discount_percent": 11,
        "in_stock": true
      }
    ],
    "pagination": {
      "total": 120,
      "page": 1,
      "limit": 20,
      "has_more": true
    }
  }
}
```

---

## 3️⃣ VALIDATE CAMPAIGN COUPON

### Request:
```http
POST /api/campaigns/validate-coupon HTTP/1.1
Host: api.rabtul.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json
X-SDK-Version: 2.1.0

{
  "coupon_code": "WEEKEND50",
  "user_id": "user_789",
  "merchant_id": "merch_bizone_001",
  "cart_value": 500,
  "items": [
    {
      "product_id": "prod_123",
      "quantity": 2,
      "unit_price": 150
    },
    {
      "product_id": "prod_124",
      "quantity": 5,
      "unit_price": 40
    }
  ]
}
```

### Response: 200 OK
```json
{
  "data": {
    "valid": true,
    "campaign_id": "camp_weekend_001",
    "coupon_code": "WEEKEND50",
    "discount_type": "percentage",
    "discount_value": 10,
    "discount_amount": 50,
    "max_discount": 100,
    "final_amount": 450,
    "breakdown": {
      "cart_value": 500,
      "discount": 50,
      "delivery_fee": 0,
      "total": 450
    },
    "campaign_details": {
      "name": "Weekend Special",
      "description": "10% off on orders above ₹400",
      "valid_until": "2026-01-05T23:59:59Z",
      "remaining_uses": 2,
      "user_max_uses": 3
    }
  }
}
```

### Response: 400 BAD REQUEST (Invalid Coupon)
```json
{
  "error": {
    "code": "CAMPAIGN_INVALID_COUPON",
    "message": "Coupon code is invalid or expired",
    "details": {
      "coupon_code": "WEEKEND50",
      "reason": "expired",
      "expired_at": "2026-01-03T23:59:59Z"
    }
  },
  "metadata": {
    "request_id": "req_124",
    "timestamp": "2026-01-04T10:16:00Z"
  }
}
```

---

## 4️⃣ CREATE ORDER (Main Orchestration)

### Request:
```http
POST /api/orders HTTP/1.1
Host: api.rabtul.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json
X-SDK-Version: 2.1.0
X-Idempotency-Key: idem_user789_20260104_101700

{
  "user_id": "user_789",
  "merchant_id": "merch_bizone_001",
  "items": [
    {
      "product_id": "prod_123",
      "quantity": 2,
      "unit_price": 150
    },
    {
      "product_id": "prod_124",
      "quantity": 5,
      "unit_price": 40
    }
  ],
  "delivery_address": {
    "id": "addr_456",
    "line1": "123, MG Road",
    "line2": "Near Central Mall",
    "city": "Bangalore",
    "state": "Karnataka",
    "pincode": "560001",
    "phone": "+91-9876543210",
    "coordinates": {
      "lat": 12.9716,
      "lng": 77.5946
    }
  },
  "payment_method": "wallet",
  "campaign_code": "WEEKEND50",
  "special_instructions": "Please call before delivery"
}
```

### Internal Call 4a: Validate Checkout
```http
POST /rules/validate-checkout HTTP/1.1
Host: rules.rabtul.internal
Content-Type: application/json

{
  "user_id": "user_789",
  "merchant_id": "merch_bizone_001",
  "order_value": 450,
  "delivery_address": { ... },
  "campaign_code": "WEEKEND50"
}
```

### Internal Response 4a:
```json
{
  "can_checkout": true,
  "validations": {
    "min_order_value": { "valid": true, "threshold": 100, "actual": 450 },
    "delivery_zone": { "valid": true, "zone": "zone_north" },
    "campaign_eligible": { "valid": true, "campaign_id": "camp_weekend_001" },
    "user_kyc": { "valid": true, "kyc_status": "verified" },
    "merchant_active": { "valid": true },
    "user_blocked": { "valid": true, "is_blocked": false }
  }
}
```

### Internal Call 4b: Calculate Coin Breakdown
```http
POST /rules/calculate-coin-breakdown HTTP/1.1
Host: rules.rabtul.internal
Content-Type: application/json

{
  "user_id": "user_789",
  "amount": 450,
  "campaign_code": "WEEKEND50"
}
```

### Internal Response 4b:
```json
{
  "total_amount": 450,
  "breakdown": [
    {
      "coin_type": "promo_coins",
      "amount": 200,
      "priority": 1,
      "available_balance": 200
    },
    {
      "coin_type": "branded_coins",
      "amount": 150,
      "priority": 2,
      "available_balance": 150
    },
    {
      "coin_type": "rez_coins",
      "amount": 100,
      "priority": 3,
      "available_balance": 100
    },
    {
      "coin_type": "cash",
      "amount": 0,
      "priority": 4,
      "available_balance": 50
    }
  ],
  "sufficient_balance": true
}
```

### Internal Call 4c: Debit Wallet
```http
POST /wallet/debit HTTP/1.1
Host: wallet.rabtul.internal
Content-Type: application/json

{
  "user_id": "user_789",
  "transaction_type": "debit_order_payment",
  "amount": 450,
  "breakdown": [
    { "coin_type": "promo_coins", "amount": 200 },
    { "coin_type": "branded_coins", "amount": 150 },
    { "coin_type": "rez_coins", "amount": 100 }
  ],
  "related_entity": {
    "type": "order",
    "id": "order_101"
  },
  "idempotency_key": "wallet_debit_order101_user789"
}
```

### Internal Response 4c:
```json
{
  "success": true,
  "transaction_ids": [
    "txn_001", // promo debit
    "txn_002", // branded debit
    "txn_003"  // rez debit
  ],
  "new_balance": {
    "promo_coins": 0,
    "branded_coins": 0,
    "rez_coins": 0,
    "cash": 50,
    "total_coins": 0,
    "total_value": 50
  },
  "timestamp": "2026-01-04T10:17:15Z"
}
```

### Internal Call 4d: Create Order in BizOne
```http
POST /bizone/api/orders HTTP/1.1
Host: api.bizone.com
Authorization: Bearer <bizone_api_key>
Content-Type: application/json

{
  "external_order_id": "order_101",
  "source": "rabtul",
  "merchant_id": "merch_bizone_001",
  "customer": {
    "name": "John Doe",
    "phone": "+91-9876543210"
  },
  "items": [
    {
      "product_id": "prod_123",
      "name": "Organic Apples (1 kg)",
      "quantity": 2,
      "unit_price": 150,
      "total": 300
    },
    {
      "product_id": "prod_124",
      "name": "Brown Bread (400g)",
      "quantity": 5,
      "unit_price": 40,
      "total": 200
    }
  ],
  "total_amount": 450,
  "payment_status": "paid",
  "payment_method": "prepaid_wallet",
  "delivery_address": {
    "line1": "123, MG Road",
    "line2": "Near Central Mall",
    "city": "Bangalore",
    "state": "Karnataka",
    "pincode": "560001",
    "phone": "+91-9876543210"
  },
  "special_instructions": "Please call before delivery"
}
```

### Internal Response 4d:
```json
{
  "success": true,
  "bizone_order_id": "BZN_ORD_5678",
  "status": "confirmed",
  "estimated_delivery": "2026-01-04T12:00:00Z",
  "tracking_url": "https://bizone.com/track/BZN_ORD_5678"
}
```

### Final Response: 201 CREATED
```json
{
  "data": {
    "id": "order_101",
    "user_id": "user_789",
    "merchant_id": "merch_bizone_001",
    "merchant_name": "Fresh Mart BizOne",
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
      "breakdown": [
        { "type": "promo_coins", "amount": 200 },
        { "type": "branded_coins", "amount": 150 },
        { "type": "rez_coins", "amount": 100 }
      ],
      "transaction_ids": ["txn_001", "txn_002", "txn_003"]
    },
    "campaign": {
      "code": "WEEKEND50",
      "campaign_id": "camp_weekend_001",
      "discount_amount": 50
    },
    "delivery": {
      "address": {
        "line1": "123, MG Road",
        "line2": "Near Central Mall",
        "city": "Bangalore",
        "state": "Karnataka",
        "pincode": "560001"
      },
      "estimated_time": "30-45 mins",
      "estimated_delivery": "2026-01-04T12:00:00Z"
    },
    "external_references": {
      "bizone_order_id": "BZN_ORD_5678",
      "bizone_tracking_url": "https://bizone.com/track/BZN_ORD_5678"
    },
    "created_at": "2026-01-04T10:17:15Z",
    "updated_at": "2026-01-04T10:17:15Z"
  },
  "metadata": {
    "request_id": "req_125",
    "idempotency_key": "idem_user789_20260104_101700",
    "timestamp": "2026-01-04T10:17:15Z"
  }
}
```

---

## 5️⃣ GET ORDER DETAILS

### Request:
```http
GET /api/orders/order_101 HTTP/1.1
Host: api.rabtul.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
X-SDK-Version: 2.1.0
```

### Response: 200 OK
```json
{
  "data": {
    "id": "order_101",
    "status": "created",
    "items": [...],
    "pricing": {...},
    "payment": {...},
    "delivery": {...},
    "timeline": [
      {
        "status": "initiated",
        "timestamp": "2026-01-04T10:17:10Z",
        "description": "Order initiated"
      },
      {
        "status": "paid",
        "timestamp": "2026-01-04T10:17:12Z",
        "description": "Payment successful"
      },
      {
        "status": "created",
        "timestamp": "2026-01-04T10:17:15Z",
        "description": "Order confirmed"
      }
    ],
    "created_at": "2026-01-04T10:17:15Z"
  }
}
```

---

## 🚨 ERROR RESPONSES

### Error 1: Insufficient Balance
```json
{
  "error": {
    "code": "WALLET_INSUFFICIENT_BALANCE",
    "message": "Insufficient wallet balance to complete order",
    "details": {
      "required_amount": 450,
      "available_balance": 300,
      "shortfall": 150,
      "breakdown": {
        "promo_coins": 200,
        "branded_coins": 50,
        "rez_coins": 50,
        "cash": 0
      }
    }
  },
  "metadata": {
    "request_id": "req_126",
    "timestamp": "2026-01-04T10:18:00Z"
  }
}
```

### Error 2: Order Below Minimum
```json
{
  "error": {
    "code": "ORDER_BELOW_MINIMUM_VALUE",
    "message": "Order value is below merchant minimum",
    "details": {
      "order_value": 80,
      "minimum_value": 100,
      "merchant_id": "merch_bizone_001"
    }
  }
}
```

### Error 3: Out of Delivery Zone
```json
{
  "error": {
    "code": "ORDER_OUT_OF_DELIVERY_ZONE",
    "message": "Delivery address is outside merchant's service area",
    "details": {
      "pincode": "560099",
      "available_zones": ["zone_north", "zone_central"],
      "suggested_merchants": ["merch_other_001", "merch_other_002"]
    }
  }
}
```

### Error 4: BizOne API Failed
```json
{
  "error": {
    "code": "ORDER_EXTERNAL_SERVICE_ERROR",
    "message": "Unable to create order with merchant at this time",
    "details": {
      "service": "bizone",
      "reason": "timeout",
      "retry_after": 30,
      "order_status": "failed",
      "wallet_refunded": true,
      "refund_transaction_ids": ["txn_004", "txn_005", "txn_006"]
    }
  }
}
```

---

## 📊 RESPONSE TIME BENCHMARKS

| API Call | P50 | P95 | P99 |
|----------|-----|-----|-----|
| GET /merchants/{id} | 80ms | 150ms | 250ms |
| GET /products | 120ms | 200ms | 350ms |
| POST /validate-coupon | 100ms | 180ms | 300ms |
| POST /orders | 900ms | 1500ms | 2500ms |
| ├─ validate-checkout | 150ms | 250ms | 400ms |
| ├─ coin-breakdown | 50ms | 100ms | 180ms |
| ├─ wallet debit | 100ms | 200ms | 350ms |
| └─ bizone create | 500ms | 900ms | 1500ms |

---

## 🔐 AUTHENTICATION

All API calls require:

```http
Authorization: Bearer <access_token>
X-SDK-Version: 2.1.0
```

SDK handles this automatically:
```typescript
const orderSDK = new OrderSDK(accessToken);
await orderSDK.createOrder(orderData);
```

---

**Generated**: 2026-01-04
**Status**: PRODUCTION-READY
**Last Updated**: 2026-01-04
