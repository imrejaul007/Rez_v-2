import { useState } from 'react';
import {
  Mail, Send, Users, Eye, MousePointer, Target, TrendingUp, Calendar,
  Plus, Edit, Trash2, Copy, FileText, Layout, Zap, Clock, CheckCircle,
  XCircle, AlertCircle, Download, Filter, Search, BarChart3, UserX,
  ShoppingCart, Bell, UserPlus, Heart, DollarSign, Pause, Play
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminEmailMarketing() {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Weekend Flash Sale Announcement',
      subject: 'Exclusive 48hr Flash Sale - Up to 70% Off!',
      template: 'promotional',
      audience: 'active_buyers',
      audienceSize: 45600,
      status: 'sent',
      scheduledDate: '2025-12-27 09:00:00',
      sentDate: '2025-12-27 09:00:00',
      sent: 45600,
      delivered: 45234,
      opened: 18093,
      clicked: 5428,
      converted: 892,
      bounced: 366,
      unsubscribed: 23,
      revenue: 178400,
      abTest: true,
      variants: ['A: 70% Off', 'B: Limited Time']
    },
    {
      id: 2,
      name: 'Welcome Series - Day 1',
      subject: 'Welcome to ReZ - Your Cashback Journey Starts Now!',
      template: 'welcome',
      audience: 'new_users',
      audienceSize: 1240,
      status: 'active',
      scheduledDate: 'Trigger: New signup',
      sentDate: null,
      sent: 3450,
      delivered: 3421,
      opened: 2394,
      clicked: 1025,
      converted: 512,
      bounced: 29,
      unsubscribed: 8,
      revenue: 51200,
      abTest: false,
      variants: []
    },
    {
      id: 3,
      name: 'Cart Abandonment Recovery',
      subject: "Don't forget! Your cart is waiting...",
      template: 'abandoned_cart',
      audience: 'cart_abandoners',
      audienceSize: 8920,
      status: 'active',
      scheduledDate: 'Trigger: 24hr after abandonment',
      sentDate: null,
      sent: 12340,
      delivered: 12217,
      opened: 6109,
      clicked: 2932,
      converted: 1466,
      bounced: 123,
      unsubscribed: 45,
      revenue: 293200,
      abTest: true,
      variants: ['A: 10% discount', 'B: Free shipping']
    },
    {
      id: 4,
      name: 'Monthly Newsletter - January',
      subject: 'January Cashback Roundup - Earn More, Save More!',
      template: 'newsletter',
      audience: 'all_users',
      audienceSize: 125000,
      status: 'scheduled',
      scheduledDate: '2026-01-01 08:00:00',
      sentDate: null,
      sent: 0,
      delivered: 0,
      opened: 0,
      clicked: 0,
      converted: 0,
      bounced: 0,
      unsubscribed: 0,
      revenue: 0,
      abTest: false,
      variants: []
    },
    {
      id: 5,
      name: 'Re-engagement Campaign',
      subject: 'We Miss You! Come Back for Exclusive Rewards',
      template: 'reengagement',
      audience: 'dormant_users',
      audienceSize: 34500,
      status: 'draft',
      scheduledDate: null,
      sentDate: null,
      sent: 0,
      delivered: 0,
      opened: 0,
      clicked: 0,
      converted: 0,
      bounced: 0,
      unsubscribed: 0,
      revenue: 0,
      abTest: true,
      variants: ['A: 100 bonus coins', 'B: 15% cashback boost']
    },
    {
      id: 6,
      name: 'Premium Membership Invitation',
      subject: 'Unlock VIP Benefits with Prive Membership',
      template: 'promotional',
      audience: 'high_spenders',
      audienceSize: 5670,
      status: 'sent',
      scheduledDate: '2025-12-20 10:00:00',
      sentDate: '2025-12-20 10:00:00',
      sent: 5670,
      delivered: 5623,
      opened: 3374,
      clicked: 1180,
      converted: 284,
      bounced: 47,
      unsubscribed: 12,
      revenue: 568000,
      abTest: false,
      variants: []
    }
  ]);

  const [templates] = useState([
    {
      id: 1,
      name: 'Welcome Email',
      type: 'transactional',
      description: 'First email sent to new users',
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400',
      usageCount: 3450,
      lastUsed: '2025-12-27'
    },
    {
      id: 2,
      name: 'Flash Sale Alert',
      type: 'promotional',
      description: 'Time-sensitive promotional offers',
      thumbnail: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400',
      usageCount: 23,
      lastUsed: '2025-12-27'
    },
    {
      id: 3,
      name: 'Cart Abandonment',
      type: 'abandoned_cart',
      description: 'Recover abandoned shopping carts',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      usageCount: 12340,
      lastUsed: '2025-12-27'
    },
    {
      id: 4,
      name: 'Monthly Newsletter',
      type: 'newsletter',
      description: 'Regular update newsletter',
      thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400',
      usageCount: 12,
      lastUsed: '2025-11-01'
    },
    {
      id: 5,
      name: 'Win-back Campaign',
      type: 'reengagement',
      description: 'Re-engage dormant users',
      thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400',
      usageCount: 0,
      lastUsed: 'Never'
    },
    {
      id: 6,
      name: 'Order Confirmation',
      type: 'transactional',
      description: 'Post-purchase confirmation',
      thumbnail: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400',
      usageCount: 15670,
      lastUsed: '2025-12-27'
    }
  ]);

  const [automations] = useState([
    {
      id: 1,
      name: 'Welcome Series',
      trigger: 'New user signup',
      status: 'active',
      emails: 3,
      sent: 3450,
      conversionRate: 14.8
    },
    {
      id: 2,
      name: 'Cart Abandonment',
      trigger: '24 hours after cart abandonment',
      status: 'active',
      emails: 2,
      sent: 12340,
      conversionRate: 12.0
    },
    {
      id: 3,
      name: 'Post-Purchase Follow-up',
      trigger: '3 days after purchase',
      status: 'active',
      emails: 1,
      sent: 8920,
      conversionRate: 8.5
    },
    {
      id: 4,
      name: 'Dormant User Re-engagement',
      trigger: '30 days of inactivity',
      status: 'paused',
      emails: 2,
      sent: 0,
      conversionRate: 0
    }
  ]);

  const [suppressionList, setSuppressionList] = useState([
    {
      id: 1,
      email: 'user1@example.com',
      reason: 'Unsubscribed',
      date: '2025-12-20',
      campaignName: 'Weekend Flash Sale'
    },
    {
      id: 2,
      email: 'user2@example.com',
      reason: 'Bounced',
      date: '2025-12-19',
      campaignName: 'Monthly Newsletter'
    },
    {
      id: 3,
      email: 'user3@example.com',
      reason: 'Spam Complaint',
      date: '2025-12-18',
      campaignName: 'Flash Sale Alert'
    },
    {
      id: 4,
      email: 'user4@example.com',
      reason: 'Unsubscribed',
      date: '2025-12-15',
      campaignName: 'Cart Abandonment'
    }
  ]);

  const [campaignAnalytics] = useState({
    totalSent: 82060,
    totalDelivered: 81152,
    totalOpened: 35342,
    totalClicked: 10565,
    totalConverted: 3154,
    totalRevenue: 1091200,
    avgOpenRate: 43.5,
    avgClickRate: 12.9,
    avgConversionRate: 3.9,
    topCampaign: 'Cart Abandonment Recovery',
    segmentPerformance: [
      { segment: 'Active Buyers', sent: 45600, openRate: 39.7, clickRate: 11.9, conversionRate: 2.0 },
      { segment: 'New Users', sent: 3450, openRate: 70.0, clickRate: 29.9, conversionRate: 14.8 },
      { segment: 'Cart Abandoners', sent: 12340, openRate: 50.0, clickRate: 24.0, conversionRate: 12.0 },
      { segment: 'High Spenders', sent: 5670, openRate: 59.9, clickRate: 20.9, conversionRate: 5.0 },
      { segment: 'All Users', sent: 0, openRate: 0, clickRate: 0, conversionRate: 0 }
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
        opened: 0,
        clicked: 0,
        converted: 0,
        bounced: 0,
        unsubscribed: 0,
        revenue: 0
      };
      setCampaigns(prev => [...prev, newCampaign]);
    }
  };

  const handleRemoveFromSuppression = (id) => {
    setSuppressionList(prev => prev.filter(item => item.id !== id));
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || campaign.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    const colors = {
      'sent': 'bg-green-100 text-green-700',
      'active': 'bg-blue-100 text-blue-700',
      'scheduled': 'bg-purple-100 text-purple-700',
      'draft': 'bg-gray-100 text-gray-700',
      'paused': 'bg-orange-100 text-orange-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Email Marketing Platform</h1>
              <p className="text-gray-600 mt-1">Create, manage and analyze email campaigns</p>
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Sent</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {(campaignAnalytics.totalSent / 1000).toFixed(0)}K
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
                <p className="text-gray-600 text-sm font-medium">Open Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{campaignAnalytics.avgOpenRate}%</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Click Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{campaignAnalytics.avgClickRate}%</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <MousePointer className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Conversion Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{campaignAnalytics.avgConversionRate}%</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Target className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Revenue</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ₹{(campaignAnalytics.totalRevenue / 100000).toFixed(1)}L
                </p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-indigo-600" />
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
                onClick={() => setActiveTab('automations')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'automations'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Automations
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
                Suppression List
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

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campaign</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Audience</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredCampaigns.map((campaign) => (
                      <tr key={campaign.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{campaign.name}</p>
                            <p className="text-sm text-gray-600">{campaign.subject}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-gray-500 capitalize">
                                {campaign.template.replace(/_/g, ' ')}
                              </span>
                              {campaign.abTest && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-purple-100 text-purple-700">
                                  <Zap className="w-3 h-3 mr-1" />
                                  A/B Test
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm">
                            <p className="font-medium text-gray-900 capitalize">
                              {campaign.audience.replace(/_/g, ' ')}
                            </p>
                            <p className="text-gray-500">{campaign.audienceSize.toLocaleString()} users</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          {campaign.sent > 0 ? (
                            <div className="text-sm space-y-1">
                              <div className="flex items-center gap-2">
                                <Send className="w-3 h-3 text-gray-400" />
                                <span>{campaign.sent.toLocaleString()} sent</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Eye className="w-3 h-3 text-gray-400" />
                                <span>{((campaign.opened / campaign.sent) * 100).toFixed(1)}% open</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MousePointer className="w-3 h-3 text-gray-400" />
                                <span>{((campaign.clicked / campaign.sent) * 100).toFixed(1)}% click</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Target className="w-3 h-3 text-gray-400" />
                                <span>{((campaign.converted / campaign.sent) * 100).toFixed(1)}% convert</span>
                              </div>
                            </div>
                          ) : (
                            <p className="text-sm text-gray-500">Not sent yet</p>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-green-600">
                            {campaign.revenue > 0 ? `₹${(campaign.revenue / 1000).toFixed(0)}K` : '-'}
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                            {campaign.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                              <BarChart3 className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDuplicateCampaign(campaign.id)}
                              className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteCampaign(campaign.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Templates Tab */}
          {activeTab === 'templates' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Email Templates</h3>
                <button
                  onClick={() => setShowTemplateModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  <Plus className="w-4 h-4" />
                  Create Template
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <div key={template.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-100 overflow-hidden">
                      <img
                        src={template.thumbnail}
                        alt={template.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-gray-900">{template.name}</h4>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-blue-100 text-blue-700 capitalize">
                          {template.type.replace(/_/g, ' ')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>Used {template.usageCount.toLocaleString()} times</span>
                        <span>Last: {template.lastUsed}</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                          <Layout className="w-4 h-4" />
                          Use Template
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Automations Tab */}
          {activeTab === 'automations' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Email Automations</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Plus className="w-4 h-4" />
                  Create Automation
                </button>
              </div>

              <div className="space-y-4">
                {automations.map((automation) => (
                  <div key={automation.id} className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-bold text-gray-900">{automation.name}</h4>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(automation.status)}`}>
                            {automation.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <Zap className="w-4 h-4 text-orange-500" />
                          <span>Trigger: {automation.trigger}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {automation.emails} email{automation.emails > 1 ? 's' : ''}
                          </span>
                          <span className="flex items-center gap-1">
                            <Send className="w-4 h-4" />
                            {automation.sent.toLocaleString()} sent
                          </span>
                          <span className="flex items-center gap-1">
                            <Target className="w-4 h-4" />
                            {automation.conversionRate}% conversion rate
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <BarChart3 className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                        {automation.status === 'active' ? (
                          <button className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg">
                            <Pause className="w-5 h-5" />
                          </button>
                        ) : (
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                            <Play className="w-5 h-5" />
                          </button>
                        )}
                      </div>
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">Overall Campaign Performance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-blue-600 font-medium">Delivered</p>
                    <p className="text-2xl font-bold text-gray-900">{campaignAnalytics.totalDelivered.toLocaleString()}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      {((campaignAnalytics.totalDelivered / campaignAnalytics.totalSent) * 100).toFixed(1)}% delivery rate
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-green-600 font-medium">Opened</p>
                    <p className="text-2xl font-bold text-gray-900">{campaignAnalytics.totalOpened.toLocaleString()}</p>
                    <p className="text-xs text-gray-600 mt-1">{campaignAnalytics.avgOpenRate}% open rate</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm text-purple-600 font-medium">Clicked</p>
                    <p className="text-2xl font-bold text-gray-900">{campaignAnalytics.totalClicked.toLocaleString()}</p>
                    <p className="text-xs text-gray-600 mt-1">{campaignAnalytics.avgClickRate}% click rate</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="text-sm text-yellow-600 font-medium">Converted</p>
                    <p className="text-2xl font-bold text-gray-900">{campaignAnalytics.totalConverted.toLocaleString()}</p>
                    <p className="text-xs text-gray-600 mt-1">{campaignAnalytics.avgConversionRate}% conversion rate</p>
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
                  <p className="text-sm text-gray-600">Based on conversion rate</p>
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
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Open Rate</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Click Rate</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conversion Rate</th>
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
                                  style={{ width: `${segment.openRate}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-gray-900">{segment.openRate}%</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                                <div
                                  className="bg-purple-600 h-2 rounded-full"
                                  style={{ width: `${segment.clickRate}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-gray-900">{segment.clickRate}%</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                                <div
                                  className="bg-yellow-600 h-2 rounded-full"
                                  style={{ width: `${segment.conversionRate}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-gray-900">{segment.conversionRate}%</span>
                            </div>
                          </td>
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
                  <h3 className="text-lg font-bold text-gray-900">Suppression List</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Users who have unsubscribed or emails that have bounced
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
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campaign</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {suppressionList.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">{item.email}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            item.reason === 'Unsubscribed' ? 'bg-gray-100 text-gray-700' :
                            item.reason === 'Bounced' ? 'bg-orange-100 text-orange-700' :
                            'bg-red-100 text-red-700'
                          }`}>
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
                  <p className="text-gray-600">No suppressed emails</p>
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
                <h2 className="text-2xl font-bold text-gray-900">Create Email Campaign</h2>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Subject</label>
                  <input
                    type="text"
                    placeholder="Enter email subject line"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Template</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      <option>Welcome Email</option>
                      <option>Promotional Offer</option>
                      <option>Newsletter</option>
                      <option>Cart Abandonment</option>
                      <option>Re-engagement</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      <option>All Users</option>
                      <option>New Users</option>
                      <option>Active Buyers</option>
                      <option>Dormant Users</option>
                      <option>Premium Members</option>
                      <option>High Spenders</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Content</label>
                  <textarea
                    rows="6"
                    placeholder="Enter your email content here..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
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

                <div className="border border-gray-200 rounded-lg p-4 space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-sm font-medium text-gray-700">Enable A/B Testing</span>
                  </label>
                  <p className="text-xs text-gray-500 ml-6">Test different subject lines or content variants</p>
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
