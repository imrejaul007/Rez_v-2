import { useState } from 'react';
import {
  Wallet, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight, Download,
  Calendar, CreditCard, Building2, Clock, CheckCircle, XCircle, Filter,
  RefreshCw, Send, Plus, Minus, Eye, FileText, AlertCircle, Coins,
  TrendingDown, BarChart3, PieChart, Award, Users, Package
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantWallet() {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('30days');
  const [transactionFilter, setTransactionFilter] = useState('all');
  const [showPayoutModal, setShowPayoutModal] = useState(false);

  const [walletBalance] = useState({
    available: 125680,
    pending: 45230,
    lifetime: 1234567,
    lastUpdated: '2024-01-28 10:30 AM'
  });

  const [coinMetrics] = useState({
    totalIssued: 45678,
    activeCoins: 23456,
    redeemedCoins: 18222,
    expiredCoins: 4000,
    pendingExpiry: 3456,
    expiryDate: '2024-02-28'
  });

  const [earningsAnalytics] = useState({
    today: 12450,
    todayChange: 12.5,
    thisWeek: 67890,
    weekChange: 8.3,
    thisMonth: 234567,
    monthChange: 15.2,
    avgDailyEarning: 8234
  });

  const [commissionBreakdown] = useState({
    totalRevenue: 456789,
    platformCommission: 36543, // 8%
    gst: 6577, // 18% on commission
    netEarnings: 413669,
    commissionRate: 8.0
  });

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: 'earning',
      orderId: 'ORD-2024-156',
      description: 'Offer redemption - 50% OFF Pizza',
      customer: 'John Doe',
      amount: 599,
      commission: 48,
      netAmount: 551,
      coinsIssued: 50,
      timestamp: '2024-01-28 09:45',
      status: 'completed'
    },
    {
      id: 2,
      type: 'settlement',
      settlementId: 'SET-2024-045',
      description: 'Weekly settlement to bank',
      amount: 98450,
      utrNumber: 'UTR2401280012345',
      timestamp: '2024-01-28 06:00',
      status: 'completed'
    },
    {
      id: 3,
      type: 'earning',
      orderId: 'ORD-2024-155',
      description: 'Offer redemption - Buy 1 Get 1 Coffee',
      customer: 'Jane Smith',
      amount: 400,
      commission: 32,
      netAmount: 368,
      coinsIssued: 40,
      timestamp: '2024-01-27 18:30',
      status: 'completed'
    },
    {
      id: 4,
      type: 'fee',
      description: 'Platform commission',
      amount: -1234,
      timestamp: '2024-01-27 16:20',
      status: 'completed'
    },
    {
      id: 5,
      type: 'earning',
      orderId: 'ORD-2024-154',
      description: 'Offer redemption - 30% OFF Burger',
      customer: 'Mike Johnson',
      amount: 800,
      commission: 64,
      netAmount: 736,
      coinsIssued: 80,
      timestamp: '2024-01-27 14:15',
      status: 'completed'
    },
    {
      id: 6,
      type: 'refund',
      orderId: 'ORD-2024-142',
      description: 'Customer refund processed',
      customer: 'Sarah Wilson',
      amount: -599,
      commission: 0,
      netAmount: -599,
      coinsDeducted: 50,
      timestamp: '2024-01-26 11:30',
      status: 'completed'
    },
    {
      id: 7,
      type: 'earning',
      orderId: 'ORD-2024-153',
      description: 'Offer redemption - Lunch Special',
      customer: 'Robert Brown',
      amount: 1200,
      commission: 96,
      netAmount: 1104,
      coinsIssued: 120,
      timestamp: '2024-01-26 13:45',
      status: 'pending'
    }
  ]);

  const [settlementHistory, setSettlementHistory] = useState([
    {
      id: 1,
      settlementId: 'SET-2024-045',
      date: '2024-01-28',
      amount: 98450,
      commission: 7876,
      netAmount: 90574,
      transactionCount: 267,
      utrNumber: 'UTR2401280012345',
      status: 'completed'
    },
    {
      id: 2,
      settlementId: 'SET-2024-044',
      date: '2024-01-21',
      amount: 112340,
      commission: 8987,
      netAmount: 103353,
      transactionCount: 289,
      utrNumber: 'UTR2401210098765',
      status: 'completed'
    },
    {
      id: 3,
      settlementId: 'SET-2024-043',
      date: '2024-01-14',
      amount: 87650,
      commission: 7012,
      netAmount: 80638,
      transactionCount: 234,
      utrNumber: 'UTR2401140045678',
      status: 'completed'
    },
    {
      id: 4,
      settlementId: 'SET-2024-042',
      date: '2024-01-07',
      amount: 95430,
      commission: 7634,
      netAmount: 87796,
      transactionCount: 256,
      status: 'pending'
    }
  ]);

  const [bankAccount] = useState({
    accountHolder: 'The Coffee House Pvt Ltd',
    accountNumber: '****7890',
    ifscCode: 'HDFC0001234',
    bankName: 'HDFC Bank',
    branch: 'MG Road, Bangalore',
    verified: true
  });

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'earning':
        return <ArrowDownRight className="w-5 h-5 text-green-600" />;
      case 'settlement':
        return <Send className="w-5 h-5 text-blue-600" />;
      case 'fee':
        return <Minus className="w-5 h-5 text-orange-600" />;
      case 'refund':
        return <ArrowUpRight className="w-5 h-5 text-red-600" />;
      default:
        return <DollarSign className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTransactionColor = (type) => {
    switch (type) {
      case 'earning':
        return 'text-green-600';
      case 'settlement':
        return 'text-blue-600';
      case 'fee':
        return 'text-orange-600';
      case 'refund':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const filteredTransactions = transactions.filter((txn) => {
    if (transactionFilter === 'all') return true;
    return txn.type === transactionFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Merchant Wallet</h1>
              <p className="text-gray-600 mt-1">Manage earnings, settlements and payouts</p>
            </div>
            <div className="flex gap-3">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="12months">Last 12 Months</option>
              </select>
              <button
                onClick={() => setShowPayoutModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Send className="w-5 h-5" />
                Request Payout
              </button>
            </div>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Wallet Balance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm p-6 border-2 border-green-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Wallet className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm text-green-900 font-medium">Available Balance</p>
              </div>
              <button className="p-1 hover:bg-green-100 rounded">
                <Eye className="w-4 h-4 text-green-700" />
              </button>
            </div>
            <p className="text-4xl font-bold text-green-900 mb-2">
              ₹{(walletBalance.available / 1000).toFixed(1)}K
            </p>
            <p className="text-sm text-green-700">Ready to withdraw</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Pending Settlement</p>
            </div>
            <p className="text-4xl font-bold text-gray-900 mb-2">
              ₹{(walletBalance.pending / 1000).toFixed(1)}K
            </p>
            <p className="text-sm text-gray-600">Processing...</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Lifetime Earnings</p>
            </div>
            <p className="text-4xl font-bold text-gray-900 mb-2">
              ₹{(walletBalance.lifetime / 1000).toFixed(0)}K
            </p>
            <p className="text-sm text-gray-600">All-time total</p>
          </div>
        </div>

        {/* Earnings Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600 font-medium">Today</p>
              <span className={`flex items-center text-sm ${earningsAnalytics.todayChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {earningsAnalytics.todayChange >= 0 ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {Math.abs(earningsAnalytics.todayChange)}%
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{earningsAnalytics.today.toLocaleString()}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600 font-medium">This Week</p>
              <span className={`flex items-center text-sm ${earningsAnalytics.weekChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {earningsAnalytics.weekChange >= 0 ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {Math.abs(earningsAnalytics.weekChange)}%
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{(earningsAnalytics.thisWeek / 1000).toFixed(1)}K</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600 font-medium">This Month</p>
              <span className={`flex items-center text-sm ${earningsAnalytics.monthChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {earningsAnalytics.monthChange >= 0 ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {Math.abs(earningsAnalytics.monthChange)}%
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{(earningsAnalytics.thisMonth / 1000).toFixed(1)}K</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600 font-medium">Avg Daily</p>
              <BarChart3 className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{(earningsAnalytics.avgDailyEarning / 1000).toFixed(1)}K</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Commission Breakdown */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Commission Breakdown</h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                View Details
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-blue-700 mb-1">Total Revenue</p>
                <p className="text-3xl font-bold text-blue-900 mb-2">₹{(commissionBreakdown.totalRevenue / 1000).toFixed(1)}K</p>
                <p className="text-xs text-blue-600">Gross transaction value</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                <p className="text-sm text-orange-700 mb-1">Platform Fee ({commissionBreakdown.commissionRate}%)</p>
                <p className="text-3xl font-bold text-orange-900 mb-2">₹{(commissionBreakdown.platformCommission / 1000).toFixed(1)}K</p>
                <p className="text-xs text-orange-600">Commission charged</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-purple-700 mb-1">GST (18%)</p>
                <p className="text-3xl font-bold text-purple-900 mb-2">₹{(commissionBreakdown.gst / 1000).toFixed(1)}K</p>
                <p className="text-xs text-purple-600">Tax on commission</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-green-700 mb-1">Net Earnings</p>
                <p className="text-3xl font-bold text-green-900 mb-2">₹{(commissionBreakdown.netEarnings / 1000).toFixed(1)}K</p>
                <p className="text-xs text-green-600">Your earnings</p>
              </div>
            </div>
          </div>

          {/* Bank Account */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Settlement Account</h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">Edit</button>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-5 text-white mb-4">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5" />
                <span className="text-sm opacity-90">{bankAccount.bankName}</span>
              </div>
              <p className="text-xs opacity-75 mb-2">Account Number</p>
              <p className="text-2xl font-bold tracking-wider mb-4">{bankAccount.accountNumber}</p>
              <p className="text-sm opacity-90">{bankAccount.accountHolder}</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">IFSC Code</span>
                <span className="font-medium text-gray-900">{bankAccount.ifscCode}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Branch</span>
                <span className="font-medium text-gray-900">{bankAccount.branch}</span>
              </div>
              {bankAccount.verified && (
                <div className="flex items-center gap-2 text-sm text-green-600 pt-3 border-t border-gray-200">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Account</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Branded Coins Tracking */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Coins className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Branded Coins Management</h2>
                <p className="text-sm text-gray-600">Track coins issued to customers</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
              View Coin Ledger
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Total Issued</p>
              <p className="text-2xl font-bold text-gray-900">{coinMetrics.totalIssued.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">All-time</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-sm text-green-700 mb-1">Active Coins</p>
              <p className="text-2xl font-bold text-green-900">{coinMetrics.activeCoins.toLocaleString()}</p>
              <p className="text-xs text-green-600 mt-1">In circulation</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-blue-700 mb-1">Redeemed</p>
              <p className="text-2xl font-bold text-blue-900">{coinMetrics.redeemedCoins.toLocaleString()}</p>
              <p className="text-xs text-blue-600 mt-1">Used by customers</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <p className="text-sm text-orange-700 mb-1">Expiring Soon</p>
              <p className="text-2xl font-bold text-orange-900">{coinMetrics.pendingExpiry.toLocaleString()}</p>
              <p className="text-xs text-orange-600 mt-1">By {coinMetrics.expiryDate}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Expired</p>
              <p className="text-2xl font-bold text-gray-900">{coinMetrics.expiredCoins.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">Not redeemed</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex gap-1 p-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-5 h-5" />
              Transaction History
            </button>
            <button
              onClick={() => setActiveTab('settlements')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === 'settlements'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Send className="w-5 h-5" />
              Settlement History
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === 'analytics'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              Earnings Analytics
            </button>
          </div>
        </div>

        {/* Transaction History Tab */}
        {activeTab === 'overview' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Transaction History</h2>
                <div className="flex gap-3">
                  <select
                    value={transactionFilter}
                    onChange={(e) => setTransactionFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All Transactions</option>
                    <option value="earning">Earnings</option>
                    <option value="settlement">Settlements</option>
                    <option value="fee">Fees</option>
                    <option value="refund">Refunds</option>
                  </select>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {filteredTransactions.map((txn) => (
                <div key={txn.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`p-3 rounded-lg ${
                        txn.type === 'earning' ? 'bg-green-100' :
                        txn.type === 'settlement' ? 'bg-blue-100' :
                        txn.type === 'fee' ? 'bg-orange-100' :
                        'bg-red-100'
                      }`}>
                        {getTransactionIcon(txn.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-gray-900">{txn.description}</p>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            txn.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {txn.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          {txn.orderId && <span>Order: {txn.orderId}</span>}
                          {txn.settlementId && <span>Settlement: {txn.settlementId}</span>}
                          {txn.customer && <span>Customer: {txn.customer}</span>}
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {txn.timestamp}
                          </span>
                        </div>
                        {txn.type === 'earning' && (
                          <div className="mt-2 flex items-center gap-4 text-sm">
                            <span className="text-gray-600">Revenue: ₹{txn.amount}</span>
                            <span className="text-orange-600">Commission: ₹{txn.commission}</span>
                            <span className="font-semibold text-green-600">Net: ₹{txn.netAmount}</span>
                            {txn.coinsIssued && (
                              <span className="flex items-center gap-1 text-yellow-600">
                                <Coins className="w-3 h-3" />
                                {txn.coinsIssued} coins
                              </span>
                            )}
                          </div>
                        )}
                        {txn.type === 'settlement' && txn.utrNumber && (
                          <p className="text-sm text-gray-600 mt-1">UTR: {txn.utrNumber}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-xl font-bold ${getTransactionColor(txn.type)}`}>
                        {txn.type === 'fee' || txn.type === 'refund' ? '-' : '+'}₹{Math.abs(txn.amount || txn.netAmount).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settlement History Tab */}
        {activeTab === 'settlements' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Settlement History</h2>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  <Download className="w-4 h-4" />
                  Download Report
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Settlement ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Gross Amount
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Commission
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Net Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      UTR Number
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {settlementHistory.map((settlement) => (
                    <tr key={settlement.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{settlement.settlementId}</p>
                          <p className="text-xs text-gray-500">{settlement.transactionCount} transactions</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {settlement.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                        ₹{settlement.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-red-600">
                        -₹{settlement.commission.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-green-600">
                        ₹{settlement.netAmount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {settlement.utrNumber ? (
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-mono text-gray-900">{settlement.utrNumber}</span>
                            <button className="text-gray-400 hover:text-gray-600" title="Copy">
                              <CreditCard className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <span className="text-sm text-gray-500">Processing</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          settlement.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {settlement.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Earnings Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Earnings Trends</h2>
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Earnings chart visualization</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Top Earning Offers</h3>
                <div className="space-y-3">
                  {[
                    { name: '50% OFF Pizza', earnings: 45600, count: 156 },
                    { name: 'Buy 1 Get 1 Coffee', earnings: 38900, count: 245 },
                    { name: 'Lunch Special', earnings: 32400, count: 123 }
                  ].map((offer, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{offer.name}</p>
                          <p className="text-xs text-gray-500">{offer.count} redemptions</p>
                        </div>
                      </div>
                      <p className="font-bold text-green-600">₹{(offer.earnings / 1000).toFixed(1)}K</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Schedule</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-green-900">Next Settlement</span>
                      <Calendar className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-2xl font-bold text-green-900 mb-1">Feb 4, 2024</p>
                    <p className="text-sm text-green-700">Weekly auto-settlement</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Settlement Frequency</p>
                    <p className="font-semibold text-gray-900">Every Sunday at 6:00 AM</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Settlement Type</p>
                    <p className="font-semibold text-gray-900">Automatic Bank Transfer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Payout Request Modal */}
      {showPayoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Request Payout</h3>
                <button
                  onClick={() => setShowPayoutModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-green-700 mb-1">Available Balance</p>
                <p className="text-3xl font-bold text-green-900">₹{walletBalance.available.toLocaleString()}</p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payout Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">₹</span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm font-medium text-gray-900 mb-3">Settlement Account</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bank:</span>
                    <span className="font-medium text-gray-900">{bankAccount.bankName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account:</span>
                    <span className="font-medium text-gray-900">{bankAccount.accountNumber}</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-medium mb-1">Processing Time</p>
                    <p>Manual payout requests are processed within 2-3 business days.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowPayoutModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Request Payout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
