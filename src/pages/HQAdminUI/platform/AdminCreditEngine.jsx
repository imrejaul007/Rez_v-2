import React, { useState } from 'react';
import {
  ArrowLeft,
  DollarSign,
  TrendingUp,
  Package,
  Users,
  CreditCard,
  Wallet,
  PiggyBank,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  Building2,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCcw,
  Target,
  Shield,
  Banknote,
  LineChart,
  Percent,
  Calendar,
  FileText,
  BadgeCheck,
  CircleDollarSign
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminCreditEngine = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('working-capital');

  // ============================================
  // 1. MERCHANT WORKING CAPITAL
  // ============================================
  // Advance capital to merchants based on ReZ transaction data
  // They can't get this credit elsewhere - only ReZ knows their real revenue

  const [workingCapitalLoans, setWorkingCapitalLoans] = useState([
    {
      id: 'WC001',
      merchantId: 'M1234',
      merchantName: 'Third Wave Coffee',
      category: 'Cafe',

      // Credit Assessment (Only ReZ has this data)
      monthlyRezRevenue: 450000,
      averageTicketSize: 380,
      customerRetentionRate: 72,
      reviewScore: 4.6,
      paymentOnTimeRate: 98,
      rezTenure: '18 months',

      // Credit Offer
      eligibleAmount: 500000,
      approvedAmount: 400000,
      interestRate: 1.2, // Monthly
      tenure: 12, // Months
      emiAmount: 35600,

      // Repayment (Auto-deducted from ReZ settlements)
      repaymentMethod: 'auto_deduct',
      deductionPercent: 8, // 8% of daily settlements
      totalRepaid: 178000,
      remainingBalance: 222000,
      nextDeduction: '2024-01-16',

      // Status
      status: 'active',
      disbursedDate: '2023-07-15',
      expectedCompletion: '2024-07-15',

      // ReZ Benefits
      lockInBonus: true, // Merchant locked to ReZ during loan tenure
      exclusivityClause: true // Cannot use competing platforms
    },
    {
      id: 'WC002',
      merchantId: 'M2345',
      merchantName: 'Fresh Mart Grocery',
      category: 'Grocery',
      monthlyRezRevenue: 280000,
      averageTicketSize: 650,
      customerRetentionRate: 65,
      reviewScore: 4.3,
      paymentOnTimeRate: 95,
      rezTenure: '12 months',
      eligibleAmount: 300000,
      approvedAmount: 250000,
      interestRate: 1.4,
      tenure: 9,
      emiAmount: 29800,
      repaymentMethod: 'auto_deduct',
      deductionPercent: 10,
      totalRepaid: 89400,
      remainingBalance: 160600,
      nextDeduction: '2024-01-16',
      status: 'active',
      disbursedDate: '2023-10-01',
      expectedCompletion: '2024-07-01',
      lockInBonus: true,
      exclusivityClause: true
    }
  ]);

  // Pending Applications
  const [pendingApplications, setPendingApplications] = useState([
    {
      id: 'APP001',
      merchantName: 'Urban Salon',
      requestedAmount: 200000,
      monthlyRevenue: 180000,
      rezScore: 82,
      riskLevel: 'low',
      autoApproved: true,
      appliedDate: '2024-01-14'
    },
    {
      id: 'APP002',
      merchantName: 'Quick Repairs',
      requestedAmount: 150000,
      monthlyRevenue: 95000,
      rezScore: 68,
      riskLevel: 'medium',
      autoApproved: false,
      appliedDate: '2024-01-13'
    }
  ]);

  // ============================================
  // 2. USER MICRO-CREDIT (Buy Now, Pay Later)
  // ============================================
  // Users can spend now and pay later - creates payment habit dependency

  const [userCreditLines, setUserCreditLines] = useState([
    {
      id: 'UCL001',
      userId: 'U12345',
      userName: 'Rahul Sharma',

      // Credit Assessment
      rezAge: '24 months',
      totalSpend: 156000,
      monthlyAverage: 6500,
      paymentHistory: 100, // % on-time
      savingsRank: 847,
      trustScore: 92,

      // Credit Line
      creditLimit: 25000,
      availableCredit: 18500,
      usedCredit: 6500,

      // Current Usage
      activeOrders: [
        { merchant: 'Zudio', amount: 2800, dueDate: '2024-01-30', status: 'pending' },
        { merchant: 'Dominos', amount: 650, dueDate: '2024-01-20', status: 'pending' },
        { merchant: 'Apollo Pharmacy', amount: 1200, dueDate: '2024-02-05', status: 'pending' }
      ],

      // Benefits for user
      interestFree: true, // First 15 days
      latePaymentFee: 50,
      creditBoostEligible: true
    }
  ]);

  // BNPL Transactions Today
  const bnplStats = {
    totalBnplToday: 245,
    totalValueToday: 485000,
    averageOrderValue: 1980,
    conversionLift: 34, // % increase in conversion when BNPL shown
    repeatUsageRate: 78, // % of users who use BNPL again
    defaultRate: 1.2 // Very low due to data-driven limits
  };

  // ============================================
  // 3. INVENTORY FINANCING
  // ============================================
  // ReZ funds merchant inventory, takes margin share
  // Merchant can't stock without ReZ capital

  const [inventoryFinancing, setInventoryFinancing] = useState([
    {
      id: 'INV001',
      merchantId: 'M3456',
      merchantName: 'Fashion Hub',
      category: 'Apparel',

      // Financing Details
      inventoryType: 'Seasonal Collection',
      financedAmount: 800000,
      rezMarginShare: 15, // % of profit from financed inventory

      // Stock Details
      totalUnits: 2400,
      soldUnits: 1680,
      remainingUnits: 720,
      averageSalePrice: 850,

      // Financial Progress
      totalRevenue: 1428000,
      grossProfit: 428000,
      rezShare: 64200, // 15% of profit
      merchantShare: 363800,

      // Status
      status: 'active',
      startDate: '2023-11-01',
      expectedEndDate: '2024-02-28',

      // Lock-in
      exclusiveSaleOnRez: true, // Financed inventory must be sold on ReZ
      minimumPriceEnforced: true
    },
    {
      id: 'INV002',
      merchantId: 'M4567',
      merchantName: 'Electronics World',
      category: 'Electronics',
      inventoryType: 'Smartphones',
      financedAmount: 2500000,
      rezMarginShare: 8,
      totalUnits: 500,
      soldUnits: 320,
      remainingUnits: 180,
      averageSalePrice: 15000,
      totalRevenue: 4800000,
      grossProfit: 640000,
      rezShare: 51200,
      merchantShare: 588800,
      status: 'active',
      startDate: '2023-12-15',
      expectedEndDate: '2024-03-15',
      exclusiveSaleOnRez: true,
      minimumPriceEnforced: true
    }
  ]);

  // ============================================
  // 4. REVENUE-BASED FINANCING
  // ============================================
  // Repayment scales with revenue - merchants never feel pressure

  const [revenueBasedLoans, setRevenueBasedLoans] = useState([
    {
      id: 'RBF001',
      merchantName: 'Cloud Kitchen Express',
      advanceAmount: 300000,
      repaymentMultiple: 1.25, // Pay back 1.25x
      totalToRepay: 375000,

      // Flexible Repayment
      dailyRevenueShare: 12, // % of daily revenue
      goodDayRepayment: 2400, // High sales day
      slowDayRepayment: 800, // Low sales day

      // Progress
      totalRepaid: 225000,
      remaining: 150000,
      daysActive: 94,
      estimatedDaysLeft: 62,

      // Advantage
      noPressure: true, // No fixed EMI
      autoAdjusts: true // Repayment adjusts to business performance
    }
  ]);

  // ============================================
  // 5. CAPITAL FLYWHEEL METRICS
  // ============================================

  const capitalMetrics = {
    // Total Capital Deployed
    totalCapitalDeployed: 125000000,
    activeLoans: 847,

    // Returns
    totalInterestEarned: 18500000,
    averageYield: 14.8, // % annual

    // Lock-in Effect
    merchantsWithActiveLoans: 847,
    averageLoanTenure: 8.5, // months
    exclusivityLockRate: 92, // % with exclusivity clause

    // Default Risk
    currentNPA: 2.3, // %
    provisionedAmount: 2875000,

    // Growth
    monthlyDisbursement: 45000000,
    growthRate: 28, // % MoM

    // Flywheel Effect
    capitalRecycleRate: 3.2, // Times per year
    reinvestmentRate: 85 // % of returns reinvested
  };

  // ============================================
  // 6. CREDIT SCORING MODEL (ReZ Proprietary)
  // ============================================

  const rezCreditModel = {
    merchantFactors: [
      { factor: 'ReZ Transaction History', weight: 25, description: 'Volume and consistency of sales through ReZ' },
      { factor: 'Customer Retention', weight: 20, description: 'Repeat customer rate on ReZ' },
      { factor: 'Review Score', weight: 15, description: 'Average rating and review sentiment' },
      { factor: 'Refund/Dispute Rate', weight: 15, description: 'Lower is better' },
      { factor: 'Platform Tenure', weight: 10, description: 'How long on ReZ platform' },
      { factor: 'Category Risk', weight: 10, description: 'Industry-specific risk factor' },
      { factor: 'Growth Trajectory', weight: 5, description: 'Month-over-month growth trend' }
    ],
    userFactors: [
      { factor: 'Spending Consistency', weight: 30, description: 'Regular spending pattern' },
      { factor: 'Payment History', weight: 25, description: 'On-time payment rate' },
      { factor: 'Account Age', weight: 15, description: 'Time on ReZ platform' },
      { factor: 'Savings Rank', weight: 15, description: 'Lifetime savings position' },
      { factor: 'Review Contribution', weight: 10, description: 'Quality of reviews written' },
      { factor: 'Referral Quality', weight: 5, description: 'Payment behavior of referred users' }
    ]
  };

  // ============================================
  // 7. AUTO-APPROVAL ENGINE
  // ============================================

  const autoApprovalRules = [
    {
      id: 1,
      name: 'Instant Approval',
      criteria: 'ReZ Score > 85, Tenure > 12 months, No disputes',
      maxAmount: 500000,
      interestRate: '1.0% monthly',
      enabled: true,
      approvalsToday: 12
    },
    {
      id: 2,
      name: 'Fast Track',
      criteria: 'ReZ Score > 70, Tenure > 6 months, < 2 disputes',
      maxAmount: 250000,
      interestRate: '1.3% monthly',
      enabled: true,
      approvalsToday: 8
    },
    {
      id: 3,
      name: 'Manual Review',
      criteria: 'ReZ Score 50-70 OR New merchants',
      maxAmount: 100000,
      interestRate: '1.6% monthly',
      enabled: true,
      approvalsToday: 3
    }
  ];

  const formatCurrency = (amount) => {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(1)}K`;
    return `₹${amount}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/admin')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Admin</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <CircleDollarSign size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Embedded Credit Engine</h1>
              <p className="text-white/80 mt-1">Capital Flywheel - Money Makes More Money</p>
            </div>
          </div>

          {/* Capital Overview */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Total Capital Deployed</div>
              <div className="text-2xl font-bold mt-1">{formatCurrency(capitalMetrics.totalCapitalDeployed)}</div>
              <div className="text-emerald-200 text-xs mt-1">+{capitalMetrics.growthRate}% MoM</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Active Loans</div>
              <div className="text-2xl font-bold mt-1">{capitalMetrics.activeLoans}</div>
              <div className="text-emerald-200 text-xs mt-1">Merchants with credit</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Interest Earned</div>
              <div className="text-2xl font-bold mt-1">{formatCurrency(capitalMetrics.totalInterestEarned)}</div>
              <div className="text-emerald-200 text-xs mt-1">{capitalMetrics.averageYield}% yield</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Exclusivity Lock</div>
              <div className="text-2xl font-bold mt-1">{capitalMetrics.exclusivityLockRate}%</div>
              <div className="text-emerald-200 text-xs mt-1">Merchants locked in</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">NPA Rate</div>
              <div className="text-2xl font-bold mt-1">{capitalMetrics.currentNPA}%</div>
              <div className="text-emerald-200 text-xs mt-1">Industry avg: 8.5%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            { id: 'working-capital', label: 'Working Capital', icon: Building2 },
            { id: 'user-credit', label: 'User BNPL', icon: CreditCard },
            { id: 'inventory', label: 'Inventory Finance', icon: Package },
            { id: 'revenue-based', label: 'Revenue-Based', icon: TrendingUp },
            { id: 'credit-model', label: 'Credit Model', icon: BarChart3 },
            { id: 'flywheel', label: 'Capital Flywheel', icon: RefreshCcw }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-lg'
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

        {/* Working Capital Tab */}
        {activeTab === 'working-capital' && (
          <div className="space-y-6">
            {/* Lock-in Banner */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white">
              <div className="flex items-start gap-4">
                <Shield size={32} />
                <div>
                  <h3 className="text-xl font-bold">Merchant Lock-In Through Capital</h3>
                  <p className="text-white/80 mt-1">
                    Every loan includes an exclusivity clause. Merchants cannot use competing platforms
                    while the loan is active. Average lock-in period: {capitalMetrics.averageLoanTenure} months.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <div className="bg-white/20 rounded-lg px-4 py-2">
                      <div className="text-2xl font-bold">{capitalMetrics.merchantsWithActiveLoans}</div>
                      <div className="text-sm text-white/70">Merchants Locked</div>
                    </div>
                    <div className="bg-white/20 rounded-lg px-4 py-2">
                      <div className="text-2xl font-bold">{capitalMetrics.exclusivityLockRate}%</div>
                      <div className="text-sm text-white/70">With Exclusivity</div>
                    </div>
                    <div className="bg-white/20 rounded-lg px-4 py-2">
                      <div className="text-2xl font-bold">{formatCurrency(capitalMetrics.monthlyDisbursement)}</div>
                      <div className="text-sm text-white/70">Monthly Disbursement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Loans */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">Active Working Capital Loans</h3>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700">
                  + New Loan Offer
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Merchant</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Monthly Revenue</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Loan Amount</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Repaid</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Deduction %</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Lock-In</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workingCapitalLoans.map(loan => (
                      <tr key={loan.id} className="border-t hover:bg-gray-50">
                        <td className="p-4">
                          <div className="font-medium text-gray-800">{loan.merchantName}</div>
                          <div className="text-sm text-gray-500">{loan.category} • {loan.rezTenure}</div>
                        </td>
                        <td className="p-4">
                          <div className="font-medium">{formatCurrency(loan.monthlyRezRevenue)}</div>
                          <div className="text-sm text-gray-500">Avg ticket: ₹{loan.averageTicketSize}</div>
                        </td>
                        <td className="p-4">
                          <div className="font-medium">{formatCurrency(loan.approvedAmount)}</div>
                          <div className="text-sm text-gray-500">{loan.interestRate}% monthly</div>
                        </td>
                        <td className="p-4">
                          <div className="font-medium text-emerald-600">{formatCurrency(loan.totalRepaid)}</div>
                          <div className="text-sm text-gray-500">
                            {Math.round((loan.totalRepaid / loan.approvedAmount) * 100)}% complete
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div
                              className="bg-emerald-500 h-2 rounded-full"
                              style={{ width: `${(loan.totalRepaid / loan.approvedAmount) * 100}%` }}
                            />
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="font-medium">{loan.deductionPercent}%</div>
                          <div className="text-sm text-gray-500">of daily settlements</div>
                        </td>
                        <td className="p-4">
                          {loan.exclusivityClause ? (
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                              Exclusive
                            </span>
                          ) : (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                              Standard
                            </span>
                          )}
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                            Active
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pending Applications */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Pending Applications</h3>
              </div>
              <div className="p-4 grid gap-4">
                {pendingApplications.map(app => (
                  <div key={app.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-800">{app.merchantName}</div>
                      <div className="text-sm text-gray-500">
                        Requested: {formatCurrency(app.requestedAmount)} • Revenue: {formatCurrency(app.monthlyRevenue)}/mo
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-emerald-600">{app.rezScore}</div>
                        <div className="text-xs text-gray-500">ReZ Score</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        app.riskLevel === 'low' ? 'bg-green-100 text-green-700' :
                        app.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {app.riskLevel.toUpperCase()} RISK
                      </span>
                      {app.autoApproved ? (
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm">
                          Auto-Approve
                        </button>
                      ) : (
                        <button className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm">
                          Review
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Auto-Approval Rules */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Auto-Approval Rules</h3>
              </div>
              <div className="p-4 grid gap-4">
                {autoApprovalRules.map(rule => (
                  <div key={rule.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        rule.id === 1 ? 'bg-emerald-100 text-emerald-600' :
                        rule.id === 2 ? 'bg-blue-100 text-blue-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        <Zap size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{rule.name}</div>
                        <div className="text-sm text-gray-500">{rule.criteria}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="font-medium">{formatCurrency(rule.maxAmount)}</div>
                        <div className="text-xs text-gray-500">Max Amount</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{rule.interestRate}</div>
                        <div className="text-xs text-gray-500">Interest</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-emerald-600">{rule.approvalsToday}</div>
                        <div className="text-xs text-gray-500">Today</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={rule.enabled} className="sr-only peer" readOnly />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* User BNPL Tab */}
        {activeTab === 'user-credit' && (
          <div className="space-y-6">
            {/* BNPL Stats */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="bg-white rounded-xl p-4 border">
                <div className="text-gray-500 text-sm">BNPL Today</div>
                <div className="text-2xl font-bold text-gray-800 mt-1">{bnplStats.totalBnplToday}</div>
                <div className="text-xs text-emerald-600">orders</div>
              </div>
              <div className="bg-white rounded-xl p-4 border">
                <div className="text-gray-500 text-sm">Value</div>
                <div className="text-2xl font-bold text-gray-800 mt-1">{formatCurrency(bnplStats.totalValueToday)}</div>
                <div className="text-xs text-gray-500">financed</div>
              </div>
              <div className="bg-white rounded-xl p-4 border">
                <div className="text-gray-500 text-sm">Avg Order</div>
                <div className="text-2xl font-bold text-gray-800 mt-1">₹{bnplStats.averageOrderValue}</div>
                <div className="text-xs text-gray-500">BNPL size</div>
              </div>
              <div className="bg-white rounded-xl p-4 border">
                <div className="text-gray-500 text-sm">Conversion Lift</div>
                <div className="text-2xl font-bold text-emerald-600 mt-1">+{bnplStats.conversionLift}%</div>
                <div className="text-xs text-gray-500">when BNPL shown</div>
              </div>
              <div className="bg-white rounded-xl p-4 border">
                <div className="text-gray-500 text-sm">Repeat Usage</div>
                <div className="text-2xl font-bold text-gray-800 mt-1">{bnplStats.repeatUsageRate}%</div>
                <div className="text-xs text-gray-500">use again</div>
              </div>
              <div className="bg-white rounded-xl p-4 border">
                <div className="text-gray-500 text-sm">Default Rate</div>
                <div className="text-2xl font-bold text-emerald-600 mt-1">{bnplStats.defaultRate}%</div>
                <div className="text-xs text-gray-500">Industry: 4.5%</div>
              </div>
            </div>

            {/* User Credit Lines */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">User Credit Lines</h3>
              </div>
              {userCreditLines.map(user => (
                <div key={user.id} className="p-6 border-b last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-gray-800 text-lg">{user.userName}</div>
                      <div className="text-sm text-gray-500">
                        ReZ Age: {user.rezAge} • Total Spend: {formatCurrency(user.totalSpend)} • Trust Score: {user.trustScore}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Credit Limit</div>
                      <div className="text-2xl font-bold text-gray-800">{formatCurrency(user.creditLimit)}</div>
                    </div>
                  </div>

                  {/* Credit Usage */}
                  <div className="mt-4 bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Credit Used: {formatCurrency(user.usedCredit)}</span>
                      <span className="text-emerald-600">Available: {formatCurrency(user.availableCredit)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-emerald-500 h-3 rounded-full"
                        style={{ width: `${(user.usedCredit / user.creditLimit) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Active Orders */}
                  <div className="mt-4">
                    <div className="text-sm font-medium text-gray-600 mb-2">Active BNPL Orders</div>
                    <div className="grid gap-2">
                      {user.activeOrders.map((order, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-800">{order.merchant}</div>
                            <div className="text-xs text-gray-500">Due: {order.dueDate}</div>
                          </div>
                          <div className="font-medium">₹{order.amount}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mt-4 flex gap-2">
                    {user.interestFree && (
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                        0% for 15 days
                      </span>
                    )}
                    {user.creditBoostEligible && (
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        Credit Boost Eligible
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Habit Lock Explanation */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <CreditCard size={24} />
                BNPL Creates Payment Habit Dependency
              </h3>
              <div className="mt-4 grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">78%</div>
                  <div className="text-sm text-white/80">Users who try BNPL use it again within 30 days</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">2.3x</div>
                  <div className="text-sm text-white/80">Higher order value when BNPL is available</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">34%</div>
                  <div className="text-sm text-white/80">Conversion increase when BNPL shown at checkout</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Inventory Financing Tab */}
        {activeTab === 'inventory' && (
          <div className="space-y-6">
            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Package size={24} />
                ReZ Funds Inventory, Takes Margin Share
              </h3>
              <p className="text-white/80 mt-2">
                Merchants can't stock without ReZ capital. Financed inventory MUST be sold exclusively on ReZ.
                We take 8-15% of profit from financed items.
              </p>
            </div>

            {/* Active Inventory Financing */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">Active Inventory Financing</h3>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700">
                  + New Financing
                </button>
              </div>
              <div className="p-4 space-y-4">
                {inventoryFinancing.map(inv => (
                  <div key={inv.id} className="border rounded-xl p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-gray-800 text-lg">{inv.merchantName}</div>
                        <div className="text-sm text-gray-500">{inv.category} • {inv.inventoryType}</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        inv.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {inv.status.toUpperCase()}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm text-gray-500">Financed Amount</div>
                        <div className="text-xl font-bold text-gray-800">{formatCurrency(inv.financedAmount)}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm text-gray-500">ReZ Margin Share</div>
                        <div className="text-xl font-bold text-purple-600">{inv.rezMarginShare}%</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm text-gray-500">Units Sold</div>
                        <div className="text-xl font-bold text-gray-800">{inv.soldUnits}/{inv.totalUnits}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm text-gray-500">ReZ Earned</div>
                        <div className="text-xl font-bold text-emerald-600">{formatCurrency(inv.rezShare)}</div>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Sales Progress</span>
                        <span className="text-gray-800 font-medium">
                          {Math.round((inv.soldUnits / inv.totalUnits) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-purple-500 h-3 rounded-full"
                          style={{ width: `${(inv.soldUnits / inv.totalUnits) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Lock-in Tags */}
                    <div className="mt-4 flex gap-2">
                      {inv.exclusiveSaleOnRez && (
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium flex items-center gap-1">
                          <Shield size={12} /> Exclusive to ReZ
                        </span>
                      )}
                      {inv.minimumPriceEnforced && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          Min Price Enforced
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Revenue-Based Financing Tab */}
        {activeTab === 'revenue-based' && (
          <div className="space-y-6">
            {/* Explanation */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <TrendingUp size={24} />
                Revenue-Based Financing: No Fixed EMI Pressure
              </h3>
              <p className="text-white/80 mt-2">
                Repayment scales with daily revenue. Good day = pay more. Slow day = pay less.
                Merchants never feel cash pressure, but they're always paying back.
              </p>
            </div>

            {/* Active RBF Loans */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Revenue-Based Advances</h3>
              </div>
              <div className="p-4 space-y-4">
                {revenueBasedLoans.map(loan => (
                  <div key={loan.id} className="border rounded-xl p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-gray-800 text-lg">{loan.merchantName}</div>
                        <div className="text-sm text-gray-500">{loan.daysActive} days active</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Daily Revenue Share</div>
                        <div className="text-2xl font-bold text-orange-600">{loan.dailyRevenueShare}%</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm text-gray-500">Advance Amount</div>
                        <div className="text-xl font-bold text-gray-800">{formatCurrency(loan.advanceAmount)}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm text-gray-500">Total to Repay</div>
                        <div className="text-xl font-bold text-gray-800">{formatCurrency(loan.totalToRepay)}</div>
                        <div className="text-xs text-gray-500">{loan.repaymentMultiple}x multiplier</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm text-gray-500">Repaid So Far</div>
                        <div className="text-xl font-bold text-emerald-600">{formatCurrency(loan.totalRepaid)}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm text-gray-500">Remaining</div>
                        <div className="text-xl font-bold text-gray-800">{formatCurrency(loan.remaining)}</div>
                      </div>
                    </div>

                    {/* Daily Examples */}
                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                      <div className="bg-emerald-50 rounded-lg p-4 flex items-center gap-4">
                        <ArrowUpRight className="text-emerald-600" size={32} />
                        <div>
                          <div className="text-sm text-gray-600">Good Sales Day</div>
                          <div className="text-xl font-bold text-emerald-600">₹{loan.goodDayRepayment}</div>
                          <div className="text-xs text-gray-500">auto-deducted</div>
                        </div>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-4 flex items-center gap-4">
                        <ArrowDownRight className="text-orange-600" size={32} />
                        <div>
                          <div className="text-sm text-gray-600">Slow Sales Day</div>
                          <div className="text-xl font-bold text-orange-600">₹{loan.slowDayRepayment}</div>
                          <div className="text-xs text-gray-500">auto-deducted</div>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mt-4 flex gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        No Fixed EMI
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        Auto-Adjusts Daily
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        ~{loan.estimatedDaysLeft} days remaining
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Credit Model Tab */}
        {activeTab === 'credit-model' && (
          <div className="space-y-6">
            {/* Proprietary Model Banner */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <BarChart3 size={24} />
                ReZ Proprietary Credit Scoring Model
              </h3>
              <p className="text-white/80 mt-2">
                Banks can't replicate this. Our credit model uses real-time transaction data, customer behavior,
                and platform engagement metrics that only exist within ReZ. Default rate: 2.3% vs industry 8.5%.
              </p>
            </div>

            {/* Merchant Scoring Factors */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Merchant Credit Scoring Factors</h3>
              </div>
              <div className="p-4 space-y-3">
                {rezCreditModel.merchantFactors.map((factor, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-emerald-600">{factor.weight}%</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{factor.factor}</div>
                      <div className="text-sm text-gray-500">{factor.description}</div>
                    </div>
                    <div className="w-full max-w-xs">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-emerald-500 h-2 rounded-full"
                          style={{ width: `${factor.weight * 4}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Scoring Factors */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">User Credit Scoring Factors</h3>
              </div>
              <div className="p-4 space-y-3">
                {rezCreditModel.userFactors.map((factor, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">{factor.weight}%</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{factor.factor}</div>
                      <div className="text-sm text-gray-500">{factor.description}</div>
                    </div>
                    <div className="w-full max-w-xs">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${factor.weight * 3.33}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Moat */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold">Why Banks Can't Compete</h3>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">Real-Time Data</div>
                  <div className="text-sm text-white/80 mt-1">
                    We see every transaction as it happens. Banks only see monthly statements.
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">Behavior Signals</div>
                  <div className="text-sm text-white/80 mt-1">
                    Customer retention, review scores, refund rates - invisible to banks.
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">Auto-Recovery</div>
                  <div className="text-sm text-white/80 mt-1">
                    We deduct from settlements. No chasing, no collection costs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Capital Flywheel Tab */}
        {activeTab === 'flywheel' && (
          <div className="space-y-6">
            {/* Flywheel Visualization */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <RefreshCcw size={24} />
                The Capital Flywheel Effect
              </h3>
              <p className="text-white/80 mt-2">
                Money deployed → Returns generated → Reinvested → More money deployed.
                The flywheel accelerates over time as data improves and defaults decrease.
              </p>

              <div className="grid grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Banknote size={28} />
                  </div>
                  <div className="mt-2 font-medium">Deploy Capital</div>
                  <div className="text-sm text-white/70">{formatCurrency(capitalMetrics.totalCapitalDeployed)}</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp size={28} />
                  </div>
                  <div className="mt-2 font-medium">Earn Returns</div>
                  <div className="text-sm text-white/70">{capitalMetrics.averageYield}% yield</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <RefreshCcw size={28} />
                  </div>
                  <div className="mt-2 font-medium">Recycle</div>
                  <div className="text-sm text-white/70">{capitalMetrics.capitalRecycleRate}x/year</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Target size={28} />
                  </div>
                  <div className="mt-2 font-medium">Lock-In</div>
                  <div className="text-sm text-white/70">{capitalMetrics.exclusivityLockRate}% exclusive</div>
                </div>
              </div>
            </div>

            {/* Flywheel Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Banknote className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Monthly Disbursement</div>
                    <div className="text-2xl font-bold text-gray-800">{formatCurrency(capitalMetrics.monthlyDisbursement)}</div>
                  </div>
                </div>
                <div className="text-sm text-emerald-600">+{capitalMetrics.growthRate}% vs last month</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Percent className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Reinvestment Rate</div>
                    <div className="text-2xl font-bold text-gray-800">{capitalMetrics.reinvestmentRate}%</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">of returns redeployed</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Shield className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Risk Provision</div>
                    <div className="text-2xl font-bold text-gray-800">{formatCurrency(capitalMetrics.provisionedAmount)}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">for potential defaults</div>
              </div>
            </div>

            {/* Strategic Lock-In */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Strategic Lock-In Through Credit</h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-800">Merchant Lock-In</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="text-purple-600" size={20} />
                        <span className="text-sm">Exclusivity clause during loan tenure</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="text-purple-600" size={20} />
                        <span className="text-sm">Cannot use competing platforms</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="text-purple-600" size={20} />
                        <span className="text-sm">Auto-renewal incentives</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="text-purple-600" size={20} />
                        <span className="text-sm">Credit history locked to ReZ</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-800">User Lock-In</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="text-blue-600" size={20} />
                        <span className="text-sm">Credit limit only valid on ReZ</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="text-blue-600" size={20} />
                        <span className="text-sm">BNPL habit formation</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="text-blue-600" size={20} />
                        <span className="text-sm">Interest-free period only for active users</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="text-blue-600" size={20} />
                        <span className="text-sm">Credit score portability - leaving = reset</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exit Barrier */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <AlertTriangle size={24} />
                Exit Barrier: The Credit Trap
              </h3>
              <div className="mt-4 grid md:grid-cols-2 gap-6">
                <div>
                  <div className="font-medium mb-2">If Merchant Leaves:</div>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>• Must repay outstanding loans immediately</li>
                    <li>• Loses ReZ credit history (starts from zero elsewhere)</li>
                    <li>• No access to revenue-based financing</li>
                    <li>• Competitors can't match our data-driven rates</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium mb-2">If User Leaves:</div>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>• Loses BNPL access entirely</li>
                    <li>• Credit limit vanishes</li>
                    <li>• Must clear all pending dues</li>
                    <li>• Other platforms don't know their payment history</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCreditEngine;
