import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bell, ChevronDown, ChevronRight, Sparkles, Users, Clock, Zap, Bot } from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import { useUser } from '../contexts/UserContext';

// Data imports
import {
  nearbyOffers,
  todaysOffers,
  bogoDeals,
  lightningDeals,
  trendingDeals,
  superCashbackStores,
  hotspotDeals,
  friendsRedeemed,
  newTodayDeals,
  aiRecommendedDeals,
  salesDeals,
  freeDeliveryDeals,
  sponsoredCashback,
  bigCoinDrops,
  discountBuckets
} from '../data/deals';

// Component imports
import DealCard from '../components/deals/DealCard';
import DealSection from '../components/deals/DealSection';
import DiscountBuckets from '../components/deals/DiscountBuckets';
import DoubleCashbackBanner from '../components/deals/DoubleCashbackBanner';
import UploadBillCard from '../components/deals/UploadBillCard';
import BankDeals from '../components/deals/BankDeals';
import LoyaltyProgress from '../components/deals/LoyaltyProgress';
import HotspotDeals from '../components/deals/HotspotDeals';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';

const DealStore = () => {
  const [activeMode, setActiveMode] = useState('offers');
  const { totalCoinsValue } = useWallet();
  const { user } = useUser();

  const modes = [
    { id: 'offers', label: 'Offers', icon: '🏷️' },
    { id: 'cashback', label: 'Cashback', icon: '💰' },
    { id: 'exclusive', label: 'Exclusive', icon: '⭐' }
  ];

  const getModeSubtitle = () => {
    switch (activeMode) {
      case 'offers': return 'Save instantly near you';
      case 'cashback': return 'Earn coins on every spend';
      case 'exclusive': return 'Unlocked just for you';
      default: return '';
    }
  };

  // Exclusive categories for navigation
  const exclusiveCategories = [
    { id: 'student', path: '/exclusive/student', icon: '🎓', label: 'Student Zone', subtitle: 'Campus deals', color: 'from-blue-500/20 to-purple-500/20' },
    { id: 'corporate', path: '/exclusive/corporate', icon: '🏢', label: 'Corporate', subtitle: 'Office perks', color: 'from-slate-500/20 to-gray-500/20' },
    { id: 'women', path: '/exclusive/women', icon: '👩', label: 'Women', subtitle: 'Beauty & wellness', color: 'from-pink-500/20 to-rose-500/20' },
    { id: 'birthday', path: '/exclusive/birthday', icon: '🎂', label: 'Birthday', subtitle: 'Special rewards', color: 'from-amber-500/20 to-red-500/20' },
    { id: 'loyalty', path: '/exclusive/loyalty', icon: '🎯', label: 'Loyalty', subtitle: 'Progress rewards', color: 'from-emerald-500/20 to-teal-500/20' },
    { id: 'special', path: '/exclusive/special-profiles', icon: '🎖️', label: 'Special', subtitle: 'Army, Healthcare', color: 'from-indigo-500/20 to-purple-500/20' },
  ];

  return (
    <div className="pb-4">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-white">BTM, Bangalore</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20">
              <span className="text-amber-400">🪙</span>
              <span className="text-sm font-medium text-amber-400">{totalCoinsValue?.toLocaleString() || 0}</span>
            </div>
            <button className="relative p-2 rounded-full bg-white/10">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>
        </div>

        <div className="px-4 pb-3">
          <h1 className="text-2xl font-bold text-white">Deal Store</h1>
          <p className="text-sm text-gray-400">{getModeSubtitle()}</p>
        </div>

        <div className="px-4 pb-3">
          <div className="flex bg-white/5 rounded-2xl p-1">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl transition-all ${
                  activeMode === mode.id ? 'bg-white/10 text-white' : 'text-gray-400'
                }`}
              >
                <span className="text-sm">{mode.icon}</span>
                <span className="text-sm font-medium">{mode.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== MODE 1: OFFERS ==================== */}
      {activeMode === 'offers' && (
        <div>
          {/* 1. Lightning Deals */}
          {lightningDeals.length > 0 && (
            <section className="py-4">
              <div className="px-4 mb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-400" />
                  <div>
                    <h2 className="text-lg font-semibold text-white">Lightning Deals</h2>
                    <p className="text-sm text-gray-400">Limited quantity, grab fast!</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
                {lightningDeals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} variant="lightning" />
                ))}
              </div>
            </section>
          )}

          {/* 2. Nearby Offers */}
          <DealSection
            title="Nearby Offers"
            subtitle="Deals within walking distance"
            icon="📍"
            deals={nearbyOffers}
            variant="horizontal"
            viewAllLink="/deal-store/nearby"
          />

          {/* 3. Today's Offers */}
          <DealSection
            title="Today's Offers"
            subtitle="⏰ Expires tonight"
            icon="🕐"
            deals={todaysOffers}
            variant="horizontal"
          />

          {/* 4. Sales */}
          <DealSection
            title="Sales & Clearance"
            subtitle="Up to 70% OFF"
            icon="🛍️"
            deals={salesDeals}
            variant="horizontal"
          />

          {/* 5. Buy 1 Get 1 */}
          <DealSection
            title="Buy 1 Get 1"
            subtitle="Double the value"
            icon="🎁"
            deals={bogoDeals}
            variant="horizontal"
            cardVariant="compact"
          />

          {/* 6. Discount Buckets (25%, 50%, 80%, Free Delivery) */}
          <DiscountBuckets />

          {/* 7. Trending Now */}
          <section className="py-4">
            <div className="px-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🔥</span>
                <div>
                  <h2 className="text-lg font-semibold text-white">Trending Now</h2>
                  <p className="text-sm text-gray-400">Most redeemed this week</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
              {trendingDeals.map((deal) => (
                <DealCard key={deal.id} deal={deal} variant="default" />
              ))}
            </div>
          </section>

          {/* 8. Last Chance Deals */}
          <DealSection
            title="Last Chance"
            subtitle="⏳ Expiring in 24 hours"
            icon="⏳"
            deals={todaysOffers}
            variant="list"
          />

          {/* 9. New Today */}
          <DealSection
            title="New Today"
            subtitle="✨ Just added"
            icon="🆕"
            deals={newTodayDeals}
            variant="horizontal"
          />

          {/* 10. AI Recommended */}
          <section className="py-4">
            <div className="px-4 mb-3">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-purple-400" />
                <div>
                  <h2 className="text-lg font-semibold text-white">Picked for You</h2>
                  <p className="text-sm text-gray-400">🤖 AI recommendations based on your activity</p>
                </div>
              </div>
            </div>
            <div className="px-4 space-y-3">
              {aiRecommendedDeals.map((deal) => (
                <Card key={deal.id} className="p-4" hover>
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <img src={deal.image} alt={deal.store} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400">{deal.store}</p>
                      <p className="font-medium text-white">{deal.title}</p>
                      <p className="text-xs text-purple-400 mt-1">✨ {deal.aiReason}</p>
                    </div>
                    <div className="px-2 py-1 h-fit rounded-lg bg-purple-500/20">
                      <span className="text-sm font-bold text-purple-400">{deal.discount}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* 11. Nearby Hotspots */}
          <HotspotDeals />

          {/* 12. Friends Redeemed */}
          <section className="py-4">
            <div className="px-4 mb-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <div>
                  <h2 className="text-lg font-semibold text-white">Friends Redeemed</h2>
                  <p className="text-sm text-gray-400">Popular with people you know</p>
                </div>
              </div>
            </div>
            <div className="px-4">
              {friendsRedeemed.map((item) => {
                const deal = nearbyOffers.find(d => d.id === item.dealId);
                if (!deal) return null;
                return (
                  <Card key={item.dealId} className="p-4" hover>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex -space-x-2">
                        {item.friendNames.slice(0, 3).map((name, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center border-2 border-[#2C2C2E]"
                          >
                            <span className="text-xs font-bold text-white">{name[0]}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-300">
                        <span className="text-white font-medium">{item.friendCount} friends</span> redeemed this
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-16 h-16 rounded-xl overflow-hidden">
                        <img src={deal.image} alt={deal.store} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-400">{deal.store}</p>
                        <p className="font-medium text-white">{deal.title}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Free Delivery Section */}
          <DealSection
            title="Free Delivery"
            subtitle="🚚 No delivery charges"
            icon="🚚"
            deals={freeDeliveryDeals}
            variant="horizontal"
          />
        </div>
      )}

      {/* ==================== MODE 2: CASHBACK ==================== */}
      {activeMode === 'cashback' && (
        <div>
          {/* 1. Double Cashback Banner */}
          <DoubleCashbackBanner />

          {/* 2. Super Cashback Stores */}
          <DealSection
            title="Super Cashback"
            subtitle="💰 Earn 10-30% back"
            icon="💰"
            deals={superCashbackStores}
            variant="horizontal"
            cardVariant="cashback"
          />

          {/* 3. Big Coin Drops */}
          <section className="py-4">
            <div className="px-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🪙</span>
                <div>
                  <h2 className="text-lg font-semibold text-white">Big Coin Drops</h2>
                  <p className="text-sm text-gray-400">Limited time multipliers</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
              {bigCoinDrops.map((drop) => (
                <div
                  key={drop.id}
                  className="min-w-[200px] p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 shrink-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-amber-400">{drop.multiplier}X</span>
                    <Badge variant="secondary" size="xs">
                      <Clock className="w-3 h-3" />
                      {drop.expiresIn}
                    </Badge>
                  </div>
                  <p className="font-medium text-white">{drop.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{drop.validStores.join(', ')}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Upload Bill Bonus */}
          <UploadBillCard />

          {/* 5. Sponsored Cashback */}
          <section className="py-4">
            <div className="px-4 mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <div>
                    <h2 className="text-lg font-semibold text-white">Sponsored Cashback</h2>
                    <p className="text-sm text-gray-400">Brand-funded extra rewards</p>
                  </div>
                </div>
                <Badge variant="default" size="xs">Sponsored</Badge>
              </div>
            </div>
            <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
              {sponsoredCashback.map((deal) => (
                <DealCard key={deal.id} deal={deal} variant="cashback" />
              ))}
            </div>
          </section>

          {/* 6. Bank Deals */}
          <BankDeals />

          {/* All Cashback Stores */}
          <DealSection
            title="All Cashback Stores"
            subtitle="Earn on every purchase"
            icon="🏪"
            deals={superCashbackStores}
            variant="list"
          />
        </div>
      )}

      {/* ==================== MODE 3: EXCLUSIVE ==================== */}
      {activeMode === 'exclusive' && (
        <div>
          {/* Intro Banner */}
          <div className="mx-4 mt-2 mb-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20">
            <div className="flex items-center gap-3">
              <span className="text-3xl">✨</span>
              <div>
                <p className="font-semibold text-white">Exclusive for You</p>
                <p className="text-sm text-gray-300">Deals based on your profile and preferences</p>
              </div>
            </div>
          </div>

          {/* Category Navigation Cards */}
          <div className="px-4 mb-4">
            <h3 className="text-lg font-semibold text-white mb-3">Browse Exclusive Deals</h3>
            <div className="grid grid-cols-2 gap-3">
              {exclusiveCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={cat.path}
                  className={`p-4 rounded-2xl bg-gradient-to-br ${cat.color} border border-white/10 active:scale-[0.98] transition-transform`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{cat.icon}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="font-semibold text-white">{cat.label}</p>
                  <p className="text-xs text-gray-400">{cat.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Access: Loyalty Progress */}
          <LoyaltyProgress />

          {/* Birthday Banner (if birthday week) */}
          <Link
            to="/exclusive/birthday"
            className="mx-4 mb-4 p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-red-500/20 border border-amber-500/20 flex items-center gap-4"
          >
            <span className="text-4xl">🎂</span>
            <div className="flex-1">
              <p className="font-semibold text-white">Birthday Week Active!</p>
              <p className="text-sm text-gray-300">Claim your free gifts & bonus coins</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>

          {/* Special Profiles Preview */}
          <section className="py-4">
            <div className="px-4 mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎖️</span>
                  <div>
                    <h2 className="text-lg font-semibold text-white">Special Profiles</h2>
                    <p className="text-sm text-gray-400">Exclusive for verified members</p>
                  </div>
                </div>
                <Link to="/exclusive/special-profiles" className="text-sm text-emerald-400">
                  View all
                </Link>
              </div>
            </div>
            <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
              {[
                { icon: '🪖', label: 'Defence', deals: '12 deals' },
                { icon: '🩺', label: 'Healthcare', deals: '8 deals' },
                { icon: '👴', label: 'Senior Citizen', deals: '10 deals' },
                { icon: '📚', label: 'Teachers', deals: '6 deals' },
              ].map((profile, i) => (
                <Link
                  key={i}
                  to="/exclusive/special-profiles"
                  className="min-w-[120px] p-4 rounded-2xl bg-[#2C2C2E] shrink-0 text-center active:bg-[#3A3A3C]"
                >
                  <span className="text-3xl">{profile.icon}</span>
                  <p className="font-medium text-white mt-2">{profile.label}</p>
                  <p className="text-xs text-gray-400">{profile.deals}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Not Eligible Banner */}
          <div className="mx-4 mt-4 p-4 rounded-2xl bg-white/5 text-center">
            <p className="text-sm text-gray-400">
              Don't see your deals? <Link to="/profile" className="text-emerald-400">Verify your profile</Link> to unlock exclusive offers.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealStore;
