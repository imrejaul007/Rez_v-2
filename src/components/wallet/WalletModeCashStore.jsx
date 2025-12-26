import { Link } from 'react-router-dom';
import {
  Wallet,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  ArrowUpRight,
  ArrowRight,
  Search,
  AlertCircle,
  DollarSign,
  Repeat
} from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';
import { useApp } from '../../contexts/AppContext';
import {
  calculateTotalCoins,
  formatRupees
} from '../../utils/wallet';
import BottomNav from '../layout/BottomNav';

/**
 * WalletModeCashStore Component
 * Cash Store (Online Cashback) Wallet Experience
 *
 * Emotion: "I earn money while shopping"
 * Design: Finance-style, clear numbers, cashback clarity
 * Colors: Blue (#2563EB) + Green (#10B981)
 * Focus: Transparency, tracking, passive earning, pending/confirmed clarity
 */
const WalletModeCashStore = () => {
  const wallet = useWallet();
  const { theme } = useApp();
  const isDark = theme === 'dark';

  const totalCoins = calculateTotalCoins(wallet);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section - Finance Style */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-8 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Wallet className="w-6 h-6" />
              <h1 className="text-lg font-semibold">Cashback Wallet</h1>
            </div>
            <Link
              to="/cash-store"
              className="p-2 rounded-full bg-white/20 hover:bg-white/30"
            >
              <Search className="w-5 h-5" />
            </Link>
          </div>

          <div className="text-center mb-6">
            <p className="text-blue-200 text-sm font-medium mb-2">
              💸 Total Cashback Earned
            </p>
            <h2 className="text-4xl font-bold mb-1">
              {formatRupees(wallet.savingsStats.totalSaved)}
            </h2>
            <p className="text-blue-200 text-sm">Lifetime earnings</p>
          </div>

          <div className={`p-4 rounded-xl bg-white/10 border border-white/20`}>
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-100">This Month</span>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-300" />
                <span className="text-lg font-bold">
                  {formatRupees(wallet.savingsStats.thisMonth)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 space-y-6 pb-24 -mt-4">
        {/* Cashback Tracker - Main Feature */}
        <div className={`rounded-2xl shadow-lg overflow-hidden ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="p-6 pb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Cashback Tracker
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Real-time tracking of your earnings
            </p>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-3 border-b border-gray-200 dark:border-gray-700">
            <button className="px-4 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400">
              Pending
            </button>
            <button className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
              Confirmed
            </button>
            <button className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
              Rejected
            </button>
          </div>

          {/* Pending Cashback */}
          <div className="p-6">
            <div className={`p-4 rounded-xl mb-4 ${
              isDark ? 'bg-orange-900/20' : 'bg-orange-50'
            } border ${isDark ? 'border-orange-800' : 'border-orange-200'}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Pending Cashback
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      3 orders tracking
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
                    {formatRupees(wallet.pendingRewards)}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Expected in 7-14 days
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Orders */}
            <div className="space-y-3">
              {wallet.pendingCashback.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl ${
                    isDark ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {item.store}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {item.status === 'tracking' ? '⏳ Tracking' : '✓ Confirmed'}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900 dark:text-white">
                        {formatRupees(item.amount)}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        By {new Date(item.expectedDate).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Confirmed ReZ Coins */}
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDark
            ? 'bg-gradient-to-br from-green-900/30 to-emerald-900/30'
            : 'bg-gradient-to-br from-green-50 to-emerald-50'
        } border-2 ${isDark ? 'border-green-800' : 'border-green-200'}`}>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Confirmed & Ready
            </h3>
          </div>

          <div className="mb-4">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                {wallet.rezCoinsData.balance.toLocaleString()}
              </span>
              <span className="text-gray-600 dark:text-gray-400">coins</span>
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              = {formatRupees(totalCoins.rezCoins * 0.1)} • Ready to use anywhere
            </div>
          </div>

          <Link
            to="/explore/trending"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold transition-all"
          >
            <ArrowUpRight className="w-5 h-5" />
            Use Now
          </Link>
        </div>

        {/* Withdrawable (if enabled) */}
        {wallet.cashbackBalance > 0 && (
          <div className={`rounded-2xl p-6 shadow-lg ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Cash Balance
              </h3>
            </div>

            <div className="mb-4">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {formatRupees(wallet.cashbackBalance)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Available to withdraw to bank
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all">
              <Repeat className="w-5 h-5" />
              Withdraw to Bank
            </button>
          </div>
        )}

        {/* High Payout Brands */}
        <div className={`rounded-2xl p-6 shadow-lg ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Top Cashback Offers
            </h3>
            <Link
              to="/cash-store"
              className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline flex items-center gap-1"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {[
              { name: 'Amazon', icon: '🛒', cashback: '12%', category: 'Shopping' },
              { name: 'Flipkart', icon: '📦', cashback: '10%', category: 'Shopping' },
              { name: 'Myntra', icon: '👕', cashback: '15%', category: 'Fashion' }
            ].map((brand, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl ${
                  isDark ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
                } transition-colors cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{brand.icon}</span>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {brand.name}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {brand.category}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      {brand.cashback}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Cashback
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency Message */}
        <div className={`rounded-xl p-4 ${
          isDark ? 'bg-blue-900/20' : 'bg-blue-50'
        } border ${isDark ? 'border-blue-800' : 'border-blue-200'}`}>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                100% Transparent Tracking
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                We show you exactly when orders are tracked, confirmed, or rejected. No surprises, complete clarity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default WalletModeCashStore;
