# ReZ Platform - Complete Feature Documentation

## Platform Overview

**Total Pages**: 718
**Total Routes**: 631
**Build Status**: Successful (2936 modules)

---

## Table of Contents

1. [Platform Architecture](#platform-architecture)
2. [6 Master Flow Types](#6-master-flow-types)
3. [Admin Section](#1-admin-section)
4. [Merchant Section](#2-merchant-section)
5. [User Section](#3-user-section)
6. [Prive Section](#4-prive-section)
7. [Navigation & Connectivity](#navigation--connectivity)
8. [Flow Diagrams](#flow-diagrams)

---

## Platform Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         HQ LEVEL                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              HQCommandCenter                         │    │
│  │   - Platform-wide control                            │    │
│  │   - Zone management                                  │    │
│  │   - Rule engine                                      │    │
│  │   - Emergency controls                               │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       ZONE LEVEL                             │
│  ┌────────────────┐  ┌────────────────┐  ┌──────────────┐   │
│  │  North Zone    │  │  South Zone    │  │  Metro Zone  │   │
│  │  Admin         │  │  Admin         │  │  Admin       │   │
│  └────────────────┘  └────────────────┘  └──────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     MERCHANT LEVEL                           │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  - Day-to-day operations                             │    │
│  │  - Sales & marketing                                 │    │
│  │  - Inventory & orders                                │    │
│  │  - Team management                                   │    │
│  │  - Promotion participation                           │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       USER LEVEL                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  - Browse & discover                                 │    │
│  │  - Shop & pay                                        │    │
│  │  - Earn coins & rewards                              │    │
│  │  - Demand requests                                   │    │
│  │  - Prive membership                                  │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## 6 Master Flow Types

### Flow 1: ADMIN → MERCHANT → USER (Top-Down, HQ-Controlled)

**Purpose**: Platform-led initiatives pushed from HQ

| Stage | Page | Route | Action |
|-------|------|-------|--------|
| Admin Creates | AdminPromotionLauncher | `/admin/promotion-launcher` | Create platform promotion |
| Admin Enforces | AdminMandatoryOffers | `/admin/mandatory-offers` | Set mandatory rules |
| Merchant Receives | MerchantPromotionParticipation | `/merchant/promotion-participation` | Opt-in to promotion |
| User Sees | PromotionsFeed | `/promotions` | View participating stores |

**Examples**:
- Festival sales (Diwali, Christmas)
- City-wide cashback campaigns
- New category launches
- Emergency demand pushes

---

### Flow 2: MERCHANT → USER (Merchant-Led, Rule-Bounded)

**Purpose**: Day-to-day business flows within HQ rules

| Stage | Page | Route | Action |
|-------|------|-------|--------|
| Merchant Creates | CreateOffer | `/merchant/offers/create` | Create offer |
| System Validates | (Auto) | - | Check against HQ rules |
| Offer Goes Live | MerchantOffers | `/merchant/offers` | Manage active offers |
| User Sees | Offers | `/offers` | Browse merchant offers |

**Examples**:
- Merchant discounts
- Loyalty rewards
- Birthday offers
- Flash deals

---

### Flow 3: USER → MERCHANT (Demand-Driven)

**Purpose**: User-initiated actions that drive merchant response

| Stage | Page | Route | Action |
|-------|------|-------|--------|
| User Requests | UserDemandRequests | `/demand-requests` | Submit product/service request |
| Community Upvotes | UserDemandRequests | `/demand-requests` | Validate demand |
| Signals Aggregated | (System) | - | Aggregate demand data |
| Merchant Sees | MerchantDemandSignals | `/merchant/demand-signals` | View demand insights |
| Merchant Acts | MerchantProducts | `/merchant/products` | Add requested products |

**Examples**:
- Product requests
- Service requests
- Wishlist signals
- Search trends

---

### Flow 4: ADMIN → USER (Direct Platform Communication)

**Purpose**: Direct platform-to-user communication

| Stage | Page | Route | Action |
|-------|------|-------|--------|
| Admin Creates | AdminNotifications | `/admin/notifications` | Create notification |
| Admin Targets | AdminCampaigns | `/admin/campaigns` | Set user segments |
| User Receives | NotificationsCenter | `/notifications-center` | View notifications |

**Examples**:
- Platform announcements
- App-wide notifications
- Policy updates
- Global reward events

---

### Flow 5: ADMIN → MERCHANT (Governance & Enforcement)

**Purpose**: Control flows for governance

| Stage | Page | Route | Action |
|-------|------|-------|--------|
| Admin Sets Rules | AdminRuleEngine | `/admin/rule-engine` | Configure rules |
| Admin Manages | MerchantGovernance | `/admin/merchant-governance` | Manage merchant tiers |
| Merchant State Changes | AdminMerchants | `/admin/merchants` | Approve/suspend |
| Merchant Sees | MerchantDashboard | `/merchant` | Updated permissions |

**Examples**:
- Merchant approval/suspension
- KYC re-verification
- Settlement holds
- Trust score changes
- Feature enable/disable

---

### Flow 6: SYSTEM/AI → ALL (Automated, Rule-Driven)

**Purpose**: Automated actions without human intervention

| Component | Page | Route | Function |
|-----------|------|-------|----------|
| Rule Engine | AdminCoinRulesEngine | `/admin/coin-rules` | Coin distribution rules |
| AI Insights | AdminAIInsights | `/admin/ai-insights` | Automated recommendations |
| Experiments | AdminExperiments | `/admin/experiments` | A/B testing |
| Fraud Detection | AdminFraudDetection | `/admin/fraud-detection` | Auto fraud flagging |

**Examples**:
- Auto-pause low ROI campaigns
- Auto-boost trending merchants
- Auto-detect fraud
- Auto-recommend offers

---

## 1. Admin Section

**Total Pages**: 142
**Base Route**: `/admin`

### 1.1 Core Dashboards

| Page | Route | Purpose |
|------|-------|---------|
| AdminDashboard | `/admin` | Main admin home |
| AdminGlobalDashboard | `/admin/global-dashboard` | Platform-wide metrics |
| AdminMarketingDashboard | `/admin/marketing-dashboard` | Marketing analytics |
| AdminFinanceDashboard | `/admin/finance-dashboard` | Revenue & settlements |
| AdminOperationsDashboard | `/admin/operations-dashboard` | Operational metrics |
| AdminRegionalDashboard | `/admin/regional-dashboard` | Zone-specific data |
| AdminSupportDashboard | `/admin/support-dashboard` | Support tickets |
| AdminAnalyticsDashboard | `/admin/analytics-dashboard` | Deep analytics |

### 1.2 Governance & Control

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| HQCommandCenter | `/admin/hq-command` | Supreme platform control | ZoneManagement, RuleEngine |
| ZoneManagement | `/admin/zone-management` | Regional zone control | HQCommandCenter |
| AdminRuleEngine | `/admin/rule-engine` | Rule configuration | HQCommandCenter |
| MerchantGovernance | `/admin/merchant-governance` | Merchant tier management | AdminMerchants |
| UserAccessGovernance | `/admin/user-governance` | User permission control | AdminUsers |
| OperationsCityDashboard | `/admin/operations-city` | City-level operations | ZoneManagement |

### 1.3 Promotion & Offers

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| AdminPromotionLauncher | `/admin/promotion-launcher` | Create platform promotions | MerchantPromotionParticipation |
| AdminMandatoryOffers | `/admin/mandatory-offers` | Enforce required offers | All merchants |
| AdminCampaigns | `/admin/campaigns` | Campaign management | AdminCampaignApproval |
| AdminCampaignApproval | `/admin/campaign-approval` | Approve merchant campaigns | MerchantCampaigns |
| AdminOffers | `/admin/offers` | Offer management | MerchantOffers |
| AdminFlashSales | `/admin/flash-sales` | Flash sale config | MerchantFlashDeals |
| AdminLightningDeals | `/admin/lightning-deals` | Time-limited deals | PromotionsFeed |
| AdminBOGOManagement | `/admin/bogo-management` | BOGO offers | MerchantBOGOOffers |
| AdminBankOffers | `/admin/bank-offers` | Bank partnerships | Offers |
| AdminDiscountBuckets | `/admin/discount-buckets` | Discount tier management | All offers |

### 1.4 Merchant Management

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| AdminMerchants | `/admin/merchants` | Merchant directory | MerchantDashboard |
| AdminMerchantTierConfig | `/admin/merchant-tier-config` | Tier definitions | MerchantGovernance |
| AdminMerchantTrustScore | `/admin/merchant-trust-score` | Trust scoring | MerchantTrustScoreDetail |
| AdminMerchantSuperOS | `/admin/merchant-super-os` | Merchant OS config | MerchantSuperOSDashboard |
| AdminMerchantIntelligence | `/admin/merchant-intelligence` | Merchant analytics | MerchantAnalytics |

### 1.5 User Management

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| AdminUsers | `/admin/users` | User directory | Profile |
| AdminUserManagement | `/admin/user-management` | User management | AdminUsers |
| AdminUserTrustScore | `/admin/user-trust-score` | User trust metrics | TrustPassport |
| AdminUserHabitEngine | `/admin/user-habit-engine` | Behavior analysis | AdminAnalytics |

### 1.6 Coin & Wallet System

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| AdminCoinIssuanceControl | `/admin/coin-issuance` | Coin supply | AdminCoinRulesEngine |
| AdminCoinRulesEngine | `/admin/coin-rules` | Coin rules | All coin flows |
| AdminCoinSystemOverview | `/admin/coin-system-overview` | Full coin metrics | AdminWalletAnalytics |
| AdminCoinEvents | `/admin/coin-events` | Coin event config | Earn section |
| AdminCoinEmergencyControls | `/admin/coin-emergency-controls` | Emergency controls | AdminCoinIssuanceControl |
| AdminPromoCoinManager | `/admin/promo-coin-manager` | Promo coins | AdminPromotionLauncher |
| AdminEarningRuleMatrix | `/admin/earning-rule-matrix` | Earning rules | Earn section |
| AdminRedemptionRules | `/admin/redemption-rules` | Redemption rules | Wallet |
| AdminWallet | `/admin/wallet` | Wallet management | Wallet |
| AdminWalletAnalytics | `/admin/wallet-analytics` | Wallet metrics | AdminAnalytics |
| AdminCashback | `/admin/cashback` | Cashback programs | MerchantCashbackPrograms |
| AdminCashbackRates | `/admin/cashback-rates` | Cashback rate config | AdminCashback |

### 1.7 Marketing & Communication

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| AdminMarketing | `/admin/marketing` | Marketing hub | All marketing pages |
| AdminMarketingOrchestrator | `/admin/marketing-orchestrator` | Cross-channel orchestration | MerchantUnifiedMarketing |
| AdminMultiChannelMarketing | `/admin/multi-channel-marketing` | Multi-channel strategy | AdminMarketing |
| AdminHeroBanners | `/admin/hero-banners` | Banner management | Home |
| AdminEmailMarketing | `/admin/email-marketing` | Email campaigns | AdminNotifications |
| AdminSMSCampaigns | `/admin/sms-campaigns` | SMS campaigns | AdminNotifications |
| AdminNotifications | `/admin/notifications` | Notification system | NotificationsCenter |

### 1.8 Content & Moderation

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| AdminContent | `/admin/content` | Content management | MerchantContent |
| AdminContentModeration | `/admin/content-moderation` | Content approval | Reels, SocialFeed |
| AdminUGCManagement | `/admin/ugc-management` | UGC control | MerchantUGCCampaigns |
| AdminCreatorContent | `/admin/creator-content` | Creator analytics | CreatorStoreHome |

### 1.9 Financial & Compliance

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| AdminPayments | `/admin/payments` | Payment management | MerchantPayments |
| AdminBankReconciliation | `/admin/bank-reconciliation` | Bank reconciliation | AdminFinanceDashboard |
| AdminSettlementCommission | `/admin/settlement-commission` | Settlement config | MerchantSettlementEngine |
| AdminKYCCompliance | `/admin/kyc-compliance` | KYC verification | KYCStatus |
| AdminFraud | `/admin/fraud` | Fraud rules | AdminFraudDetection |
| AdminFraudDetection | `/admin/fraud-detection` | Fraud detection | AdminFraud |
| AdminDisputeResolution | `/admin/dispute-resolution` | Dispute handling | DisputeCenter |
| AdminVouchers | `/admin/vouchers` | Voucher system | MerchantVouchers |

### 1.10 System Administration

| Page | Route | Purpose |
|------|-------|---------|
| AdminSettings | `/admin/settings` | Global settings |
| AdminRoleManagement | `/admin/role-management` | Admin roles |
| AdminRoleBasedAccess | `/admin/role-based-access` | RBAC config |
| AdminLogs | `/admin/logs` | Audit logs |
| AdminBackgroundJobs | `/admin/background-jobs` | Job scheduler |
| AdminIntegrations | `/admin/integrations` | Third-party integrations |
| AdminWebhookManager | `/admin/webhook-manager` | Webhook management |
| AdminPlatformHealth | `/admin/platform-health` | System health |
| AdminDeveloperPortal | `/admin/developer-portal` | Developer API |
| AdminPOSIntegration | `/admin/pos-integration` | POS integration |

### 1.11 Advanced Features

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| AdminGamification | `/admin/gamification` | Gamification rules | Earn section |
| AdminGameConfiguration | `/admin/game-configuration` | Game setup | PlayGames |
| AdminTournaments | `/admin/tournaments` | Tournament management | Leaderboard |
| AdminExperiments | `/admin/experiments` | A/B testing | All features |
| AdminAIInsights | `/admin/ai-insights` | AI insights | AdminAnalytics |
| AdminAIRecommendations | `/admin/ai-recommendations` | Recommendation engine | Explore |
| AdminTrendingAlgorithm | `/admin/trending-algorithm` | Trending logic | DealStore |
| AdminPriveManagement | `/admin/prive-management` | Prive program | PriveHome |
| AdminExclusivePrograms | `/admin/exclusive-programs` | VIP programs | PriveOffersFeed |

---

## 2. Merchant Section

**Total Pages**: 164
**Base Route**: `/merchant`

### 2.1 Core Dashboard

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| MerchantSuperOSDashboard | `/merchant` | Main dashboard | All merchant pages |
| MerchantProfile | `/merchant/profile` | Profile management | AdminMerchants |
| MerchantSettings | `/merchant/settings` | Settings | AdminMerchantGovernance |
| MerchantMultiStore | `/merchant/multi-store` | Multi-location | MerchantBranchManager |
| MerchantNotifications | `/merchant/notifications` | Notifications | AdminNotifications |

### 2.2 Financial & Accounting

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| MerchantFinancials | `/merchant/financials` | Financial dashboard | AdminFinanceDashboard |
| MerchantAccounting | `/merchant/accounting` | Accounting | AdminBankReconciliation |
| MerchantPayments | `/merchant/payments` | Payments | AdminPayments |
| MerchantTransactions | `/merchant/transactions` | Transaction history | AdminTransactions |
| MerchantWallet | `/merchant/wallet` | Merchant wallet | AdminWallet |
| MerchantSettlementEngine | `/merchant/settlement-engine` | Settlements | AdminSettlementCommission |
| MerchantProfitLoss | `/merchant/profit-loss` | P&L statements | MerchantFinancials |
| MerchantExpenseTracker | `/merchant/expense-tracker` | Expenses | MerchantAccounting |
| MerchantCreditLedger | `/merchant/credit-ledger` | Credit management | MerchantFinancials |
| MerchantDaybook | `/merchant/daybook` | Daily summary | MerchantDayEndReport |
| MerchantGSTReports | `/merchant/gst-reports` | GST reporting | AdminKYCCompliance |
| MerchantEInvoice | `/merchant/einvoice` | E-invoicing | MerchantGSTReports |

### 2.3 Products & Inventory

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| MerchantProducts | `/merchant/products` | Product catalog | Explore |
| MerchantInventory | `/merchant/inventory` | Basic inventory | MerchantProducts |
| MerchantInventoryAdvanced | `/merchant/inventory-advanced` | Advanced inventory | MerchantStockReconciliation |
| MerchantProductVariants | `/merchant/product-variants` | Variants | MerchantProducts |
| MerchantComboProducts | `/merchant/combo-products` | Bundles | MerchantProducts |
| MerchantBulkImport | `/merchant/bulk-import` | Bulk import | MerchantProducts |
| MerchantExpiryDashboard | `/merchant/expiry-dashboard` | Expiry tracking | MerchantInventory |
| MerchantBatchTracking | `/merchant/batch-tracking` | Batch/lot tracking | MerchantInventory |
| MerchantHSNCodes | `/merchant/hsn-codes` | HSN codes | MerchantGSTReports |

### 2.4 Orders & Fulfillment

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| MerchantOrders | `/merchant/orders` | Order management | OrderTracking |
| MerchantOrdersMultiChannel | `/merchant/orders-multi-channel` | Multi-channel orders | MerchantAggregatorBridge |
| MerchantUnifiedOrders | `/merchant/unified-orders` | Unified order view | MerchantOrders |
| MerchantShipping | `/merchant/shipping` | Shipping | MerchantDeliveryBridge |
| MerchantReturns | `/merchant/returns` | Returns | MerchantOrders |
| MerchantDeliveryBridge | `/merchant/delivery-bridge` | Delivery partners | MerchantShipping |
| MerchantDayEndReport | `/merchant/day-end-report` | Daily reconciliation | MerchantFinancials |

### 2.5 Point of Sale (POS)

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| MerchantPOS | `/merchant/pos` | Full POS | PaymentGateway |
| MerchantSimplePOS | `/merchant/simple-pos` | Simple POS | MerchantPOS |
| MerchantOfflinePOS | `/merchant/offline-pos` | Offline POS | MerchantPOS |
| MerchantSoftPOS | `/merchant/soft-pos` | Mobile POS | MerchantQRPayments |
| MerchantCategoryPOS | `/merchant/category-pos` | Category POS | MerchantPOS |
| MerchantPOSIntegration | `/merchant/pos-integration` | External POS | AdminPOSIntegration |
| MerchantBarcodeScanner | `/merchant/barcode-scanner` | Barcode scanning | MerchantPOS |
| MerchantCashDrawer | `/merchant/cash-drawer` | Cash drawer | MerchantPOS |
| MerchantTokenDisplay | `/merchant/token-display` | Token display | MerchantKDS |
| MerchantKDS | `/merchant/kds` | Kitchen Display | MerchantTableManagement |
| MerchantTableManagement | `/merchant/tables` | Table management | TableReservation |
| MerchantQRPayments | `/merchant/qr-payments` | QR payments | QRScanner |
| MerchantQROrdering | `/merchant/qr-ordering` | QR ordering | MerchantQRPayments |

### 2.6 Offers & Promotions

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| MerchantOffers | `/merchant/offers` | Offer management | Offers |
| CreateOffer | `/merchant/offers/create` | Create offer | AdminCampaignApproval |
| MerchantPromotionParticipation | `/merchant/promotion-participation` | Join platform promos | AdminPromotionLauncher |
| MerchantCampaigns | `/merchant/campaigns` | Campaigns | AdminCampaigns |
| MerchantFlashDeals | `/merchant/flash-deals` | Flash deals | AdminFlashSales |
| MerchantExclusiveDeals | `/merchant/exclusive-deals` | Exclusive offers | PriveOffersFeed |
| MerchantNearbyOffers | `/merchant/nearby-offers` | Location offers | AdminNearbyOffers |
| MerchantTodaysOffers | `/merchant/todays-offers` | Daily offers | AdminTodaysOffers |
| MerchantBOGOOffers | `/merchant/bogo-offers` | BOGO offers | AdminBOGOManagement |
| MerchantBirthdayOffers | `/merchant/birthday-offers` | Birthday promos | MerchantCRM |
| MerchantBirthdayRewards | `/merchant/birthday-rewards` | Birthday rewards | MerchantLoyalty |
| MerchantClearanceSales | `/merchant/clearance-sales` | Clearance | MerchantOffers |
| MerchantVouchers | `/merchant/vouchers` | Vouchers | AdminVouchers |

### 2.7 Loyalty & Customer Programs

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| MerchantLoyalty | `/merchant/loyalty` | Loyalty program | LoyaltyRewardsHub |
| MerchantLoyaltyTiers | `/merchant/loyalty-tiers` | Tier config | MerchantLoyalty |
| MerchantLoyaltyOffers | `/merchant/loyalty-offers` | Loyalty offers | MerchantOffers |
| MerchantMemberships | `/merchant/memberships` | Memberships | MerchantLoyalty |
| MerchantCashbackPrograms | `/merchant/cashback-programs` | Cashback rules | AdminCashback |
| MerchantBrandedCoinConfig | `/merchant/branded-coin-config` | Custom coins | AdminCoinRulesEngine |
| MerchantExclusivePrograms | `/merchant/exclusive-programs` | VIP programs | AdminExclusivePrograms |
| MerchantPostPaymentRewards | `/merchant/post-payment-rewards` | Post-purchase rewards | MerchantLoyalty |

### 2.8 Customer Management & CRM

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| MerchantCustomers | `/merchant/customers` | Customer database | AdminUsers |
| MerchantCRM | `/merchant/crm` | CRM system | MerchantCustomerSegmentation |
| MerchantCustomerIdentity | `/merchant/customer-identity` | Customer identity | MerchantCRM |
| MerchantCustomerSegmentation | `/merchant/customer-segmentation` | Segmentation | MerchantMarketingCampaigns |
| MerchantReviewManagement | `/merchant/review-management` | Review management | MerchantReviews |
| MerchantReviews | `/merchant/reviews` | Review dashboard | AdminContentModeration |

### 2.9 Demand & Analytics

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| MerchantDemandSignals | `/merchant/demand-signals` | Demand insights | UserDemandRequests |
| MerchantWishlistDemand | `/merchant/wishlist-demand` | Wishlist data | EnhancedWishlist |
| MerchantAnalytics | `/merchant/analytics` | Analytics | AdminAnalytics |
| MerchantDealAnalytics | `/merchant/deal-analytics` | Offer analytics | MerchantOffers |
| MerchantPerformance | `/merchant/performance` | Performance metrics | AdminMerchantIntelligence |
| MerchantBenchmarks | `/merchant/benchmarks` | Benchmarks | AdminBenchmarks |

### 2.10 Marketing

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| MerchantMarketing | `/merchant/marketing` | Marketing hub | AdminMarketing |
| MerchantMarketingCampaigns | `/merchant/marketing-campaigns` | Campaigns | AdminCampaigns |
| MerchantUnifiedMarketing | `/merchant/unified-marketing` | Unified marketing | AdminMarketingOrchestrator |
| MerchantMetaAdsManager | `/merchant/meta-ads` | Meta/Facebook ads | MerchantUnifiedMarketing |
| MerchantGoogleAdsManager | `/merchant/google-ads` | Google ads | MerchantUnifiedMarketing |
| MerchantOfflineMarketing | `/merchant/offline-marketing` | Offline marketing | MerchantMarketing |
| MerchantUGCCampaigns | `/merchant/ugc-campaigns` | UGC campaigns | AdminUGCManagement |
| MerchantDiscovery | `/merchant/discovery` | Discovery optimization | Explore |

### 2.11 Staff & Operations

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| MerchantTeamManagement | `/merchant/team-management` | Team admin | MerchantGovernance |
| MerchantStaff | `/merchant/staff` | Staff management | MerchantTeamManagement |
| MerchantStaffRoster | `/merchant/staff-roster` | Staff scheduling | MerchantStaff |
| MerchantUserRoles | `/merchant/user-roles` | Role-based access | MerchantTeamManagement |
| MerchantPayroll | `/merchant/payroll` | Payroll | MerchantFinancials |
| MerchantSalesmanCommission | `/merchant/salesman-commission` | Commissions | MerchantPayroll |
| MerchantShiftManagement | `/merchant/shift-management` | Shifts | MerchantStaffRoster |

### 2.12 Services & Bookings

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| MerchantAppointments | `/merchant/appointments` | Appointments | ServiceBookingPage |
| MerchantServiceCatalog | `/merchant/service-catalog` | Service listing | Explore |
| MerchantBookingCalendar | `/merchant/booking-calendar` | Booking calendar | MerchantAppointments |
| MerchantClassSchedule | `/merchant/class-schedule` | Class scheduling | MerchantBookingCalendar |
| MerchantEvents | `/merchant/events` | Event management | Events |
| MerchantEventCheckIn | `/merchant/event-checkin` | Event check-in | MyTickets |

### 2.13 Integrations

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| MerchantIntegrations | `/merchant/integrations` | Integrations | AdminIntegrations |
| MerchantIntegrationHub | `/merchant/integration-hub` | Integration marketplace | MerchantIntegrations |
| MerchantIntegrationHealth | `/merchant/integration-health` | Integration status | MerchantIntegrations |
| MerchantAggregatorBridge | `/merchant/aggregator-bridge` | Aggregator sync | MerchantOrdersMultiChannel |
| MerchantAggregatorReconciliation | `/merchant/aggregator-reconciliation` | Aggregator reconciliation | MerchantFinancials |
| MerchantERPConnector | `/merchant/erp-connector` | ERP connection | MerchantIntegrations |
| MerchantWhatsAppBusiness | `/merchant/whatsapp-business` | WhatsApp | MerchantMarketing |
| MerchantHardwareHub | `/merchant/hardware-hub` | Hardware | MerchantPOS |

### 2.14 Advanced Features

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| MerchantAutopilot | `/merchant/autopilot` | Automation | AdminRuleEngine |
| MerchantControlPlane | `/merchant/control-plane` | Unified control | MerchantSuperOSDashboard |
| MerchantTrustScoreDetail | `/merchant/trust-score` | Trust score | AdminMerchantTrustScore |
| MerchantContestBuilder | `/merchant/contest-builder` | Contests | AdminTournaments |
| MerchantPricingIntelligence | `/merchant/pricing-intelligence` | Pricing insights | AdminPriceTracking |
| MerchantPriceEngineering | `/merchant/price-engineering` | Dynamic pricing | MerchantPricingIntelligence |
| MerchantDataExport | `/merchant/data-export` | Data export | MerchantAnalytics |
| MerchantPrintTemplates | `/merchant/print-templates` | Print templates | MerchantPOS |

---

## 3. User Section

**Total Pages**: 107 (root) + 154 (verticals)
**Base Route**: `/`

### 3.1 Main Navigation

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| Home | `/` | Main home | All sections |
| Explore | `/explore` | Discovery | All categories |
| Categories | `/categories` | Category list | All verticals |
| Wallet | `/wallet` | Wallet/coins | CoinHistory |
| Offers | `/offers` | Offer feed | DealDetail |
| Profile | `/profile` | User profile | Settings |
| NotificationsCenter | `/notifications-center` | Notifications | All notification sources |

### 3.2 Category Verticals

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| Fashion | `/fashion` | Apparel | MerchantProducts |
| Beauty | `/beauty` | Beauty | MerchantServiceCatalog |
| Grocery | `/grocery` | Groceries | MerchantProducts |
| Healthcare | `/healthcare` | Medical | MerchantPrescriptions |
| Fitness | `/fitness` | Fitness | MerchantClassSchedule |
| HomeServices | `/home-services` | Home services | MerchantServiceCatalog |
| Financial | `/financial` | Bills & payments | PaymentGateway |
| Events | `/events` | Entertainment | EventTicketing |
| FoodDining | `/food` | Restaurants | TableReservation |
| Travel | `/travel` | Travel | MerchantBookingCalendar |
| Lifestyle | `/lifestyle` | Lifestyle hub | All lifestyle features |

### 3.3 Shopping & Deals

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| DealStore | `/deal-store` | Deal aggregation | DealDetail |
| DealDetail | `/deal/{id}` | Deal view | Cart |
| PromotionsFeed | `/promotions` | Promotions | MerchantPromotionParticipation |
| CashStore | `/cash-store` | Cashback store | MerchantCashbackPrograms |
| RezMall | `/mall` | Online mall | MerchantProducts |
| Cart | `/cart` | Shopping cart | PaymentGateway |
| ProductComparison | `/compare` | Price comparison | AdminPriceTracking |
| EnhancedWishlist | `/wishlist-enhanced` | Wishlist | MerchantWishlistDemand |

### 3.4 Demand & Requests

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| UserDemandRequests | `/demand-requests` | Request products/services | MerchantDemandSignals |

### 3.5 Earning & Rewards

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| Earn | `/earn` | Main earn page | All earn features |
| Achievements | `/earn/achievements` | Achievements | AdminGamification |
| Leaderboard | `/earn/leaderboard` | Leaderboard | AdminTournaments |
| CoinHunt | `/earn/coin-hunt` | Coin hunting | AdminCoinEvents |
| ScratchCard | `/earn/scratch-card` | Scratch cards | AdminGamification |
| Surveys | `/earn/surveys` | Survey rewards | AdminCampaigns |
| PlayGames | `/earn/play` | Game rewards | AdminGameConfiguration |
| ReferEarn | `/earn/refer` | Referral | AdminReferrals |
| WriteReviews | `/earn/reviews` | Review rewards | MerchantReviews |
| DailyCheckin | `/explore/daily-checkin` | Daily check-in | AdminDailyCheckin |
| CoinHistory | `/coin-history` | Coin history | AdminWallet |
| ReferralDashboard | `/referral` | Referral system | AdminReferrals |
| LoyaltyRewardsHub | `/loyalty-rewards` | Loyalty hub | MerchantLoyalty |

### 3.6 Content & Social

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| Reels | `/reels` | Video reels | AdminContentModeration |
| SocialFeed | `/social-feed` | Social timeline | AdminSocialFeedControl |
| SocialHub | `/social-hub` | Social features | SocialFeed |
| CreatorStoreHome | `/creators` | Creator marketplace | MerchantCreatorHub |
| CreatorsAll | `/creators/all` | All creators | CreatorStoreHome |
| CreatorProfile | `/creators/{username}` | Creator profile | MerchantCreatorHub |

### 3.7 Payments & QR

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| QRScanner | `/qr-scanner` | QR scanning | MerchantQRPayments |
| ScanPay | `/pay-in-store` | Scan & pay | MerchantPOS |
| PaymentGateway | `/payment` | Payment processing | MerchantPayments |

### 3.8 Orders & Bookings

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| OrderTracking | `/track-order/{orderId}` | Order tracking | MerchantOrders |
| OrderHistory | `/order-history` | Order history | MerchantOrders |
| EventTicketing | `/event-ticketing` | Event tickets | MerchantEvents |
| MyTickets | `/my-tickets` | My tickets | MerchantEventCheckIn |
| TicketDetail | `/ticket/{ticketId}` | Ticket details | MyTickets |
| TableReservation | `/table-reservation` | Table booking | MerchantTableManagement |
| ServiceBookingPage | `/service-booking` | Service booking | MerchantAppointments |

### 3.9 Trust & Compliance

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| TrustPassport | `/trust-passport` | Trust verification | AdminTrustPassport |
| KYCStatus | `/kyc-status` | KYC status | AdminKYCCompliance |
| DisputeCenter | `/dispute-center` | Dispute filing | AdminDisputeResolution |

### 3.10 Authentication

| Page | Route | Purpose |
|------|-------|---------|
| Login | `/login` | Authentication |
| Signup | `/signup` | Registration |
| OTPVerify | `/otp-verify` | OTP verification |
| Onboarding | `/onboarding` | User onboarding |
| Splash | `/splash` | Splash screen |

---

## 4. Prive Section

**Total Pages**: 141
**Base Route**: `/prive`

### 4.1 Entry & Eligibility

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| PriveEligibility | `/prive/eligibility` | Check eligibility | PriveHome |
| PriveInvitations | `/prive/invitations` | View invitations | PriveProfile |

### 4.2 Core Features

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| PriveHome | `/prive` | Main dashboard | All Prive sections |
| PrivePrivileges | `/prive/privileges` | Member privileges | PriveRedeem |
| PriveTierProgress | `/prive/tier-progress` | Tier progression | PriveProfile |
| PriveActivity | `/prive/activity` | Activity log | PriveProfile |
| PriveNotifications | `/prive/notifications` | Notifications | PriveHome |

### 4.3 Exploration

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| PriveExplore | `/prive/explore` | Browse exclusive | PriveStoreDetail |
| PriveStoreDetail | `/prive/store/{storeId}` | Store details | PriveOfferDetail |

### 4.4 Offers & Campaigns

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| PriveOffersFeed | `/prive/offers-feed` | Exclusive offers | AdminExclusivePrograms |
| PriveOfferDetail | `/prive/offer/{offerId}` | Offer details | PriveCheckout |
| PriveBrandInvitation | `/prive/invitation/{invitationId}` | Brand invitation | PriveCampaignTask |
| PriveCampaignTask | `/prive/campaign/{campaignId}` | Campaign task | PriveCampaignStatus |
| PriveCampaignStatus | `/prive/campaign-status/{campaignId}` | Campaign status | PriveEarnings |

### 4.5 Redemption

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| PriveRedeem | `/prive/redeem` | Redemption hub | PriveGiftCards, PriveExperiences |
| PriveGiftCards | `/prive/gift-cards` | Gift cards | PriveGiftCardDetail |
| PriveGiftCardDetail | `/prive/gift-card/{cardId}` | Gift card detail | PriveCheckout |
| PriveExperiences | `/prive/experiences` | Experiences | PriveExperienceDetail |
| PriveExperienceDetail | `/prive/experience/{experienceId}` | Experience detail | PriveBooking |
| PrivePartnerPrivileges | `/prive/partner-privileges` | Partner perks | PriveRedeem |
| PriveCheckout | `/prive/checkout` | Checkout | PaymentGateway |
| PriveBooking | `/prive/booking` | Booking | PriveRedemptionHistory |
| PriveRedemptionHistory | `/prive/redemption-history` | Redemption history | PriveRedeem |

### 4.6 Influence & Earnings

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| PriveInfluence | `/prive/influence` | Influence dashboard | PriveInfluenceHub |
| PriveInfluenceHub | `/prive/influence-hub` | Influence central | PriveEarnings |
| PriveEarnings | `/prive/earnings` | Earnings tracking | PriveProfile |
| PriveScoreBreakdown | `/prive/score-breakdown` | Score breakdown | PriveInfluence |
| PriveContentPerformance | `/prive/content-performance/{contentId}` | Content stats | PriveInfluenceHub |
| PriveContentGuidelines | `/prive/content-guidelines` | Content rules | PriveInfluenceHub |

### 4.7 Profile & Account

| Page | Route | Purpose | Links To |
|------|-------|---------|----------|
| PriveProfile | `/prive/profile` | Profile | PriveSettings |
| PriveRecognition | `/prive/recognition` | Achievements | PriveProfile |
| PriveAuthority | `/prive/authority` | Category authority | PriveInfluence |
| PriveVisibilityControl | `/prive/visibility` | Privacy settings | PriveSettings |
| PriveActivityStatement | `/prive/statement` | Activity statement | PriveProfile |
| PriveSettings | `/prive/settings` | Settings | PriveProfile |
| PriveExit | `/prive/exit` | Exit/churn flow | PriveHome |

---

## Navigation & Connectivity

### Cross-Section Navigation Map

```
┌──────────────────────────────────────────────────────────────────────────┐
│                              ADMIN SECTION                                │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │                         HQCommandCenter                              │ │
│  │                              │                                       │ │
│  │     ┌────────────────────────┼────────────────────────┐             │ │
│  │     ▼                        ▼                        ▼             │ │
│  │ ZoneManagement      AdminRuleEngine         MerchantGovernance      │ │
│  │     │                        │                        │             │ │
│  │     └────────────────────────┼────────────────────────┘             │ │
│  │                              ▼                                       │ │
│  │                    AdminPromotionLauncher                            │ │
│  │                              │                                       │ │
│  │                    AdminMandatoryOffers                              │ │
│  └─────────────────────────────┬───────────────────────────────────────┘ │
└────────────────────────────────┼─────────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                            MERCHANT SECTION                               │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │                    MerchantSuperOSDashboard                          │ │
│  │                              │                                       │ │
│  │     ┌────────────────────────┼────────────────────────┐             │ │
│  │     ▼                        ▼                        ▼             │ │
│  │ MerchantOffers    MerchantPromotionParticipation   MerchantDemandSignals │
│  │     │                        │                        ▲             │ │
│  │     │                        │                        │             │ │
│  └─────┼────────────────────────┼────────────────────────┼─────────────┘ │
└────────┼────────────────────────┼────────────────────────┼───────────────┘
         │                        │                        │
         ▼                        ▼                        │
┌──────────────────────────────────────────────────────────┼───────────────┐
│                             USER SECTION                  │               │
│  ┌────────────────────────────────────────────────────────┼─────────────┐ │
│  │                          Home                          │             │ │
│  │                            │                           │             │ │
│  │     ┌──────────────────────┼───────────────────────────┼──────┐     │ │
│  │     ▼                      ▼                           │      ▼     │ │
│  │  Offers            PromotionsFeed              UserDemandRequests   │ │
│  │     │                      │                                        │ │
│  │     └──────────────────────┼────────────────────────────────────────┘ │
│  │                            ▼                                         │ │
│  │                      PaymentGateway                                  │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────┘
```

### Promotion Flow Navigation

```
Admin Creates Promotion
         │
         ▼
┌─────────────────────────────────────────────────────────┐
│  AdminPromotionLauncher (/admin/promotion-launcher)     │
│  - Set discount range                                   │
│  - Set cost split                                       │
│  - Select target zones/categories                       │
│  - Set coin bonus                                       │
└─────────────────────────┬───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│  AdminMandatoryOffers (/admin/mandatory-offers)         │
│  [Optional: Make it mandatory]                          │
│  - Set compliance rules                                 │
│  - Set enforcement actions                              │
└─────────────────────────┬───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│  MerchantPromotionParticipation                         │
│  (/merchant/promotion-participation)                    │
│  - View invitation                                      │
│  - Accept/decline                                       │
│  - Set own discount within range                        │
│  - Track performance                                    │
└─────────────────────────┬───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│  PromotionsFeed (/promotions)                           │
│  - View active promotions                               │
│  - See participating stores                             │
│  - Shop and save                                        │
└─────────────────────────────────────────────────────────┘
```

### Demand Flow Navigation

```
User Signals Demand
         │
         ▼
┌─────────────────────────────────────────────────────────┐
│  UserDemandRequests (/demand-requests)                  │
│  - Submit product/service request                       │
│  - Community upvotes                                    │
│  - Track status                                         │
└─────────────────────────┬───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│  [System Aggregation]                                   │
│  - Collect wishlists                                    │
│  - Analyze search trends                                │
│  - Calculate demand scores                              │
└─────────────────────────┬───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│  MerchantDemandSignals (/merchant/demand-signals)       │
│  - View aggregated demand                               │
│  - See revenue potential                                │
│  - Take action (add products, adjust prices)            │
└─────────────────────────┬───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│  MerchantProducts (/merchant/products)                  │
│  - Add requested products                               │
│  - Set pricing                                          │
│  - Publish to catalog                                   │
└─────────────────────────┬───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│  Explore (/explore)                                     │
│  - User sees new products                               │
│  - Shop and purchase                                    │
└─────────────────────────────────────────────────────────┘
```

### Governance Flow Navigation

```
HQ Sets Rules
         │
         ▼
┌─────────────────────────────────────────────────────────┐
│  HQCommandCenter (/admin/hq-command)                    │
│  - Define global rules                                  │
│  - Set zone hierarchy                                   │
│  - Control emergency actions                            │
└─────────────────────────┬───────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
┌──────────────┐ ┌────────────────┐ ┌────────────────┐
│ZoneManagement│ │AdminRuleEngine │ │MerchantGovern. │
│              │ │                │ │                │
│-Zone admins  │ │-Rule config    │ │-Tier mgmt      │
│-Regional ctrl│ │-Scope settings │ │-Permissions    │
└──────┬───────┘ └───────┬────────┘ └───────┬────────┘
       │                 │                  │
       └─────────────────┼──────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│  AdminMerchants (/admin/merchants)                      │
│  - Approve/suspend                                      │
│  - Set tier                                             │
│  - Configure permissions                                │
└─────────────────────────┬───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│  MerchantSuperOSDashboard (/merchant)                   │
│  - View assigned permissions                            │
│  - Operate within rules                                 │
│  - See compliance status                                │
└─────────────────────────┬───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│  MerchantTeamManagement (/merchant/team-management)     │
│  - Assign staff roles                                   │
│  - Set sub-permissions                                  │
│  - Manage team access                                   │
└─────────────────────────────────────────────────────────┘
```

---

## Flow Diagrams

### Complete Platform Flow

```
                    ┌─────────────────────┐
                    │        HQ           │
                    │  (HQCommandCenter)  │
                    └──────────┬──────────┘
                               │
           ┌───────────────────┼───────────────────┐
           │                   │                   │
           ▼                   ▼                   ▼
    ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
    │  Zone Admin  │   │  Zone Admin  │   │  Zone Admin  │
    │   (North)    │   │   (South)    │   │   (Metro)    │
    └──────┬───────┘   └──────┬───────┘   └──────┬───────┘
           │                   │                   │
           └───────────────────┼───────────────────┘
                               │
                               ▼
    ┌──────────────────────────────────────────────────────┐
    │                    MERCHANTS                          │
    │  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐     │
    │  │Platinum│  │  Gold  │  │ Silver │  │ Bronze │     │
    │  └────────┘  └────────┘  └────────┘  └────────┘     │
    │                                                       │
    │  Features: POS, Inventory, Orders, Offers, Team      │
    └──────────────────────────┬───────────────────────────┘
                               │
                               ▼
    ┌──────────────────────────────────────────────────────┐
    │                      USERS                            │
    │  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐     │
    │  │  Prive │  │  Gold  │  │ Silver │  │ Basic  │     │
    │  │ Member │  │  User  │  │  User  │  │  User  │     │
    │  └────────┘  └────────┘  └────────┘  └────────┘     │
    │                                                       │
    │  Features: Shop, Earn, Pay, Request, Redeem          │
    └──────────────────────────────────────────────────────┘
```

### Data Flow Between Sections

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           DATA FLOWS                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ADMIN → MERCHANT:                                                       │
│  ├── Rules & policies (AdminRuleEngine → MerchantSettings)              │
│  ├── Promotions (AdminPromotionLauncher → MerchantPromotionParticipation)│
│  ├── Tier changes (MerchantGovernance → MerchantDashboard)              │
│  └── Compliance alerts (AdminKYCCompliance → MerchantCompliance)        │
│                                                                          │
│  MERCHANT → USER:                                                        │
│  ├── Products (MerchantProducts → Explore)                              │
│  ├── Offers (MerchantOffers → Offers)                                   │
│  ├── Services (MerchantServiceCatalog → ServiceBookingPage)             │
│  └── Events (MerchantEvents → EventTicketing)                           │
│                                                                          │
│  USER → MERCHANT:                                                        │
│  ├── Orders (Cart → MerchantOrders)                                     │
│  ├── Demand (UserDemandRequests → MerchantDemandSignals)                │
│  ├── Reviews (WriteReviews → MerchantReviews)                           │
│  └── Bookings (ServiceBookingPage → MerchantAppointments)               │
│                                                                          │
│  USER → ADMIN:                                                           │
│  ├── Disputes (DisputeCenter → AdminDisputeResolution)                  │
│  ├── KYC (KYCStatus → AdminKYCCompliance)                               │
│  └── Feedback (via Analytics → AdminAnalytics)                          │
│                                                                          │
│  SYSTEM → ALL:                                                           │
│  ├── Coin issuance (AdminCoinRulesEngine → All wallets)                 │
│  ├── Fraud alerts (AdminFraudDetection → All sections)                  │
│  └── AI recommendations (AdminAIInsights → All dashboards)              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Summary Statistics

| Section | Pages | Routes | Key Features |
|---------|-------|--------|--------------|
| Admin | 142 | 140+ | Governance, Promotions, Analytics, Compliance |
| Merchant | 164 | 160+ | POS, Inventory, Orders, CRM, Marketing |
| User | 107 | 100+ | Shopping, Earning, Payments, Social |
| Prive | 141 | 40+ | Exclusive offers, Influence, Redemption |
| Verticals | 154 | 130+ | Fashion, Food, Events, Healthcare, etc. |
| **Total** | **718** | **631** | Complete commerce ecosystem |

---

# MERCHANT PACKAGE TIERS

ReZ offers 4 merchant subscription packages based on marketing spend commitment.

## Quick Comparison

| Tier | Marketing Spend | Commission | ReZ Coin | Platform Revenue | Subscription |
|------|-----------------|------------|----------|------------------|--------------|
| **Free** | ₹0 | 20% | 5-10% | 10-15% | ₹0/₹499* |
| **Basic** | ₹10k/mo | 18% | 5-10% | 8-13% | ₹0/₹499* |
| **Golden** | ₹30k/mo | 17% | 5-10% | 7-12% | ₹0/₹499* |
| **Diamond** | ₹100k+/mo | 15% | 5-10% | 5-10% | ₹0/₹499* |

*\*₹0 if monthly sales > ₹100k, else ₹499/month*

## Optional Allocations (All Tiers)
- **Brand Coin**: 0-10% (Merchant's own loyalty coin)
- **Prive Coin**: 5-100% (Rewards for Prive members)

## Commission Breakdown
```
Transaction Amount → Commission (15-20%)
                     ├── ReZ Coin (5-10%) → User rewards
                     └── Platform (5-15%) → ReZ revenue

Optional (Merchant Funded):
├── Brand Coin (0-10%) → Merchant loyalty
└── Prive Coin (5-100%) → VIP rewards
```

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2025-01-01 | 1.1 | Added Merchant Package Tiers documentation |
| 2024-01-01 | 1.0 | Initial documentation with 718 pages, 631 routes |

---

*Generated for ReZ Platform - Complete Feature Documentation*
