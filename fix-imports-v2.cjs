const fs = require('fs');
const path = require('path');

// Complete mapping of old paths to new paths
const pathMappings = {
  // ===== RezUI Core Screens =====
  './pages/Home': './pages/RezUI/core/Home',
  './pages/Login': './pages/RezUI/core/auth/Login',
  './pages/Signup': './pages/RezUI/core/auth/Signup',
  './pages/OTPVerify': './pages/RezUI/core/auth/OTPVerify',
  './pages/Splash': './pages/RezUI/core/Splash',
  './pages/Onboarding': './pages/RezUI/core/Onboarding',
  './pages/Privacy': './pages/RezUI/core/Privacy',
  './pages/Terms': './pages/RezUI/core/Terms',

  // ===== RezUI Discovery =====
  './pages/Explore': './pages/RezUI/discovery/Explore',
  './pages/ExploreNew': './pages/RezUI/discovery/ExploreNew',
  './pages/Categories': './pages/RezUI/discovery/Categories',
  './pages/Search': './pages/RezUI/discovery/Search',
  './pages/SearchResults': './pages/RezUI/discovery/SearchResults',
  './pages/Filter': './pages/RezUI/discovery/Filter',
  './pages/ProductListing': './pages/RezUI/discovery/ProductListing',

  // ===== RezUI Shopping =====
  './pages/StorePage': './pages/RezUI/shopping/StorePage',
  './pages/StoreHub': './pages/RezUI/shopping/StoreHub',
  './pages/StoreDetailPage': './pages/RezUI/shopping/StoreDetailPage',
  './pages/ProductDetail': './pages/RezUI/shopping/ProductDetail',
  './pages/Cart': './pages/RezUI/shopping/Cart',
  './pages/Checkout': './pages/RezUI/shopping/Checkout',
  './pages/OrderConfirmation': './pages/RezUI/shopping/OrderConfirmation',
  './pages/OrderTracking': './pages/RezUI/shopping/OrderTracking',
  './pages/OrderHistory': './pages/RezUI/shopping/OrderHistory',
  './pages/OrderDetail': './pages/RezUI/shopping/OrderDetail',

  // ===== RezUI Wallet =====
  './pages/Wallet': './pages/RezUI/wallet/Wallet',
  './pages/WalletTopup': './pages/RezUI/wallet/WalletTopup',
  './pages/Transactions': './pages/RezUI/wallet/Transactions',
  './pages/TransactionDetail': './pages/RezUI/wallet/TransactionDetail',
  './pages/CoinWallet': './pages/RezUI/wallet/coins/CoinWallet',
  './pages/CoinHistory': './pages/RezUI/wallet/coins/CoinHistory',
  './pages/CoinEarn': './pages/RezUI/wallet/coins/CoinEarn',
  './pages/CoinRedeem': './pages/RezUI/wallet/coins/CoinRedeem',
  './pages/PaymentMethods': './pages/RezUI/wallet/payments/PaymentMethods',
  './pages/AddPaymentMethod': './pages/RezUI/wallet/payments/AddPaymentMethod',
  './pages/UPIPayment': './pages/RezUI/wallet/payments/UPIPayment',
  './pages/CardPayment': './pages/RezUI/wallet/payments/CardPayment',

  // ===== RezUI Modes =====
  './pages/Offers': './pages/RezUI/modes/Offers',
  './pages/CashStore': './pages/RezUI/modes/CashStore',
  './pages/RezMall': './pages/RezUI/modes/RezMall',
  './pages/RezPrive': './pages/RezUI/modes/RezPrive',
  './pages/cashstore/CashStoreTrack': './pages/RezUI/modes/cashstore/CashStoreTrack',

  // ===== RezUI Rewards =====
  './pages/CoinHunt': './pages/RezUI/rewards/games/CoinHunt',
  './pages/SpinWheel': './pages/RezUI/rewards/games/SpinWheel',
  './pages/Scratch': './pages/RezUI/rewards/games/Scratch',
  './pages/Quiz': './pages/RezUI/rewards/games/Quiz',
  './pages/SocialImpact': './pages/RezUI/rewards/social-impact/SocialImpact',
  './pages/Donations': './pages/RezUI/rewards/social-impact/Donations',
  './pages/UGCHub': './pages/RezUI/rewards/ugc/UGCHub',
  './pages/CreatePost': './pages/RezUI/rewards/ugc/CreatePost',

  // ===== RezUI Social =====
  './pages/Feed': './pages/RezUI/social/Feed',
  './pages/Post': './pages/RezUI/social/Post',
  './pages/PostDetail': './pages/RezUI/social/PostDetail',
  './pages/Comments': './pages/RezUI/social/Comments',

  // ===== RezUI Deals =====
  './pages/Deals': './pages/RezUI/deals/Deals',
  './pages/FlashSale': './pages/RezUI/deals/FlashSale',
  './pages/DealDetail': './pages/RezUI/deals/DealDetail',

  // ===== RezUI Referrals =====
  './pages/Referrals': './pages/RezUI/referrals/Referrals',
  './pages/ReferralStats': './pages/RezUI/referrals/ReferralStats',

  // ===== RezUI Support =====
  './pages/Support': './pages/RezUI/support/Support',
  './pages/Help': './pages/RezUI/support/Help',
  './pages/ContactUs': './pages/RezUI/support/ContactUs',
  './pages/FAQ': './pages/RezUI/support/FAQ',
  './pages/ChatSupport': './pages/RezUI/support/ChatSupport',

  // ===== RezUI Account =====
  './pages/Profile': './pages/RezUI/account/Profile',
  './pages/EditProfile': './pages/RezUI/account/EditProfile',
  './pages/Settings': './pages/RezUI/account/Settings',
  './pages/Notifications': './pages/RezUI/account/Notifications',
  './pages/Wishlist': './pages/RezUI/account/Wishlist',
  './pages/SavedAddresses': './pages/RezUI/account/SavedAddresses',
  './pages/AddAddress': './pages/RezUI/account/AddAddress',

  // ===== RezPriveUI (All prive/* paths) =====
  './pages/prive/PriveHome': './pages/RezPriveUI/dashboard/PriveHome',
  './pages/prive/PrivePrivileges': './pages/RezPriveUI/privileges/PrivePrivileges',
  './pages/prive/PriveExplore': './pages/RezPriveUI/explore/PriveExplore',
  './pages/prive/PriveInfluence': './pages/RezPriveUI/influence/PriveInfluence',
  './pages/prive/PriveTierProgress': './pages/RezPriveUI/tiers/PriveTierProgress',
  './pages/prive/PriveOfferDetail': './pages/RezPriveUI/offers/PriveOfferDetail',
  './pages/prive/PriveRedeem': './pages/RezPriveUI/redeem/PriveRedeem',
  './pages/prive/PriveProfile': './pages/RezPriveUI/profile/PriveProfile',
  './pages/prive/PriveStoreDetail': './pages/RezPriveUI/stores/PriveStoreDetail',
  './pages/prive/PriveInfluenceHub': './pages/RezPriveUI/influence/PriveInfluenceHub',
  './pages/prive/PriveNotifications': './pages/RezPriveUI/notifications/PriveNotifications',
  './pages/prive/PriveBrandInvitation': './pages/RezPriveUI/brands/PriveBrandInvitation',
  './pages/prive/PriveEarnings': './pages/RezPriveUI/earnings/PriveEarnings',
  './pages/prive/PriveActivity': './pages/RezPriveUI/activity/PriveActivity',
  './pages/prive/PriveRecognition': './pages/RezPriveUI/recognition/PriveRecognition',
  './pages/prive/PriveAuthority': './pages/RezPriveUI/authority/PriveAuthority',
  './pages/prive/PriveVisibilityControl': './pages/RezPriveUI/privacy/PriveVisibilityControl',
  './pages/prive/PriveActivityStatement': './pages/RezPriveUI/reports/PriveActivityStatement',

  // ===== HQAdminUI Dashboards =====
  './pages/admin/AdminDashboard': './pages/HQAdminUI/dashboards/AdminDashboard',
  './pages/admin/AdminGlobalDashboard': './pages/HQAdminUI/dashboards/AdminGlobalDashboard',
  './pages/admin/AdminMarketingDashboard': './pages/HQAdminUI/dashboards/AdminMarketingDashboard',
  './pages/admin/AdminFinanceDashboard': './pages/HQAdminUI/dashboards/AdminFinanceDashboard',
  './pages/admin/AdminOperationsDashboard': './pages/HQAdminUI/dashboards/AdminOperationsDashboard',
  './pages/admin/AdminRegionalDashboard': './pages/HQAdminUI/dashboards/AdminRegionalDashboard',
  './pages/admin/AdminSupportDashboard': './pages/HQAdminUI/dashboards/AdminSupportDashboard',
  './pages/admin/AdminContentDashboard': './pages/HQAdminUI/dashboards/AdminContentDashboard',
  './pages/admin/AdminAnalyticsDashboard': './pages/HQAdminUI/dashboards/AdminAnalyticsDashboard',
  './pages/admin/OperationsCityDashboard': './pages/HQAdminUI/dashboards/OperationsCityDashboard',

  // ===== HQAdminUI Merchants =====
  './pages/admin/AdminMerchants': './pages/HQAdminUI/merchants/AdminMerchants',
  './pages/admin/AdminMerchantPackages': './pages/HQAdminUI/merchants/AdminMerchantPackages',

  // ===== HQAdminUI Users =====
  './pages/admin/AdminUsers': './pages/HQAdminUI/users/AdminUsers',
  './pages/admin/AdminUserManagement': './pages/HQAdminUI/users/AdminUserManagement',

  // ===== HQAdminUI Finance =====
  './pages/admin/AdminTransactions': './pages/HQAdminUI/finance/AdminTransactions',
  './pages/admin/AdminPayments': './pages/HQAdminUI/finance/AdminPayments',
  './pages/admin/AdminCashback': './pages/HQAdminUI/finance/AdminCashback',
  './pages/admin/AdminCashbackRates': './pages/HQAdminUI/finance/AdminCashbackRates',
  './pages/admin/AdminBankReconciliation': './pages/HQAdminUI/finance/AdminBankReconciliation',
  './pages/admin/AdminWallet': './pages/HQAdminUI/finance/AdminWallet',

  // ===== HQAdminUI Coins =====
  './pages/admin/AdminCoinIssuanceControl': './pages/HQAdminUI/coins/AdminCoinIssuanceControl',
  './pages/admin/AdminCoinRulesEngine': './pages/HQAdminUI/coins/AdminCoinRulesEngine',

  // ===== HQAdminUI Marketing =====
  './pages/admin/AdminMarketing': './pages/HQAdminUI/marketing/AdminMarketing',
  './pages/admin/AdminOffers': './pages/HQAdminUI/marketing/AdminOffers',
  './pages/admin/AdminCampaigns': './pages/HQAdminUI/marketing/AdminCampaigns',
  './pages/admin/AdminVouchers': './pages/HQAdminUI/marketing/AdminVouchers',
  './pages/admin/AdminFlashSales': './pages/HQAdminUI/marketing/AdminFlashSales',
  './pages/admin/AdminBankOffers': './pages/HQAdminUI/marketing/AdminBankOffers',

  // ===== HQAdminUI Content =====
  './pages/admin/AdminContent': './pages/HQAdminUI/content/AdminContent',
  './pages/admin/AdminCategories': './pages/HQAdminUI/content/AdminCategories',

  // ===== HQAdminUI Operations =====
  './pages/admin/AdminRoleManagement': './pages/HQAdminUI/operations/AdminRoleManagement',
  './pages/admin/AdminModeControl': './pages/HQAdminUI/operations/AdminModeControl',
  './pages/admin/AdminCollegeCorporateModule': './pages/HQAdminUI/operations/AdminCollegeCorporateModule',
  './pages/admin/AdminKYCCompliance': './pages/HQAdminUI/operations/AdminKYCCompliance',
  './pages/admin/AdminIntegrations': './pages/HQAdminUI/operations/AdminIntegrations',
  './pages/admin/AdminLogs': './pages/HQAdminUI/operations/AdminLogs',
  './pages/admin/AdminFraud': './pages/HQAdminUI/operations/AdminFraud',

  // ===== HQAdminUI Analytics =====
  './pages/admin/AdminAnalytics': './pages/HQAdminUI/analytics/AdminAnalytics',

  // ===== HQAdminUI Engagement =====
  './pages/admin/AdminGamification': './pages/HQAdminUI/engagement/AdminGamification',
  './pages/admin/AdminReferrals': './pages/HQAdminUI/engagement/AdminReferrals',
  './pages/admin/AdminEvents': './pages/HQAdminUI/engagement/AdminEvents',
  './pages/admin/AdminSocialImpact': './pages/HQAdminUI/engagement/AdminSocialImpact',
  './pages/admin/AdminSpecialPrograms': './pages/HQAdminUI/engagement/AdminSpecialPrograms',

  // ===== HQAdminUI Support =====
  './pages/admin/AdminSupport': './pages/HQAdminUI/support/AdminSupport',
  './pages/admin/AdminNotifications': './pages/HQAdminUI/support/AdminNotifications',

  // ===== HQAdminUI Settings =====
  './pages/admin/AdminSettings': './pages/HQAdminUI/settings/AdminSettings',

  // ===== BiZoneUI Dashboard =====
  './pages/merchant/MerchantDashboard': './pages/BiZoneUI/dashboard/MerchantDashboard',
  './pages/merchant/MerchantAnalytics': './pages/BiZoneUI/dashboard/MerchantAnalytics',

  // ===== BiZoneUI Auth =====
  './pages/merchant/MerchantLogin': './pages/BiZoneUI/auth/MerchantLogin',
  './pages/merchant/MerchantSignup': './pages/BiZoneUI/auth/MerchantSignup',
  './pages/merchant/MerchantOnboarding': './pages/BiZoneUI/auth/MerchantOnboarding',

  // ===== BiZoneUI POS =====
  './pages/merchant/MerchantPOS': './pages/BiZoneUI/pos/MerchantPOS',
  './pages/merchant/POSCheckout': './pages/BiZoneUI/pos/POSCheckout',
  './pages/merchant/POSHistory': './pages/BiZoneUI/pos/POSHistory',

  // ===== BiZoneUI Orders =====
  './pages/merchant/MerchantOrders': './pages/BiZoneUI/orders/MerchantOrders',
  './pages/merchant/OrderManagement': './pages/BiZoneUI/orders/OrderManagement',
  './pages/merchant/OrderDetail': './pages/BiZoneUI/orders/OrderDetail',

  // ===== BiZoneUI Inventory =====
  './pages/merchant/MerchantInventory': './pages/BiZoneUI/inventory/MerchantInventory',
  './pages/merchant/ProductManagement': './pages/BiZoneUI/inventory/ProductManagement',
  './pages/merchant/AddProduct': './pages/BiZoneUI/inventory/AddProduct',
  './pages/merchant/StockManagement': './pages/BiZoneUI/inventory/StockManagement',
  './pages/merchant/InventoryForecast': './pages/BiZoneUI/inventory/InventoryForecast',

  // ===== BiZoneUI Offers =====
  './pages/merchant/MerchantOffers': './pages/BiZoneUI/offers/MerchantOffers',
  './pages/merchant/CreateOffer': './pages/BiZoneUI/offers/CreateOffer',
  './pages/merchant/OfferPerformance': './pages/BiZoneUI/offers/OfferPerformance',

  // ===== BiZoneUI Customers =====
  './pages/merchant/MerchantCustomers': './pages/BiZoneUI/customers/MerchantCustomers',
  './pages/merchant/CustomerInsights': './pages/BiZoneUI/customers/CustomerInsights',

  // ===== BiZoneUI Finance =====
  './pages/merchant/MerchantFinance': './pages/BiZoneUI/finance/MerchantFinance',
  './pages/merchant/PaymentHistory': './pages/BiZoneUI/finance/PaymentHistory',
  './pages/merchant/PayoutSettings': './pages/BiZoneUI/finance/PayoutSettings',
  './pages/merchant/RevenueReport': './pages/BiZoneUI/finance/RevenueReport',

  // ===== BiZoneUI Marketing =====
  './pages/merchant/MerchantMarketing': './pages/BiZoneUI/marketing/MerchantMarketing',
  './pages/merchant/CampaignManager': './pages/BiZoneUI/marketing/CampaignManager',
  './pages/merchant/PromotionBuilder': './pages/BiZoneUI/marketing/PromotionBuilder',

  // ===== BiZoneUI Advanced =====
  './pages/merchant/MerchantBrandedCoinConfig': './pages/BiZoneUI/advanced/MerchantBrandedCoinConfig',
  './pages/merchant/MerchantSettings': './pages/BiZoneUI/advanced/MerchantSettings',
  './pages/merchant/StoreSettings': './pages/BiZoneUI/advanced/StoreSettings',
};

