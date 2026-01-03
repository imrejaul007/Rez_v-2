import React, { useState } from 'react';
import { Trophy, Crown, Medal, Star, Award, TrendingUp } from 'lucide-react';

// Quizzy Leaderboard: Quiz Rankings
// Backend API: GET /api/growth/quizzy/leaderboard
// Backend API: GET /api/growth/quizzy/leaderboard/user-rank

const QuizzyLeaderboard = () => {
  const [timeframe, setTimeframe] = useState('weekly');

  const myRank = {
    position: 234,
    points: 12450,
    username: 'QuizMaster',
    change: '+12'
  };

  const topPlayers = [
    { rank: 1, name: 'BrainGenius', avatar: '🧠', points: 45890, quizzes: 156 },
    { rank: 2, name: 'QuizKing', avatar: '👑', points: 42100, quizzes: 142 },
    { rank: 3, name: 'SmartOne', avatar: '🎓', points: 38750, quizzes: 128 }
  ];

  const leaderboard = [
    { rank: 4, name: 'QuizPro', avatar: '⭐', points: 35200, quizzes: 115 },
    { rank: 5, name: 'BrainBox', avatar: '📦', points: 32890, quizzes: 108 },
    { rank: 6, name: 'Smarty', avatar: '🎯', points: 30100, quizzes: 98 },
    { rank: 7, name: 'Genius', avatar: '💡', points: 28500, quizzes: 89 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 px-4 pt-6 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="w-6 h-6 text-white" />
          <h1 className="text-xl font-bold text-white">Leaderboard</h1>
        </div>
        <p className="text-yellow-100 text-sm">Top Quiz Masters</p>

        {/* My Rank Card */}
        <div className="mt-4 bg-white/20 backdrop-blur rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-600">#{myRank.position}</span>
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
              <p className="text-white font-bold text-lg">{myRank.points.toLocaleString()}</p>
              <p className="text-yellow-100 text-xs">points</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeframe Tabs */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-2 flex gap-2 shadow-sm">
          {['daily', 'weekly', 'monthly', 'all-time'].map((tab) => (
            <button
              key={tab}
              onClick={() => setTimeframe(tab)}
              className={`flex-1 py-2 rounded-lg font-medium text-xs capitalize ${
                timeframe === tab
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                  : 'text-gray-600'
              }`}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="px-4 mt-6">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4">
          <div className="flex items-end justify-center gap-2 mb-4">
            {/* 2nd Place */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-2 border-4 border-white shadow-lg">
                {topPlayers[1].avatar}
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <Medal className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                <p className="font-bold text-gray-800 text-sm">{topPlayers[1].name}</p>
                <p className="text-xs text-gray-600">{topPlayers[1].points.toLocaleString()}</p>
              </div>
            </div>

            {/* 1st Place */}
            <div className="flex-1 text-center -mt-6">
              <Crown className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-2 border-4 border-white shadow-2xl">
                {topPlayers[0].avatar}
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg p-3 shadow-lg">
                <Trophy className="w-6 h-6 text-white mx-auto mb-1" />
                <p className="font-bold text-white">{topPlayers[0].name}</p>
                <p className="text-xs text-yellow-100">{topPlayers[0].points.toLocaleString()}</p>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-3xl mx-auto mb-2 border-4 border-white shadow-lg">
                {topPlayers[2].avatar}
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <Medal className="w-5 h-5 text-amber-700 mx-auto mb-1" />
                <p className="font-bold text-gray-800 text-sm">{topPlayers[2].name}</p>
                <p className="text-xs text-gray-600">{topPlayers[2].points.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rankings List */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-bold text-gray-800 mb-3">Top Players</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {leaderboard.map((player, idx) => (
            <div
              key={player.rank}
              className={`p-4 flex items-center gap-3 ${
                idx !== leaderboard.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">
                #{player.rank}
              </span>
              <span className="text-2xl">{player.avatar}</span>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{player.name}</h3>
                <p className="text-xs text-gray-500">{player.quizzes} quizzes played</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-blue-600">{player.points.toLocaleString()}</p>
                <p className="text-xs text-gray-500">points</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizzyLeaderboard;
