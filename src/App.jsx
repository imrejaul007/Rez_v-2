import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { WalletProvider } from './contexts/WalletContext';
import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { CreatorProvider } from './contexts/CreatorContext';
import { SearchProvider } from './contexts/SearchContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { SavingsProvider } from './contexts/SavingsContext';
import { GamificationProvider } from './contexts/GamificationContext';
import { AuthProvider } from './context/AuthContext';
import RoleSwitcher from './components/RoleSwitcher';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OTPVerify from './pages/OTPVerify';
import Splash from './pages/Splash';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Explore from './pages/Explore';
import ExploreNew from './pages/ExploreNew';
import Categories from './pages/Categories';
import Onboarding from './pages/Onboarding';
import StorePage from './pages/StorePage';
import StoreHub from './pages/StoreHub';
import StoreDetailPage from './pages/StoreDetailPage';
import Wallet from './pages/Wallet';
import Offers from './pages/Offers';
import CashStore from './pages/CashStore';
import CashStoreTrack from './pages/cashstore/CashStoreTrack';
import RezMall from './pages/RezMall';
import RezPrive from './pages/RezPrive';
import PriveHome from './pages/prive/PriveHome';
import PrivePrivileges from './pages/prive/PrivePrivileges';
import PriveExplore from './pages/prive/PriveExplore';
import PriveInfluence from './pages/prive/PriveInfluence';
import PriveTierProgress from './pages/prive/PriveTierProgress';
import PriveOfferDetail from './pages/prive/PriveOfferDetail';
import PriveRedeem from './pages/prive/PriveRedeem';
import PriveProfile from './pages/prive/PriveProfile';
import PriveStoreDetail from './pages/prive/PriveStoreDetail';
import PriveInfluenceHub from './pages/prive/PriveInfluenceHub';
import PriveNotifications from './pages/prive/PriveNotifications';
import PriveBrandInvitation from './pages/prive/PriveBrandInvitation';
import PriveEarnings from './pages/prive/PriveEarnings';
import PriveActivity from './pages/prive/PriveActivity';
import PriveRecognition from './pages/prive/PriveRecognition';
import PriveAuthority from './pages/prive/PriveAuthority';
import PriveVisibilityControl from './pages/prive/PriveVisibilityControl';
import PriveActivityStatement from './pages/prive/PriveActivityStatement';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminGlobalDashboard from './pages/admin/AdminGlobalDashboard';
import AdminMarketingDashboard from './pages/admin/AdminMarketingDashboard';
import AdminFinanceDashboard from './pages/admin/AdminFinanceDashboard';
import AdminOperationsDashboard from './pages/admin/AdminOperationsDashboard';
import AdminRegionalDashboard from './pages/admin/AdminRegionalDashboard';
import AdminRoleManagement from './pages/admin/AdminRoleManagement';
import AdminSupportDashboard from './pages/admin/AdminSupportDashboard';
import AdminContentDashboard from './pages/admin/AdminContentDashboard';
import AdminAnalyticsDashboard from './pages/admin/AdminAnalyticsDashboard';
import AdminModeControl from './pages/admin/AdminModeControl';
import AdminCollegeCorporateModule from './pages/admin/AdminCollegeCorporateModule';
import AdminCoinIssuanceControl from './pages/admin/AdminCoinIssuanceControl';
import AdminCoinRulesEngine from './pages/admin/AdminCoinRulesEngine';
import AdminKYCCompliance from './pages/admin/AdminKYCCompliance';
import AdminBankReconciliation from './pages/admin/AdminBankReconciliation';
import OperationsCityDashboard from './pages/admin/OperationsCityDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminMerchants from './pages/admin/AdminMerchants';
import AdminOffers from './pages/admin/AdminOffers';
import AdminAnalytics from './pages/admin/AdminAnalytics';
import AdminCampaigns from './pages/admin/AdminCampaigns';
import AdminCategories from './pages/admin/AdminCategories';
import AdminContent from './pages/admin/AdminContent';
import AdminGamification from './pages/admin/AdminGamification';
import AdminReferrals from './pages/admin/AdminReferrals';
import AdminEvents from './pages/admin/AdminEvents';
import AdminSocialImpact from './pages/admin/AdminSocialImpact';
import AdminSettings from './pages/admin/AdminSettings';
import AdminSupport from './pages/admin/AdminSupport';
import AdminTransactions from './pages/admin/AdminTransactions';
import AdminCashback from './pages/admin/AdminCashback';
import AdminPayments from './pages/admin/AdminPayments';
import AdminMarketing from './pages/admin/AdminMarketing';
import AdminFraud from './pages/admin/AdminFraud';
import AdminSpecialPrograms from './pages/admin/AdminSpecialPrograms';
import AdminIntegrations from './pages/admin/AdminIntegrations';
import AdminLogs from './pages/admin/AdminLogs';
import AdminUserManagement from './pages/admin/AdminUserManagement';
import AdminNotifications from './pages/admin/AdminNotifications';
import AdminWallet from './pages/admin/AdminWallet';
import AdminVouchers from './pages/admin/AdminVouchers';
import AdminFlashSales from './pages/admin/AdminFlashSales';
import AdminBankOffers from './pages/admin/AdminBankOffers';
import AdminHeroBanners from './pages/admin/AdminHeroBanners';
import AdminEmailMarketing from './pages/admin/AdminEmailMarketing';
import AdminBackgroundJobs from './pages/admin/AdminBackgroundJobs';
import AdminTournaments from './pages/admin/AdminTournaments';
import AdminSMSCampaigns from './pages/admin/AdminSMSCampaigns';
import AdminPriceTracking from './pages/admin/AdminPriceTracking';
import AdminProductComparison from './pages/admin/AdminProductComparison';
import AdminSocialIntegration from './pages/admin/AdminSocialIntegration';
import AdminUGCManagement from './pages/admin/AdminUGCManagement';
import AdminRecommendations from './pages/admin/AdminRecommendations';
import AdminMerchantSuperOS from './pages/admin/AdminMerchantSuperOS';
import AdminEcosystemAnalytics from './pages/admin/AdminEcosystemAnalytics';
import AdminSettlementCommission from './pages/admin/AdminSettlementCommission';
import AdminPriveManagement from './pages/admin/AdminPriveManagement';
import AdminContentModeration from './pages/admin/AdminContentModeration';
import AdminGameConfiguration from './pages/admin/AdminGameConfiguration';
import AdminSocialImpactVerification from './pages/admin/AdminSocialImpactVerification';
import AdminEventInventory from './pages/admin/AdminEventInventory';
import AdminFraudDetection from './pages/admin/AdminFraudDetection';
import AdminAIInsights from './pages/admin/AdminAIInsights';
import AdminPlatformHealth from './pages/admin/AdminPlatformHealth';
import AdminCreatorContent from './pages/admin/AdminCreatorContent';
import AdminWalletAnalytics from './pages/admin/AdminWalletAnalytics';
import AdminRoleBasedAccess from './pages/admin/AdminRoleBasedAccess';
import AdminRegionalControl from './pages/admin/AdminRegionalControl';
import AdminMultiChannelMarketing from './pages/admin/AdminMultiChannelMarketing';
import AdminCoinEmergencyControls from './pages/admin/AdminCoinEmergencyControls';
import AdminMerchantTrustScore from './pages/admin/AdminMerchantTrustScore';
import AdminUserTrustScore from './pages/admin/AdminUserTrustScore';
import AdminOfflineReconciliation from './pages/admin/AdminOfflineReconciliation';
import AdminDisputeResolution from './pages/admin/AdminDisputeResolution';
import AdminInternalOps from './pages/admin/AdminInternalOps';
import AdminExperiments from './pages/admin/AdminExperiments';
import AdminMonetizationHub from './pages/admin/AdminMonetizationHub';
import AdminAuditVault from './pages/admin/AdminAuditVault';
import AdminMerchantProfitEngine from './pages/admin/AdminMerchantProfitEngine';
import AdminMerchantIntelligence from './pages/admin/AdminMerchantIntelligence';
import AdminUserHabitEngine from './pages/admin/AdminUserHabitEngine';
import AdminCityLockEngine from './pages/admin/AdminCityLockEngine';
import AdminTrustPassport from './pages/admin/AdminTrustPassport';
import AdminGovernmentConsole from './pages/admin/AdminGovernmentConsole';
import AdminCreditEngine from './pages/admin/AdminCreditEngine';
import AdminCommerceProtocol from './pages/admin/AdminCommerceProtocol';
import AdminEnterpriseHub from './pages/admin/AdminEnterpriseHub';
import AdminSocialFeedControl from './pages/admin/AdminSocialFeedControl';
import AdminCitySupplyLock from './pages/admin/AdminCitySupplyLock';
import AdminTemporalCommerce from './pages/admin/AdminTemporalCommerce';
import AdminCompetitiveDefense from './pages/admin/AdminCompetitiveDefense';
import AdminOpsIntelligence from './pages/admin/AdminOpsIntelligence';
import AdminInstitutionalAPIs from './pages/admin/AdminInstitutionalAPIs';
import AdminFounderVault from './pages/admin/AdminFounderVault';
import AdminDeveloperPortal from './pages/admin/AdminDeveloperPortal';
import AdminBarterCampaigns from './pages/admin/AdminBarterCampaigns';
import AdminMSMEReports from './pages/admin/AdminMSMEReports';
import AdminWebhookManager from './pages/admin/AdminWebhookManager';
import AdminGMBSync from './pages/admin/AdminGMBSync';
import AdminSessionReplay from './pages/admin/AdminSessionReplay';

// User Gap Pages
import TrustPassport from './pages/TrustPassport';
import DisputeCenter from './pages/DisputeCenter';
import ContentSubmissionTracker from './pages/ContentSubmissionTracker';
import SecurityAlerts from './pages/SecurityAlerts';
import KYCStatus from './pages/KYCStatus';
import TableReservation from './pages/TableReservation';
import BillSplitting from './pages/BillSplitting';
import PrescriptionHistory from './pages/PrescriptionHistory';
import InsuranceCoverage from './pages/InsuranceCoverage';
import PriceLedger from './pages/PriceLedger';
import TrustCredit from './pages/TrustCredit';

