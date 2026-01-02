import React, { useState } from 'react';
import {
  ArrowLeft, Search, MapPin, Monitor, TrendingUp, DollarSign,
  Eye, MousePointer, ShoppingCart, Phone, Navigation,
  Target, Plus, Play, Pause, Edit2, ChevronRight,
  CheckCircle, AlertCircle, ExternalLink, BarChart2,
  Globe, Smartphone, Video, Image, FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantGoogleAdsManager = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('campaigns');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedCampaignType, setSelectedCampaignType] = useState(null);

  const connectionStatus = {
    connected: true,
    accountId: '123-456-7890',
    accountName: 'My Business Ads',
    balance: 25000,
    lastSync: '5 minutes ago'
  };

  const stats = {
    spend: 30000,
    revenue: 98000,
    roas: 3.27,
    impressions: 456789,
    clicks: 8934,
    ctr: 1.96,
    conversions: 289,
    cpc: 33.58,
    calls: 156,
    directions: 234
  };

  const campaigns = [
    {
      id: 1,
      name: 'Search - Brand Keywords',
      type: 'search',
      status: 'active',
      budget: 10000,
      spent: 7800,
      impressions: 123456,
      clicks: 4567,
      ctr: 3.70,
      conversions: 145,
      revenue: 45000,
      roas: 5.77,
      avgPosition: 1.2
    },
    {
      id: 2,
      name: 'Local Services - Near Me',
      type: 'local',
      status: 'active',
      budget: 8000,
      spent: 5600,
      impressions: 89012,
      clicks: 2345,
      ctr: 2.63,
      conversions: 89,
      revenue: 28000,
      roas: 5.00,
      calls: 156,
      directions: 234
    },
    {
      id: 3,
      name: 'Display - Retargeting',
      type: 'display',
      status: 'active',
      budget: 6000,
      spent: 4200,
      impressions: 234567,
      clicks: 1567,
      ctr: 0.67,
      conversions: 45,
      revenue: 18000,
      roas: 4.29
    },
    {
      id: 4,
      name: 'Performance Max',
      type: 'pmax',
      status: 'active',
      budget: 8000,
      spent: 5400,
      impressions: 345678,
      clicks: 2890,
      ctr: 0.84,
      conversions: 78,
      revenue: 24000,
      roas: 4.44
    },
    {
      id: 5,
      name: 'YouTube - Product Demo',
      type: 'video',
      status: 'paused',
      budget: 5000,
      spent: 2300,
      impressions: 156789,
      clicks: 890,
      ctr: 0.57,
      conversions: 23,
      revenue: 7000,
      roas: 3.04,
      views: 45678
    }
  ];

  const keywords = [
    { keyword: 'restaurant near me', impressions: 45678, clicks: 2345, ctr: 5.13, cpc: 25, conversions: 89, status: 'active' },
    { keyword: 'best salon mumbai', impressions: 23456, clicks: 1234, ctr: 5.26, cpc: 30, conversions: 45, status: 'active' },
    { keyword: 'book appointment online', impressions: 12345, clicks: 678, ctr: 5.49, cpc: 28, conversions: 34, status: 'active' },
    { keyword: 'discount offers today', impressions: 34567, clicks: 890, ctr: 2.57, cpc: 22, conversions: 23, status: 'limited' },
    { keyword: 'home delivery food', impressions: 56789, clicks: 1567, ctr: 2.76, cpc: 35, conversions: 56, status: 'active' }
  ];

  const localMetrics = {
    profileViews: 12456,
    websiteClicks: 3456,
    directionRequests: 2345,
    phoneCalls: 1234,
    messagesSent: 567,
    bookings: 234
  };

  const campaignTypes = [
    { id: 'search', name: 'Search', description: 'Text ads on Google Search', icon: Search },
    { id: 'display', name: 'Display', description: 'Image ads across websites', icon: Monitor },
    { id: 'local', name: 'Local', description: 'Promote on Maps & local search', icon: MapPin },
    { id: 'video', name: 'Video', description: 'Video ads on YouTube', icon: Video },
    { id: 'pmax', name: 'Performance Max', description: 'AI-optimized across all channels', icon: Target }
  ];

  const getCampaignTypeIcon = (type) => {
    switch (type) {
      case 'search': return Search;
      case 'display': return Monitor;
      case 'local': return MapPin;
      case 'video': return Video;
      case 'pmax': return Target;
      default: return Globe;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400';
      case 'paused':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'limited':
        return 'bg-orange-500/20 text-orange-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Globe size={24} className="mr-2" />
                Google Ads
              </h1>
              <p className="text-red-100 text-sm">Search, Display, Maps & YouTube</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {connectionStatus.connected && (
              <span className="flex items-center text-sm bg-green-500/20 px-2 py-1 rounded">
                <CheckCircle size={14} className="mr-1" />
                Connected
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(stats.spend/1000).toFixed(0)}K</p>
            <p className="text-xs text-red-100">Spent</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(stats.revenue/1000).toFixed(0)}K</p>
            <p className="text-xs text-red-100">Revenue</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-300">{stats.roas}x</p>
            <p className="text-xs text-red-100">ROAS</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.conversions}</p>
            <p className="text-xs text-red-100">Conv.</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1 overflow-x-auto">
          {[
            { id: 'campaigns', label: 'Campaigns' },
            { id: 'keywords', label: 'Keywords' },
            { id: 'local', label: 'Local/Maps' },
            { id: 'conversions', label: 'Tracking' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-red-600 text-white' : 'text-gray-400'
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
              className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm flex items-center"
            >
              <Plus size={16} className="mr-1" />
              Create Campaign
            </button>
          </div>

          {campaigns.map(campaign => {
            const TypeIcon = getCampaignTypeIcon(campaign.type);
            return (
              <div key={campaign.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">
                      <TypeIcon size={20} className="text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{campaign.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(campaign.status)}`}>
                          {campaign.status}
                        </span>
                        <span className="text-gray-400 text-xs capitalize">{campaign.type}</span>
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
                  </div>
                </div>

                {/* Budget */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Budget</span>
                    <span className="text-white">₹{(campaign.spent/1000).toFixed(1)}K / ₹{(campaign.budget/1000).toFixed(0)}K</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${(campaign.spent/campaign.budget)*100}%` }}
                    />
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold text-sm">{(campaign.clicks/1000).toFixed(1)}K</p>
                    <p className="text-gray-400 text-xs">Clicks</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold text-sm">{campaign.ctr}%</p>
                    <p className="text-gray-400 text-xs">CTR</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold text-sm">{campaign.conversions}</p>
                    <p className="text-gray-400 text-xs">Conv.</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-green-400 font-bold text-sm">{campaign.roas}x</p>
                    <p className="text-gray-400 text-xs">ROAS</p>
                  </div>
                </div>

                {/* Local-specific metrics */}
                {campaign.type === 'local' && (
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Phone size={12} className="mr-1" />
                      {campaign.calls} calls
                    </span>
                    <span className="flex items-center">
                      <Navigation size={12} className="mr-1" />
                      {campaign.directions} directions
                    </span>
                  </div>
                )}

                {campaign.type === 'video' && (
                  <div className="text-sm text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Eye size={12} className="mr-1" />
                      {(campaign.views/1000).toFixed(1)}K video views
                    </span>
                  </div>
                )}

                <button className="w-full text-red-400 text-sm py-2 flex items-center justify-center">
                  View Details <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Keywords Tab */}
      {activeTab === 'keywords' && (
        <div className="px-4 space-y-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <p className="text-red-400 font-medium">Search Keywords</p>
            <p className="text-gray-300 text-sm">Manage keywords for your Search campaigns</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">{keywords.length} keywords</p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
              <Plus size={16} className="mr-1" />
              Add Keywords
            </button>
          </div>

          {keywords.map((kw, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-white font-medium">"{kw.keyword}"</h4>
                  <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(kw.status)}`}>
                    {kw.status}
                  </span>
                </div>
                <button className="text-gray-400">
                  <Edit2 size={14} />
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2 text-center text-sm">
                <div>
                  <p className="text-white font-medium">{(kw.impressions/1000).toFixed(1)}K</p>
                  <p className="text-gray-400 text-xs">Impr.</p>
                </div>
                <div>
                  <p className="text-white font-medium">{kw.clicks}</p>
                  <p className="text-gray-400 text-xs">Clicks</p>
                </div>
                <div>
                  <p className="text-green-400 font-medium">{kw.ctr}%</p>
                  <p className="text-gray-400 text-xs">CTR</p>
                </div>
                <div>
                  <p className="text-white font-medium">₹{kw.cpc}</p>
                  <p className="text-gray-400 text-xs">CPC</p>
                </div>
                <div>
                  <p className="text-white font-medium">{kw.conversions}</p>
                  <p className="text-gray-400 text-xs">Conv.</p>
                </div>
              </div>
            </div>
          ))}

          {/* Keyword Suggestions */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Suggested Keywords</h3>
            <div className="space-y-2">
              {['best deals near me', 'book online now', 'home service', 'same day delivery'].map((kw, idx) => (
                <div key={idx} className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <span className="text-gray-300">"{kw}"</span>
                  <button className="text-red-400 text-sm">+ Add</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Local/Maps Tab */}
      {activeTab === 'local' && (
        <div className="px-4 space-y-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin size={20} className="text-green-400 mr-3" />
                <div>
                  <p className="text-green-400 font-medium">Google Business Profile</p>
                  <p className="text-gray-300 text-sm">Connected & verified</p>
                </div>
              </div>
              <button className="text-green-400 text-sm flex items-center">
                <ExternalLink size={14} className="mr-1" />
                Manage
              </button>
            </div>
          </div>

          {/* Local Metrics */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Local Performance (Last 30 days)</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="flex items-center mb-1">
                  <Eye size={16} className="text-blue-400 mr-2" />
                  <span className="text-gray-400 text-sm">Profile Views</span>
                </div>
                <p className="text-white font-bold text-xl">{localMetrics.profileViews.toLocaleString()}</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="flex items-center mb-1">
                  <Globe size={16} className="text-green-400 mr-2" />
                  <span className="text-gray-400 text-sm">Website Clicks</span>
                </div>
                <p className="text-white font-bold text-xl">{localMetrics.websiteClicks.toLocaleString()}</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="flex items-center mb-1">
                  <Navigation size={16} className="text-purple-400 mr-2" />
                  <span className="text-gray-400 text-sm">Direction Requests</span>
                </div>
                <p className="text-white font-bold text-xl">{localMetrics.directionRequests.toLocaleString()}</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="flex items-center mb-1">
                  <Phone size={16} className="text-orange-400 mr-2" />
                  <span className="text-gray-400 text-sm">Phone Calls</span>
                </div>
                <p className="text-white font-bold text-xl">{localMetrics.phoneCalls.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Local Ads */}
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-bold">Local Search Ads</h3>
              <button className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm">
                + Create
              </button>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Appear at the top when users search "near me" or your area
            </p>

            <div className="bg-gray-700/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Local Services Campaign</span>
                <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs">Active</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>{stats.calls} calls</span>
                <span>{stats.directions} directions</span>
                <span>₹{(stats.spend/1000).toFixed(0)}K spent</span>
              </div>
            </div>
          </div>

          {/* Map Preview */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Your Location on Maps</h3>
            <div className="bg-gray-700 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-red-400 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Map preview</p>
                <p className="text-white font-medium mt-1">Your Business Name</p>
                <p className="text-gray-400 text-xs">123 Main Street, City</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Conversions Tab */}
      {activeTab === 'conversions' && (
        <div className="px-4 space-y-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center">
              <CheckCircle size={20} className="text-green-400 mr-3" />
              <div>
                <p className="text-green-400 font-medium">Conversion Tracking Active</p>
                <p className="text-gray-300 text-sm">Google Tag & Enhanced Conversions enabled</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Conversion Actions</h3>
            <div className="space-y-3">
              {[
                { name: 'Purchase', count: 289, value: 98000, status: 'active' },
                { name: 'Add to Cart', count: 1234, value: 0, status: 'active' },
                { name: 'Phone Call', count: 156, value: 15600, status: 'active' },
                { name: 'Form Submit', count: 89, value: 8900, status: 'active' },
                { name: 'Direction Click', count: 234, value: 0, status: 'active' }
              ].map((conv, idx) => (
                <div key={idx} className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span className="text-white">{conv.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">{conv.count}</p>
                    {conv.value > 0 && (
                      <p className="text-gray-400 text-xs">₹{(conv.value/1000).toFixed(0)}K value</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Attribution Model</h3>
            <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
              <option>Data-driven (Recommended)</option>
              <option>Last click</option>
              <option>First click</option>
              <option>Linear</option>
              <option>Time decay</option>
            </select>
            <p className="text-gray-400 text-sm mt-2">
              Data-driven uses machine learning to distribute credit across touchpoints
            </p>
          </div>
        </div>
      )}

      {/* Create Campaign Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="bg-gray-800 w-full rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto">
            <h3 className="text-white font-bold text-lg mb-4">Create Google Campaign</h3>

            {!selectedCampaignType ? (
              <>
                <p className="text-gray-400 text-sm mb-4">Select campaign type</p>
                <div className="space-y-3">
                  {campaignTypes.map(type => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setSelectedCampaignType(type.id)}
                        className="w-full bg-gray-700 rounded-xl p-4 text-left flex items-start hover:border-2 hover:border-red-500"
                      >
                        <Icon size={24} className="text-red-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">{type.name}</p>
                          <p className="text-gray-400 text-sm">{type.description}</p>
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
                    placeholder="e.g., Holiday Sale Search"
                  />
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
                  <label className="text-gray-400 text-sm block mb-1">Target Locations</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                    placeholder="e.g., Mumbai, Pune, 10km radius"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-1">Bidding Strategy</label>
                  <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                    <option>Maximize Conversions (Recommended)</option>
                    <option>Target CPA</option>
                    <option>Target ROAS</option>
                    <option>Maximize Clicks</option>
                    <option>Manual CPC</option>
                  </select>
                </div>
              </div>
            )}

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setSelectedCampaignType(null);
                }}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              {selectedCampaignType && (
                <button className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold">
                  Create Campaign
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantGoogleAdsManager;
