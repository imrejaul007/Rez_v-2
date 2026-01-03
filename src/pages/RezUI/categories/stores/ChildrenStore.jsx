import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  ChevronRight,
  Coins,
  Shield,
  Users,
  MapPin,
  Gift,
  BadgeCheck,
} from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';
import { childrenStore, socialProof } from '../../data/specializedStoresData';
import Button from '../../components/common/Button';
import QuickActionBar from '../../components/common/QuickActionBar';
import AISuggestions from '../../components/common/AISuggestions';
import UGCSocialProof from '../../components/common/UGCSocialProof';
import FooterTrust from '../../components/common/FooterTrust';

const ChildrenStore = () => {
  const { rezCoins } = useWallet();
  const [activeFilters, setActiveFilters] = useState([]);
  const [selectedAge, setSelectedAge] = useState(null);
  const [proofIndex, setProofIndex] = useState(0);

  const theme = childrenStore.theme;

  const filters = [
    { id: 'clothing', label: 'Clothing', icon: '👕' },
    { id: 'toys', label: 'Toys', icon: '🧸' },
    { id: 'learning', label: 'Learning', icon: '📚' },
    { id: 'healthcare', label: 'Healthcare', icon: '🩺' },
    { id: 'bundles', label: 'Bundles', icon: '🎁' },
  ];

  const proofs = [
    { avatar: '👨‍👩‍👦', user: 'Sharma Family', action: 'bought', product: 'Learning Kit', coins: 450 },
    { avatar: '👩', user: 'Meera K.', action: 'ordered', product: 'Cotton T-Shirts', coins: 150 },
    { avatar: '👨', user: 'Raj P.', action: 'purchased', product: 'Educational Toys', coins: 180 },
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
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Children Store</h1>
              <p className="text-xs" style={{ color: theme.primary }}>{childrenStore.tagline}</p>
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
              👶 {socialProof.children.recentPurchases} families saved ₹{socialProof.children.totalSaved.toLocaleString()} this week
            </p>
          </div>
        </div>

        {/* Age Filter */}
        <div className="px-4 pb-2">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {childrenStore.ageFilters.map((age, index) => (
              <button
                key={index}
                onClick={() => setSelectedAge(selectedAge === age ? null : age)}
                className={`px-3 py-1.5 rounded-full shrink-0 text-sm transition-colors ${
                  selectedAge === age
                    ? 'text-white'
                    : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                }`}
                style={selectedAge === age ? { backgroundColor: theme.primary } : {}}
              >
                {age}
              </button>
            ))}
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
      <QuickActionBar category="children" />

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

      {/* Safety Badges */}
      <div className="px-4 mt-2">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {childrenStore.safetyBadges.map((badge) => (
            <div
              key={badge.id}
              className="flex items-center gap-2 px-3 py-2 rounded-full shrink-0"
              style={{ backgroundColor: `${theme.primary}15` }}
            >
              <span>{badge.icon}</span>
              <span className="text-sm text-rez-navy dark:text-white">{badge.name}</span>
              <BadgeCheck className="w-4 h-4 text-emerald-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Shop by Category</h2>
          <button className="text-xs flex items-center gap-1" style={{ color: theme.primary }}>
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {childrenStore.categories.map((category) => (
            <Link
              key={category.id}
              to={`/store/children/${category.id}`}
              className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] active:scale-[0.98] transition-transform"
            >
              <span className="text-3xl block mb-2">{category.icon}</span>
              <h3 className="font-medium text-rez-navy dark:text-white">{category.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{category.items} products</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-500">Ages: {category.ageRange}</p>
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
        <h3 className="font-semibold text-rez-navy dark:text-white mb-3">Why Shop Children's on ReZ?</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">🛡️</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Safety First</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">All products verified</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">👨‍👩‍👧</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Family Wallet</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Share coins with family</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">🎁</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Smart Bundles</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Save on combos</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">💰</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">High Cashback</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Up to 18% back</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" style={{ color: theme.primary }} />
            <h2 className="font-semibold text-rez-navy dark:text-white">Safe & Fun Products</h2>
          </div>
          <button className="text-xs flex items-center gap-1" style={{ color: theme.primary }}>
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {childrenStore.products.map((product) => (
            <Link
              key={product.id}
              to={`/store/children/product/${product.id}`}
              className="min-w-[180px] p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform relative"
            >
              {product.safetyBadge && (
                <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                  ✓ Safe
                </span>
              )}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}20` }}>
                <span className="text-2xl">🧒</span>
              </div>
              <h3 className="text-sm font-medium text-rez-navy dark:text-white">{product.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Ages: {product.ageRange}</p>
              <p className="text-lg font-bold text-rez-navy dark:text-white mt-2">₹{product.price.toLocaleString()}</p>
              <div className="flex items-center gap-1 mt-1">
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>+{product.coins} coins</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Special Bundles */}
      <div className="mt-6 px-4">
        <div className="flex items-center gap-2 mb-3">
          <Gift className="w-5 h-5" style={{ color: theme.primary }} />
          <h2 className="font-semibold text-rez-navy dark:text-white">Special Bundles</h2>
        </div>
        <div className="space-y-3">
          {childrenStore.bundles.map((bundle) => (
            <Link
              key={bundle.id}
              to={`/store/children/bundle/${bundle.id}`}
              className="block p-4 rounded-2xl active:scale-[0.99] transition-transform"
              style={{ backgroundColor: `${theme.primary}15` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-rez-navy dark:text-white">{bundle.name}</h3>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{bundle.items} items included</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm line-through text-rez-gray-600 dark:text-gray-500">₹{bundle.originalPrice.toLocaleString()}</span>
                    <span className="text-lg font-bold text-rez-navy dark:text-white">₹{bundle.price.toLocaleString()}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
                    Save ₹{bundle.savings.toLocaleString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Family Wallet */}
      <div className="mx-4 mt-6 p-4 rounded-2xl" style={{ backgroundColor: `${theme.primary}20` }}>
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-5 h-5" style={{ color: theme.primary }} />
          <h3 className="font-medium text-rez-navy dark:text-white">Family Wallet</h3>
        </div>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-3">{childrenStore.familyWallet.description}</p>
        <p className="text-xs text-rez-gray-600 dark:text-gray-500 mb-3">Up to {childrenStore.familyWallet.maxMembers} members</p>
        <button className="w-full py-2.5 rounded-xl text-sm font-medium text-rez-navy dark:text-white" style={{ backgroundColor: theme.primary }}>
          Setup Family Wallet
        </button>
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
          {['FirstCry', 'Mothercare', 'Hamleys'].map((store, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] flex items-center justify-between">
              <div>
                <h3 className="font-medium text-rez-navy dark:text-white">{store}</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{1.5 + idx * 0.7} km away</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ backgroundColor: `${theme.primary}20` }}>
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>{12 + idx * 2}% back</span>
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
            <h3 className="font-semibold text-rez-navy dark:text-white">Super Parent Progress</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">3 more purchases to unlock bonus</p>
          </div>
        </div>
        <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden mb-2">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: '40%', backgroundColor: theme.primary }}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-rez-gray-600 dark:text-gray-400">2/5 purchases</span>
          <span className="text-xs" style={{ color: theme.primary }}>🎁 +500 Family Coins</span>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] text-center">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-2">Joy for the Little Ones.</h3>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Safe products. Happy families. With ReZ rewards.</p>
      </div>

      {/* AI Suggestions */}
      <AISuggestions category="children" />

      {/* UGC & Social Proof */}
      <UGCSocialProof category="children" />

      {/* Footer Trust */}
      <FooterTrust />

      {/* Sticky CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-4 z-50">
        <div className="p-3 rounded-2xl shadow-xl flex items-center justify-between" style={{ backgroundColor: theme.primary }}>
          <div>
            <p className="text-sm font-medium text-rez-navy dark:text-white">👶 Save ₹1,500 on bundles</p>
            <p className="text-xs text-white/70">Safe & verified products</p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="bg-white/20 text-rez-navy dark:text-white border-0">Bundles</Button>
            <Button variant="primary" size="sm" className="bg-white text-purple-600">
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
};

export default ChildrenStore;
