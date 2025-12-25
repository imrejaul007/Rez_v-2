import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Utensils,
  Sparkles,
  ShoppingBag,
  Shirt,
  Heart,
  Dumbbell,
  GraduationCap,
  Plane,
  Home,
  Stethoscope,
  Briefcase,
  Store,
  ChevronRight,
  TrendingUp,
  Zap,
  Coins,
  Gift,
  Filter,
  X,
  Star,
  Clock
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import { useState } from 'react';
import BottomNavManager from '../components/layout/BottomNavManager';

const Categories = () => {
  const { rezCoins } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  const categories = [
    {
      id: 'food',
      name: 'Food & Dining',
      icon: Utensils,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/20',
      iconColor: 'text-emerald-400',
      description: 'Cafés · Restaurants · Delivery · Offers',
      path: '/food',
      cashback: 'Up to 20%',
      cashbackValue: 20,
      trending: true,
      stores: 1200,
      tags: ['lifestyle', 'daily'],
      avgSavings: '₹500/month',
      rating: 4.8,
      topBrands: ['Zomato', 'Swiggy', 'Dominos']
    },
    {
      id: 'beauty',
      name: 'Beauty & Wellness',
      icon: Sparkles,
      color: 'from-pink-500 to-purple-500',
      bgColor: 'bg-pink-500/20',
      iconColor: 'text-pink-400',
      description: 'Salons · Spas · Clinics · Products',
      path: '/beauty',
      cashback: 'Up to 18%',
      cashbackValue: 18,
      trending: true,
      stores: 850,
      tags: ['lifestyle', 'wellness'],
      avgSavings: '₹400/month',
      rating: 4.7,
      topBrands: ['Lakme', 'Urban Company', 'Naturals']
    },
    {
      id: 'fashion',
      name: 'Fashion',
      icon: Shirt,
      color: 'from-purple-500 to-blue-500',
      bgColor: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      description: 'Clothing · Accessories · Footwear',
      path: '/fashion',
      cashback: 'Up to 15%',
      cashbackValue: 15,
      trending: true,
      stores: 2100,
      tags: ['lifestyle', 'shopping'],
      avgSavings: '₹800/month',
      rating: 4.6,
      topBrands: ['Myntra', 'Ajio', 'H&M']
    },
    {
      id: 'grocery',
      name: 'Grocery & Essentials',
      icon: ShoppingBag,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/20',
      iconColor: 'text-green-400',
      description: 'Daily needs · Groceries · Household',
      path: '/grocery',
      cashback: 'Up to 12%',
      cashbackValue: 12,
      stores: 450,
      tags: ['essentials', 'daily'],
      avgSavings: '₹600/month',
      rating: 4.5,
      topBrands: ['BigBasket', 'Blinkit', 'JioMart']
    },
    {
      id: 'electronics',
      name: 'Electronics',
      icon: Store,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      description: 'Gadgets · Appliances · Tech',
      path: '/electronics',
      cashback: 'Up to 10%',
      cashbackValue: 10,
      stores: 680,
      tags: ['shopping', 'tech'],
      avgSavings: '₹1,200/purchase',
      rating: 4.7,
      topBrands: ['Croma', 'Vijay Sales', 'Reliance Digital']
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Stethoscope,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/20',
      iconColor: 'text-red-400',
      description: 'Doctors · Labs · Pharmacy · Health',
      path: '/healthcare',
      cashback: 'Up to 15%',
      cashbackValue: 15,
      stores: 320,
      tags: ['essentials', 'wellness'],
      avgSavings: '₹300/month',
      rating: 4.8,
      topBrands: ['Apollo', 'Practo', 'PharmEasy']
    },
    {
      id: 'fitness',
      name: 'Fitness & Sports',
      icon: Dumbbell,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
      description: 'Gyms · Sports · Wellness',
      path: '/fitness',
      cashback: 'Up to 20%',
      cashbackValue: 20,
      stores: 180,
      tags: ['wellness', 'lifestyle'],
      avgSavings: '₹450/month',
      rating: 4.6,
      topBrands: ['Cult.fit', 'Gold Gym', 'Decathlon']
    },
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/20',
      iconColor: 'text-indigo-400',
      description: 'Courses · Coaching · Learning',
      path: '/education',
      cashback: 'Up to 12%',
      cashbackValue: 12,
      stores: 250,
      tags: ['learning', 'essentials'],
      avgSavings: '₹700/course',
      rating: 4.7,
      topBrands: ['Unacademy', 'Byju\'s', 'Coursera']
    },
    {
      id: 'travel',
      name: 'Travel & Experiences',
      icon: Plane,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/20',
      iconColor: 'text-cyan-400',
      description: 'Hotels · Flights · Activities',
      path: '/travel',
      cashback: 'Up to 8%',
      cashbackValue: 8,
      trending: true,
      stores: 520,
      tags: ['lifestyle', 'experiences'],
      avgSavings: '₹1,500/trip',
      rating: 4.5,
      topBrands: ['MakeMyTrip', 'Airbnb', 'Booking.com']
    },
    {
      id: 'home-services',
      name: 'Home Services',
      icon: Home,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/20',
      iconColor: 'text-yellow-400',
      description: 'Repairs · Cleaning · Maintenance',
      path: '/home-services',
      cashback: 'Up to 15%',
      cashbackValue: 15,
      stores: 340,
      tags: ['essentials', 'services'],
      avgSavings: '₹350/service',
      rating: 4.4,
      topBrands: ['Urban Company', 'Sulekha', 'Housejoy']
    },
    {
      id: 'financial',
      name: 'Financial Services',
      icon: Briefcase,
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-500/20',
      iconColor: 'text-teal-400',
      description: 'Insurance · Loans · Investments',
      path: '/financial',
      cashback: 'Up to 5%',
      cashbackValue: 5,
      stores: 120,
      tags: ['essentials', 'financial'],
      avgSavings: '₹200/transaction',
      rating: 4.3,
      topBrands: ['Paytm Money', 'PolicyBazaar', 'Zerodha']
    },
    {
      id: 'events',
      name: 'Events & Entertainment',
      icon: Heart,
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-500/20',
      iconColor: 'text-rose-400',
      description: 'Movies · Concerts · Shows',
      path: '/events',
      cashback: 'Up to 10%',
      cashbackValue: 10,
      stores: 280,
      tags: ['lifestyle', 'experiences'],
      avgSavings: '₹250/booking',
      rating: 4.6,
      topBrands: ['BookMyShow', 'Paytm Insider', 'Townscript']
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', label: 'All', icon: Store },
    { id: 'lifestyle', label: 'Lifestyle', icon: Sparkles },
    { id: 'essentials', label: 'Essentials', icon: ShoppingBag },
    { id: 'wellness', label: 'Wellness', icon: Heart }
  ];

  // Apply filters and search
  let filteredCategories = categories.filter(cat => {
    const matchesSearch = cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = selectedFilter === 'all' || cat.tags?.includes(selectedFilter);

    return matchesSearch && matchesFilter;
  });

  // Apply sorting
  if (sortBy === 'trending') {
    filteredCategories = filteredCategories.sort((a, b) => {
      if (a.trending && !b.trending) return -1;
      if (!a.trending && b.trending) return 1;
      return b.stores - a.stores;
    });
  } else if (sortBy === 'cashback') {
    filteredCategories = filteredCategories.sort((a, b) => b.cashbackValue - a.cashbackValue);
  } else if (sortBy === 'popular') {
    filteredCategories = filteredCategories.sort((a, b) => b.stores - a.stores);
  } else if (sortBy === 'rating') {
    filteredCategories = filteredCategories.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  const trendingCategories = categories.filter(cat => cat.trending);

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* Header */}
      <div className="sticky top-0 z-40 glass border-b border-rez-gray-200 dark:border-white/10">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <Link to="/" className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors">
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </Link>
            <div className="flex-1">
              <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">All Categories</h1>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Discover, Save & Earn</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 dark:bg-amber-500/20">
              <Coins className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span className="text-body-sm font-medium text-amber-500 dark:text-amber-400">{rezCoins}</span>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-500 dark:text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search categories..."
              className="w-full pl-12 pr-4 py-3 rounded-rez-md bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white placeholder-rez-gray-500 dark:placeholder-gray-500 border border-rez-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full bg-rez-gray-100 dark:bg-white/10 hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
            {filterOptions.map((filter) => {
              const FilterIcon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 transition-all ${
                    selectedFilter === filter.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 hover:bg-rez-gray-200 dark:hover:bg-white/20'
                  }`}
                >
                  <FilterIcon className="w-3.5 h-3.5" />
                  <span className="text-caption font-medium">{filter.label}</span>
                </button>
              );
            })}
            <div className="w-px h-4 bg-rez-gray-200 dark:bg-white/10 mx-1" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 rounded-full bg-rez-gray-100 dark:bg-white/10 text-rez-gray-700 dark:text-gray-300 text-caption font-medium border border-rez-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500 shrink-0"
            >
              <option value="trending">Trending</option>
              <option value="cashback">Best Cashback</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-rez-md bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 dark:from-emerald-500/20 dark:to-emerald-500/5 border border-emerald-500/20 dark:border-emerald-500/20">
            <p className="text-h3 font-poppins text-emerald-600 dark:text-emerald-400">{categories.length}</p>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-0.5">Categories</p>
          </div>
          <div className="p-3 rounded-rez-md bg-gradient-to-br from-amber-500/20 to-amber-500/5 dark:from-amber-500/20 dark:to-amber-500/5 border border-amber-500/20 dark:border-amber-500/20">
            <p className="text-h3 font-poppins text-amber-500 dark:text-amber-400">{categories.reduce((sum, cat) => sum + cat.stores, 0).toLocaleString()}</p>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-0.5">Total Stores</p>
          </div>
          <div className="p-3 rounded-rez-md bg-gradient-to-br from-purple-500/20 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/5 border border-purple-500/20 dark:border-purple-500/20">
            <p className="text-h3 font-poppins text-purple-500 dark:text-purple-400">20%</p>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-0.5">Max Cashback</p>
          </div>
        </div>
      </div>

      {/* Active Filter Badge */}
      {(selectedFilter !== 'all' || searchQuery) && (
        <div className="px-4 pb-2">
          <div className="flex items-center gap-2">
            <span className="text-caption text-rez-gray-500 dark:text-gray-500">Active filters:</span>
            {selectedFilter !== 'all' && (
              <button
                onClick={() => setSelectedFilter('all')}
                className="flex items-center gap-1 px-2 py-1 rounded-rez-sm bg-emerald-500/20 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-caption"
              >
                <span>{selectedFilter}</span>
                <X className="w-3 h-3" />
              </button>
            )}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="flex items-center gap-1 px-2 py-1 rounded-rez-sm bg-blue-500/20 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-caption"
              >
                <span>"{searchQuery}"</span>
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Trending Categories */}
      {!searchQuery && selectedFilter === 'all' && trendingCategories.length > 0 && (
        <div className="px-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-500 dark:text-amber-400" />
              <h2 className="text-h4 font-poppins text-rez-navy dark:text-white">Trending Now</h2>
            </div>
            <span className="text-caption text-rez-gray-500 dark:text-gray-500">{trendingCategories.length} trending</span>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {trendingCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.id}
                  to={category.path}
                  className="min-w-[150px] p-4 rounded-rez-lg bg-rez-gray-50 dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:border-amber-500/30 dark:hover:border-amber-500/30 shrink-0 transition-all hover:scale-105 shadow-rez-card"
                >
                  <div className={`w-12 h-12 rounded-rez-md ${category.bgColor} flex items-center justify-center mb-3 relative`}>
                    <Icon className={`w-6 h-6 ${category.iconColor}`} />
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-500/20 dark:bg-orange-500/20 flex items-center justify-center">
                      <span className="text-[10px]">🔥</span>
                    </div>
                  </div>
                  <p className="text-body-sm font-semibold text-rez-navy dark:text-white mb-1">{category.name}</p>
                  <div className="flex items-center gap-1 mb-2">
                    <Zap className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    <p className="text-caption text-emerald-600 dark:text-emerald-400">{category.cashback}</p>
                  </div>
                  {category.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500 dark:text-amber-400 fill-amber-500 dark:fill-amber-400" />
                      <span className="text-caption text-amber-500 dark:text-amber-400">{category.rating}</span>
                      <span className="text-caption text-rez-gray-500 dark:text-gray-500">• {category.stores}+</span>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* All Categories Grid */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-h4 font-poppins text-rez-navy dark:text-white">
            {searchQuery ? `Results for "${searchQuery}"` : 'All Categories'}
          </h2>
          <span className="text-caption text-rez-gray-500 dark:text-gray-500">{filteredCategories.length} categories</span>
        </div>

        <div className="space-y-3">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={category.path}
                className="block p-4 rounded-rez-lg bg-rez-gray-50 dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all hover:scale-[1.01] shadow-rez-card"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-rez-md ${category.bgColor} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-7 h-7 ${category.iconColor}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-body font-semibold text-rez-navy dark:text-white">{category.name}</h3>
                      {category.trending && (
                        <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-[10px] font-bold text-orange-400 uppercase">
                          Hot
                        </span>
                      )}
                      {category.rating && (
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <span className="text-xs font-medium text-amber-400">{category.rating}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{category.description}</p>

                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3 text-emerald-400" />
                        <span className="text-xs font-medium text-emerald-400">{category.cashback}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Store className="w-3 h-3 text-rez-gray-600 dark:text-gray-500" />
                        <span className="text-xs text-rez-gray-600 dark:text-gray-500">{category.stores} stores</span>
                      </div>
                      {category.avgSavings && (
                        <div className="flex items-center gap-1">
                          <Coins className="w-3 h-3 text-amber-400" />
                          <span className="text-xs text-amber-400">{category.avgSavings}</span>
                        </div>
                      )}
                    </div>

                    {category.topBrands && (
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {category.topBrands.slice(0, 3).map((brand, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-rez-gray-50 dark:bg-white/5 text-[10px] text-rez-gray-600 dark:text-gray-500"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-500 shrink-0 mt-2" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Empty State */}
      {filteredCategories.length === 0 && (
        <div className="px-4 py-12 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
            <Search className="w-10 h-10 text-rez-gray-600 dark:text-gray-500" />
          </div>
          <p className="text-rez-navy dark:text-white font-semibold mb-2 text-lg">No categories found</p>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-4">Try adjusting your filters or search term</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFilter('all');
            }}
            className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/30 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Quick Insights */}
      {filteredCategories.length > 0 && (
        <div className="px-4 mt-8 pb-4">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2C2C2E] to-[#1C1C1E] border border-rez-gray-200 dark:border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/30 to-purple-500/30 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-rez-navy dark:text-white">Quick Insights</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Based on {filteredCategories.length} categories</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-rez-gray-700 dark:text-gray-300">Best Cashback</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-emerald-400">Food & Fitness</p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-500">Up to 20%</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
                <div className="flex items-center gap-2">
                  <Store className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-rez-gray-700 dark:text-gray-300">Most Stores</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-blue-400">Fashion</p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-500">2,100+ partners</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400" />
                  <span className="text-sm text-rez-gray-700 dark:text-gray-300">Top Rated</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-amber-400">Food & Healthcare</p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-500">4.8 ⭐</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Info */}
      <div className="px-4 mt-4 pb-8">
        <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-purple-500/10 border border-emerald-500/20">
          <h3 className="font-semibold text-rez-navy dark:text-white mb-4 text-center">
            Why shop across categories on ReZ?
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
              <span className="text-2xl">💰</span>
              <div>
                <p className="text-sm font-medium text-rez-navy dark:text-white">Cashback</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">On every purchase</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
              <span className="text-2xl">🪙</span>
              <div>
                <p className="text-sm font-medium text-rez-navy dark:text-white">ReZ Coins</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Earn & redeem</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-sm font-medium text-rez-navy dark:text-white">Loyalty</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Brand rewards</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="text-sm font-medium text-rez-navy dark:text-white">Best Deals</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Exclusive offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-8" />

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default Categories;
