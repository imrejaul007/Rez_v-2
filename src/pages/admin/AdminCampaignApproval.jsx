import React, { useState } from 'react';
import {
  CheckCircle, XCircle, AlertTriangle, Clock, Eye,
  TrendingUp, DollarSign, Users, Target, Calendar,
  FileText, Shield, Scale, Award, Flag, Edit,
  MessageSquare, ChevronDown, ChevronUp, Search,
  Filter, Download, BarChart3, Activity, RefreshCw
} from 'lucide-react';
import AdminNav from '../../components/AdminNav';

const AdminCampaignApproval = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [expandedCampaign, setExpandedCampaign] = useState(null);
  const [filterMerchant, setFilterMerchant] = useState('all');

  // Mock campaign approval data
  const pendingCampaigns = [
    {
      id: 'CAMP001',
      merchantId: 'MERCH001',
      merchantName: 'Fashion Forward',
      merchantTier: 'premium',
      campaignName: 'Winter Sale 2024',
      campaignType: 'discount',
      channel: 'in-store',
      submittedAt: '2024-01-25 14:30',
      status: 'pending',
      budget: {
        total: 100000,
        discountAmount: 75000,
        marketingSpend: 25000
      },
      targeting: {
        audience: 'All users',
        minPurchase: 2000,
        categories: ['Fashion', 'Accessories']
      },
      campaign: {
        type: '30% off on all winter wear',
        duration: '15 days',
        startDate: '2024-02-01',
        endDate: '2024-02-15',
        terms: 'Valid on purchases above ₹2000. Not combinable with other offers.'
      },
      compliance: {
        hasLegalReview: true,
        hasBrandSafety: true,
        hasContentApproval: false,
        hasBudgetVerification: true
      },
      riskLevel: 'low',
      previousCampaigns: 12,
      approvalRate: 95,
      estimatedReach: 50000,
      estimatedParticipants: 5000
    },
    {
      id: 'CAMP002',
      merchantId: 'MERCH002',
      merchantName: 'Tech Hub Electronics',
      merchantTier: 'standard',
      campaignName: 'Cashback Bonanza',
      campaignType: 'cashback',
      channel: 'online',
      submittedAt: '2024-01-25 16:45',
      status: 'pending',
      budget: {
        total: 200000,
        cashbackPool: 150000,
        marketingSpend: 50000
      },
      targeting: {
        audience: 'Premium members only',
        minPurchase: 5000,
        categories: ['Electronics', 'Gadgets']
      },
      campaign: {
        type: '20% cashback in ReZ Coins',
        duration: '30 days',
        startDate: '2024-02-05',
        endDate: '2024-03-05',
        terms: 'Maximum cashback ₹2000 per user. Valid on first purchase only.'
      },
      compliance: {
        hasLegalReview: true,
        hasBrandSafety: true,
        hasContentApproval: true,
        hasBudgetVerification: false
      },
      riskLevel: 'medium',
      previousCampaigns: 5,
      approvalRate: 80,
      estimatedReach: 25000,
      estimatedParticipants: 2500,
      flags: ['Budget verification needed', 'High cashback percentage']
    },
    {
      id: 'CAMP003',
      merchantId: 'MERCH003',
      merchantName: 'Luxury Lifestyle',
      merchantTier: 'premium',
      campaignName: 'Privé Member Exclusive',
      campaignType: 'prive_only',
      channel: 'both',
      submittedAt: '2024-01-24 10:20',
      status: 'pending',
      budget: {
        total: 500000,
        discountAmount: 300000,
        marketingSpend: 200000
      },
      targeting: {
        audience: 'Privé members only',
        minPurchase: 10000,
        categories: ['Luxury Fashion', 'Accessories', 'Jewelry']
      },
      campaign: {
        type: 'Buy 1 Get 1 + 5000 Privé Coins',
        duration: '7 days',
        startDate: '2024-02-10',
        endDate: '2024-02-17',
        terms: 'Exclusive for Privé members. Limited to 2 redemptions per member.'
      },
      compliance: {
        hasLegalReview: true,
        hasBrandSafety: true,
        hasContentApproval: true,
        hasBudgetVerification: true
      },
      riskLevel: 'low',
      previousCampaigns: 20,
      approvalRate: 100,
      estimatedReach: 5000,
      estimatedParticipants: 500
    },
    {
      id: 'CAMP004',
      merchantId: 'MERCH004',
      merchantName: 'Quick Eats',
      merchantTier: 'standard',
      campaignName: 'Refer & Earn Double',
      campaignType: 'referral',
      channel: 'online',
      submittedAt: '2024-01-25 09:15',
      status: 'pending',
      budget: {
        total: 75000,
        referralBonus: 50000,
        marketingSpend: 25000
      },
      targeting: {
        audience: 'All users',
        minPurchase: 500,
        categories: ['Food', 'Beverages']
      },
      campaign: {
        type: 'Refer 3 friends, get ₹500 + 1000 ReZ Coins',
        duration: '45 days',
        startDate: '2024-02-01',
        endDate: '2024-03-15',
        terms: 'Friends must make first purchase of ₹500+. Unlimited referrals.'
      },
      compliance: {
        hasLegalReview: false,
        hasBrandSafety: true,
        hasContentApproval: true,
        hasBudgetVerification: true
      },
      riskLevel: 'high',
      previousCampaigns: 2,
      approvalRate: 50,
      estimatedReach: 15000,
      estimatedParticipants: 3000,
      flags: ['Legal review pending', 'Unlimited referrals may exceed budget', 'New merchant']
    }
  ];

  const approvedCampaigns = [
    {
      id: 'CAMP005',
      merchantName: 'Style Studio',
      campaignName: 'New Year Sale',
      campaignType: 'discount',
      status: 'active',
      approvedBy: 'Admin Sarah',
      approvedAt: '2024-01-20 11:30',
      budget: 150000,
      spent: 89000,
      participants: 1200,
      conversions: 340,
      revenue: 450000,
      roi: 3.0,
      issues: 0
    },
    {
      id: 'CAMP006',
      merchantName: 'Gourmet Foods',
      campaignName: 'Weekend Cashback',
      campaignType: 'cashback',
      status: 'active',
      approvedBy: 'Admin Mike',
      approvedAt: '2024-01-22 15:45',
      budget: 80000,
      spent: 45000,
      participants: 890,
      conversions: 678,
      revenue: 320000,
      roi: 4.0,
      issues: 0
    },
    {
      id: 'CAMP007',
      merchantName: 'Fitness Zone',
      campaignName: 'New Member Bonus',
      campaignType: 'signup',
      status: 'completed',
      approvedBy: 'Admin Sarah',
      approvedAt: '2024-01-10 09:20',
      budget: 50000,
      spent: 50000,
      participants: 450,
      conversions: 230,
      revenue: 280000,
      roi: 5.6,
      issues: 0
    },
    {
      id: 'CAMP008',
      merchantName: 'Beauty Boutique',
      campaignName: 'Flash Sale Friday',
      campaignType: 'flash_sale',
      status: 'paused',
      approvedBy: 'Admin Mike',
      approvedAt: '2024-01-23 14:10',
      budget: 120000,
      spent: 78000,
      participants: 670,
      conversions: 234,
      revenue: 190000,
      roi: 2.4,
      issues: 2,
      issueDetails: ['Budget overrun warning', 'Lower than expected conversion']
    }
  ];

  const rejectedCampaigns = [
    {
      id: 'CAMP009',
      merchantName: 'Discount Deals',
      campaignName: '90% Off Everything',
      campaignType: 'discount',
      status: 'rejected',
      rejectedBy: 'Admin Sarah',
      rejectedAt: '2024-01-24 16:30',
      rejectionReason: 'Unrealistic discount percentage may indicate fraudulent activity',
      category: 'compliance_violation'
    },
    {
      id: 'CAMP010',
      merchantName: 'Quick Loans',
      campaignName: 'Instant Cash Rewards',
      campaignType: 'cashback',
      status: 'rejected',
      rejectedBy: 'Admin Mike',
      rejectedAt: '2024-01-23 11:20',
      rejectionReason: 'Violates financial services marketing guidelines',
      category: 'legal_compliance'
    },
    {
      id: 'CAMP011',
      merchantName: 'Generic Store',
      campaignName: 'Free Money Giveaway',
      campaignType: 'giveaway',
      status: 'rejected',
      rejectedBy: 'Admin Sarah',
      rejectedAt: '2024-01-22 13:45',
      rejectionReason: 'Misleading claims and insufficient budget verification',
      category: 'misleading_content'
    }
  ];

  const approvalStats = {
    pending: pendingCampaigns.length,
    approved: approvedCampaigns.length,
    rejected: rejectedCampaigns.length,
    avgApprovalTime: '4.2 hours',
    approvalRate: '78%',
    activeMonitoring: approvedCampaigns.filter(c => c.status === 'active').length
  };

  const getRiskColor = (level) => {
    const colors = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-red-100 text-red-800'
    };
    return colors[level] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      active: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      paused: 'bg-orange-100 text-orange-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getTierColor = (tier) => {
    const colors = {
      premium: 'bg-purple-100 text-purple-800',
      standard: 'bg-blue-100 text-blue-800'
    };
    return colors[tier] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Campaign Approval Management</h1>
          <p className="text-gray-600">Review and approve merchant campaign submissions</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{approvalStats.pending}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Approved</p>
                <p className="text-2xl font-bold text-green-600">{approvalStats.approved}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Rejected</p>
                <p className="text-2xl font-bold text-red-600">{approvalStats.rejected}</p>
              </div>
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active</p>
                <p className="text-2xl font-bold text-blue-600">{approvalStats.activeMonitoring}</p>
              </div>
              <Activity className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg Time</p>
                <p className="text-lg font-bold text-gray-900">{approvalStats.avgApprovalTime}</p>
              </div>
              <Clock className="w-8 h-8 text-gray-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Approval Rate</p>
                <p className="text-lg font-bold text-gray-900">{approvalStats.approvalRate}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
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
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Pending Approval</span>
                  <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    {approvalStats.pending}
                  </span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('approved')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'approved'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Approved Campaigns</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('rejected')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'rejected'
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <XCircle className="w-4 h-4" />
                  <span>Rejected</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('audit')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'audit'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Audit Trail</span>
                </div>
              </button>
            </nav>
          </div>

          {/* Pending Approval Tab */}
          {activeTab === 'pending' && (
            <div className="p-6">
              {/* Filter Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search campaigns..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={filterMerchant}
                    onChange={(e) => setFilterMerchant(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Merchants</option>
                    <option value="premium">Premium Only</option>
                    <option value="standard">Standard Only</option>
                  </select>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
              </div>

              {/* Pending Campaigns List */}
              <div className="space-y-4">
                {pendingCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{campaign.campaignName}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTierColor(campaign.merchantTier)}`}>
                              {campaign.merchantTier}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(campaign.riskLevel)}`}>
                              {campaign.riskLevel} risk
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="font-medium">{campaign.merchantName}</span>
                            <span>•</span>
                            <span>{campaign.campaignType}</span>
                            <span>•</span>
                            <span>Submitted {campaign.submittedAt}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setExpandedCampaign(expandedCampaign === campaign.id ? null : campaign.id)}
                          className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                          {expandedCampaign === campaign.id ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-4 gap-4 mb-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Budget</p>
                          <p className="text-lg font-bold text-gray-900">₹{campaign.budget.total.toLocaleString()}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Est. Reach</p>
                          <p className="text-lg font-bold text-gray-900">{campaign.estimatedReach.toLocaleString()}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Past Campaigns</p>
                          <p className="text-lg font-bold text-gray-900">{campaign.previousCampaigns}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Approval Rate</p>
                          <p className="text-lg font-bold text-green-600">{campaign.approvalRate}%</p>
                        </div>
                      </div>

                      {/* Compliance Checklist */}
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Compliance Status</p>
                        <div className="grid grid-cols-2 gap-2">
                          <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                            campaign.compliance.hasLegalReview ? 'bg-green-50' : 'bg-red-50'
                          }`}>
                            {campaign.compliance.hasLegalReview ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )}
                            <span className={`text-sm ${
                              campaign.compliance.hasLegalReview ? 'text-green-800' : 'text-red-800'
                            }`}>
                              Legal Review
                            </span>
                          </div>
                          <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                            campaign.compliance.hasBrandSafety ? 'bg-green-50' : 'bg-red-50'
                          }`}>
                            {campaign.compliance.hasBrandSafety ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )}
                            <span className={`text-sm ${
                              campaign.compliance.hasBrandSafety ? 'text-green-800' : 'text-red-800'
                            }`}>
                              Brand Safety
                            </span>
                          </div>
                          <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                            campaign.compliance.hasContentApproval ? 'bg-green-50' : 'bg-red-50'
                          }`}>
                            {campaign.compliance.hasContentApproval ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )}
                            <span className={`text-sm ${
                              campaign.compliance.hasContentApproval ? 'text-green-800' : 'text-red-800'
                            }`}>
                              Content Review
                            </span>
                          </div>
                          <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                            campaign.compliance.hasBudgetVerification ? 'bg-green-50' : 'bg-red-50'
                          }`}>
                            {campaign.compliance.hasBudgetVerification ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )}
                            <span className={`text-sm ${
                              campaign.compliance.hasBudgetVerification ? 'text-green-800' : 'text-red-800'
                            }`}>
                              Budget Verified
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Flags */}
                      {campaign.flags && campaign.flags.length > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center space-x-2 text-sm text-orange-800 bg-orange-50 rounded-lg p-3">
                            <AlertTriangle className="w-4 h-4" />
                            <div>
                              <p className="font-medium">Flagged Issues:</p>
                              <ul className="list-disc list-inside mt-1">
                                {campaign.flags.map((flag, idx) => (
                                  <li key={idx}>{flag}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Expanded Details */}
                      {expandedCampaign === campaign.id && (
                        <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Campaign Details</h4>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Type:</span>
                                <span className="text-sm font-medium text-gray-900">{campaign.campaign.type}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Duration:</span>
                                <span className="text-sm font-medium text-gray-900">{campaign.campaign.duration}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Period:</span>
                                <span className="text-sm font-medium text-gray-900">
                                  {campaign.campaign.startDate} to {campaign.campaign.endDate}
                                </span>
                              </div>
                              <div className="pt-2 border-t border-gray-200">
                                <span className="text-sm text-gray-600">Terms:</span>
                                <p className="text-sm text-gray-900 mt-1">{campaign.campaign.terms}</p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Budget Breakdown</h4>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                              {Object.entries(campaign.budget).map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span className="text-sm text-gray-600">
                                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                                  </span>
                                  <span className="text-sm font-medium text-gray-900">₹{value.toLocaleString()}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Targeting</h4>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Audience:</span>
                                <span className="text-sm font-medium text-gray-900">{campaign.targeting.audience}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Min Purchase:</span>
                                <span className="text-sm font-medium text-gray-900">₹{campaign.targeting.minPurchase}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Categories:</span>
                                <span className="text-sm font-medium text-gray-900">
                                  {campaign.targeting.categories.join(', ')}
                                </span>
                              </div>
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
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span>Full Review</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Approved Campaigns Tab */}
          {activeTab === 'approved' && (
            <div className="p-6">
              <div className="space-y-4">
                {approvedCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{campaign.campaignName}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                            {campaign.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="font-medium">{campaign.merchantName}</span>
                          <span>•</span>
                          <span>Approved by {campaign.approvedBy}</span>
                          <span>•</span>
                          <span>{campaign.approvedAt}</span>
                        </div>
                      </div>
                      {campaign.issues > 0 && (
                        <div className="flex items-center space-x-2 px-3 py-1 bg-red-50 text-red-700 rounded-lg">
                          <AlertTriangle className="w-4 h-4" />
                          <span className="text-sm font-medium">{campaign.issues} Issues</span>
                        </div>
                      )}
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-5 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Budget</p>
                        <p className="text-sm font-bold text-gray-900">₹{campaign.budget.toLocaleString()}</p>
                        <p className="text-xs text-gray-600">₹{campaign.spent.toLocaleString()} spent</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Participants</p>
                        <p className="text-sm font-bold text-gray-900">{campaign.participants}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Conversions</p>
                        <p className="text-sm font-bold text-gray-900">{campaign.conversions}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Revenue</p>
                        <p className="text-sm font-bold text-green-600">₹{campaign.revenue.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">ROI</p>
                        <p className="text-sm font-bold text-purple-600">{campaign.roi}x</p>
                      </div>
                    </div>

                    {/* Issue Details */}
                    {campaign.issueDetails && (
                      <div className="mb-4 p-3 bg-red-50 rounded-lg">
                        <p className="text-sm font-medium text-red-800 mb-2">Active Issues:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {campaign.issueDetails.map((issue, idx) => (
                            <li key={idx} className="text-sm text-red-700">{issue}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                      {campaign.status === 'active' && (
                        <>
                          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 flex items-center space-x-2">
                            <AlertTriangle className="w-4 h-4" />
                            <span>Pause Campaign</span>
                          </button>
                          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center space-x-2">
                            <XCircle className="w-4 h-4" />
                            <span>Stop Campaign</span>
                          </button>
                        </>
                      )}
                      {campaign.status === 'paused' && (
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2">
                          <RefreshCw className="w-4 h-4" />
                          <span>Resume Campaign</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rejected Campaigns Tab */}
          {activeTab === 'rejected' && (
            <div className="p-6">
              <div className="space-y-4">
                {rejectedCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border border-red-200 bg-red-50 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{campaign.campaignName}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                            Rejected
                          </span>
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                            {campaign.category.replace('_', ' ')}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="font-medium">{campaign.merchantName}</span>
                          <span>•</span>
                          <span>Rejected by {campaign.rejectedBy}</span>
                          <span>•</span>
                          <span>{campaign.rejectedAt}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 mb-4">
                      <div className="flex items-start space-x-2">
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-1">Rejection Reason:</p>
                          <p className="text-sm text-gray-700">{campaign.rejectionReason}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>Contact Merchant</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Audit Trail Tab */}
          {activeTab === 'audit' && (
            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">Campaign Approved</h3>
                        <span className="text-sm text-gray-600">2024-01-25 11:30</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Admin Sarah approved "New Year Sale" by Fashion Forward
                      </p>
                      <div className="text-xs text-gray-600">
                        Campaign ID: CAMP005 | Budget: ₹150,000 | Duration: 30 days
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">Campaign Rejected</h3>
                        <span className="text-sm text-gray-600">2024-01-24 16:30</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Admin Sarah rejected "90% Off Everything" by Discount Deals
                      </p>
                      <div className="text-xs text-gray-600 mb-2">
                        Reason: Unrealistic discount percentage may indicate fraudulent activity
                      </div>
                      <div className="text-xs text-gray-600">
                        Campaign ID: CAMP009 | Category: Compliance Violation
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Edit className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">Modifications Requested</h3>
                        <span className="text-sm text-gray-600">2024-01-23 14:20</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Admin Mike requested changes to "Cashback Bonanza" by Tech Hub Electronics
                      </p>
                      <div className="text-xs text-gray-600 mb-2">
                        Changes: Budget verification needed, clarify terms and conditions
                      </div>
                      <div className="text-xs text-gray-600">
                        Campaign ID: CAMP002 | Status: Awaiting merchant response
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">Campaign Paused</h3>
                        <span className="text-sm text-gray-600">2024-01-22 09:15</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Admin Mike paused "Flash Sale Friday" by Beauty Boutique
                      </p>
                      <div className="text-xs text-gray-600 mb-2">
                        Reason: Budget overrun warning, performance review needed
                      </div>
                      <div className="text-xs text-gray-600">
                        Campaign ID: CAMP008 | Action: Pending merchant consultation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCampaignApproval;
