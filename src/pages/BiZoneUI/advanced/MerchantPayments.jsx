import { useState } from 'react';
import { DollarSign, TrendingUp, Clock, CheckCircle, AlertCircle, Download, Eye, Filter, Search, Calendar, CreditCard, Wallet } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantPayments() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSettlementDetail, setShowSettlementDetail] = useState(false);
  const [selectedSettlement, setSelectedSettlement] = useState(null);

  const [settlements, setSettlements] = useState([
    {
      id: 'SET001',
      settlementNumber: 'SETT-2024-001',
      period: 'Jan 1-7, 2024',
      startDate: '2024-01-01',
      endDate: '2024-01-07',
      totalOrders: 245,
      grossSales: 458900,
      commission: 78013, // 17% avg commission
      refunds: 12500,
      adjustments: -2000,
      netPayable: 370387,
      status: 'paid',
      paidDate: '2024-01-08',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN123456789'
    },
    {
      id: 'SET002',
      settlementNumber: 'SETT-2024-002',
      period: 'Jan 8-14, 2024',
      startDate: '2024-01-08',
      endDate: '2024-01-14',
      totalOrders: 312,
      grossSales: 587650,
      commission: 99900,
      refunds: 8900,
      adjustments: 0,
      netPayable: 478850,
      status: 'processing',
      processingDate: '2024-01-15',
      paymentMethod: null,
      transactionId: null
    },
    {
      id: 'SET003',
      settlementNumber: 'SETT-2024-003',
      period: 'Jan 15-21, 2024',
      startDate: '2024-01-15',
      endDate: '2024-01-21',
      totalOrders: 289,
      grossSales: 534200,
      commission: 90814,
      refunds: 15600,
      adjustments: -5000,
      netPayable: 422786,
      status: 'pending',
      pendingDate: null,
      paymentMethod: null,
      transactionId: null
    }
  ]);

  const [transactions, setTransactions] = useState([
    { id: 'TXN001', date: '2024-01-15 10:30 AM', orderNumber: '#REZ2024001', customer: 'Rahul Sharma', amount: 12999, commission: 2210, net: 10789, status: 'settled' },
    { id: 'TXN002', date: '2024-01-15 09:15 AM', orderNumber: '#REZ2024002', customer: 'Priya Patel', amount: 8999, commission: 1530, net: 7469, status: 'settled' },
    { id: 'TXN003', date: '2024-01-14 05:45 PM', orderNumber: '#REZ2024003', customer: 'Amit Kumar', amount: 18997, commission: 3229, net: 15768, status: 'settled' },
    { id: 'TXN004', date: '2024-01-14 02:20 PM', orderNumber: '#REZ2024004', customer: 'Sneha Reddy', amount: 7499, commission: 1275, net: 6224, status: 'settled' },
    { id: 'TXN005', date: '2024-01-14 11:00 AM', orderNumber: '#REZ2024005', customer: 'Vikram Singh', amount: -12500, commission: 0, net: -12500, status: 'refund' }
  ]);

  const stats = {
    totalEarnings: settlements.filter(s => s.status === 'paid').reduce((sum, s) => sum + s.netPayable, 0),
    pendingPayouts: settlements.filter(s => s.status === 'pending' || s.status === 'processing').reduce((sum, s) => sum + s.netPayable, 0),
    totalOrders: settlements.reduce((sum, s) => sum + s.totalOrders, 0),
    avgCommissionRate: 17,
    totalRefunds: settlements.reduce((sum, s) => sum + s.refunds, 0),
    nextPayoutDate: '2024-01-22'
  };

  const filteredSettlements = settlements.filter(settlement => {
    const matchesSearch = settlement.settlementNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         settlement.period.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || settlement.status === activeTab;
    return matchesSearch && matchesTab;
  });

  const getStatusBadge = (status) => {
    const badges = {
      pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: Clock, label: 'Pending' },
      processing: { bg: 'bg-blue-100', text: 'text-blue-800', icon: TrendingUp, label: 'Processing' },
      paid: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle, label: 'Paid' },
      failed: { bg: 'bg-red-100', text: 'text-red-800', icon: AlertCircle, label: 'Failed' }
    };
    const badge = badges[status];
    const Icon = badge.icon;
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
        <Icon className="w-3 h-3" />
        {badge.label}
      </span>
    );
  };

  return (
    <div className="p-6">
      <MerchantNav />
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <DollarSign className="w-8 h-8 text-indigo-600" />
          Payment Reconciliation & Settlements
        </h1>
        <p className="text-gray-600 mt-1">Track your earnings, settlements, and payment schedules</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 text-white">
          <div className="text-sm text-green-100">Total Earnings</div>
          <div className="text-2xl font-bold mt-1">₹{(stats.totalEarnings / 100000).toFixed(1)}L</div>
          <div className="text-xs text-green-100 mt-1">Lifetime settled</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-4 text-white">
          <div className="text-sm text-blue-100">Pending Payouts</div>
          <div className="text-2xl font-bold mt-1">₹{(stats.pendingPayouts / 100000).toFixed(1)}L</div>
          <div className="text-xs text-blue-100 mt-1">Awaiting settlement</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-600">Total Orders</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{stats.totalOrders}</div>
          <div className="text-xs text-gray-500 mt-1">All time</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-600">Avg Commission</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{stats.avgCommissionRate}%</div>
          <div className="text-xs text-gray-500 mt-1">Platform fee</div>
        </div>
        <div className="bg-white rounded-lg border border-red-200 p-4">
          <div className="text-sm text-red-600">Total Refunds</div>
          <div className="text-2xl font-bold text-red-900 mt-1">₹{(stats.totalRefunds / 1000).toFixed(0)}K</div>
          <div className="text-xs text-red-600 mt-1">Issued to customers</div>
        </div>
        <div className="bg-white rounded-lg border border-indigo-200 p-4">
          <div className="text-sm text-indigo-600 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            Next Payout
          </div>
          <div className="text-lg font-bold text-indigo-900 mt-1">{stats.nextPayoutDate}</div>
          <div className="text-xs text-indigo-600 mt-1">Scheduled</div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 flex gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by settlement number or period..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="w-5 h-5" />
            Export Statement
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mt-4 border-t pt-4">
          {['all', 'paid', 'processing', 'pending'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Settlements Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Settlement History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Settlement</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gross Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Refunds</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Payable</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredSettlements.map((settlement) => (
                <tr key={settlement.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-indigo-600">{settlement.settlementNumber}</div>
                    <div className="text-xs text-gray-500">{settlement.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{settlement.period}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{settlement.totalOrders}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">₹{settlement.grossSales.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-red-600">-₹{settlement.commission.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-red-600">-₹{settlement.refunds.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-green-600">₹{settlement.netPayable.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(settlement.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => {
                        setSelectedSettlement(settlement);
                        setShowSettlementDetail(true);
                      }}
                      className="p-1 text-gray-600 hover:text-indigo-600"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{txn.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-indigo-600">{txn.orderNumber}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{txn.customer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-semibold ${txn.amount < 0 ? 'text-red-600' : 'text-gray-900'}`}>
                      ₹{txn.amount.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-red-600">-₹{txn.commission.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-bold ${txn.net < 0 ? 'text-red-600' : 'text-green-600'}`}>
                      ₹{txn.net.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      txn.status === 'settled' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {txn.status === 'settled' ? 'Settled' : 'Refund'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Settlement Detail Modal */}
      {showSettlementDetail && selectedSettlement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedSettlement.settlementNumber}</h2>
                  <p className="text-sm text-gray-600 mt-1">Settlement Period: {selectedSettlement.period}</p>
                </div>
                {getStatusBadge(selectedSettlement.status)}
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Settlement Summary */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Settlement Summary</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Orders:</span>
                    <span className="text-sm font-medium text-gray-900">{selectedSettlement.totalOrders}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Gross Sales:</span>
                    <span className="text-sm font-semibold text-gray-900">₹{selectedSettlement.grossSales.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Platform Commission:</span>
                    <span className="text-sm font-semibold text-red-600">-₹{selectedSettlement.commission.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Refunds Issued:</span>
                    <span className="text-sm font-semibold text-red-600">-₹{selectedSettlement.refunds.toLocaleString()}</span>
                  </div>
                  {selectedSettlement.adjustments !== 0 && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Adjustments:</span>
                      <span className={`text-sm font-semibold ${selectedSettlement.adjustments < 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {selectedSettlement.adjustments < 0 ? '-' : '+'}₹{Math.abs(selectedSettlement.adjustments).toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between pt-3 border-t border-gray-300">
                    <span className="font-semibold text-gray-900">Net Payable:</span>
                    <span className="text-lg font-bold text-green-600">₹{selectedSettlement.netPayable.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              {selectedSettlement.status === 'paid' && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Payment Details</h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-green-700">Payment Method:</span>
                      <span className="text-sm font-medium text-green-900">{selectedSettlement.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-green-700">Transaction ID:</span>
                      <span className="text-sm font-mono font-medium text-green-900">{selectedSettlement.transactionId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-green-700">Paid On:</span>
                      <span className="text-sm font-medium text-green-900">{selectedSettlement.paidDate}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-between">
              <button
                onClick={() => setShowSettlementDetail(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Download className="w-4 h-4" />
                Download Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
