# ReZ Platform - Database Schema Design

## Table of Contents
1. [Overview](#overview)
2. [Database Strategy](#database-strategy)
3. [PostgreSQL Schema (Primary Database)](#postgresql-schema)
4. [MongoDB Collections](#mongodb-collections)
5. [Redis Data Structures](#redis-data-structures)
6. [Elasticsearch Indices](#elasticsearch-indices)
7. [Relationships & Constraints](#relationships--constraints)
8. [Indexing Strategy](#indexing-strategy)
9. [Sharding & Partitioning](#sharding--partitioning)
10. [Data Migration Plan](#data-migration-plan)

---

## Overview

The ReZ platform uses a **polyglot persistence** approach with multiple databases optimized for specific use cases:

- **PostgreSQL 15**: Primary transactional database for relational data
- **Redis 7**: Caching, sessions, real-time data, rate limiting
- **MongoDB 7**: Logs, analytics, flexible schema data
- **Elasticsearch 8**: Full-text search, product discovery

**Total Tables/Collections**: 60+ across all databases

---

## Database Strategy

### PostgreSQL (Primary - Transactional Data)
**Use Cases:**
- User accounts, authentication, profiles
- Merchant data, business information
- Products, offers, deals
- Transactions, orders, payments
- Wallet, coins, rewards
- Admin configurations

**Why PostgreSQL:**
- ACID compliance for financial transactions
- Strong relational integrity
- Complex joins and queries
- Proven reliability at scale

### MongoDB (Analytics & Logs)
**Use Cases:**
- User activity logs
- Search queries and results
- Analytics events
- Notification history
- A/B test results

**Why MongoDB:**
- Flexible schema for evolving data
- High write throughput
- Time-series data handling
- Horizontal scaling

### Redis (Cache & Real-time)
**Use Cases:**
- Session storage
- API response caching
- Rate limiting counters
- Real-time leaderboards
- Pub/Sub messaging

**Why Redis:**
- Sub-millisecond latency
- In-memory performance
- Built-in data structures
- Atomic operations

### Elasticsearch (Search)
**Use Cases:**
- Product search
- Merchant discovery
- Offer filtering
- Autocomplete suggestions

**Why Elasticsearch:**
- Full-text search capabilities
- Fuzzy matching & typo tolerance
- Aggregations for faceted search
- Geo-spatial queries

---

## PostgreSQL Schema

### 1. User Management

#### `users` Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone VARCHAR(15) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255), -- NULL for social login
  full_name VARCHAR(255),
  gender VARCHAR(20), -- male, female, other, prefer_not_to_say
  date_of_birth DATE,
  profile_picture_url TEXT,

  -- Authentication
  email_verified BOOLEAN DEFAULT FALSE,
  phone_verified BOOLEAN DEFAULT TRUE,
  two_factor_enabled BOOLEAN DEFAULT FALSE,
  two_factor_secret VARCHAR(255), -- TOTP secret

  -- Preferences
  language VARCHAR(10) DEFAULT 'en',
  notification_preferences JSONB DEFAULT '{"push": true, "email": true, "sms": false}',
  privacy_settings JSONB DEFAULT '{"profile_visible": true, "location_tracking": true}',

  -- Status
  status VARCHAR(20) DEFAULT 'active', -- active, suspended, deleted
  account_type VARCHAR(20) DEFAULT 'regular', -- regular, student, corporate

  -- Metadata
  last_login_at TIMESTAMP,
  last_login_ip INET,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP, -- Soft delete

  -- Constraints
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_phone CHECK (phone ~* '^\+?[1-9]\d{9,14}$'),
  CONSTRAINT valid_status CHECK (status IN ('active', 'suspended', 'deleted')),

  -- Indexes
  INDEX idx_users_phone (phone),
  INDEX idx_users_email (email),
  INDEX idx_users_status (status),
  INDEX idx_users_created_at (created_at DESC)
);
```

#### `user_addresses` Table
```sql
CREATE TABLE user_addresses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  label VARCHAR(50), -- home, work, other
  full_name VARCHAR(255),
  phone VARCHAR(15),

  address_line1 VARCHAR(255) NOT NULL,
  address_line2 VARCHAR(255),
  landmark VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  pincode VARCHAR(10) NOT NULL,
  country VARCHAR(100) DEFAULT 'India',

  -- Geolocation
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),

  is_default BOOLEAN DEFAULT FALSE,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_user_addresses_user_id (user_id),
  INDEX idx_user_addresses_default (user_id, is_default) WHERE is_default = TRUE
);
```

#### `user_colleges` Table (Student Verification)
```sql
CREATE TABLE user_colleges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  college_id UUID NOT NULL REFERENCES colleges(id),

  student_id_number VARCHAR(100),
  student_email VARCHAR(255), -- College email
  course VARCHAR(255),
  year_of_study INTEGER,
  graduation_year INTEGER,

  -- Verification
  verification_status VARCHAR(20) DEFAULT 'pending', -- pending, verified, rejected
  verified_at TIMESTAMP,
  verified_by UUID REFERENCES admin_users(id),

  -- Documents
  id_card_url TEXT,
  additional_proof_url TEXT,

  is_active BOOLEAN DEFAULT TRUE,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(user_id, college_id),
  INDEX idx_user_colleges_user_id (user_id),
  INDEX idx_user_colleges_college_id (college_id),
  INDEX idx_user_colleges_verification (verification_status)
);
```

#### `user_social_accounts` Table
```sql
CREATE TABLE user_social_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  provider VARCHAR(50) NOT NULL, -- google, facebook, apple
  provider_user_id VARCHAR(255) NOT NULL,
  provider_email VARCHAR(255),

  access_token TEXT,
  refresh_token TEXT,
  token_expires_at TIMESTAMP,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(provider, provider_user_id),
  INDEX idx_user_social_user_id (user_id)
);
```

#### `user_sessions` Table
```sql
CREATE TABLE user_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  token_hash VARCHAR(255) NOT NULL UNIQUE, -- JWT token hash
  device_id VARCHAR(255),
  device_name VARCHAR(255),
  device_type VARCHAR(50), -- ios, android, web
  app_version VARCHAR(20),

  ip_address INET,
  user_agent TEXT,

  -- Location
  city VARCHAR(100),
  country VARCHAR(100),

  last_activity_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP NOT NULL,

  created_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_user_sessions_user_id (user_id),
  INDEX idx_user_sessions_token (token_hash),
  INDEX idx_user_sessions_expires (expires_at)
);
```

---

### 2. Merchant Management

#### `merchants` Table
```sql
CREATE TABLE merchants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Business Information
  business_name VARCHAR(255) NOT NULL,
  business_type VARCHAR(100), -- restaurant, retail, service, etc.
  legal_entity_name VARCHAR(255),

  -- Contact
  primary_contact_name VARCHAR(255) NOT NULL,
  primary_contact_phone VARCHAR(15) NOT NULL,
  primary_contact_email VARCHAR(255) NOT NULL,

  -- Address
  address_line1 VARCHAR(255) NOT NULL,
  address_line2 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  pincode VARCHAR(10) NOT NULL,
  country VARCHAR(100) DEFAULT 'India',

  -- Geolocation
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,

  -- Business Details
  gstin VARCHAR(15), -- GST number
  pan VARCHAR(10),
  fssai_license VARCHAR(14), -- For food businesses

  -- Media
  logo_url TEXT,
  cover_image_url TEXT,
  images JSONB DEFAULT '[]', -- Array of image URLs

  -- Package & Status
  package_tier VARCHAR(20) DEFAULT 'basic', -- basic, plus, premium, enterprise
  status VARCHAR(20) DEFAULT 'pending', -- pending, active, suspended, rejected

  -- Verification
  verified BOOLEAN DEFAULT FALSE,
  verified_at TIMESTAMP,
  verified_by UUID REFERENCES admin_users(id),

  -- Operations
  onboarding_status VARCHAR(50) DEFAULT 'pending', -- pending, documents_submitted, verified, live
  onboarded_by UUID REFERENCES admin_users(id), -- Operations admin who onboarded
  assigned_city VARCHAR(100),
  assigned_team VARCHAR(100),

  -- Financials
  commission_rate DECIMAL(5, 2) DEFAULT 10.00, -- Percentage
  settlement_frequency VARCHAR(20) DEFAULT 'weekly', -- daily, weekly, monthly

  -- Ratings
  average_rating DECIMAL(3, 2) DEFAULT 0.00,
  total_reviews INTEGER DEFAULT 0,

  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP,

  INDEX idx_merchants_city (city),
  INDEX idx_merchants_status (status),
  INDEX idx_merchants_package (package_tier),
  INDEX idx_merchants_location (latitude, longitude),
  INDEX idx_merchants_verified (verified)
);
```

#### `merchant_outlets` Table
```sql
CREATE TABLE merchant_outlets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  merchant_id UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,

  outlet_name VARCHAR(255) NOT NULL,
  outlet_code VARCHAR(50) UNIQUE,

  -- Address
  address_line1 VARCHAR(255) NOT NULL,
  address_line2 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  pincode VARCHAR(10) NOT NULL,

  -- Geolocation
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,

  -- Contact
  contact_phone VARCHAR(15),
  contact_email VARCHAR(255),

  -- Operations
  operating_hours JSONB, -- {mon: [{open: "09:00", close: "21:00"}], ...}
  is_open_now BOOLEAN DEFAULT TRUE,

  -- Features
  features JSONB DEFAULT '[]', -- ["wifi", "parking", "ac", "outdoor_seating"]

  is_active BOOLEAN DEFAULT TRUE,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_merchant_outlets_merchant_id (merchant_id),
  INDEX idx_merchant_outlets_location (latitude, longitude),
  INDEX idx_merchant_outlets_city (city)
);
```

#### `merchant_users` Table
```sql
CREATE TABLE merchant_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  merchant_id UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,

  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(15),

  -- Role & Permissions
  role VARCHAR(50) DEFAULT 'staff', -- owner, manager, staff
  permissions JSONB DEFAULT '{}', -- {offers: ["create", "edit"], transactions: ["view"]}

  -- Status
  is_active BOOLEAN DEFAULT TRUE,
  email_verified BOOLEAN DEFAULT FALSE,

  last_login_at TIMESTAMP,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_merchant_users_merchant_id (merchant_id),
  INDEX idx_merchant_users_email (email)
);
```

#### `merchant_bank_accounts` Table
```sql
CREATE TABLE merchant_bank_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  merchant_id UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,

  account_holder_name VARCHAR(255) NOT NULL,
  account_number VARCHAR(20) NOT NULL,
  ifsc_code VARCHAR(11) NOT NULL,
  bank_name VARCHAR(255),
  branch_name VARCHAR(255),

  account_type VARCHAR(20) DEFAULT 'current', -- current, savings

  -- Verification
  is_verified BOOLEAN DEFAULT FALSE,
  verified_at TIMESTAMP,
  verification_method VARCHAR(50), -- penny_drop, manual

  is_primary BOOLEAN DEFAULT TRUE,
  is_active BOOLEAN DEFAULT TRUE,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_merchant_bank_merchant_id (merchant_id)
);
```

---

### 3. Product & Category Management

#### `categories` Table
```sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,

  parent_id UUID REFERENCES categories(id), -- For nested categories
  level INTEGER DEFAULT 0, -- 0=top, 1=sub, 2=sub-sub

  icon_url TEXT,
  image_url TEXT,

  -- Display
  display_order INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT FALSE,

  -- SEO
  meta_title VARCHAR(255),
  meta_description TEXT,

  is_active BOOLEAN DEFAULT TRUE,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_categories_parent (parent_id),
  INDEX idx_categories_slug (slug),
  INDEX idx_categories_featured (is_featured) WHERE is_featured = TRUE
);
```

#### `products` Table
```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  merchant_id UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id),

  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  description TEXT,

  -- Pricing
  price DECIMAL(10, 2) NOT NULL,
  original_price DECIMAL(10, 2), -- For showing discount
  currency VARCHAR(3) DEFAULT 'INR',

  -- Stock
  stock_quantity INTEGER DEFAULT 0,
  low_stock_threshold INTEGER DEFAULT 10,
  in_stock BOOLEAN DEFAULT TRUE,

  -- Media
  images JSONB DEFAULT '[]', -- [{url: "", alt: "", order: 1}]
  primary_image_url TEXT,

  -- Attributes
  attributes JSONB DEFAULT '{}', -- {size: "M", color: "Red", brand: "Nike"}
  variants JSONB DEFAULT '[]', -- [{sku: "", size: "L", price: 599, stock: 10}]

  -- SEO
  meta_title VARCHAR(255),
  meta_description TEXT,

  -- Stats
  view_count INTEGER DEFAULT 0,
  order_count INTEGER DEFAULT 0,

  is_active BOOLEAN DEFAULT TRUE,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(merchant_id, slug),
  INDEX idx_products_merchant_id (merchant_id),
  INDEX idx_products_category_id (category_id),
  INDEX idx_products_price (price),
  INDEX idx_products_created (created_at DESC)
);
```

---

### 4. Offers & Deals

#### `offers` Table
```sql
CREATE TABLE offers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  merchant_id UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  outlet_id UUID REFERENCES merchant_outlets(id), -- NULL = all outlets

  -- Basic Details
  title VARCHAR(255) NOT NULL,
  description TEXT,
  terms_conditions TEXT,

  -- Offer Type
  offer_type VARCHAR(50) NOT NULL, -- discount_percent, discount_fixed, bogo, freebie, cashback

  -- Discount Configuration
  discount_value DECIMAL(10, 2), -- Percentage or fixed amount
  max_discount DECIMAL(10, 2), -- Cap for percentage discounts
  min_order_value DECIMAL(10, 2), -- Minimum cart value

  -- BOGO Configuration (if offer_type = bogo)
  bogo_config JSONB, -- {buy: 2, get: 1, on: "cheapest"}

  -- Coin Configuration
  rez_coins_required INTEGER DEFAULT 0, -- Coins to unlock
  rez_coins_earned INTEGER DEFAULT 0, -- Coins earned on redemption
  branded_coins_earned INTEGER DEFAULT 0,

  -- Validity
  valid_from TIMESTAMP NOT NULL,
  valid_until TIMESTAMP NOT NULL,

  -- Time Restrictions
  available_days JSONB DEFAULT '["mon","tue","wed","thu","fri","sat","sun"]',
  available_hours JSONB, -- [{start: "09:00", end: "12:00"}, {start: "18:00", end: "21:00"}]

  -- Usage Limits
  total_redemption_limit INTEGER, -- NULL = unlimited
  per_user_limit INTEGER DEFAULT 1,
  redemptions_count INTEGER DEFAULT 0,

  -- Targeting
  user_segment VARCHAR(50), -- all, new_users, student, vip, custom
  user_tags JSONB DEFAULT '[]', -- ["foodie", "fashion_lover"]
  min_user_level INTEGER DEFAULT 0,

  -- Media
  image_url TEXT,
  banner_url TEXT,

  -- Tags & Categories
  tags JSONB DEFAULT '[]', -- ["lunch", "weekend", "festive", "flash_deal"]
  categories_applicable JSONB DEFAULT '[]', -- Category IDs

  -- Status
  status VARCHAR(20) DEFAULT 'draft', -- draft, active, paused, expired, rejected
  approval_status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected
  approved_by UUID REFERENCES admin_users(id),
  approved_at TIMESTAMP,
  rejection_reason TEXT,

  -- Analytics
  view_count INTEGER DEFAULT 0,
  save_count INTEGER DEFAULT 0,
  share_count INTEGER DEFAULT 0,

  -- Priority & Boost
  is_featured BOOLEAN DEFAULT FALSE,
  is_boosted BOOLEAN DEFAULT FALSE, -- Paid promotion
  boost_ends_at TIMESTAMP,
  display_priority INTEGER DEFAULT 0,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_offers_merchant_id (merchant_id),
  INDEX idx_offers_status (status),
  INDEX idx_offers_validity (valid_from, valid_until),
  INDEX idx_offers_featured (is_featured) WHERE is_featured = TRUE,
  INDEX idx_offers_tags USING GIN (tags)
);
```

#### `offer_redemptions` Table
```sql
CREATE TABLE offer_redemptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  offer_id UUID NOT NULL REFERENCES offers(id),
  user_id UUID NOT NULL REFERENCES users(id),
  merchant_id UUID NOT NULL REFERENCES merchants(id),
  outlet_id UUID REFERENCES merchant_outlets(id),

  -- Transaction Details
  order_id UUID REFERENCES orders(id),

  original_amount DECIMAL(10, 2) NOT NULL,
  discount_amount DECIMAL(10, 2) NOT NULL,
  final_amount DECIMAL(10, 2) NOT NULL,

  -- Coins
  rez_coins_used INTEGER DEFAULT 0,
  rez_coins_earned INTEGER DEFAULT 0,
  branded_coins_earned INTEGER DEFAULT 0,

  -- Status
  status VARCHAR(20) DEFAULT 'pending', -- pending, completed, cancelled, refunded

  redeemed_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  cancelled_at TIMESTAMP,

  created_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_offer_redemptions_offer_id (offer_id),
  INDEX idx_offer_redemptions_user_id (user_id),
  INDEX idx_offer_redemptions_merchant_id (merchant_id),
  INDEX idx_offer_redemptions_status (status),
  INDEX idx_offer_redemptions_date (redeemed_at DESC)
);
```

---

### 5. Wallet & Coins

#### `wallets` Table
```sql
CREATE TABLE wallets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- ReZ Coins (Universal)
  rez_coins_balance INTEGER DEFAULT 0,
  rez_coins_lifetime_earned INTEGER DEFAULT 0,
  rez_coins_lifetime_spent INTEGER DEFAULT 0,

  -- Branded Coins (Merchant-specific)
  branded_coins JSONB DEFAULT '{}', -- {merchant_id: {balance: 100, earned: 500, spent: 400}}

  -- Privé Coins (Premium)
  prive_coins_balance INTEGER DEFAULT 0,
  prive_coins_lifetime_earned INTEGER DEFAULT 0,
  prive_coins_lifetime_spent INTEGER DEFAULT 0,

  -- Promo Coins (Temporary/Expiring)
  promo_coins_balance INTEGER DEFAULT 0,

  -- Cash Balance (if applicable)
  cash_balance DECIMAL(10, 2) DEFAULT 0.00,

  -- Security
  pin_hash VARCHAR(255), -- Wallet PIN for transactions
  pin_set BOOLEAN DEFAULT FALSE,

  -- Limits
  daily_spend_limit INTEGER DEFAULT 5000, -- Coins
  monthly_spend_limit INTEGER DEFAULT 50000,

  -- Status
  is_active BOOLEAN DEFAULT TRUE,
  is_frozen BOOLEAN DEFAULT FALSE, -- Frozen for security reasons
  frozen_reason TEXT,
  frozen_at TIMESTAMP,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_wallets_user_id (user_id)
);
```

#### `wallet_transactions` Table
```sql
CREATE TABLE wallet_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet_id UUID NOT NULL REFERENCES wallets(id),
  user_id UUID NOT NULL REFERENCES users(id),

  -- Transaction Details
  transaction_type VARCHAR(50) NOT NULL, -- earn, spend, transfer, refund, expire, admin_credit, admin_debit
  coin_type VARCHAR(20) NOT NULL, -- rez, branded, prive, promo, cash

  amount INTEGER NOT NULL, -- Positive for credit, negative for debit

  -- Balance After Transaction
  balance_after INTEGER NOT NULL,

  -- Reference
  reference_type VARCHAR(50), -- offer_redemption, referral, purchase, admin_adjustment
  reference_id UUID, -- ID of related entity

  -- For Branded Coins
  merchant_id UUID REFERENCES merchants(id),

  -- For Promo Coins
  promo_campaign_id UUID,
  expires_at TIMESTAMP, -- For promo coins

  -- Description
  description TEXT,
  notes TEXT, -- Admin notes

  -- Metadata
  metadata JSONB DEFAULT '{}', -- {order_id: "", offer_id: ""}

  created_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_wallet_transactions_wallet_id (wallet_id),
  INDEX idx_wallet_transactions_user_id (user_id),
  INDEX idx_wallet_transactions_type (transaction_type),
  INDEX idx_wallet_transactions_date (created_at DESC),
  INDEX idx_wallet_transactions_reference (reference_type, reference_id)
);
```

#### `promo_coins` Table (Expiring Coins)
```sql
CREATE TABLE promo_coins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet_id UUID NOT NULL REFERENCES wallets(id),
  user_id UUID NOT NULL REFERENCES users(id),

  campaign_id UUID, -- Which promo campaign
  campaign_name VARCHAR(255),

  amount INTEGER NOT NULL,
  remaining_balance INTEGER NOT NULL,

  issued_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP NOT NULL,

  is_expired BOOLEAN DEFAULT FALSE,

  created_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_promo_coins_wallet_id (wallet_id),
  INDEX idx_promo_coins_expires (expires_at),
  INDEX idx_promo_coins_active (wallet_id, is_expired) WHERE is_expired = FALSE
);
```

---

### 6. Orders & Transactions

#### `orders` Table
```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number VARCHAR(50) UNIQUE NOT NULL, -- Human-readable: ORD-20240115-ABC123

  user_id UUID NOT NULL REFERENCES users(id),
  merchant_id UUID NOT NULL REFERENCES merchants(id),
  outlet_id UUID REFERENCES merchant_outlets(id),

  -- Order Details
  items JSONB NOT NULL, -- [{product_id, name, qty, price, total}]

  -- Pricing
  subtotal DECIMAL(10, 2) NOT NULL,
  discount_amount DECIMAL(10, 2) DEFAULT 0.00,
  tax_amount DECIMAL(10, 2) DEFAULT 0.00,
  delivery_fee DECIMAL(10, 2) DEFAULT 0.00,
  total_amount DECIMAL(10, 2) NOT NULL,

  -- Offers Applied
  offers_applied JSONB DEFAULT '[]', -- [{offer_id, discount}]

  -- Coins
  coins_used INTEGER DEFAULT 0,
  coins_value DECIMAL(10, 2) DEFAULT 0.00, -- INR value of coins
  coins_earned INTEGER DEFAULT 0,

  -- Payment
  payment_method VARCHAR(50), -- upi, card, wallet, netbanking, cod
  payment_status VARCHAR(20) DEFAULT 'pending', -- pending, paid, failed, refunded
  payment_transaction_id VARCHAR(255),
  paid_at TIMESTAMP,

  -- Order Status
  status VARCHAR(50) DEFAULT 'pending', -- pending, confirmed, preparing, ready, completed, cancelled

  -- Delivery (if applicable)
  delivery_address JSONB,
  delivery_type VARCHAR(20), -- pickup, delivery
  scheduled_for TIMESTAMP,

  -- Timestamps
  confirmed_at TIMESTAMP,
  completed_at TIMESTAMP,
  cancelled_at TIMESTAMP,
  cancellation_reason TEXT,

  -- Ratings
  rating INTEGER, -- 1-5
  review_text TEXT,
  reviewed_at TIMESTAMP,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_orders_user_id (user_id),
  INDEX idx_orders_merchant_id (merchant_id),
  INDEX idx_orders_status (status),
  INDEX idx_orders_payment (payment_status),
  INDEX idx_orders_date (created_at DESC),
  INDEX idx_orders_number (order_number)
);
```

#### `payments` Table
```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id),
  user_id UUID NOT NULL REFERENCES users(id),

  -- Payment Gateway
  gateway VARCHAR(50) NOT NULL, -- razorpay, paytm, phonepe
  gateway_transaction_id VARCHAR(255) UNIQUE,
  gateway_order_id VARCHAR(255),

  -- Amount
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'INR',

  -- Method
  payment_method VARCHAR(50), -- upi, card, wallet, netbanking
  payment_details JSONB, -- {upi_id: "", card_last4: "", bank_name: ""}

  -- Status
  status VARCHAR(20) DEFAULT 'initiated', -- initiated, success, failed, refunded

  -- Response
  gateway_response JSONB,
  failure_reason TEXT,

  -- Timestamps
  initiated_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,

  created_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_payments_order_id (order_id),
  INDEX idx_payments_user_id (user_id),
  INDEX idx_payments_status (status),
  INDEX idx_payments_gateway_txn (gateway_transaction_id)
);
```

---

### 7. Referrals & Rewards

#### `referrals` Table
```sql
CREATE TABLE referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  referrer_id UUID NOT NULL REFERENCES users(id), -- User who referred
  referee_id UUID NOT NULL REFERENCES users(id), -- User who was referred

  referral_code VARCHAR(20) NOT NULL,

  -- Rewards
  referrer_reward_coins INTEGER DEFAULT 100,
  referee_reward_coins INTEGER DEFAULT 50,

  -- Status
  status VARCHAR(20) DEFAULT 'pending', -- pending, completed, expired

  -- Completion Condition
  condition_type VARCHAR(50) DEFAULT 'first_purchase', -- signup, first_purchase, spend_threshold
  condition_met BOOLEAN DEFAULT FALSE,
  condition_met_at TIMESTAMP,

  -- Rewards Credited
  referrer_rewarded BOOLEAN DEFAULT FALSE,
  referee_rewarded BOOLEAN DEFAULT FALSE,
  rewarded_at TIMESTAMP,

  created_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_referrals_referrer (referrer_id),
  INDEX idx_referrals_referee (referee_id),
  INDEX idx_referrals_code (referral_code),
  INDEX idx_referrals_status (status)
);
```

#### `loyalty_tiers` Table
```sql
CREATE TABLE loyalty_tiers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  name VARCHAR(100) NOT NULL, -- Bronze, Silver, Gold, Platinum
  level INTEGER UNIQUE NOT NULL, -- 1, 2, 3, 4

  -- Requirements
  min_spend DECIMAL(10, 2) NOT NULL, -- Lifetime spend in INR
  min_orders INTEGER NOT NULL,

  -- Benefits
  coin_multiplier DECIMAL(3, 2) DEFAULT 1.00, -- 1.5x means 50% more coins
  exclusive_offers BOOLEAN DEFAULT FALSE,
  priority_support BOOLEAN DEFAULT FALSE,
  free_delivery BOOLEAN DEFAULT FALSE,

  -- Display
  color VARCHAR(7), -- Hex color
  icon_url TEXT,

  is_active BOOLEAN DEFAULT TRUE,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_loyalty_tiers_level (level)
);
```

#### `user_loyalty` Table
```sql
CREATE TABLE user_loyalty (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES users(id),
  current_tier_id UUID REFERENCES loyalty_tiers(id),

  -- Stats
  lifetime_spend DECIMAL(10, 2) DEFAULT 0.00,
  total_orders INTEGER DEFAULT 0,
  current_streak_days INTEGER DEFAULT 0, -- Consecutive days with activity
  longest_streak_days INTEGER DEFAULT 0,

  -- Progress to Next Tier
  next_tier_id UUID REFERENCES loyalty_tiers(id),
  spend_to_next_tier DECIMAL(10, 2),
  orders_to_next_tier INTEGER,

  -- Achievements
  achievements JSONB DEFAULT '[]', -- [{id: "first_order", earned_at: "2024-01-15"}]

  last_activity_at TIMESTAMP,
  tier_achieved_at TIMESTAMP,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_user_loyalty_user_id (user_id),
  INDEX idx_user_loyalty_tier (current_tier_id)
);
```

---

### 8. Privé Program

#### `prive_subscriptions` Table
```sql
CREATE TABLE prive_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),

  -- Subscription Details
  tier VARCHAR(20) NOT NULL, -- lite, plus, premium

  -- Pricing
  plan_duration INTEGER NOT NULL, -- In months: 1, 3, 6, 12
  price DECIMAL(10, 2) NOT NULL,

  -- Validity
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,

  -- Status
  status VARCHAR(20) DEFAULT 'active', -- active, expired, cancelled
  auto_renew BOOLEAN DEFAULT TRUE,

  -- Payment
  payment_id UUID REFERENCES payments(id),

  -- Cancellation
  cancelled_at TIMESTAMP,
  cancellation_reason TEXT,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_prive_subs_user_id (user_id),
  INDEX idx_prive_subs_status (status),
  INDEX idx_prive_subs_expiry (end_date)
);
```

#### `prive_merchants` Table
```sql
CREATE TABLE prive_merchants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  merchant_id UUID NOT NULL REFERENCES merchants(id),

  -- Privé Configuration
  is_prive_partner BOOLEAN DEFAULT FALSE,
  prive_tier VARCHAR(20), -- lite, plus, premium (which tiers get access)

  -- Benefits
  discount_percent DECIMAL(5, 2), -- Exclusive discount for Privé members
  prive_coin_multiplier DECIMAL(3, 2) DEFAULT 1.00, -- Extra coins for Privé members

  -- Offers
  exclusive_offers JSONB DEFAULT '[]', -- Offer IDs only for Privé

  start_date DATE,
  end_date DATE,

  is_active BOOLEAN DEFAULT TRUE,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_prive_merchants_merchant_id (merchant_id),
  INDEX idx_prive_merchants_active (is_active)
);
```

---

### 9. Colleges & Student Programs

#### `colleges` Table
```sql
CREATE TABLE colleges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  name VARCHAR(255) NOT NULL,
  short_name VARCHAR(100),
  college_code VARCHAR(50) UNIQUE,

  -- Address
  address_line1 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  pincode VARCHAR(10),

  -- Geolocation
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),

  -- Contact
  website VARCHAR(255),
  contact_email VARCHAR(255),
  contact_phone VARCHAR(15),

  -- Student Count
  total_students INTEGER,

  -- Partnership
  partnership_status VARCHAR(20) DEFAULT 'pending', -- pending, active, inactive
  partnership_start_date DATE,

  -- Campus Manager
  campus_manager_name VARCHAR(255),
  campus_manager_phone VARCHAR(15),
  campus_manager_email VARCHAR(255),

  -- Configuration
  student_verification_required BOOLEAN DEFAULT TRUE,
  email_domain VARCHAR(255), -- e.g., "iitd.ac.in"

  logo_url TEXT,

  is_active BOOLEAN DEFAULT TRUE,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_colleges_city (city),
  INDEX idx_colleges_status (partnership_status),
  INDEX idx_colleges_code (college_code)
);
```

#### `student_ambassadors` Table
```sql
CREATE TABLE student_ambassadors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  college_id UUID NOT NULL REFERENCES colleges(id),

  -- Ambassador Details
  ambassador_code VARCHAR(20) UNIQUE NOT NULL,

  -- Status
  status VARCHAR(20) DEFAULT 'active', -- active, inactive, suspended

  -- Performance
  total_referrals INTEGER DEFAULT 0,
  successful_referrals INTEGER DEFAULT 0, -- Referrals who made purchase
  total_earnings DECIMAL(10, 2) DEFAULT 0.00,

  -- Commission
  commission_rate DECIMAL(5, 2) DEFAULT 5.00, -- Percentage

  -- Payout
  payout_method VARCHAR(50), -- bank_transfer, upi, paytm
  payout_details JSONB,

  -- Training
  training_completed BOOLEAN DEFAULT FALSE,
  training_completed_at TIMESTAMP,

  -- Appointment
  appointed_at TIMESTAMP DEFAULT NOW(),
  appointed_by UUID REFERENCES admin_users(id),

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(user_id, college_id),
  INDEX idx_ambassadors_user (user_id),
  INDEX idx_ambassadors_college (college_id),
  INDEX idx_ambassadors_code (ambassador_code),
  INDEX idx_ambassadors_status (status)
);
```

---

### 10. Events & Campaigns

#### `events` Table
```sql
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Event Details
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,

  event_type VARCHAR(50), -- flash_sale, festival, clearance, seasonal

  -- Timing
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,

  -- Display
  banner_url TEXT,
  banner_mobile_url TEXT,
  theme_color VARCHAR(7), -- Hex color

  -- Featured Merchants
  featured_merchants JSONB DEFAULT '[]', -- Merchant IDs

  -- Offers
  total_offers INTEGER DEFAULT 0,

  -- Target Audience
  target_segments JSONB DEFAULT '["all"]', -- ["student", "new_users"]
  target_cities JSONB DEFAULT '[]', -- Empty = all cities

  -- Analytics
  view_count INTEGER DEFAULT 0,
  participation_count INTEGER DEFAULT 0, -- Users who redeemed offers

  -- Status
  status VARCHAR(20) DEFAULT 'draft', -- draft, scheduled, live, ended
  is_featured BOOLEAN DEFAULT FALSE,

  created_by UUID REFERENCES admin_users(id),

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_events_slug (slug),
  INDEX idx_events_dates (start_date, end_date),
  INDEX idx_events_status (status),
  INDEX idx_events_featured (is_featured) WHERE is_featured = TRUE
);
```

#### `campaigns` Table (Marketing Campaigns)
```sql
CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  name VARCHAR(255) NOT NULL,
  campaign_type VARCHAR(50), -- push_notification, email, sms, in_app

  -- Target Audience
  target_segment VARCHAR(50), -- all, active_users, inactive_users, custom
  target_filters JSONB, -- {city: ["Mumbai"], tier: ["Gold"], last_purchase_days: 30}
  estimated_audience_size INTEGER,

  -- Content
  title VARCHAR(255),
  message TEXT,
  image_url TEXT,
  cta_text VARCHAR(100), -- Call to action
  cta_link TEXT,

  -- Schedule
  schedule_type VARCHAR(20) DEFAULT 'immediate', -- immediate, scheduled, recurring
  scheduled_at TIMESTAMP,
  recurring_config JSONB, -- {frequency: "weekly", day: "monday", time: "10:00"}

  -- Status
  status VARCHAR(20) DEFAULT 'draft', -- draft, scheduled, sending, sent, cancelled

  -- Results
  sent_count INTEGER DEFAULT 0,
  delivered_count INTEGER DEFAULT 0,
  opened_count INTEGER DEFAULT 0,
  clicked_count INTEGER DEFAULT 0,

  -- A/B Testing
  is_ab_test BOOLEAN DEFAULT FALSE,
  ab_test_config JSONB, -- {variants: [{title: "A"}, {title: "B"}], split: 50}

  created_by UUID REFERENCES admin_users(id),

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  sent_at TIMESTAMP,

  INDEX idx_campaigns_type (campaign_type),
  INDEX idx_campaigns_status (status),
  INDEX idx_campaigns_scheduled (scheduled_at)
);
```

---

### 11. Admin & Operations

#### `admin_users` Table
```sql
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(15),

  -- Role
  role VARCHAR(50) NOT NULL, -- super_admin, operations_admin, support_admin, finance_admin

  -- Permissions
  permissions JSONB DEFAULT '{}', -- {merchants: ["view", "edit"], offers: ["approve"]}

  -- Operations Admin Specific
  assigned_city VARCHAR(100), -- For operations admins
  assigned_team VARCHAR(100),

  -- Security
  two_factor_enabled BOOLEAN DEFAULT FALSE,
  two_factor_secret VARCHAR(255),

  -- Status
  is_active BOOLEAN DEFAULT TRUE,
  email_verified BOOLEAN DEFAULT TRUE,

  last_login_at TIMESTAMP,
  last_login_ip INET,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_admin_users_email (email),
  INDEX idx_admin_users_role (role),
  INDEX idx_admin_users_city (assigned_city)
);
```

#### `admin_activity_logs` Table
```sql
CREATE TABLE admin_activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_user_id UUID NOT NULL REFERENCES admin_users(id),

  action VARCHAR(100) NOT NULL, -- merchant_approved, offer_rejected, user_suspended
  entity_type VARCHAR(50), -- merchant, offer, user, transaction
  entity_id UUID,

  -- Changes Made
  old_value JSONB,
  new_value JSONB,

  -- Context
  ip_address INET,
  user_agent TEXT,

  notes TEXT,

  created_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_admin_logs_admin (admin_user_id),
  INDEX idx_admin_logs_action (action),
  INDEX idx_admin_logs_entity (entity_type, entity_id),
  INDEX idx_admin_logs_date (created_at DESC)
);
```

---

### 12. Reviews & Ratings

#### `reviews` Table
```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  user_id UUID NOT NULL REFERENCES users(id),
  merchant_id UUID NOT NULL REFERENCES merchants(id),
  order_id UUID REFERENCES orders(id),

  -- Rating
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),

  -- Review Content
  title VARCHAR(255),
  review_text TEXT,
  images JSONB DEFAULT '[]', -- User-uploaded images

  -- Categories
  service_rating INTEGER CHECK (service_rating >= 1 AND service_rating <= 5),
  value_rating INTEGER CHECK (value_rating >= 1 AND value_rating <= 5),
  ambience_rating INTEGER CHECK (ambience_rating >= 1 AND ambience_rating <= 5),

  -- Status
  status VARCHAR(20) DEFAULT 'published', -- published, flagged, removed
  is_verified_purchase BOOLEAN DEFAULT FALSE,

  -- Merchant Response
  merchant_response TEXT,
  merchant_responded_at TIMESTAMP,

  -- Helpfulness
  helpful_count INTEGER DEFAULT 0,
  not_helpful_count INTEGER DEFAULT 0,

  -- Moderation
  flagged_count INTEGER DEFAULT 0,
  flagged_reasons JSONB DEFAULT '[]',
  moderated_by UUID REFERENCES admin_users(id),
  moderation_notes TEXT,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(user_id, order_id),
  INDEX idx_reviews_user (user_id),
  INDEX idx_reviews_merchant (merchant_id),
  INDEX idx_reviews_rating (rating),
  INDEX idx_reviews_status (status),
  INDEX idx_reviews_date (created_at DESC)
);
```

---

### 13. Notifications

#### `notifications` Table
```sql
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),

  -- Notification Details
  type VARCHAR(50) NOT NULL, -- offer_nearby, order_update, coin_earned, referral_success
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,

  -- Action
  action_type VARCHAR(50), -- open_offer, open_order, open_wallet
  action_data JSONB, -- {offer_id: "", order_id: ""}

  -- Media
  image_url TEXT,
  icon_url TEXT,

  -- Priority
  priority VARCHAR(20) DEFAULT 'normal', -- low, normal, high, urgent

  -- Status
  is_read BOOLEAN DEFAULT FALSE,
  read_at TIMESTAMP,

  -- Delivery
  delivery_method VARCHAR(20) DEFAULT 'push', -- push, in_app, email, sms
  delivered BOOLEAN DEFAULT FALSE,
  delivered_at TIMESTAMP,

  -- Expiry
  expires_at TIMESTAMP,

  created_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_notifications_user (user_id),
  INDEX idx_notifications_read (user_id, is_read),
  INDEX idx_notifications_type (type),
  INDEX idx_notifications_date (created_at DESC)
);
```

---

### 14. Settings & Configuration

#### `app_settings` Table
```sql
CREATE TABLE app_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  setting_key VARCHAR(100) UNIQUE NOT NULL,
  setting_value JSONB NOT NULL,
  setting_type VARCHAR(50), -- string, number, boolean, json

  description TEXT,

  -- Examples:
  -- {key: "coin_to_inr_rate", value: 1.0, type: "number"}
  -- {key: "referral_reward_coins", value: 100, type: "number"}
  -- {key: "min_app_version_android", value: "1.0.0", type: "string"}
  -- {key: "maintenance_mode", value: false, type: "boolean"}

  updated_by UUID REFERENCES admin_users(id),
  updated_at TIMESTAMP DEFAULT NOW(),

  created_at TIMESTAMP DEFAULT NOW(),

  INDEX idx_app_settings_key (setting_key)
);
```

---

## MongoDB Collections

### 1. `user_activity_logs` Collection
```javascript
{
  _id: ObjectId,
  user_id: UUID,
  event_type: String, // app_open, screen_view, button_click, search, filter_applied
  event_name: String,

  // Event Properties
  properties: {
    screen_name: String,
    search_query: String,
    filters: Object,
    merchant_id: String,
    offer_id: String,
    // ... flexible schema
  },

  // Device & Context
  device_id: String,
  device_type: String, // ios, android
  app_version: String,
  os_version: String,

  // Location
  city: String,
  state: String,
  latitude: Number,
  longitude: Number,

  // Timestamp
  timestamp: ISODate,
  session_id: String,

  // Indexes
  indexes: [
    { user_id: 1, timestamp: -1 },
    { event_type: 1, timestamp: -1 },
    { timestamp: -1 } // TTL index: expireAfterSeconds: 15552000 (180 days)
  ]
}
```

### 2. `search_queries` Collection
```javascript
{
  _id: ObjectId,
  user_id: UUID,

  query: String,
  normalized_query: String, // Lowercase, trimmed

  // Filters Applied
  filters: {
    category: Array,
    price_range: Object,
    distance: Number,
    rating: Number,
    tags: Array
  },

  // Results
  results_count: Number,
  results_clicked: Array, // [{merchant_id, position}]
  first_click_position: Number,

  // Context
  search_context: String, // home, explore, merchant_page
  city: String,

  timestamp: ISODate,

  indexes: [
    { user_id: 1, timestamp: -1 },
    { query: "text" }, // Text index for autocomplete
    { timestamp: -1 }
  ]
}
```

### 3. `ab_test_results` Collection
```javascript
{
  _id: ObjectId,
  experiment_id: UUID,
  user_id: UUID,

  variant: String, // control, variant_a, variant_b

  // Metrics
  metrics: {
    conversion: Boolean,
    revenue: Number,
    engagement_time: Number,
    clicks: Number,
    // ... custom metrics
  },

  // User Properties (for segmentation)
  user_segment: String,
  user_tier: String,
  city: String,

  assigned_at: ISODate,
  converted_at: ISODate,

  indexes: [
    { experiment_id: 1, variant: 1 },
    { user_id: 1 },
    { assigned_at: -1 }
  ]
}
```

### 4. `notification_logs` Collection
```javascript
{
  _id: ObjectId,
  notification_id: UUID,
  campaign_id: UUID,
  user_id: UUID,

  // Delivery
  channel: String, // push, email, sms
  status: String, // sent, delivered, failed, opened, clicked

  // Content
  title: String,
  message: String,

  // Events
  sent_at: ISODate,
  delivered_at: ISODate,
  opened_at: ISODate,
  clicked_at: ISODate,

  // Errors
  error_code: String,
  error_message: String,

  // Device
  device_token: String,
  device_type: String,

  indexes: [
    { campaign_id: 1, status: 1 },
    { user_id: 1, sent_at: -1 },
    { sent_at: -1 }
  ]
}
```

### 5. `fraud_detection_logs` Collection
```javascript
{
  _id: ObjectId,
  event_id: UUID,
  user_id: UUID,

  fraud_type: String, // suspicious_login, multiple_accounts, unusual_transaction, bot_behavior
  risk_score: Number, // 0-100

  // Detection Signals
  signals: {
    device_id_change: Boolean,
    location_mismatch: Boolean,
    velocity_check_failed: Boolean,
    email_domain_suspicious: Boolean,
    // ... more signals
  },

  // Action Taken
  action: String, // flagged, blocked, manual_review, allowed
  reviewed_by: UUID,
  review_notes: String,

  // Context
  ip_address: String,
  device_fingerprint: String,

  detected_at: ISODate,
  reviewed_at: ISODate,

  indexes: [
    { user_id: 1, detected_at: -1 },
    { fraud_type: 1, risk_score: -1 },
    { action: 1 }
  ]
}
```

---

## Redis Data Structures

### 1. User Sessions
```
Key Pattern: session:{token_hash}
Type: Hash
TTL: 7 days (604800 seconds)

