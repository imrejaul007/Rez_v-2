import { useState } from 'react';
import { Search, Filter, Download, Eye, RefreshCw, AlertTriangle, Calendar, CreditCard, TrendingUp, DollarSign, Coins } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminTransactions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [filterPayment, setFilterPayment] = useState('all');
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const [transactions, setTransactions] = useState([
    {
      id: 'TXN001234567',
      dateTime: '2024-01-20 14:35:22',
      user: { name: 'John Doe', email: 'john@example.com' },
      merchant: { name: 'The Coffee House', logo: '☕' },
      amount: 450,
      cashback: 45,
      coinsEarned: 450,
      paymentMethod: 'UPI',
      paymentGateway: 'Razorpay',
      status: 'completed',
      type: 'purchase',
      orderId: 'ORD789456',
      utrNumber: 'UTR123456789'
    },
    {
      id: 'TXN001234568',
      dateTime: '2024-01-20 14:28:15',
      user: { name: 'Jane Smith', email: 'jane@example.com' },
      merchant: { name: 'Pizza Paradise', logo: '🍕' },
      amount: 890,
      cashback: 89,
      coinsEarned: 890,
      paymentMethod: 'Credit Card',
      paymentGateway: 'Paytm',
      status: 'pending',
      type: 'purchase',
      orderId: 'ORD789457',
      utrNumber: null
    },
    {
      id: 'TXN001234569',
      dateTime: '2024-01-20 13:45:10',
      user: { name: 'Mike Johnson', email: 'mike@example.com' },
      merchant: { name: 'Burger King', logo: '🍔' },
      amount: 650,
      cashback: 65,
      coinsEarned: 650,
      paymentMethod: 'Debit Card',
      paymentGateway: 'Razorpay',
      status: 'failed',
      type: 'purchase',
      orderId: 'ORD789458',
      utrNumber: null
    },
    {
      id: 'TXN001234570',
      dateTime: '2024-01-20 12:20:30',
      user: { name: 'Sarah Williams', email: 'sarah@example.com' },
      merchant: { name: 'Fashion Boutique', logo: '👗' },
      amount: 1200,
      cashback: -120,
      coinsEarned: 0,
      paymentMethod: 'UPI',
      paymentGateway: 'Razorpay',
      status: 'refunded',
      type: 'refund',
      orderId: 'ORD789459',
      utrNumber: 'UTR987654321'
    },
    {
      id: 'TXN001234571',
      dateTime: '2024-01-20 11:15:45',
      user: { name: 'David Brown', email: 'david@example.com' },
      merchant: { name: 'Tech Store', logo: '💻' },
      amount: 5500,
      cashback: 550,
      coinsEarned: 5500,
      paymentMethod: 'Net Banking',
      paymentGateway: 'Paytm',
      status: 'completed',
      type: 'purchase',
      orderId: 'ORD789460',
      utrNumber: 'UTR456789123'
    }
  ]);

  const filteredTransactions = transactions.filter(txn => {
    const matchesSearch = txn.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         txn.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         txn.merchant.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || txn.status === filterStatus;
    const matchesType = filterType === 'all' || txn.type === filterType;
    const matchesPayment = filterPayment === 'all' || txn.paymentMethod === filterPayment;

    return matchesSearch && matchesStatus && matchesType && matchesPayment;
  });

  const handleRefund = (id) => {
    setTransactions(prev => prev.map(t =>
      t.id === id ? { ...t, status: 'refunded', type: 'refund' } : t
    ));
    setSelectedTransaction(null);
  };

  const handleMarkFraudulent = (id) => {
    setTransactions(prev => prev.map(t =>
      t.id === id ? { ...t, status: 'fraudulent' } : t
    ));
    setSelectedTransaction(null);
  };

  const totalVolume = transactions.reduce((sum, t) => sum + t.amount, 0);
  const totalCashback = transactions.reduce((sum, t) => sum + t.cashback, 0);
  const totalCoins = transactions.reduce((sum, t) => sum + t.coinsEarned, 0);
  const successRate = ((transactions.filter(t => t.status === 'completed').length / transactions.length) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Transaction Management</h1>
              <p className="text-gray-600 mt-1">Monitor and manage all platform transactions</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Download className="w-5 h-5" />
              Export Transactions
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
              <p className="text-gray-600 text-sm font-medium">Total Volume</p>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">₹{totalVolume.toLocaleString()}</p>
            <p className="text-sm text-green-600 mt-2">+15.3% from yesterday</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Total Cashback</p>
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">₹{totalCashback.toLocaleString()}</p>
            <p className="text-sm text-gray-600 mt-2">Across {transactions.length} transactions</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">ReZ Coins Earned</p>
              <Coins className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">{totalCoins.toLocaleString()}</p>
            <p className="text-sm text-gray-600 mt-2">By {transactions.length} users</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Success Rate</p>
              <CreditCard className="w-8 h-8 text-indigo-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">{successRate}%</p>
            <p className="text-sm text-green-600 mt-2">Above 98% target</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by ID, user, or merchant..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
              <option value="refunded">Refunded</option>
            </select>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Types</option>
              <option value="purchase">Purchase</option>
              <option value="refund">Refund</option>
            </select>

            <select
              value={filterPayment}
              onChange={(e) => setFilterPayment(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Payment Methods</option>
              <option value="UPI">UPI</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Net Banking">Net Banking</option>
            </select>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merchant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cashback</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTransactions.map((txn) => (
                  <tr key={txn.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{txn.id}</p>
                        <p className="text-xs text-gray-500">{txn.orderId}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-sm text-gray-900">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        {txn.dateTime}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{txn.user.name}</p>
                        <p className="text-xs text-gray-500">{txn.user.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{txn.merchant.logo}</span>
                        <p className="font-medium text-gray-900">{txn.merchant.name}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">₹{txn.amount.toLocaleString()}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className={`font-medium ${txn.cashback > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {txn.cashback > 0 ? '+' : ''}₹{txn.cashback}
                        </p>
                        <p className="text-xs text-gray-500">{txn.coinsEarned} coins</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{txn.paymentMethod}</p>
                        <p className="text-xs text-gray-500">{txn.paymentGateway}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        txn.status === 'completed' ? 'bg-green-100 text-green-700' :
                        txn.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        txn.status === 'failed' ? 'bg-red-100 text-red-700' :
                        txn.status === 'refunded' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {txn.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => setSelectedTransaction(txn)}
                        className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{filteredTransactions.length}</span> of <span className="font-medium">{transactions.length}</span> results
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Detail Modal */}
      {selectedTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Transaction Details</h2>
                <button
                  onClick={() => setSelectedTransaction(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Transaction ID</p>
                    <p className="font-medium text-gray-900">{selectedTransaction.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Order ID</p>
                    <p className="font-medium text-gray-900">{selectedTransaction.orderId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Date & Time</p>
                    <p className="font-medium text-gray-900">{selectedTransaction.dateTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      selectedTransaction.status === 'completed' ? 'bg-green-100 text-green-700' :
                      selectedTransaction.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {selectedTransaction.status}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Amount Breakdown</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transaction Amount</span>
                      <span className="font-medium">₹{selectedTransaction.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cashback Given</span>
                      <span className="font-medium text-green-600">₹{selectedTransaction.cashback}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ReZ Coins Earned</span>
                      <span className="font-medium text-yellow-600">{selectedTransaction.coinsEarned}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Method</span>
                      <span className="font-medium">{selectedTransaction.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Gateway</span>
                      <span className="font-medium">{selectedTransaction.paymentGateway}</span>
                    </div>
                    {selectedTransaction.utrNumber && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">UTR Number</span>
                        <span className="font-medium">{selectedTransaction.utrNumber}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Actions</h3>
                  <div className="flex gap-3">
                    {selectedTransaction.status === 'completed' && (
                      <>
                        <button
                          onClick={() => handleRefund(selectedTransaction.id)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                        >
                          <RefreshCw className="w-4 h-4" />
                          Process Refund
                        </button>
                        <button
                          onClick={() => handleMarkFraudulent(selectedTransaction.id)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                          <AlertTriangle className="w-4 h-4" />
                          Mark Fraudulent
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
