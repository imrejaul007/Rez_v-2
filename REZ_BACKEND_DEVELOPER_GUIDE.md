# ReZ Platform - Backend Developer Guide

## Complete API & Page Reference for 4 Core + 4 Discovery Apps

**Total Pages**: 752+
**Total Routes**: 674+
**Core Applications**: ReZ (User), BizOne (Merchant), Adzy (Marketing), Rabtul (Infrastructure)
**Phase 2 Apps**: AI-R, BuzzLoop, CoinHunt, LocalEdge
**Phase**: 2 In Progress - Discovery Clone Apps Built

### System Distribution
| System | Pages | Primary User | Status |
|--------|-------|--------------|--------|
| ReZ | ~241 | End Users | ✅ 92% |
| BizOne | ~93 | Merchants | ✅ 98% |
| Adzy | ~30 | HQ/Merchants | ✅ 90% |
| Rabtul | ~60 | Platform/All | ✅ 85% |
| **AI-R** | 4 | Users | ✅ NEW |
| **BuzzLoop** | 3 | Users | ✅ NEW |
| **CoinHunt** | 2 | Users | ✅ NEW |
| **LocalEdge** | 2 | Users | ✅ NEW |

### Phase 2 Discovery Apps (11 new pages, 52 new API endpoints)
See [PHASE2_BACKEND_API_REQUIREMENTS.md](./PHASE2_BACKEND_API_REQUIREMENTS.md) for complete API documentation.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Application Structure](#application-structure)
3. [Admin Application](#admin-application-143-pages)
4. [Merchant Application](#merchant-application-172-pages)
5. [User Application](#user-application-261-pages)
6. [API Endpoints Required](#api-endpoints-required)
7. [Data Flow Between Apps](#data-flow-between-apps)
8. [Authentication & Authorization](#authentication--authorization)

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         BACKEND SERVICES                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │
│  │   Admin API  │  │ Merchant API │  │   User API   │                  │
│  │   /api/admin │  │ /api/merchant│  │   /api/user  │                  │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘                  │
│         │                  │                  │                          │
│         └──────────────────┼──────────────────┘                          │
│                            │                                             │
│                   ┌────────┴────────┐                                   │
│                   │  Shared Services │                                   │
│                   │  - Auth Service  │                                   │
│                   │  - Coin Service  │                                   │
│                   │  - Payment Svc   │                                   │
│                   │  - Notification  │                                   │
│                   └─────────────────┘                                   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Application Structure

| Application | Base Route | Auth Type | User Type |
|-------------|------------|-----------|-----------|
| Admin | `/admin/*` | JWT + Role-based | HQ Staff, Zone Admins |
| Merchant | `/merchant/*` | JWT + Store ID | Store Owners, Staff |
| User | `/*` | JWT | End Users, Prive Members |

---

# ADMIN APPLICATION (142 Pages)

## Base Route: `/admin`
## Auth Required: Admin JWT Token + Role Permissions

---

### A1. DASHBOARDS (9 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | AdminDashboard | `/admin` | `GET /api/admin/dashboard` | Total users, merchants, orders, revenue, today's metrics |
| 2 | AdminGlobalDashboard | `/admin/global-dashboard` | `GET /api/admin/global-metrics` | Multi-region KPIs, growth rates, comparisons |
| 3 | AdminMarketingDashboard | `/admin/marketing-dashboard` | `GET /api/admin/marketing/metrics` | Campaign performance, conversion rates, ROI |
| 4 | AdminFinanceDashboard | `/admin/finance-dashboard` | `GET /api/admin/finance/overview` | Revenue, settlements, pending, reconciliation |
| 5 | AdminOperationsDashboard | `/admin/operations-dashboard` | `GET /api/admin/operations/metrics` | Order fulfillment, delivery times, SLA |
| 6 | AdminRegionalDashboard | `/admin/regional-dashboard` | `GET /api/admin/regional/{zoneId}` | Zone-specific metrics, city breakdown |
| 7 | AdminSupportDashboard | `/admin/support-dashboard` | `GET /api/admin/support/metrics` | Ticket counts, resolution times, satisfaction |
| 8 | AdminContentDashboard | `/admin/content-dashboard` | `GET /api/admin/content/metrics` | UGC submissions, approvals, moderation queue |
| 9 | AdminAnalyticsDashboard | `/admin/analytics-dashboard` | `GET /api/admin/analytics/deep` | User behavior, funnels, cohort analysis |

**Navigation**: All dashboards accessible from Admin sidebar. Each links to detailed sections.

---

### A2. GOVERNANCE & CONTROL (6 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | HQCommandCenter | `/admin/hq-command` | `GET /api/admin/hq/overview`<br>`POST /api/admin/hq/emergency` | Platform status, zone summary, emergency controls |
| 2 | ZoneManagement | `/admin/zone-management` | `GET /api/admin/zones`<br>`POST /api/admin/zones`<br>`PUT /api/admin/zones/{id}` | Zone list, zone admins, zone rules |
| 3 | AdminRuleEngine | `/admin/rule-engine` | `GET /api/admin/rules`<br>`POST /api/admin/rules`<br>`PUT /api/admin/rules/{id}` | Rule definitions, scopes, conditions |
| 4 | MerchantGovernance | `/admin/merchant-governance` | `GET /api/admin/merchant-governance`<br>`PUT /api/admin/merchant-tiers` | Tier definitions, permission matrix |
| 5 | UserAccessGovernance | `/admin/user-governance` | `GET /api/admin/user-governance`<br>`PUT /api/admin/user-tiers` | User tier rules, access controls |
| 6 | OperationsCityDashboard | `/admin/operations-city` | `GET /api/admin/operations/city/{cityId}` | City-level ops, local metrics |

**Navigation Flow**:
```
HQCommandCenter
    ├── ZoneManagement (Manage zones)
    ├── AdminRuleEngine (Configure rules)
    ├── MerchantGovernance (Merchant tiers)
    └── UserAccessGovernance (User access)
```

---

### A3. PROMOTIONS & OFFERS (12 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | AdminPromotionLauncher | `/admin/promotion-launcher` | `GET /api/admin/promotions`<br>`POST /api/admin/promotions`<br>`PUT /api/admin/promotions/{id}` | Promotion config, discount ranges, zones |
| 2 | AdminMandatoryOffers | `/admin/mandatory-offers` | `GET /api/admin/mandatory-offers`<br>`POST /api/admin/mandatory-offers` | Mandate rules, compliance tracking |
| 3 | AdminCampaigns | `/admin/campaigns` | `GET /api/admin/campaigns`<br>`POST /api/admin/campaigns` | Campaign list, performance |
| 4 | AdminCampaignApproval | `/admin/campaign-approval` | `GET /api/admin/campaigns/pending`<br>`PUT /api/admin/campaigns/{id}/approve` | Pending approvals, merchant requests |
| 5 | AdminOffers | `/admin/offers` | `GET /api/admin/offers`<br>`PUT /api/admin/offers/{id}` | All offers, status management |
| 6 | AdminFlashSales | `/admin/flash-sales` | `GET /api/admin/flash-sales`<br>`POST /api/admin/flash-sales` | Flash sale config, inventory |
| 7 | AdminLightningDeals | `/admin/lightning-deals` | `GET /api/admin/lightning-deals`<br>`POST /api/admin/lightning-deals` | Time-limited deals |
| 8 | AdminBOGOManagement | `/admin/bogo-management` | `GET /api/admin/bogo`<br>`POST /api/admin/bogo` | BOGO rules, products |
| 9 | AdminBankOffers | `/admin/bank-offers` | `GET /api/admin/bank-offers`<br>`POST /api/admin/bank-offers` | Bank partnerships, card offers |
| 10 | AdminDiscountBuckets | `/admin/discount-buckets` | `GET /api/admin/discount-buckets`<br>`PUT /api/admin/discount-buckets` | Discount tier config |
| 11 | AdminSponsoredDeals | `/admin/sponsored-deals` | `GET /api/admin/sponsored-deals`<br>`POST /api/admin/sponsored-deals` | Sponsored placements |
| 12 | AdminNearbyOffers | `/admin/nearby-offers` | `GET /api/admin/nearby-offers` | Location-based offer rules |

**Navigation Flow**:
```
AdminPromotionLauncher (Create promotion)
    ├── AdminMandatoryOffers (Enforce rules)
    ├── AdminCampaigns (Manage campaigns)
    │   └── AdminCampaignApproval (Approve/reject)
    ├── AdminFlashSales
    ├── AdminLightningDeals
    └── AdminBOGOManagement
```

---

### A4. MERCHANT MANAGEMENT (8 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | AdminMerchants | `/admin/merchants` | `GET /api/admin/merchants`<br>`PUT /api/admin/merchants/{id}` | Merchant list, status, tier |
| 2 | AdminMerchantTierConfig | `/admin/merchant-tier-config` | `GET /api/admin/merchant-tiers`<br>`PUT /api/admin/merchant-tiers` | Tier definitions, benefits |
| 3 | AdminMerchantTrustScore | `/admin/merchant-trust-score` | `GET /api/admin/merchant-trust`<br>`PUT /api/admin/merchant-trust/rules` | Trust algorithm, scores |
| 4 | AdminMerchantSuperOS | `/admin/merchant-super-os` | `GET /api/admin/merchant-os/config` | OS feature toggles |
| 5 | AdminMerchantIntelligence | `/admin/merchant-intelligence` | `GET /api/admin/merchant-analytics` | Merchant performance data |
| 6 | AdminMerchantProfitEngine | `/admin/merchant-profit-engine` | `GET /api/admin/merchant-profit` | Profit optimization |
| 7 | AdminSettlementCommission | `/admin/settlement-commission` | `GET /api/admin/settlements`<br>`PUT /api/admin/commission-rules` | Settlement config |
| 8 | AdminKYCCompliance | `/admin/kyc-compliance` | `GET /api/admin/kyc`<br>`PUT /api/admin/kyc/{id}` | KYC verification queue |
| 9 | AdminMerchantPackages | `/admin/merchant-packages` | `GET /api/admin/merchant-packages`<br>`PUT /api/admin/merchant-packages/{tierId}`<br>`POST /api/admin/merchant-packages/special`<br>`GET /api/admin/merchant-packages/special`<br>`PUT /api/admin/merchant-packages/special/{id}` | Package tiers (Free/Basic/Golden/Diamond), commission rates, ReZ coin allocation, subscription fees, special privileges for individual merchants |

**Navigation Flow**:
```
AdminMerchants (Merchant directory)
    ├── [Click merchant] → Merchant Detail
    ├── AdminMerchantTierConfig (Tier rules)
    ├── AdminMerchantTrustScore (Trust algorithm)
    ├── AdminMerchantPackages (Package tiers & special privileges)
    ├── AdminSettlementCommission (Payments)
    └── AdminKYCCompliance (Verification)
```

---

### A5. USER MANAGEMENT (5 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | AdminUsers | `/admin/users` | `GET /api/admin/users`<br>`PUT /api/admin/users/{id}` | User list, profiles |
| 2 | AdminUserManagement | `/admin/user-management` | `GET /api/admin/users/detailed` | Detailed user management |
| 3 | AdminUserTrustScore | `/admin/user-trust-score` | `GET /api/admin/user-trust` | User trust algorithm |
| 4 | AdminUserHabitEngine | `/admin/user-habit-engine` | `GET /api/admin/user-behavior` | Behavior analytics |
| 5 | AdminTrustPassport | `/admin/trust-passport` | `GET /api/admin/trust-passport/config` | Trust passport config |

---

### A6. COIN & WALLET SYSTEM (13 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | AdminCoinIssuanceControl | `/admin/coin-issuance` | `GET /api/admin/coins/supply`<br>`POST /api/admin/coins/issue` | Coin supply, issuance |
| 2 | AdminCoinRulesEngine | `/admin/coin-rules` | `GET /api/admin/coins/rules`<br>`PUT /api/admin/coins/rules` | Earning/redemption rules |
| 3 | AdminCoinSystemOverview | `/admin/coin-system-overview` | `GET /api/admin/coins/overview` | System-wide coin metrics |
| 4 | AdminCoinEvents | `/admin/coin-events` | `GET /api/admin/coins/events`<br>`POST /api/admin/coins/events` | Bonus events config |
| 5 | AdminCoinEmergencyControls | `/admin/coin-emergency-controls` | `POST /api/admin/coins/emergency` | Emergency freeze/release |
| 6 | AdminPromoCoinManager | `/admin/promo-coin-manager` | `GET /api/admin/promo-coins`<br>`POST /api/admin/promo-coins` | Promotional coins |
| 7 | AdminEarningRuleMatrix | `/admin/earning-rule-matrix` | `GET /api/admin/earning-rules`<br>`PUT /api/admin/earning-rules` | Category-wise earning |
| 8 | AdminRedemptionRules | `/admin/redemption-rules` | `GET /api/admin/redemption-rules`<br>`PUT /api/admin/redemption-rules` | Redemption config |
| 9 | AdminCheckoutPriority | `/admin/checkout-priority` | `GET /api/admin/checkout-priority` | Payment method priority |
| 10 | AdminWallet | `/admin/wallet` | `GET /api/admin/wallet/overview` | Platform wallet |
| 11 | AdminWalletAnalytics | `/admin/wallet-analytics` | `GET /api/admin/wallet/analytics` | Wallet metrics |
| 12 | AdminCashback | `/admin/cashback` | `GET /api/admin/cashback`<br>`PUT /api/admin/cashback` | Cashback programs |
| 13 | AdminCashbackRates | `/admin/cashback-rates` | `GET /api/admin/cashback-rates`<br>`PUT /api/admin/cashback-rates` | Rate configuration |

---

### A7. MARKETING & COMMUNICATION (8 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | AdminMarketing | `/admin/marketing` | `GET /api/admin/marketing` | Marketing overview |
| 2 | AdminMarketingOrchestrator | `/admin/marketing-orchestrator` | `GET /api/admin/marketing/orchestrator`<br>`POST /api/admin/marketing/campaigns` | Cross-channel campaigns |
| 3 | AdminMultiChannelMarketing | `/admin/multi-channel-marketing` | `GET /api/admin/marketing/channels` | Channel management |
| 4 | AdminHeroBanners | `/admin/hero-banners` | `GET /api/admin/banners`<br>`POST /api/admin/banners` | Banner management |
| 5 | AdminEmailMarketing | `/admin/email-marketing` | `GET /api/admin/email-campaigns`<br>`POST /api/admin/email-campaigns` | Email templates, campaigns |
| 6 | AdminSMSCampaigns | `/admin/sms-campaigns` | `GET /api/admin/sms-campaigns`<br>`POST /api/admin/sms-campaigns` | SMS campaigns |
| 7 | AdminNotifications | `/admin/notifications` | `GET /api/admin/notifications`<br>`POST /api/admin/notifications` | Push notifications |
| 8 | AdminSocialIntegration | `/admin/social-integration` | `GET /api/admin/social-integration` | Social media config |

---

### A8. CONTENT & MODERATION (5 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | AdminContent | `/admin/content` | `GET /api/admin/content` | Content overview |
| 2 | AdminContentModeration | `/admin/content-moderation` | `GET /api/admin/content/queue`<br>`PUT /api/admin/content/{id}/moderate` | Moderation queue |
| 3 | AdminUGCManagement | `/admin/ugc-management` | `GET /api/admin/ugc`<br>`PUT /api/admin/ugc/{id}` | UGC management |
| 4 | AdminCreatorContent | `/admin/creator-content` | `GET /api/admin/creators` | Creator content |
| 5 | AdminSocialFeedControl | `/admin/social-feed-control` | `GET /api/admin/social-feed/config` | Feed algorithm |

---

### A9. FINANCIAL & COMPLIANCE (10 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | AdminPayments | `/admin/payments` | `GET /api/admin/payments`<br>`PUT /api/admin/payments/{id}` | Payment management |
| 2 | AdminBankReconciliation | `/admin/bank-reconciliation` | `GET /api/admin/bank-reconciliation` | Bank statements |
| 3 | AdminTransactions | `/admin/transactions` | `GET /api/admin/transactions` | Transaction ledger |
| 4 | AdminVouchers | `/admin/vouchers` | `GET /api/admin/vouchers`<br>`POST /api/admin/vouchers` | Voucher management |
| 5 | AdminFraud | `/admin/fraud` | `GET /api/admin/fraud/rules` | Fraud rules |
| 6 | AdminFraudDetection | `/admin/fraud-detection` | `GET /api/admin/fraud/alerts`<br>`PUT /api/admin/fraud/alerts/{id}` | Fraud alerts |
| 7 | AdminDisputeResolution | `/admin/dispute-resolution` | `GET /api/admin/disputes`<br>`PUT /api/admin/disputes/{id}` | Dispute management |
| 8 | AdminOfflineReconciliation | `/admin/offline-reconciliation` | `GET /api/admin/offline-reconciliation` | Offline transactions |
| 9 | AdminAuditVault | `/admin/audit-vault` | `GET /api/admin/audit-logs` | Audit trail |
| 10 | AdminMonetizationHub | `/admin/monetization-hub` | `GET /api/admin/monetization` | Revenue streams |

---

### A10. SYSTEM ADMINISTRATION (12 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | AdminSettings | `/admin/settings` | `GET /api/admin/settings`<br>`PUT /api/admin/settings` | Global settings |
| 2 | AdminRoleManagement | `/admin/role-management` | `GET /api/admin/roles`<br>`POST /api/admin/roles` | Role definitions |
| 3 | AdminRoleBasedAccess | `/admin/role-based-access` | `GET /api/admin/rbac`<br>`PUT /api/admin/rbac` | RBAC config |
| 4 | AdminLogs | `/admin/logs` | `GET /api/admin/logs` | System logs |
| 5 | AdminBackgroundJobs | `/admin/background-jobs` | `GET /api/admin/jobs`<br>`POST /api/admin/jobs/{id}/retry` | Job queue |
| 6 | AdminIntegrations | `/admin/integrations` | `GET /api/admin/integrations`<br>`PUT /api/admin/integrations/{id}` | Third-party APIs |
| 7 | AdminWebhookManager | `/admin/webhook-manager` | `GET /api/admin/webhooks`<br>`POST /api/admin/webhooks` | Webhook config |
| 8 | AdminPlatformHealth | `/admin/platform-health` | `GET /api/admin/health` | System health |
| 9 | AdminDeveloperPortal | `/admin/developer-portal` | `GET /api/admin/developer-portal` | API docs, keys |
| 10 | AdminAPIQuotas | `/admin/api-quotas` | `GET /api/admin/api-quotas`<br>`PUT /api/admin/api-quotas` | Rate limiting |
| 11 | AdminLanguageManager | `/admin/language-manager` | `GET /api/admin/languages`<br>`PUT /api/admin/languages` | i18n management |
| 12 | AdminPOSIntegration | `/admin/pos-integration` | `GET /api/admin/pos-integration` | POS system config |

---

### A11. GAMIFICATION & PROGRAMS (10 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | AdminGamification | `/admin/gamification` | `GET /api/admin/gamification`<br>`PUT /api/admin/gamification` | Gamification rules |
| 2 | AdminGameConfiguration | `/admin/game-configuration` | `GET /api/admin/games`<br>`POST /api/admin/games` | Game setup |
| 3 | AdminTournaments | `/admin/tournaments` | `GET /api/admin/tournaments`<br>`POST /api/admin/tournaments` | Tournament config |
| 4 | AdminExperiments | `/admin/experiments` | `GET /api/admin/experiments`<br>`POST /api/admin/experiments` | A/B tests |
| 5 | AdminReferrals | `/admin/referrals` | `GET /api/admin/referrals`<br>`PUT /api/admin/referrals` | Referral program |
| 6 | AdminPriveManagement | `/admin/prive-management` | `GET /api/admin/prive`<br>`PUT /api/admin/prive` | Prive program |
| 7 | AdminExclusivePrograms | `/admin/exclusive-programs` | `GET /api/admin/exclusive`<br>`POST /api/admin/exclusive` | VIP programs |
| 8 | AdminEvents | `/admin/events` | `GET /api/admin/events`<br>`POST /api/admin/events` | Event management |
| 9 | AdminEventInventory | `/admin/event-inventory` | `GET /api/admin/event-inventory` | Ticket inventory |
| 10 | AdminSocialImpact | `/admin/social-impact` | `GET /api/admin/social-impact` | Social impact |

---

### A12. ANALYTICS & AI (8 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | AdminAnalytics | `/admin/analytics` | `GET /api/admin/analytics` | Detailed analytics |
| 2 | AdminEcosystemAnalytics | `/admin/ecosystem-analytics` | `GET /api/admin/ecosystem-analytics` | Platform-wide |
| 3 | AdminAIInsights | `/admin/ai-insights` | `GET /api/admin/ai-insights` | AI recommendations |
| 4 | AdminAIRecommendations | `/admin/ai-recommendations` | `GET /api/admin/ai/config`<br>`PUT /api/admin/ai/config` | AI model config |
| 5 | AdminTrendingAlgorithm | `/admin/trending-algorithm` | `GET /api/admin/trending/config` | Trending logic |
| 6 | AdminRecommendations | `/admin/recommendations` | `GET /api/admin/recommendations` | Recommendation engine |
| 7 | AdminHeatmaps | `/admin/heatmaps` | `GET /api/admin/heatmaps` | User interaction |
| 8 | AdminSessionReplay | `/admin/session-replay` | `GET /api/admin/sessions` | Session recordings |

---

### A13. ADVANCED FEATURES (16 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | AdminModeControl | `/admin/mode-control` | `GET /api/admin/mode`<br>`PUT /api/admin/mode` | App mode toggle |
| 2 | AdminCollegeCorporateModule | `/admin/college-corporate` | `GET /api/admin/college-corporate` | Institution programs |
| 3 | AdminSpecialPrograms | `/admin/special-programs` | `GET /api/admin/special-programs` | Special programs |
| 4 | AdminInternalOps | `/admin/internal-ops` | `GET /api/admin/internal-ops` | Internal operations |
| 5 | AdminCityLockEngine | `/admin/city-lock-engine` | `GET /api/admin/city-lock`<br>`PUT /api/admin/city-lock` | Supply locking |
| 6 | AdminCitySupplyLock | `/admin/city-supply-lock` | `GET /api/admin/supply-lock` | Supply constraints |
| 7 | AdminTemporalCommerce | `/admin/temporal-commerce` | `GET /api/admin/temporal-commerce` | Time-based rules |
| 8 | AdminCompetitiveDefense | `/admin/competitive-defense` | `GET /api/admin/competitive` | Competition analysis |
| 9 | AdminOpsIntelligence | `/admin/ops-intelligence` | `GET /api/admin/ops-intelligence` | Ops AI |
| 10 | AdminInstitutionalAPIs | `/admin/institutional-apis` | `GET /api/admin/institutional-apis` | B2B APIs |
| 11 | AdminFounderVault | `/admin/founder-vault` | `GET /api/admin/founder-vault` | Founder features |
| 12 | AdminCreditEngine | `/admin/credit-engine` | `GET /api/admin/credit`<br>`PUT /api/admin/credit` | Credit system |
| 13 | AdminCommerceProtocol | `/admin/commerce-protocol` | `GET /api/admin/commerce-protocol` | Protocol rules |
| 14 | AdminEnterpriseHub | `/admin/enterprise-hub` | `GET /api/admin/enterprise` | Enterprise B2B |
| 15 | AdminGovernmentConsole | `/admin/government-console` | `GET /api/admin/government` | Compliance |
| 16 | AdminBarterCampaigns | `/admin/barter-campaigns` | `GET /api/admin/barter`<br>`POST /api/admin/barter` | Barter exchange |

---

### A14. ADDITIONAL TOOLS (10 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | AdminTodaysOffers | `/admin/todays-offers` | `GET /api/admin/todays-offers` | Daily deals |
| 2 | AdminDailyCheckin | `/admin/daily-checkin` | `GET /api/admin/daily-checkin`<br>`PUT /api/admin/daily-checkin` | Check-in config |
| 3 | AdminLockPriceDeals | `/admin/lock-price-deals` | `GET /api/admin/lock-price` | Lock price config |
| 4 | AdminFreeDeliveryManagement | `/admin/free-delivery` | `GET /api/admin/free-delivery` | Free delivery rules |
| 5 | AdminNewDealsSettings | `/admin/new-deals-settings` | `GET /api/admin/new-deals` | New deal config |
| 6 | AdminScanPaySettings | `/admin/scan-pay-settings` | `GET /api/admin/scan-pay` | Scan & pay config |
| 7 | AdminUploadBillSettings | `/admin/upload-bill-settings` | `GET /api/admin/upload-bill` | Bill upload config |
| 8 | AdminProfileVerification | `/admin/profile-verification` | `GET /api/admin/profile-verification` | Verification rules |
| 9 | AdminHotspotManagement | `/admin/hotspot-management` | `GET /api/admin/hotspots` | Hotspot config |
| 10 | AdminGMBSync | `/admin/gmb-sync` | `GET /api/admin/gmb-sync` | Google My Business |

---

# MERCHANT APPLICATION (164 Pages)

## Base Route: `/merchant`
## Auth Required: Merchant JWT Token + Store ID

---

### M1. CORE & DASHBOARD (6 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantSuperOSDashboard | `/merchant` | `GET /api/merchant/dashboard` | All KPIs, orders, revenue |
| 2 | MerchantDashboard | `/merchant/dashboard-old` | `GET /api/merchant/dashboard` | Legacy dashboard |
| 3 | MerchantProfile | `/merchant/profile` | `GET /api/merchant/profile`<br>`PUT /api/merchant/profile` | Store profile |
| 4 | MerchantSettings | `/merchant/settings` | `GET /api/merchant/settings`<br>`PUT /api/merchant/settings` | Store settings |
| 5 | MerchantMultiStore | `/merchant/multi-store` | `GET /api/merchant/stores` | Multi-store list |
| 6 | MerchantNotifications | `/merchant/notifications` | `GET /api/merchant/notifications` | Notifications |

**Navigation Flow**:
```
MerchantSuperOSDashboard
    ├── Quick Stats (Today's orders, revenue, pending)
    ├── Recent Orders → MerchantOrders
    ├── Low Stock Alerts → MerchantInventory
    └── Sidebar → All sections
```

---

### M2. FINANCIAL & ACCOUNTING (14 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantFinancials | `/merchant/financials` | `GET /api/merchant/financials` | Financial overview |
| 2 | MerchantAccounting | `/merchant/accounting` | `GET /api/merchant/accounting` | Accounting data |
| 3 | MerchantPayments | `/merchant/payments` | `GET /api/merchant/payments` | Payment history |
| 4 | MerchantTransactions | `/merchant/transactions` | `GET /api/merchant/transactions` | All transactions |
| 5 | MerchantWallet | `/merchant/wallet` | `GET /api/merchant/wallet` | Wallet balance |
| 6 | MerchantSettlementEngine | `/merchant/settlement-engine` | `GET /api/merchant/settlements` | Settlements |
| 7 | MerchantProfitLoss | `/merchant/profit-loss` | `GET /api/merchant/pnl` | P&L statement |
| 8 | MerchantExpenseTracker | `/merchant/expense-tracker` | `GET /api/merchant/expenses`<br>`POST /api/merchant/expenses` | Expenses |
| 9 | MerchantCreditLedger | `/merchant/credit-ledger` | `GET /api/merchant/credits` | Credit management |
| 10 | MerchantDaybook | `/merchant/daybook` | `GET /api/merchant/daybook/{date}` | Daily summary |
| 11 | MerchantGSTReports | `/merchant/gst-reports` | `GET /api/merchant/gst` | GST data |
| 12 | MerchantGSTRExport | `/merchant/gstr-export` | `GET /api/merchant/gstr/export` | GSTR export |
| 13 | MerchantTDSTCSReports | `/merchant/tds-tcs-reports` | `GET /api/merchant/tds-tcs` | TDS/TCS |
| 14 | MerchantEInvoice | `/merchant/einvoice` | `POST /api/merchant/einvoice` | E-invoice |

**Navigation Flow**:
```
MerchantFinancials (Overview)
    ├── MerchantPayments (Payment history)
    ├── MerchantTransactions (All transactions)
    ├── MerchantWallet (Balance)
    ├── MerchantProfitLoss (P&L)
    ├── MerchantGSTReports (GST)
    └── MerchantDaybook (Daily)
```

---

### M3. PRODUCTS & INVENTORY (10 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantProducts | `/merchant/products` | `GET /api/merchant/products`<br>`POST /api/merchant/products`<br>`PUT /api/merchant/products/{id}` | Product catalog |
| 2 | MerchantInventory | `/merchant/inventory` | `GET /api/merchant/inventory`<br>`PUT /api/merchant/inventory/{id}` | Stock levels |
| 3 | MerchantInventoryAdvanced | `/merchant/inventory-advanced` | `GET /api/merchant/inventory/advanced` | Advanced features |
| 4 | MerchantProductVariants | `/merchant/product-variants` | `GET /api/merchant/products/{id}/variants`<br>`POST /api/merchant/products/{id}/variants` | Variants |
| 5 | MerchantComboProducts | `/merchant/combo-products` | `GET /api/merchant/combos`<br>`POST /api/merchant/combos` | Bundles |
| 6 | MerchantBulkImport | `/merchant/bulk-import` | `POST /api/merchant/products/bulk` | Bulk import |
| 7 | MerchantExpiryDashboard | `/merchant/expiry-dashboard` | `GET /api/merchant/inventory/expiry` | Expiry alerts |
| 8 | MerchantBatchTracking | `/merchant/batch-tracking` | `GET /api/merchant/inventory/batches` | Batch tracking |
| 9 | MerchantHSNCodes | `/merchant/hsn-codes` | `GET /api/merchant/hsn-codes` | HSN mapping |
| 10 | MerchantStockReconciliation | `/merchant/stock-reconciliation` | `POST /api/merchant/inventory/reconcile` | Stock audit |

**Navigation Flow**:
```
MerchantProducts (Catalog)
    ├── [Add Product] → Product Form
    ├── [Edit Product] → MerchantProductVariants
    ├── MerchantInventory (Stock)
    │   ├── MerchantExpiryDashboard
    │   └── MerchantBatchTracking
    └── MerchantBulkImport (Bulk add)
```

---

### M4. ORDERS & FULFILLMENT (8 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantOrders | `/merchant/orders` | `GET /api/merchant/orders`<br>`PUT /api/merchant/orders/{id}` | Order list |
| 2 | MerchantOrdersMultiChannel | `/merchant/orders-multi-channel` | `GET /api/merchant/orders/multi-channel` | Aggregator orders |
| 3 | MerchantUnifiedOrders | `/merchant/unified-orders` | `GET /api/merchant/orders/unified` | Unified view |
| 4 | MerchantShipping | `/merchant/shipping` | `GET /api/merchant/shipping`<br>`POST /api/merchant/shipping/create` | Shipping |
| 5 | MerchantReturns | `/merchant/returns` | `GET /api/merchant/returns`<br>`PUT /api/merchant/returns/{id}` | Returns/RMA |
| 6 | MerchantDeliveryBridge | `/merchant/delivery-bridge` | `GET /api/merchant/delivery-partners` | Delivery partners |
| 7 | MerchantDayEndReport | `/merchant/day-end-report` | `GET /api/merchant/day-end/{date}` | Daily close |
| 8 | MerchantFailedPayments | `/merchant/failed-payments` | `GET /api/merchant/failed-payments` | Failed payments |

**Navigation Flow**:
```
MerchantOrders (Order list)
    ├── [Order] → Order Detail → Update Status
    ├── MerchantShipping (Ship order)
    ├── MerchantReturns (Process return)
    └── MerchantDayEndReport (End of day)
```

---

### M5. POINT OF SALE (14 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantPOS | `/merchant/pos` | `POST /api/merchant/pos/transaction` | Full POS |
| 2 | MerchantSimplePOS | `/merchant/simple-pos` | `POST /api/merchant/pos/simple` | Simple POS |
| 3 | MerchantOfflinePOS | `/merchant/offline-pos` | `POST /api/merchant/pos/offline` | Offline mode |
| 4 | MerchantSoftPOS | `/merchant/soft-pos` | `POST /api/merchant/pos/soft` | Mobile POS |
| 5 | MerchantCategoryPOS | `/merchant/category-pos` | `POST /api/merchant/pos/category` | Category POS |
| 6 | MerchantPOSIntegration | `/merchant/pos-integration` | `GET /api/merchant/pos/integrations` | External POS |
| 7 | MerchantPOSTransactions | `/merchant/pos-transactions` | `GET /api/merchant/pos/transactions` | POS history |
| 8 | MerchantBarcodeScanner | `/merchant/barcode-scanner` | `GET /api/merchant/products/barcode/{code}` | Barcode lookup |
| 9 | MerchantCashDrawer | `/merchant/cash-drawer` | `GET /api/merchant/cash-drawer`<br>`POST /api/merchant/cash-drawer` | Cash tracking |
| 10 | MerchantTokenDisplay | `/merchant/token-display` | `GET /api/merchant/tokens` | Token queue |
| 11 | MerchantKDS | `/merchant/kds` | `GET /api/merchant/kds/orders` | Kitchen display |
| 12 | MerchantTableManagement | `/merchant/tables` | `GET /api/merchant/tables`<br>`PUT /api/merchant/tables/{id}` | Table status |
| 13 | MerchantQRPayments | `/merchant/qr-payments` | `POST /api/merchant/qr/payment` | QR payments |
| 14 | MerchantQROrdering | `/merchant/qr-ordering` | `GET /api/merchant/qr/orders` | QR orders |

**Navigation Flow**:
```
MerchantPOS (Main POS)
    ├── Scan → MerchantBarcodeScanner
    ├── Tables → MerchantTableManagement
    ├── Kitchen → MerchantKDS
    ├── Cash → MerchantCashDrawer
    └── History → MerchantPOSTransactions
```

---

### M6. OFFERS & PROMOTIONS (14 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantOffers | `/merchant/offers` | `GET /api/merchant/offers`<br>`PUT /api/merchant/offers/{id}` | Offer list |
| 2 | CreateOffer | `/merchant/offers/create` | `POST /api/merchant/offers` | Create offer |
| 3 | MerchantPromotionParticipation | `/merchant/promotion-participation` | `GET /api/merchant/promotions/available`<br>`POST /api/merchant/promotions/join` | Platform promos |
| 4 | MerchantCampaigns | `/merchant/campaigns` | `GET /api/merchant/campaigns`<br>`POST /api/merchant/campaigns` | Campaigns |
| 5 | MerchantFlashDeals | `/merchant/flash-deals` | `GET /api/merchant/flash-deals`<br>`POST /api/merchant/flash-deals` | Flash deals |
| 6 | MerchantExclusiveDeals | `/merchant/exclusive-deals` | `GET /api/merchant/exclusive-deals` | Exclusive |
| 7 | MerchantNearbyOffers | `/merchant/nearby-offers` | `GET /api/merchant/nearby-offers` | Location offers |
| 8 | MerchantTodaysOffers | `/merchant/todays-offers` | `GET /api/merchant/todays-offers` | Daily offers |
| 9 | MerchantBOGOOffers | `/merchant/bogo-offers` | `GET /api/merchant/bogo`<br>`POST /api/merchant/bogo` | BOGO |
| 10 | MerchantBirthdayOffers | `/merchant/birthday-offers` | `GET /api/merchant/birthday-offers` | Birthday promos |
| 11 | MerchantBirthdayRewards | `/merchant/birthday-rewards` | `GET /api/merchant/birthday-rewards` | Birthday rewards |
| 12 | MerchantClearanceSales | `/merchant/clearance-sales` | `GET /api/merchant/clearance` | Clearance |
| 13 | MerchantVouchers | `/merchant/vouchers` | `GET /api/merchant/vouchers`<br>`POST /api/merchant/vouchers` | Vouchers |
| 14 | MerchantDealAnalytics | `/merchant/deal-analytics` | `GET /api/merchant/deals/analytics` | Deal performance |

**Navigation Flow**:
```
MerchantOffers (All offers)
    ├── [Create] → CreateOffer
    ├── MerchantPromotionParticipation (Join platform promos)
    ├── MerchantFlashDeals
    ├── MerchantBOGOOffers
    └── MerchantDealAnalytics (Performance)
```

---

### M7. LOYALTY & PROGRAMS (9 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantLoyalty | `/merchant/loyalty` | `GET /api/merchant/loyalty`<br>`PUT /api/merchant/loyalty` | Loyalty program |
| 2 | MerchantLoyaltyTiers | `/merchant/loyalty-tiers` | `GET /api/merchant/loyalty/tiers`<br>`PUT /api/merchant/loyalty/tiers` | Tier config |
| 3 | MerchantLoyaltyOffers | `/merchant/loyalty-offers` | `GET /api/merchant/loyalty/offers` | Loyalty offers |
| 4 | MerchantMemberships | `/merchant/memberships` | `GET /api/merchant/memberships`<br>`POST /api/merchant/memberships` | Memberships |
| 5 | MerchantCashbackPrograms | `/merchant/cashback-programs` | `GET /api/merchant/cashback`<br>`PUT /api/merchant/cashback` | Cashback rules |
| 6 | MerchantBrandedCoinConfig | `/merchant/branded-coin-config` | `GET /api/merchant/branded-coins`<br>`PUT /api/merchant/branded-coins` | Custom coins |
| 7 | MerchantExclusivePrograms | `/merchant/exclusive-programs` | `GET /api/merchant/exclusive-programs` | VIP programs |
| 8 | MerchantPostPaymentRewards | `/merchant/post-payment-rewards` | `GET /api/merchant/post-payment-rewards` | Post-purchase |
| 9 | MerchantPriveModule | `/merchant/prive-module` | `GET /api/merchant/prive` | Prive dashboard |

---

### M8. CUSTOMER MANAGEMENT (7 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantCustomers | `/merchant/customers` | `GET /api/merchant/customers` | Customer list |
| 2 | MerchantCRM | `/merchant/crm` | `GET /api/merchant/crm` | CRM data |
| 3 | MerchantCustomerIdentity | `/merchant/customer-identity` | `GET /api/merchant/customer-identity` | Identity mgmt |
| 4 | MerchantCustomerSegmentation | `/merchant/customer-segmentation` | `GET /api/merchant/segments` | Segments |
| 5 | MerchantReviewManagement | `/merchant/review-management` | `GET /api/merchant/reviews`<br>`POST /api/merchant/reviews/{id}/respond` | Reviews |
| 6 | MerchantReviews | `/merchant/reviews` | `GET /api/merchant/reviews` | Review list |
| 7 | MerchantWishlistDemand | `/merchant/wishlist-demand` | `GET /api/merchant/wishlist-demand` | Wishlist data |

---

### M9. DEMAND & ANALYTICS (7 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantDemandSignals | `/merchant/demand-signals` | `GET /api/merchant/demand-signals` | Demand insights |
| 2 | MerchantAnalytics | `/merchant/analytics` | `GET /api/merchant/analytics` | Sales analytics |
| 3 | MerchantPerformance | `/merchant/performance` | `GET /api/merchant/performance` | Performance |
| 4 | MerchantBenchmarks | `/merchant/benchmarks` | `GET /api/merchant/benchmarks` | Benchmarks |
| 5 | MerchantPricingIntelligence | `/merchant/pricing-intelligence` | `GET /api/merchant/pricing-intelligence` | Pricing data |
| 6 | MerchantPriceEngineering | `/merchant/price-engineering` | `GET /api/merchant/price-engineering` | Dynamic pricing |
| 7 | MerchantDiscovery | `/merchant/discovery` | `GET /api/merchant/discovery` | Discovery settings |

---

### M10. MARKETING (10 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantMarketing | `/merchant/marketing` | `GET /api/merchant/marketing` | Marketing hub |
| 2 | MerchantMarketingCampaigns | `/merchant/marketing-campaigns` | `GET /api/merchant/marketing/campaigns`<br>`POST /api/merchant/marketing/campaigns` | Campaigns |
| 3 | MerchantUnifiedMarketing | `/merchant/unified-marketing` | `GET /api/merchant/marketing/unified` | Unified view |
| 4 | MerchantMetaAdsManager | `/merchant/meta-ads` | `GET /api/merchant/ads/meta`<br>`POST /api/merchant/ads/meta` | Meta ads |
| 5 | MerchantGoogleAdsManager | `/merchant/google-ads` | `GET /api/merchant/ads/google`<br>`POST /api/merchant/ads/google` | Google ads |
| 6 | MerchantOfflineMarketing | `/merchant/offline-marketing` | `GET /api/merchant/marketing/offline` | Offline |
| 7 | MerchantUGCCampaigns | `/merchant/ugc-campaigns` | `GET /api/merchant/ugc`<br>`POST /api/merchant/ugc` | UGC campaigns |
| 8 | MerchantContent | `/merchant/content` | `GET /api/merchant/content` | Content |
| 9 | MerchantCreatorHub | `/merchant/creator-hub` | `GET /api/merchant/creators` | Creator collab |
| 10 | MerchantContestBuilder | `/merchant/contest-builder` | `GET /api/merchant/contests`<br>`POST /api/merchant/contests` | Contests |

---

### M11. STAFF & OPERATIONS (8 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantTeamManagement | `/merchant/team-management` | `GET /api/merchant/team`<br>`POST /api/merchant/team` | Team members |
| 2 | MerchantStaff | `/merchant/staff` | `GET /api/merchant/staff` | Staff list |
| 3 | MerchantStaffRoster | `/merchant/staff-roster` | `GET /api/merchant/staff/roster`<br>`PUT /api/merchant/staff/roster` | Scheduling |
| 4 | MerchantUserRoles | `/merchant/user-roles` | `GET /api/merchant/roles`<br>`PUT /api/merchant/roles` | Role config |
| 5 | MerchantPayroll | `/merchant/payroll` | `GET /api/merchant/payroll` | Payroll |
| 6 | MerchantSalesmanCommission | `/merchant/salesman-commission` | `GET /api/merchant/commissions` | Commissions |
| 7 | MerchantShiftManagement | `/merchant/shift-management` | `GET /api/merchant/shifts`<br>`PUT /api/merchant/shifts` | Shifts |
| 8 | MerchantBranchManager | `/merchant/branches` | `GET /api/merchant/branches` | Branches |

---

### M12. SERVICES & BOOKINGS (8 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantAppointments | `/merchant/appointments` | `GET /api/merchant/appointments`<br>`PUT /api/merchant/appointments/{id}` | Appointments |
| 2 | MerchantServiceCatalog | `/merchant/service-catalog` | `GET /api/merchant/services`<br>`POST /api/merchant/services` | Services |
| 3 | MerchantBookingCalendar | `/merchant/booking-calendar` | `GET /api/merchant/bookings/calendar` | Calendar |
| 4 | MerchantClassSchedule | `/merchant/class-schedule` | `GET /api/merchant/classes`<br>`POST /api/merchant/classes` | Classes |
| 5 | MerchantEvents | `/merchant/events` | `GET /api/merchant/events`<br>`POST /api/merchant/events` | Events |
| 6 | MerchantEventCheckIn | `/merchant/event-checkin` | `POST /api/merchant/events/{id}/checkin` | Check-in |
| 7 | MerchantSalonPackages | `/merchant/salon-packages` | `GET /api/merchant/packages` | Packages |
| 8 | MerchantPrescriptions | `/merchant/prescriptions` | `GET /api/merchant/prescriptions` | Rx management |

---

### M13. INTEGRATIONS (10 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantIntegrations | `/merchant/integrations` | `GET /api/merchant/integrations` | Integrations |
| 2 | MerchantIntegrationHub | `/merchant/integration-hub` | `GET /api/merchant/integration-hub` | Hub |
| 3 | MerchantIntegrationHealth | `/merchant/integration-health` | `GET /api/merchant/integrations/health` | Health status |
| 4 | MerchantAggregatorBridge | `/merchant/aggregator-bridge` | `GET /api/merchant/aggregators` | Aggregators |
| 5 | MerchantAggregatorReconciliation | `/merchant/aggregator-reconciliation` | `GET /api/merchant/aggregators/reconciliation` | Reconciliation |
| 6 | MerchantERPConnector | `/merchant/erp-connector` | `GET /api/merchant/erp` | ERP |
| 7 | MerchantDeliveryBridge | `/merchant/delivery-bridge` | `GET /api/merchant/delivery` | Delivery |
| 8 | MerchantWhatsAppBusiness | `/merchant/whatsapp-business` | `GET /api/merchant/whatsapp` | WhatsApp |
| 9 | MerchantHardwareHub | `/merchant/hardware-hub` | `GET /api/merchant/hardware` | Hardware |
| 10 | MerchantCalendarSync | `/merchant/calendar-sync` | `GET /api/merchant/calendar-sync` | Calendar |

---

### M14. COMPLIANCE & DOCUMENTS (6 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantCompliance | `/merchant/compliance` | `GET /api/merchant/compliance` | Compliance |
| 2 | MerchantTaxCompliance | `/merchant/tax-compliance` | `GET /api/merchant/tax-compliance` | Tax |
| 3 | MerchantDocuments | `/merchant/documents` | `GET /api/merchant/documents`<br>`POST /api/merchant/documents` | Documents |
| 4 | MerchantInvoiceScanner | `/merchant/invoice-scanner` | `POST /api/merchant/invoice/scan` | OCR |
| 5 | MerchantClinicInsurance | `/merchant/clinic-insurance` | `GET /api/merchant/insurance` | Insurance |
| 6 | MerchantTrustScoreDetail | `/merchant/trust-score` | `GET /api/merchant/trust-score` | Trust score |

---

### M15. SUPPLIES & PROCUREMENT (5 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantSuppliersProcurement | `/merchant/suppliers-procurement` | `GET /api/merchant/suppliers`<br>`POST /api/merchant/suppliers` | Suppliers |
| 2 | MerchantSupplierReturns | `/merchant/supplier-returns` | `GET /api/merchant/supplier-returns`<br>`POST /api/merchant/supplier-returns` | Returns |
| 3 | MerchantPurchaseOrders | `/merchant/purchase-orders` | `GET /api/merchant/purchase-orders`<br>`POST /api/merchant/purchase-orders` | POs |
| 4 | MerchantStoreTransfer | `/merchant/store-transfer` | `POST /api/merchant/store-transfer` | Transfers |
| 5 | MerchantQuotations | `/merchant/quotations` | `GET /api/merchant/quotations`<br>`POST /api/merchant/quotations` | Quotations |

---

### M16. ADVANCED FEATURES (14 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantAutopilot | `/merchant/autopilot` | `GET /api/merchant/autopilot`<br>`PUT /api/merchant/autopilot` | Automation |
| 2 | MerchantControlPlane | `/merchant/control-plane` | `GET /api/merchant/control-plane` | Control |
| 3 | MerchantRushHourMode | `/merchant/rush-hour-mode` | `PUT /api/merchant/rush-hour` | Rush mode |
| 4 | MerchantPowerSurvival | `/merchant/power-survival` | `GET /api/merchant/power-survival` | Power backup |
| 5 | MerchantDataExport | `/merchant/data-export` | `GET /api/merchant/export/{type}` | Export |
| 6 | MerchantPrintTemplates | `/merchant/print-templates` | `GET /api/merchant/print-templates`<br>`PUT /api/merchant/print-templates` | Templates |
| 7 | MerchantBillManagement | `/merchant/bill-management` | `GET /api/merchant/bills` | Bills |
| 8 | MerchantBillHold | `/merchant/bill-hold` | `POST /api/merchant/bills/{id}/hold` | Hold |
| 9 | MerchantBillSplitting | `/merchant/bill-splitting` | `POST /api/merchant/bills/{id}/split` | Split |
| 10 | MerchantTipsConfig | `/merchant/tips-config` | `GET /api/merchant/tips`<br>`PUT /api/merchant/tips` | Tips |
| 11 | MerchantPaymentLinks | `/merchant/payment-links` | `POST /api/merchant/payment-links` | Links |
| 12 | MerchantPaymentReminders | `/merchant/payment-reminders` | `GET /api/merchant/payment-reminders` | Reminders |
| 13 | MerchantPaymentIntents | `/merchant/payment-intents` | `GET /api/merchant/payment-intents` | Intents |
| 14 | MerchantRecipeCosting | `/merchant/recipe-costing` | `GET /api/merchant/recipes`<br>`POST /api/merchant/recipes` | Recipes |

---

### M17. ONBOARDING (4 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantSignup | `/merchant/signup` | `POST /api/merchant/signup` | Registration |
| 2 | MerchantBusinessDetails | `/merchant/business-details` | `POST /api/merchant/business-details` | Business info |
| 3 | MerchantQuickOnboarding | `/merchant/quick-onboarding` | `POST /api/merchant/quick-setup` | 10-min setup flow, photo/Excel/WhatsApp menu upload |
| 4 | MerchantSuccess | `/merchant/success` | - | Success page |

---

### M18. CRITICAL ADOPTION FEATURES (8 Pages) - NEW

These pages address the **top 10 tech blockers** that make merchants reject POS systems.

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantOfflinePOSSync | `/merchant/offline-sync` | `GET /api/merchant/sync/status`<br>`POST /api/merchant/sync/force`<br>`GET /api/merchant/sync/pending`<br>`POST /api/merchant/sync/resolve-conflict` | Pending transactions, inventory updates, coin redemptions, offer claims, sync history, conflicts |
| 2 | MerchantHardwareDiagnostics | `/merchant/hardware-diagnostics` | `GET /api/merchant/hardware/devices`<br>`POST /api/merchant/hardware/test/{deviceId}`<br>`GET /api/merchant/hardware/certified` | Connected devices, test results, certified hardware list, troubleshooting guides |
| 3 | MerchantStockVarianceReport | `/merchant/stock-variance` | `GET /api/merchant/inventory/variance`<br>`POST /api/merchant/inventory/reconcile`<br>`GET /api/merchant/inventory/audit-log` | System vs actual stock, variance items, correction history, daily variance reports |
| 4 | MerchantGSTSetupWizard | `/merchant/gst-setup` | `POST /api/merchant/gst/verify`<br>`GET /api/merchant/gst/hsn-suggestions`<br>`PUT /api/merchant/gst/config`<br>`GET /api/merchant/gst/invoice-preview` | GSTIN verification, business type, category HSN codes, invoice settings |
| 5 | MerchantProfitView | `/merchant/profit-view` | `GET /api/merchant/profit/daily`<br>`GET /api/merchant/profit/weekly`<br>`POST /api/merchant/profit/whatsapp-report` | Sales, commission, coins, net profit, daily/weekly charts |
| 6 | MerchantSupportHub | `/merchant/support-hub` | `POST /api/merchant/support/callback`<br>`GET /api/merchant/support/tickets`<br>`GET /api/merchant/support/concierge` | Support options, ticket history, concierge info, quick help links |
| 7 | MerchantStaffActivityLog | `/merchant/staff-activity` | `GET /api/merchant/staff/activity`<br>`POST /api/merchant/staff/undo/{actionId}`<br>`GET /api/merchant/staff/flagged` | Staff actions, undo-able items, flagged actions, audit trail |
| 8 | MerchantGSTSetupWizard | `/merchant/gst-setup` | (See above) | GST compliance wizard |

**Navigation Flow**:
```
MerchantSuperOSDashboard
    ├── Quick Profit → MerchantProfitView
    ├── Sync Status → MerchantOfflinePOSSync
    ├── Hardware → MerchantHardwareDiagnostics
    ├── Stock Audit → MerchantStockVarianceReport
    ├── GST Setup → MerchantGSTSetupWizard
    ├── Help → MerchantSupportHub
    └── Staff Log → MerchantStaffActivityLog
```

**Critical Features Addressed**:
| Blocker | Solution |
|---------|----------|
| POS freezes offline | MerchantOfflinePOSSync - Local-first with sync queue |
| Printer not working | MerchantHardwareDiagnostics - Test buttons, certified list |
| Stock mismatch | MerchantStockVarianceReport - Variance tracking, audit log |
| GST confusion | MerchantGSTSetupWizard - 4-step wizard, auto HSN |
| Complex setup | MerchantQuickOnboarding - 10-min flow, skip option |
| No profit view | MerchantProfitView - Sales-Commission-Coins=Profit |
| No human help | MerchantSupportHub - WhatsApp, callback, concierge |
| Staff mistakes | MerchantStaffActivityLog - Undo window, audit trail |

---

### M19. ADZY MARKETING HUB (1 Page) - NEW

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | MerchantAdzyHub | `/merchant/adzy-hub` | `GET /api/merchant/adzy/campaigns`<br>`POST /api/merchant/adzy/campaigns`<br>`GET /api/merchant/adzy/templates`<br>`GET /api/merchant/adzy/analytics` | Campaign management, templates, performance metrics |

**Features**:
- Quick campaign templates (Flash Deal, Coin Boost, New Customers)
- Budget management and spend tracking
- Performance analytics (CTR, ROAS, conversions)
- Closed-loop ecosystem advertising
- AI-powered campaign suggestions

---

# ADMIN ADZY & RABTUL MODULES (7 Pages) - NEW

## Adzy (Marketing Exchange)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | AdzyDashboard | `/admin/adzy-dashboard` | `GET /api/admin/adzy/overview`<br>`GET /api/admin/adzy/channels` | Platform metrics, channel performance, money flow |
| 2 | AdzyAdInventory | `/admin/adzy-inventory` | `GET /api/admin/adzy/inventory/digital`<br>`GET /api/admin/adzy/inventory/physical`<br>`POST /api/admin/adzy/inventory/placement` | Digital placements, physical screens, partner stores |

**Adzy Features**:
- Closed-loop ad economy (100% spend stays in ecosystem)
- Digital placements (in-app, push, SMS, email)
- Physical screens (malls, stores, transit)
- Partner store display networks
- Real-time ROAS tracking

## Rabtul (Infrastructure Layer)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | RabtulDashboard | `/admin/rabtul-dashboard` | `GET /api/admin/rabtul/health`<br>`GET /api/admin/rabtul/services` | Service health, connected apps, architecture overview |
| 2 | RabtulAPIGateway | `/admin/rabtul-api-gateway` | `GET /api/admin/rabtul/gateway/stats`<br>`GET /api/admin/rabtul/gateway/clients`<br>`PUT /api/admin/rabtul/gateway/rate-limits` | API traffic, clients, rate limiting, endpoints |
| 3 | RabtulAIRAEngine | `/admin/rabtul-aira` | `GET /api/admin/rabtul/aira/models`<br>`POST /api/admin/rabtul/aira/train` | AI models, personalization metrics, inference stats |
| 4 | RabtulCoinLedger | `/admin/rabtul-coins` | `GET /api/admin/rabtul/coins/supply`<br>`GET /api/admin/rabtul/coins/transactions`<br>`POST /api/admin/rabtul/coins/mint` | Cross-app coin sync, economy overview, transaction ledger |

**Rabtul Services**:
- Auth Service (JWT, SSO, RBAC)
- Payment Service (UPI, Cards, Wallets)
- Coin Ledger (cross-app sync)
- AIRA Engine (8 AI models for personalization)
- API Gateway (unified entry point)
- Notification Hub (push, SMS, email, WhatsApp)
- Fraud Detection (real-time ML scoring)

---

# USER APPLICATION (261 Pages)

## Base Route: `/`
## Auth Required: User JWT Token (some pages public)

---

### U1. MAIN NAVIGATION (8 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | Home | `/` | `GET /api/user/home` | Featured, categories, banners |
| 2 | Explore | `/explore` | `GET /api/user/explore` | Discover content |
| 3 | Categories | `/categories` | `GET /api/user/categories` | Category list |
| 4 | StoreHub | `/stores` | `GET /api/user/stores` | Store directory |
| 5 | Wallet | `/wallet` | `GET /api/user/wallet` | Balance, coins, history |
| 6 | Offers | `/offers` | `GET /api/user/offers` | Available offers |
| 7 | Profile | `/profile` | `GET /api/user/profile`<br>`PUT /api/user/profile` | User profile |
| 8 | NotificationsCenter | `/notifications-center` | `GET /api/user/notifications` | Notifications |

---

### U2. SHOPPING & DEALS (12 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | DealStore | `/deal-store` | `GET /api/user/deals` | Deals list |
| 2 | OfferDetail | `/offers/:id` | `GET /api/user/offers/{id}` | Offer details |
| 3 | PromotionsFeed | `/promotions` | `GET /api/user/promotions` | Promotions |
| 4 | CashStore | `/cash-store` | `GET /api/user/cashback` | Cashback offers |
| 5 | RezMall | `/mall` | `GET /api/user/mall` | Mall products |
| 6 | Cart | `/cart` | `GET /api/user/cart`<br>`PUT /api/user/cart` | Cart items |
| 7 | ProductComparison | `/compare` | `GET /api/user/compare` | Comparison |
| 8 | EnhancedWishlist | `/wishlist-enhanced` | `GET /api/user/wishlist` | Wishlist |
| 9 | SearchResults | `/search` | `GET /api/user/search?q={query}` | Search results |
| 10 | StorePage | `/store/:id` | `GET /api/user/stores/{id}` | Store detail |
| 11 | ProductServicePage | `/product/:id` | `GET /api/user/products/{id}` | Product detail |
| 12 | SuperDeals | `/super-deals` | `GET /api/user/super-deals` | Super deals |

---

### U3. DEMAND & REQUESTS (1 Page)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | UserDemandRequests | `/demand-requests` | `GET /api/user/demand-requests`<br>`POST /api/user/demand-requests` | User requests |

---

### U4. EARNING & REWARDS (14 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | Earn | `/earn` | `GET /api/user/earn` | Earn opportunities |
| 2 | Achievements | `/earn/achievements` | `GET /api/user/achievements` | Achievements |
| 3 | Leaderboard | `/earn/leaderboard` | `GET /api/user/leaderboard` | Leaderboard |
| 4 | CoinHunt | `/earn/coin-hunt` | `GET /api/user/coin-hunt` | Coin hunt |
| 5 | ScratchCard | `/earn/scratch-card` | `POST /api/user/scratch-card` | Scratch cards |
| 6 | Surveys | `/earn/surveys` | `GET /api/user/surveys` | Surveys |
| 7 | PlayGames | `/earn/play` | `GET /api/user/games` | Games |
| 8 | ReferEarn | `/earn/refer` | `GET /api/user/referral` | Referral |
| 9 | WriteReviews | `/earn/reviews` | `GET /api/user/review-opportunities` | Review earn |
| 10 | DailyCheckin | `/explore/daily-checkin` | `POST /api/user/daily-checkin` | Check-in |
| 11 | CoinHistory | `/coin-history` | `GET /api/user/coins/history` | Coin history |
| 12 | ReferralDashboard | `/referral` | `GET /api/user/referral/dashboard` | Referral stats |
| 13 | LoyaltyRewardsHub | `/loyalty-rewards` | `GET /api/user/loyalty` | Loyalty hub |
| 14 | GamificationHub | `/achievements` | `GET /api/user/gamification` | Gamification |

---

### U5. CONTENT & SOCIAL (7 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | Reels | `/reels` | `GET /api/user/reels` | Video reels |
| 2 | SocialFeed | `/social-feed` | `GET /api/user/social-feed` | Social content |
| 3 | SocialHub | `/social-hub` | `GET /api/user/social` | Social features |
| 4 | CreatorStoreHome | `/creators` | `GET /api/user/creators` | Creator store |
| 5 | CreatorsAll | `/creators/all` | `GET /api/user/creators/all` | All creators |
| 6 | CreatorProfile | `/creators/:username` | `GET /api/user/creators/{username}` | Creator profile |
| 7 | FleaMarket | `/flea-market` | `GET /api/user/flea-market` | P2P market |

---

### U6. PAYMENTS & QR (4 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | QRScanner | `/qr-scanner` | `POST /api/user/qr/scan` | QR scan |
| 2 | ScanPay | `/scan` | `POST /api/user/scan-pay` | Scan & pay |
| 3 | PayInStore | `/pay-in-store` | `POST /api/user/pay-in-store` | In-store pay |
| 4 | PaymentGateway | `/payment` | `POST /api/user/payment` | Payment process |

---

### U7. ORDERS & BOOKINGS (9 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | OrderHistory | `/orders` | `GET /api/user/orders` | Order history |
| 2 | OrderDetail | `/order/:orderId` | `GET /api/user/orders/{id}` | Order detail |
| 3 | Bookings | `/bookings` | `GET /api/user/bookings` | Bookings |
| 4 | EventTicketing | `/event-ticketing` | `GET /api/user/events` | Event tickets |
| 5 | MyTickets | `/my-tickets` | `GET /api/user/tickets` | My tickets |
| 6 | TicketDetail | `/ticket/:ticketId` | `GET /api/user/tickets/{id}` | Ticket detail |
| 7 | TableReservation | `/table-reservation` | `POST /api/user/table-reservation` | Table booking |
| 8 | ServiceBookingPage | `/booking/:id` | `POST /api/user/service-booking` | Service booking |
| 9 | BillSplitting | `/bill-split/:orderId` | `POST /api/user/bill-split` | Bill split |

---

### U8. CATEGORY VERTICALS (11 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | Fashion | `/fashion` | `GET /api/user/categories/fashion` | Fashion items |
| 2 | Beauty | `/beauty` | `GET /api/user/categories/beauty` | Beauty items |
| 3 | Grocery | `/grocery` | `GET /api/user/categories/grocery` | Grocery items |
| 4 | Healthcare | `/healthcare` | `GET /api/user/categories/healthcare` | Healthcare |
| 5 | Fitness | `/fitness` | `GET /api/user/categories/fitness` | Fitness |
| 6 | HomeServices | `/home-services` | `GET /api/user/categories/home-services` | Home services |
| 7 | Financial | `/financial` | `GET /api/user/categories/financial` | Financial |
| 8 | Events | `/events` | `GET /api/user/events` | Events |
| 9 | FoodDining | `/food` | `GET /api/user/categories/food` | Food |
| 10 | Travel | `/travel` | `GET /api/user/categories/travel` | Travel |
| 11 | Lifestyle | `/lifestyle` | `GET /api/user/lifestyle` | Lifestyle hub |

---

### U9. TRUST & COMPLIANCE (6 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | TrustPassport | `/trust-passport` | `GET /api/user/trust-passport` | Trust status |
| 2 | KYCStatus | `/kyc-status` | `GET /api/user/kyc` | KYC status |
| 3 | DisputeCenter | `/disputes` | `GET /api/user/disputes`<br>`POST /api/user/disputes` | Disputes |
| 4 | SecurityAlerts | `/security` | `GET /api/user/security-alerts` | Security |
| 5 | InsuranceCoverage | `/insurance` | `GET /api/user/insurance` | Insurance |
| 6 | TrustCredit | `/trust-credit` | `GET /api/user/trust-credit` | Trust credit |

---

### U10. AUTHENTICATION (7 Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | Login | `/login` | `POST /api/auth/login` | Login |
| 2 | Signup | `/signup` | `POST /api/auth/signup` | Register |
| 3 | OTPVerify | `/otp-verify` | `POST /api/auth/verify-otp` | OTP verify |
| 4 | Onboarding | `/onboarding` | `PUT /api/user/onboarding` | Onboarding |
| 5 | Splash | `/splash` | - | Splash |
| 6 | Privacy | `/privacy` | - | Privacy policy |
| 7 | Terms | `/terms` | - | Terms |

---

### U11. PRIVE SECTION (40 Pages)

#### Entry & Core
| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | PriveHome | `/prive` | `GET /api/prive/home` | Dashboard |
| 2 | PriveEligibility | `/prive/eligibility` | `GET /api/prive/eligibility` | Eligibility |
| 3 | PrivePrivileges | `/prive/privileges` | `GET /api/prive/privileges` | Privileges |
| 4 | PriveTierProgress | `/prive/tier-progress` | `GET /api/prive/tier` | Tier progress |
| 5 | PriveNotifications | `/prive/notifications` | `GET /api/prive/notifications` | Notifications |

#### Exploration
| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 6 | PriveExplore | `/prive/explore` | `GET /api/prive/explore` | Explore |
| 7 | PriveStoreDetail | `/prive/store/:storeId` | `GET /api/prive/stores/{id}` | Store |

#### Offers & Campaigns
| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 8 | PriveOffersFeed | `/prive/offers-feed` | `GET /api/prive/offers` | Offers |
| 9 | PriveOfferDetail | `/prive/offer/:offerId` | `GET /api/prive/offers/{id}` | Offer detail |
| 10 | PriveBrandInvitation | `/prive/invitation/:invitationId` | `GET /api/prive/invitations/{id}` | Invitation |
| 11 | PriveCampaignTask | `/prive/campaign/:campaignId` | `GET /api/prive/campaigns/{id}` | Campaign |
| 12 | PriveCampaignStatus | `/prive/campaign-status/:campaignId` | `GET /api/prive/campaigns/{id}/status` | Status |

#### Redemption
| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 13 | PriveRedeem | `/prive/redeem` | `GET /api/prive/redeem` | Redeem hub |
| 14 | PriveGiftCards | `/prive/gift-cards` | `GET /api/prive/gift-cards` | Gift cards |
| 15 | PriveGiftCardDetail | `/prive/gift-card/:cardId` | `GET /api/prive/gift-cards/{id}` | Card detail |
| 16 | PriveExperiences | `/prive/experiences` | `GET /api/prive/experiences` | Experiences |
| 17 | PriveExperienceDetail | `/prive/experience/:experienceId` | `GET /api/prive/experiences/{id}` | Experience |
| 18 | PrivePartnerPrivileges | `/prive/partner-privileges` | `GET /api/prive/partner-privileges` | Partners |
| 19 | PriveCheckout | `/prive/checkout` | `POST /api/prive/checkout` | Checkout |
| 20 | PriveBooking | `/prive/booking` | `POST /api/prive/booking` | Booking |
| 21 | PriveRedemptionHistory | `/prive/redemption-history` | `GET /api/prive/redemption-history` | History |

#### Influence & Earnings
| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 22 | PriveInfluence | `/prive/influence` | `GET /api/prive/influence` | Influence |
| 23 | PriveInfluenceHub | `/prive/influence-hub` | `GET /api/prive/influence-hub` | Hub |
| 24 | PriveEarnings | `/prive/earnings` | `GET /api/prive/earnings` | Earnings |
| 25 | PriveScoreBreakdown | `/prive/score-breakdown` | `GET /api/prive/score` | Score |
| 26 | PriveContentPerformance | `/prive/content-performance/:contentId` | `GET /api/prive/content/{id}/performance` | Content stats |
| 27 | PriveContentGuidelines | `/prive/content-guidelines` | `GET /api/prive/content-guidelines` | Guidelines |

#### Profile
| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 28 | PriveProfile | `/prive/profile` | `GET /api/prive/profile` | Profile |
| 29 | PriveRecognition | `/prive/recognition` | `GET /api/prive/recognition` | Recognition |
| 30 | PriveAuthority | `/prive/authority` | `GET /api/prive/authority` | Authority |
| 31 | PriveVisibilityControl | `/prive/visibility` | `GET /api/prive/visibility`<br>`PUT /api/prive/visibility` | Visibility |
| 32 | PriveActivityStatement | `/prive/statement` | `GET /api/prive/statement` | Statement |
| 33 | PriveInvitations | `/prive/invitations` | `GET /api/prive/invitations` | Invitations |
| 34 | PriveSettings | `/prive/settings` | `GET /api/prive/settings`<br>`PUT /api/prive/settings` | Settings |
| 35 | PriveActivity | `/prive/activity` | `GET /api/prive/activity` | Activity |
| 36 | PriveExit | `/prive/exit` | `POST /api/prive/exit` | Exit |

---

### U12. ADDITIONAL PAGES (20+ Pages)

| # | Page | Route | API Endpoints | Data Required |
|---|------|-------|---------------|---------------|
| 1 | Settings | `/settings` | `GET /api/user/settings`<br>`PUT /api/user/settings` | Settings |
| 2 | Help | `/help` | `GET /api/user/help` | Help content |
| 3 | HowRezWorks | `/how-rez-works` | - | Static content |
| 4 | CoinSystemGuide | `/coin-system` | - | Static content |
| 5 | SavingsTracker | `/savings-tracker` | `GET /api/user/savings` | Savings |
| 6 | SavingsDashboard | `/savings` | `GET /api/user/savings/dashboard` | Dashboard |
| 7 | Missions | `/missions` | `GET /api/user/missions` | Missions |
| 8 | NewArrivals | `/new` | `GET /api/user/new-arrivals` | New items |
| 9 | PopularStores | `/popular` | `GET /api/user/popular-stores` | Popular |
| 10 | PrescriptionHistory | `/prescriptions` | `GET /api/user/prescriptions` | Rx history |
| 11 | PriceLedger | `/price-ledger` | `GET /api/user/price-ledger` | Price history |
| 12 | ContentSubmissionTracker | `/my-content` | `GET /api/user/content` | My content |
| 13 | Wishlist | `/wishlist` | `GET /api/user/wishlist` | Wishlist |
| 14 | Deals | `/deals` | `GET /api/user/deals` | Deals |
| 15 | Electronics | `/electronics` | `GET /api/user/categories/electronics` | Electronics |
| 16 | RezPrive | `/exclusive/prive` | `GET /api/prive/overview` | Prive intro |

---

# API ENDPOINTS REQUIRED

## Summary by Service

| Service | Endpoint Count | Base Path |
|---------|---------------|-----------|
| Auth Service | 10 | `/api/auth/*` |
| Admin Service | 150+ | `/api/admin/*` |
| Merchant Service | 120+ | `/api/merchant/*` |
| User Service | 80+ | `/api/user/*` |
| Prive Service | 40+ | `/api/prive/*` |
| Shared Services | 20+ | `/api/shared/*` |

---

## Shared Services (All Apps Use)

| Service | Endpoints |
|---------|-----------|
| Auth | `POST /api/auth/login`<br>`POST /api/auth/signup`<br>`POST /api/auth/verify-otp`<br>`POST /api/auth/refresh`<br>`POST /api/auth/logout` |
| Coins | `GET /api/shared/coins/balance`<br>`GET /api/shared/coins/history`<br>`POST /api/shared/coins/earn`<br>`POST /api/shared/coins/redeem` |
| Payments | `POST /api/shared/payments/initiate`<br>`POST /api/shared/payments/verify`<br>`GET /api/shared/payments/status/{id}` |
| Notifications | `GET /api/shared/notifications`<br>`PUT /api/shared/notifications/{id}/read`<br>`POST /api/shared/notifications/subscribe` |
| Storage | `POST /api/shared/upload`<br>`GET /api/shared/files/{id}` |

---

# DATA FLOW BETWEEN APPS

```
┌──────────────────────────────────────────────────────────────────────────┐
│                         DATA FLOW DIAGRAM                                 │
└──────────────────────────────────────────────────────────────────────────┘

ADMIN APP                    MERCHANT APP                   USER APP
─────────                    ────────────                   ────────
    │                             │                             │
    │ Create Promotion            │                             │
    ├────────────────────────────►│                             │
    │                             │ View Invitation             │
    │                             │                             │
    │                             │ Accept/Decline              │
    │◄────────────────────────────┤                             │
    │                             │                             │
    │                             │ Set Discount                │
    │                             │                             │
    │                             ├────────────────────────────►│
    │                             │              See Promotion  │
    │                             │                             │
    │                             │◄────────────────────────────┤
    │                             │              Place Order    │
    │                             │                             │
    │◄────────────────────────────┼─────────────────────────────┤
    │     Analytics & Reports     │                             │
    │                             │                             │

─────────────────────────────────────────────────────────────────────────

GOVERNANCE FLOW:
    ADMIN                    MERCHANT                     USER
    ─────                    ────────                     ────
    │ Set Rules                  │                          │
    ├───────────────────────────►│                          │
    │                            │ View Permissions          │
    │                            │                          │
    │                            │ Create Offer (validated) │
    │◄───────────────────────────┤                          │
    │ Approve/Reject             │                          │
    ├───────────────────────────►│                          │
    │                            │                          │
    │                            ├─────────────────────────►│
    │                            │              See Offer   │

─────────────────────────────────────────────────────────────────────────

DEMAND FLOW:
    USER                     MERCHANT                    ADMIN
    ────                     ────────                    ─────
    │ Request Product            │                          │
    ├───────────────────────────►│                          │
    │                            │ See Demand Signal        │
    │                            │                          │
    │                            │ Add Product              │
    │                            │                          │
    │◄───────────────────────────┤                          │
    │ See New Product            │                          │
    │                            │                          │
    │                            ├─────────────────────────►│
    │                            │              Analytics   │
```

---

# AUTHENTICATION & AUTHORIZATION

## Token Structure

```json
{
  "admin_token": {
    "user_id": "admin_123",
    "role": "zone_admin",
    "zone_id": "north",
    "permissions": ["read", "write", "approve"],
    "exp": 1234567890
  },
  "merchant_token": {
    "user_id": "merchant_456",
    "store_id": "store_789",
    "tier": "gold",
    "permissions": ["pos", "inventory", "offers"],
    "exp": 1234567890
  },
  "user_token": {
    "user_id": "user_012",
    "tier": "prive",
    "prive_level": "gold",
    "exp": 1234567890
  }
}
```

## Permission Matrix

| Role | Admin App | Merchant App | User App |
|------|-----------|--------------|----------|
| HQ Admin | Full Access | View Only | View Only |
| Zone Admin | Zone Scope | Zone Merchants | - |
| Store Owner | - | Full Access | - |
| Store Staff | - | Limited | - |
| Prive User | - | - | Full + Prive |
| Regular User | - | - | Standard |

---

## Database Schema Suggestions

### Core Tables

```
Users
├── id, email, phone, name, tier, created_at
├── auth_provider, password_hash
└── kyc_status, trust_score

Merchants
├── id, user_id, store_name, tier, zone_id
├── category, address, coordinates
└── status, trust_score, settlement_config

Products
├── id, merchant_id, name, category
├── price, inventory, variants
└── status, created_at

Orders
├── id, user_id, merchant_id
├── items, total, status
├── payment_status, delivery_status
└── created_at, updated_at

Promotions
├── id, created_by (admin)
├── type, discount_range, zones
├── merchant_participation[]
└── start_date, end_date, status

Coins
├── id, user_id, balance
├── transactions[]
└── expiry_buckets[]

Prive_Members
├── id, user_id, tier
├── eligibility_score, influence_score
├── campaigns_participated[]
└── earnings, redemptions
```

---

# MERCHANT PACKAGE TIERS

## Overview

ReZ offers 4 merchant subscription tiers based on marketing spend commitment. Each tier provides different commission rates and benefits.

---

## Tier Comparison Table

| Feature | Free | Basic | Golden | Diamond |
|---------|------|-------|--------|---------|
| **Marketing Spend** | ₹0 | ₹10,000/mo | ₹30,000/mo | ₹100,000+/mo |
| **Commission (Fixed)** | 20% | 18% | 17% | 15% |
| **ReZ Coin Allocation** | 5-10% | 5-10% | 5-10% | 5-10% |
| **Platform Revenue** | 10-15% | 8-13% | 7-12% | 5-10% |
| **Brand Coin (Optional)** | 0-10% | 0-10% | 0-10% | 0-10% |
| **Prive Coin (Optional)** | 5-100% | 5-100% | 5-100% | 5-100% |
| **Subscription Fee** | ₹0/₹499* | ₹0/₹499* | ₹0/₹499* | ₹0/₹499* |

*\*Subscription: ₹0 if monthly sales > ₹100,000 INR, else ₹499/month*

---

## Detailed Tier Breakdown

### 🆓 FREE TIER

| Component | Value |
|-----------|-------|
| Marketing Spend Required | ₹0 |
| **Commission Structure** | |
| └─ Fixed Commission | 20% |
| └─ ReZ Coin Allocation | 5-10% |
| └─ Platform Revenue (Ours) | 10-15% |
| **Optional Allocations** | |
| └─ Brand Coin | 0-10% |
| └─ Prive Coin | 5-100% |
| **Subscription Fee** | |
| └─ Monthly Sales > ₹100k | ₹0 |
| └─ Monthly Sales < ₹100k | ₹499 |

**Best For**: New merchants, small businesses, testing the platform

---

### 📦 BASIC TIER

| Component | Value |
|-----------|-------|
| Marketing Spend Required | ₹10,000/month |
| **Commission Structure** | |
| └─ Fixed Commission | 18% |
| └─ ReZ Coin Allocation | 5-10% |
| └─ Platform Revenue (Ours) | 8-13% |
| **Optional Allocations** | |
| └─ Brand Coin | 0-10% |
| └─ Prive Coin | 5-100% |
| **Subscription Fee** | |
| └─ Monthly Sales > ₹100k | ₹0 |
| └─ Monthly Sales < ₹100k | ₹499 |

**Best For**: Growing businesses, merchants ready to invest in visibility

---

### 🥇 GOLDEN TIER

| Component | Value |
|-----------|-------|
| Marketing Spend Required | ₹30,000/month |
| **Commission Structure** | |
| └─ Fixed Commission | 17% |
| └─ ReZ Coin Allocation | 5-10% |
| └─ Platform Revenue (Ours) | 7-12% |
| **Optional Allocations** | |
| └─ Brand Coin | 0-10% |
| └─ Prive Coin | 5-100% |
| **Subscription Fee** | |
| └─ Monthly Sales > ₹100k | ₹0 |
| └─ Monthly Sales < ₹100k | ₹499 |

**Best For**: Established merchants, multi-location stores, high-volume businesses

---

### 💎 DIAMOND TIER

| Component | Value |
|-----------|-------|
| Marketing Spend Required | ₹100,000+/month |
| **Commission Structure** | |
| └─ Fixed Commission | 15% |
| └─ ReZ Coin Allocation | 5-10% |
| └─ Platform Revenue (Ours) | 5-10% |
| **Optional Allocations** | |
| └─ Brand Coin | 0-10% |
| └─ Prive Coin | 5-100% |
| **Subscription Fee** | |
| └─ Monthly Sales > ₹100k | ₹0 |
| └─ Monthly Sales < ₹100k | ₹499 |

**Best For**: Enterprise merchants, franchise chains, premium brands

---

## Commission Breakdown Explained

```
┌─────────────────────────────────────────────────────────────────────┐
│                    COMMISSION FLOW EXAMPLE                          │
│                    (₹1000 Transaction)                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  DIAMOND TIER (15% Commission = ₹150)                               │
│  ─────────────────────────────────────                              │
│                                                                      │
│  ₹150 Commission Split:                                             │
│  ├── ReZ Coins (5-10%)     →  ₹50-100  → Goes to Users             │
│  ├── Platform Revenue      →  ₹50-100  → ReZ Platform              │
│  │                                                                   │
│  Optional (Merchant Funded):                                        │
│  ├── Brand Coin (0-10%)    →  ₹0-100   → Merchant's loyalty coin   │
│  └── Prive Coin (5-100%)   →  ₹5-150   → Prive member rewards      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## API Endpoints for Package Management

### Merchant-Side Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/merchant/package` | GET | Get current package tier |
| `/api/merchant/package/upgrade` | POST | Request tier upgrade |
| `/api/merchant/package/downgrade` | POST | Request tier downgrade |

### Admin-Side Endpoints (Tier Configuration)
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/merchant-packages` | GET | Get all tier configurations |
| `/api/admin/merchant-packages/{tierId}` | PUT | Update specific tier rates |
| `/api/admin/merchant-packages/global-settings` | GET | Get global settings (threshold, grace period) |
| `/api/admin/merchant-packages/global-settings` | PUT | Update global settings |
| `/api/admin/merchant/{id}/tier` | PUT | Manually set merchant tier |

### Admin-Side Endpoints (Special Privileges)
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/merchant-packages/special` | GET | Get all special privilege merchants |
| `/api/admin/merchant-packages/special` | POST | Grant special privilege to merchant |
| `/api/admin/merchant-packages/special/{id}` | GET | Get specific special privilege details |
| `/api/admin/merchant-packages/special/{id}` | PUT | Update special privilege |
| `/api/admin/merchant-packages/special/{id}` | DELETE | Revoke special privilege |
| `/api/admin/merchant-packages/special/expiring` | GET | Get privileges expiring soon |
| `/api/admin/merchant-packages/history` | GET | Get change history log |

---

## Database Schema for Packages

```
Merchant_Packages
├── id
├── merchant_id
├── tier (free, basic, golden, diamond)
├── marketing_spend_commitment
├── commission_rate
├── rez_coin_rate
├── brand_coin_rate (optional)
├── prive_coin_rate (optional)
├── subscription_status
├── monthly_sales
├── effective_date
└── created_at, updated_at

Merchant_Special_Privileges
├── id
├── merchant_id
├── base_tier
├── custom_commission_rate
├── custom_rez_coin_rate
├── custom_subscription_fee
├── reason
├── valid_from
├── valid_until
├── approved_by (admin_id)
├── status (active, expired, revoked)
└── created_at, updated_at

Merchant_Package_Change_History
├── id
├── merchant_id (nullable for global changes)
├── change_type (tier_update, special_grant, special_revoke, global_setting)
├── from_value
├── to_value
├── changed_by (admin_id)
├── reason
└── changed_at

Merchant_Package_History
├── id
├── merchant_id
├── from_tier
├── to_tier
├── reason
├── changed_by
└── changed_at
```

---

*Document Version: 1.1*
*Total Pages Documented: 719*
*Total API Endpoints: 400+*
*Last Updated: 2025-01-01*
