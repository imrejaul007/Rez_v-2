import { TrendingUp, Camera, Users, Award, BarChart3, Eye } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNavManager from '../../components/layout/BottomNavManager';

const PriveInfluence = () => {
  // Mock influence stats
  const stats = {
    influenceScore: 847,
    tier: 'Gold Influencer',
    totalReach: '12.4K',
    engagement: '8.2%',
    coinsEarned: 15680,
  };

  // Mock active campaigns
  const campaigns = [
    {
      id: 1,
      brand: 'Nykaa Luxe',
      title: 'Premium Skincare Review',
      reward: '2000 ReZ Coins',
      deadline: '5 days left',
      status: 'in_progress',
      progress: 60
    },
    {
      id: 2,
      brand: 'Zara',
      title: 'Winter Collection Showcase',
      reward: '3500 ReZ Coins',
      deadline: '12 days left',
      status: 'pending',
      progress: 0
    },
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Page Header */}
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2 flex items-center gap-2">
          <TrendingUp className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
          Influence Hub
        </h1>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Earn through content & campaigns</p>
      </div>

      {/* Stats Overview */}
      <div className="px-4 mb-8">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white mb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/80 text-sm mb-1">Influence Score</p>
              <h2 className="text-4xl font-bold">{stats.influenceScore}</h2>
            </div>
            <Award className="w-12 h-12 text-white/20" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm w-fit">
            <Crown className="w-4 h-4" />
            <span className="text-sm font-semibold">{stats.tier}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 text-center">
            <Eye className="w-5 h-5 text-rez-gray-400 dark:text-gray-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-rez-navy dark:text-white">{stats.totalReach}</div>
            <div className="text-xs text-rez-gray-600 dark:text-gray-400">Total Reach</div>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 text-center">
            <BarChart3 className="w-5 h-5 text-rez-gray-400 dark:text-gray-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-rez-navy dark:text-white">{stats.engagement}</div>
            <div className="text-xs text-rez-gray-600 dark:text-gray-400">Engagement</div>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 text-center">
            <span className="text-xl mb-2 block">🪙</span>
            <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{stats.coinsEarned.toLocaleString()}</div>
            <div className="text-xs text-rez-gray-600 dark:text-gray-400">Coins Earned</div>
          </div>
        </div>
      </div>

      {/* Active Campaigns */}
      <div className="px-4 mb-8">
        <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-4">Active Campaigns</h2>
        <div className="space-y-3">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="p-5 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-rez-navy dark:text-white mb-1">{campaign.title}</h3>
                  <p className="text-sm text-rez-gray-600 dark:text-gray-400">{campaign.brand}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  campaign.status === 'in_progress'
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                    : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                }`}>
                  {campaign.status === 'in_progress' ? 'In Progress' : 'Pending'}
                </span>
              </div>

              {campaign.status === 'in_progress' && (
                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-rez-gray-600 dark:text-gray-400">Progress</span>
                    <span className="font-semibold text-rez-navy dark:text-white">{campaign.progress}%</span>
                  </div>
                  <div className="h-2 bg-rez-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{campaign.reward}</span>
                <span className="text-xs text-rez-gray-500 dark:text-gray-500">{campaign.deadline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Content CTA */}
      <div className="px-4 mb-6">
        <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg flex items-center justify-center gap-2">
          <Camera className="w-5 h-5" />
          Create New Content
        </button>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveInfluence;
