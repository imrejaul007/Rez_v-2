# ReZ Platform - Complete Feature Documentation

## Executive Summary
ReZ is a comprehensive multi-sided platform connecting **Users**, **Merchants**, and **Platform Administrators** in a unified ecosystem. The platform spans 12+ industries with **420+ features** across all user types.

### Platform Version: V2.5 (Phase 1 Complete - Fully Interconnected)

### Core Systems (The 4 Pillars)
| System | Status | Purpose | Pages |
|--------|--------|---------|-------|
| **ReZ** | ✅ 92% | Customer Wallet + Loyalty Brain | ~241 |
| **BizOne** | ✅ 98% | Merchant OS (POS, Inventory, CRM) | ~93 |
| **Adzy** | ✅ 90% | Closed-Loop Marketing Exchange | ~30 |
| **Rabtul** | ✅ 85% | Infrastructure (API, AI, Coins) | ~60 |

### 🔗 Phase 1 Complete: System Interconnection

All 4 core systems are now fully interconnected with documented API contracts:

```
       ReZ ◄────────────────────► BizOne
        │      Transactions          │
        │      Coins Earn/Redeem     │
        │      VIP Benefits          │
        │                            │
        ▼                            ▼
      Adzy ◄────────────────────► Rabtul
           Campaign ↔ Infra
           Targeting Data
           Ad Delivery
```

**Key Integrations:**
- **50+ API endpoints** connecting all systems
- **Bi-directional data flow** for real-time sync
- **Single Source of Truth** architecture enforced
- **Closed-loop economy** verified and documented

### 🆕 POS Replacement & Enterprise Integration (NEW)
ReZ now offers **complete POS replacement capability** with 11 new modules that solve every merchant concern:
- **Bulletproof Offline Mode** - Never lose a bill, even without internet
- **Staff-Proof Simple UI** - Icon mode, multi-language, zero training
- **Accountant/CA Acceptance** - Tally export, GST-ready ledgers, day-end reports
- **Cash Reality Handling** - Denomination entry, theft detection, shift tracking
- **Category-Specific Features** - Restaurant (table merge/KOT), Salon (commission), Clinic (prescription lock), Grocery (weighing scale)
- **Exit Trust Guarantee** - Export everything, anytime, free - data ownership policy

### 🆕 Enterprise Integration Hub (DMart, Reliance, Croma)
ReZ integrates with big retailers as a **"Sidecar"**, never replacing core systems:
- 5 Integration Models from Easy (Post-Bill) to Advanced (White-Label)
- Enterprise-grade security: OAuth 2.0, mTLS, ISO 27001, SOC2
- Sandbox environment for safe testing

### 🏆 King-Making Systems (The Ultimate Moat)
ReZ now includes 9 strategic control layers that create **exit-proof architecture**:
1. **Economic Sovereignty** - Merchants cannot calculate profit without ReZ
2. **Dependency Lock** - Merchants outsource decisions to ReZ AI
3. **User Habit Monopoly** - Users cannot remember prices without ReZ
4. **Local Monopoly Mechanics** - Cities cannot organize commerce without ReZ
5. **Reputation Economics** - Trust only exists inside ReZ ecosystem
6. **Regulatory Readiness** - Government partners depend on ReZ data
7. **Capital Flywheel** - Credit history exists only in ReZ
8. **Protocol Dominance** - 156 companies cannot function without ReZ APIs
9. **🆕 Enterprise Lock-In** - Big retailers (DMart, Reliance) cannot integrate loyalty without ReZ

---

# PART 1: ADMIN HQ (ReZ Command Center)

## Total Admin Modules: 100+

### 1. DASHBOARDS & ANALYTICS (12 Modules)

| # | Module | Route | Description | Connection |
|---|--------|-------|-------------|------------|
| 1 | **Admin Dashboard** | `/admin` | Main control center with KPIs, alerts, quick actions | Central hub connecting all modules |
| 2 | **Global Dashboard** | `/admin/global-dashboard` | Multi-country/region overview, currency conversions | Aggregates all regional data |
| 3 | **Marketing Dashboard** | `/admin/marketing-dashboard` | Campaign performance, ROI tracking, channel analytics | Links to Campaign Approval, Email/SMS |
| 4 | **Finance Dashboard** | `/admin/finance-dashboard` | Revenue, payouts, settlements, P&L overview | Connects to Transactions, Wallet, Settlements |
| 5 | **Operations Dashboard** | `/admin/operations-dashboard` | Order fulfillment, logistics, SLA tracking | Links to Merchants, Orders |
| 6 | **Regional Dashboard** | `/admin/regional-dashboard` | City/state/zone level metrics | Feeds from Merchant & User data |
| 7 | **Support Dashboard** | `/admin/support-dashboard` | Ticket volume, resolution times, CSAT | Links to Support module |
| 8 | **Content Dashboard** | `/admin/content-dashboard` | Content performance, moderation queue | Links to UGC, Creator Content |
| 9 | **Analytics Dashboard** | `/admin/analytics-dashboard` | Deep analytics, cohort analysis, funnels | Aggregates all platform data |
| 10 | **Ecosystem Analytics** | `/admin/ecosystem-analytics` | Cross-platform metrics, ecosystem health | Connects Users + Merchants + Transactions |
| 11 | **AI Insights** | `/admin/ai-insights` | ML-powered predictions, anomaly detection | Analyzes all platform data |
| 12 | **Platform Health** | `/admin/platform-health` | System uptime, API performance, error rates | Monitors technical infrastructure |

### 2. USER MANAGEMENT (8 Modules)

| # | Module | Route | Description | Connection |
|---|--------|-------|-------------|------------|
| 1 | **Users Management** | `/admin/users` | View/edit/suspend users, activity history | Core user database |
| 2 | **User Management Advanced** | `/admin/user-management` | Bulk operations, user segments | Links to Segmentation |
| 3 | **Profile Verification** | `/admin/profile-verification` | KYC, identity verification approval | User identity flow |
| 4 | **KYC Compliance** | `/admin/kyc-compliance` | Document verification, compliance status | Legal/regulatory compliance |
| 5 | **Friend Network Settings** | `/admin/friend-network-settings` | Social graph rules, friend limits | Social features control |
| 6 | **Role Management** | `/admin/role-management` | Admin roles, permissions | Admin access control |
| 7 | **Role-Based Access** | `/admin/role-based-access` | Granular permission matrix | Security layer |
| 8 | **College/Corporate Module** | `/admin/college-corporate` | Student/employee verification programs | Special user segments |

### 3. MERCHANT MANAGEMENT (8 Modules)

| # | Module | Route | Description | Connection |
|---|--------|-------|-------------|------------|
| 1 | **Merchants List** | `/admin/merchants` | All merchants, status, performance | Core merchant database |
| 2 | **Merchant SuperOS** | `/admin/merchant-super-os` | Merchant tools administration | Links to all Merchant features |
| 3 | **Merchant Tier Config** | `/admin/merchant-tier-config` | Bronze/Silver/Gold/Platinum tiers | Affects commission rates |
| 4 | **POS Integration** | `/admin/pos-integration` | Third-party POS connections | Links to Merchant POS |
| 5 | **Settlement & Commission** | `/admin/settlement-commission` | Payout rules, commission rates | Financial flows to merchants |
| 6 | **Co-Partner Brands** | `/admin/co-partner-brands` | Brand partnerships management | Cross-brand promotions |
| 7 | **Partnerships** | `/admin/partnerships` | Strategic partner management | Business development |
| 8 | **Operations City Dashboard** | `/operations/city-dashboard` | City-wise merchant operations | Regional operations |

### 4. OFFERS & DEALS MANAGEMENT (18 Modules)

| # | Module | Route | Description | Connection |
|---|--------|-------|-------------|------------|
| 1 | **Offers Management** | `/admin/offers` | All platform offers | Merchants create → Admin approves |
| 2 | **Campaign Approval** | `/admin/campaign-approval` | Approve/reject merchant campaigns | Merchant campaigns flow |
| 3 | **Lightning Deals** | `/admin/lightning-deals` | Flash sale administration | Time-limited deals |
| 4 | **Flash Sales** | `/admin/flash-sales` | Platform-wide flash sales | Event-based promotions |
| 5 | **BOGO Management** | `/admin/bogo-management` | Buy One Get One rules | Special offer type |
| 6 | **Nearby Offers** | `/admin/nearby-offers` | Location-based offers config | Geofencing rules |
| 7 | **Today's Offers** | `/admin/todays-offers` | Daily deals curation | Featured content |
| 8 | **Lock Price Deals** | `/admin/lock-price-deals` | Price lock functionality | Price protection feature |
| 9 | **Free Delivery** | `/admin/free-delivery` | Free delivery thresholds | Shipping rules |
| 10 | **New Deals Settings** | `/admin/new-deals-settings` | New arrivals configuration | Discovery settings |
| 11 | **Discount Buckets** | `/admin/discount-buckets` | Discount tier management | Pricing structure |
| 12 | **Sponsored Deals** | `/admin/sponsored-deals` | Paid promotions management | Revenue from merchants |
| 13 | **Exclusive Programs** | `/admin/exclusive-programs` | VIP/exclusive access | Premium segments |
| 14 | **Bank Offers** | `/admin/bank-offers` | Bank card promotions | Financial partnerships |
| 15 | **Vouchers** | `/admin/vouchers` | Voucher code management | Promotional codes |
| 16 | **Trending Algorithm** | `/admin/trending-algorithm` | Trending logic configuration | Discovery engine |
| 17 | **AI Recommendations** | `/admin/ai-recommendations` | ML recommendation settings | Personalization |
| 18 | **Hotspot Management** | `/admin/hotspot-management` | High-traffic area promotions | Location intelligence |

