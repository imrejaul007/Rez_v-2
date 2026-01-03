import { useState } from 'react';
import { DollarSign, TrendingUp, Calendar, Download, FileText, Building2, CreditCard, Clock, CheckCircle, AlertCircle, Filter } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantFinancials() {
  const [dateRange, setDateRange] = useState('30days');
  const [filterStatus, setFilterStatus] = useState('all');

  const [settlementOverview] = useState({
    pendingSettlement: 125680,
    nextSettlementDate: '2024-02-01',
    settlementFrequency: 'Weekly',
    lastSettlement: 98450,
    lastSettlementDate: '2024-01-25',
    totalLifetime: 1234567
  });

  const [transactionSummary] = useState({
    totalTransactions: 1234,
    grossAmount: 456789,
    totalCommission: 22839,
    netAmount: 433950,
    avgTransactionValue: 370,
    commission_rate: 5.0
  });

  const [settlementHistory, setSettlementHistory] = useState([
    {
      id: 1,
      settlementId: 'SET-2024-045',
      date: '2024-01-25',
      utrNumber: 'UTR2401250012345',
      grossAmount: 98450,
      commission: 4923,
      netAmount: 93527,
      status: 'completed',
      transactionCount: 267
    },
    {
      id: 2,
      settlementId: 'SET-2024-044',
      date: '2024-01-18',
      utrNumber: 'UTR2401180098765',
      grossAmount: 112340,
      commission: 5617,
      netAmount: 106723,
      status: 'completed',
      transactionCount: 289
    },
    {
      id: 3,
      settlementId: 'SET-2024-043',
      date: '2024-01-11',
      utrNumber: 'UTR2401110045678',
      grossAmount: 87650,
      commission: 4383,
      netAmount: 83267,
      status: 'completed',
      transactionCount: 234
    },
    {
      id: 4,
      settlementId: 'SET-2024-042',
      date: '2024-01-04',
      utrNumber: 'UTR2401040023456',
      grossAmount: 95430,
      commission: 4772,
      netAmount: 90658,
      status: 'completed',
      transactionCount: 256
    },
    {
      id: 5,
      settlementId: 'SET-2024-041',
      date: '2023-12-28',
      utrNumber: 'UTR2312280067890',
      grossAmount: 102340,
      commission: 5117,
      netAmount: 97223,
      status: 'completed',
      transactionCount: 278
    }
  ]);

  const [bankAccount] = useState({
    accountHolder: 'The Coffee House Pvt Ltd',
    accountNumber: '****7890',
    ifscCode: 'HDFC0001234',
    bankName: 'HDFC Bank',
    branch: 'MG Road, Bangalore'
  });

  const [invoices, setInvoices] = useState([
    {
      id: 1,
      invoiceNumber: 'INV-2024-001',
      month: 'January 2024',
      date: '2024-01-31',
      amount: 22839,
      status: 'paid',
      dueDate: '2024-02-10'
    },
    {
      id: 2,
      invoiceNumber: 'INV-2023-012',
      month: 'December 2023',
      date: '2023-12-31',
      amount: 19845,
      status: 'paid',
      dueDate: '2024-01-10'
    },
    {
      id: 3,
      invoiceNumber: 'INV-2023-011',
      month: 'November 2023',
      date: '2023-11-30',
      amount: 21456,
      status: 'paid',
      dueDate: '2023-12-10'
    }
  ]);

  const filteredHistory = settlementHistory.filter(settlement => {
    if (filterStatus === 'all') return true;
    return settlement.status === filterStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Financials</h1>
              <p className="text-gray-600 mt-1">Manage settlements, transactions and invoices</p>
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
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Download className="w-5 h-5" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Settlement Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm p-6 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-green-900 font-medium">Pending Settlement</p>
            </div>
            <p className="text-3xl font-bold text-green-900">₹{(settlementOverview.pendingSettlement / 1000).toFixed(1)}K</p>
            <p className="text-sm text-green-700 mt-2">Next: {settlementOverview.nextSettlementDate}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Settlement Frequency</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{settlementOverview.settlementFrequency}</p>
            <p className="text-sm text-gray-600 mt-2">Auto-settlement enabled</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Last Settlement</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{(settlementOverview.lastSettlement / 1000).toFixed(1)}K</p>
            <p className="text-sm text-gray-600 mt-2">{settlementOverview.lastSettlementDate}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Lifetime Earnings</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{(settlementOverview.totalLifetime / 1000).toFixed(0)}K</p>
            <p className="text-sm text-green-600 mt-2">All-time total</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Transaction Summary */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Transaction Summary</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Total Transactions</p>
                <p className="text-2xl font-bold text-gray-900">{transactionSummary.totalTransactions.toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Avg Transaction Value</p>
                <p className="text-2xl font-bold text-gray-900">₹{transactionSummary.avgTransactionValue}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-green-700 mb-1">Gross Amount</p>
                <p className="text-2xl font-bold text-green-900">₹{(transactionSummary.grossAmount / 1000).toFixed(1)}K</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <p className="text-sm text-red-700 mb-1">Commission ({transactionSummary.commission_rate}%)</p>
                <p className="text-2xl font-bold text-red-900">₹{(transactionSummary.totalCommission / 1000).toFixed(1)}K</p>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-indigo-700 font-medium mb-1">Net Settlement Amount</p>
                  <p className="text-3xl font-bold text-indigo-900">₹{(transactionSummary.netAmount / 1000).toFixed(1)}K</p>
                </div>
                <div className="bg-indigo-100 p-4 rounded-lg">
                  <DollarSign className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Bank Account Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Bank Account</h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">Edit</button>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-5 text-white">
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
                  <span className="font-medium text-gray-900 text-right">{bankAccount.branch}</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Account</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settlement History */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Settlement History</h2>
              <div className="flex gap-3">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Settlement ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">UTR Number</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">Gross Amount</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">Commission</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">Net Amount</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredHistory.map((settlement) => (
                  <tr key={settlement.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{settlement.settlementId}</p>
                        <p className="text-xs text-gray-500">{settlement.transactionCount} transactions</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{settlement.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-mono text-gray-900">{settlement.utrNumber}</span>
                        <button className="text-gray-400 hover:text-gray-600" title="Copy UTR">
                          <CreditCard className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                      ₹{settlement.grossAmount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-red-600">
                      -₹{settlement.commission.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-green-600">
                      ₹{settlement.netAmount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        settlement.status === 'completed' ? 'bg-green-100 text-green-700' :
                        settlement.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {settlement.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Invoices */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Commission Invoices</h2>
              <button className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                <Download className="w-4 h-4" />
                Download All
              </button>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <FileText className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{invoice.invoiceNumber}</p>
                      <p className="text-sm text-gray-600">{invoice.month}</p>
                      <p className="text-xs text-gray-500 mt-1">Issued: {invoice.date} • Due: {invoice.dueDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">₹{invoice.amount.toLocaleString()}</p>
                      <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium ${
                        invoice.status === 'paid' ? 'bg-green-100 text-green-700' :
                        invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {invoice.status}
                      </span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
