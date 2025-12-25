import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Target, Trophy, Zap, Gift, Calendar, CheckCircle, Lock, Flame } from 'lucide-react';
import BottomNavManager from '../components/layout/BottomNavManager';

function Missions() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('daily');

  const tabs = [
    { id: 'daily', label: 'Daily', icon: Calendar },
    { id: 'weekly', label: 'Weekly', icon: Target },
    { id: 'special', label: 'Special', icon: Trophy }
  ];

  const dailyMissions = [
    {
      id: 1,
      title: 'Morning Shopper',
      description: 'Make a purchase before 12 PM',
      reward: { coins: 50, cashback: 10 },
      progress: 0,
      target: 1,
      completed: false,
      difficulty: 'easy',
      endsIn: '8h 24m'
    },
    {
      id: 2,
      title: 'Product Explorer',
      description: 'Browse 10 products',
      reward: { coins: 30, cashback: 0 },
      progress: 7,
      target: 10,
      completed: false,
      difficulty: 'easy',
      endsIn: '8h 24m'
    },
    {
      id: 3,
      title: 'Social Butterfly',
      description: 'Share 3 products with friends',
      reward: { coins: 40, cashback: 5 },
      progress: 1,
      target: 3,
      completed: false,
      difficulty: 'medium',
      endsIn: '8h 24m'
    },
    {
      id: 4,
      title: 'Review Master',
      description: 'Write 2 product reviews',
      reward: { coins: 100, cashback: 20 },
      progress: 2,
      target: 2,
      completed: true,
      difficulty: 'medium',
      endsIn: '8h 24m'
    }
  ];

  const weeklyMissions = [
    {
      id: 5,
      title: 'Shopping Spree',
      description: 'Complete 5 purchases this week',
      reward: { coins: 500, cashback: 100 },
      progress: 3,
      target: 5,
      completed: false,
      difficulty: 'hard',
      endsIn: '4d 12h'
    },
    {
      id: 6,
      title: 'Category Champion',
      description: 'Shop from 3 different categories',
      reward: { coins: 300, cashback: 50 },
      progress: 2,
      target: 3,
      completed: false,
      difficulty: 'medium',
      endsIn: '4d 12h'
    }
  ];

  const specialMissions = [
    {
      id: 7,
      title: 'New Year Bonanza',
      description: 'Spend ₹5,000 in January',
      reward: { coins: 1000, cashback: 250 },
      progress: 3200,
      target: 5000,
      completed: false,
      difficulty: 'legendary',
      endsIn: '7 days',
      special: true
    },
    {
      id: 8,
      title: 'Refer 5 Friends',
      description: 'Invite 5 friends to ReZ',
      reward: { coins: 2000, cashback: 500 },
      progress: 2,
      target: 5,
      completed: false,
      difficulty: 'legendary',
      endsIn: '15 days',
      special: true
    }
  ];

  const getMissions = () => {
    switch (activeTab) {
      case 'daily': return dailyMissions;
      case 'weekly': return weeklyMissions;
      case 'special': return specialMissions;
      default: return dailyMissions;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500/20 text-green-600 dark:text-green-400';
      case 'medium': return 'bg-blue-500/20 text-blue-600 dark:text-blue-400';
      case 'hard': return 'bg-purple-500/20 text-purple-600 dark:text-purple-400';
      case 'legendary': return 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-orange-600 dark:text-orange-400';
      default: return 'bg-rez-gray-200 text-rez-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full hover:bg-white/20 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-400" />
              <h1 className="text-h3 font-poppins text-white">Missions</h1>
            </div>
            <p className="text-xs text-white/80">Complete tasks, earn rewards</p>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-bold text-white">7 Day Streak</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4 pb-3 flex gap-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-white text-purple-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30">
            <Trophy className="w-5 h-5 text-emerald-500 mb-1" />
            <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">24</p>
            <p className="text-xs text-rez-gray-700 dark:text-gray-300">Completed</p>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30">
            <Gift className="w-5 h-5 text-amber-500 mb-1" />
            <p className="text-lg font-bold text-amber-600 dark:text-amber-400">2.4K</p>
            <p className="text-xs text-rez-gray-700 dark:text-gray-300">Coins Earned</p>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30">
            <Zap className="w-5 h-5 text-blue-500 mb-1" />
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400">12</p>
            <p className="text-xs text-rez-gray-700 dark:text-gray-300">Active</p>
          </div>
        </div>

        {/* Missions List */}
        <div className="space-y-3">
          {getMissions().map(mission => (
            <div
              key={mission.id}
              className={`p-4 rounded-2xl border-2 transition-all ${
                mission.completed
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : mission.special
                  ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30'
                  : 'bg-white dark:bg-dark-800 border-rez-gray-200 dark:border-dark-700 hover:border-purple-500'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  mission.completed ? 'bg-emerald-500' : 'bg-purple-500/20'
                }`}>
                  {mission.completed ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    <Target className="w-6 h-6 text-purple-500" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-rez-navy dark:text-white">{mission.title}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${getDifficultyColor(mission.difficulty)}`}>
                      {mission.difficulty}
                    </span>
                  </div>

                  <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-3">
                    {mission.description}
                  </p>

                  {/* Progress Bar */}
                  {!mission.completed && (
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-rez-gray-600 dark:text-gray-400">
                          Progress: {mission.progress}/{mission.target}
                        </span>
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                          {Math.round((mission.progress / mission.target) * 100)}%
                        </span>
                      </div>
                      <div className="h-2 bg-rez-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all"
                          style={{ width: `${(mission.progress / mission.target) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Rewards */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500/20">
                      <Gift className="w-3 h-3 text-amber-500" />
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        +{mission.reward.coins} coins
                      </span>
                    </div>
                    {mission.reward.cashback > 0 && (
                      <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/20">
                        <Zap className="w-3 h-3 text-emerald-500" />
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          ₹{mission.reward.cashback} cashback
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Ends In */}
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                    Ends in: <span className="font-semibold">{mission.endsIn}</span>
                  </p>
                </div>
              </div>

              {/* Claim Button */}
              {mission.completed && (
                <button className="w-full mt-3 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold hover:shadow-lg transition-all active:scale-98">
                  Claim Rewards
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <BottomNavManager />
    </div>
  );
}

export default Missions;
