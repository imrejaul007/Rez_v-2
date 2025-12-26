import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft, Clock, CheckCircle, AlertCircle, XCircle, Coins,
  TrendingUp, Calendar, Filter, Search, Info, ExternalLink, DollarSign, Eye, Shield
} from 'lucide-react';
import Header from '../../components/layout/Header';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CashStoreTrack = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - in production, fetch from API
  const cashbackData = {
    pending: 2450,
    confirmed: 1820,
    credited: 8950,
    rejected: 125,
    total: 13345
  };

  const transactions = [
    {
      id: 1,
      store: 'Amazon',
      logo: '📦',
      orderDate: '2025-12-20',
      orderAmount: 5499,
      cashbackAmount: 660,
      cashbackPercent: 12,
      status: 'credited',
      creditedDate: '2025-12-22',
      orderId: 'AMZ1234567890'
    },
    {
      id: 2,
      store: 'Myntra',
      logo: '👗',
      orderDate: '2025-12-18',
      orderAmount: 3299,
      cashbackAmount: 660,
      cashbackPercent: 20,
      status: 'confirmed',
      expectedDate: '2025-01-25',
      orderId: 'MYN9876543210'
    },
    {
      id: 3,
      store: 'MakeMyTrip',
      logo: '✈️',
      orderDate: '2025-12-15',
      orderAmount: 12500,
      cashbackAmount: 1250,
      cashbackPercent: 10,
      status: 'pending',
      trackingNote: 'Waiting for order confirmation',
      orderId: 'MMT5544332211'
    },
    {
      id: 4,
      store: 'Flipkart',
      logo: '🛒',
      orderDate: '2025-12-10',
      orderAmount: 2199,
      cashbackAmount: 330,
      cashbackPercent: 15,
      status: 'credited',
      creditedDate: '2025-12-18',
      orderId: 'FLK1122334455'
    },
    {
      id: 5,
      store: 'Swiggy',
      logo: '🍔',
      orderDate: '2025-12-08',
      orderAmount: 850,
      cashbackAmount: 85,
      cashbackPercent: 10,
      status: 'rejected',
      rejectionReason: 'Order cancelled by user',
      orderId: 'SWG9988776655'
    },
    {
      id: 6,
      store: 'Nykaa',
      logo: '💄',
      orderDate: '2025-12-05',
      orderAmount: 1599,
      cashbackAmount: 288,
      cashbackPercent: 18,
      status: 'pending',
      trackingNote: 'Processing - typically takes 2-3 days',
      orderId: 'NYK4433221100'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'credited': return 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/20';
      case 'confirmed': return 'text-blue-600 dark:text-blue-400 bg-blue-500/20';
      case 'pending': return 'text-orange-600 dark:text-orange-400 bg-orange-500/20';
      case 'rejected': return 'text-red-600 dark:text-red-400 bg-red-500/20';
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'credited': return <CheckCircle className="w-4 h-4" />;
      case 'confirmed': return <Clock className="w-4 h-4" />;
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'credited': return 'Credited';
      case 'confirmed': return 'Confirmed';
      case 'pending': return 'Tracking';
      case 'rejected': return 'Rejected';
      default: return status;
    }
  };

  const filteredTransactions = activeTab === 'all'
    ? transactions
    : transactions.filter(t => t.status === activeTab);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <Header />

      {/* Money-First Header */}
      <div className="px-4 py-6 border-b border-rez-gray-200 dark:border-dark-700">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-rez-navy dark:text-white mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
            <Eye className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-rez-navy dark:text-white">Track Cashback</h1>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
              💯 100% Transparent • Real-time tracking
            </p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Credited</p>
            </div>
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              {cashbackData.credited}
            </p>
            <p className="text-xs text-emerald-600/70 dark:text-emerald-400/70 mt-1">ReZ Coins</p>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <p className="text-xs font-medium text-blue-700 dark:text-blue-300">Confirmed</p>
            </div>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {cashbackData.confirmed}
            </p>
            <p className="text-xs text-blue-600/70 dark:text-blue-400/70 mt-1">ReZ Coins</p>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <p className="text-xs font-medium text-orange-700 dark:text-orange-300">Tracking</p>
            </div>
            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {cashbackData.pending}
            </p>
            <p className="text-xs text-orange-600/70 dark:text-orange-400/70 mt-1">ReZ Coins</p>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <p className="text-xs font-medium text-purple-700 dark:text-purple-300">Total Earned</p>
            </div>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {cashbackData.total}
            </p>
            <p className="text-xs text-purple-600/70 dark:text-purple-400/70 mt-1">Lifetime</p>
          </div>
        </div>

        {/* Transparency Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
          <div className="flex items-center gap-3">
            <Shield className="w-10 h-10 text-blue-500 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">
                💯 Transparency = Trust
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Every transaction tracked. See exactly where your coins are in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-4 p-4 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex items-start gap-2 mb-3">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-rez-navy dark:text-white mb-2">
                How Cashback Tracking Works
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertCircle className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-rez-navy dark:text-white">Tracking</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      We're monitoring your order with the store (1-3 days)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-rez-navy dark:text-white">Confirmed</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Store confirmed! Coins will credit within 30-45 days
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-rez-navy dark:text-white">Credited</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      ReZ Coins added to your wallet - ready to use!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Missing Cashback CTA */}
      <div className="px-4 mb-6">
        <Link
          to="/cash-store/missing-cashback"
          className="block p-4 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border-2 border-red-500/30 hover:border-red-500/50 transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-rez-navy dark:text-white">Missing Cashback?</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">We'll help you track it down - guaranteed!</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-red-600 dark:text-red-400" />
          </div>
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {['all', 'credited', 'confirmed', 'pending', 'rejected'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4 py-2.5 rounded-full shrink-0 text-sm font-semibold transition-all whitespace-nowrap
                ${activeTab === tab
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700'
                }
              `}
            >
              {tab === 'all' ? 'All Transactions' : getStatusLabel(tab)}
            </button>
          ))}
        </div>
      </div>

      {/* Transactions List */}
      <div className="px-4 pb-8">
        <div className="space-y-3">
          {filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
            >
              {/* Store Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-2xl">
                    {transaction.logo}
                  </div>
                  <div>
                    <h3 className="font-bold text-rez-navy dark:text-white">
                      {transaction.store}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Order: {transaction.orderId}
                    </p>
                  </div>
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${getStatusColor(transaction.status)}`}>
                  {getStatusIcon(transaction.status)}
                  <span>{getStatusLabel(transaction.status)}</span>
                </div>
              </div>

              {/* Order Details */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Order Date</p>
                  <p className="text-sm font-medium text-rez-navy dark:text-white">
                    {new Date(transaction.orderDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Order Amount</p>
                  <p className="text-sm font-medium text-rez-navy dark:text-white">
                    ₹{transaction.orderAmount.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Money-First Cashback Display */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      ReZ Coins Cashback
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      {transaction.cashbackAmount}
                    </p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      {transaction.cashbackPercent}% back
                    </p>
                  </div>
                </div>
              </div>

              {/* Status-specific info */}
              {transaction.status === 'credited' && transaction.creditedDate && (
                <div className="mt-3 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-3 h-3" />
                  <span>Credited on {new Date(transaction.creditedDate).toLocaleDateString('en-IN')}</span>
                </div>
              )}

              {transaction.status === 'confirmed' && transaction.expectedDate && (
                <div className="mt-3 flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400">
                  <Calendar className="w-3 h-3" />
                  <span>Expected by {new Date(transaction.expectedDate).toLocaleDateString('en-IN')}</span>
                </div>
              )}

              {transaction.status === 'pending' && transaction.trackingNote && (
                <div className="mt-3 flex items-center gap-2 text-xs text-orange-600 dark:text-orange-400">
                  <Clock className="w-3 h-3" />
                  <span>{transaction.trackingNote}</span>
                </div>
              )}

              {transaction.status === 'rejected' && transaction.rejectionReason && (
                <div className="mt-3 p-2 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                  <p className="text-xs text-red-700 dark:text-red-400">
                    <strong>Reason:</strong> {transaction.rejectionReason}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-rez-gray-400" />
            </div>
            <p className="text-rez-gray-600 dark:text-gray-400 mb-2">No transactions found</p>
            <p className="text-sm text-rez-gray-500 dark:text-gray-500">
              Start shopping through Cash Store to track cashback
            </p>
          </div>
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CashStoreTrack;
