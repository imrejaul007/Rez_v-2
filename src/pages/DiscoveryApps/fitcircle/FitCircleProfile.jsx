import React, { useState } from 'react';
import {
  Settings, ChevronRight, Trophy, Target, Flame, Award,
  Calendar, TrendingUp, Users, Heart, Activity, Dumbbell,
  Medal, Crown, Share2, Edit3, Camera
} from 'lucide-react';

// FitCircle Profile: User Fitness Profile & Stats
// Backend API: GET /api/fitcircle/profile/:userId
// Backend API: GET /api/fitcircle/profile/:userId/stats
// Backend API: PUT /api/fitcircle/profile/:userId
// Backend API: GET /api/fitcircle/profile/:userId/achievements

const FitCircleProfile = () => {
  const [activeTab, setActiveTab] = useState('stats');

  const user = {
    name: "Rahul Sharma",
    avatar: "🏃",
    level: 15,
    title: "Fitness Pro",
    joinedDate: "March 2024",
    followers: 234,
    following: 156,
    totalCoins: 8450,
    streak: 28
  };

  const stats = {
    totalWorkouts: 156,
    totalMinutes: 4680,
    caloriesBurned: 45600,
    challengesWon: 12,
    personalBests: 8,
    avgWeeklyWorkouts: 4.5
  };

  const weeklyProgress = [
    { day: 'Mon', minutes: 45, completed: true },
    { day: 'Tue', minutes: 30, completed: true },
    { day: 'Wed', minutes: 60, completed: true },
    { day: 'Thu', minutes: 0, completed: false },
    { day: 'Fri', minutes: 45, completed: true },
    { day: 'Sat', minutes: 90, completed: true },
    { day: 'Sun', minutes: 0, completed: false, isToday: true }
  ];

  const achievements = [
    { id: 1, name: "First Workout", icon: "🎯", earned: true, date: "Mar 2024" },
    { id: 2, name: "Week Warrior", icon: "⚡", earned: true, date: "Mar 2024" },
    { id: 3, name: "30 Day Streak", icon: "🔥", earned: true, date: "Apr 2024" },
    { id: 4, name: "100 Workouts", icon: "💪", earned: true, date: "Jul 2024" },
    { id: 5, name: "Challenge Champion", icon: "🏆", earned: true, date: "Aug 2024" },
    { id: 6, name: "10K Calories", icon: "🔥", earned: true, date: "Sep 2024" },
    { id: 7, name: "Marathon Ready", icon: "🏃", earned: false, progress: 65 },
    { id: 8, name: "Iron Will", icon: "🦾", earned: false, progress: 40 }
  ];

  const personalBests = [
    { activity: "Running", record: "5K in 24:30", date: "Oct 2024", icon: "🏃" },
    { activity: "Plank", record: "5 min 30 sec", date: "Nov 2024", icon: "🧘" },
    { activity: "Push-ups", record: "50 reps", date: "Sep 2024", icon: "💪" },
    { activity: "Cycling", record: "25 km", date: "Aug 2024", icon: "🚴" }
  ];

  const recentActivities = [
    { date: "Today", activity: "Morning Yoga", duration: "30 min", coins: 30 },
    { date: "Yesterday", activity: "HIIT Cardio", duration: "25 min", coins: 50 },
    { date: "2 days ago", activity: "Strength Training", duration: "45 min", coins: 60 },
    { date: "3 days ago", activity: "Evening Run", duration: "35 min", coins: 45 }
  ];

  const menuItems = [
    { icon: Target, label: "Goals & Targets", badge: "3 active" },
    { icon: Calendar, label: "Workout Schedule" },
    { icon: Heart, label: "Health Metrics" },
    { icon: Users, label: "Fitness Buddies", badge: "12" },
    { icon: Award, label: "Certificates", badge: "5" },
    { icon: Settings, label: "Settings" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 px-4 pt-6 pb-20">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Profile</h1>
          <div className="flex items-center gap-2">
            <button className="bg-white/20 p-2 rounded-lg">
              <Share2 className="w-5 h-5 text-white" />
            </button>
            <button className="bg-white/20 p-2 rounded-lg">
              <Settings className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="px-4 -mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center text-4xl">
                {user.avatar}
              </div>
              <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Camera className="w-4 h-4 text-white" />
              </button>
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded-full">
                Lvl {user.level}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                <button>
                  <Edit3 className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <p className="text-green-600 font-medium">{user.title}</p>
              <p className="text-sm text-gray-500">Member since {user.joinedDate}</p>

              <div className="flex items-center gap-4 mt-3">
                <div className="text-center">
                  <p className="font-bold text-gray-800">{user.followers}</p>
                  <p className="text-xs text-gray-500">Followers</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-800">{user.following}</p>
                  <p className="text-xs text-gray-500">Following</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-yellow-600">{user.totalCoins.toLocaleString()}🪙</p>
                  <p className="text-xs text-gray-500">Coins</p>
                </div>
              </div>
            </div>
          </div>

          {/* Streak Banner */}
          <div className="mt-4 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-orange-500" />
              <div>
                <span className="font-bold text-orange-600">{user.streak} Day Streak!</span>
                <p className="text-xs text-orange-500">Keep it going!</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500">Next milestone</span>
              <p className="font-medium text-orange-600">30 days (+100🪙)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Progress */}
      <div className="px-4 mt-6">
        <h2 className="font-semibold text-gray-800 mb-3">This Week</h2>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex justify-between">
            {weeklyProgress.map((day, idx) => (
              <div key={idx} className="text-center">
                <p className={`text-xs mb-2 ${day.isToday ? 'text-green-600 font-bold' : 'text-gray-500'}`}>
                  {day.day}
                </p>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  day.completed
                    ? 'bg-green-500 text-white'
                    : day.isToday
                    ? 'bg-green-100 text-green-600 border-2 border-green-500'
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  {day.completed ? (
                    <Activity className="w-5 h-5" />
                  ) : (
                    <span className="text-xs">{day.minutes || '-'}</span>
                  )}
                </div>
                {day.minutes > 0 && (
                  <p className="text-xs text-gray-500 mt-1">{day.minutes}m</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm text-gray-600">Total: 270 min this week</span>
            <span className="text-sm text-green-600 font-medium">+180🪙 earned</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mt-6">
        <div className="flex gap-2 bg-gray-200 p-1 rounded-xl">
          {[
            { id: 'stats', label: 'Stats' },
            { id: 'achievements', label: 'Badges' },
            { id: 'pbs', label: 'Personal Bests' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Tab */}
      {activeTab === 'stats' && (
        <div className="px-4 mt-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <Dumbbell className="w-6 h-6 text-green-500 mb-2" />
              <p className="text-2xl font-bold text-gray-800">{stats.totalWorkouts}</p>
              <p className="text-sm text-gray-500">Total Workouts</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <Activity className="w-6 h-6 text-blue-500 mb-2" />
              <p className="text-2xl font-bold text-gray-800">{Math.round(stats.totalMinutes / 60)}h</p>
              <p className="text-sm text-gray-500">Active Time</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <Flame className="w-6 h-6 text-orange-500 mb-2" />
              <p className="text-2xl font-bold text-gray-800">{(stats.caloriesBurned / 1000).toFixed(1)}K</p>
              <p className="text-sm text-gray-500">Calories Burned</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <Trophy className="w-6 h-6 text-yellow-500 mb-2" />
              <p className="text-2xl font-bold text-gray-800">{stats.challengesWon}</p>
              <p className="text-sm text-gray-500">Challenges Won</p>
            </div>
          </div>

          {/* Recent Activity */}
          <h3 className="font-semibold text-gray-800 mt-6 mb-3">Recent Activity</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {recentActivities.map((activity, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 p-4 ${
                  idx !== recentActivities.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Activity className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{activity.activity}</p>
                  <p className="text-sm text-gray-500">{activity.date} • {activity.duration}</p>
                </div>
                <span className="text-yellow-600 font-medium">+{activity.coins}🪙</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Achievements Tab */}
      {activeTab === 'achievements' && (
        <div className="px-4 mt-4">
          <div className="grid grid-cols-4 gap-3">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className={`text-center ${!ach.earned ? 'opacity-50' : ''}`}
              >
                <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center text-3xl relative ${
                  ach.earned ? 'bg-yellow-100' : 'bg-gray-100'
                }`}>
                  {ach.icon}
                  {!ach.earned && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200/50 rounded-xl">
                      <span className="text-xs font-bold text-gray-600">{ach.progress}%</span>
                    </div>
                  )}
                </div>
                <p className="text-xs font-medium text-gray-700 mt-2">{ach.name}</p>
                {ach.earned && (
                  <p className="text-xs text-gray-400">{ach.date}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Badges Earned</p>
                <p className="text-2xl font-bold text-white">
                  {achievements.filter(a => a.earned).length}/{achievements.length}
                </p>
              </div>
              <Trophy className="w-12 h-12 text-yellow-300" />
            </div>
          </div>
        </div>
      )}

      {/* Personal Bests Tab */}
      {activeTab === 'pbs' && (
        <div className="px-4 mt-4 space-y-3">
          {personalBests.map((pb, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center text-3xl">
                {pb.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{pb.activity}</h3>
                <p className="text-lg font-bold text-green-600">{pb.record}</p>
                <p className="text-xs text-gray-500">Achieved {pb.date}</p>
              </div>
              <Medal className="w-6 h-6 text-yellow-500" />
            </div>
          ))}
        </div>
      )}

      {/* Menu */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className={`w-full flex items-center gap-4 p-4 text-left ${
                idx !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <item.icon className="w-5 h-5 text-gray-600" />
              </div>
              <span className="flex-1 font-medium text-gray-800">{item.label}</span>
              {item.badge && (
                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FitCircleProfile;
