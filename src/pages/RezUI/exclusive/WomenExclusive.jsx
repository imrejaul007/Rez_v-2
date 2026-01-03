import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Sparkles, ShoppingBag } from 'lucide-react';
import { womenDealsExtended } from '../../data/exclusiveDeals';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';

const WomenExclusive = () => {
  const categories = [
    { id: 'Beauty', icon: '💄', label: 'Beauty', count: 24 },
    { id: 'Fashion', icon: '👗', label: 'Fashion', count: 45 },
    { id: 'Wellness', icon: '🧘', label: 'Wellness', count: 18 },
    { id: 'Fitness', icon: '💪', label: 'Fitness', count: 12 },
    { id: 'Health', icon: '❤️', label: 'Health', count: 15 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-900/20 to-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="flex items-center gap-4 px-4 py-4">
          <Link to="/deal-store" className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </Link>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-rez-navy dark:text-white">Women Exclusive</h1>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">Beauty, wellness & lifestyle</p>
          </div>
          <div className="text-4xl">👩</div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="mx-4 mt-4 p-6 rounded-3xl bg-gradient-to-r from-pink-500/30 via-rose-500/20 to-purple-500/30 border border-pink-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />

        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span className="text-pink-400 font-medium">Curated for You</span>
          </div>
          <h2 className="text-2xl font-bold text-rez-navy dark:text-white">Celebrate You</h2>
          <p className="text-rez-gray-700 dark:text-gray-300 mt-1">Exclusive deals on beauty, fashion & wellness</p>

          <div className="flex gap-3 mt-4">
            <div className="px-4 py-2 rounded-xl bg-rez-gray-100 dark:bg-white/10">
              <p className="text-lg font-bold text-pink-400">50+</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Deals</p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-rez-gray-100 dark:bg-white/10">
              <p className="text-lg font-bold text-purple-400">35%</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Avg. Savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-6">
        <div className="px-4 mb-3">
          <h3 className="text-lg font-semibold text-rez-navy dark:text-white">Shop by Category</h3>
        </div>
        <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="flex flex-col items-center p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 min-w-[100px] active:bg-[#3A3A3C]"
            >
              <span className="text-3xl mb-2">{cat.icon}</span>
              <span className="text-sm font-medium text-rez-navy dark:text-white">{cat.label}</span>
              <span className="text-xs text-rez-gray-600 dark:text-gray-400">{cat.count} deals</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Brands */}
      <div className="mt-6">
        <div className="px-4 mb-3">
          <h3 className="text-lg font-semibold text-rez-navy dark:text-white">Featured Brands</h3>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {['Nykaa', 'Myntra', 'VLCC', 'Fab India'].map((brand, i) => (
            <div
              key={i}
              className="w-16 h-16 rounded-2xl bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center shrink-0"
            >
              <span className="text-xs text-rez-gray-700 dark:text-gray-300 text-center">{brand}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Deals List */}
      <div className="mt-6 px-4 space-y-3">
        <h3 className="text-lg font-semibold text-rez-navy dark:text-white">All Deals</h3>

        {womenDealsExtended.map((deal) => (
          <Card key={deal.id} className="overflow-hidden" hover>
            <div className="flex">
              {deal.image && (
                <div className="w-28 h-28 shrink-0">
                  <img src={deal.image} alt={deal.store} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="flex-1 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-rez-gray-600 dark:text-gray-400">{deal.store}</p>
                    <p className="font-medium text-rez-navy dark:text-white">{deal.title}</p>
                  </div>
                  <div className="px-2 py-1 rounded-lg bg-pink-500/20">
                    <span className="text-sm font-bold text-pink-400">{deal.discount}</span>
                  </div>
                </div>

                <p className="text-sm text-rez-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{deal.description}</p>

                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="prive" size="xs">👩 Women Exclusive</Badge>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Self-Care Reminder */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center">
            <Heart className="w-6 h-6 text-rose-400" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-rez-navy dark:text-white">Self-Care Sunday</p>
            <p className="text-sm text-rez-gray-700 dark:text-gray-300">Extra 10% off on wellness services</p>
          </div>
        </div>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-20 left-0 right-0 p-4 glass">
        <Button variant="primary" fullWidth className="bg-gradient-to-r from-pink-500 to-purple-500">
          Explore All Women Exclusive Deals
        </Button>
      </div>
    </div>
  );
};

export default WomenExclusive;
