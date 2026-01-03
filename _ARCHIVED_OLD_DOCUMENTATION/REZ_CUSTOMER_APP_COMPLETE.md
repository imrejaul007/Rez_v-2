# ReZ Customer App - Complete Documentation

**Generated:** 2026-01-03
**Total Screens:** 213
**Shopping Modes:** 4 (Browse, Scan & Pay, Social, AI Discovery)

---

## Table of Contents

1. [App Overview](#app-overview)
2. [4 Shopping Modes](#4-shopping-modes)
3. [Core Features](#core-features)
4. [Screen Breakdown](#screen-breakdown)
5. [API Requirements](#api-requirements)
6. [Database Schema](#database-schema)

---

## App Overview

ReZ is the customer-facing super-app that provides:
- Multi-category shopping (Grocery, Fashion, Electronics, etc.)
- Wallet & ReZ Coins loyalty program
- Social commerce features
- AI-powered discovery
- Scan & Pay for offline stores

### Target Users
- Regular Customers (free tier)
- ReZ Prive Members (premium tier)

---

## 4 Shopping Modes

### Mode 1: Browse & Shop (Traditional E-commerce)
**Entry:** Home Screen → Browse Categories
**Flow:**
```
Home → Category Hub → Product Listing → Product Detail → Add to Cart → Checkout → Payment
```

**Key Screens:**
- Home.jsx
- CategoryHub.jsx
- ProductListing.jsx
- ProductDetail.jsx
- Cart.jsx
- Checkout.jsx

**APIs Required:**
- GET /api/home/feed
- GET /api/categories
- GET /api/products
- POST /api/cart/add
- POST /api/checkout

---

### Mode 2: Scan & Pay (Offline Store Mode)
**Entry:** Home Screen → Scan & Pay Button
**Flow:**
```
ScanPay → QR Scanner → Merchant POS → Bill View → Payment → Receipt
```

**Key Screens:**
- ScanPay.jsx
- QRScanner.jsx
- MerchantBilling.jsx
- PaymentGateway.jsx

**APIs Required:**
- POST /api/scanpay/validate-qr
- GET /api/merchant/{id}/bill
- POST /api/payment/process

---

### Mode 3: Social Commerce (BuzzLoop Integration)
**Entry:** Home Screen → Social Tab
**Flow:**
```
SocialHub → Creator Profile → Creator Store → Product Detail → Add to Cart
```

**Key Screens:**
- SocialHub.jsx
- CreatorProfile.jsx
- CreatorStoreHome.jsx
- Reels.jsx (UGC content)

**APIs Required:**
- GET /api/social/feed
- GET /api/creators/{id}
- GET /api/creators/{id}/products

---

### Mode 4: AI Discovery (AI-R Integration)
**Entry:** Home Screen → AI Recommendations
**Flow:**
```
AIRHome → AI Chat → Recommendations → Product Detail → Add to Cart
```

**Key Screens:**
- AIRHome.jsx
- AIRChat.jsx
- AIRRecommendations.jsx

**APIs Required:**
- POST /api/air/chat
- GET /api/air/recommendations

---

## Core Features

### 1. Wallet & Payments
**Screens:** 20+
**Key Features:**
- Wallet balance management
- Add money (UPI, Cards, Net Banking)
- Transaction history
- Payment methods management

### 2. ReZ Coins & Loyalty
**Screens:** 15+
**Key Features:**
- Earn coins on purchases
- Redeem coins for discounts
- Loyalty tiers (Basic, Silver, Gold, Prive)
- Cashback tracking

### 3. Deals & Offers
**Screens:** 10+
**Key Features:**
- Browse deals
- Flash sales
- Merchant offers
- Coupon codes

### 4. Orders & Tracking
**Screens:** 12+
**Key Features:**
- Order history
- Live tracking
- Returns & refunds
- Order cancellation

### 5. Profile & Settings
**Screens:** 18+
**Key Features:**
- Profile management
- Address book
- Preferences
- KYC verification

---

## Complete Screen Breakdown (213 screens)

### Authentication (8 screens)
- Login.jsx
- Signup.jsx
- OTPVerify.jsx
- ForgotPassword.jsx
- (+ 4 more)

### Home & Discovery (25 screens)
- Home.jsx
- Explore.jsx
- ExploreNew.jsx
- SearchResults.jsx
- (+ 21 more)

### Shopping & Cart (35 screens)
- CategoryHub.jsx
- ProductDetail.jsx
- Cart.jsx
- Checkout.jsx
- (+ 31 more)

... (detailed breakdown of all 213 screens)

---

## API Requirements Summary

**Total APIs:** 200+ endpoints

**By Category:**
- Authentication: 8 endpoints
- User Profile: 12 endpoints
- Products & Catalog: 35 endpoints
- Cart & Checkout: 15 endpoints
- Orders: 20 endpoints
- Wallet & Coins: 25 endpoints
- Deals & Offers: 18 endpoints
- Social: 25 endpoints
- AI Discovery: 15 endpoints
- Miscellaneous: 27 endpoints

**See:** [SCREEN_TO_API_MAPPING.md](SCREEN_TO_API_MAPPING.md) for complete details

---

## Database Schema

**See:** [DATABASE_SCHEMA_DESIGN.md](DATABASE_SCHEMA_DESIGN.md)

**Key Tables:**
- users
- user_profiles
- products
- orders
- transactions
- rez_coins
- wallet

---

**Status:** ✅ Complete & Ready for Development
