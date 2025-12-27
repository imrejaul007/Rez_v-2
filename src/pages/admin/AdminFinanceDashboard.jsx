import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DollarSign, TrendingUp, TrendingDown, CreditCard, Wallet,
  Users, Store, AlertTriangle, CheckCircle, Clock, Calendar,
  Download, RefreshCw, ArrowUpRight, PieChart, BarChart3
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminFinanceDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('today');

  const [financeMetrics] = useState({
    totalGMV: { amount: 45678900, growth: 23.5 },
    platformRevenue: { amount: 2345678, growth: 28.9 },
    merchantPayouts: { amount: 38567800, pending: 1234567 },
    userRefunds: { amount: 567890, count: 234, pending: 45 },
    transactionFees: { amount: 456789, growth: 15.3 },
    cashflow: { amount: 3456789, trend: 'positive' }
  });

  const [paymentBreakdown] = useState([
    { method: 'UPI', transactions: 145678, amount: 23456789, percentage: 51.3, growth: 25.4 },
    { method: 'Credit Card', transactions: 45678, amount: 12345678, percentage: 27.0, growth: 18.2 },
    { method: 'Debit Card', transactions: 34567, amount: 5678900, percentage: 12.4, growth: 12.1 },
    { method: 'Wallet', transactions: 23456, amount: 2345678, percentage: 5.1, growth: 32.5 },
    { method: 'BNPL', transactions: 12345, amount: 1876543, percentage: 4.2, growth: 45.7 }
  ]);

  const [settlementQueue] = useState([
    { merchant: 'Pizza Paradise', amount: 234567, transactions: 567, dueDate: '2024-01-26', status: 'pending', priority: 'high' },
    { merchant: 'Fashion Boutique', amount: 156789, transactions: 234, dueDate: '2024-01-27', status: 'pending', priority: 'medium' },
    { merchant: 'Beauty Salon', amount: 98765, transactions: 189, dueDate: '2024-01-28', status: 'processing', priority: 'low' }
  ]);

  const [refundQueue] = useState([
    { user: 'Raj K.', order: 'ORD-12345', amount: 1250, reason: 'Wrong item delivered', submittedDate: '2024-01-25', status: 'pending' },
    { user: 'Priya S.', order: 'ORD-12346', amount: 850, reason: 'Quality issue', submittedDate: '2024-01-25', status: 'pending' },
    { user: 'Amit P.', order: 'ORD-12347', amount: 2100, reason: 'Order cancelled', submittedDate: '2024-01-24', status: 'approved' }
  ]);

  const getStatusColor = (status) => {
    if (status === 'pending') return 'bg-yellow-100 text-yellow-700';
    if (status === 'processing') return 'bg-blue-100 text-blue-700';
    if (status === 'approved') return 'bg-green-100 text-green-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Finance & Transactions Dashboard</h1>
              <p className="text-emerald-100">Revenue tracking, settlements & payment analytics</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">₹{(financeMetrics.totalGMV.amount / 10000000).toFixed(1)}Cr</div>
              <div className="text-sm text-emerald-200">Total GMV</div>
              <div className="text-xs text-green-300 mt-1">↑ {financeMetrics.totalGMV.growth}%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">₹{(financeMetrics.platformRevenue.amount / 100000).toFixed(1)}L</div>
              <div className="text-sm text-emerald-200">Platform Revenue</div>
              <div className="text-xs text-green-300 mt-1">↑ {financeMetrics.platformRevenue.growth}%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">₹{(financeMetrics.merchantPayouts.amount / 10000000).toFixed(1)}Cr</div>
              <div className="text-sm text-emerald-200">Merchant Payouts</div>
              <div className="text-xs text-yellow-300 mt-1">₹{(financeMetrics.merchantPayouts.pending / 100000).toFixed(1)}L pending</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">₹{(financeMetrics.userRefunds.amount / 1000).toFixed(0)}K</div>
              <div className="text-sm text-emerald-200">User Refunds</div>
              <div className="text-xs text-emerald-200 mt-1">{financeMetrics.userRefunds.count} refunds</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">₹{(financeMetrics.transactionFees.amount / 1000).toFixed(0)}K</div>
              <div className="text-sm text-emerald-200">Transaction Fees</div>
              <div className="text-xs text-green-300 mt-1">↑ {financeMetrics.transactionFees.growth}%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">₹{(financeMetrics.cashflow.amount / 10000000).toFixed(1)}Cr</div>
              <div className="text-sm text-emerald-200">Cashflow</div>
              <div className="text-xs text-green-300 mt-1">Positive</div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Payment Method Breakdown */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <PieChart className="w-6 h-6 text-emerald-600" />
              <h2 className="text-xl font-bold">Payment Method Breakdown</h2>
            </div>
            <div className="space-y-4">
              {paymentBreakdown.map((method, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{method.method}</h3>
                      <p className="text-sm text-gray-600">{method.transactions.toLocaleString()} transactions</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">₹{(method.amount / 100000).toFixed(1)}L</p>
                      <p className="text-sm text-green-600">↑ {method.growth}%</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: `${method.percentage}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{method.percentage.toFixed(1)}% of total GMV</p>
                </div>
              ))}
            </div>
          </div>

          {/* Settlement Queue */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-yellow-600" />
                <h2 className="text-xl font-bold">Settlement Queue</h2>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">
                {settlementQueue.length} pending
              </span>
            </div>
            <div className="space-y-3">
              {settlementQueue.map((settlement, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold">{settlement.merchant}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {settlement.transactions} transactions • Due: {settlement.dueDate}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-emerald-600">₹{(settlement.amount / 1000).toFixed(0)}K</p>
                      <div className="flex gap-2 mt-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(settlement.status)}`}>
                          {settlement.status.toUpperCase()}
                        </span>
                        <button className="px-3 py-1 bg-emerald-600 text-white rounded text-xs hover:bg-emerald-700">
                          Process
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Refund Queue */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h2 className="text-xl font-bold">Refund Queue</h2>
              </div>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-medium">
                {financeMetrics.userRefunds.pending} pending
              </span>
            </div>
            <div className="space-y-3">
              {refundQueue.map((refund, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold">{refund.user}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Order: {refund.order} • {refund.reason}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Submitted: {refund.submittedDate}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">₹{refund.amount}</p>
                      <div className="flex gap-2 mt-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(refund.status)}`}>
                          {refund.status.toUpperCase()}
                        </span>
                        {refund.status === 'pending' && (
                          <button className="px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700">
                            Approve
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
