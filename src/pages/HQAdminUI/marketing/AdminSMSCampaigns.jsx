import { useState } from 'react';
import {
  MessageSquare, Plus, Send, Users, Eye, TrendingUp, Target, DollarSign,
  Calendar, Clock, CheckCircle, XCircle, AlertCircle, Play, Pause, Edit,
  Trash2, Copy, Search, Filter, Download, BarChart3, Link as LinkIcon,
  UserX, PhoneOff, Zap
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminSMSCampaigns() {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [smsContent, setSmsContent] = useState('');

  const [smsStats] = useState({
    totalSent: 145670,
    totalDelivered: 142345,
    totalFailed: 3325,
    totalOptOuts: 456,
    deliveryRate: 97.7,
    avgCost: 0.45,
    totalCost: 65551,
    avgClickRate: 8.5
  });

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Weekend Flash Sale Alert',
      message: 'FLASH SALE! Get up to 70% OFF this weekend. Shop now: https://rez.app/flash Limited time only!',
      template: 'promotional',
      audience: 'active_buyers',
      audienceSize: 45600,
      status: 'sent',
      scheduledDate: '2025-12-27 09:00:00',
      sentDate: '2025-12-27 09:00:00',
      sent: 45600,
      delivered: 44567,
      failed: 1033,
      optOuts: 23,
      clicked: 3789,
      clickRate: 8.5,
      costPerSMS: 0.45,
      totalCost: 20520,
      shortUrl: 'https://rez.app/fl2a',
      clicks: 3789
    },
    {
      id: 2,
      name: 'OTP Verification Messages',
      message: 'Your ReZ verification code is: {{OTP}}. Valid for 10 minutes. Do not share this code.',
      template: 'transactional',
      audience: 'all_users',
      audienceSize: 125000,
      status: 'active',
      scheduledDate: 'Trigger: Login/Signup',
      sentDate: null,
      sent: 67890,
      delivered: 67234,
      failed: 656,
      optOuts: 0,
      clicked: 0,
      clickRate: 0,
      costPerSMS: 0.35,
      totalCost: 23762,
      shortUrl: null,
      clicks: 0
    },
    {
      id: 3,
      name: 'Cashback Credited Alert',
      message: 'Congrats! ₹{{AMOUNT}} cashback credited to your ReZ wallet. Total balance: ₹{{BALANCE}}. Happy shopping!',
      template: 'transactional',
      audience: 'transaction_users',
      audienceSize: 23450,
      status: 'active',
      scheduledDate: 'Trigger: Cashback credit',
      sentDate: null,
      sent: 15670,
      delivered: 15456,
      failed: 214,
      optOuts: 12,
      clicked: 0,
      clickRate: 0,
      costPerSMS: 0.40,
      totalCost: 6268,
      shortUrl: null,
      clicks: 0
    },
    {
      id: 4,
      name: 'Premium Membership Offer',
      message: 'Unlock VIP benefits with Prive! Get 2X cashback + exclusive deals. Join now: https://rez.app/prive',
      template: 'promotional',
      audience: 'high_spenders',
      audienceSize: 5670,
      status: 'scheduled',
      scheduledDate: '2025-12-28 10:00:00',
      sentDate: null,
      sent: 0,
      delivered: 0,
      failed: 0,
      optOuts: 0,
      clicked: 0,
      clickRate: 0,
      costPerSMS: 0.45,
      totalCost: 0,
      shortUrl: 'https://rez.app/pv8x',
      clicks: 0
    },
    {
      id: 5,
      name: 'Cart Abandonment Reminder',
      message: "Don't forget! Items in your cart are waiting. Complete your order now: https://rez.app/cart REPLY STOP to opt-out",
      template: 'promotional',
      audience: 'cart_abandoners',
      audienceSize: 8920,
      status: 'sent',
      scheduledDate: '2025-12-26 18:00:00',
      sentDate: '2025-12-26 18:00:00',
      sent: 8920,
      delivered: 8734,
      failed: 186,
      optOuts: 45,
      clicked: 892,
      clickRate: 10.2,
      costPerSMS: 0.45,
      totalCost: 4014,
      shortUrl: 'https://rez.app/ct5b',
      clicks: 892
    },
    {
      id: 6,
      name: 'New Year Special Campaign',
      message: 'Happy New Year! Start 2026 with EXTRA rewards. Use code NY2026 for 20% cashback: https://rez.app/ny26',
      template: 'promotional',
      audience: 'all_users',
      audienceSize: 125000,
      status: 'draft',
      scheduledDate: null,
      sentDate: null,
      sent: 0,
      delivered: 0,
      failed: 0,
      optOuts: 0,
      clicked: 0,
      clickRate: 0,
      costPerSMS: 0.45,
      totalCost: 0,
      shortUrl: 'https://rez.app/ny2k',
      clicks: 0
    }
  ]);

  const [templates] = useState([
    {
      id: 1,
      name: 'Flash Sale Alert',
      type: 'promotional',
      content: 'FLASH SALE! Get {{DISCOUNT}}% OFF on {{CATEGORY}}. Shop now: {{LINK}} Limited time!',
      usageCount: 234,
      charCount: 82
    },
    {
      id: 2,
      name: 'OTP Verification',
      type: 'transactional',
      content: 'Your ReZ verification code is: {{OTP}}. Valid for 10 minutes. Do not share.',
      usageCount: 67890,
      charCount: 71
    },
    {
      id: 3,
      name: 'Order Confirmation',
      type: 'transactional',
      content: 'Order confirmed! Order ID: {{ORDER_ID}}. Track here: {{LINK}} Thank you for shopping!',
      usageCount: 12340,
      charCount: 78
    },
    {
      id: 4,
      name: 'Cashback Alert',
      type: 'transactional',
      content: '₹{{AMOUNT}} cashback credited! Balance: ₹{{BALANCE}}. Keep shopping for more rewards!',
      usageCount: 15670,
      charCount: 76
    },
    {
      id: 5,
      name: 'Payment Reminder',
      type: 'alerts',
      content: 'Payment reminder: ₹{{AMOUNT}} due on {{DATE}}. Pay now: {{LINK}} REPLY STOP to unsubscribe',
      usageCount: 890,
      charCount: 84
    },
    {
      id: 6,
      name: 'Welcome Message',
      type: 'promotional',
      content: 'Welcome to ReZ! Get ₹100 bonus. Start earning cashback on every purchase: {{LINK}}',
      usageCount: 5670,
      charCount: 78
    }
  ]);

  const [suppressionList, setSuppressionList] = useState([
    {
      id: 1,
      phoneNumber: '+91-9876543210',
      reason: 'Opted Out',
      date: '2025-12-20',
      campaignName: 'Weekend Flash Sale'
    },
    {
      id: 2,
      phoneNumber: '+91-9876543211',
      reason: 'Invalid Number',
      date: '2025-12-19',
      campaignName: 'Cart Abandonment'
    },
    {
      id: 3,
      phoneNumber: '+91-9876543212',
      reason: 'DND Registered',
      date: '2025-12-18',
      campaignName: 'Premium Membership'
    },
    {
      id: 4,
      phoneNumber: '+91-9876543213',
      reason: 'Opted Out',
      date: '2025-12-15',
      campaignName: 'Flash Sale Alert'
    }
  ]);

  const [campaignAnalytics] = useState({
    totalSent: 145670,
    totalDelivered: 142345,
    totalFailed: 3325,
    totalClicked: 5573,
    deliveryRate: 97.7,
    avgClickRate: 3.9,
    totalCost: 65551,
    avgCostPerSMS: 0.45,
    topCampaign: 'Cart Abandonment Reminder',
    segmentPerformance: [
      { segment: 'Active Buyers', sent: 45600, deliveryRate: 97.7, clickRate: 8.5, cost: 20520 },
      { segment: 'Cart Abandoners', sent: 8920, deliveryRate: 97.9, clickRate: 10.2, cost: 4014 },
      { segment: 'High Spenders', sent: 5670, deliveryRate: 98.1, clickRate: 12.4, cost: 2552 },
      { segment: 'Transaction Users', sent: 15670, deliveryRate: 98.6, clickRate: 0, cost: 6268 },
      { segment: 'All Users', sent: 67890, deliveryRate: 99.0, clickRate: 0, cost: 23762 }
    ]
  });

  const handleDeleteCampaign = (id) => {
    setCampaigns(prev => prev.filter(c => c.id !== id));
  };

  const handleDuplicateCampaign = (id) => {
    const campaign = campaigns.find(c => c.id === id);
    if (campaign) {
      const newCampaign = {
        ...campaign,
        id: Math.max(...campaigns.map(c => c.id)) + 1,
        name: `${campaign.name} (Copy)`,
        status: 'draft',
        sent: 0,
        delivered: 0,
        failed: 0,
        optOuts: 0,
        clicked: 0,
        clickRate: 0,
        totalCost: 0
      };
      setCampaigns(prev => [...prev, newCampaign]);
    }
  };

  const handleRemoveFromSuppression = (id) => {
    setSuppressionList(prev => prev.filter(item => item.id !== id));
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || campaign.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    const colors = {
      sent: 'bg-green-100 text-green-700',
      active: 'bg-blue-100 text-blue-700',
      scheduled: 'bg-purple-100 text-purple-700',
      draft: 'bg-gray-100 text-gray-700',
      paused: 'bg-orange-100 text-orange-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const calculateCharCount = (text) => {
    return text.length;
  };

  const getSMSCount = (charCount) => {
    if (charCount <= 160) return 1;
    if (charCount <= 306) return 2;
    if (charCount <= 459) return 3;
    return Math.ceil(charCount / 153);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">SMS Campaign Manager</h1>
              <p className="text-gray-600 mt-1">Create and manage SMS marketing campaigns</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Campaign
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Sent</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {(smsStats.totalSent / 1000).toFixed(0)}K
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Send className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Delivery Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{smsStats.deliveryRate}%</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Click Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{smsStats.avgClickRate}%</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Cost</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">₹{(smsStats.totalCost / 1000).toFixed(1)}K</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'campaigns'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Campaigns
              </button>
              <button
                onClick={() => setActiveTab('templates')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'templates'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Templates
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'analytics'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Analytics
              </button>
              <button
                onClick={() => setActiveTab('suppression')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'suppression'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Suppression List ({suppressionList.length})
              </button>
            </nav>
          </div>

          {/* Campaigns Tab */}
          {activeTab === 'campaigns' && (
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search campaigns..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Status</option>
                  <option value="sent">Sent</option>
                  <option value="active">Active</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              <div className="space-y-4">
                {filteredCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageSquare className="w-5 h-5 text-indigo-600" />
                          <h3 className="text-lg font-bold text-gray-900">{campaign.name}</h3>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                            {campaign.status}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 capitalize">
                            {campaign.template}
                          </span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                          <p className="text-sm text-gray-900 font-mono">{campaign.message}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                            <span>{calculateCharCount(campaign.message)} characters</span>
                            <span>{getSMSCount(calculateCharCount(campaign.message))} SMS</span>
                            {campaign.shortUrl && (
                              <span className="flex items-center gap-1 text-blue-600">
                                <LinkIcon className="w-3 h-3" />
                                {campaign.shortUrl}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4 text-sm">
                          <div>
                            <p className="text-gray-600">Audience</p>
                            <p className="font-medium text-gray-900 capitalize">
                              {campaign.audience.replace(/_/g, ' ')}
                            </p>
                            <p className="text-xs text-gray-500">{campaign.audienceSize.toLocaleString()} users</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Sent</p>
                            <p className="font-medium text-gray-900">{campaign.sent.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Delivered</p>
                            <p className="font-medium text-green-600">{campaign.delivered.toLocaleString()}</p>
                            <p className="text-xs text-gray-500">
                              {campaign.sent > 0 ? ((campaign.delivered / campaign.sent) * 100).toFixed(1) : 0}%
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-600">Failed</p>
                            <p className="font-medium text-red-600">{campaign.failed.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Opt-outs</p>
                            <p className="font-medium text-orange-600">{campaign.optOuts.toLocaleString()}</p>
                          </div>
                          {campaign.clicks > 0 && (
                            <div>
                              <p className="text-gray-600">Clicks</p>
                              <p className="font-medium text-blue-600">{campaign.clicks.toLocaleString()}</p>
                              <p className="text-xs text-gray-500">{campaign.clickRate}% CTR</p>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {campaign.scheduledDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            Cost: ₹{campaign.totalCost.toLocaleString()}
                            {campaign.sent > 0 && ` (₹${campaign.costPerSMS}/SMS)`}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                        <BarChart3 className="w-4 h-4" />
                        Analytics
                      </button>
                      <button className="flex items-center gap-1 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDuplicateCampaign(campaign.id)}
                        className="flex items-center gap-1 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm"
                      >
                        <Copy className="w-4 h-4" />
                        Duplicate
                      </button>
                      <button
                        onClick={() => handleDeleteCampaign(campaign.id)}
                        className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Templates Tab */}
          {activeTab === 'templates' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">SMS Templates</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Plus className="w-4 h-4" />
                  Create Template
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates.map((template) => (
                  <div key={template.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <MessageSquare className="w-5 h-5 text-indigo-600" />
                      <h4 className="font-bold text-gray-900">{template.name}</h4>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-blue-100 text-blue-700 capitalize ml-auto">
                        {template.type}
                      </span>
                    </div>
                    <div className="bg-gray-50 rounded p-3 mb-3 border border-gray-200">
                      <p className="text-sm text-gray-900 font-mono">{template.content}</p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <span>{template.charCount} characters ({getSMSCount(template.charCount)} SMS)</span>
                      <span>Used {template.usageCount.toLocaleString()} times</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                        Use Template
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Overall SMS Performance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-blue-600 font-medium">Total Sent</p>
                    <p className="text-2xl font-bold text-gray-900">{campaignAnalytics.totalSent.toLocaleString()}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-green-600 font-medium">Delivered</p>
                    <p className="text-2xl font-bold text-gray-900">{campaignAnalytics.totalDelivered.toLocaleString()}</p>
                    <p className="text-xs text-gray-600 mt-1">{campaignAnalytics.deliveryRate}% delivery rate</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-sm text-red-600 font-medium">Failed</p>
                    <p className="text-2xl font-bold text-gray-900">{campaignAnalytics.totalFailed.toLocaleString()}</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm text-purple-600 font-medium">Clicked</p>
                    <p className="text-2xl font-bold text-gray-900">{campaignAnalytics.totalClicked.toLocaleString()}</p>
                    <p className="text-xs text-gray-600 mt-1">{campaignAnalytics.avgClickRate}% click rate</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Cost Analysis
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Total Campaign Cost</p>
                    <p className="text-3xl font-bold text-gray-900">₹{campaignAnalytics.totalCost.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Average Cost per SMS</p>
                    <p className="text-3xl font-bold text-gray-900">₹{campaignAnalytics.avgCostPerSMS}</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Top Performing Campaign
                </h3>
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-3">
                    <Target className="w-8 h-8 text-yellow-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{campaignAnalytics.topCampaign}</p>
                  <p className="text-sm text-gray-600">Based on click-through rate</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Performance by Segment
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Segment</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sent</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Delivery Rate</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Click Rate</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {campaignAnalytics.segmentPerformance.map((segment, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-900">{segment.segment}</td>
                          <td className="px-4 py-3 text-gray-900">{segment.sent.toLocaleString()}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                                <div
                                  className="bg-green-600 h-2 rounded-full"
                                  style={{ width: `${segment.deliveryRate}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-gray-900">{segment.deliveryRate}%</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className="text-sm font-medium text-gray-900">{segment.clickRate}%</span>
                          </td>
                          <td className="px-4 py-3 font-semibold text-gray-900">₹{segment.cost.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Suppression List Tab */}
          {activeTab === 'suppression' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Suppression List (DND Compliance)</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Numbers that have opted out or are invalid
                  </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Download className="w-4 h-4" />
                  Export List
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone Number</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campaign</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {suppressionList.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900 font-mono">{item.phoneNumber}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            item.reason === 'Opted Out' ? 'bg-orange-100 text-orange-700' :
                            item.reason === 'Invalid Number' ? 'bg-red-100 text-red-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {item.reason === 'Opted Out' && <PhoneOff className="w-3 h-3 mr-1" />}
                            {item.reason === 'Invalid Number' && <XCircle className="w-3 h-3 mr-1" />}
                            {item.reason}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.campaignName}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{item.date}</td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={() => handleRemoveFromSuppression(item.id)}
                            className="text-sm text-red-600 hover:text-red-700 font-medium"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {suppressionList.length === 0 && (
                <div className="text-center py-12">
                  <UserX className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No suppressed numbers</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Create Campaign Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full my-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Create SMS Campaign</h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
                  <input
                    type="text"
                    placeholder="Enter campaign name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SMS Message</label>
                  <textarea
                    rows="4"
                    placeholder="Enter your SMS message..."
                    value={smsContent}
                    onChange={(e) => setSmsContent(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-mono"
                  ></textarea>
                  <div className="flex items-center justify-between mt-2 text-sm">
                    <div className="flex items-center gap-4">
                      <span className={`font-medium ${calculateCharCount(smsContent) > 160 ? 'text-orange-600' : 'text-gray-600'}`}>
                        {calculateCharCount(smsContent)} / 160 characters
                      </span>
                      <span className="text-gray-600">
                        {getSMSCount(calculateCharCount(smsContent))} SMS
                      </span>
                      <span className="text-gray-600">
                        Est. cost: ₹{(getSMSCount(calculateCharCount(smsContent)) * 0.45).toFixed(2)} per recipient
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Template Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      <option>Promotional</option>
                      <option>Transactional</option>
                      <option>OTP</option>
                      <option>Alerts</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      <option>All Users</option>
                      <option>Active Buyers</option>
                      <option>Cart Abandoners</option>
                      <option>High Spenders</option>
                      <option>Dormant Users</option>
                      <option>New Users</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Send Time</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      <option>Send Immediately</option>
                      <option>Schedule for Later</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Schedule Date & Time</label>
                    <input
                      type="datetime-local"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Short URL (Optional)</label>
                  <input
                    type="text"
                    placeholder="https://rez.app/abc123"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="border border-gray-200 rounded-lg p-4 space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-sm font-medium text-gray-700">Include opt-out instructions (REPLY STOP to opt-out)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-sm font-medium text-gray-700">Track link clicks</span>
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Create & Send
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  >
                    Save as Draft
                  </button>
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
