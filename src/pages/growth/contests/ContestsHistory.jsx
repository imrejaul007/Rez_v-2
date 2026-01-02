import React, { useState } from 'react';
import { Clock, Trophy, Award, Calendar, CheckCircle, XCircle, Target } from 'lucide-react';

// Contests History: User's Contest History
// Backend API: GET /api/growth/contests/user/history
// Backend API: GET /api/growth/contests/user/stats

const ContestsHistory = () => {
  const [filter, setFilter] = useState('all');

  const stats = {
    totalEntered: 45,
    won: 8,
    totalPrizes: 25000,
    winRate: 18
  };

  const contestHistory = [
    {
      id: 1,
      title: 'Grand Shopping Spree',
      icon: '🛍️',
      prize: '₹30,000',
      status: 'won',
      date: 'Jan 11, 2026',
      entries: 5,
      rank: 1
    },
    {
      id: 2,
      title: 'Gadget Giveaway',
      icon: '📱',
      prize: '₹25,000',
      status: 'participated',
      date: 'Dec 15, 2025',
      entries: 3,
      rank: 15
    },
    {
      id: 3,
      title: 'Food Fest',
      icon: '🍔',
      prize: '₹10,000',
      status: 'lost',
      date: 'Nov 20, 2025',
      entries: 2,
      rank: 45
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-6 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-6 h-6 text-white" />
          <h1 className="text-xl font-bold text-white">Contest History</h1>
        </div>
        <p className="text-purple-100 text-sm">Your contest journey</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
            <Target className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-sm font-bold">{stats.totalEntered}</p>
            <p className="text-purple-100 text-xs">Entered</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
            <Trophy className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-sm font-bold">{stats.won}</p>
            <p className="text-purple-100 text-xs">Won</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
            <Award className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-sm font-bold">₹{(stats.totalPrizes/1000).toFixed(0)}K</p>
            <p className="text-purple-100 text-xs">Prizes</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
            <CheckCircle className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-sm font-bold">{stats.winRate}%</p>
            <p className="text-purple-100 text-xs">Win Rate</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 mt-4">
        <div className="flex gap-2">
          {['all', 'won', 'participated', 'lost'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-full font-medium text-sm capitalize ${
                filter === tab
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Contest History List */}
      <div className="px-4 mt-6 mb-4">
        <div className="space-y-3">
          {contestHistory.map((contest) => (
            <div
              key={contest.id}
              className={`bg-white rounded-xl shadow-sm p-4 ${
                contest.status === 'won' ? 'border-2 border-yellow-400' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  {contest.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-800">{contest.title}</h3>
                    {contest.status === 'won' && (
                      <Trophy className="w-5 h-5 text-yellow-500" />
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {contest.date}
                    </span>
                    <span>Rank: #{contest.rank}</span>
                    <span>{contest.entries} entries</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        contest.status === 'won'
                          ? 'bg-green-100 text-green-700'
                          : contest.status === 'participated'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {contest.status === 'won' ? '✅ Won' : contest.status === 'participated' ? '⏳ Participated' : '❌ Lost'}
                    </span>
                    {contest.status === 'won' && (
                      <span className="font-bold text-green-600">+{contest.prize}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContestsHistory;
