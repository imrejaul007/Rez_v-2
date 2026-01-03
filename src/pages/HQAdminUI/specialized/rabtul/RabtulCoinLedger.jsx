import React, { useState } from 'react';
import {
  Coins, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Activity,
  RefreshCw, Search, Filter, Download, AlertTriangle, CheckCircle, Clock,
  Users, Store, Gift, Zap, Lock, Unlock, BarChart2, PieChart, Settings,
  ChevronRight, Eye, Shield, Database, GitBranch, Layers
} from 'lucide-react';

const RabtulCoinLedger = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [coinType, setCoinType] = useState('all');

  // Coin Economy Overview
  const coinEconomy = {
    totalSupply: 4567890123,
    circulatingSupply: 2345678901,
    lockedSupply: 1234567890,
    burnedCoins: 987654332,
    dailyMinted: 12345678,
    dailyBurned: 2345678,
    dailyTransactions: 8901234,
    avgTransactionValue: 245
  };

  // Coin Types
  const coinTypes = [
    {
      id: 'rez_core',
      name: 'ReZ Coins',
      symbol: 'RZC',
      supply: 2345678901,
      circulating: 1567890123,
      locked: 567890123,
      burned: 210098655,
      dailyVolume: 456789012,
      expirable: true,
      expiryDays: 180,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'brand_coins',
      name: 'Brand Coins',
      symbol: 'BRC',
      supply: 1234567890,
      circulating: 567890123,
      locked: 456789012,
      burned: 210098655,
      dailyVolume: 123456789,
      expirable: true,
      expiryDays: 90,
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 'promo_coins',
      name: 'Promo Coins',
      symbol: 'PRC',
      supply: 987654332,
      circulating: 210098655,
      locked: 210098655,
      burned: 567457022,
      dailyVolume: 89012345,
      expirable: true,
      expiryDays: 30,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  // Recent transactions
  const recentTransactions = [
    {
      id: 1,
      type: 'earn',
      amount: 245,
      coinType: 'rez_core',
      user: 'user_xxxxx',
      merchant: 'Cafe Coffee Day',
      timestamp: '2 mins ago',
      status: 'confirmed'
    },
    {
      id: 2,
      type: 'redeem',
      amount: 500,
      coinType: 'rez_core',
      user: 'user_yyyyy',
      merchant: 'Dominos Pizza',
      timestamp: '5 mins ago',
      status: 'confirmed'
    },
    {
      id: 3,
      type: 'transfer',
      amount: 100,
      coinType: 'brand_coins',
      user: 'user_zzzzz',
      merchant: null,
      timestamp: '8 mins ago',
      status: 'confirmed'
    },
    {
      id: 4,
      type: 'expire',
      amount: 1500,
      coinType: 'promo_coins',
      user: 'user_aaaaa',
      merchant: null,
      timestamp: '12 mins ago',
      status: 'expired'
    },
    {
      id: 5,
      type: 'earn',
      amount: 890,
      coinType: 'rez_core',
      user: 'user_bbbbb',
      merchant: 'Big Bazaar',
      timestamp: '15 mins ago',
      status: 'confirmed'
    }
  ];

  // Earning sources
  const earningSources = [
    { source: 'Purchases', percentage: 45, volume: 2345678901 },
    { source: 'Referrals', percentage: 15, volume: 789012345 },
    { source: 'Games & Quizzes', percentage: 12, volume: 567890123 },
    { source: 'Daily Check-in', percentage: 10, volume: 456789012 },
    { source: 'Reviews & UGC', percentage: 8, volume: 345678901 },
    { source: 'Social Sharing', percentage: 6, volume: 234567890 },
    { source: 'Promotions', percentage: 4, volume: 156789012 }
  ];

  // Redemption categories
  const redemptionCategories = [
    { category: 'Food & Dining', percentage: 35, volume: 1234567890 },
    { category: 'Grocery', percentage: 25, volume: 890123456 },
    { category: 'Fashion', percentage: 15, volume: 567890123 },
    { category: 'Electronics', percentage: 10, volume: 345678901 },
    { category: 'Beauty & Wellness', percentage: 8, volume: 234567890 },
    { category: 'Others', percentage: 7, volume: 189012345 }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(2)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toLocaleString();
  };

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'earn': return <ArrowDownRight className="text-green-400" size={16} />;
      case 'redeem': return <ArrowUpRight className="text-red-400" size={16} />;
      case 'transfer': return <RefreshCw className="text-blue-400" size={16} />;
      case 'expire': return <Clock className="text-yellow-400" size={16} />;
      default: return <Activity className="text-gray-400" size={16} />;
    }
  };

  const getTransactionColor = (type) => {
    switch (type) {
      case 'earn': return 'text-green-400';
      case 'redeem': return 'text-red-400';
      case 'transfer': return 'text-blue-400';
      case 'expire': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 to-orange-900 p-6 border-b border-amber-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Coins size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Coin Ledger</h1>
              <p className="text-amber-200 text-sm">Cross-Ecosystem Coin Economy</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-white/20 px-4 py-2 rounded-lg flex items-center gap-2">
              <Download size={18} />
              Export
            </button>
            <button className="bg-amber-600 px-4 py-2 rounded-lg flex items-center gap-2">
              <Settings size={18} />
              Configure
            </button>
          </div>
        </div>

        {/* Economy Overview */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-amber-200 text-sm">Total Supply</span>
              <Database size={18} className="text-amber-400" />
            </div>
            <p className="text-2xl font-bold">{formatNumber(coinEconomy.totalSupply)}</p>
            <p className="text-xs text-gray-400">All coin types</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-amber-200 text-sm">Circulating</span>
              <Activity size={18} className="text-green-400" />
            </div>
            <p className="text-2xl font-bold">{formatNumber(coinEconomy.circulatingSupply)}</p>
            <p className="text-xs text-green-400">Active in ecosystem</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-amber-200 text-sm">Daily Minted</span>
              <TrendingUp size={18} className="text-cyan-400" />
            </div>
            <p className="text-2xl font-bold">{formatNumber(coinEconomy.dailyMinted)}</p>
            <p className="text-xs text-cyan-400">+{((coinEconomy.dailyMinted / coinEconomy.totalSupply) * 100).toFixed(3)}%</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-amber-200 text-sm">Daily Burned</span>
              <TrendingDown size={18} className="text-red-400" />
            </div>
            <p className="text-2xl font-bold">{formatNumber(coinEconomy.dailyBurned)}</p>
            <p className="text-xs text-red-400">Expired + Redeemed</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Coin Types */}
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <h2 className="text-lg font-semibold mb-4">Coin Types</h2>
          <div className="grid grid-cols-3 gap-4">
            {coinTypes.map(coin => (
              <div key={coin.id} className={`bg-gradient-to-br ${coin.color} rounded-xl p-4`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Coins size={24} />
                    <div>
                      <p className="font-semibold">{coin.name}</p>
                      <p className="text-xs opacity-80">{coin.symbol}</p>
                    </div>
                  </div>
                  {coin.expirable && (
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">
                      Expires in {coin.expiryDays}d
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-white/70">Total Supply</p>
                    <p className="font-semibold">{formatNumber(coin.supply)}</p>
                  </div>
                  <div>
                    <p className="text-white/70">Circulating</p>
                    <p className="font-semibold">{formatNumber(coin.circulating)}</p>
                  </div>
                  <div>
                    <p className="text-white/70">Locked</p>
                    <p className="font-semibold">{formatNumber(coin.locked)}</p>
                  </div>
                  <div>
                    <p className="text-white/70">Daily Volume</p>
                    <p className="font-semibold">{formatNumber(coin.dailyVolume)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-App Sync Status */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-4 border border-cyan-500/30">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Cross-App Coin Sync</h2>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle size={16} />
              <span className="text-sm">All Synced</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {['ReZ', 'BizOne', 'AI-R', 'CoinHunt', 'Dinezy', 'Grocify', 'BuzzLoop', 'LocalEdge'].map((app, idx) => (
              <div key={idx} className="bg-gray-900/50 rounded-lg p-3 flex items-center justify-between">
                <span className="text-sm">{app}</span>
                <div className="flex items-center gap-1 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-xs">Synced</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Real-time ledger sync across all RTMN ecosystem apps • Last sync: 2 seconds ago
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Earning Sources */}
          <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
            <h3 className="font-semibold mb-4">Earning Sources</h3>
            <div className="space-y-3">
              {earningSources.map((source, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-400">{source.source}</span>
                    <span className="font-medium">{source.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{formatNumber(source.volume)} coins</p>
                </div>
              ))}
            </div>
          </div>

          {/* Redemption Categories */}
          <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
            <h3 className="font-semibold mb-4">Redemption Categories</h3>
            <div className="space-y-3">
              {redemptionCategories.map((cat, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-400">{cat.category}</span>
                    <span className="font-medium">{cat.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{formatNumber(cat.volume)} coins</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
            <div className="flex items-center gap-2">
              <select
                value={coinType}
                onChange={(e) => setCoinType(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-1 text-sm"
              >
                <option value="all">All Types</option>
                <option value="rez_core">ReZ Coins</option>
                <option value="brand_coins">Brand Coins</option>
                <option value="promo_coins">Promo Coins</option>
              </select>
              <button className="text-amber-400 text-sm font-medium">
                View All
              </button>
            </div>
          </div>
          <div className="space-y-2">
            {recentTransactions.map(tx => (
              <div key={tx.id} className="flex items-center justify-between p-3 bg-gray-900 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                    {getTransactionIcon(tx.type)}
                  </div>
                  <div>
                    <p className="font-medium capitalize">{tx.type}</p>
                    <p className="text-xs text-gray-500">
                      {tx.merchant || tx.user} • {tx.timestamp}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${getTransactionColor(tx.type)}`}>
                    {tx.type === 'earn' ? '+' : tx.type === 'redeem' || tx.type === 'expire' ? '-' : ''}
                    {formatNumber(tx.amount)}
                  </p>
                  <p className="text-xs text-gray-500">{tx.coinType.replace('_', ' ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4">
          <button className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-amber-500/50 transition-colors text-left">
            <Zap size={24} className="text-amber-400 mb-2" />
            <p className="font-medium">Mint Coins</p>
            <p className="text-xs text-gray-500">Issue new coins</p>
          </button>
          <button className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-amber-500/50 transition-colors text-left">
            <Lock size={24} className="text-purple-400 mb-2" />
            <p className="font-medium">Lock/Unlock</p>
            <p className="text-xs text-gray-500">Manage locked coins</p>
          </button>
          <button className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-amber-500/50 transition-colors text-left">
            <AlertTriangle size={24} className="text-red-400 mb-2" />
            <p className="font-medium">Emergency</p>
            <p className="text-xs text-gray-500">Freeze/burn controls</p>
          </button>
          <button className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-amber-500/50 transition-colors text-left">
            <BarChart2 size={24} className="text-cyan-400 mb-2" />
            <p className="font-medium">Analytics</p>
            <p className="text-xs text-gray-500">Coin economy stats</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RabtulCoinLedger;
