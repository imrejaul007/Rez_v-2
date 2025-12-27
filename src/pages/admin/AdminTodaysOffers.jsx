import React, { useState } from 'react';
import {
  Calendar, CheckCircle, XCircle, Clock, TrendingUp, Users, DollarSign,
  Search, Filter, Download, Eye, Edit, Trash2, Plus, AlertTriangle,
  RefreshCw, Settings, BarChart3, Award, Target, Zap, ChevronDown,
  ChevronUp, Activity, Package, ShoppingBag, Star
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminTodaysOffers() {
  const [activeTab, setActiveTab] = useState('pending');
  const [expandedOffer, setExpandedOffer] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [stats] = useState({
    todaysOffers: 156,
    pendingApproval: 18,
    activeToday: 89,
    expired: 34,
    totalRedemptions: 23450,
    revenue: 8945000,
    avgDiscount: 32,
    participatingMerchants: 78
  });

  const [pendingOffers] = useState([
    {
      id: 'TDO001',
      merchantId: 'M001',
      merchantName: 'Fresh Bites Restaurant',
      offerTitle: 'Today Only: 40% Off All Meals',
      category: 'Food & Beverage',
      discount: {
        type: 'percentage',
        value: 40,
        maxAmount: 500
      },
      originalPrice: 1200,
      offerPrice: 720,
      validFrom: '2025-12-28 00:00',
      validUntil: '2025-12-28 23:59',
      autoExpire: true,
      maxRedemptions: 200,
      budget: 40000,
      minPurchase: 500,
      eligibility: 'All users',
      termsAndConditions: 'Valid for dine-in and takeaway. Not valid on delivery. Cannot be combined with other offers.',
      renewalSchedule: 'daily',
      lastOffered: '2025-12-21',
      estimatedReach: 25000,
      submittedAt: '2025-12-27 08:30',
      merchantTier: 'premium',
      previousDailyOffers: 23,
      avgRedemptionRate: 85,
      status: 'pending'
    },
    {
      id: 'TDO002',
      merchantId: 'M002',
      merchantName: 'StyleHub Fashion',
      offerTitle: 'Flash Deal: Flat ₹1000 Off',
      category: 'Fashion',
      discount: {
        type: 'flat',
        value: 1000,
        maxAmount: 1000
      },
      originalPrice: 3999,
      offerPrice: 2999,
      validFrom: '2025-12-28 00:00',
      validUntil: '2025-12-28 23:59',
      autoExpire: true,
      maxRedemptions: 500,
      budget: 250000,
      minPurchase: 2999,
      eligibility: 'ReZ members only',
      termsAndConditions: 'Valid on fashion apparel only. Excludes sale items. Limited stock available.',
      renewalSchedule: 'weekly',
      lastOffered: '2025-12-14',
      estimatedReach: 45000,
      submittedAt: '2025-12-27 09:45',
      merchantTier: 'premium',
      previousDailyOffers: 8,
      avgRedemptionRate: 72,
      status: 'pending',
      flags: ['High discount amount']
    },
    {
      id: 'TDO003',
      merchantId: 'M003',
      merchantName: 'Wellness Spa',
      offerTitle: 'Today Special: Buy 1 Get 1 Massage',
      category: 'Health & Wellness',
      discount: {
        type: 'bogo',
        value: 50,
        maxAmount: 1500
      },
      originalPrice: 3000,
      offerPrice: 1500,
      validFrom: '2025-12-28 10:00',
      validUntil: '2025-12-28 20:00',
      autoExpire: true,
      maxRedemptions: 50,
      budget: 75000,
      minPurchase: 1500,
      eligibility: 'Privé members only',
      termsAndConditions: 'Valid for 60-minute Swedish massage only. Appointment required. Both sessions must be used today.',
      renewalSchedule: 'monthly',
      lastOffered: null,
      estimatedReach: 5000,
      submittedAt: '2025-12-27 07:20',
      merchantTier: 'premium',
      previousDailyOffers: 3,
      avgRedemptionRate: 95,
      status: 'pending'
    }
  ]);

  const [activeOffers] = useState([
    {
      id: 'TDO010',
      merchantName: 'Coffee Corner',
      offerTitle: 'Today Only: Free Cookie with Coffee',
      category: 'Food & Beverage',
      discount: 50,
      redemptions: 89,
      maxRedemptions: 150,
      views: 4500,
      clicks: 890,
      ctr: 19.8,
      revenue: 23400,
      timeRemaining: '8h 23m',
      expiresAt: '23:59',
      approvedBy: 'Admin Sarah',
      approvedAt: '00:15',
      performance: 'excellent',
      trend: 'up'
    },
    {
      id: 'TDO011',
      merchantName: 'Tech Bazaar',
      offerTitle: 'Midnight Deal: 25% Off Electronics',
      category: 'Electronics',
      discount: 25,
      redemptions: 45,
      maxRedemptions: 100,
      views: 8900,
      clicks: 1200,
      ctr: 13.5,
      revenue: 156000,
      timeRemaining: '6h 15m',
      expiresAt: '23:59',
      approvedBy: 'Admin Mike',
      approvedAt: '00:30',
      performance: 'good',
      trend: 'stable'
    },
    {
      id: 'TDO012',
      merchantName: 'Book Nook',
      offerTitle: 'Daily Special: Buy 2 Get 1 Free',
      category: 'Books & Media',
      discount: 33,
      redemptions: 12,
      maxRedemptions: 50,
      views: 2300,
      clicks: 234,
      ctr: 10.2,
      revenue: 8900,
      timeRemaining: '14h 45m',
      expiresAt: '23:59',
      approvedBy: 'Admin Sarah',
      approvedAt: '00:05',
      performance: 'average',
      trend: 'down'
    }
  ]);

  const [discountCaps] = useState({
    percentage: {
      standard: 50,
      premium: 75,
      prive: 100
    },
    flat: {
      standard: 1000,
      premium: 2500,
      prive: 5000
    },
    bogo: {
      maxValue: 3000,
      minPurchase: 1000
    }
  });

  const [renewalRules] = useState([
    {
      id: 1,
      name: 'Daily Auto-Renewal',
      description: 'Automatically renew approved offers daily',
      status: 'active',
      conditions: 'Previous day redemption rate > 70%',
      merchants: 45,
      offers: 89
    },
    {
      id: 2,
      name: 'Weekly Rotation',
      description: 'Rotate offers every 7 days',
      status: 'active',
      conditions: 'Merchant tier: Premium or above',
      merchants: 23,
      offers: 34
    },
    {
      id: 3,
      name: 'Performance-Based Renewal',
      description: 'Renew based on performance metrics',
      status: 'active',
      conditions: 'CTR > 15% AND Revenue > ₹10,000',
      merchants: 12,
      offers: 18
    }
  ]);

  const getPerformanceColor = (performance) => {
    const colors = {
      excellent: 'text-green-600 bg-green-100',
      good: 'text-blue-600 bg-blue-100',
      average: 'text-yellow-600 bg-yellow-100',
      poor: 'text-red-600 bg-red-100'
    };
    return colors[performance] || 'text-gray-600 bg-gray-100';
  };

  const getTrendIcon = (trend) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (trend === 'down') return <Activity className="w-4 h-4 text-red-600" />;
    return <Activity className="w-4 h-4 text-gray-600" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Today's Offers Management</h1>
              <p className="text-gray-600">Manage daily deals, auto-expiration, and renewal schedules</p>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">
                All offers expire at midnight (00:00)
              </span>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <Calendar className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.todaysOffers}</p>
            <p className="text-sm text-gray-600">Today's Offers</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Clock className="w-8 h-8 text-yellow-600 mb-2" />
            <p className="text-2xl font-bold text-yellow-600">{stats.pendingApproval}</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold text-green-600">{stats.activeToday}</p>
            <p className="text-sm text-gray-600">Active</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <XCircle className="w-8 h-8 text-gray-600 mb-2" />
            <p className="text-2xl font-bold text-gray-600">{stats.expired}</p>
            <p className="text-sm text-gray-600">Expired</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.totalRedemptions.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Redemptions</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <DollarSign className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold text-green-600">₹{(stats.revenue / 100000).toFixed(1)}L</p>
            <p className="text-sm text-gray-600">Revenue</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Target className="w-8 h-8 text-orange-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.avgDiscount}%</p>
            <p className="text-sm text-gray-600">Avg Discount</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <ShoppingBag className="w-8 h-8 text-indigo-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.participatingMerchants}</p>
            <p className="text-sm text-gray-600">Merchants</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('pending')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'pending'
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Pending Approval</span>
                  <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    {stats.pendingApproval}
                  </span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('active')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'active'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Active Today</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('caps')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'caps'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>Discount Caps</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('renewal')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'renewal'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4" />
                  <span>Renewal Rules</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'analytics'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>Daily Performance</span>
                </div>
              </button>
            </nav>
          </div>

          {/* Pending Approval Tab */}
          {activeTab === 'pending' && (
            <div className="p-6">
              {/* Filters */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search offers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Categories</option>
                    <option value="food">Food & Beverage</option>
                    <option value="fashion">Fashion</option>
                    <option value="electronics">Electronics</option>
                    <option value="health">Health & Wellness</option>
                  </select>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <CheckCircle className="w-4 h-4" />
                    <span>Bulk Approve</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Pending Offers List */}
              <div className="space-y-4">
                {pendingOffers.map((offer) => (
                  <div key={offer.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{offer.offerTitle}</h3>
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                              Pending
                            </span>
                            {offer.autoExpire && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                Auto-expires midnight
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="font-medium">{offer.merchantName}</span>
                            <span>•</span>
                            <span>{offer.category}</span>
                            <span>•</span>
                            <span>Submitted {offer.submittedAt}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setExpandedOffer(expandedOffer === offer.id ? null : offer.id)}
                          className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                          {expandedOffer === offer.id ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-5 gap-4 mb-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Discount</p>
                          <p className="text-lg font-bold text-green-600">
                            {offer.discount.type === 'percentage' ? `${offer.discount.value}%` : `₹${offer.discount.value}`}
                          </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Offer Price</p>
                          <p className="text-lg font-bold text-gray-900">₹{offer.offerPrice}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Budget</p>
                          <p className="text-lg font-bold text-gray-900">₹{offer.budget.toLocaleString()}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Max Uses</p>
                          <p className="text-lg font-bold text-gray-900">{offer.maxRedemptions}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Est. Reach</p>
                          <p className="text-lg font-bold text-gray-900">{offer.estimatedReach.toLocaleString()}</p>
                        </div>
                      </div>

                      {/* Flags */}
                      {offer.flags && offer.flags.length > 0 && (
                        <div className="mb-4">
                          <div className="flex items-start space-x-2 text-sm text-orange-800 bg-orange-50 rounded-lg p-3">
                            <AlertTriangle className="w-4 h-4 mt-0.5" />
                            <div>
                              <p className="font-medium">Attention Required:</p>
                              <ul className="list-disc list-inside mt-1">
                                {offer.flags.map((flag, idx) => (
                                  <li key={idx}>{flag}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Expanded Details */}
                      {expandedOffer === offer.id && (
                        <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Offer Details</h4>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Valid Period:</span>
                                <span className="text-sm font-medium text-gray-900">
                                  {offer.validFrom} - {offer.validUntil}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Min Purchase:</span>
                                <span className="text-sm font-medium text-gray-900">₹{offer.minPurchase}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Eligibility:</span>
                                <span className="text-sm font-medium text-gray-900">{offer.eligibility}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Renewal:</span>
                                <span className="text-sm font-medium text-gray-900">{offer.renewalSchedule}</span>
                              </div>
                              {offer.lastOffered && (
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-600">Last Offered:</span>
                                  <span className="text-sm font-medium text-gray-900">{offer.lastOffered}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Merchant Performance</h4>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Tier:</span>
                                <span className="text-sm font-medium text-gray-900">{offer.merchantTier}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Previous Daily Offers:</span>
                                <span className="text-sm font-medium text-gray-900">{offer.previousDailyOffers}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Avg Redemption Rate:</span>
                                <span className="text-sm font-medium text-green-600">{offer.avgRedemptionRate}%</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Terms & Conditions</h4>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <p className="text-sm text-gray-900">{offer.termsAndConditions}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3 mt-4">
                        <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Approve</span>
                        </button>
                        <button className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center justify-center space-x-2">
                          <Edit className="w-4 h-4" />
                          <span>Request Changes</span>
                        </button>
                        <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center space-x-2">
                          <XCircle className="w-4 h-4" />
                          <span>Reject</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Active Today Tab */}
          {activeTab === 'active' && (
            <div className="p-6">
              <div className="space-y-4">
                {activeOffers.map((offer) => (
                  <div key={offer.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{offer.offerTitle}</h3>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            Active
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPerformanceColor(offer.performance)}`}>
                            {offer.performance}
                          </span>
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {offer.timeRemaining} left
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="font-medium">{offer.merchantName}</span>
                          <span>•</span>
                          <span>{offer.category}</span>
                          <span>•</span>
                          <span>Approved by {offer.approvedBy} at {offer.approvedAt}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {getTrendIcon(offer.trend)}
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-6 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Redemptions</p>
                        <p className="text-sm font-bold text-gray-900">
                          {offer.redemptions}/{offer.maxRedemptions}
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                          <div
                            className="bg-green-600 h-1.5 rounded-full"
                            style={{ width: `${(offer.redemptions / offer.maxRedemptions) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Views</p>
                        <p className="text-sm font-bold text-gray-900">{offer.views.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Clicks</p>
                        <p className="text-sm font-bold text-gray-900">{offer.clicks}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">CTR</p>
                        <p className="text-sm font-bold text-blue-600">{offer.ctr}%</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Revenue</p>
                        <p className="text-sm font-bold text-green-600">₹{offer.revenue.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Expires At</p>
                        <p className="text-sm font-bold text-gray-900">{offer.expiresAt}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                      <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 flex items-center space-x-2">
                        <Edit className="w-4 h-4" />
                        <span>Extend Time</span>
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center space-x-2">
                        <XCircle className="w-4 h-4" />
                        <span>End Early</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Discount Caps Tab */}
          {activeTab === 'caps' && (
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Percentage Discount Caps</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">Standard Tier</p>
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold text-gray-900">{discountCaps.percentage.standard}%</p>
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <p className="text-sm text-purple-600 mb-2">Premium Tier</p>
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold text-purple-900">{discountCaps.percentage.premium}%</p>
                        <button className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm text-yellow-600 mb-2">Privé Tier</p>
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold text-yellow-900">{discountCaps.percentage.prive}%</p>
                        <button className="p-2 text-yellow-600 hover:bg-yellow-100 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Flat Discount Caps</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">Standard Tier</p>
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold text-gray-900">₹{discountCaps.flat.standard}</p>
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <p className="text-sm text-purple-600 mb-2">Premium Tier</p>
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold text-purple-900">₹{discountCaps.flat.premium}</p>
                        <button className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm text-yellow-600 mb-2">Privé Tier</p>
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold text-yellow-900">₹{discountCaps.flat.prive}</p>
                        <button className="p-2 text-yellow-600 hover:bg-yellow-100 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">BOGO Limits</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-600 mb-2">Max BOGO Value</p>
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold text-blue-900">₹{discountCaps.bogo.maxValue}</p>
                        <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-600 mb-2">Min Purchase for BOGO</p>
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold text-blue-900">₹{discountCaps.bogo.minPurchase}</p>
                        <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Renewal Rules Tab */}
          {activeTab === 'renewal' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Auto-Renewal & Rotation Rules</h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Plus className="w-4 h-4" />
                  <span>Add Rule</span>
                </button>
              </div>

              <div className="space-y-4">
                {renewalRules.map((rule) => (
                  <div key={rule.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{rule.name}</h4>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            {rule.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{rule.description}</p>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                          <p className="text-xs text-blue-600 font-medium mb-1">Conditions:</p>
                          <p className="text-sm text-blue-900">{rule.conditions}</p>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{rule.merchants} merchants</span>
                          <span>•</span>
                          <span>{rule.offers} active offers</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Performance by Category</h3>
                  <div className="space-y-3">
                    {[
                      { category: 'Food & Beverage', offers: 34, redemptions: 8900, revenue: 234000 },
                      { category: 'Fashion', offers: 23, redemptions: 5600, revenue: 456000 },
                      { category: 'Electronics', offers: 12, redemptions: 2340, revenue: 890000 },
                      { category: 'Health & Wellness', offers: 8, redemptions: 1200, revenue: 156000 },
                      { category: 'Books & Media', offers: 6, redemptions: 890, revenue: 45000 }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{item.category}</span>
                          <span className="text-sm text-green-600 font-medium">₹{item.revenue.toLocaleString()}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Offers</p>
                            <p className="font-bold text-gray-900">{item.offers}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Redemptions</p>
                            <p className="font-bold text-gray-900">{item.redemptions.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Merchant Participation Tracking</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Coffee Corner', offers: 12, participation: 92, revenue: 45000 },
                      { name: 'Fashion Hub', offers: 8, participation: 88, revenue: 78000 },
                      { name: 'Tech Bazaar', offers: 6, participation: 75, revenue: 156000 },
                      { name: 'Book Nook', offers: 4, participation: 65, revenue: 23000 },
                      { name: 'Wellness Spa', offers: 3, participation: 58, revenue: 67000 }
                    ].map((merchant, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-gray-400">{idx + 1}</span>
                            <span className="font-medium text-gray-900">{merchant.name}</span>
                          </div>
                          <span className="text-sm text-green-600 font-medium">₹{merchant.revenue.toLocaleString()}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Total Offers</p>
                            <p className="font-bold text-gray-900">{merchant.offers}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Participation</p>
                            <p className="font-bold text-blue-600">{merchant.participation}%</p>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                          <div
                            className="bg-blue-600 h-1.5 rounded-full"
                            style={{ width: `${merchant.participation}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
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
