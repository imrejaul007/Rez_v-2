import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShoppingCart, Sparkles, TrendingUp, Star,
  ChevronRight, Coins, Zap, Shield, Heart
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import Header from '../components/layout/Header';
import BottomNav from '../components/layout/BottomNav';
import ModeSwitcher from '../components/home/ModeSwitcher';

const RezMall = () => {
  const { rezCoins } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - will be replaced with actual data
  const featuredBrands = [
    {
      id: 1,
      name: 'Zara',
      logo: '👔',
      category: 'Fashion',
      cashback: '₹500',
      badge: 'Mall Exclusive',
      rating: 4.8,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 2,
      name: 'Nykaa',
      logo: '💄',
      category: 'Beauty',
      cashback: '₹300',
      badge: 'Premium Partner',
      rating: 4.9,
      color: 'from-pink-500/20 to-rose-500/20'
    },
    {
      id: 3,
      name: 'Sony',
      logo: '📱',
      category: 'Electronics',
      cashback: '₹1,200',
      badge: 'Trusted Brand',
      rating: 4.7,
      color: 'from-purple-500/20 to-violet-500/20'
    },
    {
      id: 4,
      name: 'Licious',
      logo: '🍖',
      category: 'Food',
      cashback: '₹250',
      badge: 'Top Rated',
      rating: 4.6,
      color: 'from-red-500/20 to-orange-500/20'
    }
  ];

  const collections = [
    { id: 1, name: 'Daily Essentials', icon: '🛒', count: 45, color: 'emerald' },
    { id: 2, name: 'Trending Now', icon: '🔥', count: 28, color: 'orange' },
    { id: 3, name: 'Premium Picks', icon: '💎', count: 32, color: 'purple' },
    { id: 4, name: 'Made for You', icon: '✨', count: 18, color: 'blue' },
    { id: 5, name: 'Festive Specials', icon: '🎉', count: 24, color: 'pink' }
  ];

  const categories = [
    { id: 'fashion', name: 'Fashion', icon: '👗', cashback: 'Up to 35%', stores: 120 },
    { id: 'beauty', name: 'Beauty', icon: '💅', cashback: 'Up to 25%', stores: 85 },
    { id: 'electronics', name: 'Electronics', icon: '📱', cashback: 'Up to 15%', stores: 95 },
    { id: 'home', name: 'Home & Living', icon: '🏠', cashback: 'Up to 20%', stores: 70 },
    { id: 'wellness', name: 'Wellness', icon: '🧘', cashback: 'Up to 30%', stores: 55 },
    { id: 'lifestyle', name: 'Lifestyle', icon: '🎨', cashback: 'Up to 28%', stores: 65 }
  ];

  const exclusiveOffers = [
    {
      id: 1,
      brand: 'H&M',
      title: 'Flat 40% off + Extra Coins',
      coins: 500,
      validTill: '2 days',
      image: '🎽'
    },
    {
      id: 2,
      brand: 'Myntra',
      title: 'Weekend Fashion Sale',
      coins: 750,
      validTill: '3 days',
      image: '👠'
    },
    {
      id: 3,
      brand: 'Tanishq',
      title: 'Gold Coins on Jewelry',
      coins: 2000,
      validTill: '5 days',
      image: '💍'
    }
  ];

  const newArrivals = [
    { id: 1, name: 'Urban Company', category: 'Services', badge: 'New', logo: '🔧' },
    { id: 2, name: 'Boat', category: 'Electronics', badge: 'New', logo: '🎧' },
    { id: 3, name: 'Mamaearth', category: 'Wellness', badge: 'New', logo: '🌿' },
    { id: 4, name: 'Pepperfry', category: 'Home', badge: 'New', logo: '🪑' }
  ];

  const topRated = [
    { id: 1, name: 'Amazon', rating: 4.9, orders: '50K+', cashback: '10%' },
    { id: 2, name: 'Flipkart', rating: 4.8, orders: '45K+', cashback: '12%' },
    { id: 3, name: 'Swiggy', rating: 4.7, orders: '40K+', cashback: '15%' },
    { id: 4, name: 'BookMyShow', rating: 4.6, orders: '35K+', cashback: '8%' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      {/* Header */}
      <Header />

      {/* Mode Switcher */}
      <ModeSwitcher />

      {/* Hero Banner */}
      <div className="px-4 py-6">
        <div className="relative p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white/90">Premium Shopping</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Extra ReZ Coins on Mall Brands
            </h2>
            <p className="text-white/90 text-sm mb-4">
              Shop from trusted brands and earn 2x rewards
            </p>
            <button className="px-6 py-2.5 rounded-xl bg-white text-blue-600 font-semibold hover:bg-white/90 transition-colors">
              Shop Now
            </button>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Featured Brands */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-rez-navy dark:text-white">Featured Brands</h2>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Top trusted partners</p>
          </div>
          <Link to="/mall/brands" className="text-sm font-medium text-blue-500">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {featuredBrands.map((brand) => (
            <Link
              key={brand.id}
              to={`/mall/brand/${brand.id}`}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all active:scale-98"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-3xl mb-3 mx-auto`}>
                {brand.logo}
              </div>
              <h3 className="font-semibold text-rez-navy dark:text-white text-center mb-1">
                {brand.name}
              </h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 text-center mb-2">
                {brand.category}
              </p>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-xs font-medium text-rez-gray-700 dark:text-gray-300">
                  {brand.rating}
                </span>
              </div>
              <div className="text-center">
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  Earn {brand.cashback}
                </span>
              </div>
              {brand.badge && (
                <div className="mt-2 text-center">
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-[10px] font-bold text-blue-600 dark:text-blue-400">
                    {brand.badge}
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Curated Collections */}
      <div className="px-4 mb-8">
        <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-4">
          Curated Collections
        </h2>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/mall/collection/${collection.id}`}
              className="flex-shrink-0 w-40 p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
            >
              <span className="text-3xl mb-2 block">{collection.icon}</span>
              <h3 className="font-semibold text-sm text-rez-navy dark:text-white mb-1">
                {collection.name}
              </h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                {collection.count} brands
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Mall Categories */}
      <div className="px-4 mb-8">
        <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-4">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/mall/category/${category.id}`}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
            >
              <span className="text-3xl mb-2 block">{category.icon}</span>
              <h3 className="font-semibold text-rez-navy dark:text-white mb-1">
                {category.name}
              </h3>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mb-1">
                {category.cashback} cashback
              </p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                {category.stores} stores
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Exclusive Mall Offers */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-rez-navy dark:text-white">Exclusive Offers</h2>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Only in ReZ Mall</p>
          </div>
          <Link to="/mall/offers" className="text-sm font-medium text-blue-500">
            See All
          </Link>
        </div>
        <div className="space-y-3">
          {exclusiveOffers.map((offer) => (
            <Link
              key={offer.id}
              to={`/mall/offer/${offer.id}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-amber-500 dark:hover:border-amber-500 transition-all"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-3xl flex-shrink-0">
                {offer.image}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-rez-navy dark:text-white">
                    {offer.brand}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                    Mall Exclusive
                  </span>
                </div>
                <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-2">
                  {offer.title}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Coins className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-bold text-amber-600 dark:text-amber-400">
                      {offer.coins}
                    </span>
                  </div>
                  <span className="text-xs text-rez-gray-600 dark:text-gray-400">
                    Valid for {offer.validTill}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-rez-gray-400 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <div className="px-4 mb-8">
        <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-4">
          New Arrivals
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {newArrivals.map((brand) => (
            <Link
              key={brand.id}
              to={`/mall/brand/${brand.id}`}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all relative"
            >
              <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                {brand.badge}
              </span>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center text-2xl mb-3">
                {brand.logo}
              </div>
              <h3 className="font-semibold text-sm text-rez-navy dark:text-white mb-1">
                {brand.name}
              </h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                {brand.category}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Top Rated Brands */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-rez-navy dark:text-white">Top Rated</h2>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Most trusted by users</p>
          </div>
        </div>
        <div className="space-y-3">
          {topRated.map((brand) => (
            <Link
              key={brand.id}
              to={`/mall/brand/${brand.id}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-rez-navy dark:text-white mb-1">
                  {brand.name}
                </h3>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-medium text-rez-gray-700 dark:text-gray-300">
                      {brand.rating}
                    </span>
                  </div>
                  <span className="text-xs text-rez-gray-600 dark:text-gray-400">
                    {brand.orders} orders
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {brand.cashback} back
                  </span>
                </div>
              </div>
              <Shield className="w-5 h-5 text-blue-500" />
            </Link>
          ))}
        </div>
      </div>

      {/* Trust Banner */}
      <div className="px-4 mb-8">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-emerald-500" />
            <h3 className="font-bold text-rez-navy dark:text-white">100% Trusted</h3>
          </div>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-2">
            All Mall brands are verified and curated for quality
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              ✓ Verified Brands
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              ✓ Secure Payments
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              ✓ Easy Returns
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default RezMall;
