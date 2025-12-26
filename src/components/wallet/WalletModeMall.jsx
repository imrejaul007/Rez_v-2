import { Link } from 'react-router-dom';
import {
  Wallet,
  Gift,
  TrendingUp,
  ShoppingBag,
  Award,
  ArrowRight,
  Sparkles,
  CreditCard,
  Package
} from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';
import { useApp } from '../../contexts/AppContext';
import {
  calculateTotalCoins,
  formatRupees
} from '../../utils/wallet';
import BottomNav from '../layout/BottomNav';

/**
 * WalletModeMall Component
 * ReZ Mall Wallet Experience
 *
 * Emotion: "I'm shopping smart, not cheap"
 * Design: Clean, premium, curated
 * Colors: White (#FFFFFF) + Gold (#D4AF37)
 * Focus: Brands, value, trust, gift card conversions
 */
const WalletModeMall = () => {
  const wallet = useWallet();
  const { theme } = useApp();
  const isDark = theme === 'dark';

  const totalCoins = calculateTotalCoins(wallet);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section - Premium Style */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black px-6 py-8 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Wallet className="w-6 h-6 text-yellow-500" />
              <h1 className="text-lg font-semibold">Wallet</h1>
            </div>
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20">
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </button>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm font-medium mb-2">Total Balance</p>
            <h2 className="text-4xl font-bold mb-1 bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              {totalCoins.total.toLocaleString()} coins
            </h2>
            <p className="text-yellow-500 text-lg font-semibold">
              {formatRupees(totalCoins.totalValue)}
            </p>
          </div>

          <div className="text-center text-gray-400">
            <p className="text-sm">Smart shopping, great savings</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 space-y-6 pb-24 -mt-6">
        {/* Earned from Mall */}
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDark ? 'bg-gray-800' : 'bg-gradient-to-br from-gray-50 to-white'
        } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center gap-2 mb-4">
            <ShoppingBag className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Earned from Mall
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatRupees(wallet.savingsStats.thisMonth)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                This Month
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                12
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Purchases
              </div>
            </div>
          </div>
        </div>

        {/* Brand Coins Available */}
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
              Brand Coins
            </h3>
            <Link
              to="/wallet/brands"
              className="text-gray-600 dark:text-gray-400 text-sm font-medium hover:underline flex items-center gap-1"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {wallet.brandedCoins.slice(0, 6).map((brand, index) => (
              <Link
                key={index}
                to={`/store/${brand.brandId}`}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl ${
                  isDark
                    ? 'bg-gray-700/50 hover:bg-gray-700'
                    : 'bg-gray-50 hover:bg-gray-100'
                } transition-colors`}
              >
                <div className="text-3xl mb-1">{brand.logo}</div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">
                    {brand.merchant}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {brand.balance} coins
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/wallet/brands"
            className="w-full py-3 text-center rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            View All {wallet.brandedCoins.length} Brands
          </Link>
        </div>

        {/* Gift Card Ready Balance */}
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDark
            ? 'bg-gradient-to-br from-yellow-900/30 to-orange-900/30'
            : 'bg-gradient-to-br from-yellow-50 to-orange-50'
        } border-2 ${
          isDark ? 'border-yellow-800' : 'border-yellow-200'
        }`}>
          <div className="flex items-center gap-2 mb-4">
            <Gift className="w-6 h-6 text-yellow-600 dark:text-yellow-500" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Gift Card Ready
            </h3>
          </div>

          <div className="mb-4">
            <div className="text-gray-700 dark:text-gray-300 text-sm mb-2">
              Privé Coins (can be converted to gift cards)
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold text-yellow-600 dark:text-yellow-500">
                👑 {wallet.priveCoins.balance}
              </span>
              <span className="text-gray-600 dark:text-gray-400">coins</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              = {formatRupees(wallet.priveCoins.balance * 0.1)} in gift cards
            </div>
          </div>

          {wallet.priveCoins.balance > 0 ? (
            <Link
              to="/gift-cards"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold transition-all"
            >
              <CreditCard className="w-5 h-5" />
              Convert to Gift Cards
            </Link>
          ) : (
            <div className="text-center py-3 text-sm text-gray-600 dark:text-gray-400">
              Earn Privé coins to unlock gift cards
            </div>
          )}
        </div>

        {/* Mall Cashback Tracker */}
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Cashback Tracker
          </h3>

          <div className="space-y-3">
            {/* Pending Cashback */}
            <div className={`p-4 rounded-xl ${
              isDark ? 'bg-orange-900/20' : 'bg-orange-50'
            } border ${isDark ? 'border-orange-800' : 'border-orange-200'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  ⏳ Pending
                </span>
                <span className="text-lg font-bold text-orange-600 dark:text-orange-400">
                  {formatRupees(wallet.pendingRewards)}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                3 orders tracking
              </p>
            </div>

            {/* Confirmed */}
            <div className={`p-4 rounded-xl ${
              isDark ? 'bg-green-900/20' : 'bg-green-50'
            } border ${isDark ? 'border-green-800' : 'border-green-200'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  ✅ Confirmed
                </span>
                <span className="text-lg font-bold text-green-600 dark:text-green-400">
                  {wallet.rezCoinsData.balance} coins
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Ready to use anywhere
              </p>
            </div>
          </div>
        </div>

        {/* Earn More Section */}
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDark
            ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30'
            : 'bg-gradient-to-br from-purple-50 to-pink-50'
        }`}>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Earn More Coins
            </h3>
          </div>

          <div className="space-y-3 mb-4">
            <div className={`p-3 rounded-xl ${
              isDark ? 'bg-white/5' : 'bg-white/60'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👗</span>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Buy from Zara
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Get 10% cashback
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className={`p-3 rounded-xl ${
              isDark ? 'bg-white/5' : 'bg-white/60'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💄</span>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Shop Nykaa
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Get 8% cashback
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          <Link
            to="/mall"
            className="w-full py-3 text-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all"
          >
            Browse Mall Brands
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default WalletModeMall;
