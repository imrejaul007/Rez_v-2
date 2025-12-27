import { useState } from 'react';
import {
  Calculator, Download, FileText, TrendingUp, DollarSign,
  Calendar, Filter, AlertCircle, CheckCircle, Clock, Receipt,
  Package, Users, ArrowUpRight, ArrowDownRight, BarChart3
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';
import { mockOrders } from '../../data/mock/orders';
import { mockProducts } from '../../data/mock/products';

export default function MerchantAccounting() {
  const [selectedPeriod, setSelectedPeriod] = useState('this_month');
  const [gstReportType, setGstReportType] = useState('gstr1');

  // Calculate financials from mock data
  const calculateFinancials = () => {
    const sales = mockOrders.reduce((sum, order) => sum + order.subtotal, 0);
    const tax = mockOrders.reduce((sum, order) => sum + order.tax, 0);
    const coinsRedeemed = mockOrders.reduce((sum, order) =>
      sum + order.coinsRedeemed.promo + order.coinsRedeemed.branded + order.coinsRedeemed.rez, 0
    );
    const rezCommission = sales * 0.05; // 5% commission
    const netRevenue = sales + tax - coinsRedeemed - rezCommission;

    return {
      grossSales: sales,
      taxCollected: tax,
      coinsRedeemed,
      rezCommission,
      netRevenue,
      totalTransactions: mockOrders.length
    };
  };

  const financials = calculateFinancials();

  // GST breakdown by rate
  const gstBreakdown = [
    { rate: 5, amount: 2345, taxable: 46900, igst: 0, cgst: 1172.5, sgst: 1172.5 },
    { rate: 12, amount: 890, taxable: 7417, igst: 0, cgst: 445, sgst: 445 },
    { rate: 18, amount: 1560, taxable: 8667, igst: 0, cgst: 780, sgst: 780 }
  ];

  // Expense categories
  const expenses = [
    { category: 'Raw Materials', amount: 25600, percentage: 45 },
    { category: 'Staff Salaries', amount: 18900, percentage: 33 },
    { category: 'Rent & Utilities', amount: 8500, percentage: 15 },
    { category: 'Marketing', amount: 3400, percentage: 6 },
    { category: 'Other', amount: 600, percentage: 1 }
  ];

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const profitBeforeTax = financials.netRevenue - totalExpenses;

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calculator className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-bold">Accounting & GST</h1>
                <p className="text-emerald-100">Complete financial management & compliance</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20">
                <Download className="w-5 h-5 inline mr-2" />
                Export
              </button>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white"
              >
                <option value="today">Today</option>
                <option value="this_week">This Week</option>
                <option value="this_month">This Month</option>
                <option value="last_month">Last Month</option>
                <option value="this_quarter">This Quarter</option>
                <option value="this_year">This Year</option>
              </select>
            </div>
          </div>

          {/* Financial Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-sm text-emerald-100 mb-1">Gross Sales</div>
              <div className="text-2xl font-bold">₹{(financials.grossSales / 1000).toFixed(1)}K</div>
              <div className="text-xs text-emerald-200 mt-1">{financials.totalTransactions} transactions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-sm text-emerald-100 mb-1">Tax Collected</div>
              <div className="text-2xl font-bold">₹{(financials.taxCollected / 1000).toFixed(1)}K</div>
              <div className="text-xs text-emerald-200 mt-1">GST & other taxes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-sm text-emerald-100 mb-1">Net Revenue</div>
              <div className="text-2xl font-bold">₹{(financials.netRevenue / 1000).toFixed(1)}K</div>
              <div className="text-xs text-yellow-200 mt-1">After commission & coins</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-sm text-emerald-100 mb-1">Profit (PBT)</div>
              <div className="text-2xl font-bold">₹{(profitBeforeTax / 1000).toFixed(1)}K</div>
              <div className="text-xs text-emerald-200 mt-1">{((profitBeforeTax/financials.grossSales)*100).toFixed(1)}% margin</div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* GST Filing Status Alert */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div className="flex-1">
                <p className="font-bold text-yellow-900">GST Filing Due</p>
                <p className="text-sm text-yellow-800">GSTR-1 for December 2024 due on 11th January 2025 (5 days remaining)</p>
              </div>
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-medium">
                File Now
              </button>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Income Statement */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Income Statement</h2>
                <p className="text-sm text-gray-600">Profit & Loss summary</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="font-medium text-gray-700">Gross Sales</span>
                  <span className="font-bold text-green-600">₹{financials.grossSales.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 pl-4">+ Tax Collected</span>
                  <span className="text-gray-900">₹{financials.taxCollected.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 pl-4">- Coins Redeemed</span>
                  <span className="text-red-600">-₹{financials.coinsRedeemed.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 pl-4">- ReZ Commission (5%)</span>
                  <span className="text-red-600">-₹{financials.rezCommission.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b font-medium">
                  <span className="text-gray-700">Net Revenue</span>
                  <span className="text-gray-900">₹{financials.netRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 pl-4">- Total Expenses</span>
                  <span className="text-red-600">-₹{totalExpenses.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t-2 border-gray-300">
                  <span className="font-bold text-gray-900">Profit Before Tax</span>
                  <span className={`font-bold text-xl ${profitBeforeTax >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ₹{profitBeforeTax.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Expenses Breakdown */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Expense Breakdown</h2>
                <p className="text-sm text-gray-600">Cost analysis by category</p>
              </div>
              <div className="p-6 space-y-4">
                {expenses.map((expense, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{expense.category}</span>
                      <span className="text-sm font-bold text-gray-900">₹{expense.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                          style={{ width: `${expense.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600 w-10 text-right">{expense.percentage}%</span>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-gray-900">Total Expenses</span>
                    <span className="text-gray-900">₹{totalExpenses.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GST Reports */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">GST Reports & Filing</h2>
                  <p className="text-sm text-gray-600">GSTIN: {mockOrders[0]?.customer ? '29ABCDE1234F1Z5' : 'Not configured'}</p>
                </div>
                <div className="flex gap-2">
                  {['gstr1', 'gstr3b', 'gstr9'].map(type => (
                    <button
                      key={type}
                      onClick={() => setGstReportType(type)}
                      className={`px-4 py-2 rounded-lg font-medium ${
                        gstReportType === type
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">GST Breakdown by Tax Rate</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tax Rate</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Taxable Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">CGST</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">SGST</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">IGST</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Tax</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {gstBreakdown.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-bold text-gray-900">{row.rate}%</td>
                        <td className="px-4 py-3 text-gray-900">₹{row.taxable.toLocaleString()}</td>
                        <td className="px-4 py-3 text-gray-900">₹{row.cgst.toLocaleString()}</td>
                        <td className="px-4 py-3 text-gray-900">₹{row.sgst.toLocaleString()}</td>
                        <td className="px-4 py-3 text-gray-900">₹{row.igst.toLocaleString()}</td>
                        <td className="px-4 py-3 font-bold text-emerald-600">₹{row.amount.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-50 font-bold">
                    <tr>
                      <td className="px-4 py-3">Total</td>
                      <td className="px-4 py-3">₹{gstBreakdown.reduce((s, r) => s + r.taxable, 0).toLocaleString()}</td>
                      <td className="px-4 py-3">₹{gstBreakdown.reduce((s, r) => s + r.cgst, 0).toLocaleString()}</td>
                      <td className="px-4 py-3">₹{gstBreakdown.reduce((s, r) => s + r.sgst, 0).toLocaleString()}</td>
                      <td className="px-4 py-3">₹{gstBreakdown.reduce((s, r) => s + r.igst, 0).toLocaleString()}</td>
                      <td className="px-4 py-3 text-emerald-600">₹{gstBreakdown.reduce((s, r) => s + r.amount, 0).toLocaleString()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-bold">
                  <FileText className="w-5 h-5 inline mr-2" />
                  Generate GSTR-1
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                  <Download className="w-5 h-5 inline mr-2" />
                  Download Excel
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                  <Download className="w-5 h-5 inline mr-2" />
                  Download JSON
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg p-6">
              <Receipt className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">Daybook</h3>
              <p className="text-sm text-blue-100 mb-4">Daily cash & sales register</p>
              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 text-sm font-medium">
                View Daybook
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-lg p-6">
              <BarChart3 className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">Tax Reports</h3>
              <p className="text-sm text-purple-100 mb-4">Export for CA/accountant</p>
              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 text-sm font-medium">
                Export All
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-lg p-6">
              <Users className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">Staff Payouts</h3>
              <p className="text-sm text-orange-100 mb-4">Salary & commission tracking</p>
              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 text-sm font-medium">
                Manage Payouts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
