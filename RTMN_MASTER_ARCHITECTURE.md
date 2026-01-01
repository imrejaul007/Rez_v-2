# RTMN Digital Ecosystem - Master Architecture Document

## Executive Summary

RTMN is not building 103 apps. RTMN is building a **Closed-Loop Commerce Operating System** where:
- **Users** discover → engage → transact → earn → repeat
- **Merchants** operate → get customers → market → restock → get credit → grow
- **HQ (RTMN)** controls rules, economics, distribution, and scale

Everything else (103+ apps) are **distribution layers**, not core systems.

---

## The Golden Rule

> **Many apps. One economy. One rulebook. One truth.**

This is a **federated application ecosystem**, not a monolith.
- Every app = **independent product**
- All apps talk to **shared core engines**
- UI & flows can repeat
- Business logic must NOT fragment

---

## 🔐 NON-NEGOTIABLE ARCHITECTURE RULES

### RULE #1 — SINGLE SOURCE OF TRUTH (ALWAYS)

Even if features look duplicated, **truth must live in one place**.

| Domain | Single Truth Engine |
|--------|---------------------|
| Wallet & Coins | ReZ Core (Rabtul Coin Ledger) |
| Merchant data, POS, inventory | BizOne (Merchant OS) |
| Rules, limits, permissions | HQ Rule Engine |
| Ads & attribution | Adzy |
| Identity, events, AI | Rabtul |

**NO app owns:**
- ❌ its own wallet
- ❌ its own loyalty logic
- ❌ its own settlement math

---

### RULE #2 — DUPLICATION ALLOWED ONLY AT UI/FLOW LEVEL

**ALLOWED to duplicate:**
- Offer screens
- Checkout flows
- Campaign creation screens
- Wallet screens
- Analytics dashboards

**NOT ALLOWED to duplicate:**
- ❌ Offer evaluation logic
- ❌ Coin deduction logic
- ❌ Commission logic
- ❌ Settlement logic
- ❌ Rule enforcement

**Example (Correct):**
- ReZ App → "Create Offer" screen
- Merchant App → "Create Offer" screen
- ➡️ Both call the **same Offer Engine API**

---

### RULE #3 — EVERY APP IS A "CLIENT", NOT A SYSTEM

Each app must behave like:
- a **client**
- with **scoped permissions**
- calling central APIs

Even **Admin apps** are clients.

```
App → API Gateway → Core Engines → Event Bus
```

**Violations:**
- ❌ No app directly talks to DB
- ❌ No app bypasses rule engine

---

### RULE #4 — COMMON FEATURES ≠ COMMON OWNERSHIP

You can have:
- Wallet in 10 apps
- Campaign creation in 5 apps
- Analytics in 7 apps

But ownership is **central**.

| Feature | Owner |
|---------|-------|
| Wallet balance | ReZ Core (Rabtul Coin Ledger) |
| Offer rules | HQ Rule Engine |
| Merchant data | BizOne (Merchant OS) |
| Ads spend | Adzy |
| Permissions | IAM / RBAC |

Apps only **render + trigger**.

---

### RULE #5 — APPS MUST BE KILLABLE

Every app must be:
- ✅ Launchable independently
- ✅ Killable independently
- ✅ Replaceable independently

This is why:
- Logic must be centralized
- State must be shared

**If an app dies → system lives**

---

## ⚠️ WHAT WILL KILL THIS MODEL (DO NOT DO THESE)

| Violation | Consequence |
|-----------|-------------|
| Let an app manage its own wallet | Coin economy breaks |
| Let an app compute settlement | Financial chaos |
| Let an app apply coin rules locally | Inconsistent rewards |
| Let teams create "quick logic" inside apps | Technical debt explosion |
| Let merchants bypass Merchant OS | Data fragmentation |

**One violation → chaos.**

---

## ✅ CONFIRMED ARCHITECTURE MODEL

| Decision | Status |
|----------|--------|
| Separate applications | ✅ YES (correct) |
| Connected via shared core engines | ✅ YES |
| Duplicate common features at UI level | ✅ YES |
| Centralized rules, data, money | ✅ MANDATORY |

---

---

## The 4 Core Pillars

### 1. ReZ (Customer Wallet + Loyalty Brain) ✅ 92% Complete
**What it is**: The universal passport across the RTMN ecosystem.

| Component | Status | Pages |
|-----------|--------|-------|
| Coin System | ✅ Complete | Issuance, Rules Engine, Emergency Controls |
| Loyalty Engine | ✅ Complete | Earning Matrix, Redemption, Tiers |
| Gamification | ✅ Complete | Tournaments, Daily Check-in, Achievements |
| Rewards | ✅ Complete | Cashback, Scratch Cards, Spin & Win |
| Prive VIP Program | ✅ Complete | 37 Prive pages |
| User Identity | ✅ Complete | Profile, KYC, Trust Score |

