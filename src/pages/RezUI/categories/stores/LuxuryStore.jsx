import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  ChevronRight,
  Coins,
  Crown,
  Star,
  MapPin,
  Gift,
  Sparkles,
} from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';
import { luxuryStore, socialProof } from '../../data/specializedStoresData';
import Button from '../../components/common/Button';
import QuickActionBar from '../../components/common/QuickActionBar';
import AISuggestions from '../../components/common/AISuggestions';
import UGCSocialProof from '../../components/common/UGCSocialProof';
import FooterTrust from '../../components/common/FooterTrust';

const LuxuryStore = () => {
  const { rezCoins } = useWallet();
  const [activeFilters, setActiveFilters] = useState([]);
  const [proofIndex, setProofIndex] = useState(0);

  const theme = luxuryStore.theme;

  const filters = [
    { id: 'prive', label: 'Privé Only', icon: '👑' },
    { id: 'limited', label: 'Limited Edition', icon: '✨' },
    { id: 'watches', label: 'Watches', icon: '⌚' },
    { id: 'fashion', label: 'Fashion', icon: '👜' },
    { id: 'jewelry', label: 'Jewelry', icon: '💎' },
  ];

  const proofs = [
    { avatar: '👨‍💼', user: 'Rahul K.', action: 'purchased', product: 'Rolex Watch', coins: 25500 },
    { avatar: '👩‍💼', user: 'Priya S.', action: 'bought', product: 'Louis Vuitton Bag', coins: 9250 },
    { avatar: '👨', user: 'Arjun M.', action: 'ordered', product: 'Gucci Shoes', coins: 4500 },
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
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Luxury Store</h1>
              <p className="text-xs" style={{ color: theme.primary }}>{luxuryStore.tagline}</p>
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
              👑 Earn up to ₹{socialProof.luxury.totalSaved.toLocaleString()} in exclusive rewards • Privé members get 2x coins
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
      <QuickActionBar category="luxury" />

      {/* Social Proof */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-rez-gray-50 dark:bg-white/5 animate-fade-in">
          <span className="text-lg">{proof.avatar}</span>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 flex-1">
            <span className="font-medium text-rez-navy dark:text-white">{proof.user}</span>{' '}
            {proof.action}{' '}
            <span style={{ color: theme.primary }}>{proof.product}</span>
          </p>
          <span className="text-xs" style={{ color: theme.primary }}>+{proof.coins.toLocaleString()} coins</span>
        </div>
      </div>

      {/* Premium Brands */}
      <div className="mt-4 px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5" style={{ color: theme.primary }} />
            <h2 className="font-semibold text-rez-navy dark:text-white">Premium Brands</h2>
          </div>
          <button className="text-xs flex items-center gap-1" style={{ color: theme.primary }}>
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {luxuryStore.brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/store/luxury/brand/${brand.id}`}
              className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] text-center active:scale-[0.98] transition-transform relative"
            >
              {brand.isPriveOnly && (
                <span className="absolute top-2 right-2 text-xs px-1.5 py-0.5 rounded-full" style={{ backgroundColor: `${theme.primary}30`, color: theme.primary }}>
                  Privé
                </span>
              )}
              <span className="text-3xl block mb-2">{brand.logo}</span>
              <h3 className="text-sm font-medium text-rez-navy dark:text-white">{brand.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">{brand.type}</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>{brand.cashback}% back</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Shop Luxury on ReZ */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-3">Why Shop Luxury on ReZ?</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">👑</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Privé Access</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Exclusive previews</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">💰</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Elite Cashback</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Up to 6% on luxury</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">🎁</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Concierge</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Personal shopping</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">✨</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Limited Edition</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">First access</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" style={{ color: theme.primary }} />
            <h2 className="font-semibold text-rez-navy dark:text-white">Featured Collection</h2>
          </div>
          <button className="text-xs flex items-center gap-1" style={{ color: theme.primary }}>
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {luxuryStore.products.map((product) => (
            <Link
              key={product.id}
              to={`/store/luxury/product/${product.id}`}
              className="min-w-[200px] p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform relative"
            >
              {product.isLimited && (
                <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400">
                  Limited
                </span>
              )}
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}20` }}>
                <span className="text-3xl">{product.image}</span>
              </div>
              <h3 className="text-sm font-medium text-rez-navy dark:text-white">{product.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">{product.brand}</p>
              <p className="text-lg font-bold text-rez-navy dark:text-white mt-2">₹{product.price.toLocaleString()}</p>
              <div className="flex items-center gap-1 mt-1">
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>+{product.coins.toLocaleString()} coins</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Stylist Picks */}
      <div className="mt-6 px-4">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-5 h-5" style={{ color: theme.primary }} />
          <h2 className="font-semibold text-rez-navy dark:text-white">Stylist Picks</h2>
        </div>
        <div className="space-y-3">
          {luxuryStore.stylistPicks.map((pick) => (
            <Link
              key={pick.id}
              to={`/store/luxury/collection/${pick.id}`}
              className="block p-4 rounded-2xl active:scale-[0.99] transition-transform"
              style={{ backgroundColor: `${theme.primary}15` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-rez-navy dark:text-white">{pick.name}</h3>
                  <p className="text-sm text-rez-gray-600 dark:text-gray-400">{pick.items} curated items</p>
                </div>
                <div className="text-right">
                  <p className="text-sm" style={{ color: theme.primary }}>Save ₹{pick.savings.toLocaleString()}</p>
                  <ChevronRight className="w-4 h-4 text-rez-gray-600 dark:text-gray-400 ml-auto mt-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Exclusive Offers */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Exclusive Offers</h2>
          <button className="text-xs flex items-center gap-1" style={{ color: theme.primary }}>
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="space-y-3">
          {luxuryStore.offers.map((offer) => (
            <div key={offer.id} className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-rez-navy dark:text-white">{offer.title}</h3>
                  <p className="text-sm text-rez-gray-600 dark:text-gray-400 mt-1">{offer.description}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `${theme.primary}20`, color: theme.primary }}>
                  {offer.validFor}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury Stores Nearby */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Luxury Stores Nearby</h2>
          </div>
          <button className="text-xs text-rez-gray-600 dark:text-gray-400 flex items-center gap-1">
            Map View <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="px-4 space-y-3">
          {['DLF Emporio', 'Palladium Mall', 'UB City'].map((store, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] flex items-center justify-between">
              <div>
                <h3 className="font-medium text-rez-navy dark:text-white">{store}</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{5 + idx} luxury brands • {2 + idx * 0.5} km away</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ backgroundColor: `${theme.primary}20` }}>
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>5% back</span>
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
            <h3 className="font-semibold text-rez-navy dark:text-white">Elite Status Progress</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">2 more luxury purchases to unlock Elite tier</p>
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
          <span className="text-xs" style={{ color: theme.primary }}>🎁 +2x Coins Unlocked</span>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] text-center">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-2">Luxury. Reimagined.</h3>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Same prestige. Same quality. With ReZ rewards.</p>
      </div>

      {/* AI Suggestions */}
      <AISuggestions category="luxury" />

      {/* UGC & Social Proof */}
      <UGCSocialProof category="luxury" />

      {/* Footer Trust */}
      <FooterTrust />

      {/* Sticky CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-4 z-50">
        <div className="p-3 rounded-2xl shadow-xl flex items-center justify-between" style={{ backgroundColor: theme.primary }}>
          <div>
            <p className="text-sm font-medium text-black">👑 You can earn ₹12,500 in coins</p>
            <p className="text-xs text-black/70">on Luxury items today</p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="bg-white dark:bg-black/20 text-black border-0">Concierge</Button>
            <Button variant="primary" size="sm" className="bg-white dark:bg-black text-rez-navy dark:text-white">
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
};

export default LuxuryStore;
