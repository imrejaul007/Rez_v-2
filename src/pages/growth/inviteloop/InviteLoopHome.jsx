import React, { useState } from 'react';
import {
  Users, Gift, ChevronRight, Repeat, Star,
  Zap, Award, Target, Clock, TrendingUp,
  UserPlus, Crown, Sparkles, CircleDollarSign
} from 'lucide-react';

// InviteLoop Home: Viral Invite Chain System
// Backend API: GET /api/growth/inviteloop/home
// Backend API: GET /api/growth/inviteloop/chain
// Backend API: POST /api/growth/inviteloop/invite
// Backend API: GET /api/growth/inviteloop/rewards

const InviteLoopHome = () => {
  const [activeTab, setActiveTab] = useState('chain');

  const myLoop = {
    totalInvites: 45,
    activeChain: 12,
    loopBonus: 2500,
    multiplier: "2.5x",
    streak: 7
  };

  const inviteChain = [
    { level: 1, name: "You", status: "active", bonus: 0, avatar: "👤" },
    { level: 2, name: "Priya M.", status: "active", bonus: 50, avatar: "👩", invitedBy: "You" },
    { level: 3, name: "Rahul K.", status: "active", bonus: 25, avatar: "👨", invitedBy: "Priya M." },
    { level: 4, name: "Sneha R.", status: "active", bonus: 12, avatar: "👩‍💼", invitedBy: "Rahul K." },
    { level: 5, name: "Pending...", status: "pending", bonus: 6, avatar: "⏳", invitedBy: "Sneha R." }
  ];

  const loopRewards = [
    { chain: 3, reward: 100, status: "claimed" },
    { chain: 5, reward: 250, status: "claimed" },
    { chain: 7, reward: 500, status: "active" },
    { chain: 10, reward: 1000, status: "locked" },
    { chain: 15, reward: 2500, status: "locked" }
  ];

  const streakBonuses = [
    { day: 1, bonus: "1x", active: true },
    { day: 2, bonus: "1.2x", active: true },
    { day: 3, bonus: "1.5x", active: true },
    { day: 4, bonus: "1.8x", active: true },
    { day: 5, bonus: "2x", active: true },
    { day: 6, bonus: "2.2x", active: true },
    { day: 7, bonus: "2.5x", active: true, current: true }
  ];

  const topLoopers = [
    { rank: 1, name: "Vikram S.", chain: 28, earnings: 12500, avatar: "🏆" },
    { rank: 2, name: "Neha P.", chain: 24, earnings: 9800, avatar: "🥈" },
    { rank: 3, name: "Arjun K.", chain: 21, earnings: 8400, avatar: "🥉" }
  ];

  const recentActivity = [
    { id: 1, action: "Sneha R. joined your chain", bonus: 12, time: "2 min ago", icon: "🔗" },
    { id: 2, action: "Loop bonus unlocked!", bonus: 500, time: "1 hour ago", icon: "🎁" },
    { id: 3, action: "Multiplier increased to 2.5x", bonus: 0, time: "3 hours ago", icon: "⚡" },
    { id: 4, action: "Rahul K. invited Sneha R.", bonus: 25, time: "1 day ago", icon: "👥" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Repeat className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">InviteLoop</h1>
            </div>
            <p className="text-violet-200 text-sm">Invite. Chain. Multiply.</p>
          </div>
          <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white font-bold">{myLoop.multiplier}</span>
          </div>
        </div>

        {/* Loop Stats */}
        <div className="bg-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-violet-200 text-xs">Your Loop Bonus</p>
              <p className="text-3xl font-bold text-white">₹{myLoop.loopBonus.toLocaleString()}</p>
            </div>
            <div className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-xl font-bold">
              {myLoop.streak} Day Streak 🔥
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{myLoop.totalInvites}</p>
              <p className="text-violet-200 text-xs">Total Invites</p>
            </div>
            <div className="text-center border-x border-white/20">
              <p className="text-2xl font-bold text-white">{myLoop.activeChain}</p>
              <p className="text-violet-200 text-xs">Chain Length</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-300">{myLoop.multiplier}</p>
              <p className="text-violet-200 text-xs">Multiplier</p>
            </div>
          </div>
        </div>
      </div>

      {/* Streak Multiplier */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-3">Streak Multiplier</h3>
          <div className="flex items-center justify-between">
            {streakBonuses.map((streak) => (
              <div key={streak.day} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  streak.current
                    ? 'bg-violet-600 text-white ring-2 ring-violet-300'
                    : streak.active
                    ? 'bg-violet-100 text-violet-600'
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  {streak.bonus}
                </div>
                <span className="text-xs text-gray-500 mt-1">Day {streak.day}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-3">
            Keep your streak alive! Invite someone daily.
          </p>
        </div>
      </div>

      {/* Invite Chain Visualization */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Your Invite Chain</h2>
          <button className="text-violet-600 text-sm">View Full Chain</button>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="relative">
            {inviteChain.map((person, idx) => (
              <div key={idx} className="flex items-center gap-3 relative">
                {idx > 0 && (
                  <div className="absolute left-5 -top-4 w-0.5 h-4 bg-violet-200" />
                )}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                  person.status === 'active' ? 'bg-violet-100' : 'bg-gray-100'
                }`}>
                  {person.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`font-medium ${
                      person.status === 'active' ? 'text-gray-800' : 'text-gray-400'
                    }`}>
                      {person.name}
                    </span>
                    <span className="text-xs bg-violet-100 text-violet-600 px-2 py-0.5 rounded-full">
                      L{person.level}
                    </span>
                  </div>
                  {person.invitedBy && (
                    <p className="text-xs text-gray-500">Invited by {person.invitedBy}</p>
                  )}
                </div>
                {person.bonus > 0 && (
                  <span className="text-green-600 font-bold text-sm">+₹{person.bonus}</span>
                )}
                {idx < inviteChain.length - 1 && (
                  <div className="absolute left-5 top-10 w-0.5 h-4 bg-violet-200" />
                )}
              </div>
            ))}
          </div>

          <button className="mt-4 w-full bg-violet-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
            <UserPlus className="w-5 h-5" />
            Invite & Extend Chain
          </button>
        </div>
      </div>

      {/* Loop Rewards */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Loop Milestones</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {loopRewards.map((reward) => (
            <div key={reward.chain} className={`flex-shrink-0 w-24 rounded-xl p-3 text-center ${
              reward.status === 'active'
                ? 'bg-violet-600 text-white'
                : reward.status === 'claimed'
                ? 'bg-green-100'
                : 'bg-gray-100'
            }`}>
              <div className={`text-2xl font-bold ${
                reward.status === 'active' ? 'text-white' :
                reward.status === 'claimed' ? 'text-green-600' : 'text-gray-400'
              }`}>
                {reward.chain}
              </div>
              <p className={`text-xs ${
                reward.status === 'active' ? 'text-violet-200' :
                reward.status === 'claimed' ? 'text-green-600' : 'text-gray-400'
              }`}>
                Chain
              </p>
              <p className={`font-bold mt-1 ${
                reward.status === 'active' ? 'text-yellow-300' :
                reward.status === 'claimed' ? 'text-green-600' : 'text-gray-500'
              }`}>
                ₹{reward.reward}
              </p>
              {reward.status === 'claimed' && (
                <span className="text-xs">✓ Claimed</span>
              )}
              {reward.status === 'locked' && (
                <span className="text-xs">🔒</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Recent Activity</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {recentActivity.map((activity, idx) => (
            <div key={activity.id} className={`p-4 flex items-center gap-3 ${
              idx !== recentActivity.length - 1 ? 'border-b border-gray-100' : ''
            }`}>
              <span className="text-2xl">{activity.icon}</span>
              <div className="flex-1">
                <p className="text-sm text-gray-800">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              {activity.bonus > 0 && (
                <span className="text-green-600 font-bold">+₹{activity.bonus}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Top Loopers */}
      <div className="px-4 mt-6 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Top Loopers</h2>
          <button className="text-violet-600 text-sm">See All</button>
        </div>

        <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl p-4">
          {topLoopers.map((user, idx) => (
            <div key={user.rank} className={`flex items-center gap-3 ${
              idx !== topLoopers.length - 1 ? 'mb-3 pb-3 border-b border-white/20' : ''
            }`}>
              <span className="text-2xl">{user.avatar}</span>
              <div className="flex-1">
                <h4 className="font-medium text-white">{user.name}</h4>
                <p className="text-violet-200 text-xs">{user.chain} chain length</p>
              </div>
              <span className="text-white font-bold">₹{user.earnings.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InviteLoopHome;
