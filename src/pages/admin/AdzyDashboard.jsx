import React, { useState } from 'react';
import {
  BarChart3, TrendingUp, Target, DollarSign, Users, Eye, MousePointer,
  Megaphone, Store, Tv, Smartphone, MapPin, Calendar, Filter,
  ArrowUpRight, ArrowDownRight, Play, Pause, Settings, Plus,
  PieChart, Activity, Zap, Clock, CheckCircle, AlertCircle
} from 'lucide-react';

const AdzyDashboard = () => {
  const [dateRange, setDateRange] = useState('7d');
  const [adType, setAdType] = useState('all');

  // Platform metrics
  const platformMetrics = {
    totalSpend: 2847500,
    totalImpressions: 45678900,
    totalClicks: 1234567,
    totalConversions: 89456,
    avgCTR: 2.7,
    avgCPC: 2.31,
    avgROAS: 4.8,
    activeCampaigns: 1256,
    activeMerchants: 3421
  };

  // Ad channels
  const adChannels = [
    {
      id: 'in_app',
      name: 'In-App Ads',
      icon: Smartphone,
      spend: 1245000,
      impressions: 23456000,
      clicks: 567800,
      conversions: 45670,
      ctr: 2.4,
      status: 'active'
    },
    {
      id: 'push',
      name: 'Push Notifications',
      icon: Megaphone,
      spend: 456000,
      impressions: 8900000,
      clicks: 234500,
      conversions: 18900,
      ctr: 2.6,
      status: 'active'
    },
    {
      id: 'sms',
      name: 'SMS Campaigns',
      icon: Smartphone,
      spend: 234000,
      impressions: 3450000,
      clicks: 156700,
      conversions: 12340,
      ctr: 4.5,
      status: 'active'
    },
    {
      id: 'email',
      name: 'Email Marketing',
      icon: Target,
      spend: 123000,
      impressions: 5670000,
      clicks: 189000,
      conversions: 8900,
      ctr: 3.3,
      status: 'active'
    },
    {
      id: 'physical',
      name: 'Physical Screens',
      icon: Tv,
      spend: 567000,
      impressions: 2340000,
      clicks: 0,
      conversions: 3450,
      ctr: 0,
      status: 'active'
    },
    {
      id: 'partner',
      name: 'Partner Store Displays',
      icon: Store,
      spend: 222500,
      impressions: 1862900,
      clicks: 86567,
      conversions: 196,
      ctr: 4.6,
      status: 'active'
    }
  ];

  // Top performing campaigns
  const topCampaigns = [
    {
      id: 1,
      name: 'Diwali Flash Sale - Electronics',
      merchant: 'Croma Express',
      spend: 125000,
      conversions: 3456,
      roas: 8.2,
      status: 'active'
    },
    {
      id: 2,
      name: 'Weekend Food Festival',
      merchant: 'Dinezy Partners',
      spend: 89000,
      conversions: 2890,
      roas: 6.4,
      status: 'active'
    },
    {
      id: 3,
      name: 'Beauty Week Offers',
      merchant: 'Glowzy Network',
      spend: 67000,
      conversions: 1234,
      roas: 5.8,
      status: 'active'
    },
    {
      id: 4,
      name: 'Grocery Savings Sprint',
      merchant: 'Grocify Partners',
      spend: 54000,
      conversions: 4567,
      roas: 7.1,
      status: 'paused'
    }
  ];

  // Physical ad inventory
  const physicalInventory = {
    totalScreens: 2456,
    activeScreens: 2198,
    totalLocations: 567,
    avgUtilization: 78,
    categories: [
      { name: 'Mall Screens', count: 456, utilization: 92 },
      { name: 'Restaurant Displays', count: 890, utilization: 85 },
      { name: 'Retail Store Screens', count: 678, utilization: 72 },
      { name: 'Transit Displays', count: 234, utilization: 68 },
      { name: 'Gym/Fitness Centers', count: 198, utilization: 61 }
    ]
  };

  const formatCurrency = (amount) => {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(1)}K`;
    return `₹${amount}`;
  };

  const formatNumber = (num) => {
    if (num >= 10000000) return `${(num / 10000000).toFixed(1)}Cr`;
    if (num >= 100000) return `${(num / 100000).toFixed(1)}L`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Adzy Dashboard</h1>
            <p className="text-purple-100 text-sm">Closed-Loop Marketing Exchange</p>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-sm"
            >
              <option value="1d">Today</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={18} />
              <span className="text-sm text-purple-100">Total Ad Spend</span>
            </div>
            <p className="text-2xl font-bold">{formatCurrency(platformMetrics.totalSpend)}</p>
            <p className="text-xs text-green-300 flex items-center gap-1">
              <ArrowUpRight size={12} /> +18.5% vs last period
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Eye size={18} />
              <span className="text-sm text-purple-100">Impressions</span>
            </div>
            <p className="text-2xl font-bold">{formatNumber(platformMetrics.totalImpressions)}</p>
            <p className="text-xs text-green-300 flex items-center gap-1">
              <ArrowUpRight size={12} /> +24.2%
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <MousePointer size={18} />
              <span className="text-sm text-purple-100">Avg CTR</span>
            </div>
            <p className="text-2xl font-bold">{platformMetrics.avgCTR}%</p>
            <p className="text-xs text-green-300 flex items-center gap-1">
              <ArrowUpRight size={12} /> +0.3%
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={18} />
              <span className="text-sm text-purple-100">Avg ROAS</span>
            </div>
            <p className="text-2xl font-bold">{platformMetrics.avgROAS}x</p>
            <p className="text-xs text-green-300 flex items-center gap-1">
              <ArrowUpRight size={12} /> +0.8x
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Ecosystem Stats */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 text-white">
          <h3 className="font-semibold mb-3">Closed-Loop Ecosystem</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">{formatNumber(platformMetrics.activeMerchants)}</p>
              <p className="text-xs text-emerald-100">Active Advertisers</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{formatNumber(platformMetrics.activeCampaigns)}</p>
              <p className="text-xs text-emerald-100">Live Campaigns</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{formatNumber(platformMetrics.totalConversions)}</p>
              <p className="text-xs text-emerald-100">Conversions</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-white/10 rounded-xl">
            <p className="text-sm text-center">
              <Zap className="inline mr-1" size={14} />
              100% of ad spend stays within RTMN ecosystem
            </p>
          </div>
        </div>

        {/* Ad Channels Performance */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Channel Performance</h3>
            <button className="text-purple-600 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-3">
            {adChannels.map(channel => (
              <div key={channel.id} className="border border-gray-100 rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <channel.icon size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{channel.name}</p>
                      <p className="text-xs text-gray-500">
                        {formatNumber(channel.impressions)} impressions
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">{formatCurrency(channel.spend)}</p>
                    <p className="text-xs text-green-600">ROAS: {(channel.conversions * 150 / channel.spend).toFixed(1)}x</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs bg-gray-50 rounded-lg p-2">
                  <div>
                    <p className="text-gray-500">Clicks</p>
                    <p className="font-medium">{formatNumber(channel.clicks)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">CTR</p>
                    <p className="font-medium">{channel.ctr}%</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Conversions</p>
                    <p className="font-medium">{formatNumber(channel.conversions)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Ad Inventory */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-gray-800">Physical Ad Inventory</h3>
              <p className="text-xs text-gray-500">Screens, displays & physical placements</p>
            </div>
            <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg text-sm font-medium">
              <Plus size={14} className="inline mr-1" />
              Add Location
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <Tv size={18} className="text-orange-600" />
                <span className="text-sm text-gray-600">Total Screens</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">{physicalInventory.totalScreens}</p>
              <p className="text-xs text-green-600">{physicalInventory.activeScreens} active</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={18} className="text-blue-600" />
                <span className="text-sm text-gray-600">Locations</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">{physicalInventory.totalLocations}</p>
              <p className="text-xs text-gray-500">{physicalInventory.avgUtilization}% utilization</p>
            </div>
          </div>

          <div className="space-y-2">
            {physicalInventory.categories.map((cat, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">{cat.name}</span>
                  <span className="text-xs text-gray-400">({cat.count})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500 rounded-full"
                      style={{ width: `${cat.utilization}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-600">{cat.utilization}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Campaigns */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Top Performing Campaigns</h3>
            <button className="text-purple-600 text-sm font-medium">See All</button>
          </div>
          <div className="space-y-3">
            {topCampaigns.map(campaign => (
              <div key={campaign.id} className="border border-gray-100 rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium text-gray-800">{campaign.name}</p>
                    <p className="text-xs text-gray-500">{campaign.merchant}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1
                    ${campaign.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {campaign.status === 'active' ? <Play size={10} /> : <Pause size={10} />}
                    {campaign.status}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-sm bg-gray-50 rounded-lg p-2">
                  <div>
                    <p className="text-gray-500 text-xs">Spend</p>
                    <p className="font-medium">{formatCurrency(campaign.spend)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Conversions</p>
                    <p className="font-medium">{formatNumber(campaign.conversions)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">ROAS</p>
                    <p className="font-medium text-green-600">{campaign.roas}x</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Money Flow */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-4 text-white">
          <h3 className="font-semibold mb-4">Closed-Loop Money Flow</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/10 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Store size={16} />
                </div>
                <span>Merchant Ad Spend</span>
              </div>
              <span className="font-semibold">{formatCurrency(platformMetrics.totalSpend)}</span>
            </div>
            <div className="flex justify-center">
              <ArrowDownRight size={24} className="text-purple-300" />
            </div>
            <div className="flex items-center justify-between p-3 bg-white/10 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Users size={16} />
                </div>
                <span>User Rewards (ReZ Coins)</span>
              </div>
              <span className="font-semibold">{formatCurrency(platformMetrics.totalSpend * 0.15)}</span>
            </div>
            <div className="flex justify-center">
              <ArrowDownRight size={24} className="text-purple-300" />
            </div>
            <div className="flex items-center justify-between p-3 bg-white/10 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <TrendingUp size={16} />
                </div>
                <span>Back to Merchants (Purchases)</span>
              </div>
              <span className="font-semibold">{formatCurrency(platformMetrics.totalSpend * 4.8)}</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-white/10 rounded-xl text-center">
            <p className="text-sm">
              <CheckCircle className="inline mr-1" size={14} />
              Zero money leaks outside ecosystem
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-white border-2 border-purple-200 rounded-xl p-4 text-center hover:border-purple-400 transition-colors">
            <Plus size={24} className="mx-auto mb-2 text-purple-600" />
            <p className="font-medium text-gray-800">Create Campaign</p>
            <p className="text-xs text-gray-500">Launch new ads</p>
          </button>
          <button className="bg-white border-2 border-purple-200 rounded-xl p-4 text-center hover:border-purple-400 transition-colors">
            <Tv size={24} className="mx-auto mb-2 text-purple-600" />
            <p className="font-medium text-gray-800">Manage Inventory</p>
            <p className="text-xs text-gray-500">Physical screens</p>
          </button>
          <button className="bg-white border-2 border-purple-200 rounded-xl p-4 text-center hover:border-purple-400 transition-colors">
            <BarChart3 size={24} className="mx-auto mb-2 text-purple-600" />
            <p className="font-medium text-gray-800">Analytics</p>
            <p className="text-xs text-gray-500">Deep insights</p>
          </button>
          <button className="bg-white border-2 border-purple-200 rounded-xl p-4 text-center hover:border-purple-400 transition-colors">
            <Settings size={24} className="mx-auto mb-2 text-purple-600" />
            <p className="font-medium text-gray-800">Settings</p>
            <p className="text-xs text-gray-500">Configure Adzy</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdzyDashboard;
