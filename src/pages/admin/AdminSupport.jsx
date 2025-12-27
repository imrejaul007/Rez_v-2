import { useState } from 'react';
import {
  MessageSquare, Clock, CheckCircle, XCircle, AlertCircle,
  Search, Filter, User, Mail, Phone, Calendar, Tag,
  FileText, Coins, DollarSign, Send, Eye, Star,
  ArrowLeft, RefreshCw, MoreVertical, Book, Zap
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminSupport() {
  const [activeTab, setActiveTab] = useState('tickets');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedTicket, setSelectedTicket] = useState(null);

  const [tickets, setTickets] = useState([
    {
      id: 1,
      ticketNumber: 'TKT-001234',
      user: 'Rahul Sharma',
      email: 'rahul.sharma@email.com',
      phone: '+91 98765 43210',
      subject: 'Coins not credited after purchase',
      category: 'coins',
      priority: 'high',
      status: 'open',
      createdAt: '2024-01-20 14:30',
      lastUpdate: '2024-01-20 15:45',
      orderAmount: 2500,
      expectedCoins: 375,
      messages: [
        { id: 1, from: 'user', text: 'I made a purchase of ₹2500 but coins were not credited to my account.', time: '14:30' },
        { id: 2, from: 'admin', text: 'Thank you for contacting us. Let me check your transaction details.', time: '15:45' }
      ]
    },
    {
      id: 2,
      ticketNumber: 'TKT-001233',
      user: 'Priya Patel',
      email: 'priya.patel@email.com',
      phone: '+91 87654 32109',
      subject: 'Cashback not received for restaurant order',
      category: 'cashback',
      priority: 'medium',
      status: 'in_progress',
      createdAt: '2024-01-19 16:20',
      lastUpdate: '2024-01-20 10:15',
      orderAmount: 850,
      expectedCashback: 85,
      messages: [
        { id: 1, from: 'user', text: 'I ordered food from Pizza Paradise but did not receive the 10% cashback.', time: '16:20' },
        { id: 2, from: 'admin', text: 'We are investigating this issue. Please wait while we check with the merchant.', time: '10:15' }
      ]
    },
    {
      id: 3,
      ticketNumber: 'TKT-001232',
      user: 'Arjun Mehta',
      email: 'arjun.mehta@email.com',
      phone: '+91 76543 21098',
      subject: 'Unable to redeem ReZ Coins',
      category: 'redemption',
      priority: 'high',
      status: 'open',
      createdAt: '2024-01-20 11:00',
      lastUpdate: '2024-01-20 11:00',
      availableCoins: 1250,
      redemptionAttempt: 500,
      messages: [
        { id: 1, from: 'user', text: 'I am trying to redeem 500 coins but getting an error. Please help!', time: '11:00' }
      ]
    },
    {
      id: 4,
      ticketNumber: 'TKT-001231',
      user: 'Sneha Gupta',
      email: 'sneha.gupta@email.com',
      phone: '+91 65432 10987',
      subject: 'Duplicate charge on my account',
      category: 'payment',
      priority: 'high',
      status: 'resolved',
      createdAt: '2024-01-18 09:30',
      lastUpdate: '2024-01-19 14:20',
      resolvedAt: '2024-01-19 14:20',
      chargeAmount: 1500,
      refundAmount: 1500,
      messages: [
        { id: 1, from: 'user', text: 'I was charged twice for the same order. Order ID: ORD-12345', time: '09:30' },
        { id: 2, from: 'admin', text: 'We have verified the duplicate charge and initiated a refund of ₹1500.', time: '14:20' }
      ]
    },
    {
      id: 5,
      ticketNumber: 'TKT-001230',
      user: 'Vikram Singh',
      email: 'vikram.singh@email.com',
      phone: '+91 54321 09876',
      subject: 'Account verification issue',
      category: 'account',
      priority: 'medium',
      status: 'in_progress',
      createdAt: '2024-01-19 13:45',
      lastUpdate: '2024-01-20 09:30',
      messages: [
        { id: 1, from: 'user', text: 'My account verification is pending for 3 days. Please help.', time: '13:45' },
        { id: 2, from: 'admin', text: 'We need additional documents. Please upload your ID proof.', time: '09:30' }
      ]
    },
    {
      id: 6,
      ticketNumber: 'TKT-001229',
      user: 'Meera Krishnan',
      email: 'meera.k@email.com',
      phone: '+91 43210 98765',
      subject: 'Referral bonus not credited',
      category: 'referral',
      priority: 'low',
      status: 'resolved',
      createdAt: '2024-01-17 12:00',
      lastUpdate: '2024-01-18 16:30',
      resolvedAt: '2024-01-18 16:30',
      referralCount: 5,
      expectedBonus: 500,
      messages: [
        { id: 1, from: 'user', text: 'I referred 5 friends but only received bonus for 3.', time: '12:00' },
        { id: 2, from: 'admin', text: 'We have credited the missing 200 coins to your account.', time: '16:30' }
      ]
    }
  ]);

  const [knowledgeBase, setKnowledgeBase] = useState([
    {
      id: 1,
      category: 'Coins & Rewards',
      title: 'How to earn ReZ Coins?',
      content: 'You can earn coins through purchases, daily check-ins, referrals, and completing tasks.',
      views: 1234,
      helpful: 456
    },
    {
      id: 2,
      category: 'Cashback',
      title: 'When will I receive my cashback?',
      content: 'Cashback is usually credited within 24-48 hours after the purchase is confirmed.',
      views: 987,
      helpful: 321
    },
    {
      id: 3,
      category: 'Redemption',
      title: 'How to redeem coins?',
      content: 'Go to Wallet > ReZ Coins > Redeem. Minimum 500 coins required for redemption.',
      views: 876,
      helpful: 289
    },
    {
      id: 4,
      category: 'Account',
      title: 'How to verify my account?',
      content: 'Upload your ID proof and selfie in Profile > Verification section.',
      views: 654,
      helpful: 198
    }
  ]);

  const categoryColors = {
    coins: 'bg-orange-100 text-orange-700',
    cashback: 'bg-green-100 text-green-700',
    redemption: 'bg-blue-100 text-blue-700',
    payment: 'bg-red-100 text-red-700',
    account: 'bg-purple-100 text-purple-700',
    referral: 'bg-indigo-100 text-indigo-700',
    general: 'bg-gray-100 text-gray-700'
  };

  const priorityColors = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-yellow-100 text-yellow-700',
    low: 'bg-blue-100 text-blue-700'
  };

  const statusColors = {
    open: 'bg-yellow-100 text-yellow-700',
    in_progress: 'bg-blue-100 text-blue-700',
    resolved: 'bg-green-100 text-green-700',
    closed: 'bg-gray-100 text-gray-700'
  };

  const stats = {
    totalTickets: tickets.length,
    openTickets: tickets.filter(t => t.status === 'open').length,
    inProgress: tickets.filter(t => t.status === 'in_progress').length,
    resolved: tickets.filter(t => t.status === 'resolved').length,
    avgResponseTime: '2.5 hours',
    avgResolutionTime: '24 hours'
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ticket.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ticket.ticketNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleCreditCoins = (ticketId, amount) => {
    alert(`Credited ${amount} coins to user's account`);
  };

  const handleIssueRefund = (ticketId, amount) => {
    alert(`Initiated refund of ₹${amount}`);
  };

  const handleResolveTicket = (ticketId) => {
    setTickets(prev => prev.map(t => t.id === ticketId ? { ...t, status: 'resolved' } : t));
    setSelectedTicket(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
              <p className="text-gray-600 mt-1">Manage support tickets and customer inquiries</p>
            </div>
            {selectedTicket && (
              <button
                onClick={() => setSelectedTicket(null)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Tickets
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedTicket ? (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Total Tickets</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalTickets}</p>
                  </div>
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Open</p>
                    <p className="text-3xl font-bold text-yellow-600 mt-2">{stats.openTickets}</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">In Progress</p>
                    <p className="text-3xl font-bold text-blue-600 mt-2">{stats.inProgress}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Resolved</p>
                    <p className="text-3xl font-bold text-green-600 mt-2">{stats.resolved}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Avg Response</p>
                    <p className="text-2xl font-bold text-purple-600 mt-2">{stats.avgResponseTime}</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Avg Resolution</p>
                    <p className="text-2xl font-bold text-teal-600 mt-2">{stats.avgResolutionTime}</p>
                  </div>
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('tickets')}
                  className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                    activeTab === 'tickets'
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Support Tickets
                    {stats.openTickets > 0 && (
                      <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {stats.openTickets}
                      </span>
                    )}
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('knowledge')}
                  className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                    activeTab === 'knowledge'
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Book className="w-5 h-5" />
                    Knowledge Base
                  </div>
                </button>
              </div>

              {/* Tickets Tab */}
              {activeTab === 'tickets' && (
                <div className="p-6">
                  {/* Filters */}
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search tickets..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="all">All Status</option>
                      <option value="open">Open</option>
                      <option value="in_progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>

                  {/* Tickets List */}
                  <div className="space-y-4">
                    {filteredTickets.map((ticket) => (
                      <div
                        key={ticket.id}
                        className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-indigo-300 transition-all cursor-pointer"
                        onClick={() => setSelectedTicket(ticket)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-bold text-gray-900">{ticket.subject}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[ticket.category]}`}>
                                {ticket.category.toUpperCase()}
                              </span>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[ticket.priority]}`}>
                                {ticket.priority.toUpperCase()}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">Ticket #{ticket.ticketNumber}</p>
                            <div className="flex items-center gap-6 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {ticket.user}
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                {ticket.email}
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {ticket.createdAt}
                              </div>
                            </div>
                          </div>
                          <span className={`px-4 py-2 rounded-full text-sm font-medium ${statusColors[ticket.status]}`}>
                            {ticket.status.replace('_', ' ').toUpperCase()}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedTicket(ticket);
                            }}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium flex items-center gap-2"
                          >
                            <Eye className="w-4 h-4" />
                            View Details
                          </button>
                          {ticket.category === 'coins' && ticket.status !== 'resolved' && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCreditCoins(ticket.id, ticket.expectedCoins);
                              }}
                              className="px-4 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 text-sm font-medium flex items-center gap-2"
                            >
                              <Coins className="w-4 h-4" />
                              Credit {ticket.expectedCoins} Coins
                            </button>
                          )}
                          {ticket.category === 'payment' && ticket.status !== 'resolved' && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleIssueRefund(ticket.id, ticket.chargeAmount);
                              }}
                              className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 text-sm font-medium flex items-center gap-2"
                            >
                              <DollarSign className="w-4 h-4" />
                              Issue Refund ₹{ticket.chargeAmount}
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Knowledge Base Tab */}
              {activeTab === 'knowledge' && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {knowledgeBase.map((article) => (
                      <div key={article.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-indigo-300 transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                            {article.category}
                          </span>
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                        <p className="text-gray-600 mb-4">{article.content}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {article.views} views
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            {article.helpful} helpful
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <button className="w-full px-4 py-3 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-indigo-500 hover:text-indigo-600 font-medium">
                      + Add New Article
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Ticket Detail View */
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedTicket.subject}</h2>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">Ticket #{selectedTicket.ticketNumber}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[selectedTicket.category]}`}>
                      {selectedTicket.category.toUpperCase()}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[selectedTicket.priority]}`}>
                      {selectedTicket.priority.toUpperCase()}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[selectedTicket.status]}`}>
                      {selectedTicket.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Customer</p>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-600" />
                    <p className="font-medium text-gray-900">{selectedTicket.user}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <p className="text-sm text-gray-600">{selectedTicket.email}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Phone className="w-4 h-4 text-gray-600" />
                    <p className="text-sm text-gray-600">{selectedTicket.phone}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Timeline</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <p className="text-sm text-gray-900">Created: {selectedTicket.createdAt}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <p className="text-sm text-gray-900">Updated: {selectedTicket.lastUpdate}</p>
                  </div>
                  {selectedTicket.resolvedAt && (
                    <div className="flex items-center gap-2 mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <p className="text-sm text-green-700">Resolved: {selectedTicket.resolvedAt}</p>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">Quick Actions</p>
                  {selectedTicket.category === 'coins' && (
                    <button
                      onClick={() => handleCreditCoins(selectedTicket.id, selectedTicket.expectedCoins)}
                      className="w-full mb-2 px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <Coins className="w-4 h-4" />
                      Credit {selectedTicket.expectedCoins} Coins
                    </button>
                  )}
                  {selectedTicket.category === 'cashback' && (
                    <button
                      onClick={() => handleCreditCoins(selectedTicket.id, selectedTicket.expectedCashback)}
                      className="w-full mb-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <DollarSign className="w-4 h-4" />
                      Credit ₹{selectedTicket.expectedCashback}
                    </button>
                  )}
                  {selectedTicket.category === 'payment' && selectedTicket.refundAmount && (
                    <button
                      onClick={() => handleIssueRefund(selectedTicket.id, selectedTicket.refundAmount)}
                      className="w-full mb-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Refund ₹{selectedTicket.refundAmount}
                    </button>
                  )}
                  {selectedTicket.status !== 'resolved' && (
                    <button
                      onClick={() => handleResolveTicket(selectedTicket.id)}
                      className="w-full px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Mark as Resolved
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Conversation</h3>
              <div className="space-y-4 mb-6">
                {selectedTicket.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.from === 'admin' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-2xl ${
                      message.from === 'admin'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    } rounded-lg p-4`}>
                      <p className="text-sm mb-1">{message.text}</p>
                      <p className={`text-xs ${
                        message.from === 'admin' ? 'text-indigo-200' : 'text-gray-500'
                      }`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reply Form */}
              {selectedTicket.status !== 'resolved' && (
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-medium text-gray-900 mb-3">Send Reply</h4>
                  <textarea
                    placeholder="Type your message..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 mb-3"
                  />
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
