import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Megaphone, Plus, Edit2, Trash2, Eye, Play, Pause,
  Calendar, Clock, DollarSign, Users, Store, Tag, Gift, Percent,
  CheckCircle, XCircle, AlertTriangle, Send, Target, TrendingUp,
  MapPin, Layers, Crown, ChevronRight, Copy, BarChart3, Zap,
  Bell, Filter, Search, MoreVertical, Globe, RefreshCw
} from 'lucide-react';

const AdminPromotionLauncher = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState(null);

  const tabs = [
    { id: 'active', label: 'Active', count: 8 },
    { id: 'scheduled', label: 'Scheduled', count: 3 },
    { id: 'pending', label: 'Pending Merchants', count: 5 },
    { id: 'completed', label: 'Completed', count: 24 },
    { id: 'draft', label: 'Drafts', count: 2 }
  ];

  // Platform promotions
  const promotions = [
    {
      id: 'PROMO001',
      title: 'Mega Diwali Sale 2024',
      description: 'Platform-wide Diwali celebration with up to 50% off across all categories',
      type: 'seasonal',
      status: 'active',
      startDate: '2024-10-20',
      endDate: '2024-11-05',
      targetZones: ['All Zones'],
      targetCategories: ['All Categories'],
      discountType: 'percentage',
      maxDiscount: 50,
      minDiscount: 10,
      merchantContribution: 70,
      platformContribution: 30,
      coinBonus: 2,
      merchantsInvited: 15420,
      merchantsParticipating: 8945,
      merchantsPending: 2340,
      merchantsDeclined: 4135,
      userViews: 245000,
      conversions: 12400,
      revenue: 45000000,
      createdBy: 'HQ Admin',
      createdAt: '2024-10-01'
    },
    {
      id: 'PROMO002',
      title: 'Weekend Flash Bonanza',
      description: 'Every weekend special deals with extra coin rewards',
      type: 'recurring',
      status: 'active',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      recurringDays: ['Saturday', 'Sunday'],
      targetZones: ['North Zone', 'South Zone'],
      targetCategories: ['Food & Dining', 'Fashion'],
      discountType: 'flat',
      maxDiscount: 500,
      minDiscount: 100,
      merchantContribution: 60,
      platformContribution: 40,
      coinBonus: 3,
      merchantsInvited: 8500,
      merchantsParticipating: 5200,
      merchantsPending: 1200,
      merchantsDeclined: 2100,
      userViews: 89000,
      conversions: 4500,
      revenue: 12000000,
      createdBy: 'Marketing Admin',
      createdAt: '2024-01-15'
    },
    {
      id: 'PROMO003',
      title: 'New User Welcome Offer',
      description: 'Special discounts for users who joined in last 7 days',
      type: 'evergreen',
      status: 'active',
      startDate: '2024-01-01',
      endDate: '2025-12-31',
      targetZones: ['All Zones'],
      targetCategories: ['All Categories'],
      discountType: 'percentage',
      maxDiscount: 30,
      minDiscount: 15,
      merchantContribution: 50,
      platformContribution: 50,
      coinBonus: 5,
      userEligibility: 'new_users_7_days',
      merchantsInvited: 15420,
      merchantsParticipating: 12800,
      merchantsPending: 500,
      merchantsDeclined: 2120,
      userViews: 156000,
      conversions: 28000,
      revenue: 35000000,
      createdBy: 'HQ Admin',
      createdAt: '2024-01-01'
    },
    {
      id: 'PROMO004',
      title: 'Republic Day Special',
      description: 'Celebrate Republic Day with patriotic deals',
      type: 'seasonal',
      status: 'scheduled',
      startDate: '2025-01-24',
      endDate: '2025-01-28',
      targetZones: ['All Zones'],
      targetCategories: ['All Categories'],
      discountType: 'percentage',
      maxDiscount: 26,
      minDiscount: 10,
      merchantContribution: 70,
      platformContribution: 30,
      coinBonus: 2,
      merchantsInvited: 15420,
      merchantsParticipating: 0,
      merchantsPending: 15420,
      merchantsDeclined: 0,
      userViews: 0,
      conversions: 0,
      revenue: 0,
      createdBy: 'Marketing Admin',
      createdAt: '2024-12-20'
    },
    {
      id: 'PROMO005',
      title: 'Christmas & New Year Blast',
      description: 'Year-end celebration with massive discounts',
      type: 'seasonal',
      status: 'completed',
      startDate: '2024-12-20',
      endDate: '2024-12-31',
      targetZones: ['All Zones'],
      targetCategories: ['All Categories'],
      discountType: 'percentage',
      maxDiscount: 40,
      minDiscount: 15,
      merchantContribution: 65,
      platformContribution: 35,
      coinBonus: 3,
      merchantsInvited: 15420,
      merchantsParticipating: 11200,
      merchantsPending: 0,
      merchantsDeclined: 4220,
      userViews: 320000,
      conversions: 18500,
      revenue: 62000000,
      createdBy: 'HQ Admin',
      createdAt: '2024-12-01'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'green';
      case 'scheduled': return 'blue';
      case 'pending': return 'yellow';
      case 'completed': return 'gray';
      case 'draft': return 'orange';
      default: return 'gray';
    }
  };

  const filteredPromotions = promotions.filter(p => {
    if (activeTab === 'active') return p.status === 'active';
    if (activeTab === 'scheduled') return p.status === 'scheduled';
    if (activeTab === 'pending') return p.merchantsPending > 0;
    if (activeTab === 'completed') return p.status === 'completed';
    if (activeTab === 'draft') return p.status === 'draft';
    return true;
  });

  const renderPromotionCard = (promo) => (
    <div key={promo.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 bg-${getStatusColor(promo.status)}-500/20 rounded-xl flex items-center justify-center`}>
              <Megaphone className={`w-7 h-7 text-${getStatusColor(promo.status)}-400`} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-white font-semibold text-lg">{promo.title}</h3>
                <span className={`px-2 py-0.5 rounded-full text-xs bg-${getStatusColor(promo.status)}-500/20 text-${getStatusColor(promo.status)}-400 capitalize`}>
                  {promo.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-1">{promo.description}</p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-700 rounded-lg">
            <MoreVertical className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Promotion Details */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-gray-900/50 rounded-lg p-3">
            <div className="text-gray-400 text-xs mb-1">Duration</div>
            <div className="text-white text-sm">{promo.startDate} - {promo.endDate}</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-3">
            <div className="text-gray-400 text-xs mb-1">Discount</div>
            <div className="text-white text-sm">{promo.minDiscount}% - {promo.maxDiscount}%</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-3">
            <div className="text-gray-400 text-xs mb-1">Split</div>
            <div className="text-white text-sm">
              <span className="text-green-400">{promo.merchantContribution}%</span> /
              <span className="text-blue-400"> {promo.platformContribution}%</span>
            </div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-3">
            <div className="text-gray-400 text-xs mb-1">Coin Bonus</div>
            <div className="text-yellow-400 text-sm">{promo.coinBonus}x multiplier</div>
          </div>
        </div>

        {/* Merchant Participation */}
        <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm">Merchant Participation</span>
            <span className="text-white text-sm">
              {promo.merchantsParticipating.toLocaleString()} / {promo.merchantsInvited.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div className="h-full flex">
              <div
                className="bg-green-500 h-full"
                style={{ width: `${(promo.merchantsParticipating / promo.merchantsInvited) * 100}%` }}
              ></div>
              <div
                className="bg-yellow-500 h-full"
                style={{ width: `${(promo.merchantsPending / promo.merchantsInvited) * 100}%` }}
              ></div>
              <div
                className="bg-red-500 h-full"
                style={{ width: `${(promo.merchantsDeclined / promo.merchantsInvited) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2 text-xs">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-400">Participating: {promo.merchantsParticipating.toLocaleString()}</span>
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-400">Pending: {promo.merchantsPending.toLocaleString()}</span>
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-400">Declined: {promo.merchantsDeclined.toLocaleString()}</span>
            </span>
          </div>
        </div>

        {/* Performance Stats */}
        {promo.status !== 'scheduled' && promo.status !== 'draft' && (
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{(promo.userViews / 1000).toFixed(0)}K</div>
              <div className="text-gray-400 text-xs">User Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{(promo.conversions / 1000).toFixed(1)}K</div>
              <div className="text-gray-400 text-xs">Conversions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">₹{(promo.revenue / 10000000).toFixed(1)}Cr</div>
              <div className="text-gray-400 text-xs">Revenue</div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Created by {promo.createdBy}</span>
            <span>•</span>
            <span>{promo.createdAt}</span>
          </div>
          <div className="flex items-center gap-2">
            {promo.status === 'active' && (
              <button className="px-3 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-lg text-sm hover:bg-yellow-500/30">
                <Pause className="w-4 h-4" />
              </button>
            )}
            {promo.status === 'scheduled' && (
              <button className="px-3 py-1.5 bg-green-500/20 text-green-400 rounded-lg text-sm hover:bg-green-500/30 flex items-center gap-1">
                <Send className="w-4 h-4" />
                Send to Merchants
              </button>
            )}
            <button className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30">
              <Eye className="w-4 h-4" />
            </button>
            <button className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg text-sm hover:bg-gray-600">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCreateModal = () => (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-700 flex items-center justify-between sticky top-0 bg-gray-800">
          <h2 className="text-xl font-bold text-white">Create Platform Promotion</h2>
          <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-white">
            <XCircle className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Promotion Title</label>
                <input
                  type="text"
                  placeholder="e.g., Summer Sale 2024"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Description</label>
                <textarea
                  rows={3}
                  placeholder="Describe the promotion..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Promotion Type</label>
                  <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none">
                    <option value="seasonal">Seasonal (Fixed dates)</option>
                    <option value="recurring">Recurring (Weekly/Monthly)</option>
                    <option value="evergreen">Evergreen (Always on)</option>
                    <option value="flash">Flash Sale (Limited time)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Priority</label>
                  <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none">
                    <option value="high">High - Featured everywhere</option>
                    <option value="medium">Medium - Category pages</option>
                    <option value="low">Low - Search only</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div>
            <h3 className="text-white font-semibold mb-4">Duration</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Start Date</label>
                <input
                  type="date"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">End Date</label>
                <input
                  type="date"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div>
            <h3 className="text-white font-semibold mb-4">Target Audience</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Zones</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none">
                  <option value="all">All Zones</option>
                  <option value="north">North Zone</option>
                  <option value="south">South Zone</option>
                  <option value="east">East Zone</option>
                  <option value="west">West Zone</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Categories</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none">
                  <option value="all">All Categories</option>
                  <option value="food">Food & Dining</option>
                  <option value="fashion">Fashion</option>
                  <option value="electronics">Electronics</option>
                  <option value="beauty">Beauty & Wellness</option>
                </select>
              </div>
            </div>
          </div>

          {/* Discount Configuration */}
          <div>
            <h3 className="text-white font-semibold mb-4">Discount Configuration</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Discount Type</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none">
                  <option value="percentage">Percentage Off</option>
                  <option value="flat">Flat Amount Off</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Min Discount</label>
                <input
                  type="number"
                  placeholder="10"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Max Discount</label>
                <input
                  type="number"
                  placeholder="50"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Cost Split */}
          <div>
            <h3 className="text-white font-semibold mb-4">Cost Split</h3>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Merchant Contribution</span>
                <span className="text-green-400 font-semibold">70%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="70"
                className="w-full"
              />
              <div className="flex items-center justify-between mt-2 text-sm">
                <span className="text-green-400">Merchant: 70%</span>
                <span className="text-blue-400">Platform: 30%</span>
              </div>
            </div>
          </div>

          {/* Coin Bonus */}
          <div>
            <h3 className="text-white font-semibold mb-4">Coin Rewards</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Coin Multiplier</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none">
                  <option value="1">1x (Normal)</option>
                  <option value="2">2x Coins</option>
                  <option value="3">3x Coins</option>
                  <option value="5">5x Coins</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Bonus Coins (Flat)</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Merchant Selection */}
          <div>
            <h3 className="text-white font-semibold mb-4">Merchant Selection</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg cursor-pointer hover:bg-gray-900">
                <input type="radio" name="merchants" defaultChecked className="w-4 h-4" />
                <div>
                  <div className="text-white">All Eligible Merchants</div>
                  <div className="text-gray-400 text-sm">Invite all merchants in selected zones/categories</div>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg cursor-pointer hover:bg-gray-900">
                <input type="radio" name="merchants" className="w-4 h-4" />
                <div>
                  <div className="text-white">Specific Tier Only</div>
                  <div className="text-gray-400 text-sm">Only Gold & Platinum merchants</div>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg cursor-pointer hover:bg-gray-900">
                <input type="radio" name="merchants" className="w-4 h-4" />
                <div>
                  <div className="text-white">Manual Selection</div>
                  <div className="text-gray-400 text-sm">Hand-pick participating merchants</div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-700 flex justify-between sticky bottom-0 bg-gray-800">
          <button
            onClick={() => setShowCreateModal(false)}
            className="px-6 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700"
          >
            Cancel
          </button>
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600">
              Save as Draft
            </button>
            <button className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 flex items-center gap-2">
              <Send className="w-4 h-4" />
              Create & Send to Merchants
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-orange-900/20 to-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/admin')} className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">Promotion Launcher</h1>
                <p className="text-gray-400 text-sm">Create platform-wide promotions for merchants to participate</p>
              </div>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Promotion
            </button>
          </div>
        </div>
      </div>

      {/* Flow Indicator */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-gradient-to-r from-orange-900/30 via-green-900/30 to-purple-900/30 rounded-xl p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Crown className="w-4 h-4 text-white" />
                </div>
                <span className="text-orange-400 font-medium">Admin Creates</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Store className="w-4 h-4 text-white" />
                </div>
                <span className="text-green-400 font-medium">Merchants Opt-in</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-purple-400 font-medium">Users See & Shop</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/admin/promotion-analytics')}
              className="text-blue-400 text-sm hover:text-blue-300"
            >
              View Analytics →
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 py-2 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800'
                }`}
              >
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
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-4">
          {filteredPromotions.map(promo => renderPromotionCard(promo))}
        </div>

        {filteredPromotions.length === 0 && (
          <div className="text-center py-12">
            <Megaphone className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <div className="text-gray-400">No promotions found</div>
          </div>
        )}
      </div>

      {/* Create Modal */}
      {showCreateModal && renderCreateModal()}
    </div>
  );
};

export default AdminPromotionLauncher;
