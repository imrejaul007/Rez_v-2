import { useState } from 'react';
import {
  Gift, Coins, Star, Trophy, Share2, MessageSquare, Camera, Users,
  CheckCircle, Settings, TrendingUp, Zap, Award, Target, Heart,
  ArrowRight, Clock, Percent, Upload, Edit, ToggleLeft, ToggleRight
} from 'lucide-react';

export default function MerchantPostPaymentRewards() {
  const [activeTab, setActiveTab] = useState('overview');

  // Reward Configuration
  const [rewardConfig, setRewardConfig] = useState({
    baseCoins: { enabled: true, rate: 10 }, // 1 coin per ₹10
    tipBonus: { enabled: true, minPercent: 10 },
    reviewBonus: { enabled: true, coins: 50 },
    photoBonus: { enabled: true, coins: 25 },
    referralBonus: { enabled: true, coins: 100 },
    shareBonus: { enabled: true, coins: 20 },
    firstVisitBonus: { enabled: true, coins: 100 },
    birthdayBonus: { enabled: true, multiplier: 2 }
  });

  // Stats
  const stats = {
    totalCoinsAwarded: 245680,
    coinsToday: 12450,
    avgCoinsPerTransaction: 156,
    redemptionRate: 67.5,
    topEarner: { name: 'Priya S.', coins: 2450 },
    engagementRate: 78.2
  };

  // Recent Earnings Activity
  const recentActivity = [
    {
      id: 1,
      customer: 'Rahul Sharma',
      phone: '+91 98765 43210',
      time: '2:34 PM',
      earnings: [
        { type: 'purchase', amount: 2450, coins: 245, label: 'Purchase Coins' },
        { type: 'tip', amount: 450, coins: 67, label: 'Tip Bonus (18%)' },
        { type: 'review', coins: 50, label: 'Review Submitted' }
      ],
      totalCoins: 362,
      tier: 'Gold'
    },
    {
      id: 2,
      customer: 'Ananya Kapoor',
      phone: '+91 87654 32109',
      time: '2:15 PM',
      earnings: [
        { type: 'purchase', amount: 1890, coins: 189, label: 'Purchase Coins' },
        { type: 'first_visit', coins: 100, label: 'First Visit Bonus' },
        { type: 'photo', coins: 25, label: 'Photo Uploaded' }
      ],
      totalCoins: 314,
      tier: 'New'
    },
    {
      id: 3,
      customer: 'Vikram Singh',
      phone: '+91 76543 21098',
      time: '1:48 PM',
      earnings: [
        { type: 'purchase', amount: 3200, coins: 320, label: 'Purchase Coins' },
        { type: 'tip', amount: 640, coins: 128, label: 'Tip Bonus (20%)' },
        { type: 'share', coins: 20, label: 'Shared on WhatsApp' },
        { type: 'referral', coins: 100, label: 'Friend Joined' }
      ],
      totalCoins: 568,
      tier: 'Platinum'
    }
  ];

  // Earning Actions for Customers
  const earningActions = [
    {
      id: 'purchase',
      title: 'Purchase Coins',
      description: '1 coin per ₹10 spent',
      icon: Coins,
      color: 'bg-yellow-100 text-yellow-700',
      enabled: rewardConfig.baseCoins.enabled
    },
    {
      id: 'tip',
      title: 'Tip Bonus',
      description: 'Extra 10-20% coins on tips',
      icon: Heart,
      color: 'bg-pink-100 text-pink-700',
      enabled: rewardConfig.tipBonus.enabled
    },
    {
      id: 'review',
      title: 'Write Review',
      description: '+50 coins per review',
      icon: Star,
      color: 'bg-purple-100 text-purple-700',
      enabled: rewardConfig.reviewBonus.enabled
    },
    {
      id: 'photo',
      title: 'Upload Food Photo',
      description: '+25 coins per photo',
      icon: Camera,
      color: 'bg-blue-100 text-blue-700',
      enabled: rewardConfig.photoBonus.enabled
    },
    {
      id: 'share',
      title: 'Share Experience',
      description: '+20 coins per share',
      icon: Share2,
      color: 'bg-green-100 text-green-700',
      enabled: rewardConfig.shareBonus.enabled
    },
    {
      id: 'referral',
      title: 'Refer a Friend',
      description: '+100 coins when friend joins',
      icon: Users,
      color: 'bg-orange-100 text-orange-700',
      enabled: rewardConfig.referralBonus.enabled
    },
    {
      id: 'first_visit',
      title: 'First Visit Bonus',
      description: '+100 coins on first visit',
      icon: Gift,
      color: 'bg-indigo-100 text-indigo-700',
      enabled: rewardConfig.firstVisitBonus.enabled
    },
    {
      id: 'birthday',
      title: 'Birthday Bonus',
      description: '2x coins on birthday',
      icon: Award,
      color: 'bg-red-100 text-red-700',
      enabled: rewardConfig.birthdayBonus.enabled
    }
  ];

  const getEarningIcon = (type) => {
    switch (type) {
      case 'purchase': return <Coins className="w-4 h-4 text-yellow-600" />;
      case 'tip': return <Heart className="w-4 h-4 text-pink-600" />;
      case 'review': return <Star className="w-4 h-4 text-purple-600" />;
      case 'photo': return <Camera className="w-4 h-4 text-blue-600" />;
      case 'share': return <Share2 className="w-4 h-4 text-green-600" />;
      case 'referral': return <Users className="w-4 h-4 text-orange-600" />;
      case 'first_visit': return <Gift className="w-4 h-4 text-indigo-600" />;
      case 'birthday': return <Award className="w-4 h-4 text-red-600" />;
      default: return <Coins className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Platinum': return 'bg-purple-100 text-purple-700';
      case 'Gold': return 'bg-yellow-100 text-yellow-700';
      case 'Silver': return 'bg-gray-200 text-gray-700';
      case 'Bronze': return 'bg-orange-100 text-orange-700';
      case 'New': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-3xl">🪙</span>
                Post-Payment Rewards
              </h1>
              <p className="text-yellow-100 mt-1">Configure how customers earn RezCoins after payment</p>
            </div>
            <button className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Advanced Settings
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-6 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm text-yellow-100 mb-1">Total Coins Awarded</div>
              <div className="text-2xl font-bold">{stats.totalCoinsAwarded.toLocaleString()}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm text-yellow-100 mb-1">Coins Today</div>
              <div className="text-2xl font-bold">{stats.coinsToday.toLocaleString()}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm text-yellow-100 mb-1">Avg per Transaction</div>
              <div className="text-2xl font-bold">{stats.avgCoinsPerTransaction}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm text-yellow-100 mb-1">Redemption Rate</div>
              <div className="text-2xl font-bold">{stats.redemptionRate}%</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm text-yellow-100 mb-1">Engagement Rate</div>
              <div className="text-2xl font-bold">{stats.engagementRate}%</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm text-yellow-100 mb-1">Top Earner Today</div>
              <div className="font-bold">{stats.topEarner.name}</div>
              <div className="text-sm">{stats.topEarner.coins} coins</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 bg-white border-b border-gray-200">
        <div className="flex">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'config', label: 'Configure Rewards' },
            { id: 'activity', label: 'Recent Activity' },
            { id: 'prompts', label: 'Post-Payment Prompts' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-medium border-b-2 transition-all ${
                activeTab === tab.id
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-2 gap-6">
            {/* Earning Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Ways Customers Earn Coins
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {earningActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <div
                      key={action.id}
                      className={`p-4 rounded-xl border ${
                        action.enabled ? 'border-gray-200' : 'border-gray-100 opacity-50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${action.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{action.title}</div>
                          <div className="text-xs text-gray-500">{action.description}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-medium ${action.enabled ? 'text-green-600' : 'text-gray-400'}`}>
                          {action.enabled ? 'Active' : 'Disabled'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500" />
                Recent Coin Earnings
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="font-bold text-purple-600">
                            {activity.customer.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{activity.customer}</div>
                          <div className="text-xs text-gray-500">{activity.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-yellow-600 font-bold">
                          🪙 +{activity.totalCoins}
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getTierColor(activity.tier)}`}>
                          {activity.tier}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {activity.earnings.map((earning, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            {getEarningIcon(earning.type)}
                            <span className="text-gray-600">{earning.label}</span>
                          </div>
                          <span className="font-medium text-green-600">+{earning.coins}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'config' && (
          <div className="max-w-3xl space-y-6">
            {/* Base Coin Rate */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900">Base Coin Earning Rate</h3>
                  <p className="text-sm text-gray-500">How many coins customers earn per purchase</p>
                </div>
                <button
                  onClick={() => setRewardConfig({
                    ...rewardConfig,
                    baseCoins: {...rewardConfig.baseCoins, enabled: !rewardConfig.baseCoins.enabled}
                  })}
                  className={`w-12 h-6 rounded-full transition-all ${
                    rewardConfig.baseCoins.enabled ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    rewardConfig.baseCoins.enabled ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    1 coin per ₹
                  </label>
                  <input
                    type="number"
                    value={rewardConfig.baseCoins.rate}
                    onChange={(e) => setRewardConfig({
                      ...rewardConfig,
                      baseCoins: {...rewardConfig.baseCoins, rate: parseInt(e.target.value)}
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex-1 bg-yellow-50 rounded-lg p-3">
                  <div className="text-sm text-yellow-800">
                    Example: ₹2,500 bill = <strong>{Math.floor(2500 / rewardConfig.baseCoins.rate)} coins</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Bonus Actions */}
            {earningActions.slice(1).map((action) => {
              const Icon = action.icon;
              const configKey = action.id === 'tip' ? 'tipBonus' :
                               action.id === 'review' ? 'reviewBonus' :
                               action.id === 'photo' ? 'photoBonus' :
                               action.id === 'share' ? 'shareBonus' :
                               action.id === 'referral' ? 'referralBonus' :
                               action.id === 'first_visit' ? 'firstVisitBonus' :
                               'birthdayBonus';

              return (
                <div key={action.id} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${action.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{action.title}</h3>
                        <p className="text-sm text-gray-500">{action.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setRewardConfig({
                        ...rewardConfig,
                        [configKey]: {...rewardConfig[configKey], enabled: !rewardConfig[configKey].enabled}
                      })}
                      className={`w-12 h-6 rounded-full transition-all ${
                        rewardConfig[configKey].enabled ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        rewardConfig[configKey].enabled ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'prompts' && (
          <div className="max-w-2xl">
            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Post-Payment Screen Preview</h3>
              <p className="text-sm text-gray-500 mb-4">This is what customers see after completing payment</p>

              {/* Phone Mockup */}
              <div className="max-w-xs mx-auto">
                <div className="bg-gray-900 rounded-3xl p-3">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    {/* Success Header */}
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <div className="text-xl font-bold">Payment Successful!</div>
                      <div className="text-green-100">₹2,450 paid</div>
                    </div>

                    {/* Coins Earned */}
                    <div className="p-4 bg-yellow-50 border-b border-yellow-100">
                      <div className="flex items-center justify-center gap-2 text-yellow-800">
                        <span className="text-2xl">🪙</span>
                        <span className="text-xl font-bold">+245 RezCoins Earned!</span>
                      </div>
                      <div className="text-center text-sm text-yellow-700 mt-1">
                        Your balance: 2,695 coins
                      </div>
                    </div>

                    {/* Earn More Actions */}
                    <div className="p-4">
                      <div className="text-sm font-medium text-gray-700 mb-3">Earn more coins:</div>
                      <div className="space-y-2">
                        <button className="w-full p-3 bg-purple-50 rounded-xl flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Star className="w-5 h-5 text-purple-600" />
                            <span className="text-sm font-medium">Write a Review</span>
                          </div>
                          <span className="text-purple-600 font-bold">+50</span>
                        </button>
                        <button className="w-full p-3 bg-blue-50 rounded-xl flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Camera className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-medium">Upload Food Photo</span>
                          </div>
                          <span className="text-blue-600 font-bold">+25</span>
                        </button>
                        <button className="w-full p-3 bg-green-50 rounded-xl flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Share2 className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-medium">Share Experience</span>
                          </div>
                          <span className="text-green-600 font-bold">+20</span>
                        </button>
                        <button className="w-full p-3 bg-orange-50 rounded-xl flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-orange-600" />
                            <span className="text-sm font-medium">Invite a Friend</span>
                          </div>
                          <span className="text-orange-600 font-bold">+100</span>
                        </button>
                      </div>
                    </div>

                    {/* Done Button */}
                    <div className="p-4 border-t border-gray-100">
                      <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold">
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
