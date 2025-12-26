import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Lock, ShoppingBag, Users, Gamepad2, TrendingUp } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const Achievements = () => {
  const achievements = [
    { id: 1, title: 'First Purchase', desc: 'Make your first purchase', icon: '🎯', unlocked: true, coins: 100, category: 'Shopping' },
    { id: 2, title: 'Week Streak', desc: 'Login 7 days in a row', icon: '🔥', unlocked: true, coins: 500, category: 'Engagement' },
    { id: 3, title: 'Social Butterfly', desc: 'Refer 10 friends', icon: '🦋', unlocked: false, coins: 300, progress: 60, category: 'Social' },
    { id: 4, title: 'Deal Hunter', desc: 'Redeem 20 offers', icon: '🎪', unlocked: false, coins: 400, progress: 25, category: 'Shopping' },
    { id: 5, title: 'Review Master', desc: 'Write 15 reviews', icon: '⭐', unlocked: false, coins: 250, progress: 40, category: 'Social' },
    { id: 6, title: 'Big Spender', desc: 'Spend ₹10,000', icon: '💰', unlocked: false, coins: 1000, progress: 75, category: 'Shopping' },
    { id: 7, title: 'Early Bird', desc: 'Check-in before 8 AM', icon: '🌅', unlocked: true, coins: 150, category: 'Engagement' },
    { id: 8, title: 'Night Owl', desc: 'Shop after 10 PM', icon: '🦉', unlocked: false, coins: 150, progress: 0, category: 'Engagement' },
    { id: 9, title: 'Game Master', desc: 'Play 50 games', icon: '🎮', unlocked: false, coins: 500, progress: 30, category: 'Gaming' },
    { id: 10, title: 'Cashback King', desc: 'Earn ₹5,000 cashback', icon: '👑', unlocked: false, coins: 2000, progress: 45, category: 'Shopping' },
    { id: 11, title: 'Explorer', desc: 'Visit 30 stores', icon: '🗺️', unlocked: false, coins: 350, progress: 50, category: 'Shopping' },
    { id: 12, title: 'Loyal Member', desc: '30 days streak', icon: '💎', unlocked: false, coins: 1500, progress: 20, category: 'Engagement' },
  ];

  const categories = ['All', 'Shopping', 'Social', 'Engagement', 'Gaming'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredAchievements = activeCategory === 'All'
    ? achievements
    : achievements.filter(a => a.category === activeCategory);

  const totalUnlocked = achievements.filter(a => a.unlocked).length;
  const totalCoins = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.coins, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass px-4 py-3">
        <div className="flex items-center gap-3">
          <Link to="/earn" className="p-2 rounded-full hover:bg-white/10 active:scale-95 transition-all">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </Link>
          <div>
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">🏅 Achievements</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Unlock badges & earn coins</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-center">
            <p className="text-2xl font-bold text-rez-navy dark:text-white">{totalUnlocked}/{achievements.length}</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Unlocked</p>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 text-center">
            <p className="text-2xl font-bold text-amber-400">{totalCoins}</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Coins Earned</p>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-center">
            <p className="text-2xl font-bold text-green-400">{Math.round((totalUnlocked/achievements.length)*100)}%</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Complete</p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 py-2">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-rez-green-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Achievements List */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-3">
          {filteredAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-2xl border relative ${
                achievement.unlocked
                  ? 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-amber-500/30'
                  : 'bg-rez-gray-50 dark:bg-white/5 border-rez-gray-200 dark:border-white/10'
              }`}
            >
              {!achievement.unlocked && (
                <div className="absolute top-2 right-2">
                  <Lock className="w-4 h-4 text-rez-gray-400 dark:text-gray-500" />
                </div>
              )}

              <div className="flex items-center justify-between mb-2">
                <span className="text-4xl">{achievement.icon}</span>
                {achievement.unlocked && (
                  <span className="text-lg">✅</span>
                )}
              </div>

              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">{achievement.title}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{achievement.desc}</p>
              <p className="text-xs font-semibold text-amber-400">+{achievement.coins} coins</p>

              {!achievement.unlocked && achievement.progress !== undefined && (
                <div className="mt-3">
                  <div className="w-full h-1.5 bg-rez-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all"
                      style={{ width: `${achievement.progress}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-rez-gray-600 dark:text-gray-400 mt-1">{achievement.progress}% complete</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTAs Section */}
      <div className="px-4 py-6 space-y-4">
        <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-4">Quick Actions to Unlock More</h2>

        {/* Shopping CTA */}
        <Link
          to="/mall"
          className="block p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-purple-500/20">
              <ShoppingBag className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Shop & Unlock Deals</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Complete shopping achievements</p>
            </div>
            <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
        </Link>

        {/* Referral CTA */}
        <Link
          to="/refer"
          className="block p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-500/20">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Refer Friends</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Unlock social achievements & earn</p>
            </div>
            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
        </Link>

        {/* Games CTA */}
        <Link
          to="/games"
          className="block p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-green-500/20">
              <Gamepad2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Play Games</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Complete gaming challenges</p>
            </div>
            <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
        </Link>

        {/* Daily Check-in CTA */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-500/20">
              <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Daily Check-in</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Build streaks & unlock rewards</p>
            </div>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-semibold hover:scale-105 active:scale-95 transition-all">
              Check In
            </button>
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default Achievements;
