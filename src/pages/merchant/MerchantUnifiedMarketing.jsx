import React, { useState } from 'react';
import {
  ArrowLeft, Megaphone, TrendingUp, DollarSign, Target,
  Facebook, Instagram, Mail, MessageSquare, Phone, QrCode,
  MapPin, Users, Zap, BarChart2, Eye, MousePointer,
  ShoppingCart, ChevronRight, Plus, Play, Pause, Settings,
  Calendar, Filter, Download, RefreshCw, CheckCircle, Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantUnifiedMarketing = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [showNewCampaignModal, setShowNewCampaignModal] = useState(false);

  const overallStats = {
    totalSpend: 125000,
    totalRevenue: 456000,
    roas: 3.65,
    activeCampaigns: 12,
    impressions: 2345678,
    clicks: 45678,
    conversions: 1234,
    ctr: 1.95
  };

  const channelPerformance = [
    {
      id: 'inapp',
      name: 'In-App Ads',
      icon: Zap,
      color: 'purple',
      spend: 25000,
      revenue: 89000,
      roas: 3.56,
      impressions: 567890,
      clicks: 12345,
      conversions: 345,
      status: 'active',
      campaigns: 3
    },
    {
      id: 'meta',
      name: 'Meta (FB/IG)',
      icon: Facebook,
      color: 'blue',
      spend: 35000,
      revenue: 125000,
      roas: 3.57,
      impressions: 890123,
      clicks: 15678,
      conversions: 412,
      status: 'active',
      campaigns: 4
    },
    {
      id: 'google',
      name: 'Google Ads',
      icon: Target,
      color: 'red',
      spend: 30000,
      revenue: 98000,
      roas: 3.27,
      impressions: 456789,
      clicks: 8934,
      conversions: 289,
      status: 'active',
      campaigns: 2
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: MessageSquare,
      color: 'green',
      spend: 15000,
      revenue: 78000,
      roas: 5.20,
      impressions: 234567,
      clicks: 5678,
      conversions: 156,
      status: 'active',
      campaigns: 2
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      color: 'orange',
      spend: 5000,
      revenue: 34000,
      roas: 6.80,
      impressions: 123456,
      clicks: 2345,
      conversions: 89,
      status: 'active',
      campaigns: 1
    },
    {
      id: 'sms',
      name: 'SMS',
      icon: Phone,
      color: 'cyan',
      spend: 8000,
      revenue: 23000,
      roas: 2.88,
      impressions: 45678,
      clicks: 1234,
      conversions: 45,
      status: 'paused',
      campaigns: 1
    },
    {
      id: 'offline',
      name: 'Offline (QR)',
      icon: QrCode,
      color: 'pink',
      spend: 7000,
      revenue: 45000,
      roas: 6.43,
      impressions: 12345,
      clicks: 2456,
      conversions: 123,
      status: 'active',
      campaigns: 2
    }
  ];

  const activeCampaigns = [
    {
      id: 1,
      name: 'Diwali Festival Sale',
      channels: ['meta', 'google', 'whatsapp'],
      status: 'active',
      budget: 50000,
      spent: 35000,
      revenue: 125000,
      roas: 3.57,
      startDate: '2024-10-25',
      endDate: '2024-11-05'
    },
    {
      id: 2,
      name: 'New Customer Acquisition',
      channels: ['inapp', 'meta'],
      status: 'active',
      budget: 30000,
      spent: 18000,
      revenue: 67000,
      roas: 3.72,
      startDate: '2024-11-01',
      endDate: '2024-11-30'
    },
    {
      id: 3,
      name: 'Weekend Flash Sale',
      channels: ['whatsapp', 'email', 'sms'],
      status: 'scheduled',
      budget: 15000,
      spent: 0,
      revenue: 0,
      roas: 0,
      startDate: '2024-11-09',
      endDate: '2024-11-10'
    },
    {
      id: 4,
      name: 'Loyalty Member Exclusive',
      channels: ['email', 'whatsapp'],
      status: 'active',
      budget: 10000,
      spent: 8500,
      revenue: 45000,
      roas: 5.29,
      startDate: '2024-10-15',
      endDate: '2024-11-15'
    }
  ];

  const audienceSegments = [
    { id: 1, name: 'All Customers', size: 12456, active: true },
    { id: 2, name: 'Loyal Customers', size: 3456, active: true },
    { id: 3, name: 'Dormant (30+ days)', size: 2345, active: false },
    { id: 4, name: 'High Spenders', size: 890, active: true },
    { id: 5, name: 'New (Last 7 days)', size: 234, active: true },
    { id: 6, name: 'Birthday This Month', size: 156, active: true }
  ];

  const getChannelIcon = (channelId) => {
    const channel = channelPerformance.find(c => c.id === channelId);
    return channel?.icon || Zap;
  };

  const getChannelColor = (channelId) => {
    const channel = channelPerformance.find(c => c.id === channelId);
    return channel?.color || 'gray';
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Megaphone size={24} className="mr-2" />
                Marketing Hub
              </h1>
              <p className="text-purple-200 text-sm">All channels, one dashboard</p>
            </div>
          </div>
          <button
            onClick={() => setShowNewCampaignModal(true)}
            className="bg-white text-purple-600 px-4 py-2 rounded-lg font-bold text-sm flex items-center"
          >
            <Plus size={16} className="mr-1" />
            Campaign
          </button>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(overallStats.totalSpend/1000).toFixed(0)}K</p>
            <p className="text-xs text-purple-200">Spent</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(overallStats.totalRevenue/1000).toFixed(0)}K</p>
            <p className="text-xs text-purple-200">Revenue</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-300">{overallStats.roas}x</p>
            <p className="text-xs text-purple-200">ROAS</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{overallStats.activeCampaigns}</p>
            <p className="text-xs text-purple-200">Active</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'channels', label: 'Channels' },
            { id: 'campaigns', label: 'Campaigns' },
            { id: 'audience', label: 'Audience' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-purple-600 text-white' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="px-4 space-y-4">
          {/* Period Selector */}
          <div className="flex space-x-2">
            {['24h', '7d', '30d', '90d'].map(period => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  selectedPeriod === period ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400'
                }`}
              >
                {period}
              </button>
            ))}
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Eye size={18} className="text-blue-400" />
                <span className="text-green-400 text-xs">+15%</span>
              </div>
              <p className="text-white font-bold text-xl">{(overallStats.impressions/1000000).toFixed(2)}M</p>
              <p className="text-gray-400 text-sm">Impressions</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <MousePointer size={18} className="text-purple-400" />
                <span className="text-green-400 text-xs">+8%</span>
              </div>
              <p className="text-white font-bold text-xl">{(overallStats.clicks/1000).toFixed(1)}K</p>
              <p className="text-gray-400 text-sm">Clicks</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <ShoppingCart size={18} className="text-green-400" />
                <span className="text-green-400 text-xs">+22%</span>
              </div>
              <p className="text-white font-bold text-xl">{overallStats.conversions}</p>
              <p className="text-gray-400 text-sm">Conversions</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Target size={18} className="text-orange-400" />
                <span className="text-green-400 text-xs">+0.2%</span>
              </div>
              <p className="text-white font-bold text-xl">{overallStats.ctr}%</p>
              <p className="text-gray-400 text-sm">CTR</p>
            </div>
          </div>

          {/* Channel Performance Quick View */}
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-bold">Channel Performance</h3>
              <button className="text-purple-400 text-sm">View All</button>
            </div>
            <div className="space-y-3">
              {channelPerformance.slice(0, 4).map(channel => {
                const Icon = channel.icon;
                return (
                  <div key={channel.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 bg-${channel.color}-500/20 rounded-lg flex items-center justify-center mr-3`}>
                        <Icon size={16} className={`text-${channel.color}-400`} />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{channel.name}</p>
                        <p className="text-gray-400 text-xs">₹{(channel.spend/1000).toFixed(0)}K spent</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold">{channel.roas}x</p>
                      <p className="text-gray-400 text-xs">ROAS</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Campaigns */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Active Campaigns</h3>
            <div className="space-y-3">
              {activeCampaigns.filter(c => c.status === 'active').slice(0, 3).map(campaign => (
                <div key={campaign.id} className="bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">{campaign.name}</h4>
                    <span className="text-green-400 text-sm">{campaign.roas}x ROAS</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    {campaign.channels.map(ch => {
                      const Icon = getChannelIcon(ch);
                      return (
                        <div key={ch} className={`w-6 h-6 bg-${getChannelColor(ch)}-500/20 rounded flex items-center justify-center`}>
                          <Icon size={12} className={`text-${getChannelColor(ch)}-400`} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">₹{(campaign.spent/1000).toFixed(0)}K / ₹{(campaign.budget/1000).toFixed(0)}K</span>
                    <span className="text-white">₹{(campaign.revenue/1000).toFixed(0)}K revenue</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Channels Tab */}
      {activeTab === 'channels' && (
        <div className="px-4 space-y-4">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
            <p className="text-purple-400 font-medium">Unified Channel Control</p>
            <p className="text-gray-300 text-sm mt-1">
              Manage all marketing channels from one place. No need to log into Meta, Google, or WhatsApp separately.
            </p>
          </div>

          {channelPerformance.map(channel => {
            const Icon = channel.icon;
            return (
              <div key={channel.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-${channel.color}-500/20 rounded-xl flex items-center justify-center mr-3`}>
                      <Icon size={24} className={`text-${channel.color}-400`} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{channel.name}</h3>
                      <p className="text-gray-400 text-sm">{channel.campaigns} active campaigns</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    channel.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {channel.status}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">₹{(channel.spend/1000).toFixed(0)}K</p>
                    <p className="text-gray-400 text-xs">Spent</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">₹{(channel.revenue/1000).toFixed(0)}K</p>
                    <p className="text-gray-400 text-xs">Revenue</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-green-400 font-bold">{channel.roas}x</p>
                    <p className="text-gray-400 text-xs">ROAS</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{channel.conversions}</p>
                    <p className="text-gray-400 text-xs">Conv.</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => navigate(`/merchant/${channel.id}-ads`)}
                    className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm"
                  >
                    Manage
                  </button>
                  <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-sm">
                    + Campaign
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Campaigns Tab */}
      {activeTab === 'campaigns' && (
        <div className="px-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm">All</button>
              <button className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg text-sm">Active</button>
              <button className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg text-sm">Scheduled</button>
            </div>
            <button
              onClick={() => setShowNewCampaignModal(true)}
              className="bg-purple-600 text-white p-2 rounded-lg"
            >
              <Plus size={18} />
            </button>
          </div>

          {activeCampaigns.map(campaign => (
            <div key={campaign.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white font-bold">{campaign.name}</h3>
                  <p className="text-gray-400 text-sm">{campaign.startDate} → {campaign.endDate}</p>
                </div>
                <span className={`px-2 py-0.5 rounded text-xs ${
                  campaign.status === 'active' ? 'bg-green-500/20 text-green-400' :
                  campaign.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {campaign.status}
                </span>
              </div>

              {/* Channels */}
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-gray-400 text-sm">Channels:</span>
                {campaign.channels.map(ch => {
                  const Icon = getChannelIcon(ch);
                  const color = getChannelColor(ch);
                  return (
                    <div key={ch} className={`px-2 py-1 bg-${color}-500/20 rounded flex items-center`}>
                      <Icon size={12} className={`text-${color}-400 mr-1`} />
                      <span className={`text-${color}-400 text-xs`}>{ch}</span>
                    </div>
                  );
                })}
              </div>

              {/* Budget Progress */}
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Budget</span>
                  <span className="text-white">₹{(campaign.spent/1000).toFixed(0)}K / ₹{(campaign.budget/1000).toFixed(0)}K</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${(campaign.spent/campaign.budget)*100}%` }}
                  />
                </div>
              </div>

              {/* Performance */}
              {campaign.status === 'active' && (
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Revenue</p>
                    <p className="text-white font-bold">₹{(campaign.revenue/1000).toFixed(0)}K</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">ROAS</p>
                    <p className="text-green-400 font-bold">{campaign.roas}x</p>
                  </div>
                </div>
              )}

              <div className="flex space-x-2">
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                  <BarChart2 size={14} className="mr-1" />
                  Analytics
                </button>
                {campaign.status === 'active' ? (
                  <button className="flex-1 bg-yellow-600 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                    <Pause size={14} className="mr-1" />
                    Pause
                  </button>
                ) : campaign.status === 'scheduled' ? (
                  <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                    <Play size={14} className="mr-1" />
                    Start Now
                  </button>
                ) : (
                  <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                    <Play size={14} className="mr-1" />
                    Resume
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Audience Tab */}
      {activeTab === 'audience' && (
        <div className="px-4 space-y-4">
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Customer Segments</h3>
            <p className="text-gray-400 text-sm mb-4">
              Target specific customer groups across all channels
            </p>

            <div className="space-y-3">
              {audienceSegments.map(segment => (
                <div key={segment.id} className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center">
                    <Users size={18} className="text-purple-400 mr-3" />
                    <div>
                      <p className="text-white font-medium">{segment.name}</p>
                      <p className="text-gray-400 text-sm">{segment.size.toLocaleString()} customers</p>
                    </div>
                  </div>
                  <button className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm">
                    Target
                  </button>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 border border-purple-500 text-purple-400 py-2 rounded-lg text-sm flex items-center justify-center">
              <Plus size={16} className="mr-1" />
              Create Custom Segment
            </button>
          </div>

          {/* Lookalike Audiences */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Lookalike Audiences</h3>
            <p className="text-gray-400 text-sm mb-4">
              Find new customers similar to your best ones
            </p>

            <div className="space-y-3">
              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white font-medium">Similar to High Spenders</p>
                  <span className="text-green-400 text-sm">~5,000 reach</span>
                </div>
                <p className="text-gray-400 text-sm">Available on Meta, Google</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white font-medium">Similar to Loyal Customers</p>
                  <span className="text-green-400 text-sm">~12,000 reach</span>
                </div>
                <p className="text-gray-400 text-sm">Available on Meta, Google</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Campaign Modal */}
      {showNewCampaignModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="bg-gray-800 w-full rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto">
            <h3 className="text-white font-bold text-lg mb-4">Create Campaign</h3>

            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm block mb-1">Campaign Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                  placeholder="e.g., Winter Sale 2024"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-2">Select Channels</label>
                <div className="grid grid-cols-2 gap-2">
                  {channelPerformance.map(channel => {
                    const Icon = channel.icon;
                    return (
                      <button
                        key={channel.id}
                        className="bg-gray-700 rounded-lg p-3 flex items-center border-2 border-transparent hover:border-purple-500"
                      >
                        <Icon size={20} className={`text-${channel.color}-400 mr-2`} />
                        <span className="text-white text-sm">{channel.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Total Budget</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                  <input
                    type="number"
                    className="w-full bg-gray-700 rounded-lg pl-8 pr-4 py-3 text-white"
                    placeholder="50,000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-400 text-sm block mb-1">Start Date</label>
                  <input
                    type="date"
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm block mb-1">End Date</label>
                  <input
                    type="date"
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Target Audience</label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                  <option>All Customers</option>
                  <option>Loyal Customers</option>
                  <option>New Customers Only</option>
                  <option>Dormant Customers</option>
                  <option>High Spenders</option>
                </select>
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Campaign Goal</label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                  <option>Increase Sales</option>
                  <option>Brand Awareness</option>
                  <option>Customer Acquisition</option>
                  <option>Re-engage Dormant</option>
                  <option>Promote New Product</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowNewCampaignModal(false)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-bold">
                Create Campaign
              </button>
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantUnifiedMarketing;
