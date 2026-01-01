import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  DollarSign,
  CreditCard,
  Banknote,
  Smartphone,
  Wallet,
  TrendingUp,
  TrendingDown,
  Receipt,
  Users,
  ShoppingCart,
  Coins,
  AlertTriangle,
  CheckCircle,
  Printer,
  Download,
  Mail,
  Share2,
  RefreshCw,
  PieChart,
  BarChart3,
  FileText,
  Lock,
  Unlock,
  ArrowUpRight,
  ArrowDownRight,
  Gift,
  Percent,
  Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MerchantDayEndReport = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('2024-01-15');
  const [isLocked, setIsLocked] = useState(false);

  // ============================================
  // THE PERFECT DAY-END REPORT
  // If this is perfect, 90% merchants switch
  // ============================================

  const dayEndReport = {
    date: '2024-01-15',
    dayOfWeek: 'Monday',
    businessName: 'Third Wave Coffee - Koramangala',
    generatedAt: '2024-01-15 23:45:00',
    generatedBy: 'System Auto-Close',

    // ============================================
    // 1. OPENING & CLOSING BALANCE
    // ============================================
    openingBalance: 5000,
    closingBalance: 28450,

    // ============================================
    // 2. COLLECTIONS BY PAYMENT METHOD
    // ============================================
    collections: {
      cash: {
        count: 45,
        amount: 18500,
        percentage: 26.1
      },
      upi: {
        count: 89,
        amount: 32450,
        percentage: 45.8
      },
      card: {
        count: 32,
        amount: 15600,
        percentage: 22.0
      },
      wallet: {
        count: 12,
        amount: 4200,
        percentage: 5.9
      },
      credit: {
        count: 3,
        amount: 2500,
        percentage: 3.5
      },
      rezCoins: {
        count: 28,
        amount: 1850, // Coin value redeemed
        percentage: 2.6
      }
    },

    totalTransactions: 181,
    grossCollection: 75100,

    // ============================================
    // 3. REFUNDS
    // ============================================
    refunds: {
      cash: { count: 2, amount: 450 },
      upi: { count: 1, amount: 350 },
      card: { count: 1, amount: 400 },
      total: { count: 4, amount: 1200 }
    },

    // ============================================
    // 4. DISCOUNTS & OFFERS
    // ============================================
    discounts: {
      coupons: { count: 15, amount: 2250 },
      offers: { count: 22, amount: 3400 },
      manualDiscount: { count: 5, amount: 500 },
      total: { count: 42, amount: 6150 }
    },

    // ============================================
    // 5. NET COLLECTION
    // ============================================
    netCollection: 67750, // Gross - Refunds - Discounts

    // ============================================
    // 6. CASH SPECIFICS
    // ============================================
    cashFlow: {
      openingCash: 5000,
      cashReceived: 18500,
      cashRefunds: -450,
      cashPayouts: -2500, // Petty cash, supplier
      netCash: 20550,
      expectedInDrawer: 20550,
      actualInDrawer: 20400,
      variance: -150,
      varianceStatus: 'short'
    },

    // ============================================
    // 7. CREDIT/UDHAR GIVEN
    // ============================================
    creditGiven: {
      newCredit: 2500,
      creditRecovered: 1800,
      netCreditChange: 700,
      totalOutstanding: 45600
    },

    // ============================================
    // 8. STAFF PERFORMANCE
    // ============================================
    staffPerformance: [
      {
        name: 'Amit Kumar',
        transactions: 65,
        amount: 28500,
        avgTicket: 438,
        cashHandled: 8500,
        variance: 0
      },
      {
        name: 'Priya Singh',
        transactions: 58,
        amount: 24200,
        avgTicket: 417,
        cashHandled: 6000,
        variance: -150
      },
      {
        name: 'Rajesh Verma',
        transactions: 58,
        amount: 22550,
        avgTicket: 389,
        cashHandled: 4000,
        variance: 0
      }
    ],

    // ============================================
    // 9. GST SUMMARY
    // ============================================
    gstSummary: {
      taxableValue: 57420,
      cgst: {
        rate5: 450,
        rate12: 1200,
        rate18: 2850,
        total: 4500
      },
      sgst: {
        rate5: 450,
        rate12: 1200,
        rate18: 2850,
        total: 4500
      },
      totalTax: 9000
    },

    // ============================================
    // 10. REZ COIN IMPACT (UNIQUE TO REZ!)
    // ============================================
    rezCoinImpact: {
      coinsEarnedByCustomers: 3755, // Coins given out
      coinValueEarned: 37.55, // ₹ equivalent
      coinsRedeemedByCustomers: 1850,
      coinValueRedeemed: 18.50,
      netCoinLiability: 1905,
      repeatCustomersViaCoins: 28,
      newCustomersViaOffers: 12
    },

    // ============================================
    // 11. TOP SELLERS
    // ============================================
    topSellers: [
      { name: 'Cappuccino', qty: 45, revenue: 8100 },
      { name: 'Cold Brew', qty: 38, revenue: 8360 },
      { name: 'Lunch Combo', qty: 28, revenue: 12600 },
      { name: 'Sandwich', qty: 52, revenue: 11440 },
      { name: 'Brownie', qty: 35, revenue: 4200 }
    ],

    // ============================================
    // 12. COMPARISON
    // ============================================
    comparison: {
      vsYesterday: {
        transactions: +12,
        transactionsPercent: +7.1,
        revenue: +4500,
        revenuePercent: +6.2
      },
      vsLastWeek: {
        transactions: +8,
        transactionsPercent: +4.6,
        revenue: +3200,
        revenuePercent: +4.5
      },
      vsLastMonth: {
        transactions: -5,
        transactionsPercent: -2.7,
        revenue: +1800,
        revenuePercent: +2.6
      }
    },

    // ============================================
    // 13. SETTLEMENT SUMMARY
    // ============================================
    settlement: {
      upiSettlement: {
        amount: 32450,
        status: 'settled',
        settledAt: '2024-01-16 06:00:00'
      },
      cardSettlement: {
        amount: 15600,
        fee: 312, // 2%
        netAmount: 15288,
        status: 'pending',
        expectedAt: '2024-01-17'
      },
      walletSettlement: {
        amount: 4200,
        status: 'settled',
        settledAt: '2024-01-16 06:00:00'
      }
    },

    // ============================================
    // 14. ISSUES & ALERTS
    // ============================================
    issues: [
      {
        type: 'cash_variance',
        severity: 'warning',
        description: 'Cash drawer short by ₹150',
        status: 'investigating'
      }
    ]
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getVarianceColor = (variance) => {
    if (variance === 0) return 'text-emerald-600';
    if (variance > 0) return 'text-blue-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-6 print:bg-white print:text-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4 print:hidden">
            <button
              onClick={() => navigate('/merchant')}
              className="flex items-center gap-2 text-white/80 hover:text-white"
            >
              <ArrowLeft size={20} />
              <span>Back to Dashboard</span>
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 flex items-center gap-2">
                <Mail size={18} />
                Email
              </button>
              <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 flex items-center gap-2">
                <Download size={18} />
                Export
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 flex items-center gap-2 font-medium"
              >
                <Printer size={18} />
                Print
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center print:hidden">
              <Receipt size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold print:text-2xl print:text-black">Day-End Closing Report</h1>
              <p className="text-white/80 mt-1 print:text-gray-600">{dayEndReport.businessName}</p>
            </div>
          </div>

          {/* Date & Lock Status */}
          <div className="flex items-center justify-between mt-6 print:hidden">
            <div className="flex items-center gap-4">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
              />
              <span className="text-white/70">
                {dayEndReport.dayOfWeek}
              </span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              isLocked ? 'bg-emerald-500/30' : 'bg-yellow-500/30'
            }`}>
              {isLocked ? <Lock size={18} /> : <Unlock size={18} />}
              <span>{isLocked ? 'Day Closed & Locked' : 'Day Open'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Print Header */}
      <div className="hidden print:block p-4 border-b">
        <div className="text-center">
          <h2 className="text-xl font-bold">{dayEndReport.businessName}</h2>
          <p className="text-gray-600">Day-End Report - {dayEndReport.date} ({dayEndReport.dayOfWeek})</p>
          <p className="text-sm text-gray-500">Generated: {dayEndReport.generatedAt}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-6 print:px-4 print:py-2">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 print:grid-cols-4 print:gap-2">
          <div className="bg-white rounded-xl p-4 border print:p-2">
            <div className="text-gray-500 text-sm">Gross Collection</div>
            <div className="text-2xl font-bold text-gray-800 print:text-lg">{formatCurrency(dayEndReport.grossCollection)}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border print:p-2">
            <div className="text-gray-500 text-sm">Net Collection</div>
            <div className="text-2xl font-bold text-emerald-600 print:text-lg">{formatCurrency(dayEndReport.netCollection)}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border print:p-2">
            <div className="text-gray-500 text-sm">Transactions</div>
            <div className="text-2xl font-bold text-gray-800 print:text-lg">{dayEndReport.totalTransactions}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border print:p-2">
            <div className="text-gray-500 text-sm">Avg Ticket</div>
            <div className="text-2xl font-bold text-gray-800 print:text-lg">
              {formatCurrency(Math.round(dayEndReport.netCollection / dayEndReport.totalTransactions))}
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-6 print:gap-4">
          {/* Payment Method Breakdown */}
          <div className="bg-white rounded-xl p-6 border print:p-3">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <CreditCard size={20} />
              Collection by Payment Method
            </h3>
            <div className="space-y-3">
              {Object.entries(dayEndReport.collections).map(([method, data]) => (
                <div key={method} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg print:p-2">
                  <div className="flex items-center gap-3">
                    {method === 'cash' && <Banknote className="text-green-600" size={20} />}
                    {method === 'upi' && <Smartphone className="text-purple-600" size={20} />}
                    {method === 'card' && <CreditCard className="text-blue-600" size={20} />}
                    {method === 'wallet' && <Wallet className="text-orange-600" size={20} />}
                    {method === 'credit' && <FileText className="text-red-600" size={20} />}
                    {method === 'rezCoins' && <Coins className="text-yellow-600" size={20} />}
                    <div>
                      <div className="font-medium text-gray-800 capitalize">
                        {method === 'rezCoins' ? 'ReZ Coins' : method}
                      </div>
                      <div className="text-sm text-gray-500">{data.count} transactions</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-800">{formatCurrency(data.amount)}</div>
                    <div className="text-sm text-gray-500">{data.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cash Flow Summary */}
          <div className="bg-white rounded-xl p-6 border print:p-3">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Banknote size={20} />
              Cash Drawer Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                <span>Opening Cash</span>
                <span className="font-medium">{formatCurrency(dayEndReport.cashFlow.openingCash)}</span>
              </div>
              <div className="flex justify-between p-3 bg-emerald-50 rounded-lg">
                <span className="flex items-center gap-2">
                  <ArrowUpRight className="text-emerald-600" size={16} />
                  Cash Received
                </span>
                <span className="font-medium text-emerald-600">+{formatCurrency(dayEndReport.cashFlow.cashReceived)}</span>
              </div>
              <div className="flex justify-between p-3 bg-red-50 rounded-lg">
                <span className="flex items-center gap-2">
                  <ArrowDownRight className="text-red-600" size={16} />
                  Cash Refunds
                </span>
                <span className="font-medium text-red-600">{formatCurrency(dayEndReport.cashFlow.cashRefunds)}</span>
              </div>
              <div className="flex justify-between p-3 bg-orange-50 rounded-lg">
                <span className="flex items-center gap-2">
                  <ArrowDownRight className="text-orange-600" size={16} />
                  Cash Payouts
                </span>
                <span className="font-medium text-orange-600">{formatCurrency(dayEndReport.cashFlow.cashPayouts)}</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-100 rounded-lg font-semibold">
                <span>Expected in Drawer</span>
                <span>{formatCurrency(dayEndReport.cashFlow.expectedInDrawer)}</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-100 rounded-lg font-semibold">
                <span>Actual in Drawer</span>
                <span>{formatCurrency(dayEndReport.cashFlow.actualInDrawer)}</span>
              </div>
              <div className={`flex justify-between p-3 rounded-lg font-bold ${
                dayEndReport.cashFlow.variance === 0 ? 'bg-emerald-100' :
                dayEndReport.cashFlow.variance > 0 ? 'bg-blue-100' : 'bg-red-100'
              }`}>
                <span>Variance</span>
                <span className={getVarianceColor(dayEndReport.cashFlow.variance)}>
                  {dayEndReport.cashFlow.variance >= 0 ? '+' : ''}{formatCurrency(dayEndReport.cashFlow.variance)}
                </span>
              </div>
            </div>
          </div>

          {/* GST Summary */}
          <div className="bg-white rounded-xl p-6 border print:p-3">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Percent size={20} />
              GST Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                <span>Taxable Value</span>
                <span className="font-medium">{formatCurrency(dayEndReport.gstSummary.taxableValue)}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm text-blue-600 mb-1">CGST</div>
                  <div className="text-xs text-gray-500">5%: ₹{dayEndReport.gstSummary.cgst.rate5}</div>
                  <div className="text-xs text-gray-500">12%: ₹{dayEndReport.gstSummary.cgst.rate12}</div>
                  <div className="text-xs text-gray-500">18%: ₹{dayEndReport.gstSummary.cgst.rate18}</div>
                  <div className="font-bold mt-1">{formatCurrency(dayEndReport.gstSummary.cgst.total)}</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="text-sm text-purple-600 mb-1">SGST</div>
                  <div className="text-xs text-gray-500">5%: ₹{dayEndReport.gstSummary.sgst.rate5}</div>
                  <div className="text-xs text-gray-500">12%: ₹{dayEndReport.gstSummary.sgst.rate12}</div>
                  <div className="text-xs text-gray-500">18%: ₹{dayEndReport.gstSummary.sgst.rate18}</div>
                  <div className="font-bold mt-1">{formatCurrency(dayEndReport.gstSummary.sgst.total)}</div>
                </div>
              </div>
              <div className="flex justify-between p-3 bg-emerald-100 rounded-lg font-bold">
                <span>Total Tax Collected</span>
                <span className="text-emerald-700">{formatCurrency(dayEndReport.gstSummary.totalTax)}</span>
              </div>
            </div>
          </div>

          {/* ReZ Coin Impact - UNIQUE TO REZ! */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 print:p-3">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Coins className="text-yellow-600" size={20} />
              ReZ Coin Impact (Exclusive)
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="flex items-center gap-2">
                  <Gift className="text-emerald-500" size={16} />
                  Coins Earned by Customers
                </span>
                <span className="font-medium">{dayEndReport.rezCoinImpact.coinsEarnedByCustomers} coins</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="flex items-center gap-2">
                  <Coins className="text-yellow-500" size={16} />
                  Coins Redeemed
                </span>
                <span className="font-medium">{dayEndReport.rezCoinImpact.coinsRedeemedByCustomers} coins</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="flex items-center gap-2">
                  <Users className="text-blue-500" size={16} />
                  Repeat Customers via Coins
                </span>
                <span className="font-bold text-blue-600">{dayEndReport.rezCoinImpact.repeatCustomersViaCoins}</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="flex items-center gap-2">
                  <Star className="text-orange-500" size={16} />
                  New Customers via Offers
                </span>
                <span className="font-bold text-orange-600">{dayEndReport.rezCoinImpact.newCustomersViaOffers}</span>
              </div>
            </div>
          </div>

          {/* Staff Performance */}
          <div className="bg-white rounded-xl p-6 border print:p-3">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Users size={20} />
              Staff Performance
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-2">Staff</th>
                    <th className="text-right p-2">Txns</th>
                    <th className="text-right p-2">Amount</th>
                    <th className="text-right p-2">Avg</th>
                    <th className="text-right p-2">Variance</th>
                  </tr>
                </thead>
                <tbody>
                  {dayEndReport.staffPerformance.map((staff, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-2 font-medium">{staff.name}</td>
                      <td className="p-2 text-right">{staff.transactions}</td>
                      <td className="p-2 text-right">{formatCurrency(staff.amount)}</td>
                      <td className="p-2 text-right">₹{staff.avgTicket}</td>
                      <td className={`p-2 text-right font-medium ${getVarianceColor(staff.variance)}`}>
                        {staff.variance === 0 ? '✓' : `₹${staff.variance}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Comparison */}
          <div className="bg-white rounded-xl p-6 border print:p-3">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <BarChart3 size={20} />
              Comparison
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">vs Yesterday</div>
                <div className="flex justify-between">
                  <span className={dayEndReport.comparison.vsYesterday.revenuePercent >= 0 ? 'text-emerald-600' : 'text-red-600'}>
                    {dayEndReport.comparison.vsYesterday.revenuePercent >= 0 ? '+' : ''}
                    {dayEndReport.comparison.vsYesterday.revenuePercent}% Revenue
                  </span>
                  <span className={dayEndReport.comparison.vsYesterday.transactionsPercent >= 0 ? 'text-emerald-600' : 'text-red-600'}>
                    {dayEndReport.comparison.vsYesterday.transactionsPercent >= 0 ? '+' : ''}
                    {dayEndReport.comparison.vsYesterday.transactionsPercent}% Transactions
                  </span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">vs Same Day Last Week</div>
                <div className="flex justify-between">
                  <span className={dayEndReport.comparison.vsLastWeek.revenuePercent >= 0 ? 'text-emerald-600' : 'text-red-600'}>
                    {dayEndReport.comparison.vsLastWeek.revenuePercent >= 0 ? '+' : ''}
                    {dayEndReport.comparison.vsLastWeek.revenuePercent}% Revenue
                  </span>
                  <span className={dayEndReport.comparison.vsLastWeek.transactionsPercent >= 0 ? 'text-emerald-600' : 'text-red-600'}>
                    {dayEndReport.comparison.vsLastWeek.transactionsPercent >= 0 ? '+' : ''}
                    {dayEndReport.comparison.vsLastWeek.transactionsPercent}% Transactions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Issues Alert */}
        {dayEndReport.issues.length > 0 && (
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-6 print:p-3">
            <h3 className="font-semibold text-yellow-800 mb-4 flex items-center gap-2">
              <AlertTriangle size={20} />
              Issues Requiring Attention
            </h3>
            <div className="space-y-3">
              {dayEndReport.issues.map((issue, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div>
                    <div className="font-medium text-gray-800">{issue.description}</div>
                    <div className="text-sm text-gray-500">Type: {issue.type}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    issue.severity === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                    issue.severity === 'critical' ? 'bg-red-100 text-red-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {issue.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-6 flex justify-between items-center print:hidden">
          <p className="text-sm text-gray-500">
            Report generated: {dayEndReport.generatedAt} by {dayEndReport.generatedBy}
          </p>
          <button
            onClick={() => setIsLocked(true)}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 flex items-center gap-2 font-medium"
          >
            <Lock size={18} />
            Lock Day & Archive
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchantDayEndReport;
