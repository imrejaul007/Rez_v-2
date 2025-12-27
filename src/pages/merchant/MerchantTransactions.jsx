import { useState } from 'react';
import { Search, Download, Filter, CheckCircle, Clock, XCircle } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantTransactions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDate, setFilterDate] = useState('all');

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      orderId: 'ORD-2024-001',
      customer: 'John Doe',
      offer: '50% OFF on Pizzas',
      items: 'Margherita Pizza x2, Coke x2',
      subtotal: 800,
      discount: 400,
      tax: 20,
      totalAmount: 420,
      coinsUsed: 100,
      coinsValue: 100,
      coinsEarned: 42,
      paymentMethod: 'UPI',
      status: 'completed',
      timestamp: '2024-01-20 14:30',
      date: '2024-01-20'
    },
    {
      id: 2,
      orderId: 'ORD-2024-002',
      customer: 'Jane Smith',
      offer: 'Buy 1 Get 1 Coffee',
      items: 'Cappuccino x2',
      subtotal: 400,
      discount: 200,
      tax: 10,
      totalAmount: 210,
      coinsUsed: 0,
      coinsValue: 0,
      coinsEarned: 21,
      paymentMethod: 'Card',
      status: 'completed',
      timestamp: '2024-01-20 15:45',
      date: '2024-01-20'
    },
    {
      id: 3,
      orderId: 'ORD-2024-003',
      customer: 'Mike Johnson',
      offer: 'Lunch Special',
      items: 'Burger Combo',
      subtotal: 500,
      discount: 100,
      tax: 20,
      totalAmount: 420,
      coinsUsed: 50,
      coinsValue: 50,
      coinsEarned: 42,
      paymentMethod: 'UPI',
      status: 'pending',
      timestamp: '2024-01-20 13:15',
      date: '2024-01-20'
    },
    {
      id: 4,
      orderId: 'ORD-2024-004',
      customer: 'Sarah Williams',
      offer: '30% OFF',
      items: 'Pasta, Garlic Bread, Wine',
      subtotal: 1200,
      discount: 360,
      tax: 42,
      totalAmount: 882,
      coinsUsed: 0,
      coinsValue: 0,
      coinsEarned: 88,
      paymentMethod: 'Wallet',
      status: 'completed',
      timestamp: '2024-01-19 19:30',
      date: '2024-01-19'
    },
    {
      id: 5,
      orderId: 'ORD-2024-005',
      customer: 'David Brown',
      offer: 'Free Dessert',
      items: 'Main Course, Free Dessert',
      subtotal: 600,
      discount: 150,
      tax: 22.5,
      totalAmount: 472.5,
      coinsUsed: 200,
      coinsValue: 200,
      coinsEarned: 47,
      paymentMethod: 'Cash',
      status: 'cancelled',
      timestamp: '2024-01-19 18:00',
      date: '2024-01-19'
    }
  ]);

  const filteredTransactions = transactions.filter(txn => {
    const matchesSearch = txn.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         txn.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || txn.status === filterStatus;
    const matchesDate = filterDate === 'all' ||
                       (filterDate === 'today' && txn.date === '2024-01-20') ||
                       (filterDate === 'yesterday' && txn.date === '2024-01-19');
    return matchesSearch && matchesStatus && matchesDate;
  });

  const stats = {
    total: transactions.reduce((sum, t) => t.status === 'completed' ? sum + t.totalAmount : sum, 0),
    count: transactions.filter(t => t.status === 'completed').length,
    pending: transactions.filter(t => t.status === 'pending').length,
    avgOrder: transactions.filter(t => t.status === 'completed').length > 0 ?
      transactions.reduce((sum, t) => t.status === 'completed' ? sum + t.totalAmount : sum, 0) /
      transactions.filter(t => t.status === 'completed').length : 0
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
              <p className="text-gray-600 mt-1">View and manage all your transactions</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Download className="w-5 h-5" />
              Export
            </button>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
            <p className="text-3xl font-bold text-green-600 mt-2">₹{stats.total.toFixed(0)}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Completed</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.count}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Pending</p>
            <p className="text-3xl font-bold text-orange-600 mt-2">{stats.pending}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Avg Order Value</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">₹{stats.avgOrder.toFixed(0)}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by order ID or customer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <select
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pricing</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Coins</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTransactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{txn.orderId}</p>
                    <p className="text-xs text-gray-500">{txn.offer}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-900">{txn.customer}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">{txn.items}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="text-gray-500">₹{txn.subtotal}</p>
                      <p className="text-red-600">-₹{txn.discount}</p>
                      <p className="text-gray-500">+₹{txn.tax} tax</p>
                      <p className="font-semibold text-green-600">₹{txn.totalAmount}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      {txn.coinsUsed > 0 && (
                        <p className="text-orange-600">-{txn.coinsUsed} used</p>
                      )}
                      <p className="text-green-600">+{txn.coinsEarned} earned</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{txn.paymentMethod}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      txn.status === 'completed' ? 'bg-green-100 text-green-700' :
                      txn.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {txn.status === 'completed' ? <CheckCircle className="w-3 h-3" /> :
                       txn.status === 'pending' ? <Clock className="w-3 h-3" /> :
                       <XCircle className="w-3 h-3" />}
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{txn.timestamp}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
