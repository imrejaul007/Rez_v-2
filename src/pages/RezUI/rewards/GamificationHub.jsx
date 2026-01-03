import { useState } from 'react';
import { ArrowLeft, Zap, Trophy, Flame, Star, Gift, TrendingUp } from 'lucide-react';
import { useGamification } from '../contexts/GamificationContext';
import { useNavigate } from 'react-router-dom';

const GamificationHub = () => {
  const {
    level,
    xp,
    xpToNextLevel,
    streak,
    unlockedBadges,
    badges,
    dailyCheckIn,
    progressToNextLevel,
    lastCheckIn
  } = useGamification();

  const navigate = useNavigate();
  const [showCheckInSuccess, setShowCheckInSuccess] = useState(false);
  const [checkInReward, setCheckInReward] = useState(null);

  const handleDailyCheckIn = () => {
    const result = dailyCheckIn();

    if (result.success) {
      setCheckInReward(result);
      setShowCheckInSuccess(true);
      setTimeout(() => setShowCheckInSuccess(false), 3000);
    } else {
      alert(result.message);
    }
  };

  const canCheckInToday = () => {
    if (!lastCheckIn) return true;
    const today = new Date().toDateString();
    const lastCheckInDate = new Date(lastCheckIn).toDateString();
    return today !== lastCheckInDate;
  };

  const allBadges = Object.values(badges);
  const lockedBadges = allBadges.filter(
    badge => !unlockedBadges.find(b => b?.id === badge.id)
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24">
      {/* Header with Level Progress */}
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative px-4 py-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-xl hover:bg-white/10 transition-colors mb-4"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Achievements</h1>
              <p className="text-sm text-white/80">Level {level} Explorer</p>
            </div>
          </div>

          {/* Level Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Level {level}</p>
                <p className="text-3xl font-black text-white">{xp} <span className="text-lg">/ {xpToNextLevel} XP</span></p>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Zap className="w-8 h-8 text-yellow-300" />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-3 bg-white/20 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-full transition-all duration-500 shadow-lg shadow-yellow-500/50"
                style={{ width: `${progressToNextLevel}%` }}
              ></div>
            </div>
            <p className="text-xs text-white/70 text-right">{(xpToNextLevel - xp)} XP to Level {level + 1}</p>
          </div>
        </div>

        {/* Wave */}
        <div className="relative h-8">
          <svg className="absolute bottom-0 w-full h-8" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
              className="fill-gray-50 dark:fill-gray-900"
            ></path>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 -mt-4">
        {/* Daily Check-in Card */}
        <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl p-6 mb-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl"></div>

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Flame className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white/90 mb-1">Daily Streak</p>
                <p className="text-3xl font-black text-white">{streak} {streak === 1 ? 'Day' : 'Days'} 🔥</p>
              </div>
            </div>

            <button
              onClick={handleDailyCheckIn}
              disabled={!canCheckInToday()}
              className={`px-6 py-3 rounded-xl font-bold shadow-lg transition-all ${
                canCheckInToday()
                  ? 'bg-white text-pink-600 hover:scale-105 hover:shadow-xl'
                  : 'bg-white/30 text-white/50 cursor-not-allowed'
              }`}
            >
              {canCheckInToday() ? 'Check In' : 'Done ✓'}
            </button>
          </div>

          {streak >= 3 && (
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-sm text-white/90">
                🎉 Keep it up! {streak >= 7 ? 'Week Warrior badge unlocked!' : `${7 - streak} more days to Week Warrior badge`}
              </p>
            </div>
          )}
        </div>

        {/* Check-in Success Toast */}
        {showCheckInSuccess && checkInReward && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl animate-bounce">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Check-in Successful!</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  +{checkInReward.xpEarned} XP • {checkInReward.streak} day streak!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Unlocked Badges */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Unlocked Badges</h2>
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20">
              <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                {unlockedBadges.length}/{allBadges.length}
              </span>
            </div>
          </div>

          {unlockedBadges.length === 0 ? (
            <div className="text-center py-8">
              <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Start your journey to unlock badges!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {unlockedBadges.map((badge) => badge && (
                <div
                  key={badge.id}
                  className="relative group"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${badge.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                  <div className="relative bg-white dark:bg-gray-700 rounded-2xl p-4 border border-gray-200 dark:border-gray-600">
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">{badge.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Locked Badges */}
        {lockedBadges.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Locked Badges</h2>
              <Star className="w-5 h-5 text-gray-400" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {lockedBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="bg-gray-100 dark:bg-gray-700/50 rounded-2xl p-4 border border-gray-200 dark:border-gray-600 opacity-60"
                >
                  <div className="text-4xl mb-2 grayscale">{badge.icon}</div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">{badge.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rewards Info */}
        <div className="mt-6 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-white" />
              <p className="text-lg font-bold text-white">How to Earn XP</p>
            </div>

            <div className="space-y-2 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <span>•</span>
                <span>Daily check-in: <strong>10+ XP</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span>•</span>
                <span>Make a purchase: <strong>20 XP</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span>•</span>
                <span>Unlock badge: <strong>50 XP</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span>•</span>
                <span>Write a review: <strong>15 XP</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span>•</span>
                <span>Refer a friend: <strong>100 XP</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamificationHub;
