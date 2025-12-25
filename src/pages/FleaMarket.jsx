import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Search,
  Filter,
  ChevronRight,
  Map,
  Sparkles,
  ShoppingBag,
  TrendingUp,
} from 'lucide-react';
import {
  fleaFilters,
  fleaMarkets,
  booths,
  fleaProducts,
  fleaDeals,
  liveActivity,
  sellerSpotlight,
  fleaEvents,
  modeBoothCounts,
} from '../data/fleaMarket';
import { useApp } from '../contexts/AppContext';
import BottomNavManager from '../components/layout/BottomNavManager';
import MarketCard from '../components/fleamarket/MarketCard';
import BoothCard from '../components/fleamarket/BoothCard';
import FleaProductTile from '../components/fleamarket/FleaProductTile';
import LiveActivityFeed from '../components/fleamarket/LiveActivityFeed';
import SellerSpotlight from '../components/fleamarket/SellerSpotlight';
import FleaDealsSection from '../components/fleamarket/FleaDealsSection';
import FleaEventCard from '../components/fleamarket/FleaEventCard';
import FleaRewardsExplainer from '../components/fleamarket/FleaRewardsExplainer';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

const FleaMarket = () => {
  const { filters } = useApp();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [dateFilter, setDateFilter] = useState('today');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMap, setShowMap] = useState(false);

  const toggleFilter = (filterId) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId]
    );
  };

  // Get active mode for display
  const activeMode = Object.entries(filters).find(([_, v]) => v)?.[0];
  const activeModeCount = activeMode ? modeBoothCounts[activeMode] : null;

  // Featured markets (live or today)
  const featuredMarkets = fleaMarkets.filter((m) => m.featured);
  const upcomingMarkets = fleaMarkets.filter((m) => !m.isLive);

  // Featured booths
  const featuredBooths = booths.filter((b) => b.featured);

  // Live market (if any)
  const liveMarket = fleaMarkets.find((m) => m.isLive);

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
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏷️</span>
                <h1 className="text-xl font-bold text-rez-navy dark:text-white">Flea Market</h1>
              </div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Unique finds · Crazy deals · Limited time</p>
            </div>
            <button
              onClick={() => setShowMap(!showMap)}
              className={`p-2 rounded-full ${showMap ? 'bg-emerald-500' : 'bg-white/10'}`}
            >
              <Map className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
          </div>

          {/* Location + Date */}
          <div className="flex items-center gap-3 mt-3">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rez-gray-100 dark:bg-white/10">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-sm text-rez-navy dark:text-white">Indiranagar</span>
              <ChevronRight className="w-3.5 h-3.5 text-rez-gray-600 dark:text-gray-500" />
            </button>
            <div className="flex gap-2">
              {['today', 'weekend', 'custom'].map((d) => (
                <button
                  key={d}
                  onClick={() => setDateFilter(d)}
                  className={`px-3 py-1.5 rounded-full text-sm capitalize ${
                    dateFilter === d
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                  }`}
                >
                  {d === 'custom' ? (
                    <Calendar className="w-4 h-4" />
                  ) : (
                    d
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mode indicator */}
        {activeMode && (
          <div className="px-4 py-2 bg-emerald-500/10 border-t border-emerald-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm text-emerald-400 capitalize">
                  {activeMode} Mode ON
                </span>
              </div>
              <span className="text-sm text-rez-gray-600 dark:text-gray-400">
                Showing {activeModeCount} stalls
              </span>
            </div>
          </div>
        )}

        {/* Quick Filters */}
        <div className="px-4 py-3 border-t border-rez-gray-200 dark:border-white/5">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {fleaFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm ${
                  selectedFilters.includes(filter.id)
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

      {/* Live Activity Banner */}
      <div className="border-b border-rez-gray-200 dark:border-white/5">
        <LiveActivityFeed activities={liveActivity} compact />
      </div>

      {/* Live Market Highlight */}
      {liveMarket && (
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Happening Now</h2>
          </div>
          <MarketCard market={liveMarket} variant="featured" />
        </div>
      )}

      {/* Featured Markets */}
      <div className="mt-4">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Featured Markets</h2>
          </div>
          <button className="text-sm text-emerald-400">View All</button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {featuredMarkets.map((market) => (
            <MarketCard key={market.id} market={market} variant="featured" />
          ))}
        </div>
      </div>

      {/* ReZ Coins Explainer (Compact) */}
      <div className="px-4 mt-6">
        <FleaRewardsExplainer compact />
      </div>

      {/* Explore by Booths */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-purple-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Explore Booths</h2>
          </div>
          <button className="text-sm text-emerald-400">See All</button>
        </div>
        <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
          {featuredBooths.map((booth) => (
            <BoothCard key={booth.id} booth={booth} variant="featured" />
          ))}
        </div>
      </div>

      {/* Deals & Steals Section */}
      <div className="mt-6">
        <FleaDealsSection deals={fleaDeals} />
      </div>

      {/* Discovery Feed - Products */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Discover Finds</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-lg bg-rez-gray-100 dark:bg-white/10">
              <Filter className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 px-4">
          {fleaProducts.map((product) => (
            <FleaProductTile key={product.id} product={product} />
          ))}
        </div>
        <div className="px-4 mt-4">
          <Button variant="secondary" fullWidth>
            Load More Finds
          </Button>
        </div>
      </div>

      {/* Seller Spotlight */}
      <div className="mt-6 px-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">✨</span>
          <h2 className="font-semibold text-rez-navy dark:text-white">Seller Spotlight</h2>
        </div>
        <SellerSpotlight seller={sellerSpotlight} />
      </div>

      {/* Events & Experiences */}
      {fleaEvents.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between px-4 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎭</span>
              <h2 className="font-semibold text-rez-navy dark:text-white">Events & Experiences</h2>
            </div>
            <button className="text-sm text-emerald-400">View All</button>
          </div>
          <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
            {fleaEvents.map((event) => (
              <FleaEventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}

      {/* Live Activity - Full */}
      <div className="mt-6 px-4">
        <LiveActivityFeed activities={liveActivity} />
      </div>

      {/* Upcoming Markets */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Coming Soon</h2>
          </div>
        </div>
        <div className="px-4 space-y-3">
          {upcomingMarkets.slice(0, 3).map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>
      </div>

      {/* All Booths List */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">All Booths</h2>
          <span className="text-sm text-rez-gray-600 dark:text-gray-400">{booths.length} stalls</span>
        </div>
        <div className="px-4 space-y-2">
          {booths.map((booth) => (
            <BoothCard key={booth.id} booth={booth} variant="compact" />
          ))}
        </div>
      </div>

      {/* How ReZ Coins Work - Full */}
      <div className="mt-6 px-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">💰</span>
          <h2 className="font-semibold text-rez-navy dark:text-white">Earn Coins Here</h2>
        </div>
        <FleaRewardsExplainer />
      </div>

      {/* Safety Tips */}
      <div className="mt-6 mx-4 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-2">Flea Market Tips</h3>
        <ul className="space-y-2 text-sm text-rez-gray-600 dark:text-gray-400">
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">•</span>
            Lock items at 10% to reserve for 2 hours
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">•</span>
            Pay with ReZ Wallet for automatic coin tracking
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">•</span>
            Upload photo proof at stall for extra coins
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400">•</span>
            Partial coin payment accepted at select booths
          </li>
        </ul>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-20 left-0 right-0 p-4 glass">
        <div className="flex gap-3">
          <Button variant="primary" className="flex-1">
            <Search className="w-4 h-4 mr-2" />
            Search Flea Market
          </Button>
          <Button variant="secondary" onClick={() => setShowMap(true)}>
            <Map className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default FleaMarket;
