import React, { useState } from 'react';
import {
  Megaphone, Plus, TrendingUp, Eye, MousePointer, DollarSign, Target,
  Smartphone, Mail, MessageSquare, Image, Video, Zap, Calendar,
  ChevronRight, BarChart2, Users, Store, Clock, CheckCircle, Play,
  Pause, Edit2, Copy, Trash2, Filter, Search, ArrowUpRight, Gift,
  Star, Award, Tv, MapPin, Settings, HelpCircle, Sparkles
} from 'lucide-react';

const MerchantAdzyHub = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Merchant's ad performance
  const adPerformance = {
    totalSpend: 45670,
    totalImpressions: 234567,
    totalClicks: 8901,
    totalConversions: 456,
    avgCTR: 3.8,
    avgROAS: 5.2,
    activeCampaigns: 3,
    balance: 12500
  };

  // Active campaigns
  const campaigns = [
    {
      id: 1,
      name: 'Weekend Special - 30% Off',
      type: 'flash_deal',
      status: 'active',
      budget: 15000,
      spent: 8900,
      impressions: 89000,
      clicks: 3450,
      conversions: 178,
      roas: 6.2,
      startDate: '2025-01-01',
      endDate: '2025-01-07'
    },
    {
      id: 2,
      name: 'New Year Loyalty Bonus',
      type: 'coin_boost',
      status: 'active',
      budget: 10000,
      spent: 5600,
      impressions: 56000,
      clicks: 2100,
      conversions: 89,
      roas: 4.8,
      startDate: '2025-01-01',
      endDate: '2025-01-15'
    },
    {
      id: 3,
      name: 'First-time Customer Offer',
      type: 'acquisition',
      status: 'paused',
      budget: 8000,
      spent: 8000,
      impressions: 45000,
      clicks: 1890,
      conversions: 67,
      roas: 3.9,
      startDate: '2024-12-15',
      endDate: '2024-12-31'
    }
  ];

  // Quick campaign templates
  const campaignTemplates = [
    {
      id: 'flash_deal',
      name: 'Flash Deal',
      description: 'Time-limited discount',
      icon: Zap,
      color: 'bg-amber-100 text-amber-600',
      avgRoas: '4.5x'
    },
    {
      id: 'coin_boost',
      name: 'Coin Boost',
      description: '2x ReZ Coins',
      icon: Gift,
      color: 'bg-purple-100 text-purple-600',
      avgRoas: '5.2x'
    },
    {
      id: 'acquisition',
      name: 'New Customers',
      description: 'First-time buyer offer',
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      avgRoas: '3.8x'
    },
    {
      id: 'loyalty',
      name: 'Loyalty Reward',
      description: 'Repeat customer bonus',
      icon: Star,
      color: 'bg-green-100 text-green-600',
      avgRoas: '6.1x'
    },
    {
      id: 'banner',
      name: 'Banner Ad',
      description: 'Brand awareness',
      icon: Image,
      color: 'bg-pink-100 text-pink-600',
      avgRoas: '3.2x'
    },
    {
      id: 'push',
      name: 'Push Notification',
      description: 'Direct to users',
      icon: MessageSquare,
      color: 'bg-indigo-100 text-indigo-600',
      avgRoas: '4.8x'
    }
  ];

  // Ad channels available
  const adChannels = [
    { id: 'in_app', name: 'In-App Banners', reach: '2.5M users', cpm: 45 },
    { id: 'push', name: 'Push Notifications', reach: '1.8M users', cpm: 35 },
    { id: 'sms', name: 'SMS Campaigns', reach: '3.2M users', cpm: 85 },
    { id: 'email', name: 'Email Marketing', reach: '2.1M users', cpm: 25 },
    { id: 'nearby', name: 'Nearby Users', reach: '50K users', cpm: 55 },
    { id: 'physical', name: 'Physical Screens', reach: '500K footfall', cpm: 120 }
  ];

  const formatCurrency = (amount) => {
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(1)}K`;
    return `₹${amount}`;
  };

  const formatNumber = (num) => {
    if (num >= 100000) return `${(num / 100000).toFixed(1)}L`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toLocaleString();
  };

  const getCampaignTypeIcon = (type) => {
    const template = campaignTemplates.find(t => t.id === type);
    return template ? template.icon : Target;
  };

  const getCampaignTypeColor = (type) => {
    const template = campaignTemplates.find(t => t.id === type);
    return template ? template.color : 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Adzy Hub</h1>
            <p className="text-purple-100 text-sm">Your Marketing Command Center</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-lg text-sm">
              Balance: {formatCurrency(adPerformance.balance)}
            </div>
            <button className="bg-white text-purple-600 px-3 py-1 rounded-lg text-sm font-medium">
              + Add Funds
            </button>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign size={16} />
              <span className="text-xs text-purple-100">Total Spend</span>
            </div>
            <p className="text-xl font-bold">{formatCurrency(adPerformance.totalSpend)}</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Eye size={16} />
              <span className="text-xs text-purple-100">Impressions</span>
            </div>
            <p className="text-xl font-bold">{formatNumber(adPerformance.totalImpressions)}</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <MousePointer size={16} />
              <span className="text-xs text-purple-100">CTR</span>
            </div>
            <p className="text-xl font-bold">{adPerformance.avgCTR}%</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp size={16} />
              <span className="text-xs text-purple-100">ROAS</span>
            </div>
            <p className="text-xl font-bold">{adPerformance.avgROAS}x</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Quick Create */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Quick Create Campaign</h2>
            <button className="text-purple-600 text-sm font-medium flex items-center gap-1">
              <Sparkles size={14} />
              AI Suggest
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {campaignTemplates.map(template => (
              <button
                key={template.id}
                onClick={() => setShowCreateModal(true)}
                className="border border-gray-200 rounded-xl p-3 text-center hover:border-purple-400 hover:bg-purple-50 transition-all"
              >
                <div className={`w-10 h-10 mx-auto rounded-xl ${template.color} flex items-center justify-center mb-2`}>
                  <template.icon size={20} />
                </div>
                <p className="font-medium text-sm text-gray-800">{template.name}</p>
                <p className="text-xs text-gray-500">{template.description}</p>
                <p className="text-xs text-green-600 mt-1">Avg {template.avgRoas} ROAS</p>
              </button>
            ))}
          </div>
        </div>

        {/* Active Campaigns */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Your Campaigns</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{campaigns.length} campaigns</span>
              <button className="text-purple-600 text-sm font-medium">View All</button>
            </div>
          </div>
          <div className="space-y-3">
            {campaigns.map(campaign => {
              const CampaignIcon = getCampaignTypeIcon(campaign.type);
              return (
                <div key={campaign.id} className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getCampaignTypeColor(campaign.type)}`}>
                        <CampaignIcon size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{campaign.name}</h3>
                        <p className="text-xs text-gray-500">
                          {campaign.startDate} - {campaign.endDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1
                        ${campaign.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {campaign.status === 'active' ? <Play size={10} /> : <Pause size={10} />}
                        {campaign.status}
                      </span>
                    </div>
                  </div>

                  {/* Budget Progress */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                      <span>Budget: {formatCurrency(campaign.budget)}</span>
                      <span>{((campaign.spent / campaign.budget) * 100).toFixed(0)}% spent</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full"
                        style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-4 gap-2 text-center bg-gray-50 rounded-lg p-2">
                    <div>
                      <p className="text-xs text-gray-500">Impressions</p>
                      <p className="font-medium text-sm">{formatNumber(campaign.impressions)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Clicks</p>
                      <p className="font-medium text-sm">{formatNumber(campaign.clicks)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Conversions</p>
                      <p className="font-medium text-sm">{campaign.conversions}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">ROAS</p>
                      <p className="font-medium text-sm text-green-600">{campaign.roas}x</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-2 mt-3">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <BarChart2 size={16} className="text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Edit2 size={16} className="text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Copy size={16} className="text-gray-500" />
                    </button>
                    {campaign.status === 'active' ? (
                      <button className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-lg">
                        Pause
                      </button>
                    ) : (
                      <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg">
                        Resume
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Available Channels */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Ad Channels</h2>
            <span className="text-xs text-gray-500">All RTMN ecosystem</span>
          </div>
          <div className="space-y-2">
            {adChannels.map(channel => (
              <div key={channel.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    {channel.id === 'in_app' && <Smartphone size={18} className="text-purple-600" />}
                    {channel.id === 'push' && <MessageSquare size={18} className="text-purple-600" />}
                    {channel.id === 'sms' && <MessageSquare size={18} className="text-purple-600" />}
                    {channel.id === 'email' && <Mail size={18} className="text-purple-600" />}
                    {channel.id === 'nearby' && <MapPin size={18} className="text-purple-600" />}
                    {channel.id === 'physical' && <Tv size={18} className="text-purple-600" />}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-800">{channel.name}</p>
                    <p className="text-xs text-gray-500">{channel.reach}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">₹{channel.cpm} CPM</p>
                  <button className="text-xs text-purple-600 font-medium">Use →</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closed Loop Benefit */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <CheckCircle size={20} />
            </div>
            <div>
              <h3 className="font-semibold">Closed-Loop Advantage</h3>
              <p className="text-xs text-emerald-100">Your ad spend stays in the ecosystem</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-white/10 rounded-lg p-2">
              <p className="text-lg font-bold">100%</p>
              <p className="text-xs text-emerald-100">Internal Reach</p>
            </div>
            <div className="bg-white/10 rounded-lg p-2">
              <p className="text-lg font-bold">0%</p>
              <p className="text-xs text-emerald-100">Money Leakage</p>
            </div>
            <div className="bg-white/10 rounded-lg p-2">
              <p className="text-lg font-bold">5.2x</p>
              <p className="text-xs text-emerald-100">Avg ROAS</p>
            </div>
          </div>
        </div>

        {/* Help & Resources */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-3">Help & Resources</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100">
              <HelpCircle size={20} className="text-purple-600" />
              <div className="text-left">
                <p className="font-medium text-sm text-gray-800">Ad Best Practices</p>
                <p className="text-xs text-gray-500">Tips for better ROAS</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100">
              <Sparkles size={20} className="text-purple-600" />
              <div className="text-left">
                <p className="font-medium text-sm text-gray-800">AI Optimization</p>
                <p className="text-xs text-gray-500">Let AI improve ads</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Create Campaign Modal would go here */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
          <div className="bg-white rounded-t-3xl w-full max-w-lg p-6 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Create Campaign</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-gray-500">✕</button>
            </div>
            <p className="text-gray-500 text-sm mb-4">Choose a campaign type to get started</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {campaignTemplates.map(template => (
                <button
                  key={template.id}
                  className="border border-gray-200 rounded-xl p-4 text-left hover:border-purple-400"
                >
                  <div className={`w-10 h-10 rounded-xl ${template.color} flex items-center justify-center mb-2`}>
                    <template.icon size={20} />
                  </div>
                  <p className="font-medium text-gray-800">{template.name}</p>
                  <p className="text-xs text-gray-500">{template.description}</p>
                </button>
              ))}
            </div>
            <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-medium">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantAdzyHub;