// Merchant Pages
import MerchantDashboard from './pages/merchant/MerchantDashboard';
import MerchantSuperOSDashboard from './pages/merchant/MerchantSuperOSDashboard';
import MerchantPOS from './pages/merchant/MerchantPOS';
import MerchantAccounting from './pages/merchant/MerchantAccounting';
import MerchantEvents from './pages/merchant/MerchantEvents';
import MerchantBranchManager from './pages/merchant/MerchantBranchManager';
import MerchantDiscovery from './pages/merchant/MerchantDiscovery';
import MerchantPriveModule from './pages/merchant/MerchantPriveModule';
import MerchantKDS from './pages/merchant/MerchantKDS';
import MerchantTableManagement from './pages/merchant/MerchantTableManagement';
import MerchantRecipeCosting from './pages/merchant/MerchantRecipeCosting';
import MerchantBarcodeScanner from './pages/merchant/MerchantBarcodeScanner';
import MerchantProductVariants from './pages/merchant/MerchantProductVariants';
import MerchantAppointments from './pages/merchant/MerchantAppointments';
import MerchantServiceCatalog from './pages/merchant/MerchantServiceCatalog';
import MerchantStaffRoster from './pages/merchant/MerchantStaffRoster';
import MerchantMarketplace from './pages/merchant/MerchantMarketplace';
import MerchantSubscriptions from './pages/merchant/MerchantSubscriptions';
import MerchantInventoryAdvanced from './pages/merchant/MerchantInventoryAdvanced';
import MerchantOrdersMultiChannel from './pages/merchant/MerchantOrdersMultiChannel';
import MerchantCRM from './pages/merchant/MerchantCRM';
import MerchantPricingIntelligence from './pages/merchant/MerchantPricingIntelligence';
import MerchantTaxCompliance from './pages/merchant/MerchantTaxCompliance';
import MerchantSuppliersProcurement from './pages/merchant/MerchantSuppliersProcurement';
import MerchantIntegrations from './pages/merchant/MerchantIntegrations';
import MerchantMemberships from './pages/merchant/MerchantMemberships';
import MerchantWasteManagement from './pages/merchant/MerchantWasteManagement';
import MerchantBatchTracking from './pages/merchant/MerchantBatchTracking';
import MerchantQROrdering from './pages/merchant/MerchantQROrdering';
import MerchantPayroll from './pages/merchant/MerchantPayroll';
import MerchantStoreTransfer from './pages/merchant/MerchantStoreTransfer';
import MerchantClassSchedule from './pages/merchant/MerchantClassSchedule';
import MerchantBookingCalendar from './pages/merchant/MerchantBookingCalendar';
import MerchantPrescriptions from './pages/merchant/MerchantPrescriptions';
import MerchantQRPayments from './pages/merchant/MerchantQRPayments';
import MerchantEventCheckIn from './pages/merchant/MerchantEventCheckIn';
import MerchantCreatorHub from './pages/merchant/MerchantCreatorHub';
import MerchantReviewManagement from './pages/merchant/MerchantReviewManagement';
import MerchantMultiStore from './pages/merchant/MerchantMultiStore';
import MerchantCustomerSegmentation from './pages/merchant/MerchantCustomerSegmentation';
import MerchantUserRoles from './pages/merchant/MerchantUserRoles';
import MerchantMarketingCampaigns from './pages/merchant/MerchantMarketingCampaigns';
import CreateOffer from './pages/merchant/CreateOffer';
import MerchantOffers from './pages/merchant/MerchantOffers';
import MerchantCustomers from './pages/merchant/MerchantCustomers';
import MerchantTransactions from './pages/merchant/MerchantTransactions';
import MerchantReviews from './pages/merchant/MerchantReviews';
import MerchantAnalytics from './pages/merchant/MerchantAnalytics';
import MerchantFinancials from './pages/merchant/MerchantFinancials';
import MerchantMarketing from './pages/merchant/MerchantMarketing';
import MerchantSupport from './pages/merchant/MerchantSupport';
import MerchantSettings from './pages/merchant/MerchantSettings';
import MerchantProfile from './pages/merchant/MerchantProfile';
import MerchantNotifications from './pages/merchant/MerchantNotifications';
import MerchantContent from './pages/merchant/MerchantContent';
import MerchantLoyalty from './pages/merchant/MerchantLoyalty';
import MerchantStaff from './pages/merchant/MerchantStaff';
import MerchantBenchmarks from './pages/merchant/MerchantBenchmarks';
import MerchantCompliance from './pages/merchant/MerchantCompliance';
import MerchantDocuments from './pages/merchant/MerchantDocuments';
import MerchantWallet from './pages/merchant/MerchantWallet';
import MerchantOrders from './pages/merchant/MerchantOrders';
import MerchantProducts from './pages/merchant/MerchantProducts';
import MerchantInventory from './pages/merchant/MerchantInventory';
import MerchantReturns from './pages/merchant/MerchantReturns';
import MerchantPayments from './pages/merchant/MerchantPayments';
import MerchantPerformance from './pages/merchant/MerchantPerformance';
import MerchantShipping from './pages/merchant/MerchantShipping';
import MerchantCampaigns from './pages/merchant/MerchantCampaigns';
import MerchantUGCCampaigns from './pages/merchant/MerchantUGCCampaigns';
import MerchantLoyaltyOffers from './pages/merchant/MerchantLoyaltyOffers';
import MerchantPriceEngineering from './pages/merchant/MerchantPriceEngineering';
import MerchantFlashDeals from './pages/merchant/MerchantFlashDeals';
import MerchantDealAnalytics from './pages/merchant/MerchantDealAnalytics';
import MerchantExclusiveDeals from './pages/merchant/MerchantExclusiveDeals';
import AdminCampaignApproval from './pages/admin/AdminCampaignApproval';
import AdminLightningDeals from './pages/admin/AdminLightningDeals';
import AdminCoinEvents from './pages/admin/AdminCoinEvents';
import AdminExclusivePrograms from './pages/admin/AdminExclusivePrograms';
import AdminDiscountBuckets from './pages/admin/AdminDiscountBuckets';
import AdminSponsoredDeals from './pages/admin/AdminSponsoredDeals';
import AdminNearbyOffers from './pages/admin/AdminNearbyOffers';
import AdminTodaysOffers from './pages/admin/AdminTodaysOffers';
import AdminBOGOManagement from './pages/admin/AdminBOGOManagement';
import AdminTrendingAlgorithm from './pages/admin/AdminTrendingAlgorithm';
import AdminAIRecommendations from './pages/admin/AdminAIRecommendations';
import AdminHotspotManagement from './pages/admin/AdminHotspotManagement';
import AdminUploadBillSettings from './pages/admin/AdminUploadBillSettings';
import AdminProfileVerification from './pages/admin/AdminProfileVerification';
import AdminFriendNetworkSettings from './pages/admin/AdminFriendNetworkSettings';
import MerchantNearbyOffers from './pages/merchant/MerchantNearbyOffers';
import MerchantTodaysOffers from './pages/merchant/MerchantTodaysOffers';
import MerchantBOGOOffers from './pages/merchant/MerchantBOGOOffers';
import MerchantBirthdayOffers from './pages/merchant/MerchantBirthdayOffers';
import MerchantCashbackPrograms from './pages/merchant/MerchantCashbackPrograms';
import MerchantClearanceSales from './pages/merchant/MerchantClearanceSales';
import MerchantLoyaltyTiers from './pages/merchant/MerchantLoyaltyTiers';
import AdminFreeDeliveryManagement from './pages/admin/AdminFreeDeliveryManagement';
import AdminNewDealsSettings from './pages/admin/AdminNewDealsSettings';
import AdminScanPaySettings from './pages/admin/AdminScanPaySettings';
import AdminDailyCheckin from './pages/admin/AdminDailyCheckin';
import AdminLockPriceDeals from './pages/admin/AdminLockPriceDeals';
import MerchantFreeDelivery from './pages/merchant/MerchantFreeDelivery';
import MerchantLockPriceDeals from './pages/merchant/MerchantLockPriceDeals';
import MerchantExclusivePrograms from './pages/merchant/MerchantExclusivePrograms';
import MerchantBrandedCoinConfig from './pages/merchant/MerchantBrandedCoinConfig';
import MerchantPOSIntegration from './pages/merchant/MerchantPOSIntegration';
import MerchantPOSTransactions from './pages/merchant/MerchantPOSTransactions';
import MerchantPaymentLinks from './pages/merchant/MerchantPaymentLinks';
import MerchantBillSplitting from './pages/merchant/MerchantBillSplitting';
import MerchantTipsConfig from './pages/merchant/MerchantTipsConfig';
import MerchantPostPaymentRewards from './pages/merchant/MerchantPostPaymentRewards';
import MerchantSoftPOS from './pages/merchant/MerchantSoftPOS';
import MerchantCaptainApp from './pages/merchant/MerchantCaptainApp';
import MerchantCreditLedger from './pages/merchant/MerchantCreditLedger';
import MerchantGSTReports from './pages/merchant/MerchantGSTReports';
import MerchantPaymentReminders from './pages/merchant/MerchantPaymentReminders';
import MerchantBillHold from './pages/merchant/MerchantBillHold';
import MerchantAggregatorReconciliation from './pages/merchant/MerchantAggregatorReconciliation';
import MerchantTokenDisplay from './pages/merchant/MerchantTokenDisplay';
import MerchantExpenseTracker from './pages/merchant/MerchantExpenseTracker';
import MerchantProfitLoss from './pages/merchant/MerchantProfitLoss';
import MerchantQuotations from './pages/merchant/MerchantQuotations';
import MerchantInvoiceScanner from './pages/merchant/MerchantInvoiceScanner';
import MerchantComboProducts from './pages/merchant/MerchantComboProducts';
import MerchantSalesmanCommission from './pages/merchant/MerchantSalesmanCommission';
import MerchantOfflinePOS from './pages/merchant/MerchantOfflinePOS';
import MerchantBillManagement from './pages/merchant/MerchantBillManagement';
import MerchantAccountantPortal from './pages/merchant/MerchantAccountantPortal';
import MerchantCashDrawer from './pages/merchant/MerchantCashDrawer';
import MerchantSimplePOS from './pages/merchant/MerchantSimplePOS';
import MerchantDayEndReport from './pages/merchant/MerchantDayEndReport';
import MerchantHardwareHub from './pages/merchant/MerchantHardwareHub';
import MerchantPowerSurvival from './pages/merchant/MerchantPowerSurvival';
import MerchantCategoryPOS from './pages/merchant/MerchantCategoryPOS';
import MerchantDataExport from './pages/merchant/MerchantDataExport';
import MerchantRushHourMode from './pages/merchant/MerchantRushHourMode';
import MerchantStockReconciliation from './pages/merchant/MerchantStockReconciliation';
import MerchantSalonPackages from './pages/merchant/MerchantSalonPackages';
import MerchantClinicInsurance from './pages/merchant/MerchantClinicInsurance';
import MerchantSupplierReturns from './pages/merchant/MerchantSupplierReturns';
import MerchantTrustScoreDetail from './pages/merchant/MerchantTrustScoreDetail';
import MerchantContestBuilder from './pages/merchant/MerchantContestBuilder';
import MerchantWishlistDemand from './pages/merchant/MerchantWishlistDemand';
import MerchantAutopilot from './pages/merchant/MerchantAutopilot';
import MerchantShiftManagement from './pages/merchant/MerchantShiftManagement';
import MerchantPurchaseOrders from './pages/merchant/MerchantPurchaseOrders';
import MerchantFailedPayments from './pages/merchant/MerchantFailedPayments';
import MerchantVouchers from './pages/merchant/MerchantVouchers';
import MerchantDaybook from './pages/merchant/MerchantDaybook';
import MerchantEInvoice from './pages/merchant/MerchantEInvoice';
import MerchantGSTRExport from './pages/merchant/MerchantGSTRExport';
import MerchantExpiryDashboard from './pages/merchant/MerchantExpiryDashboard';
import MerchantPaymentIntents from './pages/merchant/MerchantPaymentIntents';
import MerchantBirthdayRewards from './pages/merchant/MerchantBirthdayRewards';
import MerchantSessionTracking from './pages/merchant/MerchantSessionTracking';
import MerchantHSNCodes from './pages/merchant/MerchantHSNCodes';
import MerchantTDSTCSReports from './pages/merchant/MerchantTDSTCSReports';
import MerchantCalendarSync from './pages/merchant/MerchantCalendarSync';
import AdminPOSIntegration from './pages/admin/AdminPOSIntegration';
import AdminPromoCoinManager from './pages/admin/AdminPromoCoinManager';
import AdminRedemptionRules from './pages/admin/AdminRedemptionRules';
import AdminCheckoutPriority from './pages/admin/AdminCheckoutPriority';
import AdminEarningRuleMatrix from './pages/admin/AdminEarningRuleMatrix';
import AdminCoinSystemOverview from './pages/admin/AdminCoinSystemOverview';
import AdminMerchantTierConfig from './pages/admin/AdminMerchantTierConfig';
import AdminCoPartnerBrands from './pages/admin/AdminCoPartnerBrands';
import AdminPartnerships from './pages/admin/AdminPartnerships';
import PriveExit from './pages/prive/PriveExit';
import PriveInvitations from './pages/prive/PriveInvitations';
import PriveSettings from './pages/prive/PriveSettings';
import PriveOffersFeed from './pages/prive/PriveOffersFeed';
import PriveCampaignTask from './pages/prive/PriveCampaignTask';
import PriveCampaignStatus from './pages/prive/PriveCampaignStatus';
import PriveEligibility from './pages/prive/PriveEligibility';
import PriveContentPerformance from './pages/prive/PriveContentPerformance';
import PriveContentGuidelines from './pages/prive/PriveContentGuidelines';
import PriveRedemptionHistory from './pages/prive/PriveRedemptionHistory';
import PriveScoreBreakdown from './pages/prive/PriveScoreBreakdown';
import PriveGiftCards from './pages/prive/PriveGiftCards';
import PriveExperiences from './pages/prive/PriveExperiences';
import PrivePartnerPrivileges from './pages/prive/PrivePartnerPrivileges';
import PriveExperienceDetail from './pages/prive/PriveExperienceDetail';
import PriveGiftCardDetail from './pages/prive/PriveGiftCardDetail';
import PriveCheckout from './pages/prive/PriveCheckout';
import PriveBooking from './pages/prive/PriveBooking';
import PaymentGateway from './pages/PaymentGateway';
import QRScanner from './pages/QRScanner';
import ReferralDashboard from './pages/ReferralDashboard';
import MerchantSignup from './pages/merchant/MerchantSignup';
import MerchantBusinessDetails from './pages/merchant/MerchantBusinessDetails';
import MerchantSuccess from './pages/merchant/MerchantSuccess';
import EventTicketing from './pages/EventTicketing';
import MyTickets from './pages/MyTickets';
import TicketDetail from './pages/TicketDetail';
import CoinHistory from './pages/CoinHistory';
import StudentVerification from './pages/college/StudentVerification';
import AmbassadorDashboard from './pages/college/AmbassadorDashboard';
import SocialFeed from './pages/SocialFeed';
import SavingsTracker from './pages/SavingsTracker';
import ContestHub from './pages/contests/ContestHub';
import ContestDetail from './pages/contests/ContestDetail';
import EmployeeVerification from './pages/corporate/EmployeeVerification';
import EnhancedWishlist from './pages/EnhancedWishlist';
import NotificationsCenter from './pages/NotificationsCenter';
import ProductComparison from './pages/ProductComparison';
import OrderTracking from './pages/OrderTracking';
import Profile from './pages/Profile';
import WishlistPage from './pages/WishlistPage';
import SavingsDashboard from './pages/SavingsDashboard';
import GamificationHub from './pages/GamificationHub';
import NotificationCenterPage from './pages/NotificationCenterPage';
import DealStore from './pages/DealStore';
import DealDetail from './pages/DealDetail';
import FleaMarket from './pages/FleaMarket';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Travel from './pages/Travel';
import FoodDining from './pages/FoodDining';
import RestaurantDetail from './pages/RestaurantDetail';
import Electronics from './pages/Electronics';
import ElectronicsCategory from './pages/ElectronicsCategory';
import ElectronicsProduct from './pages/ElectronicsProduct';
import Lifestyle from './pages/Lifestyle';
import Fashion from './pages/Fashion';
import FashionCategory from './pages/FashionCategory';
import FashionProduct from './pages/FashionProduct';
import FashionVibes from './pages/fashion/FashionVibes';
import FashionOccasions from './pages/fashion/FashionOccasions';
import FashionBrands from './pages/fashion/FashionBrands';
import FashionTrending from './pages/fashion/FashionTrending';
import FashionStores from './pages/fashion/FashionStores';
import FashionDeals from './pages/fashion/FashionDeals';
import FashionVibeDetail from './pages/fashion/FashionVibeDetail';
import FashionOccasionDetail from './pages/fashion/FashionOccasionDetail';
import StyleQuiz from './pages/lifestyle/fashion/StyleQuiz';
import StyleDNAResult from './pages/lifestyle/fashion/StyleDNAResult';
import VirtualWardrobe from './pages/lifestyle/fashion/VirtualWardrobe';
import OutfitCalendar from './pages/lifestyle/fashion/OutfitCalendar';
import SustainabilityDashboard from './pages/lifestyle/fashion/SustainabilityDashboard';
import WardrobeOutfitSuggestions from './pages/lifestyle/fashion/WardrobeOutfitSuggestions';
import FashionTravelPlanner from './pages/lifestyle/fashion/FashionTravelPlanner';
import CreatorFashionFeed from './pages/lifestyle/fashion/CreatorFashionFeed';
import StyleChallenges from './pages/lifestyle/fashion/StyleChallenges';
import LifestyleProfile from './pages/lifestyle/LifestyleProfile';
import EventsHub from './pages/lifestyle/events/EventsHub';
import FoodHub from './pages/lifestyle/food/FoodHub';
import FashionBrandDetail from './pages/fashion/FashionBrandDetail';
import FashionTrendDetail from './pages/fashion/FashionTrendDetail';
import Beauty from './pages/Beauty';
import BeautyCategory from './pages/BeautyCategory';
import BeautyService from './pages/BeautyService';
import BeautyNearby from './pages/beauty/BeautyNearby';
import BeautyDeals from './pages/beauty/BeautyDeals';
import BeautyServices from './pages/beauty/BeautyServices';
import BeautyProducts from './pages/beauty/BeautyProducts';
import BeautyClinics from './pages/beauty/BeautyClinics';
import BeautyAll from './pages/beauty/BeautyAll';
import BeautyConcierge from './pages/beauty/BeautyConcierge';
import BeautyGift from './pages/beauty/BeautyGift';
import BeautyOffers from './pages/beauty/BeautyOffers';
import BeautyProductDetail from './pages/beauty/BeautyProductDetail';
import BeautyClinicDetail from './pages/beauty/BeautyClinicDetail';
import Grocery from './pages/Grocery';
import GroceryStores from './pages/grocery/GroceryStores';
import GroceryFast from './pages/grocery/GroceryFast';
import GroceryDeals from './pages/grocery/GroceryDeals';
import GroceryProducts from './pages/grocery/GroceryProducts';
import GroceryCompare from './pages/grocery/GroceryCompare';
import GroceryCategory from './pages/grocery/GroceryCategory';
import GroceryStoreDetail from './pages/grocery/GroceryStoreDetail';
import GroceryProductDetail from './pages/grocery/GroceryProductDetail';
import GroceryOffers from './pages/grocery/GroceryOffers';
import Healthcare from './pages/Healthcare';
import HealthcareDoctors from './pages/healthcare/HealthcareDoctors';
import HealthcareDental from './pages/healthcare/HealthcareDental';
import HealthcareDiagnostics from './pages/healthcare/HealthcareDiagnostics';
import HealthcarePharmacy from './pages/healthcare/HealthcarePharmacy';
import HealthcareOffers from './pages/healthcare/HealthcareOffers';
import HealthcareEmergency from './pages/healthcare/HealthcareEmergency';
import HealthcareSupport from './pages/healthcare/HealthcareSupport';
import HealthcareCategory from './pages/healthcare/HealthcareCategory';
import HealthcareDoctorDetail from './pages/healthcare/HealthcareDoctorDetail';
import HealthcareDentalDetail from './pages/healthcare/HealthcareDentalDetail';
import HealthcareTestDetail from './pages/healthcare/HealthcareTestDetail';
import HealthcarePharmacyDetail from './pages/healthcare/HealthcarePharmacyDetail';
import HealthcareUploadBill from './pages/healthcare/HealthcareUploadBill';
import Fitness from './pages/Fitness';
import FitnessGyms from './pages/fitness/FitnessGyms';
import FitnessStudios from './pages/fitness/FitnessStudios';
import FitnessTrainers from './pages/fitness/FitnessTrainers';
import FitnessStore from './pages/fitness/FitnessStore';
import FitnessChallenges from './pages/fitness/FitnessChallenges';
import FitnessFeed from './pages/fitness/FitnessFeed';
import FitnessStreak from './pages/fitness/FitnessStreak';
import FitnessCategory from './pages/fitness/FitnessCategory';
import FitnessGymDetail from './pages/fitness/FitnessGymDetail';
import FitnessTrainerDetail from './pages/fitness/FitnessTrainerDetail';
import FitnessChallengeDetail from './pages/fitness/FitnessChallengeDetail';
import FitnessProductDetail from './pages/fitness/FitnessProductDetail';
import HomeServices from './pages/HomeServices';
import HomeServicesPopular from './pages/home-services/HomeServicesPopular';
import HomeServicesProviders from './pages/home-services/HomeServicesProviders';
import HomeServicesBookings from './pages/home-services/HomeServicesBookings';
import HomeServicesAvailableToday from './pages/home-services/HomeServicesAvailableToday';
import HomeServicesCategory from './pages/home-services/HomeServicesCategory';
import HomeServicesBook from './pages/home-services/HomeServicesBook';
import HomeServicesProviderDetail from './pages/home-services/HomeServicesProviderDetail';
import Financial from './pages/Financial';
import FinancialBills from './pages/financial/FinancialBills';
import FinancialOffers from './pages/financial/FinancialOffers';
import FinancialHistory from './pages/financial/FinancialHistory';
import FinancialOTT from './pages/financial/FinancialOTT';
import FinancialOTTDetail from './pages/financial/FinancialOTTDetail';
import FinancialGold from './pages/financial/FinancialGold';
import FinancialOfferDetail from './pages/financial/FinancialOfferDetail';
import FinancialPayBill from './pages/financial/FinancialPayBill';
import FinancialCategory from './pages/financial/FinancialCategory';
import ProductServicePage from './pages/ProductServicePage';
import ServiceBookingPage from './pages/ServiceBookingPage';
import ProductCheckout from './pages/ProductCheckout';
import ServiceCheckout from './pages/ServiceCheckout';
import SearchResults from './pages/SearchResults';
import Earn from './pages/Earn';
import OrderHistory from './pages/OrderHistory';
import OrderDetail from './pages/OrderDetail';
import Wishlist from './pages/Wishlist';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Help from './pages/Help';
import UniversalServicePage from './pages/UniversalServicePage';
import OfferDetail from './pages/OfferDetail';
import CashbackDetail from './pages/CashbackDetail';
import SupportChat from './pages/support/SupportChat';
import WalletUse from './pages/wallet/WalletUse';
import EventsMovies from './pages/events/EventsMovies';
import EventsConcerts from './pages/events/EventsConcerts';
import EventsWorkshops from './pages/events/EventsWorkshops';
import EventsParks from './pages/events/EventsParks';
import EventsGaming from './pages/events/EventsGaming';
import EventsExperiences from './pages/events/EventsExperiences';
import Deals from './pages/Deals';
import ScanPay from './pages/ScanPay';
import Reels from './pages/Reels';
import SuperDeals from './pages/SuperDeals';
import Missions from './pages/Missions';
import NewArrivals from './pages/NewArrivals';
import PopularStores from './pages/PopularStores';
import Bookings from './pages/Bookings';

