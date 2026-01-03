import { useState } from 'react';
import { CreditCard, CheckCircle, XCircle, Clock, TrendingUp, AlertCircle, Download, RefreshCw } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminPayments() {
  const [activeTab, setActiveTab] = useState('gateways');

  const [gatewayStatus] = useState([
    {
      id: 1,
      name: 'Razorpay',
      logo: '💳',
      status: 'operational',
      uptime: 99.8,
      successRate: 98.5,
      todayTransactions: 1234,
      todayVolume: 456789,
      avgResponseTime: '1.2s'
    },
    {
      id: 2,
      name: 'Paytm',
      logo: '💰',
      status: 'operational',
      uptime: 99.5,
      successRate: 97.8,
      todayTransactions: 890,
      todayVolume: 234567,
      avgResponseTime: '1.8s'
    },
    {
      id: 3,
      name: 'PhonePe',
      logo: '📱',
      status: 'degraded',
      uptime: 95.2,
      successRate: 92.1,
      todayTransactions: 456,
      todayVolume: 123456,
      avgResponseTime: '3.5s'
    }
  ]);

  const [pendingSettlements, setPendingSettlements] = useState([
    {
      id: 1,
      merchant: { name: 'The Coffee House', logo: '☕' },
      amount: 45678,
      transactionCount: 234,
      nextSettlementDate: '2024-01-22',
      utrNumber: 'Pending',
      status: 'scheduled'
    },
    {
      id: 2,
      merchant: { name: 'Pizza Paradise', logo: '🍕' },
      amount: 89012,
      transactionCount: 456,
      nextSettlementDate: '2024-01-22',
      utrNumber: 'Pending',
      status: 'scheduled'
    },
    {
      id: 3,
      merchant: { name: 'Burger King', logo: '🍔' },
      amount: 67890,
      transactionCount: 345,
      nextSettlementDate: '2024-01-23',
      utrNumber: 'Pending',
      status: 'scheduled'
    }
  ]);

  const [settlementHistory] = useState([
    {
      id: 1,
      merchant: 'Fashion Boutique',
      amount: 125000,
      settledDate: '2024-01-20',
      utrNumber: 'UTR123456789',
      status: 'completed'
    },
    {
      id: 2,
      merchant: 'Tech Store',
      amount: 234000,
      settledDate: '2024-01-19',
      utrNumber: 'UTR987654321',
      status: 'completed'
    },
    {
      id: 3,
      merchant: 'Book Shop',
      amount: 45000,
      settledDate: '2024-01-18',
      utrNumber: 'UTR456789123',
      status: 'completed'
    }
  ]);

  const [refunds, setRefunds] = useState([
    {
      id: 1,
      transactionId: 'TXN001234567',
      user: 'John Doe',
      merchant: 'The Coffee House',
      amount: 450,
      reason: 'Order cancelled by merchant',
      requestDate: '2024-01-20',
      status: 'pending'
    },
    {
      id: 2,
      transactionId: 'TXN001234568',
      user: 'Jane Smith',
      merchant: 'Pizza Paradise',
      amount: 890,
      reason: 'Product quality issue',
      requestDate: '2024-01-20',
      status: 'pending'
    },
    {
      id: 3,
      transactionId: 'TXN001234569',
      user: 'Mike Johnson',
      merchant: 'Fashion Boutique',
      amount: 1200,
      reason: 'Duplicate payment',
      requestDate: '2024-01-19',
      status: 'processed'
    }
  ]);

  const handleProcessRefund = (id) => {
    setRefunds(prev => prev.map(r =>
      r.id === id ? { ...r, status: 'processed' } : r
    ));
  };

  const handleRejectRefund = (id) => {
    setRefunds(prev => prev.map(r =>
      r.id === id ? { ...r, status: 'rejected' } : r
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Payment & Settlement Management</h1>
              <p className="text-gray-600 mt-1">Monitor payment gateways and manage settlements</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Download className="w-5 h-5" />
              Export Report
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
              <p className="text-gray-600 text-sm font-medium">Today's Volume</p>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">₹8.15L</p>
            <p className="text-sm text-green-600 mt-2">+18.2% from yesterday</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Pending Settlements</p>
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">₹2.02L</p>
            <p className="text-sm text-gray-600 mt-2">3 merchants</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Pending Refunds</p>
              <RefreshCw className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">₹13,400</p>
            <p className="text-sm text-orange-600 mt-2">2 requests pending</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Success Rate</p>
              <CheckCircle className="w-8 h-8 text-indigo-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">98.3%</p>
            <p className="text-sm text-green-600 mt-2">Across all gateways</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('gateways')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'gateways'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Gateway Status
              </button>
              <button
                onClick={() => setActiveTab('settlements')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'settlements'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Pending Settlements
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'history'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Settlement History
              </button>
              <button
                onClick={() => setActiveTab('refunds')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'refunds'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Refunds
              </button>
            </nav>
          </div>

          {/* Gateway Status Tab */}
          {activeTab === 'gateways' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Gateway Status</h3>
              <div className="space-y-4">
                {gatewayStatus.map((gateway) => (
                  <div key={gateway.id} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{gateway.logo}</span>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{gateway.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                              gateway.status === 'operational' ? 'bg-green-100 text-green-700' :
                              gateway.status === 'degraded' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {gateway.status === 'operational' && <CheckCircle className="w-3 h-3" />}
                              {gateway.status === 'degraded' && <AlertCircle className="w-3 h-3" />}
                              {gateway.status === 'down' && <XCircle className="w-3 h-3" />}
                              {gateway.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div>
                        <p className="text-xs text-gray-600">Uptime</p>
                        <p className="text-lg font-semibold text-gray-900">{gateway.uptime}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Success Rate</p>
                        <p className="text-lg font-semibold text-gray-900">{gateway.successRate}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Today Transactions</p>
                        <p className="text-lg font-semibold text-gray-900">{gateway.todayTransactions}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Today Volume</p>
                        <p className="text-lg font-semibold text-gray-900">₹{(gateway.todayVolume / 1000).toFixed(0)}K</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Avg Response</p>
                        <p className="text-lg font-semibold text-gray-900">{gateway.avgResponseTime}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pending Settlements Tab */}
          {activeTab === 'settlements' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Settlements</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merchant</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transactions</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Next Settlement</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">UTR</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pendingSettlements.map((settlement) => (
                      <tr key={settlement.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{settlement.merchant.logo}</span>
                            <p className="font-medium text-gray-900">{settlement.merchant.name}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-gray-900">₹{settlement.amount.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{settlement.transactionCount} txns</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{settlement.nextSettlementDate}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-500">{settlement.utrNumber}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                            {settlement.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700">
                            Process
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Settlement History Tab */}
          {activeTab === 'history' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Settlement History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merchant</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Settled Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">UTR Number</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {settlementHistory.map((settlement) => (
                      <tr key={settlement.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-900">{settlement.merchant}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-gray-900">₹{settlement.amount.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{settlement.settledDate}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm font-mono text-gray-600">{settlement.utrNumber}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            <CheckCircle className="w-3 h-3" />
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

          {/* Refunds Tab */}
          {activeTab === 'refunds' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Refund Management</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merchant</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Request Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {refunds.map((refund) => (
                      <tr key={refund.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <p className="text-sm font-mono text-gray-900">{refund.transactionId}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-900">{refund.user}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{refund.merchant}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-gray-900">₹{refund.amount}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-600">{refund.reason}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{refund.requestDate}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            refund.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            refund.status === 'processed' ? 'bg-green-100 text-green-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {refund.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          {refund.status === 'pending' && (
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleProcessRefund(refund.id)}
                                className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                                title="Approve Refund"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleRejectRefund(refund.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                title="Reject Refund"
                              >
                                <XCircle className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