**Strategic Value**: Users cannot exist in RTMN without ReZ. Every transaction, every reward, every interaction flows through ReZ.

---

### 2. BizOne (Merchant OS) ✅ 98% Complete
**What it is**: The heart of merchant revenue and operations.

| Component | Status | Pages |
|-----------|--------|-------|
| POS System | ✅ Complete | 14 pages (Simple, Offline, Category, Soft) |
| Inventory | ✅ Complete | 10 pages (Batch, Expiry, Reconciliation) |
| Billing/GST | ✅ Complete | GST Reports, GSTR Export, E-Invoice |
| CRM | ✅ Complete | Customers, Segmentation, Credit Ledger |
| Staff Management | ✅ Complete | Roster, Payroll, Roles |
| Multi-Store | ✅ Complete | Branch Manager, Store Transfer |
| Offline Mode | ✅ Complete | Offline POS, Power Survival |
| Critical Adoption | ✅ Complete | 8 blocker-fix pages |

**Strategic Value**: Merchants cannot leave because:
- Their billing lives here
- Their inventory lives here
- Their customers live here
- Their credit history lives here

---

### 3. Adzy (Closed Marketing Exchange) ✅ 90% Complete
**What it is**: NOT Google Ads. NOT Meta Ads. A closed-loop ad economy.

| Component | Status | Route |
|-----------|--------|-------|
| Adzy Dashboard | ✅ NEW | `/admin/adzy-dashboard` |
| Ad Inventory | ✅ NEW | `/admin/adzy-inventory` |
| Merchant Self-Serve | ✅ NEW | `/merchant/adzy-hub` |
| Campaign Management | ✅ Existing | `/admin/campaigns` |
| Email/SMS | ✅ Existing | `/admin/email-marketing`, `/admin/sms-campaigns` |
| Hero Banners | ✅ Existing | `/admin/hero-banners` |
| Sponsored Deals | ✅ Existing | `/admin/sponsored-deals` |
| Physical Inventory | ✅ NEW | Part of Ad Inventory |

**Strategic Value**:
- 100% of ad spend stays inside RTMN
- Merchants don't depend on Google/Meta
- Money circulates, never leaks

**Key Metrics Tracked**:
- Total Ad Spend
- Impressions across all channels
- Click-Through Rates (CTR)
- Return on Ad Spend (ROAS)
- Physical screen utilization
- Cross-app ad performance

---

### 4. Rabtul (Infrastructure Layer) ✅ 85% Complete
**What it is**: The invisible backbone that makes everything scale.

| Service | Status | Route |
|---------|--------|-------|
| Rabtul Dashboard | ✅ NEW | `/admin/rabtul-dashboard` |
| API Gateway | ✅ NEW | `/admin/rabtul-api-gateway` |
| AIRA Engine (AI) | ✅ NEW | `/admin/rabtul-aira` |
| Coin Ledger | ✅ NEW | `/admin/rabtul-coins` |
| Auth Service | ✅ Existing | JWT + Role-based |
| Payment Service | ✅ Existing | Multiple gateways |
| Notification Hub | ✅ Existing | Push, SMS, Email |
| Fraud Detection | ✅ Existing | `/admin/fraud-detection` |

**Key Services**:

#### Auth Service
- JWT token management
- Role-based access control
- Multi-app SSO
- Device fingerprinting

#### Payment Service
- UPI, Cards, Wallets
- Settlement processing
- Refund handling
- Payment links

#### Coin Ledger (NEW)
- Cross-app coin sync
- Real-time balance updates
- Transaction logging
- Coin expiry management

#### AIRA Engine (NEW)
- User personalization
- Merchant recommendations
- Dynamic pricing
- Fraud scoring
- Churn prediction
- Demand forecasting

#### API Gateway (NEW)
- Unified entry point
- Rate limiting
- API key management
- Request routing

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        DISTRIBUTION LAYER (Apps)                             │
│  ┌──────┐ ┌──────┐ ┌────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐         │
│  │ ReZ  │ │ AI-R │ │BuzzLoop│ │ CoinHunt │ │ LocalEdge│ │ Dinezy │  ...    │
│  └──┬───┘ └──┬───┘ └───┬────┘ └────┬─────┘ └────┬─────┘ └───┬────┘         │
│     └────────┴─────────┴───────────┴────────────┴───────────┘               │
│                                    │                                         │
└────────────────────────────────────┼─────────────────────────────────────────┘
                                     │
