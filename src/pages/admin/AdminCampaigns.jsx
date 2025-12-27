import { useState } from 'react';
import { Plus, Search, Send, Users, Eye, Edit, Trash2, Copy, Calendar, Target, BarChart3 } from 'lucide-react';

export default function AdminCampaigns() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Weekend Super Sale',
      type: 'promotional',
      status: 'active',
      targetAudience: 'All Users',
      userSegment: 'all',
      totalUsers: 45234,
      sent: 45234,
      opened: 23456,
      clicked: 12345,
      converted: 3456,
      revenue: 456789,
      startDate: '2024-01-20',
      endDate: '2024-01-22',
      createdBy: 'Admin 1',
      createdAt: '2024-01-18'
    },
    {
      id: 2,
      name: 'New User Welcome',
      type: 'onboarding',
      status: 'active',
      targetAudience: 'New Users (< 7 days)',
      userSegment: 'new_users',
      totalUsers: 2345,
      sent: 2345,
      opened: 1890,
      clicked: 1234,
      converted: 890,
      revenue: 89000,
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      createdBy: 'Admin 2',
      createdAt: '2024-01-14'
    },
    {
      id: 3,
      name: 'VIP Customer Rewards',
      type: 'retention',
      status: 'scheduled',
      targetAudience: 'VIP Customers',
      userSegment: 'vip',
      totalUsers: 1234,
      sent: 0,
      opened: 0,
      clicked: 0,
      converted: 0,
      revenue: 0,
      startDate: '2024-01-25',
      endDate: '2024-01-27',
      createdBy: 'Admin 1',
      createdAt: '2024-01-20'
    },
    {
      id: 4,
      name: 'Win-Back Inactive Users',
      type: 'reactivation',
      status: 'active',
      targetAudience: 'Inactive (30+ days)',
      userSegment: 'inactive',
      totalUsers: 5678,
      sent: 5678,
      opened: 2345,
      clicked: 890,
      converted: 234,
      revenue: 34567,
      startDate: '2024-01-18',
      endDate: '2024-01-28',
      createdBy: 'Admin 2',
      createdAt: '2024-01-17'
    },
    {
      id: 5,
      name: 'Flash Sale Alert',
      type: 'promotional',
      status: 'completed',
      targetAudience: 'Active Users',
      userSegment: 'active',
      totalUsers: 23456,
      sent: 23456,
      opened: 15678,
      clicked: 9876,
      converted: 4567,
      revenue: 678901,
      startDate: '2024-01-12',
      endDate: '2024-01-13',
      createdBy: 'Admin 1',
      createdAt: '2024-01-11'
    }
  ]);

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || campaign.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: campaigns.length,
    active: campaigns.filter(c => c.status === 'active').length,
    scheduled: campaigns.filter(c => c.status === 'scheduled').length,
    totalSent: campaigns.reduce((sum, c) => sum + c.sent, 0),
    totalRevenue: campaigns.reduce((sum, c) => sum + c.revenue, 0),
    avgOpenRate: campaigns.reduce((sum, c) => c.sent > 0 ? sum + (c.opened / c.sent) * 100 : sum, 0) / campaigns.filter(c => c.sent > 0).length
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this campaign?')) {
      setCampaigns(prev => prev.filter(c => c.id !== id));
    }
  };

  const handleDuplicate = (id) => {
    const campaignToDuplicate = campaigns.find(c => c.id === id);
    if (campaignToDuplicate) {
      const newCampaign = {
        ...campaignToDuplicate,
        id: Math.max(...campaigns.map(c => c.id)) + 1,
        name: `${campaignToDuplicate.name} (Copy)`,
        status: 'draft',
        sent: 0,
        opened: 0,
        clicked: 0,
        converted: 0,
        revenue: 0
      };
      setCampaigns(prev => [newCampaign, ...prev]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Campaign Management</h1>
              <p className="text-gray-600 mt-1">Create and manage marketing campaigns</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Plus className="w-5 h-5" />
              Create Campaign
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Total Campaigns</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Active</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{stats.active}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Scheduled</p>
            <p className="text-3xl font-bold text-orange-600 mt-2">{stats.scheduled}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Total Sent</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">{(stats.totalSent / 1000).toFixed(1)}K</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Avg Open Rate</p>
            <p className="text-3xl font-bold text-purple-600 mt-2">{stats.avgOpenRate.toFixed(1)}%</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
            <p className="text-3xl font-bold text-green-600 mt-2">₹{(stats.totalRevenue / 1000000).toFixed(1)}M</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="scheduled">Scheduled</option>
              <option value="completed">Completed</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        {/* Campaigns List */}
        <div className="space-y-4">
          {filteredCampaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{campaign.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'active' ? 'bg-green-100 text-green-700' :
                      campaign.status === 'scheduled' ? 'bg-orange-100 text-orange-700' :
                      campaign.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {campaign.status}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                      {campaign.type}
                    </span>
                  </div>
                  <div className="flex gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      {campaign.targetAudience}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {campaign.totalUsers.toLocaleString()} users
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {campaign.startDate} - {campaign.endDate}
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              {campaign.sent > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600">Sent</p>
                    <p className="text-lg font-bold text-gray-900">{campaign.sent.toLocaleString()}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-xs text-blue-600">Opened</p>
                    <p className="text-lg font-bold text-blue-900">{campaign.opened.toLocaleString()}</p>
                    <p className="text-xs text-blue-700">{((campaign.opened / campaign.sent) * 100).toFixed(1)}%</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-xs text-purple-600">Clicked</p>
                    <p className="text-lg font-bold text-purple-900">{campaign.clicked.toLocaleString()}</p>
                    <p className="text-xs text-purple-700">{((campaign.clicked / campaign.sent) * 100).toFixed(1)}%</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-xs text-green-600">Converted</p>
                    <p className="text-lg font-bold text-green-900">{campaign.converted.toLocaleString()}</p>
                    <p className="text-xs text-green-700">{((campaign.converted / campaign.sent) * 100).toFixed(1)}%</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <p className="text-xs text-orange-600">Revenue</p>
                    <p className="text-lg font-bold text-orange-900">₹{(campaign.revenue / 1000).toFixed(1)}K</p>
                    <p className="text-xs text-orange-700">₹{(campaign.revenue / campaign.converted).toFixed(0)}/conv</p>
                  </div>
                </div>
              )}

              {/* Performance Bar */}
              {campaign.sent > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Campaign Performance</span>
                    <span>{((campaign.converted / campaign.sent) * 100).toFixed(2)}% conversion rate</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden flex">
                    <div
                      className="bg-blue-500"
                      style={{ width: `${(campaign.opened / campaign.sent) * 100}%` }}
                      title={`Opened: ${campaign.opened}`}
                    />
                    <div
                      className="bg-purple-500"
                      style={{ width: `${(campaign.clicked / campaign.sent) * 100}%` }}
                      title={`Clicked: ${campaign.clicked}`}
                    />
                    <div
                      className="bg-green-500"
                      style={{ width: `${(campaign.converted / campaign.sent) * 100}%` }}
                      title={`Converted: ${campaign.converted}`}
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Created by {campaign.createdBy} on {campaign.createdAt}
                </p>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                    <BarChart3 className="w-4 h-4" />
                    View Analytics
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDuplicate(campaign.id)}
                    className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    title="Duplicate"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(campaign.id)}
                    className="px-3 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Send className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No campaigns found</h3>
            <p className="text-gray-600 mb-6">Create your first campaign to engage with users</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Plus className="w-5 h-5" />
              Create Your First Campaign
            </button>
          </div>
        )}
      </div>

      {/* Create Campaign Modal (placeholder) */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Create New Campaign</h2>
            <p className="text-gray-600 mb-6">Campaign creation form would go here...</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Create Campaign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
