import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  SlidersHorizontal,
  Coins,
  Zap,
  Store,
  TrendingUp,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Trophy,
  Gift,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import BottomNavManager from '../components/layout/BottomNavManager';
import {
  fashionCategories,
  fashionVibes,
  fashionOccasions,
  fashionFilters,
  fashionProducts,
  fashionStores,
  fashionBrands,
  fashionExclusiveOffers,
  fashionTrends,
  fashionBankOffers,
} from '../data/fashionData';
import FashionCategoryGrid from '../components/fashion/FashionCategoryGrid';
import FashionProductCard from '../components/fashion/FashionProductCard';
import FashionVibeCard from '../components/fashion/FashionVibeCard';
import FashionOccasionCard from '../components/fashion/FashionOccasionCard';
import FashionStoreCard from '../components/fashion/FashionStoreCard';
import FashionBrandCard from '../components/fashion/FashionBrandCard';
import FashionTrendTag from '../components/fashion/FashionTrendTag';
import FashionExclusiveCard from '../components/fashion/FashionExclusiveCard';
import Button from '../components/common/Button';
import QuickActionBar from '../components/common/QuickActionBar';
import DealModeSwitcher from '../components/common/DealModeSwitcher';
import StreakLoyaltySection from '../components/common/StreakLoyaltySection';
import AISuggestions from '../components/common/AISuggestions';
import UGCSocialProof from '../components/common/UGCSocialProof';
import FooterTrust from '../components/common/FooterTrust';