Fields:
- user_id: UUID
- device_id: String
- created_at: Timestamp
- last_activity: Timestamp
- ip_address: String
```

### 2. API Response Cache
```
Key Pattern: cache:api:{endpoint}:{params_hash}
Type: String (JSON)
TTL: 5 minutes (300 seconds)

Example:
cache:api:stores:nearby:28.6139:77.2090 -> JSON response
```

### 3. Rate Limiting
```
Key Pattern: ratelimit:{user_id}:{action}
Type: String (counter)
TTL: 1 hour (3600 seconds)

Example:
ratelimit:user_123:api_calls -> "95"
ratelimit:user_123:otp_requests -> "3"
```

### 4. Real-time Leaderboards
```
Key Pattern: leaderboard:{type}:{period}
Type: Sorted Set

Example:
leaderboard:top_earners:weekly
- Score: Total coins earned
- Member: user_id

Commands:
ZADD leaderboard:top_earners:weekly 1500 user_123
ZREVRANGE leaderboard:top_earners:weekly 0 9 WITHSCORES (Top 10)
```

### 5. Nearby Stores Cache (Geo)
```
Key Pattern: geo:stores:{city}
Type: Geo (Geospatial)

Commands:
GEOADD geo:stores:mumbai 72.8777 19.0760 "merchant_id_1"
GEORADIUS geo:stores:mumbai 72.8777 19.0760 5 km WITHDIST
```

### 6. Active Offers Cache
```
Key Pattern: offers:active:{city}
Type: List (JSON strings)
TTL: 10 minutes (600 seconds)

