import React from 'react';
import { Trophy, TrendingUp, Award } from 'lucide-react';

// Gamezy Rewards
// Backend API: GET /api/wasil/gamezy/rewards

const GamezyRewards = () => {
  const stats = {
    totalWinnings: 45000,
    thisMonth: 12000,
    contestsWon: 28,
    rank: 'Gold'
  };

  const recentWins = [
    { id: 1, game: 'Cricket Fantasy', amount: 5000, date: 'Jan 14', icon: '🏏' },
    { id: 2, game: 'Poker Pro', amount: 2500, date: 'Jan 12', icon: '🃏' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 pt-6 pb-6">
        <h1 className="text-xl font-bold text-white mb-4">My Rewards</h1>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/20 backdrop-blur rounded-xl p-3">
            <p className="text-white/80 text-xs">Total Winnings</p>
            <p className="text-2xl font-bold text-white mt-1">₹{stats.totalWinnings.toLocaleString()}</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl p-3">
            <p className="text-white/80 text-xs">This Month</p>
            <p className="text-2xl font-bold text-white mt-1">₹{stats.thisMonth.toLocaleString()}</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl p-3">
            <p className="text-white/80 text-xs">Contests Won</p>
            <p className="text-2xl font-bold text-white mt-1">{stats.contestsWon}</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl p-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-300" />
            <div>
              <p className="text-white/80 text-xs">Rank</p>
              <p className="text-xl font-bold text-white">{stats.rank}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Recent Wins</h2>
        <div className="space-y-3">
          {recentWins.map((win) => (
            <div key={win.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{win.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-800">{win.game}</h3>
                    <p className="text-sm text-gray-500">{win.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-green-600">+₹{win.amount.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamezyRewards;