// Explore Subpages
import CategoryDetail from './pages/explore/CategoryDetail';
import ComparePage from './pages/explore/ComparePage';
import CompareSmartFindPage from './pages/explore/CompareSmartFindPage';
import TrendingPage from './pages/explore/TrendingPage';
import FriendsActivityPage from './pages/explore/FriendsActivityPage';
import ExploreProductDetail from './pages/explore/ExploreProductDetail';
import SpinWinPage from './pages/explore/SpinWinPage';
import DailyCheckInPage from './pages/explore/DailyCheckInPage';
import ReviewEarnPage from './pages/explore/ReviewEarnPage';
import MapViewPage from './pages/explore/MapViewPage';

// Earn Subpages
import UploadBillPage from './pages/earn/UploadBillPage';
import ReferralPage from './pages/earn/ReferralPage';
import Achievements from './pages/earn/Achievements';
import Leaderboard from './pages/earn/Leaderboard';
import CoinHunt from './pages/earn/CoinHunt';
import ScratchCard from './pages/earn/ScratchCard';

// Specialized Stores
import LuxuryStore from './pages/stores/LuxuryStore';
import OrganicStore from './pages/stores/OrganicStore';
import MenStore from './pages/stores/MenStore';
import WomenStore from './pages/stores/WomenStore';
import ChildrenStore from './pages/stores/ChildrenStore';
import RentalStore from './pages/stores/RentalStore';
import GiftingStore from './pages/stores/GiftingStore';

