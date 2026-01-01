import React, { useState } from 'react';
import {
  ArrowLeft, Users, Gift, Camera, TrendingUp, Star, Plus,
  Filter, Search, Eye, Edit, CheckCircle, Clock, XCircle,
  Instagram, Youtube, MessageCircle, ChevronRight, DollarSign
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminBarterCampaigns = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');

  const stats = {
    activeCampaigns: 12,
    totalInfluencers: 156,
    contentSubmitted: 89,
    estimatedReach: '2.4M',
    savedVsAds: 450000
  };

  const campaigns = [
    {
      id: 1,
      name: 'New Restaurant Launch - Koramangala',
      merchant: 'Spice Garden',
      type: 'food',
      barterValue: 5000,
      influencersNeeded: 10,
      influencersAssigned: 8,
      contentReceived: 5,
      platform: ['instagram', 'youtube'],
      status: 'active',
      deadline: '2024-01-25'
    },
    {
      id: 2,
      name: 'Salon Grand Opening',
      merchant: 'Glam Studio',
      type: 'beauty',
      barterValue: 3000,
      influencersNeeded: 5,
      influencersAssigned: 5,
      contentReceived: 3,
      platform: ['instagram'],
      status: 'active',
      deadline: '2024-01-22'
    },
    {
      id: 3,
      name: 'Fitness Center Review',
      merchant: 'PowerFit Gym',
      type: 'fitness',
      barterValue: 8000,
      influencersNeeded: 8,
      influencersAssigned: 8,
      contentReceived: 8,
      platform: ['instagram', 'youtube'],
      status: 'completed',
      deadline: '2024-01-15'
    },
    {
      id: 4,
      name: 'Weekend Brunch Feature',
      merchant: 'The Breakfast Club',
      type: 'food',
      barterValue: 2500,
      influencersNeeded: 6,
      influencersAssigned: 4,
      contentReceived: 0,
      platform: ['instagram'],
      status: 'pending_approval',
      deadline: '2024-01-30'
    }
  ];

  const influencers = [
    {
      id: 1,
      name: 'Priya Foodie',
      handle: '@priya_eats',
      platform: 'instagram',
      followers: '125K',
      engagementRate: 4.2,
      niche: 'Food',
      completedCampaigns: 12,
      rating: 4.8,
      status: 'available'
    },
    {
      id: 2,
      name: 'FitnessByRahul',
      handle: '@fitness_rahul',
      platform: 'youtube',
      followers: '89K',
      engagementRate: 5.1,
      niche: 'Fitness',
      completedCampaigns: 8,
      rating: 4.5,
      status: 'busy'
    },
    {
      id: 3,
      name: 'BeautyByNeha',
      handle: '@neha_glam',
      platform: 'instagram',
      followers: '210K',
      engagementRate: 3.8,
      niche: 'Beauty',
      completedCampaigns: 15,
      rating: 4.9,
      status: 'available'
    }
  ];

  const pendingContent = [
    {
      id: 1,
      influencer: 'Priya Foodie',
      campaign: 'New Restaurant Launch',
      merchant: 'Spice Garden',
      submittedAt: '2 hours ago',
      type: 'Reel',
      platform: 'Instagram'
    },
    {
      id: 2,
      influencer: 'BeautyByNeha',
      campaign: 'Salon Grand Opening',
      merchant: 'Glam Studio',
      submittedAt: '5 hours ago',
      type: 'Story + Post',
      platform: 'Instagram'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400';
      case 'completed': return 'bg-blue-500/20 text-blue-400';
      case 'pending_approval': return 'bg-yellow-500/20 text-yellow-400';
      case 'cancelled': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'instagram': return <Instagram size={16} className="text-pink-400" />;
      case 'youtube': return <Youtube size={16} className="text-red-400" />;
      default: return <MessageCircle size={16} className="text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Barter Campaigns</h1>
              <p className="text-pink-200 text-sm">Influencer marketing management</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg">
            <Plus size={24} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{stats.activeCampaigns}</p>
            <p className="text-xs text-pink-200">Active</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{stats.totalInfluencers}</p>
            <p className="text-xs text-pink-200">Influencers</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{stats.estimatedReach}</p>
            <p className="text-xs text-pink-200">Est. Reach</p>
          </div>
        </div>
      </div>

      {/* Savings Banner */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-400 font-bold">Cost Savings vs Paid Ads</p>
              <p className="text-gray-300 text-sm">Through barter campaigns this month</p>
            </div>
            <p className="text-2xl font-bold text-green-400">₹{(stats.savedVsAds/1000).toFixed(0)}K</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {[
            { id: 'active', label: 'Active' },
            { id: 'pending', label: 'Pending Content' },
            { id: 'influencers', label: 'Influencers' },
            { id: 'completed', label: 'Completed' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === tab.id
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Campaigns List */}
      {(activeTab === 'active' || activeTab === 'completed') && (
        <div className="px-4 space-y-3">
          {campaigns
            .filter(c => activeTab === 'active' ? c.status === 'active' || c.status === 'pending_approval' : c.status === 'completed')
            .map(campaign => (
              <div key={campaign.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-white font-bold">{campaign.name}</p>
                    <p className="text-gray-400 text-sm">{campaign.merchant}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(campaign.status)}`}>
                    {campaign.status.replace('_', ' ')}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3 text-sm">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-gray-400 text-xs">Barter Value</p>
                    <p className="text-green-400 font-bold">₹{campaign.barterValue}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-gray-400 text-xs">Influencers</p>
                    <p className="text-white font-bold">{campaign.influencersAssigned}/{campaign.influencersNeeded}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-gray-400 text-xs">Content</p>
                    <p className="text-white font-bold">{campaign.contentReceived}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {campaign.platform.map(p => (
                      <span key={p}>{getPlatformIcon(p)}</span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs">Deadline: {campaign.deadline}</span>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Pending Content */}
      {activeTab === 'pending' && (
        <div className="px-4 space-y-3">
          {pendingContent.map(content => (
            <div key={content.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-white font-bold">{content.influencer}</p>
                  <p className="text-gray-400 text-sm">{content.campaign}</p>
                  <p className="text-gray-500 text-xs">{content.merchant}</p>
                </div>
                <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs">
                  Pending Review
                </span>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Camera size={16} className="text-pink-400 mr-2" />
                    <span className="text-white">{content.type}</span>
                  </div>
                  <span className="text-gray-400">{content.platform}</span>
                </div>
                <p className="text-gray-500 text-xs mt-1">Submitted {content.submittedAt}</p>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                  <CheckCircle size={16} className="mr-1" />
                  Approve
                </button>
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                  <Eye size={16} className="mr-1" />
                  Preview
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                  <XCircle size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Influencers List */}
      {activeTab === 'influencers' && (
        <div className="px-4 space-y-3">
          {influencers.map(influencer => (
            <div key={influencer.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold">{influencer.name}</p>
                    <p className="text-pink-400 text-sm">{influencer.handle}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  influencer.status === 'available' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {influencer.status}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-3 text-sm">
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">{influencer.followers}</p>
                  <p className="text-gray-400 text-xs">Followers</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">{influencer.engagementRate}%</p>
                  <p className="text-gray-400 text-xs">Engagement</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">{influencer.completedCampaigns}</p>
                  <p className="text-gray-400 text-xs">Campaigns</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <div className="flex items-center justify-center">
                    <Star size={12} className="text-yellow-400 mr-1" />
                    <span className="text-white font-bold">{influencer.rating}</span>
                  </div>
                  <p className="text-gray-400 text-xs">Rating</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {getPlatformIcon(influencer.platform)}
                  <span className="text-gray-400 text-sm ml-2">{influencer.niche}</span>
                </div>
                <button className="text-pink-400 text-sm">View Profile →</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminBarterCampaigns;
