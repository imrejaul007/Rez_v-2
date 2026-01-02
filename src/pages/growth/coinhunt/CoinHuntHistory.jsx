import React, { useState } from 'react';
import {
  Clock, MapPin, Coins, Calendar, Filter, TrendingUp,
  Award, Target, ChevronRight, Download, Share2
} from 'lucide-react';

// CoinHunt History: Collection History & Stats
// Backend API: GET /api/growth/coinhunt/history
// Backend API: GET /api/growth/coinhunt/stats
// Backend API: GET /api/growth/coinhunt/history/export

const CoinHuntHistory = () => {
  const [timeFilter, setTimeFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const stats = {
    totalCoins: 12450,
    totalScans: 156,
    totalDistance: 45.2,
    avgPerDay: 178,
    bestDay: 450,
    currentStreak: 7
  };

  const recentCollections = [
    {
      id: 1,
      type: 'gold',
      coins: 100,
      location: 'Phoenix Mall',
      timestamp: '2 hours ago',
      distance: 0.5,
      icon: '🥇'
    },
    {
      id: 2,
      type: 'rare',
      coins: 500,
      location: 'Central Park',
      timestamp: '5 hours ago',
      distance: 1.2,
      icon: '💎'
    },
    {
      id: 3,
      type: 'silver',
      coins: 50,
      location: 'MG Road',
      timestamp: '1 day ago',
      distance: 0.8,
      icon: '🥈'
    },
    {
      id: 4,
      type: 'gold',
      coins: 100,
      location: 'City Center',
      timestamp: '1 day ago',
      distance: 1.5,
      icon: '🥇'
    }
  ];

  const dailyStats = [
    { date: 'Today', coins: 350, scans: 8, distance: 2.5 },
    { date: 'Yesterday', coins: 450, scans: 12, distance: 3.8 },
    { date: '2 days ago', coins: 280, scans: 7, distance: 2.1 },
    { date: '3 days ago', coins: 320, scans: 9, distance: 2.8 },
    { date: '4 days ago', coins: 410, scans: 11, distance: 3.5 }
  ];

  const coinTypeBreakdown = [
    { type: 'Gold', count: 45, total: 4500, percentage: 36, color: 'yellow' },
    { type: 'Silver', count: 67, total: 3350, percentage: 27, color: 'gray' },
    { type: 'Bronze', count: 89, total: 2225, percentage: 18, color: 'amber' },
    { type: 'Rare', count: 12, total: 6000, percentage: 19, color: 'purple' }
  ];

  const milestones = [
    { label: '10,000 Coins', achieved: true, date: 'Jan 15, 2026' },
    { label: '100 Locations', achieved: true, date: 'Jan 10, 2026' },
    { label: '30-Day Streak', achieved: false, progress: '7/30' },
    { label: '50 Rare Coins', achieved: false, progress: '12/50' }
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
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">Collection History</h1>
            </div>
            <p className="text-indigo-100 text-sm">Track your coin hunting journey</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
              <Share2 className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
              <Download className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
            <Coins className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-lg font-bold">{stats.totalCoins.toLocaleString()}</p>
            <p className="text-indigo-100 text-xs">Total Coins</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
            <Target className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-lg font-bold">{stats.totalScans}</p>
            <p className="text-indigo-100 text-xs">Total Scans</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
            <MapPin className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-lg font-bold">{stats.totalDistance}km</p>
            <p className="text-indigo-100 text-xs">Distance</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="font-bold text-gray-800 mb-3">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3">
              <TrendingUp className="w-5 h-5 text-green-600 mb-1" />
              <p className="text-2xl font-bold text-gray-800">{stats.avgPerDay}</p>
              <p className="text-xs text-gray-600">Avg coins/day</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3">
              <Award className="w-5 h-5 text-purple-600 mb-1" />
              <p className="text-2xl font-bold text-gray-800">{stats.bestDay}</p>
              <p className="text-xs text-gray-600">Best day</p>
            </div>
          </div>
        </div>
      </div>

      {/* Coin Type Breakdown */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Coin Type Breakdown</h2>
        <div className="bg-white rounded-xl shadow-sm p-4">
          {coinTypeBreakdown.map((coin, idx) => (
            <div
              key={coin.type}
              className={`py-3 ${idx !== coinTypeBreakdown.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${
                    coin.color === 'yellow' ? 'from-yellow-400 to-yellow-600' :
                    coin.color === 'gray' ? 'from-gray-300 to-gray-500' :
                    coin.color === 'amber' ? 'from-amber-500 to-amber-700' :
                    'from-purple-500 to-pink-600'
                  }`} />
                  <span className="font-medium text-gray-800">{coin.type} Coins</span>
                </div>
                <span className="text-sm text-gray-600">{coin.count} collected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${
                      coin.color === 'yellow' ? 'from-yellow-400 to-yellow-600' :
                      coin.color === 'gray' ? 'from-gray-300 to-gray-500' :
                      coin.color === 'amber' ? 'from-amber-500 to-amber-700' :
                      'from-purple-500 to-pink-600'
                    }`}
                    style={{ width: `${coin.percentage}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-gray-800">{coin.total.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Stats */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Daily Summary</h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="text-indigo-600 text-sm flex items-center gap-1"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        <div className="space-y-2">
          {dailyStats.map((day, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="font-medium text-gray-800">{day.date}</span>
                </div>
                <span className="font-bold text-indigo-600">{day.coins} 🪙</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Target className="w-3 h-3" />
                  {day.scans} scans
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {day.distance}km
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Collections */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Recent Collections</h2>
          <button className="text-indigo-600 text-sm">View All</button>
        </div>

        <div className="space-y-2">
          {recentCollections.map((collection) => (
            <div key={collection.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getCoinColor(collection.type)} flex items-center justify-center text-xl`}>
                  {collection.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-800 capitalize">{collection.type} Coin</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {collection.location}
                    </span>
                    <span>•</span>
                    <span>{collection.distance}km away</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{collection.timestamp}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-yellow-600">+{collection.coins}</p>
                  <p className="text-xs text-gray-500">coins</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-bold text-gray-800 mb-3">Milestones</h2>
        <div className="bg-white rounded-xl shadow-sm p-4">
          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between py-3 ${
                idx !== milestones.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  milestone.achieved ? 'bg-green-500' : 'bg-gray-200'
                }`}>
                  {milestone.achieved ? (
                    <Award className="w-5 h-5 text-white" />
                  ) : (
                    <Target className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{milestone.label}</p>
                  <p className="text-xs text-gray-500">
                    {milestone.achieved ? milestone.date : milestone.progress}
                  </p>
                </div>
              </div>
              {milestone.achieved && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Achieved
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinHuntHistory;
