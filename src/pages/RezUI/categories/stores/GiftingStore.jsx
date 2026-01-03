import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  ChevronRight,
  Coins,
  Gift,
  Heart,
  Calendar,
  MapPin,
  MessageSquare,
  Share2,
} from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';
import { giftingStore, socialProof } from '../../data/specializedStoresData';
import Button from '../../components/common/Button';
import QuickActionBar from '../../components/common/QuickActionBar';
import AISuggestions from '../../components/common/AISuggestions';
import UGCSocialProof from '../../components/common/UGCSocialProof';
import FooterTrust from '../../components/common/FooterTrust';

const GiftingStore = () => {
  const { rezCoins } = useWallet();
  const [activeFilters, setActiveFilters] = useState([]);
  const [proofIndex, setProofIndex] = useState(0);

  const theme = giftingStore.theme;

  const filters = [
    { id: 'cards', label: 'Gift Cards', icon: '🎁' },
    { id: 'physical', label: 'Physical Gifts', icon: '📦' },
    { id: 'experiences', label: 'Experiences', icon: '🎭' },
    { id: 'personalized', label: 'Personalized', icon: '✨' },
    { id: 'corporate', label: 'Corporate', icon: '💼' },
  ];

  const proofs = [
    { avatar: '👨', user: 'Rahul K.', action: 'gifted', product: 'Spa Day Experience', coins: 600 },
    { avatar: '👩', user: 'Priya M.', action: 'sent', product: 'Amazon Gift Card', coins: 50 },
    { avatar: '👨‍💼', user: 'Vikram S.', action: 'ordered', product: 'Personalized Gift Box', coins: 180 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProofIndex((prev) => (prev + 1) % proofs.length);
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

  const proof = proofs[proofIndex];

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
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Gifting Store</h1>
              <p className="text-xs" style={{ color: theme.primary }}>{giftingStore.tagline}</p>
            </div>
            <button className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
              <Search className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ backgroundColor: `${theme.primary}30` }}>
              <Coins className="w-4 h-4" style={{ color: theme.primary }} />
              <span className="text-sm font-medium" style={{ color: theme.primary }}>{rezCoins}</span>
            </div>
          </div>

          {/* Smart Context Strip */}
          <div className="mt-3 px-3 py-2 rounded-full border" style={{ backgroundColor: `${theme.primary}10`, borderColor: `${theme.primary}30` }}>
            <p className="text-xs text-center" style={{ color: theme.primary }}>
              🎁 {socialProof.gifting.giftsSent} gifts sent this week • Share joy, earn rewards
            </p>
          </div>
        </div>

        {/* Filter Strip */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm transition-colors ${
                  activeFilters.includes(filter.id)
                    ? 'text-black'
                    : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                }`}
                style={activeFilters.includes(filter.id) ? { backgroundColor: theme.primary } : {}}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Action Bar */}
      <QuickActionBar category="gifting" />

      {/* Social Proof */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-rez-gray-50 dark:bg-white/5 animate-fade-in">
          <span className="text-lg">{proof.avatar}</span>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 flex-1">
            <span className="font-medium text-rez-navy dark:text-white">{proof.user}</span>{' '}
            {proof.action}{' '}
            <span style={{ color: theme.primary }}>{proof.product}</span>
          </p>
          <span className="text-xs" style={{ color: theme.primary }}>+{proof.coins} coins</span>
        </div>
      </div>

      {/* Occasions */}
      <div className="px-4 mt-2">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {giftingStore.occasions.map((occasion) => (
            <Link
              key={occasion.id}
              to={`/store/gifting/occasion/${occasion.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full shrink-0"
              style={{ backgroundColor: `${theme.primary}20` }}
            >
              <span>{occasion.icon}</span>
              <span className="text-sm text-rez-navy dark:text-white">{occasion.name}</span>
              <span className="text-xs text-rez-gray-600 dark:text-gray-400">({occasion.offers})</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5" style={{ color: theme.primary }} />
            <h2 className="font-semibold text-rez-navy dark:text-white">Gift Categories</h2>
          </div>
          <button className="text-xs flex items-center gap-1" style={{ color: theme.primary }}>
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {giftingStore.categories.map((category) => (
            <Link
              key={category.id}
              to={`/store/gifting/${category.id}`}
              className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] active:scale-[0.98] transition-transform"
            >
              <span className="text-3xl block mb-2">{category.icon}</span>
              <h3 className="font-medium text-rez-navy dark:text-white">{category.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{category.items} options</p>
              <div className="flex items-center gap-1 mt-2">
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>{category.cashback}% back</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Gift on ReZ */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-3">Why Gift on ReZ?</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">🎁</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Give & Get</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Earn when you gift</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">📅</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Schedule</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Perfect timing</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">💌</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Personal Touch</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Add messages</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">🎀</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Gift Wrap</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Premium packaging</p>
          </div>
        </div>
      </div>

      {/* Popular Gift Cards */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Popular Gift Cards</h2>
          <button className="text-xs flex items-center gap-1" style={{ color: theme.primary }}>
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {giftingStore.giftCards.slice(0, 4).map((card) => (
            <Link
              key={card.id}
              to={`/store/gifting/card/${card.id}`}
              className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] active:scale-[0.98] transition-transform"
            >
              <div className="w-12 h-12 rounded-xl mb-2 flex items-center justify-center" style={{ backgroundColor: `${theme.primary}20` }}>
                <Gift className="w-6 h-6" style={{ color: theme.primary }} />
              </div>
              <h3 className="font-medium text-rez-navy dark:text-white">{card.brand}</h3>
              <div className="flex items-center gap-1 mt-1">
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>{card.cashback}% back</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Gift Experiences */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5" style={{ color: theme.primary }} />
            <h2 className="font-semibold text-rez-navy dark:text-white">Gift Experiences</h2>
          </div>
          <button className="text-xs flex items-center gap-1" style={{ color: theme.primary }}>
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {giftingStore.experiences.map((exp) => (
            <Link
              key={exp.id}
              to={`/store/gifting/experience/${exp.id}`}
              className="min-w-[180px] p-4 rounded-2xl shrink-0 active:scale-[0.98] transition-transform"
              style={{ backgroundColor: `${theme.primary}15` }}
            >
              <h3 className="font-medium text-rez-navy dark:text-white mb-1">{exp.name}</h3>
              <p className="text-lg font-bold text-rez-navy dark:text-white mb-2">₹{exp.price.toLocaleString()}</p>
              <div className="flex items-center gap-1">
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>+{exp.coins} coins</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Gifting Rewards */}
      <div className="mt-6 px-4">
        <div className="p-4 rounded-2xl" style={{ backgroundColor: `${theme.primary}15` }}>
          <div className="flex items-center gap-2 mb-3">
            <Coins className="w-5 h-5" style={{ color: theme.primary }} />
            <h3 className="font-semibold text-rez-navy dark:text-white">Earn While You Gift</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4" style={{ color: theme.primary }} />
                <span className="text-sm text-rez-navy dark:text-white">Gift Someone</span>
              </div>
              <span className="font-medium" style={{ color: theme.primary }}>+{giftingStore.socialBonus.shareGift} coins</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" style={{ color: theme.primary }} />
                <span className="text-sm text-rez-navy dark:text-white">Review Gift</span>
              </div>
              <span className="font-medium" style={{ color: theme.primary }}>+{giftingStore.socialBonus.reviewGift} coins</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4" style={{ color: theme.primary }} />
                <span className="text-sm text-rez-navy dark:text-white">Refer Friend</span>
              </div>
              <span className="font-medium" style={{ color: theme.primary }}>+{giftingStore.socialBonus.referFriend} coins</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gift Features */}
      <div className="mt-6 px-4">
        <h2 className="font-semibold text-rez-navy dark:text-white mb-3">Gift Features</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${theme.primary}20` }}>
                <Calendar className="w-5 h-5" style={{ color: theme.primary }} />
              </div>
              <div>
                <h3 className="font-medium text-rez-navy dark:text-white">Schedule Delivery</h3>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">Deliver on the perfect day</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${theme.primary}20` }}>
                <MessageSquare className="w-5 h-5" style={{ color: theme.primary }} />
              </div>
              <div>
                <h3 className="font-medium text-rez-navy dark:text-white">Personal Message</h3>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">Add a heartfelt note</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Gift Stores */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Gift Stores Nearby</h2>
          </div>
        </div>
        <div className="px-4 space-y-3">
          {['Archies', 'Hallmark', 'Ferns N Petals'].map((store, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] flex items-center justify-between">
              <div>
                <h3 className="font-medium text-rez-navy dark:text-white">{store}</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{1.5 + idx * 0.5} km away</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ backgroundColor: `${theme.primary}20` }}>
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>{8 + idx * 2}% back</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loyalty Progress */}
      <div className="mx-4 mt-6 p-4 rounded-2xl border" style={{ backgroundColor: `${theme.primary}10`, borderColor: `${theme.primary}30` }}>
        <div className="flex items-center gap-3 mb-3">
          <Gift className="w-6 h-6" style={{ color: theme.primary }} />
          <div>
            <h3 className="font-semibold text-rez-navy dark:text-white">Gift Giver Progress</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">2 more gifts to unlock bonus</p>
          </div>
        </div>
        <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden mb-2">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: '60%', backgroundColor: theme.primary }}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-rez-gray-600 dark:text-gray-400">3/5 gifts</span>
          <span className="text-xs" style={{ color: theme.primary }}>🎁 +200 Bonus Coins</span>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] text-center">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-2">Share Joy. Earn Rewards.</h3>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Every gift you give comes back to you. With ReZ.</p>
      </div>

      {/* AI Suggestions */}
      <AISuggestions category="gifting" />

      {/* UGC & Social Proof */}
      <UGCSocialProof category="gifting" />

      {/* Footer Trust */}
      <FooterTrust />

      {/* Sticky CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-4 z-50">
        <div className="p-3 rounded-2xl shadow-xl flex items-center justify-between" style={{ backgroundColor: theme.primary }}>
          <div>
            <p className="text-sm font-medium text-black">🎁 Share joy, earn ₹500 in rewards</p>
            <p className="text-xs text-black/70">Gift someone today</p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="bg-white dark:bg-black/20 text-black border-0">Cards</Button>
            <Button variant="primary" size="sm" className="bg-white dark:bg-black text-amber-500">
              Send Gift
            </Button>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
};

export default GiftingStore;
