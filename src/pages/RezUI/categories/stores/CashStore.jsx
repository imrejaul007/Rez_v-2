import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ExternalLink, TrendingUp, Gift, Tag, Clock,
  Percent, ShoppingBag, Smartphone, Plane, Home as HomeIcon,
  Utensils, Package, Coins, ChevronRight, Info, Star, Zap, Sparkles,
  CheckCircle, DollarSign, ArrowRight
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import Header from '../components/layout/Header';
import BottomNavManager from '../components/layout/BottomNavManager';
import ModeSwitcher from '../components/home/ModeSwitcher';

const CashStore = () => {
  const { rezCoins } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Top online brands data - with AUTO TRACKING badges
  const topBrands = [
    {
      id: 1,
      name: 'Amazon',
      logo: 'https://logo.clearbit.com/amazon.in',
      category: 'Shopping',
      cashback: 'Up to 12%',
      coupons: 145,
      trending: true,
      autoTracked: true,
      color: 'from-orange-500/20 to-amber-500/20'
    },
    {
      id: 2,
      name: 'Flipkart',
      logo: 'https://logo.clearbit.com/flipkart.com',
      category: 'Shopping',
      cashback: 'Up to 15%',
      coupons: 98,
      trending: true,
      autoTracked: true,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 3,
      name: 'Myntra',
      logo: 'https://logo.clearbit.com/myntra.com',
      category: 'Fashion',
      cashback: 'Up to 20%',
      coupons: 67,
      autoTracked: true,
      color: 'from-pink-500/20 to-rose-500/20'
    },
    {
      id: 4,
      name: 'Swiggy',
      logo: 'https://logo.clearbit.com/swiggy.com',
      category: 'Food',
      cashback: 'Up to 10%',
      coupons: 52,
      autoTracked: true,
      color: 'from-red-500/20 to-orange-500/20'
    },
    {
      id: 5,
      name: 'Zomato',
      logo: 'https://logo.clearbit.com/zomato.com',
      category: 'Food',
      cashback: 'Up to 8%',
      coupons: 48,
      autoTracked: true,
      color: 'from-red-600/20 to-pink-500/20'
    },
    {
      id: 6,
      name: 'Nykaa',
      logo: 'https://logo.clearbit.com/nykaa.com',
      category: 'Beauty',
      cashback: 'Up to 18%',
      coupons: 73,
      autoTracked: true,
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 7,
      name: 'Ajio',
      logo: 'https://logo.clearbit.com/ajio.com',
      category: 'Fashion',
      cashback: 'Up to 30%',
      coupons: 56,
      trending: true,
      autoTracked: true,
      color: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      id: 8,
      name: 'BookMyShow',
      logo: 'https://logo.clearbit.com/bookmyshow.com',
      category: 'Entertainment',
      cashback: 'Up to 5%',
      coupons: 24,
      autoTracked: true,
      color: 'from-violet-500/20 to-purple-500/20'
    },
    {
      id: 9,
      name: 'MakeMyTrip',
      logo: 'https://logo.clearbit.com/makemytrip.com',
      category: 'Travel',
      cashback: 'Up to 25%',
      coupons: 89,
      trending: true,
      autoTracked: true,
      color: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      id: 10,
      name: 'Uber',
      logo: 'https://logo.clearbit.com/uber.com',
      category: 'Travel',
      cashback: 'Up to 12%',
      coupons: 42,
      autoTracked: true,
      color: 'from-gray-600/20 to-black/20'
    },
    {
      id: 11,
      name: 'FirstCry',
      logo: 'https://logo.clearbit.com/firstcry.com',
      category: 'Shopping',
      cashback: 'Up to 25%',
      coupons: 63,
      autoTracked: true,
      color: 'from-blue-400/20 to-cyan-400/20'
    },
    {
      id: 12,
      name: 'UrbanClap',
      logo: 'https://logo.clearbit.com/urbancompany.com',
      category: 'Home',
      cashback: 'Up to 20%',
      coupons: 38,
      autoTracked: false,
      color: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  const categories = [
    { id: 'All', icon: Package, label: 'All' },
    { id: 'Shopping', icon: ShoppingBag, label: 'Shopping' },
    { id: 'Fashion', icon: Tag, label: 'Fashion' },
    { id: 'Food', icon: Utensils, label: 'Food' },
    { id: 'Beauty', icon: Sparkles, label: 'Beauty' },
    { id: 'Travel', icon: Plane, label: 'Travel' },
    { id: 'Entertainment', icon: Star, label: 'Entertainment' },
    { id: 'Home', icon: HomeIcon, label: 'Home' }
  ];

  const trendingCashback = [
    { id: 1, brand: 'Ajio', cashback: '30%', deal: 'Fashion Sale', badge: '🔥 Highest', color: 'from-orange-500 to-red-500' },
    { id: 2, brand: 'MakeMyTrip', cashback: '25%', deal: 'Travel Deals', badge: '⚡ Flash', color: 'from-blue-500 to-cyan-500' },
    { id: 3, brand: 'FirstCry', cashback: '25%', deal: 'Baby Products', badge: '💎 Trending', color: 'from-purple-500 to-pink-500' }
  ];

  const giftCards = [
    { id: 1, name: 'Amazon', value: '₹500', discount: '5% off', saveAmount: 25, coins: 50, image: '🎁' },
    { id: 2, name: 'Flipkart', value: '₹1000', discount: '8% off', saveAmount: 80, coins: 100, image: '🎁' },
    { id: 3, name: 'Myntra', value: '₹750', discount: '6% off', saveAmount: 45, coins: 75, image: '🎁' },
    { id: 4, name: 'Swiggy', value: '₹300', discount: '4% off', saveAmount: 12, coins: 30, image: '🎁' }
  ];

  const topCoupons = [
    {
      id: 1,
      brand: 'Amazon',
      code: 'SAVE500',
      offer: 'Flat ₹500 off on orders above ₹2000',
      stackable: true,
      verified: true,
      usedBy: '2.5K',
      expires: '2 days'
    },
    {
      id: 2,
      brand: 'Myntra',
      code: 'FASHION40',
      offer: '40% off on fashion + Extra ReZ Coins',
      stackable: true,
      verified: true,
      usedBy: '1.8K',
      expires: '5 days'
    },
    {
      id: 3,
      brand: 'MakeMyTrip',
      code: 'FLY2025',
      offer: 'Up to ₹3000 off on flights',
      stackable: true,
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

      {/* Page Title - MONEY FIRST */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-rez-navy dark:text-white">ReZ Cash Store</h1>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  💸 Shop online. Earn ReZ Coins on every order.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/wallet"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
            >
              <Coins className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white">{rezCoins || 0}</span>
            </Link>
            <Link
              to="/cash-store/track"
              className="p-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 transition-all"
              title="Track Cashback"
            >
              <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </Link>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-600 dark:text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search brands, coupons, deals..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-rez-navy dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Hero Banner - CRYSTAL CLEAR VALUE PROP */}
      <div className="px-4 py-6">
        <div className="relative p-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 overflow-hidden shadow-lg">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                <span className="text-xs font-bold text-white">💰 1000+ BRANDS</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                <span className="text-xs font-bold text-white">✔ AUTO TRACKED</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Earn up to 30% ReZ Coins
            </h2>
            <p className="text-white/90 text-sm mb-4">
              Same prices • Same checkout • Extra money back in your wallet
            </p>
            <div className="flex items-center gap-3">
              <Link
                to="/cash-store/how-it-works"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-600 font-semibold hover:bg-white/90 transition-colors"
              >
                <Info className="w-4 h-4" />
                How it works
              </Link>
              <Link
                to="/cash-store/stores"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/20 backdrop-blur-sm text-white font-semibold hover:bg-white/30 transition-colors"
              >
                Browse All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-400/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* How Cash Store Works - SIMPLIFIED */}
      <div className="px-4 mb-8">
        <div className="p-6 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold text-rez-navy dark:text-white">
              How It Works
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-white">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-rez-navy dark:text-white mb-1">Open brand from ReZ</h4>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">
                  Browse 1000+ online brands. See cashback % upfront.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-white">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-rez-navy dark:text-white mb-1">Shop normally</h4>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">
                  Same prices. Same process. We track automatically.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-white">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-rez-navy dark:text-white mb-1">Cashback tracked automatically</h4>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">
                  Order confirmed → ReZ Coins added to your wallet.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
                <Coins className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-rez-navy dark:text-white mb-1">ReZ Coins added to wallet</h4>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">
                  Use coins anywhere in ReZ ecosystem. No withdrawal.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-2">
              <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">
                  Cashback = ReZ Coins (not cash)
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-400">
                  All cashback credited as ReZ Coins. Use across ReZ NearU, Mall, and Privé. No bank withdrawal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Cashback - MONEY HIGHLIGHTED */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-bold text-rez-navy dark:text-white">🔥 Trending Cashback</h2>
          </div>
          <Link to="/cash-store/stores" className="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {trendingCashback.map((item) => (
            <Link
              key={item.id}
              to={`/cash-store/brand/${item.id}`}
              className="relative p-4 rounded-2xl bg-white dark:bg-dark-800 border-2 border-orange-500/50 dark:border-orange-500/30 hover:border-orange-500 transition-all overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`} />
              <div className="relative z-10">
                <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500 text-white font-bold block mb-2 text-center">
                  {item.badge}
                </span>
                <p className="font-semibold text-sm text-rez-navy dark:text-white text-center mb-1">
                  {item.brand}
                </p>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 text-center mb-1">
                  {item.cashback}
                </p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 text-center">
                  ReZ Coins
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Top Online Brands - CLEAR TRACKING BADGES */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-rez-navy dark:text-white">
            Top Online Brands
          </h2>
          <Link to="/cash-store/stores" className="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            1000+ Brands <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

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

        {/* Brand Grid - MONEY FIRST DISPLAY */}
        <div className="grid grid-cols-2 gap-3">
          {filteredBrands.slice(0, 8).map((brand) => (
            <Link
              key={brand.id}
              to={`/cash-store/brand/${brand.id}`}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all active:scale-98"
            >
              <div className="flex items-start justify-between mb-2">
                {brand.trending && (
                  <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-[10px] font-bold text-red-600 dark:text-red-400">
                    🔥 Hot
                  </span>
                )}
                {brand.autoTracked && (
                  <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-[10px] font-bold text-green-600 dark:text-green-400 ml-auto">
                    ✔ Auto
                  </span>
                )}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center p-2 mb-3 mx-auto overflow-hidden">
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
              <h3 className="font-semibold text-center text-rez-navy dark:text-white mb-1">
                {brand.name}
              </h3>
              <div className="text-center mb-2">
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {brand.cashback}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">ReZ Coins</p>
              </div>
              <div className="flex items-center justify-center gap-1 text-xs text-rez-gray-600 dark:text-gray-400">
                <Tag className="w-3 h-3" />
                <span>{brand.coupons} coupons</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Buy Coupons & Save Instantly - INSTANT GRATIFICATION */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-purple-500" />
            <h2 className="text-lg font-bold text-rez-navy dark:text-white">🎟 Buy Coupon & Save Instantly</h2>
          </div>
          <Link to="/cash-store/gift-cards" className="text-sm font-medium text-purple-600 dark:text-purple-400 flex items-center gap-1">
            See All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-4">
          Gift cards • Instant discount • Extra ReZ Coins • Zero tracking delay
        </p>
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
              <div className="mb-2">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {card.discount}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Save ₹{card.saveAmount}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Coins className="w-3 h-3 text-amber-400" />
                  <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                    Earn {card.coins} coins
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Important Note */}
        <div className="mt-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-xs text-blue-700 dark:text-blue-400">
            <strong>Why buy gift cards?</strong> Instant savings • No tracking delay • Stack with coupons • Extra coins
          </p>
        </div>
      </div>

      {/* Best Coupon Codes - STACKABLE HIGHLIGHTED */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Percent className="w-5 h-5 text-pink-500" />
            <h2 className="text-lg font-bold text-rez-navy dark:text-white">Best Coupon Codes</h2>
          </div>
          <Link to="/cash-store/coupons" className="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            See All <ChevronRight className="w-4 h-4" />
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
                    {coupon.stackable && (
                      <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-[10px] font-bold text-purple-600 dark:text-purple-400">
                        + Cashback
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-2">
                    {coupon.offer}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-rez-gray-600 dark:text-gray-400">
                    <span>Used by {coupon.usedBy}</span>
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
          <Plane className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-bold text-rez-navy dark:text-white">✈️ Travel & Bookings</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/cash-store/category/flights"
            className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500 transition-all"
          >
            <span className="text-3xl mb-2 block">✈️</span>
            <h3 className="font-semibold text-rez-navy dark:text-white mb-1">Flights</h3>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-0.5">Up to 25%</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">ReZ Coins back</p>
          </Link>
          <Link
            to="/cash-store/category/hotels"
            className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500 transition-all"
          >
            <span className="text-3xl mb-2 block">🏨</span>
            <h3 className="font-semibold text-rez-navy dark:text-white mb-1">Hotels</h3>
            <p className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-0.5">Up to 20%</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">ReZ Coins back</p>
          </Link>
          <Link
            to="/cash-store/category/cabs"
            className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 hover:border-emerald-500 transition-all"
          >
            <span className="text-3xl mb-2 block">🚗</span>
            <h3 className="font-semibold text-rez-navy dark:text-white mb-1">Cabs</h3>
            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-0.5">Up to 15%</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">ReZ Coins back</p>
          </Link>
          <Link
            to="/cash-store/category/activities"
            className="p-4 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500 transition-all"
          >
            <span className="text-3xl mb-2 block">🎭</span>
            <h3 className="font-semibold text-rez-navy dark:text-white mb-1">Activities</h3>
            <p className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-0.5">Up to 18%</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">ReZ Coins back</p>
          </Link>
        </div>
      </div>

      {/* Quick Stats - TRUST SIGNALS */}
      <div className="px-4 mb-8">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-rez-navy dark:text-white mb-1">1000+</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Online Brands</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-rez-navy dark:text-white mb-1">₹50L+</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Coins Earned</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-rez-navy dark:text-white mb-1">10K+</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Happy Users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Track Cashback CTA - TRANSPARENCY */}
      <div className="px-4 mb-8">
        <Link
          to="/cash-store/track"
          className="block p-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 transition-all shadow-lg"
        >
          <div className="flex items-center justify-between text-white">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5" />
                <h3 className="font-bold text-lg">Track Your Cashback</h3>
              </div>
              <p className="text-white/90 text-sm">
                Transparency = Trust. See pending, confirmed & credited coins.
              </p>
            </div>
            <ChevronRight className="w-6 h-6" />
          </div>
        </Link>
      </div>

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default CashStore;
