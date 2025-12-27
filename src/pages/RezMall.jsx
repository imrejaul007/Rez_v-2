import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShoppingCart, Sparkles, TrendingUp, Star,
  ChevronRight, Coins, Zap, Shield, Heart
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import Header from '../components/layout/Header';
import BottomNavManager from '../components/layout/BottomNavManager';
import ModeSwitcher from '../components/home/ModeSwitcher';

const RezMall = () => {
  const { rezCoins } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');

  // Curated featured brands (quality over quantity)
  const featuredBrands = [
    {
      id: 1,
      name: 'Zara',
      logo: 'https://logo.clearbit.com/zara.com',
      category: 'Fashion',
      cashback: '₹500 ReZ Coins',
      badge: '✅ Verified',
      rating: 4.8,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 2,
      name: 'Nykaa',
      logo: 'https://logo.clearbit.com/nykaa.com',
      category: 'Beauty',
      cashback: '₹300 ReZ Coins',
      badge: '⭐ ReZ Preferred',
      rating: 4.9,
      color: 'from-pink-500/20 to-rose-500/20'
    },
    {
      id: 3,
      name: 'Sony',
      logo: 'https://logo.clearbit.com/sony.com',
      category: 'Electronics',
      cashback: '₹1,200 ReZ Coins',
      badge: '✅ Verified',
      rating: 4.7,
      color: 'from-purple-500/20 to-violet-500/20'
    },
    {
      id: 4,
      name: 'Licious',
      logo: 'https://logo.clearbit.com/licious.in',
      category: 'Food',
      cashback: '₹250 ReZ Coins',
      badge: '👑 Premium',
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
    { id: 'fashion', name: 'Fashion', icon: '👗', cashback: 'Earn up to 35% ReZ Coins', stores: 120 },
    { id: 'beauty', name: 'Beauty', icon: '💅', cashback: 'Earn up to 25% ReZ Coins', stores: 85 },
    { id: 'electronics', name: 'Electronics', icon: '📱', cashback: 'Earn up to 15% ReZ Coins', stores: 95 },
    { id: 'home', name: 'Home & Lifestyle', icon: '🏠', cashback: 'Earn up to 20% ReZ Coins', stores: 70 },
    { id: 'wellness', name: 'Wellness', icon: '🧘', cashback: 'Earn up to 30% ReZ Coins', stores: 55 },
    { id: 'luxury', name: 'Luxury', icon: '💎', cashback: 'Earn up to 40% ReZ Coins', stores: 25 }
  ];

  const exclusiveOffers = [
    {
      id: 1,
      brand: 'H&M',
      title: 'Flat 40% off + Extra ReZ Coins',
      coins: '500 ReZ Coins',
      validTill: '2 days',
      image: '🎽',
      badge: '🟢 Mall Exclusive'
    },
    {
      id: 2,
      brand: 'Myntra',
      title: 'Weekend Fashion Sale',
      coins: '750 ReZ Coins',
      validTill: '3 days',
      image: '👠',
      badge: '🟢 Mall Exclusive'
    },
    {
      id: 3,
      brand: 'Tanishq',
      title: 'Premium Jewelry Rewards',
      coins: '2000 ReZ Coins',
      validTill: '5 days',
      image: '💍',
      badge: '🟢 Mall Exclusive'
    }
  ];

  const newArrivals = [
    { id: 1, name: 'Urban Company', category: 'Services', badge: '🆕 New on ReZ', logo: 'https://logo.clearbit.com/urbancompany.com', bonus: 'Extra 100 Coins' },
    { id: 2, name: 'Boat', category: 'Electronics', badge: '🆕 New on ReZ', logo: 'https://logo.clearbit.com/boat-lifestyle.com', bonus: 'Early-bird Coins' },
    { id: 3, name: 'Mamaearth', category: 'Wellness', badge: '🆕 New on ReZ', logo: 'https://logo.clearbit.com/mamaearth.in', bonus: 'Extra 150 Coins' },
    { id: 4, name: 'Pepperfry', category: 'Home', badge: '🆕 New on ReZ', logo: 'https://logo.clearbit.com/pepperfry.com', bonus: 'Double Coins' }
  ];

  const topRated = [
    { id: 1, name: 'Zara', rating: 4.9, orders: '50K+', coins: 'Earn 10% ReZ Coins' },
    { id: 2, name: 'Nykaa', rating: 4.8, orders: '45K+', coins: 'Earn 12% ReZ Coins' },
    { id: 3, name: 'Sony', rating: 4.7, orders: '40K+', coins: 'Earn 15% ReZ Coins' },
    { id: 4, name: 'Licious', rating: 4.6, orders: '35K+', coins: 'Earn 8% ReZ Coins' }
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
              <div className={`w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center p-2 mb-3 mx-auto overflow-hidden`}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-2xl">🏪</span>';
                  }}
                />
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
                {category.cashback}
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
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    {offer.badge}
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
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center p-2 mb-3 overflow-hidden">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-xl">🏪</span>';
                  }}
                />
              </div>
              <h3 className="font-semibold text-sm text-rez-navy dark:text-white mb-1">
                {brand.name}
              </h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">
                {brand.category}
              </p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                {brand.bonus}
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
                    {brand.coins}
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
      <BottomNavManager />
    </div>
  );
};

export default RezMall;
