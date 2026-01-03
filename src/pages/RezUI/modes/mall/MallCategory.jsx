import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal, Star, Zap, ChevronDown, TrendingUp, Award } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNavManager from '../../components/layout/BottomNavManager';

const MallCategory = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Mock category data - in real app, fetch based on categoryId
  const categories = {
    fashion: {
      name: 'Fashion',
      icon: '👗',
      description: 'Curated fashion from India\'s top brands',
      stores: 120,
      avgCoins: '35%',
      color: 'from-purple-500 to-pink-500'
    },
    beauty: {
      name: 'Beauty & Personal Care',
      icon: '💄',
      description: 'Authentic beauty products with rewards',
      stores: 85,
      avgCoins: '30%',
      color: 'from-pink-500 to-rose-500'
    },
    electronics: {
      name: 'Electronics',
      icon: '📱',
      description: 'Latest gadgets with premium rewards',
      stores: 65,
      avgCoins: '25%',
      color: 'from-blue-500 to-cyan-500'
    },
    home: {
      name: 'Home & Living',
      icon: '🏠',
      description: 'Transform your space, earn rewards',
      stores: 95,
      avgCoins: '28%',
      color: 'from-amber-500 to-orange-500'
    },
    grocery: {
      name: 'Grocery & Gourmet',
      icon: '🛒',
      description: 'Daily essentials with smart rewards',
      stores: 45,
      avgCoins: '20%',
      color: 'from-green-500 to-emerald-500'
    },
    luxury: {
      name: 'Luxury',
      icon: '💎',
      description: 'Premium brands, exclusive rewards',
      stores: 25,
      avgCoins: '40%',
      color: 'from-violet-500 to-purple-500'
    }
  };

  const category = categories[categoryId] || categories.fashion;

  // Mock brands data
  const brands = [
    {
      id: 1,
      name: 'Nykaa',
      logo: '💄',
      category: 'Beauty',
      rating: 4.6,
      reviews: 2847,
      coins: 'Earn up to 30% ReZ Coins',
      badge: '✅ Verified',
      trending: true,
      featured: true
    },
    {
      id: 2,
      name: 'Zara',
      logo: '👗',
      category: 'Fashion',
      rating: 4.5,
      reviews: 1923,
      coins: 'Earn up to 35% ReZ Coins',
      badge: '⭐ ReZ Preferred',
      trending: true,
      featured: true
    },
    {
      id: 3,
      name: 'Myntra',
      logo: '👔',
      category: 'Fashion',
      rating: 4.4,
      reviews: 5632,
      coins: 'Earn up to 28% ReZ Coins',
      badge: '✅ Verified',
      trending: false,
      featured: false
    },
    {
      id: 4,
      name: 'Croma',
      logo: '📱',
      category: 'Electronics',
      rating: 4.3,
      reviews: 1456,
      coins: 'Earn up to 25% ReZ Coins',
      badge: '✅ Verified',
      trending: false,
      featured: false
    },
    {
      id: 5,
      name: 'Lifestyle',
      logo: '🛍️',
      category: 'Fashion',
      rating: 4.5,
      reviews: 3241,
      coins: 'Earn up to 32% ReZ Coins',
      badge: '⭐ ReZ Preferred',
      trending: true,
      featured: false
    },
    {
      id: 6,
      name: 'H&M',
      logo: '👕',
      category: 'Fashion',
      rating: 4.4,
      reviews: 2156,
      coins: 'Earn up to 30% ReZ Coins',
      badge: '✅ Verified',
      trending: false,
      featured: false
    },
    {
      id: 7,
      name: 'Forest Essentials',
      logo: '🌿',
      category: 'Beauty',
      rating: 4.7,
      reviews: 892,
      coins: 'Earn up to 40% ReZ Coins',
      badge: '👑 Premium',
      trending: false,
      featured: true
    },
    {
      id: 8,
      name: 'Sony Center',
      logo: '🎧',
      category: 'Electronics',
      rating: 4.6,
      reviews: 1678,
      coins: 'Earn up to 28% ReZ Coins',
      badge: '⭐ ReZ Preferred',
      trending: false,
      featured: false
    },
    {
      id: 9,
      name: 'Fabindia',
      logo: '🧵',
      category: 'Fashion',
      rating: 4.5,
      reviews: 1234,
      coins: 'Earn up to 35% ReZ Coins',
      badge: '✅ Verified',
      trending: false,
      featured: false
    },
    {
      id: 10,
      name: 'Urban Ladder',
      logo: '🪑',
      category: 'Home',
      rating: 4.4,
      reviews: 2456,
      coins: 'Earn up to 30% ReZ Coins',
      badge: '✅ Verified',
      trending: false,
      featured: false
    },
    {
      id: 11,
      name: 'MAC Cosmetics',
      logo: '💋',
      category: 'Beauty',
      rating: 4.8,
      reviews: 1567,
      coins: 'Earn up to 40% ReZ Coins',
      badge: '👑 Premium',
      trending: true,
      featured: true
    },
    {
      id: 12,
      name: 'Westside',
      logo: '👗',
      category: 'Fashion',
      rating: 4.3,
      reviews: 2890,
      coins: 'Earn up to 28% ReZ Coins',
      badge: '✅ Verified',
      trending: false,
      featured: false
    }
  ];

  const sortOptions = [
    { id: 'featured', label: 'Featured', icon: Award },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'coins-high', label: 'Highest ReZ Coins', icon: Zap },
    { id: 'rating', label: 'Top Rated', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Category Header */}
      <div className="px-4 py-4">
        <div className={`p-6 rounded-3xl bg-gradient-to-br ${category.color} text-white shadow-xl`}>
          {/* Back Button */}
          <button
            onClick={() => navigate('/mall')}
            className="mb-4 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          {/* Category Info */}
          <div className="flex items-start gap-4">
            <div className="text-5xl">{category.icon}</div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{category.name}</h1>
              <p className="text-white/90 text-sm mb-4">{category.description}</p>

              {/* Stats */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-white/80 text-sm">{category.stores} Stores</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm">Up to {category.avgCoins} ReZ Coins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sort & Filter Bar */}
      <div className="px-4 mb-4">
        <div className="flex gap-2">
          {/* Sort Dropdown */}
          <div className="flex-1 relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-rez-navy dark:text-white text-sm font-medium appearance-none cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-600 dark:text-gray-400 pointer-events-none" />
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>
      </div>

      {/* Filter Sheet */}
      {showFilters && (
        <div className="px-4 mb-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <h3 className="font-bold text-rez-navy dark:text-white mb-4">Filters</h3>

            {/* Brand Type */}
            <div className="mb-4">
              <p className="text-sm font-medium text-rez-gray-700 dark:text-gray-300 mb-2">Brand Type</p>
              <div className="flex flex-wrap gap-2">
                {['All', '✅ Verified', '⭐ ReZ Preferred', '👑 Premium'].map((type) => (
                  <button
                    key={type}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-rez-gray-100 dark:bg-dark-700 text-rez-navy dark:text-white hover:bg-emerald-500/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* ReZ Coins Range */}
            <div className="mb-4">
              <p className="text-sm font-medium text-rez-gray-700 dark:text-gray-300 mb-2">ReZ Coins</p>
              <div className="flex flex-wrap gap-2">
                {['All', '20%+', '30%+', '40%+'].map((range) => (
                  <button
                    key={range}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-rez-gray-100 dark:bg-dark-700 text-rez-navy dark:text-white hover:bg-emerald-500/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <p className="text-sm font-medium text-rez-gray-700 dark:text-gray-300 mb-2">Rating</p>
              <div className="flex flex-wrap gap-2">
                {['All', '4.5+', '4.0+', '3.5+'].map((rating) => (
                  <button
                    key={rating}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-rez-gray-100 dark:bg-dark-700 text-rez-navy dark:text-white hover:bg-emerald-500/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {rating}
                  </button>
                ))}
              </div>
            </div>

            {/* Apply Filters */}
            <button className="w-full mt-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors">
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Brands Grid */}
      <div className="px-4 mb-6">
        <div className="grid gap-3">
          {brands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => navigate(`/mall/brand/${brand.id}`)}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center text-3xl flex-shrink-0">
                  {brand.logo}
                </div>

                {/* Brand Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-rez-navy dark:text-white mb-0.5 truncate">{brand.name}</h3>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">{brand.category}</p>
                    </div>
                    {brand.trending && (
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/10 ml-2">
                        <TrendingUp className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                        <span className="text-xs font-medium text-orange-600 dark:text-orange-400">Hot</span>
                      </div>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span className="text-sm font-semibold text-rez-navy dark:text-white">{brand.rating}</span>
                    </div>
                    <span className="text-xs text-rez-gray-500 dark:text-gray-500">({brand.reviews.toLocaleString()})</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      {brand.badge}
                    </span>
                  </div>

                  {/* Coins */}
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{brand.coins}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <button className="w-full mt-4 py-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-rez-navy dark:text-white font-medium hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors">
          Load More Brands
        </button>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default MallCategory;
