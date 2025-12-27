import { useState } from 'react';
import { Search, Wallet, Users, TrendingUp, Clock, Lock, Unlock, Plus, Minus, Download, Filter, RefreshCw, AlertTriangle, DollarSign, Coins, PieChart, Calendar } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminWallet() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [showDebitModal, setShowDebitModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);

  const [walletStats] = useState({
    totalCoinsIssued: 15750000,
    activeUsersWithBalance: 45234,
    totalValueLocked: 1575000,
    avgBalancePerUser: 348,
    coinsExpiringSoon: 125000,
    frozenWallets: 23
  });

  const [userWallets, setUserWallets] = useState([
    {
      id: 1,
      userId: 'USR001',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91-9876543210',
      balance: 2450,
      valueInRupees: 2450,
      totalEarned: 8900,
      totalRedeemed: 6450,
      status: 'active',
      lastTransaction: '2024-01-20',
      expiringCoins: 450,
      expiryDate: '2024-02-15',
      freezeReason: null
    },
    {
      id: 2,
      userId: 'USR002',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+91-9876543211',
      balance: 5670,
      valueInRupees: 5670,
      totalEarned: 12340,
      totalRedeemed: 6670,
      status: 'active',
      lastTransaction: '2024-01-19',
      expiringCoins: 890,
      expiryDate: '2024-02-20',
      freezeReason: null
    },
    {
      id: 3,
      userId: 'USR003',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+91-9876543212',
      balance: 890,
      valueInRupees: 890,
      totalEarned: 4560,
      totalRedeemed: 3670,
      status: 'frozen',
      lastTransaction: '2024-01-18',
      expiringCoins: 200,
      expiryDate: '2024-02-10',
      freezeReason: 'Suspicious activity detected'
    },
    {
      id: 4,
      userId: 'USR004',
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      phone: '+91-9876543213',
      balance: 12450,
      valueInRupees: 12450,
      totalEarned: 23450,
      totalRedeemed: 11000,
      status: 'active',
      lastTransaction: '2024-01-20',
      expiringCoins: 1200,
      expiryDate: '2024-03-01',
      freezeReason: null
    },
    {
      id: 5,
      userId: 'USR005',
      name: 'David Brown',
      email: 'david@example.com',
      phone: '+91-9876543214',
      balance: 0,
      valueInRupees: 0,
      totalEarned: 5600,
      totalRedeemed: 5600,
      status: 'active',
      lastTransaction: '2024-01-15',
      expiringCoins: 0,
      expiryDate: null,
      freezeReason: null
    }
  ]);

  const [walletTransactions, setWalletTransactions] = useState([
    {
      id: 1,
      userId: 'USR001',
      userName: 'John Doe',
      type: 'credit',
      amount: 450,
      reason: 'Purchase cashback',
      orderId: 'ORD789456',
      date: '2024-01-20 14:35:22',
      balanceBefore: 2000,
      balanceAfter: 2450,
      adminId: null,
      adminName: null
    },
    {
      id: 2,
      userId: 'USR002',
      userName: 'Jane Smith',
      type: 'debit',
      amount: 1000,
      reason: 'Redeemed for discount',
      orderId: 'ORD789457',
      date: '2024-01-20 14:28:15',
      balanceBefore: 6670,
      balanceAfter: 5670,
      adminId: null,
      adminName: null
    },
    {
      id: 3,
      userId: 'USR004',
      userName: 'Sarah Williams',
      type: 'credit',
      amount: 2000,
      reason: 'Manual credit - Compensation',
      orderId: null,
      date: '2024-01-20 12:15:00',
      balanceBefore: 10450,
      balanceAfter: 12450,
      adminId: 'ADM001',
      adminName: 'Admin User'
    },
    {
      id: 4,
      userId: 'USR003',
      userName: 'Mike Johnson',
      type: 'freeze',
      amount: 0,
      reason: 'Suspicious activity detected',
      orderId: null,
      date: '2024-01-19 16:20:00',
      balanceBefore: 890,
      balanceAfter: 890,
      adminId: 'ADM001',
      adminName: 'Admin User'
    },
    {
      id: 5,
      userId: 'USR001',
      userName: 'John Doe',
      type: 'expiry',
      amount: 300,
      reason: 'Coins expired (90 days)',
      orderId: null,
      date: '2024-01-18 00:00:00',
      balanceBefore: 2300,
      balanceAfter: 2000,
      adminId: null,
      adminName: 'System'
    }
  ]);

  const [distributionData] = useState([
    { range: '0-500', users: 15234, percentage: 33.7 },
    { range: '501-1000', users: 12456, percentage: 27.5 },
    { range: '1001-2500', users: 9876, percentage: 21.8 },
    { range: '2501-5000', users: 5432, percentage: 12.0 },
    { range: '5001-10000', users: 1789, percentage: 4.0 },
    { range: '10000+', users: 447, percentage: 1.0 }
  ]);

  const filteredWallets = userWallets.filter(wallet =>
    wallet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    wallet.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    wallet.phone.includes(searchQuery) ||
    wallet.userId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFreezeWallet = (walletId, reason) => {
    setUserWallets(prev => prev.map(w =>
      w.id === walletId ? { ...w, status: 'frozen', freezeReason: reason } : w
    ));
    setSelectedWallet(null);
  };

  const handleUnfreezeWallet = (walletId) => {
    setUserWallets(prev => prev.map(w =>
      w.id === walletId ? { ...w, status: 'active', freezeReason: null } : w
    ));
    setSelectedWallet(null);
  };

  const handleCreditCoins = (walletId, amount, reason) => {
    const wallet = userWallets.find(w => w.id === walletId);
    setUserWallets(prev => prev.map(w =>
      w.id === walletId ? { ...w, balance: w.balance + amount } : w
    ));
    setWalletTransactions(prev => [{
      id: prev.length + 1,
      userId: wallet.userId,
      userName: wallet.name,
      type: 'credit',
      amount,
      reason,
      orderId: null,
      date: new Date().toISOString().split('T').join(' ').substring(0, 19),
      balanceBefore: wallet.balance,
      balanceAfter: wallet.balance + amount,
      adminId: 'ADM001',
      adminName: 'Admin User'
    }, ...prev]);
    setShowCreditModal(false);
    setSelectedWallet(null);
  };

  const handleDebitCoins = (walletId, amount, reason) => {
    const wallet = userWallets.find(w => w.id === walletId);
    setUserWallets(prev => prev.map(w =>
      w.id === walletId ? { ...w, balance: Math.max(0, w.balance - amount) } : w
    ));
    setWalletTransactions(prev => [{
      id: prev.length + 1,
      userId: wallet.userId,
      userName: wallet.name,
      type: 'debit',
      amount,
      reason,
      orderId: null,
      date: new Date().toISOString().split('T').join(' ').substring(0, 19),
      balanceBefore: wallet.balance,
      balanceAfter: Math.max(0, wallet.balance - amount),
      adminId: 'ADM001',
      adminName: 'Admin User'
    }, ...prev]);
    setShowDebitModal(false);
    setSelectedWallet(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Wallet Management</h1>
              <p className="text-gray-600 mt-1">Manage user wallets and ReZ Coins distribution</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowBulkModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Bulk Operations
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-5 h-5" />
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Coins Issued</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {(walletStats.totalCoinsIssued / 1000000).toFixed(2)}M
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Coins className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                +15.3%
              </span>
              <span className="text-gray-600 text-sm">vs last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Users with Balance</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {walletStats.activeUsersWithBalance.toLocaleString()}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Avg balance: {walletStats.avgBalancePerUser} coins
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Value Locked</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ₹{(walletStats.totalValueLocked / 100000).toFixed(2)}L
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              1 coin = ₹1 value
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Coins Expiring Soon</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {walletStats.coinsExpiringSoon.toLocaleString()}
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-orange-600">
              Expiring in next 30 days
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Frozen Wallets</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {walletStats.frozenWallets}
                </p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <Lock className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-red-600">
              Fraud prevention active
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Avg Redemption Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  72.5%
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <PieChart className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-green-600">
              Above 70% target
            </div>
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
                User Wallets
              </button>
              <button
                onClick={() => setActiveTab('transactions')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'transactions'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Transaction History
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'analytics'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Distribution Analytics
              </button>
              <button
                onClick={() => setActiveTab('expiry')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'expiry'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Expiry Management
              </button>
            </nav>
          </div>

          {/* User Wallets Tab */}
          {activeTab === 'overview' && (
            <div className="p-6">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by user name, email, phone, or user ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Balance</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Earned</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Redeemed</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expiring Soon</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredWallets.map((wallet) => (
                      <tr key={wallet.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{wallet.name}</p>
                            <p className="text-xs text-gray-500">{wallet.email}</p>
                            <p className="text-xs text-gray-500">{wallet.phone}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-bold text-yellow-600 text-lg">{wallet.balance.toLocaleString()}</p>
                            <p className="text-xs text-gray-500">₹{wallet.valueInRupees.toLocaleString()}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-medium text-green-600">{wallet.totalEarned.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-medium text-blue-600">{wallet.totalRedeemed.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3">
                          {wallet.expiringCoins > 0 ? (
                            <div>
                              <p className="font-medium text-orange-600">{wallet.expiringCoins}</p>
                              <p className="text-xs text-gray-500">{wallet.expiryDate}</p>
                            </div>
                          ) : (
                            <p className="text-sm text-gray-400">-</p>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              wallet.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }`}>
                              {wallet.status}
                            </span>
                            {wallet.freezeReason && (
                              <p className="text-xs text-red-600 mt-1">{wallet.freezeReason}</p>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setSelectedWallet(wallet)}
                              className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg"
                              title="View Details"
                            >
                              <Wallet className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => { setSelectedWallet(wallet); setShowCreditModal(true); }}
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                              title="Credit Coins"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => { setSelectedWallet(wallet); setShowDebitModal(true); }}
                              className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg"
                              title="Debit Coins"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            {wallet.status === 'active' ? (
                              <button
                                onClick={() => handleFreezeWallet(wallet.id, 'Manual freeze by admin')}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                title="Freeze Wallet"
                              >
                                <Lock className="w-4 h-4" />
                              </button>
                            ) : (
                              <button
                                onClick={() => handleUnfreezeWallet(wallet.id)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                                title="Unfreeze Wallet"
                              >
                                <Unlock className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Transaction History Tab */}
          {activeTab === 'transactions' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Wallet Transaction History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performed By</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {walletTransactions.map((txn) => (
                      <tr key={txn.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1 text-sm text-gray-900">
                            <Calendar className="w-3 h-3 text-gray-400" />
                            {txn.date}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{txn.userName}</p>
                            <p className="text-xs text-gray-500">{txn.userId}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            txn.type === 'credit' ? 'bg-green-100 text-green-700' :
                            txn.type === 'debit' ? 'bg-orange-100 text-orange-700' :
                            txn.type === 'freeze' ? 'bg-red-100 text-red-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {txn.type}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <p className={`font-bold ${
                            txn.type === 'credit' ? 'text-green-600' :
                            txn.type === 'debit' ? 'text-orange-600' :
                            'text-gray-600'
                          }`}>
                            {txn.type === 'credit' ? '+' : txn.type === 'debit' ? '-' : ''}
                            {txn.amount > 0 ? txn.amount.toLocaleString() : '-'}
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="text-sm text-gray-900">{txn.reason}</p>
                            {txn.orderId && (
                              <p className="text-xs text-gray-500">{txn.orderId}</p>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm">
                            <p className="text-gray-500">{txn.balanceBefore} → <span className="font-medium text-gray-900">{txn.balanceAfter}</span></p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">
                            {txn.adminName || 'System'}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Distribution Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Wallet Balance Distribution</h3>
              <div className="space-y-4">
                {distributionData.map((item) => (
                  <div key={item.range} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">{item.range} coins</p>
                        <p className="text-sm text-gray-600">{item.users.toLocaleString()} users</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-indigo-600">{item.percentage}%</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <p className="text-sm text-blue-800 font-medium mb-2">Median Balance</p>
                  <p className="text-3xl font-bold text-blue-900">1,245 coins</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <p className="text-sm text-green-800 font-medium mb-2">Top 10% Average</p>
                  <p className="text-3xl font-bold text-green-900">8,920 coins</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                  <p className="text-sm text-purple-800 font-medium mb-2">Redemption Velocity</p>
                  <p className="text-3xl font-bold text-purple-900">15.4 days</p>
                </div>
              </div>
            </div>
          )}

          {/* Expiry Management Tab */}
          {activeTab === 'expiry' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Coins Expiry Management</h3>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-orange-900">Expiry Policy</p>
                    <p className="text-sm text-orange-700 mt-1">
                      ReZ Coins expire 90 days after being earned. Users are notified 30, 15, and 7 days before expiry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {userWallets.filter(w => w.expiringCoins > 0).map((wallet) => (
                  <div key={wallet.id} className="bg-white border border-orange-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-semibold text-gray-900">{wallet.name}</p>
                            <p className="text-sm text-gray-500">{wallet.email}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-600">{wallet.expiringCoins}</p>
                        <p className="text-sm text-gray-600">coins expiring</p>
                        <p className="text-xs text-orange-600 font-medium mt-1">on {wallet.expiryDate}</p>
                      </div>
                      <div className="ml-6">
                        <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm">
                          Send Reminder
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Expiry Settings</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Coin Validity Period (days)
                    </label>
                    <input
                      type="number"
                      defaultValue="90"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reminder Schedule (days before expiry)
                    </label>
                    <input
                      type="text"
                      defaultValue="30, 15, 7"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Update Settings
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Credit Modal */}
      {showCreditModal && selectedWallet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Credit Coins</h2>
              <p className="text-sm text-gray-600 mt-1">{selectedWallet.name}</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount (coins)</label>
                  <input
                    type="number"
                    id="creditAmount"
                    placeholder="1000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                  <textarea
                    id="creditReason"
                    placeholder="e.g., Compensation for service issue"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    rows="3"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowCreditModal(false)}
                className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const amount = parseInt(document.getElementById('creditAmount').value);
                  const reason = document.getElementById('creditReason').value;
                  if (amount > 0 && reason) {
                    handleCreditCoins(selectedWallet.id, amount, reason);
                  }
                }}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Credit Coins
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Debit Modal */}
      {showDebitModal && selectedWallet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Debit Coins</h2>
              <p className="text-sm text-gray-600 mt-1">{selectedWallet.name}</p>
              <p className="text-sm text-gray-600">Current balance: {selectedWallet.balance} coins</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount (coins)</label>
                  <input
                    type="number"
                    id="debitAmount"
                    placeholder="500"
                    max={selectedWallet.balance}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                  <textarea
                    id="debitReason"
                    placeholder="e.g., Manual adjustment for duplicate credit"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    rows="3"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowDebitModal(false)}
                className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const amount = parseInt(document.getElementById('debitAmount').value);
                  const reason = document.getElementById('debitReason').value;
                  if (amount > 0 && reason) {
                    handleDebitCoins(selectedWallet.id, amount, reason);
                  }
                }}
                className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
              >
                Debit Coins
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Operations Modal */}
      {showBulkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Bulk Wallet Operations</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Bulk Credit</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">User Group</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>All Active Users</option>
                        <option>Premium Members</option>
                        <option>Top 10% Users</option>
                        <option>New Users (Last 30 days)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Coins per User</label>
                      <input
                        type="number"
                        placeholder="500"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                      <input
                        type="text"
                        placeholder="Festival bonus"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      Execute Bulk Credit
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Freeze Inactive Wallets</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Inactive Period (days)</label>
                      <input
                        type="number"
                        placeholder="180"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                      <input
                        type="text"
                        placeholder="Account dormancy"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-xs text-yellow-800">
                        This will freeze all wallets with no activity for the specified period.
                      </p>
                    </div>
                    <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                      Execute Bulk Freeze
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200">
              <button
                onClick={() => setShowBulkModal(false)}
                className="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
