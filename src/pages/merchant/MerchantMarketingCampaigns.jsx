import { useState } from 'react';
import {
  Megaphone, Smartphone, MessageCircle, Mail, Target, Users,
  TrendingUp, DollarSign, Eye, MousePointer, Calendar, Plus,
  BarChart3, Zap, CheckCircle, Clock, Award, Play, Pause, Edit
} from 'lucide-react';

const MerchantMarketingCampaigns = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Merchant marketing overview
  const marketingOverview = {
    totalBudget: 250000, // ₹2.5L
    totalSpent: 187500, // ₹1.875L
    totalReach: 45000,
    totalConversions: 1890,
    totalRevenue: 756000, // ₹7.56L
    roi: 403 // 403% ROI
  };

  // Available marketing channels for merchants
  const merchantChannels = [
    {
      id: 'in_app',
      name: 'In-App Promotions',
      icon: Smartphone,
      color: 'purple',
      budget: 80000,
      spent: 72000,
      reach: 18000,
      impressions: 125000,
      clicks: 6250,
      conversions: 780,
      revenue: 312000,
      ctr: 5.0,
      roas: 433,
      status: 'active',
      campaigns: 4
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Broadcasts',
      icon: MessageCircle,
      color: 'green',
      budget: 40000,
      spent: 32000,
      reach: 8500,
      sent: 8500,
      delivered: 8330,
      read: 6248,
      clicked: 1250,
      conversions: 425,
      revenue: 170000,
      readRate: 75,
      ctr: 20,
      roas: 531,
      status: 'active',
      campaigns: 3
    },
    {
      id: 'email',
      name: 'Email Campaigns',
      icon: Mail,
      color: 'blue',
      budget: 50000,
      spent: 38500,
      reach: 12000,
      sent: 12000,
      opened: 3600,
      clicked: 720,
      conversions: 480,
      revenue: 192000,
      openRate: 30,
      ctr: 20,
      roas: 499,
      status: 'active',
      campaigns: 5
    },
    {
      id: 'social',
      name: 'Social Media Posts',
      icon: Target,
      color: 'pink',
      budget: 60000,
      spent: 35000,
      reach: 5500,
      impressions: 18000,
      engagement: 900,
      clicks: 360,
      conversions: 165,
      revenue: 66000,
      engagementRate: 5.0,
      ctr: 2.0,
      roas: 189,
      status: 'active',
      campaigns: 2
    },
    {
      id: 'loyalty',
      name: 'Loyalty Rewards',
      icon: Award,
      color: 'orange',
      budget: 20000,
      spent: 10000,
      reach: 1000,
      claimed: 450,
      conversions: 40,
      revenue: 16000,
      claimRate: 45,
      roas: 160,
      status: 'active',
      campaigns: 1
    }
  ];

  // Active campaigns
  const activeCampaigns = [
    {
      id: 'CAMP-M001',
      name: 'Weekend Flash Sale',
      channel: 'in_app',
      type: 'Flash Sale Banner',
      startDate: '2024-12-28',
      endDate: '2025-01-05',
      budget: 30000,
      spent: 27000,
      reach: 8000,
      impressions: 45000,
      clicks: 2250,
      conversions: 340,
      revenue: 136000,
      ctr: 5.0,
      status: 'active',
      performance: 95
    },
    {
      id: 'CAMP-M002',
      name: 'New Customer Welcome',
      channel: 'whatsapp',
      type: 'Automated Message',
      startDate: '2024-12-01',
      endDate: 'Ongoing',
      budget: 15000,
      spent: 12000,
      reach: 3200,
      sent: 3200,
      read: 2400,
      clicked: 480,
      conversions: 160,
      revenue: 64000,
      readRate: 75,
      status: 'active',
      performance: 88
    },
    {
      id: 'CAMP-M003',
      name: 'Monthly Newsletter',
      channel: 'email',
      type: 'Email Campaign',
      startDate: '2024-12-15',
      endDate: '2024-12-31',
      budget: 20000,
      spent: 16000,
      reach: 5000,
      sent: 5000,
      opened: 1500,
      clicked: 300,
      conversions: 200,
      revenue: 80000,
      openRate: 30,
      status: 'active',
      performance: 82
    },
    {
      id: 'CAMP-M004',
      name: 'Instagram Product Showcase',
      channel: 'social',
      type: 'Social Post',
      startDate: '2024-12-20',
      endDate: '2024-12-30',
      budget: 25000,
      spent: 15000,
      reach: 2500,
      impressions: 8000,
      engagement: 400,
      clicks: 160,
      conversions: 75,
      revenue: 30000,
      engagementRate: 5.0,
      status: 'active',
      performance: 70
    }
  ];

  // Campaign templates
  const campaignTemplates = [
    {
      id: 'tpl_flash_sale',
      name: 'Flash Sale Announcement',
      channel: 'in_app',
      description: 'Limited-time discount promotion',
      estimatedReach: 5000,
      estimatedROI: 400
    },
    {
      id: 'tpl_welcome',
      name: 'Welcome New Customers',
      channel: 'whatsapp',
      description: 'Automated welcome message for new customers',
      estimatedReach: 1000,
      estimatedROI: 500
    },
    {
      id: 'tpl_newsletter',
      name: 'Monthly Newsletter',
      channel: 'email',
      description: 'Monthly updates and exclusive offers',
      estimatedReach: 3000,
      estimatedROI: 450
    },
    {
      id: 'tpl_birthday',
      name: 'Birthday Special Offer',
      channel: 'whatsapp',
      description: 'Automated birthday wishes with special discount',
      estimatedReach: 500,
      estimatedROI: 600
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-purple-500/20 backdrop-blur-lg rounded-2xl border border-purple-500/30 flex items-center justify-center">
            <Megaphone className="w-6 h-6 text-purple-300" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Marketing Campaigns</h1>
            <p className="text-purple-200">Promote your business across multiple channels</p>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <DollarSign className="w-8 h-8 text-green-300 mb-4" />
          <div className="text-3xl font-bold text-white mb-1">₹{(marketingOverview.totalBudget / 100000).toFixed(1)}L</div>
          <div className="text-green-200 text-sm">Total Budget</div>
          <div className="text-xs text-green-300 mt-2">₹{(marketingOverview.totalSpent / 100000).toFixed(2)}L spent</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <Users className="w-8 h-8 text-blue-300 mb-4" />
          <div className="text-3xl font-bold text-white mb-1">{(marketingOverview.totalReach / 1000).toFixed(0)}K</div>
          <div className="text-blue-200 text-sm">Total Reach</div>
          <div className="text-xs text-blue-300 mt-2">Across 5 channels</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <Target className="w-8 h-8 text-purple-300 mb-4" />
          <div className="text-3xl font-bold text-white mb-1">{marketingOverview.totalConversions.toLocaleString()}</div>
          <div className="text-purple-200 text-sm">Conversions</div>
          <div className="text-xs text-purple-300 mt-2">4.2% avg rate</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <TrendingUp className="w-8 h-8 text-orange-300 mb-4" />
          <div className="text-3xl font-bold text-white mb-1">₹{(marketingOverview.totalRevenue / 100000).toFixed(1)}L</div>
          <div className="text-orange-200 text-sm">Revenue Generated</div>
          <div className="text-xs text-orange-300 mt-2">From campaigns</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <Award className="w-8 h-8 text-yellow-300 mb-4" />
          <div className="text-3xl font-bold text-white mb-1">{marketingOverview.roi}%</div>
          <div className="text-yellow-200 text-sm">ROI</div>
          <div className="text-xs text-yellow-300 mt-2">Return on Investment</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <Zap className="w-8 h-8 text-pink-300 mb-4" />
          <div className="text-3xl font-bold text-white mb-1">15</div>
          <div className="text-pink-200 text-sm">Active Campaigns</div>
          <div className="text-xs text-pink-300 mt-2">Running now</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10 overflow-x-auto">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'campaigns', label: 'My Campaigns', icon: Megaphone },
          { id: 'templates', label: 'Templates', icon: Zap },
          { id: 'analytics', label: 'Analytics', icon: TrendingUp }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-white/20 text-white shadow-lg'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {merchantChannels.map((channel) => {
              const IconComponent = channel.icon;
              return (
                <div
                  key={channel.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-${channel.color}-500/30 p-6 hover:bg-white/15 transition-all`}
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
                      <div className="text-xl font-bold text-white">{(channel.reach / 1000).toFixed(1)}K</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3">
                      <div className="text-sm text-white/60 mb-1">Revenue</div>
                      <div className="text-xl font-bold text-green-400">₹{(channel.revenue / 1000).toFixed(0)}K</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Budget</span>
                      <span className="text-white font-medium">₹{(channel.budget / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Spent</span>
                      <span className="text-orange-400 font-medium">₹{(channel.spent / 1000).toFixed(0)}K</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/60">ROAS</span>
                      <span className="text-lg font-bold text-green-400">{channel.roas}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Campaigns Tab */}
      {activeTab === 'campaigns' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Active Campaigns</h3>
            <button className="px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-xl text-purple-200 flex items-center gap-2 transition-all">
              <Plus className="w-5 h-5" />
              <span>Create Campaign</span>
            </button>
          </div>

          <div className="space-y-3">
            {activeCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
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
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-white font-medium">{campaign.name}</h4>
                        <span className="text-xs text-white/60">{campaign.id}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <span>{campaign.type}</span>
                        <span>•</span>
                        <span>{campaign.startDate} to {campaign.endDate}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-sm text-white/60 mb-1">Reach</div>
                        <div className="text-white font-medium">{(campaign.reach / 1000).toFixed(1)}K</div>
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-1">Conversions</div>
                        <div className="text-white font-medium">{campaign.conversions}</div>
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-1">Revenue</div>
                        <div className="text-green-400 font-medium">₹{(campaign.revenue / 1000).toFixed(0)}K</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all">
                      <Pause className="w-4 h-4 text-white/60" />
                    </button>
                    <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all">
                      <Edit className="w-4 h-4 text-white/60" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Templates Tab */}
      {activeTab === 'templates' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Campaign Templates</h3>
            <p className="text-white/60">Quick-start templates for common marketing campaigns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campaignTemplates.map((template) => (
              <div key={template.id} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">{template.name}</h4>
                    <p className="text-sm text-white/60 mb-4">{template.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div>
                        <span className="text-white/60">Channel: </span>
                        <span className="text-white capitalize">{template.channel.replace('_', ' ')}</span>
                      </div>
                      <span className="text-white/60">•</span>
                      <div>
                        <span className="text-white/60">Est. Reach: </span>
                        <span className="text-white">{template.estimatedReach.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-sm text-white/60">Est. ROI: </span>
                    <span className="text-lg font-bold text-green-400">{template.estimatedROI}%</span>
                  </div>
                  <button className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-xl text-purple-200 transition-all">
                    Use Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Campaign Performance Analytics</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">Channel Performance</h4>
              <div className="space-y-3">
                {merchantChannels.map((channel) => (
                  <div key={channel.id} className="flex items-center justify-between">
                    <span className="text-white/80">{channel.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-medium">₹{(channel.revenue / 1000).toFixed(0)}K</span>
                      <span className={`px-2 py-1 rounded-lg text-xs ${
                        channel.roas > 500 ? 'bg-green-500/20 text-green-300' :
                        channel.roas > 300 ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-orange-500/20 text-orange-300'
                      }`}>
                        {channel.roas}% ROAS
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">Budget Utilization</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-white/60">Total Budget</span>
                    <span className="text-white">₹{(marketingOverview.totalBudget / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                      style={{ width: `${(marketingOverview.totalSpent / marketingOverview.totalBudget) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-white/60 mt-1">
                    {((marketingOverview.totalSpent / marketingOverview.totalBudget) * 100).toFixed(1)}% utilized
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-white/60 mb-1">Spent</div>
                      <div className="text-2xl font-bold text-orange-400">₹{(marketingOverview.totalSpent / 1000).toFixed(0)}K</div>
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">Remaining</div>
                      <div className="text-2xl font-bold text-green-400">
                        ₹{((marketingOverview.totalBudget - marketingOverview.totalSpent) / 1000).toFixed(0)}K
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantMarketingCampaigns;
