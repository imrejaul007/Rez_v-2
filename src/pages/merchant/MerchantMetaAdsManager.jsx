import React, { useState } from 'react';
import {
  ArrowLeft, Facebook, Instagram, TrendingUp, DollarSign,
  Eye, MousePointer, ShoppingCart, Users, Target, Image,
  Video, FileText, Plus, Play, Pause, Edit2, Copy,
  ChevronRight, Calendar, Filter, Download, RefreshCw,
  CheckCircle, AlertCircle, ExternalLink, Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantMetaAdsManager = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('campaigns');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedObjective, setSelectedObjective] = useState(null);

  const connectionStatus = {
    connected: true,
    accountId: 'act_123456789',
    accountName: 'My Business Page',
    adAccountBalance: 15000,
    lastSync: '2 minutes ago'
  };

  const stats = {
    spend: 35000,
    revenue: 125000,
    roas: 3.57,
    impressions: 890123,
    reach: 456789,
    clicks: 15678,
    ctr: 1.76,
    conversions: 412,
    cpc: 22.30,
    cpm: 39.30
  };

  const campaigns = [
    {
      id: 1,
      name: 'Diwali Sale - Conversions',
      objective: 'conversions',
      status: 'active',
      platform: ['facebook', 'instagram'],
      budget: 20000,
      spent: 15678,
      impressions: 456789,
      reach: 234567,
      clicks: 8934,
      conversions: 245,
      revenue: 78000,
      roas: 4.97,
      startDate: '2024-10-25',
      endDate: '2024-11-05'
    },
    {
      id: 2,
      name: 'Brand Awareness - Local',
      objective: 'awareness',
      status: 'active',
      platform: ['instagram'],
      budget: 10000,
      spent: 6500,
      impressions: 345678,
      reach: 178000,
      clicks: 4567,
      conversions: 89,
      revenue: 28000,
      roas: 4.31,
      startDate: '2024-11-01',
      endDate: '2024-11-15'
    },
    {
      id: 3,
      name: 'Retargeting - Cart Abandoners',
      objective: 'conversions',
      status: 'active',
      platform: ['facebook', 'instagram'],
      budget: 8000,
      spent: 5200,
      impressions: 123456,
      reach: 45678,
      clicks: 2345,
      conversions: 78,
      revenue: 19000,
      roas: 3.65,
      startDate: '2024-10-20',
      endDate: '2024-11-20'
    },
    {
      id: 4,
      name: 'New Collection Launch',
      objective: 'traffic',
      status: 'paused',
      platform: ['facebook'],
      budget: 5000,
      spent: 2300,
      impressions: 67890,
      reach: 34567,
      clicks: 1234,
      conversions: 23,
      revenue: 5600,
      roas: 2.43,
      startDate: '2024-10-15',
      endDate: '2024-10-30'
    }
  ];

  const adSets = [
    {
      id: 1,
      campaignId: 1,
      name: 'Women 25-45 - Metro Cities',
      status: 'active',
      budget: 10000,
      spent: 8234,
      reach: 145678,
      clicks: 5678,
      conversions: 156
    },
    {
      id: 2,
      campaignId: 1,
      name: 'Men 25-40 - All India',
      status: 'active',
      budget: 10000,
      spent: 7444,
      reach: 88889,
      clicks: 3256,
      conversions: 89
    }
  ];

  const audiences = [
    {
      id: 1,
      name: 'Website Visitors (30 days)',
      type: 'custom',
      size: 45678,
      status: 'ready'
    },
    {
      id: 2,
      name: 'Cart Abandoners',
      type: 'custom',
      size: 12345,
      status: 'ready'
    },
    {
      id: 3,
      name: 'Past Purchasers',
      type: 'custom',
      size: 8934,
      status: 'ready'
    },
    {
      id: 4,
      name: 'Lookalike - Top Customers',
      type: 'lookalike',
      size: 2500000,
      status: 'ready'
    },
    {
      id: 5,
      name: 'Interest: Fashion & Shopping',
      type: 'saved',
      size: 15000000,
      status: 'ready'
    }
  ];

  const objectives = [
    { id: 'awareness', name: 'Brand Awareness', description: 'Reach people likely to remember your ads', icon: Eye },
    { id: 'traffic', name: 'Traffic', description: 'Send people to your website or app', icon: MousePointer },
    { id: 'engagement', name: 'Engagement', description: 'Get more messages, video views, or post engagement', icon: Users },
    { id: 'leads', name: 'Leads', description: 'Collect leads for your business', icon: FileText },
    { id: 'conversions', name: 'Sales/Conversions', description: 'Find people likely to purchase', icon: ShoppingCart }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400';
      case 'paused':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'ended':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Facebook size={24} className="mr-2" />
                Meta Ads
              </h1>
              <p className="text-blue-200 text-sm">Facebook & Instagram Ads</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {connectionStatus.connected ? (
              <span className="flex items-center text-sm bg-green-500/20 px-2 py-1 rounded">
                <CheckCircle size={14} className="mr-1" />
                Connected
              </span>
            ) : (
              <button className="bg-white/20 px-3 py-1 rounded text-sm">
                Connect Account
              </button>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(stats.spend/1000).toFixed(0)}K</p>
            <p className="text-xs text-blue-200">Spent</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(stats.revenue/1000).toFixed(0)}K</p>
            <p className="text-xs text-blue-200">Revenue</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-300">{stats.roas}x</p>
            <p className="text-xs text-blue-200">ROAS</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.conversions}</p>
            <p className="text-xs text-blue-200">Sales</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1 overflow-x-auto">
          {[
            { id: 'campaigns', label: 'Campaigns' },
            { id: 'audiences', label: 'Audiences' },
            { id: 'creatives', label: 'Creatives' },
            { id: 'pixels', label: 'Pixel' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Campaigns Tab */}
      {activeTab === 'campaigns' && (
        <div className="px-4 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">{campaigns.length} campaigns</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center"
            >
              <Plus size={16} className="mr-1" />
              Create Campaign
            </button>
          </div>

          {campaigns.map(campaign => (
            <div key={campaign.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-white font-bold">{campaign.name}</h3>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                    <span className="text-gray-400 text-xs">{campaign.objective}</span>
                    <div className="flex items-center space-x-1">
                      {campaign.platform.includes('facebook') && (
                        <Facebook size={12} className="text-blue-400" />
                      )}
                      {campaign.platform.includes('instagram') && (
                        <Instagram size={12} className="text-pink-400" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {campaign.status === 'active' ? (
                    <button className="p-2 bg-gray-700 rounded-lg">
                      <Pause size={14} className="text-yellow-400" />
                    </button>
                  ) : (
                    <button className="p-2 bg-gray-700 rounded-lg">
                      <Play size={14} className="text-green-400" />
                    </button>
                  )}
                  <button className="p-2 bg-gray-700 rounded-lg">
                    <Edit2 size={14} className="text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Budget Progress */}
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Budget</span>
                  <span className="text-white">₹{(campaign.spent/1000).toFixed(1)}K / ₹{(campaign.budget/1000).toFixed(0)}K</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(campaign.spent/campaign.budget)*100}%` }}
                  />
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold text-sm">{(campaign.reach/1000).toFixed(0)}K</p>
                  <p className="text-gray-400 text-xs">Reach</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold text-sm">{(campaign.clicks/1000).toFixed(1)}K</p>
                  <p className="text-gray-400 text-xs">Clicks</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold text-sm">{campaign.conversions}</p>
                  <p className="text-gray-400 text-xs">Sales</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-green-400 font-bold text-sm">{campaign.roas}x</p>
                  <p className="text-gray-400 text-xs">ROAS</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{campaign.startDate} → {campaign.endDate}</span>
                <button className="text-blue-400 flex items-center">
                  View Details <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Audiences Tab */}
      {activeTab === 'audiences' && (
        <div className="px-4 space-y-4">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <div className="flex items-start">
              <Users size={20} className="text-blue-400 mr-3 mt-0.5" />
              <div>
                <p className="text-blue-400 font-medium">Custom Audiences</p>
                <p className="text-gray-300 text-sm">Target users based on their interaction with your business</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">{audiences.length} audiences</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
              <Plus size={16} className="mr-1" />
              Create Audience
            </button>
          </div>

          {audiences.map(audience => (
            <div key={audience.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-white font-bold">{audience.name}</h3>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    audience.type === 'custom' ? 'bg-purple-500/20 text-purple-400' :
                    audience.type === 'lookalike' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {audience.type}
                  </span>
                </div>
                <span className="text-green-400 text-sm flex items-center">
                  <CheckCircle size={14} className="mr-1" />
                  {audience.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">
                  {audience.size >= 1000000
                    ? `${(audience.size/1000000).toFixed(1)}M people`
                    : `${(audience.size/1000).toFixed(0)}K people`
                  }
                </span>
                <button className="text-blue-400 text-sm">Use in Campaign</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Creatives Tab */}
      {activeTab === 'creatives' && (
        <div className="px-4 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">Ad Creatives</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
              <Plus size={16} className="mr-1" />
              Upload Creative
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="aspect-square bg-gray-700 flex items-center justify-center">
                  <Image size={32} className="text-gray-500" />
                </div>
                <div className="p-3">
                  <p className="text-white font-medium text-sm">Creative {i}</p>
                  <p className="text-gray-400 text-xs">1080x1080 • Image</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-green-400 text-xs">3.2% CTR</span>
                    <span className="text-gray-400 text-xs">Used in 2 ads</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Creative Tips */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Creative Best Practices</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Use high-quality images (1080x1080 for feed)</li>
              <li>• Keep text minimal - less than 20% of image</li>
              <li>• Include clear call-to-action</li>
              <li>• Test multiple creatives to find winners</li>
            </ul>
          </div>
        </div>
      )}

      {/* Pixel Tab */}
      {activeTab === 'pixels' && (
        <div className="px-4 space-y-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-400 mr-3" />
                <div>
                  <p className="text-green-400 font-medium">Meta Pixel Active</p>
                  <p className="text-gray-300 text-sm">Tracking conversions on your website</p>
                </div>
              </div>
              <button className="text-green-400 text-sm">Test Events</button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Event Tracking (Last 7 days)</h3>
            <div className="space-y-3">
              {[
                { event: 'PageView', count: 45678, status: 'active' },
                { event: 'ViewContent', count: 23456, status: 'active' },
                { event: 'AddToCart', count: 8934, status: 'active' },
                { event: 'InitiateCheckout', count: 4567, status: 'active' },
                { event: 'Purchase', count: 1234, status: 'active' }
              ].map(event => (
                <div key={event.event} className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center">
                    <Zap size={16} className="text-blue-400 mr-2" />
                    <span className="text-white">{event.event}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400">{event.count.toLocaleString()} events</span>
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Conversions API</h3>
            <p className="text-gray-400 text-sm mb-3">
              Server-side tracking for better attribution accuracy
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-400 flex items-center">
                <CheckCircle size={14} className="mr-1" />
                Connected via ReZ
              </span>
              <button className="text-blue-400 text-sm">View Settings</button>
            </div>
          </div>
        </div>
      )}

      {/* Create Campaign Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="bg-gray-800 w-full rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto">
            <h3 className="text-white font-bold text-lg mb-4">Create Meta Campaign</h3>

            {!selectedObjective ? (
              <>
                <p className="text-gray-400 text-sm mb-4">Select your campaign objective</p>
                <div className="space-y-3">
                  {objectives.map(obj => {
                    const Icon = obj.icon;
                    return (
                      <button
                        key={obj.id}
                        onClick={() => setSelectedObjective(obj.id)}
                        className="w-full bg-gray-700 rounded-xl p-4 text-left flex items-start hover:border-2 hover:border-blue-500"
                      >
                        <Icon size={24} className="text-blue-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">{obj.name}</p>
                          <p className="text-gray-400 text-sm">{obj.description}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
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
                  <label className="text-gray-400 text-sm block mb-2">Platforms</label>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center">
                      <Facebook size={18} className="mr-2" />
                      Facebook
                    </button>
                    <button className="flex-1 bg-gray-700 text-white py-3 rounded-lg flex items-center justify-center">
                      <Instagram size={18} className="mr-2" />
                      Instagram
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-1">Daily Budget</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                    <input
                      type="number"
                      className="w-full bg-gray-700 rounded-lg pl-8 pr-4 py-3 text-white"
                      placeholder="1,000"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-1">Target Audience</label>
                  <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                    <option>Website Visitors (30 days)</option>
                    <option>Cart Abandoners</option>
                    <option>Past Purchasers</option>
                    <option>Lookalike - Top Customers</option>
                    <option>Create New Audience</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-gray-400 text-sm block mb-1">Start Date</label>
                    <input type="date" className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white" />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-1">End Date</label>
                    <input type="date" className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white" />
                  </div>
                </div>
              </div>
            )}

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setSelectedObjective(null);
                }}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              {selectedObjective && (
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold">
                  Create Campaign
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default MerchantMetaAdsManager;
