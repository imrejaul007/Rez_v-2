import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  MapPin,
  Coins,
  Zap,
  Upload,
  ChevronRight,
  ShoppingCart,
  ArrowRight,
  Users,
  SlidersHorizontal,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import BottomNavManager from '../components/layout/BottomNavManager';
import {
  groceryCategories,
  groceryTabs,
  groceryModes,
  groceryStores,
  groceryProducts,
  groceryOffers,
  grocerySuggestions,
  groceryLoyaltyMilestones,
  groceryStreak,
} from '../data/groceryData';
import GroceryCategoryGrid from '../components/grocery/GroceryCategoryGrid';
import GroceryStoreCard from '../components/grocery/GroceryStoreCard';
import GroceryProductCard from '../components/grocery/GroceryProductCard';
import GroceryOfferCard from '../components/grocery/GroceryOfferCard';
import GrocerySuggestionCard from '../components/grocery/GrocerySuggestionCard';
import GroceryStreakCard from '../components/grocery/GroceryStreakCard';
import Button from '../components/common/Button';
import QuickActionBar from '../components/common/QuickActionBar';
import StreakLoyaltySection from '../components/common/StreakLoyaltySection';
import AISuggestions from '../components/common/AISuggestions';
import UGCSocialProof from '../components/common/UGCSocialProof';
import FooterTrust from '../components/common/FooterTrust';

