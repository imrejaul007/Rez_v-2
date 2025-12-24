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
import Wallet from './pages/Wallet';
import Offers from './pages/Offers';
import CashStore from './pages/CashStore';
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
import Fitness from './pages/Fitness';
import HomeServices from './pages/HomeServices';
import Financial from './pages/Financial';
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
                <Route path="store/:id" element={<StorePage />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="offers" element={<Offers />} />
                <Route path="deal-store" element={<DealStore />} />
                <Route path="deal/:id" element={<DealDetail />} />
                <Route path="cash-store" element={<CashStore />} />
                <Route path="profile" element={<Profile />} />
                <Route path="flea-market" element={<FleaMarket />} />
                <Route path="events" element={<Events />} />
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
                <Route path="fitness" element={<Fitness />} />
                <Route path="home-services" element={<HomeServices />} />
                <Route path="financial" element={<Financial />} />

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

                {/* Notifications & Settings */}
                <Route path="notifications" element={<Notifications />} />
                <Route path="settings" element={<Settings />} />

                {/* Help & Support */}
                <Route path="help" element={<Help />} />
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
