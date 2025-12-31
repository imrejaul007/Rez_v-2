import { useState } from 'react';
import {
  Activity, RefreshCw, CheckCircle, XCircle, Clock, Filter, Search,
  Download, ArrowUpRight, ArrowDownLeft, Coins, Gift, CreditCard,
  TrendingUp, Calendar, ChevronDown, Eye, MoreVertical, AlertTriangle
} from 'lucide-react';

export default function MerchantPOSTransactions() {
  const [dateRange, setDateRange] = useState('today');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Transaction Stats
  const stats = {
    totalTransactions: 147,
    successRate: 99.3,
    totalAmount: 245680,
    coinsAwarded: 24568,
    offersRedeemed: 34,
    avgTransactionValue: 1671
  };

  // Transactions Data
  const transactions = [
    {
      id: 'TXN_001',
      orderId: 'ORD_4521',
      posOrderId: 'SQ_78945612',
      time: '2:34 PM',
      date: 'Today',
      customer: { name: 'Priya Sharma', phone: '+91 98765 43210', tier: 'Gold' },
      amount: 2450,
      coinsEarned: 245,
      coinsRedeemed: 0,
      offerApplied: 'SUMMER20',
      discount: 490,
      status: 'completed',
      source: 'Square POS',
      paymentMethod: 'UPI'
    },
    {
      id: 'TXN_002',
      orderId: 'ORD_4520',
      posOrderId: 'SQ_78945611',
      time: '2:15 PM',
      date: 'Today',
      customer: { name: 'Rahul Menon', phone: '+91 87654 32109', tier: 'Silver' },
      amount: 890,
      coinsEarned: 89,
      coinsRedeemed: 500,
      offerApplied: null,
      discount: 50,
      status: 'completed',
      source: 'Square POS',
      paymentMethod: 'Card'
    },
    {
      id: 'TXN_003',
      orderId: 'ORD_4519',
      posOrderId: 'SQ_78945610',
      time: '1:48 PM',
      date: 'Today',
      customer: { name: 'Ananya K.', phone: '+91 76543 21098', tier: 'Bronze' },
      amount: 1560,
      coinsEarned: 156,
      coinsRedeemed: 0,
      offerApplied: 'NEWUSER10',
      discount: 156,
      status: 'completed',
      source: 'Square POS',
      paymentMethod: 'Cash'
    },
    {
      id: 'TXN_004',
      orderId: 'ORD_4518',
      posOrderId: 'SQ_78945609',
      time: '1:22 PM',
      date: 'Today',
      customer: { name: 'Guest', phone: null, tier: null },
      amount: 750,
      coinsEarned: 0,
      coinsRedeemed: 0,
      offerApplied: null,
      discount: 0,
      status: 'completed',
      source: 'Square POS',
      paymentMethod: 'Cash'
    },
    {
      id: 'TXN_005',
      orderId: 'ORD_4517',
      posOrderId: 'SQ_78945608',
      time: '12:56 PM',
      date: 'Today',
      customer: { name: 'Vikram Singh', phone: '+91 65432 10987', tier: 'Platinum' },
      amount: 4500,
      coinsEarned: 675,
      coinsRedeemed: 1000,
      offerApplied: 'VIP15',
      discount: 775,
      status: 'completed',
      source: 'Square POS',
      paymentMethod: 'Card'
    },
    {
      id: 'TXN_006',
      orderId: 'ORD_4516',
      posOrderId: 'SQ_78945607',
      time: '12:30 PM',
      date: 'Today',
      customer: { name: 'Meera Patel', phone: '+91 54321 09876', tier: 'Gold' },
      amount: 1890,
      coinsEarned: 0,
      coinsRedeemed: 0,
      offerApplied: null,
      discount: 0,
      status: 'failed',
      error: 'Sync timeout - Retrying',
      source: 'Square POS',
      paymentMethod: 'UPI'
    },
    {
      id: 'TXN_007',
      orderId: 'ORD_4515',
      posOrderId: 'SQ_78945606',
      time: '11:45 AM',
      date: 'Today',
      customer: { name: 'Arjun Roy', phone: '+91 43210 98765', tier: 'Silver' },
      amount: 3200,
      coinsEarned: 320,
      coinsRedeemed: 200,
      offerApplied: 'FLAT10',
      discount: 340,
      status: 'completed',
      source: 'Square POS',
      paymentMethod: 'Card'
    }
  ];

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Platinum': return 'bg-purple-100 text-purple-700';
      case 'Gold': return 'bg-yellow-100 text-yellow-700';
      case 'Silver': return 'bg-gray-200 text-gray-700';
      case 'Bronze': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-500';
    }
  };

  const filteredTransactions = transactions.filter(txn => {
    if (statusFilter !== 'all' && txn.status !== statusFilter) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        txn.orderId.toLowerCase().includes(query) ||
        txn.customer.name.toLowerCase().includes(query) ||
        (txn.customer.phone && txn.customer.phone.includes(query))
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">POS Transactions</h1>
              <p className="text-gray-600 mt-1">Monitor transactions synced from your POS</p>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="custom">Custom Range</option>
              </select>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Sync Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Activity className="w-4 h-4" />
              <span className="text-sm">Total Transactions</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.totalTransactions}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Success Rate</span>
            </div>
            <div className="text-2xl font-bold text-green-600">{stats.successRate}%</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <CreditCard className="w-4 h-4" />
              <span className="text-sm">Total Amount</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">₹{stats.totalAmount.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Coins className="w-4 h-4" />
              <span className="text-sm">Coins Awarded</span>
            </div>
            <div className="text-2xl font-bold text-yellow-600">{stats.coinsAwarded.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Gift className="w-4 h-4" />
              <span className="text-sm">Offers Redeemed</span>
            </div>
            <div className="text-2xl font-bold text-purple-600">{stats.offersRedeemed}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Avg Transaction</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">₹{stats.avgTransactionValue.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by order ID, customer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-80"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          <div className="text-sm text-gray-500">
            Showing {filteredTransactions.length} of {transactions.length} transactions
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="px-6 py-4">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Order</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Coins</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Offer</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Payment</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Time</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTransactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div className="font-medium text-gray-900">{txn.orderId}</div>
                    <div className="text-xs text-gray-500">{txn.posOrderId}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-medium text-gray-900">{txn.customer.name}</div>
                    {txn.customer.phone && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{txn.customer.phone}</span>
                        {txn.customer.tier && (
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${getTierColor(txn.customer.tier)}`}>
                            {txn.customer.tier}
                          </span>
                        )}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-bold text-gray-900">₹{txn.amount.toLocaleString()}</div>
                    {txn.discount > 0 && (
                      <div className="text-xs text-green-600">-₹{txn.discount} saved</div>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      {txn.coinsEarned > 0 && (
                        <div className="flex items-center gap-1 text-green-600">
                          <ArrowUpRight className="w-3 h-3" />
                          <span className="text-sm font-medium">+{txn.coinsEarned}</span>
                        </div>
                      )}
                      {txn.coinsRedeemed > 0 && (
                        <div className="flex items-center gap-1 text-orange-600">
                          <ArrowDownLeft className="w-3 h-3" />
                          <span className="text-sm font-medium">-{txn.coinsRedeemed}</span>
                        </div>
                      )}
                      {txn.coinsEarned === 0 && txn.coinsRedeemed === 0 && (
                        <span className="text-sm text-gray-400">—</span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {txn.offerApplied ? (
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                        {txn.offerApplied}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-900">{txn.paymentMethod}</span>
                  </td>
                  <td className="px-4 py-4">
                    {txn.status === 'completed' && (
                      <span className="flex items-center gap-1 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">Synced</span>
                      </span>
                    )}
                    {txn.status === 'pending' && (
                      <span className="flex items-center gap-1 text-yellow-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">Pending</span>
                      </span>
                    )}
                    {txn.status === 'failed' && (
                      <div>
                        <span className="flex items-center gap-1 text-red-600">
                          <XCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">Failed</span>
                        </span>
                        <div className="text-xs text-red-500 mt-1">{txn.error}</div>
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900">{txn.time}</div>
                    <div className="text-xs text-gray-500">{txn.date}</div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye className="w-4 h-4 text-gray-500" />
                      </button>
                      {txn.status === 'failed' && (
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <RefreshCw className="w-4 h-4 text-purple-600" />
                        </button>
                      )}
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVertical className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Page 1 of 12
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50" disabled>
                Previous
              </button>
              <button className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">2</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">3</button>
              <span className="text-gray-500">...</span>
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">12</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
