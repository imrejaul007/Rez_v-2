import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, TrendingUp, Star, Zap, DollarSign, CheckCircle, Sparkles, Filter } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CashStoreStores = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stores', count: 1000 },
    { id: 'shopping', name: 'Shopping', count: 250 },
    { id: 'fashion', name: 'Fashion', count: 180 },
    { id: 'food', name: 'Food & Dining', count: 150 },
    { id: 'beauty', name: 'Beauty', count: 120 },
    { id: 'travel', name: 'Travel', count: 95 },
    { id: 'electronics', name: 'Electronics', count: 85 },
  ];

  // Mock stores data - enhanced with autoTracked and percentage-only display
  const stores = [
    { id: 1, name: 'Amazon', logo: '📦', category: 'shopping', cashback: '12%', coupons: 145, trending: true, autoTracked: true },
    { id: 2, name: 'Flipkart', logo: '🛒', category: 'shopping', cashback: '15%', coupons: 98, trending: true, autoTracked: true },
    { id: 3, name: 'Myntra', logo: '👗', category: 'fashion', cashback: '20%', coupons: 67, autoTracked: true },
    { id: 4, name: 'Swiggy', logo: '🍔', category: 'food', cashback: '10%', coupons: 52, autoTracked: true },
    { id: 5, name: 'Nykaa', logo: '💄', category: 'beauty', cashback: '18%', coupons: 73, autoTracked: true },
    { id: 6, name: 'MakeMyTrip', logo: '✈️', category: 'travel', cashback: '25%', coupons: 89, trending: true, autoTracked: true },
    { id: 7, name: 'Ajio', logo: '👔', category: 'fashion', cashback: '22%', coupons: 56, autoTracked: true },
    { id: 8, name: 'Zomato', logo: '🍕', category: 'food', cashback: '8%', coupons: 48, autoTracked: true },
    { id: 9, name: 'Boat', logo: '🎧', category: 'electronics', cashback: '14%', coupons: 34, autoTracked: true },
    { id: 10, name: 'Cleartrip', logo: '🛫', category: 'travel', cashback: '20%', coupons: 67, autoTracked: true },
  ];

  const filteredStores = activeCategory === 'all'
    ? stores
    : stores.filter(store => store.category === activeCategory);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Money-First Header */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-rez-navy dark:text-white">All Online Stores</h1>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
              💸 1000+ brands • Auto-tracked cashback
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-center">
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">1000+</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Brands</p>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-center">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">20%</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Avg Cashback</p>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-center">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">100%</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Auto-tracked</p>
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-10 h-10 text-green-500 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">
                ✔ Verified & Auto-tracked
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Shop normally. We automatically track and credit your ReZ Coins.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="px-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <Search className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search 1000+ stores..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-rez-navy dark:text-white placeholder-rez-gray-500 dark:placeholder-gray-500 outline-none text-sm"
            />
          </div>
          <button className="p-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <Filter className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="px-4 mb-6">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat.name}
              <span className="ml-1.5 opacity-75">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="px-4 mb-3">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing <span className="font-bold text-rez-navy dark:text-white">{filteredStores.length}</span> stores
        </p>
      </div>

      {/* Stores Grid - Money-First Design */}
      <div className="px-4 mb-6">
        <div className="grid gap-3">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              onClick={() => navigate(`/cash-store/brand/${store.id}`)}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Store Logo */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center text-3xl flex-shrink-0">
                  {store.logo}
                </div>

                {/* Store Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-rez-navy dark:text-white truncate">{store.name}</h3>
                        {store.autoTracked && (
                          <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-[10px] font-bold text-green-600 dark:text-green-400 whitespace-nowrap">
                            ✔ Auto
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400 capitalize">{store.category}</p>
                    </div>
                    {store.trending && (
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex-shrink-0">
                        <Sparkles className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                        <span className="text-xs font-bold text-orange-600 dark:text-orange-400">Hot</span>
                      </div>
                    )}
                  </div>

                  {/* Money-First Cashback Display */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      <div>
                        <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 leading-none">
                          {store.cashback}
                        </p>
                        <p className="text-[10px] text-gray-600 dark:text-gray-400 mt-0.5">ReZ Coins</p>
                      </div>
                    </div>
                  </div>

                  {/* Coupons Available */}
                  <div className="flex items-center gap-1.5">
                    <div className="px-2 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20">
                      <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                        {store.coupons} Coupons
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 pb-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-2">
            List Your Brand
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Partner with ReZ and offer cashback to millions of users
          </p>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold hover:scale-105 transition-all">
            Become a Partner
          </button>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CashStoreStores;
