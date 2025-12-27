import { useState } from 'react';
import { Search, Coins, TrendingUp, Clock, CheckCircle, XCircle, Send, Settings } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminCashback() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [coinStats] = useState({
    totalCoins: 12500000,
    distributedToday: 45670,
    redeemed: 8900000,
    pending: 150000,
    expired: 25000
  });

  const [pendingQueue, setPendingQueue] = useState([
    {
      id: 1,
      user: 'John Doe',
      transactionId: 'TXN001234567',
      merchant: 'The Coffee House',
      amount: 450,
      cashbackDue: 45,
      coinsDue: 450,
      date: '2024-01-20',
      reason: 'pending_verification'
    },
    {
      id: 2,
      user: 'Jane Smith',
      transactionId: 'TXN001234568',
      merchant: 'Pizza Paradise',
      amount: 890,
      cashbackDue: 89,
      coinsDue: 890,
      date: '2024-01-20',
      reason: 'merchant_confirmation'
    },
    {
      id: 3,
      user: 'Mike Johnson',
      transactionId: 'TXN001234569',
      merchant: 'Burger King',
      amount: 650,
      cashbackDue: 65,
      coinsDue: 650,
      date: '2024-01-19',
      reason: 'payment_verification'
    }
  ]);

  const [categoryRates, setCategoryRates] = useState([
    { id: 1, category: 'Food & Dining', baseRate: 10, premiumRate: 12, studentRate: 15 },
    { id: 2, category: 'Shopping', baseRate: 8, premiumRate: 10, studentRate: 12 },
    { id: 3, category: 'Entertainment', baseRate: 5, premiumRate: 7, studentRate: 10 },
    { id: 4, category: 'Travel', baseRate: 12, premiumRate: 15, studentRate: 18 },
    { id: 5, category: 'Groceries', baseRate: 6, premiumRate: 8, studentRate: 10 }
  ]);

  const [merchantRates, setMerchantRates] = useState([
    { id: 1, merchant: 'The Coffee House', logo: '☕', category: 'Food & Dining', rate: 10, boosted: false },
    { id: 2, merchant: 'Pizza Paradise', logo: '🍕', category: 'Food & Dining', rate: 15, boosted: true },
    { id: 3, merchant: 'Burger King', logo: '🍔', category: 'Food & Dining', rate: 12, boosted: false },
    { id: 4, merchant: 'Fashion Boutique', logo: '👗', category: 'Shopping', rate: 8, boosted: false }
  ]);

  const handleApproveCashback = (id) => {
    setPendingQueue(prev => prev.filter(item => item.id !== id));
  };

  const handleRejectCashback = (id) => {
    setPendingQueue(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateRate = (id, field, value) => {
    setCategoryRates(prev => prev.map(cat =>
      cat.id === id ? { ...cat, [field]: parseFloat(value) } : cat
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cashback & Coins Management</h1>
              <p className="text-gray-600 mt-1">Manage cashback distribution and ReZ Coins</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Send className="w-5 h-5" />
              Bulk Distribution
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Coin Distribution Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm font-medium">Total Coins</p>
              <Coins className="w-6 h-6 text-yellow-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{(coinStats.totalCoins / 1000000).toFixed(1)}M</p>
            <p className="text-xs text-gray-500 mt-1">All time distributed</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm font-medium">Today</p>
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{coinStats.distributedToday.toLocaleString()}</p>
            <p className="text-xs text-green-600 mt-1">+12% vs yesterday</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm font-medium">Redeemed</p>
              <CheckCircle className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{(coinStats.redeemed / 1000000).toFixed(1)}M</p>
            <p className="text-xs text-gray-500 mt-1">71% redemption rate</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm font-medium">Pending</p>
              <Clock className="w-6 h-6 text-orange-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{coinStats.pending.toLocaleString()}</p>
            <p className="text-xs text-orange-600 mt-1">Awaiting approval</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm font-medium">Expired</p>
              <XCircle className="w-6 h-6 text-red-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{coinStats.expired.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'overview'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Pending Queue
              </button>
              <button
                onClick={() => setActiveTab('categories')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'categories'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Category Rates
              </button>
              <button
                onClick={() => setActiveTab('merchants')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'merchants'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Merchant Rates
              </button>
              <button
                onClick={() => setActiveTab('tools')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'tools'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Adjustment Tools
              </button>
            </nav>
          </div>

          {/* Pending Queue Tab */}
          {activeTab === 'overview' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cashback Pending Queue</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merchant</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cashback Due</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pendingQueue.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-900">{item.user}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{item.transactionId}</p>
                          <p className="text-xs text-gray-500">{item.date}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{item.merchant}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-900">₹{item.amount}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-medium text-green-600">₹{item.cashbackDue}</p>
                          <p className="text-xs text-yellow-600">{item.coinsDue} coins</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                            {item.reason.replace(/_/g, ' ')}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleApproveCashback(item.id)}
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                              title="Approve"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleRejectCashback(item.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                              title="Reject"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Category Rates Tab */}
          {activeTab === 'categories' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cashback Rates by Category</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Base Rate (%)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Premium Rate (%)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student Rate (%)</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {categoryRates.map((cat) => (
                      <tr key={cat.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-900">{cat.category}</p>
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            value={cat.baseRate}
                            onChange={(e) => handleUpdateRate(cat.id, 'baseRate', e.target.value)}
                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                            step="0.5"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            value={cat.premiumRate}
                            onChange={(e) => handleUpdateRate(cat.id, 'premiumRate', e.target.value)}
                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                            step="0.5"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            value={cat.studentRate}
                            onChange={(e) => handleUpdateRate(cat.id, 'studentRate', e.target.value)}
                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                            step="0.5"
                          />
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700">
                            Save
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Merchant Rates Tab */}
          {activeTab === 'merchants' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Merchant-Specific Rates</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merchant</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cashback Rate (%)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {merchantRates.map((merchant) => (
                      <tr key={merchant.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{merchant.logo}</span>
                            <p className="font-medium text-gray-900">{merchant.merchant}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-600">{merchant.category}</p>
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            value={merchant.rate}
                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                            step="0.5"
                          />
                        </td>
                        <td className="px-4 py-3">
                          {merchant.boosted ? (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                              Boosted
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                              Normal
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700">
                            Update
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Adjustment Tools Tab */}
          {activeTab === 'tools' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Bulk Coin Distribution</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">User Group</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>All Active Users</option>
                        <option>Premium Members</option>
                        <option>Student Users</option>
                        <option>Top Spenders</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Coins to Distribute</label>
                      <input
                        type="number"
                        placeholder="1000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                      <input
                        type="text"
                        placeholder="Festival Bonus"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                      Distribute Coins
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Individual Adjustment</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">User Email/Phone</label>
                      <input
                        type="text"
                        placeholder="user@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Adjustment Type</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>Add Coins</option>
                        <option>Deduct Coins</option>
                        <option>Add Cashback</option>
                        <option>Deduct Cashback</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                      <input
                        type="number"
                        placeholder="500"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                      <textarea
                        placeholder="Manual adjustment reason..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        rows="2"
                      />
                    </div>
                    <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      Apply Adjustment
                    </button>
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
