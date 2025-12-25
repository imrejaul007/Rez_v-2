import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  ChevronRight,
  Coins,
  Zap,
  Store,
  MapPin,
  Gift,
  TrendingUp,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import BottomNavManager from '../components/layout/BottomNavManager';
import {
  electronicsFilters,
  electronicsProducts,
  electronicsBrands,
  electronicsStores,
  socialProof,
  loyaltyProgress,
} from '../data/electronicsData';
import ElectronicsCategoryGrid from '../components/electronics/ElectronicsCategoryGrid';
import ElectronicsProductCard from '../components/electronics/ElectronicsProductCard';
import ElectronicsBrandCard from '../components/electronics/ElectronicsBrandCard';
import ElectronicsStoreCard from '../components/electronics/ElectronicsStoreCard';
import CompareSection from '../components/electronics/CompareSection';
import BankOffersSection from '../components/electronics/BankOffersSection';
import Button from '../components/common/Button';
import QuickActionBar from '../components/common/QuickActionBar';
import DealModeSwitcher from '../components/common/DealModeSwitcher';
import StreakLoyaltySection from '../components/common/StreakLoyaltySection';
import AISuggestions from '../components/common/AISuggestions';
import UGCSocialProof from '../components/common/UGCSocialProof';
import FooterTrust from '../components/common/FooterTrust';

