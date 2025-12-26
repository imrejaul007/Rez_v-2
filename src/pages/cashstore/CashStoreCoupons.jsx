import { useState } from 'react';
import { Search, Copy, Check, Gift, Percent, DollarSign, Sparkles, Tag, Filter } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CashStoreCoupons = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Coupons', count: 500 },
    { id: 'trending', name: 'Trending', count: 50 },
    { id: 'highest', name: 'Highest Savings', count: 75 },
    { id: 'expiring', name: 'Expiring Soon', count: 30 },
  ];

  // Enhanced coupons data with stackable, saveAmount, and cashback info
  const coupons = [
    { id: 1, brand: 'Amazon', code: 'SAVE100', discount: '₹100 OFF', saveAmount: 100, minOrder: '₹999', expires: '31 Dec', logo: '📦', stackable: true, cashback: '12%', trending: true },
    { id: 2, brand: 'Flipkart', code: 'FASHION20', discount: '20% OFF', saveAmount: 300, minOrder: '₹1499', expires: '30 Dec', logo: '🛒', stackable: true, cashback: '15%', trending: true },
    { id: 3, brand: 'Myntra', code: 'STYLE15', discount: '15% OFF', saveAmount: 300, minOrder: '₹1999', expires: '28 Dec', logo: '👗', stackable: true, cashback: '20%' },
    { id: 4, brand: 'Swiggy', code: 'FOOD50', discount: '₹50 OFF', saveAmount: 50, minOrder: '₹299', expires: '27 Dec', logo: '🍔', stackable: true, cashback: '10%' },
    { id: 5, brand: 'Nykaa', code: 'BEAUTY10', discount: '10% OFF', saveAmount: 130, minOrder: '₹1299', expires: '29 Dec', logo: '💄', stackable: true, cashback: '18%' },
    { id: 6, brand: 'MakeMyTrip', code: 'TRAVEL500', discount: '₹500 OFF', saveAmount: 500, minOrder: '₹4999', expires: '31 Dec', logo: '✈️', stackable: true, cashback: '25%', trending: true },
    { id: 7, brand: 'Ajio', code: 'FASHION25', discount: '25% OFF', saveAmount: 500, minOrder: '₹1999', expires: '31 Dec', logo: '👔', stackable: true, cashback: '22%' },
    { id: 8, brand: 'Zomato', code: 'FOOD40', discount: '₹40 OFF', saveAmount: 40, minOrder: '₹199', expires: '28 Dec', logo: '🍕', stackable: true, cashback: '8%' },
  ];

  const copyCoupon = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Money-First Header */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
            <Tag className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-rez-navy dark:text-white">Coupons & Deals</h1>
            <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
              💸 Save instantly + Earn ReZ Coins
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-center">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">500+</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Coupons</p>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-center">
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">₹500</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Max Discount</p>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 text-center">
            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Stackable</p>
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
              placeholder="Search 500+ coupons..."
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

      {/* Stackable Benefits Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <div className="flex items-center gap-3">
            <DollarSign className="w-10 h-10 text-purple-500 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">
                💰 Double Savings = Coupon + Cashback
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                All coupons are stackable. Get instant discount + ReZ Coins on every purchase!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coupons List - Money-First Design */}
      <div className="px-4 mb-6">
        <div className="space-y-3">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border-2 border-dashed border-purple-300 dark:border-purple-700/50 hover:border-purple-500 dark:hover:border-purple-500 transition-all"
            >
              {/* Header Section */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {coupon.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-rez-navy dark:text-white">{coupon.brand}</h3>
                    {coupon.trending && (
                      <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30">
                        <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          Trending
                        </span>
                      </span>
                    )}
                  </div>

                  {/* Money-First Savings Display */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      {coupon.discount}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Save ₹{coupon.saveAmount}
                    </p>
                  </div>

                  {/* Stackable + Cashback Badge */}
                  <div className="flex items-center gap-2 mb-2">
                    {coupon.stackable && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                        + {coupon.cashback} Cashback
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Min order {coupon.minOrder} • Expires {coupon.expires}
                  </p>
                </div>
              </div>

              {/* Code Section */}
              <div className="flex items-center gap-2">
                <code className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-base font-mono font-bold text-purple-600 dark:text-purple-400 text-center">
                  {coupon.code}
                </code>
                <button
                  onClick={() => copyCoupon(coupon.code)}
                  className={`px-5 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    copiedCode === coupon.code
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105'
                  }`}
                >
                  {copiedCode === coupon.code ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 pb-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-2">
            Partner with ReZ
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            List your coupons and reach millions of shoppers
          </p>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all">
            Become a Partner
          </button>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CashStoreCoupons;
