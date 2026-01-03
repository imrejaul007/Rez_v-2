import { useState } from 'react';
import {
  Users, Gift, TrendingUp, Award, AlertCircle, Crown,
  Share2, Coins, DollarSign, UserPlus, CheckCircle, XCircle,
  BarChart3, Flag, Eye, Settings, Star
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminReferrals() {
  const [activeTab, setActiveTab] = useState('overview');

  const [referralSettings, setReferralSettings] = useState({
    referrerReward: 100,
    refereeReward: 50,
    minPurchaseAmount: 500,
    maxReferrals: 50,
    tierEnabled: true,
    tiers: [
      { name: 'Bronze', referrals: 5, bonus: 50 },
      { name: 'Silver', referrals: 10, bonus: 150 },
      { name: 'Gold', referrals: 25, bonus: 500 },
      { name: 'Platinum', referrals: 50, bonus: 1500 }
    ]
  });

  const [topReferrers, setTopReferrers] = useState([
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul.sharma@email.com',
      totalReferrals: 47,
      successfulReferrals: 42,
      coinsEarned: 5250,
      tier: 'Gold',
      joinDate: '2023-08-15',
      lastReferral: '2024-01-20',
      conversionRate: 89.4
    },
    {
      id: 2,
      name: 'Priya Patel',
      email: 'priya.patel@email.com',
      totalReferrals: 38,
      successfulReferrals: 35,
      coinsEarned: 4200,
      tier: 'Gold',
      joinDate: '2023-09-02',
      lastReferral: '2024-01-19',
      conversionRate: 92.1
    },
    {
      id: 3,
      name: 'Arjun Mehta',
      email: 'arjun.mehta@email.com',
      totalReferrals: 28,
      successfulReferrals: 26,
      coinsEarned: 3300,
      tier: 'Gold',
      joinDate: '2023-10-11',
      lastReferral: '2024-01-18',
      conversionRate: 92.9
    },
    {
      id: 4,
      name: 'Sneha Gupta',
      email: 'sneha.gupta@email.com',
      totalReferrals: 15,
      successfulReferrals: 14,
      coinsEarned: 1550,
      tier: 'Silver',
      joinDate: '2023-11-05',
      lastReferral: '2024-01-17',
      conversionRate: 93.3
    },
    {
      id: 5,
      name: 'Vikram Singh',
      email: 'vikram.singh@email.com',
      totalReferrals: 12,
      successfulReferrals: 10,
      coinsEarned: 1150,
      tier: 'Silver',
      joinDate: '2023-11-20',
      lastReferral: '2024-01-16',
      conversionRate: 83.3
    }
  ]);

  const [fraudCases, setFraudCases] = useState([
    {
      id: 1,
      user: 'suspicious.user@email.com',
      reason: 'Multiple accounts from same IP',
      referrals: 15,
      flaggedDate: '2024-01-20',
      status: 'under_review',
      severity: 'high'
    },
    {
      id: 2,
      user: 'fake.referrals@email.com',
      reason: 'Referred accounts have no activity',
      referrals: 8,
      flaggedDate: '2024-01-19',
      status: 'under_review',
      severity: 'medium'
    },
    {
      id: 3,
      user: 'bot.account@email.com',
      reason: 'Unusual referral pattern detected',
      referrals: 20,
      flaggedDate: '2024-01-18',
      status: 'blocked',
      severity: 'high'
    }
  ]);

  const [analytics, setAnalytics] = useState({
    totalReferrals: 12456,
    successfulReferrals: 9834,
    pendingReferrals: 1245,
    failedReferrals: 1377,
    totalCoinsGiven: 1234567,
    avgConversionRate: 78.9,
    newReferralsToday: 45,
    topTier: 'Gold'
  });

  const handleApprove = (id) => {
    setFraudCases(prev => prev.map(c => c.id === id ? { ...c, status: 'cleared' } : c));
  };

  const handleBlock = (id) => {
    setFraudCases(prev => prev.map(c => c.id === id ? { ...c, status: 'blocked' } : c));
  };

  const stats = {
    totalReferrals: analytics.totalReferrals,
    successfulReferrals: analytics.successfulReferrals,
    conversionRate: analytics.avgConversionRate,
    coinsDistributed: analytics.totalCoinsGiven,
    activeReferrers: topReferrers.length,
    fraudCases: fraudCases.filter(c => c.status === 'under_review').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Referral Management</h1>
              <p className="text-gray-600 mt-1">Manage referral program, rewards, and analytics</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Settings className="w-5 h-5" />
              Configure Settings
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Referrals</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalReferrals.toLocaleString()}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Share2 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Successful</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{stats.successfulReferrals.toLocaleString()}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Conversion</p>
                <p className="text-3xl font-bold text-indigo-600 mt-2">{stats.conversionRate}%</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Coins Given</p>
                <p className="text-3xl font-bold text-orange-600 mt-2">{(stats.coinsDistributed / 1000).toFixed(0)}K</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Coins className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Top Referrers</p>
                <p className="text-3xl font-bold text-purple-600 mt-2">{stats.activeReferrers}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Crown className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Fraud Cases</p>
                <p className="text-3xl font-bold text-red-600 mt-2">{stats.fraudCases}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Overview
              </div>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'settings'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Settings className="w-5 h-5" />
                Settings
              </div>
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'leaderboard'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Award className="w-5 h-5" />
                Top Referrers
              </div>
            </button>
            <button
              onClick={() => setActiveTab('fraud')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'fraud'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Flag className="w-5 h-5" />
                Fraud Detection
                {stats.fraudCases > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {stats.fraudCases}
                  </span>
                )}
              </div>
            </button>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Share2 className="w-6 h-6 text-blue-600" />
                    <h3 className="text-sm font-medium text-blue-900">Total Referrals</h3>
                  </div>
                  <p className="text-3xl font-bold text-blue-900">{analytics.totalReferrals.toLocaleString()}</p>
                  <p className="text-sm text-blue-700 mt-2">+{analytics.newReferralsToday} today</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h3 className="text-sm font-medium text-green-900">Successful</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-900">{analytics.successfulReferrals.toLocaleString()}</p>
                  <p className="text-sm text-green-700 mt-2">{analytics.avgConversionRate}% conversion</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Coins className="w-6 h-6 text-orange-600" />
                    <h3 className="text-sm font-medium text-orange-900">Coins Distributed</h3>
                  </div>
                  <p className="text-3xl font-bold text-orange-900">{(analytics.totalCoinsGiven / 1000).toFixed(0)}K</p>
                  <p className="text-sm text-orange-700 mt-2">All time</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <UserPlus className="w-6 h-6 text-yellow-600" />
                    <h3 className="text-sm font-medium text-yellow-900">Pending</h3>
                  </div>
                  <p className="text-3xl font-bold text-yellow-900">{analytics.pendingReferrals.toLocaleString()}</p>
                  <p className="text-sm text-yellow-700 mt-2">Awaiting conversion</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Referral Tiers Performance</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {referralSettings.tiers.map((tier, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border-2 border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className={`w-5 h-5 ${
                          tier.name === 'Platinum' ? 'text-purple-600' :
                          tier.name === 'Gold' ? 'text-yellow-600' :
                          tier.name === 'Silver' ? 'text-gray-500' :
                          'text-orange-600'
                        }`} />
                        <h4 className="font-bold text-gray-900">{tier.name}</h4>
                      </div>
                      <p className="text-sm text-gray-600">Requires {tier.referrals} referrals</p>
                      <p className="text-lg font-bold text-green-600 mt-2">+{tier.bonus} coins</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="p-6">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Reward Structure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Referrer Reward (coins)
                      </label>
                      <input
                        type="number"
                        value={referralSettings.referrerReward}
                        onChange={(e) => setReferralSettings({ ...referralSettings, referrerReward: parseInt(e.target.value) })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Referee Reward (coins)
                      </label>
                      <input
                        type="number"
                        value={referralSettings.refereeReward}
                        onChange={(e) => setReferralSettings({ ...referralSettings, refereeReward: parseInt(e.target.value) })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Minimum Purchase Amount (₹)
                      </label>
                      <input
                        type="number"
                        value={referralSettings.minPurchaseAmount}
                        onChange={(e) => setReferralSettings({ ...referralSettings, minPurchaseAmount: parseInt(e.target.value) })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Max Referrals Per User
                      </label>
                      <input
                        type="number"
                        value={referralSettings.maxReferrals}
                        onChange={(e) => setReferralSettings({ ...referralSettings, maxReferrals: parseInt(e.target.value) })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Tier System</h3>
                  {referralSettings.tiers.map((tier, index) => (
                    <div key={index} className="mb-4 p-4 bg-white rounded-lg border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tier Name
                          </label>
                          <input
                            type="text"
                            value={tier.name}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Required Referrals
                          </label>
                          <input
                            type="number"
                            value={tier.referrals}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Bonus Coins
                          </label>
                          <input
                            type="number"
                            value={tier.bonus}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-3">
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    Cancel
                  </button>
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Top Referrers Tab */}
          {activeTab === 'leaderboard' && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rank</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Referrals</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Successful</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conversion</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Coins Earned</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tier</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {topReferrers.map((referrer, index) => (
                      <tr key={referrer.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                            index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
                            index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white' :
                            index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' :
                            'bg-gray-200 text-gray-700'
                          }`}>
                            {index + 1}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-semibold text-gray-900">{referrer.name}</p>
                            <p className="text-sm text-gray-600">{referrer.email}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-medium text-gray-900">{referrer.totalReferrals}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-medium text-green-600">{referrer.successfulReferrals}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`font-medium ${
                            referrer.conversionRate >= 90 ? 'text-green-600' :
                            referrer.conversionRate >= 75 ? 'text-yellow-600' :
                            'text-red-600'
                          }`}>
                            {referrer.conversionRate}%
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1">
                            <Coins className="w-4 h-4 text-orange-500" />
                            <span className="font-bold text-orange-600">{referrer.coinsEarned.toLocaleString()}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            referrer.tier === 'Platinum' ? 'bg-purple-100 text-purple-700' :
                            referrer.tier === 'Gold' ? 'bg-yellow-100 text-yellow-700' :
                            referrer.tier === 'Silver' ? 'bg-gray-200 text-gray-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {referrer.tier}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded">
                            <Eye className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Fraud Detection Tab */}
          {activeTab === 'fraud' && (
            <div className="p-6">
              <div className="space-y-4">
                {fraudCases.map((fraudCase) => (
                  <div key={fraudCase.id} className={`rounded-lg p-6 border-2 ${
                    fraudCase.status === 'blocked' ? 'bg-red-50 border-red-300' :
                    fraudCase.status === 'cleared' ? 'bg-green-50 border-green-300' :
                    'bg-yellow-50 border-yellow-300'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          fraudCase.severity === 'high' ? 'bg-red-200' : 'bg-yellow-200'
                        }`}>
                          <Flag className={`w-6 h-6 ${
                            fraudCase.severity === 'high' ? 'text-red-700' : 'text-yellow-700'
                          }`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{fraudCase.user}</h3>
                          <p className="text-gray-700 mt-1">{fraudCase.reason}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-sm text-gray-600">
                              Flagged: <span className="font-medium text-gray-900">{fraudCase.flaggedDate}</span>
                            </span>
                            <span className="text-sm text-gray-600">
                              Referrals: <span className="font-medium text-red-600">{fraudCase.referrals}</span>
                            </span>
                            <span className={`text-xs font-bold uppercase px-2 py-1 rounded ${
                              fraudCase.severity === 'high'
                                ? 'bg-red-200 text-red-800'
                                : 'bg-yellow-200 text-yellow-800'
                            }`}>
                              {fraudCase.severity} severity
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        fraudCase.status === 'blocked' ? 'bg-red-200 text-red-800' :
                        fraudCase.status === 'cleared' ? 'bg-green-200 text-green-800' :
                        'bg-yellow-200 text-yellow-800'
                      }`}>
                        {fraudCase.status === 'under_review' ? 'Under Review' :
                         fraudCase.status.charAt(0).toUpperCase() + fraudCase.status.slice(1)}
                      </span>
                    </div>

                    {fraudCase.status === 'under_review' && (
                      <div className="flex gap-3 pt-4 border-t border-gray-300">
                        <button
                          onClick={() => handleApprove(fraudCase.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Clear Case
                        </button>
                        <button
                          onClick={() => handleBlock(fraudCase.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                          <XCircle className="w-4 h-4" />
                          Block User
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-white">
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
