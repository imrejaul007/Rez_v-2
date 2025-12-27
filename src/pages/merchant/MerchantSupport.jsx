import { useState } from 'react';
import { MessageSquare, Send, Paperclip, Search, Filter, Clock, CheckCircle, AlertCircle, HelpCircle, Mail, Phone, MessageCircle, ChevronDown, ChevronUp, FileText, X } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantSupport() {
  const [activeTab, setActiveTab] = useState('submit');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  // Form states
  const [ticketCategory, setTicketCategory] = useState('');
  const [ticketPriority, setTicketPriority] = useState('medium');
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  const [attachments, setAttachments] = useState([]);

  const [tickets, setTickets] = useState([
    {
      id: 1,
      ticketId: 'TKT-2024-001',
      subject: 'Issue with settlement payment',
      category: 'Payments',
      priority: 'high',
      status: 'open',
      createdDate: '2024-01-25',
      lastUpdate: '2024-01-25 14:30',
      messages: [
        {
          id: 1,
          sender: 'You',
          message: 'I have not received my settlement for last week. The expected date was 2024-01-23 but the amount has not been credited yet.',
          timestamp: '2024-01-25 10:30',
          isSupport: false
        },
        {
          id: 2,
          sender: 'Support Team',
          message: 'Thank you for reaching out. We are looking into your settlement issue. Can you please provide the settlement ID for reference?',
          timestamp: '2024-01-25 14:30',
          isSupport: true
        }
      ]
    },
    {
      id: 2,
      ticketId: 'TKT-2024-002',
      subject: 'Need help updating store hours',
      category: 'Account Settings',
      priority: 'low',
      status: 'in_progress',
      createdDate: '2024-01-23',
      lastUpdate: '2024-01-24 16:45',
      messages: [
        {
          id: 1,
          sender: 'You',
          message: 'I am trying to update my store hours but the changes are not being saved. Can you help?',
          timestamp: '2024-01-23 11:20',
          isSupport: false
        },
        {
          id: 2,
          sender: 'Support Team',
          message: 'We have identified the issue and our team is working on a fix. We will update you once it is resolved.',
          timestamp: '2024-01-24 16:45',
          isSupport: true
        }
      ]
    },
    {
      id: 3,
      ticketId: 'TKT-2024-003',
      subject: 'Customer complaint about offer',
      category: 'Offers',
      priority: 'medium',
      status: 'resolved',
      createdDate: '2024-01-20',
      lastUpdate: '2024-01-22 10:15',
      messages: [
        {
          id: 1,
          sender: 'You',
          message: 'A customer is saying that my offer is not working when they try to redeem it.',
          timestamp: '2024-01-20 15:30',
          isSupport: false
        },
        {
          id: 2,
          sender: 'Support Team',
          message: 'We checked and found that the offer had expired. We have notified the customer and the issue is now resolved.',
          timestamp: '2024-01-22 10:15',
          isSupport: true
        }
      ]
    }
  ]);

  const [faqs] = useState([
    {
      id: 1,
      category: 'Payments & Settlement',
      question: 'When will I receive my settlement?',
      answer: 'Settlements are processed based on your selected frequency (daily, weekly, or monthly). Funds are typically credited within 2-3 business days after the settlement date.'
    },
    {
      id: 2,
      category: 'Payments & Settlement',
      question: 'What is the commission rate?',
      answer: 'The standard commission rate is 5% per transaction. Premium merchants may have different rates based on their subscription tier.'
    },
    {
      id: 3,
      category: 'Offers & Promotions',
      question: 'How do I create a new offer?',
      answer: 'Navigate to the Offers page and click "Create New Offer". Fill in the details including offer type, discount value, validity period, and terms & conditions. Submit for approval.'
    },
    {
      id: 4,
      category: 'Offers & Promotions',
      question: 'How long does offer approval take?',
      answer: 'Most offers are reviewed and approved within 24 hours. You will receive a notification once your offer is approved or if any changes are needed.'
    },
    {
      id: 5,
      category: 'Account Management',
      question: 'How do I update my bank account details?',
      answer: 'Go to Settings > Payment Settings. Click on "Update Bank Account" and provide the new details along with a cancelled cheque or bank statement for verification.'
    },
    {
      id: 6,
      category: 'Account Management',
      question: 'Can I have multiple store locations?',
      answer: 'Yes, Premium and Enterprise plans support multiple locations. Contact our sales team to upgrade your account and add additional locations.'
    },
    {
      id: 7,
      category: 'Technical Support',
      question: 'The dashboard is loading slowly',
      answer: 'Try clearing your browser cache and cookies. If the issue persists, check your internet connection or try accessing from a different browser or device.'
    },
    {
      id: 8,
      category: 'Technical Support',
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page. Enter your registered email address and follow the instructions sent to your email to reset your password.'
    }
  ]);

  const categories = [
    'Payments',
    'Offers',
    'Account Settings',
    'Technical Support',
    'Customer Issues',
    'Other'
  ];

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    const newTicket = {
      id: tickets.length + 1,
      ticketId: `TKT-2024-${String(tickets.length + 1).padStart(3, '0')}`,
      subject: ticketSubject,
      category: ticketCategory,
      priority: ticketPriority,
      status: 'open',
      createdDate: new Date().toISOString().split('T')[0],
      lastUpdate: new Date().toISOString().split('T')[0] + ' ' + new Date().toTimeString().split(' ')[0],
      messages: [
        {
          id: 1,
          sender: 'You',
          message: ticketDescription,
          timestamp: new Date().toISOString().split('T')[0] + ' ' + new Date().toTimeString().split(' ')[0].substring(0, 5),
          isSupport: false
        }
      ]
    };
    setTickets([newTicket, ...tickets]);
    setTicketCategory('');
    setTicketSubject('');
    setTicketDescription('');
    setAttachments([]);
    setActiveTab('tickets');
  };

  const toggleFaq = (id) => {
    setExpandedFaqs(prev =>
      prev.includes(id) ? prev.filter(faqId => faqId !== id) : [...prev, id]
    );
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ticket.ticketId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const ticketStats = {
    open: tickets.filter(t => t.status === 'open').length,
    in_progress: tickets.filter(t => t.status === 'in_progress').length,
    resolved: tickets.filter(t => t.status === 'resolved').length
  };

  const groupedFaqs = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
              <p className="text-gray-600 mt-1">Get help and submit support tickets</p>
            </div>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Open Tickets</p>
                <p className="text-3xl font-bold text-gray-900">{ticketStats.open}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">In Progress</p>
                <p className="text-3xl font-bold text-gray-900">{ticketStats.in_progress}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Resolved</p>
                <p className="text-3xl font-bold text-gray-900">{ticketStats.resolved}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-t-xl shadow-sm border border-gray-200 border-b-0">
          <div className="flex gap-1 p-2">
            <button
              onClick={() => setActiveTab('submit')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'submit'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Submit Ticket
            </button>
            <button
              onClick={() => setActiveTab('tickets')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'tickets'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              My Tickets
            </button>
            <button
              onClick={() => setActiveTab('faqs')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'faqs'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Help Center
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'contact'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Contact Info
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-xl shadow-sm border border-gray-200 p-6">
          {/* Submit Ticket Tab */}
          {activeTab === 'submit' && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Submit a Support Ticket</h2>
              <form onSubmit={handleSubmitTicket} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                    <select
                      value={ticketCategory}
                      onChange={(e) => setTicketCategory(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority *</label>
                    <select
                      value={ticketPriority}
                      onChange={(e) => setTicketPriority(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    placeholder="Brief description of your issue"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={ticketDescription}
                    onChange={(e) => setTicketDescription(e.target.value)}
                    placeholder="Provide detailed information about your issue..."
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Attachments (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors cursor-pointer">
                    <Paperclip className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF up to 10MB</p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                >
                  <Send className="w-5 h-5" />
                  Submit Ticket
                </button>
              </form>
            </div>
          )}

          {/* My Tickets Tab */}
          {activeTab === 'tickets' && (
            <div>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search tickets..."
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
                  <option value="open">Open</option>
                  <option value="in_progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>

              {selectedTicket ? (
                <div>
                  <button
                    onClick={() => setSelectedTicket(null)}
                    className="mb-4 text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    ← Back to tickets
                  </button>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{selectedTicket.subject}</h3>
                        <p className="text-sm text-gray-600 mt-1">Ticket ID: {selectedTicket.ticketId}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        selectedTicket.status === 'open' ? 'bg-orange-100 text-orange-700' :
                        selectedTicket.status === 'in_progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {selectedTicket.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="flex gap-6 text-sm text-gray-600">
                      <span>Category: {selectedTicket.category}</span>
                      <span>Priority: {selectedTicket.priority}</span>
                      <span>Created: {selectedTicket.createdDate}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {selectedTicket.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isSupport ? 'justify-start' : 'justify-end'}`}
                      >
                        <div className={`max-w-2xl ${message.isSupport ? 'bg-gray-100' : 'bg-indigo-100'} rounded-lg p-4`}>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-sm font-medium ${message.isSupport ? 'text-gray-900' : 'text-indigo-900'}`}>
                              {message.sender}
                            </span>
                            <span className="text-xs text-gray-500">{message.timestamp}</span>
                          </div>
                          <p className="text-gray-700">{message.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedTicket.status !== 'resolved' && (
                    <div className="mt-6 border-t border-gray-200 pt-6">
                      <div className="flex gap-3">
                        <input
                          type="text"
                          placeholder="Type your message..."
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                          <Send className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      onClick={() => setSelectedTicket(ticket)}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{ticket.subject}</h3>
                          <p className="text-sm text-gray-600 mt-1">#{ticket.ticketId}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          ticket.status === 'open' ? 'bg-orange-100 text-orange-700' :
                          ticket.status === 'in_progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {ticket.status.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {ticket.messages.length} messages
                        </span>
                        <span>{ticket.category}</span>
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          ticket.priority === 'urgent' ? 'bg-red-100 text-red-700' :
                          ticket.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                          ticket.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {ticket.priority}
                        </span>
                        <span>Updated: {ticket.lastUpdate}</span>
                      </div>
                    </div>
                  ))}
                  {filteredTickets.length === 0 && (
                    <div className="text-center py-12">
                      <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">No tickets found</h3>
                      <p className="text-gray-600">Try adjusting your search or filters</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* FAQs Tab */}
          {activeTab === 'faqs' && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
                  <div key={category}>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{category}</h3>
                    <div className="space-y-3">
                      {categoryFaqs.map((faq) => (
                        <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-900 text-left">{faq.question}</span>
                            {expandedFaqs.includes(faq.id) ? (
                              <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                            )}
                          </button>
                          {expandedFaqs.includes(faq.id) && (
                            <div className="px-4 pb-4 text-gray-700">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Info Tab */}
          {activeTab === 'contact' && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-900 font-medium">Email Support</p>
                      <p className="text-xs text-blue-700">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-blue-900">merchant-support@rez.app</p>
                  <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Send Email
                  </button>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-green-900 font-medium">Phone Support</p>
                      <p className="text-xs text-green-700">Mon-Fri, 9 AM - 6 PM IST</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-green-900">+91 80-1234-5678</p>
                  <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Call Now
                  </button>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-purple-900 font-medium">Live Chat</p>
                      <p className="text-xs text-purple-700">Get instant help from our team</p>
                    </div>
                  </div>
                  <p className="text-sm text-purple-900 mb-4">Available: 9 AM - 9 PM IST</p>
                  <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    Start Chat
                  </button>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6 border border-orange-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <HelpCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-orange-900 font-medium">Help Center</p>
                      <p className="text-xs text-orange-700">Browse articles and guides</p>
                    </div>
                  </div>
                  <p className="text-sm text-orange-900 mb-4">Self-service resources</p>
                  <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                    Visit Help Center
                  </button>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Support Team</p>
                    <p className="font-medium text-gray-900">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p className="font-medium text-gray-900">Saturday: 10:00 AM - 4:00 PM IST</p>
                    <p className="font-medium text-gray-900">Sunday: Closed</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Emergency Support</p>
                    <p className="font-medium text-gray-900">Payment Issues: 24/7</p>
                    <p className="font-medium text-gray-900">Technical Emergencies: 24/7</p>
                    <p className="text-xs text-red-600 mt-2">For urgent payment or technical issues only</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