┌────────────────────────────────────┼─────────────────────────────────────────┐
│                           API GATEWAY (Rabtul)                               │
│                    Unified entry point for all apps                          │
│            Rate limiting • Auth • Routing • Monitoring                       │
└────────────────────────────────────┼─────────────────────────────────────────┘
                                     │
┌────────────────────────────────────┼─────────────────────────────────────────┐
│                           CORE SERVICES                                       │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │  Auth   │ │ Payment │ │  Coins  │ │ Notify  │ │  AIRA   │ │  Fraud  │   │
│  │ Service │ │ Service │ │ Ledger  │ │   Hub   │ │ (AI)    │ │Detection│   │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘   │
└────────────────────────────────────┼─────────────────────────────────────────┘
                                     │
┌────────────────────────────────────┼─────────────────────────────────────────┐
│                           DATA LAYER                                          │
│         PostgreSQL │ Redis │ Elasticsearch │ S3 │ Data Lake                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## New Pages Created (Phase 1 Completion)

### Adzy (Marketing Exchange)

| Page | Route | Purpose |
|------|-------|---------|
| AdzyDashboard | `/admin/adzy-dashboard` | Central marketing command center with KPIs, channel performance, closed-loop metrics |
| AdzyAdInventory | `/admin/adzy-inventory` | Manage digital placements, physical screens, partner store displays |
| MerchantAdzyHub | `/merchant/adzy-hub` | Self-serve campaign creation for merchants with templates and analytics |

### Rabtul (Infrastructure)

| Page | Route | Purpose |
|------|-------|---------|
| RabtulDashboard | `/admin/rabtul-dashboard` | Infrastructure control center with service health, connected apps |
| RabtulAPIGateway | `/admin/rabtul-api-gateway` | API management, clients, rate limits, endpoint analytics |
| RabtulAIRAEngine | `/admin/rabtul-aira` | AI model management, personalization metrics, ML operations |
| RabtulCoinLedger | `/admin/rabtul-coins` | Cross-app coin sync, economy overview, transaction ledger |

---

## The Money Flow (Closed Loop)

