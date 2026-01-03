import React, { useState } from 'react';
import {
  Target, Star, ChevronRight, Clock, Zap,
  Award, Trophy, Gift, Users, TrendingUp,
  CheckCircle2, Lock, Flame, Timer
} from 'lucide-react';

// Challenges Home: Daily/Weekly Challenges & Quests
// Backend API: GET /api/growth/challenges/home
// Backend API: GET /api/growth/challenges/active
// Backend API: POST /api/growth/challenges/accept
// Backend API: POST /api/growth/challenges/complete

const ChallengesHome = () => {
  const [activeTab, setActiveTab] = useState('daily');

  const myProgress = {
    activeChallenges: 4,
    completed: 156,
    currentStreak: 12,
    totalEarned: 24500
  };

  const dailyChallenges = [
    {
      id: 1,
      name: "First Order of the Day",
      description: "Place your first order before 10 AM",
      reward: 100,
      type: "coins",
      progress: 1,
      target: 1,
      status: "completed",
      icon: "🌅",
      expiresIn: "8h left"
    },
    {
      id: 2,
      name: "Triple Threat",
      description: "Order from 3 different categories",
      reward: 150,
      type: "coins",
      progress: 2,
      target: 3,
      status: "active",
      icon: "🎯",
      expiresIn: "8h left"
    },
    {
      id: 3,
      name: "Share the Love",
      description: "Share a product with a friend",
      reward: 50,
      type: "coins",
      progress: 0,
      target: 1,
      status: "active",
      icon: "💝",
      expiresIn: "8h left"
    },
    {
      id: 4,
      name: "Review Master",
      description: "Write 2 product reviews",
      reward: 75,
      type: "coins",
      progress: 0,
      target: 2,
      status: "locked",
      icon: "⭐",
      expiresIn: "8h left"
    }
  ];

  const weeklyChallenges = [
    {
      id: 1,
      name: "Shopping Spree",
      description: "Spend ₹2000 this week",
      reward: 500,
      type: "coins",
      progress: 1450,
      target: 2000,
      status: "active",
      icon: "🛒",
      expiresIn: "4d left"
    },
    {
      id: 2,
      name: "Referral Champion",
      description: "Invite 5 friends to join",
      reward: 1000,
      type: "coins",
      progress: 3,
      target: 5,
      status: "active",
      icon: "👥",
      expiresIn: "4d left"
    },
    {
      id: 3,
      name: "Streak Master",
      description: "Maintain 7-day login streak",
      reward: 300,
      type: "coins",
      progress: 5,
      target: 7,
      status: "active",
      icon: "🔥",
      expiresIn: "4d left"
    }
  ];

  const specialChallenges = [
    {
      id: 1,
      name: "New Year Shopping Fest",
      description: "Complete 10 orders in January",
      reward: 2000,
      type: "coins",
      progress: 6,
      target: 10,
      status: "active",
      icon: "🎊",
      expiresIn: "28d left",
      featured: true
    },
    {
      id: 2,
      name: "Brand Ambassador",
      description: "Get 20 friends to make their first order",
      reward: 5000,
      type: "coins",
      progress: 8,
      target: 20,
      status: "active",
      icon: "🌟",
      expiresIn: "28d left"
    }
  ];

  const completedToday = [
    { id: 1, name: "First Order of the Day", reward: 100, time: "9:30 AM" },
    { id: 2, name: "Morning Check-in", reward: 20, time: "8:00 AM" }
  ];

  const tabs = [
    { id: 'daily', name: 'Daily', count: dailyChallenges.length },
    { id: 'weekly', name: 'Weekly', count: weeklyChallenges.length },
    { id: 'special', name: 'Special', count: specialChallenges.length }
  ];

  const getChallenges = () => {
    switch (activeTab) {
      case 'daily': return dailyChallenges;
      case 'weekly': return weeklyChallenges;
      case 'special': return specialChallenges;
      default: return dailyChallenges;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Target className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">Challenges</h1>
            </div>
            <p className="text-cyan-100 text-sm">Complete. Earn. Level Up.</p>
          </div>
          <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <Flame className="w-4 h-4 text-yellow-300" />
            <span className="text-white font-bold">{myProgress.currentStreak} days</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">{myProgress.activeChallenges}</p>
            <p className="text-cyan-200 text-xs">Active</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">{myProgress.completed}</p>
            <p className="text-cyan-200 text-xs">Done</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">{myProgress.currentStreak}</p>
            <p className="text-cyan-200 text-xs">Streak</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-yellow-300">₹{(myProgress.totalEarned/1000).toFixed(1)}K</p>
            <p className="text-cyan-200 text-xs">Earned</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-lg p-1 flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-1 ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-600'
              }`}
            >
              {tab.name}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeTab === tab.id
                  ? 'bg-white/20'
                  : 'bg-gray-100'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Challenge List */}
      <div className="px-4 mt-4">
        <div className="space-y-3">
          {getChallenges().map((challenge) => (
            <div key={challenge.id} className={`bg-white rounded-xl shadow-sm overflow-hidden ${
              challenge.featured ? 'ring-2 ring-cyan-500' : ''
            }`}>
              {challenge.featured && (
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1.5 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span className="text-white text-xs font-bold">FEATURED CHALLENGE</span>
                </div>
              )}
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                    challenge.status === 'completed'
                      ? 'bg-green-100'
                      : challenge.status === 'locked'
                      ? 'bg-gray-100'
                      : 'bg-cyan-100'
                  }`}>
                    {challenge.status === 'completed' ? '✅' :
                     challenge.status === 'locked' ? '🔒' : challenge.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-medium ${
                        challenge.status === 'locked' ? 'text-gray-400' : 'text-gray-800'
                      }`}>
                        {challenge.name}
                      </h3>
                      {challenge.status === 'completed' && (
                        <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                          Done
                        </span>
                      )}
                    </div>
                    <p className={`text-sm ${
                      challenge.status === 'locked' ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {challenge.description}
                    </p>

                    {challenge.status !== 'locked' && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-500">
                            {challenge.progress}/{challenge.target}
                          </span>
                          <span className="text-gray-400">{challenge.expiresIn}</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              challenge.status === 'completed'
                                ? 'bg-green-500'
                                : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                            }`}
                            style={{ width: `${Math.min((challenge.progress / challenge.target) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${
                      challenge.status === 'completed'
                        ? 'text-green-600'
                        : challenge.status === 'locked'
                        ? 'text-gray-300'
                        : 'text-cyan-600'
                    }`}>
                      +{challenge.reward}🪙
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Today */}
      {completedToday.length > 0 && (
        <div className="px-4 mt-6">
          <h2 className="font-bold text-gray-800 mb-3">Completed Today</h2>
          <div className="bg-green-50 border border-green-200 rounded-xl overflow-hidden">
            {completedToday.map((item, idx) => (
              <div key={item.id} className={`p-4 flex items-center gap-3 ${
                idx !== completedToday.length - 1 ? 'border-b border-green-200' : ''
              }`}>
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
                <span className="text-green-600 font-bold">+{item.reward}🪙</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-4">
          <h3 className="text-white font-bold mb-2">Pro Tips</h3>
          <div className="space-y-2">
            <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
              <span className="text-xl">💡</span>
              <p className="text-white text-sm">Complete daily challenges to maintain your streak bonus!</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
              <span className="text-xl">🎯</span>
              <p className="text-white text-sm">Special challenges offer up to 10x more rewards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesHome;
