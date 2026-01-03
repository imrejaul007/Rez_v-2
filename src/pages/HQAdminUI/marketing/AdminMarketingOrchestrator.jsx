import React, { useState } from 'react';
import {
  ArrowLeft, Megaphone, TrendingUp, DollarSign, Target,
  Facebook, Instagram, Mail, MessageSquare, Phone, QrCode,
  MapPin, Users, Zap, BarChart2, Eye, MousePointer,
  ShoppingCart, ChevronRight, Settings, AlertTriangle,
  CheckCircle, Clock, Globe, Play, Pause, RefreshCw,
  Download, Filter, Calendar, Shield, Activity
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminMarketingOrchestrator = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const platformStats = {
    totalSpend: 12500000,
    totalRevenue: 45600000,
    avgRoas: 3.65,
    activeCampaigns: 1234,
    activeMerchants: 456,
    impressions: 234567890,
    clicks: 4567890,
    conversions: 123456
  };

  const channelBreakdown = [
    {
      id: 'inapp',
      name: 'In-App Ads',
      icon: Zap,
      color: 'purple',
      spend: 2500000,
      revenue: 8900000,
      roas: 3.56,
      merchants: 234,
      campaigns: 456,
      status: 'healthy'
    },
    {
      id: 'meta',
      name: 'Meta (FB/IG)',
      icon: Facebook,
      color: 'blue',
      spend: 3500000,
      revenue: 12500000,
      roas: 3.57,
      merchants: 189,
      campaigns: 312,
      status: 'healthy'
    },
    {
      id: 'google',
      name: 'Google Ads',
      icon: Globe,
      color: 'red',
      spend: 3000000,
      revenue: 9800000,
      roas: 3.27,
      merchants: 145,
      campaigns: 234,
      status: 'warning'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: MessageSquare,
      color: 'green',
      spend: 1500000,
      revenue: 7800000,
      roas: 5.20,
      merchants: 321,
      campaigns: 567,
      status: 'healthy'
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      color: 'orange',
      spend: 500000,
      revenue: 3400000,
      roas: 6.80,
      merchants: 287,
      campaigns: 234,
      status: 'healthy'
    },
    {
      id: 'sms',
      name: 'SMS',
      icon: Phone,
      color: 'cyan',
      spend: 800000,
      revenue: 2300000,
      roas: 2.88,
      merchants: 198,
      campaigns: 156,
      status: 'degraded'
    },
    {
      id: 'offline',
      name: 'Offline (QR)',
      icon: QrCode,
      color: 'pink',
      spend: 700000,
      revenue: 4500000,
      roas: 6.43,
      merchants: 356,
      campaigns: 789,
      status: 'healthy'
    }
  ];

  const topMerchants = [
    { name: 'Fashion Hub', spend: 450000, revenue: 1800000, roas: 4.0, campaigns: 12 },
    { name: 'Quick Bites', spend: 380000, revenue: 1520000, roas: 4.0, campaigns: 8 },
    { name: 'Wellness Spa', spend: 290000, revenue: 1102000, roas: 3.8, campaigns: 6 },
    { name: 'Tech Store', spend: 250000, revenue: 875000, roas: 3.5, campaigns: 5 },
    { name: 'Gourmet Kitchen', spend: 220000, revenue: 792000, roas: 3.6, campaigns: 7 }
  ];

  const integrationStatus = [
    { name: 'Meta Business API', status: 'connected', lastSync: '2 min ago', health: 100 },
    { name: 'Google Ads API', status: 'connected', lastSync: '5 min ago', health: 98 },
    { name: 'WhatsApp Business API', status: 'connected', lastSync: '1 min ago', health: 100 },
    { name: 'Email Service (SendGrid)', status: 'connected', lastSync: '3 min ago', health: 100 },
    { name: 'SMS Gateway (MSG91)', status: 'degraded', lastSync: '15 min ago', health: 85 }
  ];

  const recentAlerts = [
    { type: 'warning', message: 'SMS delivery rate dropped below 90%', time: '15 min ago' },
    { type: 'info', message: 'Google Ads API quota 80% utilized', time: '1 hour ago' },
    { type: 'success', message: 'Meta Pixel sync completed for 156 merchants', time: '2 hours ago' },
    { type: 'warning', message: 'High spend detected for merchant #1234', time: '3 hours ago' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
      case 'connected':
        return 'bg-green-500/20 text-green-400';
      case 'warning':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'degraded':
        return 'bg-orange-500/20 text-orange-400';
      case 'error':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle size={16} className="text-yellow-400" />;
      case 'success':
        return <CheckCircle size={16} className="text-green-400" />;
      case 'error':
        return <AlertTriangle size={16} className="text-red-400" />;
      default:
        return <Activity size={16} className="text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Megaphone size={24} className="mr-2" />
                Marketing Orchestrator
              </h1>
              <p className="text-indigo-200 text-sm">Platform-wide marketing control</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-white/20 rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="24h">Last 24h</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(platformStats.totalSpend/10000000).toFixed(1)}Cr</p>
            <p className="text-xs text-indigo-200">Total Spend</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(platformStats.totalRevenue/10000000).toFixed(1)}Cr</p>
            <p className="text-xs text-indigo-200">Revenue</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-300">{platformStats.avgRoas}x</p>
            <p className="text-xs text-indigo-200">Avg ROAS</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{platformStats.activeMerchants}</p>
            <p className="text-xs text-indigo-200">Merchants</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'channels', label: 'Channels' },
            { id: 'merchants', label: 'Merchants' },
            { id: 'integrations', label: 'Integrations' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-indigo-600 text-white' : 'text-gray-400'
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
          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Eye size={18} className="text-blue-400" />
                <span className="text-green-400 text-xs">+18%</span>
              </div>
              <p className="text-white font-bold text-xl">{(platformStats.impressions/1000000).toFixed(0)}M</p>
              <p className="text-gray-400 text-sm">Impressions</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <MousePointer size={18} className="text-purple-400" />
                <span className="text-green-400 text-xs">+12%</span>
              </div>
              <p className="text-white font-bold text-xl">{(platformStats.clicks/1000000).toFixed(1)}M</p>
              <p className="text-gray-400 text-sm">Clicks</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <ShoppingCart size={18} className="text-green-400" />
                <span className="text-green-400 text-xs">+25%</span>
              </div>
              <p className="text-white font-bold text-xl">{(platformStats.conversions/1000).toFixed(0)}K</p>
              <p className="text-gray-400 text-sm">Conversions</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Users size={18} className="text-orange-400" />
                <span className="text-green-400 text-xs">+8%</span>
              </div>
              <p className="text-white font-bold text-xl">{platformStats.activeCampaigns}</p>
              <p className="text-gray-400 text-sm">Active Campaigns</p>
            </div>
          </div>

          {/* Channel Health */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Channel Health</h3>
            <div className="space-y-3">
              {channelBreakdown.map(channel => {
                const Icon = channel.icon;
                return (
                  <div key={channel.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 bg-${channel.color}-500/20 rounded-lg flex items-center justify-center mr-3`}>
                        <Icon size={16} className={`text-${channel.color}-400`} />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{channel.name}</p>
                        <p className="text-gray-400 text-xs">{channel.merchants} merchants</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-400 font-bold">{channel.roas}x</span>
                      <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(channel.status)}`}>
                        {channel.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-bold">Recent Alerts</h3>
              <button className="text-indigo-400 text-sm">View All</button>
            </div>
            <div className="space-y-3">
              {recentAlerts.map((alert, idx) => (
                <div key={idx} className="flex items-start bg-gray-700/50 rounded-lg p-3">
                  <div className="mr-3 mt-0.5">{getAlertIcon(alert.type)}</div>
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm">{alert.message}</p>
                    <p className="text-gray-500 text-xs mt-1">{alert.time}</p>
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
          {channelBreakdown.map(channel => {
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
                      <p className="text-gray-400 text-sm">{channel.campaigns} campaigns</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(channel.status)}`}>
                    {channel.status}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">₹{(channel.spend/100000).toFixed(0)}L</p>
                    <p className="text-gray-400 text-xs">Spend</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">₹{(channel.revenue/100000).toFixed(0)}L</p>
                    <p className="text-gray-400 text-xs">Revenue</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-green-400 font-bold">{channel.roas}x</p>
                    <p className="text-gray-400 text-xs">ROAS</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{channel.merchants}</p>
                    <p className="text-gray-400 text-xs">Merchants</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm">
                    View Details
                  </button>
                  <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg text-sm">
                    Configure
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Merchants Tab */}
      {activeTab === 'merchants' && (
        <div className="px-4 space-y-4">
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Top Marketing Spenders</h3>
            <div className="space-y-3">
              {topMerchants.map((merchant, idx) => (
                <div key={idx} className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs mr-3">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-white font-medium">{merchant.name}</p>
                      <p className="text-gray-400 text-xs">{merchant.campaigns} campaigns</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">₹{(merchant.spend/100000).toFixed(1)}L</p>
                    <p className="text-green-400 text-xs">{merchant.roas}x ROAS</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Merchant Controls */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Merchant Marketing Controls</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Auto-approve campaigns under ₹10K</p>
                  <p className="text-gray-400 text-xs">Small budgets don't need approval</p>
                </div>
                <div className="w-12 h-6 bg-indigo-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Spending limits per merchant</p>
                  <p className="text-gray-400 text-xs">Prevent overspending</p>
                </div>
                <div className="w-12 h-6 bg-indigo-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Require Meta/Google connection</p>
                  <p className="text-gray-400 text-xs">Enforce proper tracking</p>
                </div>
                <div className="w-12 h-6 bg-gray-600 rounded-full relative">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Integrations Tab */}
      {activeTab === 'integrations' && (
        <div className="px-4 space-y-4">
          <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4">
            <div className="flex items-start">
              <Shield size={20} className="text-indigo-400 mr-3 mt-0.5" />
              <div>
                <p className="text-indigo-400 font-medium">API Integrations</p>
                <p className="text-gray-300 text-sm">All marketing platforms connected via secure APIs</p>
              </div>
            </div>
          </div>

          {integrationStatus.map((integration, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <CheckCircle size={18} className={integration.status === 'connected' ? 'text-green-400' : 'text-yellow-400'} />
                  <span className="text-white font-medium ml-2">{integration.name}</span>
                </div>
                <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(integration.status)}`}>
                  {integration.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Last sync: {integration.lastSync}</span>
                <div className="flex items-center">
                  <div className="w-16 bg-gray-700 rounded-full h-2 mr-2">
                    <div
                      className={`h-2 rounded-full ${integration.health >= 95 ? 'bg-green-500' : 'bg-yellow-500'}`}
                      style={{ width: `${integration.health}%` }}
                    />
                  </div>
                  <span className="text-gray-400">{integration.health}%</span>
                </div>
              </div>
              <div className="flex space-x-2 mt-3">
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                  <RefreshCw size={14} className="mr-1" />
                  Sync Now
                </button>
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                  <Settings size={14} className="mr-1" />
                  Configure
                </button>
              </div>
            </div>
          ))}

          {/* API Quotas */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">API Usage Today</h3>
            <div className="space-y-3">
              {[
                { name: 'Meta Ads API', used: 45000, limit: 100000 },
                { name: 'Google Ads API', used: 80000, limit: 100000 },
                { name: 'WhatsApp API', used: 25000, limit: 50000 }
              ].map((api, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">{api.name}</span>
                    <span className={`${(api.used/api.limit) > 0.8 ? 'text-yellow-400' : 'text-white'}`}>
                      {(api.used/1000).toFixed(0)}K / {(api.limit/1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${(api.used/api.limit) > 0.8 ? 'bg-yellow-500' : 'bg-indigo-500'}`}
                      style={{ width: `${(api.used/api.limit)*100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMarketingOrchestrator;