```
┌─────────────────────────────────────────────────────────────────┐
│                     CLOSED-LOOP ECONOMY                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   User Transaction (₹1000)                                       │
│         │                                                        │
│         ▼                                                        │
│   Merchant Receives (₹800-850)                                   │
│         │                                                        │
│         ├──► Platform Commission (₹150-200)                      │
│         │         │                                              │
│         │         ├──► ReZ Coins to User (5-10%)                 │
│         │         └──► Platform Revenue (5-15%)                  │
│         │                                                        │
│         ├──► Merchant Spends on Ads (Adzy)                       │
│         │         │                                              │
│         │         └──► Reaches RTMN Users                        │
│         │                   │                                    │
│         │                   └──► More Transactions               │
│         │                                                        │
│         └──► Merchant Restocks via NextaBizz                     │
│                   │                                              │
│                   └──► Better prices, credit available           │
│                                                                  │
│   ════════════════════════════════════════════════════════════  │
│   RESULT: 100% of money stays in ecosystem                       │
│   No leakage to Google/Meta/External platforms                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Phase 1 Completion Status

### Core Systems Readiness

| System | Before | After | Status |
|--------|--------|-------|--------|
| **ReZ (Wallet/Loyalty)** | 92% | 92% | ✅ Complete |
| **BizOne (Merchant OS)** | 98% | 98% | ✅ Complete |
| **Adzy (Marketing)** | 70% | 90% | ✅ Major Upgrade |
| **Rabtul (Infra)** | 40% | 85% | ✅ Major Upgrade |

### What Was Built

1. **Adzy Dashboard** - Full marketing command center with:
   - Platform-wide ad metrics
   - Channel performance tracking
   - Closed-loop money flow visualization
   - Physical inventory overview

2. **Adzy Ad Inventory** - Complete inventory management:
   - Digital placements (banners, interstitials, native)
   - Physical screens (malls, stores, transit)
   - Partner store displays
   - Utilization tracking

3. **Merchant Adzy Hub** - Self-serve for merchants:
   - Quick campaign templates
   - Budget management
   - Performance analytics
   - AI suggestions

4. **Rabtul Dashboard** - Infrastructure overview:
   - Service health monitoring
   - Connected apps status
   - Architecture visualization

5. **API Gateway** - Unified API management:
   - Endpoint analytics
   - API client management
   - Rate limiting rules
   - Real-time traffic monitoring

6. **AIRA Engine** - AI capabilities:
   - 8 ML models for personalization
   - Real-time inference stats
   - Model accuracy tracking
   - Feature management

7. **Coin Ledger** - Cross-app economy:
   - Multi-coin type support
   - Real-time sync across apps
   - Transaction ledger
   - Earning/redemption analytics

---

## 🔗 SYSTEM INTERCONNECTION MAP

### The 4-Pillar Integration Matrix

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                          RTMN 4-PILLAR INTERCONNECTION MAP                                    │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                              │
│    ┌──────────────────────┐                           ┌──────────────────────┐              │
│    │        ReZ           │◄─────────────────────────►│      BizOne          │              │
│    │  (Customer Wallet)   │     User ↔ Merchant       │   (Merchant OS)      │              │
│    │                      │      Transactions         │                      │              │
│    │  • Coins/Balance     │◄────────────────────────►│  • POS Integration   │              │
│    │  • Loyalty Points    │    Coin Earn/Redeem       │  • Inventory Sync    │              │
│    │  • Gamification     │◄────────────────────────►│  • Customer CRM      │              │
│    │  • Prive VIP        │    VIP Benefits           │  • Staff/Payroll     │              │
│    └───────────┬──────────┘                           └───────────┬──────────┘              │
│                │                                                   │                         │
│                │  User Segments                    Merchant Data   │                         │
│                │  Spend History                    Campaign Assets │                         │
│                │                                                   │                         │
│                ▼                                                   ▼                         │
│    ┌──────────────────────┐                           ┌──────────────────────┐              │
│    │        Adzy          │◄─────────────────────────►│       Rabtul         │              │
│    │  (Marketing Hub)     │    Campaign ↔ Infra       │   (Infrastructure)   │              │
│    │                      │                           │                      │              │
│    │  • Campaigns        │◄────────────────────────►│  • API Gateway       │              │
│    │  • Ad Inventory     │    Ad Delivery             │  • AIRA (AI/ML)      │              │
│    │  • Sponsor Deals    │◄────────────────────────►│  • Coin Ledger       │              │
│    │  • Physical Ads     │    Targeting Data          │  • Auth/Security     │              │
│    └──────────────────────┘                           └──────────────────────┘              │
│                                                                                              │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Connection Details

#### ReZ ↔ BizOne Connections

| Integration Point | Direction | Data Flow |
|------------------|-----------|-----------|
| Transaction Processing | Bi-directional | User pays → BizOne POS → ReZ Wallet debit |
| Coin Earning | BizOne → ReZ | Purchase complete → Coins credited to user |
| Coin Redemption | ReZ → BizOne | User redeems → BizOne applies discount |
| Customer Sync | Bi-directional | ReZ profile ↔ BizOne CRM |
| VIP Benefits | ReZ → BizOne | Prive tier → Special merchant pricing |
| Loyalty Tracking | Bi-directional | Visit frequency, spend patterns |
| Receipt Scanning | BizOne → ReZ | Transaction receipt → Gamification entry |
| Gift Cards | Bi-directional | ReZ gift card → BizOne acceptance |

#### ReZ ↔ Adzy Connections

| Integration Point | Direction | Data Flow |
|------------------|-----------|-----------|
| User Targeting | ReZ → Adzy | User segments, preferences, behavior |
| Ad Personalization | ReZ → Adzy | Location, interests, purchase history |
| Campaign Rewards | Adzy → ReZ | Ad engagement → Coins/rewards |
| Referral Programs | Bi-directional | Referral campaigns → ReZ rewards |
| Push Notifications | Adzy → ReZ | Targeted offers to ReZ users |
| Deal Discovery | Adzy → ReZ | Sponsored deals in ReZ feed |

#### ReZ ↔ Rabtul Connections

| Integration Point | Direction | Data Flow |
|------------------|-----------|-----------|
| Auth/Identity | Rabtul → ReZ | SSO, token management |
| Coin Ledger | Bi-directional | Real-time balance sync |
| AI Personalization | Rabtul → ReZ | AIRA recommendations |
| Fraud Detection | Rabtul → ReZ | Transaction risk scoring |
| Push Service | Rabtul → ReZ | Notification delivery |
| Analytics Events | ReZ → Rabtul | User behavior tracking |

#### BizOne ↔ Adzy Connections

| Integration Point | Direction | Data Flow |
|------------------|-----------|-----------|
| Campaign Creation | BizOne → Adzy | Merchant creates campaign |
| Ad Assets | BizOne → Adzy | Product catalog for ads |
| Campaign Analytics | Adzy → BizOne | Performance metrics |
| Inventory Sync | BizOne → Adzy | Stock levels for promotions |
| Budget Management | Bi-directional | Ad spend tracking |
| Offer Validation | Adzy → BizOne | Offer redemption verification |

#### BizOne ↔ Rabtul Connections

| Integration Point | Direction | Data Flow |
|------------------|-----------|-----------|
| API Gateway | Rabtul → BizOne | Unified API access |
| Auth Service | Rabtul → BizOne | Merchant authentication |
| Payment Processing | Rabtul → BizOne | Payment gateway integration |
| AI Insights | Rabtul → BizOne | Demand forecasting, pricing |
| Fraud Detection | Rabtul → BizOne | Transaction risk alerts |
| Coin Settlement | Rabtul → BizOne | Merchant coin payouts |

#### Adzy ↔ Rabtul Connections

| Integration Point | Direction | Data Flow |
|------------------|-----------|-----------|
| AIRA Targeting | Rabtul → Adzy | AI-powered audience selection |
| API Management | Rabtul → Adzy | Ad serving APIs |
| Event Tracking | Adzy → Rabtul | Ad impressions, clicks, conversions |
| Attribution | Bi-directional | Multi-touch attribution data |
| A/B Testing | Rabtul → Adzy | ML-powered optimization |

### Rabtul as the Backbone

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                         RABTUL INFRASTRUCTURE HUB                             │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│                              ┌─────────────┐                                  │
│                              │ API GATEWAY │                                  │
│                              │  (Entry)    │                                  │
│                              └──────┬──────┘                                  │
│                                     │                                         │
│     ┌───────────────────────────────┼───────────────────────────────┐        │
│     │                               │                               │        │
│     ▼                               ▼                               ▼        │
│ ┌─────────┐ ┌─────────┐ ┌─────────────┐ ┌─────────┐ ┌─────────┐            │
│ │  AUTH   │ │ PAYMENT │ │    COIN     │ │ NOTIFY  │ │  AIRA   │            │
│ │ SERVICE │ │ SERVICE │ │   LEDGER    │ │   HUB   │ │  (AI)   │            │
│ └────┬────┘ └────┬────┘ └──────┬──────┘ └────┬────┘ └────┬────┘            │
│      │           │             │             │           │                  │
│      └───────────┴─────────────┴─────────────┴───────────┘                  │
│                                │                                             │
│                                ▼                                             │
│     ┌─────────────────────────────────────────────────────────────┐         │
│     │                     FRAUD DETECTION                          │         │
│     │            Transaction Monitoring • Risk Scoring             │         │
│     └─────────────────────────────────────────────────────────────┘         │
│                                │                                             │
│                                ▼                                             │
│     ┌─────────────────────────────────────────────────────────────┐         │
│     │                        DATA LAYER                            │         │
│     │        PostgreSQL │ Redis │ Elasticsearch │ S3               │         │
│     └─────────────────────────────────────────────────────────────┘         │
│                                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Complete Transaction Flow (All 4 Systems)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    COMPLETE TRANSACTION FLOW - ALL 4 SYSTEMS                     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ① USER DISCOVERY                                                                │
│     └─► Adzy shows personalized ad ───► AIRA (Rabtul) provides targeting        │
│                                                                                  │
│  ② USER ENGAGEMENT                                                               │
│     └─► User sees offer in ReZ app ───► Adzy tracks impression                  │
│                                                                                  │
│  ③ TRANSACTION                                                                   │
│     └─► User visits merchant ───► BizOne POS scans/processes                    │
│         └─► Rabtul Auth validates user ───► Rabtul Payment processes            │
│                                                                                  │
│  ④ COIN EARNING                                                                  │
│     └─► BizOne confirms sale ───► Rabtul Coin Ledger credits ───► ReZ updates  │
│                                                                                  │
│  ⑤ ATTRIBUTION                                                                   │
│     └─► Rabtul tracks: Ad click → Store visit → Purchase → Reward               │
│         └─► Data flows back to Adzy for ROAS calculation                        │
│                                                                                  │
│  ⑥ MERCHANT REVENUE                                                              │
│     └─► BizOne records sale ───► Commission calculated                          │
│         └─► Merchant can spend on more Adzy campaigns                           │
│                                                                                  │
│  ⑦ CLOSED LOOP COMPLETE                                                          │
│     └─► User has coins ───► Will use for next purchase ───► Loop repeats        │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### API Interconnection Endpoints

#### ReZ → Other Systems

```
# ReZ → BizOne
POST /api/bizone/transaction/process
GET  /api/bizone/merchant/:id/offers
POST /api/bizone/loyalty/sync-visit