### 5. COIN & WALLET SYSTEM (12 Modules)

| # | Module | Route | Description | Connection |
|---|--------|-------|-------------|------------|
| 1 | **Coin System Overview** | `/admin/coin-system-overview` | Complete coin economy dashboard | Central coin management |
| 2 | **Coin Issuance Control** | `/admin/coin-issuance` | Mint/burn coins, supply control | Monetary policy |
| 3 | **Coin Rules Engine** | `/admin/coin-rules` | Earning/spending rules | Business logic |
| 4 | **Promo Coin Manager** | `/admin/promo-coin-manager` | Promotional coin campaigns | Marketing coins |
| 5 | **Coin Events** | `/admin/coin-events` | Special earning events | Gamification |
| 6 | **Redemption Rules** | `/admin/redemption-rules` | How coins can be spent | Spending controls |
| 7 | **Checkout Priority** | `/admin/checkout-priority` | Coin vs cash priority | Payment flow |
| 8 | **Earning Rule Matrix** | `/admin/earning-rule-matrix` | Category-wise earning rates | Dynamic earning |
| 9 | **Wallet Management** | `/admin/wallet` | User wallet administration | Balance management |
| 10 | **Wallet Analytics** | `/admin/wallet-analytics` | Wallet usage patterns | Insights |
| 11 | **Cashback Management** | `/admin/cashback` | Cashback rules & rates | Reward system |
| 12 | **Bank Reconciliation** | `/admin/bank-reconciliation` | Bank statement matching | Financial accuracy |

### 6. FINANCIAL & TRANSACTIONS (5 Modules)

| # | Module | Route | Description | Connection |
|---|--------|-------|-------------|------------|
| 1 | **Transactions** | `/admin/transactions` | All platform transactions | Core financial data |
| 2 | **Payments** | `/admin/payments` | Payment gateway management | Payment processing |
| 3 | **Price Tracking** | `/admin/price-tracking` | Competitor price monitoring | Pricing intelligence |
| 4 | **Product Comparison** | `/admin/product-comparison` | Cross-merchant comparison | User decision support |
| 5 | **Scan & Pay Settings** | `/admin/scan-pay-settings` | QR payment configuration | In-store payments |

### 7. MARKETING & CAMPAIGNS (10 Modules)

| # | Module | Route | Description | Connection |
|---|--------|-------|-------------|------------|
| 1 | **Marketing Hub** | `/admin/marketing` | Central marketing control | Campaign orchestration |
| 2 | **Campaigns** | `/admin/campaigns` | Campaign management | Multi-channel campaigns |
| 3 | **Hero Banners** | `/admin/hero-banners` | Homepage banner management | Visual merchandising |
| 4 | **Email Marketing** | `/admin/email-marketing` | Email campaign builder | User communication |
| 5 | **SMS Campaigns** | `/admin/sms-campaigns` | SMS broadcast management | Mobile marketing |
| 6 | **Social Integration** | `/admin/social-integration` | Social media connections | Cross-platform |
| 7 | **Multi-Channel Marketing** | `/admin/multi-channel-marketing` | Omnichannel coordination | Unified messaging |
| 8 | **Referrals** | `/admin/referrals` | Referral program management | Viral growth |
| 9 | **Recommendations** | `/admin/recommendations` | Product recommendation engine | Personalization AI |
| 10 | **Daily Check-in** | `/admin/daily-checkin` | Daily engagement rewards | Retention feature |

### 8. CONTENT & UGC (6 Modules)

| # | Module | Route | Description | Connection |
|---|--------|-------|-------------|------------|
| 1 | **Content Management** | `/admin/content` | Platform content control | Content publishing |
| 2 | **UGC Management** | `/admin/ugc-management` | User-generated content moderation | Community content |
| 3 | **Content Moderation** | `/admin/content-moderation` | Review/approve content | Safety & compliance |
| 4 | **Creator Content** | `/admin/creator-content` | Influencer content management | Creator economy |
| 5 | **Prive Management** | `/admin/prive-management` | VIP influencer program | Premium creators |
| 6 | **Upload Bill Settings** | `/admin/upload-bill-settings` | Bill upload rules | Verification settings |

### 9. GAMIFICATION & ENGAGEMENT (5 Modules)

| # | Module | Route | Description | Connection |
|---|--------|-------|-------------|------------|
| 1 | **Gamification** | `/admin/gamification` | Points, badges, levels | User engagement |
| 2 | **Game Configuration** | `/admin/game-configuration` | In-app games setup | Entertainment |
| 3 | **Tournaments** | `/admin/tournaments` | Gaming competitions | Competitive engagement |
| 4 | **Social Impact** | `/admin/social-impact` | CSR initiatives | Brand purpose |
| 5 | **Social Impact Verification** | `/admin/social-impact-verification` | Verify social activities | Impact authenticity |

### 10. EVENTS & INVENTORY (3 Modules)

| # | Module | Route | Description | Connection |
|---|--------|-------|-------------|------------|
| 1 | **Events Management** | `/admin/events` | Platform events | Event lifecycle |
| 2 | **Event Inventory** | `/admin/event-inventory` | Ticket inventory | Capacity management |
| 3 | **Categories** | `/admin/categories` | Category taxonomy | Content organization |

### 11. SECURITY & FRAUD (3 Modules)

| # | Module | Route | Description | Connection |
|---|--------|-------|-------------|------------|
| 1 | **Fraud Prevention** | `/admin/fraud` | Fraud rules & detection | Risk management |
| 2 | **Fraud Detection** | `/admin/fraud-detection` | ML-based fraud alerts | Real-time monitoring |
| 3 | **Mode Control** | `/admin/mode-control` | Platform mode switching | Emergency controls |

### 12. SYSTEM & OPERATIONS (7 Modules)

| # | Module | Route | Description | Connection |
|---|--------|-------|-------------|------------|
| 1 | **Settings** | `/admin/settings` | Platform configuration | System settings |
| 2 | **Support** | `/admin/support` | Support ticket management | Customer service |
| 3 | **Notifications** | `/admin/notifications` | Push notification management | User communication |
| 4 | **Integrations** | `/admin/integrations` | Third-party integrations | External systems |
| 5 | **Background Jobs** | `/admin/background-jobs` | Scheduled task management | Automation |
| 6 | **Logs** | `/admin/logs` | System audit logs | Compliance & debugging |
| 7 | **Regional Control** | `/admin/regional-control` | Geo-specific settings | Localization |

### 13. SPECIAL PROGRAMS (2 Modules)

| # | Module | Route | Description | Connection |
|---|--------|-------|-------------|------------|
| 1 | **Special Programs** | `/admin/special-programs` | Exclusive membership programs | VIP access |
| 2 | **Analytics** | `/admin/analytics` | Advanced analytics | Business intelligence |

### 14. CRITICAL SYSTEMS (9 Modules) - Added Previously

| # | Module | Route | Description | Connection |
|---|--------|-------|-------------|------------|
| 1 | **Coin Emergency Controls** | `/admin/coin-emergency-controls` | Emergency freeze, burn, supply control | Coin System |
| 2 | **Merchant Trust Score** | `/admin/merchant-trust-score` | Real-time merchant health scoring | Risk management |
| 3 | **User Trust Score** | `/admin/user-trust-score` | User behavior and reliability scoring | Fraud prevention |
| 4 | **Offline Reconciliation** | `/admin/offline-reconciliation` | Sync offline transactions | Data integrity |
| 5 | **Dispute Resolution** | `/admin/dispute-resolution` | Merchant-user dispute handling | Support escalation |
| 6 | **Internal Ops** | `/admin/internal-ops` | Internal team operations | Operations |
| 7 | **Experiments** | `/admin/experiments` | A/B testing and feature flags | Product development |
| 8 | **Monetization Hub** | `/admin/monetization-hub` | Revenue optimization center | Finance |
| 9 | **Audit Vault** | `/admin/audit-vault` | Complete audit trail and compliance | Legal/compliance |

### 15. KING-MAKING SYSTEMS (8 Modules) - The Ultimate Moat 👑

These are the control layers that transform ReZ from a platform into an **ecosystem that cannot be escaped**.

