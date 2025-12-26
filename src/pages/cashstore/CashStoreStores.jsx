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
    { id: 'all', name: 'All Stores', count: 2500 },
    { id: 'shopping', name: 'Shopping & Grocery', count: 450 },
    { id: 'fashion', name: 'Fashion & Lifestyle', count: 380 },
    { id: 'food', name: 'Food & Dining', count: 520 },
    { id: 'beauty', name: 'Beauty & Wellness', count: 280 },
    { id: 'travel', name: 'Travel & Entertainment', count: 195 },
    { id: 'electronics', name: 'Electronics', count: 165 },
    { id: 'health', name: 'Health & Pharmacy', count: 140 },
    { id: 'services', name: 'Home Services', count: 95 },
  ];

  // Comprehensive stores data with all merchant categories
  const stores = [
    // E-commerce Giants
    { id: 1, name: 'Amazon', logo: '📦', category: 'shopping', cashback: '12%', coupons: 145, trending: true, autoTracked: true },
    { id: 2, name: 'Flipkart', logo: '🛒', category: 'shopping', cashback: '15%', coupons: 98, trending: true, autoTracked: true },
    { id: 3, name: 'Myntra', logo: '👗', category: 'fashion', cashback: '20%', coupons: 67, trending: true, autoTracked: true },
    { id: 4, name: 'Ajio', logo: '👔', category: 'fashion', cashback: '22%', coupons: 56, autoTracked: true },
    { id: 5, name: 'Nykaa', logo: '💄', category: 'beauty', cashback: '18%', coupons: 73, trending: true, autoTracked: true },

    // Retail & Grocery
    { id: 6, name: 'DMart', logo: '🛍️', category: 'shopping', cashback: '8%', coupons: 42, trending: true, autoTracked: true },
    { id: 7, name: 'Reliance Retail', logo: '🏪', category: 'shopping', cashback: '10%', coupons: 65, trending: true, autoTracked: true },
    { id: 8, name: 'Spencer\'s', logo: '🛒', category: 'shopping', cashback: '12%', coupons: 38, autoTracked: true },
    { id: 9, name: 'SPAR', logo: '🏬', category: 'shopping', cashback: '9%', coupons: 28, autoTracked: true },
    { id: 10, name: 'BigBasket', logo: '🥬', category: 'shopping', cashback: '14%', coupons: 52, trending: true, autoTracked: true },
    { id: 11, name: 'Zepto', logo: '⚡', category: 'shopping', cashback: '11%', coupons: 34, trending: true, autoTracked: true },
    { id: 12, name: 'Blinkit', logo: '🚀', category: 'shopping', cashback: '10%', coupons: 29, autoTracked: true },

    // Food Delivery & QSR
    { id: 13, name: 'Swiggy', logo: '🍔', category: 'food', cashback: '10%', coupons: 52, trending: true, autoTracked: true },
    { id: 14, name: 'Zomato', logo: '🍕', category: 'food', cashback: '8%', coupons: 48, trending: true, autoTracked: true },
    { id: 15, name: 'McDonald\'s', logo: '🍟', category: 'food', cashback: '12%', coupons: 23, trending: true, autoTracked: true },
    { id: 16, name: 'Domino\'s', logo: '🍕', category: 'food', cashback: '15%', coupons: 31, trending: true, autoTracked: true },
    { id: 17, name: 'KFC', logo: '🍗', category: 'food', cashback: '14%', coupons: 27, trending: true, autoTracked: true },
    { id: 18, name: 'Burger King', logo: '🍔', category: 'food', cashback: '13%', coupons: 22, autoTracked: true },
    { id: 19, name: 'Pizza Hut', logo: '🍕', category: 'food', cashback: '14%', coupons: 25, autoTracked: true },
    { id: 20, name: 'Subway', logo: '🥪', category: 'food', cashback: '11%', coupons: 18, autoTracked: true },
    { id: 21, name: 'Starbucks', logo: '☕', category: 'food', cashback: '10%', coupons: 15, trending: true, autoTracked: true },
    { id: 22, name: 'Chaayos', logo: '🍵', category: 'food', cashback: '12%', coupons: 12, autoTracked: true },
    { id: 23, name: 'Barista', logo: '☕', category: 'food', cashback: '11%', coupons: 14, autoTracked: true },
    { id: 24, name: 'Blue Tokai', logo: '☕', category: 'food', cashback: '15%', coupons: 9, autoTracked: true },
    { id: 25, name: 'Baskin Robbins', logo: '🍦', category: 'food', cashback: '10%', coupons: 16, autoTracked: true },

    // Fashion & Lifestyle - Retail Giants
    { id: 26, name: 'Westside', logo: '👗', category: 'fashion', cashback: '18%', coupons: 45, trending: true, autoTracked: true },
    { id: 27, name: 'Pantaloons', logo: '👔', category: 'fashion', cashback: '17%', coupons: 42, trending: true, autoTracked: true },
    { id: 28, name: 'Shoppers Stop', logo: '🛍️', category: 'fashion', cashback: '19%', coupons: 51, trending: true, autoTracked: true },
    { id: 29, name: 'Lifestyle', logo: '👗', category: 'fashion', cashback: '18%', coupons: 48, trending: true, autoTracked: true },
    { id: 30, name: 'Max Fashion', logo: '👔', category: 'fashion', cashback: '16%', coupons: 38, autoTracked: true },
    { id: 31, name: 'Fabindia', logo: '🧵', category: 'fashion', cashback: '15%', coupons: 28, autoTracked: true },
    { id: 32, name: 'Allen Solly', logo: '👔', category: 'fashion', cashback: '17%', coupons: 32, autoTracked: true },
    { id: 33, name: 'Van Heusen', logo: '👔', category: 'fashion', cashback: '17%', coupons: 34, autoTracked: true },
    { id: 34, name: 'Peter England', logo: '👔', category: 'fashion', cashback: '16%', coupons: 29, autoTracked: true },
    { id: 35, name: 'Levi\'s', logo: '👖', category: 'fashion', cashback: '18%', coupons: 36, trending: true, autoTracked: true },
    { id: 36, name: 'Puma', logo: '👟', category: 'fashion', cashback: '19%', coupons: 41, trending: true, autoTracked: true },
    { id: 37, name: 'Bata', logo: '👞', category: 'fashion', cashback: '14%', coupons: 27, autoTracked: true },

    // D2C Fashion Brands
    { id: 38, name: 'Snitch', logo: '👔', category: 'fashion', cashback: '22%', coupons: 24, trending: true, autoTracked: true },
    { id: 39, name: 'The Souled Store', logo: '👕', category: 'fashion', cashback: '20%', coupons: 28, trending: true, autoTracked: true },
    { id: 40, name: 'Bewakoof', logo: '👕', category: 'fashion', cashback: '21%', coupons: 31, trending: true, autoTracked: true },
    { id: 41, name: 'Campus Sutra', logo: '👔', category: 'fashion', cashback: '19%', coupons: 22, autoTracked: true },

    // Beauty & Wellness
    { id: 42, name: 'Sephora', logo: '💄', category: 'beauty', cashback: '16%', coupons: 38, trending: true, autoTracked: true },
    { id: 43, name: 'Mamaearth', logo: '🌿', category: 'beauty', cashback: '20%', coupons: 42, trending: true, autoTracked: true },
    { id: 44, name: 'Mcaffeine', logo: '☕', category: 'beauty', cashback: '19%', coupons: 28, autoTracked: true },
    { id: 45, name: 'Plum', logo: '🍑', category: 'beauty', cashback: '18%', coupons: 24, autoTracked: true },
    { id: 46, name: 'Minimalist', logo: '💧', category: 'beauty', cashback: '17%', coupons: 21, autoTracked: true },
    { id: 47, name: 'Sugar Cosmetics', logo: '💄', category: 'beauty', cashback: '19%', coupons: 32, trending: true, autoTracked: true },

    // Health & Pharmacy
    { id: 48, name: 'Apollo Pharmacy', logo: '💊', category: 'health', cashback: '12%', coupons: 45, trending: true, autoTracked: true },
    { id: 49, name: 'Netmeds', logo: '💊', category: 'health', cashback: '15%', coupons: 38, trending: true, autoTracked: true },
    { id: 50, name: 'PharmEasy', logo: '💊', category: 'health', cashback: '14%', coupons: 41, trending: true, autoTracked: true },
    { id: 51, name: '1mg', logo: '💊', category: 'health', cashback: '13%', coupons: 36, autoTracked: true },
    { id: 52, name: 'MedPlus', logo: '💊', category: 'health', cashback: '11%', coupons: 28, autoTracked: true },

    // Electronics
    { id: 53, name: 'Croma', logo: '📱', category: 'electronics', cashback: '10%', coupons: 52, trending: true, autoTracked: true },
    { id: 54, name: 'Reliance Digital', logo: '🖥️', category: 'electronics', cashback: '12%', coupons: 48, trending: true, autoTracked: true },
    { id: 55, name: 'Vijay Sales', logo: '📺', category: 'electronics', cashback: '11%', coupons: 42, autoTracked: true },
    { id: 56, name: 'Boat', logo: '🎧', category: 'electronics', cashback: '14%', coupons: 34, trending: true, autoTracked: true },
    { id: 57, name: 'Lenskart', logo: '👓', category: 'electronics', cashback: '18%', coupons: 38, trending: true, autoTracked: true },

    // Travel & Entertainment
    { id: 58, name: 'MakeMyTrip', logo: '✈️', category: 'travel', cashback: '25%', coupons: 89, trending: true, autoTracked: true },
    { id: 59, name: 'Cleartrip', logo: '🛫', category: 'travel', cashback: '20%', coupons: 67, autoTracked: true },
    { id: 60, name: 'Uber', logo: '🚗', category: 'travel', cashback: '12%', coupons: 42, trending: true, autoTracked: true },
    { id: 61, name: 'BookMyShow', logo: '🎬', category: 'travel', cashback: '15%', coupons: 54, trending: true, autoTracked: true },
    { id: 62, name: 'PVR INOX', logo: '🎬', category: 'travel', cashback: '18%', coupons: 38, trending: true, autoTracked: true },
    { id: 63, name: 'Cinepolis', logo: '🍿', category: 'travel', cashback: '16%', coupons: 32, autoTracked: true },

    // Home Services
    { id: 64, name: 'Urban Company', logo: '🔧', category: 'services', cashback: '14%', coupons: 28, trending: true, autoTracked: true },
    { id: 65, name: 'Rentomojo', logo: '🏠', category: 'services', cashback: '12%', coupons: 18, autoTracked: true },
    { id: 66, name: 'Furlenco', logo: '🛋️', category: 'services', cashback: '13%', coupons: 16, autoTracked: true },
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
              💸 2500+ brands • Auto-tracked cashback
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-center">
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2500+</p>
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
              placeholder="Search 2500+ stores..."
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
