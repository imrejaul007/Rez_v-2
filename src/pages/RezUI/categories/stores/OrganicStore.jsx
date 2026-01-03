import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  ChevronRight,
  Coins,
  Leaf,
  BadgeCheck,
  MapPin,
  Gift,
  Recycle,
} from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';
import { organicStore, socialProof } from '../../data/specializedStoresData';
import Button from '../../components/common/Button';
import QuickActionBar from '../../components/common/QuickActionBar';
import AISuggestions from '../../components/common/AISuggestions';
import UGCSocialProof from '../../components/common/UGCSocialProof';
import FooterTrust from '../../components/common/FooterTrust';

const OrganicStore = () => {
  const { rezCoins } = useWallet();
  const [activeFilters, setActiveFilters] = useState([]);
  const [proofIndex, setProofIndex] = useState(0);

  const theme = organicStore.theme;

  const filters = [
    { id: 'usda', label: 'USDA Organic', icon: '✅' },
    { id: 'india', label: 'India Organic', icon: '🇮🇳' },
    { id: 'nongmo', label: 'Non-GMO', icon: '🌱' },
    { id: 'crueltyfree', label: 'Cruelty Free', icon: '🐰' },
    { id: 'subscription', label: 'Subscribe', icon: '📦' },
  ];

  const proofs = [
    { avatar: '🧑‍🌾', user: 'Meera S.', action: 'subscribed to', product: 'Organic Veggie Box', coins: 72 },
    { avatar: '👩', user: 'Ananya R.', action: 'bought', product: 'Natural Face Serum', coins: 195 },
    { avatar: '👨', user: 'Vikram P.', action: 'ordered', product: 'Bamboo Essentials', coins: 30 },
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
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Organic Store</h1>
              <p className="text-xs" style={{ color: theme.primary }}>{organicStore.tagline}</p>
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
              🌿 {socialProof.organic.recentPurchases} people saved ₹{socialProof.organic.totalSaved.toLocaleString()} this week on organic products
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
      <QuickActionBar category="organic" />

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

      {/* Certifications */}
      <div className="px-4 mt-2">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {organicStore.certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-center gap-2 px-3 py-2 rounded-full shrink-0"
              style={{ backgroundColor: `${theme.primary}15` }}
            >
              <span>{cert.icon}</span>
              <span className="text-sm text-rez-navy dark:text-white">{cert.name}</span>
              <BadgeCheck className="w-4 h-4" style={{ color: theme.primary }} />
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5" style={{ color: theme.primary }} />
            <h2 className="font-semibold text-rez-navy dark:text-white">Shop by Category</h2>
          </div>
          <button className="text-xs flex items-center gap-1" style={{ color: theme.primary }}>
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {organicStore.categories.map((category) => (
            <Link
              key={category.id}
              to={`/store/organic/${category.id}`}
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

      {/* Why Choose Organic */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-3">Why Choose Organic on ReZ?</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">✅</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Certified Pure</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">100% verified products</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">🪙</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Earn More</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Up to 15% cashback</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">📦</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Subscribe</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Auto-delivery savings</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">🌍</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Eco Rewards</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Bonus for green choices</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Popular Organic Products</h2>
          <button className="text-xs flex items-center gap-1" style={{ color: theme.primary }}>
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {organicStore.products.map((product) => (
            <Link
              key={product.id}
              to={`/store/organic/product/${product.id}`}
              className="min-w-[200px] p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
            >
              {product.subscription && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 mb-2 inline-block">
                  Subscribe & Save
                </span>
              )}
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}20` }}>
                <Leaf className="w-8 h-8" style={{ color: theme.primary }} />
              </div>
              <h3 className="text-sm font-medium text-rez-navy dark:text-white">{product.name}</h3>
              <div className="flex gap-1 mt-1">
                {product.certifications.map((cert, idx) => (
                  <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400">{cert}</span>
                ))}
              </div>
              <p className="text-lg font-bold text-rez-navy dark:text-white mt-2">₹{product.price}</p>
              <div className="flex items-center gap-1 mt-1">
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>+{product.coins} coins</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Eco Actions */}
      <div className="mt-6 px-4">
        <div className="flex items-center gap-2 mb-3">
          <Recycle className="w-5 h-5" style={{ color: theme.primary }} />
          <h2 className="font-semibold text-rez-navy dark:text-white">Earn Eco Bonus Coins</h2>
        </div>
        <div className="space-y-2">
          {organicStore.ecoActions.map((action) => (
            <div
              key={action.id}
              className="p-4 rounded-2xl flex items-center justify-between"
              style={{ backgroundColor: `${theme.primary}15` }}
            >
              <div>
                <h3 className="font-medium text-rez-navy dark:text-white">{action.action}</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Small step, big impact</p>
              </div>
              <span className="text-sm font-medium" style={{ color: theme.primary }}>+{action.bonus} coins</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-6 px-4">
        <h2 className="font-semibold text-rez-navy dark:text-white mb-3">Learn About Organic</h2>
        <div className="space-y-3">
          {organicStore.education.map((edu) => (
            <div key={edu.id} className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
              <h3 className="font-medium text-rez-navy dark:text-white">{edu.title}</h3>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400 mt-1">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Organic Stores */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Organic Stores Nearby</h2>
          </div>
        </div>
        <div className="px-4 space-y-3">
          {['Nature\'s Basket', 'Organic World', 'Green Mart'].map((store, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] flex items-center justify-between">
              <div>
                <h3 className="font-medium text-rez-navy dark:text-white">{store}</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{1.2 + idx * 0.5} km away • Open now</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ backgroundColor: `${theme.primary}20` }}>
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>12% back</span>
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
            <h3 className="font-semibold text-rez-navy dark:text-white">Green Shopper Badge</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">3 more organic purchases to unlock</p>
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
          <span className="text-xs" style={{ color: theme.primary }}>🌿 +100 Eco Coins</span>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] text-center">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-2">Pure. Natural. Rewarding.</h3>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Better for you. Better for the planet. With ReZ rewards.</p>
      </div>

      {/* AI Suggestions */}
      <AISuggestions category="organic" />

      {/* UGC & Social Proof */}
      <UGCSocialProof category="organic" />

      {/* Footer Trust */}
      <FooterTrust />

      {/* Sticky CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-4 z-50">
        <div className="p-3 rounded-2xl shadow-xl flex items-center justify-between" style={{ backgroundColor: theme.primary }}>
          <div>
            <p className="text-sm font-medium text-rez-navy dark:text-white">🌿 Save ₹450 on Organic today</p>
            <p className="text-xs text-white/70">Subscribe for extra savings</p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="bg-white/20 text-rez-navy dark:text-white border-0">Subscribe</Button>
            <Button variant="primary" size="sm" className="bg-white text-emerald-600">
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
};

export default OrganicStore;
