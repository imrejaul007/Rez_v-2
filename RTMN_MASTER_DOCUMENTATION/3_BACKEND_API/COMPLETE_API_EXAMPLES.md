# Complete API Request/Response Examples

**Last Updated:** 2026-01-03
**Status:** Production-Ready
**Purpose:** Copy-paste ready examples for all major endpoints

---

## 📋 OVERVIEW

This document provides **real, complete examples** for all critical API endpoints with:
- ✅ Full request bodies
- ✅ Complete response structures
- ✅ Error scenarios
- ✅ Edge cases
- ✅ Authentication headers

---

## 🔐 AUTHENTICATION

### 1. Register User (OTP-based)

#### Request OTP

```http
POST /api/auth/request-otp
Content-Type: application/json

{
  "phone": "+919876543210"
}
```

#### Response (Success)

```json
{
  "success": true,
  "message": "OTP sent successfully",
  "data": {
    "expiresIn": 300,
    "canResendAfter": 30
  },
  "meta": {
    "timestamp": "2026-01-03T10:30:00Z",
    "requestId": "req_abc123"
  }
}
```

#### Response (Rate Limited)

```json
{
  "success": false,
  "error": {
    "code": 1002,
    "message": "Please wait 25 seconds before requesting new OTP",
    "retryAfter": 25,
    "retryable": true
  }
}
```

---

### 2. Verify OTP & Register

```http
POST /api/auth/verify-otp
Content-Type: application/json

{
  "phone": "+919876543210",
  "otp": "123456",
  "deviceInfo": {
    "deviceId": "device_xyz789",
    "platform": "android",
    "appVersion": "1.0.0",
    "fcmToken": "fcm_token_here"
  }
}
```

#### Response (Success - New User)

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "phone": "+919876543210",
      "email": null,
      "firstName": null,
      "lastName": null,
      "role": "customer",
      "tier": "basic",
      "isEmailVerified": false,
      "isPhoneVerified": true,
      "createdAt": "2026-01-03T10:30:00Z"
    },
    "wallet": {
      "id": "wallet_123",
      "rezCoins": 0,
      "brandedCoins": 0,
      "promoCoins": 0,
      "lifetimeEarned": 0,
      "lifetimeRedeemed": 0
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "expiresIn": 900,
      "tokenType": "Bearer"
    },
    "isNewUser": true
  },
  "meta": {
    "timestamp": "2026-01-03T10:30:15Z"
  }
}
```

#### Response (Error - Invalid OTP)

```json
{
  "success": false,
  "error": {
    "code": 1003,
    "message": "Invalid OTP. 2 attempts remaining.",
    "field": "otp",
    "attemptsRemaining": 2,
    "retryable": true
  }
}
```

---

### 3. Login (Existing User)

```http
POST /api/auth/login
Content-Type: application/json

{
  "phone": "+919876543210",
  "password": "SecurePass@123"
}
```

#### Response (Success)

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "phone": "+919876543210",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "avatar": "https://cdn.rtmn.in/avatars/user_123.jpg",
      "role": "customer",
      "tier": "gold"
    },
    "wallet": {
      "rezCoins": 1250.50,
      "brandedCoins": 100,
      "promoCoins": 50
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "expiresIn": 900
    }
  }
}
```

---

### 4. Refresh Token