Value: Array of offer objects
```

### 7. OTP Storage
```
Key Pattern: otp:{phone}:{type}
Type: Hash
TTL: 10 minutes (600 seconds)

Fields:
- code: String (6-digit)
- attempts: Number
- created_at: Timestamp
```

### 8. Wallet Lock (Concurrent Transaction Prevention)
```
Key Pattern: lock:wallet:{user_id}
Type: String
TTL: 30 seconds

Value: transaction_id
```

---

## Elasticsearch Indices

### 1. `products` Index
```json
{
  "mappings": {
    "properties": {
      "id": { "type": "keyword" },
      "merchant_id": { "type": "keyword" },
      "name": {
        "type": "text",
        "analyzer": "standard",
        "fields": {
          "keyword": { "type": "keyword" },
          "autocomplete": {
            "type": "text",
            "analyzer": "autocomplete"
          }
        }
      },
      "description": { "type": "text" },
      "category": {
        "type": "text",
        "fields": { "keyword": { "type": "keyword" } }
      },
      "price": { "type": "float" },
      "tags": { "type": "keyword" },
      "merchant_name": { "type": "text" },
      "location": { "type": "geo_point" },
      "rating": { "type": "float" },
      "in_stock": { "type": "boolean" },
      "created_at": { "type": "date" }
    }
  },
  "settings": {
    "analysis": {
      "analyzer": {
        "autocomplete": {
          "type": "custom",
          "tokenizer": "standard",
          "filter": ["lowercase", "autocomplete_filter"]
        }
      },
      "filter": {
        "autocomplete_filter": {
          "type": "edge_ngram",
          "min_gram": 2,
          "max_gram": 20
        }
      }
    }
  }
}
```

### 2. `merchants` Index
```json
{
  "mappings": {
    "properties": {
      "id": { "type": "keyword" },
      "business_name": {
        "type": "text",
        "fields": {
          "keyword": { "type": "keyword" },
          "autocomplete": { "type": "text", "analyzer": "autocomplete" }
        }
      },
      "business_type": { "type": "keyword" },
      "categories": { "type": "keyword" },
      "tags": { "type": "keyword" },
      "location": { "type": "geo_point" },
      "city": { "type": "keyword" },
      "average_rating": { "type": "float" },
      "total_reviews": { "type": "integer" },
      "price_range": { "type": "keyword" },
      "active_offers_count": { "type": "integer" },
      "is_prive_partner": { "type": "boolean" },
      "is_verified": { "type": "boolean" }
    }
  }
}
```

### 3. `offers` Index
```json
{
  "mappings": {
    "properties": {
      "id": { "type": "keyword" },
      "merchant_id": { "type": "keyword" },
      "title": {
        "type": "text",
        "fields": { "keyword": { "type": "keyword" } }
      },
      "description": { "type": "text" },
      "offer_type": { "type": "keyword" },
      "discount_value": { "type": "float" },
      "tags": { "type": "keyword" },
      "categories": { "type": "keyword" },
      "valid_from": { "type": "date" },
      "valid_until": { "type": "date" },
      "location": { "type": "geo_point" },
      "city": { "type": "keyword" },
      "user_segment": { "type": "keyword" },
      "rez_coins_required": { "type": "integer" },
      "is_featured": { "type": "boolean" },
      "status": { "type": "keyword" }
    }
  }
}
```

---

## Relationships & Constraints

### Key Foreign Key Relationships

```
users (1) → (∞) user_addresses
users (1) → (∞) user_colleges
users (1) → (1) wallets
users (1) → (∞) wallet_transactions
users (1) → (∞) orders
users (1) → (∞) offer_redemptions
users (1) → (∞) reviews
users (1) → (∞) notifications

