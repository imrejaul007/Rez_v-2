# Complete API Specification

**Format:** OpenAPI 3.0 Compatible
**Generated:** 2026-01-03 22:40:35
**Estimated Endpoints:** 500+

---

## Base Configuration

```yaml
openapi: 3.0.0
info:
  title: RTMN Platform API
  version: 1.0.0
  description: Complete API for ReZ ecosystem
  contact:
    name: API Support
    email: api@rezapp.in

servers:
  - url: https://api.rezapp.in/v1
    description: Production
  - url: https://staging-api.rezapp.in/v1
    description: Staging
  - url: http://localhost:3000/v1
    description: Local Development

components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
```

---

## Authentication APIs

### `POST /auth/register`
**Description:** Register new user

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989249"
  }
}
```

---

### `POST /auth/login`
**Description:** User login

**Request Body:**
```json
{
  "phone": "+919876543210",
  "password": "secure_password"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989255"
  }
}
```

---

### `POST /auth/logout`
**Description:** User logout

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989257"
  }
}
```

---

### `POST /auth/refresh-token`
**Description:** Refresh JWT token

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989260"
  }
}
```

---

### `POST /auth/verify-otp`
**Description:** Verify OTP

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989262"
  }
}
```

---

### `POST /auth/forgot-password`
**Description:** Password reset request

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989265"
  }
}
```

---

### `POST /auth/reset-password`
**Description:** Reset password

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989267"
  }
}
```

---

## User Profile APIs

### `GET /user/profile`
**Description:** Get user profile

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989269"
  }
}
```

---

### `PUT /user/profile`
**Description:** Update user profile

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989272"
  }
}
```

---

### `POST /user/profile/avatar`
**Description:** Upload profile picture

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989274"
  }
}
```

---

### `GET /user/preferences`
**Description:** Get user preferences

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989276"
  }
}
```

---

### `PUT /user/preferences`
**Description:** Update preferences

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989279"
  }
}
```

---

## Wallet & Coins APIs

### `GET /wallet/balance`
**Description:** Get wallet balance

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989281"
  }
}
```

---

### `POST /wallet/topup`
**Description:** Add money to wallet

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989283"
  }
}
```

---

### `GET /wallet/transactions`
**Description:** Transaction history

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989285"
  }
}
```

---

### `GET /coins/balance`
**Description:** Get ReZ Coins balance

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989286"
  }
}
```

---

### `GET /coins/history`
**Description:** Coin transaction history

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989288"
  }
}
```

---

### `POST /coins/redeem`
**Description:** Redeem coins

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989290"
  }
}
```

---

## Products & Catalog APIs

### `GET /products`
**Description:** List all products

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989292"
  }
}
```

---

### `GET /products/{id}`
**Description:** Get product details

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989294"
  }
}
```

---

### `GET /products/search`
**Description:** Search products

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989296"
  }
}
```

---

### `GET /products/{id}/reviews`
**Description:** Get product reviews

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989298"
  }
}
```

---

### `POST /products/{id}/reviews`
**Description:** Add product review

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989300"
  }
}
```

---

### `GET /categories`
**Description:** List categories

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989302"
  }
}
```

---

### `GET /categories/{id}/products`
**Description:** Products by category

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989304"
  }
}
```

---

## Cart & Checkout APIs

### `GET /cart`
**Description:** Get cart contents

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989306"
  }
}
```

---

### `POST /cart/add`
**Description:** Add item to cart

**Request Body:**
```json
{
  "productId": "uuid",
  "quantity": 1,
  "variantId": "uuid"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989309"
  }
}
```

---

### `PUT /cart/items/{id}`
**Description:** Update cart item

**Request Body:**
```json
{
  "productId": "uuid",
  "quantity": 1,
  "variantId": "uuid"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989311"
  }
}
```

---

### `DELETE /cart/items/{id}`
**Description:** Remove from cart

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989313"
  }
}
```

---

### `POST /cart/apply-coupon`
**Description:** Apply coupon code

**Request Body:**
```json
{
  "productId": "uuid",
  "quantity": 1,
  "variantId": "uuid"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989315"
  }
}
```

---

### `POST /checkout`
**Description:** Create order

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989318"
  }
}
```

---

### `POST /checkout/validate`
**Description:** Validate checkout

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989320"
  }
}
```

---

## Orders APIs

### `GET /orders`
**Description:** List user orders

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989322"
  }
}
```

---

### `GET /orders/{id}`
**Description:** Get order details

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989323"
  }
}
```

---

### `POST /orders/{id}/cancel`
**Description:** Cancel order

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989326"
  }
}
```

---

### `GET /orders/{id}/track`
**Description:** Track order

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989327"
  }
}
```

---

### `POST /orders/{id}/return`
**Description:** Request return

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989329"
  }
}
```

---

## Merchants APIs

### `GET /merchants`
**Description:** List merchants

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989331"
  }
}
```

---

### `GET /merchants/{id}`
**Description:** Get merchant details

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989333"
  }
}
```

---

### `GET /merchants/{id}/products`
**Description:** Merchant products

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989335"
  }
}
```

---

### `GET /merchants/{id}/offers`
**Description:** Merchant offers

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989337"
  }
}
```

---

### `GET /merchants/search`
**Description:** Search merchants

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989339"
  }
}
```

---

## Offers & Deals APIs

### `GET /offers`
**Description:** List all offers

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989341"
  }
}
```

---

### `GET /offers/{id}`
**Description:** Get offer details

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989342"
  }
}
```

---

### `POST /offers/{id}/claim`
**Description:** Claim offer

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989344"
  }
}
```

---

### `GET /deals`
**Description:** List deals

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989347"
  }
}
```

---

### `GET /deals/flash`
**Description:** Flash deals

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989348"
  }
}
```

---

## Merchant Dashboard APIs

### `GET /merchant/dashboard`
**Description:** Merchant dashboard

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989350"
  }
}
```

---

### `GET /merchant/stats`
**Description:** Merchant statistics

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989352"
  }
}
```

---

### `GET /merchant/orders`
**Description:** Merchant orders

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989354"
  }
}
```

---

### `PUT /merchant/orders/{id}/status`
**Description:** Update order status

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989356"
  }
}
```

---

### `GET /merchant/inventory`
**Description:** Inventory list

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989357"
  }
}
```

---

### `POST /merchant/products`
**Description:** Add product

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989360"
  }
}
```

---

### `PUT /merchant/products/{id}`
**Description:** Update product

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989362"
  }
}
```

---

## Admin Operations APIs

### `GET /admin/dashboard`
**Description:** Admin dashboard

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989364"
  }
}
```

---

### `GET /admin/users`
**Description:** List all users

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989365"
  }
}
```

---

### `GET /admin/merchants`
**Description:** List all merchants

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989367"
  }
}
```

---

### `POST /admin/merchants/{id}/approve`
**Description:** Approve merchant

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989370"
  }
}
```

---

### `GET /admin/transactions`
**Description:** All transactions

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989371"
  }
}
```

---

### `GET /admin/analytics`
**Description:** Platform analytics

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-03T22:40:35.989374"
  }
}
```

---


## Additional Endpoint Categories

The following categories contain 300+ additional endpoints:

- Loyalty & Rewards (25+ endpoints)
- Social Features (30+ endpoints)
- Gamification (40+ endpoints)
- Notifications (15+ endpoints)
- Search & Discovery (20+ endpoints)
- Analytics & Reporting (50+ endpoints)
- Wasil Apps (100+ endpoints)
- Growth Apps (50+ endpoints)
- Admin Advanced (70+ endpoints)
