import { useState } from 'react';
import { Leaf, Droplet, Award, TrendingUp, Users, ShoppingBag, Target, Gift, CheckCircle, Trophy } from 'lucide-react';

export default function SustainabilityDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('month'); // 'week', 'month', 'year'

  // Mock sustainability data
  const sustainabilityScore = 75;
  const impactData = {
    co2SavedKg: 45.6,
    waterSavedLiters: 12400,
    ethicalPurchases: 23,
    sustainablePurchases: 15,
    totalPurchases: 38
  };

  const greenTier = 'silver'; // bronze, silver, gold, platinum

  const tierInfo = {
    bronze: { min: 0, max: 30, color: 'from-amber-700 to-amber-900', icon: '🥉' },
    silver: { min: 31, max: 60, color: 'from-gray-400 to-gray-600', icon: '🥈' },
    gold: { min: 61, max: 90, color: 'from-yellow-400 to-yellow-600', icon: '🥇' },
    platinum: { min: 91, max: 100, color: 'from-purple-400 to-purple-600', icon: '💎' }
  };

  const monthlyTrend = [
    { month: 'Jul', score: 55 },
    { month: 'Aug', score: 60 },
    { month: 'Sep', score: 65 },
    { month: 'Oct', score: 68 },
    { month: 'Nov', score: 72 },
    { month: 'Dec', score: 75 }
  ];

  const sustainableBrands = [
    { name: 'FabIndia', purchases: 8, score: 95, logo: 'https://via.placeholder.com/50' },
    { name: 'Organic Cotton Co.', purchases: 5, score: 92, logo: 'https://via.placeholder.com/50' },
    { name: 'EcoVogue', purchases: 4, score: 88, logo: 'https://via.placeholder.com/50' },
    { name: 'Green Threads', purchases: 3, score: 85, logo: 'https://via.placeholder.com/50' }
  ];

  const achievements = [
    { id: 1, title: 'Eco Warrior', description: '10 sustainable purchases', unlocked: true, icon: '🌿' },
    { id: 2, title: 'Water Saver', description: 'Saved 10,000L water', unlocked: true, icon: '💧' },
    { id: 3, title: 'Carbon Neutral', description: 'Saved 50kg CO2', unlocked: false, progress: 91, icon: '🌍' },
    { id: 4, title: 'Ethical Shopper', description: '25 fair trade purchases', unlocked: false, progress: 92, icon: '⚖️' },
    { id: 5, title: 'Green Influencer', description: 'Inspire 5 friends', unlocked: false, progress: 60, icon: '✨' },
    { id: 6, title: 'Platinum Tier', description: 'Reach 90+ score', unlocked: false, progress: 83, icon: '💎' }
  ];

  const leaderboard = [
    { rank: 1, name: 'Priya S.', score: 92, avatar: 'https://i.pravatar.cc/150?img=1' },
    { rank: 2, name: 'Rahul M.', score: 88, avatar: 'https://i.pravatar.cc/150?img=2' },
    { rank: 3, name: 'Ananya K.', score: 82, avatar: 'https://i.pravatar.cc/150?img=3' },
    { rank: 4, name: 'You', score: 75, avatar: 'https://i.pravatar.cc/150?img=4', isCurrentUser: true },
    { rank: 5, name: 'Arjun P.', score: 70, avatar: 'https://i.pravatar.cc/150?img=5' }
  ];

  const sustainableTips = [
    { tip: 'Buy quality over quantity', impact: 'Reduces waste by 60%' },
    { tip: 'Choose organic cotton', impact: 'Saves 2,000L water per item' },
    { tip: 'Support local artisans', impact: 'Lower carbon footprint' },
    { tip: 'Donate unworn clothes', impact: 'Earn 2x RezCoins' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Sustainability Dashboard</h1>
              <p className="text-green-100">Track your fashion footprint & earn green rewards</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-2">{tierInfo[greenTier].icon}</div>
              <div className="text-sm uppercase tracking-wider">{greenTier} Tier</div>
            </div>
          </div>

          {/* Score Circle */}
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              {/* Background Circle */}
              <svg className="transform -rotate-90 w-48 h-48">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="transparent"
                  className="text-white/20"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 88}`}
                  strokeDashoffset={`${2 * Math.PI * 88 * (1 - sustainabilityScore / 100)}`}
                  className="text-yellow-300"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold">{sustainabilityScore}</div>
                <div className="text-sm text-green-100">Eco Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Impact Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{impactData.co2SavedKg} kg</div>
            <div className="text-sm text-gray-500">CO₂ Saved</div>
            <div className="mt-2 text-xs text-green-600">= 150 km not driven</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Droplet className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{(impactData.waterSavedLiters / 1000).toFixed(1)}K L</div>
            <div className="text-sm text-gray-500">Water Saved</div>
            <div className="mt-2 text-xs text-blue-600">= 62 showers</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <ShoppingBag className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{impactData.sustainablePurchases}</div>
            <div className="text-sm text-gray-500">Sustainable Buys</div>
            <div className="mt-2 text-xs text-purple-600">{Math.round((impactData.sustainablePurchases / impactData.totalPurchases) * 100)}% of total</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{impactData.ethicalPurchases}</div>
            <div className="text-sm text-gray-500">Ethical Brands</div>
            <div className="mt-2 text-xs text-orange-600">Supporting fair trade</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Monthly Trend */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Sustainability Trend</h2>

              <div className="flex items-end justify-between gap-4 h-48">
                {monthlyTrend.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-gray-100 rounded-t-lg relative" style={{ height: '100%' }}>
                      <div
                        className="absolute bottom-0 w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg transition-all"
                        style={{ height: `${data.score}%` }}
                      />
                    </div>
                    <div className="mt-2 text-xs font-medium text-gray-600">{data.month}</div>
                    <div className="text-xs text-gray-400">{data.score}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>+20 points this year • Keep it up!</span>
              </div>
            </div>

            {/* Sustainable Brands */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your Sustainable Brands</h2>

              <div className="space-y-4">
                {sustainableBrands.map((brand, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-12 h-12 rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{brand.name}</div>
                      <div className="text-sm text-gray-500">{brand.purchases} purchases</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{brand.score}</div>
                      <div className="text-xs text-gray-500">Eco Score</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sustainable Tips */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Eco-Friendly Shopping Tips</h2>

              <div className="space-y-3">
                {sustainableTips.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{item.tip}</div>
                      <div className="text-sm text-gray-600">{item.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Green Rewards */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-8 h-8" />
                <h2 className="text-xl font-bold">Green Rewards</h2>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
                <div className="text-3xl font-bold mb-1">2,450</div>
                <div className="text-sm">Extra RezCoins Earned</div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>2x on sustainable items</span>
                  <span className="font-semibold">+1,200</span>
                </div>
                <div className="flex justify-between">
                  <span>Streak bonus (15 days)</span>
                  <span className="font-semibold">+750</span>
                </div>
                <div className="flex justify-between">
                  <span>Silver tier bonus</span>
                  <span className="font-semibold">+500</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-white text-orange-600 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                Shop Sustainable Items
              </button>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-yellow-600" />
                <h2 className="text-xl font-bold text-gray-900">Leaderboard</h2>
              </div>

              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-3 p-3 rounded-xl ${
                      user.isCurrentUser ? 'bg-green-50 border-2 border-green-600' : 'bg-gray-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      user.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                      user.rank === 2 ? 'bg-gray-300 text-gray-700' :
                      user.rank === 3 ? 'bg-orange-400 text-orange-900' :
                      'bg-gray-200 text-gray-600'
                    }`}>
                      {user.rank}
                    </div>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{user.name}</div>
                    </div>
                    <div className="text-lg font-bold text-green-600">{user.score}</div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 text-purple-600 font-semibold text-sm hover:underline">
                View Full Leaderboard
              </button>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-bold text-gray-900">Achievements</h2>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center p-3 ${
                      achievement.unlocked
                        ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-400'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className={`text-3xl mb-2 ${!achievement.unlocked && 'grayscale opacity-50'}`}>
                      {achievement.icon}
                    </div>
                    <div className="text-xs text-center font-medium text-gray-700">
                      {achievement.title}
                    </div>
                    {!achievement.unlocked && achievement.progress && (
                      <div className="text-xs text-gray-500 mt-1">{achievement.progress}%</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