merchants (1) → (∞) merchant_outlets
merchants (1) → (∞) merchant_users
merchants (1) → (∞) merchant_bank_accounts
merchants (1) → (∞) products
merchants (1) → (∞) offers
merchants (1) → (∞) orders
merchants (1) → (∞) reviews

offers (1) → (∞) offer_redemptions

colleges (1) → (∞) user_colleges
colleges (1) → (∞) student_ambassadors

orders (1) → (∞) payments

admin_users (1) → (∞) admin_activity_logs
```

### Cascade Delete Policies

**CASCADE (Delete child records):**
- users → user_addresses
- users → user_social_accounts
- users → user_sessions
- merchants → merchant_outlets
- merchants → merchant_users
- merchants → merchant_bank_accounts
- merchants → products

**RESTRICT (Prevent deletion):**
- merchants with active orders
- users with wallet balance > 0
- offers with redemptions

**SET NULL (Remove reference):**
- admin_users (for created_by fields)

---

## Indexing Strategy

### PostgreSQL Indexes

#### Single-Column Indexes
```sql
-- High-cardinality unique columns
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_merchants_gstin ON merchants(gstin);

-- Foreign keys (automatically indexed in most cases, but explicit for clarity)
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_merchant_id ON orders(merchant_id);
CREATE INDEX idx_wallet_transactions_wallet_id ON wallet_transactions(wallet_id);