| # | Module | Route | Description | Strategic Value |
|---|--------|-------|-------------|-----------------|
| 1 | **Merchant Profit Engine** | `/admin/merchant-profit-engine` | ROI Guarantee Programs, Profit Simulator, Dynamic Commission Protection, Risk-Shared Campaigns | **Economic Sovereignty**: Merchants cannot calculate profit without ReZ |
| 2 | **Merchant Intelligence** | `/admin/merchant-intelligence` | Cross-Category Demand Graph, Auto-Pilot Mode, CLV Insights, Auto-Decision Rules | **Dependency Lock**: Merchants outsource business decisions to ReZ |
| 3 | **User Habit Engine** | `/admin/user-habit-engine` | Daily Economic Check-in, Savings Rank, Personal Price Memory, Life Lock | **User Monopoly**: Users cannot remember prices without ReZ |
| 4 | **City Lock Engine** | `/admin/city-lock-engine` | Zone Exclusivity, Local Merchant Councils, Hyperlocal Dynamic Pricing, City Capture | **Local Monopoly**: Cities cannot organize commerce without ReZ |
| 5 | **Trust Passport** | `/admin/trust-passport` | Universal Trust Passport, Reputation Economics, Merchant Reputation, Influence Authenticity Graph | **Social Currency**: Reputation only exists inside ReZ |
| 6 | **Government Console** | `/admin/government-console` | Government Partner Dashboard, MSME Analytics, Regional Data Hub, Compliance Reports, Explainable AI | **Regulatory Moat**: Regulators depend on ReZ for data |
| 7 | **Credit Engine** | `/admin/credit-engine` | Working Capital Loans, User BNPL, Inventory Financing, Revenue-Based Advances, Capital Flywheel | **Capital Lock**: Credit history exists only in ReZ |
| 8 | **Commerce Protocol** | `/admin/commerce-protocol` | API Marketplace, White-Label Stack, Developer Portal, Exit-Proof Architecture | **Protocol Dominance**: Competitors must use ReZ APIs |
| 9 | **🆕 Enterprise Hub** | `/admin/enterprise-hub` | DMart/Reliance/Croma Integration, 5 Integration Models, OAuth/mTLS, Sandbox Environment | **Enterprise Adoption**: Big retailers cannot integrate loyalty without ReZ |

#### 15.1 Merchant Profit Engine (Economic Sovereignty Layer)
- **ROI Guarantee Programs**: Spend ₹X → Get guaranteed Y customers or money back
- **Profit Simulator**: AI-powered tool that calculates profit for any decision
- **Dynamic Commission Protection**: Auto-reduce commission when merchant margins fall
- **Risk-Shared Campaigns**: ReZ invests alongside merchants, shares downside

#### 15.2 Merchant Intelligence (Dependency Lock)
- **Cross-Category Demand Graph**: "Customers who buy coffee also buy books 45 mins later"
- **Auto-Pilot Mode**: ReZ makes pricing, inventory, and marketing decisions automatically
- **CLV Insights**: Customer Lifetime Value data only accessible through ReZ
- **Auto-Decision Rules**: Merchants set rules, ReZ executes automatically

#### 15.3 User Habit Engine (Irreversible Dependency)
- **Daily Economic Check-in**: Miss a day = lose streak multiplier forever
- **Lifetime Savings Rank**: Social identity based on savings position
- **Personal Price Memory**: "You paid ₹89 for this last time at Store X"
- **Life Lock Features**: Birthdays, anniversaries, preferences create gravity

#### 15.4 City Lock Engine (Local Monopoly Mechanics)
- **Zone Exclusivity**: One merchant per category per micro-zone (500m radius)
- **Local Merchant Councils**: Merchants co-govern with ReZ for zone decisions
- **Hyperlocal Dynamic Pricing**: Prices adjust by time, weather, events, demand
- **City Capture Metrics**: Track dominance across neighborhoods

#### 15.5 Trust Passport (Social Proof as Currency)
- **Universal Trust Passport**: Portable reputation across all interactions
- **Reputation Economics**: Trust score affects prices, access, opportunities
- **Merchant Reputation Layer**: Verified trust metrics for B2B and lending
- **Influence Authenticity Graph**: Silently penalize fake influencers (reduced reach, no notification)

#### 15.6 Government Console (Regulatory Readiness)
- **Government Partner Portal**: Pre-built dashboards for regulators
- **MSME Growth Analytics**: Track small business impact for policy
- **Regional Data Hub**: City/state level commerce intelligence
- **Compliance-by-Design Reports**: Auto-generate regulatory filings
- **Explainable AI Ledger**: Every AI decision has human-readable reasoning

#### 15.7 Credit Engine (Capital Flywheel)
- **Merchant Working Capital**: Advance loans based on ReZ transaction data
- **User BNPL (Buy Now Pay Later)**: Credit limit valid only on ReZ platform
- **Inventory Financing**: ReZ funds stock, takes margin share
- **Revenue-Based Advances**: Repayment scales with daily revenue
- **Auto-Recovery**: Deduct repayments from settlements (no collection cost)
- **Exclusivity Clauses**: Active loans = locked to ReZ platform

#### 15.8 Commerce Protocol (Exit-Proof Architecture)
- **API Marketplace**: Banks, insurers, fintechs pay for ReZ data access
- **White-Label Stack**: Other platforms run on ReZ infrastructure
- **Developer Portal**: 2,450+ developers building on ReZ APIs
- **Critical Dependencies**: 156 companies cannot function without ReZ APIs
- **Switching Cost**: ₹85L average to rebuild without ReZ data

#### 15.9 🆕 Enterprise Hub (Big Retailer Lock-In)
- **5 Integration Models**: Post-Bill (easy), Scan & Pay Overlay (easy), Loyalty Mirror (medium), Central HQ (medium), White-Label ReZ (advanced)
- **Target Partners**: DMart, Reliance Digital, Croma, BigBazaar, More, Spencer's
- **Enterprise Security**: OAuth 2.0, mTLS, IP whitelisting, rate limiting, audit logs
- **Compliance**: ISO 27001, SOC2, PCI-DSS ready
- **Sandbox Environment**: Full testing environment with mock data
- **ReZ as Sidecar**: Never replace core POS, always enhance existing systems
- **Zero Migration Risk**: Big retailers integrate safely, reversibly, with full control

---

# PART 2: MERCHANT SUPER OS

## Total Merchant Modules: 116+ (🆕 11 POS Modules Added)

### 1. DASHBOARD & CORE (5 Modules)

| # | Module | Route | Description | Admin Connection |
|---|--------|-------|-------------|------------------|
| 1 | **SuperOS Dashboard** | `/merchant` | Unified command center | Feeds to Admin Analytics |
| 2 | **Dashboard (Legacy)** | `/merchant/dashboard-old` | Original dashboard | - |
| 3 | **Profile** | `/merchant/profile` | Business profile | Admin Merchants list |
| 4 | **Settings** | `/merchant/settings` | Store configuration | Admin controls |
| 5 | **Notifications** | `/merchant/notifications` | Alerts & updates | Admin Notifications |

### 2. POINT OF SALE (POS) SYSTEM (23 Modules) 🆕 MAJOR EXPANSION

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **POS Terminal** | `/merchant/pos` | Full POS with billing | Transactions → Admin |
| 2 | **SoftPOS** | `/merchant/softpos` | Phone as terminal (NFC/Tap) | Admin POS Integration |
| 3 | **POS Integration** | `/merchant/pos-integration` | Third-party POS sync | Admin POS settings |
| 4 | **POS Transactions** | `/merchant/pos-transactions` | Transaction history | Admin Transactions |
| 5 | **Bill Hold & Resume** | `/merchant/bill-hold` | Park transactions | - |
| 6 | **Bill Splitting** | `/merchant/bill-splitting` | Split bills multiple ways | User payment |
| 7 | **Payment Links** | `/merchant/payment-links` | Send payment requests | User receives link |
| 8 | **QR Payments** | `/merchant/qr-payments` | QR-based payments | User Scan & Pay |
| 9 | **Tips Configuration** | `/merchant/tips-config` | Tip suggestions setup | User tips |
| 10 | **Post-Payment Rewards** | `/merchant/post-payment-rewards` | After-payment offers | User earns coins |
| 11 | **Token Display** | `/merchant/token-display` | Customer queue display | User order status |
| 12 | **Captain/Waiter App** | `/merchant/captain-app` | Staff ordering app | KDS integration |
| 13 | **🆕 Offline POS** | `/merchant/offline-pos` | Bulletproof offline billing, auto-sync, conflict resolution | Never lose a bill |
| 14 | **🆕 Bill Management** | `/merchant/bill-management` | Edit/Void/Backdate with full audit trail | Accountant compliance |
| 15 | **🆕 Accountant Portal** | `/merchant/accountant-portal` | CA-ready reports, Tally export, GST summary | Accountant read-only access |
| 16 | **🆕 Cash Drawer** | `/merchant/cash-drawer` | Denomination entry, staff tracking, theft detection | Cash accountability |
| 17 | **🆕 Simple POS** | `/merchant/simple-pos` | Staff-proof icon mode, multi-language, large buttons | Zero training required |
| 18 | **🆕 Day-End Report** | `/merchant/day-end-report` | Perfect closing report - the 90% merchant switcher | Cash reconciliation |
| 19 | **🆕 Hardware Hub** | `/merchant/hardware-hub` | Printer/scanner/drawer compatibility matrix | Hardware setup |
| 20 | **🆕 Power Survival** | `/merchant/power-survival` | Auto-save, battery status, recovery points | Never lose data |
| 21 | **🆕 Category POS** | `/merchant/category-pos` | Restaurant/Salon/Clinic/Grocery specific features | Industry-specific |
| 22 | **🆕 Data Export** | `/merchant/data-export` | Export everything, migration support, data ownership | Exit trust guarantee |