# ReZ → Adzy
GET  /api/adzy/personalized-ads/:userId
POST /api/adzy/track/impression
POST /api/adzy/track/click

# ReZ → Rabtul
POST /api/rabtul/auth/validate
GET  /api/rabtul/coins/balance/:userId
POST /api/rabtul/aira/recommend/:userId
```

#### BizOne → Other Systems

```
# BizOne → ReZ
POST /api/rez/coins/credit
GET  /api/rez/user/:id/tier
POST /api/rez/loyalty/record-visit

# BizOne → Adzy
POST /api/adzy/campaigns/create
GET  /api/adzy/campaigns/:merchantId
POST /api/adzy/assets/upload

# BizOne → Rabtul
POST /api/rabtul/payments/process
GET  /api/rabtul/fraud/score/:transactionId
POST /api/rabtul/notify/send
```

#### Adzy → Other Systems

```
# Adzy → ReZ
GET  /api/rez/segments/active
GET  /api/rez/user/:id/preferences
POST /api/rez/rewards/campaign-bonus

# Adzy → BizOne
GET  /api/bizone/products/catalog/:merchantId
GET  /api/bizone/inventory/available

# Adzy → Rabtul
POST /api/rabtul/aira/audience/create
GET  /api/rabtul/aira/predictions/campaign
POST /api/rabtul/events/track
```

---

## Distribution Layers (Not Core - Phase 2+)

These are **doors to the same mall**, not separate businesses:

### ReZ Core Ecosystem (Clone from ReZ)
- AI-R (AI-powered discovery)
- BuzzLoop (UGC + social feed)
- CoinHunt (Deals, coupons)
- LocalEdge (Hyperlocal discovery)

### Wasil Apps (Clone from Verticals)
- Dinezy (Food) → Clone from Food Hub
- Grocify (Grocery) → Clone from Grocery Hub
- Glowzy (Beauty) → Clone from Beauty Hub
- MediEarn (Healthcare) → Clone from Healthcare Hub

### Growth Stack (Build New)
- Gigzy, BuzzLocal, JobLoop, SkillPe, etc.

### Ultra-Light Apps (Build New)
- Memezy, Quizzy, Spinzy, etc.

---

## API Endpoints Summary

### New Adzy APIs

```
# Dashboard
GET  /api/admin/adzy/overview
GET  /api/admin/adzy/channels
GET  /api/admin/adzy/campaigns

