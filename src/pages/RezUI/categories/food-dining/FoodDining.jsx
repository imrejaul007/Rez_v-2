import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Search,
  ChevronRight,
  Coins,
  Zap,
  TrendingUp,
  Utensils,
  Trophy,
  Gift,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import BottomNavManager from '../components/layout/BottomNavManager';
import {
  foodTabs,
  cuisineFilters,
  restaurants,
  foodOffers,
  foodExperiences,
  recentlyVisited,
  searchSuggestions,
} from '../data/foodData';
import RestaurantCard from '../components/food/RestaurantCard';
import FoodOfferCard from '../components/food/FoodOfferCard';
import FoodExperienceCard from '../components/food/FoodExperienceCard';
import FoodModeFilters from '../components/food/FoodModeFilters';
import FoodCategoryGrid from '../components/food/FoodCategoryGrid';
import PayAtRestaurant from '../components/food/PayAtRestaurant';
import FoodSocialProof from '../components/food/FoodSocialProof';
import Button from '../components/common/Button';
import QuickActionBar from '../components/common/QuickActionBar';
import DealModeSwitcher from '../components/common/DealModeSwitcher';
import StreakLoyaltySection from '../components/common/StreakLoyaltySection';
import AISuggestions from '../components/common/AISuggestions';
import UGCSocialProof from '../components/common/UGCSocialProof';
import FooterTrust from '../components/common/FooterTrust';

