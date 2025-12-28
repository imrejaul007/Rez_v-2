import { useState } from 'react';
import {
  Megaphone, Smartphone, MessageCircle, Globe, MapPin, Target,
  TrendingUp, DollarSign, Users, Eye, MousePointer, Calendar,
  Plus, BarChart3, Zap, CheckCircle, XCircle, Clock, Award,
  Settings, Filter, Search, Download, Play, Pause, Edit
} from 'lucide-react';

const AdminMultiChannelMarketing = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedChannel, setSelectedChannel] = useState('all');

  // Multi-channel marketing overview
  const channelOverview = {
    totalBudget: 15000000, // ₹150L
    totalSpent: 12450000, // ₹124.5L
    totalReach: 2450000,
    totalConversions: 45600,
    totalRevenue: 45600000, // ₹4.56Cr
    roi: 366 // 366% ROI
  };

  // Marketing channels with performance
  const marketingChannels = [
    {
      id: 'in_app',
      name: 'In-App Ads',
      icon: Smartphone,
      color: 'purple',
      budget: 2500000, // ₹25L
      spent: 2340000, // ₹23.4L
      reach: 850000,
      impressions: 4500000,
      clicks: 225000,
      conversions: 15600,
      revenue: 18720000, // ₹1.87Cr
      ctr: 5.0,
      cpc: 10.4,
      roas: 800, // 800% Return on Ad Spend
      status: 'active',
      campaigns: 12
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Marketing',
      icon: MessageCircle,
      color: 'green',
      budget: 1500000, // ₹15L
      spent: 1234000, // ₹12.34L
      reach: 456000,
      messagesSeent: 456000,
      delivered: 445680,
      read: 334260,
      clicked: 66852,
      conversions: 8900,
      revenue: 11124000, // ₹1.11Cr
      readRate: 75,
      ctr: 20, // Click-through from read
      roas: 901,
      status: 'active',
      campaigns: 8
    },
    {
      id: 'google_ads',
      name: 'Google Ads',
      icon: Globe,
      color: 'blue',
      budget: 5000000, // ₹50L
      spent: 4890000, // ₹48.9L
      reach: 650000,
      impressions: 8900000,
      clicks: 178000,
      conversions: 12400,
      revenue: 14880000, // ₹1.49Cr
      ctr: 2.0,
      cpc: 27.5,
      qualityScore: 8.2,
      roas: 304,
      status: 'active',
      campaigns: 18
    },
    {
      id: 'meta_ads',
      name: 'Meta Ads (FB/Insta)',
      icon: Target,
      color: 'pink',
      budget: 4000000, // ₹40L
      spent: 3456000, // ₹34.56L
      reach: 380000,
      impressions: 5600000,
      clicks: 168000,
      conversions: 7200,
      revenue: 9360000, // ₹93.6L
      ctr: 3.0,
      cpc: 20.6,
      roas: 271,
      status: 'active',
      campaigns: 15
    },
    {
      id: 'offline',
      name: 'Offline Marketing',
      icon: MapPin,
      color: 'orange',
      budget: 2000000, // ₹20L
      spent: 1530000, // ₹15.3L
      reach: 114000,
      footfall: 45000,
      conversions: 1500,
      revenue: 1516000, // ₹15.16L
      conversionRate: 3.3,
      avgTicketSize: 1010,
      roas: 99,
      status: 'active',
      campaigns: 6
    }
  ];

  // Active campaigns across all channels
  const activeCampaigns = [
    {
      id: 'CAMP-001',
      name: 'Diwali Mega Sale 2024',
      channel: 'in_app',
      type: 'banner',
      placement: 'Home Feed',
      startDate: '2024-10-15',
      endDate: '2024-11-05',
      budget: 500000,
      spent: 456000,
      reach: 234000,
      impressions: 1200000,
      clicks: 60000,
      conversions: 4200,
      revenue: 5040000,
      ctr: 5.0,
      status: 'active',
      performance: 92
    },
    {
      id: 'CAMP-002',
      name: 'New User Welcome Offer',
      channel: 'whatsapp',
      type: 'automated',
      placement: 'Trigger-based',
      startDate: '2024-01-01',
      endDate: 'Ongoing',
      budget: 300000,
      spent: 267000,
      reach: 89000,
      delivered: 86970,
      read: 65228,
      clicked: 13046,
      conversions: 1780,
      revenue: 2136000,
      readRate: 75,
      status: 'active',
      performance: 89
    },
    {
      id: 'CAMP-003',
      name: 'Search Campaign - Fashion Keywords',
      channel: 'google_ads',
      type: 'search',
      placement: 'Google Search',
      startDate: '2024-08-01',
      endDate: '2024-12-31',
      budget: 1200000,
      spent: 1134000,
      reach: 145000,
      impressions: 2340000,
      clicks: 46800,
      conversions: 3200,
      revenue: 3840000,
      ctr: 2.0,
      status: 'active',
      performance: 85
    },
    {
      id: 'CAMP-004',
      name: 'Instagram Story Ads - GenZ',
      channel: 'meta_ads',
      type: 'story',
      placement: 'Instagram Stories',
      startDate: '2024-09-01',
      endDate: '2024-12-31',
      budget: 800000,
      spent: 756000,
      reach: 89000,
      impressions: 1340000,
      clicks: 40200,
      conversions: 1600,
      revenue: 2080000,
      ctr: 3.0,
      status: 'active',
      performance: 78
    },
    {
      id: 'CAMP-005',
      name: 'Metro Station Branding - Mumbai',
      channel: 'offline',
      type: 'ooh', // Out of Home
      placement: 'Mumbai Metro Stations',
      startDate: '2024-10-01',
      endDate: '2024-12-31',
      budget: 600000,
      spent: 450000,
      reach: 45000,
      footfall: 18000,
      conversions: 600,
      revenue: 606000,
      conversionRate: 3.3,
      status: 'active',
      performance: 67
    }
  ];

  // In-App Ad placements
  const inAppPlacements = [
    {
      id: 'home_banner',
      name: 'Home Feed Banner',
      position: 'Top of Feed',
      impressions: 1800000,
      clicks: 90000,
      ctr: 5.0,
      revenue: 7200000,
      activeCampaigns: 4
    },
    {
      id: 'category_banner',
      name: 'Category Page Banner',
      position: 'Above Products',
      impressions: 1200000,
      clicks: 48000,
      ctr: 4.0,
      revenue: 4320000,
      activeCampaigns: 3
    },
    {
      id: 'deal_spotlight',
      name: 'Deal Spotlight',
      position: 'Deals Section',
      impressions: 900000,
      clicks: 54000,
      ctr: 6.0,
      revenue: 4860000,
      activeCampaigns: 3
    },
    {
      id: 'push_notification',
      name: 'Push Notifications',
      position: 'Device Notification',
      sent: 600000,
      opened: 180000,
      openRate: 30.0,
      clicked: 33000,
      ctr: 18.3,
      revenue: 2340000,
      activeCampaigns: 2
    }
  ];

  // WhatsApp campaign types
  const whatsappCampaigns = [
    {
      id: 'wa_welcome',
      name: 'Welcome Series',
      type: 'automated',
      trigger: 'New signup',
      sent: 89000,
      delivered: 86970,
      read: 65228,
      clicked: 13046,
      conversions: 1780,
      revenue: 2136000,
      readRate: 75,
      status: 'active'
    },
    {
      id: 'wa_abandoned',
      name: 'Cart Abandonment',
      type: 'automated',
      trigger: 'Cart abandoned 2hrs',
      sent: 156000,
      delivered: 152460,
      read: 121968,
      clicked: 24394,
      conversions: 3412,
      revenue: 4094400,
      readRate: 80,
      status: 'active'
    },
    {
      id: 'wa_flash',
      name: 'Flash Sale Alerts',
      type: 'broadcast',
      trigger: 'Manual/Scheduled',
      sent: 211000,
      delivered: 206270,
      read: 144389,
      clicked: 28878,
      conversions: 3708,
      revenue: 4893600,
      readRate: 70,
      status: 'active'
    }
  ];

  // Google Ads campaign types
  const googleAdsCampaigns = [
    {
      id: 'g_search',
      name: 'Search Campaigns',
      type: 'Search',
      impressions: 4500000,
      clicks: 90000,
      conversions: 6200,
      ctr: 2.0,
      cpc: 27.5,
      qualityScore: 8.2,
      spend: 2475000,
      revenue: 7440000,
      roas: 301,
      keywords: 245
    },
    {
      id: 'g_display',
      name: 'Display Network',
      type: 'Display',
      impressions: 3200000,
      clicks: 64000,
      conversions: 4800,
      ctr: 2.0,
      cpc: 22.5,
      spend: 1440000,
      revenue: 5760000,
      roas: 400,
      placements: 1200
    },
    {
      id: 'g_shopping',
      name: 'Shopping Ads',
      type: 'Shopping',
      impressions: 1200000,
      clicks: 24000,
      conversions: 1400,
      ctr: 2.0,
      cpc: 41.2,
      spend: 989000,
      revenue: 1680000,
      roas: 170,
      products: 3400
    }
  ];

  // Meta Ads campaign types
  const metaAdsCampaigns = [
    {
      id: 'fb_feed',
      name: 'Facebook Feed Ads',
      platform: 'Facebook',
      placement: 'Feed',
      impressions: 2400000,
      clicks: 72000,
      conversions: 3200,
      ctr: 3.0,
      cpc: 20.6,
      spend: 1483200,
      revenue: 4160000,
      roas: 281
    },
    {
      id: 'ig_story',
      name: 'Instagram Stories',
      platform: 'Instagram',
      placement: 'Stories',
      impressions: 1800000,
      clicks: 54000,
      conversions: 2400,
      ctr: 3.0,
      cpc: 18.5,
      spend: 999000,
      revenue: 3120000,
      roas: 312
    },
    {
      id: 'ig_feed',
      name: 'Instagram Feed',
      platform: 'Instagram',
      placement: 'Feed',
      impressions: 1400000,
      clicks: 42000,
      conversions: 1600,
      ctr: 3.0,
      cpc: 22.8,
      spend: 957600,
      revenue: 2080000,
      roas: 217
    }
  ];

  // Offline marketing initiatives
  const offlineInitiatives = [
    {
      id: 'ooh_metro',
      name: 'Metro Station Branding',
      type: 'Out of Home',
      locations: ['Mumbai', 'Delhi', 'Bangalore'],
      duration: '3 months',
      reach: 45000,
      footfall: 18000,
      conversions: 600,
      spend: 450000,
      revenue: 606000,
      status: 'active'
    },
    {
      id: 'print_local',
      name: 'Local Newspaper Ads',
      type: 'Print Media',
      locations: ['Mumbai', 'Pune'],
      duration: '1 month',
      reach: 34000,
      footfall: 12000,
      conversions: 420,
      spend: 280000,
      revenue: 420000,
      status: 'active'
    },
    {
      id: 'events_expo',
      name: 'Shopping Expo Participation',
      type: 'Events & Sponsorship',
      locations: ['Bangalore'],
      duration: '3 days',
      reach: 15000,
      footfall: 8000,
      conversions: 280,
      spend: 400000,
      revenue: 320000,
      status: 'completed'
    },
    {
      id: 'radio_fm',
      name: 'FM Radio Spots',
      type: 'Radio',
      locations: ['Mumbai', 'Delhi'],
      duration: '2 weeks',
      reach: 20000,
      footfall: 7000,
      conversions: 200,
      spend: 400000,
      revenue: 170000,
      status: 'active'
    }
  ];

  // Performance comparison
  const channelComparison = [
    { metric: 'Reach', in_app: 850000, whatsapp: 456000, google: 650000, meta: 380000, offline: 114000 },
    { metric: 'Conversions', in_app: 15600, whatsapp: 8900, google: 12400, meta: 7200, offline: 1500 },
    { metric: 'Revenue (₹)', in_app: 18720000, whatsapp: 11124000, google: 14880000, meta: 9360000, offline: 1516000 },
    { metric: 'ROAS (%)', in_app: 800, whatsapp: 901, google: 304, meta: 271, offline: 99 },
    { metric: 'Spent (₹)', in_app: 2340000, whatsapp: 1234000, google: 4890000, meta: 3456000, offline: 1530000 }
  ];

  const getChannelColor = (channelId) => {
    const channel = marketingChannels.find(c => c.id === channelId);
    return channel?.color || 'gray';
  };

  const getChannelIcon = (channelId) => {
    const channel = marketingChannels.find(c => c.id === channelId);
    return channel?.icon || Megaphone;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-purple-500/20 backdrop-blur-lg rounded-2xl border border-purple-500/30 flex items-center justify-center">
            <Megaphone className="w-6 h-6 text-purple-300" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Multi-Channel Marketing</h1>
            <p className="text-purple-200">In-App, WhatsApp, Google Ads, Meta Ads & Offline campaigns</p>
          </div>
        </div>
      </div>

      {/* Overall Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="w-8 h-8 text-green-300" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">₹{(channelOverview.totalBudget / 100000).toFixed(1)}L</div>
          <div className="text-green-200 text-sm">Total Budget</div>
          <div className="text-xs text-green-300 mt-2">₹{(channelOverview.totalSpent / 100000).toFixed(1)}L spent</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-blue-300" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">{(channelOverview.totalReach / 100000).toFixed(2)}M</div>
          <div className="text-blue-200 text-sm">Total Reach</div>
          <div className="text-xs text-blue-300 mt-2">Across 5 channels</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Target className="w-8 h-8 text-purple-300" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">{channelOverview.totalConversions.toLocaleString()}</div>
          <div className="text-purple-200 text-sm">Conversions</div>
          <div className="text-xs text-purple-300 mt-2">1.86% avg rate</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-orange-300" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">₹{(channelOverview.totalRevenue / 10000000).toFixed(2)}Cr</div>
          <div className="text-orange-200 text-sm">Revenue Generated</div>
          <div className="text-xs text-orange-300 mt-2">From campaigns</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Award className="w-8 h-8 text-yellow-300" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">{channelOverview.roi}%</div>
          <div className="text-yellow-200 text-sm">ROI</div>
          <div className="text-xs text-yellow-300 mt-2">Return on Investment</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Zap className="w-8 h-8 text-pink-300" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">59</div>
          <div className="text-pink-200 text-sm">Active Campaigns</div>
          <div className="text-xs text-pink-300 mt-2">Running now</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10 overflow-x-auto">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'in_app', label: 'In-App Ads', icon: Smartphone },
          { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
          { id: 'google', label: 'Google Ads', icon: Globe },
          { id: 'meta', label: 'Meta Ads', icon: Target },
          { id: 'offline', label: 'Offline', icon: MapPin },
          { id: 'campaigns', label: 'All Campaigns', icon: Megaphone }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-white/20 text-white shadow-lg'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="font-medium text-sm">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Channel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingChannels.map((channel) => {
              const IconComponent = channel.icon;
              return (
                <div
                  key={channel.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-${channel.color}-500/30 p-6 hover:bg-white/15 transition-all cursor-pointer`}
                  onClick={() => setActiveTab(channel.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-${channel.color}-500/20 rounded-xl flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 text-${channel.color}-300`} />
                    </div>
                    <span className={`px-3 py-1 bg-${channel.color}-500/20 rounded-full text-${channel.color}-200 text-xs`}>
                      {channel.campaigns} campaigns
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4">{channel.name}</h3>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/5 rounded-xl p-3">
                      <div className="text-sm text-white/60 mb-1">Reach</div>
                      <div className="text-xl font-bold text-white">{(channel.reach / 1000).toFixed(0)}K</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3">
                      <div className="text-sm text-white/60 mb-1">Conversions</div>
                      <div className="text-xl font-bold text-white">{channel.conversions.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Budget</span>
                      <span className="text-white font-medium">₹{(channel.budget / 100000).toFixed(1)}L</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Spent</span>
                      <span className="text-green-400 font-medium">₹{(channel.spent / 100000).toFixed(1)}L</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Revenue</span>
                      <span className="text-green-400 font-medium">₹{(channel.revenue / 10000000).toFixed(2)}Cr</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/60">ROAS</span>
                      <span className={`text-lg font-bold ${
                        channel.roas > 500 ? 'text-green-400' :
                        channel.roas > 300 ? 'text-yellow-400' :
                        'text-orange-400'
                      }`}>
                        {channel.roas}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Performance Comparison */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-white mb-6">Channel Performance Comparison</h3>
            <div className="space-y-4">
              {channelComparison.map((row) => (
                <div key={row.metric} className="bg-white/5 rounded-xl p-4">
                  <div className="font-medium text-white mb-3">{row.metric}</div>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="text-purple-300 text-sm mb-1">In-App</div>
                      <div className="text-white font-medium">{row.in_app.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-300 text-sm mb-1">WhatsApp</div>
                      <div className="text-white font-medium">{row.whatsapp.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-300 text-sm mb-1">Google</div>
                      <div className="text-white font-medium">{row.google.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-pink-300 text-sm mb-1">Meta</div>
                      <div className="text-white font-medium">{row.meta.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-300 text-sm mb-1">Offline</div>
                      <div className="text-white font-medium">{row.offline.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* In-App Ads Tab */}
      {activeTab === 'in_app' && (
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-white mb-6">In-App Ad Placements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inAppPlacements.map((placement) => (
                <div key={placement.id} className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-white">{placement.name}</h4>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-200 text-xs">
                      {placement.activeCampaigns} active
                    </span>
                  </div>
                  <div className="text-sm text-white/60 mb-4">{placement.position}</div>
                  <div className="grid grid-cols-2 gap-4">
                    {placement.impressions && (
                      <>
                        <div>
                          <div className="text-sm text-white/60 mb-1">Impressions</div>
                          <div className="text-xl font-bold text-white">{(placement.impressions / 1000000).toFixed(1)}M</div>
                        </div>
                        <div>
                          <div className="text-sm text-white/60 mb-1">Clicks</div>
                          <div className="text-xl font-bold text-white">{(placement.clicks / 1000).toFixed(0)}K</div>
                        </div>
                        <div>
                          <div className="text-sm text-white/60 mb-1">CTR</div>
                          <div className="text-xl font-bold text-green-400">{placement.ctr}%</div>
                        </div>
                      </>
                    )}
                    {placement.sent && (
                      <>
                        <div>
                          <div className="text-sm text-white/60 mb-1">Sent</div>
                          <div className="text-xl font-bold text-white">{(placement.sent / 1000).toFixed(0)}K</div>
                        </div>
                        <div>
                          <div className="text-sm text-white/60 mb-1">Opened</div>
                          <div className="text-xl font-bold text-white">{(placement.opened / 1000).toFixed(0)}K</div>
                        </div>
                        <div>
                          <div className="text-sm text-white/60 mb-1">Open Rate</div>
                          <div className="text-xl font-bold text-green-400">{placement.openRate}%</div>
                        </div>
                      </>
                    )}
                    <div>
                      <div className="text-sm text-white/60 mb-1">Revenue</div>
                      <div className="text-xl font-bold text-green-400">₹{(placement.revenue / 100000).toFixed(1)}L</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Tab */}
      {activeTab === 'whatsapp' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">WhatsApp Marketing Campaigns</h3>
            <button className="px-6 py-3 bg-green-500/20 hover:bg-green-500/30 rounded-xl text-green-200 flex items-center gap-2 transition-all">
              <Plus className="w-5 h-5" />
              <span>New WhatsApp Campaign</span>
            </button>
          </div>
          <div className="space-y-4">
            {whatsappCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white/5 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{campaign.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-white/60">
                      <span>{campaign.type}</span>
                      <span>•</span>
                      <span>Trigger: {campaign.trigger}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-300 text-xs">
                    {campaign.status}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Sent</div>
                    <div className="text-2xl font-bold text-white">{campaign.sent.toLocaleString()}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Read</div>
                    <div className="text-2xl font-bold text-white">{campaign.read.toLocaleString()}</div>
                    <div className="text-xs text-green-400 mt-1">{campaign.readRate}% rate</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Conversions</div>
                    <div className="text-2xl font-bold text-white">{campaign.conversions.toLocaleString()}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Revenue</div>
                    <div className="text-2xl font-bold text-green-400">₹{(campaign.revenue / 100000).toFixed(1)}L</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Google Ads Tab */}
      {activeTab === 'google' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Google Ads Campaigns</h3>
            <button className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-xl text-blue-200 flex items-center gap-2 transition-all">
              <Plus className="w-5 h-5" />
              <span>New Google Campaign</span>
            </button>
          </div>
          <div className="space-y-4">
            {googleAdsCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white/5 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{campaign.name}</h4>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-blue-500/20 rounded-lg text-blue-200 text-xs">
                        {campaign.type}
                      </span>
                      {campaign.qualityScore && (
                        <span className="text-sm text-white/60">
                          Quality Score: <span className="text-green-400 font-medium">{campaign.qualityScore}/10</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Impressions</div>
                    <div className="text-2xl font-bold text-white">{(campaign.impressions / 1000000).toFixed(1)}M</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Clicks</div>
                    <div className="text-2xl font-bold text-white">{(campaign.clicks / 1000).toFixed(0)}K</div>
                    <div className="text-xs text-blue-400 mt-1">{campaign.ctr}% CTR</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">CPC</div>
                    <div className="text-2xl font-bold text-white">₹{campaign.cpc}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Spend</div>
                    <div className="text-2xl font-bold text-orange-400">₹{(campaign.spend / 100000).toFixed(1)}L</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">ROAS</div>
                    <div className="text-2xl font-bold text-green-400">{campaign.roas}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Meta Ads Tab */}
      {activeTab === 'meta' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Meta Ads Campaigns (Facebook & Instagram)</h3>
            <button className="px-6 py-3 bg-pink-500/20 hover:bg-pink-500/30 rounded-xl text-pink-200 flex items-center gap-2 transition-all">
              <Plus className="w-5 h-5" />
              <span>New Meta Campaign</span>
            </button>
          </div>
          <div className="space-y-4">
            {metaAdsCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white/5 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{campaign.name}</h4>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-pink-500/20 rounded-lg text-pink-200 text-xs">
                        {campaign.platform}
                      </span>
                      <span className="text-sm text-white/60">{campaign.placement}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Impressions</div>
                    <div className="text-2xl font-bold text-white">{(campaign.impressions / 1000000).toFixed(1)}M</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Clicks</div>
                    <div className="text-2xl font-bold text-white">{(campaign.clicks / 1000).toFixed(0)}K</div>
                    <div className="text-xs text-pink-400 mt-1">{campaign.ctr}% CTR</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">CPC</div>
                    <div className="text-2xl font-bold text-white">₹{campaign.cpc}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Spend</div>
                    <div className="text-2xl font-bold text-orange-400">₹{(campaign.spend / 100000).toFixed(1)}L</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">ROAS</div>
                    <div className="text-2xl font-bold text-green-400">{campaign.roas}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Offline Tab */}
      {activeTab === 'offline' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Offline Marketing Initiatives</h3>
            <button className="px-6 py-3 bg-orange-500/20 hover:bg-orange-500/30 rounded-xl text-orange-200 flex items-center gap-2 transition-all">
              <Plus className="w-5 h-5" />
              <span>New Offline Campaign</span>
            </button>
          </div>
          <div className="space-y-4">
            {offlineInitiatives.map((initiative) => (
              <div key={initiative.id} className="bg-white/5 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{initiative.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-white/60">
                      <span className="px-3 py-1 bg-orange-500/20 rounded-lg text-orange-200 text-xs">
                        {initiative.type}
                      </span>
                      <span>{initiative.locations.join(', ')}</span>
                      <span>•</span>
                      <span>{initiative.duration}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    initiative.status === 'active' ? 'bg-green-500/20 text-green-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {initiative.status}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Reach</div>
                    <div className="text-2xl font-bold text-white">{initiative.reach.toLocaleString()}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Footfall</div>
                    <div className="text-2xl font-bold text-white">{initiative.footfall.toLocaleString()}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Conversions</div>
                    <div className="text-2xl font-bold text-white">{initiative.conversions}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Revenue</div>
                    <div className="text-2xl font-bold text-green-400">₹{(initiative.revenue / 100000).toFixed(1)}L</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Campaigns Tab */}
      {activeTab === 'campaigns' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">All Active Campaigns</h3>
            <div className="flex items-center gap-3">
              <select
                value={selectedChannel}
                onChange={(e) => setSelectedChannel(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500/50"
              >
                <option value="all">All Channels</option>
                <option value="in_app">In-App Ads</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="google_ads">Google Ads</option>
                <option value="meta_ads">Meta Ads</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            {activeCampaigns
              .filter(c => selectedChannel === 'all' || c.channel === selectedChannel)
              .map((campaign) => {
                const ChannelIcon = getChannelIcon(campaign.channel);
                const channelColor = getChannelColor(campaign.channel);

                return (
                  <div key={campaign.id} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`w-10 h-10 bg-${channelColor}-500/20 rounded-lg flex items-center justify-center`}>
                          <ChannelIcon className={`w-5 h-5 text-${channelColor}-300`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="text-white font-medium">{campaign.name}</h4>
                            <span className="text-xs text-white/60">{campaign.id}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-white/60">
                            <span>{campaign.type}</span>
                            <span>•</span>
                            <span>{campaign.placement}</span>
                            <span>•</span>
                            <span>{campaign.startDate} to {campaign.endDate}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 text-center">
                          <div>
                            <div className="text-sm text-white/60 mb-1">Reach</div>
                            <div className="text-white font-medium">{(campaign.reach / 1000).toFixed(0)}K</div>
                          </div>
                          <div>
                            <div className="text-sm text-white/60 mb-1">Conversions</div>
                            <div className="text-white font-medium">{campaign.conversions.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-sm text-white/60 mb-1">Revenue</div>
                            <div className="text-green-400 font-medium">₹{(campaign.revenue / 100000).toFixed(1)}L</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          campaign.performance >= 90 ? 'bg-green-500/20' :
                          campaign.performance >= 70 ? 'bg-yellow-500/20' :
                          'bg-orange-500/20'
                        }`}>
                          <span className={`font-bold ${
                            campaign.performance >= 90 ? 'text-green-400' :
                            campaign.performance >= 70 ? 'text-yellow-400' :
                            'text-orange-400'
                          }`}>
                            {campaign.performance}
                          </span>
                        </div>
                        <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all">
                          <Edit className="w-4 h-4 text-white/60" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMultiChannelMarketing;
