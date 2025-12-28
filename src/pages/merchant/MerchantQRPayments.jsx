import { useState } from 'react';
import {
  QrCode, Check, Clock, X, DollarSign, TrendingUp, Users, Zap,
  RefreshCw, Download, Search, Filter, Calendar, ArrowRight,
  Coins, Gift, Tag, Bell, AlertCircle, CheckCircle, Eye
} from 'lucide-react';

export default function MerchantQRPayments() {
  const [activeTab, setActiveTab] = useState('live');
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Mock data - Live payments (pending confirmation)
  const livePayments = [
    {
      id: 'PAY-789012',
      customerName: 'Priya Sharma',
      customerId: 'USR-45821',
      amount: 1250,
      coinsUsed: 250,
      cashbackEarned: 62.5,
      timestamp: new Date(Date.now() - 120000),
      status: 'pending',
      items: [
        { name: 'Chicken Biryani', qty: 2, price: 400 },
        { name: 'Paneer Tikka', qty: 1, price: 300 },
        { name: 'Naan', qty: 3, price: 150 }
      ],
      qrScanned: new Date(Date.now() - 125000),
      offerApplied: 'FIRST50',
      discount: 125
    },
    {
      id: 'PAY-789013',
      customerName: 'Rahul Mehta',
      customerId: 'USR-32145',
      amount: 850,
      coinsUsed: 150,
      cashbackEarned: 42.5,
      timestamp: new Date(Date.now() - 45000),
      status: 'pending',
      items: [
        { name: 'Masala Dosa', qty: 2, price: 500 },
        { name: 'Filter Coffee', qty: 2, price: 200 }
      ],
      qrScanned: new Date(Date.now() - 48000),
      offerApplied: null,
      discount: 0
    }
  ];

  // Mock data - Today's completed payments
  const completedPayments = [
    {
      id: 'PAY-789011',
      customerName: 'Anjali Patel',
      customerId: 'USR-67890',
      amount: 2100,
      coinsUsed: 500,
      cashbackEarned: 105,
      timestamp: new Date(Date.now() - 3600000),
      status: 'completed',
      confirmedBy: 'Store Manager',
      confirmTime: new Date(Date.now() - 3595000)
    },
    {
      id: 'PAY-789010',
      customerName: 'Vikram Singh',
      customerId: 'USR-54321',
      amount: 1650,
      coinsUsed: 300,
      cashbackEarned: 82.5,
      timestamp: new Date(Date.now() - 5400000),
      status: 'completed',
      confirmedBy: 'Cashier 1',
      confirmTime: new Date(Date.now() - 5398000)
    }
  ];

  // Mock data - Statistics
  const stats = {
    today: {
      totalPayments: 45,
      totalRevenue: 67890,
      coinsRedeemed: 12450,
      cashbackGiven: 3395,
      avgTransaction: 1508,
      pendingCount: 2
    },
    thisWeek: {
      totalPayments: 312,
      totalRevenue: 485600,
      coinsRedeemed: 89000,
      cashbackGiven: 24280
    }
  };

  const handleConfirmPayment = (paymentId) => {
    console.log('Confirming payment:', paymentId);
    // Implementation would confirm payment
  };

  const handleRejectPayment = (paymentId) => {
    console.log('Rejecting payment:', paymentId);
    // Implementation would reject payment
  };

  const getTimeSince = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };

  const renderLivePayments = () => (
    <div className="space-y-4">
      {livePayments.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Pending Payments</h3>
          <p className="text-gray-600">New QR payments will appear here in real-time</p>
        </div>
      ) : (
        livePayments.map((payment) => (
          <div key={payment.id} className="bg-white rounded-xl border-2 border-orange-200 shadow-lg overflow-hidden animate-pulse-border">
            {/* Urgent Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 animate-bounce" />
                  <span className="font-semibold">⚡ Action Required - Customer Waiting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{getTimeSince(payment.timestamp)}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Customer Info */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {payment.customerName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{payment.customerName}</h3>
                    <p className="text-sm text-gray-600">ID: {payment.customerId}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Scanned QR: {getTimeSince(payment.qrScanned)}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Payment ID</p>
                  <p className="text-sm font-mono font-semibold text-gray-900">{payment.id}</p>
                </div>
              </div>

              {/* Payment Breakdown */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Payment Breakdown</h4>
                <div className="space-y-2">
                  {payment.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.name} × {item.qty}
                      </span>
                      <span className="font-medium text-gray-900">₹{item.price}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{payment.amount + (payment.discount || 0)}</span>
                    </div>
                    {payment.discount > 0 && (
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-green-600 flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          Discount ({payment.offerApplied})
                        </span>
                        <span className="font-medium text-green-600">-₹{payment.discount}</span>
                      </div>
                    )}
                    {payment.coinsUsed > 0 && (
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-purple-600 flex items-center gap-1">
                          <Coins className="w-3 h-3" />
                          ReZ Coins Used
                        </span>
                        <span className="font-medium text-purple-600">-₹{payment.coinsUsed}</span>
                      </div>
                    )}
                    {payment.cashbackEarned > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-600 flex items-center gap-1">
                          <Gift className="w-3 h-3" />
                          Cashback Earned
                        </span>
                        <span className="font-medium text-blue-600">+₹{payment.cashbackEarned}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Final Amount */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Amount to Collect</span>
                  <span className="text-3xl font-bold text-green-600">
                    ₹{payment.amount - payment.coinsUsed}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleConfirmPayment(payment.id)}
                  className="flex-1 px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <CheckCircle className="w-6 h-6" />
                  Confirm Payment Received
                </button>
                <button
                  onClick={() => handleRejectPayment(payment.id)}
                  className="px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <X className="w-5 h-5" />
                  Reject
                </button>
                <button
                  onClick={() => setSelectedPayment(payment)}
                  className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  Details
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );

  const renderCompletedPayments = () => (
    <div className="space-y-4">
      {completedPayments.map((payment) => (
        <div key={payment.id} className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900">{payment.customerName}</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    Completed
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{payment.id}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{getTimeSince(payment.timestamp)}</span>
                  <span>•</span>
                  <span>Confirmed by: {payment.confirmedBy}</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900 mb-2">₹{payment.amount}</p>
              <div className="space-y-1 text-sm">
                <p className="text-purple-600">-₹{payment.coinsUsed} coins</p>
                <p className="text-blue-600">+₹{payment.cashbackEarned} cashback</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      {/* Today's Performance */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Today's QR Payment Performance</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <DollarSign className="w-8 h-8 text-blue-600 mb-3" />
            <p className="text-3xl font-bold text-gray-900 mb-1">₹{stats.today.totalRevenue.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Revenue</p>
            <p className="text-xs text-blue-600 mt-2">{stats.today.totalPayments} transactions</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <Coins className="w-8 h-8 text-purple-600 mb-3" />
            <p className="text-3xl font-bold text-gray-900 mb-1">₹{stats.today.coinsRedeemed.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Coins Redeemed</p>
            <p className="text-xs text-purple-600 mt-2">Net: ₹{(stats.today.totalRevenue - stats.today.coinsRedeemed).toLocaleString()}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <Gift className="w-8 h-8 text-green-600 mb-3" />
            <p className="text-3xl font-bold text-gray-900 mb-1">₹{stats.today.cashbackGiven.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Cashback Given</p>
            <p className="text-xs text-green-600 mt-2">{((stats.today.cashbackGiven / stats.today.totalRevenue) * 100).toFixed(1)}% of revenue</p>
          </div>
        </div>
      </div>

      {/* Weekly Comparison */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">This Week's Performance</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Payments</span>
              <span className="text-2xl font-bold text-gray-900">{stats.thisWeek.totalPayments}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Revenue</span>
              <span className="text-2xl font-bold text-gray-900">₹{stats.thisWeek.totalRevenue.toLocaleString()}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Coins Redeemed</span>
              <span className="text-2xl font-bold text-purple-600">₹{stats.thisWeek.coinsRedeemed.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cashback Given</span>
              <span className="text-2xl font-bold text-blue-600">₹{stats.thisWeek.cashbackGiven.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">QR Payments</h1>
                <p className="text-gray-600">Real-time payment monitoring & confirmation</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Refresh QR Code
              </button>
            </div>
          </div>
        </div>

        {/* Alert Banner for Pending Payments */}
        {stats.today.pendingCount > 0 && (
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6" />
                <div>
                  <p className="font-semibold">
                    {stats.today.pendingCount} customer{stats.today.pendingCount > 1 ? 's' : ''} waiting for payment confirmation
                  </p>
                  <p className="text-sm opacity-90">Please confirm payments to avoid customer delays</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('live')}
                className="px-4 py-2 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Review Now
              </button>
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">₹{stats.today.avgTransaction.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Avg Transaction</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.today.totalPayments}</p>
            <p className="text-sm text-gray-600">Payments Today</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
              {stats.today.pendingCount > 0 && (
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                  Pending
                </span>
              )}
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.today.pendingCount}</p>
            <p className="text-sm text-gray-600">Awaiting Confirmation</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">₹{stats.today.coinsRedeemed.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Coins Redeemed</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('live')}
              className={`flex-1 px-6 py-4 font-medium transition-colors relative ${
                activeTab === 'live'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Bell className="w-5 h-5" />
                Live Payments
                {stats.today.pendingCount > 0 && (
                  <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    {stats.today.pendingCount}
                  </span>
                )}
              </div>
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'completed'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Completed Today
              </div>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'analytics'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Analytics
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'live' && renderLivePayments()}
        {activeTab === 'completed' && renderCompletedPayments()}
        {activeTab === 'analytics' && renderAnalytics()}
      </div>
    </div>
  );
}
