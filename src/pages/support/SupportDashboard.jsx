import { useState } from 'react';
import { Headphones, MessageCircle, Phone, Mail, FileText, Search, HelpCircle, CheckCircle, Clock } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

// Backend API: GET /api/support/tickets
// Backend API: POST /api/support/create-ticket
// Backend API: GET /api/support/faq

export default function SupportDashboard() {
  const [activeTab, setActiveTab] = useState('tickets');

  const myTickets = [
    {
      id: 'TICK-1234',
      subject: 'Order delivery delayed',
      status: 'in_progress',
      createdAt: '2026-01-02',
      lastUpdate: '2 hours ago',
      category: 'Delivery',
      priority: 'high'
    },
    {
      id: 'TICK-1198',
      subject: 'Payment refund query',
      status: 'resolved',
      createdAt: '2025-12-30',
      lastUpdate: '1 day ago',
      category: 'Payments',
      priority: 'medium'
    },
    {
      id: 'TICK-1087',
      subject: 'Account verification issue',
      status: 'pending',
      createdAt: '2025-12-28',
      lastUpdate: '3 days ago',
      category: 'Account',
      priority: 'low'
    }
  ];

  const faqCategories = [
    {
      id: 1,
      name: 'Orders & Delivery',
      icon: '📦',
      questions: 12,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Payments & Refunds',
      icon: '💳',
      questions: 15,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      name: 'ReZ Coins & Wallet',
      icon: '💰',
      questions: 10,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      name: 'Account & Settings',
      icon: '👤',
      questions: 8,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const quickActions = [
    {
      id: 1,
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with support',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 2,
      icon: Phone,
      title: 'Call Support',
      description: '1800-XXX-XXXX',
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 3,
      icon: Mail,
      title: 'Email Us',
      description: 'support@rez.app',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 4,
      icon: FileText,
      title: 'New Ticket',
      description: 'Create ticket',
      color: 'from-orange-600 to-red-600'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-700';
      case 'in_progress':
        return 'bg-blue-100 text-blue-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'resolved':
        return CheckCircle;
      case 'in_progress':
        return Clock;
      default:
        return HelpCircle;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Headphones className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Support Center</h1>
            <p className="text-blue-100">We're here to help 24/7</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full pl-12 pr-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:bg-white/30"
          />
        </div>
      </div>

      <div className="p-4">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.id}
                className={`bg-gradient-to-br ${action.color} text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all cursor-pointer`}
              >
                <Icon className="w-8 h-8 mb-2" />
                <h3 className="font-bold text-lg mb-1">{action.title}</h3>
                <p className="text-white/80 text-sm">{action.description}</p>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {['tickets', 'faq'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab === 'tickets' ? 'My Tickets' : 'FAQ'}
            </button>
          ))}
        </div>

        {/* My Tickets Tab */}
        {activeTab === 'tickets' && (
          <div className="space-y-4">
            {myTickets.length === 0 ? (
              <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">No tickets yet</h3>
                <p className="text-gray-600 text-sm">Create a ticket if you need assistance</p>
              </div>
            ) : (
              myTickets.map((ticket) => {
                const StatusIcon = getStatusIcon(ticket.status);
                return (
                  <div
                    key={ticket.id}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-sm text-gray-500">{ticket.id}</span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                            {ticket.status.replace('_', ' ')}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">{ticket.subject}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span>{ticket.category}</span>
                          <span>•</span>
                          <span className={`font-medium ${getPriorityColor(ticket.priority)}`}>
                            {ticket.priority.toUpperCase()} Priority
                          </span>
                        </div>
                      </div>
                      <StatusIcon className="w-6 h-6 text-gray-400" />
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Created: {ticket.createdAt}</span>
                      <span>Updated {ticket.lastUpdate}</span>
                    </div>

                    <button className="w-full mt-3 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium">
                      View Ticket
                    </button>
                  </div>
                );
              })
            )}

            <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl hover:from-orange-700 hover:to-red-700 transition-all font-bold shadow-lg flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" />
              Create New Ticket
            </button>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="space-y-4">
            {faqCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.questions} questions</p>
                  </div>
                  <div className="text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}

            {/* Popular Questions */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-100 mt-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-purple-600" />
                Popular Questions
              </h3>
              <div className="space-y-2">
                {[
                  'How do I track my order?',
                  'How long does delivery take?',
                  'How can I redeem ReZ Coins?',
                  'What is the return policy?'
                ].map((question, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-purple-50 transition-colors text-gray-700 text-sm"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
