import { useState } from 'react';
import { Gift, Plus, Edit, Trash2, Award, Star, DollarSign, Users, Settings } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

// Backend API: GET /api/merchant/loyalty/programs
// Backend API: POST /api/merchant/loyalty/create
// Backend API: PUT /api/merchant/loyalty/:id
// Backend API: DELETE /api/merchant/loyalty/:id

export default function MerchantLoyaltyBuilder() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const loyaltyPrograms = [
    {
      id: 1,
      name: 'VIP Gold Rewards',
      type: 'points',
      status: 'active',
      members: 2340,
      rules: {
        earnRate: 10,
        minPurchase: 100,
        expiryDays: 365
      },
      rewards: [
        { points: 1000, reward: '₹100 Off' },
        { points: 5000, reward: 'Free Shipping' },
        { points: 10000, reward: '₹1000 Off' }
      ],
      stats: { totalPoints: 145000, redeemedPoints: 67000 }
    },
    {
      id: 2,
      name: 'Referral Champions',
      type: 'referral',
      status: 'active',
      members: 1240,
      rules: {
        referrerBonus: 500,
        refereeBonus: 200,
        minReferrals: 5
      },
      rewards: [
        { referrals: 5, reward: '₹500 Bonus' },
        { referrals: 10, reward: 'Silver Badge' },
        { referrals: 25, reward: 'Gold Badge + ₹2000' }
      ],
      stats: { totalReferrals: 450, successfulReferrals: 320 }
    },
    {
      id: 3,
      name: 'Birthday Special',
      type: 'milestone',
      status: 'active',
      members: 5670,
      rules: {
        bonusType: 'percentage',
        bonusValue: 20,
        validDays: 7
      },
      rewards: [
        { milestone: 'birthday', reward: '20% Off' },
        { milestone: '1year', reward: 'Free Gift' }
      ],
      stats: { totalRedeemed: 234, avgOrderValue: 1250 }
    }
  ];

  const rewardTemplates = [
    { id: 1, name: 'Discount Coupon', icon: '🎟️', type: 'discount' },
    { id: 2, name: 'Free Shipping', icon: '🚚', type: 'shipping' },
    { id: 3, name: 'Cashback', icon: '💰', type: 'cashback' },
    { id: 4, name: 'Free Product', icon: '🎁', type: 'product' },
    { id: 5, name: 'VIP Access', icon: '👑', type: 'access' }
  ];

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-500/20 text-green-300' : 'bg-gray-500/20 text-gray-300';
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'points': return '⭐';
      case 'referral': return '👥';
      case 'milestone': return '🎯';
      default: return '🎁';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-purple-900">
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Loyalty Program Builder</h1>
              <p className="text-pink-200">Create and manage customer loyalty programs</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              New Program
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-pink-500/20 p-3 rounded-lg">
                <Gift className="w-6 h-6 text-pink-300" />
              </div>
              <div>
                <p className="text-pink-200 text-sm">Active Programs</p>
                <p className="text-2xl font-bold text-white">{loyaltyPrograms.filter(p => p.status === 'active').length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Users className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <p className="text-pink-200 text-sm">Total Members</p>
                <p className="text-2xl font-bold text-white">{loyaltyPrograms.reduce((sum, p) => sum + p.members, 0).toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-yellow-500/20 p-3 rounded-lg">
                <Star className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <p className="text-pink-200 text-sm">Points Issued</p>
                <p className="text-2xl font-bold text-white">145K</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <Award className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <p className="text-pink-200 text-sm">Rewards Redeemed</p>
                <p className="text-2xl font-bold text-white">67K</p>
              </div>
            </div>
          </div>
        </div>

        {/* Loyalty Programs */}
        <div className="space-y-6 mb-8">
          {loyaltyPrograms.map((program) => (
            <div key={program.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{getTypeIcon(program.type)}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{program.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(program.status)}`}>
                        {program.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-pink-200 text-sm">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {program.members.toLocaleString()} members
                      </span>
                      <span className="px-2 py-1 bg-white/10 rounded">
                        {program.type.charAt(0).toUpperCase() + program.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Program Rules */}
              <div className="bg-white/5 rounded-lg p-4 mb-4">
                <h4 className="text-white font-bold mb-3">Program Rules</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {Object.entries(program.rules).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded p-2">
                      <p className="text-pink-200 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                      <p className="text-white font-bold">{typeof value === 'number' ? value : value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rewards */}
              <div className="bg-white/5 rounded-lg p-4 mb-4">
                <h4 className="text-white font-bold mb-3">Rewards</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {program.rewards.map((reward, index) => (
                    <div key={index} className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg p-3 border border-pink-400/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-pink-200 text-sm">
                          {reward.points ? `${reward.points} points` : `${reward.referrals} referrals` || reward.milestone}
                        </span>
                        <Gift className="w-4 h-4 text-pink-300" />
                      </div>
                      <p className="text-white font-bold">{reward.reward}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(program.stats).map(([key, value]) => (
                  <div key={key} className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-pink-200 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    <p className="text-xl font-bold text-white">{typeof value === 'number' ? value.toLocaleString() : value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Reward Templates */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h2 className="text-xl font-bold text-white mb-4">Reward Templates</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {rewardTemplates.map((template) => (
              <div key={template.id} className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-all cursor-pointer border border-white/10">
                <div className="text-4xl mb-2">{template.icon}</div>
                <p className="text-white font-medium text-sm">{template.name}</p>
                <p className="text-pink-200 text-xs mt-1">{template.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Program Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-xl max-w-2xl w-full p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Create Loyalty Program</h2>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-pink-200 mb-2">Program Name</label>
                <input
                  type="text"
                  placeholder="Enter program name"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:border-pink-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-pink-200 mb-2">Program Type</label>
                <select className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:border-pink-400">
                  <option className="bg-gray-900">Points-Based</option>
                  <option className="bg-gray-900">Referral</option>
                  <option className="bg-gray-900">Milestone</option>
                  <option className="bg-gray-900">Tier-Based</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-pink-200 mb-2">Earn Rate (%)</label>
                  <input
                    type="number"
                    placeholder="10"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:border-pink-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-pink-200 mb-2">Min Purchase</label>
                  <input
                    type="number"
                    placeholder="100"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:border-pink-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-pink-200 mb-2">Description</label>
                <textarea
                  rows="3"
                  placeholder="Describe your loyalty program..."
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:border-pink-400"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all">
                Create Program
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