### 3. ORDER MANAGEMENT (4 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Orders** | `/merchant/orders` | Order management | User orders |
| 2 | **Multi-Channel Orders** | `/merchant/orders-multi-channel` | Zomato/Swiggy/Direct | Aggregator data |
| 3 | **KDS (Kitchen Display)** | `/merchant/kds` | Kitchen order screen | Captain App |
| 4 | **QR Ordering** | `/merchant/qr-ordering` | Table QR scan ordering | User scans QR |

### 4. INVENTORY & PRODUCTS (10 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Products** | `/merchant/products` | Product catalog | User sees products |
| 2 | **Inventory** | `/merchant/inventory` | Stock management | Low stock alerts |
| 3 | **Inventory Advanced** | `/merchant/inventory-advanced` | Multi-location inventory | Branch sync |
| 4 | **Product Variants** | `/merchant/product-variants` | Size/color variations | User selection |
| 5 | **Barcode Scanner** | `/merchant/barcode-scanner` | Scan products | POS integration |
| 6 | **Batch Tracking** | `/merchant/batch-tracking` | Batch/expiry tracking | Compliance |
| 7 | **Recipe Costing** | `/merchant/recipe-costing` | F&B cost calculation | P&L reports |
| 8 | **Waste Management** | `/merchant/waste-management` | Track wastage | Cost control |
| 9 | **Store Transfer** | `/merchant/store-transfer` | Inter-branch transfer | Multi-store |
| 10 | **Combo Products** | `/merchant/combo-products` | Bundle deals | User sees combos |

### 5. CUSTOMER & CRM (5 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Customers** | `/merchant/customers` | Customer database | Admin Users |
| 2 | **CRM** | `/merchant/crm` | Customer relationship | User profiles |
| 3 | **Customer Segmentation** | `/merchant/customer-segmentation` | AI-based segments | Marketing targeting |
| 4 | **Credit Ledger (Udhar)** | `/merchant/credit-ledger` | Customer credit tracking | User dues |
| 5 | **Payment Reminders** | `/merchant/payment-reminders` | Auto payment reminders | User notifications |

### 6. OFFERS & PROMOTIONS (15 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Offers** | `/merchant/offers` | All store offers | Admin approval → User sees |
| 2 | **Create Offer** | `/merchant/offers/create` | Offer builder | Admin approval |
| 3 | **Flash Deals** | `/merchant/flash-deals` | Time-limited offers | Admin Lightning Deals |
| 4 | **BOGO Offers** | `/merchant/bogo-offers` | Buy One Get One | Admin BOGO rules |
| 5 | **Nearby Offers** | `/merchant/nearby-offers` | Location-based | User nearby |
| 6 | **Today's Offers** | `/merchant/todays-offers` | Daily specials | User Today's deals |
| 7 | **Birthday Offers** | `/merchant/birthday-offers` | Birthday rewards | User profile birthday |
| 8 | **Cashback Programs** | `/merchant/cashback-programs` | Cashback setup | Admin Cashback rules |
| 9 | **Clearance Sales** | `/merchant/clearance-sales` | Inventory clearance | User sees deals |
| 10 | **Exclusive Deals** | `/merchant/exclusive-deals` | VIP-only offers | Prive members |
| 11 | **Lock Price Deals** | `/merchant/lock-price-deals` | Price freeze offers | Admin Lock Price |
| 12 | **Free Delivery** | `/merchant/free-delivery` | Free delivery config | Admin rules |
| 13 | **Exclusive Programs** | `/merchant/exclusive-programs` | VIP access | Admin Exclusive |
| 14 | **Loyalty Offers** | `/merchant/loyalty-offers` | Points-based offers | User loyalty |
| 15 | **Deal Analytics** | `/merchant/deal-analytics` | Offer performance | Admin Analytics |

### 7. LOYALTY & COINS (4 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Loyalty** | `/merchant/loyalty` | Store loyalty program | Admin Coin System |
| 2 | **Loyalty Tiers** | `/merchant/loyalty-tiers` | Tier configuration | User tier status |
| 3 | **Branded Coin Config** | `/merchant/branded-coin-config` | Store-specific coins | Admin Promo Coins |
| 4 | **Price Engineering** | `/merchant/price-engineering` | Dynamic pricing | User sees prices |

### 8. MARKETING & CAMPAIGNS (5 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Marketing** | `/merchant/marketing` | Marketing hub | Admin Marketing |
| 2 | **Campaigns** | `/merchant/campaigns` | Campaign management | Admin approval |
| 3 | **Marketing Campaigns** | `/merchant/marketing-campaigns` | Multi-channel campaigns | Admin Multi-channel |
| 4 | **UGC Campaigns** | `/merchant/ugc-campaigns` | User content campaigns | Admin UGC |
| 5 | **Content** | `/merchant/content` | Store content | Admin Content |

### 9. ANALYTICS & REPORTS (7 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Analytics** | `/merchant/analytics` | Store analytics | Admin Ecosystem |
| 2 | **Performance** | `/merchant/performance` | Performance metrics | Admin benchmarks |
| 3 | **Benchmarks** | `/merchant/benchmarks` | Industry comparison | Admin data |
| 4 | **Financials** | `/merchant/financials` | Financial reports | Admin Finance |
| 5 | **Profit & Loss** | `/merchant/profit-loss` | P&L statement | Admin reports |
| 6 | **Expense Tracker** | `/merchant/expense-tracker` | Track expenses | P&L integration |
| 7 | **GST Reports** | `/merchant/gst-reports` | GSTR-1/3B generation | Tax compliance |

### 10. PAYMENTS & TRANSACTIONS (5 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Transactions** | `/merchant/transactions` | Transaction history | Admin Transactions |
| 2 | **Wallet** | `/merchant/wallet` | Merchant wallet | Admin Settlements |
| 3 | **Payments** | `/merchant/payments` | Payment settings | Admin Payments |
| 4 | **Aggregator Reconciliation** | `/merchant/aggregator-reconciliation` | Zomato/Swiggy matching | Third-party sync |
| 5 | **Salesman Commission** | `/merchant/salesman-commission` | Staff commission | Payroll |

### 11. STAFF MANAGEMENT (5 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Staff** | `/merchant/staff` | Employee management | - |
| 2 | **Staff Roster** | `/merchant/staff-roster` | Shift scheduling | - |
| 3 | **User Roles** | `/merchant/user-roles` | Access permissions | Admin Role-based |
| 4 | **Payroll** | `/merchant/payroll` | Salary management | - |
| 5 | **Salesman Commission** | `/merchant/salesman-commission` | Commission tracking | Staff performance |

### 12. REVIEWS & REPUTATION (3 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Reviews** | `/merchant/reviews` | Customer reviews | User reviews |
| 2 | **Review Management** | `/merchant/review-management` | Response & moderation | Admin Content |
| 3 | **Creator Hub** | `/merchant/creator-hub` | Influencer collaborations | Admin Prive |

### 13. OPERATIONS & LOGISTICS (4 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Shipping** | `/merchant/shipping` | Delivery management | User tracking |
| 2 | **Returns** | `/merchant/returns` | Return processing | User returns |
| 3 | **Table Management** | `/merchant/tables` | Restaurant tables | User reservation |
| 4 | **Event Check-in** | `/merchant/event-checkin` | Event attendance | User tickets |

### 14. MULTI-STORE & BRANCHES (3 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Multi-Store** | `/merchant/multi-store` | Multi-location dashboard | Admin Regional |
| 2 | **Branch Manager** | `/merchant/branches` | Branch operations | Admin Operations |
| 3 | **Marketplace** | `/merchant/marketplace` | Online storefront | User shopping |

### 15. INDUSTRY-SPECIFIC MODULES (12 Modules)

| # | Module | Route | Industry | Description |
|---|--------|-------|----------|-------------|
| 1 | **Appointments** | `/merchant/appointments` | Salon/Clinic | Booking system |
| 2 | **Service Catalog** | `/merchant/service-catalog` | Services | Service menu |
| 3 | **Booking Calendar** | `/merchant/booking-calendar` | All services | Calendar view |
| 4 | **Class Schedule** | `/merchant/class-schedule` | Fitness/Education | Class timetable |
| 5 | **Memberships** | `/merchant/memberships` | Gym/Club | Member management |
| 6 | **Subscriptions** | `/merchant/subscriptions` | Recurring | Subscription billing |
| 7 | **Prescriptions** | `/merchant/prescriptions` | Pharmacy | Rx management |
| 8 | **Events** | `/merchant/events` | Events | Event hosting |
| 9 | **Quotations** | `/merchant/quotations` | B2B/Retail | Quote to invoice |
| 10 | **Invoice Scanner** | `/merchant/invoice-scanner` | All | AI OCR invoices |
| 11 | **Discovery** | `/merchant/discovery` | All | Get discovered |
| 12 | **Prive Module** | `/merchant/prive-module` | Premium | Influencer access |

### 16. COMPLIANCE & DOCUMENTS (4 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Tax Compliance** | `/merchant/tax-compliance` | GST/tax management | Admin Compliance |
| 2 | **Compliance** | `/merchant/compliance` | Regulatory compliance | Admin Audit |
| 3 | **Documents** | `/merchant/documents` | Document storage | KYC |
| 4 | **Accounting** | `/merchant/accounting` | Bookkeeping | Finance |

