import React, { useState } from 'react';
import {
  Target, Zap, Trophy, Clock, CheckCircle, Lock,
  Flame, Star, Award, Gift, TrendingUp, ChevronRight
} from 'lucide-react';

// CoinHunt Challenges: Daily & Weekly Challenges
// Backend API: GET /api/growth/coinhunt/challenges
// Backend API: POST /api/growth/coinhunt/challenges/accept
// Backend API: POST /api/growth/coinhunt/challenges/claim

const CoinHuntChallenges = () => {
  const [activeTab, setActiveTab] = useState('daily');

  const dailyChallenges = [
    { id: 1, name: 'Collect 5 coins', progress: 3, target: 5, reward: 100, timeLeft: '8h', status: 'active', difficulty: 'easy' },
    { id: 2, name: 'Scan 3 locations', progress: 1, target: 3, reward: 150, timeLeft: '8h', status: 'active', difficulty: 'easy' },
    { id: 3, name: 'Collect 1 gold coin', progress: 1, target: 1, reward: 200, timeLeft: '8h', status: 'completed', difficulty: 'medium' },
    { id: 4, name: 'Walk 2km hunting', progress: 1.2, target: 2, reward: 250, timeLeft: '8h', status: 'active', difficulty: 'medium' }
  ];

  const weeklyChallenges = [
    { id: 1, name: 'Collect 50 coins', progress: 32, target: 50, reward: 1000, timeLeft: '3d', status: 'active', difficulty: 'hard' },
    { id: 2, name: 'Visit 10 new spots', progress: 6, target: 10, reward: 800, timeLeft: '3d', status: 'active', difficulty: 'hard' },
    { id: 3, name: 'Maintain 7-day streak', progress: 5, target: 7, reward: 1500, timeLeft: '3d', status: 'active', difficulty: 'hard' },
    { id: 4, name: 'Collect 5 rare coins', progress: 2, target: 5, reward: 2000, timeLeft: '3d', status: 'active', difficulty: 'expert' }
  ];

  const specialChallenges = [
    { id: 1, name: 'Weekend Hunter Bonus', description: 'Collect 20 coins this weekend', reward: 500, timeLeft: '2d', icon: '🎯', active: true },
    { id: 2, name: 'Night Owl Challenge', description: 'Collect 10 coins after 8 PM', reward: 300, timeLeft: '5d', icon: '🌙', active: true },
    { id: 3, name: 'Early Bird Special', description: 'Collect 5 coins before 9 AM', reward: 250, timeLeft: '1d', icon: '🌅', active: false }
  ];

  const achievements = [
    { id: 1, name: '100 Coins Collected', unlocked: true, reward: 500, icon: '💰' },
    { id: 2, name: 'First Gold Coin', unlocked: true, reward: 200, icon: '🥇' },
    { id: 3, name: '7-Day Streak', unlocked: true, reward: 1000, icon: '🔥' },
    { id: 4, name: '50 Locations Visited', unlocked: false, reward: 1500, icon: '🗺️' },
    { id: 5, name: 'Rare Collector', unlocked: false, reward: 2000, icon: '💎' }
  ];

  const getDifficultyColor = (difficulty) => {
    const colors = {
      easy: 'text-green-600 bg-green-100',
      medium: 'text-yellow-600 bg-yellow-100',
      hard: 'text-orange-600 bg-orange-100',
      expert: 'text-red-600 bg-red-100'
    };
    return colors[difficulty] || 'text-gray-600 bg-gray-100';
  };

  const challenges = activeTab === 'daily' ? dailyChallenges : weeklyChallenges;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Target className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">Challenges</h1>
            </div>
            <p className="text-orange-100 text-sm">Complete to earn bonus coins</p>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
            <CheckCircle className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-lg font-bold">12</p>
            <p className="text-orange-100 text-xs">Completed</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
            <Zap className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-lg font-bold">5</p>
            <p className="text-orange-100 text-xs">Active</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
            <Trophy className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-lg font-bold">3,250</p>
            <p className="text-orange-100 text-xs">Earned 🪙</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-2 flex gap-2 shadow-sm">
          <button
            onClick={() => setActiveTab('daily')}
            className={`flex-1 py-2 rounded-lg font-medium text-sm ${
              activeTab === 'daily'
                ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                : 'text-gray-600'
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setActiveTab('weekly')}
            className={`flex-1 py-2 rounded-lg font-medium text-sm ${
              activeTab === 'weekly'
                ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                : 'text-gray-600'
            }`}
          >
            Weekly
          </button>
        </div>
      </div>

      {/* Challenges List */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-500" />
          {activeTab === 'daily' ? 'Daily Challenges' : 'Weekly Challenges'}
        </h2>

        <div className="space-y-3">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`bg-white rounded-xl p-4 shadow-sm ${
                challenge.status === 'completed' ? 'border-2 border-green-500' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-800">{challenge.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {challenge.timeLeft} left
                    </span>
                    <span className="flex items-center gap-1 text-orange-600">
                      <Gift className="w-3 h-3" />
                      +{challenge.reward} 🪙
                    </span>
                  </div>
                </div>
                {challenge.status === 'completed' && (
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                )}
              </div>

              {/* Progress Bar */}
              <div className="mb-2">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span>{challenge.progress}/{challenge.target}</span>
                  <span>{Math.round((challenge.progress / challenge.target) * 100)}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      challenge.status === 'completed'
                        ? 'bg-green-500'
                        : 'bg-gradient-to-r from-orange-500 to-red-600'
                    }`}
                    style={{ width: `${Math.min((challenge.progress / challenge.target) * 100, 100)}%` }}
                  />
                </div>
              </div>

              {/* Action Button */}
              {challenge.status === 'completed' ? (
                <button className="w-full bg-green-500 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Claim Reward
                </button>
              ) : (
                <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium">
                  In Progress
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Special Challenges */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          Special Challenges
        </h2>

        <div className="space-y-3">
          {specialChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`bg-gradient-to-r ${
                challenge.active
                  ? 'from-purple-600 to-pink-600'
                  : 'from-gray-400 to-gray-500'
              } rounded-xl p-4 text-white`}
            >
              <div className="flex items-start gap-3">
                <div className="text-4xl">{challenge.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">{challenge.name}</h3>
                  <p className="text-sm opacity-90 mb-2">{challenge.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {challenge.timeLeft} left
                    </span>
                    <span className="text-sm font-bold">+{challenge.reward} 🪙</span>
                  </div>
                </div>
              </div>
              {!challenge.active && (
                <div className="mt-3 bg-white/20 rounded-lg p-2 text-center text-sm flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4" />
                  Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="px-4 mt-6 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-500" />
            Achievements
          </h2>
          <button className="text-orange-600 text-sm flex items-center gap-1">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`rounded-lg p-3 text-center ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-yellow-100 to-amber-100'
                    : 'bg-gray-100 opacity-50'
                }`}
              >
                <div className="text-3xl mb-1">{achievement.icon}</div>
                <p className="text-xs font-medium text-gray-800 mb-1">{achievement.name}</p>
                {achievement.unlocked ? (
                  <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                ) : (
                  <Lock className="w-4 h-4 text-gray-400 mx-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 text-white">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-6 h-6" />
            <h3 className="font-bold text-lg">Pro Tip</h3>
          </div>
          <p className="text-sm opacity-90">
            Complete all daily challenges to unlock bonus weekend challenges with 2x rewards!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinHuntChallenges;
