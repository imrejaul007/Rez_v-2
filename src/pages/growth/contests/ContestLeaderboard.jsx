import React from 'react';
import { Trophy, Crown, Medal, Star, TrendingUp } from 'lucide-react';

// Contest Leaderboard: Contest Rankings
// Backend API: GET /api/growth/contests/:id/leaderboard

const ContestLeaderboard = () => {
  const topContestants = [
    { rank: 1, name: '@winner1', avatar: '👑', entries: 5, score: 9850 },
    { rank: 2, name: '@winner2', avatar: '🥇', entries: 5, score: 9200 },
    { rank: 3, name: '@winner3', avatar: '🥈', entries: 4, score: 8750 }
  ];

  const leaderboard = [
    { rank: 4, name: '@user4', avatar: '⭐', entries: 3, score: 7800 },
    { rank: 5, name: '@user5', avatar: '🎯', entries: 3, score: 7200 },
    { rank: 6, name: '@user6', avatar: '💫', entries: 2, score: 6500 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 px-4 pt-6 pb-8">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <Trophy className="w-6 h-6" />
          Contest Leaderboard
        </h1>
        <p className="text-yellow-100 text-sm mt-1">Grand Shopping Spree</p>
      </div>

      {/* Top 3 Podium */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4">
          <div className="flex items-end justify-center gap-2 mb-4">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-2">
                {topContestants[1].avatar}
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <Medal className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                <p className="font-bold text-gray-800 text-sm">{topContestants[1].name}</p>
                <p className="text-xs text-gray-600">{topContestants[1].score} pts</p>
              </div>
            </div>

            <div className="flex-1 text-center -mt-6">
              <Crown className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-2">
                {topContestants[0].avatar}
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg p-3">
                <Trophy className="w-6 h-6 text-white mx-auto mb-1" />
                <p className="font-bold text-white">{topContestants[0].name}</p>
                <p className="text-xs text-yellow-100">{topContestants[0].score} pts</p>
              </div>
            </div>

            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-3xl mx-auto mb-2">
                {topContestants[2].avatar}
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <Medal className="w-5 h-5 text-amber-700 mx-auto mb-1" />
                <p className="font-bold text-gray-800 text-sm">{topContestants[2].name}</p>
                <p className="text-xs text-gray-600">{topContestants[2].score} pts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-bold text-gray-800 mb-3">All Contestants</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {leaderboard.map((user, idx) => (
            <div
              key={user.rank}
              className={`p-4 flex items-center gap-3 ${
                idx !== leaderboard.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">
                #{user.rank}
              </span>
              <span className="text-2xl">{user.avatar}</span>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{user.name}</h3>
                <p className="text-xs text-gray-500">{user.entries} entries</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-purple-600">{user.score}</p>
                <p className="text-xs text-gray-500">points</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContestLeaderboard;