### 17. SUPPLIERS & PROCUREMENT (2 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Suppliers & Procurement** | `/merchant/suppliers-procurement` | Vendor management | - |
| 2 | **Pricing Intelligence** | `/merchant/pricing-intelligence` | Competitor pricing | Admin Price Tracking |

### 18. INTEGRATIONS & SUPPORT (3 Modules)

| # | Module | Route | Description | Admin/User Connection |
|---|--------|-------|-------------|----------------------|
| 1 | **Integrations** | `/merchant/integrations` | Third-party apps | Admin Integrations |
| 2 | **Support** | `/merchant/support` | Help & support | Admin Support |
| 3 | **Signup Flow** | `/merchant/signup` | Onboarding | Admin Merchants |

---

# PART 3: USER APP (Consumer Features)

## Total User Features: 180+

### 1. CORE NAVIGATION (10 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Home** | `/` | Main feed with offers | Admin curated content |
| 2 | **Explore** | `/explore` | Discovery page | Admin Trending Algorithm |
| 3 | **Categories** | `/categories` | Browse categories | Admin Categories |
| 4 | **Store Hub** | `/stores` | All stores | Merchant listings |
| 5 | **Search** | `/search` | Universal search | Admin AI Recommendations |
| 6 | **Profile** | `/profile` | User account | Admin Users |
| 7 | **Settings** | `/settings` | App settings | - |
| 8 | **Notifications** | `/notifications` | All alerts | Admin Notifications |
| 9 | **Help** | `/help` | Support center | Admin Support |
| 10 | **Cart** | `/cart` | Shopping cart | Merchant Products |

### 2. WALLET & COINS (6 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Wallet** | `/wallet` | Coin balance & cash | Admin Wallet |
| 2 | **Wallet Use** | `/wallet/use` | Spend wallet | Merchant payments |
| 3 | **Coin History** | `/coin-history` | Earning/spending log | Admin Coin System |
| 4 | **Coin Guide** | `/coin-system` | How coins work | Admin rules |
| 5 | **Savings Dashboard** | `/savings` | Track savings | Admin Analytics |
| 6 | **Savings Tracker** | `/savings-tracker` | Detailed savings | Merchant offers |

### 3. DEALS & OFFERS (12 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Offers** | `/offers` | All offers | Merchant Offers |
| 2 | **Deals** | `/deals` | Deal listings | Admin Lightning |
| 3 | **Super Deals** | `/super-deals` | Best deals | Admin Featured |
| 4 | **Deal Store** | `/deal-store` | Deal marketplace | Merchant Flash |
| 5 | **Deal Detail** | `/deal/:id` | Single deal | Merchant offer |
| 6 | **Offer Detail** | `/offers/:id` | Single offer | Merchant offer |
| 7 | **Cashback Detail** | `/cashback/:id` | Cashback info | Admin Cashback |
| 8 | **New Arrivals** | `/new` | Latest additions | Admin New Deals |
| 9 | **Popular Stores** | `/popular` | Trending stores | Admin Trending |
| 10 | **Scan & Pay** | `/scan` | QR payments | Merchant QR |
| 11 | **Pay in Store** | `/pay-in-store` | In-store payment | Merchant POS |
| 12 | **Reels** | `/reels` | Video deals | Merchant Content |

### 4. CASH STORE (ONLINE CASHBACK) (10 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Cash Store** | `/cash-store` | Cashback portal | Admin Cashback |
| 2 | **All Stores** | `/cash-store/stores` | Partner stores | External merchants |
| 3 | **Coupons** | `/cash-store/coupons` | Coupon codes | Admin Vouchers |
| 4 | **Gift Cards** | `/cash-store/gift-cards` | Buy gift cards | External partners |
| 5 | **Track Cashback** | `/cash-store/track` | Pending cashback | Admin tracking |
| 6 | **Missing Cashback** | `/cash-store/missing-cashback` | Claim missing | Support flow |
| 7 | **How It Works** | `/cash-store/how-it-works` | Instructions | - |
| 8 | **Category** | `/cash-store/category/:cat` | By category | - |
| 9 | **Brand Detail** | `/cash-store/brand/:id` | Brand page | - |
| 10 | **Track** | `/cash-store/track` | Track orders | - |

### 5. REZ MALL (8 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Mall Home** | `/mall` | Shopping mall | Admin Mall config |
| 2 | **Brands** | `/mall/brands` | All brands | Merchant brands |
| 3 | **Categories** | `/mall/categories` | Mall categories | Admin Categories |
| 4 | **Brand Detail** | `/mall/brand/:id` | Brand store | Merchant store |
| 5 | **Category** | `/mall/category/:id` | Category products | Merchant products |
| 6 | **Collection** | `/mall/collection/:id` | Curated collection | Admin curation |
| 7 | **Mall Cart** | `/mall/cart` | Shopping cart | Checkout |
| 8 | **Product Detail** | - | Product page | Merchant product |

### 6. LIFESTYLE VERTICAL (15 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Lifestyle Hub** | `/lifestyle` | Lifestyle home | Category merchants |
| 2 | **Fashion** | `/fashion` | Fashion deals | Fashion merchants |
| 3 | **Fashion Vibes** | `/fashion/vibes` | Style moods | - |
| 4 | **Fashion Occasions** | `/fashion/occasions` | Shop by occasion | - |
| 5 | **Fashion Brands** | `/fashion/brands` | Fashion brands | Merchant brands |
| 6 | **Fashion Trending** | `/fashion/trending` | Trending styles | Admin Trending |
| 7 | **Fashion Stores** | `/fashion/stores` | Fashion stores | Merchant stores |
| 8 | **Fashion Deals** | `/fashion/deals` | Fashion offers | Merchant offers |
| 9 | **Style Quiz** | `/lifestyle/fashion/style-quiz` | Find your style | AI recommendation |
| 10 | **Style DNA Result** | `/lifestyle/fashion/style-dna-result` | Quiz results | Personalization |
| 11 | **Virtual Wardrobe** | `/lifestyle/fashion/virtual-wardrobe` | Save outfits | - |
| 12 | **Outfit Calendar** | `/lifestyle/fashion/outfit-calendar` | Plan outfits | - |
| 13 | **Sustainability** | `/lifestyle/fashion/sustainability` | Eco scores | - |
| 14 | **Style Challenges** | `/lifestyle/fashion/challenges` | Fashion contests | Gamification |
| 15 | **Lifestyle Profile** | `/lifestyle/profile` | Style profile | - |

### 7. FOOD & DINING (6 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Food Hub** | `/food` | Dining home | Restaurant merchants |
| 2 | **Restaurant Detail** | `/food/restaurant/:id` | Restaurant page | Merchant profile |
| 3 | **Lifestyle Food** | `/lifestyle/food` | Food lifestyle | - |
| 4 | **Events Hub** | `/lifestyle/events` | Food events | Merchant events |
| 5 | **Travel** | `/travel` | Travel deals | Travel merchants |
| 6 | **Flea Market** | `/flea-market` | Local finds | Local vendors |

### 8. BEAUTY & WELLNESS (14 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Beauty Hub** | `/beauty` | Beauty home | Beauty merchants |
| 2 | **Nearby Salons** | `/beauty/nearby` | Location-based | Geolocation |
| 3 | **Beauty Deals** | `/beauty/deals` | Beauty offers | Merchant offers |
| 4 | **Services** | `/beauty/services` | Book services | Merchant appointments |
| 5 | **Products** | `/beauty/products` | Buy products | Merchant products |
| 6 | **Clinics** | `/beauty/clinics` | Skin clinics | Clinic merchants |
| 7 | **All Beauty** | `/beauty/all` | Everything | All beauty merchants |
| 8 | **Concierge** | `/beauty/concierge` | Personal shopper | Premium service |
| 9 | **Gift Beauty** | `/beauty/gift` | Gift services | Gift cards |
| 10 | **Beauty Offers** | `/beauty/offers` | Offers page | Merchant offers |
| 11 | **Product Detail** | `/beauty/product/:id` | Product page | Merchant product |
| 12 | **Clinic Detail** | `/beauty/clinic/:id` | Clinic page | Merchant profile |
| 13 | **Service Booking** | `/beauty/service/:id` | Book service | Merchant booking |
| 14 | **Category** | `/beauty/:type/:cat` | By category | - |

### 9. GROCERY (11 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Grocery Hub** | `/grocery` | Grocery home | Grocery merchants |
| 2 | **Stores** | `/grocery/stores` | All stores | Merchant listings |
| 3 | **Fast Delivery** | `/grocery/fast` | Quick commerce | Speed delivery |
| 4 | **Deals** | `/grocery/deals` | Grocery deals | Merchant offers |
| 5 | **Products** | `/grocery/products` | All products | Merchant products |
| 6 | **Compare** | `/grocery/compare` | Price compare | Admin Price Tracking |
| 7 | **Offers** | `/grocery/offers` | All offers | Merchant offers |
| 8 | **Category** | `/grocery/:category` | By category | - |
| 9 | **Store Detail** | `/grocery/store/:id` | Store page | Merchant profile |
| 10 | **Product Detail** | `/grocery/product/:id` | Product page | Merchant product |
| 11 | **Compare Products** | `/compare` | Comparison tool | Admin Product Comparison |

