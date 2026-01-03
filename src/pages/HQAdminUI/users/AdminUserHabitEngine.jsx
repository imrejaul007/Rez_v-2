import React, { useState } from 'react';
import {
  ArrowLeft, Calendar, Trophy, TrendingUp, Users, Coins, Target,
  Clock, Flame, Award, Star, ChevronRight, Gift, Lock, Unlock,
  BarChart2, PiggyBank, Bell, Heart, Zap, CheckCircle, AlertTriangle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminUserHabitEngine = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('daily_ritual');

  // Daily Economic Check-in Configuration
  const [dailyCheckInConfig, setDailyCheckInConfig] = useState({
    enabled: true,
    windowStart: '06:00',
    windowEnd: '23:59',
    missedPenalty: 'lose_streak_multiplier',
    baseReward: 5,
    streakMultipliers: [
      { days: 7, multiplier: 1.5 },
      { days: 30, multiplier: 2.0 },
      { days: 90, multiplier: 3.0 },
      { days: 365, multiplier: 5.0 },
    ],
    irreversibleLoss: true, // Miss = permanent loss
  });

  // Daily Check-in Stats
  const dailyStats = {
    totalActiveStreaks: 456789,
    avgStreakLength: 23,
    longestStreak: 847,
    dailyCheckInRate: 78,
    usersWithPerfectMonth: 45678,
    coinsDistributedToday: 2345678,
  };

  // Lifetime Savings Identity
  const [savingsLeaderboard, setSavingsLeaderboard] = useState([
    { rank: 1, userId: 'U001', name: 'Priya M.', lifetimeSaved: 245000, friendsCount: 156, percentile: 99.9 },
    { rank: 2, userId: 'U002', name: 'Rahul S.', lifetimeSaved: 198500, friendsCount: 89, percentile: 99.8 },
    { rank: 3, userId: 'U003', name: 'Ankit K.', lifetimeSaved: 187200, friendsCount: 234, percentile: 99.7 },
    { rank: 4, userId: 'U004', name: 'Sneha P.', lifetimeSaved: 165800, friendsCount: 67, percentile: 99.5 },
    { rank: 5, userId: 'U005', name: 'Vikram R.', lifetimeSaved: 145600, friendsCount: 145, percentile: 99.3 },
  ]);

  // Price Memory System
  const [priceMemoryConfig, setPriceMemoryConfig] = useState({
    enabled: true,
    trackCategories: ['grocery', 'fuel', 'dining', 'fashion', 'electronics'],
    alertThreshold: 10, // Alert if price > 10% higher than last paid
    showSavingsOpportunity: true,
    predictivePricing: true,
  });

  // Price Memory Examples
  const priceMemoryExamples = [
    {
      product: 'Tata Salt 1kg',
      lastPaidPrice: 28,
      currentPrice: 32,
      lowestEverPaid: 24,
      priceTrend: 'up',
      recommendation: 'Wait - prices typically drop in 2 weeks'
    },
    {
      product: 'Amul Butter 500g',
      lastPaidPrice: 280,
      currentPrice: 265,
      lowestEverPaid: 255,
      priceTrend: 'down',
      recommendation: 'Buy now - good price, near your lowest'
    },
    {
      product: 'Petrol (per litre)',
      lastPaidPrice: 102.5,
      currentPrice: 104.2,
      lowestEverPaid: 98.5,
      priceTrend: 'up',
      recommendation: 'Fill up partial - prices rising'
    },
  ];

  // Life Lock-in Preferences
  const [lifeLockConfig, setLifeLockConfig] = useState({
    rememberPreferences: true,
    predictNeeds: true,
    autoReorder: false,
    personalizedTiming: true,
    familySync: true,
  });

  // User Preference Examples
  const userPreferences = [
    {
      userId: 'U12345',
      preferences: [
        { category: 'Coffee', preference: 'Oat milk latte, no sugar, extra shot', merchants: ['Starbucks', 'Blue Tokai'] },
        { category: 'Groceries', preference: 'Organic only, local brands preferred', merchants: ['BigBasket', 'Nature\'s Basket'] },
        { category: 'Dining', preference: 'Window seat, mild spice level', merchants: ['Various'] },
      ],
      predictedNeeds: [
        { item: 'Coffee beans', daysUntilNeeded: 5, confidence: 92 },
        { item: 'Milk', daysUntilNeeded: 2, confidence: 88 },
        { item: 'Vegetables', daysUntilNeeded: 3, confidence: 85 },
      ]
    }
  ];

  // Habit Formation Metrics
  const habitMetrics = {
    usersWithDailyHabit: 678000,
    avgDailyOpenRate: 3.2,
    avgSessionDuration: 4.5,
    habitStrengthScore: 78,
    competitorSwitchRate: 2.1,
  };

  // Irreversible Loss Configurations
  const [irreversibleLosses, setIrreversibleLosses] = useState([
    {
      id: 1,
      trigger: 'Miss daily check-in',
      loss: 'Streak multiplier resets to 1x',
      recoverability: 'Never - must rebuild from scratch',
      usersAffected: 12345,
      enabled: true
    },
    {
      id: 2,
      trigger: 'Miss weekly savings goal',
      loss: 'Lose weekly bonus coins',
      recoverability: 'Next week reset',
      usersAffected: 45678,
      enabled: true
    },
    {
      id: 3,
      trigger: 'Inactive for 30 days',
      loss: 'Lose savings rank, drop tier',
      recoverability: 'Rebuild over time',
      usersAffected: 8901,
      enabled: true
    },
    {
      id: 4,
      trigger: 'Uninstall app',
      loss: 'Lose price memory history',
      recoverability: 'Never - data permanently deleted',
      usersAffected: 234,
      enabled: true
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">User Habit Monopoly</h1>
              <p className="text-orange-200 text-sm">Daily ritual & savings identity</p>
            </div>
          </div>
          <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
            <Flame size={16} className="mr-1" />
            <span className="text-sm">{dailyStats.dailyCheckInRate}% Daily</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{(habitMetrics.usersWithDailyHabit / 1000).toFixed(0)}K</p>
            <p className="text-xs text-orange-200">Daily Habit</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{habitMetrics.avgDailyOpenRate}x</p>
            <p className="text-xs text-orange-200">Opens/Day</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{habitMetrics.competitorSwitchRate}%</p>
            <p className="text-xs text-orange-200">Switch Rate</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 px-4 overflow-x-auto">
        {['daily_ritual', 'savings_rank', 'price_memory', 'life_lock'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 text-sm font-medium capitalize whitespace-nowrap ${
              activeTab === tab
                ? 'text-orange-400 border-b-2 border-orange-400'
                : 'text-gray-400'
            }`}
          >
            {tab.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Daily Ritual Tab */}
        {activeTab === 'daily_ritual' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Calendar size={20} className="text-orange-400 mr-2" />
                <h3 className="text-white font-semibold">Daily Economic Check-in</h3>
              </div>
              <p className="text-gray-400 text-sm">
                One daily irreversible action - miss it = permanent loss
              </p>
            </div>

            {/* Check-in Stats */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-medium mb-4">Today's Check-in Stats</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Active Streaks</p>
                  <p className="text-white font-bold text-xl">{dailyStats.totalActiveStreaks.toLocaleString()}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Avg Streak Length</p>
                  <p className="text-white font-bold text-xl">{dailyStats.avgStreakLength} days</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Longest Streak</p>
                  <p className="text-orange-400 font-bold text-xl">{dailyStats.longestStreak} days</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Coins Distributed</p>
                  <p className="text-yellow-400 font-bold text-xl">{(dailyStats.coinsDistributedToday / 1000000).toFixed(1)}M</p>
                </div>
              </div>
            </div>

            {/* Streak Multipliers */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-medium mb-4">Streak Multipliers</h4>
              <div className="space-y-2">
                {dailyCheckInConfig.streakMultipliers.map((tier, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <div className="flex items-center">
                      <Flame size={18} className={`mr-2 ${
                        tier.days >= 90 ? 'text-red-400' :
                        tier.days >= 30 ? 'text-orange-400' :
                        'text-yellow-400'
                      }`} />
                      <span className="text-white">{tier.days}+ days streak</span>
                    </div>
                    <span className="text-green-400 font-bold">{tier.multiplier}x coins</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Irreversible Losses */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
              <div className="flex items-center mb-3">
                <AlertTriangle size={18} className="text-red-400 mr-2" />
                <h4 className="text-red-400 font-medium">Irreversible Loss Mechanics</h4>
              </div>
              <div className="space-y-2">
                {irreversibleLosses.map(loss => (
                  <div key={loss.id} className="bg-gray-800/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-medium">{loss.trigger}</span>
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        loss.enabled ? 'bg-red-600 text-white' : 'bg-gray-600 text-gray-300'
                      }`}>
                        {loss.enabled ? 'Active' : 'Disabled'}
                      </span>
                    </div>
                    <p className="text-red-400 text-sm">Loss: {loss.loss}</p>
                    <p className="text-gray-500 text-xs">Recovery: {loss.recoverability}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Savings Rank Tab */}
        {activeTab === 'savings_rank' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 border border-yellow-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Trophy size={20} className="text-yellow-400 mr-2" />
                <h3 className="text-white font-semibold">Lifetime Savings Rank</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Users see "₹ saved lifetime vs friends" - social proof as identity
              </p>
            </div>

            {/* Leaderboard */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-medium mb-4">Top Savers Leaderboard</h4>
              <div className="space-y-2">
                {savingsLeaderboard.map((user, idx) => (
                  <div key={user.userId} className={`flex items-center justify-between p-3 rounded-lg ${
                    idx === 0 ? 'bg-yellow-900/30 border border-yellow-500/30' :
                    idx === 1 ? 'bg-gray-700/70' :
                    idx === 2 ? 'bg-orange-900/20' :
                    'bg-gray-700/50'
                  }`}>
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        idx === 0 ? 'bg-yellow-500' :
                        idx === 1 ? 'bg-gray-400' :
                        idx === 2 ? 'bg-orange-600' :
                        'bg-gray-600'
                      }`}>
                        <span className="text-white font-bold">{user.rank}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-gray-400 text-xs">Top {(100 - user.percentile).toFixed(1)}%</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold">₹{user.lifetimeSaved.toLocaleString()}</p>
                      <p className="text-gray-500 text-xs">{user.friendsCount} friends</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Savings Identity Card */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-green-200 text-sm">Your Savings Identity</p>
                  <p className="text-2xl font-bold">₹1,45,600 saved</p>
                </div>
                <Trophy size={40} className="text-yellow-300" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/20 rounded-lg p-2 text-center">
                  <p className="font-bold">Top 5%</p>
                  <p className="text-xs text-green-200">Rank</p>
                </div>
                <div className="bg-white/20 rounded-lg p-2 text-center">
                  <p className="font-bold">+34%</p>
                  <p className="text-xs text-green-200">vs Friends</p>
                </div>
                <div className="bg-white/20 rounded-lg p-2 text-center">
                  <p className="font-bold">156</p>
                  <p className="text-xs text-green-200">Transactions</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Price Memory Tab */}
        {activeTab === 'price_memory' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <PiggyBank size={20} className="text-blue-400 mr-2" />
                <h3 className="text-white font-semibold">Personal Price Memory</h3>
              </div>
              <p className="text-gray-400 text-sm">
                "You paid less last time" - ReZ remembers better than users
              </p>
            </div>

            {/* Price Memory Examples */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-medium mb-4">Price Tracking Examples</h4>
              <div className="space-y-3">
                {priceMemoryExamples.map((item, idx) => (
                  <div key={idx} className="bg-gray-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-white font-medium">{item.product}</h5>
                      {item.priceTrend === 'up' ? (
                        <span className="flex items-center text-red-400 text-sm">
                          <TrendingUp size={14} className="mr-1" /> Rising
                        </span>
                      ) : (
                        <span className="flex items-center text-green-400 text-sm">
                          <TrendingUp size={14} className="mr-1 rotate-180" /> Falling
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div>
                        <p className="text-gray-400 text-xs">Last Paid</p>
                        <p className="text-white font-medium">₹{item.lastPaidPrice}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Current</p>
                        <p className={`font-medium ${
                          item.currentPrice > item.lastPaidPrice ? 'text-red-400' : 'text-green-400'
                        }`}>
                          ₹{item.currentPrice}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Your Lowest</p>
                        <p className="text-green-400 font-medium">₹{item.lowestEverPaid}</p>
                      </div>
                    </div>

                    <div className="bg-blue-900/30 rounded-lg p-2">
                      <p className="text-blue-400 text-sm">
                        <Zap size={12} className="inline mr-1" />
                        {item.recommendation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Config */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-medium mb-4">Price Memory Settings</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Alert when price higher than last paid</span>
                  <span className="text-white font-medium">+{priceMemoryConfig.alertThreshold}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Predictive pricing enabled</span>
                  <span className={priceMemoryConfig.predictivePricing ? 'text-green-400' : 'text-gray-400'}>
                    {priceMemoryConfig.predictivePricing ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {priceMemoryConfig.trackCategories.map((cat, idx) => (
                    <span key={idx} className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs capitalize">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Life Lock Tab */}
        {activeTab === 'life_lock' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Lock size={20} className="text-purple-400 mr-2" />
                <h3 className="text-white font-semibold">Life Lock-in System</h3>
              </div>
              <p className="text-gray-400 text-sm">
                ReZ remembers preferences better than users themselves
              </p>
            </div>

            {/* User Preferences Example */}
            {userPreferences.map(user => (
              <div key={user.userId} className="bg-gray-800 rounded-xl p-4">
                <h4 className="text-white font-medium mb-4">Stored Preferences</h4>

                <div className="space-y-3 mb-4">
                  {user.preferences.map((pref, idx) => (
                    <div key={idx} className="bg-gray-700/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-purple-400 font-medium">{pref.category}</span>
                        <span className="text-gray-500 text-xs">{pref.merchants.join(', ')}</span>
                      </div>
                      <p className="text-white text-sm">{pref.preference}</p>
                    </div>
                  ))}
                </div>

                <h4 className="text-white font-medium mb-3">Predicted Needs</h4>
                <div className="space-y-2">
                  {user.predictedNeeds.map((need, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-700/30 rounded-lg p-3">
                      <div className="flex items-center">
                        <Clock size={14} className="text-gray-400 mr-2" />
                        <span className="text-white">{need.item}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-orange-400 text-sm">In {need.daysUntilNeeded} days</p>
                        <p className="text-gray-500 text-xs">{need.confidence}% confident</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Life Lock Config */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-medium mb-4">Life Lock Settings</h4>
              <div className="space-y-3">
                {Object.entries(lifeLockConfig).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <button
                      onClick={() => setLifeLockConfig(prev => ({ ...prev, [key]: !value }))}
                      className={value ? 'text-green-400' : 'text-gray-500'}
                    >
                      {value ? <Unlock size={20} /> : <Lock size={20} />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Dependency Warning */}
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Heart size={18} className="text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">User Dependency Created</span>
              </div>
              <p className="text-gray-300 text-sm">
                Users who have 6+ months of preference data have 94% retention rate.
                Leaving ReZ means losing all personalized experiences and price intelligence.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUserHabitEngine;
