import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Coins,
  ChevronRight,
  MapPin,
  Calendar,
  ShoppingBag,
  Shield,
  MessageCircle,
  Gift,
  Camera,
  ArrowRight,
  QrCode,
  Trophy,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import {
  beautyServiceCategories,
  beautyProductCategories,
  beautyModes,
  beautyQuickFilters,
  beautyServices,
  beautyProducts,
  beautyClinics,
  beautyOffers,
  beautyExclusiveOffers,
  beautyUGC,
  beautyLoyaltyMilestones,
  nearbyBeautyStores,
} from '../data/beautyData';
import BeautyCategoryGrid from '../components/beauty/BeautyCategoryGrid';
import BeautyServiceCard from '../components/beauty/BeautyServiceCard';
import BeautyProductCard from '../components/beauty/BeautyProductCard';
import BeautyClinicCard from '../components/beauty/BeautyClinicCard';
import BeautyOfferCard from '../components/beauty/BeautyOfferCard';
import BeautyUGCCard from '../components/beauty/BeautyUGCCard';
import BeautyNearbyCard from '../components/beauty/BeautyNearbyCard';
import BeautyLoyaltyCard from '../components/beauty/BeautyLoyaltyCard';
import BeautyExclusiveCard from '../components/beauty/BeautyExclusiveCard';
import Button from '../components/common/Button';
import QuickActionBar from '../components/common/QuickActionBar';
import StreakLoyaltySection from '../components/common/StreakLoyaltySection';
import AISuggestions from '../components/common/AISuggestions';
import UGCSocialProof from '../components/common/UGCSocialProof';
import FooterTrust from '../components/common/FooterTrust';