### 10. HEALTHCARE (14 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Healthcare Hub** | `/healthcare` | Health home | Healthcare merchants |
| 2 | **Doctors** | `/healthcare/doctors` | Find doctors | Doctor profiles |
| 3 | **Dental** | `/healthcare/dental` | Dental care | Dental clinics |
| 4 | **Diagnostics** | `/healthcare/diagnostics` | Lab tests | Lab merchants |
| 5 | **Pharmacy** | `/healthcare/pharmacy` | Buy medicines | Pharmacy merchants |
| 6 | **Offers** | `/healthcare/offers` | Health deals | Merchant offers |
| 7 | **Emergency** | `/healthcare/emergency` | Emergency help | Emergency services |
| 8 | **Support** | `/healthcare/support` | Health support | - |
| 9 | **Upload Bill** | `/healthcare/upload-bill` | Med bills | Earn coins |
| 10 | **Category** | `/healthcare/:category` | By specialty | - |
| 11 | **Doctor Detail** | `/healthcare/doctor/:id` | Doctor profile | Merchant profile |
| 12 | **Dental Detail** | `/healthcare/dental/:id` | Clinic page | Merchant profile |
| 13 | **Test Detail** | `/healthcare/test/:id` | Test info | Lab details |
| 14 | **Pharmacy Detail** | `/healthcare/pharmacy/:id` | Pharmacy page | Merchant profile |

### 11. FITNESS (13 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Fitness Hub** | `/fitness` | Fitness home | Fitness merchants |
| 2 | **Gyms** | `/fitness/gyms` | Find gyms | Gym merchants |
| 3 | **Studios** | `/fitness/studios` | Yoga/Pilates | Studio merchants |
| 4 | **Trainers** | `/fitness/trainers` | Personal trainers | Trainer profiles |
| 5 | **Store** | `/fitness/store` | Fitness gear | Retail merchants |
| 6 | **Challenges** | `/fitness/challenges` | Fitness contests | Gamification |
| 7 | **Feed** | `/fitness/feed` | Community feed | Social features |
| 8 | **Streak** | `/fitness/streak` | Track streaks | Engagement |
| 9 | **Category** | `/fitness/:category` | By type | - |
| 10 | **Gym Detail** | `/fitness/gym/:id` | Gym page | Merchant profile |
| 11 | **Trainer Detail** | `/fitness/trainer/:id` | Trainer page | Trainer profile |
| 12 | **Challenge Detail** | `/fitness/challenge/:id` | Challenge info | - |
| 13 | **Product Detail** | `/fitness/product/:id` | Product page | Merchant product |

### 12. HOME SERVICES (8 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Home Services Hub** | `/home-services` | Services home | Service merchants |
| 2 | **Popular** | `/home-services/popular` | Popular services | Trending |
| 3 | **Providers** | `/home-services/providers` | All providers | Service providers |
| 4 | **Bookings** | `/home-services/bookings` | My bookings | Merchant bookings |
| 5 | **Available Today** | `/home-services/available-today` | Same-day | Availability |
| 6 | **Category** | `/home-services/:category` | By category | - |
| 7 | **Book** | `/home-services/book/:id` | Book service | Merchant booking |
| 8 | **Provider Detail** | `/home-services/provider/:id` | Provider page | Merchant profile |

### 13. ELECTRONICS (4 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Electronics Hub** | `/electronics` | Electronics home | Electronics merchants |
| 2 | **Category** | `/electronics/:category` | By category | - |
| 3 | **Product** | `/electronics/product/:id` | Product page | Merchant product |
| 4 | **Compare** | `/compare` | Price compare | Admin Comparison |

### 14. FINANCIAL SERVICES (10 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Financial Hub** | `/financial` | Finance home | Finance partners |
| 2 | **Bills** | `/financial/bills` | Pay bills | Bill payments |
| 3 | **Offers** | `/financial/offers` | Finance offers | Partner offers |
| 4 | **History** | `/financial/history` | Payment history | Transaction log |
| 5 | **OTT** | `/financial/ott` | OTT subscriptions | OTT partners |
| 6 | **OTT Detail** | `/financial/ott/:id` | Subscription page | - |
| 7 | **Gold** | `/financial/gold` | Digital gold | Gold partner |
| 8 | **Category** | `/financial/:category` | By type | - |
| 9 | **Offer Detail** | `/financial/offer/:id` | Offer page | - |
| 10 | **Pay Bill** | `/financial/pay-bill/:id` | Bill payment | - |

### 15. EVENTS & ENTERTAINMENT (12 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Events Hub** | `/events` | Events home | Event merchants |
| 2 | **Movies** | `/events/movies` | Movie tickets | Cinema partners |
| 3 | **Concerts** | `/events/concerts` | Live shows | Event organizers |
| 4 | **Workshops** | `/events/workshops` | Classes | Workshop hosts |
| 5 | **Parks** | `/events/parks` | Theme parks | Park merchants |
| 6 | **Gaming** | `/events/gaming` | Gaming zones | Gaming venues |
| 7 | **Experiences** | `/events/experiences` | Unique experiences | Experience hosts |
| 8 | **Event Detail** | `/event/:id` | Event page | Merchant event |
| 9 | **Event Ticketing** | `/event-ticketing` | Buy tickets | Ticket purchase |
| 10 | **My Tickets** | `/my-tickets` | Saved tickets | - |
| 11 | **Ticket Detail** | `/ticket/:id` | Ticket page | - |
| 12 | **Bookings** | `/bookings` | All bookings | Merchant bookings |

### 16. EARN & REWARDS (25 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Earn Hub** | `/earn` | Earning center | Admin Gamification |
| 2 | **Upload Bill** | `/upload-bill` | Upload receipts | Admin Bill Settings |
| 3 | **Referral** | `/refer` | Invite friends | Admin Referrals |
| 4 | **Achievements** | `/earn/achievements` | Badges/levels | Gamification |
| 5 | **Leaderboard** | `/earn/leaderboard` | Rankings | Competition |
| 6 | **Coin Hunt** | `/earn/coin-hunt` | AR coin game | Location coins |
| 7 | **Scratch Card** | `/earn/scratch-card` | Scratch to win | Rewards |
| 8 | **Surveys** | `/earn/surveys` | Paid surveys | Market research |
| 9 | **Play Games** | `/earn/play` | Earn by gaming | Admin Games |
| 10 | **Refer & Earn** | `/earn/refer` | Referral program | Admin Referrals |
| 11 | **Write Reviews** | `/earn/reviews` | Review for coins | Merchant Reviews |
| 12 | **Quiz** | `/earn/quiz` | Quiz games | Gamification |
| 13 | **Memory Match** | `/earn/memory-match` | Memory game | Gamification |
| 14 | **Lucky Draw** | `/earn/lucky-draw` | Lucky draws | Promotions |
| 15 | **Guess Price** | `/earn/guess-price` | Price guessing | Engagement |
| 16 | **Tournaments** | `/earn/tournaments/:id` | Gaming tournaments | Admin Tournaments |
| 17 | **Social Impact** | `/earn/social-impact` | Do good, earn | Admin Social |
| 18 | **Social Event Detail** | `/earn/social-impact/:id` | Event detail | - |
| 19 | **Brand Tasks** | `/earn/brand-tasks` | Brand missions | Merchant campaigns |
| 20 | **UGC Creator** | `/earn/ugc-creator` | Create content | Merchant UGC |
| 21 | **College Ambassador** | `/earn/college-ambassador` | Campus rep | Admin College |
| 22 | **Corporate Employee** | `/earn/corporate-employee` | Corporate perks | Admin Corporate |
| 23 | **Missions** | `/missions` | Daily missions | Gamification |
| 24 | **Gamification Hub** | `/achievements` | All achievements | Admin Gamification |
| 25 | **Referral Dashboard** | `/referral` | Referral stats | Admin Referrals |

