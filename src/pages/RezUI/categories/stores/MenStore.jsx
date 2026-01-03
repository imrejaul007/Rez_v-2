import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  ChevronRight,
  Coins,
  Scissors,
  Package,
  MapPin,
  Gift,
  Zap,
} from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';
import { menStore, socialProof } from '../../data/specializedStoresData';
import Button from '../../components/common/Button';
import QuickActionBar from '../../components/common/QuickActionBar';
import AISuggestions from '../../components/common/AISuggestions';
import UGCSocialProof from '../../components/common/UGCSocialProof';
import FooterTrust from '../../components/common/FooterTrust';

const MenStore = () => {
  const { rezCoins } = useWallet();
  const [activeFilters, setActiveFilters] = useState([]);
  const [proofIndex, setProofIndex] = useState(0);

  const theme = menStore.theme;

  const filters = [
    { id: 'fashion', label: 'Fashion', icon: '👔' },
    { id: 'grooming', label: 'Grooming', icon: '🧔' },
    { id: 'fitness', label: 'Fitness', icon: '💪' },
    { id: 'gadgets', label: 'Gadgets', icon: '📱' },
    { id: 'bundles', label: 'Bundles', icon: '📦' },
  ];

  const proofs = [
    { avatar: '👨', user: 'Rohit S.', action: 'bought', product: 'Premium Blazer', coins: 1350 },
    { avatar: '👨‍💼', user: 'Karan M.', action: 'ordered', product: 'Beard Grooming Kit', coins: 270 },
    { avatar: '🧔', user: 'Amit P.', action: 'purchased', product: 'Fitness Tracker', coins: 600 },
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
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Men Store</h1>
              <p className="text-xs text-blue-400">{menStore.tagline}</p>
            </div>
            <button className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
              <Search className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/30">
              <Coins className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">{rezCoins}</span>
            </div>
          </div>

          {/* Smart Context Strip */}
          <div className="mt-3 px-3 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            <p className="text-xs text-blue-400 text-center">
              💪 {socialProof.men.recentPurchases} men saved ₹{socialProof.men.totalSaved.toLocaleString()} this week
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
                    ? 'bg-blue-500 text-white'
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
      <QuickActionBar category="men" />

      {/* Social Proof */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-rez-gray-50 dark:bg-white/5 animate-fade-in">
          <span className="text-lg">{proof.avatar}</span>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 flex-1">
            <span className="font-medium text-rez-navy dark:text-white">{proof.user}</span>{' '}
            {proof.action}{' '}
            <span className="text-blue-400">{proof.product}</span>
          </p>
          <span className="text-xs text-blue-400">+{proof.coins} coins</span>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-4 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Shop by Category</h2>
          <button className="text-xs text-blue-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {menStore.categories.map((category) => (
            <Link
              key={category.id}
              to={`/store/men/${category.id}`}
              className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] active:scale-[0.98] transition-transform"
            >
              <span className="text-3xl block mb-2">{category.icon}</span>
              <h3 className="font-medium text-rez-navy dark:text-white">{category.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{category.items} products</p>
              <div className="flex items-center gap-1 mt-2">
                <Coins className="w-3 h-3 text-blue-400" />
                <span className="text-xs text-blue-400">{category.cashback}% back</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Shop on ReZ */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-3">Why Shop Men's on ReZ?</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">📦</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Smart Bundles</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Curated combos</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">💰</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">High Cashback</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Up to 18% back</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">✂️</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Book Services</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Barber & grooming</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">⚡</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Fast Delivery</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">60-min express</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Top Picks for You</h2>
          </div>
          <button className="text-xs text-blue-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {menStore.products.map((product) => (
            <Link
              key={product.id}
              to={`/store/men/product/${product.id}`}
              className="min-w-[180px] p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-3">
                <span className="text-2xl">{menStore.categories.find(c => c.name === product.category)?.icon || '📦'}</span>
              </div>
              <h3 className="text-sm font-medium text-rez-navy dark:text-white">{product.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">{product.category}</p>
              <p className="text-lg font-bold text-rez-navy dark:text-white mt-2">₹{product.price.toLocaleString()}</p>
              <div className="flex items-center gap-1 mt-1">
                <Coins className="w-3 h-3 text-blue-400" />
                <span className="text-xs text-blue-400">+{product.coins} coins</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Smart Bundles */}
      <div className="mt-6 px-4">
        <div className="flex items-center gap-2 mb-3">
          <Package className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold text-rez-navy dark:text-white">Smart Bundles</h2>
        </div>
        <div className="space-y-3">
          {menStore.bundles.map((bundle) => (
            <Link
              key={bundle.id}
              to={`/store/men/bundle/${bundle.id}`}
              className="block p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 active:scale-[0.99] transition-transform"
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

      {/* Barber Services */}
      <div className="mt-6 px-4">
        <div className="flex items-center gap-2 mb-3">
          <Scissors className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold text-rez-navy dark:text-white">Book Grooming Services</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {menStore.barberServices.map((service) => (
            <div
              key={service.id}
              className="min-w-[160px] p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0"
            >
              <h3 className="font-medium text-rez-navy dark:text-white">{service.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{service.duration}</p>
              <p className="text-lg font-bold text-rez-navy dark:text-white mt-2">₹{service.price}</p>
              <div className="flex items-center gap-1 mt-1">
                <Coins className="w-3 h-3 text-blue-400" />
                <span className="text-xs text-blue-400">{service.cashback}% back</span>
              </div>
              <button className="w-full mt-3 py-2 rounded-xl bg-blue-500 text-sm font-medium text-rez-navy dark:text-white">
                Book Now
              </button>
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
          {['Jack & Jones', 'Van Heusen', 'Bombay Shaving'].map((store, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] flex items-center justify-between">
              <div>
                <h3 className="font-medium text-rez-navy dark:text-white">{store}</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{1.5 + idx * 0.8} km away</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/20">
                <Coins className="w-3 h-3 text-blue-400" />
                <span className="text-xs text-blue-400">{12 + idx * 2}% back</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loyalty Progress */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
        <div className="flex items-center gap-3 mb-3">
          <Gift className="w-6 h-6 text-blue-400" />
          <div>
            <h3 className="font-semibold text-rez-navy dark:text-white">Men's Club Progress</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">2 more purchases to unlock bonus</p>
          </div>
        </div>
        <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden mb-2">
          <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: '60%' }} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-rez-gray-600 dark:text-gray-400">3/5 purchases</span>
          <span className="text-xs text-blue-400">🎁 +500 Bonus Coins</span>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] text-center">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-2">Built for Men. Rewarding Every Time.</h3>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Quality products. Smart bundles. With ReZ rewards.</p>
      </div>

      {/* AI Suggestions */}
      <AISuggestions category="men" />

      {/* UGC & Social Proof */}
      <UGCSocialProof category="men" />

      {/* Footer Trust */}
      <FooterTrust />

      {/* Sticky CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-4 z-50">
        <div className="p-3 rounded-2xl bg-blue-600 shadow-xl flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-rez-navy dark:text-white">💪 Save ₹3,000 on bundles</p>
            <p className="text-xs text-blue-200">Curated for you</p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="bg-white/20 text-rez-navy dark:text-white border-0">Bundles</Button>
            <Button variant="primary" size="sm" className="bg-white text-blue-600">
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
};

export default MenStore;