const Beauty = () => {
  const { rezCoins } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModes, setActiveModes] = useState([]);
  const [activeTab, setActiveTab] = useState('offers');

  const toggleMode = (modeId) => {
    if (activeModes.includes(modeId)) {
      setActiveModes(activeModes.filter((m) => m !== modeId));
    } else {
      setActiveModes([...activeModes, modeId]);
    }
  };

  // Get featured content
  const topDeals = beautyServices.filter((s) => s.tag === 'Bestseller' || s.tag === 'Most Popular').slice(0, 4);
  const featuredProducts = beautyProducts.filter((p) => p.is60Min).slice(0, 6);

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-1">
            <div>
              <h1 className="text-2xl font-bold text-white">Beauty & Wellness</h1>
              <p className="text-sm text-gray-400">Book services. Buy products. Earn ReZ Coins every time.</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
              <Coins className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">{rezCoins}</span>
            </div>
          </div>

          {/* Live Rewards Strip */}
          <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/20">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Coins className="w-5 h-5 text-amber-400 animate-bounce" />
                <span className="text-sm text-white font-medium">
                  Earn up to 20% Cashback + ReZ Coins on every beauty visit
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-1">Works at salons, clinics & stores</p>
          </div>

          {/* Search */}
          <div className="relative mt-3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services, products, clinics..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {beautyQuickFilters.map((filter) => (
              <Link
                key={filter.id}
                to={`/beauty/${filter.id}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 shrink-0"
              >
                <span>{filter.icon}</span>
                <span className="text-sm text-white">{filter.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mode Chips */}
        <div className="px-4 pb-3">
          <p className="text-xs text-gray-500 mb-2">Results adapt to your lifestyle & preferences</p>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {beautyModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => toggleMode(mode.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm transition-colors ${
                  activeModes.includes(mode.id)
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/10 text-gray-400'
                }`}
              >
                <span>{mode.icon}</span>
                <span>{mode.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Action Bar */}
      <QuickActionBar category="beauty" />

      {/* Loyalty Hub CTA */}
      <div className="px-4 py-4">
        <Link
          to="/loyalty-rewards"
          className="block p-4 rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-amber-500/20 border border-pink-500/30"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-pink-500/30 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Beauty Loyalty Hub</h3>
                <p className="text-xs text-gray-400">Track visits, unlock beauty rewards</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-lg bg-white/10">
              <p className="text-xs text-gray-400">Total Visits</p>
              <p className="text-lg font-bold text-white">28</p>
            </div>
            <div className="p-2 rounded-lg bg-white/10">
              <p className="text-xs text-gray-400">Active Salons</p>
              <p className="text-lg font-bold text-pink-400">5</p>
            </div>
            <div className="p-2 rounded-lg bg-white/10">
              <p className="text-xs text-gray-400">Next Reward</p>
              <p className="text-lg font-bold text-purple-400">
                <Gift className="w-5 h-5 inline" />
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Service Categories */}
      <div className="py-4">
        <BeautyCategoryGrid
          categories={beautyServiceCategories}
          title="Services"
          type="services"
        />
      </div>

      {/* Product Categories */}
      <div className="py-4">
        <BeautyCategoryGrid
          categories={beautyProductCategories}
          title="Products"
          type="products"
        />
      </div>

      {/* Near You Section */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <h2 className="font-semibold text-white">Beauty near you right now</h2>
            </div>
            <Link to="/beauty/nearby" className="text-sm text-emerald-400">See All</Link>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {nearbyBeautyStores.map((store) => (
              <BeautyNearbyCard key={store.id} store={store} />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 p-3 rounded-xl bg-white/10">
            <QrCode className="w-5 h-5 text-emerald-400" />
            <span className="text-sm text-white">Scan & Pay at Store</span>
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Today's Top Deals */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-white">Today's Top Beauty Deals</h2>
          <Link to="/beauty/deals" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {beautyOffers.map((offer) => (
            <BeautyOfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>

      {/* Book & Earn Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-pink-400" />
            <h2 className="font-semibold text-white">Book & Earn</h2>
          </div>
          <Link to="/beauty/services" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="space-y-4">
          {topDeals.map((service) => (
            <BeautyServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Buy Products Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-purple-400" />
            <h2 className="font-semibold text-white">Buy Products</h2>
          </div>
          <Link to="/beauty/products" className="text-sm text-emerald-400">See All</Link>
        </div>
        <p className="text-xs text-gray-400 mb-3">Share UGC → Get delivery fee back in ReZ Coins</p>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {featuredProducts.map((product) => (
            <BeautyProductCard key={product.id} product={product} variant="compact" />
          ))}
        </div>
      </div>

      {/* Clinics Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            <h2 className="font-semibold text-white">Verified Clinics</h2>
          </div>
          <Link to="/beauty/clinics" className="text-sm text-emerald-400">See All</Link>
        </div>
        <p className="text-xs text-gray-400 mb-3">Verified clinics • Transparent pricing • Earn rewards</p>
        <div className="space-y-4">
          {beautyClinics.slice(0, 2).map((clinic) => (
            <BeautyClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>
      </div>

      {/* Offers Tabs */}
      <div className="px-4 mb-6">
        <h2 className="font-semibold text-white mb-3">Offers & Rewards</h2>
        <div className="flex gap-2 mb-4">
          {['offers', 'cashback', 'exclusive'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm capitalize ${
                activeTab === tab
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'offers' && (
          <div className="space-y-3">
            {beautyOffers.filter((o) => o.category === 'services').slice(0, 2).map((offer) => (
              <div
                key={offer.id}
                className="p-3 rounded-xl bg-[#2C2C2E] flex items-center gap-3"
              >
                <span className="text-2xl">{offer.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{offer.title}</p>
                  <p className="text-xs text-gray-400">{offer.description}</p>
                </div>
                <span
                  className="px-2 py-1 rounded-lg text-xs font-bold text-white"
                  style={{ backgroundColor: offer.color }}
                >
                  {offer.discount}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'cashback' && (
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/20">
            <div className="flex items-center gap-3 mb-3">
              <Coins className="w-8 h-8 text-amber-400" />
              <div>
                <p className="text-sm font-medium text-white">Super Cashback Salons</p>
                <p className="text-xs text-gray-400">Double Coin Days • Upload Bill → Get Bonus</p>
              </div>
            </div>
            <Button variant="primary" fullWidth>
              View All Cashback Deals
            </Button>
          </div>
        )}

        {activeTab === 'exclusive' && (
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {beautyExclusiveOffers.map((offer) => (
              <BeautyExclusiveCard key={offer.id} offer={offer} />
            ))}
          </div>
        )}
      </div>

      {/* UGC Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-semibold text-white">Real Results, Real People</h2>
            <p className="text-xs text-gray-400">Post your result → Earn extra ReZ Coins</p>
          </div>
          <button className="flex items-center gap-1 text-sm text-emerald-400">
            <Camera className="w-4 h-4" />
            <span>Post</span>
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {beautyUGC.map((ugc) => (
            <BeautyUGCCard key={ugc.id} ugc={ugc} />
          ))}
        </div>
      </div>

      {/* Wallet Teaser */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Coins className="w-8 h-8 text-amber-400" />
              <div>
                <p className="text-sm text-white">
                  You have <span className="font-bold text-amber-400">{rezCoins}</span> coins
                </p>
                <p className="text-xs text-gray-400">Beauty savings this month: ₹1,240</p>
              </div>
            </div>
            <Link to="/wallet" className="flex items-center gap-1 text-sm text-amber-400">
              View <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-3 p-3 rounded-xl bg-white/10">
            <p className="text-xs text-white">
              💡 Use Coins on your next salon visit — save up to 20%
            </p>
          </div>
        </div>
      </div>

      {/* Loyalty Section */}
      <div className="px-4 mb-6">
        <BeautyLoyaltyCard milestones={beautyLoyaltyMilestones} currentVisits={6} />
      </div>

      {/* Footer CTAs */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/beauty/all"
            className="p-4 rounded-xl bg-[#2C2C2E] flex items-center gap-2"
          >
            <Search className="w-5 h-5 text-emerald-400" />
            <span className="text-sm text-white">Explore All</span>
          </Link>
          <Link
            to="/beauty/concierge"
            className="p-4 rounded-xl bg-[#2C2C2E] flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-white">Talk to Concierge</span>
          </Link>
        </div>
        <Link
          to="/beauty/gift"
          className="mt-3 p-4 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/20 flex items-center justify-center gap-2"
        >
          <Gift className="w-5 h-5 text-pink-400" />
          <span className="text-sm text-white font-medium">Gift a Beauty Experience</span>
        </Link>
      </div>

      {/* Social Proof */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-[#2C2C2E]">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-pink-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">👩</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">👩</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">👨</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-white">1,890 beauty bookings today</p>
              <p className="text-xs text-gray-400">₹32,400 earned in cashback</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Suggestions */}
      <AISuggestions
        category="beauty"
        suggestions={[
          { id: 1, title: 'Best for you', icon: '✨', link: '/beauty?filter=recommended' },
          { id: 2, title: 'Under ₹500', icon: '💰', link: '/beauty?filter=budget' },
          { id: 3, title: 'Near you', icon: '📍', link: '/beauty?filter=nearby' },
          { id: 4, title: 'Top rated', icon: '⭐', link: '/beauty?filter=toprated' },
        ]}
        chips={[
          { id: 'service', label: 'Services', icon: '✂️' },
          { id: 'product', label: 'Products', icon: '🧴' },
          { id: 'clinic', label: 'Clinics', icon: '🏥' },
          { id: 'price', label: 'Price', icon: '💰' },
          { id: 'rating', label: 'Rating', icon: '⭐' },
        ]}
      />

      {/* UGC Social Proof */}
      <UGCSocialProof category="beauty" />

      {/* Streaks & Loyalty */}
      <StreakLoyaltySection
        category="beauty"
        streakData={{
          currentStreak: 3,
          targetStreak: 7,
          reward: 125,
          type: 'daily'
        }}
        brandLoyalty={[
          { name: 'Lakme', icon: '💄', visits: 2, targetVisits: 5, reward: 100 },
          { name: 'Naturals', icon: '💆', visits: 4, targetVisits: 5, reward: 150 },
          { name: 'Kaya', icon: '✨', visits: 1, targetVisits: 3, reward: 200 },
        ]}
        weeklyMission={{
          completed: 2,
          target: 4,
          reward: 175,
          description: 'Book 4 beauty services this week'
        }}
      />

      {/* Footer Trust */}
      <FooterTrust
        coinsEarnable={300}
        expiringCoins={60}
        expiryDays={5}
      />

      {/* Bottom spacer */}
      <div className="h-8" />
    </div>
  );
};

export default Beauty;