const Grocery = () => {
  const navigate = useNavigate();
  const { rezCoins } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('nearby');
  const [activeModes, setActiveModes] = useState([]);
  const [offerTab, setOfferTab] = useState('today');

  const toggleMode = (modeId) => {
    if (activeModes.includes(modeId)) {
      setActiveModes(activeModes.filter((m) => m !== modeId));
    } else {
      setActiveModes([...activeModes, modeId]);
    }
  };

  const handleCartClick = () => {
    // Navigate to cart page
    navigate('/cart');
  };

  // Filter stores by tab
  const filteredStores = groceryStores.filter((store) => {
    if (activeTab === 'nearby') return store.type === 'nearby';
    if (activeTab === 'online') return store.type === 'online';
    if (activeTab === 'wholesale') return store.type === 'wholesale';
    if (activeTab === 'organic') return store.type === 'organic';
    return true;
  });

  // Get 60-min delivery stores
  const fastDeliveryStores = groceryStores.filter((s) => s.is60Min);

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-sm text-rez-navy dark:text-white font-medium">Deliver to Home</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">123 Main Street, City</p>
              </div>
              <ChevronRight className="w-4 h-4 text-rez-gray-600 dark:text-gray-500" />
            </div>
            <div className="flex items-center gap-2">
              <Link to="/wallet" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
                <Coins className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-400">{rezCoins}</span>
              </Link>
              <button
                onClick={handleCartClick}
                className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 relative"
              >
                <ShoppingCart className="w-5 h-5 text-rez-navy dark:text-white" />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-600 dark:text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search groceries, brands, stores..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {groceryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full shrink-0 text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Value Strip */}
      <div className="px-4 py-3">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/20">
          <p className="text-sm font-medium text-rez-navy dark:text-white mb-2">
            💸 Save on daily essentials. Earn ReZ Coins on every purchase.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="text-xs text-rez-gray-700 dark:text-gray-300">✔ Earn up to 10–20% cashback</span>
            <span className="text-xs text-rez-gray-700 dark:text-gray-300">✔ Use coins at kirana stores</span>
            <span className="text-xs text-rez-gray-700 dark:text-gray-300">✔ Upload bill → get rewards</span>
          </div>
        </div>
      </div>

      {/* Mode Filters */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {groceryModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => toggleMode(mode.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm transition-colors ${
                activeModes.includes(mode.id)
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              <span>{mode.icon}</span>
              <span>{mode.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Action Bar */}
      <QuickActionBar category="grocery" />

      {/* Categories */}
      <div className="mb-6">
        <GroceryCategoryGrid categories={groceryCategories} />
      </div>

      {/* Nearby Stores */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">
            {activeTab === 'nearby' ? 'Nearby Grocery Stores' :
             activeTab === 'online' ? 'Online Delivery' :
             activeTab === 'wholesale' ? 'Wholesale / Bulk' : 'Organic Stores'}
          </h2>
          <Link to="/grocery/stores" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="space-y-4">
          {filteredStores.slice(0, 3).map((store) => (
            <GroceryStoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>

      {/* 60-min Delivery */}
      {fastDeliveryStores.length > 0 && (
        <div className="px-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <h2 className="font-semibold text-rez-navy dark:text-white">60-Min Delivery</h2>
            </div>
            <Link to="/grocery/fast" className="text-sm text-emerald-400">See All</Link>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {fastDeliveryStores.map((store) => (
              <GroceryStoreCard key={store.id} store={store} variant="compact" />
            ))}
          </div>
        </div>
      )}

      {/* Deals Zone */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Deals & Savings</h2>
          <Link to="/grocery/deals" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="flex gap-2 mb-3">
          {['today', 'cashback', 'bulk', 'ai'].map((tab) => (
            <button
              key={tab}
              onClick={() => setOfferTab(tab)}
              className={`px-3 py-1.5 rounded-full text-xs capitalize ${
                offerTab === tab
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              {tab === 'ai' ? 'AI Picks' : tab === 'cashback' ? 'Super Cashback' : tab}
            </button>
          ))}
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {groceryOffers.map((offer) => (
            <GroceryOfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>

      {/* Smart Suggestions */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🤖</span>
          <h2 className="font-semibold text-rez-navy dark:text-white">Smart Suggestions</h2>
        </div>
        <div className="space-y-3">
          {grocerySuggestions.map((suggestion) => (
            <GrocerySuggestionCard key={suggestion.id} suggestion={suggestion} />
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Popular Products</h2>
          <Link to="/grocery/products" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {groceryProducts.map((product) => (
            <GroceryProductCard key={product.id} product={product} variant="compact" />
          ))}
        </div>
      </div>

      {/* Streak & Loyalty */}
      <div className="px-4 mb-6">
        <GroceryStreakCard streak={groceryStreak} milestones={groceryLoyaltyMilestones} />
      </div>

      {/* Bill Upload */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/30 flex items-center justify-center">
              <Upload className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-rez-navy dark:text-white">Didn't pay via ReZ?</h3>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400">Upload grocery bill → Get rewards</p>
            </div>
          </div>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-3">
            ReZ works even when you don't. Upload any grocery bill to earn coins.
          </p>
          <Button variant="primary" fullWidth>
            <Upload className="w-4 h-4 mr-2" />
            Upload Bill
          </Button>
        </div>
      </div>

      {/* Social Proof */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">👩</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">👨</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">👩</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-rez-navy dark:text-white">2,143 people saved on groceries this week</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">₹89,500 earned in ReZ Coins</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/grocery/stores"
            className="p-4 rounded-xl bg-white dark:bg-[#2C2C2E] flex items-center gap-2"
          >
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span className="text-sm text-rez-navy dark:text-white">View All Stores</span>
          </Link>
          <Link
            to="/grocery/compare"
            className="p-4 rounded-xl bg-white dark:bg-[#2C2C2E] flex items-center gap-2"
          >
            <SlidersHorizontal className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-rez-navy dark:text-white">Compare Prices</span>
          </Link>
        </div>
        <Link
          to="/wallet"
          className="mt-3 p-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/20 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <Coins className="w-6 h-6 text-amber-400" />
            <div>
              <p className="text-sm text-rez-navy dark:text-white">You have <span className="font-bold text-amber-400">{rezCoins}</span> coins</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Use at any grocery store</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-amber-400" />
        </Link>
      </div>

      {/* AI Suggestions */}
      <AISuggestions
        category="grocery"
        suggestions={[
          { id: 1, title: 'Repeat orders', icon: '🔄', link: '/grocery?filter=repeat' },
          { id: 2, title: 'Under ₹100', icon: '💰', link: '/grocery?filter=budget' },
          { id: 3, title: '60-min delivery', icon: '⚡', link: '/grocery?filter=fast' },
          { id: 4, title: 'Weekly essentials', icon: '📦', link: '/grocery?filter=essentials' },
        ]}
        chips={[
          { id: 'fresh', label: 'Fresh', icon: '🥬' },
          { id: 'organic', label: 'Organic', icon: '🌿' },
          { id: 'dairy', label: 'Dairy', icon: '🥛' },
          { id: 'snacks', label: 'Snacks', icon: '🍪' },
          { id: 'deals', label: 'Deals', icon: '🏷️' },
        ]}
      />

      {/* UGC Social Proof */}
      <UGCSocialProof category="grocery" />

      {/* Additional Streaks & Loyalty */}
      <StreakLoyaltySection
        category="grocery"
        streakData={{
          currentStreak: 5,
          targetStreak: 7,
          reward: 100,
          type: 'daily'
        }}
        brandLoyalty={[
          { name: 'BigBasket', icon: '🛒', visits: 4, targetVisits: 5, reward: 75 },
          { name: 'DMart', icon: '🏬', visits: 2, targetVisits: 5, reward: 100 },
          { name: 'Nature\'s Basket', icon: '🌿', visits: 1, targetVisits: 3, reward: 50 },
        ]}
        weeklyMission={{
          completed: 4,
          target: 5,
          reward: 125,
          description: 'Shop groceries 5 days this week'
        }}
      />

      {/* Footer Trust */}
      <FooterTrust
        coinsEarnable={200}
        expiringCoins={40}
        expiryDays={3}
      />

      {/* Bottom spacer */}
      <div className="h-8" />

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default Grocery;
