import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { WalletProvider } from './contexts/WalletContext';
import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
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
import Profile from './pages/Profile';
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
import Terms from './pages/Terms';
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

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <WalletProvider>
            <AppProvider>
            <Routes>
              <Route path="/onboarding" element={<Onboarding />} />
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
                <Route path="cash-store" element={<CashStore />} />
                <Route path="cash-store/brand/:brandId" element={<CashStoreBrandDetail />} />
                <Route path="cash-store/stores" element={<CashStoreStores />} />
                <Route path="cash-store/coupons" element={<CashStoreCoupons />} />
                <Route path="cash-store/track" element={<CashStoreTrack />} />
                <Route path="mall" element={<RezMall />} />
                <Route path="mall/brand/:brandId" element={<MallBrandDetail />} />
                <Route path="mall/brands" element={<MallBrands />} />
                <Route path="mall/category/:categoryId" element={<MallCategory />} />
                <Route path="mall/categories" element={<MallCategories />} />
                <Route path="mall/collection/:collectionId" element={<MallCollection />} />
                <Route path="mall/cart" element={<MallCart />} />
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
                <Route path="upload-bill" element={<UploadBillPage />} />
                <Route path="refer" element={<ReferralPage />} />

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

                {/* Gamification */}
                <Route path="missions" element={<Missions />} />

                {/* Bookings */}
                <Route path="bookings" element={<Bookings />} />

                {/* Pay in Store */}
                <Route path="pay-in-store" element={<PayInStore />} />

                {/* How ReZ Works - Interactive Flow */}
                <Route path="how-rez-works" element={<HowRezWorks />} />
                <Route path="how-it-works" element={<HowRezWorks />} />

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

                {/* Loyalty & Rewards - Unified Hub */}
                <Route path="loyalty-rewards" element={<LoyaltyRewardsHub />} />

                {/* Legacy routes - keep for backward compatibility */}
                <Route path="loyalty" element={<LoyaltyHub />} />
                <Route path="rewards" element={<RewardsHub />} />

                {/* Brand Pages */}
                <Route path="brand/:brandId" element={<BrandLoyalty />} />
              </Route>
            </Routes>
          </AppProvider>
        </WalletProvider>
      </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
