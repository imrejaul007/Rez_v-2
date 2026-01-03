import React, { useState } from 'react';
import {
  MapPin, Coins, Trophy, Target, Zap, Clock, Gift,
  ChevronRight, Star, TrendingUp, Award, Sparkles
} from 'lucide-react';

// CoinHunt Home: AR Coin Collection Game
// Backend API: GET /api/growth/coinhunt/home
// Backend API: GET /api/growth/coinhunt/nearby-coins
// Backend API: GET /api/growth/coinhunt/user-stats
// Backend API: POST /api/growth/coinhunt/collect-coin

const CoinHuntHome = () => {
  const [activeTab, setActiveTab] = useState('hunt');

  const userStats = {
    totalCoins: 12450,
    todayCoins: 350,
    streak: 7,
    level: 15,
    rank: 234,
    nextLevelCoins: 500
  };

  const nearbyCoinSpots = [
    { id: 1, type: 'gold', distance: '50m', coins: 100, location: 'Phoenix Mall', expires: '30 min' },
    { id: 2, type: 'silver', distance: '120m', coins: 50, location: 'Central Park', expires: '45 min' },
    { id: 3, type: 'bronze', distance: '200m', coins: 25, location: 'MG Road', expires: '1 hr' },
    { id: 4, type: 'rare', distance: '350m', coins: 500, location: 'City Center', expires: '15 min' }
  ];

  const activeChallenges = [
    { id: 1, name: 'Morning Hunter', target: 5, progress: 3, reward: 200, timeLeft: '2h 30m' },
    { id: 2, name: 'Streak Master', target: 7, progress: 7, reward: 500, timeLeft: 'Daily' },
    { id: 3, name: 'Gold Collector', target: 10, progress: 6, reward: 1000, timeLeft: '5 days' }
  ];

  const achievements = [
    { icon: '🔥', name: '7-Day Streak', unlocked: true },
    { icon: '💰', name: '10K Coins', unlocked: true },
    { icon: '🏆', name: 'Top 500', unlocked: true },
    { icon: '⭐', name: 'Level 15', unlocked: true },
    { icon: '🎯', name: '100 Hunts', unlocked: false },
    { icon: '👑', name: 'Legendary', unlocked: false }
  ];

  const coinTypes = [
    { type: 'gold', color: 'yellow', emoji: '🥇', value: '100' },
    { type: 'silver', color: 'gray', emoji: '🥈', value: '50' },
    { type: 'bronze', color: 'amber', emoji: '🥉', value: '25' },
    { type: 'rare', color: 'purple', emoji: '💎', value: '500+' }
  ];

  const getCoinColor = (type) => {
    const colors = {
      gold: 'from-yellow-400 to-yellow-600',
      silver: 'from-gray-300 to-gray-500',
      bronze: 'from-amber-500 to-amber-700',
      rare: 'from-purple-500 to-pink-600'
    };
    return colors[type] || 'from-blue-400 to-blue-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Coins className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">CoinHunt</h1>
            </div>
            <p className="text-yellow-100 text-sm">AR Coin Collection Game</p>
          </div>
          <div className="text-right">
            <p className="text-yellow-100 text-xs">Your Balance</p>
            <p className="text-white text-xl font-bold flex items-center gap-1">
              <span>🪙</span>
              {userStats.totalCoins.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Level Progress */}
        <div className="bg-white/20 backdrop-blur rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-white" />
              <span className="text-white font-bold">Level {userStats.level}</span>
            </div>
            <span className="text-yellow-100 text-sm">
              {userStats.nextLevelCoins} coins to Level {userStats.level + 1}
            </span>
          </div>
          <div className="h-2 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '65%' }} />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
            <Zap className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-lg font-bold">{userStats.todayCoins}</p>
            <p className="text-yellow-100 text-xs">Today</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
            <Target className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-lg font-bold">{userStats.streak} days</p>
            <p className="text-yellow-100 text-xs">Streak</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
            <Trophy className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-lg font-bold">#{userStats.rank}</p>
            <p className="text-yellow-100 text-xs">Rank</p>
          </div>
        </div>
      </div>

      {/* Coin Types Guide */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Coin Types</h2>
        <div className="grid grid-cols-4 gap-2">
          {coinTypes.map((coin) => (
            <div key={coin.type} className="bg-white rounded-xl p-3 shadow-sm text-center">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getCoinColor(coin.type)} flex items-center justify-center mx-auto text-2xl mb-1`}>
                {coin.emoji}
              </div>
              <p className="text-xs font-medium text-gray-800 capitalize">{coin.type}</p>
              <p className="text-xs text-gray-500">{coin.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Coins */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-500" />
            Nearby Coins
          </h2>
          <button className="text-indigo-600 text-sm flex items-center gap-1">
            Map View
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {nearbyCoinSpots.map((spot) => (
            <div key={spot.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${getCoinColor(spot.type)} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {coinTypes.find(c => c.type === spot.type)?.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-800 capitalize">{spot.type} Coin</h3>
                    {spot.type === 'rare' && (
                      <Sparkles className="w-4 h-4 text-purple-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{spot.location}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {spot.distance} away
                    </span>
                    <span className="text-xs text-orange-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {spot.expires}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-yellow-600">+{spot.coins}</p>
                  <button className="mt-1 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Hunt
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5" />
          Open AR Hunt Mode
        </button>
      </div>

      {/* Active Challenges */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-500" />
            Active Challenges
          </h2>
          <button className="text-indigo-600 text-sm">View All</button>
        </div>

        <div className="space-y-3">
          {activeChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-800">{challenge.name}</h3>
                <span className="text-green-600 font-bold text-sm">+{challenge.reward}🪙</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">{challenge.progress}/{challenge.target} completed</span>
                <span className="text-xs text-orange-600">{challenge.timeLeft}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
                  style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-bold text-gray-800 mb-3">Achievements</h2>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-3 text-center ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-yellow-100 to-amber-100'
                    : 'bg-gray-100 opacity-50'
                }`}
              >
                <div className="text-3xl mb-1">{achievement.icon}</div>
                <p className="text-xs font-medium text-gray-800">{achievement.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mt-6 mb-4">
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-white rounded-xl p-4 shadow-sm text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="font-bold text-gray-800 text-sm">Leaderboard</p>
          </button>
          <button className="bg-white rounded-xl p-4 shadow-sm text-center">
            <Gift className="w-8 h-8 text-pink-500 mx-auto mb-2" />
            <p className="font-bold text-gray-800 text-sm">Rewards</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinHuntHome;