console.log('🔧 Import Path Fixer v2.0');
console.log('=========================\n');

const appJsxPath = path.join(__dirname, 'src', 'App.jsx');

if (!fs.existsSync(appJsxPath)) {
  console.error('❌ App.jsx not found at:', appJsxPath);
  process.exit(1);
}

console.log('📄 Reading App.jsx...');
let content = fs.readFileSync(appJsxPath, 'utf8');
const originalContent = content;

let replacementCount = 0;
let replacements = [];

// Sort paths by length (longest first) to handle nested paths correctly
const sortedMappings = Object.entries(pathMappings).sort((a, b) => b[0].length - a[0].length);

for (const [oldPath, newPath] of sortedMappings) {
  // Match patterns like: from './pages/...'
  const importRegex = new RegExp(`from\\s+['"]${oldPath.replace(/\./g, '\\.')}['"]`, 'g');

  const matches = content.match(importRegex);
  if (matches) {
    content = content.replace(importRegex, `from '${newPath}'`);
    replacementCount += matches.length;
    replacements.push({
      old: oldPath,
      new: newPath,
      count: matches.length
    });
  }
}

if (replacementCount > 0) {
  // Create backup
  const backupPath = appJsxPath + '.backup';
  fs.writeFileSync(backupPath, originalContent);
  console.log(`✅ Backup created: ${backupPath}\n`);

  // Write updated file
  fs.writeFileSync(appJsxPath, content);
  console.log('✅ App.jsx updated successfully!\n');

  console.log(`📊 Summary:`);
  console.log(`   Total replacements: ${replacementCount}`);
  console.log(`   Unique paths updated: ${replacements.length}\n`);

  console.log('📝 Detailed changes:');
  replacements.forEach(({ old, new: newPath, count }) => {
    console.log(`   ${old} → ${newPath} (${count}x)`);
  });

  console.log('\n✨ Done! Please verify the changes and restart your dev server.');
  console.log('   If anything went wrong, restore from: App.jsx.backup');
} else {
  console.log('⚠️  No import paths found to update.');
  console.log('   This might mean:');
  console.log('   1. Imports are already updated');
  console.log('   2. Import patterns don\'t match expected format');
  console.log('   3. Files have already been reorganized');
}
