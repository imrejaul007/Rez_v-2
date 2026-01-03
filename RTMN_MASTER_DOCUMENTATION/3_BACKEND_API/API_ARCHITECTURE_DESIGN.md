# ReZ Platform - API Architecture & Endpoints

## Table of Contents
1. [API Overview](#api-overview)
2. [Architecture Principles](#architecture-principles)
3. [Authentication & Authorization](#authentication--authorization)
4. [API Versioning](#api-versioning)
5. [Rate Limiting](#rate-limiting)
6. [Error Handling](#error-handling)
7. [Core API Endpoints](#core-api-endpoints)
8. [WebSocket Events](#websocket-events)
9. [API Security](#api-security)
10. [Performance Optimization](#performance-optimization)

---

## API Overview

**Base URL:** `https://api.rezapp.in/v1`

**API Type:** RESTful API with WebSocket support for real-time features

**Response Format:** JSON

**Total Endpoints:** 150+ REST endpoints + 20+ WebSocket events

**Technology Stack:**
- Node.js v20 + Express.js + TypeScript
- JWT Authentication
- Redis for caching & rate limiting
- Socket.IO for WebSockets

---

## Architecture Principles

### 1. REST Best Practices

**HTTP Methods:**
- `GET` - Retrieve resources (idempotent, cacheable)
- `POST` - Create new resources
- `PUT` - Update entire resource (replace)
- `PATCH` - Partial update
- `DELETE` - Remove resource

**Resource Naming:**
```
✅ Good:
GET /v1/users
GET /v1/users/:id
GET /v1/merchants/:id/offers
POST /v1/orders

❌ Bad:
GET /v1/getUsers
POST /v1/createOrder
GET /v1/user-list
```

### 2. Response Structure

**Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "User Name"
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "request_id": "req_abc123"
  }
}
```

**Paginated Response:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 150,
    "total_pages": 8,
    "has_next": true,
    "has_prev": false
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      }
    ]
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "request_id": "req_abc123"
  }
}
```

### 3. HTTP Status Codes

**Success:**
- `200 OK` - Request successful
- `201 Created` - Resource created successfully
- `204 No Content` - Successful deletion

**Client Errors:**
- `400 Bad Request` - Invalid input
- `401 Unauthorized` - Authentication required
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `409 Conflict` - Resource conflict (duplicate)
- `422 Unprocessable Entity` - Validation failed
- `429 Too Many Requests` - Rate limit exceeded

**Server Errors:**
- `500 Internal Server Error` - Server error
- `502 Bad Gateway` - Upstream service error
- `503 Service Unavailable` - Temporary unavailable

---

## Authentication & Authorization

### 1. Authentication Flow

#### User Registration & Login

**Registration:**
```http
POST /v1/auth/register
Content-Type: application/json

{
  "phone": "+919876543210",
  "email": "user@example.com",
  "password": "SecurePass123!",
  "full_name": "John Doe"
}

Response 201:
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "phone": "+919876543210",
      "email": "user@example.com",
      "full_name": "John Doe",
      "email_verified": false,
      "phone_verified": false
    },
    "tokens": {
      "access_token": "eyJhbGciOiJIUzI1NiIs...",
      "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
      "expires_in": 3600
    }
  }
}
```

**Send OTP:**
```http
POST /v1/auth/send-otp
Content-Type: application/json

{
  "phone": "+919876543210",
  "type": "login" // or "verification"
}

Response 200:
{
  "success": true,
  "data": {
    "otp_sent": true,
    "expires_in": 600,
    "retry_after": 60
  }
}
```

**Verify OTP & Login:**
```http
POST /v1/auth/verify-otp
Content-Type: application/json

{
  "phone": "+919876543210",
  "otp": "123456"
}

Response 200:
{
  "success": true,
  "data": {
    "user": { ... },
    "tokens": {
      "access_token": "eyJhbGciOiJIUzI1NiIs...",
      "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
      "expires_in": 3600
    }
  }
}
```

**Social Login (Google/Facebook):**
```http
POST /v1/auth/social
Content-Type: application/json

{
  "provider": "google",
  "access_token": "google_oauth_token",
  "device_info": {
    "device_id": "unique_device_id",
    "device_name": "iPhone 13",
    "os": "iOS 16.0"
  }
}

Response 200:
{
  "success": true,
  "data": {
    "user": { ... },
    "tokens": { ... }
  }
}
```

#### Token Refresh

```http
POST /v1/auth/refresh
Content-Type: application/json

{
  "refresh_token": "eyJhbGciOiJIUzI1NiIs..."
}

Response 200:
{
  "success": true,
  "data": {
    "access_token": "new_access_token",
    "expires_in": 3600
  }
}
```

### 2. Authorization Headers

**All authenticated requests:**
```http
GET /v1/user/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

### 3. Two-Factor Authentication (2FA)

**Enable 2FA:**
```http
POST /v1/auth/2fa/enable
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "qr_code": "data:image/png;base64,...",
    "secret": "JBSWY3DPEHPK3PXP",
    "backup_codes": [
      "12345-67890",
      "23456-78901",
      "34567-89012"
    ]
  }
}
```

**Verify 2FA Setup:**
```http
POST /v1/auth/2fa/verify
Authorization: Bearer {token}
Content-Type: application/json

{
  "code": "123456"
}

Response 200:
{
  "success": true,
  "data": {
    "two_factor_enabled": true
  }
}
```

**Login with 2FA:**
```http
POST /v1/auth/login/2fa
Content-Type: application/json

{
  "phone": "+919876543210",
  "password": "password123",
  "two_factor_code": "123456"
}
```

---

## API Versioning

**Strategy:** URL-based versioning

**Current Version:** v1

**Version Lifecycle:**
- v1: Current stable version
- v2: (Future) When breaking changes needed

**Deprecation Policy:**
- Announce 6 months before deprecation
- Support old version for 12 months after new version release

**Accessing Versions:**
```
https://api.rezapp.in/v1/users
https://api.rezapp.in/v2/users (future)
```

---

## Rate Limiting

**Rate Limit Configuration:**

| Endpoint Type | Rate Limit | Window |
|--------------|------------|---------|
| Authentication | 10 requests | 1 minute |
| OTP Requests | 3 requests | 15 minutes |
| General API | 100 requests | 1 minute |
| Search API | 50 requests | 1 minute |
| Admin API | 200 requests | 1 minute |

**Response Headers:**
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642252800
```

**Rate Limit Exceeded Response:**
```http
HTTP/1.1 429 Too Many Requests
Retry-After: 60

{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Please try again in 60 seconds."
  }
}
```

---

## Error Handling

### Error Codes

```javascript
// Authentication Errors
AUTH_REQUIRED: "Authentication required"
INVALID_TOKEN: "Invalid or expired token"
INVALID_CREDENTIALS: "Invalid credentials"
OTP_EXPIRED: "OTP has expired"
OTP_INVALID: "Invalid OTP"
2FA_REQUIRED: "Two-factor authentication required"

// Validation Errors
VALIDATION_ERROR: "Validation failed"
INVALID_INPUT: "Invalid input data"
MISSING_FIELD: "Required field missing"

// Resource Errors
NOT_FOUND: "Resource not found"
ALREADY_EXISTS: "Resource already exists"
CONFLICT: "Resource conflict"

// Permission Errors
FORBIDDEN: "Insufficient permissions"
ACCOUNT_SUSPENDED: "Account has been suspended"

// Business Logic Errors
INSUFFICIENT_COINS: "Insufficient coin balance"
OFFER_EXPIRED: "Offer has expired"
OFFER_LIMIT_REACHED: "Offer redemption limit reached"
OUT_OF_STOCK: "Product out of stock"

// Payment Errors
PAYMENT_FAILED: "Payment failed"
PAYMENT_GATEWAY_ERROR: "Payment gateway error"

// Server Errors
INTERNAL_ERROR: "Internal server error"
SERVICE_UNAVAILABLE: "Service temporarily unavailable"
```

### Error Response Examples

**Validation Error:**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      {
        "field": "email",
        "message": "Email is required",
        "code": "REQUIRED"
      },
      {
        "field": "phone",
        "message": "Invalid phone number format",
        "code": "INVALID_FORMAT"
      }
    ]
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "request_id": "req_abc123"
  }
}
```

**Business Logic Error:**
```json
{
  "success": false,
  "error": {
    "code": "INSUFFICIENT_COINS",
    "message": "You need 500 ReZ coins to redeem this offer. You have 250 coins.",
    "data": {
      "required": 500,
      "available": 250,
      "shortfall": 250
    }
  }
}
```

---

## Core API Endpoints

### 1. User Management

#### Get User Profile
```http
GET /v1/user/profile
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "id": "uuid",
    "phone": "+919876543210",
    "email": "user@example.com",
    "full_name": "John Doe",
    "profile_picture_url": "https://...",
    "date_of_birth": "1995-05-15",
    "gender": "male",
    "email_verified": true,
    "phone_verified": true,
    "account_type": "student",
    "created_at": "2024-01-01T00:00:00Z",
    "loyalty": {
      "tier": "Gold",
      "tier_level": 3,
      "lifetime_spend": 25000.00,
      "total_orders": 45
    },
    "college": {
      "id": "uuid",
      "name": "IIT Delhi",
      "verified": true
    }
  }
}
```

#### Update Profile
```http
PATCH /v1/user/profile
Authorization: Bearer {token}
Content-Type: application/json

{
  "full_name": "John Smith",
  "date_of_birth": "1995-05-15",
  "gender": "male"
}

Response 200:
{
  "success": true,
  "data": {
    "id": "uuid",
    "full_name": "John Smith",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

#### Get User Addresses
```http
GET /v1/user/addresses
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "label": "home",
      "full_name": "John Doe",
      "phone": "+919876543210",
      "address_line1": "123 Main Street",
      "address_line2": "Apartment 4B",
      "city": "Mumbai",
      "state": "Maharashtra",
      "pincode": "400001",
      "is_default": true
    }
  ]
}
```

#### Add Address
```http
POST /v1/user/addresses
Authorization: Bearer {token}
Content-Type: application/json

{
  "label": "work",
  "full_name": "John Doe",
  "phone": "+919876543210",
  "address_line1": "456 Office Tower",
  "city": "Mumbai",
  "state": "Maharashtra",
  "pincode": "400001",
  "latitude": 19.0760,
  "longitude": 72.8777,
  "is_default": false
}

Response 201:
{
  "success": true,
  "data": {
    "id": "uuid",
    "label": "work",
    ...
  }
}
```

### 2. Home Feed

#### Get Home Feed
```http
GET /v1/home?lat=19.0760&lng=72.8777&city=Mumbai
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "sections": [
      {
        "type": "banner",
        "title": "Featured Events",
        "items": [
          {
            "id": "event_1",
            "title": "Weekend Flash Sale",
            "image_url": "https://...",
            "start_date": "2024-01-20T00:00:00Z",
            "end_date": "2024-01-22T23:59:59Z",
            "action": {
              "type": "navigate",
              "route": "/events/weekend-flash-sale"
            }
          }
        ]
      },
      {
        "type": "stores_nearby",
        "title": "Stores Near You",
        "items": [
          {
            "id": "merchant_1",
            "business_name": "The Coffee House",
            "logo_url": "https://...",
            "distance": 0.8,
            "distance_unit": "km",
            "rating": 4.5,
            "total_reviews": 230,
            "active_offers_count": 3,
            "tags": ["coffee", "breakfast"],
            "is_prive_partner": true
          }
        ],
        "view_all_action": {
          "type": "navigate",
          "route": "/stores/nearby"
        }
      },
      {
        "type": "offers_trending",
        "title": "Trending Offers",
        "items": [
          {
            "id": "offer_1",
            "title": "50% OFF on All Pizzas",
            "merchant": {
              "id": "merchant_2",
              "business_name": "Pizza Paradise",
              "logo_url": "https://..."
            },
            "offer_type": "discount_percent",
            "discount_value": 50,
            "image_url": "https://...",
            "valid_until": "2024-01-30T23:59:59Z",
            "rez_coins_required": 100,
            "tags": ["dinner", "weekend"],
            "distance": 1.2,
            "save_count": 456,
            "redemption_count": 1234
          }
        ]
      },
      {
        "type": "categories",
        "title": "Browse by Category",
        "items": [
          {
            "id": "cat_1",
            "name": "Food & Dining",
            "slug": "food-dining",
            "icon_url": "https://...",
            "offers_count": 234
          }
        ]
      }
    ]
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "location": {
      "city": "Mumbai",
      "latitude": 19.0760,
      "longitude": 72.8777
    }
  }
}
```

### 3. Stores/Merchants

#### Search Stores
```http
GET /v1/stores/search?q=coffee&lat=19.0760&lng=72.8777&radius=5&category=food-dining&min_rating=4
Authorization: Bearer {token}

Query Parameters:
- q: Search query (optional)
- lat, lng: User location (required)
- radius: Search radius in km (default: 10)
- category: Category slug (optional)
- min_rating: Minimum rating filter (optional)
- tags: Comma-separated tags (optional)
- is_prive: Filter Privé partners (optional, boolean)
- sort: Sort by (distance, rating, popular) (default: distance)
- page: Page number (default: 1)
- per_page: Items per page (default: 20)

Response 200:
{
  "success": true,
  "data": [
    {
      "id": "merchant_1",
      "business_name": "The Coffee House",
      "business_type": "restaurant",
      "logo_url": "https://...",
      "cover_image_url": "https://...",
      "rating": 4.5,
      "total_reviews": 230,
      "address": "123 Main Street, Mumbai",
      "distance": 0.8,
      "distance_unit": "km",
      "active_offers_count": 3,
      "categories": ["Food & Dining", "Cafe"],
      "tags": ["coffee", "breakfast", "wifi"],
      "is_prive_partner": true,
      "prive_discount": 10,
      "is_open_now": true,
      "operating_hours": {
        "today": [
          { "open": "08:00", "close": "22:00" }
        ]
      }
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 15,
    "total_pages": 1
  }
}
```

#### Get Store Details
```http
GET /v1/stores/:storeId
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "id": "merchant_1",
    "business_name": "The Coffee House",
    "description": "Premium coffee experience...",
    "logo_url": "https://...",
    "cover_image_url": "https://...",
    "images": ["https://...", "https://..."],
    "rating": 4.5,
    "total_reviews": 230,
    "price_range": "₹₹",
    "address": {
      "line1": "123 Main Street",
      "city": "Mumbai",
      "state": "Maharashtra",
      "pincode": "400001",
      "latitude": 19.0760,
      "longitude": 72.8777
    },
    "distance": 0.8,
    "contact": {
      "phone": "+912212345678",
      "email": "info@coffeehouse.com"
    },
    "operating_hours": {
      "mon": [{ "open": "08:00", "close": "22:00" }],
      "tue": [{ "open": "08:00", "close": "22:00" }],
      "wed": [{ "open": "08:00", "close": "22:00" }],
      "thu": [{ "open": "08:00", "close": "22:00" }],
      "fri": [{ "open": "08:00", "close": "23:00" }],
      "sat": [{ "open": "09:00", "close": "23:00" }],
      "sun": [{ "open": "09:00", "close": "22:00" }]
    },
    "is_open_now": true,
    "features": ["wifi", "parking", "outdoor_seating"],
    "categories": ["Food & Dining", "Cafe"],
    "tags": ["coffee", "breakfast", "wifi"],
    "is_prive_partner": true,
    "prive_config": {
      "discount_percent": 10,
      "tier": "premium",
      "prive_coin_multiplier": 1.5
    },
    "active_offers": [
      {
        "id": "offer_1",
        "title": "Buy 1 Get 1 Free Coffee",
        "offer_type": "bogo",
        "valid_until": "2024-01-30T23:59:59Z"
      }
    ],
    "outlets": [
      {
        "id": "outlet_1",
        "name": "The Coffee House - Bandra",
        "address": "123 Main Street, Bandra, Mumbai",
        "distance": 0.8,
        "is_open_now": true
      }
    ]
  }
}
```

#### Get Store Reviews
```http
GET /v1/stores/:storeId/reviews?page=1&per_page=10&sort=recent
Authorization: Bearer {token}

Query Parameters:
- page: Page number (default: 1)
- per_page: Items per page (default: 10)
- sort: Sort by (recent, rating_high, rating_low, helpful) (default: recent)
- rating: Filter by rating (1-5) (optional)

Response 200:
{
  "success": true,
  "data": [
    {
      "id": "review_1",
      "user": {
        "id": "user_1",
        "full_name": "Jane Smith",
        "profile_picture_url": "https://..."
      },
      "rating": 5,
      "title": "Amazing coffee!",
      "review_text": "Best coffee in town. Love the ambience.",
      "images": ["https://...", "https://..."],
      "service_rating": 5,
      "value_rating": 4,
      "ambience_rating": 5,
      "is_verified_purchase": true,
      "helpful_count": 12,
      "merchant_response": "Thank you for your kind words!",
      "merchant_responded_at": "2024-01-10T12:00:00Z",
      "created_at": "2024-01-09T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 10,
    "total": 230,
    "total_pages": 23
  },
  "stats": {
    "average_rating": 4.5,
    "total_reviews": 230,
    "rating_distribution": {
      "5": 150,
      "4": 60,
      "3": 15,
      "2": 3,
      "1": 2
    }
  }
}
```

### 4. Offers

#### Get Offers
```http
GET /v1/offers?lat=19.0760&lng=72.8777&category=food-dining&tags=lunch,weekend&sort=trending
Authorization: Bearer {token}

Query Parameters:
- lat, lng: User location (optional)
- radius: Search radius in km (default: 10)
- category: Category slug (optional)
- tags: Comma-separated tags (optional)
- offer_type: Offer type filter (optional)
- min_discount: Minimum discount percentage (optional)
- is_featured: Featured offers only (optional, boolean)
- sort: Sort by (trending, ending_soon, newest, nearby) (default: trending)
- page, per_page: Pagination

Response 200:
{
  "success": true,
  "data": [
    {
      "id": "offer_1",
      "title": "50% OFF on All Pizzas",
      "description": "Get flat 50% discount on all pizza varieties...",
      "merchant": {
        "id": "merchant_2",
        "business_name": "Pizza Paradise",
        "logo_url": "https://...",
        "address": "456 Street, Mumbai",
        "distance": 1.2
      },
      "offer_type": "discount_percent",
      "discount_value": 50,
      "max_discount": 300,
      "min_order_value": 500,
      "image_url": "https://...",
      "valid_from": "2024-01-15T00:00:00Z",
      "valid_until": "2024-01-30T23:59:59Z",
      "available_days": ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
      "available_hours": [
        { "start": "12:00", "end": "15:00" },
        { "start": "19:00", "end": "23:00" }
      ],
      "rez_coins_required": 100,
      "rez_coins_earned": 50,
      "tags": ["lunch", "dinner", "weekend"],
      "categories": ["Food & Dining"],
      "per_user_limit": 2,
      "total_redemption_limit": 500,
      "redemptions_count": 234,
      "is_featured": true,
      "save_count": 456,
      "view_count": 2345,
      "is_saved": false,
      "can_redeem": true,
      "redemption_status": {
        "user_redemptions": 1,
        "remaining_redemptions": 1
      }
    }
  ],
  "pagination": { ... }
}
```

#### Get Offer Details
```http
GET /v1/offers/:offerId
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "id": "offer_1",
    "title": "50% OFF on All Pizzas",
    "description": "Get flat 50% discount...",
    "terms_conditions": "• Valid on dine-in only\n• Cannot be combined with other offers",
    "merchant": { ... },
    "offer_type": "discount_percent",
    "discount_value": 50,
    "max_discount": 300,
    "min_order_value": 500,
    "image_url": "https://...",
    "banner_url": "https://...",
    "valid_from": "2024-01-15T00:00:00Z",
    "valid_until": "2024-01-30T23:59:59Z",
    "available_days": ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    "available_hours": [
      { "start": "12:00", "end": "15:00" },
      { "start": "19:00", "end": "23:00" }
    ],
    "rez_coins_required": 100,
    "rez_coins_earned": 50,
    "tags": ["lunch", "dinner", "weekend"],
    "per_user_limit": 2,
    "total_redemption_limit": 500,
    "redemptions_count": 234,
    "is_saved": false,
    "save_count": 456,
    "view_count": 2345,
    "share_count": 123,
    "can_redeem": true,
    "redemption_status": {
      "user_redemptions": 1,
      "remaining_redemptions": 1,
      "last_redeemed_at": "2024-01-10T12:00:00Z"
    },
    "similar_offers": [
      {
        "id": "offer_2",
        "title": "30% OFF on Burgers",
        "merchant": { ... }
      }
    ]
  }
}
```

#### Save/Unsave Offer
```http
POST /v1/offers/:offerId/save
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "is_saved": true,
    "save_count": 457
  }
}

DELETE /v1/offers/:offerId/save
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "is_saved": false,
    "save_count": 456
  }
}
```

#### Get Saved Offers
```http
GET /v1/user/saved-offers?page=1&per_page=20
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": [
    {
      "id": "offer_1",
      "title": "50% OFF on All Pizzas",
      "merchant": { ... },
      "saved_at": "2024-01-15T10:30:00Z",
      ...
    }
  ],
  "pagination": { ... }
}
```

### 5. Wallet & Coins

#### Get Wallet Balance
```http
GET /v1/wallet
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "id": "wallet_1",
    "user_id": "user_1",
    "rez_coins": {
      "balance": 1250,
      "lifetime_earned": 5000,
      "lifetime_spent": 3750,
      "inr_value": 1250.00
    },
    "branded_coins": [
      {
        "merchant_id": "merchant_1",
        "merchant_name": "The Coffee House",
        "balance": 100,
        "earned": 500,
        "spent": 400
      }
    ],
    "prive_coins": {
      "balance": 500,
      "lifetime_earned": 1000,
      "lifetime_spent": 500
    },
    "promo_coins": {
      "balance": 200,
      "expiring_soon": [
        {
          "amount": 100,
          "expires_at": "2024-01-20T23:59:59Z",
          "campaign_name": "Welcome Bonus"
        }
      ]
    },
    "cash_balance": 0.00,
    "limits": {
      "daily_spend_limit": 5000,
      "monthly_spend_limit": 50000,
      "daily_spent": 250,
      "monthly_spent": 1200
    }
  }
}
```

#### Get Wallet Transactions
```http
GET /v1/wallet/transactions?page=1&per_page=20&type=all&coin_type=rez
Authorization: Bearer {token}

Query Parameters:
- page, per_page: Pagination
- type: Filter by transaction type (earn, spend, all) (default: all)
- coin_type: Filter by coin type (rez, branded, prive, promo, all) (default: all)
- start_date, end_date: Date range filter (optional)

Response 200:
{
  "success": true,
  "data": [
    {
      "id": "txn_1",
      "transaction_type": "earn",
      "coin_type": "rez",
      "amount": 100,
      "balance_after": 1250,
      "description": "Earned from offer redemption",
      "reference": {
        "type": "offer_redemption",
        "id": "redemption_1",
        "offer_title": "50% OFF on Pizzas",
        "merchant_name": "Pizza Paradise"
      },
      "created_at": "2024-01-15T10:30:00Z"
    },
    {
      "id": "txn_2",
      "transaction_type": "spend",
      "coin_type": "rez",
      "amount": -50,
      "balance_after": 1150,
      "description": "Used to unlock offer",
      "reference": {
        "type": "offer_unlock",
        "id": "offer_5",
        "offer_title": "Buy 1 Get 1 Coffee"
      },
      "created_at": "2024-01-14T15:20:00Z"
    }
  ],
  "pagination": { ... },
  "summary": {
    "total_earned": 5000,
    "total_spent": 3750,
    "net_balance": 1250
  }
}
```

### 6. Orders

#### Create Order
```http
POST /v1/orders
Authorization: Bearer {token}
Content-Type: application/json

{
  "merchant_id": "merchant_1",
  "outlet_id": "outlet_1",
  "items": [
    {
      "product_id": "product_1",
      "quantity": 2,
      "price": 299.00
    }
  ],
  "offer_id": "offer_1",
  "coins_to_use": 100,
  "delivery_type": "dine_in",
  "notes": "Extra cheese please"
}

Response 201:
{
  "success": true,
  "data": {
    "id": "order_1",
    "order_number": "ORD-20240115-ABC123",
    "merchant": {
      "id": "merchant_1",
      "business_name": "Pizza Paradise"
    },
    "items": [
      {
        "product_id": "product_1",
        "name": "Margherita Pizza",
        "quantity": 2,
        "price": 299.00,
        "total": 598.00
      }
    ],
    "pricing": {
      "subtotal": 598.00,
      "discount_amount": 299.00,
      "tax_amount": 14.95,
      "total_amount": 313.95
    },
    "offers_applied": [
      {
        "offer_id": "offer_1",
        "title": "50% OFF",
        "discount": 299.00
      }
    ],
    "coins": {
      "coins_used": 100,
      "coins_value": 100.00,
      "coins_earned": 50
    },
    "payment_amount": 213.95,
    "status": "pending",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

#### Get Orders
```http
GET /v1/orders?status=completed&page=1&per_page=10
Authorization: Bearer {token}

Query Parameters:
- status: Filter by status (pending, confirmed, completed, cancelled, all) (default: all)
- merchant_id: Filter by merchant (optional)
- page, per_page: Pagination

Response 200:
{
  "success": true,
  "data": [
    {
      "id": "order_1",
      "order_number": "ORD-20240115-ABC123",
      "merchant": {
        "id": "merchant_1",
        "business_name": "Pizza Paradise",
        "logo_url": "https://..."
      },
      "items_count": 2,
      "total_amount": 313.95,
      "status": "completed",
      "completed_at": "2024-01-15T11:00:00Z",
      "created_at": "2024-01-15T10:30:00Z",
      "can_review": true
    }
  ],
  "pagination": { ... }
}
```

#### Get Order Details
```http
GET /v1/orders/:orderId
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "id": "order_1",
    "order_number": "ORD-20240115-ABC123",
    "merchant": {
      "id": "merchant_1",
      "business_name": "Pizza Paradise",
      "logo_url": "https://...",
      "contact_phone": "+912212345678"
    },
    "outlet": {
      "id": "outlet_1",
      "name": "Pizza Paradise - Bandra",
      "address": "456 Street, Mumbai"
    },
    "items": [
      {
        "product_id": "product_1",
        "name": "Margherita Pizza",
        "quantity": 2,
        "price": 299.00,
        "total": 598.00,
        "image_url": "https://..."
      }
    ],
    "pricing": {
      "subtotal": 598.00,
      "discount_amount": 299.00,
      "tax_amount": 14.95,
      "total_amount": 313.95
    },
    "offers_applied": [
      {
        "offer_id": "offer_1",
        "title": "50% OFF on All Pizzas",
        "discount": 299.00
      }
    ],
    "coins": {
      "coins_used": 100,
      "coins_value": 100.00,
      "coins_earned": 50
    },
    "payment": {
      "method": "upi",
      "amount": 213.95,
      "status": "paid",
      "transaction_id": "pay_123456",
      "paid_at": "2024-01-15T10:31:00Z"
    },
    "status": "completed",
    "status_history": [
      {
        "status": "pending",
        "timestamp": "2024-01-15T10:30:00Z"
      },
      {
        "status": "confirmed",
        "timestamp": "2024-01-15T10:32:00Z"
      },
      {
        "status": "preparing",
        "timestamp": "2024-01-15T10:35:00Z"
      },
      {
        "status": "ready",
        "timestamp": "2024-01-15T10:50:00Z"
      },
      {
        "status": "completed",
        "timestamp": "2024-01-15T11:00:00Z"
      }
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "completed_at": "2024-01-15T11:00:00Z",
    "can_review": true,
    "can_cancel": false
  }
}
```

#### Submit Review
```http
POST /v1/orders/:orderId/review
Authorization: Bearer {token}
Content-Type: application/json

{
  "rating": 5,
  "title": "Amazing pizza!",
  "review_text": "Best pizza I've ever had. Great service too.",
  "service_rating": 5,
  "value_rating": 4,
  "ambience_rating": 5,
  "images": ["https://...", "https://..."]
}

Response 201:
{
  "success": true,
  "data": {
    "id": "review_1",
    "order_id": "order_1",
    "rating": 5,
    "title": "Amazing pizza!",
    "review_text": "Best pizza I've ever had...",
    "created_at": "2024-01-15T12:00:00Z"
  }
}
```

### 7. Referrals

#### Get Referral Code
```http
GET /v1/referrals/my-code
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "referral_code": "JOHN1234",
    "referral_link": "https://rezapp.in/r/JOHN1234",
    "stats": {
      "total_referrals": 15,
      "successful_referrals": 10,
      "pending_referrals": 5,
      "total_coins_earned": 1000
    },
    "rewards": {
      "referrer_reward": 100,
      "referee_reward": 50
    }
  }
}
```

#### Get Referral History
```http
GET /v1/referrals/history?page=1&per_page=20
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": [
    {
      "id": "referral_1",
      "referee": {
        "full_name": "Jane Smith",
        "profile_picture_url": "https://..."
      },
      "status": "completed",
      "coins_earned": 100,
      "created_at": "2024-01-10T10:00:00Z",
      "completed_at": "2024-01-12T15:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

### 8. Search

#### Global Search
```http
GET /v1/search?q=coffee&lat=19.0760&lng=72.8777&types=stores,offers
Authorization: Bearer {token}

Query Parameters:
- q: Search query (required)
- lat, lng: User location (optional)
- types: Comma-separated types to search (stores, offers, products) (default: all)
- page, per_page: Pagination

Response 200:
{
  "success": true,
  "data": {
    "stores": [
      {
        "id": "merchant_1",
        "business_name": "The Coffee House",
        "type": "store",
        ...
      }
    ],
    "offers": [
      {
        "id": "offer_1",
        "title": "50% OFF on Coffee",
        "type": "offer",
        ...
      }
    ],
    "products": [
      {
        "id": "product_1",
        "name": "Cappuccino",
        "type": "product",
        ...
      }
    ]
  },
  "suggestions": [
    "coffee shops near me",
    "coffee offers",
    "best coffee in mumbai"
  ]
}
```

#### Autocomplete
```http
GET /v1/search/autocomplete?q=cof
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "suggestions": [
      {
        "text": "coffee",
        "type": "keyword",
        "count": 234
      },
      {
        "text": "The Coffee House",
        "type": "store",
        "id": "merchant_1"
      },
      {
        "text": "50% OFF on Coffee",
        "type": "offer",
        "id": "offer_1"
      }
    ]
  }
}
```

### 9. Privé

#### Get Privé Info
```http
GET /v1/prive/info
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "is_member": false,
    "tiers": [
      {
        "tier": "lite",
        "name": "Privé Lite",
        "pricing": [
          { "duration": 1, "price": 99.00 },
          { "duration": 3, "price": 249.00, "discount": 16 },
          { "duration": 6, "price": 449.00, "discount": 24 },
          { "duration": 12, "price": 799.00, "discount": 33 }
        ],
        "benefits": [
          "10% extra discount at partner stores",
          "Access to 500+ exclusive offers",
          "Priority customer support",
          "Free delivery on orders above ₹200"
        ],
        "partner_count": 500
      },
      {
        "tier": "plus",
        "name": "Privé Plus",
        "pricing": [
          { "duration": 1, "price": 199.00 },
          { "duration": 3, "price": 499.00, "discount": 16 },
          { "duration": 6, "price": 899.00, "discount": 24 },
          { "duration": 12, "price": 1599.00, "discount": 33 }
        ],
        "benefits": [
          "All Lite benefits",
          "15% extra discount",
          "Access to 1000+ exclusive offers",
          "2x ReZ coins on every purchase",
          "Free delivery on all orders"
        ],
        "partner_count": 1000
      },
      {
        "tier": "premium",
        "name": "Privé Premium",
        "pricing": [
          { "duration": 1, "price": 299.00 },
          { "duration": 3, "price": 799.00, "discount": 11 },
          { "duration": 6, "price": 1499.00, "discount": 16 },
          { "duration": 12, "price": 2799.00, "discount": 22 }
        ],
        "benefits": [
          "All Plus benefits",
          "20% extra discount",
          "Access to ALL exclusive offers",
          "3x ReZ coins",
          "Premium concierge service",
          "Early access to flash sales"
        ],
        "partner_count": 2000
      }
    ]
  }
}
```

#### Subscribe to Privé
```http
POST /v1/prive/subscribe
Authorization: Bearer {token}
Content-Type: application/json

{
  "tier": "plus",
  "duration": 6,
  "payment_method": "upi"
}

Response 201:
{
  "success": true,
  "data": {
    "subscription_id": "sub_1",
    "tier": "plus",
    "duration": 6,
    "price": 899.00,
    "start_date": "2024-01-15",
    "end_date": "2024-07-15",
    "payment": {
      "amount": 899.00,
      "payment_url": "https://razorpay.com/..."
    }
  }
}
```

#### Get My Privé Subscription
```http
GET /v1/prive/my-subscription
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "subscription_id": "sub_1",
    "tier": "plus",
    "status": "active",
    "start_date": "2024-01-15",
    "end_date": "2024-07-15",
    "days_remaining": 152,
    "auto_renew": true,
    "benefits": {
      "discount_percent": 15,
      "coin_multiplier": 2.0,
      "partner_count": 1000,
      "free_delivery": true
    },
    "usage_stats": {
      "offers_redeemed": 23,
      "total_saved": 4567.00,
      "coins_earned": 1200
    }
  }
}
```

### 10. Notifications

#### Get Notifications
```http
GET /v1/notifications?page=1&per_page=20&type=all&unread_only=false
Authorization: Bearer {token}

Query Parameters:
- page, per_page: Pagination
- type: Filter by type (all, offer, order, coin, referral, system) (default: all)
- unread_only: Show only unread (boolean) (default: false)

Response 200:
{
  "success": true,
  "data": [
    {
      "id": "notif_1",
      "type": "offer_nearby",
      "title": "New offer near you!",
      "message": "50% OFF at Pizza Paradise - 0.5km away",
      "image_url": "https://...",
      "action": {
        "type": "open_offer",
        "data": {
          "offer_id": "offer_1"
        }
      },
      "is_read": false,
      "priority": "high",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": { ... },
  "unread_count": 5
}
```

#### Mark Notification as Read
```http
PATCH /v1/notifications/:notificationId/read
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "id": "notif_1",
    "is_read": true
  }
}
```

#### Mark All as Read
```http
POST /v1/notifications/mark-all-read
Authorization: Bearer {token}

Response 200:
{
  "success": true,
  "data": {
    "marked_count": 5
  }
}
```

---

## WebSocket Events

**WebSocket Connection:**
```javascript
import io from 'socket.io-client';

const socket = io('wss://api.rezapp.in', {
  auth: {
    token: 'Bearer eyJhbGciOiJIUzI1NiIs...'
  }
});
```

### Client → Server Events

#### 1. Join Room (for merchant-specific updates)
```javascript
socket.emit('join:merchant', {
  merchant_id: 'merchant_1'
});

// Acknowledgment
socket.on('joined:merchant', (data) => {
  console.log('Joined merchant room:', data.merchant_id);
});
```

#### 2. Leave Room
```javascript
socket.emit('leave:merchant', {
  merchant_id: 'merchant_1'
});
```

#### 3. Send Typing Indicator (for live chat)
```javascript
socket.emit('typing:start', {
  room_id: 'support_room_1'
});

socket.emit('typing:stop', {
  room_id: 'support_room_1'
});
```

### Server → Client Events

#### 1. Order Status Update
```javascript
socket.on('order:status_changed', (data) => {
  console.log('Order status changed:', data);
  /*
  {
    order_id: 'order_1',
    order_number: 'ORD-20240115-ABC123',
    old_status: 'confirmed',
    new_status: 'preparing',
    estimated_ready_time: '2024-01-15T11:00:00Z',
    merchant: {
      id: 'merchant_1',
      business_name: 'Pizza Paradise'
    }
  }
  */
});
```

#### 2. New Offer Published
```javascript
socket.on('offer:published', (data) => {
  console.log('New offer:', data);
  /*
  {
    offer_id: 'offer_5',
    title: 'Flash Sale: 70% OFF',
    merchant: { ... },
    valid_until: '2024-01-15T23:59:59Z',
    is_nearby: true,
    distance: 0.5
  }
  */
});
```

#### 3. Coins Earned
```javascript
socket.on('coins:earned', (data) => {
  console.log('Coins earned:', data);
  /*
  {
    amount: 100,
    coin_type: 'rez',
    new_balance: 1350,
    reason: 'Offer redemption',
    reference: {
      type: 'offer_redemption',
      id: 'redemption_1'
    }
  }
  */
});
```

#### 4. New Notification
```javascript
socket.on('notification:new', (data) => {
  console.log('New notification:', data);
  /*
  {
    id: 'notif_5',
    type: 'offer_nearby',
    title: 'New offer near you!',
    message: '...',
    action: { ... },
    priority: 'high'
  }
  */
});
```

#### 5. Referral Completed
```javascript
socket.on('referral:completed', (data) => {
  console.log('Referral completed:', data);
  /*
  {
    referral_id: 'ref_1',
    referee_name: 'Jane Smith',
    coins_earned: 100,
    new_balance: 1450
  }
  */
});
```

#### 6. Live Event Update
```javascript
socket.on('event:update', (data) => {
  console.log('Event update:', data);
  /*
  {
    event_id: 'event_1',
    type: 'flash_sale',
    status: 'live',
    time_remaining: 3600,
    offers_count: 50,
    participants: 234
  }
  */
});
```

---

## API Security

### 1. HTTPS Only
All API communication must use HTTPS (TLS 1.3)

### 2. Request Signing (for sensitive operations)
```javascript
// For high-value transactions
const signature = HMAC_SHA256(payload, secret_key);

headers: {
  'X-Request-Signature': signature,
  'X-Request-Timestamp': timestamp
}
```

### 3. CORS Configuration
```javascript
{
  origin: [
    'https://rezapp.in',
    'https://www.rezapp.in',
    'capacitor://localhost',
    'ionic://localhost'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Authorization', 'Content-Type']
}
```

### 4. Input Validation
```javascript
// Using Joi for validation
const orderSchema = Joi.object({
  merchant_id: Joi.string().uuid().required(),
  items: Joi.array().items(
    Joi.object({
      product_id: Joi.string().uuid().required(),
      quantity: Joi.number().integer().min(1).max(100).required(),
      price: Joi.number().positive().required()
    })
  ).min(1).required(),
  offer_id: Joi.string().uuid().optional(),
  coins_to_use: Joi.number().integer().min(0).optional()
});
```

### 5. SQL Injection Prevention
```javascript
// Using parameterized queries with Prisma
const user = await prisma.user.findUnique({
  where: { id: userId } // Safe from SQL injection
});
```

### 6. XSS Prevention
```javascript
// Sanitize user input
import DOMPurify from 'dompurify';

const cleanInput = DOMPurify.sanitize(userInput);
```

### 7. Rate Limiting Headers
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642252800
```

---

## Performance Optimization

### 1. Response Compression
```javascript
// Enable gzip compression
app.use(compression());
```

### 2. Caching Strategy

**Cache-Control Headers:**
```http
# Static data (categories, settings)
Cache-Control: public, max-age=3600

# User-specific data
Cache-Control: private, max-age=300

# Real-time data
Cache-Control: no-cache, must-revalidate
```

**Redis Caching:**
```javascript
// Cache frequently accessed data
const getCachedStores = async (city, radius) => {
  const cacheKey = `stores:${city}:${radius}`;

  // Try cache first
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);

  // Query database
  const stores = await db.query(...);

  // Cache for 10 minutes
  await redis.setex(cacheKey, 600, JSON.stringify(stores));

  return stores;
};
```

### 3. Database Query Optimization

**Use Indexes:**
```sql
CREATE INDEX idx_offers_location ON offers USING GIST(ST_MakePoint(longitude, latitude));
```

**Limit Fields:**
```javascript
// Only select needed fields
const users = await prisma.user.findMany({
  select: {
    id: true,
    full_name: true,
    email: true
    // Don't select password_hash, etc.
  }
});
```

**Pagination:**
```javascript
// Cursor-based pagination for large datasets
const offers = await prisma.offer.findMany({
  take: 20,
  skip: (page - 1) * 20,
  cursor: lastOfferId ? { id: lastOfferId } : undefined
});
```

### 4. Lazy Loading

**Load related data only when needed:**
```javascript
// Don't load reviews by default
const store = await prisma.merchant.findUnique({
  where: { id: storeId },
  include: {
    outlets: true,
    active_offers: true
    // reviews: false (only load on /reviews endpoint)
  }
});
```

### 5. Background Jobs

**Use queues for heavy operations:**
```javascript
// Send notification asynchronously
await notificationQueue.add('send-notification', {
  user_id: userId,
  type: 'offer_nearby',
  data: { offer_id: offerId }
});
```

### 6. CDN for Media

**Serve images/videos via CDN:**
```
https://cdn.rezapp.in/images/merchants/logo_123.jpg
https://cdn.rezapp.in/images/offers/banner_456.jpg
```

---

## API Documentation

**Interactive API Docs:**
- **Swagger/OpenAPI:** `https://api.rezapp.in/docs`
- **Postman Collection:** Available on request