```http
POST /api/auth/refresh-token
Content-Type: application/json

{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Response

```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 900
  }
}
```

---

## 🛒 CART & CHECKOUT

### 1. Add Item to Cart

```http
POST /api/cart/add
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "productId": "550e8400-e29b-41d4-a716-446655440000",
  "quantity": 2,
  "variantId": "660e8400-e29b-41d4-a716-446655440001",
  "customizations": {
    "size": "L",
    "color": "Blue"
  }
}
```

#### Response (Success)

```json
{
  "success": true,
  "data": {
    "cart": {
      "id": "cart_123",
      "userId": "user_456",
      "items": [
        {
          "id": "item_789",
          "productId": "550e8400-e29b-41d4-a716-446655440000",
          "product": {
            "name": "Blue T-Shirt",
            "image": "https://cdn.rtmn.in/products/tshirt-blue-l.jpg",
            "price": 499,
            "mrp": 999,
            "discount": 50,
            "merchant": {
              "id": "merchant_111",
              "name": "Fashion Store",
              "logo": "https://cdn.rtmn.in/merchants/fashion-store.jpg"
            }
          },
          "quantity": 2,
          "variantId": "660e8400-e29b-41d4-a716-446655440001",
          "variant": {
            "size": "L",
            "color": "Blue"
          },
          "subtotal": 998
        }
      ],
      "summary": {
        "itemCount": 2,
        "subtotal": 998,
        "savings": 1000,
        "coinsEarnable": 49
      },
      "updatedAt": "2026-01-03T10:35:00Z"
    }
  },
  "meta": {
    "timestamp": "2026-01-03T10:35:00Z"
  }
}
```

#### Response (Error - Out of Stock)

```json
{
  "success": false,
  "error": {
    "code": 3001,
    "message": "Product out of stock",
    "field": "quantity",
    "details": "Only 1 item remaining",
    "retryable": false,
    "availableQuantity": 1
  }
}
```

---

### 2. Get Cart

```http
GET /api/cart
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Response

```json
{
  "success": true,
  "data": {
    "cart": {
      "id": "cart_123",
      "items": [
        {
          "id": "item_789",
          "product": {
            "id": "550e8400-e29b-41d4-a716-446655440000",
            "name": "Blue T-Shirt",
            "image": "https://cdn.rtmn.in/products/tshirt-blue-l.jpg",
            "price": 499,
            "inStock": true
          },
          "quantity": 2,
          "subtotal": 998
        },
        {
          "id": "item_790",
          "product": {
            "id": "660e8400-e29b-41d4-a716-446655440002",
            "name": "Black Jeans",
            "image": "https://cdn.rtmn.in/products/jeans-black-32.jpg",
            "price": 1299,
            "inStock": true
          },
          "quantity": 1,
          "subtotal": 1299
        }
      ],
      "summary": {
        "itemCount": 3,
        "subtotal": 2297,
        "applicableOffers": [
          {
            "id": "offer_123",
            "title": "Flat ₹200 off on orders above ₹2000",
            "discount": 200,
            "applicable": true
          }
        ],
        "estimatedSavings": 1203,
        "coinsEarnable": 114
      }
    }
  }
}
```

---

### 3. Checkout (Calculate Order Total)

```http
POST /api/checkout/calculate
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "cartId": "cart_123",
  "deliveryAddressId": "addr_456",
  "coinsToRedeem": 150,
  "applyCoupon": "FIRST50"
}
```

#### Response (Success)

```json
{
  "success": true,
  "data": {
    "breakdown": {
      "subtotal": 2297,
      "discount": {
        "offers": 200,
        "coupon": 50,
        "total": 250
      },
      "discountedSubtotal": 2047,
      "coinsRedeemed": 150,
      "coinsBreakdown": {
        "promoCoins": 50,
        "brandedCoins": 0,
        "rezCoins": 100
      },
      "amountAfterCoins": 1897,
      "deliveryFee": 0,
      "deliveryFeeWaived": true,
      "deliveryFeeWaivedReason": "Gold tier member",
      "tax": 94.85,
      "taxBreakdown": {
        "gst": 94.85
      },
      "totalAmount": 1991.85
    },
    "appliedOffers": [
      {
        "id": "offer_123",
        "title": "Flat ₹200 off",
        "discount": 200
      }
    ],
    "appliedCoupon": {
      "code": "FIRST50",
      "discount": 50
    },
    "coinsEarned": 99,
    "finalPayable": 1991.85,
    "paymentMethods": ["razorpay", "upi", "card"],
    "estimatedDelivery": "2026-01-05T18:00:00Z"
  }
}
```

