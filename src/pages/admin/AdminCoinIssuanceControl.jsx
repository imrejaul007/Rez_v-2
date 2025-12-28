import { useState } from 'react';
import AdminNav from '../../components/admin/AdminNav';
import {
  Coins, Zap, Upload, Calendar, Users, Target, TrendingUp,
  CheckCircle, Clock, AlertCircle, Download, Play, Pause, Edit,
  Trash2, Copy, BarChart3, Filter, Search, RefreshCw, FileText
} from 'lucide-react';

export default function AdminCoinIssuanceControl() {
  const [activeTab, setActiveTab] = useState('auto');

  const [issuanceStats] = useState({
    totalIssued: 45678900,
    autoIssued: 34567800,
    manualIssued: 8901000,
    bulkIssued: 2210100,
    activeRules: 23,
    pendingBulk: 5,
    scheduledRules: 8,
    todayIssued: 234567
  });

  const [autoRules] = useState([
    {
      id: 'AR-001',
      name: 'First Bill Upload Bonus',
      status: 'active',
      trigger: 'first_bill_upload',
      coinType: 'ReZ Coin',
      amount: 50,
      conditions: [
        'Bill amount > ₹100',
        'Valid merchant',
        'One-time per user'
      ],
      totalIssued: 1234500,
      usersEligible: 24690,
      usersRedeemed: 18543,
      redemptionRate: 75.1,
      lastTriggered: '2 mins ago',
      createdDate: '2023-08-15',
      category: 'User Onboarding'
    },
    {
      id: 'AR-002',
      name: 'Weekend Shopping Bonus',
      status: 'active',
      trigger: 'transaction_weekend',
      coinType: 'ReZ Coin',
      amount: 25,
      conditions: [
        'Saturday/Sunday transaction',
        'Bill amount > ₹500',
        'Once per weekend per user'
      ],
      totalIssued: 2345600,
      usersEligible: 46912,
      usersRedeemed: 38764,
      redemptionRate: 82.6,
      lastTriggered: '5 mins ago',
      createdDate: '2023-09-01',
      category: 'Engagement'
    },
    {
      id: 'AR-003',
      name: 'Fashion Category Multiplier',
      status: 'active',
      trigger: 'category_purchase',
      coinType: 'ReZ Coin',
      amount: 100,
      conditions: [
        'Category: Fashion & Apparel',
        'Bill amount > ₹1000',
        '2x regular coins'
      ],
      totalIssued: 3456700,
      usersEligible: 34567,
      usersRedeemed: 29123,
      redemptionRate: 84.3,
      lastTriggered: '1 min ago',
      createdDate: '2023-10-15',
      category: 'Category Boost'
    },
    {
      id: 'AR-004',
      name: 'Birthday Month Special',
      status: 'scheduled',
      trigger: 'user_birthday_month',
      coinType: 'Promo Coin',
      amount: 200,
      conditions: [
        'User\'s birthday month',
        'One-time birthday bonus',
        'Expires end of month'
      ],
      totalIssued: 456700,
      usersEligible: 9134,
      usersRedeemed: 7234,
      redemptionRate: 79.2,
      lastTriggered: '1 hour ago',
      createdDate: '2023-07-01',
      category: 'Special Events'
    },
    {
      id: 'AR-005',
      name: 'Referral Success Bonus',
      status: 'active',
      trigger: 'referral_conversion',
      coinType: 'ReZ Coin',
      amount: 150,
      conditions: [
        'Referred user makes first purchase',
        'Both users get coins',
        'No upper limit'
      ],
      totalIssued: 8901200,
      usersEligible: 59341,
      usersRedeemed: 54123,
      redemptionRate: 91.2,
      lastTriggered: '30 secs ago',
      createdDate: '2023-06-01',
      category: 'Growth'
    },
    {
      id: 'AR-006',
      name: 'Streak Reward - 7 Days',
      status: 'paused',
      trigger: 'usage_streak',
      coinType: 'ReZ Coin',
      amount: 300,
      conditions: [
        '7 consecutive days activity',
        'Min 1 transaction per day',
        'Resets on break'
      ],
      totalIssued: 567800,
      usersEligible: 11356,
      usersRedeemed: 8234,
      redemptionRate: 72.5,
      lastTriggered: '2 days ago',
      createdDate: '2023-11-01',
      category: 'Engagement'
    }
  ]);

  const [bulkIssuance] = useState([
    {
      id: 'BI-001',
      name: 'IIT Mumbai Fest - Campus Coins',
      uploadDate: '2024-01-20',
      scheduledDate: '2024-02-01',
      status: 'scheduled',
      coinType: 'Promo Coin',
      totalUsers: 3450,
      coinsPerUser: 500,
      totalCoins: 1725000,
      expiryDate: '2024-02-15',
      uploadedBy: 'Amit Patel',
      file: 'IIT_Mumbai_Students.csv',
      conditions: 'Valid .edu.in email, enrolled students only'
    },
    {
      id: 'BI-002',
      name: 'Corporate Partnership - TCS Employees',
      uploadDate: '2024-01-18',
      scheduledDate: 'Immediate',
      status: 'processing',
      coinType: 'Branded Coin',
      totalUsers: 12345,
      coinsPerUser: 200,
      totalCoins: 2469000,
      expiryDate: '2024-03-31',
      uploadedBy: 'Sneha Desai',
      file: 'TCS_Employees.xlsx',
      progress: 67,
      processed: 8271,
      failed: 23,
      conditions: 'Verified employee ID, active status'
    },
    {
      id: 'BI-003',
      name: 'New Year Celebration - All Users',
      uploadDate: '2023-12-28',
      scheduledDate: '2024-01-01',
      status: 'completed',
      coinType: 'Promo Coin',
      totalUsers: 156789,
      coinsPerUser: 100,
      totalCoins: 15678900,
      expiryDate: '2024-01-31',
      uploadedBy: 'Rajesh Kumar',
      file: 'All_Active_Users_Dec2023.csv',
      completedDate: '2024-01-01 00:00:15',
      successRate: 99.8,
      conditions: 'Min 1 transaction in last 30 days'
    },
    {
      id: 'BI-004',
      name: 'Privé Member Anniversary Bonus',
      uploadDate: '2024-01-22',
      scheduledDate: '2024-02-05',
      status: 'pending_approval',
      coinType: 'Privé Coin',
      totalUsers: 1234,
      coinsPerUser: 1000,
      totalCoins: 1234000,
      expiryDate: '2024-03-05',
      uploadedBy: 'Priya Sharma',
      file: 'Prive_Anniversary_Members.csv',
      approver: 'Super Admin',
      conditions: 'Privé member for 1+ year'
    },
    {
      id: 'BI-005',
      name: 'Dispute Resolution - Compensation',
      uploadDate: '2024-01-25',
      scheduledDate: 'Immediate',
      status: 'failed',
      coinType: 'ReZ Coin',
      totalUsers: 234,
      coinsPerUser: 500,
      totalCoins: 117000,
      expiryDate: null,
      uploadedBy: 'Support Team',
      file: 'Dispute_Users_Jan.csv',
      error: 'Invalid user IDs in rows 45, 67, 89',
      failedUsers: 3
    }
  ]);

  const [scheduledDrops] = useState([
    {
      id: 'SD-001',
      name: 'Weekend Flash Coin Drop',
      type: 'recurring',
      trigger: 'Every Saturday 9:00 AM',
      coinType: 'Promo Coin',
      amount: 50,
      targetAudience: 'All active users (last 7 days)',
      estimatedUsers: 45000,
      estimatedCoins: 2250000,
      status: 'active',
      nextRun: '2024-02-03 09:00:00',
      lastRun: '2024-01-27 09:00:15',
      totalRuns: 12,
      avgRedemption: 78.5
    },
    {
      id: 'SD-002',
      name: 'First-of-Month Bonus',
      type: 'recurring',
      trigger: '1st of every month 00:00',
      coinType: 'ReZ Coin',
      amount: 100,
      targetAudience: 'Users with 3+ transactions last month',
      estimatedUsers: 12000,
      estimatedCoins: 1200000,
      status: 'active',
      nextRun: '2024-02-01 00:00:00',
      lastRun: '2024-01-01 00:00:23',
      totalRuns: 6,
      avgRedemption: 91.3
    },
    {
      id: 'SD-003',
      name: 'Valentine\'s Day Special',
      type: 'one-time',
      trigger: '2024-02-14 10:00 AM',
      coinType: 'Promo Coin',
      amount: 200,
      targetAudience: 'Users interested in: Dining, Fashion, Gifts',
      estimatedUsers: 23000,
      estimatedCoins: 4600000,
      status: 'scheduled',
      nextRun: '2024-02-14 10:00:00',
      lastRun: null,
      totalRuns: 0,
      avgRedemption: null
    }
  ]);

  const [manualIssuance] = useState([
    {
      id: 'MI-001',
      date: '2024-01-25 14:32:15',
      issuedBy: 'Amit Patel',
      reason: 'App crash during transaction - compensation',
      userId: 'USR-45678',
      userName: 'Rajesh Kumar',
      coinType: 'ReZ Coin',
      amount: 500,
      expiryDate: null,
      approvedBy: 'Sneha Desai'
    },
    {
      id: 'MI-002',
      date: '2024-01-25 11:23:45',
      issuedBy: 'Support Team',
      reason: 'Merchant did not honor offer',
      userId: 'USR-78901',
      userName: 'Priya Sharma',
      coinType: 'Promo Coin',
      amount: 300,
      expiryDate: '2024-02-25',
      approvedBy: 'Rajesh Kumar'
    }
  ]);

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-700',
      scheduled: 'bg-blue-100 text-blue-700',
      paused: 'bg-yellow-100 text-yellow-700',
      completed: 'bg-gray-100 text-gray-600',
      processing: 'bg-yellow-100 text-yellow-700',
      pending_approval: 'bg-orange-100 text-orange-700',
      failed: 'bg-red-100 text-red-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Coins className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Coin Issuance Control</h1>
              <p className="text-yellow-100">Auto-rules, bulk uploads & scheduled coin distribution</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <Download className="w-5 h-5" />
              Export Rules
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white text-yellow-600 rounded-lg hover:bg-yellow-50 font-medium">
              <Zap className="w-5 h-5" />
              Manual Issue
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Coins className="w-5 h-5 text-yellow-200" />
              <span className="text-xs text-yellow-200">Today: {issuanceStats.todayIssued.toLocaleString()}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{(issuanceStats.totalIssued / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-yellow-200">Total Coins Issued</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-5 h-5 text-yellow-200" />
              <span className="text-xs text-yellow-200">Active: {issuanceStats.activeRules}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{issuanceStats.activeRules + issuanceStats.scheduledRules}</div>
            <div className="text-sm text-yellow-200">Auto Rules</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Upload className="w-5 h-5 text-yellow-200" />
              <span className="text-xs text-yellow-200">Pending: {issuanceStats.pendingBulk}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{(issuanceStats.bulkIssued / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-yellow-200">Bulk Issued</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-5 h-5 text-yellow-200" />
            </div>
            <div className="text-2xl font-bold mb-1">{((issuanceStats.autoIssued / issuanceStats.totalIssued) * 100).toFixed(0)}%</div>
            <div className="text-sm text-yellow-200">Auto-Issued</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex gap-6 px-6">
          <button
            onClick={() => setActiveTab('auto')}
            className={`py-4 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'auto'
                ? 'border-yellow-600 text-yellow-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Auto-Issuance Rules
            </div>
          </button>
          <button
            onClick={() => setActiveTab('bulk')}
            className={`py-4 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'bulk'
                ? 'border-yellow-600 text-yellow-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Bulk Upload
            </div>
          </button>
          <button
            onClick={() => setActiveTab('scheduled')}
            className={`py-4 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'scheduled'
                ? 'border-yellow-600 text-yellow-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Scheduled Drops
            </div>
          </button>
          <button
            onClick={() => setActiveTab('manual')}
            className={`py-4 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'manual'
                ? 'border-yellow-600 text-yellow-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Manual History
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Auto-Issuance Rules Tab */}
        {activeTab === 'auto' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Auto-Issuance Rules</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                <Zap className="w-4 h-4" />
                Create New Rule
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {autoRules.map((rule) => (
                <div key={rule.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{rule.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(rule.status)}`}>
                          {rule.status.toUpperCase()}
                        </span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          {rule.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>Trigger: {rule.trigger}</span>
                        <span>•</span>
                        <span>Coin: {rule.coinType}</span>
                        <span>•</span>
                        <span className="font-bold text-yellow-600">{rule.amount} coins per trigger</span>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Conditions:</h4>
                        <div className="flex flex-wrap gap-2">
                          {rule.conditions.map((condition, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                              {condition}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-gray-900">{(rule.totalIssued / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-gray-600">Total Issued</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-blue-600">{rule.usersEligible.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">Eligible Users</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-green-600">{rule.usersRedeemed.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">Redeemed</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-purple-600">{rule.redemptionRate}%</div>
                          <div className="text-xs text-gray-600">Redemption Rate</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-sm font-medium text-gray-900">{rule.lastTriggered}</div>
                          <div className="text-xs text-gray-600">Last Triggered</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {rule.status === 'active' ? (
                      <button className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200">
                        <Pause className="w-4 h-4" />
                        Pause Rule
                      </button>
                    ) : (
                      <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
                        <Play className="w-4 h-4" />
                        Activate Rule
                      </button>
                    )}
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      <Copy className="w-4 h-4" />
                      Duplicate
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      <BarChart3 className="w-4 h-4" />
                      View Analytics
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bulk Upload Tab */}
        {activeTab === 'bulk' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Bulk Coin Issuance</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                <Upload className="w-4 h-4" />
                Upload CSV/Excel
              </button>
            </div>

            {/* Upload Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Upload Instructions:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• File must contain: User ID/Email, Coin Amount, Expiry Date (optional)</li>
                <li>• Supported formats: CSV, Excel (.xlsx)</li>
                <li>• Max 100,000 users per upload</li>
                <li>• Scheduled uploads will be processed at specified time</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {bulkIssuance.map((bulk) => (
                <div key={bulk.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{bulk.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bulk.status)}`}>
                          {bulk.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>Uploaded: {bulk.uploadDate}</span>
                        <span>•</span>
                        <span>By: {bulk.uploadedBy}</span>
                        <span>•</span>
                        <span>File: {bulk.file}</span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-gray-900">{bulk.totalUsers.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">Total Users</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-yellow-600">{bulk.coinsPerUser}</div>
                          <div className="text-xs text-gray-600">Coins Per User</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-purple-600">{(bulk.totalCoins / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-gray-600">Total Coins</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-sm font-medium text-gray-900">{bulk.scheduledDate}</div>
                          <div className="text-xs text-gray-600">Scheduled</div>
                        </div>
                      </div>

                      {bulk.status === 'processing' && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Processing Progress</span>
                            <span className="text-sm font-bold text-yellow-600">{bulk.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className="bg-yellow-600 h-3 rounded-full transition-all"
                              style={{ width: `${bulk.progress}%` }}
                            />
                          </div>
                          <div className="flex items-center justify-between mt-2 text-xs text-gray-600">
                            <span>Processed: {bulk.processed.toLocaleString()}</span>
                            <span className="text-red-600">Failed: {bulk.failed}</span>
                          </div>
                        </div>
                      )}

                      {bulk.status === 'completed' && (
                        <div className="bg-green-50 rounded-lg p-3 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-green-700">Completed: {bulk.completedDate}</span>
                            <span className="font-bold text-green-700">Success Rate: {bulk.successRate}%</span>
                          </div>
                        </div>
                      )}

                      {bulk.status === 'failed' && (
                        <div className="bg-red-50 rounded-lg p-3 mb-4">
                          <div className="text-sm text-red-700">
                            <span className="font-semibold">Error:</span> {bulk.error}
                          </div>
                        </div>
                      )}

                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Conditions:</span> {bulk.conditions}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {bulk.status === 'pending_approval' && (
                      <>
                        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                          <CheckCircle className="w-4 h-4" />
                          Approve
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                          <X className="w-4 h-4" />
                          Reject
                        </button>
                      </>
                    )}
                    {bulk.status === 'scheduled' && (
                      <button className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200">
                        <Clock className="w-4 h-4" />
                        Reschedule
                      </button>
                    )}
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      <Download className="w-4 h-4" />
                      Download File
                    </button>
                    {bulk.status === 'failed' && (
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        <RefreshCw className="w-4 h-4" />
                        Retry
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scheduled Drops Tab */}
        {activeTab === 'scheduled' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Scheduled Coin Drops</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                <Calendar className="w-4 h-4" />
                Schedule New Drop
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {scheduledDrops.map((drop) => (
                <div key={drop.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{drop.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(drop.status)}`}>
                          {drop.status.toUpperCase()}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          drop.type === 'recurring' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                        }`}>
                          {drop.type.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {drop.trigger}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-yellow-600">{drop.amount}</div>
                          <div className="text-xs text-gray-600">{drop.coinType}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-blue-600">{(drop.estimatedUsers / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-gray-600">Est. Users</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-purple-600">{(drop.estimatedCoins / 1000000).toFixed(1)}M</div>
                          <div className="text-xs text-gray-600">Est. Coins</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-green-600">{drop.avgRedemption ? `${drop.avgRedemption}%` : '-'}</div>
                          <div className="text-xs text-gray-600">Avg Redemption</div>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3 mb-3">
                        <div className="text-sm text-gray-700">
                          <span className="font-medium">Target:</span> {drop.targetAudience}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span><span className="font-medium">Next Run:</span> {drop.nextRun}</span>
                        {drop.lastRun && (
                          <>
                            <span>•</span>
                            <span><span className="font-medium">Last Run:</span> {drop.lastRun}</span>
                          </>
                        )}
                        <span>•</span>
                        <span><span className="font-medium">Total Runs:</span> {drop.totalRuns}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      <Edit className="w-4 h-4" />
                      Edit Schedule
                    </button>
                    {drop.status === 'active' ? (
                      <button className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200">
                        <Pause className="w-4 h-4" />
                        Pause
                      </button>
                    ) : (
                      <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
                        <Play className="w-4 h-4" />
                        Activate
                      </button>
                    )}
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      <BarChart3 className="w-4 h-4" />
                      View History
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Manual History Tab */}
        {activeTab === 'manual' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Manual Issuance History</h2>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Search user, reason..."
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
                />
                <button className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                  <Zap className="w-4 h-4" />
                  Issue Coins Manually
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Date & Time</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">User</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Reason</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Coin Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Issued By</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Approved By</th>
                  </tr>
                </thead>
                <tbody>
                  {manualIssuance.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-600">{item.date}</td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-gray-900">{item.userName}</div>
                        <div className="text-xs text-gray-500">{item.userId}</div>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{item.reason}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                          {item.coinType}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-bold text-yellow-600">{item.amount}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{item.issuedBy}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{item.approvedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