-- Status/State columns (for filtering)
CREATE INDEX idx_merchants_status ON merchants(status);
CREATE INDEX idx_offers_status ON offers(status);
CREATE INDEX idx_orders_status ON orders(status);

-- Timestamp columns (for sorting/range queries)
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX idx_notifications_created_at ON notifications(created_at DESC);
```

#### Composite Indexes
```sql
-- User + Status filtering
CREATE INDEX idx_orders_user_status ON orders(user_id, status);
CREATE INDEX idx_notifications_user_read ON notifications(user_id, is_read);

-- Date range queries
CREATE INDEX idx_offers_validity ON offers(valid_from, valid_until);
CREATE INDEX idx_prive_subs_expiry ON prive_subscriptions(user_id, end_date);

-- Merchant + City filtering
CREATE INDEX idx_merchants_city_status ON merchants(city, status) WHERE status = 'active';
```

#### Geospatial Indexes (PostGIS)
```sql
-- Install PostGIS extension
CREATE EXTENSION IF NOT EXISTS postgis;

-- Geospatial indexes for location-based queries
CREATE INDEX idx_merchants_location_gist ON merchants USING GIST(ST_MakePoint(longitude, latitude));
CREATE INDEX idx_merchant_outlets_location_gist ON merchant_outlets USING GIST(ST_MakePoint(longitude, latitude));
```

#### JSONB Indexes (GIN)
```sql
-- For JSONB column queries
CREATE INDEX idx_offers_tags_gin ON offers USING GIN(tags);
CREATE INDEX idx_products_attributes_gin ON products USING GIN(attributes);
CREATE INDEX idx_user_preferences_gin ON users USING GIN(notification_preferences);
```

#### Partial Indexes
```sql
-- Only index active records
CREATE INDEX idx_merchants_active ON merchants(city) WHERE status = 'active' AND deleted_at IS NULL;
CREATE INDEX idx_offers_active ON offers(merchant_id) WHERE status = 'active';