const FoodDining = () => {
  const { rezCoins } = useWallet();
  const [activeTab, setActiveTab] = useState('delivery');
  const [activeModes, setActiveModes] = useState([]);
  const [activeCuisine, setActiveCuisine] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // Rotate search placeholders
  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchSuggestions.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Filter restaurants based on modes and cuisine
  const filteredRestaurants = restaurants.filter((restaurant) => {
    // Mode filters
    if (activeModes.includes('halal') && !restaurant.isHalal) return false;
    if (activeModes.includes('vegetarian') && !restaurant.isVeg) return false;
    if (activeModes.includes('vegan') && !restaurant.isVegan) return false;

    // Tab filters
    if (activeTab === 'delivery' && !restaurant.hasDelivery) return false;
    if (activeTab === 'dineIn' && !restaurant.hasDineIn) return false;

    // Cuisine filter
    if (activeCuisine !== 'all') {
      const cuisineName = cuisineFilters.find((c) => c.id === activeCuisine)?.label;
      if (!restaurant.cuisine.some((c) => c.toLowerCase().includes(cuisineName?.toLowerCase() || ''))) {
        return false;
      }
    }

    return true;
  });

  const deliveryRestaurants = filteredRestaurants.filter((r) => r.hasDelivery);
  const dineInRestaurants = filteredRestaurants.filter((r) => r.hasDineIn);
  const fastDelivery = deliveryRestaurants.filter((r) => r.is60Min);
  const featuredRestaurants = filteredRestaurants.filter((r) => r.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </Link>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Food & Dining</h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Order · Dine-In · Pay · Save</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
              <Coins className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">{rezCoins}</span>
            </div>
          </div>

          {/* Location */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 mt-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-sm text-rez-navy dark:text-white">HSR Layout, Bangalore</span>
            <ChevronRight className="w-3.5 h-3.5 text-rez-gray-600 dark:text-gray-500" />
          </button>
        </div>

        {/* Mode Filters */}
        <div className="px-4 pb-2">
          <FoodModeFilters activeModes={activeModes} onModeChange={setActiveModes} />
        </div>

        {/* Mode Active Message */}
        {activeModes.length > 0 && (
          <div className="px-4 pb-2">
            <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-xs text-emerald-400 text-center">
                Showing {activeModes.map((m) => m.charAt(0).toUpperCase() + m.slice(1)).join(' + ')}-friendly options
              </p>
            </div>
          </div>
        )}

        {/* Search */}
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-600 dark:text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchSuggestions[placeholderIndex]}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Main Tabs */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {foodTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full shrink-0 transition-colors ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <FoodSocialProof />

      {/* Loyalty Hub CTA */}
      <div className="px-4 py-4">
        <Link
          to="/loyalty-rewards"
          className="block p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-amber-500/20 border border-emerald-500/30"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/30 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-rez-navy dark:text-white">Food Loyalty Hub</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Track streaks, unlock rewards</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-lg bg-rez-gray-100 dark:bg-white/10">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Total Visits</p>
              <p className="text-lg font-bold text-rez-navy dark:text-white">42</p>
            </div>
            <div className="p-2 rounded-lg bg-rez-gray-100 dark:bg-white/10">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Active Brands</p>
              <p className="text-lg font-bold text-amber-400">7</p>
            </div>
            <div className="p-2 rounded-lg bg-rez-gray-100 dark:bg-white/10">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Next Reward</p>
              <p className="text-lg font-bold text-emerald-400">
                <Gift className="w-5 h-5 inline" />
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Quick Action Bar */}
      <QuickActionBar category="food" />

      {/* Pay at Restaurant Tab */}
      {activeTab === 'payAtRestaurant' && (
        <div className="mt-4">
          <PayAtRestaurant />
        </div>
      )}

      {/* Delivery Tab */}
      {activeTab === 'delivery' && (
        <>
          {/* Category Grid */}
          <FoodCategoryGrid onCategorySelect={(cat) => console.log('Selected:', cat)} />

          {/* Cuisine Filters */}
          <div className="px-4 mt-6">
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
              {cuisineFilters.map((cuisine) => (
                <button
                  key={cuisine.id}
                  onClick={() => setActiveCuisine(cuisine.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm ${
                    activeCuisine === cuisine.id
                      ? 'bg-white/20 text-white'
                      : 'bg-white/5 text-rez-gray-600 dark:text-gray-400'
                  }`}
                >
                  <span>{cuisine.icon}</span>
                  <span>{cuisine.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recently Visited */}
          {recentlyVisited.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between px-4 mb-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <h2 className="font-semibold text-rez-navy dark:text-white">Order Again</h2>
                </div>
              </div>
              <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar">
                {recentlyVisited.map((visit) => (
                  <Link
                    key={visit.id}
                    to={`/food/restaurant/${visit.restaurantId}`}
                    className="min-w-[140px] p-3 rounded-xl bg-white dark:bg-[#2C2C2E] shrink-0"
                  >
                    <img
                      src={visit.image}
                      alt={visit.name}
                      className="w-full h-20 rounded-lg object-cover mb-2"
                    />
                    <p className="font-medium text-rez-navy dark:text-white text-sm truncate">{visit.name}</p>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">{visit.lastVisit}</p>
                    <p className="text-xs text-emerald-400 mt-1">
                      Saved ₹{visit.totalSaved} total
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 60-Min Delivery */}
          {fastDelivery.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between px-4 mb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <h2 className="font-semibold text-rez-navy dark:text-white">60-Min Delivery</h2>
                </div>
                <button className="text-xs text-emerald-400 flex items-center gap-1">
                  View All <ChevronRight className="w-3 h-3" />
                </button>
              </div>
              <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
                {fastDelivery.slice(0, 5).map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} variant="compact" />
                ))}
              </div>
            </div>
          )}

          {/* Featured */}
          <div className="mt-6">
            <div className="flex items-center justify-between px-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🔥</span>
                <h2 className="font-semibold text-rez-navy dark:text-white">Top Rated Near You</h2>
              </div>
              <button className="text-xs text-emerald-400 flex items-center gap-1">
                View All <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="px-4 space-y-4">
              {featuredRestaurants.slice(0, 4).map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </div>

          {/* All Restaurants */}
          <div className="mt-6">
            <div className="flex items-center justify-between px-4 mb-3">
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
                <h2 className="font-semibold text-rez-navy dark:text-white">All Restaurants</h2>
              </div>
              <span className="text-xs text-rez-gray-600 dark:text-gray-500">{deliveryRestaurants.length} places</span>
            </div>
            <div className="px-4 space-y-4">
              {deliveryRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Dine-In Tab */}
      {activeTab === 'dineIn' && (
        <>
          {/* Category Grid */}
          <FoodCategoryGrid onCategorySelect={(cat) => console.log('Selected:', cat)} />
          {/* Cuisine Filters */}
          <div className="px-4 mt-4">
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
              {cuisineFilters.map((cuisine) => (
                <button
                  key={cuisine.id}
                  onClick={() => setActiveCuisine(cuisine.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm ${
                    activeCuisine === cuisine.id
                      ? 'bg-white/20 text-white'
                      : 'bg-white/5 text-rez-gray-600 dark:text-gray-400'
                  }`}
                >
                  <span>{cuisine.icon}</span>
                  <span>{cuisine.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Book a Table Banner */}
          <div className="mx-4 mt-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20">
            <h3 className="font-semibold text-rez-navy dark:text-white mb-1">Book a Table</h3>
            <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-3">
              Reserve now, pay at restaurant & earn cashback
            </p>
            <div className="flex items-center gap-2 text-amber-400 text-sm">
              <Coins className="w-4 h-4" />
              <span>Bonus coins on check-in!</span>
            </div>
          </div>

          {/* Dine-In Restaurants */}
          <div className="mt-6">
            <div className="flex items-center justify-between px-4 mb-3">
              <h2 className="font-semibold text-rez-navy dark:text-white">Dine-In Nearby</h2>
              <span className="text-xs text-rez-gray-600 dark:text-gray-500">{dineInRestaurants.length} places</span>
            </div>
            <div className="px-4 space-y-4">
              {dineInRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Offers Tab */}
      {activeTab === 'offers' && (
        <>
          {/* Nearby Offers */}
          <div className="mt-4">
            <div className="flex items-center justify-between px-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏷️</span>
                <h2 className="font-semibold text-rez-navy dark:text-white">Today's Deals</h2>
              </div>
              <button className="text-xs text-emerald-400 flex items-center gap-1">
                View All <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
              {foodOffers.map((offer) => (
                <FoodOfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>

          {/* BOGO Deals */}
          <div className="mt-6">
            <div className="flex items-center justify-between px-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎁</span>
                <h2 className="font-semibold text-rez-navy dark:text-white">Buy 1 Get 1</h2>
              </div>
            </div>
            <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
              {foodOffers.filter((o) => o.type === 'bogo').map((offer) => (
                <FoodOfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>

          {/* Happy Hour */}
          <div className="mt-6">
            <div className="flex items-center justify-between px-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">⏰</span>
                <h2 className="font-semibold text-rez-navy dark:text-white">Happy Hour Deals</h2>
              </div>
            </div>
            <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
              {foodOffers.filter((o) => o.type === 'happy_hour').map((offer) => (
                <FoodOfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>

          {/* Student Specials */}
          <div className="mt-6">
            <div className="flex items-center justify-between px-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎓</span>
                <h2 className="font-semibold text-rez-navy dark:text-white">Student Specials</h2>
              </div>
            </div>
            <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
              {foodOffers.filter((o) => o.type === 'student').map((offer) => (
                <FoodOfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Experiences Tab */}
      {activeTab === 'experiences' && (
        <>
          {/* Banner */}
          <div className="mx-4 mt-4 p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/20">
            <h3 className="font-semibold text-rez-navy dark:text-white mb-1">Not just food. Experiences.</h3>
            <p className="text-sm text-rez-gray-700 dark:text-gray-300">Worth remembering.</p>
          </div>

          {/* All Experiences */}
          <div className="mt-6">
            <div className="flex items-center justify-between px-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">✨</span>
                <h2 className="font-semibold text-rez-navy dark:text-white">Curated Experiences</h2>
              </div>
            </div>
            <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
              {foodExperiences.map((exp) => (
                <FoodExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>

          {/* Chef's Table */}
          <div className="mt-6">
            <div className="flex items-center justify-between px-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">👨‍🍳</span>
                <h2 className="font-semibold text-rez-navy dark:text-white">Chef's Table</h2>
              </div>
            </div>
            <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
              {foodExperiences.filter((e) => e.tags.includes('Premium')).map((exp) => (
                <FoodExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>

          {/* Couple Friendly */}
          <div className="mt-6">
            <div className="flex items-center justify-between px-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">💑</span>
                <h2 className="font-semibold text-rez-navy dark:text-white">Romantic Dinners</h2>
              </div>
            </div>
            <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
              {foodExperiences.filter((e) => e.tags.includes('Romantic') || e.tags.includes('Couple Friendly')).map((exp) => (
                <FoodExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Value Proposition */}
      <div className="mx-4 mt-8 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-3 text-center">
          Eat out or order in — ReZ makes every meal rewarding.
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">💰</span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">Cashback on every order</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🪙</span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">Earn coins to reuse</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">📱</span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">Pay at restaurant</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🎁</span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">Loyalty rewards</span>
          </div>
        </div>
      </div>

      {/* Savings Summary */}
      <div className="mx-4 mt-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">Total saved on food this month</p>
            <p className="text-2xl font-bold text-emerald-400">₹1,245</p>
          </div>
          <Button variant="secondary" size="sm">View Details</Button>
        </div>
      </div>

      {/* AI Suggestions */}
      <AISuggestions
        category="food"
        suggestions={[
          { id: 1, title: 'Best for you', icon: '✨', link: '/food?filter=recommended' },
          { id: 2, title: 'Under ₹300', icon: '💰', link: '/food?filter=budget' },
          { id: 3, title: 'Quick bites', icon: '⚡', link: '/food?filter=quick' },
          { id: 4, title: 'Healthy picks', icon: '🥗', link: '/food?filter=healthy' },
        ]}
        chips={[
          { id: 'cuisine', label: 'Cuisine', icon: '🍽️' },
          { id: 'diet', label: 'Diet', icon: '🥬' },
          { id: 'price', label: 'Price', icon: '💰' },
          { id: 'rating', label: 'Rating', icon: '⭐' },
          { id: 'time', label: 'Delivery Time', icon: '⏱️' },
        ]}
      />

      {/* UGC Social Proof */}
      <UGCSocialProof category="food" />

      {/* Streaks & Loyalty */}
      <StreakLoyaltySection
        category="food"
        streakData={{
          currentStreak: 4,
          targetStreak: 7,
          reward: 150,
          type: 'daily'
        }}
        brandLoyalty={[
          { name: 'Dominos', icon: '🍕', visits: 3, targetVisits: 5, reward: 100 },
          { name: 'Starbucks', icon: '☕', visits: 7, targetVisits: 10, reward: 200 },
          { name: 'Subway', icon: '🥪', visits: 2, targetVisits: 5, reward: 75 },
        ]}
        weeklyMission={{
          completed: 3,
          target: 5,
          reward: 200,
          description: 'Order from 5 different restaurants'
        }}
      />

      {/* Footer Trust */}
      <FooterTrust
        coinsEarnable={350}
        expiringCoins={75}
        expiryDays={5}
      />

      {/* Bottom spacer */}
      <div className="h-8" />

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default FoodDining;
