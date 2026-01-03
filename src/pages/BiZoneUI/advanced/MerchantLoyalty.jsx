import { useState } from 'react';
import {
  Gift, Users, TrendingUp, Award, Star, Settings, Calendar,
  Check, X, Plus, Edit, Download, CreditCard, BarChart3, Crown,
  Medal, Trophy, Percent, Coffee, DollarSign, Eye
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantLoyalty() {
  const [activeTab, setActiveTab] = useState('overview');
  const [programType, setProgramType] = useState('points'); // 'punch', 'points', 'tiers'

  const [loyaltyStats, setLoyaltyStats] = useState({
    totalMembers: 1234,
    activeMembers: 892,
    enrollmentRate: 67.5,
    redemptionRate: 45.2,
    avgPointsPerMember: 456,
    rewardsRedeemed: 567
  });

  const [tierBreakdown, setTierBreakdown] = useState([
    { tier: 'Bronze', members: 756, color: 'orange', icon: Medal, minSpend: 0 },
    { tier: 'Silver', members: 389, color: 'gray', icon: Award, minSpend: 5000 },
    { tier: 'Gold', members: 89, color: 'yellow', icon: Crown, minSpend: 15000 }
  ]);

  const [loyaltyMembers, setLoyaltyMembers] = useState([
    {
      id: 1,
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      tier: 'Gold',
      points: 2456,
      lastVisit: 'Today',
      totalPurchases: 23456,
      joinDate: '2023-08-15',
      visits: 89
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@example.com',
      tier: 'Silver',
      points: 1234,
      lastVisit: '2 days ago',
      totalPurchases: 12345,
      joinDate: '2023-10-20',
      visits: 45
    },
    {
      id: 3,
      name: 'Jane Smith',
      email: 'jane@example.com',
      tier: 'Silver',
      points: 987,
      lastVisit: '1 week ago',
      totalPurchases: 8765,
      joinDate: '2023-11-05',
      visits: 34
    },
    {
      id: 4,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      tier: 'Bronze',
      points: 456,
      lastVisit: '3 days ago',
      totalPurchases: 3456,
      joinDate: '2024-01-10',
      visits: 12
    },
    {
      id: 5,
      name: 'Emily Davis',
      email: 'emily@example.com',
      tier: 'Bronze',
      points: 234,
      lastVisit: '5 days ago',
      totalPurchases: 2345,
      joinDate: '2024-02-01',
      visits: 8
    }
  ]);

  const [rewards, setRewards] = useState([
    { id: 1, name: 'Free Coffee', points: 100, type: 'free_item', redeemed: 234 },
    { id: 2, name: '10% Discount', points: 200, type: 'discount', redeemed: 156 },
    { id: 3, name: 'Free Dessert', points: 150, type: 'free_item', redeemed: 89 },
    { id: 4, name: 'Birthday Bonus', points: 0, type: 'bonus', redeemed: 45 }
  ]);

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Gold': return 'yellow';
      case 'Silver': return 'gray';
      case 'Bronze': return 'orange';
      default: return 'gray';
    }
  };

  const getTierBadgeClasses = (tier) => {
    const color = getTierColor(tier);
    return `px-2 py-1 rounded-full text-xs font-bold ${
      color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
      color === 'gray' ? 'bg-gray-100 text-gray-800' :
      'bg-orange-100 text-orange-800'
    }`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Loyalty Program</h1>
              <p className="text-gray-600 mt-1">Reward your customers and build lasting relationships</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Settings className="w-5 h-5" />
              Configure Program
            </button>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <p className="text-sm text-gray-600 font-medium">Total Members</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{loyaltyStats.totalMembers.toLocaleString()}</p>
            <p className="text-sm text-green-600 mt-1">
              {loyaltyStats.activeMembers} active (30 days)
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <p className="text-sm text-gray-600 font-medium">Enrollment Rate</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{loyaltyStats.enrollmentRate}%</p>
            <p className="text-sm text-gray-600 mt-1">
              Of total customers
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-purple-600" />
              <p className="text-sm text-gray-600 font-medium">Redemption Rate</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{loyaltyStats.redemptionRate}%</p>
            <p className="text-sm text-gray-600 mt-1">
              {loyaltyStats.rewardsRedeemed} rewards claimed
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-600" />
              <p className="text-sm text-gray-600 font-medium">Avg Points</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{loyaltyStats.avgPointsPerMember}</p>
            <p className="text-sm text-gray-600 mt-1">
              Per member balance
            </p>
          </div>
        </div>

        {/* Program Type Selection */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Create Your Loyalty Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div
              onClick={() => setProgramType('punch')}
              className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                programType === 'punch'
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 hover:border-indigo-300'
              }`}
            >
              <CreditCard className={`w-8 h-8 mb-3 ${programType === 'punch' ? 'text-indigo-600' : 'text-gray-400'}`} />
              <h3 className="font-bold text-gray-900 mb-1">Punch Card</h3>
              <p className="text-sm text-gray-600">Buy 5, get 1 free</p>
            </div>

            <div
              onClick={() => setProgramType('points')}
              className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                programType === 'points'
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 hover:border-indigo-300'
              }`}
            >
              <Star className={`w-8 h-8 mb-3 ${programType === 'points' ? 'text-indigo-600' : 'text-gray-400'}`} />
              <h3 className="font-bold text-gray-900 mb-1">Points System</h3>
              <p className="text-sm text-gray-600">₹100 = 10 points</p>
            </div>

            <div
              onClick={() => setProgramType('tiers')}
              className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                programType === 'tiers'
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 hover:border-indigo-300'
              }`}
            >
              <Trophy className={`w-8 h-8 mb-3 ${programType === 'tiers' ? 'text-indigo-600' : 'text-gray-400'}`} />
              <h3 className="font-bold text-gray-900 mb-1">Tier System</h3>
              <p className="text-sm text-gray-600">Bronze/Silver/Gold</p>
            </div>

            <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 cursor-pointer">
              <Plus className="w-8 h-8 text-gray-400 mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Custom</h3>
              <p className="text-sm text-gray-600">Create your own</p>
            </div>
          </div>
        </div>

        {/* Tier Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Member Tiers Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tierBreakdown.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div
                  key={tier.tier}
                  className={`bg-gradient-to-br rounded-xl p-6 border-2 ${
                    tier.color === 'yellow' ? 'from-yellow-50 to-orange-50 border-yellow-300' :
                    tier.color === 'gray' ? 'from-gray-50 to-slate-50 border-gray-300' :
                    'from-orange-50 to-red-50 border-orange-300'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${
                      tier.color === 'yellow' ? 'bg-yellow-200' :
                      tier.color === 'gray' ? 'bg-gray-200' :
                      'bg-orange-200'
                    }`}>
                      <TierIcon className={`w-6 h-6 ${
                        tier.color === 'yellow' ? 'text-yellow-800' :
                        tier.color === 'gray' ? 'text-gray-800' :
                        'text-orange-800'
                      }`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{tier.tier}</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{tier.members}</p>
                  <p className="text-sm text-gray-600">members</p>
                  <p className="text-xs text-gray-500 mt-2">Min spend: ₹{tier.minSpend.toLocaleString()}</p>
                  <div className="mt-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          tier.color === 'yellow' ? 'bg-yellow-500' :
                          tier.color === 'gray' ? 'bg-gray-500' :
                          'bg-orange-500'
                        }`}
                        style={{ width: `${(tier.members / loyaltyStats.totalMembers) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {((tier.members / loyaltyStats.totalMembers) * 100).toFixed(1)}% of total
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rewards Configuration */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Rewards & Redemption</h2>
              <p className="text-sm text-gray-600 mt-1">Configure what customers can redeem</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Plus className="w-5 h-5" />
              Add Reward
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rewards.map((reward) => (
              <div key={reward.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                      <Gift className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{reward.name}</h3>
                      <p className="text-sm text-gray-600">
                        {reward.points > 0 ? `${reward.points} points` : 'Auto-applied'}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-600 hover:bg-white rounded-lg">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      reward.type === 'free_item' ? 'bg-green-100 text-green-700' :
                      reward.type === 'discount' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {reward.type.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{reward.redeemed} redeemed</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Members Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Loyalty Members</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                <Download className="w-5 h-5" />
                Export List
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Member</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tier</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Points</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Visit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Purchases</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Visits</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Join Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {loyaltyMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={getTierBadgeClasses(member.tier)}>
                        {member.tier}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold text-gray-900">{member.points}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900">{member.lastVisit}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-green-600">₹{member.totalPurchases.toLocaleString()}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{member.visits}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600">{member.joinDate}</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 text-sm font-medium">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Analytics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-bold text-gray-900">Program Analytics</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Enrollment Rate</span>
                  <span className="text-sm font-semibold text-gray-900">{loyaltyStats.enrollmentRate}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-500 h-2 rounded-full"
                    style={{ width: `${loyaltyStats.enrollmentRate}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Redemption Rate</span>
                  <span className="text-sm font-semibold text-gray-900">{loyaltyStats.redemptionRate}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${loyaltyStats.redemptionRate}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Active Members (30d)</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {((loyaltyStats.activeMembers / loyaltyStats.totalMembers) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${(loyaltyStats.activeMembers / loyaltyStats.totalMembers) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-bold text-gray-900">Key Metrics</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Avg Points per Member</span>
                <span className="text-lg font-bold text-gray-900">{loyaltyStats.avgPointsPerMember}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Total Rewards Redeemed</span>
                <span className="text-lg font-bold text-gray-900">{loyaltyStats.rewardsRedeemed}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Repeat Purchase Rate</span>
                <span className="text-lg font-bold text-green-600">78%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
