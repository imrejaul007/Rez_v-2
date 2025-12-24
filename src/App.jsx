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
import Beauty from './pages/Beauty';
import BeautyCategory from './pages/BeautyCategory';
import BeautyService from './pages/BeautyService';
import Grocery from './pages/Grocery';
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
                <Route path="fashion/:category" element={<FashionCategory />} />
                <Route path="fashion/product/:id" element={<FashionProduct />} />
                <Route path="beauty" element={<Beauty />} />
                <Route path="beauty/:type/:category" element={<BeautyCategory />} />
                <Route path="beauty/service/:id" element={<BeautyService />} />
                <Route path="grocery" element={<Grocery />} />
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

                {/* Pay in Store */}
                <Route path="pay-in-store" element={<PayInStore />} />

                {/* How ReZ Works - Interactive Flow */}
                <Route path="how-rez-works" element={<HowRezWorks />} />

                {/* Universal Product/Service Page */}
                <Route path="product/:id" element={<ProductServicePage />} />
                <Route path="service/:id" element={<ProductServicePage />} />

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
