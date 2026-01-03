import React, { useState } from 'react';
import {
  Coins, TrendingUp, Gift, Clock, ChevronRight, Star,
  Target, Zap, Trophy, Calendar, ArrowUpRight, ArrowDownLeft,
  Crown, Flame, Award
} from 'lucide-react';

// CoinHunt Wallet: Gamified Coin Rewards Center
// Backend API: GET /api/coinhunt/wallet/:userId
// Backend API: GET /api/coinhunt/wallet/history/:userId
// Backend API: GET /api/coinhunt/wallet/achievements/:userId

const CoinHuntWallet = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const wallet = {
    totalCoins: 4850,
    lifetimeEarned: 12500,
    level: 8,
    levelName: "Deal Hunter",
    nextLevel: "Deal Master",
    xpCurrent: 720,
    xpRequired: 1000,
    streak: 14,
    rank: 156,
    weeklyChange: "+580"
  };

  const recentActivity = [
    {
      id: 1,
      type: 'earned',
      title: "Claimed Flash Deal",
      merchant: "Pasta Paradise",
      coins: 100,
      timestamp: "2h ago",
      icon: "🍝"
    },
    {
      id: 2,
      type: 'earned',
      title: "Daily Login Bonus",
      subtitle: "Day 14 streak!",
      coins: 50,
      timestamp: "Today",
      icon: "🔥"
    },
    {
      id: 3,
      type: 'spent',
      title: "Redeemed for ₹100 off",
      merchant: "Coffee Corner",
      coins: -200,
      timestamp: "Yesterday",
      icon: "☕"
    },
    {
      id: 4,
      type: 'earned',
      title: "Challenge Completed",
      subtitle: "Hunt 5 deals",
      coins: 250,
      timestamp: "Yesterday",
      icon: "🏆"
    },
    {
      id: 5,
      type: 'bonus',
      title: "Referral Bonus",
      subtitle: "Raj joined using your code",
      coins: 500,
      timestamp: "2 days ago",
      icon: "👥"
    }
  ];

  const achievements = [
    { id: 1, name: "First Hunt", icon: "🎯", earned: true, coins: 50 },
    { id: 2, name: "Deal Streak 7", icon: "🔥", earned: true, coins: 100 },
    { id: 3, name: "Flash Hunter", icon: "⚡", earned: true, coins: 150 },
    { id: 4, name: "50 Deals", icon: "🏅", earned: true, coins: 200 },
    { id: 5, name: "Top 100", icon: "👑", earned: false, progress: 44 },
    { id: 6, name: "100 Deals", icon: "🌟", earned: false, progress: 67 }
  ];

  const challenges = [
    {
      id: 1,
      title: "Weekend Warrior",
      description: "Claim 5 deals this weekend",
      reward: 200,
      progress: 3,
      total: 5,
      expires: "2 days"
    },
    {
      id: 2,
      title: "Category Explorer",
      description: "Hunt deals from 4 different categories",
      reward: 150,
      progress: 2,
      total: 4,
      expires: "5 days"
    }
  ];

  const renderOverview = () => (
    <div className="px-4 py-4 space-y-4">
      {/* Level & Streak */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Level {wallet.level}</p>
            <h3 className="font-bold text-gray-800">{wallet.levelName}</h3>
          </div>
          <div className="flex items-center gap-2 bg-orange-100 px-3 py-1.5 rounded-full">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="font-bold text-orange-600">{wallet.streak} day streak</span>
          </div>
        </div>

        {/* XP Progress */}
        <div className="mb-2">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>{wallet.xpCurrent} XP</span>
            <span>{wallet.xpRequired} XP to {wallet.nextLevel}</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
              style={{ width: `${(wallet.xpCurrent / wallet.xpRequired) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs">This Week</span>
          </div>
          <p className="text-xl font-bold text-green-600">{wallet.weeklyChange}🪙</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Crown className="w-4 h-4" />
            <span className="text-xs">Leaderboard</span>
          </div>
          <p className="text-xl font-bold text-purple-600">#{wallet.rank}</p>
        </div>
      </div>

      {/* Active Challenges */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">Active Challenges</h2>
          <button className="text-orange-600 text-sm">View All</button>
        </div>
        <div className="space-y-3">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-800">{challenge.title}</h3>
                <span className="text-yellow-600 font-bold text-sm">+{challenge.reward}🪙</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">{challenge.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-500 rounded-full"
                      style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm text-gray-600">{challenge.progress}/{challenge.total}</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">Expires in {challenge.expires}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Preview */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">Achievements</h2>
          <button className="text-orange-600 text-sm">See All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {achievements.slice(0, 5).map((ach) => (
            <div
              key={ach.id}
              className={`flex-shrink-0 w-20 text-center ${!ach.earned ? 'opacity-50' : ''}`}
            >
              <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center text-3xl ${
                ach.earned ? 'bg-yellow-100' : 'bg-gray-100'
              }`}>
                {ach.icon}
              </div>
              <p className="text-xs font-medium text-gray-700 mt-2 truncate">{ach.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="px-4 py-4">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {recentActivity.map((activity, idx) => (
          <div
            key={activity.id}
            className={`flex items-center gap-4 p-4 ${
              idx !== recentActivity.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
              {activity.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{activity.title}</h3>
              {activity.merchant && (
                <p className="text-sm text-gray-500">{activity.merchant}</p>
              )}
              {activity.subtitle && (
                <p className="text-sm text-gray-500">{activity.subtitle}</p>
              )}
              <p className="text-xs text-gray-400 mt-0.5">{activity.timestamp}</p>
            </div>
            <div className={`text-right font-semibold ${
              activity.type === 'spent' ? 'text-red-600' :
              activity.type === 'bonus' ? 'text-purple-600' : 'text-green-600'
            }`}>
              {activity.coins > 0 ? '+' : ''}{activity.coins}🪙
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-orange-600 font-medium py-3">
        Load More
      </button>
    </div>
  );

  const renderAchievements = () => (
    <div className="px-4 py-4">
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-yellow-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-yellow-600">4</p>
          <p className="text-xs text-gray-500">Earned</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-gray-600">2</p>
          <p className="text-xs text-gray-500">In Progress</p>
        </div>
        <div className="bg-orange-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-orange-600">500</p>
          <p className="text-xs text-gray-500">Coins Earned</p>
        </div>
      </div>

      <h2 className="font-semibold text-gray-800 mb-3">All Achievements</h2>
      <div className="space-y-3">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className={`bg-white rounded-xl p-4 shadow-sm ${!ach.earned ? 'opacity-70' : ''}`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl ${
                ach.earned ? 'bg-yellow-100' : 'bg-gray-100'
              }`}>
                {ach.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-800">{ach.name}</h3>
                  {ach.earned && (
                    <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                      Earned
                    </span>
                  )}
                </div>
                {ach.earned ? (
                  <p className="text-sm text-yellow-600">+{ach.coins}🪙 earned</p>
                ) : (
                  <div className="mt-1">
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-400 rounded-full"
                        style={{ width: `${ach.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{ach.progress}% complete</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'history', label: 'History', icon: Clock },
    { id: 'achievements', label: 'Achievements', icon: Trophy }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 pt-6 pb-8">
        <h1 className="text-xl font-bold text-white mb-6">My Coins</h1>

        {/* Balance Card */}
        <div className="bg-white/20 backdrop-blur rounded-2xl p-5">
          <p className="text-yellow-100 text-sm">Total Balance</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-4xl font-bold text-white">
              {wallet.totalCoins.toLocaleString()}
            </span>
            <span className="text-2xl">🪙</span>
          </div>
          <p className="text-yellow-100 text-sm mt-1">
            Lifetime: {wallet.lifetimeEarned.toLocaleString()} coins
          </p>

          {/* Quick Actions */}
          <div className="flex gap-3 mt-4 pt-4 border-t border-white/20">
            <button className="flex-1 bg-white/20 text-white py-2 rounded-xl font-medium text-sm flex items-center justify-center gap-1">
              <Gift className="w-4 h-4" />
              Redeem
            </button>
            <button className="flex-1 bg-white text-orange-600 py-2 rounded-xl font-medium text-sm flex items-center justify-center gap-1">
              <Target className="w-4 h-4" />
              Hunt Deals
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 px-2 py-2 flex gap-1 -mt-4 mx-4 rounded-xl sticky top-0 z-10 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1.5 ${
              activeTab === tab.id
                ? 'bg-orange-500 text-white'
                : 'text-gray-600'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'history' && renderHistory()}
      {activeTab === 'achievements' && renderAchievements()}
    </div>
  );
};

export default CoinHuntWallet;
