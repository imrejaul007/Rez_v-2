import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Megaphone, Check, X, Eye, Clock, DollarSign,
  Calendar, Tag, Gift, Percent, Users, TrendingUp, AlertTriangle,
  CheckCircle, XCircle, ChevronRight, Star, Zap, Crown,
  Store, Bell, Settings, BarChart3, Target, Play, Pause
} from 'lucide-react';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantPromotionParticipation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('invitations');
  const [selectedPromotion, setSelectedPromotion] = useState(null);
  const [showParticipateModal, setShowParticipateModal] = useState(false);

  const tabs = [
    { id: 'invitations', label: 'Invitations', count: 5, icon: Bell },
    { id: 'participating', label: 'Participating', count: 3, icon: CheckCircle },
    { id: 'completed', label: 'Completed', count: 12, icon: Clock }
  ];

  // Promotion invitations from Admin
  const promotionInvitations = [
    {
      id: 'PROMO001',
      title: 'Mega Diwali Sale 2024',
      description: 'Platform-wide Diwali celebration with up to 50% off across all categories',
      type: 'seasonal',
      status: 'pending',
      startDate: '2024-10-20',
      endDate: '2024-11-05',
      daysLeft: 15,
      discountRange: '10% - 50%',
      merchantContribution: 70,
      platformContribution: 30,
      coinBonus: '2x',
      expectedVisibility: 'Featured on homepage, category pages, push notifications',
      estimatedReach: 245000,
      avgConversionRate: 5.2,
      estimatedOrders: '150-200',
      estimatedRevenue: '₹2-3 Lakhs',
      invitedAt: '2024-10-01',
      respondBy: '2024-10-15',
      merchantsJoined: 8945,
      totalInvited: 15420,
      priority: 'high',
      createdBy: 'HQ Admin'
    },
    {
      id: 'PROMO002',
      title: 'Weekend Flash Bonanza',
      description: 'Every weekend special deals with extra coin rewards',
      type: 'recurring',
      status: 'pending',
      startDate: 'Every Weekend',
      endDate: '2024-12-31',
      daysLeft: null,
      discountRange: '₹100 - ₹500 off',
      merchantContribution: 60,
      platformContribution: 40,
      coinBonus: '3x',
      expectedVisibility: 'Weekend notifications, deal section',
      estimatedReach: 89000,
      avgConversionRate: 4.8,
      estimatedOrders: '50-80/weekend',
      estimatedRevenue: '₹50K-80K/weekend',
      invitedAt: '2024-10-05',
      respondBy: '2024-10-20',
      merchantsJoined: 5200,
      totalInvited: 8500,
      priority: 'medium',
      createdBy: 'Marketing Admin'
    },
    {
      id: 'PROMO003',
      title: 'New User Welcome Offer',
      description: 'Special discounts for users who joined in last 7 days',
      type: 'evergreen',
      status: 'pending',
      startDate: 'Always On',
      endDate: '2025-12-31',
      daysLeft: null,
      discountRange: '15% - 30%',
      merchantContribution: 50,
      platformContribution: 50,
      coinBonus: '5x',
      expectedVisibility: 'Shown to new users only, onboarding screens',
      estimatedReach: 156000,
      avgConversionRate: 8.5,
      estimatedOrders: '30-50/month',
      estimatedRevenue: '₹30K-50K/month',
      invitedAt: '2024-10-08',
      respondBy: '2024-10-25',
      merchantsJoined: 12800,
      totalInvited: 15420,
      priority: 'high',
      createdBy: 'HQ Admin'
    }
  ];

  // Active participations
  const activeParticipations = [
    {
      id: 'PROMO004',
      title: 'Festive Season Early Bird',
      description: 'Early discounts before festival rush',
      status: 'active',
      startDate: '2024-09-15',
      endDate: '2024-10-15',
      myDiscount: 25,
      merchantContribution: 70,
      views: 12500,
      clicks: 890,
      orders: 145,
      revenue: 285000,
      coinsDistributed: 4500,
      conversionRate: 16.3,
      ranking: 12,
      totalParticipants: 450
    },
    {
      id: 'PROMO005',
      title: 'Loyalty Customer Appreciation',
      description: 'Extra rewards for repeat customers',
      status: 'active',
      startDate: '2024-10-01',
      endDate: '2024-10-31',
      myDiscount: 20,
      merchantContribution: 60,
      views: 5600,
      clicks: 420,
      orders: 78,
      revenue: 156000,
      coinsDistributed: 2800,
      conversionRate: 18.6,
      ranking: 8,
      totalParticipants: 320
    }
  ];

  // Completed promotions
  const completedPromotions = [
    {
      id: 'PROMO006',
      title: 'Independence Day Sale',
      startDate: '2024-08-12',
      endDate: '2024-08-17',
      myDiscount: 26,
      views: 28000,
      orders: 320,
      revenue: 640000,
      roi: 4.2
    },
    {
      id: 'PROMO007',
      title: 'Monsoon Madness',
      startDate: '2024-07-01',
      endDate: '2024-07-31',
      myDiscount: 30,
      views: 45000,
      orders: 520,
      revenue: 980000,
      roi: 3.8
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'red';
      case 'medium': return 'yellow';
      case 'low': return 'green';
      default: return 'gray';
    }
  };

  const renderInvitations = () => (
    <div className="space-y-4">
      {/* Pending Response Alert */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-400" />
          <div>
            <div className="text-yellow-400 font-medium">You have {promotionInvitations.length} promotion invitations</div>
            <div className="text-yellow-200/70 text-sm">Respond before deadline to participate</div>
          </div>
        </div>
      </div>

      {/* Invitation Cards */}
      {promotionInvitations.map(promo => (
        <div key={promo.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 bg-${getPriorityColor(promo.priority)}-500/20 rounded-xl flex items-center justify-center`}>
                  <Megaphone className={`w-7 h-7 text-${getPriorityColor(promo.priority)}-400`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold text-lg">{promo.title}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs bg-${getPriorityColor(promo.priority)}-500/20 text-${getPriorityColor(promo.priority)}-400`}>
                      {promo.priority} priority
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{promo.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-400 text-xs">Respond by</div>
                <div className="text-white font-medium">{promo.respondBy}</div>
              </div>
            </div>

            {/* Promotion Details */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="bg-gray-900/50 rounded-lg p-3">
                <div className="text-gray-400 text-xs mb-1">Duration</div>
                <div className="text-white text-sm">{promo.startDate}</div>
                <div className="text-gray-500 text-xs">to {promo.endDate}</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3">
                <div className="text-gray-400 text-xs mb-1">Discount Range</div>
                <div className="text-white text-sm">{promo.discountRange}</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3">
                <div className="text-gray-400 text-xs mb-1">Your Contribution</div>
                <div className="text-green-400 text-sm font-medium">{promo.merchantContribution}%</div>
                <div className="text-gray-500 text-xs">Platform pays {promo.platformContribution}%</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3">
                <div className="text-gray-400 text-xs mb-1">Coin Bonus</div>
                <div className="text-yellow-400 text-sm font-medium">{promo.coinBonus} multiplier</div>
              </div>
            </div>

            {/* Expected Benefits */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
              <div className="text-green-400 font-medium mb-2">Expected Benefits</div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-gray-400">Est. Reach</div>
                  <div className="text-white font-medium">{promo.estimatedReach.toLocaleString()} users</div>
                </div>
                <div>
                  <div className="text-gray-400">Est. Orders</div>
                  <div className="text-white font-medium">{promo.estimatedOrders}</div>
                </div>
                <div>
                  <div className="text-gray-400">Est. Revenue</div>
                  <div className="text-white font-medium">{promo.estimatedRevenue}</div>
                </div>
              </div>
            </div>

            {/* Visibility */}
            <div className="mb-4">
              <div className="text-gray-400 text-xs mb-2">Where your store will appear:</div>
              <div className="text-white text-sm">{promo.expectedVisibility}</div>
            </div>

            {/* Participation Stats */}
            <div className="flex items-center gap-4 mb-4 text-sm">
              <div className="flex items-center gap-2">
                <Store className="w-4 h-4 text-green-400" />
                <span className="text-gray-400">{promo.merchantsJoined.toLocaleString()} merchants joined</span>
              </div>
              <div className="text-gray-600">|</div>
              <div className="text-gray-400">Created by {promo.createdBy}</div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-700">
              <button
                onClick={() => {
                  setSelectedPromotion(promo);
                  setShowParticipateModal(true);
                }}
                className="flex-1 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                Participate
              </button>
              <button className="flex-1 py-3 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600 flex items-center justify-center gap-2">
                <X className="w-5 h-5" />
                Decline
              </button>
              <button className="py-3 px-4 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderParticipating = () => (
    <div className="space-y-4">
      {activeParticipations.map(promo => (
        <div key={promo.id} className="bg-gray-800/50 rounded-xl border border-green-500/30 overflow-hidden">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-green-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold text-lg">{promo.title}</h3>
                    <span className="px-2 py-0.5 rounded-full text-xs bg-green-500/20 text-green-400">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{promo.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-400 text-xs">Your Discount</div>
                <div className="text-green-400 font-bold text-xl">{promo.myDiscount}% OFF</div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-5 gap-4 mb-4">
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{(promo.views/1000).toFixed(1)}K</div>
                <div className="text-gray-400 text-xs">Views</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">{promo.clicks}</div>
                <div className="text-gray-400 text-xs">Clicks</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">{promo.orders}</div>
                <div className="text-gray-400 text-xs">Orders</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400">₹{(promo.revenue/1000).toFixed(0)}K</div>
                <div className="text-gray-400 text-xs">Revenue</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-400">{promo.conversionRate}%</div>
                <div className="text-gray-400 text-xs">Conversion</div>
              </div>
            </div>

            {/* Ranking */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="text-yellow-400 font-medium">Your Ranking: #{promo.ranking}</div>
                    <div className="text-yellow-200/70 text-sm">Out of {promo.totalParticipants} participating merchants</div>
                  </div>
                </div>
                <div className="text-yellow-400 text-sm">
                  {promo.coinsDistributed.toLocaleString()} coins distributed
                </div>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-400">
                {promo.startDate} - {promo.endDate}
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 flex items-center gap-1">
                  <Settings className="w-4 h-4" />
                  Adjust Discount
                </button>
                <button className="px-3 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 flex items-center gap-1">
                  <Pause className="w-4 h-4" />
                  Pause
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {activeParticipations.length === 0 && (
        <div className="text-center py-12">
          <Megaphone className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <div className="text-gray-400">You're not participating in any promotions</div>
          <button
            onClick={() => setActiveTab('invitations')}
            className="mt-4 text-blue-400 hover:text-blue-300"
          >
            View invitations →
          </button>
        </div>
      )}
    </div>
  );

  const renderCompleted = () => (
    <div className="space-y-4">
      {completedPromotions.map(promo => (
        <div key={promo.id} className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{promo.title}</h3>
                <p className="text-gray-400 text-sm">{promo.startDate} - {promo.endDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-center">
              <div>
                <div className="text-white font-semibold">{promo.myDiscount}%</div>
                <div className="text-gray-400 text-xs">Discount</div>
              </div>
              <div>
                <div className="text-white font-semibold">{(promo.views/1000).toFixed(0)}K</div>
                <div className="text-gray-400 text-xs">Views</div>
              </div>
              <div>
                <div className="text-green-400 font-semibold">{promo.orders}</div>
                <div className="text-gray-400 text-xs">Orders</div>
              </div>
              <div>
                <div className="text-yellow-400 font-semibold">₹{(promo.revenue/100000).toFixed(1)}L</div>
                <div className="text-gray-400 text-xs">Revenue</div>
              </div>
              <div>
                <div className="text-purple-400 font-semibold">{promo.roi}x</div>
                <div className="text-gray-400 text-xs">ROI</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderParticipateModal = () => {
    if (!selectedPromotion) return null;

    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-2xl max-w-lg w-full">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Confirm Participation</h2>
            <p className="text-gray-400 text-sm mt-1">{selectedPromotion.title}</p>
          </div>

          <div className="p-6 space-y-4">
            {/* Set Your Discount */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">Your Discount Offer</label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={parseInt(selectedPromotion.discountRange)}
                  max={50}
                  defaultValue={25}
                  className="flex-1"
                />
                <div className="w-20 text-center">
                  <div className="text-2xl font-bold text-green-400">25%</div>
                  <div className="text-gray-400 text-xs">OFF</div>
                </div>
              </div>
              <div className="text-gray-500 text-xs mt-1">
                Range: {selectedPromotion.discountRange}
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="text-white font-medium mb-3">Cost Breakdown (per ₹100 discount)</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Your contribution</span>
                  <span className="text-green-400">₹{selectedPromotion.merchantContribution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Platform contribution</span>
                  <span className="text-blue-400">₹{selectedPromotion.platformContribution}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-700">
                  <span className="text-white font-medium">Total discount to user</span>
                  <span className="text-white font-medium">₹100</span>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="text-gray-400 text-xs">
              By participating, you agree to:
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Honor the discount for all eligible orders</li>
                <li>Maintain product/service quality</li>
                <li>Not change pricing to offset discount</li>
              </ul>
            </div>
          </div>

          <div className="p-6 border-t border-gray-700 flex justify-end gap-3">
            <button
              onClick={() => {
                setShowParticipateModal(false);
                setSelectedPromotion(null);
              }}
              className="px-6 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setShowParticipateModal(false);
                setSelectedPromotion(null);
                setActiveTab('participating');
              }}
              className="px-6 py-2 bg-green-600 rounded-lg text-white hover:bg-green-700 flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              Confirm Participation
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-green-900/20 to-gray-900 border-b border-gray-800">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/merchant')} className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">Platform Promotions</h1>
                <p className="text-gray-400 text-sm">Join platform-wide campaigns to boost sales</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flow Indicator */}
      <div className="px-4 py-4">
        <div className="bg-gradient-to-r from-orange-900/30 via-green-900/30 to-purple-900/30 rounded-xl p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 opacity-50">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Crown className="w-4 h-4 text-white" />
                </div>
                <span className="text-orange-400 font-medium">Admin Created</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center ring-2 ring-green-400 ring-offset-2 ring-offset-gray-900">
                  <Store className="w-4 h-4 text-white" />
                </div>
                <span className="text-green-400 font-medium">You Opt-in</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500" />
              <div className="flex items-center gap-2 opacity-50">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-purple-400 font-medium">Users See</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4">
        <div className="flex gap-1 py-2 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.id ? 'bg-white/20' : 'bg-gray-700'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        {activeTab === 'invitations' && renderInvitations()}
        {activeTab === 'participating' && renderParticipating()}
        {activeTab === 'completed' && renderCompleted()}
      </div>

      {/* Participate Modal */}
      {showParticipateModal && renderParticipateModal()}

      <MerchantNav />
    </div>
  );
};

export default MerchantPromotionParticipation;
