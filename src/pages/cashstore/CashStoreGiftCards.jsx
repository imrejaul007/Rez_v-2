import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Gift, Search, Filter, Sparkles, TrendingUp,
  Zap, Star, Tag, ChevronRight, Copy, Check, Info
} from 'lucide-react';
import Header from '../../components/layout/Header';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CashStoreGiftCards = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedCode, setCopiedCode] = useState(null);

  const categories = [
    { id: 'all', name: 'All Cards', count: 50 },
    { id: 'popular', name: 'Popular', count: 15 },
    { id: 'cashback', name: 'Extra Cashback', count: 20 },
    { id: 'new', name: 'New', count: 8 }
  ];

  const giftCards = [
    {
      id: 1,
      brand: 'Amazon',
      logo: '📦',
      denominations: [500, 1000, 2000, 5000],
      cashback: '5%',
      maxCashback: 250,
      trending: true,
      popular: true,
      instantDelivery: true,
      bgColor: 'from-orange-500/10 to-amber-500/10',
      borderColor: 'border-orange-500/30'
    },
    {
      id: 2,
      brand: 'Flipkart',
      logo: '🛒',
      denominations: [500, 1000, 2000, 5000],
      cashback: '6%',
      maxCashback: 300,
      trending: true,
      popular: true,
      instantDelivery: true,
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 3,
      brand: 'Myntra',
      logo: '👗',
      denominations: [500, 1000, 2000, 3000],
      cashback: '7%',
      maxCashback: 210,
      trending: true,
      popular: true,
      instantDelivery: true,
      bgColor: 'from-pink-500/10 to-rose-500/10',
      borderColor: 'border-pink-500/30'
    },
    {
      id: 4,
      brand: 'Swiggy',
      logo: '🍔',
      denominations: [200, 500, 1000, 2000],
      cashback: '4%',
      maxCashback: 80,
      popular: true,
      instantDelivery: true,
      bgColor: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-500/30'
    },
    {
      id: 5,
      brand: 'Zomato',
      logo: '🍕',
      denominations: [200, 500, 1000, 2000],
      cashback: '4%',
      maxCashback: 80,
      popular: true,
      instantDelivery: true,
      bgColor: 'from-red-500/10 to-pink-500/10',
      borderColor: 'border-red-500/30'
    },
    {
      id: 6,
      brand: 'BookMyShow',
      logo: '🎬',
      denominations: [200, 500, 1000, 1500],
      cashback: '5%',
      maxCashback: 75,
      instantDelivery: true,
      bgColor: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 7,
      brand: 'Nykaa',
      logo: '💄',
      denominations: [500, 1000, 2000, 3000],
      cashback: '6%',
      maxCashback: 180,
      trending: true,
      instantDelivery: true,
      bgColor: 'from-pink-500/10 to-purple-500/10',
      borderColor: 'border-pink-500/30'
    },
    {
      id: 8,
      brand: 'MakeMyTrip',
      logo: '✈️',
      denominations: [1000, 2000, 5000, 10000],
      cashback: '8%',
      maxCashback: 800,
      trending: true,
      popular: true,
      instantDelivery: true,
      bgColor: 'from-blue-500/10 to-teal-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 9,
      brand: 'Uber',
      logo: '🚗',
      denominations: [200, 500, 1000, 2000],
      cashback: '3%',
      maxCashback: 60,
      instantDelivery: true,
      bgColor: 'from-gray-500/10 to-slate-500/10',
      borderColor: 'border-gray-500/30'
    },
    {
      id: 10,
      brand: 'Lifestyle',
      logo: '👔',
      denominations: [500, 1000, 2000, 5000],
      cashback: '7%',
      maxCashback: 350,
      popular: true,
      instantDelivery: true,
      bgColor: 'from-indigo-500/10 to-purple-500/10',
      borderColor: 'border-indigo-500/30'
    }
  ];

  const filteredCards = activeCategory === 'all'
    ? giftCards
    : activeCategory === 'popular'
    ? giftCards.filter(c => c.popular)
    : activeCategory === 'cashback'
    ? giftCards.filter(c => parseInt(c.cashback) >= 5)
    : giftCards.filter(c => c.trending);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <Header />

      {/* Hero Header */}
      <div className="px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-rez-navy dark:text-white mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
            <Gift className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-rez-navy dark:text-white">Gift Cards</h1>
            <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
              💸 Buy & Earn Extra Cashback
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-center">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Brands</p>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-center">
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">8%</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Max Cashback</p>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-center">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">⚡</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Instant</p>
          </div>
        </div>
      </div>

      {/* How It Works Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <div className="flex items-center gap-3">
            <Info className="w-10 h-10 text-purple-500 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">
                💰 Double Benefit = Gift Card Value + Cashback
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Buy gift cards and earn ReZ Coins cashback on top of full card value!
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
              placeholder="Search gift cards..."
              className="flex-1 bg-transparent text-rez-navy dark:text-white placeholder-rez-gray-500 dark:placeholder-gray-500 outline-none text-sm"
            />
          </div>
          <button className="p-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <Filter className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 mb-6">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat.name}
              <span className="ml-1.5 opacity-75">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Gift Cards Grid */}
      <div className="px-4 pb-6 space-y-3">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className={`p-4 rounded-2xl bg-gradient-to-br ${card.bgColor} border-2 ${card.borderColor} hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer`}
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center text-3xl flex-shrink-0">
                {card.logo}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-rez-navy dark:text-white">{card.brand}</h3>
                  {card.trending && (
                    <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30">
                      <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400">🔥 Trending</span>
                    </span>
                  )}
                  {card.popular && (
                    <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">⭐ Popular</span>
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                  {card.instantDelivery && (
                    <>
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      <span>Instant Delivery</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Denominations */}
            <div className="mb-3">
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Select Amount:</p>
              <div className="grid grid-cols-4 gap-2">
                {card.denominations.map((amount) => (
                  <button
                    key={amount}
                    className="px-3 py-2 rounded-xl bg-white/60 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 border border-gray-200 dark:border-gray-700 transition-all text-center"
                  >
                    <p className="text-sm font-bold text-rez-navy dark:text-white">₹{amount}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Cashback Display */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Extra Cashback</p>
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{card.cashback}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Max</p>
                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">₹{card.maxCashback}</p>
                </div>
              </div>
            </div>

            {/* Buy Button */}
            <button className="w-full mt-3 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              <Gift className="w-4 h-4" />
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="px-4 pb-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-4">Why Buy Gift Cards?</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="font-semibold text-rez-navy dark:text-white">Extra Cashback</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Earn up to 8% ReZ Coins on gift card purchases
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-rez-navy dark:text-white">Instant Delivery</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Receive your gift card code via email & SMS instantly
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Gift className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="font-semibold text-rez-navy dark:text-white">Perfect Gifting</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Send as gifts to friends and family via email/WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CashStoreGiftCards;
