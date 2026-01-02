import React, { useState } from 'react';
import {
  Flame, Gift, ChevronRight, Clock, Calendar,
  Award, Target, Zap, Star, CheckCircle2,
  Trophy, Sparkles, TrendingUp, Lock
} from 'lucide-react';

// DailyStreak Home: Daily Check-in & Streak Rewards
// Backend API: GET /api/growth/dailystreak/home
// Backend API: POST /api/growth/dailystreak/checkin
// Backend API: GET /api/growth/dailystreak/rewards
// Backend API: GET /api/growth/dailystreak/history

const DailyStreakHome = () => {
  const [checkedIn, setCheckedIn] = useState(false);

  const myStreak = {
    current: 23,
    longest: 45,
    totalRewards: 8500,
    todayReward: 50,
    multiplier: "2.3x"
  };

  const weeklyCalendar = [
    { day: "Mon", date: 30, status: "completed", reward: 20 },
    { day: "Tue", date: 31, status: "completed", reward: 25 },
    { day: "Wed", date: 1, status: "completed", reward: 30 },
    { day: "Thu", date: 2, status: "today", reward: 50 },
    { day: "Fri", date: 3, status: "upcoming", reward: 40 },
    { day: "Sat", date: 4, status: "upcoming", reward: 45 },
    { day: "Sun", date: 5, status: "upcoming", reward: 100 }
  ];

  const streakMilestones = [
    { days: 7, reward: 100, icon: "🎁", unlocked: true },
    { days: 14, reward: 250, icon: "🎉", unlocked: true },
    { days: 21, reward: 500, icon: "🏆", unlocked: true },
    { days: 30, reward: 1000, icon: "👑", unlocked: false, current: true },
    { days: 50, reward: 2000, icon: "💎", unlocked: false },
    { days: 100, reward: 5000, icon: "🌟", unlocked: false }
  ];

  const bonusTasks = [
    { id: 1, task: "Complete a purchase", bonus: 20, status: "available", icon: "🛒" },
    { id: 2, task: "Refer a friend", bonus: 50, status: "available", icon: "👥" },
    { id: 3, task: "Watch promo video", bonus: 10, status: "completed", icon: "📺" },
    { id: 4, task: "Rate the app", bonus: 25, status: "locked", icon: "⭐" }
  ];

  const leaderboard = [
    { rank: 1, name: "Vikram S.", streak: 156, avatar: "🔥", badge: "🏆" },
    { rank: 2, name: "Neha P.", streak: 134, avatar: "🔥", badge: "🥈" },
    { rank: 3, name: "Arjun K.", streak: 98, avatar: "🔥", badge: "🥉" },
    { rank: 45, name: "You", streak: 23, avatar: "👤", badge: "", isMe: true }
  ];

  const streakPerks = [
    { streak: 7, perk: "Free delivery on 1 order", active: true },
    { streak: 14, perk: "5% extra cashback", active: true },
    { streak: 21, perk: "Priority customer support", active: true },
    { streak: 30, perk: "10% extra cashback", active: false }
  ];

  const handleCheckIn = () => {
    setCheckedIn(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 via-red-500 to-rose-600 pb-24">
      {/* Header */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-yellow-300" />
              <h1 className="text-xl font-bold text-white">DailyStreak</h1>
            </div>
            <p className="text-orange-100 text-sm">Keep the fire burning!</p>
          </div>
          <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white font-bold">{myStreak.multiplier}</span>
          </div>
        </div>

        {/* Streak Card */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
              <div className="text-center">
                <span className="text-4xl">🔥</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">Current Streak</p>
            <p className="text-5xl font-bold text-gray-800">{myStreak.current}</p>
            <p className="text-gray-500">days</p>

            {!checkedIn ? (
              <button
                onClick={handleCheckIn}
                className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 mx-auto"
              >
                <CheckCircle2 className="w-5 h-5" />
                Check In Today (+{myStreak.todayReward}🪙)
              </button>
            ) : (
              <div className="mt-4 bg-green-100 text-green-700 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Checked In! +{myStreak.todayReward}🪙
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-100">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">{myStreak.longest}</p>
              <p className="text-xs text-gray-500">Longest</p>
            </div>
            <div className="text-center border-x border-gray-100">
              <p className="text-2xl font-bold text-orange-500">₹{myStreak.totalRewards}</p>
              <p className="text-xs text-gray-500">Earned</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">{myStreak.multiplier}</p>
              <p className="text-xs text-gray-500">Multiplier</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Calendar */}
      <div className="px-4 mt-4">
        <div className="bg-white/10 rounded-xl p-4">
          <h3 className="text-white font-bold mb-3">This Week</h3>
          <div className="flex justify-between">
            {weeklyCalendar.map((day) => (
              <div key={day.day} className="text-center">
                <p className="text-orange-200 text-xs">{day.day}</p>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mt-1 ${
                  day.status === 'completed'
                    ? 'bg-green-500 text-white'
                    : day.status === 'today'
                    ? 'bg-white text-orange-500 ring-2 ring-yellow-300'
                    : 'bg-white/20 text-white'
                }`}>
                  {day.status === 'completed' ? '✓' : day.date}
                </div>
                <p className={`text-xs mt-1 ${
                  day.status === 'today' ? 'text-yellow-300 font-bold' : 'text-orange-200'
                }`}>
                  +{day.reward}🪙
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="px-4 mt-6">
        <h2 className="text-white font-bold mb-3">Streak Milestones</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {streakMilestones.map((milestone) => (
            <div key={milestone.days} className={`flex-shrink-0 w-24 rounded-xl p-4 text-center ${
              milestone.current
                ? 'bg-yellow-400 ring-2 ring-white'
                : milestone.unlocked
                ? 'bg-white'
                : 'bg-white/20'
            }`}>
              <span className="text-3xl">{milestone.icon}</span>
              <p className={`text-lg font-bold mt-1 ${
                milestone.current ? 'text-yellow-900' :
                milestone.unlocked ? 'text-gray-800' : 'text-white'
              }`}>
                {milestone.days} Days
              </p>
              <p className={`text-sm font-medium ${
                milestone.current ? 'text-yellow-800' :
                milestone.unlocked ? 'text-green-600' : 'text-white/70'
              }`}>
                {milestone.unlocked ? '✓ Claimed' : `₹${milestone.reward}`}
              </p>
              {milestone.current && (
                <p className="text-xs text-yellow-800 mt-1">
                  {milestone.days - myStreak.current} days left
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Active Perks */}
      <div className="px-4 mt-6">
        <h2 className="text-white font-bold mb-3">Your Active Perks</h2>
        <div className="bg-white rounded-xl overflow-hidden">
          {streakPerks.map((perk, idx) => (
            <div key={perk.streak} className={`p-4 flex items-center gap-3 ${
              idx !== streakPerks.length - 1 ? 'border-b border-gray-100' : ''
            } ${perk.active ? '' : 'opacity-50'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                perk.active ? 'bg-green-100' : 'bg-gray-100'
              }`}>
                {perk.active ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <Lock className="w-5 h-5 text-gray-400" />}
              </div>
              <div className="flex-1">
                <p className={`font-medium ${perk.active ? 'text-gray-800' : 'text-gray-400'}`}>
                  {perk.perk}
                </p>
                <p className="text-xs text-gray-500">{perk.streak}+ day streak</p>
              </div>
              {perk.active && (
                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Active</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bonus Tasks */}
      <div className="px-4 mt-6">
        <h2 className="text-white font-bold mb-3">Bonus Rewards</h2>
        <div className="grid grid-cols-2 gap-3">
          {bonusTasks.map((task) => (
            <div key={task.id} className={`rounded-xl p-4 ${
              task.status === 'completed'
                ? 'bg-green-500/20 border border-green-500/30'
                : task.status === 'available'
                ? 'bg-white'
                : 'bg-white/20'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{task.icon}</span>
                <span className={`font-bold ${
                  task.status === 'completed' ? 'text-green-300' :
                  task.status === 'available' ? 'text-orange-500' : 'text-white/70'
                }`}>
                  +{task.bonus}🪙
                </span>
              </div>
              <p className={`text-sm ${
                task.status === 'completed' ? 'text-white' :
                task.status === 'available' ? 'text-gray-700' : 'text-white/70'
              }`}>
                {task.task}
              </p>
              {task.status === 'available' && (
                <button className="mt-2 w-full bg-orange-500 text-white py-1.5 rounded-lg text-xs font-medium">
                  Complete
                </button>
              )}
              {task.status === 'completed' && (
                <p className="mt-2 text-green-300 text-xs">✓ Completed</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="px-4 mt-6 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-bold">Streak Champions</h2>
          <button className="text-orange-200 text-sm">Full List</button>
        </div>

        <div className="bg-white/10 rounded-xl overflow-hidden">
          {leaderboard.map((user, idx) => (
            <div key={user.rank} className={`p-4 flex items-center gap-3 ${
              idx !== leaderboard.length - 1 ? 'border-b border-white/10' : ''
            } ${user.isMe ? 'bg-white/10' : ''}`}>
              <span className="text-lg font-bold text-white w-6">{user.badge || `#${user.rank}`}</span>
              <span className="text-2xl">{user.avatar}</span>
              <div className="flex-1">
                <p className={`font-medium ${user.isMe ? 'text-yellow-300' : 'text-white'}`}>
                  {user.name}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Flame className="w-4 h-4 text-orange-400" />
                <span className="text-white font-bold">{user.streak}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyStreakHome;
