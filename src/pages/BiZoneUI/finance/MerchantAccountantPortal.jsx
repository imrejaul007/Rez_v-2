import React, { useState } from 'react';
import {
  ArrowLeft,
  FileText,
  Download,
  Calendar,
  DollarSign,
  TrendingUp,
  TrendingDown,
  PieChart,
  BarChart3,
  Receipt,
  CreditCard,
  Banknote,
  Building2,
  FileSpreadsheet,
  Printer,
  Mail,
  Clock,
  CheckCircle,
  AlertTriangle,
  User,
  Lock,
  Eye,
  Calculator,
  BookOpen,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Filter,
  Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MerchantAccountantPortal = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('summary');
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedMonth, setSelectedMonth] = useState('2024-01');

  // ============================================
  // TALLY-COMPATIBLE EXPORT FORMATS
  // ============================================

  const exportFormats = [
    { id: 'tally_xml', name: 'Tally Prime XML', icon: FileSpreadsheet, description: 'Direct import to Tally Prime/ERP 9' },
    { id: 'tally_csv', name: 'Tally CSV', icon: FileText, description: 'CSV format for Tally import' },
    { id: 'excel', name: 'Excel (XLSX)', icon: FileSpreadsheet, description: 'Microsoft Excel format' },
    { id: 'pdf', name: 'PDF Report', icon: FileText, description: 'Printable PDF format' },
    { id: 'json', name: 'JSON', icon: FileText, description: 'For custom integrations' }
  ];

  // ============================================
  // DAY-END CASH SUMMARY
  // ============================================

  const [dayEndSummary, setDayEndSummary] = useState({
    date: '2024-01-15',
    openingBalance: 5000,
    closingBalance: 28450,

    // Collections by payment method
    cashCollected: 18500,
    upiCollected: 32450,
    cardCollected: 15600,
    walletCollected: 4200,
    creditGiven: 2500,

    // Total
    totalCollection: 70750,
    totalRefunds: 1200,
    netCollection: 69550,

    // Cash Specifics
    cashReceived: 18500,
    cashPaidOut: 2500, // Expenses
    cashRefunds: 450,
    netCashInHand: 20550,

    // Denominations (if entered)
    denominations: {
      2000: 5,
      500: 18,
      200: 12,
      100: 24,
      50: 16,
      20: 20,
      10: 15,
      coins: 350
    },

    // Staff variance
    expectedCash: 20550,
    actualCash: 20400,
    variance: -150,
    varianceReason: 'Pending investigation'
  });

  // ============================================
  // GST SUMMARY
  // ============================================

  const [gstSummary, setGstSummary] = useState({
    period: 'January 2024',
    taxableValue: 584000,

    cgst: {
      rate5: { taxable: 120000, tax: 3000 },
      rate12: { taxable: 180000, tax: 10800 },
      rate18: { taxable: 284000, tax: 25560 },
      total: 39360
    },
    sgst: {
      rate5: { taxable: 120000, tax: 3000 },
      rate12: { taxable: 180000, tax: 10800 },
      rate18: { taxable: 284000, tax: 25560 },
      total: 39360
    },
    igst: {
      total: 0
    },
    cess: {
      total: 0
    },
    totalTax: 78720,
    totalWithTax: 662720,

    // ITC
    inputCredit: 45000,
    netPayable: 33720
  });

  // ============================================
  // LEDGER SUMMARY
  // ============================================

  const [ledgerSummary, setLedgerSummary] = useState({
    sales: {
      cash: 456000,
      credit: 125000,
      total: 581000
    },
    purchases: {
      cash: 180000,
      credit: 95000,
      total: 275000
    },
    expenses: {
      rent: 45000,
      salaries: 120000,
      utilities: 8500,
      marketing: 15000,
      other: 12000,
      total: 200500
    },
    receivables: {
      total: 125000,
      overdue: 35000,
      current: 90000
    },
    payables: {
      total: 95000,
      overdue: 20000,
      current: 75000
    }
  });

  // ============================================
  // MONTH-END RECONCILIATION
  // ============================================

  const [reconciliation, setReconciliation] = useState({
    period: 'January 2024',
    status: 'pending', // 'pending', 'in_progress', 'completed'

    items: [
      { id: 1, name: 'Bank Statement Matching', status: 'completed', matchRate: 100 },
      { id: 2, name: 'Cash Verification', status: 'completed', matchRate: 99.2 },
      { id: 3, name: 'UPI Settlement', status: 'completed', matchRate: 100 },
      { id: 4, name: 'Card Settlement', status: 'in_progress', matchRate: 98.5 },
      { id: 5, name: 'GST Reconciliation', status: 'pending', matchRate: 0 },
      { id: 6, name: 'Inventory Value', status: 'pending', matchRate: 0 }
    ],

    discrepancies: [
      { id: 1, type: 'Card Settlement', amount: 2400, description: 'Pending settlement from Jan 14', status: 'investigating' },
      { id: 2, type: 'Cash Variance', amount: -150, description: 'Short in drawer on Jan 15', status: 'resolved' }
    ]
  });

  // ============================================
  // ACCOUNTANT ACCESS
  // ============================================

  const [accountantAccess, setAccountantAccess] = useState({
    enabled: true,
    email: 'ca.sharma@example.com',
    name: 'CA Rajesh Sharma',
    accessLevel: 'read_only',
    lastLogin: '2024-01-14 10:30:00',
    reports: ['daily_summary', 'gst', 'ledger', 'bank_reconciliation']
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateDenominationTotal = () => {
    const { denominations } = dayEndSummary;
    return (
      denominations[2000] * 2000 +
      denominations[500] * 500 +
      denominations[200] * 200 +
      denominations[100] * 100 +
      denominations[50] * 50 +
      denominations[20] * 20 +
      denominations[10] * 10 +
      denominations.coins
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/merchant')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </button>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Calculator size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Accountant Portal</h1>
                <p className="text-white/80 mt-1">CA-Ready Reports & Tally Export</p>
              </div>
            </div>

            {/* Accountant Access Badge */}
            {accountantAccess.enabled && (
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                    <User size={20} />
                  </div>
                  <div>
                    <div className="font-medium">{accountantAccess.name}</div>
                    <div className="text-sm text-white/70 flex items-center gap-1">
                      <Eye size={12} /> Read-only access
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Period Selector */}
          <div className="flex gap-4 mt-6">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
            >
              <option value="day">Daily</option>
              <option value="week">Weekly</option>
              <option value="month">Monthly</option>
              <option value="quarter">Quarterly</option>
              <option value="year">Yearly</option>
            </select>
            <input
              type="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            { id: 'summary', label: 'Day-End Summary', icon: Receipt },
            { id: 'gst', label: 'GST Reports', icon: FileText },
            { id: 'ledger', label: 'Ledger', icon: BookOpen },
            { id: 'reconciliation', label: 'Reconciliation', icon: RefreshCw },
            { id: 'export', label: 'Export', icon: Download },
            { id: 'access', label: 'CA Access', icon: User }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-slate-800 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-8">

        {/* Day-End Summary Tab */}
        {activeTab === 'summary' && (
          <div className="space-y-6">
            {/* Cash Summary Card */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-800 text-lg">Day-End Cash Summary</h3>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 flex items-center gap-2">
                    <Printer size={16} />
                    Print
                  </button>
                  <button className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm hover:bg-slate-900 flex items-center gap-2">
                    <Download size={16} />
                    Export
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Opening & Closing */}
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-blue-600">Opening Balance</div>
                    <div className="text-2xl font-bold text-blue-800">{formatCurrency(dayEndSummary.openingBalance)}</div>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <div className="text-sm text-emerald-600">Closing Balance</div>
                    <div className="text-2xl font-bold text-emerald-800">{formatCurrency(dayEndSummary.closingBalance)}</div>
                  </div>
                </div>

                {/* Collections Breakdown */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-600 mb-2">Collections by Method</div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="flex items-center gap-2">
                      <Banknote size={16} className="text-green-600" /> Cash
                    </span>
                    <span className="font-medium">{formatCurrency(dayEndSummary.cashCollected)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="flex items-center gap-2">
                      <CreditCard size={16} className="text-purple-600" /> UPI
                    </span>
                    <span className="font-medium">{formatCurrency(dayEndSummary.upiCollected)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="flex items-center gap-2">
                      <CreditCard size={16} className="text-blue-600" /> Card
                    </span>
                    <span className="font-medium">{formatCurrency(dayEndSummary.cardCollected)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="flex items-center gap-2">
                      <Wallet size={16} className="text-orange-600" /> Wallet
                    </span>
                    <span className="font-medium">{formatCurrency(dayEndSummary.walletCollected)}</span>
                  </div>
                </div>

                {/* Net Summary */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-600 mb-2">Summary</div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Total Collection</span>
                    <span className="font-medium">{formatCurrency(dayEndSummary.totalCollection)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-red-700">Refunds</span>
                    <span className="font-medium text-red-700">-{formatCurrency(dayEndSummary.totalRefunds)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-emerald-100 rounded-lg border-2 border-emerald-500">
                    <span className="font-semibold text-emerald-800">Net Collection</span>
                    <span className="font-bold text-emerald-800">{formatCurrency(dayEndSummary.netCollection)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cash Denomination */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Cash Denomination</h3>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {Object.entries(dayEndSummary.denominations).filter(([k]) => k !== 'coins').map(([denom, count]) => (
                  <div key={denom} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-800">₹{denom}</div>
                    <div className="text-2xl font-bold text-emerald-600">{count}</div>
                    <div className="text-xs text-gray-500">= ₹{parseInt(denom) * count}</div>
                  </div>
                ))}
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-800">Coins</div>
                  <div className="text-2xl font-bold text-emerald-600">-</div>
                  <div className="text-xs text-gray-500">= ₹{dayEndSummary.denominations.coins}</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-slate-100 rounded-lg flex justify-between items-center">
                <span className="font-medium">Total Cash Count</span>
                <span className="text-xl font-bold">{formatCurrency(calculateDenominationTotal())}</span>
              </div>
            </div>

            {/* Variance */}
            {dayEndSummary.variance !== 0 && (
              <div className={`rounded-xl p-6 ${dayEndSummary.variance < 0 ? 'bg-red-50 border border-red-200' : 'bg-emerald-50 border border-emerald-200'}`}>
                <div className="flex items-start gap-4">
                  <AlertTriangle className={dayEndSummary.variance < 0 ? 'text-red-600' : 'text-emerald-600'} size={24} />
                  <div>
                    <h4 className={`font-semibold ${dayEndSummary.variance < 0 ? 'text-red-800' : 'text-emerald-800'}`}>
                      Cash Variance Detected
                    </h4>
                    <div className="mt-2 grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Expected</div>
                        <div className="font-medium">{formatCurrency(dayEndSummary.expectedCash)}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Actual</div>
                        <div className="font-medium">{formatCurrency(dayEndSummary.actualCash)}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Variance</div>
                        <div className={`font-bold ${dayEndSummary.variance < 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                          {dayEndSummary.variance < 0 ? '-' : '+'}{formatCurrency(Math.abs(dayEndSummary.variance))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      Status: {dayEndSummary.varianceReason}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* GST Reports Tab */}
        {activeTab === 'gst' && (
          <div className="space-y-6">
            {/* GST Summary */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-800 text-lg">GST Summary - {gstSummary.period}</h3>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm hover:bg-orange-700">
                    Generate GSTR-1
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                    Generate GSTR-3B
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">Taxable Value</div>
                  <div className="text-2xl font-bold text-gray-800">{formatCurrency(gstSummary.taxableValue)}</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-sm text-blue-600">CGST</div>
                  <div className="text-2xl font-bold text-blue-800">{formatCurrency(gstSummary.cgst.total)}</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-sm text-purple-600">SGST</div>
                  <div className="text-2xl font-bold text-purple-800">{formatCurrency(gstSummary.sgst.total)}</div>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <div className="text-sm text-emerald-600">Total Tax</div>
                  <div className="text-2xl font-bold text-emerald-800">{formatCurrency(gstSummary.totalTax)}</div>
                </div>
              </div>

              {/* Rate-wise Breakdown */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Tax Rate</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-600">Taxable Value</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-600">CGST</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-600">SGST</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-600">Total Tax</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4">5%</td>
                      <td className="p-4 text-right">{formatCurrency(gstSummary.cgst.rate5.taxable)}</td>
                      <td className="p-4 text-right">{formatCurrency(gstSummary.cgst.rate5.tax)}</td>
                      <td className="p-4 text-right">{formatCurrency(gstSummary.sgst.rate5.tax)}</td>
                      <td className="p-4 text-right font-medium">{formatCurrency(gstSummary.cgst.rate5.tax + gstSummary.sgst.rate5.tax)}</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">12%</td>
                      <td className="p-4 text-right">{formatCurrency(gstSummary.cgst.rate12.taxable)}</td>
                      <td className="p-4 text-right">{formatCurrency(gstSummary.cgst.rate12.tax)}</td>
                      <td className="p-4 text-right">{formatCurrency(gstSummary.sgst.rate12.tax)}</td>
                      <td className="p-4 text-right font-medium">{formatCurrency(gstSummary.cgst.rate12.tax + gstSummary.sgst.rate12.tax)}</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">18%</td>
                      <td className="p-4 text-right">{formatCurrency(gstSummary.cgst.rate18.taxable)}</td>
                      <td className="p-4 text-right">{formatCurrency(gstSummary.cgst.rate18.tax)}</td>
                      <td className="p-4 text-right">{formatCurrency(gstSummary.sgst.rate18.tax)}</td>
                      <td className="p-4 text-right font-medium">{formatCurrency(gstSummary.cgst.rate18.tax + gstSummary.sgst.rate18.tax)}</td>
                    </tr>
                    <tr className="border-t bg-gray-50 font-semibold">
                      <td className="p-4">Total</td>
                      <td className="p-4 text-right">{formatCurrency(gstSummary.taxableValue)}</td>
                      <td className="p-4 text-right">{formatCurrency(gstSummary.cgst.total)}</td>
                      <td className="p-4 text-right">{formatCurrency(gstSummary.sgst.total)}</td>
                      <td className="p-4 text-right">{formatCurrency(gstSummary.totalTax)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ITC & Net Payable */}
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">Total Output Tax</div>
                  <div className="text-xl font-bold">{formatCurrency(gstSummary.totalTax)}</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-sm text-blue-600">Input Tax Credit (ITC)</div>
                  <div className="text-xl font-bold text-blue-800">-{formatCurrency(gstSummary.inputCredit)}</div>
                </div>
                <div className="p-4 bg-emerald-100 rounded-lg border-2 border-emerald-500">
                  <div className="text-sm text-emerald-600">Net Tax Payable</div>
                  <div className="text-xl font-bold text-emerald-800">{formatCurrency(gstSummary.netPayable)}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Ledger Tab */}
        {activeTab === 'ledger' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Sales Ledger */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="text-emerald-600" size={20} />
                  Sales Ledger
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Cash Sales</span>
                    <span className="font-medium">{formatCurrency(ledgerSummary.sales.cash)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Credit Sales</span>
                    <span className="font-medium">{formatCurrency(ledgerSummary.sales.credit)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-emerald-100 rounded-lg font-semibold">
                    <span>Total Sales</span>
                    <span>{formatCurrency(ledgerSummary.sales.total)}</span>
                  </div>
                </div>
              </div>

              {/* Purchases Ledger */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <TrendingDown className="text-orange-600" size={20} />
                  Purchases Ledger
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Cash Purchases</span>
                    <span className="font-medium">{formatCurrency(ledgerSummary.purchases.cash)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Credit Purchases</span>
                    <span className="font-medium">{formatCurrency(ledgerSummary.purchases.credit)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-orange-100 rounded-lg font-semibold">
                    <span>Total Purchases</span>
                    <span>{formatCurrency(ledgerSummary.purchases.total)}</span>
                  </div>
                </div>
              </div>

              {/* Receivables */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ArrowUpRight className="text-blue-600" size={20} />
                  Receivables
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Current</span>
                    <span className="font-medium">{formatCurrency(ledgerSummary.receivables.current)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-red-700">Overdue</span>
                    <span className="font-medium text-red-700">{formatCurrency(ledgerSummary.receivables.overdue)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-blue-100 rounded-lg font-semibold">
                    <span>Total Receivables</span>
                    <span>{formatCurrency(ledgerSummary.receivables.total)}</span>
                  </div>
                </div>
              </div>

              {/* Payables */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ArrowDownRight className="text-purple-600" size={20} />
                  Payables
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Current</span>
                    <span className="font-medium">{formatCurrency(ledgerSummary.payables.current)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-red-700">Overdue</span>
                    <span className="font-medium text-red-700">{formatCurrency(ledgerSummary.payables.overdue)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-purple-100 rounded-lg font-semibold">
                    <span>Total Payables</span>
                    <span>{formatCurrency(ledgerSummary.payables.total)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Expenses */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Expenses Summary</h3>
              <div className="grid md:grid-cols-6 gap-4">
                {Object.entries(ledgerSummary.expenses).filter(([k]) => k !== 'total').map(([key, value]) => (
                  <div key={key} className="p-4 bg-gray-50 rounded-lg text-center">
                    <div className="text-sm text-gray-600 capitalize">{key}</div>
                    <div className="text-xl font-bold text-gray-800">{formatCurrency(value)}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-red-50 rounded-lg flex justify-between items-center">
                <span className="font-semibold text-red-800">Total Expenses</span>
                <span className="text-xl font-bold text-red-800">{formatCurrency(ledgerSummary.expenses.total)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Export Tab */}
        {activeTab === 'export' && (
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="font-semibold text-gray-800 mb-6">Export Reports</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {exportFormats.map(format => (
                <div key={format.id} className="border rounded-lg p-4 hover:border-slate-500 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <format.icon className="text-slate-600" size={24} />
                    <div className="font-medium text-gray-800">{format.name}</div>
                  </div>
                  <p className="text-sm text-gray-500">{format.description}</p>
                  <button className="mt-4 w-full py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 flex items-center justify-center gap-2">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              ))}
            </div>

            {/* Scheduled Exports */}
            <div className="mt-8">
              <h4 className="font-medium text-gray-800 mb-4">Scheduled Exports</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mail className="text-gray-600" size={20} />
                    <div>
                      <div className="font-medium">Daily Summary to CA</div>
                      <div className="text-sm text-gray-500">Every day at 11:00 PM</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" readOnly />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mail className="text-gray-600" size={20} />
                    <div>
                      <div className="font-medium">Monthly GST Report</div>
                      <div className="text-sm text-gray-500">1st of every month</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" readOnly />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reconciliation Tab */}
        {activeTab === 'reconciliation' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-800 text-lg">Month-End Reconciliation</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  reconciliation.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                  reconciliation.status === 'in_progress' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {reconciliation.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>

              <div className="space-y-4">
                {reconciliation.items.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {item.status === 'completed' ? (
                        <CheckCircle className="text-emerald-500" size={20} />
                      ) : item.status === 'in_progress' ? (
                        <RefreshCw className="text-yellow-500 animate-spin" size={20} />
                      ) : (
                        <Clock className="text-gray-400" size={20} />
                      )}
                      <span className="font-medium text-gray-800">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      {item.matchRate > 0 && (
                        <span className={`font-medium ${
                          item.matchRate === 100 ? 'text-emerald-600' :
                          item.matchRate >= 95 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {item.matchRate}% match
                        </span>
                      )}
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        item.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                        item.status === 'in_progress' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Discrepancies */}
            {reconciliation.discrepancies.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Discrepancies</h3>
                <div className="space-y-4">
                  {reconciliation.discrepancies.map(disc => (
                    <div key={disc.id} className={`p-4 rounded-lg ${
                      disc.status === 'resolved' ? 'bg-emerald-50 border border-emerald-200' :
                      'bg-yellow-50 border border-yellow-200'
                    }`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-gray-800">{disc.type}</div>
                          <div className="text-sm text-gray-600">{disc.description}</div>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold ${disc.amount < 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                            {disc.amount < 0 ? '-' : '+'}{formatCurrency(Math.abs(disc.amount))}
                          </div>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            disc.status === 'resolved' ? 'bg-emerald-200 text-emerald-800' :
                            'bg-yellow-200 text-yellow-800'
                          }`}>
                            {disc.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* CA Access Tab */}
        {activeTab === 'access' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-800 mb-6">Accountant Access</h3>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                    <User size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{accountantAccess.name}</div>
                    <div className="text-sm text-gray-500">{accountantAccess.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-1">
                    <Eye size={14} /> Read Only
                  </span>
                  <button className="text-red-600 hover:text-red-800">
                    Revoke Access
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-800">Report Access Permissions</h4>
                {[
                  { id: 'daily_summary', name: 'Daily Summary', enabled: true },
                  { id: 'gst', name: 'GST Reports', enabled: true },
                  { id: 'ledger', name: 'Ledger & P&L', enabled: true },
                  { id: 'bank_reconciliation', name: 'Bank Reconciliation', enabled: true },
                  { id: 'inventory', name: 'Inventory Reports', enabled: false },
                  { id: 'staff', name: 'Staff Reports', enabled: false }
                ].map(report => (
                  <div key={report.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-gray-700">{report.name}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={report.enabled} className="sr-only peer" readOnly />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Invite New Accountant</h4>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="accountant@email.com"
                    className="flex-1 p-2 border rounded-lg"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Send Invite
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchantAccountantPortal;
