import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Medal } from 'lucide-react';

function LeaderboardView() {
  const navigate = useNavigate();
  const [period, setPeriod] = useState('weekly');
  const leaderboard = [
    { rank: 1, name: 'Priya Sharma', points: 15240, avatar: '👩', change: '+2' },
    { rank: 2, name: 'Rahul Kumar', points: 14830, avatar: '👨', change: '-1' },
    { rank: 3, name: 'Anita Singh', points: 13950, avatar: '👩', change: '+1' },
    { rank: 4, name: 'Vikram Patel', points: 12500, avatar: '👨', change: '0' },
    { rank: 5, name: 'Sneha Reddy', points: 11750, avatar: '👩', change: '+3' },
    { rank: 15, name: 'You', points: 8420, avatar: '🎯', change: '+5', isCurrentUser: true }
  ];

  const getRankIcon = (rank) => {
    if (rank === 1) return <span className="text-3xl">🥇</span>;
    if (rank === 2) return <span className="text-3xl">🥈</span>;
    if (rank === 3) return <span className="text-3xl">🥉</span>;
    return <span className="text-gray-500 font-bold text-lg">#{rank}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4"><div className="flex items-center gap-3"><div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center"><Trophy className="w-6 h-6 text-white" /></div><div><h1 className="text-2xl font-bold text-gray-900">Leaderboard</h1><p className="text-sm text-gray-600">Compete with top shoppers!</p></div></div></div>
          <div className="flex gap-2">{['daily', 'weekly', 'monthly', 'alltime'].map(p => (<button key={p} onClick={() => setPeriod(p)} className={`flex-1 py-2 px-4 rounded-lg font-medium capitalize transition-all ${period === p ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{p}</button>))}</div>
        </motion.div>
        <div className="space-y-3">
          {leaderboard.map((user, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className={`bg-white rounded-2xl shadow-lg p-4 ${user.isCurrentUser ? 'border-2 border-purple-500' : ''}`}>
              <div className="flex items-center gap-4">
                <div className="w-12 flex items-center justify-center">{getRankIcon(user.rank)}</div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">{user.avatar}</div>
                <div className="flex-1"><h3 className="font-bold text-gray-900">{user.name}</h3><div className="flex items-center gap-2 text-sm"><TrendingUp className={`w-4 h-4 ${user.change.startsWith('+') ? 'text-green-600' : user.change.startsWith('-') ? 'text-red-600' : 'text-gray-400'}`} /><span className={user.change.startsWith('+') ? 'text-green-600' : user.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'}>{user.change}</span></div></div>
                <div className="text-right"><p className="text-purple-600 font-bold text-lg">{user.points.toLocaleString()}</p><p className="text-xs text-gray-500">points</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeaderboardView;