-- Only index featured items
CREATE INDEX idx_offers_featured ON offers(display_priority) WHERE is_featured = TRUE;
```

#### Full-Text Search Indexes
```sql
-- For text search within PostgreSQL (if not using Elasticsearch)
CREATE INDEX idx_products_name_fts ON products USING GIN(to_tsvector('english', name));
CREATE INDEX idx_merchants_name_fts ON merchants USING GIN(to_tsvector('english', business_name));
```

---

## Sharding & Partitioning

### Table Partitioning Strategy

#### 1. Range Partitioning (Time-based)

**Orders Table** - Partition by month
```sql
-- Parent table
CREATE TABLE orders (
  id UUID,
  created_at TIMESTAMP,
  -- ... other columns
) PARTITION BY RANGE (created_at);

-- Monthly partitions
CREATE TABLE orders_2024_01 PARTITION OF orders
  FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

CREATE TABLE orders_2024_02 PARTITION OF orders
  FOR VALUES FROM ('2024-02-01') TO ('2024-03-01');

-- Auto-create future partitions via cron job
```

**Wallet Transactions** - Partition by quarter
```sql
CREATE TABLE wallet_transactions (
  id UUID,
  created_at TIMESTAMP,
  -- ... other columns
) PARTITION BY RANGE (created_at);

