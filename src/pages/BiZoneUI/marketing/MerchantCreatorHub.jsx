import { useState } from 'react';
import MerchantNav from '../../components/merchant/MerchantNav';
import {
  Users, TrendingUp, DollarSign, Eye, Heart, MessageSquare, Share2,
  Plus, Search, Filter, Star, CheckCircle, Clock, Zap, Target,
  ShoppingBag, BarChart3, Award, Link as LinkIcon
} from 'lucide-react';

export default function MerchantCreatorHub() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCreator, setSelectedCreator] = useState(null);

  // Mock data - Active creator partnerships
  const activePartnerships = [
    {
      id: 'COLLAB-001',
      creatorId: 'CR-12345',
      creatorName: 'Fashion with Priya',
      creatorUsername: '@fashionpriya',
      followers: 125000,
      category: 'Fashion & Lifestyle',
      tier: 'Elite',
      campaignName: 'Summer Collection Launch',
      startDate: '2024-12-15',
      endDate: '2025-01-15',
      status: 'active',
      performance: {
        views: 45678,
        clicks: 8934,
        conversions: 456,
        revenue: 234500,
        commission: 23450,
        conversionRate: 5.1
      },
      contentCreated: 12,
      avgEngagement: 4.8
    },
    {
      id: 'COLLAB-002',
      creatorId: 'CR-67890',
      creatorName: 'Tech Reviews by Rahul',
      creatorUsername: '@techrahul',
      followers: 89000,
      category: 'Tech & Gadgets',
      tier: 'Rising Star',
      campaignName: 'Smartphone Sale Promotion',
      startDate: '2024-12-20',
      endDate: '2025-01-10',
      status: 'active',
      performance: {
        views: 34567,
        clicks: 6789,
        conversions: 234,
        revenue: 156000,
        commission: 15600,
        conversionRate: 3.4
      },
      contentCreated: 8,
      avgEngagement: 5.2
    }
  ];

  // Mock data - Available creators for collaboration
  const availableCreators = [
    {
      id: 'CR-11111',
      name: 'Beauty by Sneha',
      username: '@beautysneha',
      followers: 156000,
      category: 'Beauty & Wellness',
      tier: 'Elite',
      avgEngagement: 6.2,
      pastCollabs: 34,
      rating: 4.8,
      matchScore: 95,
      topProducts: ['Skincare', 'Makeup', 'Hair Care']
    },
    {
      id: 'CR-22222',
      name: 'Fitness Journey',
      username: '@fitnessjourney',
      followers: 67000,
      category: 'Fitness & Health',
      tier: 'Verified',
      avgEngagement: 7.1,
      pastCollabs: 18,
      rating: 4.6,
      matchScore: 88,
      topProducts: ['Supplements', 'Gym Wear', 'Equipment']
    },
    {
      id: 'CR-33333',
      name: 'Home Decor Ideas',
      username: '@homedecor',
      followers: 92000,
      category: 'Home & Living',
      tier: 'Elite',
      avgEngagement: 5.4,
      pastCollabs: 28,
      rating: 4.9,
      matchScore: 91,
      topProducts: ['Furniture', 'Decor', 'Lighting']
    }
  ];

  // Mock data - Campaign requests
  const campaignRequests = [
    {
      id: 'REQ-001',
      creatorName: 'Food Blogger Vikram',
      creatorUsername: '@foodvikram',
      followers: 78000,
      requestDate: new Date(Date.now() - 86400000),
      proposedCommission: 12,
      message: 'I love your restaurant! Would love to collaborate and create content around your new menu items.',
      status: 'pending'
    },
    {
      id: 'REQ-002',
      creatorName: 'Style Diary',
      creatorUsername: '@stylediary',
      followers: 134000,
      requestDate: new Date(Date.now() - 172800000),
      proposedCommission: 15,
      message: 'Your clothing line aligns perfectly with my audience. Let\'s create something amazing together!',
      status: 'pending'
    }
  ];

  // Mock data - Statistics
  const stats = {
    activePartnerships: 2,
    totalRevenue: 390500,
    totalCommission: 39050,
    avgConversionRate: 4.2,
    totalViews: 80245,
    totalClicks: 15723,
    contentPieces: 20,
    pendingRequests: 2
  };

  const handleSendCollabRequest = (creatorId) => {
    console.log('Sending collaboration request to:', creatorId);
  };

  const handleApproveRequest = (requestId) => {
    console.log('Approving request:', requestId);
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{stats.activePartnerships}</p>
          <p className="text-sm text-gray-600">Active Partnerships</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="w-8 h-8 text-green-600" />
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">₹{(stats.totalRevenue / 1000).toFixed(0)}K</p>
          <p className="text-sm text-gray-600">Revenue from Creators</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{stats.avgConversionRate}%</p>
          <p className="text-sm text-gray-600">Avg Conversion Rate</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <Eye className="w-8 h-8 text-orange-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{(stats.totalViews / 1000).toFixed(0)}K</p>
          <p className="text-sm text-gray-600">Total Views</p>
        </div>
      </div>

      {/* Active Partnerships */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Active Creator Partnerships</h3>
        <div className="space-y-4">
          {activePartnerships.map((partnership) => (
            <div key={partnership.id} className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {partnership.creatorName.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{partnership.creatorName}</h4>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        {partnership.tier}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        {partnership.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{partnership.creatorUsername} • {partnership.followers.toLocaleString()} followers</p>
                    <p className="text-sm font-medium text-gray-900">{partnership.campaignName}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(partnership.startDate).toLocaleDateString()} - {new Date(partnership.endDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-6 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Views</p>
                  <p className="text-lg font-bold text-gray-900">{(partnership.performance.views / 1000).toFixed(1)}K</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Clicks</p>
                  <p className="text-lg font-bold text-blue-600">{partnership.performance.clicks.toLocaleString()}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Conversions</p>
                  <p className="text-lg font-bold text-green-600">{partnership.performance.conversions}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Revenue</p>
                  <p className="text-lg font-bold text-purple-600">₹{(partnership.performance.revenue / 1000).toFixed(0)}K</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Commission</p>
                  <p className="text-lg font-bold text-orange-600">₹{(partnership.performance.commission / 1000).toFixed(0)}K</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Conv. Rate</p>
                  <p className="text-lg font-bold text-gray-900">{partnership.performance.conversionRate}%</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  View Campaign Details
                </button>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                  Message Creator
                </button>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                  View Content
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDiscoverCreators = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Discover Creators</h3>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search creators..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {availableCreators.map((creator) => (
          <div key={creator.id} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {creator.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{creator.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{creator.username}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      {creator.tier}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {creator.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-900">{creator.rating}</span>
                </div>
                <p className="text-xs text-gray-500">{creator.pastCollabs} collabs</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Followers</p>
                <p className="text-sm font-bold text-gray-900">{(creator.followers / 1000).toFixed(0)}K</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Engagement</p>
                <p className="text-sm font-bold text-green-600">{creator.avgEngagement}%</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Match</p>
                <p className="text-sm font-bold text-purple-600">{creator.matchScore}%</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">Top Categories</p>
              <div className="flex flex-wrap gap-2">
                {creator.topProducts.map((product, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {product}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleSendCollabRequest(creator.id)}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Send Collab Request
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRequests = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Collaboration Requests</h3>
      <div className="space-y-4">
        {campaignRequests.map((request) => (
          <div key={request.id} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {request.creatorName.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{request.creatorName}</h4>
                  <p className="text-sm text-gray-600 mb-2">{request.creatorUsername} • {request.followers.toLocaleString()} followers</p>
                  <p className="text-sm text-gray-700 mb-3">{request.message}</p>
                  <p className="text-xs text-gray-500">
                    Requested {new Date(request.requestDate).toLocaleDateString()} • Proposed commission: {request.proposedCommission}%
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => handleApproveRequest(request.id)}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                Accept Request
              </button>
              <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                View Creator Profile
              </button>
              <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <MerchantNav />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Creator Partnerships</h1>
                <p className="text-gray-600">Collaborate with influencers to grow your brand</p>
              </div>
            </div>

            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Create New Campaign
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'dashboard'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Dashboard
              </div>
            </button>
            <button
              onClick={() => setActiveTab('discover')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'discover'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Discover Creators
              </div>
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`flex-1 px-6 py-4 font-medium transition-colors relative ${
                activeTab === 'requests'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Requests
                {stats.pendingRequests > 0 && (
                  <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    {stats.pendingRequests}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'discover' && renderDiscoverCreators()}
        {activeTab === 'requests' && renderRequests()}
      </div>
    </div>
  );
}