#### Response (Error - Invalid Coupon)

```json
{
  "success": false,
  "error": {
    "code": 4001,
    "message": "Coupon code is invalid or expired",
    "field": "applyCoupon",
    "retryable": false
  }
}
```

---

### 4. Place Order

```http
POST /api/orders/create
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "cartId": "cart_123",
  "deliveryAddressId": "addr_456",
  "paymentMethod": "razorpay",
  "coinsToRedeem": 150,
  "applyCoupon": "FIRST50",
  "deliveryInstructions": "Leave at door"
}
```

#### Response (Success)

```json
{
  "success": true,
  "data": {
    "order": {
      "id": "order_789",
      "orderNumber": "ORD20260103001",
      "status": "pending",
      "items": [
        {
          "productId": "550e8400-e29b-41d4-a716-446655440000",
          "name": "Blue T-Shirt",
          "quantity": 2,
          "price": 499,
          "subtotal": 998
        }
      ],
      "subtotal": 2297,
      "discountAmount": 250,
      "coinsRedeemed": 150,
      "deliveryFee": 0,
      "taxAmount": 94.85,
      "totalAmount": 1991.85,
      "coinsEarned": 99,
      "deliveryAddress": {
        "line1": "123 Main Street",
        "line2": "Apt 4B",
        "city": "Mumbai",
        "state": "Maharashtra",
        "pincode": "400001",
        "phone": "+919876543210"
      },
      "estimatedDeliveryAt": "2026-01-05T18:00:00Z",
      "createdAt": "2026-01-03T10:40:00Z"
    },
    "payment": {
      "id": "payment_999",
      "gateway": "razorpay",
      "orderId": "razorpay_order_abc123",
      "amount": 1991.85,
      "currency": "INR",
      "status": "pending",
      "keyId": "rzp_live_xxxxxxxxxx"
    }
  },
  "meta": {
    "nextAction": "INITIATE_PAYMENT",
    "timestamp": "2026-01-03T10:40:00Z"
  }
}
```

---

## 📦 ORDERS

### 1. Get Order Details

