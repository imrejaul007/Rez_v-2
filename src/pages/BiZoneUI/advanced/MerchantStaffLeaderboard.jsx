import { useState } from 'react';
import { Trophy, Medal, Award, Star, TrendingUp, Crown, Target, Zap } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

// Backend API: GET /api/merchant/staff/leaderboard
// Backend API: GET /api/merchant/staff/achievements

export default function MerchantStaffLeaderboard() {
  const [period, setPeriod] = useState('month');
  const [category, setCategory] = useState('revenue');

  const leaderboard = [
    {
      rank: 1,
      name: 'Vikram Reddy',
      avatar: '👨',
      score: 523000,
      change: 2,
      badges: ['🏆', '👑', '⭐'],
      stats: { sales: 289, conversion: 85, rating: 4.9 },
      streak: 45
    },
    {
      rank: 2,
      name: 'Amit Sharma',
      avatar: '👨',
      score: 456000,
      change: 0,
      badges: ['🥈', '⭐'],
      stats: { sales: 245, conversion: 78, rating: 4.8 },
      streak: 32
    },
    {
      rank: 3,
      name: 'Priya Patel',
      avatar: '👩',
      score: 378000,
      change: 1,
      badges: ['🥉', '🚀'],
      stats: { sales: 198, conversion: 82, rating: 4.9 },
      streak: 28
    },
    {
      rank: 4,
      name: 'Rahul Singh',
      avatar: '👨',
      score: 312000,
      change: -1,
      badges: ['⭐'],
      stats: { sales: 167, conversion: 71, rating: 4.6 },
      streak: 15
    },
    {
      rank: 5,
      name: 'Sneha Gupta',
      avatar: '👩',
      score: 245000,
      change: 0,
      badges: ['🌟'],
      stats: { sales: 134, conversion: 68, rating: 4.7 },
      streak: 22
    }
  ];

  const achievements = [
    { id: 1, name: 'Top Seller', icon: '🏆', description: 'Highest revenue this month', earned: 'Vikram Reddy' },
    { id: 2, name: 'Rising Star', icon: '🚀', description: 'Biggest improvement', earned: 'Priya Patel' },
    { id: 3, name: 'Customer Champion', icon: '⭐', description: 'Highest customer rating', earned: 'Priya Patel' },
    { id: 4, name: 'Conversion King', icon: '👑', description: 'Best conversion rate', earned: 'Vikram Reddy' },
    { id: 5, name: 'Consistency Award', icon: '🎯', description: '30+ day streak', earned: 'Vikram Reddy' }
  ];

  const getRankMedal = (rank) => {
    switch(rank) {
      case 1: return { icon: Crown, color: 'text-yellow-400', bg: 'bg-yellow-500/20' };
      case 2: return { icon: Medal, color: 'text-gray-300', bg: 'bg-gray-500/20' };
      case 3: return { icon: Medal, color: 'text-orange-400', bg: 'bg-orange-500/20' };
      default: return { icon: Star, color: 'text-blue-400', bg: 'bg-blue-500/20' };
    }
  };

  const getChangeIndicator = (change) => {
    if (change > 0) return { text: `↑ ${change}`, color: 'text-green-400' };
    if (change < 0) return { text: `↓ ${Math.abs(change)}`, color: 'text-red-400' };
    return { text: '−', color: 'text-gray-400' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900 to-orange-900">
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-12 h-12 text-yellow-400" />
            <h1 className="text-4xl font-bold text-white">Staff Leaderboard</h1>
          </div>
          <p className="text-yellow-200 text-lg">Compete, achieve, and celebrate success together!</p>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <div>
              <label className="block text-sm font-medium text-yellow-200 mb-2 text-center">Period</label>
              <div className="flex gap-2">
                {['week', 'month', 'quarter', 'year'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      period === p
                        ? 'bg-yellow-600 text-white'
                        : 'bg-white/10 text-yellow-200 hover:bg-white/20'
                    }`}
                  >
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-yellow-200 mb-2 text-center">Category</label>
              <div className="flex gap-2">
                {['revenue', 'sales', 'conversion', 'rating'].map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      category === c
                        ? 'bg-orange-600 text-white'
                        : 'bg-white/10 text-yellow-200 hover:bg-white/20'
                    }`}
                  >
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* 2nd Place */}
          {leaderboard[1] && (
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-gray-400/20 to-gray-600/20 backdrop-blur-lg rounded-xl p-6 border-2 border-gray-300/50 text-center transform md:-translate-y-4">
                <div className="inline-block bg-gray-500/30 p-4 rounded-full mb-4">
                  <Medal className="w-12 h-12 text-gray-300" />
                </div>
                <div className="text-6xl mb-3">{leaderboard[1].avatar}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{leaderboard[1].name}</h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                  {leaderboard[1].badges.map((badge, i) => (
                    <span key={i} className="text-2xl">{badge}</span>
                  ))}
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-yellow-200 text-sm">Revenue</p>
                  <p className="text-3xl font-bold text-white">₹{(leaderboard[1].score / 1000).toFixed(0)}K</p>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-200">{leaderboard[1].streak} day streak</span>
                </div>
              </div>
            </div>
          )}

          {/* 1st Place */}
          {leaderboard[0] && (
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-yellow-400/30 to-orange-600/30 backdrop-blur-lg rounded-xl p-8 border-2 border-yellow-400/50 text-center transform scale-105">
                <div className="inline-block bg-yellow-500/30 p-4 rounded-full mb-4 animate-pulse">
                  <Crown className="w-16 h-16 text-yellow-400" />
                </div>
                <div className="text-8xl mb-4">{leaderboard[0].avatar}</div>
                <h3 className="text-3xl font-bold text-white mb-2">{leaderboard[0].name}</h3>
                <p className="text-yellow-200 font-medium mb-3">🏆 Champion</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  {leaderboard[0].badges.map((badge, i) => (
                    <span key={i} className="text-3xl">{badge}</span>
                  ))}
                </div>
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-400/30">
                  <p className="text-yellow-200 text-sm">Revenue</p>
                  <p className="text-4xl font-bold text-white">₹{(leaderboard[0].score / 1000).toFixed(0)}K</p>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <span className="text-yellow-200 font-bold">{leaderboard[0].streak} day streak 🔥</span>
                </div>
              </div>
            </div>
          )}

          {/* 3rd Place */}
          {leaderboard[2] && (
            <div className="order-3">
              <div className="bg-gradient-to-br from-orange-400/20 to-orange-600/20 backdrop-blur-lg rounded-xl p-6 border-2 border-orange-300/50 text-center transform md:-translate-y-4">
                <div className="inline-block bg-orange-500/30 p-4 rounded-full mb-4">
                  <Medal className="w-12 h-12 text-orange-400" />
                </div>
                <div className="text-6xl mb-3">{leaderboard[2].avatar}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{leaderboard[2].name}</h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                  {leaderboard[2].badges.map((badge, i) => (
                    <span key={i} className="text-2xl">{badge}</span>
                  ))}
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-yellow-200 text-sm">Revenue</p>
                  <p className="text-3xl font-bold text-white">₹{(leaderboard[2].score / 1000).toFixed(0)}K</p>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-200">{leaderboard[2].streak} day streak</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Rest of Leaderboard */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 mb-8">
          <div className="p-6 border-b border-white/20">
            <h2 className="text-2xl font-bold text-white">Full Rankings</h2>
          </div>

          <div className="divide-y divide-white/10">
            {leaderboard.map((staff) => {
              const medal = getRankMedal(staff.rank);
              const MedalIcon = medal.icon;
              const changeInfo = getChangeIndicator(staff.change);

              return (
                <div key={staff.rank} className="p-6 hover:bg-white/5 transition-all">
                  <div className="flex items-center gap-6">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-full ${medal.bg}`}>
                      <MedalIcon className={`w-8 h-8 ${medal.color}`} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl">{staff.avatar}</span>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-bold text-white">{staff.name}</h3>
                            <span className={`text-sm font-medium ${changeInfo.color}`}>
                              {changeInfo.text}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            {staff.badges.map((badge, i) => (
                              <span key={i} className="text-lg">{badge}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 mt-3">
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-yellow-200 text-xs">Score</p>
                          <p className="text-white font-bold">₹{(staff.score / 1000).toFixed(0)}K</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-yellow-200 text-xs">Sales</p>
                          <p className="text-white font-bold">{staff.stats.sales}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-yellow-200 text-xs">Conversion</p>
                          <p className="text-white font-bold">{staff.stats.conversion}%</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-yellow-200 text-xs">Rating</p>
                          <p className="text-white font-bold flex items-center justify-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            {staff.stats.rating}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-6xl font-bold text-white/30">#{staff.rank}</div>
                      <div className="flex items-center gap-1 mt-2 text-yellow-300">
                        <Zap className="w-4 h-4" />
                        <span className="text-sm">{staff.streak} days</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Recent Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="text-white font-bold mb-1">{achievement.name}</h3>
                <p className="text-yellow-200 text-sm mb-3">{achievement.description}</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-lg">
                    👤
                  </div>
                  <span className="text-white text-sm font-medium">{achievement.earned}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
