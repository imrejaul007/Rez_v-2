import React, { useState } from 'react';
import {
  Coins, CheckCircle, XCircle, TrendingUp, Users, DollarSign, Search,
  Download, Eye, Edit, Plus, Settings, BarChart3, Award, Shield,
  Filter, Clock, Activity, Target, Package, Star, Zap, AlertTriangle,
  ChevronDown, ChevronUp, RefreshCw, Sparkles
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminCashbackRates() {
  const [activeTab, setActiveTab] = useState('categories');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const [stats] = useState({
    totalCashbackPaid: 45670000,
    activeMerchants: 1234,
    superCashbackStores: 89,
    avgCashbackRate: 8.5,
    monthlyBudget: 15000000,
    budgetUsed: 9800000,
    pendingApplications: 12,
    fraudDetected: 3
  });

  const [categoryRates] = useState([
    {
      id: 1,
      category: 'Food & Beverage',
      icon: '🍔',
      baseCashback: 5,
      superCashback: 15,
      merchants: 456,
      totalPaid: 8900000,
      avgTransaction: 650,
      redemptions: 13692,
      budget: 2500000,
      budgetUsed: 1890000,
      status: 'active'
    },
    {
      id: 2,
      category: 'Fashion',
      icon: '👕',
      baseCashback: 8,
      superCashback: 20,
      merchants: 234,
      totalPaid: 12340000,
      avgTransaction: 2340,
      redemptions: 5273,
      budget: 4000000,
      budgetUsed: 3120000,
      status: 'active'
    },
    {
      id: 3,
      category: 'Electronics',
      icon: '💻',
      baseCashback: 3,
      superCashback: 10,
      merchants: 89,
      totalPaid: 15670000,
      avgTransaction: 8900,
      redemptions: 1760,
      budget: 5000000,
      budgetUsed: 3890000,
      status: 'active'
    },
    {
      id: 4,
      category: 'Health & Wellness',
      icon: '💊',
      baseCashback: 10,
      superCashback: 25,
      merchants: 123,
      totalPaid: 4560000,
      avgTransaction: 1200,
      redemptions: 3800,
      budget: 1500000,
      budgetUsed: 1140000,
      status: 'active'
    },
    {
      id: 5,
      category: 'Beauty & Cosmetics',
      icon: '💄',
      baseCashback: 7,
      superCashback: 18,
      merchants: 156,
      totalPaid: 3450000,
      avgTransaction: 890,
      redemptions: 3876,
      budget: 1200000,
      budgetUsed: 890000,
      status: 'active'
    },
    {
      id: 6,
      category: 'Books & Media',
      icon: '📚',
      baseCashback: 6,
      superCashback: 15,
      merchants: 67,
      totalPaid: 1890000,
      avgTransaction: 450,
      redemptions: 4200,
      budget: 800000,
      budgetUsed: 567000,
      status: 'active'
    }
  ]);

  const [superCashbackApplications] = useState([
    {
      id: 'SC001',
      merchantName: 'Premium Fashion Hub',
      category: 'Fashion',
      currentRate: 8,
      requestedRate: 20,
      revenue: 2340000,
      transactions: 890,
      customerRating: 4.7,
      tier: 'premium',
      submittedAt: '2025-12-25',
      justification: 'Consistent high volume, excellent customer satisfaction, willing to increase marketing budget',
      status: 'pending'
    },
    {
      id: 'SC002',
      merchantName: 'HealthPlus Pharmacy',
      category: 'Health & Wellness',
      currentRate: 10,
      requestedRate: 25,
      revenue: 1890000,
      transactions: 1250,
      customerRating: 4.9,
      tier: 'premium',
      submittedAt: '2025-12-24',
      justification: 'Top-rated merchant, high customer retention, essential services provider',
      status: 'pending'
    },
    {
      id: 'SC003',
      merchantName: 'Gourmet Kitchen',
      category: 'Food & Beverage',
      currentRate: 5,
      requestedRate: 15,
      revenue: 890000,
      transactions: 1567,
      customerRating: 4.5,
      tier: 'standard',
      submittedAt: '2025-12-26',
      justification: 'Growing customer base, planning expansion to 3 new locations',
      status: 'pending'
    }
  ]);

  const [merchantRanking] = useState([
    { rank: 1, merchantName: 'Fashion Forward', cashbackPaid: 890000, rate: 20, transactions: 456, revenue: 4450000 },
    { rank: 2, merchantName: 'Tech Bazaar', cashbackPaid: 780000, rate: 10, transactions: 234, revenue: 7800000 },
    { rank: 3, merchantName: 'Wellness Center', cashbackPaid: 670000, rate: 25, transactions: 567, revenue: 2680000 },
    { rank: 4, merchantName: 'Gourmet Foods', cashbackPaid: 560000, rate: 15, transactions: 789, revenue: 3733333 },
    { rank: 5, merchantName: 'Beauty Boutique', cashbackPaid: 450000, rate: 18, transactions: 345, revenue: 2500000 }
  ]);

  const [fraudCases] = useState([
    {
      id: 1,
      merchantName: 'Suspicious Store',
      issue: 'Fake transactions detected',
      cashbackClaimed: 45000,
      transactionCount: 890,
      detectedAt: '2025-12-27 11:30',
      severity: 'high',
      status: 'blocked'
    },
    {
      id: 2,
      merchantName: 'Round-trip Store',
      issue: 'Buy-return-rebuy pattern',
      cashbackClaimed: 23000,
      transactionCount: 234,
      detectedAt: '2025-12-26 15:45',
      severity: 'medium',
      status: 'investigating'
    },
    {
      id: 3,
      merchantName: 'Inflated Bills',
      issue: 'Transaction amount manipulation',
      cashbackClaimed: 12000,
      transactionCount: 156,
      detectedAt: '2025-12-25 09:20',
      severity: 'medium',
      status: 'warning_issued'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Cashback Rate Management</h1>
          <p className="text-gray-600">Manage base rates, Super Cashback approvals, and payout budgets</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <Coins className="w-8 h-8 text-yellow-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">₹{(stats.totalCashbackPaid / 10000000).toFixed(1)}Cr</p>
            <p className="text-sm text-gray-600">Total Paid</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Users className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.activeMerchants}</p>
            <p className="text-sm text-gray-600">Active Merchants</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Star className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-2xl font-bold text-purple-600">{stats.superCashbackStores}</p>
            <p className="text-sm text-gray-600">Super Cashback</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Target className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.avgCashbackRate}%</p>
            <p className="text-sm text-gray-600">Avg Rate</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Package className="w-8 h-8 text-indigo-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">₹{(stats.monthlyBudget / 10000000).toFixed(1)}Cr</p>
            <p className="text-sm text-gray-600">Monthly Budget</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Activity className="w-8 h-8 text-orange-600 mb-2" />
            <p className="text-2xl font-bold text-orange-600">{((stats.budgetUsed / stats.monthlyBudget) * 100).toFixed(0)}%</p>
            <p className="text-sm text-gray-600">Budget Used</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Clock className="w-8 h-8 text-yellow-600 mb-2" />
            <p className="text-2xl font-bold text-yellow-600">{stats.pendingApplications}</p>
            <p className="text-sm text-gray-600">Pending Apps</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Shield className="w-8 h-8 text-red-600 mb-2" />
            <p className="text-2xl font-bold text-red-600">{stats.fraudDetected}</p>
            <p className="text-sm text-gray-600">Fraud Cases</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('categories')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'categories'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Package className="w-4 h-4" />
                  <span>Category Rates</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'applications'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>Super Cashback Apps</span>
                  <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full text-xs">
                    {stats.pendingApplications}
                  </span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('ranking')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'ranking'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Merchant Ranking</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('fraud')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'fraud'
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Fraud Detection</span>
                </div>
              </button>
            </nav>
          </div>

          {/* Category Rates Tab */}
          {activeTab === 'categories' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-600">Set base and Super Cashback rates by category</p>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Plus className="w-4 h-4" />
                  <span>Add Category</span>
                </button>
              </div>

              <div className="space-y-4">
                {categoryRates.map((cat) => (
                  <div key={cat.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-2xl">{cat.icon}</span>
                            <h3 className="text-lg font-semibold text-gray-900">{cat.category}</h3>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                              {cat.status}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{cat.merchants} merchants</span>
                            <span>•</span>
                            <span>{cat.redemptions.toLocaleString()} redemptions</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                          className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                          {expandedCategory === cat.id ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm text-blue-600 font-medium">Base Cashback Rate</p>
                            <button className="p-1 text-blue-600 hover:bg-blue-100 rounded">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-3xl font-bold text-blue-900">{cat.baseCashback}%</p>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm text-purple-600 font-medium">Super Cashback Rate</p>
                            <button className="p-1 text-purple-600 hover:bg-purple-100 rounded">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-3xl font-bold text-purple-900">{cat.superCashback}%</p>
                        </div>
                      </div>

                      {expandedCategory === cat.id && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="grid grid-cols-4 gap-4 mb-4">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <p className="text-xs text-gray-600 mb-1">Total Paid</p>
                              <p className="text-lg font-bold text-green-600">₹{(cat.totalPaid / 100000).toFixed(1)}L</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <p className="text-xs text-gray-600 mb-1">Avg Transaction</p>
                              <p className="text-lg font-bold text-gray-900">₹{cat.avgTransaction}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <p className="text-xs text-gray-600 mb-1">Budget</p>
                              <p className="text-lg font-bold text-gray-900">₹{(cat.budget / 100000).toFixed(1)}L</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <p className="text-xs text-gray-600 mb-1">Used</p>
                              <p className="text-lg font-bold text-orange-600">{((cat.budgetUsed / cat.budget) * 100).toFixed(0)}%</p>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-orange-600 h-2 rounded-full"
                              style={{ width: `${(cat.budgetUsed / cat.budget) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Super Cashback Applications Tab */}
          {activeTab === 'applications' && (
            <div className="p-6">
              <div className="space-y-4">
                {superCashbackApplications.map((app) => (
                  <div key={app.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{app.merchantName}</h3>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                            {app.status}
                          </span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                            {app.tier}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{app.category}</span>
                          <span>•</span>
                          <span>Submitted {app.submittedAt}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-2">Current Rate</p>
                        <p className="text-3xl font-bold text-gray-900">{app.currentRate}%</p>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="text-sm text-purple-600 mb-2">Requested Rate</p>
                        <p className="text-3xl font-bold text-purple-900">{app.requestedRate}%</p>
                        <p className="text-sm text-purple-600 mt-1">+{app.requestedRate - app.currentRate}% increase</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Revenue</p>
                        <p className="text-sm font-bold text-green-600">₹{app.revenue.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Transactions</p>
                        <p className="text-sm font-bold text-gray-900">{app.transactions}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Rating</p>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                          <p className="text-sm font-bold text-gray-900">{app.customerRating}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <p className="text-sm font-medium text-blue-900 mb-2">Justification:</p>
                      <p className="text-sm text-blue-800">{app.justification}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Approve</span>
                      </button>
                      <button className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center justify-center space-x-2">
                        <Edit className="w-4 h-4" />
                        <span>Negotiate Rate</span>
                      </button>
                      <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center space-x-2">
                        <XCircle className="w-4 h-4" />
                        <span>Reject</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Merchant Ranking Tab */}
          {activeTab === 'ranking' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Merchants by Cashback Paid</h3>
              <div className="space-y-3">
                {merchantRanking.map((merchant) => (
                  <div key={merchant.rank} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{merchant.rank}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{merchant.merchantName}</h4>
                          <p className="text-sm text-gray-600">{merchant.rate}% cashback rate</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Cashback Paid</p>
                          <p className="text-sm font-bold text-green-600">₹{merchant.cashbackPaid.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Transactions</p>
                          <p className="text-sm font-bold text-gray-900">{merchant.transactions}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Revenue</p>
                          <p className="text-sm font-bold text-gray-900">₹{(merchant.revenue / 100000).toFixed(1)}L</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fraud Detection Tab */}
          {activeTab === 'fraud' && (
            <div className="p-6">
              <div className="mb-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-900">
                        {fraudCases.length} fraud cases detected in cashback claims
                      </p>
                      <p className="text-xs text-red-700 mt-1">
                        Advanced AI monitoring fake transactions, round-trip purchases, and amount manipulation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {fraudCases.map((fraud) => (
                  <div key={fraud.id} className="border-l-4 border-red-500 bg-red-50 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{fraud.merchantName}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            fraud.severity === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {fraud.severity} severity
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                            {fraud.status.replace(/_/g, ' ')}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="font-medium">Issue:</span> {fraud.issue}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="font-medium">Cashback Claimed:</span> ₹{fraud.cashbackClaimed.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="font-medium">Suspicious Transactions:</span> {fraud.transactionCount}
                        </p>
                        <p className="text-xs text-gray-600">Detected at {fraud.detectedAt}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                        Block Merchant
                      </button>
                      <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm">
                        Suspend Cashback
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                        Investigate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