// Exclusive pages
import StudentZone from './pages/exclusive/StudentZone';
import CorporatePerks from './pages/exclusive/CorporatePerks';
import WomenExclusive from './pages/exclusive/WomenExclusive';
import BirthdaySpecials from './pages/exclusive/BirthdaySpecials';
import SpecialProfiles from './pages/exclusive/SpecialProfiles';
import LoyaltyRewards from './pages/exclusive/LoyaltyRewards';
import BrandLoyalty from './pages/BrandLoyalty';
import LoyaltyHub from './pages/LoyaltyHub';
import RewardsHub from './pages/RewardsHub';
import LoyaltyRewardsHub from './pages/LoyaltyRewardsHub';
import PayInStore from './pages/PayInStore';
import HowRezWorks from './pages/HowRezWorks';
import CoinSystemGuide from './pages/CoinSystemGuide';
import SocialHub from './pages/SocialHub';
import SocialImpact from './pages/earn/SocialImpact';
import BrandTasks from './pages/earn/BrandTasks';
import UGCCreator from './pages/earn/UGCCreator';
import CollegeAmbassador from './pages/earn/CollegeAmbassador';
import CorporateEmployee from './pages/earn/CorporateEmployee';
import Surveys from './pages/earn/Surveys';
import PlayGames from './pages/earn/PlayGames';
import ReferEarn from './pages/earn/ReferEarn';
import WriteReviews from './pages/earn/WriteReviews';
import Quiz from './pages/earn/Quiz';
import MemoryMatch from './pages/earn/MemoryMatch';
import LuckyDraw from './pages/earn/LuckyDraw';
import GuessPrice from './pages/earn/GuessPrice';
import TournamentDetail from './pages/earn/TournamentDetail';
import SocialImpactEventDetail from './pages/earn/SocialImpactEventDetail';

// Social & Community sub-pages
import SocialActivityDetail from './pages/social/SocialActivityDetail';

// Experience sub-pages
import ExperienceDetail from './pages/experience/ExperienceDetail';

// Category Hub (handles all main categories)
import CategoryHub from './pages/CategoryHub';

// ReZ Mall sub-pages
import MallBrandDetail from './pages/mall/MallBrandDetail';
import MallCategory from './pages/mall/MallCategory';
import MallCollection from './pages/mall/MallCollection';
import MallBrands from './pages/mall/MallBrands';
import MallCategories from './pages/mall/MallCategories';
import MallCart from './pages/mall/MallCart';

// Cash Store sub-pages
import CashStoreBrandDetail from './pages/cashstore/CashStoreBrandDetail';
import TrackCashback from './pages/cashstore/TrackCashback';
import HowItWorks from './pages/cashstore/HowItWorks';
import CashStoreStores from './pages/cashstore/CashStoreStores';
import CashStoreCoupons from './pages/cashstore/CashStoreCoupons';
import CashStoreGiftCards from './pages/cashstore/CashStoreGiftCards';
import CashStoreMissingCashback from './pages/cashstore/CashStoreMissingCashback';
import CashStoreCategory from './pages/cashstore/CashStoreCategory';
import CreatorStoreHome from './pages/creator/CreatorStoreHome';
import CreatorProfile from './pages/creator/CreatorProfile';
import CreatorPickDetail from './pages/creator/CreatorPickDetail';
import CollectionDetail from './pages/creator/CollectionDetail';
import CreatorsAll from './pages/creator/CreatorsAll';

// Partner pages
import PartnerSignup from './pages/partner/PartnerSignup';
import PartnerSuccess from './pages/partner/PartnerSuccess';

// Cart
import Cart from './pages/Cart';

// Preloader Demo
import PreloaderDemo from './pages/PreloaderDemo';

