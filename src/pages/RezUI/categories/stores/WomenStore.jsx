import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  ChevronRight,
  Coins,
  Heart,
  Sparkles,
  MapPin,
  Gift,
  Play,
  Star,
} from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';
import { womenStore, socialProof } from '../../data/specializedStoresData';
import Button from '../../components/common/Button';
import QuickActionBar from '../../components/common/QuickActionBar';
import AISuggestions from '../../components/common/AISuggestions';
import UGCSocialProof from '../../components/common/UGCSocialProof';
import FooterTrust from '../../components/common/FooterTrust';

const WomenStore = () => {
  const { rezCoins } = useWallet();
  const [activeFilters, setActiveFilters] = useState([]);
  const [proofIndex, setProofIndex] = useState(0);

  const theme = womenStore.theme;

  const filters = [
    { id: 'fashion', label: 'Fashion', icon: '👗' },
    { id: 'beauty', label: 'Beauty', icon: '💄' },
    { id: 'wellness', label: 'Wellness', icon: '🧘' },
    { id: 'selfcare', label: 'Self-Care', icon: '💆' },
    { id: 'exclusive', label: 'Exclusive', icon: '✨' },
  ];

  const proofs = [
    { avatar: '👩', user: 'Priya M.', action: 'bought', product: 'Designer Dress', coins: 1080 },
    { avatar: '👩‍🦱', user: 'Sneha R.', action: 'ordered', product: 'Luxury Makeup Set', coins: 700 },
    { avatar: '👩‍💼', user: 'Kavita S.', action: 'purchased', product: 'Spa Gift Box', coins: 450 },
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
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Women Store</h1>
              <p className="text-xs" style={{ color: theme.primary }}>{womenStore.tagline}</p>
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
              💖 {socialProof.women.recentPurchases} women saved ₹{socialProof.women.totalSaved.toLocaleString()} this week
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
                    ? 'text-white'
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
      <QuickActionBar category="women" />

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

      {/* Categories */}
      <div className="mt-4 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Shop by Category</h2>
          <button className="text-xs flex items-center gap-1" style={{ color: theme.primary }}>
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {womenStore.categories.map((category) => (
            <Link
              key={category.id}
              to={`/store/women/${category.id}`}
              className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] active:scale-[0.98] transition-transform"
            >
              <span className="text-3xl block mb-2">{category.icon}</span>
              <h3 className="font-medium text-rez-navy dark:text-white">{category.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{category.items} products</p>
              <div className="flex items-center gap-1 mt-2">
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>{category.cashback}% back</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Shop on ReZ */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-3">Why Shop Women's on ReZ?</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">💖</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Curated for You</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Personalized picks</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">💰</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">High Cashback</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Up to 20% back</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">🎂</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Birthday Bonus</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">2x coins on your day</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">👭</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Community</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Real reviews</p>
          </div>
        </div>
      </div>

      {/* Shop by Occasion */}
      <div className="mt-6 px-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5" style={{ color: theme.primary }} />
          <h2 className="font-semibold text-rez-navy dark:text-white">Shop by Occasion</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {womenStore.occasions.map((occasion) => (
            <Link
              key={occasion.id}
              to={`/store/women/occasion/${occasion.id}`}
              className="min-w-[150px] p-4 rounded-2xl shrink-0 active:scale-[0.98] transition-transform"
              style={{ backgroundColor: `${theme.primary}15` }}
            >
              <h3 className="font-medium text-rez-navy dark:text-white mb-1">{occasion.name}</h3>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400">{occasion.offers} offers</p>
              <div className="flex items-center gap-1 mt-2">
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>Avg {occasion.avgCashback}% back</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5" style={{ color: theme.primary }} />
            <h2 className="font-semibold text-rez-navy dark:text-white">Trending Now</h2>
          </div>
          <button className="text-xs flex items-center gap-1" style={{ color: theme.primary }}>
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {womenStore.products.map((product) => (
            <Link
              key={product.id}
              to={`/store/women/product/${product.id}`}
              className="min-w-[180px] p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}20` }}>
                <span className="text-2xl">{womenStore.categories.find(c => c.name === product.category)?.icon || '👗'}</span>
              </div>
              <h3 className="text-sm font-medium text-rez-navy dark:text-white">{product.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">{product.category}</p>
              <p className="text-lg font-bold text-rez-navy dark:text-white mt-2">₹{product.price.toLocaleString()}</p>
              <div className="flex items-center gap-1 mt-1">
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>+{product.coins} coins</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Creator Picks */}
      <div className="mt-6 px-4">
        <div className="flex items-center gap-2 mb-3">
          <Play className="w-5 h-5" style={{ color: theme.primary }} />
          <h2 className="font-semibold text-rez-navy dark:text-white">Creator Picks</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {womenStore.creatorReels.map((reel) => (
            <div
              key={reel.id}
              className="min-w-[140px] h-48 rounded-2xl shrink-0 relative overflow-hidden"
              style={{ backgroundColor: `${theme.primary}20` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-6 h-6 text-rez-navy dark:text-white fill-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80">
                <p className="text-xs text-rez-navy dark:text-white font-medium">{reel.creator}</p>
                <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">{reel.views} views</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Reviews */}
      <div className="mt-6 px-4">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-5 h-5" style={{ color: theme.primary }} />
          <h2 className="font-semibold text-rez-navy dark:text-white">Community Reviews</h2>
        </div>
        <div className="space-y-3">
          {womenStore.communityReviews.map((review) => (
            <div key={review.id} className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">👩</span>
                <div>
                  <p className="text-sm font-medium text-rez-navy dark:text-white">{review.user}</p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">{review.bodyType || review.concern}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-rez-gray-700 dark:text-gray-300">"{review.review}"</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-500 mt-1">on {review.product}</p>
            </div>
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
        </div>
        <div className="px-4 space-y-3">
          {['Zara', 'H&M', 'Sephora'].map((store, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] flex items-center justify-between">
              <div>
                <h3 className="font-medium text-rez-navy dark:text-white">{store}</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{1.2 + idx * 0.6} km away</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ backgroundColor: `${theme.primary}20` }}>
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>{15 + idx * 2}% back</span>
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
            <h3 className="font-semibold text-rez-navy dark:text-white">Style Queen Progress</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">2 more purchases to unlock bonus</p>
          </div>
        </div>
        <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden mb-2">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: '60%', backgroundColor: theme.primary }}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-rez-gray-600 dark:text-gray-400">3/5 purchases</span>
          <span className="text-xs" style={{ color: theme.primary }}>💎 +2x Coins Unlocked</span>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] text-center">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-2">Empowerment Through Choice.</h3>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Your style. Your rewards. With ReZ.</p>
      </div>

      {/* AI Suggestions */}
      <AISuggestions category="women" />

      {/* UGC & Social Proof */}
      <UGCSocialProof category="women" />

      {/* Footer Trust */}
      <FooterTrust />

      {/* Sticky CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-4 z-50">
        <div className="p-3 rounded-2xl shadow-xl flex items-center justify-between" style={{ backgroundColor: theme.primary }}>
          <div>
            <p className="text-sm font-medium text-rez-navy dark:text-white">💖 Earn ₹2,500 in rewards</p>
            <p className="text-xs text-white/70">on Women's favorites today</p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="bg-white/20 text-rez-navy dark:text-white border-0">Occasions</Button>
            <Button variant="primary" size="sm" className="bg-white text-pink-600">
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
};

export default WomenStore;
