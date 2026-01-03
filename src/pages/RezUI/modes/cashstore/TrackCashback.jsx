import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, XCircle, AlertCircle, Search, Filter, Calendar, ExternalLink, Info } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNavManager from '../../components/layout/BottomNavManager';

const TrackCashback = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock cashback transactions data
  const transactions = [
    {
      id: 1,
      brand: 'Amazon',
      logo: '📦',
      orderDate: '20 Dec 2025',
      orderAmount: 3499,
      coinsEarned: 420,
      status: 'credited',
      creditDate: '22 Dec 2025',
      orderId: 'AMZ123456789',
      category: 'Electronics'
    },
    {
      id: 2,
      brand: 'Myntra',
      logo: '👔',
      orderDate: '18 Dec 2025',
      orderAmount: 2199,
      coinsEarned: 616,
      status: 'confirmed',
      expectedCredit: '15 Jan 2026',
      orderId: 'MYN987654321',
      category: 'Fashion'
    },
    {
      id: 3,
      brand: 'Swiggy',
      logo: '🍕',
      orderDate: '22 Dec 2025',
      orderAmount: 485,
      coinsEarned: 29,
      status: 'pending',
      expectedCredit: '24 Dec 2025',
      orderId: 'SWG456789123',
      category: 'Food'
    },
    {
      id: 4,
      brand: 'Flipkart',
      logo: '🛒',
      orderDate: '15 Dec 2025',
      orderAmount: 5999,
      coinsEarned: 720,
      status: 'credited',
      creditDate: '17 Dec 2025',
      orderId: 'FLP789123456',
      category: 'Electronics'
    },
    {
      id: 5,
      brand: 'Zomato',
      logo: '🍔',
      orderDate: '10 Dec 2025',
      orderAmount: 650,
      coinsEarned: 0,
      status: 'rejected',
      rejectionReason: 'Order cancelled by user',
      orderId: 'ZOM321654987',
      category: 'Food'
    },
    {
      id: 6,
      brand: 'Nykaa',
      logo: '💄',
      orderDate: '19 Dec 2025',
      orderAmount: 1899,
      coinsEarned: 570,
      status: 'confirmed',
      expectedCredit: '18 Jan 2026',
      orderId: 'NYK654987321',
      category: 'Beauty'
    },
    {
      id: 7,
      brand: 'BookMyShow',
      logo: '🎬',
      orderDate: '23 Dec 2025',
      orderAmount: 750,
      coinsEarned: 75,
      status: 'pending',
      expectedCredit: '25 Dec 2025',
      orderId: 'BMS147258369',
      category: 'Entertainment'
    },
    {
      id: 8,
      brand: 'Ajio',
      logo: '👗',
      orderDate: '12 Dec 2025',
      orderAmount: 3299,
      coinsEarned: 989,
      status: 'credited',
      creditDate: '14 Dec 2025',
      orderId: 'AJI963852741',
      category: 'Fashion'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All', count: transactions.length },
    { id: 'pending', label: 'Pending', count: transactions.filter(t => t.status === 'pending').length },
    { id: 'confirmed', label: 'Confirmed', count: transactions.filter(t => t.status === 'confirmed').length },
    { id: 'credited', label: 'Credited', count: transactions.filter(t => t.status === 'credited').length },
    { id: 'rejected', label: 'Rejected', count: transactions.filter(t => t.status === 'rejected').length }
  ];

  const filteredTransactions = transactions.filter(t => {
    const matchesTab = activeTab === 'all' || t.status === activeTab;
    const matchesSearch = t.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         t.orderId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getStatusConfig = (status) => {
    const configs = {
      pending: {
        icon: Clock,
        color: 'text-amber-600 dark:text-amber-400',
        bgColor: 'bg-amber-500/10',
        label: 'Tracking...'
      },
      confirmed: {
        icon: CheckCircle,
        color: 'text-blue-600 dark:text-blue-400',
        bgColor: 'bg-blue-500/10',
        label: 'Confirmed'
      },
      credited: {
        icon: CheckCircle,
        color: 'text-emerald-600 dark:text-emerald-400',
        bgColor: 'bg-emerald-500/10',
        label: 'Credited'
      },
      rejected: {
        icon: XCircle,
        color: 'text-red-600 dark:text-red-400',
        bgColor: 'bg-red-500/10',
        label: 'Rejected'
      }
    };
    return configs[status];
  };

  const totalPending = transactions
    .filter(t => t.status === 'pending' || t.status === 'confirmed')
    .reduce((sum, t) => sum + t.coinsEarned, 0);

  const totalCredited = transactions
    .filter(t => t.status === 'credited')
    .reduce((sum, t) => sum + t.coinsEarned, 0);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Page Header */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate('/cash-store')}
            className="p-2 rounded-full bg-white dark:bg-dark-800 hover:bg-rez-gray-100 dark:hover:bg-dark-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-rez-navy dark:text-white">Track Cashback</h1>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">Monitor your ReZ Coins earnings</p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-medium">Pending</span>
            </div>
            <div className="text-2xl font-bold mb-1">🪙 {totalPending.toLocaleString()}</div>
            <div className="text-xs opacity-90">Processing...</div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs font-medium">Credited</span>
            </div>
            <div className="text-2xl font-bold mb-1">🪙 {totalCredited.toLocaleString()}</div>
            <div className="text-xs opacity-90">In your wallet</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <Search className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search by brand or order ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-rez-navy dark:text-white placeholder-rez-gray-500 dark:placeholder-gray-500 outline-none text-sm"
            />
          </div>
          <button className="p-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors">
            <Filter className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>

        {/* Info Banner */}
        <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">
                How Cashback Tracking Works
              </p>
              <p className="text-xs text-blue-800 dark:text-blue-400">
                Pending (24-48hrs) → Confirmed by brand (30-45 days) → Credited to wallet. Track all your transactions here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white dark:bg-dark-800 text-rez-gray-600 dark:text-gray-400 hover:bg-rez-gray-100 dark:hover:bg-dark-700'
              }`}
            >
              <span className="text-sm font-medium">{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                activeTab === tab.id
                  ? 'bg-white/20 text-white'
                  : 'bg-rez-gray-200 dark:bg-dark-700 text-rez-gray-700 dark:text-gray-300'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Transactions List */}
      <div className="px-4 mb-6">
        {filteredTransactions.length > 0 ? (
          <div className="space-y-3">
            {filteredTransactions.map((transaction) => {
              const statusConfig = getStatusConfig(transaction.status);
              const StatusIcon = statusConfig.icon;

              return (
                <div
                  key={transaction.id}
                  className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-3">
                    {/* Logo */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center text-2xl flex-shrink-0">
                      {transaction.logo}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-bold text-rez-navy dark:text-white">{transaction.brand}</h3>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${statusConfig.bgColor}`}>
                          <StatusIcon className={`w-3 h-3 ${statusConfig.color}`} />
                          <span className={`text-xs font-medium ${statusConfig.color}`}>{statusConfig.label}</span>
                        </div>
                      </div>
                      <p className="text-xs text-rez-gray-500 dark:text-gray-500 mb-1">{transaction.category}</p>
                      <p className="text-xs text-rez-gray-500 dark:text-gray-500">Order ID: {transaction.orderId}</p>
                    </div>
                  </div>

                  {/* Amount & Coins */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-50 dark:bg-dark-700 mb-3">
                    <div>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Order Amount</p>
                      <p className="text-lg font-bold text-rez-navy dark:text-white">₹{transaction.orderAmount.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">ReZ Coins</p>
                      <div className="flex items-center gap-1">
                        <span className="text-amber-400">🪙</span>
                        <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                          {transaction.status === 'rejected' ? '0' : `+${transaction.coinsEarned.toLocaleString()}`}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <Calendar className="w-3.5 h-3.5 text-rez-gray-500 dark:text-gray-500" />
                      <span className="text-rez-gray-600 dark:text-gray-400">Ordered on {transaction.orderDate}</span>
                    </div>

                    {transaction.status === 'credited' && (
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400">
                          Credited on {transaction.creditDate}
                        </span>
                      </div>
                    )}

                    {(transaction.status === 'pending' || transaction.status === 'confirmed') && (
                      <div className="flex items-center gap-2 text-xs">
                        <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        <span className="text-amber-600 dark:text-amber-400">
                          Expected credit: {transaction.expectedCredit}
                        </span>
                      </div>
                    )}

                    {transaction.status === 'rejected' && (
                      <div className="flex items-center gap-2 text-xs">
                        <AlertCircle className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                        <span className="text-red-600 dark:text-red-400">
                          {transaction.rejectionReason}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  {transaction.status !== 'rejected' && (
                    <button className="w-full mt-3 py-2 rounded-xl bg-rez-gray-100 dark:bg-dark-700 hover:bg-rez-gray-200 dark:hover:bg-dark-600 text-rez-navy dark:text-white text-sm font-medium transition-colors flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Order Details
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-white dark:bg-dark-800 text-center">
            <div className="w-16 h-16 rounded-full bg-rez-gray-100 dark:bg-dark-700 flex items-center justify-center mx-auto mb-3">
              <Search className="w-8 h-8 text-rez-gray-400 dark:text-gray-500" />
            </div>
            <p className="text-rez-gray-600 dark:text-gray-400 mb-1">No transactions found</p>
            <p className="text-sm text-rez-gray-500 dark:text-gray-500">
              {searchQuery ? 'Try a different search term' : 'Start shopping to see your cashback here'}
            </p>
          </div>
        )}
      </div>

      {/* Help Section */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-200 dark:border-purple-800">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Need Help?</h3>
          <div className="space-y-2 text-sm text-rez-gray-700 dark:text-gray-300">
            <p>• Cashback tracking time: 24-48 hours after purchase</p>
            <p>• Credit time varies by brand: 30-45 days typically</p>
            <p>• Missing cashback? Report within 90 days</p>
          </div>
          <button className="w-full mt-3 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-medium transition-colors">
            Report Missing Cashback
          </button>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default TrackCashback;