// Preloader Manager
import PreloaderManager from './components/preloader/PreloaderManager';
import ModeTransitionManager from './components/preloader/ModeTransitionManager';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider>
        <UserProvider>
          <WalletProvider>
            <WishlistProvider>
              <SavingsProvider>
                <GamificationProvider>
                  <CreatorProvider>
                    <SearchProvider>
                      <AppProvider>
                        <PreloaderManager>
                          <ModeTransitionManager>
            <Routes>
              {/* Auth & Onboarding Routes (No Layout) */}
              <Route path="/splash" element={<Splash />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/otp-verify" element={<OTPVerify />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* Main App Routes (With Layout) */}
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="explore" element={<ExploreNew />} />
                <Route path="explore-old" element={<Explore />} />
                <Route path="explore/category/:categoryId" element={<CategoryDetail />} />
                <Route path="explore/compare" element={<ComparePage />} />
                <Route path="explore/compare-smart-find" element={<CompareSmartFindPage />} />
                <Route path="explore/trending" element={<TrendingPage />} />
                <Route path="explore/friends" element={<FriendsActivityPage />} />
                <Route path="explore/product/:productId" element={<ExploreProductDetail />} />
                <Route path="explore/spin-win" element={<SpinWinPage />} />
                <Route path="explore/daily-checkin" element={<DailyCheckInPage />} />
                <Route path="explore/review-earn" element={<ReviewEarnPage />} />
                <Route path="explore/review-earn/:productId" element={<ReviewEarnPage />} />
                <Route path="explore/map" element={<MapViewPage />} />
                <Route path="categories" element={<Categories />} />
                <Route path="stores" element={<StoreHub />} />
                <Route path="store/:id" element={<StorePage />} />
                <Route path="store-detail/:id" element={<StoreDetailPage />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="wallet/use" element={<WalletUse />} />
                <Route path="offers" element={<Offers />} />
                <Route path="deal-store" element={<DealStore />} />
                <Route path="deal/:id" element={<DealDetail />} />
                <Route path="games" element={<Navigate to="/earn" replace />} />
                <Route path="cash-store" element={<CashStore />} />
                <Route path="cash-store/brand/:brandId" element={<CashStoreBrandDetail />} />
                <Route path="cash-store/stores" element={<CashStoreStores />} />
                <Route path="cash-store/coupons" element={<CashStoreCoupons />} />
                <Route path="cash-store/track" element={<CashStoreTrack />} />
                <Route path="cash-store/gift-cards" element={<CashStoreGiftCards />} />
                <Route path="cash-store/missing-cashback" element={<CashStoreMissingCashback />} />
                <Route path="cash-store/category/:category" element={<CashStoreCategory />} />
                <Route path="cash-store/how-it-works" element={<HowItWorks />} />
                <Route path="mall" element={<RezMall />} />
                <Route path="mall/brand/:brandId" element={<MallBrandDetail />} />
                <Route path="mall/brands" element={<MallBrands />} />
                <Route path="mall/category/:categoryId" element={<MallCategory />} />
                <Route path="mall/categories" element={<MallCategories />} />
                <Route path="mall/collection/:collectionId" element={<MallCollection />} />
                <Route path="mall/cart" element={<MallCart />} />

                {/* Creator Store Routes */}
                <Route path="creators" element={<CreatorStoreHome />} />
                <Route path="creators/all" element={<CreatorsAll />} />
                <Route path="creators/:username" element={<CreatorProfile />} />
                <Route path="creators/:username/pick/:pickId" element={<CreatorPickDetail />} />
                <Route path="creators/:username/collection/:collectionId" element={<CollectionDetail />} />

                {/* Cart */}
                <Route path="cart" element={<Cart />} />

                {/* Partner Routes */}
                <Route path="partner/:type" element={<PartnerSignup />} />
                <Route path="partner/success" element={<PartnerSuccess />} />

                {/* Preloader Demo */}
                <Route path="preloader-demo" element={<PreloaderDemo />} />

                <Route path="prive" element={<PriveHome />} />
                <Route path="prive/privileges" element={<PrivePrivileges />} />
                <Route path="prive/explore" element={<PriveExplore />} />
                <Route path="prive/influence" element={<PriveInfluence />} />
                <Route path="prive/tier-progress" element={<PriveTierProgress />} />
                <Route path="prive/offer/:offerId" element={<PriveOfferDetail />} />
                <Route path="prive/redeem" element={<PriveRedeem />} />
                <Route path="prive/profile" element={<PriveProfile />} />
                <Route path="prive/store/:storeId" element={<PriveStoreDetail />} />
                <Route path="prive/influence-hub" element={<PriveInfluenceHub />} />
                <Route path="prive/notifications" element={<PriveNotifications />} />
                <Route path="prive/invitation/:invitationId" element={<PriveBrandInvitation />} />
                <Route path="prive/earnings" element={<PriveEarnings />} />
                <Route path="prive/activity" element={<PriveActivity />} />
                <Route path="prive/recognition" element={<PriveRecognition />} />
                <Route path="prive/authority" element={<PriveAuthority />} />
                <Route path="prive/visibility" element={<PriveVisibilityControl />} />
                <Route path="prive/statement" element={<PriveActivityStatement />} />
                <Route path="prive/exit" element={<PriveExit />} />
                <Route path="prive/invitations" element={<PriveInvitations />} />
                <Route path="prive/settings" element={<PriveSettings />} />
                <Route path="prive/offers-feed" element={<PriveOffersFeed />} />
                <Route path="prive/campaign/:campaignId" element={<PriveCampaignTask />} />
                <Route path="prive/campaign-status/:campaignId" element={<PriveCampaignStatus />} />
                <Route path="prive/eligibility" element={<PriveEligibility />} />
                <Route path="prive/content-performance/:contentId" element={<PriveContentPerformance />} />
                <Route path="prive/content-guidelines" element={<PriveContentGuidelines />} />
                <Route path="prive/redemption-history" element={<PriveRedemptionHistory />} />
                <Route path="prive/score-breakdown" element={<PriveScoreBreakdown />} />
                <Route path="prive/gift-cards" element={<PriveGiftCards />} />
                <Route path="prive/gift-card/:cardId" element={<PriveGiftCardDetail />} />
                <Route path="prive/experiences" element={<PriveExperiences />} />
                <Route path="prive/experience/:experienceId" element={<PriveExperienceDetail />} />
                <Route path="prive/partner-privileges" element={<PrivePartnerPrivileges />} />
                <Route path="prive/checkout" element={<PriveCheckout />} />
                <Route path="prive/booking" element={<PriveBooking />} />
                <Route path="payment" element={<PaymentGateway />} />
                <Route path="qr-scanner" element={<QRScanner />} />
                <Route path="referral" element={<ReferralDashboard />} />
                <Route path="merchant/signup" element={<MerchantSignup />} />
                <Route path="merchant/business-details" element={<MerchantBusinessDetails />} />
                <Route path="merchant/success" element={<MerchantSuccess />} />
                <Route path="event-ticketing" element={<EventTicketing />} />
                <Route path="my-tickets" element={<MyTickets />} />
                <Route path="ticket/:ticketId" element={<TicketDetail />} />
                <Route path="coin-history" element={<CoinHistory />} />
                <Route path="college/verify" element={<StudentVerification />} />
                <Route path="college/ambassador" element={<AmbassadorDashboard />} />
                <Route path="social-feed" element={<SocialFeed />} />
                <Route path="savings-tracker" element={<SavingsTracker />} />
                <Route path="contests" element={<ContestHub />} />
                <Route path="contest/:contestId" element={<ContestDetail />} />
                <Route path="corporate/verify" element={<EmployeeVerification />} />
                <Route path="wishlist-enhanced" element={<EnhancedWishlist />} />
                <Route path="notifications-center" element={<NotificationsCenter />} />
                <Route path="compare" element={<ProductComparison />} />
                <Route path="track-order/:orderId" element={<OrderTracking />} />
                <Route path="track-order" element={<OrderTracking />} />
                <Route path="profile" element={<Profile />} />
                <Route path="flea-market" element={<FleaMarket />} />
                <Route path="events" element={<Events />} />
                <Route path="events/movies" element={<EventsMovies />} />
                <Route path="events/concerts" element={<EventsConcerts />} />
                <Route path="events/workshops" element={<EventsWorkshops />} />
                <Route path="events/parks" element={<EventsParks />} />
                <Route path="events/gaming" element={<EventsGaming />} />
                <Route path="events/experiences" element={<EventsExperiences />} />
                <Route path="event/:type/:id" element={<EventDetail />} />
                <Route path="event/:id" element={<EventDetail />} />
                <Route path="travel" element={<Travel />} />
                <Route path="food" element={<FoodDining />} />
                <Route path="food/restaurant/:id" element={<RestaurantDetail />} />
                <Route path="electronics" element={<Electronics />} />
                <Route path="electronics/:category" element={<ElectronicsCategory />} />
                <Route path="electronics/product/:id" element={<ElectronicsProduct />} />
                <Route path="fashion" element={<Fashion />} />
                <Route path="fashion/vibes" element={<FashionVibes />} />
                <Route path="fashion/occasions" element={<FashionOccasions />} />
                <Route path="fashion/brands" element={<FashionBrands />} />
                <Route path="fashion/trending" element={<FashionTrending />} />
                <Route path="fashion/stores" element={<FashionStores />} />

                {/* Lifestyle Hub */}
                <Route path="lifestyle" element={<Lifestyle />} />

                {/* Lifestyle Fashion Pages */}
                <Route path="lifestyle/fashion/style-quiz" element={<StyleQuiz />} />
                <Route path="lifestyle/fashion/style-dna-result" element={<StyleDNAResult />} />
                <Route path="lifestyle/fashion/virtual-wardrobe" element={<VirtualWardrobe />} />
                <Route path="lifestyle/fashion/outfit-calendar" element={<OutfitCalendar />} />
                <Route path="lifestyle/fashion/sustainability" element={<SustainabilityDashboard />} />
                <Route path="lifestyle/fashion/wardrobe-suggestions" element={<WardrobeOutfitSuggestions />} />
                <Route path="lifestyle/fashion/travel-planner" element={<FashionTravelPlanner />} />
                <Route path="lifestyle/fashion/creator-feed" element={<CreatorFashionFeed />} />
                <Route path="lifestyle/fashion/challenges" element={<StyleChallenges />} />
                <Route path="lifestyle/profile" element={<LifestyleProfile />} />

                {/* Lifestyle Events & Food Pages */}
                <Route path="lifestyle/events" element={<EventsHub />} />
                <Route path="lifestyle/food" element={<FoodHub />} />
                <Route path="fashion/deals" element={<FashionDeals />} />
                <Route path="fashion/vibe/:id" element={<FashionVibeDetail />} />
                <Route path="fashion/occasion/:id" element={<FashionOccasionDetail />} />
                <Route path="fashion/brand/:id" element={<FashionBrandDetail />} />
                <Route path="fashion/trend/:id" element={<FashionTrendDetail />} />
                <Route path="fashion/:category" element={<FashionCategory />} />
                <Route path="fashion/product/:id" element={<FashionProduct />} />
                <Route path="beauty" element={<Beauty />} />
                <Route path="beauty/nearby" element={<BeautyNearby />} />
                <Route path="beauty/deals" element={<BeautyDeals />} />
                <Route path="beauty/services" element={<BeautyServices />} />
                <Route path="beauty/products" element={<BeautyProducts />} />
                <Route path="beauty/clinics" element={<BeautyClinics />} />
                <Route path="beauty/all" element={<BeautyAll />} />
                <Route path="beauty/concierge" element={<BeautyConcierge />} />
                <Route path="beauty/gift" element={<BeautyGift />} />
                <Route path="beauty/offers" element={<BeautyOffers />} />
                <Route path="beauty/product/:id" element={<BeautyProductDetail />} />
                <Route path="beauty/clinic/:id" element={<BeautyClinicDetail />} />
                <Route path="beauty/:type/:category" element={<BeautyCategory />} />
                <Route path="beauty/service/:id" element={<BeautyService />} />
                <Route path="grocery" element={<Grocery />} />
                <Route path="grocery/stores" element={<GroceryStores />} />
                <Route path="grocery/fast" element={<GroceryFast />} />
                <Route path="grocery/deals" element={<GroceryDeals />} />
                <Route path="grocery/products" element={<GroceryProducts />} />
                <Route path="grocery/compare" element={<GroceryCompare />} />
                <Route path="grocery/offers" element={<GroceryOffers />} />
                <Route path="grocery/:category" element={<GroceryCategory />} />
                <Route path="grocery/store/:id" element={<GroceryStoreDetail />} />
                <Route path="grocery/product/:id" element={<GroceryProductDetail />} />
                <Route path="healthcare" element={<Healthcare />} />
                <Route path="healthcare/doctors" element={<HealthcareDoctors />} />
                <Route path="healthcare/dental" element={<HealthcareDental />} />
                <Route path="healthcare/diagnostics" element={<HealthcareDiagnostics />} />
                <Route path="healthcare/pharmacy" element={<HealthcarePharmacy />} />
                <Route path="healthcare/offers" element={<HealthcareOffers />} />
                <Route path="healthcare/emergency" element={<HealthcareEmergency />} />
                <Route path="healthcare/support" element={<HealthcareSupport />} />
                <Route path="healthcare/upload-bill" element={<HealthcareUploadBill />} />
                <Route path="healthcare/:category" element={<HealthcareCategory />} />
                <Route path="healthcare/doctor/:id" element={<HealthcareDoctorDetail />} />
                <Route path="healthcare/dental/:id" element={<HealthcareDentalDetail />} />
                <Route path="healthcare/test/:id" element={<HealthcareTestDetail />} />
                <Route path="healthcare/pharmacy/:id" element={<HealthcarePharmacyDetail />} />
                <Route path="fitness" element={<Fitness />} />
                <Route path="fitness/gyms" element={<FitnessGyms />} />
                <Route path="fitness/studios" element={<FitnessStudios />} />
                <Route path="fitness/trainers" element={<FitnessTrainers />} />
                <Route path="fitness/store" element={<FitnessStore />} />
                <Route path="fitness/challenges" element={<FitnessChallenges />} />
                <Route path="fitness/feed" element={<FitnessFeed />} />
                <Route path="fitness/streak" element={<FitnessStreak />} />
                <Route path="fitness/:category" element={<FitnessCategory />} />
                <Route path="fitness/gym/:id" element={<FitnessGymDetail />} />
                <Route path="fitness/trainer/:id" element={<FitnessTrainerDetail />} />
                <Route path="fitness/challenge/:id" element={<FitnessChallengeDetail />} />
                <Route path="fitness/product/:id" element={<FitnessProductDetail />} />
                <Route path="home-services" element={<HomeServices />} />
                <Route path="home-services/popular" element={<HomeServicesPopular />} />
                <Route path="home-services/providers" element={<HomeServicesProviders />} />
                <Route path="home-services/bookings" element={<HomeServicesBookings />} />
                <Route path="home-services/available-today" element={<HomeServicesAvailableToday />} />
                <Route path="home-services/:category" element={<HomeServicesCategory />} />
                <Route path="home-services/book/:id" element={<HomeServicesBook />} />
                <Route path="home-services/provider/:id" element={<HomeServicesProviderDetail />} />
                <Route path="financial" element={<Financial />} />
                <Route path="financial/bills" element={<FinancialBills />} />
                <Route path="financial/offers" element={<FinancialOffers />} />
                <Route path="financial/history" element={<FinancialHistory />} />
                <Route path="financial/ott" element={<FinancialOTT />} />
                <Route path="financial/ott/:id" element={<FinancialOTTDetail />} />
                <Route path="financial/gold" element={<FinancialGold />} />
                <Route path="financial/:category" element={<FinancialCategory />} />
                <Route path="financial/offer/:id" element={<FinancialOfferDetail />} />
                <Route path="financial/pay-bill/:id" element={<FinancialPayBill />} />

                {/* Search Results */}
                <Route path="search" element={<SearchResults />} />

                {/* Earn Page */}
                <Route path="earn" element={<Earn />} />
                <Route path="earn/achievements" element={<Achievements />} />
                <Route path="earn/leaderboard" element={<Leaderboard />} />
                <Route path="earn/coin-hunt" element={<CoinHunt />} />
                <Route path="earn/scratch-card" element={<ScratchCard />} />
                <Route path="earn/surveys" element={<Surveys />} />
                <Route path="earn/play" element={<PlayGames />} />
                <Route path="earn/refer" element={<ReferEarn />} />
                <Route path="earn/reviews" element={<WriteReviews />} />
                <Route path="upload-bill" element={<UploadBillPage />} />
                <Route path="refer" element={<ReferralPage />} />

                {/* Shop by Experience Routes */}
                <Route path="experience/sample-trial" element={<Navigate to="/explore" replace />} />
                <Route path="experience/60-min-delivery" element={<Navigate to="/grocery/fast" replace />} />
                <Route path="experience/luxury" element={<LuxuryStore />} />
                <Route path="experience/organic" element={<OrganicStore />} />
                <Route path="experience/men" element={<MenStore />} />
                <Route path="experience/women" element={<WomenStore />} />
                <Route path="experience/children" element={<ChildrenStore />} />
                <Route path="experience/rental" element={<RentalStore />} />
                <Route path="experience/gifting" element={<GiftingStore />} />

                {/* Orders & Wishlist */}
                <Route path="orders" element={<OrderHistory />} />
                <Route path="order/:orderId" element={<OrderDetail />} />
                <Route path="wishlist" element={<Wishlist />} />

                {/* Offers & Cashback Details */}
                <Route path="offers/:id" element={<OfferDetail />} />
                <Route path="cashback/:id" element={<CashbackDetail />} />

                {/* Notifications & Settings */}
                <Route path="notifications" element={<Notifications />} />
                <Route path="settings" element={<Settings />} />

                {/* Help & Support */}
                <Route path="help" element={<Help />} />
                <Route path="support/chat" element={<SupportChat />} />
                <Route path="terms" element={<Terms />} />

                {/* Deals & Shopping */}
                <Route path="deals" element={<Deals />} />
                <Route path="super-deals" element={<SuperDeals />} />
                <Route path="scan" element={<ScanPay />} />
                <Route path="reels" element={<Reels />} />

                {/* Discovery */}
                <Route path="new" element={<NewArrivals />} />
                <Route path="popular" element={<PopularStores />} />

                {/* New Feature Pages */}
                <Route path="my-wishlist" element={<WishlistPage />} />
                <Route path="savings" element={<SavingsDashboard />} />
                <Route path="achievements" element={<GamificationHub />} />
                <Route path="notifications" element={<NotificationCenterPage />} />

                {/* Gamification */}
                <Route path="missions" element={<Missions />} />

                {/* Bookings */}
                <Route path="bookings" element={<Bookings />} />

                {/* Pay in Store */}
                <Route path="pay-in-store" element={<PayInStore />} />

                {/* How ReZ Works - Interactive Flow */}
                <Route path="how-rez-works" element={<HowRezWorks />} />
                <Route path="how-it-works" element={<HowRezWorks />} />
                <Route path="coin-system" element={<CoinSystemGuide />} />
                <Route path="coins-guide" element={<CoinSystemGuide />} />

                {/* Social & Community */}
                <Route path="social" element={<SocialHub />} />
                <Route path="social/:type/:id" element={<SocialActivityDetail />} />
                <Route path="earn/social-impact" element={<SocialImpact />} />
                <Route path="earn/social-impact/:id" element={<SocialImpactEventDetail />} />
                <Route path="earn/brand-tasks" element={<BrandTasks />} />
                <Route path="earn/ugc-creator" element={<UGCCreator />} />
                <Route path="earn/college-ambassador" element={<CollegeAmbassador />} />
                <Route path="earn/corporate-employee" element={<CorporateEmployee />} />

                {/* Earn Games */}
                <Route path="earn/quiz" element={<Quiz />} />
                <Route path="earn/memory-match" element={<MemoryMatch />} />
                <Route path="earn/lucky-draw" element={<LuckyDraw />} />
                <Route path="earn/guess-price" element={<GuessPrice />} />
                <Route path="earn/tournaments/:id" element={<TournamentDetail />} />

                {/* Universal Product/Service Page */}
                <Route path="product/:id" element={<ProductServicePage />} />
                <Route path="service/:id" element={<UniversalServicePage />} />
                <Route path="online/:id" element={<UniversalServicePage />} />

                {/* Service Booking Page */}
                <Route path="booking/:id" element={<ServiceBookingPage />} />

                {/* Checkout Pages */}
                <Route path="checkout/product/:id" element={<ProductCheckout />} />
                <Route path="checkout/service/:id" element={<ServiceCheckout />} />

                {/* Specialized Stores */}
                <Route path="store/luxury" element={<LuxuryStore />} />
                <Route path="store/organic" element={<OrganicStore />} />
                <Route path="store/men" element={<MenStore />} />
                <Route path="store/women" element={<WomenStore />} />
                <Route path="store/children" element={<ChildrenStore />} />
                <Route path="store/rental" element={<RentalStore />} />
                <Route path="store/gifting" element={<GiftingStore />} />

                {/* Exclusive pages */}
                <Route path="exclusive/student" element={<StudentZone />} />
                <Route path="exclusive/corporate" element={<CorporatePerks />} />
                <Route path="exclusive/women" element={<WomenExclusive />} />
                <Route path="exclusive/birthday" element={<BirthdaySpecials />} />
                <Route path="exclusive/loyalty" element={<LoyaltyRewards />} />
                <Route path="exclusive/special-profiles" element={<SpecialProfiles />} />
                <Route path="exclusive/prive" element={<RezPrive />} />

                {/* Admin Routes */}
                <Route path="admin" element={<AdminDashboard />} />
                <Route path="admin/dashboard" element={<AdminDashboard />} />
                <Route path="admin/global-dashboard" element={<AdminGlobalDashboard />} />
                <Route path="admin/marketing-dashboard" element={<AdminMarketingDashboard />} />
                <Route path="admin/finance-dashboard" element={<AdminFinanceDashboard />} />
                <Route path="admin/operations-dashboard" element={<AdminOperationsDashboard />} />
                <Route path="admin/regional-dashboard" element={<AdminRegionalDashboard />} />
                <Route path="admin/role-management" element={<AdminRoleManagement />} />
                <Route path="admin/support-dashboard" element={<AdminSupportDashboard />} />
                <Route path="admin/content-dashboard" element={<AdminContentDashboard />} />
                <Route path="admin/analytics-dashboard" element={<AdminAnalyticsDashboard />} />
                <Route path="admin/mode-control" element={<AdminModeControl />} />
                <Route path="admin/college-corporate" element={<AdminCollegeCorporateModule />} />
                <Route path="admin/coin-issuance" element={<AdminCoinIssuanceControl />} />
                <Route path="admin/coin-rules" element={<AdminCoinRulesEngine />} />
                <Route path="admin/kyc-compliance" element={<AdminKYCCompliance />} />
                <Route path="admin/bank-reconciliation" element={<AdminBankReconciliation />} />
                <Route path="operations/city-dashboard" element={<OperationsCityDashboard />} />
                <Route path="admin/users" element={<AdminUsers />} />
                <Route path="admin/merchants" element={<AdminMerchants />} />
                <Route path="admin/offers" element={<AdminOffers />} />
                <Route path="admin/analytics" element={<AdminAnalytics />} />
                <Route path="admin/campaigns" element={<AdminCampaigns />} />
                <Route path="admin/campaign-approval" element={<AdminCampaignApproval />} />
                <Route path="admin/categories" element={<AdminCategories />} />
                <Route path="admin/content" element={<AdminContent />} />
                <Route path="admin/ugc-management" element={<AdminUGCManagement />} />
                <Route path="admin/gamification" element={<AdminGamification />} />
                <Route path="admin/referrals" element={<AdminReferrals />} />
                <Route path="admin/tournaments" element={<AdminTournaments />} />
                <Route path="admin/events" element={<AdminEvents />} />
                <Route path="admin/social-impact" element={<AdminSocialImpact />} />
                <Route path="admin/price-tracking" element={<AdminPriceTracking />} />
                <Route path="admin/product-comparison" element={<AdminProductComparison />} />
                <Route path="admin/recommendations" element={<AdminRecommendations />} />
                <Route path="admin/transactions" element={<AdminTransactions />} />
                <Route path="admin/wallet" element={<AdminWallet />} />
                <Route path="admin/cashback" element={<AdminCashback />} />
                <Route path="admin/vouchers" element={<AdminVouchers />} />
                <Route path="admin/flash-sales" element={<AdminFlashSales />} />
                <Route path="admin/lightning-deals" element={<AdminLightningDeals />} />
                <Route path="admin/coin-events" element={<AdminCoinEvents />} />
                <Route path="admin/exclusive-programs" element={<AdminExclusivePrograms />} />
                <Route path="admin/discount-buckets" element={<AdminDiscountBuckets />} />
                <Route path="admin/sponsored-deals" element={<AdminSponsoredDeals />} />
                <Route path="admin/bank-offers" element={<AdminBankOffers />} />
                <Route path="admin/payments" element={<AdminPayments />} />
                <Route path="admin/marketing" element={<AdminMarketing />} />
                <Route path="admin/hero-banners" element={<AdminHeroBanners />} />
                <Route path="admin/email-marketing" element={<AdminEmailMarketing />} />
                <Route path="admin/sms-campaigns" element={<AdminSMSCampaigns />} />
                <Route path="admin/social-integration" element={<AdminSocialIntegration />} />
                <Route path="admin/fraud" element={<AdminFraud />} />
                <Route path="admin/special-programs" element={<AdminSpecialPrograms />} />
                <Route path="admin/integrations" element={<AdminIntegrations />} />
                <Route path="admin/background-jobs" element={<AdminBackgroundJobs />} />
                <Route path="admin/user-management" element={<AdminUserManagement />} />
                <Route path="admin/notifications" element={<AdminNotifications />} />
                <Route path="admin/logs" element={<AdminLogs />} />
                <Route path="admin/settings" element={<AdminSettings />} />
                <Route path="admin/support" element={<AdminSupport />} />
                <Route path="admin/nearby-offers" element={<AdminNearbyOffers />} />
                <Route path="admin/todays-offers" element={<AdminTodaysOffers />} />
                <Route path="admin/bogo-management" element={<AdminBOGOManagement />} />
                <Route path="admin/trending-algorithm" element={<AdminTrendingAlgorithm />} />
                <Route path="admin/ai-recommendations" element={<AdminAIRecommendations />} />
                <Route path="admin/hotspot-management" element={<AdminHotspotManagement />} />
                <Route path="admin/upload-bill-settings" element={<AdminUploadBillSettings />} />
                <Route path="admin/profile-verification" element={<AdminProfileVerification />} />
                <Route path="admin/friend-network-settings" element={<AdminFriendNetworkSettings />} />
                <Route path="admin/free-delivery" element={<AdminFreeDeliveryManagement />} />
                <Route path="admin/new-deals-settings" element={<AdminNewDealsSettings />} />
                <Route path="admin/scan-pay-settings" element={<AdminScanPaySettings />} />
                <Route path="admin/daily-checkin" element={<AdminDailyCheckin />} />
                <Route path="admin/lock-price-deals" element={<AdminLockPriceDeals />} />
                <Route path="admin/promo-coin-manager" element={<AdminPromoCoinManager />} />
                <Route path="admin/redemption-rules" element={<AdminRedemptionRules />} />
                <Route path="admin/checkout-priority" element={<AdminCheckoutPriority />} />
                <Route path="admin/earning-rule-matrix" element={<AdminEarningRuleMatrix />} />
                <Route path="admin/coin-system-overview" element={<AdminCoinSystemOverview />} />
                <Route path="admin/merchant-tier-config" element={<AdminMerchantTierConfig />} />
                <Route path="admin/co-partner-brands" element={<AdminCoPartnerBrands />} />
                <Route path="admin/partnerships" element={<AdminPartnerships />} />
                <Route path="admin/pos-integration" element={<AdminPOSIntegration />} />
                <Route path="admin/merchant-super-os" element={<AdminMerchantSuperOS />} />
                <Route path="admin/ecosystem-analytics" element={<AdminEcosystemAnalytics />} />
                <Route path="admin/settlement-commission" element={<AdminSettlementCommission />} />
                <Route path="admin/prive-management" element={<AdminPriveManagement />} />
                <Route path="admin/content-moderation" element={<AdminContentModeration />} />
                <Route path="admin/game-configuration" element={<AdminGameConfiguration />} />
                <Route path="admin/social-impact-verification" element={<AdminSocialImpactVerification />} />
                <Route path="admin/event-inventory" element={<AdminEventInventory />} />
                <Route path="admin/fraud-detection" element={<AdminFraudDetection />} />
                <Route path="admin/ai-insights" element={<AdminAIInsights />} />
                <Route path="admin/platform-health" element={<AdminPlatformHealth />} />
                <Route path="admin/creator-content" element={<AdminCreatorContent />} />
                <Route path="admin/wallet-analytics" element={<AdminWalletAnalytics />} />
                <Route path="admin/role-based-access" element={<AdminRoleBasedAccess />} />
                <Route path="admin/regional-control" element={<AdminRegionalControl />} />
                <Route path="admin/multi-channel-marketing" element={<AdminMultiChannelMarketing />} />
                <Route path="admin/coin-emergency-controls" element={<AdminCoinEmergencyControls />} />
                <Route path="admin/merchant-trust-score" element={<AdminMerchantTrustScore />} />
                <Route path="admin/user-trust-score" element={<AdminUserTrustScore />} />
                <Route path="admin/offline-reconciliation" element={<AdminOfflineReconciliation />} />
                <Route path="admin/dispute-resolution" element={<AdminDisputeResolution />} />
                <Route path="admin/internal-ops" element={<AdminInternalOps />} />
                <Route path="admin/experiments" element={<AdminExperiments />} />
                <Route path="admin/monetization-hub" element={<AdminMonetizationHub />} />
                <Route path="admin/audit-vault" element={<AdminAuditVault />} />
                <Route path="admin/merchant-profit-engine" element={<AdminMerchantProfitEngine />} />
                <Route path="admin/merchant-intelligence" element={<AdminMerchantIntelligence />} />
                <Route path="admin/user-habit-engine" element={<AdminUserHabitEngine />} />
                <Route path="admin/city-lock-engine" element={<AdminCityLockEngine />} />
                <Route path="admin/trust-passport" element={<AdminTrustPassport />} />
                <Route path="admin/government-console" element={<AdminGovernmentConsole />} />
                <Route path="admin/credit-engine" element={<AdminCreditEngine />} />
                <Route path="admin/commerce-protocol" element={<AdminCommerceProtocol />} />
                <Route path="admin/enterprise-hub" element={<AdminEnterpriseHub />} />
                <Route path="admin/social-feed-control" element={<AdminSocialFeedControl />} />
                <Route path="admin/city-supply-lock" element={<AdminCitySupplyLock />} />
                <Route path="admin/temporal-commerce" element={<AdminTemporalCommerce />} />
                <Route path="admin/competitive-defense" element={<AdminCompetitiveDefense />} />
                <Route path="admin/ops-intelligence" element={<AdminOpsIntelligence />} />
                <Route path="admin/institutional-apis" element={<AdminInstitutionalAPIs />} />
                <Route path="admin/founder-vault" element={<AdminFounderVault />} />
                <Route path="admin/developer-portal" element={<AdminDeveloperPortal />} />
                <Route path="admin/barter-campaigns" element={<AdminBarterCampaigns />} />
                <Route path="admin/msme-reports" element={<AdminMSMEReports />} />
                <Route path="admin/webhook-manager" element={<AdminWebhookManager />} />
                <Route path="admin/gmb-sync" element={<AdminGMBSync />} />
                <Route path="admin/session-replay" element={<AdminSessionReplay />} />

                {/* User Gap Feature Routes */}
                <Route path="trust-passport" element={<TrustPassport />} />
                <Route path="disputes" element={<DisputeCenter />} />
                <Route path="my-content" element={<ContentSubmissionTracker />} />
                <Route path="security" element={<SecurityAlerts />} />
                <Route path="kyc-status" element={<KYCStatus />} />
                <Route path="table-reservation/:restaurantId" element={<TableReservation />} />
                <Route path="table-reservation" element={<TableReservation />} />
                <Route path="bill-split/:orderId" element={<BillSplitting />} />
                <Route path="bill-split" element={<BillSplitting />} />
                <Route path="prescriptions" element={<PrescriptionHistory />} />
                <Route path="insurance" element={<InsuranceCoverage />} />
                <Route path="price-ledger" element={<PriceLedger />} />
                <Route path="trust-credit" element={<TrustCredit />} />

                {/* Merchant Routes */}
                <Route path="merchant" element={<MerchantSuperOSDashboard />} />
                <Route path="merchant/dashboard" element={<MerchantSuperOSDashboard />} />
                <Route path="merchant/dashboard-old" element={<MerchantDashboard />} />
                <Route path="merchant/pos" element={<MerchantPOS />} />
                <Route path="merchant/accounting" element={<MerchantAccounting />} />
                <Route path="merchant/events" element={<MerchantEvents />} />
                <Route path="merchant/branches" element={<MerchantBranchManager />} />
                <Route path="merchant/discovery" element={<MerchantDiscovery />} />
                <Route path="merchant/prive-module" element={<MerchantPriveModule />} />
                <Route path="merchant/kds" element={<MerchantKDS />} />
                <Route path="merchant/tables" element={<MerchantTableManagement />} />
                <Route path="merchant/recipe-costing" element={<MerchantRecipeCosting />} />
                <Route path="merchant/barcode-scanner" element={<MerchantBarcodeScanner />} />
                <Route path="merchant/product-variants" element={<MerchantProductVariants />} />
                <Route path="merchant/appointments" element={<MerchantAppointments />} />
                <Route path="merchant/service-catalog" element={<MerchantServiceCatalog />} />
                <Route path="merchant/staff-roster" element={<MerchantStaffRoster />} />
                <Route path="merchant/marketplace" element={<MerchantMarketplace />} />
                <Route path="merchant/subscriptions" element={<MerchantSubscriptions />} />
                <Route path="merchant/profile" element={<MerchantProfile />} />
                <Route path="merchant/orders" element={<MerchantOrders />} />
                <Route path="merchant/orders-multi-channel" element={<MerchantOrdersMultiChannel />} />
                <Route path="merchant/products" element={<MerchantProducts />} />
                <Route path="merchant/inventory" element={<MerchantInventory />} />
                <Route path="merchant/inventory-advanced" element={<MerchantInventoryAdvanced />} />
                <Route path="merchant/crm" element={<MerchantCRM />} />
                <Route path="merchant/pricing-intelligence" element={<MerchantPricingIntelligence />} />
                <Route path="merchant/tax-compliance" element={<MerchantTaxCompliance />} />
                <Route path="merchant/suppliers-procurement" element={<MerchantSuppliersProcurement />} />
                <Route path="merchant/integrations" element={<MerchantIntegrations />} />
                <Route path="merchant/memberships" element={<MerchantMemberships />} />
                <Route path="merchant/waste-management" element={<MerchantWasteManagement />} />
                <Route path="merchant/batch-tracking" element={<MerchantBatchTracking />} />
                <Route path="merchant/payroll" element={<MerchantPayroll />} />
                <Route path="merchant/store-transfer" element={<MerchantStoreTransfer />} />
                <Route path="merchant/class-schedule" element={<MerchantClassSchedule />} />
                <Route path="merchant/booking-calendar" element={<MerchantBookingCalendar />} />
                <Route path="merchant/prescriptions" element={<MerchantPrescriptions />} />
                <Route path="merchant/qr-payments" element={<MerchantQRPayments />} />
                <Route path="merchant/qr-ordering" element={<MerchantQROrdering />} />
                <Route path="merchant/event-checkin" element={<MerchantEventCheckIn />} />
                <Route path="merchant/creator-hub" element={<MerchantCreatorHub />} />
                <Route path="merchant/review-management" element={<MerchantReviewManagement />} />
                <Route path="merchant/multi-store" element={<MerchantMultiStore />} />
                <Route path="merchant/customer-segmentation" element={<MerchantCustomerSegmentation />} />
                <Route path="merchant/user-roles" element={<MerchantUserRoles />} />
                <Route path="merchant/marketing-campaigns" element={<MerchantMarketingCampaigns />} />
                <Route path="merchant/returns" element={<MerchantReturns />} />
                <Route path="merchant/payments" element={<MerchantPayments />} />
                <Route path="merchant/performance" element={<MerchantPerformance />} />
                <Route path="merchant/shipping" element={<MerchantShipping />} />
                <Route path="merchant/offers" element={<MerchantOffers />} />
                <Route path="merchant/offers/create" element={<CreateOffer />} />
                <Route path="merchant/campaigns" element={<MerchantCampaigns />} />
                <Route path="merchant/ugc-campaigns" element={<MerchantUGCCampaigns />} />
                <Route path="merchant/flash-deals" element={<MerchantFlashDeals />} />
                <Route path="merchant/deal-analytics" element={<MerchantDealAnalytics />} />
                <Route path="merchant/exclusive-deals" element={<MerchantExclusiveDeals />} />
                <Route path="merchant/customers" element={<MerchantCustomers />} />
                <Route path="merchant/transactions" element={<MerchantTransactions />} />
                <Route path="merchant/wallet" element={<MerchantWallet />} />
                <Route path="merchant/reviews" element={<MerchantReviews />} />
                <Route path="merchant/analytics" element={<MerchantAnalytics />} />
                <Route path="merchant/financials" element={<MerchantFinancials />} />
                <Route path="merchant/marketing" element={<MerchantMarketing />} />
                <Route path="merchant/content" element={<MerchantContent />} />
                <Route path="merchant/loyalty" element={<MerchantLoyalty />} />
                <Route path="merchant/loyalty-offers" element={<MerchantLoyaltyOffers />} />
                <Route path="merchant/price-engineering" element={<MerchantPriceEngineering />} />
                <Route path="merchant/staff" element={<MerchantStaff />} />
                <Route path="merchant/benchmarks" element={<MerchantBenchmarks />} />
                <Route path="merchant/compliance" element={<MerchantCompliance />} />
                <Route path="merchant/documents" element={<MerchantDocuments />} />
                <Route path="merchant/notifications" element={<MerchantNotifications />} />
                <Route path="merchant/support" element={<MerchantSupport />} />
                <Route path="merchant/settings" element={<MerchantSettings />} />
                <Route path="merchant/nearby-offers" element={<MerchantNearbyOffers />} />
                <Route path="merchant/todays-offers" element={<MerchantTodaysOffers />} />
                <Route path="merchant/bogo-offers" element={<MerchantBOGOOffers />} />
                <Route path="merchant/birthday-offers" element={<MerchantBirthdayOffers />} />
                <Route path="merchant/cashback-programs" element={<MerchantCashbackPrograms />} />
                <Route path="merchant/branded-coin-config" element={<MerchantBrandedCoinConfig />} />
                <Route path="merchant/clearance-sales" element={<MerchantClearanceSales />} />
                <Route path="merchant/loyalty-tiers" element={<MerchantLoyaltyTiers />} />
                <Route path="merchant/free-delivery" element={<MerchantFreeDelivery />} />
                <Route path="merchant/lock-price-deals" element={<MerchantLockPriceDeals />} />
                <Route path="merchant/exclusive-programs" element={<MerchantExclusivePrograms />} />
                <Route path="merchant/pos-integration" element={<MerchantPOSIntegration />} />
                <Route path="merchant/pos-transactions" element={<MerchantPOSTransactions />} />
                <Route path="merchant/payment-links" element={<MerchantPaymentLinks />} />
                <Route path="merchant/bill-splitting" element={<MerchantBillSplitting />} />
                <Route path="merchant/tips-config" element={<MerchantTipsConfig />} />
                <Route path="merchant/post-payment-rewards" element={<MerchantPostPaymentRewards />} />
                <Route path="merchant/softpos" element={<MerchantSoftPOS />} />
                <Route path="merchant/captain-app" element={<MerchantCaptainApp />} />
                <Route path="merchant/credit-ledger" element={<MerchantCreditLedger />} />
                <Route path="merchant/gst-reports" element={<MerchantGSTReports />} />
                <Route path="merchant/payment-reminders" element={<MerchantPaymentReminders />} />
                <Route path="merchant/bill-hold" element={<MerchantBillHold />} />
                <Route path="merchant/aggregator-reconciliation" element={<MerchantAggregatorReconciliation />} />
                <Route path="merchant/token-display" element={<MerchantTokenDisplay />} />
                <Route path="merchant/expense-tracker" element={<MerchantExpenseTracker />} />
                <Route path="merchant/profit-loss" element={<MerchantProfitLoss />} />
                <Route path="merchant/quotations" element={<MerchantQuotations />} />
                <Route path="merchant/invoice-scanner" element={<MerchantInvoiceScanner />} />
                <Route path="merchant/combo-products" element={<MerchantComboProducts />} />
                <Route path="merchant/salesman-commission" element={<MerchantSalesmanCommission />} />
                <Route path="merchant/offline-pos" element={<MerchantOfflinePOS />} />
                <Route path="merchant/bill-management" element={<MerchantBillManagement />} />
                <Route path="merchant/accountant-portal" element={<MerchantAccountantPortal />} />
                <Route path="merchant/cash-drawer" element={<MerchantCashDrawer />} />
                <Route path="merchant/simple-pos" element={<MerchantSimplePOS />} />
                <Route path="merchant/day-end-report" element={<MerchantDayEndReport />} />
                <Route path="merchant/hardware-hub" element={<MerchantHardwareHub />} />
                <Route path="merchant/power-survival" element={<MerchantPowerSurvival />} />
                <Route path="merchant/category-pos" element={<MerchantCategoryPOS />} />
                <Route path="merchant/data-export" element={<MerchantDataExport />} />
                <Route path="merchant/rush-hour-mode" element={<MerchantRushHourMode />} />
                <Route path="merchant/stock-reconciliation" element={<MerchantStockReconciliation />} />
                <Route path="merchant/salon-packages" element={<MerchantSalonPackages />} />
                <Route path="merchant/clinic-insurance" element={<MerchantClinicInsurance />} />
                <Route path="merchant/supplier-returns" element={<MerchantSupplierReturns />} />
                <Route path="merchant/trust-score" element={<MerchantTrustScoreDetail />} />
                <Route path="merchant/contest-builder" element={<MerchantContestBuilder />} />
                <Route path="merchant/wishlist-demand" element={<MerchantWishlistDemand />} />
                <Route path="merchant/autopilot" element={<MerchantAutopilot />} />
                <Route path="merchant/shift-management" element={<MerchantShiftManagement />} />
                <Route path="merchant/purchase-orders" element={<MerchantPurchaseOrders />} />
                <Route path="merchant/failed-payments" element={<MerchantFailedPayments />} />
                <Route path="merchant/vouchers" element={<MerchantVouchers />} />
                <Route path="merchant/daybook" element={<MerchantDaybook />} />
                <Route path="merchant/e-invoice" element={<MerchantEInvoice />} />
                <Route path="merchant/gstr-export" element={<MerchantGSTRExport />} />
                <Route path="merchant/expiry-dashboard" element={<MerchantExpiryDashboard />} />
                <Route path="merchant/payment-intents" element={<MerchantPaymentIntents />} />
                <Route path="merchant/birthday-rewards" element={<MerchantBirthdayRewards />} />
                <Route path="merchant/session-tracking" element={<MerchantSessionTracking />} />
                <Route path="merchant/hsn-codes" element={<MerchantHSNCodes />} />
                <Route path="merchant/tds-tcs-reports" element={<MerchantTDSTCSReports />} />
                <Route path="merchant/calendar-sync" element={<MerchantCalendarSync />} />

                {/* Loyalty & Rewards - Unified Hub */}
                <Route path="loyalty-rewards" element={<LoyaltyRewardsHub />} />

                {/* Legacy routes - keep for backward compatibility */}
                <Route path="loyalty" element={<LoyaltyHub />} />
                <Route path="rewards" element={<RewardsHub />} />

                {/* Brand Pages */}
                <Route path="brand/:brandId" element={<BrandLoyalty />} />
              </Route>
            </Routes>
                          </ModeTransitionManager>
                        </PreloaderManager>
                      </AppProvider>
                    </SearchProvider>
                  </CreatorProvider>
                </GamificationProvider>
              </SavingsProvider>
            </WishlistProvider>
          </WalletProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
    <RoleSwitcher />
    </AuthProvider>
  );
}

export default App;
