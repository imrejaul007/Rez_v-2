import { useState } from 'react';
import {
  Gift, Users, TrendingUp, Award, Star, Settings, Calendar,
  Plus, Edit, Download, Crown, Medal, Trophy, Percent, Target,
  Zap, Clock, Tag, BarChart3, DollarSign, TrendingDown, Eye,
  Sparkles, Heart, PartyPopper, UserPlus, History, ChevronRight,
  Filter, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantLoyaltyOffers() {
  const [activeTab, setActiveTab] = useState('offers');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [loyaltyStats, setLoyaltyStats] = useState({
    totalMembers: 12456,
    activeMembers: 8932,
    bronzeMembers: 7890,
    silverMembers: 3234,
    goldMembers: 1123,
    platinumMembers: 189,
    priveMembers: 20,
    avgPointsBalance: 2456,
    pointsIssued: 1234567,
    pointsRedeemed: 567890,
    redemptionRate: 46.0,
    memberLifetimeValue: 18456,
    churnRate: 12.3
  });

  const [loyaltyOffers, setLoyaltyOffers] = useState([
    {
      id: 1,
      name: 'Double Points Weekend',
      type: 'points_multiplier',
      multiplier: 2,
      targetTiers: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Privé'],
      startDate: '2024-12-28',
      endDate: '2024-12-29',
      status: 'upcoming',
      redemptions: 0,
      pointsIssued: 0,
      revenue: 0,
      roi: 0
    },
    {
      id: 2,
      name: 'Platinum Early Access',
      type: 'exclusive_access',
      description: '24hr early access to new menu items',
      targetTiers: ['Platinum', 'Privé'],
      startDate: '2024-12-20',
      endDate: '2025-01-20',
      status: 'active',
      redemptions: 234,
      pointsIssued: 0,
      revenue: 89456,
      roi: 245
    },
    {
      id: 3,
      name: 'Birthday Bonus',
      type: 'birthday_reward',
      reward: '500 bonus points + Free dessert',
      targetTiers: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Privé'],
      status: 'active',
      redemptions: 456,
      pointsIssued: 228000,
      revenue: 123456,
      roi: 189
    },
    {
      id: 4,
      name: 'Gold Tier 3x Points',
      type: 'tier_multiplier',
      multiplier: 3,
      targetTiers: ['Gold'],
      startDate: '2024-12-01',
      endDate: '2024-12-31',
      status: 'active',
      redemptions: 1234,
      pointsIssued: 456789,
      revenue: 234567,
      roi: 156
    },
    {
      id: 5,
      name: 'Lunch Rush Bonus',
      type: 'time_based',
      bonus: '50% extra points',
      timeSlot: '12 PM - 2 PM',
      targetTiers: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Privé'],
      status: 'active',
      redemptions: 2345,
      pointsIssued: 345678,
      revenue: 456789,
      roi: 178
    },
    {
      id: 6,
      name: 'Referral Mega Bonus',
      type: 'referral_bonus',
      reward: '1000 points per referral',
      targetTiers: ['Silver', 'Gold', 'Platinum', 'Privé'],
      status: 'active',
      redemptions: 567,
      pointsIssued: 567000,
      revenue: 234567,
      roi: 234
    }
  ]);

  const [tierPricing, setTierPricing] = useState([
    {
      item: 'Signature Pizza',
      basePrice: 499,
      bronze: 499,
      silver: 474,
      gold: 449,
      platinum: 424,
      prive: 399,
      sales: { bronze: 234, silver: 156, gold: 89, platinum: 45, prive: 12 }
    },
    {
      item: 'Premium Coffee',
      basePrice: 199,
      bronze: 199,
      silver: 189,
      gold: 179,
      platinum: 169,
      prive: 159,
      sales: { bronze: 567, silver: 345, gold: 234, platinum: 89, prive: 23 }
    },
    {
      item: 'Deluxe Burger',
      basePrice: 349,
      bronze: 349,
      silver: 332,
      gold: 314,
      platinum: 297,
      prive: 279,
      sales: { bronze: 345, silver: 234, gold: 156, platinum: 67, prive: 15 }
    }
  ]);

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Weekend Warrior',
      type: 'double_points',
      schedule: 'Every Sat-Sun',
      status: 'active',
      participation: 2345,
      pointsIssued: 234567,
      revenue: 456789
    },
    {
      id: 2,
      name: 'Coffee Lover Bonus',
      type: 'category_multiplier',
      category: 'Beverages',
      multiplier: '2x',
      status: 'active',
      participation: 1234,
      pointsIssued: 123456,
      revenue: 234567
    },
    {
      id: 3,
      name: 'Anniversary Rewards',
      type: 'anniversary',
      reward: '2000 points',
      status: 'active',
      participation: 345,
      pointsIssued: 690000,
      revenue: 123456
    }
  ]);

  const [tierDistribution, setTierDistribution] = useState([
    { tier: 'Bronze', members: 7890, color: 'orange', icon: Medal, avgSpend: 1234, ltv: 8456 },
    { tier: 'Silver', members: 3234, color: 'gray', icon: Award, avgSpend: 3456, ltv: 15234 },
    { tier: 'Gold', members: 1123, color: 'yellow', icon: Crown, avgSpend: 7890, ltv: 28456 },
    { tier: 'Platinum', members: 189, color: 'purple', icon: Trophy, avgSpend: 15678, ltv: 52345 },
    { tier: 'Privé', members: 20, color: 'black', icon: Sparkles, avgSpend: 34567, ltv: 98765 }
  ]);

  const [analytics, setAnalytics] = useState({
    pointsIssued: 1234567,
    pointsRedeemed: 567890,
    pointsBalance: 666677,
    redemptionRate: 46.0,
    avgRedemptionValue: 234,
    topRewards: [
      { name: 'Free Coffee', redemptions: 2345, points: 234500 },
      { name: '10% Discount', redemptions: 1234, points: 246800 },
      { name: 'Free Dessert', redemptions: 890, points: 133500 },
      { name: '₹100 OFF', redemptions: 567, points: 283500 }
    ],
    tierProgression: {
      toSilver: 234,
      toGold: 89,
      toPlatinum: 34,
      toPrive: 5
    },
    churnPrevention: {
      atRisk: 456,
      recovered: 234,
      retained: 8932
    }
  });

  const getOfferTypeColor = (type) => {
    switch (type) {
      case 'points_multiplier': return 'blue';
      case 'exclusive_access': return 'purple';
      case 'birthday_reward': return 'pink';
      case 'tier_multiplier': return 'yellow';
      case 'time_based': return 'green';
      case 'referral_bonus': return 'indigo';
      default: return 'gray';
    }
  };

  const getOfferTypeBadge = (type) => {
    const color = getOfferTypeColor(type);
    const bgColors = {
      blue: 'bg-blue-100 text-blue-700',
      purple: 'bg-purple-100 text-purple-700',
      pink: 'bg-pink-100 text-pink-700',
      yellow: 'bg-yellow-100 text-yellow-700',
      green: 'bg-green-100 text-green-700',
      indigo: 'bg-indigo-100 text-indigo-700',
      gray: 'bg-gray-100 text-gray-700'
    };
    return bgColors[color] || bgColors.gray;
  };

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Bronze': return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'Silver': return 'bg-gray-100 text-gray-700 border-gray-300';
      case 'Gold': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Platinum': return 'bg-purple-100 text-purple-700 border-purple-300';
      case 'Privé': return 'bg-black text-white border-gray-800';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const maxMembers = Math.max(...tierDistribution.map(t => t.members));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Loyalty Offers Management</h1>
              <p className="text-gray-600 mt-1">Create tier-based offers and manage member rewards</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Plus className="w-5 h-5" />
              Create Loyalty Offer
            </button>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Loyalty Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <p className="text-sm text-gray-600 font-medium">Total Members</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{(loyaltyStats.totalMembers / 1000).toFixed(1)}K</p>
            <p className="text-sm text-green-600 mt-1">
              {((loyaltyStats.activeMembers / loyaltyStats.totalMembers) * 100).toFixed(0)}% active
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-600" />
              <p className="text-sm text-gray-600 font-medium">Avg Points</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{loyaltyStats.avgPointsBalance.toLocaleString()}</p>
            <p className="text-sm text-gray-600 mt-1">per member</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-purple-600" />
              <p className="text-sm text-gray-600 font-medium">Redemption Rate</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{loyaltyStats.redemptionRate}%</p>
            <p className="text-sm text-green-600 mt-1">
              <ArrowUpRight className="w-3 h-3 inline" /> 3.2%
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <p className="text-sm text-gray-600 font-medium">Member LTV</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{(loyaltyStats.memberLifetimeValue / 1000).toFixed(1)}K</p>
            <p className="text-sm text-green-600 mt-1">
              <ArrowUpRight className="w-3 h-3 inline" /> 12.5%
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-orange-600" />
              <p className="text-sm text-gray-600 font-medium">Points Issued</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{(loyaltyStats.pointsIssued / 1000).toFixed(0)}K</p>
            <p className="text-sm text-gray-600 mt-1">this month</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-red-600" />
              <p className="text-sm text-gray-600 font-medium">Churn Rate</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{loyaltyStats.churnRate}%</p>
            <p className="text-sm text-green-600 mt-1">
              <ArrowDownRight className="w-3 h-3 inline" /> 2.1%
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <div className="flex gap-4 px-6">
              {[
                { id: 'offers', label: 'Loyalty Offers', icon: Gift },
                { id: 'pricing', label: 'Tier Pricing', icon: Tag },
                { id: 'campaigns', label: 'Campaigns', icon: Zap },
                { id: 'engagement', label: 'Member Engagement', icon: Users },
                { id: 'analytics', label: 'Analytics', icon: BarChart3 }
              ].map(tab => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-4 border-b-2 font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <TabIcon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Loyalty Offers Tab */}
          {activeTab === 'offers' && (
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6">
                {loyaltyOffers.map(offer => (
                  <div key={offer.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{offer.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getOfferTypeBadge(offer.type)}`}>
                            {offer.type.replace('_', ' ')}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            offer.status === 'active' ? 'bg-green-100 text-green-700' :
                            offer.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {offer.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          {offer.multiplier && (
                            <span className="flex items-center gap-1">
                              <Zap className="w-4 h-4 text-orange-500" />
                              {offer.multiplier}x Points
                            </span>
                          )}
                          {offer.reward && (
                            <span className="flex items-center gap-1">
                              <Gift className="w-4 h-4 text-purple-500" />
                              {offer.reward}
                            </span>
                          )}
                          {offer.timeSlot && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-blue-500" />
                              {offer.timeSlot}
                            </span>
                          )}
                          {offer.startDate && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4 text-gray-500" />
                              {offer.startDate} - {offer.endDate}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs text-gray-600">Target Tiers:</span>
                          {offer.targetTiers.map(tier => (
                            <span key={tier} className={`px-2 py-1 rounded-full text-xs font-medium border ${getTierColor(tier)}`}>
                              {tier}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="p-2 text-gray-600 hover:bg-white rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-white rounded-lg">
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Redemptions</p>
                        <p className="text-lg font-bold text-gray-900">{offer.redemptions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Points Issued</p>
                        <p className="text-lg font-bold text-indigo-600">{offer.pointsIssued.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Revenue</p>
                        <p className="text-lg font-bold text-green-600">₹{offer.revenue.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">ROI</p>
                        <p className="text-lg font-bold text-orange-600">{offer.roi}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tier Pricing Tab */}
          {activeTab === 'pricing' && (
            <div className="p-6">
              <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Tier-Based Pricing Strategy</h4>
                    <p className="text-sm text-blue-700">Reward loyal customers with progressive discounts based on their tier level. Higher tiers get better prices.</p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Base Price</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                        <div className="flex items-center justify-center gap-1">
                          <Medal className="w-4 h-4 text-orange-600" />
                          Bronze
                        </div>
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                        <div className="flex items-center justify-center gap-1">
                          <Award className="w-4 h-4 text-gray-600" />
                          Silver
                        </div>
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                        <div className="flex items-center justify-center gap-1">
                          <Crown className="w-4 h-4 text-yellow-600" />
                          Gold
                        </div>
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                        <div className="flex items-center justify-center gap-1">
                          <Trophy className="w-4 h-4 text-purple-600" />
                          Platinum
                        </div>
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                        <div className="flex items-center justify-center gap-1">
                          <Sparkles className="w-4 h-4 text-gray-900" />
                          Privé
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {tierPricing.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <p className="font-semibold text-gray-900">{item.item}</p>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <p className="font-medium text-gray-900">₹{item.basePrice}</p>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="bg-orange-50 rounded-lg p-2">
                            <p className="font-bold text-orange-700">₹{item.bronze}</p>
                            <p className="text-xs text-orange-600">{item.sales.bronze} sales</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="bg-gray-50 rounded-lg p-2">
                            <p className="font-bold text-gray-700">₹{item.silver}</p>
                            <p className="text-xs text-gray-600">{item.sales.silver} sales</p>
                            <p className="text-xs text-green-600">-{Math.round((1 - item.silver/item.basePrice) * 100)}%</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="bg-yellow-50 rounded-lg p-2">
                            <p className="font-bold text-yellow-700">₹{item.gold}</p>
                            <p className="text-xs text-yellow-600">{item.sales.gold} sales</p>
                            <p className="text-xs text-green-600">-{Math.round((1 - item.gold/item.basePrice) * 100)}%</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="bg-purple-50 rounded-lg p-2">
                            <p className="font-bold text-purple-700">₹{item.platinum}</p>
                            <p className="text-xs text-purple-600">{item.sales.platinum} sales</p>
                            <p className="text-xs text-green-600">-{Math.round((1 - item.platinum/item.basePrice) * 100)}%</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="bg-gray-900 rounded-lg p-2">
                            <p className="font-bold text-white">₹{item.prive}</p>
                            <p className="text-xs text-gray-300">{item.sales.prive} sales</p>
                            <p className="text-xs text-green-400">-{Math.round((1 - item.prive/item.basePrice) * 100)}%</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Campaigns Tab */}
          {activeTab === 'campaigns' && (
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6">
                {campaigns.map(campaign => (
                  <div key={campaign.id} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Zap className="w-6 h-6 text-indigo-600" />
                          <h3 className="text-lg font-bold text-gray-900">{campaign.name}</h3>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            {campaign.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-600">Type: <span className="font-medium text-gray-900">{campaign.type.replace('_', ' ')}</span></span>
                          {campaign.schedule && (
                            <span className="text-gray-600">Schedule: <span className="font-medium text-gray-900">{campaign.schedule}</span></span>
                          )}
                          {campaign.category && (
                            <span className="text-gray-600">Category: <span className="font-medium text-gray-900">{campaign.category}</span></span>
                          )}
                          {campaign.multiplier && (
                            <span className="text-orange-600 font-bold">{campaign.multiplier} Points</span>
                          )}
                        </div>
                      </div>
                      <button className="p-2 text-indigo-600 hover:bg-white rounded-lg">
                        <Settings className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-indigo-200">
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Participation</p>
                        <p className="text-xl font-bold text-gray-900">{campaign.participation.toLocaleString()}</p>
                        <p className="text-xs text-gray-600">members</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Points Issued</p>
                        <p className="text-xl font-bold text-indigo-600">{(campaign.pointsIssued / 1000).toFixed(0)}K</p>
                        <p className="text-xs text-gray-600">total points</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Revenue Impact</p>
                        <p className="text-xl font-bold text-green-600">₹{(campaign.revenue / 1000).toFixed(0)}K</p>
                        <p className="text-xs text-green-600 flex items-center gap-1">
                          <ArrowUpRight className="w-3 h-3" />
                          +23% uplift
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Member Engagement Tab */}
          {activeTab === 'engagement' && (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Tier Distribution */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Tier Distribution</h3>
                  <div className="space-y-4">
                    {tierDistribution.map(tier => {
                      const TierIcon = tier.icon;
                      return (
                        <div key={tier.tier} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 rounded-lg ${
                              tier.color === 'orange' ? 'bg-orange-100' :
                              tier.color === 'gray' ? 'bg-gray-100' :
                              tier.color === 'yellow' ? 'bg-yellow-100' :
                              tier.color === 'purple' ? 'bg-purple-100' :
                              'bg-gray-900'
                            }`}>
                              <TierIcon className={`w-5 h-5 ${
                                tier.color === 'orange' ? 'text-orange-600' :
                                tier.color === 'gray' ? 'text-gray-600' :
                                tier.color === 'yellow' ? 'text-yellow-600' :
                                tier.color === 'purple' ? 'text-purple-600' :
                                'text-white'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900">{tier.tier}</h4>
                              <p className="text-sm text-gray-600">{tier.members.toLocaleString()} members</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-600">Avg Spend</p>
                              <p className="font-bold text-green-600">₹{tier.avgSpend.toLocaleString()}</p>
                            </div>
                          </div>
                          <div className="bg-gray-200 rounded-full h-3 mb-2">
                            <div
                              className={`h-3 rounded-full ${
                                tier.color === 'orange' ? 'bg-orange-500' :
                                tier.color === 'gray' ? 'bg-gray-500' :
                                tier.color === 'yellow' ? 'bg-yellow-500' :
                                tier.color === 'purple' ? 'bg-purple-500' :
                                'bg-gray-900'
                              }`}
                              style={{ width: `${(tier.members / maxMembers) * 100}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>{((tier.members / loyaltyStats.totalMembers) * 100).toFixed(1)}% of total</span>
                            <span>LTV: ₹{tier.ltv.toLocaleString()}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Key Metrics */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Member Engagement Metrics</h3>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold text-gray-900">Active Members</h4>
                      </div>
                      <p className="text-3xl font-bold text-gray-900 mb-1">{loyaltyStats.activeMembers.toLocaleString()}</p>
                      <p className="text-sm text-green-700">
                        {((loyaltyStats.activeMembers / loyaltyStats.totalMembers) * 100).toFixed(1)}% of total members
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <h4 className="font-semibold text-gray-900">Tier Progression</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        <div>
                          <p className="text-xs text-gray-600">To Silver</p>
                          <p className="text-xl font-bold text-gray-900">{analytics.tierProgression.toSilver}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">To Gold</p>
                          <p className="text-xl font-bold text-yellow-600">{analytics.tierProgression.toGold}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">To Platinum</p>
                          <p className="text-xl font-bold text-purple-600">{analytics.tierProgression.toPlatinum}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">To Privé</p>
                          <p className="text-xl font-bold text-gray-900">{analytics.tierProgression.toPrive}</p>
                        </div>
                      </div>
                      <p className="text-sm text-blue-700 mt-3">This month</p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="w-5 h-5 text-orange-600" />
                        <h4 className="font-semibold text-gray-900">Churn Prevention</h4>
                      </div>
                      <div className="grid grid-cols-3 gap-3 mt-3">
                        <div>
                          <p className="text-xs text-gray-600">At Risk</p>
                          <p className="text-xl font-bold text-red-600">{analytics.churnPrevention.atRisk}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Recovered</p>
                          <p className="text-xl font-bold text-green-600">{analytics.churnPrevention.recovered}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Retained</p>
                          <p className="text-xl font-bold text-blue-600">{analytics.churnPrevention.retained}</p>
                        </div>
                      </div>
                      <p className="text-sm text-orange-700 mt-3">Last 30 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-indigo-600" />
                    <h4 className="font-semibold text-gray-900">Points Issued</h4>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{(analytics.pointsIssued / 1000).toFixed(0)}K</p>
                  <p className="text-sm text-indigo-700">Total points distributed</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-gray-900">Points Redeemed</h4>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{(analytics.pointsRedeemed / 1000).toFixed(0)}K</p>
                  <p className="text-sm text-green-700">{analytics.redemptionRate}% redemption rate</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-900">Points Balance</h4>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{(analytics.pointsBalance / 1000).toFixed(0)}K</p>
                  <p className="text-sm text-purple-700">Member points balance</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Rewards */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-600" />
                    Most Popular Rewards
                  </h3>
                  <div className="space-y-4">
                    {analytics.topRewards.map((reward, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg font-bold text-gray-400">#{idx + 1}</span>
                            <span className="font-semibold text-gray-900">{reward.name}</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-indigo-500 h-2 rounded-full"
                              style={{ width: `${(reward.redemptions / analytics.topRewards[0].redemptions) * 100}%` }}
                            />
                          </div>
                        </div>
                        <div className="ml-6 text-right">
                          <p className="font-bold text-gray-900">{reward.redemptions.toLocaleString()}</p>
                          <p className="text-xs text-indigo-600">{reward.points.toLocaleString()} pts</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Loyalty ROI */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    Loyalty Program ROI
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p className="text-sm text-gray-600 mb-1">Average Redemption Value</p>
                      <p className="text-2xl font-bold text-green-600">₹{analytics.avgRedemptionValue}</p>
                      <p className="text-xs text-green-700 mt-1">per redemption</p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <p className="text-sm text-gray-600 mb-1">Member Lifetime Value</p>
                      <p className="text-2xl font-bold text-blue-600">₹{loyaltyStats.memberLifetimeValue.toLocaleString()}</p>
                      <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                        <ArrowUpRight className="w-3 h-3" />
                        +12.5% vs non-members
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <p className="text-sm text-gray-600 mb-1">Program Cost vs Revenue</p>
                      <p className="text-2xl font-bold text-purple-600">3.8x ROI</p>
                      <p className="text-xs text-purple-700 mt-1">Overall program performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
