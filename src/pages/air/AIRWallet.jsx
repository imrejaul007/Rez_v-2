import React, { useState } from 'react';
import {
  Wallet, Coins, ArrowUpRight, ArrowDownLeft, Clock, Gift,
  ChevronRight, TrendingUp, Sparkles, CreditCard, QrCode,
  Send, Plus, Filter, Download, Eye, EyeOff
} from 'lucide-react';

// AI-R Wallet: Shared Wallet UI (Clone from ReZ)
// Backend API: GET /api/rabtul/coins/balance/:userId
// Backend API: GET /api/rabtul/coins/history/:userId

const AIRWallet = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  const wallet = {
    rezCoins: 2450,
    brandCoins: 680,
    promoCoins: 120,
    totalValue: 3250,
    pendingCoins: 150,
    expiringCoins: 200,
    expiringIn: "7 days"
  };

  const transactions = [
    {
      id: 1,
      type: 'earned',
      title: "AI Discovery Bonus",
      subtitle: "Used AI to find best deal",
      coins: 50,
      timestamp: "Today, 2:30 PM",
      icon: "🤖"
    },
    {
      id: 2,
      type: 'earned',
      title: "Pasta Paradise",
      subtitle: "20% cashback on ₹1,200",
      coins: 240,
      timestamp: "Today, 1:15 PM",
      icon: "🍝"
    },
    {
      id: 3,
      type: 'spent',
      title: "Coffee Corner",
      subtitle: "Redeemed for ₹50 off",
      coins: -100,
      timestamp: "Yesterday",
      icon: "☕"
    },
    {
      id: 4,
      type: 'earned',
      title: "Daily Check-in",
      subtitle: "Day 14 streak bonus",
      coins: 30,
      timestamp: "Yesterday",
      icon: "🔥"
    },
    {
      id: 5,
      type: 'earned',
      title: "Referral Bonus",
      subtitle: "Priya joined using your link",
      coins: 200,
      timestamp: "2 days ago",
      icon: "👥"
    },
    {
      id: 6,
      type: 'expired',
      title: "Promo Coins Expired",
      subtitle: "Welcome bonus",
      coins: -50,
      timestamp: "3 days ago",
      icon: "⏰"
    }
  ];

  const quickActions = [
    { icon: QrCode, label: "Scan & Pay", color: "bg-purple-500" },
    { icon: Send, label: "Send", color: "bg-blue-500" },
    { icon: Gift, label: "Redeem", color: "bg-green-500" },
    { icon: Plus, label: "Earn More", color: "bg-orange-500" }
  ];

  const aiInsights = [
    { text: "You can save ₹320 at Tech World with your coins", action: "Use Now" },
    { text: "200 coins expiring in 7 days - spend them!", action: "View Deals" }
  ];

  const filteredTransactions = activeTab === 'all'
    ? transactions
    : transactions.filter(t => t.type === activeTab);

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-white">My Wallet</h1>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="text-white/80"
          >
            {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
          </button>
        </div>

        {/* Balance Card */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
          <p className="text-purple-200 text-sm">Total Balance</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-4xl font-bold text-white">
              {showBalance ? wallet.totalValue.toLocaleString() : '••••'}
            </span>
            <span className="text-xl text-purple-200">🪙</span>
          </div>
          <p className="text-purple-200 text-sm mt-1">
            ≈ ₹{showBalance ? (wallet.totalValue * 0.5).toLocaleString() : '••••'} value
          </p>

          {/* Coin Breakdown */}
          <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/20">
            <div>
              <p className="text-purple-200 text-xs">ReZ Coins</p>
              <p className="text-white font-semibold">
                {showBalance ? wallet.rezCoins : '••••'}
              </p>
            </div>
            <div>
              <p className="text-purple-200 text-xs">Brand Coins</p>
              <p className="text-white font-semibold">
                {showBalance ? wallet.brandCoins : '••••'}
              </p>
            </div>
            <div>
              <p className="text-purple-200 text-xs">Promo Coins</p>
              <p className="text-white font-semibold">
                {showBalance ? wallet.promoCoins : '••••'}
              </p>
            </div>
          </div>
        </div>

        {/* Pending & Expiring */}
        <div className="flex gap-3 mt-4">
          <div className="flex-1 bg-white/10 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-300" />
              <span className="text-purple-200 text-sm">Pending</span>
            </div>
            <p className="text-white font-semibold mt-1">+{wallet.pendingCoins} 🪙</p>
          </div>
          <div className="flex-1 bg-white/10 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-red-300" />
              <span className="text-purple-200 text-sm">Expiring</span>
            </div>
            <p className="text-white font-semibold mt-1">{wallet.expiringCoins} 🪙 in {wallet.expiringIn}</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map((action, idx) => (
              <button key={idx} className="flex flex-col items-center gap-2">
                <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-600">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="px-4 mt-4">
        <div className="space-y-2">
          {aiInsights.map((insight, idx) => (
            <div key={idx} className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0" />
              <p className="flex-1 text-sm text-purple-800">{insight.text}</p>
              <button className="text-purple-600 text-sm font-medium whitespace-nowrap">
                {insight.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">Transaction History</h2>
          <button className="text-purple-600 text-sm flex items-center gap-1">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {['all', 'earned', 'spent', 'expired'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {filteredTransactions.map((tx, idx) => (
            <div
              key={tx.id}
              className={`flex items-center gap-4 p-4 ${
                idx !== filteredTransactions.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                {tx.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{tx.title}</h3>
                <p className="text-sm text-gray-500">{tx.subtitle}</p>
                <p className="text-xs text-gray-400 mt-0.5">{tx.timestamp}</p>
              </div>
              <div className={`text-right ${
                tx.type === 'earned' ? 'text-green-600' :
                tx.type === 'spent' ? 'text-red-600' : 'text-gray-400'
              }`}>
                <p className="font-semibold">
                  {tx.coins > 0 ? '+' : ''}{tx.coins} 🪙
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 text-purple-600 font-medium py-3">
          View All Transactions
        </button>
      </div>
    </div>
  );
};

export default AIRWallet;
