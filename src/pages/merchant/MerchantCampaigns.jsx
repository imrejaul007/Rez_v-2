import { useState } from 'react';
import {
  Megaphone, Plus, Search, Filter, Target, MapPin, Tag, Hash, Grid3x3,
  Bell, MessageCircle, Image as ImageIcon, Globe, Radio, Calendar,
  TrendingUp, Users, Eye, MousePointer, ShoppingCart, DollarSign,
  Clock, Play, Pause, CheckCircle, XCircle, AlertCircle, Edit2,
  Copy, Trash2, BarChart3, Zap, Send, Download, Upload, Settings
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantCampaigns() {
  const [showCreateWizard, setShowCreateWizard] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [selectedTargeting, setSelectedTargeting] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterChannel, setFilterChannel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Campaign Creation Form State
  const [campaignForm, setCampaignForm] = useState({
    name: '',
    duration: { start: '', end: '' },
    budget: '',
    targetingType: [],
    channels: [],
    schedule: 'immediate',
    abTesting: false,
    locations: [],
    offers: [],
    keywords: [],
    categories: []
  });

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Summer Sale Push Campaign',
      status: 'active',
      channels: ['push', 'whatsapp'],
      targeting: ['location', 'category'],
      budget: 50000,
      spent: 32450,
      duration: { start: '2024-01-01', end: '2024-01-31' },
      metrics: {
        impressions: 45678,
        clicks: 3456,
        conversions: 234,
        ctr: 7.6,
        conversionRate: 6.8,
        roi: 320
      },
      audience: {
        estimated: 12500,
        reached: 8900
      },
      createdAt: '2024-01-01',
      schedule: 'immediate'
    },
    {
      id: 2,
      name: 'Weekend Special - Multi-Channel',
      status: 'scheduled',
      channels: ['push', 'inapp', 'facebook'],
      targeting: ['offer', 'keyword'],
      budget: 75000,
      spent: 0,
      duration: { start: '2024-02-01', end: '2024-02-03' },
      metrics: {
        impressions: 0,
        clicks: 0,
        conversions: 0,
        ctr: 0,
        conversionRate: 0,
        roi: 0
      },
      audience: {
        estimated: 25000,
        reached: 0
      },
      createdAt: '2024-01-25',
      schedule: 'scheduled'
    },
    {
      id: 3,
      name: 'New Product Launch - Full Funnel',
      status: 'pending_approval',
      channels: ['push', 'whatsapp', 'google', 'instagram', 'offline'],
      targeting: ['location', 'category', 'keyword'],
      budget: 150000,
      spent: 0,
      duration: { start: '2024-02-05', end: '2024-02-20' },
      metrics: {
        impressions: 0,
        clicks: 0,
        conversions: 0,
        ctr: 0,
        conversionRate: 0,
        roi: 0
      },
      audience: {
        estimated: 50000,
        reached: 0
      },
      createdAt: '2024-01-26',
      schedule: 'scheduled'
    },
    {
      id: 4,
      name: 'Flash Sale - 4 Hour Blitz',
      status: 'completed',
      channels: ['push', 'inapp'],
      targeting: ['location', 'offer'],
      budget: 25000,
      spent: 24890,
      duration: { start: '2024-01-20', end: '2024-01-20' },
      metrics: {
        impressions: 18900,
        clicks: 2340,
        conversions: 456,
        ctr: 12.4,
        conversionRate: 19.5,
        roi: 580
      },
      audience: {
        estimated: 8000,
        reached: 7890
      },
      createdAt: '2024-01-20',
      schedule: 'immediate'
    },
    {
      id: 5,
      name: 'Holiday Season - Awareness Drive',
      status: 'paused',
      channels: ['facebook', 'instagram', 'google', 'offline'],
      targeting: ['location', 'category', 'keyword'],
      budget: 200000,
      spent: 89500,
      duration: { start: '2023-12-15', end: '2024-01-15' },
      metrics: {
        impressions: 234500,
        clicks: 12340,
        conversions: 890,
        ctr: 5.3,
        conversionRate: 7.2,
        roi: 145
      },
      audience: {
        estimated: 100000,
        reached: 67800
      },
      createdAt: '2023-12-10',
      schedule: 'recurring'
    },
    {
      id: 6,
      name: 'VIP Customer Retention',
      status: 'rejected',
      channels: ['whatsapp', 'push'],
      targeting: ['offer'],
      budget: 30000,
      spent: 0,
      duration: { start: '2024-01-28', end: '2024-02-10' },
      metrics: {
        impressions: 0,
        clicks: 0,
        conversions: 0,
        ctr: 0,
        conversionRate: 0,
        roi: 0
      },
      audience: {
        estimated: 1200,
        reached: 0
      },
      createdAt: '2024-01-24',
      schedule: 'immediate',
      rejectionReason: 'Budget exceeds recommended spend for target audience size'
    }
  ]);

  const channelOptions = [
    {
      id: 'push',
      name: 'Push Notifications',
      icon: Bell,
      color: 'indigo',
      description: 'In-app push notifications',
      costPer1000: 50,
      estimatedReach: '80%'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Messages',
      icon: MessageCircle,
      color: 'green',
      description: 'WhatsApp marketing messages',
      costPer1000: 200,
      estimatedReach: '65%'
    },
    {
      id: 'inapp',
      name: 'In-App Ads',
      icon: ImageIcon,
      color: 'purple',
      description: 'Banner, popup, native ads',
      costPer1000: 100,
      estimatedReach: '90%'
    },
    {
      id: 'google',
      name: 'Google Ads',
      icon: Globe,
      color: 'blue',
      description: 'Search & Display ads',
      costPer1000: 500,
      estimatedReach: '150%'
    },
    {
      id: 'facebook',
      name: 'Facebook Ads',
      icon: Globe,
      color: 'blue',
      description: 'Facebook marketing',
      costPer1000: 300,
      estimatedReach: '120%'
    },
    {
      id: 'instagram',
      name: 'Instagram Ads',
      icon: ImageIcon,
      color: 'pink',
      description: 'Instagram sponsored posts',
      costPer1000: 350,
      estimatedReach: '110%'
    },
    {
      id: 'offline',
      name: 'Offline Ads',
      icon: Radio,
      color: 'gray',
      description: 'Print, radio, billboards',
      costPer1000: 1000,
      estimatedReach: '200%'
    }
  ];

  const targetingOptions = [
    {
      id: 'location',
      name: 'Location-based',
      icon: MapPin,
      color: 'red',
      description: 'Target by city, area, or radius'
    },
    {
      id: 'offer',
      name: 'Offer-based',
      icon: Tag,
      color: 'orange',
      description: 'Target specific offers or products'
    },
    {
      id: 'keyword',
      name: 'Keyword-based',
      icon: Hash,
      color: 'blue',
      description: 'Target by search terms & interests'
    },
    {
      id: 'category',
      name: 'Category-based',
      icon: Grid3x3,
      color: 'purple',
      description: 'Target by product categories'
    }
  ];

  const statusConfig = {
    draft: { color: 'gray', icon: Edit2, label: 'Draft' },
    pending_approval: { color: 'yellow', icon: Clock, label: 'Pending Approval' },
    approved: { color: 'green', icon: CheckCircle, label: 'Approved' },
    active: { color: 'green', icon: Play, label: 'Active' },
    paused: { color: 'orange', icon: Pause, label: 'Paused' },
    completed: { color: 'blue', icon: CheckCircle, label: 'Completed' },
    rejected: { color: 'red', icon: XCircle, label: 'Rejected' },
    scheduled: { color: 'purple', icon: Calendar, label: 'Scheduled' }
  };

  const getChannelIcon = (channelId) => {
    const channel = channelOptions.find(c => c.id === channelId);
    return channel ? channel.icon : Globe;
  };

  const getChannelColor = (channelId) => {
    const channel = channelOptions.find(c => c.id === channelId);
    return channel ? channel.color : 'gray';
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesStatus = filterStatus === 'all' || campaign.status === filterStatus;
    const matchesChannel = filterChannel === 'all' || campaign.channels.includes(filterChannel);
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesChannel && matchesSearch;
  });

  const renderCampaignWizard = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Wizard Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Create New Campaign</h2>
            <button
              onClick={() => {
                setShowCreateWizard(false);
                setCurrentStep(1);
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <XCircle className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-2">
            {['Details', 'Targeting', 'Channels', 'Review'].map((step, index) => (
              <div key={step} className="flex items-center flex-1">
                <div className={`flex items-center gap-2 flex-1 ${
                  currentStep > index + 1 ? 'text-green-600' :
                  currentStep === index + 1 ? 'text-indigo-600' : 'text-gray-400'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                    currentStep > index + 1 ? 'bg-green-100' :
                    currentStep === index + 1 ? 'bg-indigo-100' : 'bg-gray-100'
                  }`}>
                    {currentStep > index + 1 ? <CheckCircle className="w-5 h-5" /> : index + 1}
                  </div>
                  <span className="text-sm font-medium hidden sm:block">{step}</span>
                </div>
                {index < 3 && (
                  <div className={`h-0.5 w-full mx-2 ${
                    currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6">
          {/* Step 1: Campaign Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="e.g., Summer Sale 2024"
                  value={campaignForm.name}
                  onChange={(e) => setCampaignForm({...campaignForm, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={campaignForm.duration.start}
                    onChange={(e) => setCampaignForm({
                      ...campaignForm,
                      duration: {...campaignForm.duration, start: e.target.value}
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date *
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={campaignForm.duration.end}
                    onChange={(e) => setCampaignForm({
                      ...campaignForm,
                      duration: {...campaignForm.duration, end: e.target.value}
                    })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Budget (₹) *
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="50000"
                  value={campaignForm.budget}
                  onChange={(e) => setCampaignForm({...campaignForm, budget: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Schedule Type *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['immediate', 'scheduled', 'recurring'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setCampaignForm({...campaignForm, schedule: type})}
                      className={`p-4 border-2 rounded-lg text-center transition-all ${
                        campaignForm.schedule === type
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <p className="font-medium text-gray-900 capitalize">{type}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {type === 'immediate' && 'Start now'}
                        {type === 'scheduled' && 'Start on date'}
                        {type === 'recurring' && 'Repeat daily'}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <input
                  type="checkbox"
                  id="abTesting"
                  checked={campaignForm.abTesting}
                  onChange={(e) => setCampaignForm({...campaignForm, abTesting: e.target.checked})}
                  className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                />
                <label htmlFor="abTesting" className="flex-1 cursor-pointer">
                  <p className="font-medium text-gray-900">Enable A/B Testing</p>
                  <p className="text-sm text-gray-600">Test multiple variants to optimize performance</p>
                </label>
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          )}

          {/* Step 2: Targeting */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Select Targeting Options</h3>
                <div className="grid grid-cols-2 gap-4">
                  {targetingOptions.map((option) => {
                    const Icon = option.icon;
                    const isSelected = selectedTargeting.includes(option.id);
                    return (
                      <button
                        key={option.id}
                        onClick={() => {
                          if (isSelected) {
                            setSelectedTargeting(selectedTargeting.filter(t => t !== option.id));
                          } else {
                            setSelectedTargeting([...selectedTargeting, option.id]);
                          }
                        }}
                        className={`p-4 border-2 rounded-lg text-left transition-all ${
                          isSelected
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg bg-${option.color}-100`}>
                            <Icon className={`w-5 h-5 text-${option.color}-600`} />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{option.name}</p>
                            <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                          </div>
                          {isSelected && <CheckCircle className="w-5 h-5 text-indigo-600" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Targeting Fields */}
              {selectedTargeting.includes('location') && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Location Targeting</h4>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Enter city, area, or postal code"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <div>
                      <label className="text-sm text-gray-600">Radius (km)</label>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        defaultValue="10"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              )}

              {selectedTargeting.includes('offer') && (
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Offer Targeting</h4>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                    <option>Select offers to promote</option>
                    <option>50% OFF Pizza</option>
                    <option>Buy 1 Get 1 Coffee</option>
                    <option>Lunch Special</option>
                  </select>
                </div>
              )}

              {selectedTargeting.includes('keyword') && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Keyword Targeting</h4>
                  <input
                    type="text"
                    placeholder="Enter keywords separated by commas"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              )}

              {selectedTargeting.includes('category') && (
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Category Targeting</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {['Food & Dining', 'Shopping', 'Entertainment', 'Services'].map((cat) => (
                      <label key={cat} className="flex items-center gap-2 p-2 hover:bg-white rounded cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Estimated Audience Size</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {(selectedTargeting.length * 5000).toLocaleString()}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Channels */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Select Marketing Channels</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {channelOptions.map((channel) => {
                    const Icon = channel.icon;
                    const isSelected = selectedChannels.includes(channel.id);
                    return (
                      <button
                        key={channel.id}
                        onClick={() => {
                          if (isSelected) {
                            setSelectedChannels(selectedChannels.filter(c => c !== channel.id));
                          } else {
                            setSelectedChannels([...selectedChannels, channel.id]);
                          }
                        }}
                        className={`p-4 border-2 rounded-lg text-left transition-all ${
                          isSelected
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-${channel.color}-100`}>
                              <Icon className={`w-5 h-5 text-${channel.color}-600`} />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{channel.name}</p>
                              <p className="text-sm text-gray-600">{channel.description}</p>
                            </div>
                          </div>
                          {isSelected && <CheckCircle className="w-5 h-5 text-indigo-600" />}
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">₹{channel.costPer1000}/1K</span>
                          <span className="text-green-600">{channel.estimatedReach} reach</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedChannels.length > 0 && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900">Estimated Campaign Reach</p>
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-3xl font-bold text-green-600">
                    {(selectedChannels.length * 8500).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Expected engagement rate: {(selectedChannels.length * 2.5).toFixed(1)}%
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Campaign Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Campaign Name:</span>
                    <span className="font-medium text-gray-900">{campaignForm.name || 'Not set'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium text-gray-900">
                      {campaignForm.duration.start} to {campaignForm.duration.end}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Budget:</span>
                    <span className="font-medium text-gray-900">₹{campaignForm.budget || '0'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Schedule:</span>
                    <span className="font-medium text-gray-900 capitalize">{campaignForm.schedule}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Channels:</span>
                    <span className="font-medium text-gray-900">{selectedChannels.length} selected</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Targeting:</span>
                    <span className="font-medium text-gray-900">{selectedTargeting.length} options</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">A/B Testing:</span>
                    <span className="font-medium text-gray-900">{campaignForm.abTesting ? 'Enabled' : 'Disabled'}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Est. Impressions</p>
                  <p className="text-xl font-bold text-gray-900">
                    {(selectedChannels.length * 15000).toLocaleString()}
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <MousePointer className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Est. Clicks</p>
                  <p className="text-xl font-bold text-gray-900">
                    {(selectedChannels.length * 1200).toLocaleString()}
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                  <ShoppingCart className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Est. Conversions</p>
                  <p className="text-xl font-bold text-gray-900">
                    {(selectedChannels.length * 90).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Admin Approval Required</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Campaigns with budget over ₹50,000 require admin approval before activation.
                      Expected approval time: 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Wizard Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowCreateWizard(false);
                  setCurrentStep(1);
                  alert('Campaign submitted for approval!');
                }}
                className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Send className="w-4 h-4" />
                Submit Campaign
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Campaign Management</h1>
              <p className="text-gray-600 mt-1">Create and manage multi-channel marketing campaigns</p>
            </div>
            <button
              onClick={() => setShowCreateWizard(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Plus className="w-5 h-5" />
              Create Campaign
            </button>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Play className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm font-medium">Active Campaigns</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {campaigns.filter(c => c.status === 'active').length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm font-medium">Total Impressions</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {campaigns.reduce((sum, c) => sum + c.metrics.impressions, 0).toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <MousePointer className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm font-medium">Total Clicks</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {campaigns.reduce((sum, c) => sum + c.metrics.clicks, 0).toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm font-medium">Avg ROI</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {(campaigns.reduce((sum, c) => sum + c.metrics.roi, 0) / campaigns.filter(c => c.metrics.roi > 0).length || 0).toFixed(0)}%
            </p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="scheduled">Scheduled</option>
                <option value="paused">Paused</option>
                <option value="completed">Completed</option>
                <option value="pending_approval">Pending Approval</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div>
              <select
                value={filterChannel}
                onChange={(e) => setFilterChannel(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Channels</option>
                {channelOptions.map((channel) => (
                  <option key={channel.id} value={channel.id}>{channel.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Campaign List */}
        <div className="space-y-4">
          {filteredCampaigns.map((campaign) => {
            const statusInfo = statusConfig[campaign.status];
            const StatusIcon = statusInfo.icon;

            return (
              <div key={campaign.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{campaign.name}</h3>
                        <span className={`flex items-center gap-1 px-3 py-1 bg-${statusInfo.color}-100 text-${statusInfo.color}-700 text-sm font-medium rounded-full`}>
                          <StatusIcon className="w-4 h-4" />
                          {statusInfo.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {campaign.duration.start} - {campaign.duration.end}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          ₹{campaign.spent.toLocaleString()} / ₹{campaign.budget.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {campaign.status === 'active' && (
                        <button className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg">
                          <Pause className="w-5 h-5" />
                        </button>
                      )}
                      {campaign.status === 'paused' && (
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                          <Play className="w-5 h-5" />
                        </button>
                      )}
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <Copy className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Channels */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-gray-600">Channels:</span>
                    <div className="flex gap-2">
                      {campaign.channels.map((channelId) => {
                        const ChannelIcon = getChannelIcon(channelId);
                        const color = getChannelColor(channelId);
                        return (
                          <div
                            key={channelId}
                            className={`p-2 bg-${color}-100 rounded-lg`}
                            title={channelOptions.find(c => c.id === channelId)?.name}
                          >
                            <ChannelIcon className={`w-4 h-4 text-${color}-600`} />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Metrics */}
                  {campaign.status !== 'pending_approval' && campaign.status !== 'rejected' && (
                    <div className="grid grid-cols-5 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Impressions</p>
                        <p className="text-lg font-bold text-gray-900">
                          {campaign.metrics.impressions.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Clicks</p>
                        <p className="text-lg font-bold text-gray-900">
                          {campaign.metrics.clicks.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Conversions</p>
                        <p className="text-lg font-bold text-gray-900">
                          {campaign.metrics.conversions.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">CTR</p>
                        <p className="text-lg font-bold text-green-600">
                          {campaign.metrics.ctr}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">ROI</p>
                        <p className="text-lg font-bold text-purple-600">
                          {campaign.metrics.roi}%
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Rejection Reason */}
                  {campaign.status === 'rejected' && campaign.rejectionReason && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-700">
                        <strong>Rejection Reason:</strong> {campaign.rejectionReason}
                      </p>
                    </div>
                  )}

                  {/* Budget Progress */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span className="text-gray-600">Budget Usage</span>
                      <span className="font-medium text-gray-900">
                        {((campaign.spent / campaign.budget) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          (campaign.spent / campaign.budget) > 0.9 ? 'bg-red-500' :
                          (campaign.spent / campaign.budget) > 0.7 ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${Math.min((campaign.spent / campaign.budget) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Megaphone className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No campaigns found</h3>
            <p className="text-gray-600 mb-4">
              {searchQuery || filterStatus !== 'all' || filterChannel !== 'all'
                ? 'Try adjusting your filters'
                : 'Create your first campaign to start promoting your offers'}
            </p>
            <button
              onClick={() => setShowCreateWizard(true)}
              className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Plus className="w-5 h-5" />
              Create Campaign
            </button>
          </div>
        )}
      </div>

      {/* Campaign Creation Wizard Modal */}
      {showCreateWizard && renderCampaignWizard()}
    </div>
  );
}
