import React, { useState } from 'react';
import {
  Gift, CheckCircle, XCircle, AlertTriangle, Eye, Filter, Search,
  Download, TrendingUp, Users, DollarSign, Package, Tag, Shield,
  BarChart3, Settings, Plus, Edit, Trash2, Clock, Activity,
  ChevronDown, ChevronUp, Award, Target, Zap, RefreshCw
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminBOGOManagement() {
  const [activeTab, setActiveTab] = useState('pending');
  const [expandedDeal, setExpandedDeal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [stats] = useState({
    totalBOGO: 892,
    pendingApproval: 15,
    active: 456,
    fraudBlocked: 8,
    totalRedemptions: 67890,
    revenue: 12340000,
    avgSavings: 745,
    popularCombos: 234
  });

  const [pendingDeals] = useState([
    {
      id: 'BOGO001',
      merchantId: 'M001',
      merchantName: 'StyleMart Fashion',
      dealTitle: 'Buy 1 Shirt Get 1 Trouser Free',
      category: 'Fashion',
      bogoType: 'product_pair',
      products: {
        primary: {
          name: 'Premium Cotton Shirt',
          category: 'Shirts',
          price: 1499,
          sku: 'SH-001'
        },
        secondary: {
          name: 'Formal Trouser',
          category: 'Trousers',
          price: 1299,
          sku: 'TR-001'
        }
      },
      dealValue: 1299,
      validFrom: '2025-12-28',
      validUntil: '2026-01-15',
      maxRedemptions: 500,
      perUserLimit: 2,
      budget: 325000,
      eligibility: 'All users',
      terms: 'Lower value item free. Cannot be combined with other offers. Subject to stock availability.',
      submittedAt: '2025-12-27 10:30',
      merchantTier: 'premium',
      previousBOGO: 18,
      fraudRisk: 0.12,
      estimatedReach: 35000,
      status: 'pending'
    },
    {
      id: 'BOGO002',
      merchantId: 'M002',
      merchantName: 'Pizza Paradise',
      dealTitle: 'Buy 1 Large Pizza Get 1 Medium Free',
      category: 'Food & Beverage',
      bogoType: 'tiered_product',
      products: {
        primary: {
          name: 'Large Pizza (Any Flavor)',
          category: 'Pizza',
          price: 599,
          sku: 'PZ-L'
        },
        secondary: {
          name: 'Medium Pizza (Selected Flavors)',
          category: 'Pizza',
          price: 399,
          sku: 'PZ-M'
        }
      },
      dealValue: 399,
      validFrom: '2025-12-28',
      validUntil: '2026-01-05',
      maxRedemptions: 1000,
      perUserLimit: 3,
      budget: 199500,
      eligibility: 'All users',
      terms: 'Medium pizza limited to Margherita, Veggie Supreme, or Pepperoni. Dine-in and takeaway only.',
      submittedAt: '2025-12-27 09:15',
      merchantTier: 'standard',
      previousBOGO: 6,
      fraudRisk: 0.08,
      estimatedReach: 25000,
      status: 'pending'
    },
    {
      id: 'BOGO003',
      merchantId: 'M003',
      merchantName: 'Beauty Boutique',
      dealTitle: 'Buy Any 2 Products Get 1 Free',
      category: 'Beauty & Cosmetics',
      bogoType: 'quantity_based',
      products: {
        primary: {
          name: 'Any Beauty Product',
          category: 'All',
          price: 'Variable',
          sku: 'ALL'
        },
        secondary: {
          name: 'Lowest Price Item Free',
          category: 'All',
          price: 'Variable',
          sku: 'ALL'
        }
      },
      dealValue: 0,
      validFrom: '2025-12-29',
      validUntil: '2026-01-12',
      maxRedemptions: 300,
      perUserLimit: 1,
      budget: 150000,
      eligibility: 'ReZ members only',
      terms: 'Lowest value item free. Excludes sale items. Minimum purchase ₹1500.',
      submittedAt: '2025-12-26 16:45',
      merchantTier: 'premium',
      previousBOGO: 12,
      fraudRisk: 0.25,
      estimatedReach: 15000,
      status: 'pending',
      flags: ['Higher fraud risk - multiple claims detection enabled']
    }
  ]);

  const [activeDeals] = useState([
    {
      id: 'BOGO010',
      merchantName: 'Coffee Corner',
      dealTitle: 'Buy 1 Coffee Get 1 Free',
      category: 'Food & Beverage',
      redemptions: 234,
      maxRedemptions: 500,
      revenue: 89000,
      fraudAttempts: 3,
      topCombo: 'Cappuccino + Latte',
      avgOrderValue: 380,
      ctr: 24.5,
      approvedBy: 'Admin Sarah',
      expiresIn: '12 days',
      performance: 'excellent'
    },
    {
      id: 'BOGO011',
      merchantName: 'Book Haven',
      dealTitle: 'Buy 2 Books Get 1 Free',
      category: 'Books & Media',
      redemptions: 89,
      maxRedemptions: 200,
      revenue: 45000,
      fraudAttempts: 0,
      topCombo: 'Fiction + Mystery',
      avgOrderValue: 505,
      ctr: 18.2,
      approvedBy: 'Admin Mike',
      expiresIn: '8 days',
      performance: 'good'
    },
    {
      id: 'BOGO012',
      merchantName: 'Shoe Factory',
      dealTitle: 'Buy 1 Pair Get 50% Off 2nd',
      category: 'Fashion',
      redemptions: 45,
      maxRedemptions: 150,
      revenue: 78000,
      fraudAttempts: 1,
      topCombo: 'Sneakers + Formal Shoes',
      avgOrderValue: 1733,
      ctr: 15.8,
      approvedBy: 'Admin Sarah',
      expiresIn: '5 days',
      performance: 'average'
    }
  ]);

  const [platformLimits] = useState({
    maxValuePerBOGO: 3000,
    maxRedemptionsPerUser: {
      daily: 3,
      weekly: 10,
      monthly: 30
    },
    minTimeBetweenClaims: 60,
    fraudThresholds: {
      sameItemRepeated: 3,
      rapidClaims: 5,
      multipleDevices: 3
    }
  });

  const [fraudCases] = useState([
    {
      id: 1,
      userId: 'U12345',
      userName: 'Suspicious User',
      bogoId: 'BOGO015',
      merchantName: 'Fashion Hub',
      fraudType: 'same_item_repeated',
      attempts: 8,
      detectedAt: '2025-12-27 14:30',
      status: 'blocked',
      severity: 'high'
    },
    {
      id: 2,
      userId: 'U23456',
      userName: 'Rapid Claimer',
      bogoId: 'BOGO012',
      merchantName: 'Coffee Corner',
      fraudType: 'rapid_multiple_claims',
      attempts: 12,
      detectedAt: '2025-12-27 12:15',
      status: 'investigating',
      severity: 'medium'
    },
    {
      id: 3,
      userId: 'U34567',
      userName: 'Multi Device User',
      bogoId: 'BOGO018',
      merchantName: 'Book Haven',
      fraudType: 'multiple_device_claims',
      attempts: 6,
      detectedAt: '2025-12-27 09:45',
      status: 'warning_issued',
      severity: 'medium'
    }
  ]);

  const [popularCombinations] = useState([
    {
      id: 1,
      combo: 'Shirt + Trouser',
      category: 'Fashion',
      redemptions: 1234,
      merchants: 23,
      avgValue: 1299,
      revenue: 1602066
    },
    {
      id: 2,
      combo: 'Coffee + Pastry',
      category: 'Food & Beverage',
      redemptions: 2345,
      merchants: 45,
      avgValue: 250,
      revenue: 586250
    },
    {
      id: 3,
      combo: 'Pizza + Sides',
      category: 'Food & Beverage',
      redemptions: 1890,
      merchants: 12,
      avgValue: 450,
      revenue: 850500
    },
    {
      id: 4,
      combo: 'Shoes + Accessories',
      category: 'Fashion',
      redemptions: 567,
      merchants: 8,
      avgValue: 1800,
      revenue: 1020600
    },
    {
      id: 5,
      combo: 'Books (Any 2)',
      category: 'Books & Media',
      redemptions: 890,
      merchants: 15,
      avgValue: 600,
      revenue: 534000
    }
  ]);

  const getPerformanceColor = (performance) => {
    const colors = {
      excellent: 'text-green-600 bg-green-100',
      good: 'text-blue-600 bg-blue-100',
      average: 'text-yellow-600 bg-yellow-100',
      poor: 'text-red-600 bg-red-100'
    };
    return colors[performance] || 'text-gray-600 bg-gray-100';
  };

  const getSeverityColor = (severity) => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    };
    return colors[severity] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">BOGO Deals Management</h1>
          <p className="text-gray-600">Manage Buy One Get One offers, product pairings, and fraud prevention</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <Gift className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.totalBOGO}</p>
            <p className="text-sm text-gray-600">Total BOGO</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Clock className="w-8 h-8 text-yellow-600 mb-2" />
            <p className="text-2xl font-bold text-yellow-600">{stats.pendingApproval}</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold text-green-600">{stats.active}</p>
            <p className="text-sm text-gray-600">Active</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Shield className="w-8 h-8 text-red-600 mb-2" />
            <p className="text-2xl font-bold text-red-600">{stats.fraudBlocked}</p>
            <p className="text-sm text-gray-600">Fraud Blocked</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.totalRedemptions.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Redemptions</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <DollarSign className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold text-green-600">₹{(stats.revenue / 100000).toFixed(1)}L</p>
            <p className="text-sm text-gray-600">Revenue</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Tag className="w-8 h-8 text-orange-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">₹{stats.avgSavings}</p>
            <p className="text-sm text-gray-600">Avg Savings</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Award className="w-8 h-8 text-indigo-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.popularCombos}</p>
            <p className="text-sm text-gray-600">Popular Combos</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('pending')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'pending'
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Pending Approval</span>
                  <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    {stats.pendingApproval}
                  </span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('active')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'active'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Gift className="w-4 h-4" />
                  <span>Active BOGO</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('limits')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'limits'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>Platform Limits</span>
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
              <button
                onClick={() => setActiveTab('combos')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'combos'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Package className="w-4 h-4" />
                  <span>Popular Combos</span>
                </div>
              </button>
            </nav>
          </div>

          {/* Pending Approval Tab */}
          {activeTab === 'pending' && (
            <div className="p-6">
              <div className="space-y-4">
                {pendingDeals.map((deal) => (
                  <div key={deal.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{deal.dealTitle}</h3>
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                              Pending
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              deal.fraudRisk < 0.2 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                            }`}>
                              Fraud Risk: {(deal.fraudRisk * 100).toFixed(0)}%
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="font-medium">{deal.merchantName}</span>
                            <span>•</span>
                            <span>{deal.category}</span>
                            <span>•</span>
                            <span>{deal.bogoType.replace(/_/g, ' ')}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setExpandedDeal(expandedDeal === deal.id ? null : deal.id)}
                          className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                          {expandedDeal === deal.id ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                      </div>

                      {/* Product Pairing */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-xs text-blue-600 font-medium mb-2">Primary Product (Buy)</p>
                          <h4 className="font-semibold text-gray-900 mb-1">{deal.products.primary.name}</h4>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{deal.products.primary.category}</span>
                            <span className="text-lg font-bold text-gray-900">₹{deal.products.primary.price}</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">SKU: {deal.products.primary.sku}</p>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="text-xs text-green-600 font-medium mb-2">Secondary Product (Get)</p>
                          <h4 className="font-semibold text-gray-900 mb-1">{deal.products.secondary.name}</h4>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{deal.products.secondary.category}</span>
                            <span className="text-lg font-bold text-green-600">
                              {typeof deal.products.secondary.price === 'number'
                                ? `₹${deal.products.secondary.price}`
                                : deal.products.secondary.price}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">SKU: {deal.products.secondary.sku}</p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-5 gap-4 mb-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Deal Value</p>
                          <p className="text-lg font-bold text-green-600">
                            {deal.dealValue > 0 ? `₹${deal.dealValue}` : 'Variable'}
                          </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Budget</p>
                          <p className="text-lg font-bold text-gray-900">₹{deal.budget.toLocaleString()}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Max Uses</p>
                          <p className="text-lg font-bold text-gray-900">{deal.maxRedemptions}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Per User</p>
                          <p className="text-lg font-bold text-gray-900">{deal.perUserLimit}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Est. Reach</p>
                          <p className="text-lg font-bold text-gray-900">{deal.estimatedReach.toLocaleString()}</p>
                        </div>
                      </div>

                      {/* Flags */}
                      {deal.flags && deal.flags.length > 0 && (
                        <div className="mb-4">
                          <div className="flex items-start space-x-2 text-sm text-orange-800 bg-orange-50 rounded-lg p-3">
                            <AlertTriangle className="w-4 h-4 mt-0.5" />
                            <div>
                              <p className="font-medium">Attention:</p>
                              <ul className="list-disc list-inside mt-1">
                                {deal.flags.map((flag, idx) => (
                                  <li key={idx}>{flag}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Expanded Details */}
                      {expandedDeal === deal.id && (
                        <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Deal Configuration</h4>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Valid Period:</span>
                                <span className="text-sm font-medium text-gray-900">
                                  {deal.validFrom} to {deal.validUntil}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Eligibility:</span>
                                <span className="text-sm font-medium text-gray-900">{deal.eligibility}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Merchant Tier:</span>
                                <span className="text-sm font-medium text-gray-900">{deal.merchantTier}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Previous BOGO Deals:</span>
                                <span className="text-sm font-medium text-gray-900">{deal.previousBOGO}</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Terms & Conditions</h4>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <p className="text-sm text-gray-900">{deal.terms}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3 mt-4">
                        <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Approve</span>
                        </button>
                        <button className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center justify-center space-x-2">
                          <Edit className="w-4 h-4" />
                          <span>Request Changes</span>
                        </button>
                        <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center space-x-2">
                          <XCircle className="w-4 h-4" />
                          <span>Reject</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Active BOGO Tab */}
          {activeTab === 'active' && (
            <div className="p-6">
              <div className="space-y-4">
                {activeDeals.map((deal) => (
                  <div key={deal.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{deal.dealTitle}</h3>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            Active
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPerformanceColor(deal.performance)}`}>
                            {deal.performance}
                          </span>
                          {deal.fraudAttempts > 0 && (
                            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                              {deal.fraudAttempts} fraud attempts
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="font-medium">{deal.merchantName}</span>
                          <span>•</span>
                          <span>{deal.category}</span>
                          <span>•</span>
                          <span>Expires in {deal.expiresIn}</span>
                        </div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-6 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Redemptions</p>
                        <p className="text-sm font-bold text-gray-900">
                          {deal.redemptions}/{deal.maxRedemptions}
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                          <div
                            className="bg-green-600 h-1.5 rounded-full"
                            style={{ width: `${(deal.redemptions / deal.maxRedemptions) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Revenue</p>
                        <p className="text-sm font-bold text-green-600">₹{deal.revenue.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">CTR</p>
                        <p className="text-sm font-bold text-blue-600">{deal.ctr}%</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Avg Order</p>
                        <p className="text-sm font-bold text-gray-900">₹{deal.avgOrderValue}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Top Combo</p>
                        <p className="text-sm font-bold text-gray-900">{deal.topCombo}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Fraud</p>
                        <p className="text-sm font-bold text-red-600">{deal.fraudAttempts}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>View Analytics</span>
                      </button>
                      <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 flex items-center space-x-2">
                        <Edit className="w-4 h-4" />
                        <span>Edit Limits</span>
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center space-x-2">
                        <XCircle className="w-4 h-4" />
                        <span>Deactivate</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Platform Limits Tab */}
          {activeTab === 'limits' && (
            <div className="p-6">
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Maximum BOGO Value</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-4xl font-bold text-blue-900">₹{platformLimits.maxValuePerBOGO.toLocaleString()}</p>
                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-blue-700 mt-2">Maximum value of free item per BOGO deal</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Redemption Limits Per User</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">Daily Limit</p>
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold text-gray-900">{platformLimits.maxRedemptionsPerUser.daily}</p>
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">Weekly Limit</p>
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold text-gray-900">{platformLimits.maxRedemptionsPerUser.weekly}</p>
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">Monthly Limit</p>
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold text-gray-900">{platformLimits.maxRedemptionsPerUser.monthly}</p>
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Fraud Detection Thresholds</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-gray-900">Same Item Claimed Repeatedly</p>
                        <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Block after</span>
                        <span className="text-2xl font-bold text-red-600">
                          {platformLimits.fraudThresholds.sameItemRepeated} attempts
                        </span>
                      </div>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-gray-900">Rapid Multiple Claims</p>
                        <button className="p-2 text-orange-600 hover:bg-orange-100 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Flag after</span>
                        <span className="text-2xl font-bold text-orange-600">
                          {platformLimits.fraudThresholds.rapidClaims} claims/hour
                        </span>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-gray-900">Multiple Device Claims</p>
                        <button className="p-2 text-yellow-600 hover:bg-yellow-100 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Monitor after</span>
                        <span className="text-2xl font-bold text-yellow-600">
                          {platformLimits.fraudThresholds.multipleDevices} devices
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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
                        {fraudCases.length} fraud cases detected in BOGO deals
                      </p>
                      <p className="text-xs text-red-700 mt-1">
                        AI-powered fraud detection monitoring same item claims, rapid redemptions, and device anomalies
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {fraudCases.map((fraud) => (
                  <div key={fraud.id} className={`border-l-4 rounded-lg p-6 ${
                    fraud.severity === 'high' ? 'border-red-500 bg-red-50' : 'border-yellow-500 bg-yellow-50'
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{fraud.userName}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(fraud.severity)}`}>
                            {fraud.severity} severity
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                            {fraud.status.replace(/_/g, ' ')}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="font-medium">Fraud Type:</span> {fraud.fraudType.replace(/_/g, ' ')}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="font-medium">BOGO:</span> {fraud.bogoId} - {fraud.merchantName}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="font-medium">Attempts:</span> {fraud.attempts} fraudulent claims
                        </p>
                        <p className="text-xs text-gray-600">Detected at {fraud.detectedAt}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                        Permanent Ban
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                        View User Profile
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                        False Positive
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Popular Combos Tab */}
          {activeTab === 'combos' && (
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Most Popular BOGO Combinations</h3>
                <p className="text-sm text-gray-600">Top performing product pairings across all merchants</p>
              </div>

              <div className="space-y-4">
                {popularCombinations.map((combo, idx) => (
                  <div key={combo.id} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{idx + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{combo.combo}</h4>
                          <p className="text-sm text-gray-600">{combo.category}</p>
                        </div>
                      </div>
                      <Award className="w-8 h-8 text-yellow-500" />
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Redemptions</p>
                        <p className="text-lg font-bold text-gray-900">{combo.redemptions.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Merchants</p>
                        <p className="text-lg font-bold text-blue-600">{combo.merchants}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Avg Value</p>
                        <p className="text-lg font-bold text-gray-900">₹{combo.avgValue}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Revenue</p>
                        <p className="text-lg font-bold text-green-600">₹{(combo.revenue / 100000).toFixed(1)}L</p>
                      </div>
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
