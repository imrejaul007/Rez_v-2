import React, { useState } from 'react';
import {
  Trophy, Award, Gift, Clock, Users, TrendingUp,
  Star, Target, Sparkles, ChevronRight, Calendar
} from 'lucide-react';

// Contests Home: Contest Platform Overview
// Backend API: GET /api/growth/contests/home
// Backend API: GET /api/growth/contests/active
// Backend API: GET /api/growth/contests/user-stats

const ContestsHome = () => {
  const userStats = {
    contestsEntered: 45,
    contestsWon: 8,
    totalPrizes: 25000,
    rank: 156
  };

  const featuredContest = {
    id: 1,
    title: 'Grand Shopping Spree',
    prize: '₹50,000',
    type: 'Shopping',
    icon: '🛍️',
    deadline: '5 days left',
    participants: '12.5K',
    entries: 3,
    maxEntries: 5
  };

  const activeContests = [
    { id: 2, title: 'Gadget Giveaway', prize: '₹25K', icon: '📱', deadline: '3 days', participants: '8.9K', type: 'lucky-draw' },
    { id: 3, title: 'Food Fest Winner', prize: '₹10K', icon: '🍔', deadline: '7 days', participants: '6.7K', type: 'quiz' },
    { id: 4, title: 'Travel Package', prize: '₹30K', icon: '✈️', deadline: '10 days', participants: '5.2K', type: 'photo' }
  ];

  const categories = [
    { id: 1, name: 'Lucky Draw', icon: '🎰', count: 12 },
    { id: 2, name: 'Quiz Contest', icon: '❓', count: 8 },
    { id: 3, name: 'Photo Contest', icon: '📸', count: 6 },
    { id: 4, name: 'Video Contest', icon: '🎥', count: 4 }
  ];

  const recentWinners = [
    { name: '@winner1', prize: '₹50K', contest: 'Grand Prize', avatar: '🎉' },
    { name: '@winner2', prize: '₹25K', contest: 'Gadget Giveaway', avatar: '🏆' },
    { name: '@winner3', prize: '₹10K', contest: 'Quiz Master', avatar: '⭐' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">Contests</h1>
            </div>
            <p className="text-purple-100 text-sm">Win amazing prizes!</p>
          </div>
          <div className="text-right">
            <p className="text-purple-100 text-xs">Total Won</p>
            <p className="text-white text-xl font-bold">₹{userStats.totalPrizes.toLocaleString()}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
            <Target className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-sm font-bold">{userStats.contestsEntered}</p>
            <p className="text-purple-100 text-xs">Entered</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
            <Award className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-sm font-bold">{userStats.contestsWon}</p>
            <p className="text-purple-100 text-xs">Won</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
            <Gift className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-sm font-bold">₹{(userStats.totalPrizes/1000).toFixed(0)}K</p>
            <p className="text-purple-100 text-xs">Prizes</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
            <Star className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-sm font-bold">#{userStats.rank}</p>
            <p className="text-purple-100 text-xs">Rank</p>
          </div>
        </div>
      </div>

      {/* Featured Contest */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-lg relative overflow-hidden">
          <div className="absolute -right-8 -top-8 text-9xl opacity-10">{featuredContest.icon}</div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-bold">FEATURED CONTEST</span>
            </div>

            <h2 className="text-white text-2xl font-bold mb-1">{featuredContest.title}</h2>
            <p className="text-white/90 text-sm mb-3">Win {featuredContest.prize} worth of prizes!</p>

            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
                <Clock className="w-4 h-4 text-white mx-auto mb-1" />
                <p className="text-white text-xs font-bold">{featuredContest.deadline}</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
                <Users className="w-4 h-4 text-white mx-auto mb-1" />
                <p className="text-white text-xs font-bold">{featuredContest.participants}</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
                <Trophy className="w-4 h-4 text-white mx-auto mb-1" />
                <p className="text-white text-xs font-bold">{featuredContest.entries}/{featuredContest.maxEntries}</p>
              </div>
            </div>

            <button className="w-full bg-white text-orange-600 py-3 rounded-xl font-bold shadow-lg">
              Enter Now
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Contest Types</h2>
        <div className="grid grid-cols-4 gap-3">
          {categories.map((cat) => (
            <button key={cat.id} className="bg-white rounded-xl p-3 shadow-sm text-center">
              <div className="text-3xl mb-2">{cat.icon}</div>
              <p className="font-medium text-gray-800 text-xs">{cat.name}</p>
              <p className="text-xs text-gray-500">{cat.count}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Active Contests */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-500" />
            Active Contests
          </h2>
          <button className="text-purple-600 text-sm">View All</button>
        </div>

        <div className="space-y-3">
          {activeContests.map((contest) => (
            <div key={contest.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-3xl">
                  {contest.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{contest.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {contest.deadline}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {contest.participants}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-purple-600 text-lg">{contest.prize}</p>
                  <button className="mt-1 bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Enter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Winners */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-bold text-gray-800 mb-3">Recent Winners</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {recentWinners.map((winner, idx) => (
            <div
              key={idx}
              className={`p-4 flex items-center gap-3 ${
                idx !== recentWinners.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="text-3xl">{winner.avatar}</div>
              <div className="flex-1">
                <p className="font-bold text-gray-800">{winner.name}</p>
                <p className="text-sm text-gray-600">{winner.contest}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">{winner.prize}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContestsHome;
