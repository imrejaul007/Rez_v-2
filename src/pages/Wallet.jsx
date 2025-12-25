import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '../contexts/WalletContext';
import {
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  ChevronRight,
  CreditCard,
  Smartphone,
  ScanLine,
  Tag,
  Gamepad2,
  Upload,
  Sparkles,
  TrendingUp,
  Send,
  Gift,
  Store,
  Shield,
  Download,
  X,
  Bell,
  Trophy,
  Flame
} from 'lucide-react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import BottomNavManager from '../components/layout/BottomNavManager';

const Wallet = () => {
  const {
    rezCoins,
    brandedCoins,
    promoCoins,
    cashbackBalance,
    pendingRewards,
    totalCoinsValue,
    totalWalletValue,
    transactions,
    pendingCashback,
    paymentMethods,
    savingsStats,
    alerts,
    coinUsageOrder,
    dismissAlert
  } = useWallet();

  const [activeTab, setActiveTab] = useState('all'); // all | earned | spent | pending
  const [showTrustSection, setShowTrustSection] = useState(false);

  // Filter transactions based on active tab
  const filteredTransactions = transactions.filter(tx => {
    if (activeTab === 'all') return true;
    if (activeTab === 'earned') return tx.type === 'earned' || tx.type === 'cashback';
    if (activeTab === 'spent') return tx.type === 'spent';
    if (activeTab === 'pending') return tx.type === 'pending';
    return true;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-32 transition-colors">
      {/* 🔝 WALLET HEADER - VALUE AT A GLANCE */}
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-h2 font-poppins text-rez-navy dark:text-white">Wallet</h1>
        <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mt-1">Your money should work harder for you</p>
      </div>

      {/* Hero Balance Card */}
      <div className="mx-4 mb-4">
        <div className="p-6 rounded-rez-2xl bg-gradient-to-br from-emerald-500/20 via-emerald-600/10 to-amber-500/20 dark:from-emerald-500/20 dark:via-emerald-600/10 dark:to-amber-500/20 border border-emerald-500/30 dark:border-emerald-500/30">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-body-sm text-rez-gray-600 dark:text-gray-300 mb-1">👛 Wallet Balance</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-rez-navy dark:text-white">₹{totalWalletValue.toLocaleString()}</span>
              </div>
              <p className="text-body-sm text-emerald-600 dark:text-emerald-300 mt-1">
                Includes cashback + ReZ Coins
              </p>
            </div>
          </div>

          {/* Breakdown Row - Mini Cards */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="p-3 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 dark:bg-white/10 backdrop-blur">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-lg">🟢</span>
                <p className="text-caption text-rez-gray-600 dark:text-gray-300">ReZ Coins</p>
              </div>
              <p className="text-body-sm font-bold text-rez-navy dark:text-white">{rezCoins.balance}</p>
              <p className="text-caption text-rez-gray-500 dark:text-gray-400">≈ ₹{rezCoins.balance}</p>
            </div>

            <div className="p-3 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 dark:bg-white/10 backdrop-blur">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-lg">🔵</span>
                <p className="text-caption text-rez-gray-600 dark:text-gray-300">Cashback</p>
              </div>
              <p className="text-body-sm font-bold text-blue-500 dark:text-blue-400">₹{cashbackBalance}</p>
              <p className="text-caption text-rez-gray-500 dark:text-gray-400">Ready to use</p>
            </div>

            <div className="p-3 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 dark:bg-white/10 backdrop-blur">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-lg">🟡</span>
                <p className="text-caption text-rez-gray-600 dark:text-gray-300">Pending</p>
              </div>
              <p className="text-body-sm font-bold text-amber-500 dark:text-amber-400">₹{pendingRewards}</p>
              <p className="text-caption text-rez-gray-500 dark:text-gray-400">Tracking</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🚨 SMART WALLET ALERTS */}
      {alerts.length > 0 && (
        <div className="mx-4 mb-4 space-y-2">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-rez-lg border flex items-start gap-3 ${
                alert.priority === 'high'
                  ? 'bg-red-500/10 dark:bg-red-500/10 border-red-500/30 dark:border-red-500/30'
                  : alert.priority === 'medium'
                  ? 'bg-amber-500/10 dark:bg-amber-500/10 border-amber-500/30 dark:border-amber-500/30'
                  : 'bg-blue-500/10 dark:bg-blue-500/10 border-blue-500/30 dark:border-blue-500/30'
              }`}
            >
              <span className="text-2xl">{alert.icon}</span>
              <div className="flex-1">
                <p className="text-body-sm font-semibold text-rez-navy dark:text-white">{alert.title}</p>
                <p className="text-caption text-rez-gray-700 dark:text-gray-300 mt-1">{alert.message}</p>
                <button className="text-caption font-medium text-emerald-600 dark:text-emerald-400 mt-2">
                  {alert.action} →
                </button>
              </div>
              <button
                onClick={() => dismissAlert(alert.id)}
                className="text-rez-gray-400 dark:text-gray-400 hover:text-rez-navy dark:hover:text-rez-navy dark:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 🏆 LOYALTY & REWARDS HUB LINK */}
      <div className="mx-4 mb-6">
        <Link
          to="/loyalty-rewards"
          className="block p-5 rounded-rez-lg bg-gradient-to-r from-emerald-500/20 via-amber-500/20 to-purple-500/20 dark:from-emerald-500/20 dark:via-amber-500/20 dark:to-purple-500/20 border border-emerald-500/30 dark:border-emerald-500/30"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-rez-md bg-emerald-500/30 dark:bg-emerald-500/30 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-h4 font-poppins text-rez-navy dark:text-white">Loyalty & Rewards Hub</h3>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">Track progress, unlock benefits</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-rez-gray-400 dark:text-gray-400" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10">
              <div className="flex items-center gap-1 mb-1">
                <Trophy className="w-4 h-4 text-emerald-400" />
                <p className="text-xs text-rez-gray-700 dark:text-gray-300">Active Brands</p>
              </div>
              <p className="text-lg font-bold text-rez-navy dark:text-white">7</p>
            </div>
            <div className="p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10">
              <div className="flex items-center gap-1 mb-1">
                <Flame className="w-4 h-4 text-orange-400" />
                <p className="text-xs text-rez-gray-700 dark:text-gray-300">Streaks</p>
              </div>
              <p className="text-lg font-bold text-orange-400">4</p>
            </div>
            <div className="p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10">
              <div className="flex items-center gap-1 mb-1">
                <Gift className="w-4 h-4 text-amber-400" />
                <p className="text-xs text-rez-gray-700 dark:text-gray-300">Unlocked</p>
              </div>
              <p className="text-lg font-bold text-amber-400">12</p>
            </div>
          </div>
        </Link>
      </div>

      {/* 🪙 COIN TYPES SECTION */}
      <div className="mx-4 mb-6">
        <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-3">Your ReZ Rewards</h2>

        {/* 1️⃣ ReZ Coins (Universal) */}
        <div className="mb-3 p-5 rounded-rez-lg bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 dark:from-emerald-500/20 dark:to-emerald-600/10 border border-emerald-500/30 dark:border-emerald-500/30">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/30 dark:bg-emerald-500/30 flex items-center justify-center">
              <span className="text-2xl">🟢</span>
            </div>
            <div className="flex-1">
              <h3 className="text-h4 font-poppins text-rez-navy dark:text-white">ReZ Coins</h3>
              <p className="text-caption text-rez-gray-700 dark:text-gray-300 mt-1">{rezCoins.description}</p>
            </div>
            <div className="text-right">
              <p className="text-h3 font-poppins text-emerald-600 dark:text-emerald-400">{rezCoins.balance}</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Coins</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="p-2 rounded-lg bg-rez-gray-50 dark:bg-white/5">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Usable at</p>
              <p className="text-xs font-medium text-rez-navy dark:text-white">{rezCoins.usableAt}</p>
            </div>
            <div className="p-2 rounded-lg bg-rez-gray-50 dark:bg-white/5">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Expiry</p>
              <p className="text-xs font-medium text-rez-navy dark:text-white">{rezCoins.expiry}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 py-2 px-3 rounded-xl bg-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3" />
              Use Coins
            </button>
            <button className="flex-1 py-2 px-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 text-rez-navy dark:text-white text-xs font-semibold flex items-center justify-center gap-1">
              <Send className="w-3 h-3" />
              Send
            </button>
            <button className="flex-1 py-2 px-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 text-rez-navy dark:text-white text-xs font-semibold flex items-center justify-center gap-1">
              <Gift className="w-3 h-3" />
              Gift
            </button>
          </div>
        </div>

        {/* 2️⃣ Branded Coins (Merchant Coins) */}
        <div className="mb-3 p-5 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-h4 font-poppins text-rez-navy dark:text-white">Branded Coins</h3>
            <Badge variant="default" size="sm">Merchant Specific</Badge>
          </div>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-4">Earned from specific stores. Use at the same store.</p>

          <div className="space-y-2">
            {brandedCoins.map((coin, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                  style={{ backgroundColor: `${coin.color}30` }}
                >
                  {coin.logo}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-rez-navy dark:text-white">{coin.merchant}</p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">{coin.usableAt}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold" style={{ color: coin.color }}>
                    {coin.balance}
                  </p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">Coins</p>
                </div>
                <ChevronRight className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* 3️⃣ Promo Coins (Limited Time) */}
        <div className="mb-3 p-5 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-500/30">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-amber-500/30 flex items-center justify-center">
              <span className="text-2xl">{promoCoins.icon}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-rez-navy dark:text-white">Promo Coins</h3>
              <p className="text-xs text-rez-gray-700 dark:text-gray-300 mt-1">{promoCoins.description}</p>
              <div className="flex items-center gap-1 mt-2">
                <Clock className="w-3 h-3 text-amber-400" />
                <p className="text-xs font-semibold text-amber-400">
                  Expires in {promoCoins.expiry}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-amber-400">{promoCoins.balance}</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Coins</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="p-2 rounded-lg bg-rez-gray-50 dark:bg-white/5">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Campaign</p>
              <p className="text-xs font-medium text-rez-navy dark:text-white">{promoCoins.campaign}</p>
            </div>
            <div className="p-2 rounded-lg bg-rez-gray-50 dark:bg-white/5">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Max Redemption</p>
              <p className="text-xs font-medium text-rez-navy dark:text-white">{promoCoins.maxRedemption}</p>
            </div>
          </div>

          <button className="w-full py-2 px-3 rounded-xl bg-amber-500/20 text-amber-400 text-xs font-semibold flex items-center justify-center gap-1">
            <Bell className="w-3 h-3" />
            Use Before Expiry
          </button>
        </div>
      </div>

      {/* 🔄 COIN USAGE ORDER */}
      <div className="mx-4 mb-6">
        <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-rez-navy dark:text-white mb-2">
                How coins are used when you pay
              </p>
              <div className="flex items-center gap-2 text-xs text-rez-gray-700 dark:text-gray-300">
                <span className="px-2 py-1 rounded-md bg-amber-500/20 text-amber-400 font-medium">
                  1. Promo Coins
                </span>
                <span>→</span>
                <span className="px-2 py-1 rounded-md bg-purple-500/20 text-purple-400 font-medium">
                  2. Branded Coins
                </span>
                <span>→</span>
                <span className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-400 font-medium">
                  3. ReZ Coins
                </span>
              </div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-2">
                Automatically applied for maximum savings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 📊 SAVINGS INSIGHT SECTION */}
      <div className="mx-4 mb-6">
        <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-3 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-emerald-400" />
          Your Savings Story
        </h2>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30">
            <p className="text-xs text-rez-gray-700 dark:text-gray-300 mb-1">💰 Total Saved</p>
            <p className="text-2xl font-bold text-emerald-400">
              ₹{savingsStats.totalSaved.toLocaleString()}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30">
            <p className="text-xs text-rez-gray-700 dark:text-gray-300 mb-1">📅 This Month</p>
            <p className="text-2xl font-bold text-blue-400">
              ₹{savingsStats.thisMonth}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30">
            <p className="text-xs text-rez-gray-700 dark:text-gray-300 mb-1">🔁 Avg/Visit</p>
            <p className="text-2xl font-bold text-purple-400">
              ₹{savingsStats.avgPerVisit}
            </p>
          </div>
        </div>

        {/* Simple Trend Graph */}
        <div className="p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10">
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-3">📈 Monthly Savings Trend</p>
          <div className="flex items-end justify-between gap-2 h-24">
            {savingsStats.monthlyTrend.map((value, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg transition-all"
                  style={{ height: `${(value / Math.max(...savingsStats.monthlyTrend)) * 100}%` }}
                ></div>
                <p className="text-xs text-rez-gray-600 dark:text-gray-500">M{index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🧾 TRANSACTION TIMELINE */}
      <div className="mx-4 mb-6">
        <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-3">Wallet Activity</h2>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
          {[
            { id: 'all', label: 'All' },
            { id: 'earned', label: 'Earned' },
            { id: 'spent', label: 'Used' },
            { id: 'pending', label: 'Pending' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-white/5 text-rez-gray-600 dark:text-gray-400 border border-rez-gray-200 dark:border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Transaction List */}
        <div className="space-y-2">
          {filteredTransactions.map((tx) => (
            <div
              key={tx.id}
              className="p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {tx.storeIcon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-rez-navy dark:text-white truncate">{tx.store}</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">{tx.description}</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-500 mt-1">
                  {tx.date} • {tx.time}
                </p>
              </div>
              <div className="text-right">
                <p
                  className={`text-lg font-bold ${
                    tx.type === 'earned' || tx.type === 'cashback'
                      ? 'text-emerald-400'
                      : tx.type === 'spent'
                      ? 'text-red-400'
                      : 'text-amber-400'
                  }`}
                >
                  {tx.type === 'earned' || tx.type === 'cashback' ? '+' : tx.type === 'spent' ? '-' : ''}
                  {tx.coinType === 'cashback' ? '₹' : ''}
                  {tx.amount}
                </p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                  {tx.coinType === 'cashback' ? 'cashback' : 'coins'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔐 TRUST & TRANSPARENCY */}
      <div className="mx-4 mb-6">
        <button
          onClick={() => setShowTrustSection(!showTrustSection)}
          className="w-full p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-blue-400" />
            <p className="text-sm font-semibold text-rez-navy dark:text-white">Trust & Transparency</p>
          </div>
          <ChevronRight
            className={`w-5 h-5 text-rez-gray-600 dark:text-gray-400 transition-transform ${
              showTrustSection ? 'rotate-90' : ''
            }`}
          />
        </button>

        {showTrustSection && (
          <div className="mt-2 p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 space-y-3">
            <button className="w-full text-left text-sm text-rez-gray-700 dark:text-gray-300 hover:text-rez-navy dark:text-white flex items-center justify-between">
              <span>📋 Full ledger view</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="w-full text-left text-sm text-rez-gray-700 dark:text-gray-300 hover:text-rez-navy dark:text-white flex items-center justify-between">
              <span>📖 Coin rules explained</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="w-full text-left text-sm text-rez-gray-700 dark:text-gray-300 hover:text-rez-navy dark:text-white flex items-center justify-between">
              <span>⏰ Expiry logic</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="w-full text-left text-sm text-rez-gray-700 dark:text-gray-300 hover:text-rez-navy dark:text-white flex items-center justify-between">
              <span>💾 Download transaction history</span>
              <Download className="w-4 h-4" />
            </button>
            <button className="w-full text-left text-sm text-rez-gray-700 dark:text-gray-300 hover:text-rez-navy dark:text-white flex items-center justify-between">
              <span>🔒 Privacy controls</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* FINAL MESSAGE */}
      <div className="mx-4 mb-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-600/10 border border-purple-500/30 text-center">
          <p className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
            Your money should work harder for you.
          </p>
          <p className="text-xs text-rez-gray-700 dark:text-gray-300">ReZ makes sure it does.</p>
        </div>
      </div>

      {/* ⚡ QUICK ACTIONS - FLOATING BAR */}
      <div className="fixed bottom-20 left-0 right-0 px-4 z-40">
        <div className="glass rounded-3xl p-3 border border-rez-gray-200 dark:border-white/10">
          <div className="grid grid-cols-4 gap-2">
            <button className="flex flex-col items-center gap-1 py-3 px-2 rounded-2xl bg-emerald-500/20 active:scale-95 transition-transform">
              <ScanLine className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-400">Scan</span>
            </button>
            <button className="flex flex-col items-center gap-1 py-3 px-2 rounded-2xl bg-rez-gray-50 dark:bg-white/5 active:scale-95 transition-transform">
              <Tag className="w-5 h-5 text-rez-gray-700 dark:text-gray-300" />
              <span className="text-xs font-medium text-rez-gray-700 dark:text-gray-300">Offers</span>
            </button>
            <button className="flex flex-col items-center gap-1 py-3 px-2 rounded-2xl bg-rez-gray-50 dark:bg-white/5 active:scale-95 transition-transform">
              <Gamepad2 className="w-5 h-5 text-rez-gray-700 dark:text-gray-300" />
              <span className="text-xs font-medium text-rez-gray-700 dark:text-gray-300">Play</span>
            </button>
            <button className="flex flex-col items-center gap-1 py-3 px-2 rounded-2xl bg-rez-gray-50 dark:bg-white/5 active:scale-95 transition-transform">
              <Upload className="w-5 h-5 text-rez-gray-700 dark:text-gray-300" />
              <span className="text-xs font-medium text-rez-gray-700 dark:text-gray-300">Bill</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default Wallet;
