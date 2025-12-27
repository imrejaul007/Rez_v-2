import { useState } from 'react';
import {
  Award, Plus, Users, TrendingUp, Eye, ShoppingCart, DollarSign,
  Crown, Star, Trophy, Medal, Target, Gift, Zap, Sparkles,
  Edit2, AlertCircle, CheckCircle, BarChart3, ArrowUp, Percent
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantLoyaltyTiers() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);

  const [tierForm, setTierForm] = useState({
    name: '',
    minSpend: '',
    minVisits: '',
    pointsMultiplier: '1',
    benefits: [''],
    discount: '',
    exclusiveDeals: false,
    prioritySupport: false,
    freeDelivery: false,
    description: ''
  });

  const [loyaltyTiers, setLoyaltyTiers] = useState([
    {
      id: 1,
      name: 'Bronze',
      icon: Medal,
      color: 'orange',
      minSpend: 0,
      maxSpend: 9999,
      minVisits: 0,
      pointsMultiplier: 1.0,
      discount: 5,
      members: 3456,
      percentage: 45.2,
      avgSpend: 1234,
      totalRevenue: 4265304,
      benefits: [
        '5% discount on all purchases',
        '1x points on every purchase',
        'Birthday bonus: 100 coins',
        'Email support'
      ],
      exclusiveDeals: false,
      prioritySupport: false,
      freeDelivery: false,
      upgradePath: 'Spend ₹10,000 to reach Silver',
      retention: 68,
      monthlyActive: 2345
    },
    {
      id: 2,
      name: 'Silver',
      icon: Star,
      color: 'gray',
      minSpend: 10000,
      maxSpend: 49999,
      minVisits: 5,
      pointsMultiplier: 1.5,
      discount: 10,
      members: 2345,
      percentage: 30.7,
      avgSpend: 2456,
      totalRevenue: 5758520,
      benefits: [
        '10% discount on all purchases',
        '1.5x points on every purchase',
        'Birthday bonus: 300 coins',
        'Early access to sales',
        'Priority email support'
      ],
      exclusiveDeals: true,
      prioritySupport: false,
      freeDelivery: false,
      upgradePath: 'Spend ₹50,000 to reach Gold',
      retention: 74,
      monthlyActive: 1890
    },
    {
      id: 3,
      name: 'Gold',
      icon: Trophy,
      color: 'yellow',
      minSpend: 50000,
      maxSpend: 149999,
      minVisits: 15,
      pointsMultiplier: 2.0,
      discount: 15,
      members: 1234,
      percentage: 16.1,
      avgSpend: 5678,
      totalRevenue: 7006652,
      benefits: [
        '15% discount on all purchases',
        '2x points on every purchase',
        'Birthday bonus: 500 coins',
        'Exclusive Gold-only deals',
        'Free delivery on orders above ₹500',
        'Priority phone support',
        'Monthly surprise gifts'
      ],
      exclusiveDeals: true,
      prioritySupport: true,
      freeDelivery: true,
      upgradePath: 'Spend ₹150,000 to reach Platinum',
      retention: 82,
      monthlyActive: 1098
    },
    {
      id: 4,
      name: 'Platinum',
      icon: Crown,
      color: 'purple',
      minSpend: 150000,
      maxSpend: 999999999,
      minVisits: 30,
      pointsMultiplier: 3.0,
      discount: 25,
      members: 612,
      percentage: 8.0,
      avgSpend: 12345,
      totalRevenue: 7555140,
      benefits: [
        '25% discount on all purchases',
        '3x points on every purchase',
        'Birthday bonus: 1000 coins',
        'VIP Platinum-only experiences',
        'Free delivery on all orders',
        'Dedicated account manager',
        'Personal shopper service',
        'Invitations to exclusive events',
        'Quarterly luxury gift hampers'
      ],
      exclusiveDeals: true,
      prioritySupport: true,
      freeDelivery: true,
      upgradePath: 'Top tier achieved!',
      retention: 91,
      monthlyActive: 589
    }
  ]);

  const [stats, setStats] = useState({
    totalMembers: 7647,
    totalRevenue: 24585616,
    avgTierValue: 3214,
    topTierPercentage: 8.0,
    overallRetention: 76.25
  });

  const pointsRules = [
    {
      rule: 'Base Points',
      description: 'Earn ₹1 = 1 point',
      multiplier: '1x (Bronze) to 3x (Platinum)'
    },
    {
      rule: 'Referral Bonus',
      description: 'Refer a friend',
      multiplier: '500 points per referral'
    },
    {
      rule: 'Review Bonus',
      description: 'Write a review',
      multiplier: '50 points per review'
    },
    {
      rule: 'Social Share',
      description: 'Share on social media',
      multiplier: '25 points per share'
    }
  ];

  const handleCreateTier = (e) => {
    e.preventDefault();

    const tierIcons = {
      'Bronze': Medal,
      'Silver': Star,
      'Gold': Trophy,
      'Platinum': Crown,
      'Diamond': Sparkles
    };

    const tierColors = {
      'Bronze': 'orange',
      'Silver': 'gray',
      'Gold': 'yellow',
      'Platinum': 'purple',
      'Diamond': 'blue'
    };

    const newTier = {
      id: loyaltyTiers.length + 1,
      name: tierForm.name,
      icon: tierIcons[tierForm.name] || Award,
      color: tierColors[tierForm.name] || 'blue',
      minSpend: parseFloat(tierForm.minSpend),
      maxSpend: 999999999,
      minVisits: parseInt(tierForm.minVisits),
      pointsMultiplier: parseFloat(tierForm.pointsMultiplier),
      discount: parseFloat(tierForm.discount),
      members: 0,
      percentage: 0,
      avgSpend: 0,
      totalRevenue: 0,
      benefits: tierForm.benefits.filter(b => b.trim() !== ''),
      exclusiveDeals: tierForm.exclusiveDeals,
      prioritySupport: tierForm.prioritySupport,
      freeDelivery: tierForm.freeDelivery,
      upgradePath: 'New tier',
      retention: 0,
      monthlyActive: 0,
      description: tierForm.description
    };

    setLoyaltyTiers([...loyaltyTiers, newTier].sort((a, b) => a.minSpend - b.minSpend));
    setShowCreateForm(false);
    setTierForm({
      name: '',
      minSpend: '',
      minVisits: '',
      pointsMultiplier: '1',
      benefits: [''],
      discount: '',
      exclusiveDeals: false,
      prioritySupport: false,
      freeDelivery: false,
      description: ''
    });
  };

  const addBenefit = () => {
    setTierForm({ ...tierForm, benefits: [...tierForm.benefits, ''] });
  };

  const updateBenefit = (index, value) => {
    const newBenefits = [...tierForm.benefits];
    newBenefits[index] = value;
    setTierForm({ ...tierForm, benefits: newBenefits });
  };

  const removeBenefit = (index) => {
    const newBenefits = tierForm.benefits.filter((_, i) => i !== index);
    setTierForm({ ...tierForm, benefits: newBenefits });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Loyalty Tiers Manager</h1>
                  <p className="text-indigo-100 mt-1">Configure loyalty program tiers and benefits</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 font-semibold shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Create Tier
            </button>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Total Members</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalMembers.toLocaleString()}</p>
            <p className="text-sm text-blue-600 mt-1">Across all tiers</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Total Revenue</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{(stats.totalRevenue / 1000000).toFixed(1)}M</p>
            <p className="text-sm text-green-600 mt-1">From loyalty</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Avg Tier Value</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{stats.avgTierValue.toLocaleString()}</p>
            <p className="text-sm text-purple-600 mt-1">Per member</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Crown className="w-5 h-5 text-yellow-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Top Tier</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.topTierPercentage}%</p>
            <p className="text-sm text-yellow-600 mt-1">Premium members</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-100 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Retention</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.overallRetention}%</p>
            <p className="text-sm text-orange-600 mt-1">Overall rate</p>
          </div>
        </div>

        {/* Tier Distribution Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Member Distribution</h3>
          <div className="space-y-3">
            {loyaltyTiers.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.id}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`bg-${tier.color}-100 p-2 rounded-lg`}>
                        <TierIcon className={`w-5 h-5 text-${tier.color}-600`} />
                      </div>
                      <span className="font-medium text-gray-900">{tier.name}</span>
                      <span className="text-sm text-gray-600">{tier.members.toLocaleString()} members</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{tier.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-${tier.color}-500 transition-all`}
                      style={{ width: `${tier.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Loyalty Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {loyaltyTiers.map((tier) => {
            const TierIcon = tier.icon;

            return (
              <div
                key={tier.id}
                className={`bg-gradient-to-br from-${tier.color}-50 to-white rounded-xl shadow-sm border-2 border-${tier.color}-200 overflow-hidden hover:shadow-md transition-all cursor-pointer`}
                onClick={() => setSelectedTier(selectedTier?.id === tier.id ? null : tier)}
              >
                <div className={`bg-gradient-to-r from-${tier.color}-600 to-${tier.color}-700 text-white p-6`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                        <TierIcon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{tier.name} Tier</h3>
                        <p className="text-sm opacity-90">
                          {tier.minSpend === 0 ? 'Entry level' : `₹${tier.minSpend.toLocaleString()}+ lifetime spend`}
                        </p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
                      <Edit2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className={`bg-${tier.color}-50 rounded-lg p-3 border border-${tier.color}-200`}>
                      <p className="text-xs text-gray-600 mb-1">Members</p>
                      <p className={`text-xl font-bold text-${tier.color}-700`}>{tier.members.toLocaleString()}</p>
                    </div>
                    <div className={`bg-${tier.color}-50 rounded-lg p-3 border border-${tier.color}-200`}>
                      <p className="text-xs text-gray-600 mb-1">Avg Spend</p>
                      <p className={`text-xl font-bold text-${tier.color}-700`}>₹{tier.avgSpend.toLocaleString()}</p>
                    </div>
                    <div className={`bg-${tier.color}-50 rounded-lg p-3 border border-${tier.color}-200`}>
                      <p className="text-xs text-gray-600 mb-1">Retention</p>
                      <p className={`text-xl font-bold text-${tier.color}-700`}>{tier.retention}%</p>
                    </div>
                  </div>

                  {/* Tier Rewards */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`bg-${tier.color}-100 p-2 rounded-lg`}>
                        <Percent className={`w-4 h-4 text-${tier.color}-600`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Discount</p>
                        <p className="text-sm font-bold text-gray-900">{tier.discount}% OFF</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`bg-${tier.color}-100 p-2 rounded-lg`}>
                        <Zap className={`w-4 h-4 text-${tier.color}-600`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Points</p>
                        <p className="text-sm font-bold text-gray-900">{tier.pointsMultiplier}x Multiplier</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`bg-${tier.color}-100 p-2 rounded-lg`}>
                        <Target className={`w-4 h-4 text-${tier.color}-600`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Min Visits</p>
                        <p className="text-sm font-bold text-gray-900">{tier.minVisits} visits</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`bg-${tier.color}-100 p-2 rounded-lg`}>
                        <DollarSign className={`w-4 h-4 text-${tier.color}-600`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Revenue</p>
                        <p className="text-sm font-bold text-gray-900">₹{(tier.totalRevenue / 1000000).toFixed(1)}M</p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits & Perks</h4>
                    <div className="space-y-2">
                      {tier.benefits.slice(0, selectedTier?.id === tier.id ? undefined : 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className={`w-4 h-4 text-${tier.color}-600 mt-0.5 flex-shrink-0`} />
                          <span>{benefit}</span>
                        </div>
                      ))}
                      {!selectedTier && tier.benefits.length > 3 && (
                        <p className="text-xs text-gray-500 ml-6">+{tier.benefits.length - 3} more benefits</p>
                      )}
                    </div>
                  </div>

                  {/* Feature Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tier.exclusiveDeals && (
                      <span className={`px-3 py-1 bg-${tier.color}-100 text-${tier.color}-700 text-xs font-medium rounded-full`}>
                        Exclusive Deals
                      </span>
                    )}
                    {tier.prioritySupport && (
                      <span className={`px-3 py-1 bg-${tier.color}-100 text-${tier.color}-700 text-xs font-medium rounded-full`}>
                        Priority Support
                      </span>
                    )}
                    {tier.freeDelivery && (
                      <span className={`px-3 py-1 bg-${tier.color}-100 text-${tier.color}-700 text-xs font-medium rounded-full`}>
                        Free Delivery
                      </span>
                    )}
                  </div>

                  {/* Upgrade Path */}
                  <div className={`bg-${tier.color}-50 border border-${tier.color}-200 rounded-lg p-3`}>
                    <div className="flex items-center gap-2">
                      <ArrowUp className={`w-4 h-4 text-${tier.color}-600`} />
                      <p className="text-xs font-medium text-gray-700">{tier.upgradePath}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Points Earning Rules */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Points Earning Rules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pointsRules.map((rule, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-semibold text-gray-900 mb-1">{rule.rule}</h4>
                <p className="text-sm text-gray-600 mb-2">{rule.description}</p>
                <p className="text-sm font-bold text-indigo-600">{rule.multiplier}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Tier Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Create Loyalty Tier</h2>
                </div>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleCreateTier} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tier Name *
                </label>
                <select
                  required
                  value={tierForm.name}
                  onChange={(e) => setTierForm({ ...tierForm, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select Tier</option>
                  <option value="Bronze">Bronze</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                  <option value="Platinum">Platinum</option>
                  <option value="Diamond">Diamond</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Min Lifetime Spend (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    value={tierForm.minSpend}
                    onChange={(e) => setTierForm({ ...tierForm, minSpend: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="10000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Min Visits Required *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={tierForm.minVisits}
                    onChange={(e) => setTierForm({ ...tierForm, minVisits: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Points Multiplier *
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    min="1"
                    max="5"
                    value={tierForm.pointsMultiplier}
                    onChange={(e) => setTierForm({ ...tierForm, pointsMultiplier: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="1.5"
                  />
                  <p className="text-xs text-gray-500 mt-1">1.0x to 5.0x</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Discount Percentage (%) *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    max="50"
                    value={tierForm.discount}
                    onChange={(e) => setTierForm({ ...tierForm, discount: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tier Benefits *
                </label>
                <div className="space-y-2">
                  {tierForm.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input
                        type="text"
                        value={benefit}
                        onChange={(e) => updateBenefit(idx, e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="e.g., 10% discount on all purchases"
                      />
                      {tierForm.benefits.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeBenefit(idx)}
                          className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addBenefit}
                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    + Add Benefit
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="exclusiveDeals"
                    checked={tierForm.exclusiveDeals}
                    onChange={(e) => setTierForm({ ...tierForm, exclusiveDeals: e.target.checked })}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="exclusiveDeals" className="text-sm font-medium text-gray-700">
                    Access to exclusive tier-only deals
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="prioritySupport"
                    checked={tierForm.prioritySupport}
                    onChange={(e) => setTierForm({ ...tierForm, prioritySupport: e.target.checked })}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="prioritySupport" className="text-sm font-medium text-gray-700">
                    Priority customer support
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="freeDelivery"
                    checked={tierForm.freeDelivery}
                    onChange={(e) => setTierForm({ ...tierForm, freeDelivery: e.target.checked })}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="freeDelivery" className="text-sm font-medium text-gray-700">
                    Free delivery on all orders
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={tierForm.description}
                  onChange={(e) => setTierForm({ ...tierForm, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Describe this loyalty tier..."
                />
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-indigo-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium mb-1">Loyalty Tier Tips:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Create clear progression paths between tiers</li>
                      <li>Higher tiers should have significantly better benefits</li>
                      <li>Balance rewards to maintain profitability</li>
                      <li>Track tier performance to optimize benefits</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 font-semibold"
                >
                  Create Loyalty Tier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
