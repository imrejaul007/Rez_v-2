import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ExternalLink, TrendingUp, Gift, Tag, Clock,
  Percent, ShoppingBag, Smartphone, Plane, Home as HomeIcon,
  Utensils, Package, Coins, ChevronRight, Info, Star, Zap
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import Header from '../components/layout/Header';
import BottomNav from '../components/layout/BottomNav';
import ModeSwitcher from '../components/home/ModeSwitcher';

const CashStore = () => {
  const { rezCoins } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Top online brands data
  const topBrands = [
    {
      id: 1,
      name: 'Amazon',
      logo: '📦',
      category: 'Shopping',
      cashback: 'Up to 12%',
      coupons: 145,
      trending: true,
      color: 'from-orange-500/20 to-amber-500/20'
    },
    {
      id: 2,
      name: 'Flipkart',
      logo: '🛒',
      category: 'Shopping',
      cashback: 'Up to 15%',
      coupons: 98,
      trending: true,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 3,
      name: 'Myntra',
      logo: '👗',
      category: 'Fashion',
      cashback: 'Up to 20%',
      coupons: 67,
      color: 'from-pink-500/20 to-rose-500/20'
    },
    {
      id: 4,
      name: 'Swiggy',
      logo: '🍔',
      category: 'Food',
      cashback: 'Up to 10%',
      coupons: 52,
      color: 'from-red-500/20 to-orange-500/20'
    },
    {
      id: 5,
      name: 'Zomato',
      logo: '🍕',
      category: 'Food',
      cashback: 'Up to 8%',
      coupons: 48,
      color: 'from-red-600/20 to-pink-500/20'
    },
    {
      id: 6,
      name: 'Nykaa',
      logo: '💄',
      category: 'Beauty',
      cashback: 'Up to 18%',
      coupons: 73,
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 7,
      name: 'BookMyShow',
      logo: '🎬',
      category: 'Entertainment',
      cashback: 'Up to 5%',
      coupons: 24,
      color: 'from-violet-500/20 to-purple-500/20'
    },
    {
      id: 8,
      name: 'MakeMyTrip',
      logo: '✈️',
      category: 'Travel',
      cashback: 'Up to 25%',
      coupons: 89,
      trending: true,
      color: 'from-cyan-500/20 to-blue-500/20'
    }
  ];

  const categories = [
    { id: 'All', icon: Package, label: 'All' },
    { id: 'Shopping', icon: ShoppingBag, label: 'Shopping' },
    { id: 'Fashion', icon: Tag, label: 'Fashion' },
    { id: 'Food', icon: Utensils, label: 'Food' },
    { id: 'Travel', icon: Plane, label: 'Travel' },
    { id: 'Electronics', icon: Smartphone, label: 'Electronics' },
    { id: 'Home', icon: HomeIcon, label: 'Home' }
  ];

  const trendingCashback = [
    { id: 1, brand: 'Ajio', cashback: '30%', deal: 'Fashion Sale', badge: '🔥 Hot' },
    { id: 2, brand: 'FirstCry', cashback: '25%', deal: 'Baby Products', badge: '⚡ Today' },
    { id: 3, brand: 'UrbanClap', cashback: '20%', deal: 'Home Services', badge: '💎 Best' }
  ];

  const giftCards = [
    { id: 1, name: 'Amazon', value: '₹500', discount: '5% off', coins: 50, image: '🎁' },
    { id: 2, name: 'Flipkart', value: '₹1000', discount: '8% off', coins: 100, image: '🎁' },
    { id: 3, name: 'Myntra', value: '₹750', discount: '6% off', coins: 75, image: '🎁' },
    { id: 4, name: 'Swiggy', value: '₹300', discount: '4% off', coins: 30, image: '🎁' }
  ];

  const topCoupons = [
    {
      id: 1,
      brand: 'Amazon',
      code: 'SAVE500',
      offer: 'Flat ₹500 off on orders above ₹2000',
      verified: true,
      usedBy: '2.5K',
      expires: '2 days'
    },
    {
      id: 2,
      brand: 'Myntra',
      code: 'FASHION40',
      offer: '40% off on fashion + Extra ReZ Coins',
      verified: true,
      usedBy: '1.8K',
      expires: '5 days'
    },
    {
      id: 3,
      brand: 'MakeMyTrip',
      code: 'FLY2025',
      offer: 'Up to ₹3000 off on flights',
      verified: true,
      usedBy: '3.2K',
      expires: '7 days'
    }
  ];

  const filteredBrands = selectedCategory === 'All'
    ? topBrands
    : topBrands.filter(b => b.category === selectedCategory);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      {/* Header */}
      <Header />

      {/* Mode Switcher */}
      <ModeSwitcher />

      {/* Page Title */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-rez-navy dark:text-white">Cash Store</h1>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                Cashback
              </span>
            </div>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">
              Shop online. Get paid back.
            </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                to="/wallet"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20"
              >
                <Coins className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-400">{rezCoins || 0}</span>
              </Link>
              <Link
                to="/cash-store/track"
                className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10"
              >
                <Clock className="w-5 h-5 text-rez-navy dark:text-white" />
              </Link>
            </div>
          </div>

        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-600 dark:text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search brands, coupons..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-rez-navy dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Hero Banner */}
      <div className="px-4 py-6">
        <div className="relative p-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Percent className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white/90">Max Cashback Guarantee</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Earn cashback on every online order
            </h2>
            <p className="text-white/90 text-sm mb-4">
              Shop from 1000+ brands and earn up to 30% cashback
            </p>
            <Link
              to="/cash-store/how-it-works"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-600 font-semibold hover:bg-white/90 transition-colors"
            >
              <Info className="w-4 h-4" />
              How it works
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-400/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Trending Cashback */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange-400" />
            <h2 className="text-lg font-bold text-rez-navy dark:text-white">Trending Cashback</h2>
          </div>
          <span className="text-xs text-rez-gray-600 dark:text-gray-400">Limited time</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {trendingCashback.map((item) => (
            <Link
              key={item.id}
              to={`/cash-store/brand/${item.id}`}
              className="p-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all"
            >
              <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-600 dark:text-orange-400 font-bold block mb-2 text-center">
                {item.badge}
              </span>
              <p className="font-semibold text-sm text-rez-navy dark:text-white text-center mb-1">
                {item.brand}
              </p>
              <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400 text-center mb-1">
                {item.cashback}
              </p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 text-center">
                {item.deal}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Top Online Brands */}
      <div className="px-4 mb-8">
        <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-4">
          Top Online Brands
        </h2>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-4 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full shrink-0 transition-all
                ${selectedCategory === cat.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-rez-gray-700 dark:text-gray-300'
                }
              `}
            >
              <cat.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 gap-3">
          {filteredBrands.map((brand) => (
            <Link
              key={brand.id}
              to={`/cash-store/brand/${brand.id}`}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all active:scale-98"
            >
              {brand.trending && (
                <span className="inline-block mb-2 px-2 py-0.5 rounded-full bg-red-500/20 text-[10px] font-bold text-red-600 dark:text-red-400">
                  🔥 Trending
                </span>
              )}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-3xl mb-3 mx-auto`}>
                {brand.logo}
              </div>
              <h3 className="font-semibold text-center text-rez-navy dark:text-white mb-1">
                {brand.name}
              </h3>
              <p className="text-xs text-center text-rez-gray-600 dark:text-gray-400 mb-2">
                {brand.category}
              </p>
              <div className="text-center mb-2">
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  {brand.cashback}
                </span>
              </div>
              <div className="flex items-center justify-center gap-1 text-xs text-rez-gray-600 dark:text-gray-400">
                <Tag className="w-3 h-3" />
                <span>{brand.coupons} coupons</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Buy Coupons & Gift Cards */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-bold text-rez-navy dark:text-white">Gift Cards & Coupons</h2>
          </div>
          <Link to="/cash-store/gift-cards" className="text-sm font-medium text-emerald-500">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {giftCards.map((card) => (
            <Link
              key={card.id}
              to={`/cash-store/gift-card/${card.id}`}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-2xl mb-3">
                {card.image}
              </div>
              <h3 className="font-semibold text-sm text-rez-navy dark:text-white mb-1">
                {card.name}
              </h3>
              <p className="text-lg font-bold text-rez-gray-900 dark:text-white mb-1">
                {card.value}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {card.discount}
                </span>
                <div className="flex items-center gap-1">
                  <Coins className="w-3 h-3 text-amber-400" />
                  <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                    +{card.coins}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Important Note */}
        <div className="mt-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <p className="text-xs text-amber-700 dark:text-amber-400">
            <strong>Note:</strong> Gift cards cannot be purchased using ReZ or Branded coins.
            Promo coins are allowed.
          </p>
        </div>
      </div>

      {/* Best Coupon Codes */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-rez-navy dark:text-white">Best Coupon Codes</h2>
          <Link to="/cash-store/coupons" className="text-sm font-medium text-emerald-500">
            See All
          </Link>
        </div>
        <div className="space-y-3">
          {topCoupons.map((coupon) => (
            <div
              key={coupon.id}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-rez-navy dark:text-white">
                      {coupon.brand}
                    </h3>
                    {coupon.verified && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-2">
                    {coupon.offer}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-rez-gray-600 dark:text-gray-400">
                    <span>{coupon.usedBy} used</span>
                    <span>•</span>
                    <span>Expires in {coupon.expires}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 px-3 py-2 rounded-lg bg-rez-gray-100 dark:bg-white/5 border border-dashed border-rez-gray-300 dark:border-gray-600">
                  <span className="font-mono font-bold text-sm text-rez-navy dark:text-white">
                    {coupon.code}
                  </span>
                </div>
                <button className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors">
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel & Booking Deals */}
      <div className="px-4 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Plane className="w-5 h-5 text-blue-400" />
          <h2 className="text-lg font-bold text-rez-navy dark:text-white">Travel & Booking</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/cash-store/category/flights"
            className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500 transition-all"
          >
            <span className="text-3xl mb-2 block">✈️</span>
            <h3 className="font-semibold text-rez-navy dark:text-white mb-1">Flights</h3>
            <p className="text-sm font-bold text-blue-600 dark:text-blue-400">Up to 25% back</p>
          </Link>
          <Link
            to="/cash-store/category/hotels"
            className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500 transition-all"
          >
            <span className="text-3xl mb-2 block">🏨</span>
            <h3 className="font-semibold text-rez-navy dark:text-white mb-1">Hotels</h3>
            <p className="text-sm font-bold text-purple-600 dark:text-purple-400">Up to 20% back</p>
          </Link>
          <Link
            to="/cash-store/category/cabs"
            className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 hover:border-emerald-500 transition-all"
          >
            <span className="text-3xl mb-2 block">🚗</span>
            <h3 className="font-semibold text-rez-navy dark:text-white mb-1">Cabs</h3>
            <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Up to 15% back</p>
          </Link>
          <Link
            to="/cash-store/category/activities"
            className="p-4 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500 transition-all"
          >
            <span className="text-3xl mb-2 block">🎭</span>
            <h3 className="font-semibold text-rez-navy dark:text-white mb-1">Activities</h3>
            <p className="text-sm font-bold text-orange-600 dark:text-orange-400">Up to 18% back</p>
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-4 mb-8">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-rez-navy dark:text-white mb-1">1000+</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Brands</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-rez-navy dark:text-white mb-1">₹50L+</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Cashback Paid</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-rez-navy dark:text-white mb-1">10K+</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Happy Users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Track Cashback CTA */}
      <div className="px-4 mb-8">
        <Link
          to="/cash-store/track"
          className="block p-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 transition-all"
        >
          <div className="flex items-center justify-between text-white">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5" />
                <h3 className="font-bold text-lg">Track Your Cashback</h3>
              </div>
              <p className="text-white/90 text-sm">
                See pending, confirmed & usable cashback
              </p>
            </div>
            <ChevronRight className="w-6 h-6" />
          </div>
        </Link>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default CashStore;