### 17. PRIVE (VIP INFLUENCER PROGRAM) (37 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Prive Home** | `/prive` | VIP dashboard | Admin Prive Management |
| 2 | **Privileges** | `/prive/privileges` | VIP perks | Exclusive access |
| 3 | **Explore** | `/prive/explore` | Discover brands | Merchant Prive Module |
| 4 | **Influence** | `/prive/influence` | Influence score | Social metrics |
| 5 | **Tier Progress** | `/prive/tier-progress` | Level progress | Tier system |
| 6 | **Offer Detail** | `/prive/offer/:id` | VIP offer | Merchant exclusive |
| 7 | **Redeem** | `/prive/redeem` | Redeem rewards | Merchant redemption |
| 8 | **Profile** | `/prive/profile` | Prive profile | - |
| 9 | **Store Detail** | `/prive/store/:id` | Brand page | Merchant profile |
| 10 | **Influence Hub** | `/prive/influence-hub` | Social tools | - |
| 11 | **Notifications** | `/prive/notifications` | VIP alerts | Admin notifications |
| 12 | **Brand Invitation** | `/prive/invitation/:id` | Brand invite | Merchant invitation |
| 13 | **Earnings** | `/prive/earnings` | Revenue earned | Merchant campaigns |
| 14 | **Activity** | `/prive/activity` | Activity log | - |
| 15 | **Recognition** | `/prive/recognition` | Awards/badges | Gamification |
| 16 | **Authority** | `/prive/authority` | Expert status | Community |
| 17 | **Visibility Control** | `/prive/visibility` | Privacy settings | - |
| 18 | **Activity Statement** | `/prive/statement` | Monthly statement | - |
| 19 | **Exit** | `/prive/exit` | Leave program | - |
| 20 | **Invitations** | `/prive/invitations` | All invites | Merchant invites |
| 21 | **Settings** | `/prive/settings` | Prive settings | - |
| 22 | **Offers Feed** | `/prive/offers-feed` | VIP offers | Merchant offers |
| 23 | **Campaign Task** | `/prive/campaign/:id` | Do campaign | Merchant campaign |
| 24 | **Campaign Status** | `/prive/campaign-status/:id` | Track campaign | - |
| 25 | **Eligibility** | `/prive/eligibility` | Check eligibility | Admin criteria |
| 26 | **Content Performance** | `/prive/content-performance/:id` | Content analytics | - |
| 27 | **Content Guidelines** | `/prive/content-guidelines` | Content rules | Admin Content |
| 28 | **Redemption History** | `/prive/redemption-history` | Past redemptions | - |
| 29 | **Score Breakdown** | `/prive/score-breakdown` | Score details | - |
| 30 | **Gift Cards** | `/prive/gift-cards` | VIP gift cards | - |
| 31 | **Gift Card Detail** | `/prive/gift-card/:id` | Card page | - |
| 32 | **Experiences** | `/prive/experiences` | VIP experiences | Premium events |
| 33 | **Experience Detail** | `/prive/experience/:id` | Experience page | - |
| 34 | **Partner Privileges** | `/prive/partner-privileges` | Partner perks | Partner brands |
| 35 | **Checkout** | `/prive/checkout` | VIP checkout | - |
| 36 | **Booking** | `/prive/booking` | Book experience | - |
| 37 | **Wallet** | - | Prive wallet | - |

### 18. EXCLUSIVE ZONES (7 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Student Zone** | `/exclusive/student` | Student deals | Admin College Module |
| 2 | **Corporate Perks** | `/exclusive/corporate` | Corporate offers | Admin Corporate |
| 3 | **Women Exclusive** | `/exclusive/women` | Women-only deals | Targeted offers |
| 4 | **Birthday Specials** | `/exclusive/birthday` | Birthday rewards | Profile birthday |
| 5 | **Loyalty Rewards** | `/exclusive/loyalty` | Loyalty perks | Admin Loyalty |
| 6 | **Special Profiles** | `/exclusive/special-profiles` | Special segments | Admin Segments |
| 7 | **College Verify** | `/college/verify` | Student verification | Admin verification |

### 19. CREATOR STORE (6 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Creator Home** | `/creators` | Creator marketplace | Admin Creator Content |
| 2 | **All Creators** | `/creators/all` | Browse creators | - |
| 3 | **Creator Profile** | `/creators/:username` | Creator page | Creator account |
| 4 | **Creator Pick** | `/creators/:username/pick/:id` | Product pick | - |
| 5 | **Collection** | `/creators/:username/collection/:id` | Curated picks | - |
| 6 | **Corporate Verify** | `/corporate/verify` | Employee verify | Admin Corporate |

### 20. EXPLORE FEATURES (10 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Category Detail** | `/explore/category/:id` | Category page | - |
| 2 | **Compare** | `/explore/compare` | Product compare | Admin Comparison |
| 3 | **Compare Smart Find** | `/explore/compare-smart-find` | AI compare | AI recommendation |
| 4 | **Trending** | `/explore/trending` | Trending now | Admin Trending |
| 5 | **Friends Activity** | `/explore/friends` | Social discovery | Friend network |
| 6 | **Product Detail** | `/explore/product/:id` | Product page | Merchant product |
| 7 | **Spin & Win** | `/explore/spin-win` | Spin wheel | Gamification |
| 8 | **Daily Check-in** | `/explore/daily-checkin` | Daily rewards | Admin Daily Checkin |
| 9 | **Review & Earn** | `/explore/review-earn` | Review products | Merchant reviews |
| 10 | **Map View** | `/explore/map` | Map discovery | Geolocation |

### 21. SOCIAL & COMMUNITY (3 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Social Hub** | `/social` | Community center | Admin Social |
| 2 | **Social Feed** | `/social-feed` | Activity feed | - |
| 3 | **Social Activity** | `/social/:type/:id` | Activity detail | - |

### 22. LOYALTY & REWARDS (5 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Loyalty Rewards Hub** | `/loyalty-rewards` | All rewards | Admin Rewards |
| 2 | **Loyalty Hub** | `/loyalty` | Loyalty programs | Merchant Loyalty |
| 3 | **Rewards Hub** | `/rewards` | Redeem rewards | Admin rewards |
| 4 | **Brand Loyalty** | `/brand/:brandId` | Brand program | Merchant brand |
| 5 | **Wishlist** | `/wishlist` | Saved items | - |

### 23. ORDERS & TRANSACTIONS (6 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Order History** | `/orders` | Past orders | Merchant Orders |
| 2 | **Order Detail** | `/order/:orderId` | Order page | - |
| 3 | **Order Tracking** | `/track-order/:orderId` | Track delivery | Merchant Shipping |
| 4 | **QR Scanner** | `/qr-scanner` | Scan QR codes | Merchant QR |
| 5 | **Payment Gateway** | `/payment` | Payment processing | Admin Payments |
| 6 | **Support Chat** | `/support/chat` | Live support | Admin Support |

### 24. SPECIALIZED STORES (7 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **Luxury Store** | `/experience/luxury` | Premium products | Luxury merchants |
| 2 | **Organic Store** | `/experience/organic` | Organic goods | Organic merchants |
| 3 | **Men Store** | `/experience/men` | Men's products | - |
| 4 | **Women Store** | `/experience/women` | Women's products | - |
| 5 | **Children Store** | `/experience/children` | Kids products | - |
| 6 | **Rental Store** | `/experience/rental` | Rent items | Rental merchants |
| 7 | **Gifting Store** | `/experience/gifting` | Gift ideas | Gift merchants |

### 25. GUIDES & ONBOARDING (5 Features)

| # | Feature | Route | Description | Merchant/Admin Connection |
|---|---------|-------|-------------|---------------------------|
| 1 | **How ReZ Works** | `/how-rez-works` | Platform guide | - |
| 2 | **Onboarding** | `/onboarding` | New user setup | - |
| 3 | **Splash** | `/splash` | App loading | - |
| 4 | **Login** | `/login` | User login | Admin Users |
| 5 | **Signup** | `/signup` | Registration | Admin Users |

---

# PART 4: HOW EVERYTHING CONNECTS

## The Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         ADMIN HQ (Control Center)                    │
│  • Sets global rules, approves content, monitors everything         │
│  • Manages coin economy, fraud detection, platform health           │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
         ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
         │   MERCHANTS  │  │    USERS     │  │   CREATORS   │
         │   (Supply)   │  │  (Demand)    │  │  (Influence) │
         └──────────────┘  └──────────────┘  └──────────────┘
                    │               │               │
                    └───────────────┴───────────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │        TRANSACTION LAYER       │
                    │  Orders, Payments, Coins, Data │
                    └───────────────────────────────┘
```

## Connection Matrix

### 1. MERCHANT → ADMIN Connections

| Merchant Action | Admin Module | Data Flow |
|-----------------|--------------|-----------|
| Create Offer | Campaign Approval | Merchant submits → Admin approves → User sees |
| Make Sale | Transactions | Sale data → Admin analytics → Insights |
| Request Payout | Settlement & Commission | Merchant requests → Admin processes → Bank transfer |
| Add Products | Merchant SuperOS | Products sync → User catalog visible |
| Generate GST Report | Tax Compliance | Reports → Admin compliance dashboard |
| Credit Ledger Update | Financial Analytics | Dues tracking → Admin receivables |
| Staff Changes | Role Management | Permissions sync → Admin controls |

### 2. USER → MERCHANT Connections

| User Action | Merchant Module | Data Flow |
|-------------|-----------------|-----------|
| Place Order | Orders | User checkout → Merchant POS/KDS → Kitchen |
| Make Payment | POS/Payments | User pays → Merchant receives → Coins earned |
| Write Review | Reviews | User submits → Merchant sees → Response |
| Scan QR | QR Ordering | User scans → Menu appears → Order placed |
| Redeem Offer | Offers | User claims → Merchant validates → Discount applied |
| Book Appointment | Appointments | User books → Merchant calendar → Confirmation |
| Split Bill | Bill Splitting | User splits → Merchant sees parts → Each pays |
| Tip | Tips Config | User tips → Merchant receives → Staff gets share |
| Use Credit | Credit Ledger | User buys on credit → Merchant tracks → Payment reminder |

### 3. USER → ADMIN Connections

| User Action | Admin Module | Data Flow |
|-------------|--------------|-----------|
| Earn Coins | Coin System | User earns → Admin tracks supply → Economy balance |
| Upload Bill | Bill Settings | User uploads → Admin validates → Coins credited |
| Complete Mission | Gamification | User completes → Admin awards → Leaderboard |
| Refer Friend | Referrals | User refers → Admin validates → Both earn |
| Report Issue | Support | User reports → Admin ticket → Resolution |
| Verify Student | College Module | User submits → Admin verifies → Status granted |
| Daily Check-in | Daily Checkin | User checks in → Admin config → Coins awarded |
| Play Game | Game Configuration | User plays → Admin rules → Rewards given |

### 4. ADMIN → ALL Connections

| Admin Action | Impact on Merchant | Impact on User |
|--------------|-------------------|----------------|
| Change Commission Rate | Revenue share changes | Prices may adjust |
| Launch Flash Sale | More traffic | Better deals |
| Adjust Coin Earning | Redemption value | Spending power |
| Enable New Feature | New tool available | New experience |
| Block Fraud Account | Protection | Protection |
| Update Categories | Better discovery | Easier browsing |
| Push Notification | Alert received | Alert received |

## Real-World Transaction Flow Example

### Scenario: User Orders Food at Restaurant

```
1. USER scans QR at table
   └── Merchant's QR Ordering module serves menu

