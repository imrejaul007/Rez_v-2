import React, { useState } from 'react';
import {
  Camera, Video, Star, Image, Instagram, Youtube,
  TrendingUp, Users, Heart, MessageCircle, Share2,
  Plus, Filter, Search, Clock, CheckCircle, XCircle,
  Edit, Trash2, Eye, DollarSign, Gift, Coins,
  Target, Calendar, AlertCircle, Award, Crown,
  BarChart3, TrendingDown, RefreshCw, Flag
} from 'lucide-react';
import MerchantNav from '../../components/MerchantNav';

const MerchantUGCCampaigns = () => {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock UGC campaigns data
  const campaigns = [
    {
      id: 'UGC001',
      name: 'Winter Collection Launch',
      type: 'hybrid',
      status: 'active',
      objective: 'product_reviews',
      contentType: ['photos', 'videos', 'instagram'],
      hashtags: ['#WinterVibes2024', '#FashionGoals'],
      rewards: {
        primary: { type: 'rez_coins', amount: 500 },
        secondary: { type: 'paid', amount: 200 }
      },
      budget: 50000,
      spent: 32400,
      duration: { start: '2024-01-01', end: '2024-02-28' },
      submissions: {
        total: 156,
        pending: 23,
        approved: 118,
        rejected: 15
      },
      performance: {
        reach: 245000,
        impressions: 890000,
        engagement: 45600,
        engagementRate: 5.12,
        conversions: 234,
        roi: 3.4
      },
      eligibility: {
        minFollowers: 1000,
        minEngagementRate: 2.5
      },
      topCreators: [
        { name: 'Sarah Fashion', followers: 45000, submissions: 8, engagement: 12500 },
        { name: 'Style Maven', followers: 32000, submissions: 6, engagement: 9800 }
      ]
    },
    {
      id: 'UGC002',
      name: 'Product Unboxing Challenge',
      type: 'barter',
      status: 'active',
      objective: 'unboxing_videos',
      contentType: ['videos', 'youtube'],
      hashtags: ['#UnboxWithUs', '#BrandExperience'],
      rewards: {
        primary: { type: 'barter', value: 'Free Premium Product Bundle' }
      },
      budget: 25000,
      spent: 18500,
      duration: { start: '2024-01-15', end: '2024-02-15' },
      submissions: {
        total: 42,
        pending: 8,
        approved: 31,
        rejected: 3
      },
      performance: {
        reach: 156000,
        impressions: 520000,
        engagement: 28900,
        engagementRate: 5.56,
        conversions: 87,
        roi: 2.8
      },
      eligibility: {
        minFollowers: 5000,
        minEngagementRate: 3.0
      },
      topCreators: [
        { name: 'Tech Unboxer', followers: 78000, submissions: 3, engagement: 18900 }
      ]
    },
    {
      id: 'UGC003',
      name: 'Customer Testimonials',
      type: 'brand_coins',
      status: 'draft',
      objective: 'testimonials',
      contentType: ['videos', 'photos', 'reviews'],
      hashtags: ['#HappyCustomer', '#MyStory'],
      rewards: {
        primary: { type: 'brand_coins', amount: 1000 }
      },
      budget: 15000,
      spent: 0,
      duration: { start: '2024-02-01', end: '2024-03-31' },
      submissions: {
        total: 0,
        pending: 0,
        approved: 0,
        rejected: 0
      },
      performance: {
        reach: 0,
        impressions: 0,
        engagement: 0,
        engagementRate: 0,
        conversions: 0,
        roi: 0
      },
      eligibility: {
        minFollowers: 500,
        minEngagementRate: 1.5
      },
      topCreators: []
    },
    {
      id: 'UGC004',
      name: 'Privé Member Exclusive',
      type: 'prive_coins',
      status: 'completed',
      objective: 'photos',
      contentType: ['photos', 'instagram'],
      hashtags: ['#PrivéExclusive', '#LuxuryLifestyle'],
      rewards: {
        primary: { type: 'prive_coins', amount: 2000 }
      },
      budget: 40000,
      spent: 40000,
      duration: { start: '2023-12-01', end: '2024-01-15' },
      submissions: {
        total: 89,
        pending: 0,
        approved: 84,
        rejected: 5
      },
      performance: {
        reach: 320000,
        impressions: 1200000,
        engagement: 72000,
        engagementRate: 6.0,
        conversions: 456,
        roi: 4.2
      },
      eligibility: {
        minFollowers: 10000,
        minEngagementRate: 4.0
      },
      topCreators: [
        { name: 'Luxury Living', followers: 125000, submissions: 5, engagement: 28000 },
        { name: 'Elite Lifestyle', followers: 98000, submissions: 4, engagement: 22000 }
      ]
    }
  ];

  // Mock submissions data
  const submissions = [
    {
      id: 'SUB001',
      campaignId: 'UGC001',
      campaignName: 'Winter Collection Launch',
      creator: {
        name: 'Sarah Fashion',
        username: '@sarahfashion',
        avatar: '👩',
        followers: 45000,
        engagementRate: 5.2
      },
      contentType: 'instagram',
      submittedAt: '2024-01-20 14:30',
      status: 'pending',
      content: {
        caption: 'Loving this winter collection! The quality is amazing #WinterVibes2024',
        platform: 'Instagram',
        url: 'instagram.com/p/xyz123'
      },
      metrics: {
        likes: 2340,
        comments: 156,
        shares: 89,
        reach: 34000
      },
      reward: { type: 'rez_coins', amount: 500 }
    },
    {
      id: 'SUB002',
      campaignId: 'UGC001',
      campaignName: 'Winter Collection Launch',
      creator: {
        name: 'Style Maven',
        username: '@stylemaven',
        avatar: '👨',
        followers: 32000,
        engagementRate: 4.8
      },
      contentType: 'video',
      submittedAt: '2024-01-19 16:45',
      status: 'approved',
      content: {
        caption: 'Check out my styling tips with this winter collection!',
        platform: 'Instagram Reels',
        url: 'instagram.com/reel/abc456'
      },
      metrics: {
        likes: 5600,
        comments: 234,
        shares: 178,
        reach: 56000
      },
      reward: { type: 'rez_coins', amount: 500 }
    },
    {
      id: 'SUB003',
      campaignId: 'UGC002',
      campaignName: 'Product Unboxing Challenge',
      creator: {
        name: 'Tech Unboxer',
        username: '@techunboxer',
        avatar: '🧑',
        followers: 78000,
        engagementRate: 6.2
      },
      contentType: 'youtube',
      submittedAt: '2024-01-18 10:20',
      status: 'approved',
      content: {
        caption: 'Epic unboxing experience! Premium quality products',
        platform: 'YouTube',
        url: 'youtube.com/watch?v=def789'
      },
      metrics: {
        likes: 8900,
        comments: 456,
        shares: 234,
        reach: 98000
      },
      reward: { type: 'barter', value: 'Premium Product Bundle' }
    },
    {
      id: 'SUB004',
      campaignId: 'UGC001',
      campaignName: 'Winter Collection Launch',
      creator: {
        name: 'Fashion Blogger',
        username: '@fashionblogger',
        avatar: '👩',
        followers: 12000,
        engagementRate: 3.5
      },
      contentType: 'photo',
      submittedAt: '2024-01-21 09:15',
      status: 'rejected',
      content: {
        caption: 'New outfit vibes',
        platform: 'Instagram',
        url: 'instagram.com/p/ghi012'
      },
      metrics: {
        likes: 890,
        comments: 23,
        shares: 12,
        reach: 8900
      },
      reward: { type: 'rez_coins', amount: 500 },
      rejectionReason: 'Does not meet campaign hashtag requirements'
    }
  ];

  const getCampaignTypeColor = (type) => {
    const colors = {
      paid: 'bg-green-100 text-green-800',
      barter: 'bg-purple-100 text-purple-800',
      rez_coins: 'bg-blue-100 text-blue-800',
      brand_coins: 'bg-orange-100 text-orange-800',
      prive_coins: 'bg-yellow-100 text-yellow-800',
      hybrid: 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      draft: 'bg-gray-100 text-gray-800',
      completed: 'bg-blue-100 text-blue-800',
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getRewardIcon = (type) => {
    const icons = {
      paid: DollarSign,
      barter: Gift,
      rez_coins: Coins,
      brand_coins: Award,
      prive_coins: Crown
    };
    return icons[type] || Coins;
  };

  const filteredCampaigns = campaigns.filter(campaign =>
    filterStatus === 'all' || campaign.status === filterStatus
  );

  const filteredSubmissions = submissions.filter(sub =>
    filterStatus === 'all' || sub.status === filterStatus
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">UGC Campaign Management</h1>
          <p className="text-gray-600">Create and manage user-generated content campaigns</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Campaigns</p>
                <p className="text-2xl font-bold text-gray-900">
                  {campaigns.filter(c => c.status === 'active').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Submissions</p>
                <p className="text-2xl font-bold text-gray-900">
                  {campaigns.reduce((sum, c) => sum + c.submissions.total, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Camera className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending Review</p>
                <p className="text-2xl font-bold text-gray-900">
                  {campaigns.reduce((sum, c) => sum + c.submissions.pending, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg ROI</p>
                <p className="text-2xl font-bold text-gray-900">
                  {(campaigns.reduce((sum, c) => sum + c.performance.roi, 0) / campaigns.filter(c => c.performance.roi > 0).length).toFixed(1)}x
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'campaigns'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4" />
                  <span>Campaigns</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('submissions')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'submissions'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4" />
                  <span>Submissions</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('performance')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'performance'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>Performance</span>
                </div>
              </button>
            </nav>
          </div>

          {/* Campaigns Tab */}
          {activeTab === 'campaigns' && (
            <div className="p-6">
              {/* Actions Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search campaigns..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="draft">Draft</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Plus className="w-5 h-5" />
                  <span>Create Campaign</span>
                </button>
              </div>

              {/* Campaigns List */}
              <div className="space-y-4">
                {filteredCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                            {campaign.status}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCampaignTypeColor(campaign.type)}`}>
                            {campaign.type.replace('_', ' ')}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{campaign.duration.start} - {campaign.duration.end}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            <span>₹{campaign.spent.toLocaleString()} / ₹{campaign.budget.toLocaleString()}</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Campaign Details */}
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Submissions</p>
                        <p className="text-xl font-bold text-gray-900">{campaign.submissions.total}</p>
                        <p className="text-xs text-yellow-600">{campaign.submissions.pending} pending</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Reach</p>
                        <p className="text-xl font-bold text-gray-900">
                          {(campaign.performance.reach / 1000).toFixed(0)}K
                        </p>
                        <p className="text-xs text-gray-600">
                          {(campaign.performance.impressions / 1000).toFixed(0)}K impressions
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Engagement</p>
                        <p className="text-xl font-bold text-gray-900">{campaign.performance.engagementRate}%</p>
                        <p className="text-xs text-gray-600">
                          {(campaign.performance.engagement / 1000).toFixed(1)}K interactions
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">ROI</p>
                        <p className="text-xl font-bold text-green-600">{campaign.performance.roi}x</p>
                        <p className="text-xs text-gray-600">{campaign.performance.conversions} conversions</p>
                      </div>
                    </div>

                    {/* Hashtags and Rewards */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {campaign.hashtags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        {campaign.rewards.primary && (
                          <div className="flex items-center space-x-1 text-gray-700">
                            {React.createElement(getRewardIcon(campaign.rewards.primary.type), { className: "w-4 h-4" })}
                            <span>
                              {campaign.rewards.primary.amount ?
                                `${campaign.rewards.primary.amount} ${campaign.rewards.primary.type.replace('_', ' ')}` :
                                campaign.rewards.primary.value
                              }
                            </span>
                          </div>
                        )}
                        {campaign.rewards.secondary && (
                          <div className="flex items-center space-x-1 text-gray-700">
                            <span>+</span>
                            {React.createElement(getRewardIcon(campaign.rewards.secondary.type), { className: "w-4 h-4" })}
                            <span>₹{campaign.rewards.secondary.amount}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submissions Tab */}
          {activeTab === 'submissions' && (
            <div className="p-6">
              {/* Filter Bar */}
              <div className="flex items-center space-x-4 mb-6">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Submissions</option>
                  <option value="pending">Pending Review</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              {/* Submissions List */}
              <div className="space-y-4">
                {filteredSubmissions.map((submission) => (
                  <div key={submission.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">{submission.creator.avatar}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{submission.creator.name}</h3>
                          <p className="text-sm text-gray-600">{submission.creator.username}</p>
                          <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                            <span>{submission.creator.followers.toLocaleString()} followers</span>
                            <span>{submission.creator.engagementRate}% engagement</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                        {submission.status}
                      </span>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{submission.campaignName}</p>
                          <p className="text-xs text-gray-600">{submission.content.platform}</p>
                        </div>
                        <span className="text-xs text-gray-500">{submission.submittedAt}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{submission.content.caption}</p>
                      <a href="#" className="text-sm text-blue-600 hover:underline">{submission.content.url}</a>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-gray-700">{submission.metrics.likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-700">{submission.metrics.comments.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Share2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{submission.metrics.shares.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-700">{submission.metrics.reach.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    {submission.status === 'pending' && (
                      <div className="flex items-center space-x-3">
                        <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Approve</span>
                        </button>
                        <button className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center justify-center space-x-2">
                          <RefreshCw className="w-4 h-4" />
                          <span>Request Revision</span>
                        </button>
                        <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center space-x-2">
                          <XCircle className="w-4 h-4" />
                          <span>Reject</span>
                        </button>
                      </div>
                    )}

                    {submission.status === 'approved' && (
                      <div className="flex items-center justify-between bg-green-50 rounded-lg p-3">
                        <span className="text-sm text-green-800 flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Content approved and reward distributed</span>
                        </span>
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 flex items-center space-x-1">
                          <Flag className="w-4 h-4" />
                          <span>Feature</span>
                        </button>
                      </div>
                    )}

                    {submission.status === 'rejected' && (
                      <div className="bg-red-50 rounded-lg p-3">
                        <p className="text-sm text-red-800 flex items-center space-x-2">
                          <XCircle className="w-4 h-4" />
                          <span>Rejected: {submission.rejectionReason}</span>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Performance Tab */}
          {activeTab === 'performance' && (
            <div className="p-6">
              <div className="space-y-6">
                {/* Overall Performance */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall UGC Performance</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Reach</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {(campaigns.reduce((sum, c) => sum + c.performance.reach, 0) / 1000000).toFixed(2)}M
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Impressions</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {(campaigns.reduce((sum, c) => sum + c.performance.impressions, 0) / 1000000).toFixed(2)}M
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Engagement</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {(campaigns.reduce((sum, c) => sum + c.performance.engagement, 0) / 1000).toFixed(0)}K
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Conversions</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {campaigns.reduce((sum, c) => sum + c.performance.conversions, 0)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Campaign Performance Breakdown */}
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                        {campaign.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      {/* Metrics */}
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-600">Reach</p>
                          <p className="text-xl font-bold text-gray-900">
                            {(campaign.performance.reach / 1000).toFixed(0)}K
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Impressions</p>
                          <p className="text-xl font-bold text-gray-900">
                            {(campaign.performance.impressions / 1000).toFixed(0)}K
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Engagement Rate</p>
                          <p className="text-xl font-bold text-green-600">{campaign.performance.engagementRate}%</p>
                        </div>
                      </div>

                      {/* Conversions & ROI */}
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-600">Conversions</p>
                          <p className="text-xl font-bold text-gray-900">{campaign.performance.conversions}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">ROI</p>
                          <p className="text-xl font-bold text-purple-600">{campaign.performance.roi}x</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Budget Spent</p>
                          <p className="text-xl font-bold text-gray-900">
                            {((campaign.spent / campaign.budget) * 100).toFixed(0)}%
                          </p>
                        </div>
                      </div>

                      {/* Top Creators */}
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Top Creators</p>
                        {campaign.topCreators.length > 0 ? (
                          <div className="space-y-2">
                            {campaign.topCreators.map((creator, idx) => (
                              <div key={idx} className="bg-gray-50 rounded-lg p-2">
                                <p className="text-sm font-medium text-gray-900">{creator.name}</p>
                                <div className="flex items-center justify-between text-xs text-gray-600 mt-1">
                                  <span>{creator.submissions} posts</span>
                                  <span>{(creator.engagement / 1000).toFixed(1)}K engagement</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500">No data yet</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Campaign Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Create UGC Campaign</h2>
            </div>
            <div className="p-6 space-y-6">
              {/* Campaign Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Paid', 'Barter', 'ReZ Coins', 'Brand Coins', 'Privé Coins', 'Hybrid'].map((type) => (
                    <button
                      key={type}
                      className="px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-sm font-medium"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Campaign Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
                <input
                  type="text"
                  placeholder="e.g., Summer Collection Launch"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Objectives */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Objective</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Product Reviews</option>
                  <option>Unboxing Videos</option>
                  <option>Photos</option>
                  <option>Stories</option>
                  <option>Testimonials</option>
                </select>
              </div>

              {/* Content Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Photos', 'Videos', 'Reviews', 'Instagram Posts', 'YouTube Videos', 'Stories'].map((type) => (
                    <label key={type} className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reward Configuration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reward Structure</label>
                <div className="space-y-3">
                  <input
                    type="number"
                    placeholder="Reward amount"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Additional rewards (optional)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Budget & Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                  <input
                    type="number"
                    placeholder="₹50,000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration (days)</label>
                  <input
                    type="number"
                    placeholder="30"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Hashtags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Hashtags</label>
                <input
                  type="text"
                  placeholder="#MyBrandExperience #SummerVibes"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Eligibility Criteria */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Creator Eligibility</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="number"
                      placeholder="Min followers"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Min engagement rate %"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Content Guidelines */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Guidelines</label>
                <textarea
                  rows="4"
                  placeholder="Describe what creators should include in their content..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                Save as Draft
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Create & Launch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantUGCCampaigns;
