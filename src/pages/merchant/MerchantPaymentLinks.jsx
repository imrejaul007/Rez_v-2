import { useState } from 'react';
import {
  Link2, Plus, Copy, Send, Clock, CheckCircle, XCircle, Eye,
  MoreVertical, Search, Filter, Download, Mail, MessageSquare,
  QrCode, Calendar, Users, CreditCard, Trash2, Edit, Share2,
  DollarSign, ArrowRight, RefreshCw, ExternalLink
} from 'lucide-react';

export default function MerchantPaymentLinks() {
  const [activeTab, setActiveTab] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newLink, setNewLink] = useState({
    title: '',
    amount: '',
    description: '',
    expiryDays: '7',
    allowPartial: false,
    collectPhone: true,
    awardCoins: true
  });

  // Stats
  const stats = {
    totalLinks: 156,
    activeLinks: 42,
    totalCollected: 485600,
    pendingAmount: 67800,
    avgPaymentTime: '2.3 hrs',
    conversionRate: 78.5
  };

  // Payment Links
  const paymentLinks = [
    {
      id: 'PL_001',
      title: 'Wedding Catering - Sharma Family',
      amount: 125000,
      collected: 125000,
      status: 'paid',
      type: 'catering',
      customerName: 'Raj Sharma',
      customerPhone: '+91 98765 43210',
      customerEmail: 'raj.sharma@email.com',
      createdAt: 'Jan 28, 2025',
      paidAt: 'Jan 28, 2025',
      expiresAt: 'Feb 4, 2025',
      coinsAwarded: 12500,
      link: 'https://pay.rez.app/pl/abc123'
    },
    {
      id: 'PL_002',
      title: 'Table Reservation - New Year Eve',
      amount: 15000,
      collected: 7500,
      status: 'partial',
      type: 'reservation',
      customerName: 'Priya Patel',
      customerPhone: '+91 87654 32109',
      customerEmail: 'priya.p@email.com',
      createdAt: 'Jan 27, 2025',
      paidAt: null,
      expiresAt: 'Jan 31, 2025',
      coinsAwarded: 750,
      link: 'https://pay.rez.app/pl/def456'
    },
    {
      id: 'PL_003',
      title: 'Corporate Event Booking',
      amount: 85000,
      collected: 0,
      status: 'pending',
      type: 'event',
      customerName: 'TechCorp India',
      customerPhone: '+91 76543 21098',
      customerEmail: 'events@techcorp.com',
      createdAt: 'Jan 26, 2025',
      paidAt: null,
      expiresAt: 'Feb 2, 2025',
      coinsAwarded: 0,
      link: 'https://pay.rez.app/pl/ghi789'
    },
    {
      id: 'PL_004',
      title: 'Birthday Party Package',
      amount: 25000,
      collected: 25000,
      status: 'paid',
      type: 'event',
      customerName: 'Ananya Kapoor',
      customerPhone: '+91 65432 10987',
      customerEmail: 'ananya.k@email.com',
      createdAt: 'Jan 25, 2025',
      paidAt: 'Jan 25, 2025',
      expiresAt: 'Feb 1, 2025',
      coinsAwarded: 2500,
      link: 'https://pay.rez.app/pl/jkl012'
    },
    {
      id: 'PL_005',
      title: 'Weekly Meal Subscription',
      amount: 8000,
      collected: 0,
      status: 'expired',
      type: 'subscription',
      customerName: 'Vikram Singh',
      customerPhone: '+91 54321 09876',
      customerEmail: 'vikram.s@email.com',
      createdAt: 'Jan 15, 2025',
      paidAt: null,
      expiresAt: 'Jan 22, 2025',
      coinsAwarded: 0,
      link: 'https://pay.rez.app/pl/mno345'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-700';
      case 'partial': return 'bg-yellow-100 text-yellow-700';
      case 'pending': return 'bg-blue-100 text-blue-700';
      case 'expired': return 'bg-gray-100 text-gray-500';
      default: return 'bg-gray-100 text-gray-500';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'catering': return '🍽️';
      case 'reservation': return '📅';
      case 'event': return '🎉';
      case 'subscription': return '🔄';
      default: return '💳';
    }
  };

  const filteredLinks = activeTab === 'all'
    ? paymentLinks
    : paymentLinks.filter(link => link.status === activeTab);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Show toast notification
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Payment Links</h1>
              <p className="text-gray-600 mt-1">Send secure payment links for catering, reservations & events</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Payment Link
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Link2 className="w-4 h-4" />
              <span className="text-sm">Total Links</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.totalLinks}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Active Links</span>
            </div>
            <div className="text-2xl font-bold text-green-600">{stats.activeLinks}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <CreditCard className="w-4 h-4" />
              <span className="text-sm">Total Collected</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">₹{stats.totalCollected.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Pending Amount</span>
            </div>
            <div className="text-2xl font-bold text-yellow-600">₹{stats.pendingAmount.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Avg Payment Time</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.avgPaymentTime}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <ArrowRight className="w-4 h-4" />
              <span className="text-sm">Conversion Rate</span>
            </div>
            <div className="text-2xl font-bold text-green-600">{stats.conversionRate}%</div>
          </div>
        </div>
      </div>

      {/* Tabs & Filters */}
      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="flex border-b border-gray-200">
            {[
              { id: 'all', label: 'All Links' },
              { id: 'pending', label: 'Pending' },
              { id: 'partial', label: 'Partial' },
              { id: 'paid', label: 'Paid' },
              { id: 'expired', label: 'Expired' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium border-b-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search links..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
            </div>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Payment Links List */}
      <div className="px-6 py-6">
        <div className="space-y-4">
          {filteredLinks.map((link) => (
            <div key={link.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{getTypeIcon(link.type)}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-gray-900">{link.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(link.status)}`}>
                        {link.status.charAt(0).toUpperCase() + link.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>{link.customerName}</span>
                      <span>•</span>
                      <span>{link.customerPhone}</span>
                      <span>•</span>
                      <span>Created {link.createdAt}</span>
                    </div>

                    {/* Link URL */}
                    <div className="flex items-center gap-2 mb-3">
                      <code className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-700">{link.link}</code>
                      <button
                        onClick={() => copyToClipboard(link.link)}
                        className="p-1 hover:bg-gray-100 rounded"
                        title="Copy link"
                      >
                        <Copy className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Open link">
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>

                    {/* Progress for partial payments */}
                    {link.status === 'partial' && (
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">Payment Progress</span>
                          <span className="font-medium">{Math.round((link.collected / link.amount) * 100)}%</span>
                        </div>
                        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-500 rounded-full"
                            style={{ width: `${(link.collected / link.amount) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Coins Awarded */}
                    {link.coinsAwarded > 0 && (
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <span className="text-yellow-500">🪙</span>
                        <span>{link.coinsAwarded.toLocaleString()} RezCoins awarded to customer</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">₹{link.amount.toLocaleString()}</div>
                  {link.collected > 0 && link.collected < link.amount && (
                    <div className="text-sm text-green-600">₹{link.collected.toLocaleString()} collected</div>
                  )}
                  <div className="text-xs text-gray-500 mt-1">
                    {link.status === 'expired' ? 'Expired' : `Expires ${link.expiresAt}`}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-3 justify-end">
                    {link.status === 'pending' && (
                      <>
                        <button className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 flex items-center gap-1">
                          <Send className="w-3 h-3" />
                          Resend
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          WhatsApp
                        </button>
                      </>
                    )}
                    {link.status === 'expired' && (
                      <button className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 flex items-center gap-1">
                        <RefreshCw className="w-3 h-3" />
                        Regenerate
                      </button>
                    )}
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Eye className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Payment Link Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 m-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Create Payment Link</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-gray-500 hover:text-gray-700">
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title / Description</label>
                <input
                  type="text"
                  value={newLink.title}
                  onChange={(e) => setNewLink({...newLink, title: e.target.value})}
                  placeholder="e.g., Wedding Catering - Sharma Family"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₹)</label>
                <input
                  type="number"
                  value={newLink.amount}
                  onChange={(e) => setNewLink({...newLink, amount: e.target.value})}
                  placeholder="Enter amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Link Expiry</label>
                <select
                  value={newLink.expiryDays}
                  onChange={(e) => setNewLink({...newLink, expiryDays: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="1">1 Day</option>
                  <option value="3">3 Days</option>
                  <option value="7">7 Days</option>
                  <option value="14">14 Days</option>
                  <option value="30">30 Days</option>
                </select>
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newLink.allowPartial}
                    onChange={(e) => setNewLink({...newLink, allowPartial: e.target.checked})}
                    className="w-4 h-4 text-purple-600 rounded"
                  />
                  <span className="text-sm text-gray-700">Allow partial payments</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newLink.collectPhone}
                    onChange={(e) => setNewLink({...newLink, collectPhone: e.target.checked})}
                    className="w-4 h-4 text-purple-600 rounded"
                  />
                  <span className="text-sm text-gray-700">Collect customer phone number</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newLink.awardCoins}
                    onChange={(e) => setNewLink({...newLink, awardCoins: e.target.checked})}
                    className="w-4 h-4 text-purple-600 rounded"
                  />
                  <div>
                    <span className="text-sm text-gray-700">Award RezCoins on payment</span>
                    <span className="text-xs text-gray-500 block">Customer earns 1 coin per ₹10 spent</span>
                  </div>
                </label>
              </div>

              {newLink.amount && newLink.awardCoins && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-yellow-800">
                    <span className="text-xl">🪙</span>
                    <span className="text-sm">
                      Customer will earn <strong>{Math.floor(newLink.amount / 10).toLocaleString()} RezCoins</strong> on this payment
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center gap-2">
                <Link2 className="w-4 h-4" />
                Create Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