const Fashion = () => {
  const { rezCoins } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get featured products
  const trendingProducts = fashionProducts.filter((p) => p.tag === 'Trending' || p.tag === 'Bestseller').slice(0, 6);
  const deals = fashionProducts.filter((p) => {
    const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
    return discount >= 30;
  }).slice(0, 6);

  const toggleFilter = (filterId) => {
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter((f) => f !== filterId));
    } else {
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-2xl font-bold text-rez-navy dark:text-white">Fashion</h1>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400">Discover your style, earn cashback</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
              <Coins className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">{rezCoins}</span>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-600 dark:text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fashion, brands, styles..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Quick Filters */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {fashionFilters.slice(0, 7).map((filter) => (
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
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Action Bar */}
      <QuickActionBar category="fashion" />

      {/* Loyalty Hub CTA */}
      <div className="px-4 py-4">
        <Link
          to="/loyalty-rewards"
          className="block p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-amber-500/20 border border-purple-500/30"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/30 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-rez-navy dark:text-white">Fashion Loyalty Hub</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Track purchases, unlock style rewards</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-lg bg-rez-gray-100 dark:bg-white/10">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Total Orders</p>
              <p className="text-lg font-bold text-rez-navy dark:text-white">15</p>
            </div>
            <div className="p-2 rounded-lg bg-rez-gray-100 dark:bg-white/10">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Active Brands</p>
              <p className="text-lg font-bold text-purple-400">4</p>
            </div>
            <div className="p-2 rounded-lg bg-rez-gray-100 dark:bg-white/10">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Next Reward</p>
              <p className="text-lg font-bold text-blue-400">
                <Gift className="w-5 h-5 inline" />
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Smart Search Prompt */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-purple-500/30 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-rez-navy dark:text-white">Ask ReZ AI</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">"Find me a wedding outfit under ₹10,000"</p>
            </div>
            <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-500" />
          </div>
        </div>
      </div>

      {/* Trending Hashtags */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-pink-400" />
          <h2 className="font-semibold text-rez-navy dark:text-white">Trending Now</h2>
        </div>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {fashionTrends.map((trend) => (
            <FashionTrendTag key={trend.id} trend={trend} />
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="mb-6">
        <FashionCategoryGrid />
      </div>

      {/* Vibes Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-semibold text-rez-navy dark:text-white">Shop by Vibe</h2>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">What's your mood today?</p>
          </div>
          <Link to="/fashion/vibes" className="text-sm text-emerald-400">
            See All
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {fashionVibes.map((vibe) => (
            <FashionVibeCard key={vibe.id} vibe={vibe} />
          ))}
        </div>
      </div>

      {/* Occasions Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-semibold text-rez-navy dark:text-white">Shop by Occasion</h2>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get ready for your events</p>
          </div>
          <Link to="/fashion/occasions" className="text-sm text-emerald-400">
            See All
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {fashionOccasions.map((occasion) => (
            <FashionOccasionCard key={occasion.id} occasion={occasion} />
          ))}
        </div>
      </div>

      {/* Exclusive Offers */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Exclusive For You</h2>
          <Link to="/exclusive/special-profiles" className="text-sm text-emerald-400">
            See All
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {fashionExclusiveOffers.map((offer) => (
            <FashionExclusiveCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>

      {/* 60-min Try Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/30 flex items-center justify-center">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-rez-navy dark:text-white">60-min Try & Buy</h3>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">Try at home, pay if you love it</p>
              </div>
            </div>
            <Button variant="primary" size="sm">
              Explore
            </Button>
          </div>
        </div>
      </div>

      {/* Top Brands */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Top Brands</h2>
          <Link to="/fashion/brands" className="text-sm text-emerald-400">
            See All
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {fashionBrands.map((brand) => (
            <FashionBrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>

      {/* Trending Products */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Trending Now</h2>
          <Link to="/fashion/trending" className="text-sm text-emerald-400">
            See All
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {trendingProducts.map((product) => (
            <Link key={product.id} to={`/fashion/product/${product.id}`}>
              <FashionProductCard product={product} variant="compact" />
            </Link>
          ))}
        </div>
      </div>

      {/* Compare Section */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/20">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🧠</span>
            <div>
              <h3 className="font-semibold text-rez-navy dark:text-white">Smart Compare</h3>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400">Compare prices across Myntra, Ajio, Amazon</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Paste product URL or search..."
              className="flex-1 px-4 py-2 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white placeholder-gray-500 text-sm focus:outline-none"
            />
            <Button variant="primary" size="sm">
              Compare
            </Button>
          </div>
        </div>
      </div>

      {/* Nearby Stores */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Store className="w-5 h-5 text-blue-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Stores Near You</h2>
          </div>
          <Link to="/fashion/stores" className="text-sm text-emerald-400">
            See All
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {fashionStores.map((store) => (
            <FashionStoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>

      {/* Bank Offers */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Bank Offers</h2>
          <button className="text-sm text-emerald-400">See All</button>
        </div>
        <div className="space-y-2">
          {fashionBankOffers.slice(0, 3).map((offer) => (
            <div
              key={offer.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-[#2C2C2E]"
            >
              <span className="text-2xl">{offer.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-rez-navy dark:text-white">{offer.bank}</p>
                <p className="text-xs text-emerald-400">{offer.offer}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Up to ₹{offer.maxDiscount}</p>
                <p className="text-[10px] text-rez-gray-600 dark:text-gray-500">{offer.cardType}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Deals */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Best Deals</h2>
          <Link to="/fashion/deals" className="text-sm text-emerald-400">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {deals.slice(0, 3).map((product) => (
            <Link key={product.id} to={`/fashion/product/${product.id}`}>
              <FashionProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>

      {/* Wallet Reminder */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Coins className="w-8 h-8 text-amber-400" />
              <div>
                <p className="text-sm text-rez-navy dark:text-white">You have <span className="font-bold text-amber-400">{rezCoins}</span> coins</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Use up to 20% on any purchase</p>
              </div>
            </div>
            <Link to="/wallet" className="flex items-center gap-1 text-sm text-amber-400">
              View <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-pink-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
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
              <p className="text-sm text-rez-navy dark:text-white">2,340 people shopped fashion today</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Earned ₹45,600 in cashback</p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="px-2 py-1 rounded-full bg-pink-500/20 text-xs text-pink-400">#WeddingSeason</span>
            <span className="px-2 py-1 rounded-full bg-blue-500/20 text-xs text-blue-400">#StreetStyle</span>
            <span className="px-2 py-1 rounded-full bg-purple-500/20 text-xs text-purple-400">#EthnicVibes</span>
          </div>
        </div>
      </div>

      {/* UGC Social Proof */}
      <UGCSocialProof category="fashion" />

      {/* Streaks & Loyalty */}
      <StreakLoyaltySection
        category="fashion"
        streakData={{
          currentStreak: 5,
          targetStreak: 7,
          reward: 175,
          type: 'daily'
        }}
        brandLoyalty={[
          { name: 'Zara', icon: '👔', visits: 3, targetVisits: 5, reward: 150 },
          { name: 'H&M', icon: '👕', visits: 4, targetVisits: 5, reward: 100 },
          { name: 'Myntra', icon: '🛍️', visits: 8, targetVisits: 10, reward: 200 },
        ]}
        weeklyMission={{
          completed: 4,
          target: 5,
          reward: 250,
          description: 'Try 5 different styles this week'
        }}
      />

      {/* Footer Trust */}
      <FooterTrust
        coinsEarnable={400}
        expiringCoins={80}
        expiryDays={4}
      />

      {/* Bottom spacer */}
      <div className="h-20" />

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default Fashion;
