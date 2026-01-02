import React, { useState } from 'react';
import {
  Users, Star, ChevronRight, Clock, Zap,
  Award, Trophy, Gift, Target, TrendingUp,
  UserPlus, Crown, Shield, Sparkles, Heart
} from 'lucide-react';

// SquadGoals Home: Team-based Challenges & Group Rewards
// Backend API: GET /api/growth/squadgoals/home
// Backend API: GET /api/growth/squadgoals/my-squad
// Backend API: POST /api/growth/squadgoals/create
// Backend API: POST /api/growth/squadgoals/join
// Backend API: GET /api/growth/squadgoals/challenges

const SquadGoalsHome = () => {
  const [activeTab, setActiveTab] = useState('active');

  const mySquad = {
    name: "ReZ Warriors",
    members: 5,
    maxMembers: 6,
    level: 8,
    points: 12500,
    rank: 23,
    streak: 15
  };

  const squadMembers = [
    { id: 1, name: "You", role: "Captain", contribution: 3200, avatar: "👑", isMe: true },
    { id: 2, name: "Priya M.", role: "Member", contribution: 2800, avatar: "👩" },
    { id: 3, name: "Rahul K.", role: "Member", contribution: 2600, avatar: "👨" },
    { id: 4, name: "Sneha R.", role: "Member", contribution: 2100, avatar: "👩‍💼" },
    { id: 5, name: "Amit S.", role: "Member", contribution: 1800, avatar: "👨‍💻" }
  ];

  const activeGoals = [
    {
      id: 1,
      name: "Weekend Warriors",
      description: "Squad places 50 orders this weekend",
      reward: 2000,
      type: "coins",
      progress: 38,
      target: 50,
      endsIn: "1d 8h",
      icon: "⚔️",
      perMember: 400
    },
    {
      id: 2,
      name: "Referral Army",
      description: "Squad invites 25 new users",
      reward: 5000,
      type: "coins",
      progress: 18,
      target: 25,
      endsIn: "5d",
      icon: "🎖️",
      perMember: 1000
    },
    {
      id: 3,
      name: "Review Blitz",
      description: "Squad writes 100 reviews",
      reward: 1500,
      type: "coins",
      progress: 67,
      target: 100,
      endsIn: "3d",
      icon: "⭐",
      perMember: 300
    }
  ];

  const topSquads = [
    { rank: 1, name: "Alpha Force", points: 45600, members: 6, badge: "🏆" },
    { rank: 2, name: "Dream Team", points: 42300, members: 6, badge: "🥈" },
    { rank: 3, name: "Power Rangers", points: 39800, members: 5, badge: "🥉" },
    { rank: 23, name: "ReZ Warriors", points: 12500, members: 5, badge: "", isMe: true }
  ];

  const squadPerks = [
    { level: 5, perk: "5% extra squad bonus", unlocked: true },
    { level: 8, perk: "Priority customer support", unlocked: true },
    { level: 10, perk: "Exclusive squad deals", unlocked: false },
    { level: 15, perk: "VIP event access", unlocked: false }
  ];

  const recentActivity = [
    { id: 1, member: "Priya M.", action: "Completed 3 orders", points: 150, time: "2 hours ago" },
    { id: 2, member: "Rahul K.", action: "Referred a friend", points: 200, time: "5 hours ago" },
    { id: 3, member: "You", action: "Wrote 5 reviews", points: 100, time: "Yesterday" },
    { id: 4, member: "Sneha R.", action: "Completed daily check-in", points: 20, time: "Yesterday" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">SquadGoals</h1>
            </div>
            <p className="text-rose-100 text-sm">Team Up. Win Together.</p>
          </div>
          <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-300" />
            <span className="text-white font-bold">Rank #{mySquad.rank}</span>
          </div>
        </div>

        {/* Squad Card */}
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-3xl">⚔️</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-gray-800">{mySquad.name}</h2>
                <span className="bg-rose-100 text-rose-600 text-xs px-2 py-0.5 rounded-full">
                  Lvl {mySquad.level}
                </span>
              </div>
              <p className="text-gray-500 text-sm">{mySquad.members}/{mySquad.maxMembers} members</p>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-rose-600 font-bold">{mySquad.points.toLocaleString()} pts</span>
                <span className="text-gray-400 text-sm">🔥 {mySquad.streak} day streak</span>
              </div>
            </div>
            <button className="bg-rose-500 text-white p-2 rounded-lg">
              <UserPlus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Squad Members */}
      <div className="px-4 mt-4">
        <h2 className="font-bold text-gray-800 mb-3">Squad Members</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {squadMembers.map((member, idx) => (
            <div key={member.id} className={`p-4 flex items-center gap-3 ${
              idx !== squadMembers.length - 1 ? 'border-b border-gray-100' : ''
            } ${member.isMe ? 'bg-rose-50' : ''}`}>
              <span className="text-2xl">{member.avatar}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className={`font-medium ${member.isMe ? 'text-rose-600' : 'text-gray-800'}`}>
                    {member.name}
                  </p>
                  {member.role === 'Captain' && (
                    <Crown className="w-4 h-4 text-yellow-500" />
                  )}
                </div>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-rose-600">{member.contribution.toLocaleString()}</p>
                <p className="text-xs text-gray-500">contribution</p>
              </div>
            </div>
          ))}

          {mySquad.members < mySquad.maxMembers && (
            <button className="w-full p-4 flex items-center justify-center gap-2 text-rose-600 bg-rose-50">
              <UserPlus className="w-5 h-5" />
              <span className="font-medium">Invite Member ({mySquad.maxMembers - mySquad.members} spots left)</span>
            </button>
          )}
        </div>
      </div>

      {/* Active Goals */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Active Squad Goals</h2>
          <button className="text-rose-500 text-sm">View All</button>
        </div>

        <div className="space-y-3">
          {activeGoals.map((goal) => (
            <div key={goal.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-2xl">
                  {goal.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-800">{goal.name}</h3>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs">{goal.endsIn}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{goal.description}</p>

                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-500">{goal.progress}/{goal.target}</span>
                      <span className="text-rose-600 font-bold">₹{goal.perMember}/member</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"
                        style={{ width: `${(goal.progress / goal.target) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-gray-500 text-sm">Total Reward</span>
                <span className="text-rose-600 font-bold">₹{goal.reward.toLocaleString()}🪙</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Squad Perks */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Squad Level Perks</h2>
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white font-bold">Level {mySquad.level}</span>
            <span className="text-rose-200 text-sm">Next: Level {mySquad.level + 1}</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-white rounded-full" style={{ width: '65%' }} />
          </div>

          {squadPerks.map((perk, idx) => (
            <div key={perk.level} className={`flex items-center gap-3 ${
              idx !== squadPerks.length - 1 ? 'mb-2' : ''
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                perk.unlocked ? 'bg-white/20' : 'bg-white/10'
              }`}>
                {perk.unlocked ? '✓' : '🔒'}
              </div>
              <div className="flex-1">
                <p className={`text-sm ${perk.unlocked ? 'text-white' : 'text-rose-200'}`}>
                  {perk.perk}
                </p>
                <p className="text-rose-200 text-xs">Level {perk.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Top Squads</h2>
          <button className="text-rose-500 text-sm">Full Rankings</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {topSquads.map((squad, idx) => (
            <div key={squad.rank} className={`p-4 flex items-center gap-3 ${
              idx !== topSquads.length - 1 ? 'border-b border-gray-100' : ''
            } ${squad.isMe ? 'bg-rose-50' : ''}`}>
              <span className="w-8 text-center text-lg">
                {squad.badge || `#${squad.rank}`}
              </span>
              <div className="flex-1">
                <p className={`font-medium ${squad.isMe ? 'text-rose-600' : 'text-gray-800'}`}>
                  {squad.name} {squad.isMe && '(Your Squad)'}
                </p>
                <p className="text-xs text-gray-500">{squad.members} members</p>
              </div>
              <span className="font-bold text-gray-800">{squad.points.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-bold text-gray-800 mb-3">Squad Activity</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {recentActivity.map((activity, idx) => (
            <div key={activity.id} className={`p-4 flex items-center gap-3 ${
              idx !== recentActivity.length - 1 ? 'border-b border-gray-100' : ''
            }`}>
              <Sparkles className="w-5 h-5 text-rose-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-800">
                  <span className="font-medium">{activity.member}</span> {activity.action}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              <span className="text-green-600 font-bold text-sm">+{activity.points}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SquadGoalsHome;
