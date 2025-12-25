import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Coins,
  ChevronRight,
  Zap,
  ArrowRight,
  Calendar,
  Star,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import BottomNavManager from '../components/layout/BottomNavManager';
import {
  homeServiceCategories,
  homeServiceFilters,
  homeServiceProviders,
  homeServiceSubscriptions,
  homeServiceTrust,
  homeServiceRecentBookings,
  homeServicePopular,
} from '../data/homeServicesData';
import HomeServiceCategoryGrid from '../components/homeServices/HomeServiceCategoryGrid';
import HomeServiceProviderCard from '../components/homeServices/HomeServiceProviderCard';
import HomeServiceSubscriptionCard from '../components/homeServices/HomeServiceSubscriptionCard';
import HomeServiceTrustCard from '../components/homeServices/HomeServiceTrustCard';
import HomeServicePopularCard from '../components/homeServices/HomeServicePopularCard';
import HomeServiceBookingCard from '../components/homeServices/HomeServiceBookingCard';
import QuickActionBar from '../components/common/QuickActionBar';
import StreakLoyaltySection from '../components/common/StreakLoyaltySection';
import AISuggestions from '../components/common/AISuggestions';
import UGCSocialProof from '../components/common/UGCSocialProof';
import FooterTrust from '../components/common/FooterTrust';

const HomeServices = () => {
  const { rezCoins } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState(['near-me']);

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
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Home Services</h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Trusted help. Smart savings.</p>
            </div>
            <Link to="/wallet" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
              <Coins className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">{rezCoins}</span>
            </Link>
          </div>

          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-600 dark:text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services, providers..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
            {homeServiceFilters.map((filter) => (
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

      {/* Quick Action Bar */}
      <QuickActionBar category="home-services" />

      {/* Categories */}
      <div className="my-4">
        <div className="px-4 mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Services</h2>
        </div>
        <HomeServiceCategoryGrid categories={homeServiceCategories} />
      </div>

      {/* Popular Services */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Most Booked</h2>
          </div>
          <Link to="/home-services/popular" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {homeServicePopular.map((service) => (
            <HomeServicePopularCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Service Providers */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-semibold text-rez-navy dark:text-white">Top Providers</h2>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Verified & trusted</p>
          </div>
          <Link to="/home-services/providers" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="space-y-4">
          {homeServiceProviders.slice(0, 3).map((provider) => (
            <HomeServiceProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <div className="px-4 mb-6">
        <HomeServiceTrustCard trustItems={homeServiceTrust} />
      </div>

      {/* Subscriptions */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-semibold text-rez-navy dark:text-white">Repeat & Subscribe</h2>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Extra coins & locked prices</p>
          </div>
        </div>
        <div className="space-y-4">
          {homeServiceSubscriptions.map((sub) => (
            <HomeServiceSubscriptionCard key={sub.id} subscription={sub} />
          ))}
        </div>
      </div>

      {/* Recent Bookings */}
      {homeServiceRecentBookings.length > 0 && (
        <div className="px-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              <h2 className="font-semibold text-rez-navy dark:text-white">Recent Bookings</h2>
            </div>
            <Link to="/home-services/bookings" className="text-sm text-emerald-400">See All</Link>
          </div>
          <div className="space-y-3">
            {homeServiceRecentBookings.map((booking) => (
              <HomeServiceBookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        </div>
      )}

      {/* Social Proof */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">🧹</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-cyan-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">🔧</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-amber-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">💡</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-rez-navy dark:text-white">4,230 services completed this week</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">₹89,500 earned in ReZ Coins</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/home-services/providers"
            className="p-4 rounded-xl bg-white dark:bg-[#2C2C2E] flex items-center gap-2"
          >
            <Star className="w-5 h-5 text-amber-400" />
            <span className="text-sm text-rez-navy dark:text-white">Top Rated</span>
          </Link>
          <Link
            to="/home-services/available-today"
            className="p-4 rounded-xl bg-white dark:bg-[#2C2C2E] flex items-center gap-2"
          >
            <Zap className="w-5 h-5 text-emerald-400" />
            <span className="text-sm text-rez-navy dark:text-white">Available Today</span>
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
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Use on any home service</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-amber-400" />
        </Link>
      </div>

      {/* AI Suggestions */}
      <AISuggestions
        category="home-services"
        suggestions={[
          { id: 1, title: 'Available now', icon: '⚡', link: '/home-services?filter=available' },
          { id: 2, title: 'Top rated', icon: '⭐', link: '/home-services?filter=toprated' },
          { id: 3, title: 'Subscriptions', icon: '🔄', link: '/home-services?filter=subscribe' },
          { id: 4, title: 'Verified', icon: '✅', link: '/home-services?filter=verified' },
        ]}
        chips={[
          { id: 'cleaning', label: 'Cleaning', icon: '🧹' },
          { id: 'repair', label: 'Repair', icon: '🔧' },
          { id: 'beauty', label: 'Beauty', icon: '💅' },
          { id: 'pest', label: 'Pest Control', icon: '🐜' },
          { id: 'appliance', label: 'Appliance', icon: '🔌' },
        ]}
      />

      {/* UGC Social Proof */}
      <UGCSocialProof category="home-services" />

      {/* Streaks & Loyalty */}
      <StreakLoyaltySection
        category="home-services"
        streakData={{
          currentStreak: 2,
          targetStreak: 5,
          reward: 100,
          type: 'weekly'
        }}
        brandLoyalty={[
          { name: 'Urban Company', icon: '🏠', visits: 3, targetVisits: 5, reward: 125 },
          { name: 'NoBroker', icon: '🔧', visits: 1, targetVisits: 3, reward: 75 },
        ]}
        weeklyMission={{
          completed: 1,
          target: 3,
          reward: 150,
          description: 'Book 3 home services this month'
        }}
      />

      {/* Footer Trust */}
      <FooterTrust
        coinsEarnable={250}
        expiringCoins={30}
        expiryDays={5}
      />

      {/* Bottom spacer */}
      <div className="h-8" />

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default HomeServices;