CREATE TABLE wallet_transactions_2024_q1 PARTITION OF wallet_transactions
  FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');
```

**Benefits:**
- Faster queries (partition pruning)
- Easy archival (detach old partitions)
- Maintenance on specific time ranges

#### 2. List Partitioning (Category-based)

**Merchants Table** - Partition by city (for large-scale)
```sql
CREATE TABLE merchants (
  id UUID,
  city VARCHAR(100),
  -- ... other columns
) PARTITION BY LIST (city);

CREATE TABLE merchants_mumbai PARTITION OF merchants
  FOR VALUES IN ('Mumbai');

CREATE TABLE merchants_delhi PARTITION OF merchants
  FOR VALUES IN ('Delhi', 'New Delhi', 'Gurugram', 'Noida');

CREATE TABLE merchants_bangalore PARTITION OF merchants
  FOR VALUES IN ('Bangalore', 'Bengaluru');

CREATE TABLE merchants_other PARTITION OF merchants
  DEFAULT; -- Catch-all for other cities
```

### Sharding Strategy (Future Scale)

**When to Shard:**
- Database size > 500 GB
- Query throughput > 10,000 QPS
- Geographic distribution needs

**Sharding Key Selection:**

1. **User Data** - Shard by `user_id` (hash-based)
   - users, wallets, wallet_transactions, user_addresses
   - Ensures user data stays together

2. **Merchant Data** - Shard by `merchant_id` (hash-based)
   - merchants, merchant_outlets, products, offers
   - Ensures merchant data locality

3. **Orders** - Shard by `user_id` OR `created_at` (hybrid)
   - Recent orders by user_id (hot data)
   - Old orders by time range (cold data, can archive)

4. **Logs & Analytics** - Shard by time range
   - MongoDB collections already distributed by date

**Sharding Implementation:**
- Use **Citus** (PostgreSQL extension) for distributed tables
- OR **Vitess** for horizontal sharding
- OR native **application-level sharding** with multiple databases

---

## Data Migration Plan

### Phase 1: Initial Schema Creation
```sql
-- Run migration scripts in order
1. Create extensions (postgis, uuid-ossp, pg_trgm)
2. Create ENUM types
3. Create base tables (users, merchants, categories)
4. Create relationship tables
5. Create indexes
6. Create triggers & functions
```

### Phase 2: Seed Data
```sql
-- Insert master data
1. app_settings (system configuration)
2. categories (pre-defined categories)
3. loyalty_tiers (Bronze, Silver, Gold, Platinum)
4. colleges (partner colleges)
```

### Phase 3: Historical Data Import (if migrating from existing system)
```sql
-- Import in dependency order
1. users
2. merchants
3. products
4. offers
5. orders (oldest to newest, use partitions)
6. wallet_transactions
7. reviews
```

### Phase 4: Validation
```sql
-- Data integrity checks
SELECT COUNT(*) FROM users;
SELECT COUNT(*) FROM merchants WHERE status = 'active';
SELECT SUM(rez_coins_balance) FROM wallets; -- Should match total issued coins

