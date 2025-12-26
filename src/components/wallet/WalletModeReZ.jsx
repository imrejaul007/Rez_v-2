import { Link } from 'react-router-dom';
import {
  Wallet,
  TrendingUp,
  Flame,
  MapPin,
  Gift,
  Users,
  Zap,
  Award,
  ArrowRight,
  QrCode
} from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';
import { useApp } from '../../contexts/AppContext';
import {
  calculateTotalCoins,
  formatRupees,
  calculateSavingsTrend
} from '../../utils/wallet';
import BottomNav from '../layout/BottomNav';

/**
 * WalletModeReZ Component
 * ReZ (Near You / Daily Use) Wallet Experience
 *
 * Emotion: "I'm saving money every day"
 * Design: Light, friendly, energetic
 * Colors: Green (#00C06A) + Gold (#FFD700)
 * Focus: Savings, streaks, nearby stores, quick earn/spend
 */
const WalletModeReZ = () => {
  const wallet = useWallet();
  const { theme } = useApp();
  const isDark = theme === 'dark';

  const totalCoins = calculateTotalCoins(wallet);
  const savingsTrend = calculateSavingsTrend(wallet.savingsStats);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section - Total Savings */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 px-6 py-8 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Wallet className="w-6 h-6" />
              <h1 className="text-lg font-semibold">My Wallet</h1>
            </div>
            <button className="p-2 rounded-full bg-white/20 hover:bg-white/30">
              <Gift className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-200" />
              <p className="text-green-100 text-sm font-medium">Total Savings This Month</p>
            </div>
            <h2 className="text-4xl font-bold mb-2">
              {formatRupees(wallet.savingsStats.thisMonth)}
            </h2>
            {savingsTrend && (
              <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${
                savingsTrend.isIncreasing
                  ? 'bg-green-400/30 text-green-50'
                  : 'bg-orange-400/30 text-orange-50'
              }`}>
                <TrendingUp className={`w-3 h-3 ${savingsTrend.isIncreasing ? '' : 'rotate-180'}`} />
                <span className="text-sm font-medium">
                  {Math.abs(savingsTrend.percentChange)}% from last month
                </span>
              </div>
            )}
          </div>

          <div className="text-center text-green-100">
            <p className="text-sm">
              You're crushing it! Keep scanning & saving 🎉
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 -mt-4 mb-6">
        <div className="grid grid-cols-4 gap-3">
          <Link
            to="/pay-in-store"
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <QrCode className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Scan</span>
          </Link>

          <Link
            to="/explore/map"
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Nearby</span>
          </Link>

          <Link
            to="/earn"
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Earn</span>
          </Link>

          <Link
            to="/referrals"
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Refer</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 space-y-6 pb-24">
        {/* ReZ Coins Balance */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🪙</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                ReZ Coins Balance
              </h3>
            </div>
            <Link
              to="/wallet/transactions"
              className="text-green-600 dark:text-green-400 text-sm font-medium hover:underline"
            >
              History
            </Link>
          </div>

          <div className="mb-4">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              {wallet.rezCoinsData.balance.toLocaleString()} coins
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              = {formatRupees(totalCoins.rezCoins * 0.1)} value
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-sm text-green-700 dark:text-green-300">
              Use anywhere on ReZ to save instantly!
            </span>
          </div>
        </div>

        {/* Branded Coins - Nearby Stores */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              Branded Coins (Nearby)
            </h3>
            <Link
              to="/wallet/brands"
              className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline flex items-center gap-1"
            >
              View All {wallet.brandedCoins.length}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {wallet.brandedCoins.slice(0, 3).map((brand, index) => (
              <Link
                key={index}
                to={`/store/${brand.brandId}`}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{brand.logo}</div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {brand.merchant}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {brand.balance} coins
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>

        {/* Promo Coins - Expiring Soon */}
        {wallet.promoCoins.balance > 0 && (
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 shadow-md border-2 border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Promo Coins (Expiring Soon!)
              </h3>
            </div>

            <div className="mb-4">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                {wallet.promoCoins.balance} coins
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Expires in {wallet.promoCoins.expiry} • {wallet.promoCoins.maxRedemption}
              </div>
            </div>

            <Link
              to="/explore/trending"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold transition-all"
            >
              <Zap className="w-5 h-5" />
              Use Now to Save More!
            </Link>
          </div>
        )}

        {/* Savings Proof */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            💰 Your Savings Journey
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {formatRupees(wallet.savingsStats.totalSaved)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Lifetime Saved
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {formatRupees(wallet.savingsStats.avgPerVisit)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Avg. Per Visit
              </div>
            </div>
          </div>

          <Link
            to="/wallet/savings"
            className="text-green-600 dark:text-green-400 text-sm font-medium hover:underline flex items-center gap-1"
          >
            See detailed breakdown
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Leaderboard Teaser */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Top Savers This Month
            </h3>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            You're in the top 15% of savers in your area! 🏆
          </p>

          <Link
            to="/leaderboard"
            className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline flex items-center gap-1"
          >
            View Leaderboard
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default WalletModeReZ;
