import React, { useState } from 'react';
import {
  ArrowLeft, MessageCircle, Phone, Send, Users, Bot,
  Settings, CheckCircle, XCircle, Clock, Zap, Filter,
  Search, ChevronRight, Plus, Play, Pause, Edit2,
  Copy, ExternalLink, AlertCircle, TrendingUp, Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantWhatsAppBusiness = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [showChatbotModal, setShowChatbotModal] = useState(false);

  const stats = {
    totalContacts: 12456,
    messagesThisMonth: 45678,
    deliveryRate: 98.5,
    readRate: 72.3,
    responseRate: 45.2,
    activeCampaigns: 3
  };

  const templates = [
    {
      id: 1,
      name: 'Order Confirmation',
      category: 'TRANSACTIONAL',
      status: 'approved',
      language: 'en',
      components: ['Header: Image', 'Body: Order details', 'Footer: Support link'],
      usageCount: 8934
    },
    {
      id: 2,
      name: 'Delivery Update',
      category: 'TRANSACTIONAL',
      status: 'approved',
      language: 'en',
      components: ['Body: Tracking info', 'Button: Track Order'],
      usageCount: 12456
    },
    {
      id: 3,
      name: 'Payment Reminder',
      category: 'UTILITY',
      status: 'approved',
      language: 'en_hi',
      components: ['Body: Payment pending', 'Button: Pay Now'],
      usageCount: 3245
    },
    {
      id: 4,
      name: 'Promotional Offer',
      category: 'MARKETING',
      status: 'pending',
      language: 'en',
      components: ['Header: Image', 'Body: Offer details', 'Button: Shop Now'],
      usageCount: 0
    },
    {
      id: 5,
      name: 'Feedback Request',
      category: 'UTILITY',
      status: 'approved',
      language: 'en',
      components: ['Body: Rating request', 'Button: Rate Us'],
      usageCount: 5678
    }
  ];

  const chatbotFlows = [
    {
      id: 1,
      name: 'Order Status Bot',
      trigger: 'order status, track order, where is my order',
      status: 'active',
      responses: 156789,
      successRate: 89.5
    },
    {
      id: 2,
      name: 'Store Hours Bot',
      trigger: 'timing, open, close, hours',
      status: 'active',
      responses: 23456,
      successRate: 95.2
    },
    {
      id: 3,
      name: 'Menu/Catalog Bot',
      trigger: 'menu, catalog, products, price',
      status: 'active',
      responses: 45678,
      successRate: 82.3
    },
    {
      id: 4,
      name: 'Support Escalation',
      trigger: 'help, support, complaint, issue',
      status: 'active',
      responses: 12345,
      successRate: 78.9
    },
    {
      id: 5,
      name: 'Reservation Bot',
      trigger: 'book, reserve, table, appointment',
      status: 'paused',
      responses: 8765,
      successRate: 85.4
    }
  ];

  const campaigns = [
    {
      id: 1,
      name: 'Diwali Sale Announcement',
      template: 'Promotional Offer',
      audience: 5000,
      sent: 4856,
      delivered: 4789,
      read: 3245,
      clicked: 1234,
      status: 'completed',
      date: '2024-10-28'
    },
    {
      id: 2,
      name: 'New Menu Launch',
      template: 'Promotional Offer',
      audience: 8000,
      sent: 7654,
      delivered: 7543,
      read: 5678,
      clicked: 2345,
      status: 'active',
      date: '2024-11-01'
    },
    {
      id: 3,
      name: 'Loyalty Points Reminder',
      template: 'Payment Reminder',
      audience: 3000,
      sent: 0,
      delivered: 0,
      read: 0,
      clicked: 0,
      status: 'scheduled',
      date: '2024-11-05'
    }
  ];

  const recentChats = [
    {
      id: 1,
      phone: '+91 98765 43210',
      name: 'Rahul Sharma',
      lastMessage: 'Where is my order?',
      time: '2 min ago',
      unread: 2,
      botHandled: true
    },
    {
      id: 2,
      phone: '+91 87654 32109',
      name: 'Priya Patel',
      lastMessage: 'Thanks for the quick delivery!',
      time: '15 min ago',
      unread: 0,
      botHandled: false
    },
    {
      id: 3,
      phone: '+91 76543 21098',
      name: 'Amit Kumar',
      lastMessage: 'Do you have vegetarian options?',
      time: '32 min ago',
      unread: 1,
      botHandled: true
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
      case 'active':
      case 'completed':
        return 'bg-green-500/20 text-green-400';
      case 'pending':
      case 'scheduled':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'rejected':
      case 'paused':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <MessageCircle size={24} className="mr-2" />
                WhatsApp Business
              </h1>
              <p className="text-green-200 text-sm">Customer messaging platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
            <span className="text-sm">Connected</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{(stats.totalContacts/1000).toFixed(1)}K</p>
            <p className="text-xs text-green-200">Contacts</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.deliveryRate}%</p>
            <p className="text-xs text-green-200">Delivery</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.readRate}%</p>
            <p className="text-xs text-green-200">Read Rate</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'templates', label: 'Templates' },
            { id: 'chatbot', label: 'Chatbot' },
            { id: 'campaigns', label: 'Campaigns' },
            { id: 'chats', label: 'Chats' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-green-600 text-white' : 'text-gray-400'
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
          {/* Connection Status */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-400 mr-3 mt-0.5" />
              <div className="flex-1">
                <p className="text-green-400 font-medium">WhatsApp Business API Connected</p>
                <p className="text-gray-300 text-sm">Phone: +91 98765 00000 | WABA ID: 123456789</p>
              </div>
              <button className="text-green-400">
                <Settings size={18} />
              </button>
            </div>
          </div>

          {/* Monthly Stats */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">This Month</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <Send size={18} className="text-green-400" />
                  <span className="text-green-400 text-xs">+12%</span>
                </div>
                <p className="text-white font-bold text-xl mt-2">{(stats.messagesThisMonth/1000).toFixed(1)}K</p>
                <p className="text-gray-400 text-sm">Messages Sent</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <Users size={18} className="text-blue-400" />
                  <span className="text-green-400 text-xs">+8%</span>
                </div>
                <p className="text-white font-bold text-xl mt-2">{stats.responseRate}%</p>
                <p className="text-gray-400 text-sm">Response Rate</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <Bot size={18} className="text-purple-400" />
                  <span className="text-green-400 text-xs">+15%</span>
                </div>
                <p className="text-white font-bold text-xl mt-2">78%</p>
                <p className="text-gray-400 text-sm">Bot Handled</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <Zap size={18} className="text-yellow-400" />
                  <span className="text-gray-400 text-xs">Active</span>
                </div>
                <p className="text-white font-bold text-xl mt-2">{stats.activeCampaigns}</p>
                <p className="text-gray-400 text-sm">Campaigns</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setShowTemplateModal(true)}
                className="bg-gray-700 rounded-lg p-3 text-left"
              >
                <Send size={20} className="text-green-400 mb-2" />
                <p className="text-white font-medium text-sm">Create Template</p>
                <p className="text-gray-400 text-xs">New message template</p>
              </button>
              <button
                onClick={() => setActiveTab('campaigns')}
                className="bg-gray-700 rounded-lg p-3 text-left"
              >
                <TrendingUp size={20} className="text-blue-400 mb-2" />
                <p className="text-white font-medium text-sm">New Campaign</p>
                <p className="text-gray-400 text-xs">Broadcast messages</p>
              </button>
              <button
                onClick={() => setShowChatbotModal(true)}
                className="bg-gray-700 rounded-lg p-3 text-left"
              >
                <Bot size={20} className="text-purple-400 mb-2" />
                <p className="text-white font-medium text-sm">Edit Chatbot</p>
                <p className="text-gray-400 text-xs">Auto-reply flows</p>
              </button>
              <button
                onClick={() => setActiveTab('chats')}
                className="bg-gray-700 rounded-lg p-3 text-left"
              >
                <MessageCircle size={20} className="text-cyan-400 mb-2" />
                <p className="text-white font-medium text-sm">View Chats</p>
                <p className="text-gray-400 text-xs">Customer messages</p>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                  <Send size={14} className="text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm">Order confirmation sent to +91 98765 43210</p>
                  <p className="text-gray-400 text-xs">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                  <Bot size={14} className="text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm">Bot handled "track order" query</p>
                  <p className="text-gray-400 text-xs">5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                  <Users size={14} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm">New opt-in: +91 87654 32109</p>
                  <p className="text-gray-400 text-xs">12 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Templates Tab */}
      {activeTab === 'templates' && (
        <div className="px-4 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">{templates.length} templates</p>
            <button
              onClick={() => setShowTemplateModal(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm flex items-center"
            >
              <Plus size={16} className="mr-1" />
              New Template
            </button>
          </div>

          {templates.map(template => (
            <div key={template.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white font-bold">{template.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(template.status)}`}>
                      {template.status}
                    </span>
                    <span className="text-gray-400 text-xs">{template.category}</span>
                    <span className="text-gray-400 text-xs">• {template.language}</span>
                  </div>
                </div>
                <button className="text-gray-400">
                  <Edit2 size={16} />
                </button>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                <p className="text-gray-300 text-sm">
                  {template.components.join(' → ')}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">
                  Used {template.usageCount.toLocaleString()} times
                </span>
                <button className="text-green-400 flex items-center">
                  Preview <Eye size={14} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Chatbot Tab */}
      {activeTab === 'chatbot' && (
        <div className="px-4 space-y-4">
          {/* Chatbot Status */}
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <Bot size={20} className="text-purple-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-purple-400 font-medium">AI Chatbot Active</p>
                  <p className="text-gray-300 text-sm">Handling 78% of queries automatically</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">ON</span>
                <div className="w-12 h-6 bg-green-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">{chatbotFlows.length} flows configured</p>
            <button
              onClick={() => setShowChatbotModal(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm flex items-center"
            >
              <Plus size={16} className="mr-1" />
              Add Flow
            </button>
          </div>

          {chatbotFlows.map(flow => (
            <div key={flow.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-white font-bold">{flow.name}</h3>
                    <span className={`ml-2 px-2 py-0.5 rounded text-xs ${getStatusColor(flow.status)}`}>
                      {flow.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">
                    Triggers: {flow.trigger}
                  </p>
                </div>
                <button className="text-gray-400">
                  {flow.status === 'active' ? <Pause size={18} /> : <Play size={18} />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">{(flow.responses/1000).toFixed(1)}K</p>
                  <p className="text-gray-400 text-xs">Responses</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className={`font-bold ${flow.successRate >= 85 ? 'text-green-400' : 'text-yellow-400'}`}>
                    {flow.successRate}%
                  </p>
                  <p className="text-gray-400 text-xs">Success Rate</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Campaigns Tab */}
      {activeTab === 'campaigns' && (
        <div className="px-4 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">{campaigns.length} campaigns</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
              <Plus size={16} className="mr-1" />
              New Campaign
            </button>
          </div>

          {campaigns.map(campaign => (
            <div key={campaign.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white font-bold">{campaign.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                    <span className="text-gray-400 text-xs">{campaign.date}</span>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-400" />
              </div>

              <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Audience</span>
                  <span className="text-white">{campaign.audience.toLocaleString()}</span>
                </div>
                {campaign.status !== 'scheduled' && (
                  <>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Delivered</span>
                      <span className="text-green-400">
                        {campaign.delivered.toLocaleString()} ({((campaign.delivered/campaign.sent)*100).toFixed(1)}%)
                      </span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Read</span>
                      <span className="text-blue-400">
                        {campaign.read.toLocaleString()} ({((campaign.read/campaign.delivered)*100).toFixed(1)}%)
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Clicked</span>
                      <span className="text-purple-400">
                        {campaign.clicked.toLocaleString()} ({((campaign.clicked/campaign.read)*100).toFixed(1)}%)
                      </span>
                    </div>
                  </>
                )}
              </div>

              {campaign.status === 'scheduled' && (
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm">
                    Edit
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm">
                    Send Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Chats Tab */}
      {activeTab === 'chats' && (
        <div className="px-4 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full bg-gray-800 rounded-xl pl-10 pr-4 py-3 text-white"
            />
          </div>

          {/* Filter */}
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-green-600 text-white rounded-full text-sm">All</button>
            <button className="px-4 py-2 bg-gray-800 text-gray-400 rounded-full text-sm">Unread</button>
            <button className="px-4 py-2 bg-gray-800 text-gray-400 rounded-full text-sm">Bot Handled</button>
            <button className="px-4 py-2 bg-gray-800 text-gray-400 rounded-full text-sm">Needs Reply</button>
          </div>

          {/* Chat List */}
          <div className="space-y-2">
            {recentChats.map(chat => (
              <div key={chat.id} className="bg-gray-800 rounded-xl p-4 flex items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">{chat.name.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium">{chat.name}</h3>
                    <span className="text-gray-400 text-xs">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-gray-400 text-sm truncate flex-1 mr-2">{chat.lastMessage}</p>
                    <div className="flex items-center space-x-2">
                      {chat.botHandled && (
                        <Bot size={14} className="text-purple-400" />
                      )}
                      {chat.unread > 0 && (
                        <span className="w-5 h-5 bg-green-600 rounded-full text-white text-xs flex items-center justify-center">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-400 ml-2" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Template Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="bg-gray-800 w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <h3 className="text-white font-bold text-lg mb-4">Create Template</h3>

            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm block mb-1">Template Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                  placeholder="e.g., Order Update"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Category</label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                  <option>TRANSACTIONAL</option>
                  <option>MARKETING</option>
                  <option>UTILITY</option>
                </select>
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Language</label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                  <option value="en_hi">English + Hindi</option>
                </select>
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Header (Optional)</label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                  <option>None</option>
                  <option>Text</option>
                  <option>Image</option>
                  <option>Video</option>
                  <option>Document</option>
                </select>
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Body Text</label>
                <textarea
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white h-32"
                  placeholder="Use {{1}}, {{2}} for variables..."
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Footer (Optional)</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                  placeholder="e.g., Reply STOP to opt-out"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Buttons (Optional)</label>
                <div className="space-y-2">
                  <button className="w-full border border-dashed border-gray-600 rounded-lg py-3 text-gray-400 text-sm">
                    + Add Button
                  </button>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowTemplateModal(false)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowTemplateModal(false)}
                className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold"
              >
                Submit for Approval
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chatbot Flow Modal */}
      {showChatbotModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="bg-gray-800 w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <h3 className="text-white font-bold text-lg mb-4">Add Chatbot Flow</h3>

            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm block mb-1">Flow Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                  placeholder="e.g., Product Inquiry Bot"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Trigger Keywords</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                  placeholder="e.g., price, cost, how much"
                />
                <p className="text-gray-500 text-xs mt-1">Comma-separated keywords</p>
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Response Type</label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                  <option>Static Response</option>
                  <option>Dynamic (API Lookup)</option>
                  <option>Interactive Menu</option>
                  <option>Escalate to Human</option>
                </select>
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Response Message</label>
                <textarea
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white h-32"
                  placeholder="Enter the bot response..."
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Enable AI Enhancement</span>
                <div className="w-12 h-6 bg-purple-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowChatbotModal(false)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowChatbotModal(false)}
                className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-bold"
              >
                Save Flow
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default MerchantWhatsAppBusiness;