-- Referential integrity
SELECT COUNT(*) FROM orders WHERE user_id NOT IN (SELECT id FROM users); -- Should be 0
```

### Migration Scripts

#### Database Creation Script
```sql
-- db_create.sql
CREATE DATABASE rez_platform
  WITH ENCODING 'UTF8'
       LC_COLLATE = 'en_US.UTF-8'
       LC_CTYPE = 'en_US.UTF-8'
       TEMPLATE = template0;

\c rez_platform;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For fuzzy text search
```

#### User Migration Script Example
```sql
-- migrate_users.sql
BEGIN;

-- Create temporary table for validation
CREATE TEMP TABLE users_staging AS SELECT * FROM users WITH NO DATA;

-- Import CSV
COPY users_staging FROM '/path/to/users.csv' DELIMITER ',' CSV HEADER;

-- Validate data
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM users_staging WHERE email !~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$') THEN
    RAISE EXCEPTION 'Invalid email addresses found';
  END IF;
END $$;

-- Insert into main table
INSERT INTO users SELECT * FROM users_staging;

COMMIT;
```

---

## Performance Optimization

### 1. Connection Pooling
```javascript
// PostgreSQL connection pool (using node-postgres)
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 5432,
  max: 20, // Maximum connections
  min: 5,  // Minimum connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

### 2. Query Optimization Tips

**Use EXPLAIN ANALYZE**
```sql
EXPLAIN ANALYZE
SELECT * FROM offers
WHERE merchant_id = 'xxx'
  AND status = 'active'
  AND valid_until > NOW();

-- Look for:
-- - Seq Scan (bad) → should be Index Scan (good)
-- - High cost values
-- - Missing indexes
```

**Avoid N+1 Queries**
```sql
-- Bad (N+1)
SELECT * FROM offers; -- 1 query
-- Then for each offer:
SELECT * FROM merchants WHERE id = offer.merchant_id; -- N queries

-- Good (JOIN)
SELECT o.*, m.business_name
FROM offers o
JOIN merchants m ON o.merchant_id = m.id
WHERE o.status = 'active';
```

**Use Materialized Views for Complex Aggregations**
```sql
-- Create materialized view for dashboard stats
CREATE MATERIALIZED VIEW merchant_stats AS
SELECT
  merchant_id,
  COUNT(DISTINCT user_id) AS total_customers,
  COUNT(*) AS total_orders,
  SUM(total_amount) AS total_revenue,
  AVG(rating) AS average_rating
FROM orders
WHERE status = 'completed'
GROUP BY merchant_id;

-- Refresh periodically
REFRESH MATERIALIZED VIEW merchant_stats;

-- Create index on materialized view
CREATE INDEX idx_merchant_stats_id ON merchant_stats(merchant_id);
```

### 3. Caching Strategy
```
Level 1: Redis (Hot data, TTL: 5-10 min)
  - Active offers by city
  - Nearby stores
  - User session data

Level 2: Application cache (In-memory, TTL: 1 min)
  - App settings
  - Category tree

Level 3: CDN (Static assets)
  - Images, logos, banners
```

---

## Backup & Disaster Recovery

### Backup Strategy

**PostgreSQL:**
```bash
# Daily full backup
pg_dump -U postgres -d rez_platform -F c -f /backups/rez_$(date +%Y%m%d).dump

# Point-in-time recovery (WAL archiving)
# Configure in postgresql.conf:
wal_level = replica
archive_mode = on
archive_command = 'cp %p /archive/%f'
```

**MongoDB:**
```bash
# Daily backup
mongodump --uri="mongodb://localhost:27017/rez_logs" --out=/backups/mongo_$(date +%Y%m%d)
```

**Redis:**
```bash
# Automatic RDB snapshots (redis.conf)
save 900 1      # Save if 1 key changed in 15 min
save 300 10     # Save if 10 keys changed in 5 min
save 60 10000   # Save if 10000 keys changed in 1 min
```

### Recovery Procedures

**PostgreSQL Recovery:**
```bash
# Restore from dump
pg_restore -U postgres -d rez_platform /backups/rez_20240115.dump

# Point-in-time recovery
# 1. Restore base backup
# 2. Replay WAL files up to specific timestamp
recovery_target_time = '2024-01-15 14:30:00'
```

---

## Security Considerations

### 1. Data Encryption

**At Rest:**
- Enable PostgreSQL Transparent Data Encryption (TDE)
- AWS RDS encryption enabled
- Encrypted backups

**In Transit:**
- Enforce SSL/TLS for all database connections
- Certificate pinning in mobile app

**Application Level:**
```sql
-- Encrypt sensitive fields
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Store encrypted data
INSERT INTO user_data (ssn_encrypted)
VALUES (pgp_sym_encrypt('123-45-6789', 'encryption_key'));

-- Decrypt
SELECT pgp_sym_decrypt(ssn_encrypted, 'encryption_key') FROM user_data;
```

### 2. Access Control

**Row-Level Security (RLS)**
```sql
-- Enable RLS on merchants table
ALTER TABLE merchants ENABLE ROW LEVEL SECURITY;

-- Policy: Merchants can only see their own data
CREATE POLICY merchant_isolation ON merchants
  FOR ALL
  TO merchant_role
  USING (id = current_setting('app.current_merchant_id')::UUID);
```

**Role-Based Access**
```sql
-- Create roles
CREATE ROLE app_user;
CREATE ROLE app_admin;

-- Grant permissions
GRANT SELECT, INSERT, UPDATE ON users TO app_user;
GRANT ALL PRIVILEGES ON ALL TABLES TO app_admin;
```

### 3. Audit Logging

**Trigger-based Audit**
```sql
CREATE TABLE audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name VARCHAR(100),
  operation VARCHAR(10), -- INSERT, UPDATE, DELETE
  old_data JSONB,
  new_data JSONB,
  changed_by UUID,
  changed_at TIMESTAMP DEFAULT NOW()
);

-- Audit trigger function
CREATE OR REPLACE FUNCTION audit_trigger_func()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO audit_log (table_name, operation, old_data, new_data)
  VALUES (TG_TABLE_NAME, TG_OP, row_to_json(OLD), row_to_json(NEW));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Attach to tables
CREATE TRIGGER audit_merchants
AFTER INSERT OR UPDATE OR DELETE ON merchants
FOR EACH ROW EXECUTE FUNCTION audit_trigger_func();
```

---

## Monitoring & Observability

### Key Metrics to Monitor

**PostgreSQL:**
- Connection pool usage
- Slow query log (queries > 1s)
- Cache hit ratio (should be > 99%)
- Table bloat
- Index usage statistics

**MongoDB:**
- Collection size
- Write throughput
- Read latency

**Redis:**
- Memory usage
- Eviction rate
- Hit/miss ratio

### Monitoring Tools

- **pgAdmin / pganalyze** - PostgreSQL monitoring
- **MongoDB Compass** - MongoDB monitoring
- **RedisInsight** - Redis monitoring
- **AWS CloudWatch** - Infrastructure metrics
- **Datadog / New Relic** - Application performance monitoring

---

## Summary Statistics

**Total PostgreSQL Tables:** 40+
**Total MongoDB Collections:** 5
**Total Elasticsearch Indices:** 3
**Total Redis Key Patterns:** 8

**Estimated Database Sizes (Year 1):**
- PostgreSQL: 200-500 GB
- MongoDB: 100-200 GB
- Redis: 10-20 GB
- Elasticsearch: 50-100 GB

**Estimated Query Load:**
- Reads: 80-90% of queries
- Writes: 10-20% of queries
- Peak QPS: 5,000-10,000

---

This comprehensive database schema provides a solid foundation for the ReZ platform, optimized for scalability, performance, and data integrity. The polyglot persistence approach ensures each database is used for its strengths, while maintaining clear relationships and data consistency across the entire ecosystem.
