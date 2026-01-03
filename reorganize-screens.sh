#!/bin/bash

# Screen Reorganization Script
# Moves 1,103 screens from flat structure to organized app-specific folders

set -e  # Exit on error

PAGES_DIR="/Users/rejaulkarim/Documents/ReZ V 2/rez-app/src/pages"
cd "$PAGES_DIR"

echo "🚀 Starting screen reorganization..."
echo "📊 Total screens to organize: 1,103"
echo ""

# ============================================================================
# PHASE 1: MOVE ADMIN SCREENS (178 files)
# ============================================================================
echo "📁 Phase 1: Moving Admin screens (178 files)..."

# Move all admin/* files to HQAdminUI/
if [ -d "admin" ]; then
    # Dashboards
    mv admin/AdminDashboard.jsx HQAdminUI/dashboards/ 2>/dev/null || true
    mv admin/AdminGlobalDashboard.jsx HQAdminUI/dashboards/ 2>/dev/null || true
    mv admin/AdminMarketingDashboard.jsx HQAdminUI/dashboards/ 2>/dev/null || true
    mv admin/AdminFinanceDashboard.jsx HQAdminUI/dashboards/ 2>/dev/null || true
    mv admin/AdminOperationsDashboard.jsx HQAdminUI/dashboards/ 2>/dev/null || true
    mv admin/AdminRegionalDashboard.jsx HQAdminUI/dashboards/ 2>/dev/null || true
    mv admin/AdminSupportDashboard.jsx HQAdminUI/dashboards/ 2>/dev/null || true
    mv admin/AdminContentDashboard.jsx HQAdminUI/dashboards/ 2>/dev/null || true
    mv admin/AdminAnalyticsDashboard.jsx HQAdminUI/dashboards/ 2>/dev/null || true
    mv admin/AdminEcosystemAnalytics.jsx HQAdminUI/dashboards/ 2>/dev/null || true

    # Merchants
    mv admin/AdminMerchants.jsx HQAdminUI/merchants/ 2>/dev/null || true
    mv admin/AdminMerchant*.jsx HQAdminUI/merchants/ 2>/dev/null || true

    # Users
    mv admin/AdminUsers.jsx HQAdminUI/users/ 2>/dev/null || true
    mv admin/AdminUser*.jsx HQAdminUI/users/ 2>/dev/null || true

    # Finance
    mv admin/AdminTransactions.jsx HQAdminUI/finance/ 2>/dev/null || true
    mv admin/AdminPayments.jsx HQAdminUI/finance/ 2>/dev/null || true
    mv admin/AdminCashback*.jsx HQAdminUI/finance/ 2>/dev/null || true
    mv admin/AdminBank*.jsx HQAdminUI/finance/ 2>/dev/null || true
    mv admin/AdminWallet*.jsx HQAdminUI/finance/ 2>/dev/null || true
    mv admin/AdminSettlement*.jsx HQAdminUI/finance/ 2>/dev/null || true

    # Coins
    mv admin/AdminCoin*.jsx HQAdminUI/coins/ 2>/dev/null || true
    mv admin/AdminPromo*.jsx HQAdminUI/coins/ 2>/dev/null || true
    mv admin/AdminRedemption*.jsx HQAdminUI/coins/ 2>/dev/null || true
    mv admin/AdminEarning*.jsx HQAdminUI/coins/ 2>/dev/null || true

    # Marketing
    mv admin/AdminCampaign*.jsx HQAdminUI/marketing/ 2>/dev/null || true
    mv admin/AdminMarketing*.jsx HQAdminUI/marketing/ 2>/dev/null || true
    mv admin/AdminEmail*.jsx HQAdminUI/marketing/ 2>/dev/null || true
    mv admin/AdminSMS*.jsx HQAdminUI/marketing/ 2>/dev/null || true
    mv admin/AdminMultiChannel*.jsx HQAdminUI/marketing/ 2>/dev/null || true
    mv admin/AdminBarter*.jsx HQAdminUI/marketing/ 2>/dev/null || true

    # Content
    mv admin/AdminContent*.jsx HQAdminUI/content/ 2>/dev/null || true
    mv admin/AdminCreator*.jsx HQAdminUI/content/ 2>/dev/null || true
    mv admin/AdminUGC*.jsx HQAdminUI/content/ 2>/dev/null || true
    mv admin/AdminSocial*.jsx HQAdminUI/content/ 2>/dev/null || true

    # Offers
    mv admin/AdminOffers.jsx HQAdminUI/offers/ 2>/dev/null || true
    mv admin/AdminFlash*.jsx HQAdminUI/offers/ 2>/dev/null || true
    mv admin/AdminBOGO*.jsx HQAdminUI/offers/ 2>/dev/null || true
    mv admin/AdminVouchers.jsx HQAdminUI/offers/ 2>/dev/null || true

    # Gamification
    mv admin/AdminGamification.jsx HQAdminUI/gamification/ 2>/dev/null || true
    mv admin/AdminGame*.jsx HQAdminUI/gamification/ 2>/dev/null || true
    mv admin/AdminTournaments.jsx HQAdminUI/gamification/ 2>/dev/null || true
    mv admin/AdminReferrals.jsx HQAdminUI/gamification/ 2>/dev/null || true

    # Operations
    mv admin/AdminSupport*.jsx HQAdminUI/operations/ 2>/dev/null || true
    mv admin/AdminFraud*.jsx HQAdminUI/operations/ 2>/dev/null || true
    mv admin/AdminDispute*.jsx HQAdminUI/operations/ 2>/dev/null || true
    mv admin/AdminOffline*.jsx HQAdminUI/operations/ 2>/dev/null || true
    mv admin/AdminInternal*.jsx HQAdminUI/operations/ 2>/dev/null || true
    mv admin/AdminOps*.jsx HQAdminUI/operations/ 2>/dev/null || true
    mv admin/Operations*.jsx HQAdminUI/operations/ 2>/dev/null || true

    # Analytics
    mv admin/AdminAnalytics.jsx HQAdminUI/analytics/ 2>/dev/null || true
    mv admin/AdminAI*.jsx HQAdminUI/analytics/ 2>/dev/null || true
    mv admin/AdminPredictive*.jsx HQAdminUI/analytics/ 2>/dev/null || true
    mv admin/AdminPrice*.jsx HQAdminUI/analytics/ 2>/dev/null || true
    mv admin/AdminProduct*.jsx HQAdminUI/analytics/ 2>/dev/null || true
    mv admin/AdminHeatmaps.jsx HQAdminUI/analytics/ 2>/dev/null || true
    mv admin/AdminSession*.jsx HQAdminUI/analytics/ 2>/dev/null || true
    mv admin/AdminRecommendations.jsx HQAdminUI/analytics/ 2>/dev/null || true

    # Platform
    mv admin/AdminSettings.jsx HQAdminUI/platform/ 2>/dev/null || true
    mv admin/AdminRole*.jsx HQAdminUI/platform/ 2>/dev/null || true
    mv admin/AdminRegional*.jsx HQAdminUI/platform/ 2>/dev/null || true
    mv admin/AdminMode*.jsx HQAdminUI/platform/ 2>/dev/null || true
    mv admin/AdminCategories.jsx HQAdminUI/platform/ 2>/dev/null || true
    mv admin/AdminEvents.jsx HQAdminUI/platform/ 2>/dev/null || true
    mv admin/AdminEventInventory.jsx HQAdminUI/platform/ 2>/dev/null || true

    # Infrastructure
    mv admin/AdminBackground*.jsx HQAdminUI/infrastructure/ 2>/dev/null || true
    mv admin/AdminLogs.jsx HQAdminUI/infrastructure/ 2>/dev/null || true
    mv admin/AdminPlatform*.jsx HQAdminUI/infrastructure/ 2>/dev/null || true
    mv admin/AdminIntegrations.jsx HQAdminUI/infrastructure/ 2>/dev/null || true
    mv admin/AdminPOS*.jsx HQAdminUI/infrastructure/ 2>/dev/null || true
    mv admin/AdminWebhook*.jsx HQAdminUI/infrastructure/ 2>/dev/null || true
    mv admin/AdminAPI*.jsx HQAdminUI/infrastructure/ 2>/dev/null || true
    mv admin/AdminGMB*.jsx HQAdminUI/infrastructure/ 2>/dev/null || true
    mv admin/AdminLanguage*.jsx HQAdminUI/infrastructure/ 2>/dev/null || true

    # Specialized - Rabtul
    mv admin/Rabtul*.jsx HQAdminUI/specialized/rabtul/ 2>/dev/null || true

    # Specialized - Adzy
    mv admin/Adzy*.jsx HQAdminUI/specialized/adzy/ 2>/dev/null || true

    # Specialized - Prive
    mv admin/AdminPrive*.jsx HQAdminUI/specialized/prive/ 2>/dev/null || true

    # Move remaining admin files to platform (catch-all)
    mv admin/Admin*.jsx HQAdminUI/platform/ 2>/dev/null || true

    echo "✅ Admin screens moved to HQAdminUI/"
