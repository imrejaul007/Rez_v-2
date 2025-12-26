import { useState } from 'react';
import { ArrowLeft, TrendingUp, DollarSign, Coins, Award, Calendar, ChevronRight } from 'lucide-react';
import { useSavings } from '../contexts/SavingsContext';
import { useNavigate } from 'react-router-dom';

const SavingsDashboard = () => {
  const {
    totalSaved,
    totalCashback,
    totalCoinsEarned,
    transactionCount,
    getSavingsByPeriod,
    getTopCategories,
    savingsData
  } = useSavings();

  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const periodData = getSavingsByPeriod(selectedPeriod);
  const topCategories = getTopCategories(5);

  const periods = [
    { id: 'week', label: 'Week' },
    { id: 'month', label: 'Month' },
    { id: 'year', label: 'Year' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600">
        <div className="px-4 py-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-xl hover:bg-white/10 transition-colors mb-4"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Savings Tracker</h1>
              <p className="text-sm text-white/80">Your financial journey</p>
            </div>
          </div>

          {/* Total Saved Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
            <p className="text-sm font-medium text-white/80 mb-2">Total Saved</p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-black text-white">${totalSaved.toFixed(2)}</span>
              <TrendingUp className="w-6 h-6 text-white" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-white/70 mb-1">Cashback Earned</p>
                <p className="text-lg font-bold text-white">${totalCashback.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-white/70 mb-1">Coins Earned</p>
                <p className="text-lg font-bold text-white">🪙 {totalCoinsEarned.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Effect */}
        <div className="relative h-8">
          <svg className="absolute bottom-0 w-full h-8" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
              className="fill-gray-50 dark:fill-gray-900"
            ></path>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 -mt-4">
        {/* Period Selector */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg mb-6 flex gap-2">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`flex-1 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                selectedPeriod === period.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-3">
              <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Saved This {periods.find(p => p.id === selectedPeriod)?.label}</p>
            <p className="text-2xl font-black text-gray-900 dark:text-white">${periodData.saved.toFixed(2)}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-3">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Transactions</p>
            <p className="text-2xl font-black text-gray-900 dark:text-white">{periodData.count}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Cashback</p>
            <p className="text-2xl font-black text-gray-900 dark:text-white">${periodData.cashback.toFixed(2)}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center mb-3">
              <Coins className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Coins</p>
            <p className="text-2xl font-black text-gray-900 dark:text-white">{periodData.coins.toLocaleString()}</p>
          </div>
        </div>

        {/* Top Categories */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Top Categories</h2>
            <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>

          {topCategories.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-sm text-gray-600 dark:text-gray-400">No transactions yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {topCategories.map((category, index) => (
                <div key={category.name} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                    index === 0 ? 'bg-gradient-to-br from-yellow-400 to-amber-500 text-white' :
                    index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-700' :
                    index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-500 text-white' :
                    'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-gray-900 dark:text-white">{category.name}</p>
                      <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        ${category.saved.toFixed(2)}
                      </p>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                        style={{ width: `${(category.saved / topCategories[0].saved) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400">{category.count} txns</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Transactions */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent Activity</h2>
            <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>

          {savingsData.transactions.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">No transactions yet</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                Start shopping to track your savings!
              </p>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg shadow-emerald-500/30"
              >
                Explore Deals
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {savingsData.transactions.slice(0, 5).map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white truncate">
                      {transaction.storeName || transaction.category}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {new Date(transaction.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      +${transaction.saved?.toFixed(2) || '0.00'}
                    </p>
                    {transaction.cashback > 0 && (
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        ${transaction.cashback.toFixed(2)} CB
                      </p>
                    )}
                  </div>

                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Motivational Card */}
        <div className="mt-6 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative">
            <p className="text-sm font-medium text-white/90 mb-2">Keep it up!</p>
            <p className="text-lg font-bold text-white mb-4">
              You've saved ${totalSaved.toFixed(2)} so far. That's amazing! 🎉
            </p>
            <p className="text-sm text-white/80">
              On average, ReZ users save $250/month. You're on the right track!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsDashboard;
