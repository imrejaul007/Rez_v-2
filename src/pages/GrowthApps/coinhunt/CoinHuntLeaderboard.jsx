import React, { useState } from 'react';
import {
  Trophy, Crown, Medal, TrendingUp, Calendar,
  ChevronRight, Award, Target, Zap, Users
} from 'lucide-react';

// CoinHunt Leaderboard: Rankings & Competition
// Backend API: GET /api/growth/coinhunt/leaderboard
// Backend API: GET /api/growth/coinhunt/leaderboard/weekly
// Backend API: GET /api/growth/coinhunt/user-rank

const CoinHuntLeaderboard = () => {
  const [timeframe, setTimeframe] = useState('weekly');
  const [category, setCategory] = useState('overall');

  const myRank = {
    position: 234,
    coins: 12450,
    username: 'CoinMaster23',
    change: '+12'
  };

  const topRankers = [
    { rank: 1, name: 'GoldHunter', coins: 45890, avatar: '👑', streak: 30, level: 45 },
    { rank: 2, name: 'CoinKing', coins: 42100, avatar: '🥇', streak: 28, level: 42 },
    { rank: 3, name: 'HuntMaster', coins: 38750, avatar: '🥈', streak: 25, level: 40 },
    { rank: 4, name: 'CoinNinja', coins: 35200, avatar: '🥉', streak: 22, level: 38 },
    { rank: 5, name: 'HuntPro', coins: 32890, avatar: '⭐', streak: 20, level: 36 }
  ];

  const leaderboardList = [
    { rank: 6, name: 'FastCollector', coins: 30100, avatar: '🎯', level: 35 },
    { rank: 7, name: 'CoinRush', coins: 28500, avatar: '⚡', level: 34 },
    { rank: 8, name: 'HuntChamp', coins: 26800, avatar: '🏆', level: 33 },
    { rank: 9, name: 'GoldDigger', coins: 24900, avatar: '💰', level: 32 },
    { rank: 10, name: 'CoinSeeker', coins: 23100, avatar: '🔍', level: 31 }
  ];

  const leagues = [
    { name: 'Diamond League', icon: '💎', min: 40000, color: 'from-purple-500 to-pink-500' },
    { name: 'Gold League', icon: '🥇', min: 25000, color: 'from-yellow-500 to-amber-600' },
    { name: 'Silver League', icon: '🥈', min: 10000, color: 'from-gray-400 to-gray-500' },
    { name: 'Bronze League', icon: '🥉', min: 5000, color: 'from-amber-600 to-amber-800' }
  ];

  const categories = [
    { id: 'overall', label: 'Overall', icon: Trophy },
    { id: 'weekly', label: 'This Week', icon: Calendar },
    { id: 'daily', label: 'Today', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">Leaderboard</h1>
            </div>
            <p className="text-yellow-100 text-sm">Top Coin Hunters</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-full px-3 py-1.5">
            <span className="text-white text-sm font-bold">Weekly Reset: 2d</span>
          </div>
        </div>

        {/* My Rank Card */}
        <div className="bg-white/10 backdrop-blur rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              #{myRank.position}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-white font-bold">{myRank.username}</h2>
                <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {myRank.change}
                </span>
              </div>
              <p className="text-yellow-100 text-sm">Your Position</p>
            </div>
            <div className="text-right">
              <p className="text-white font-bold text-lg">{myRank.coins.toLocaleString()}</p>
              <p className="text-yellow-100 text-xs">Total Coins</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-2 flex gap-2 shadow-sm">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`flex-1 py-2 rounded-lg font-medium text-sm flex items-center justify-center gap-1 transition-colors ${
                  category === cat.id
                    ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white'
                    : 'text-gray-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="px-4 mt-6">
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4">
          <div className="flex items-end justify-center gap-2 mb-4">
            {/* 2nd Place */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-2 border-4 border-white shadow-lg">
                {topRankers[1].avatar}
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <Medal className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                <p className="font-bold text-gray-800 text-sm">{topRankers[1].name}</p>
                <p className="text-xs text-gray-600">{topRankers[1].coins.toLocaleString()}</p>
              </div>
            </div>

            {/* 1st Place */}
            <div className="flex-1 text-center -mt-6">
              <Crown className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-2 border-4 border-white shadow-2xl">
                {topRankers[0].avatar}
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg p-3 shadow-lg">
                <Trophy className="w-6 h-6 text-white mx-auto mb-1" />
                <p className="font-bold text-white">{topRankers[0].name}</p>
                <p className="text-xs text-yellow-100">{topRankers[0].coins.toLocaleString()}</p>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-3xl mx-auto mb-2 border-4 border-white shadow-lg">
                {topRankers[2].avatar}
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <Medal className="w-5 h-5 text-amber-700 mx-auto mb-1" />
                <p className="font-bold text-gray-800 text-sm">{topRankers[2].name}</p>
                <p className="text-xs text-gray-600">{topRankers[2].coins.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rankings List */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Top Hunters</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {[...topRankers.slice(3), ...leaderboardList].map((user, idx) => (
            <div
              key={user.rank}
              className={`p-4 flex items-center gap-3 ${
                idx !== topRankers.slice(3).length + leaderboardList.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <span className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center font-bold text-gray-700">
                #{user.rank}
              </span>
              <span className="text-2xl">{user.avatar}</span>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{user.name}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Level {user.level}
                  </span>
                  {user.streak && (
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-orange-500" />
                      {user.streak} day streak
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-yellow-600">{user.coins.toLocaleString()}</p>
                <p className="text-xs text-gray-500">coins</p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-3 text-indigo-600 font-medium py-3 flex items-center justify-center gap-1">
          View Full Rankings
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Leagues */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-bold text-gray-800 mb-3">Leagues</h2>
        <div className="grid grid-cols-2 gap-3">
          {leagues.map((league) => (
            <div
              key={league.name}
              className={`bg-gradient-to-br ${league.color} rounded-xl p-4 text-white`}
            >
              <div className="text-3xl mb-2">{league.icon}</div>
              <h3 className="font-bold">{league.name}</h3>
              <p className="text-xs opacity-90">{league.min.toLocaleString()}+ coins</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards Info */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-6 h-6" />
            <h3 className="font-bold text-lg">Weekly Rewards</h3>
          </div>
          <p className="text-sm opacity-90 mb-3">Top 100 hunters win exclusive prizes!</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-white/20 rounded-lg p-2">
              <p className="font-bold">1st</p>
              <p className="text-xs">₹5,000</p>
            </div>
            <div className="bg-white/20 rounded-lg p-2">
              <p className="font-bold">2-10th</p>
              <p className="text-xs">₹1,000</p>
            </div>
            <div className="bg-white/20 rounded-lg p-2">
              <p className="font-bold">11-100th</p>
              <p className="text-xs">₹100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinHuntLeaderboard;