# Ad Inventory
GET  /api/admin/adzy/inventory/digital
GET  /api/admin/adzy/inventory/physical
POST /api/admin/adzy/inventory/placement
PUT  /api/admin/adzy/inventory/placement/:id

# Merchant Self-Serve
GET  /api/merchant/adzy/campaigns
POST /api/merchant/adzy/campaigns
GET  /api/merchant/adzy/templates
GET  /api/merchant/adzy/analytics
```

### New Rabtul APIs

```
# Dashboard
GET  /api/admin/rabtul/health
GET  /api/admin/rabtul/services
GET  /api/admin/rabtul/apps

# API Gateway
GET  /api/admin/rabtul/gateway/stats
GET  /api/admin/rabtul/gateway/endpoints
GET  /api/admin/rabtul/gateway/clients
POST /api/admin/rabtul/gateway/clients
PUT  /api/admin/rabtul/gateway/rate-limits

# AIRA Engine
GET  /api/admin/rabtul/aira/models
GET  /api/admin/rabtul/aira/metrics
POST /api/admin/rabtul/aira/train
GET  /api/admin/rabtul/aira/predictions

# Coin Ledger
GET  /api/admin/rabtul/coins/supply
GET  /api/admin/rabtul/coins/transactions
GET  /api/admin/rabtul/coins/sync-status
POST /api/admin/rabtul/coins/mint
POST /api/admin/rabtul/coins/burn
```

---

## Platform Statistics (Final Phase 1)

| Metric | Count |
|--------|-------|
| **Total Pages** | 740+ |
| **Total Routes** | 660+ |
| **Admin Modules** | 177+ |
| **Merchant Modules** | 93+ |
| **User Features** | 241+ |
| **Prive VIP Pages** | 141 |
| **Phase 1 New Pages** | 7 |
| **API Interconnection Endpoints** | 50+ |

### Pages by Core System

| System | User Pages | Merchant Pages | Admin Pages | Total |
|--------|-----------|----------------|-------------|-------|
| **ReZ** | 100+ | - | 141 (Prive) | ~241 |
| **BizOne** | - | 93+ | 30+ | ~123 |
| **Adzy** | - | 5+ | 25+ | ~30 |
| **Rabtul** | - | - | 60+ | ~60 |

---

## 🧭 RTMN 6-PHASE DEVELOPMENT ROADMAP (FULL BUILD)

> **Philosophy**: This is an operating system + ecosystem, NOT an MVP startup.
> Each phase **unlocks the next** without rework.

---

### 🔵 PHASE 0 — FOUNDATION & NON-NEGOTIABLES ✅ COMPLETE

**Goal**: Create the ONE HEARTBEAT so nothing fractures later.

**Rabtul Core (Built)**
- Identity & SSO (user, merchant, admin)
- Wallet Ledger (single source of truth)
- Rule Engine (coins, commissions, caps, expiry)
- Event Bus (every action emits events)
- Permission & RBAC framework
- Notification service (push, WhatsApp, email hooks)
- Audit logs & rule versioning

**RTMN Core SDK (Internal)**
- Auth UI components
- Wallet UI components
- Deep linking framework
- Feature flags system
- Analytics hooks

> ❗ **ENFORCED**: No app team bypasses Rabtul
> ❗ **ENFORCED**: No wallet logic outside Rabtul

**Phase 0 Output**: One economy. One rulebook. One login across all future apps.

---

### 🟢 PHASE 1 — CORE ECONOMY LAUNCH ✅ COMPLETE

**Status**: ReZ + BizOne + Adzy + Rabtul = 740+ pages built

#### 1. ReZ (Gold Master User App) - 92%
| Component | Status |
|-----------|--------|
| Discovery (merchants, offers) | ✅ |
| Wallet (ReZ Coins, Branded, Promo) | ✅ |
| Cashback logic (earn, burn, expiry) | ✅ |
| Scan & Pay / Online checkout | ✅ |
| Social share → reward hooks | ✅ |
| Visit-based loyalty engine | ✅ |
| Referral system | ✅ |
| ReZ Arcade (games/challenges) | ✅ |
| Prive VIP Program (141 pages) | ✅ |

**Outcome**: Users understand saving + habit loop

#### 2. BizOne (Universal Merchant OS) - 98%
| Component | Status |
|-----------|--------|
| POS (offline-first, 14 pages) | ✅ |
| Billing + GST invoices | ✅ |
| Inventory (SKU + expiry, 10 pages) | ✅ |
| CRM & customer history | ✅ |
| Loyalty (native + ReZ optional) | ✅ |
| Settlement & payouts | ✅ |
| Merchant user roles | ✅ |
| Multi-channel order intake | ✅ |
| Basic analytics | ✅ |

**Outcome**: Merchant can run entire business without anything else

#### 3. Adzy (Closed Ecosystem Marketing) - 90%
| Component | Status |
|-----------|--------|
| Merchant self-serve campaigns | ✅ |
| In-app ads (ReZ + engagement apps) | ✅ |
| WhatsApp & email campaigns | ✅ |
| Physical inventory booking | ✅ |
| Campaign attribution → BizOne | ✅ |
| Budget caps, fraud prevention | ✅ |
| Pay via cash + ReZ Coins | ✅ |

**Outcome**: Merchants stop needing Meta/Google for local sales

#### 4. Rabtul (Infrastructure) - 85%
| Service | Status |
|---------|--------|
| API Gateway | ✅ |
| AIRA AI Engine | ✅ |
| Coin Ledger | ✅ |
| Auth Service | ✅ |
| Payment Service | ✅ |
| Fraud Detection | ✅ |

**Phase 1 Success Signals**:
- ✅ Users can transact
- ✅ Merchants can bill daily
- ✅ Ads can convert to sales
- ✅ No wallet disputes (single source)

---

### 🟡 PHASE 2 — DISCOVERY CLONES (ReZ → 4 Apps) ⏳ NEXT

**Strategy**: Clone ReZ UI + SDK, NOT logic.

| App | Purpose | Clone From |
|-----|---------|------------|
| **AI-R** | AI-first interface | ReZ + AIRA |
| **BuzzLoop** | Social/UGC feed | ReZ + UGC |
| **CoinHunt** | Deals & coupons | ReZ + Offers |
| **LocalEdge** | Hyperlocal check-ins | ReZ + Location |

**What Gets Cloned**:
- Login (Rabtul SSO)
- Wallet UI
- Rewards UI
- Notifications
- Profile

**What Is Unique**:
- Discovery UX
- Engagement logic
- Content type

**Phase 2 Output**: Multiple entry points, same economy.

---

### 🟠 PHASE 3 — TRANSACTION EXPANSION (Wasil Apps) ⏳ FUTURE

**Goal**: Turn discovery into GMV at scale.

#### Wave 1 (High Frequency)
| App | Vertical | Clone From |
|-----|----------|------------|
| Dinezy | Food | Food Hub |
| Grocify | Grocery | Grocery Hub |
| Glowzy | Beauty | Beauty Hub |
| MediEarn | Healthcare | Healthcare Hub |
| FitEarn | Fitness | Fitness Hub |

#### Wave 2 (Medium Frequency)
| App | Vertical |
|-----|----------|
| Shopazy | Shopping |
| Funzy | Entertainment |
| AutoPerks | Automotive |
| Petzy | Pet Care |
| Kidzo | Kids/Family |

#### Wave 3 (Premium)
| App | Vertical |
|-----|----------|
| Luxora | Luxury |
| Elitezy | Elite Services |
| Royale+ | VIP Experiences |

**All Wasil Apps Use**:
- Same wallet (Rabtul)
- Same BizOne backend
- Same Adzy promotions

**Phase 3 Output**: RTMN looks like a commerce network, not an app.

---

### 🔴 PHASE 4 — SUPPLY, FINANCE & MERCHANT LOCK-IN ⏳ FUTURE

#### NextaBizz + Inventora
- Bulk procurement
- Auto reordering from BizOne
- Better pricing than open market

#### RTMN Finance
- Merchant credit (based on BizOne data)
- Inventory BNPL
- Auto deductions from settlements
- User wallet expansion (later)

**Phase 4 Output**: Merchants CANNOT leave without losing money advantages.

---

### 🟣 PHASE 5 — ACQUISITION ENGINE (Zero CAC) ⏳ FUTURE

**Goal**: Scale users cheaply.

| Category | Apps |
|----------|------|
| Growth Stack | Gigzy, BuzzLocal, JobLoop, SkillPe |
| Ultra-Light | Memezy, Quizzy, Spinzy |
| Events | Eventora+ (District competitor) |

**Every App**:
- Earns coins → drives to ReZ
- Deep-links to ReZ/Wasil
- Feeds Rabtul data

**Phase 5 Output**: RTMN owns attention + transactions.

---

### ⚫ PHASE 6 — BRANDS, MEDIA & GLOBAL SCALE ⏳ FUTURE

#### RTMN Media
- Content platform
- Creators marketplace
- Influencer network
- Owned attention

#### RTMN Brands & Franchise
- Restaurants
- Retail chains
- Wellness centers
- Travel services
- Luxury brands

#### International Expansion
- GCC markets
- Southeast Asia

**Phase 6 Output**: RTMN becomes platform + operator + brand owner.

---

## 🧠 WHY THIS PLAN WORKS

| Principle | Enforcement |
|-----------|-------------|
| No rework | Each phase builds on previous |
| No logic duplication | Rabtul owns all business logic |
| No merchant confusion | BizOne is THE ONLY merchant app |
| No tech debt explosion | SDK + cloning strategy |
| Easy investor narrative | Clear phases with metrics |
| Easy cloning | Gold master (ReZ) → variations |

---

## Key Takeaways

1. **You are NOT building 103 apps** - You are building 4 systems + distribution layers

2. **BizOne + ReZ = Lock-in** - Merchants and users cannot leave because their entire commercial life exists here

3. **Adzy = No Leakage** - Every marketing rupee stays inside the ecosystem

4. **Rabtul = Scale** - The infrastructure layer enables 100+ apps to run on shared services

5. **Distribution apps = Cheap acquisition** - Clone from core, rebrand, launch

---

*Document Version: 3.0*
*Last Updated: January 2026*
*Platform Version: ReZ V2.5 (Phase 0+1 Complete - Ready for Phase 2)*

---

## Appendix: Golden Architecture Summary

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│                        MANY APPS. ONE ECONOMY.                                  │
│                        ONE RULEBOOK. ONE TRUTH.                                 │
│                                                                                 │
├────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│   ┌─────────────────┐    ┌─────────────────┐                                   │
│   │      ReZ        │    │     BizOne      │                                   │
│   │  User Wallet    │◄──►│   Merchant OS   │                                   │
│   │  Loyalty Brain  │    │   Heart of Rev  │                                   │
│   └────────┬────────┘    └────────┬────────┘                                   │
│            │                      │                                            │
│            │     CLOSED LOOP      │                                            │
│            │      ECONOMY         │                                            │
│            │                      │                                            │
│   ┌────────▼────────┐    ┌────────▼────────┐                                   │
│   │      Adzy       │    │     Rabtul      │                                   │
│   │   Marketing     │◄──►│  Infrastructure │                                   │
│   │   Exchange      │    │    Backbone     │                                   │
│   └─────────────────┘    └─────────────────┘                                   │
│                                                                                 │
│   STATUS: PHASE 0+1 COMPLETE ✅                                                  │
│   • 740+ Pages Built                                                           │
│   • 660+ Routes Defined                                                        │
│   • 50+ Interconnection APIs                                                   │
│   • 5 Architecture Rules Enforced                                              │
│   • 6-Phase Roadmap Documented                                                 │
│                                                                                 │
└────────────────────────────────────────────────────────────────────────────────┘
```