**Example Swagger Config:**
```yaml
openapi: 3.0.0
info:
  title: ReZ Platform API
  version: 1.0.0
  description: RESTful API for ReZ platform
servers:
  - url: https://api.rezapp.in/v1
    description: Production
  - url: https://staging-api.rezapp.in/v1
    description: Staging
```

---

## Monitoring & Logging

### 1. Request Logging
```javascript
// Log all requests
app.use((req, res, next) => {
  console.log({
    timestamp: new Date().toISOString(),
    method: req.method,
    path: req.path,
    user_id: req.user?.id,
    ip: req.ip,
    user_agent: req.get('user-agent')
  });
  next();
});
```

### 2. Error Tracking
```javascript
// Sentry for error tracking
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV
});
```

### 3. Performance Monitoring
```javascript
// Track API response times
const responseTime = require('response-time');
app.use(responseTime((req, res, time) => {
  statsd.timing('api.response_time', time, {
    route: req.route?.path,
    method: req.method,
    status: res.statusCode
  });
}));
```

---

## Summary

**Total Endpoints:** 150+ REST endpoints
**WebSocket Events:** 20+ real-time events
**Authentication:** JWT + 2FA + Social OAuth
**Rate Limiting:** Configured per endpoint type
**Caching:** Redis for hot data
**Security:** HTTPS, Input validation, XSS prevention, SQL injection protection
**Performance:** Compression, CDN, Background jobs, Query optimization

This API architecture provides a robust, scalable, and secure foundation for the ReZ mobile application, with comprehensive endpoints covering all user journeys from authentication to order completion.