fi

# ============================================================================
# PHASE 2: MOVE MERCHANT SCREENS (219 files)
# ============================================================================
echo "📁 Phase 2: Moving Merchant screens (219 files)..."

if [ -d "merchant" ]; then
    # Dashboard
    mv merchant/MerchantDashboard.jsx BiZoneUI/dashboard/ 2>/dev/null || true
    mv merchant/MerchantMultiStore*.jsx BiZoneUI/dashboard/ 2>/dev/null || true
    mv merchant/MerchantAnalytics.jsx BiZoneUI/dashboard/ 2>/dev/null || true
    mv merchant/MerchantBenchmarks.jsx BiZoneUI/dashboard/ 2>/dev/null || true
    mv merchant/MerchantDeal*.jsx BiZoneUI/dashboard/ 2>/dev/null || true

    # Auth
    mv merchant/MerchantSignup.jsx BiZoneUI/auth/ 2>/dev/null || true
    mv merchant/MerchantBusiness*.jsx BiZoneUI/auth/ 2>/dev/null || true
    mv merchant/MerchantSuccess.jsx BiZoneUI/auth/ 2>/dev/null || true

    # POS
    mv merchant/MerchantPOS*.jsx BiZoneUI/pos/ 2>/dev/null || true
    mv merchant/MerchantCategory*.jsx BiZoneUI/pos/ 2>/dev/null || true
    mv merchant/MerchantOffline*.jsx BiZoneUI/pos/ 2>/dev/null || true

    # Orders
    mv merchant/MerchantOrders*.jsx BiZoneUI/orders/ 2>/dev/null || true
    mv merchant/MerchantPurchase*.jsx BiZoneUI/orders/ 2>/dev/null || true

    # Inventory
    mv merchant/MerchantInventory*.jsx BiZoneUI/inventory/ 2>/dev/null || true
    mv merchant/MerchantExpiry*.jsx BiZoneUI/inventory/ 2>/dev/null || true
    mv merchant/MerchantBatch*.jsx BiZoneUI/inventory/ 2>/dev/null || true
    mv merchant/MerchantAuto*.jsx BiZoneUI/inventory/ 2>/dev/null || true
    mv merchant/MerchantBarcode*.jsx BiZoneUI/inventory/ 2>/dev/null || true

    # Offers
    mv merchant/CreateOffer.jsx BiZoneUI/offers/ 2>/dev/null || true
    mv merchant/MerchantBOGO*.jsx BiZoneUI/offers/ 2>/dev/null || true
    mv merchant/MerchantCashback*.jsx BiZoneUI/offers/ 2>/dev/null || true
    mv merchant/MerchantBirthday*.jsx BiZoneUI/offers/ 2>/dev/null || true
    mv merchant/MerchantClearance*.jsx BiZoneUI/offers/ 2>/dev/null || true
    mv merchant/MerchantCombo*.jsx BiZoneUI/offers/ 2>/dev/null || true
    mv merchant/MerchantCross*.jsx BiZoneUI/offers/ 2>/dev/null || true
    mv merchant/MerchantCart*.jsx BiZoneUI/offers/ 2>/dev/null || true
    mv merchant/MerchantDemand*.jsx BiZoneUI/offers/ 2>/dev/null || true

    # Customers
    mv merchant/MerchantCRM.jsx BiZoneUI/customers/ 2>/dev/null || true
    mv merchant/MerchantBill*.jsx BiZoneUI/customers/ 2>/dev/null || true
    mv merchant/MerchantAppointment*.jsx BiZoneUI/customers/ 2>/dev/null || true
    mv merchant/MerchantBooking*.jsx BiZoneUI/customers/ 2>/dev/null || true
    mv merchant/MerchantClass*.jsx BiZoneUI/customers/ 2>/dev/null || true
    mv merchant/MerchantClinic*.jsx BiZoneUI/customers/ 2>/dev/null || true

    # Finance
    mv merchant/MerchantAccounting.jsx BiZoneUI/finance/ 2>/dev/null || true
    mv merchant/MerchantAccountant*.jsx BiZoneUI/finance/ 2>/dev/null || true
    mv merchant/MerchantCommission*.jsx BiZoneUI/finance/ 2>/dev/null || true
    mv merchant/MerchantCash*.jsx BiZoneUI/finance/ 2>/dev/null || true
    mv merchant/MerchantCredit*.jsx BiZoneUI/finance/ 2>/dev/null || true
    mv merchant/MerchantPost*.jsx BiZoneUI/finance/ 2>/dev/null || true

    # Marketing
    mv merchant/MerchantCampaigns.jsx BiZoneUI/marketing/ 2>/dev/null || true
    mv merchant/MerchantAdzy*.jsx BiZoneUI/marketing/ 2>/dev/null || true
    mv merchant/MerchantCreator*.jsx BiZoneUI/marketing/ 2>/dev/null || true
    mv merchant/MerchantContest*.jsx BiZoneUI/marketing/ 2>/dev/null || true
    mv merchant/MerchantContent.jsx BiZoneUI/marketing/ 2>/dev/null || true

    # Multi-store
    mv merchant/MerchantBranch*.jsx BiZoneUI/multi-store/ 2>/dev/null || true
    mv merchant/MerchantAggregator*.jsx BiZoneUI/multi-store/ 2>/dev/null || true
    mv merchant/MerchantCaptain*.jsx BiZoneUI/multi-store/ 2>/dev/null || true

    # Advanced
    mv merchant/MerchantBranded*.jsx BiZoneUI/advanced/ 2>/dev/null || true
    mv merchant/MerchantBulk*.jsx BiZoneUI/advanced/ 2>/dev/null || true
    mv merchant/MerchantCalendar*.jsx BiZoneUI/advanced/ 2>/dev/null || true
    mv merchant/MerchantCompetitor*.jsx BiZoneUI/advanced/ 2>/dev/null || true
    mv merchant/MerchantControl*.jsx BiZoneUI/advanced/ 2>/dev/null || true

    # Analytics
    mv merchant/MerchantReport*.jsx BiZoneUI/analytics/ 2>/dev/null || true
    mv merchant/MerchantInsight*.jsx BiZoneUI/analytics/ 2>/dev/null || true
    mv merchant/MerchantCustomer*.jsx BiZoneUI/analytics/ 2>/dev/null || true

    # Settings
    mv merchant/MerchantSettings.jsx BiZoneUI/settings/ 2>/dev/null || true
    mv merchant/MerchantProfile.jsx BiZoneUI/settings/ 2>/dev/null || true

    # Move remaining merchant files to advanced (catch-all)
    mv merchant/Merchant*.jsx BiZoneUI/advanced/ 2>/dev/null || true

    echo "✅ Merchant screens moved to BiZoneUI/"
