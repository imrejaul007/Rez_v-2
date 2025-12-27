import { useState } from 'react';
import { Send, Mail, MessageSquare, Bell, Eye, TrendingUp, Users, Target, Plus, Edit, Trash2 } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminMarketing() {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Weekend Special Offers',
      type: 'email',
      status: 'active',
      audience: 'All Active Users',
      sent: 12500,
      opened: 8750,
      clicked: 3125,
      converted: 625,
      revenue: 125000,
      createdDate: '2024-01-15',
      scheduledDate: '2024-01-20'
    },
    {
      id: 2,
      name: 'New User Welcome Campaign',
      type: 'email',
      status: 'completed',
      audience: 'New Users',
      sent: 2340,
      opened: 1872,
      clicked: 936,
      converted: 468,
      revenue: 93600,
      createdDate: '2024-01-10',
      scheduledDate: '2024-01-12'
    },
    {
      id: 3,
      name: 'Flash Sale Alert',
      type: 'push',
      status: 'scheduled',
      audience: 'Premium Members',
      sent: 0,
      opened: 0,
      clicked: 0,
      converted: 0,
      revenue: 0,
      createdDate: '2024-01-20',
      scheduledDate: '2024-01-25'
    },
    {
      id: 4,
      name: 'Referral Bonus Reminder',
      type: 'sms',
      status: 'active',
      audience: 'Users with 0 Referrals',
      sent: 5670,
      opened: 5670,
      clicked: 1134,
      converted: 340,
      revenue: 68000,
      createdDate: '2024-01-18',
      scheduledDate: '2024-01-19'
    }
  ]);

  const [influencerCampaigns] = useState([
    {
      id: 1,
      influencer: 'Sarah (@foodie_sarah)',
      platform: 'Instagram',
      followers: '125K',
      campaign: 'Restaurant Week Promotion',
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-01-30',
      clicks: 3456,
      conversions: 234,
      budget: 50000,
      spent: 25000
    },
    {
      id: 2,
      influencer: 'Mike (@tech_deals)',
      platform: 'YouTube',
      followers: '500K',
      campaign: 'Electronics Cashback',
      status: 'completed',
      startDate: '2024-01-01',
      endDate: '2024-01-15',
      clicks: 12340,
      conversions: 1234,
      budget: 150000,
      spent: 150000
    },
    {
      id: 3,
      influencer: 'Priya (@student_life)',
      platform: 'Instagram',
      followers: '85K',
      campaign: 'Student Discount Awareness',
      status: 'pending',
      startDate: '2024-01-25',
      endDate: '2024-02-10',
      clicks: 0,
      conversions: 0,
      budget: 35000,
      spent: 0
    }
  ]);

  const [contentApprovals, setContentApprovals] = useState([
    {
      id: 1,
      type: 'merchant_offer',
      merchant: 'The Coffee House',
      title: 'Buy 2 Get 1 Free on Lattes',
      description: 'Premium coffee offer for weekend...',
      submittedBy: 'merchant@coffeehouse.com',
      submittedDate: '2024-01-20',
      status: 'pending'
    },
    {
      id: 2,
      type: 'banner',
      merchant: 'Pizza Paradise',
      title: 'New Year Mega Sale Banner',
      description: 'Homepage banner for pizza deals...',
      submittedBy: 'marketing@pizzaparadise.com',
      submittedDate: '2024-01-20',
      status: 'pending'
    },
    {
      id: 3,
      type: 'merchant_offer',
      merchant: 'Fashion Boutique',
      title: 'Flat 50% Off All Categories',
      description: 'End of season sale...',
      submittedBy: 'sales@fashionboutique.com',
      submittedDate: '2024-01-19',
      status: 'approved'
    }
  ]);

  const handleDeleteCampaign = (id) => {
    setCampaigns(prev => prev.filter(c => c.id !== id));
  };

  const handleApproveContent = (id) => {
    setContentApprovals(prev => prev.map(c =>
      c.id === id ? { ...c, status: 'approved' } : c
    ));
  };

  const handleRejectContent = (id) => {
    setContentApprovals(prev => prev.map(c =>
      c.id === id ? { ...c, status: 'rejected' } : c
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Marketing & Campaigns</h1>
              <p className="text-gray-600 mt-1">Create and manage marketing campaigns</p>
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
              <p className="text-gray-600 text-sm font-medium">Active Campaigns</p>
              <Send className="w-8 h-8 text-indigo-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">{campaigns.filter(c => c.status === 'active').length}</p>
            <p className="text-sm text-gray-600 mt-2">Across all channels</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Total Reach</p>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">20.5K</p>
            <p className="text-sm text-green-600 mt-2">This week</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Avg. Click Rate</p>
              <Target className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">28.3%</p>
            <p className="text-sm text-green-600 mt-2">+5.2% from last month</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Campaign Revenue</p>
              <TrendingUp className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">₹2.87L</p>
            <p className="text-sm text-green-600 mt-2">This month</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'campaigns'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Campaigns
              </button>
              <button
                onClick={() => setActiveTab('influencer')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'influencer'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Influencer Campaigns
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'content'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Content Approvals
              </button>
            </nav>
          </div>

          {/* Campaigns Tab */}
          {activeTab === 'campaigns' && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campaign</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Audience</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {campaigns.map((campaign) => (
                      <tr key={campaign.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{campaign.name}</p>
                            <p className="text-xs text-gray-500">Scheduled: {campaign.scheduledDate}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            {campaign.type === 'email' && <Mail className="w-4 h-4 text-blue-500" />}
                            {campaign.type === 'sms' && <MessageSquare className="w-4 h-4 text-green-500" />}
                            {campaign.type === 'push' && <Bell className="w-4 h-4 text-orange-500" />}
                            <span className="text-sm capitalize">{campaign.type}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{campaign.audience}</p>
                          {campaign.sent > 0 && (
                            <p className="text-xs text-gray-500">{campaign.sent.toLocaleString()} sent</p>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          {campaign.sent > 0 ? (
                            <div className="text-sm">
                              <div className="flex items-center gap-2 mb-1">
                                <Eye className="w-3 h-3 text-gray-400" />
                                <span>{((campaign.opened / campaign.sent) * 100).toFixed(1)}% open</span>
                              </div>
                              <div className="flex items-center gap-2 mb-1">
                                <Target className="w-3 h-3 text-gray-400" />
                                <span>{((campaign.clicked / campaign.sent) * 100).toFixed(1)}% click</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="w-3 h-3 text-gray-400" />
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
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            campaign.status === 'active' ? 'bg-green-100 text-green-700' :
                            campaign.status === 'scheduled' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {campaign.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                              <Edit className="w-4 h-4" />
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

          {/* Influencer Campaigns Tab */}
          {activeTab === 'influencer' && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Influencer</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campaign</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Budget</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {influencerCampaigns.map((campaign) => (
                      <tr key={campaign.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{campaign.influencer}</p>
                            <p className="text-xs text-gray-500">{campaign.platform} • {campaign.followers}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{campaign.campaign}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm">
                            <p className="text-gray-900">{campaign.startDate}</p>
                            <p className="text-gray-500">to {campaign.endDate}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm">
                            <p className="text-gray-900">{campaign.clicks.toLocaleString()} clicks</p>
                            <p className="text-green-600">{campaign.conversions.toLocaleString()} conversions</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm">
                            <p className="text-gray-900">₹{(campaign.budget / 1000).toFixed(0)}K total</p>
                            <p className="text-gray-500">₹{(campaign.spent / 1000).toFixed(0)}K spent</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            campaign.status === 'active' ? 'bg-green-100 text-green-700' :
                            campaign.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {campaign.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Content Approvals Tab */}
          {activeTab === 'content' && (
            <div className="p-6">
              <div className="space-y-4">
                {contentApprovals.map((content) => (
                  <div key={content.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            {content.type.replace(/_/g, ' ')}
                          </span>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            content.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            content.status === 'approved' ? 'bg-green-100 text-green-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {content.status}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">{content.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{content.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>Merchant: {content.merchant}</span>
                          <span>By: {content.submittedBy}</span>
                          <span>Date: {content.submittedDate}</span>
                        </div>
                      </div>
                      {content.status === 'pending' && (
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => handleApproveContent(content.id)}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleRejectContent(content.id)}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Campaign Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Create Campaign</h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
                  <input
                    type="text"
                    placeholder="Enter campaign name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Email Campaign</option>
                    <option>SMS Campaign</option>
                    <option>Push Notification</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option>All Active Users</option>
                    <option>Premium Members</option>
                    <option>Student Users</option>
                    <option>New Users</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Schedule Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Create Campaign
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