2. USER adds items to cart
   └── Merchant's Products & Variants shown

3. USER applies offer code
   └── Merchant's Offers validated
   └── Admin's Offer Rules checked

4. USER pays with coins + card
   └── Admin's Checkout Priority decides split
   └── Merchant's POS processes payment
   └── Admin's Wallet deducts coins

5. ORDER goes to kitchen
   └── Merchant's KDS displays order
   └── Merchant's Captain App updates waiter

6. USER receives food, leaves tip
   └── Merchant's Tips Config applies
   └── Staff commission tracked

7. USER earns coins on purchase
   └── Admin's Earning Rule Matrix calculates
   └── Admin's Coin System credits wallet

8. USER writes review
   └── Merchant's Reviews receives
   └── Admin's Content Moderation checks

9. MERCHANT requests settlement
   └── Admin's Settlement calculates commission
   └── Admin's Bank Reconciliation pays out

10. ADMIN tracks everything
    └── Analytics Dashboard shows trends
    └── AI Insights predicts patterns
```

---

## Summary Statistics

| Category | Count |
|----------|-------|
| **Admin Modules** | 117+ |
| **Merchant Modules** | 105+ |
| **User Features** | 180+ |
| **Total Platform Features** | **402+** |
| **Industries Covered** | 12+ |
| **Integration Points** | 50+ |
| **Unique User Journeys** | 100+ |
| **King-Making Systems** | 8 |
| **API-Dependent Companies** | 156 |
| **Capital Deployed** | ₹12.5 Cr |

---

## Industry Coverage

| Industry | Admin Support | Merchant Tools | User Features |
|----------|---------------|----------------|---------------|
| **Restaurants/F&B** | Category management, Aggregator settings | POS, KDS, Table Management, Recipe Costing, Captain App, Bill Hold | Food discovery, QR ordering, Reviews |
| **Retail** | Product comparison, Price tracking | Inventory, Barcode, Variants, Multi-store | Mall, Fashion, Electronics, Grocery |
| **Beauty & Wellness** | Service categories | Appointments, Service Catalog, Staff Roster | Booking, Nearby salons, Concierge |
| **Healthcare** | Pharmacy compliance | Prescriptions, Diagnostics integration | Doctor booking, Medicine orders |
| **Fitness** | Challenge management | Memberships, Class Schedule | Gym finder, Trainer booking, Challenges |
| **Events** | Inventory management | Event Check-in, Ticketing | Event discovery, Ticket booking |
| **Home Services** | Provider verification | Booking Calendar, Service Catalog | Service booking, Tracking |
| **Financial Services** | Partner management | Bill payment integration | Bill pay, OTT, Digital gold |
| **Fashion/Lifestyle** | Trend algorithms | Virtual try-on integration | Style quiz, Wardrobe, Challenges |
| **E-commerce** | Cashback management | Multi-channel orders, Returns | Cash Store, Mall, Comparison |
| **Quick Commerce** | Delivery settings | Fast delivery integration | Grocery fast, 60-min delivery |
| **Creator Economy** | Content moderation | Creator Hub, UGC Campaigns | Creator store, Prive program |

---

# MERCHANT PACKAGE TIERS

## Business Model for Merchant Partnerships

ReZ operates on a tiered partnership model based on merchant marketing commitment.

### Tier Structure

| Tier | Marketing Spend | Fixed Commission | ReZ Coin | Platform Share | Subscription |
|------|-----------------|------------------|----------|----------------|--------------|
| 🆓 **Free** | ₹0 | 20% | 5-10% | 10-15% | ₹0/₹499* |
| 📦 **Basic** | ₹10,000/mo | 18% | 5-10% | 8-13% | ₹0/₹499* |
| 🥇 **Golden** | ₹30,000/mo | 17% | 5-10% | 7-12% | ₹0/₹499* |
| 💎 **Diamond** | ₹100,000+/mo | 15% | 5-10% | 5-10% | ₹0/₹499* |

*\*Subscription waived if monthly sales exceed ₹100,000 INR*

### Optional Coin Allocations (All Tiers)

| Coin Type | Range | Description |
|-----------|-------|-------------|
| **Brand Coin** | 0-10% | Merchant's own loyalty currency |
| **Prive Coin** | 5-100% | Rewards for Prive VIP members |

### Revenue Flow

```
Customer Transaction (₹1000)
         │
         ▼
   Commission (15-20%)
         │
    ┌────┴────┐
    ▼         ▼
ReZ Coin   Platform
(5-10%)    Revenue
    │      (5-15%)
    ▼
 User
Rewards

Optional (Merchant Funded):
├── Brand Coin (0-10%)
└── Prive Coin (5-100%)
```

### Key Benefits by Tier

| Benefit | Free | Basic | Golden | Diamond |
|---------|:----:|:-----:|:------:|:-------:|
| Platform Listing | ✓ | ✓ | ✓ | ✓ |
| Basic Analytics | ✓ | ✓ | ✓ | ✓ |
| POS System | ✓ | ✓ | ✓ | ✓ |
| Priority Support | - | ✓ | ✓ | ✓ |
| Featured Placement | - | - | ✓ | ✓ |
| Dedicated Manager | - | - | - | ✓ |
| Custom Campaigns | - | - | ✓ | ✓ |
| API Access | - | ✓ | ✓ | ✓ |

---

# CRITICAL MERCHANT ADOPTION FEATURES (NEW)

## The 10 Tech Blockers That Make Merchants Say NO

These 8 new pages address the critical friction points that cause merchant rejection.

### Problem → Solution Matrix

| # | Merchant Fear | Tech Blocker | Solution Page | Key Feature |
|---|---------------|--------------|---------------|-------------|
| 1 | "POS lag karega" | Slow/offline POS | MerchantOfflinePOSSync | Local-first SQLite, background sync |
| 2 | "Printer connect nahi ho raha" | Hardware issues | MerchantHardwareDiagnostics | Test buttons, certified list |
| 3 | "Stock galat hoga" | Inventory mismatch | MerchantStockVarianceReport | System vs actual, audit log |
| 4 | "CA se problem" | GST confusion | MerchantGSTSetupWizard | GSTIN verify, auto HSN, Tally export |
| 5 | "Time nahi hai" | Complex onboarding | MerchantQuickOnboarding | 10-min flow, photo/WhatsApp upload |
| 6 | "Kitna bacha?" | No profit view | MerchantProfitView | Sales-Commission-Coins=Profit |
| 7 | "Tech fail toh?" | No human help | MerchantSupportHub | 1-tap WhatsApp, callback <10min |
| 8 | "Staff galti karega" | Permission issues | MerchantStaffActivityLog | Undo window, flagged actions |

### Implementation Status

```
✅ MerchantOfflinePOSSync      - /merchant/offline-sync
✅ MerchantHardwareDiagnostics - /merchant/hardware-diagnostics
✅ MerchantStockVarianceReport - /merchant/stock-variance
✅ MerchantGSTSetupWizard      - /merchant/gst-setup
✅ MerchantQuickOnboarding     - /merchant/quick-onboarding
✅ MerchantProfitView          - /merchant/profit-view
✅ MerchantSupportHub          - /merchant/support-hub
✅ MerchantStaffActivityLog    - /merchant/staff-activity
```

### The Simple Profit Formula

```
┌─────────────────────────────────────────────┐
│           MERCHANT DAILY PROFIT             │
├─────────────────────────────────────────────┤
│                                             │
│   Total Sales         ₹45,670               │
│   - Commission (20%)  -₹9,134               │
│   - ReZ Coins (5%)    -₹2,284               │
│   ─────────────────────────────             │
│   = NET PROFIT        ₹34,252               │
│                                             │
│   WhatsApp report sent daily at 10 PM       │
│                                             │
└─────────────────────────────────────────────┘
```

### Support Channels

| Channel | Response Time | Availability |
|---------|---------------|--------------|
| WhatsApp | Instant | 24/7 |
| Callback | <10 minutes | 24/7 |
| Dedicated Concierge | Immediate | First 30 days |
| Emergency Hotline | Immediate | 24/7 |

---

*Document Generated: January 2025*
*Platform Version: ReZ V2.3 (King-Making + Package Tiers + Adoption Fixes)*
*Total Lines of Code: 560,000+*
*Total Pages: 728 | Total Routes: 640*
*Admin Modules: 143 | Merchant Modules: 172 | User Features: 261*
*King-Making Systems: 9 Strategic Control Layers*
*Merchant Package Tiers: 4 (Free, Basic, Golden, Diamond)*
*Critical Adoption Features: 8 blocker-fix pages*