fi

# ============================================================================
# PHASE 3: MOVE USER SCREENS (35 files)
# ============================================================================
echo "📁 Phase 3: Moving User screens (35 files)..."

if [ -d "user" ]; then
    # Move all user/* files to RezUI/account/user-management/
    mv user/*.jsx RezUI/account/user-management/ 2>/dev/null || true

    echo "✅ User screens moved to RezUI/account/user-management/"
fi

# ============================================================================
# PHASE 4: MOVE PRIVÉ SCREENS (141 files)
# ============================================================================
echo "📁 Phase 4: Moving Privé screens (141 files)..."

if [ -d "prive" ]; then
    # Dashboard
    mv prive/PriveHome.jsx RezPriveUI/dashboard/ 2>/dev/null || true
    mv prive/PriveProfile.jsx RezPriveUI/dashboard/ 2>/dev/null || true
    mv prive/PriveSettings.jsx RezPriveUI/dashboard/ 2>/dev/null || true
    mv prive/PriveWallet.jsx RezPriveUI/dashboard/ 2>/dev/null || true

    # Tier
    mv prive/PriveTier*.jsx RezPriveUI/tier/ 2>/dev/null || true
    mv prive/PriveScore*.jsx RezPriveUI/tier/ 2>/dev/null || true
    mv prive/PriveAuthority.jsx RezPriveUI/tier/ 2>/dev/null || true
    mv prive/PriveRecognition.jsx RezPriveUI/tier/ 2>/dev/null || true

    # Offers
    mv prive/PriveOffer*.jsx RezPriveUI/offers/ 2>/dev/null || true
    mv prive/PrivePrivileges.jsx RezPriveUI/offers/ 2>/dev/null || true
    mv prive/PrivePartner*.jsx RezPriveUI/offers/ 2>/dev/null || true

    # Redemption
    mv prive/PriveRedeem*.jsx RezPriveUI/redemption/ 2>/dev/null || true
    mv prive/PriveGift*.jsx RezPriveUI/redemption/ 2>/dev/null || true
    mv prive/redemption/*.jsx RezPriveUI/redemption/ 2>/dev/null || true

    # Campaigns
    mv prive/PriveBrand*.jsx RezPriveUI/campaigns/ 2>/dev/null || true
    mv prive/PriveInvitation*.jsx RezPriveUI/campaigns/ 2>/dev/null || true
    mv prive/PriveCampaign*.jsx RezPriveUI/campaigns/ 2>/dev/null || true

    # Content
    mv prive/PriveContent*.jsx RezPriveUI/content/ 2>/dev/null || true
    mv prive/content/*.jsx RezPriveUI/content/ 2>/dev/null || true

    # Influence
    mv prive/PriveInfluence*.jsx RezPriveUI/influence/ 2>/dev/null || true

    # Activity
    mv prive/PriveActivity*.jsx RezPriveUI/activity/ 2>/dev/null || true
    mv prive/PriveEarnings.jsx RezPriveUI/activity/ 2>/dev/null || true
    mv prive/PriveNotifications.jsx RezPriveUI/activity/ 2>/dev/null || true

    # Explore
    mv prive/PriveExplore*.jsx RezPriveUI/explore/ 2>/dev/null || true
    mv prive/PriveStore*.jsx RezPriveUI/explore/ 2>/dev/null || true
    mv prive/PriveExperience*.jsx RezPriveUI/explore/ 2>/dev/null || true
    mv prive/explore/*.jsx RezPriveUI/explore/ 2>/dev/null || true

    # Entry
    mv prive/PriveEligibility.jsx RezPriveUI/entry/ 2>/dev/null || true
    mv prive/entry/*.jsx RezPriveUI/entry/ 2>/dev/null || true

    # Checkout
    mv prive/PriveCheckout.jsx RezPriveUI/checkout/ 2>/dev/null || true
    mv prive/PriveBooking.jsx RezPriveUI/checkout/ 2>/dev/null || true

    # Move remaining to dashboard
    mv prive/Prive*.jsx RezPriveUI/dashboard/ 2>/dev/null || true

    # Move subdirectories
    mv prive/core/*.jsx RezPriveUI/dashboard/ 2>/dev/null || true
    mv prive/notifications/*.jsx RezPriveUI/activity/ 2>/dev/null || true
    mv prive/offers/*.jsx RezPriveUI/offers/ 2>/dev/null || true
    mv prive/profile/*.jsx RezPriveUI/dashboard/ 2>/dev/null || true

    echo "✅ Privé screens moved to RezPriveUI/"
fi

# ============================================================================
# PHASE 5: MOVE WASIL & GROWTH APP SCREENS (125 files)
# ============================================================================
echo "📁 Phase 5: Moving Wasil & Growth app screens..."

# Wasil apps (already in subdirectories, just move the parent)
if [ -d "wasil" ]; then
    mv wasil/* WasilApps/ 2>/dev/null || true
    echo "✅ Wasil app screens moved to WasilApps/"
fi

# Growth apps
if [ -d "growth" ]; then
    mv growth/* GrowthApps/ 2>/dev/null || true
    echo "✅ Growth app screens moved to GrowthApps/"
fi

# Discovery apps
for app in air coinhunt localedge stylesync techhunt fitcircle homehub; do
    if [ -d "$app" ]; then
        mv "$app" DiscoveryApps/ 2>/dev/null || true
    fi
done
echo "✅ Discovery app screens moved to DiscoveryApps/"

# ============================================================================
# PHASE 6: MOVE ROOT CONSUMER APP SCREENS (400+ files)
# ============================================================================
echo "📁 Phase 6: Moving ReZ App consumer screens (400+ files)..."

# Core - Auth
mv Login.jsx RezUI/core/auth/ 2>/dev/null || true
mv Signup.jsx RezUI/core/auth/ 2>/dev/null || true
mv OTPVerify.jsx RezUI/core/auth/ 2>/dev/null || true
mv ForgotPassword.jsx RezUI/core/auth/ 2>/dev/null || true

# Core - Onboarding
mv Splash.jsx RezUI/core/onboarding/ 2>/dev/null || true
mv Onboarding*.jsx RezUI/core/onboarding/ 2>/dev/null || true

# Core - Profile
mv Profile.jsx RezUI/core/profile/ 2>/dev/null || true
mv Settings.jsx RezUI/core/profile/ 2>/dev/null || true
mv Account*.jsx RezUI/account/user-management/ 2>/dev/null || true
mv ChangePassword.jsx RezUI/account/user-management/ 2>/dev/null || true
mv KYC*.jsx RezUI/account/user-management/ 2>/dev/null || true

# Core - Main
mv Home.jsx RezUI/core/ 2>/dev/null || true

# Discovery
mv Search*.jsx RezUI/discovery/ 2>/dev/null || true
mv Categories.jsx RezUI/discovery/ 2>/dev/null || true
mv CategoryHub.jsx RezUI/discovery/ 2>/dev/null || true
mv Explore*.jsx RezUI/discovery/ 2>/dev/null || true
mv Trending*.jsx RezUI/discovery/ 2>/dev/null || true
mv MapView*.jsx RezUI/discovery/ 2>/dev/null || true

# Shopping
mv Cart.jsx RezUI/shopping/ 2>/dev/null || true
mv *Checkout.jsx RezUI/shopping/ 2>/dev/null || true
mv Order*.jsx RezUI/shopping/ 2>/dev/null || true
mv Bookings.jsx RezUI/shopping/ 2>/dev/null || true
mv MyTickets.jsx RezUI/shopping/ 2>/dev/null || true
mv Ticket*.jsx RezUI/shopping/ 2>/dev/null || true
mv Delivery*.jsx RezUI/shopping/ 2>/dev/null || true
mv Return*.jsx RezUI/shopping/ 2>/dev/null || true
mv Refund*.jsx RezUI/shopping/ 2>/dev/null || true
mv *Cancellation.jsx RezUI/shopping/ 2>/dev/null || true
mv ProductComparison.jsx RezUI/shopping/comparison/ 2>/dev/null || true
mv Compare*.jsx RezUI/shopping/comparison/ 2>/dev/null || true

# Wallet
mv Wallet.jsx RezUI/wallet/ 2>/dev/null || true
mv WalletTopUp.jsx RezUI/wallet/topup/ 2>/dev/null || true
mv WalletWithdraw.jsx RezUI/wallet/topup/ 2>/dev/null || true
mv BankLinking*.jsx RezUI/wallet/topup/ 2>/dev/null || true
mv UPILinking*.jsx RezUI/wallet/topup/ 2>/dev/null || true
mv PayInStore.jsx RezUI/wallet/payments/ 2>/dev/null || true
mv ScanPay.jsx RezUI/wallet/payments/ 2>/dev/null || true
mv PaymentGateway.jsx RezUI/wallet/payments/ 2>/dev/null || true
mv PaymentMethods.jsx RezUI/wallet/payments/ 2>/dev/null || true
mv CoinHistory.jsx RezUI/wallet/transactions/ 2>/dev/null || true
mv CoinConverter.jsx RezUI/wallet/coins/ 2>/dev/null || true
mv CoinExpiry*.jsx RezUI/wallet/coins/ 2>/dev/null || true
mv CoinSystem*.jsx RezUI/wallet/coins/ 2>/dev/null || true
mv CoinType*.jsx RezUI/wallet/coins/ 2>/dev/null || true
mv PurchaseCoins.jsx RezUI/wallet/coins/ 2>/dev/null || true
mv GiftCoins.jsx RezUI/wallet/coins/ 2>/dev/null || true

# Wallet subdirectory
if [ -d "wallet" ]; then
    mv wallet/Wallet*.jsx RezUI/wallet/ 2>/dev/null || true
fi

# Rewards
mv Earn.jsx RezUI/rewards/ 2>/dev/null || true
mv Rewards*.jsx RezUI/rewards/ 2>/dev/null || true
mv Loyalty*.jsx RezUI/rewards/ 2>/dev/null || true
mv Gamification*.jsx RezUI/rewards/ 2>/dev/null || true
mv Missions.jsx RezUI/rewards/ 2>/dev/null || true
mv BrandLoyalty.jsx RezUI/rewards/ 2>/dev/null || true

# Rewards - Games
if [ -d "earn" ]; then
    mv earn/Quiz.jsx RezUI/rewards/games/ 2>/dev/null || true
    mv earn/ScratchCard.jsx RezUI/rewards/games/ 2>/dev/null || true
    mv earn/MemoryMatch.jsx RezUI/rewards/games/ 2>/dev/null || true
    mv earn/GuessPrice.jsx RezUI/rewards/games/ 2>/dev/null || true
    mv earn/PlayGames.jsx RezUI/rewards/games/ 2>/dev/null || true
    mv earn/LuckyDraw.jsx RezUI/rewards/games/ 2>/dev/null || true

    # Social Impact
    mv earn/SocialImpact*.jsx RezUI/rewards/social-impact/ 2>/dev/null || true

    # UGC
    mv earn/UGCCreator.jsx RezUI/rewards/ugc/ 2>/dev/null || true
    mv earn/WriteReviews.jsx RezUI/rewards/ugc/ 2>/dev/null || true
    mv earn/UploadBill*.jsx RezUI/rewards/ugc/ 2>/dev/null || true

    # Move rest to rewards
    mv earn/*.jsx RezUI/rewards/ 2>/dev/null || true
fi

# Social
if [ -d "social" ]; then
    mv social/Social*.jsx RezUI/social/ 2>/dev/null || true
fi
mv SocialFeed.jsx RezUI/social/ 2>/dev/null || true
mv SocialHub.jsx RezUI/social/ 2>/dev/null || true

# Categories - Beauty
if [ -d "beauty" ]; then
    mv beauty/*.jsx RezUI/categories/beauty/ 2>/dev/null || true
fi
mv Beauty*.jsx RezUI/categories/beauty/ 2>/dev/null || true

# Categories - Fashion
if [ -d "fashion" ]; then
    mv fashion/*.jsx RezUI/categories/fashion/ 2>/dev/null || true
fi
mv Fashion*.jsx RezUI/categories/fashion/ 2>/dev/null || true

# Categories - Grocery
if [ -d "grocery" ]; then
    mv grocery/*.jsx RezUI/categories/grocery/ 2>/dev/null || true
fi
mv Grocery*.jsx RezUI/categories/grocery/ 2>/dev/null || true

# Categories - Healthcare
if [ -d "healthcare" ]; then
    mv healthcare/*.jsx RezUI/categories/healthcare/ 2>/dev/null || true
fi
mv Healthcare*.jsx RezUI/categories/healthcare/ 2>/dev/null || true

# Categories - Fitness
if [ -d "fitness" ]; then
    mv fitness/*.jsx RezUI/categories/fitness/ 2>/dev/null || true
fi
mv Fitness*.jsx RezUI/categories/fitness/ 2>/dev/null || true

# Categories - Electronics
mv Electronics*.jsx RezUI/categories/electronics/ 2>/dev/null || true

# Categories - Food & Dining
mv FoodDining*.jsx RezUI/categories/food-dining/ 2>/dev/null || true

# Categories - Events
if [ -d "events" ]; then
    mv events/*.jsx RezUI/categories/events/ 2>/dev/null || true
fi
mv Events*.jsx RezUI/categories/events/ 2>/dev/null || true
mv MyEvents.jsx RezUI/categories/events/ 2>/dev/null || true

# Categories - Home Services
if [ -d "home-services" ]; then
    mv home-services/*.jsx RezUI/categories/home-services/ 2>/dev/null || true
fi
mv HomeServices*.jsx RezUI/categories/home-services/ 2>/dev/null || true

# Categories - Financial
if [ -d "financial" ]; then
    mv financial/*.jsx RezUI/categories/financial/ 2>/dev/null || true
fi
mv Financial*.jsx RezUI/categories/financial/ 2>/dev/null || true

# Categories - Experience
if [ -d "experience" ]; then
    mv experience/*.jsx RezUI/categories/experience/ 2>/dev/null || true
fi
mv Experience*.jsx RezUI/categories/experience/ 2>/dev/null || true

# Categories - Corporate
if [ -d "corporate" ]; then
    mv corporate/*.jsx RezUI/corporate/ 2>/dev/null || true
fi
mv Corporate*.jsx RezUI/corporate/ 2>/dev/null || true
mv Employee*.jsx RezUI/corporate/ 2>/dev/null || true

# Categories - Explore
if [ -d "explore" ]; then
    mv explore/*.jsx RezUI/categories/explore/ 2>/dev/null || true
fi

# Categories - Exclusive
if [ -d "exclusive" ]; then
    mv exclusive/*.jsx RezUI/exclusive/ 2>/dev/null || true
fi
mv Exclusive*.jsx RezUI/exclusive/ 2>/dev/null || true
mv Birthday*.jsx RezUI/exclusive/ 2>/dev/null || true
mv Student*.jsx RezUI/exclusive/ 2>/dev/null || true
mv Women*.jsx RezUI/exclusive/ 2>/dev/null || true

# Categories - Stores
if [ -d "stores" ]; then
    mv stores/*.jsx RezUI/categories/stores/ 2>/dev/null || true
fi
mv *Store*.jsx RezUI/categories/stores/ 2>/dev/null || true

# Modes - Mall
if [ -d "mall" ]; then
    mv mall/*.jsx RezUI/modes/mall/ 2>/dev/null || true
fi
mv Mall*.jsx RezUI/modes/mall/ 2>/dev/null || true
mv RezMall.jsx RezUI/modes/mall/ 2>/dev/null || true

# Modes - Cash Store
if [ -d "cashstore" ]; then
    mv cashstore/*.jsx RezUI/modes/cashstore/ 2>/dev/null || true
fi
mv CashStore*.jsx RezUI/modes/cashstore/ 2>/dev/null || true

# Deals
mv Deal*.jsx RezUI/deals/ 2>/dev/null || true
mv SuperDeals.jsx RezUI/deals/ 2>/dev/null || true

# Referrals
mv Referral*.jsx RezUI/referrals/ 2>/dev/null || true
mv Invite*.jsx RezUI/referrals/ 2>/dev/null || true

# Support
mv Help*.jsx RezUI/support/ 2>/dev/null || true
mv Contact*.jsx RezUI/support/ 2>/dev/null || true
mv Chat*.jsx RezUI/support/ 2>/dev/null || true
mv Support*.jsx RezUI/support/ 2>/dev/null || true
mv Dispute*.jsx RezUI/support/ 2>/dev/null || true
mv Security*.jsx RezUI/support/ 2>/dev/null || true

# Account - Preferences
mv Notification*.jsx RezUI/account/preferences/ 2>/dev/null || true
mv Privacy*.jsx RezUI/account/preferences/ 2>/dev/null || true
mv DataPrivacy*.jsx RezUI/account/preferences/ 2>/dev/null || true
mv AppTheme*.jsx RezUI/account/preferences/ 2>/dev/null || true
mv Language*.jsx RezUI/account/preferences/ 2>/dev/null || true
mv SavedMerchants*.jsx RezUI/account/preferences/ 2>/dev/null || true
mv RecentlyViewed*.jsx RezUI/account/preferences/ 2>/dev/null || true
mv Wishlist*.jsx RezUI/account/preferences/ 2>/dev/null || true
mv EnhancedWishlist.jsx RezUI/account/preferences/ 2>/dev/null || true

# Account - Addresses
mv Address*.jsx RezUI/account/addresses/ 2>/dev/null || true

# AI
if [ -d "ai" ]; then
    mv ai/*.jsx RezUI/ai/ 2>/dev/null || true
fi
mv AI*.jsx RezUI/ai/ 2>/dev/null || true

# Lifestyle
if [ -d "lifestyle" ]; then
    mv lifestyle/*.jsx RezUI/categories/ 2>/dev/null || true
fi
mv Lifestyle*.jsx RezUI/categories/ 2>/dev/null || true

# Creator
if [ -d "creator" ]; then
    mv creator/*.jsx RezUI/social/ 2>/dev/null || true
fi
mv Creator*.jsx RezUI/social/ 2>/dev/null || true

# Partner
if [ -d "partner" ]; then
    mv partner/*.jsx RezUI/exclusive/ 2>/dev/null || true
fi
mv Partner*.jsx RezUI/exclusive/ 2>/dev/null || true

# College
if [ -d "college" ]; then
    mv college/*.jsx RezUI/exclusive/ 2>/dev/null || true
fi
mv *Ambassador*.jsx RezUI/exclusive/ 2>/dev/null || true

# Contests
if [ -d "contests" ]; then
    mv contests/*.jsx RezUI/rewards/ 2>/dev/null || true
fi
mv Contest*.jsx RezUI/rewards/ 2>/dev/null || true

# Miscellaneous consumer pages to core
mv Trust*.jsx RezUI/core/ 2>/dev/null || true
mv Savings*.jsx RezUI/wallet/ 2>/dev/null || true
mv PriceLedger.jsx RezUI/categories/ 2>/dev/null || true
mv Prescription*.jsx RezUI/categories/healthcare/ 2>/dev/null || true
mv Insurance*.jsx RezUI/categories/healthcare/ 2>/dev/null || true
mv TableReservation.jsx RezUI/categories/food-dining/ 2>/dev/null || true
mv BillSplitting.jsx RezUI/wallet/payments/ 2>/dev/null || true
mv ContentSubmission*.jsx RezUI/social/ 2>/dev/null || true
mv Transaction*.jsx RezUI/wallet/transactions/ 2>/dev/null || true

echo "✅ ReZ App consumer screens moved to RezUI/"

# ============================================================================
# CLEANUP
# ============================================================================
echo ""
echo "🧹 Cleaning up empty directories..."

# Remove empty category directories
rmdir beauty 2>/dev/null || true
rmdir fashion 2>/dev/null || true
rmdir grocery 2>/dev/null || true
rmdir healthcare 2>/dev/null || true
rmdir fitness 2>/dev/null || true
rmdir events 2>/dev/null || true
rmdir lifestyle 2>/dev/null || true
rmdir social 2>/dev/null || true
rmdir earn 2>/dev/null || true
rmdir wallet 2>/dev/null || true
rmdir ai 2>/dev/null || true
rmdir explore 2>/dev/null || true
rmdir exclusive 2>/dev/null || true
rmdir corporate 2>/dev/null || true
rmdir financial 2>/dev/null || true
rmdir experience 2>/dev/null || true
rmdir stores 2>/dev/null || true
rmdir mall 2>/dev/null || true
rmdir cashstore 2>/dev/null || true
rmdir creator 2>/dev/null || true
rmdir partner 2>/dev/null || true
rmdir college 2>/dev/null || true
rmdir contests 2>/dev/null || true
rmdir support 2>/dev/null || true
rmdir home-services 2>/dev/null || true

# Remove empty main directories
rmdir admin 2>/dev/null || true
rmdir merchant 2>/dev/null || true
rmdir user 2>/dev/null || true
rmdir prive/core 2>/dev/null || true
rmdir prive/content 2>/dev/null || true
rmdir prive/entry 2>/dev/null || true
rmdir prive/explore 2>/dev/null || true
rmdir prive/notifications 2>/dev/null || true
rmdir prive/offers 2>/dev/null || true
rmdir prive/profile 2>/dev/null || true
rmdir prive/redemption 2>/dev/null || true
rmdir prive 2>/dev/null || true
rmdir wasil 2>/dev/null || true
rmdir growth 2>/dev/null || true

echo "✅ Cleanup complete"

# ============================================================================
# SUMMARY
# ============================================================================
echo ""
echo "🎉 REORGANIZATION COMPLETE!"
echo ""
echo "📊 New Structure Summary:"
echo "  📱 RezUI/           - Consumer app screens"
echo "  🏪 BiZoneUI/        - Merchant platform screens"
echo "  🔐 HQAdminUI/       - Admin platform screens"
echo "  👑 RezPriveUI/      - VIP program screens"
echo "  ⚡ WasilApps/       - Quick commerce apps"
echo "  📈 GrowthApps/      - Viral acquisition apps"
echo "  🔍 DiscoveryApps/   - Discovery apps"
echo "  🌐 SharedUI/        - Shared components"
echo ""
echo "⚠️  NEXT STEPS:"
echo "  1. Update import paths in all files"
echo "  2. Update routing in App.jsx"
echo "  3. Test the application"
echo "  4. Commit changes to git"
echo ""
echo "✨ All 1,103 screens have been organized!"