```http
GET /api/orders/order_789
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Response

```json
{
  "success": true,
  "data": {
    "order": {
      "id": "order_789",
      "orderNumber": "ORD20260103001",
      "status": "out_for_delivery",
      "statusTimeline": [
        {
          "status": "pending",
          "timestamp": "2026-01-03T10:40:00Z"
        },
        {
          "status": "confirmed",
          "timestamp": "2026-01-03T10:45:00Z"
        },
        {
          "status": "processing",
          "timestamp": "2026-01-03T12:00:00Z"
        },
        {
          "status": "out_for_delivery",
          "timestamp": "2026-01-04T15:00:00Z",
          "metadata": {
            "deliveryPartner": "John Delivery",
            "vehicleNumber": "MH01AB1234",
            "trackingLink": "https://track.rtmn.in/delivery_123"
          }
        }
      ],
      "items": [
        {
          "id": "item_789",
          "product": {
            "id": "550e8400-e29b-41d4-a716-446655440000",
            "name": "Blue T-Shirt",
            "image": "https://cdn.rtmn.in/products/tshirt-blue-l.jpg"
          },
          "quantity": 2,
          "price": 499,
          "subtotal": 998
        }
      ],
      "merchant": {
        "id": "merchant_111",
        "name": "Fashion Store",
        "phone": "+919999888877",
        "address": "Shop 5, MG Road, Mumbai"
      },
      "breakdown": {
        "subtotal": 2297,
        "discount": 250,
        "coinsRedeemed": 150,
        "deliveryFee": 0,
        "tax": 94.85,
        "total": 1991.85
      },
      "payment": {
        "method": "razorpay",
        "status": "success",
        "transactionId": "pay_abc123xyz",
        "paidAt": "2026-01-03T10:42:00Z"
      },
      "delivery": {
        "address": {
          "line1": "123 Main Street",
          "city": "Mumbai",
          "pincode": "400001"
        },
        "instructions": "Leave at door",
        "estimatedAt": "2026-01-05T18:00:00Z",
        "partner": {
          "name": "John Delivery",
          "phone": "+919988776655"
        },
        "trackingUrl": "https://track.rtmn.in/delivery_123"
      },
      "coinsEarned": 99,
      "canCancel": false,
      "canReturn": false,
      "createdAt": "2026-01-03T10:40:00Z"
    }
  }
}
```

---

### 2. Cancel Order

```http
POST /api/orders/order_789/cancel
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "reason": "Changed my mind",
  "details": "Decided to buy from local store instead"
}
```

#### Response (Success)

```json
{
  "success": true,
  "data": {
    "order": {
      "id": "order_789",
      "status": "cancelled",
      "cancelledAt": "2026-01-03T11:00:00Z",
      "cancellationReason": "Changed my mind"
    },
    "refund": {
      "amount": 1991.85,
      "method": "source",
      "estimatedDays": 5,
      "status": "initiated"
    },
    "coinsReversed": 99
  },
  "message": "Order cancelled successfully. Refund will be processed in 5-7 business days."
}
```

#### Response (Error - Cannot Cancel)

```json
{
  "success": false,
  "error": {
    "code": 5001,
    "message": "Order cannot be cancelled as it's already out for delivery",
    "retryable": false,
    "suggestedAction": "Contact support to request cancellation"
  }
}
```

---

## 👤 USER PROFILE

### 1. Get Profile

```http
GET /api/user/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Response

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "phone": "+919876543210",
      "email": "john.doe@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "avatar": "https://cdn.rtmn.in/avatars/user_123.jpg",
      "dateOfBirth": "1990-05-15",
      "gender": "male",
      "tier": "gold",
      "memberSince": "2024-01-15T10:00:00Z"
    },
    "wallet": {
      "rezCoins": 1250.50,
      "brandedCoins": {
        "starbucks": 100,
        "zara": 50
      },
      "promoCoins": 50,
      "lifetimeEarned": 5000,
      "lifetimeRedeemed": 3699.50,
      "expiringCoins": {
        "amount": 200,
        "expiresAt": "2026-02-01T00:00:00Z"
      }
    },
    "stats": {
      "totalOrders": 25,
      "totalSpent": 50000,
      "last90DaysSpent": 15000,
      "averageOrderValue": 2000,
      "savedAmount": 12000
    },
    "tierProgress": {
      "current": "gold",
      "next": "prive",
      "criteria": {
        "spendRequired": 185000,
        "ordersRequired": 35,
        "daysRemaining": 60
      }
    }
  }
}
```

---

### 2. Update Profile

```http
PATCH /api/user/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "dateOfBirth": "1990-05-15",
  "gender": "male"
}
```

#### Response

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "dateOfBirth": "1990-05-15",
      "gender": "male",
      "updatedAt": "2026-01-03T11:15:00Z"
    }
  },
  "message": "Profile updated successfully"
}
```

---

## 🏪 MERCHANT (BizOne)

### 1. Create Product

```http
POST /api/merchant/products
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "name": "Premium Coffee Beans",
  "description": "Arabica coffee beans from Colombia",
  "category": "grocery",
  "subcategory": "beverages",
  "brand": "Colombian Gold",
  "price": 599,
  "mrp": 799,
  "stockQuantity": 100,
  "sku": "COFFEE-COL-500G",
  "barcode": "1234567890123",
  "images": [
    "https://cdn.rtmn.in/products/coffee-1.jpg",
    "https://cdn.rtmn.in/products/coffee-2.jpg"
  ],
  "variants": [
    {
      "name": "500g",
      "price": 599,
      "stock": 100
    },
    {
      "name": "1kg",
      "price": 1099,
      "stock": 50
    }
  ],
  "tags": ["organic", "arabica", "colombia"]
}
```