const Electronics = () => {
  const navigate = useNavigate();
  const { rezCoins } = useWallet();
  const [activeFilters, setActiveFilters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [proofIndex, setProofIndex] = useState(0);

  // Rotate social proof
  useEffect(() => {
    const timer = setInterval(() => {
      setProofIndex((prev) => (prev + 1) % socialProof.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleFilter = (filterId) => {
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter((f) => f !== filterId));
    } else {
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  const handleSearchClick = () => {
    navigate('/search?category=electronics');
  };

  // Filter products
  const filteredProducts = electronicsProducts.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (activeFilters.includes('60min') && !product.is60Min) return false;
    if (activeFilters.includes('pickup') && !product.hasPickup) return false;
    return true;
  });

  const fastDeliveryProducts = electronicsProducts.filter((p) => p.is60Min);
  const topDeals = electronicsProducts.filter((p) => p.tag);

  const proof = socialProof[proofIndex];

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
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Electronics</h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Compare · Buy · Earn Rewards</p>
            </div>
            <button
              onClick={handleSearchClick}
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10"
            >
              <Search className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
              <Coins className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">{rezCoins}</span>
            </div>
          </div>

          {/* Smart Context Strip */}
          <div className="mt-3 px-3 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <p className="text-xs text-emerald-400 text-center">
              💡 Save up to ₹8,400 on electronics nearby • Earn ReZ Coins on every purchase
            </p>
          </div>
        </div>

        {/* Filter Strip */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {electronicsFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm transition-colors ${
                  activeFilters.includes(filter.id)
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-rez-gray-50 dark:bg-white/5 animate-fade-in">
          <span className="text-lg">{proof.avatar}</span>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 flex-1">
            <span className="font-medium text-rez-navy dark:text-white">{proof.user}</span>{' '}
            {proof.action}{' '}
            <span className="text-blue-400">{proof.product}</span>
          </p>
          <span className="text-xs text-amber-400">+{proof.coins} coins</span>
        </div>
      </div>

      {/* Quick Action Bar */}
      <QuickActionBar category="electronics" />

      {/* Category Grid */}
      <div className="mt-4">
        <ElectronicsCategoryGrid onCategorySelect={setSelectedCategory} />
      </div>

      {/* Why Buy on ReZ */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-3">Why Buy Electronics on ReZ?</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">🔍</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Compare Anywhere</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Local + online prices</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">🪙</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Earn on Every Buy</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">ReZ + Branded Coins</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">🏬</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Online + Offline</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Pay in-store via QR</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">💳</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Smart Payments</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">EMI, BNPL, Bank offers</p>
          </div>
        </div>
      </div>

      {/* Compare Section */}
      <div className="mt-6">
        <CompareSection />
      </div>

      {/* Featured Deals */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔥</span>
            <h2 className="font-semibold text-rez-navy dark:text-white">Today's Deals</h2>
          </div>
          <button className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {topDeals.map((product) => (
            <div key={product.id} className="min-w-[220px] shrink-0">
              <ElectronicsProductCard product={product} variant="compact" />
            </div>
          ))}
        </div>
      </div>

      {/* 60-Min Delivery */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Need It Fast?</h2>
          </div>
          <button className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {fastDeliveryProducts.map((product) => (
            <div key={product.id} className="min-w-[220px] shrink-0">
              <ElectronicsProductCard product={product} variant="compact" />
            </div>
          ))}
        </div>
      </div>

      {/* Bank & EMI Section */}
      <div className="mt-6">
        <BankOffersSection />
      </div>

      {/* Brand Stores */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🏷️</span>
            <h2 className="font-semibold text-rez-navy dark:text-white">Brand Stores</h2>
          </div>
          <button className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {electronicsBrands.map((brand) => (
            <ElectronicsBrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>

      {/* Nearby Stores */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Stores Near You</h2>
          </div>
          <button className="text-xs text-rez-gray-600 dark:text-gray-400 flex items-center gap-1">
            Map View <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="px-4 space-y-3">
          {electronicsStores.slice(0, 3).map((store) => (
            <ElectronicsStoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>

      {/* Loyalty Progress */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-3">
          <Gift className="w-6 h-6 text-purple-400" />
          <div>
            <h3 className="font-semibold text-rez-navy dark:text-white">Earn More Every Time</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">
              {loyaltyProgress.targetPurchases - loyaltyProgress.currentPurchases} more purchases to unlock reward
            </p>
          </div>
        </div>
        <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-purple-500 rounded-full transition-all"
            style={{
              width: `${(loyaltyProgress.currentPurchases / loyaltyProgress.targetPurchases) * 100}%`,
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-rez-gray-600 dark:text-gray-400">
            {loyaltyProgress.currentPurchases}/{loyaltyProgress.targetPurchases} purchases
          </span>
          <span className="text-xs text-amber-400">
            🎁 +{loyaltyProgress.nextReward} ReZ Coins
          </span>
        </div>
      </div>

      {/* All Products */}
      {selectedCategory && (
        <div className="mt-6">
          <div className="flex items-center justify-between px-4 mb-3">
            <h2 className="font-semibold text-rez-navy dark:text-white">
              {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </h2>
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-xs text-rez-gray-600 dark:text-gray-400"
            >
              Clear filter
            </button>
          </div>
          <div className="px-4 space-y-4">
            {filteredProducts.map((product) => (
              <ElectronicsProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* Value Proposition */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] text-center">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-2">
          Your electronics. Smarter savings.
        </h3>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">
          Same product. Better price. With ReZ rewards.
        </p>
      </div>

      {/* AI Suggestions */}
      <AISuggestions
        category="electronics"
        suggestions={[
          { id: 1, title: 'Best for you', icon: '✨', link: '/electronics?filter=recommended' },
          { id: 2, title: 'Under ₹10K', icon: '💰', link: '/electronics?filter=budget' },
          { id: 3, title: '60-min delivery', icon: '⚡', link: '/electronics?filter=60min' },
          { id: 4, title: 'Top rated', icon: '⭐', link: '/electronics?filter=toprated' },
        ]}
        chips={[
          { id: 'brand', label: 'Brand', icon: '🏷️' },
          { id: 'price', label: 'Price', icon: '💰' },
          { id: 'specs', label: 'Specs', icon: '⚙️' },
          { id: 'warranty', label: 'Warranty', icon: '🛡️' },
          { id: 'delivery', label: 'Delivery', icon: '🚚' },
        ]}
      />

      {/* UGC Social Proof */}
      <UGCSocialProof category="electronics" />

      {/* Streaks & Loyalty */}
      <StreakLoyaltySection
        category="electronics"
        streakData={{
          currentStreak: 2,
          targetStreak: 5,
          reward: 200,
          type: 'weekly'
        }}
        brandLoyalty={[
          { name: 'Apple', icon: '🍎', visits: 2, targetVisits: 3, reward: 300 },
          { name: 'Samsung', icon: '📱', visits: 1, targetVisits: 3, reward: 250 },
          { name: 'Croma', icon: '🏪', visits: 4, targetVisits: 5, reward: 150 },
        ]}
        weeklyMission={{
          completed: 1,
          target: 3,
          reward: 300,
          description: 'Compare 3 products this week'
        }}
      />

      {/* Footer Trust */}
      <FooterTrust
        coinsEarnable={500}
        expiringCoins={100}
        expiryDays={7}
      />

      {/* Sticky CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-4 z-50">
        <div className="p-3 rounded-2xl bg-emerald-600 shadow-xl flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-rez-navy dark:text-white">
              🪙 You can save ₹3,200 today
            </p>
            <p className="text-xs text-emerald-200">on Electronics</p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">Compare</Button>
            <Button variant="primary" size="sm" className="bg-white text-emerald-600">
              View Deals
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-20" />

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default Electronics;