#### Response

```json
{
  "success": true,
  "data": {
    "product": {
      "id": "product_123",
      "merchantId": "merchant_111",
      "name": "Premium Coffee Beans",
      "slug": "premium-coffee-beans",
      "price": 599,
      "mrp": 799,
      "discount": 25,
      "stockQuantity": 100,
      "status": "active",
      "images": [
        "https://cdn.rtmn.in/products/coffee-1.jpg",
        "https://cdn.rtmn.in/products/coffee-2.jpg"
      ],
      "createdAt": "2026-01-03T11:20:00Z"
    }
  },
  "message": "Product created successfully"
}
```

---

## 💰 WALLET

### 1. Get Wallet Balance

```http
GET /api/wallet/balance
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Response

```json
{
  "success": true,
  "data": {
    "wallet": {
      "id": "wallet_123",
      "userId": "user_456",
      "balances": {
        "rezCoins": 1250.50,
        "brandedCoins": {
          "total": 150,
          "breakdown": {
            "starbucks": 100,
            "zara": 50
          }
        },
        "promoCoins": 50,
        "total": 1450.50
      },
      "lifetime": {
        "earned": 5000,
        "redeemed": 3549.50,
        "expired": 0
      },
      "expiring": {
        "amount": 200,
        "expiresAt": "2026-02-01T00:00:00Z",
        "daysRemaining": 29
      },
      "updatedAt": "2026-01-03T10:35:00Z"
    }
  }
}
```

---

### 2. Get Transaction History

```http
GET /api/wallet/transactions?page=1&limit=20
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Response

```json
{
  "success": true,
  "data": {
    "transactions": [
      {
        "id": "txn_001",
        "type": "credit",
        "coinType": "rez_coins",
        "amount": 99,
        "balance": 1250.50,
        "source": "purchase_cashback",
        "metadata": {
          "orderId": "order_789",
          "orderAmount": 1991.85
        },
        "createdAt": "2026-01-03T10:45:00Z"
      },
      {
        "id": "txn_002",
        "type": "debit",
        "coinType": "rez_coins",
        "amount": 100,
        "balance": 1151.50,
        "source": "order_redemption",
        "metadata": {
          "orderId": "order_789"
        },
        "createdAt": "2026-01-03T10:40:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 125,
      "totalPages": 7,
      "hasMore": true
    }
  }
}
```

---

## 🔍 SEARCH & DISCOVERY

### 1. Search Products

```http
GET /api/search/products?q=coffee&category=grocery&sort=price_low_to_high&page=1&limit=20
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Response

```json
{
  "success": true,
  "data": {
    "results": [
      {
        "id": "product_123",
        "name": "Premium Coffee Beans",
        "description": "Arabica coffee beans from Colombia",
        "price": 599,
        "mrp": 799,
        "discount": 25,
        "image": "https://cdn.rtmn.in/products/coffee-1.jpg",
        "merchant": {
          "id": "merchant_111",
          "name": "Coffee House",
          "rating": 4.5,
          "distance": 2.3
        },
        "rating": 4.7,
        "reviewCount": 256,
        "inStock": true,
        "coinsEarnable": 29
      }
    ],
    "filters": {
      "categories": ["grocery", "beverages"],
      "priceRange": {
        "min": 199,
        "max": 1299
      },
      "brands": ["Colombian Gold", "Starbucks"]
    },
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 45,
      "totalPages": 3
    }
  }
}
```

---

**Status:** ✅ Production-Ready
**Last Updated:** 2026-01-03
**Total Examples:** 20+ endpoints
**Next:** [Authentication Flow Details](./AUTHENTICATION_FLOW_DETAILS.md)
