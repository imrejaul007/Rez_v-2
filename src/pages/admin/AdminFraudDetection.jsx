import React, { useState } from 'react';
import { Shield, AlertTriangle, Users, TrendingUp, Activity, Lock, Eye, Ban, CheckCircle, XCircle, Clock } from 'lucide-react';

const AdminFraudDetection = () => {
  const [activeTab, setActiveTab] = useState('alerts');

  // Mock data - Suspicious activities
  const suspiciousActivities = [
    {
      id: 'FRAUD-001',
      type: 'Multiple Account Creation',
      userId: 'USER-45678',
      userName: 'Suspicious User A',
      riskScore: 92,
      severity: 'critical',
      timestamp: '2025-10-28 14:23:45',
      details: {
        pattern: 'Created 8 accounts from same device in 2 hours',
        ipAddress: '103.45.67.89',
        deviceId: 'DEVICE-12345',
        location: 'Mumbai, Maharashtra',
        accountsCreated: 8,
        timeSpan: '2 hours'
      },
      evidence: [
        'Same device fingerprint',
        'Same IP address',
        'Sequential phone numbers',
        'Immediate referral code usage'
      ],
      status: 'pending',
      recommendation: 'block_user'
    },
    {
      id: 'FRAUD-002',
      type: 'Coin Manipulation',
      userId: 'USER-98765',
      userName: 'Priya Kumar',
      riskScore: 87,
      severity: 'high',
      timestamp: '2025-10-28 13:15:22',
      details: {
        pattern: 'Abnormal coin earning rate - 50,000 coins in 24 hours',
        normalRate: '500-1000 coins/day',
        actualRate: '50000 coins/day',
        suspectedMethod: 'Game exploitation/automation',
        gamesPlayed: 234,
        winRate: 98.5
      },
      evidence: [
        'Inhuman win rate (98.5%)',
        'Played 234 games in 6 hours',
        'Identical timing patterns',
        'Bot-like behavior detected'
      ],
      status: 'pending',
      recommendation: 'investigate'
    },
    {
      id: 'FRAUD-003',
      type: 'Payment Fraud',
      userId: 'USER-34567',
      userName: 'Rajesh Singh',
      riskScore: 78,
      severity: 'high',
      timestamp: '2025-10-28 11:45:10',
      details: {
        pattern: 'Multiple failed payment attempts with different cards',
        failedAttempts: 12,
        differentCards: 8,
        totalAmount: 45600,
        location: 'Delhi, Delhi',
        timeSpan: '30 minutes'
      },
      evidence: [
        '12 failed transactions',
        '8 different card numbers',
        'All cards from different banks',
        'Rapid succession attempts'
      ],
      status: 'pending',
      recommendation: 'block_payment'
    },
    {
      id: 'FRAUD-004',
      type: 'Review Manipulation',
      userId: 'MERCHANT-7890',
      userName: 'Taste of India Restaurant',
      riskScore: 65,
      severity: 'medium',
      timestamp: '2025-10-28 10:30:55',
      details: {
        pattern: 'Sudden spike in 5-star reviews from new accounts',
        suspiciousReviews: 23,
        timeSpan: '48 hours',
        reviewers: 'All created within last week',
        averageRating: 'Jumped from 3.2 to 4.8'
      },
      evidence: [
        '23 reviews from brand new accounts',
        'All accounts created in last 7 days',
        'Generic review text patterns',
        'Reviews within minutes of each other'
      ],
      status: 'pending',
      recommendation: 'remove_reviews'
    },
    {
      id: 'FRAUD-005',
      type: 'Referral Abuse',
      userId: 'USER-56789',
      userName: 'Amit Verma',
      riskScore: 71,
      severity: 'medium',
      timestamp: '2025-10-28 09:15:30',
      details: {
        pattern: 'Self-referral network detected',
        referredAccounts: 15,
        sharedAttributes: 'Same device, IP, location',
        bonusClaimed: 7500,
        timeSpan: '3 days'
      },
      evidence: [
        'All referrals from same device',
        'Identical IP addresses',
        'No actual transactions',
        'Immediate bonus withdrawal attempts'
      ],
      status: 'pending',
      recommendation: 'revoke_bonus'
    }
  ];

  // Flagged accounts
  const flaggedAccounts = [
    {
      id: 'USER-11111',
      name: 'Suspicious Account 1',
      flagReason: 'Multiple account violations',
      flagDate: '2025-10-25',
      totalRiskScore: 95,
      violations: 5,
      status: 'suspended',
      lastActivity: '2025-10-25 18:45:00'
    },
    {
      id: 'USER-22222',
      name: 'Suspicious Account 2',
      flagReason: 'Payment fraud attempts',
      flagDate: '2025-10-26',
      totalRiskScore: 88,
      violations: 3,
      status: 'under_review',
      lastActivity: '2025-10-26 12:30:00'
    },
    {
      id: 'MERCHANT-33333',
      name: 'Fake Restaurant',
      flagReason: 'Review manipulation',
      flagDate: '2025-10-27',
      totalRiskScore: 82,
      violations: 2,
      status: 'warning_issued',
      lastActivity: '2025-10-27 16:20:00'
    }
  ];

  // Pattern analytics
  const fraudPatterns = [
    {
      pattern: 'Multi-Account Creation',
      occurrences: 45,
      trend: '+15%',
      severity: 'critical',
      detectedToday: 8,
      totalBlocked: 37
    },
    {
      pattern: 'Coin Exploitation',
      occurrences: 32,
      trend: '+8%',
      severity: 'high',
      detectedToday: 5,
      totalBlocked: 27
    },
    {
      pattern: 'Payment Fraud',
      occurrences: 28,
      trend: '-5%',
      severity: 'high',
      detectedToday: 3,
      totalBlocked: 25
    },
    {
      pattern: 'Review Manipulation',
      occurrences: 19,
      trend: '+12%',
      severity: 'medium',
      detectedToday: 4,
      totalBlocked: 15
    },
    {
      pattern: 'Referral Abuse',
      occurrences: 23,
      trend: '-3%',
      severity: 'medium',
      detectedToday: 2,
      totalBlocked: 21
    }
  ];

  // Real-time monitoring stats
  const monitoringStats = {
    activeMonitoring: 12456,
    flaggedToday: 18,
    blockedToday: 12,
    pendingReview: 24,
    falsePositiveRate: 3.2,
    accuracyRate: 96.8
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'high': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'suspended': return 'bg-red-500/20 text-red-400';
      case 'under_review': return 'bg-orange-500/20 text-orange-400';
      case 'warning_issued': return 'bg-yellow-500/20 text-yellow-400';
      case 'resolved': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTrendColor = (trend) => {
    if (trend.startsWith('+')) return 'text-red-400';
    if (trend.startsWith('-')) return 'text-green-400';
    return 'text-gray-400';
  };

  const handleBlockUser = (fraudId) => {
    console.log('Blocking user:', fraudId);
    alert(`User blocked! All accounts and activities suspended.`);
  };

  const handleInvestigate = (fraudId) => {
    console.log('Starting investigation:', fraudId);
    alert(`Investigation initiated. User activity will be monitored closely.`);
  };

  const handleDismiss = (fraudId) => {
    console.log('Dismissing alert:', fraudId);
    alert(`Alert dismissed. Marked as false positive.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Shield className="w-10 h-10 text-red-400" />
            Fraud Detection Dashboard
          </h1>
          <p className="text-gray-400">Real-time monitoring & threat prevention</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-8 h-8 text-blue-400" />
              <span className="text-xs text-gray-400">Active Monitoring</span>
            </div>
            <div className="text-3xl font-bold text-white">{monitoringStats.activeMonitoring.toLocaleString()}</div>
            <div className="text-sm text-blue-400">Users & Merchants</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <span className="text-xs text-gray-400">Flagged Today</span>
            </div>
            <div className="text-3xl font-bold text-white">{monitoringStats.flaggedToday}</div>
            <div className="text-sm text-red-400">{monitoringStats.pendingReview} pending review</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Ban className="w-8 h-8 text-orange-400" />
              <span className="text-xs text-gray-400">Blocked Today</span>
            </div>
            <div className="text-3xl font-bold text-white">{monitoringStats.blockedToday}</div>
            <div className="text-sm text-orange-400">Automatic + Manual</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <span className="text-xs text-gray-400">Detection Accuracy</span>
            </div>
            <div className="text-3xl font-bold text-white">{monitoringStats.accuracyRate}%</div>
            <div className="text-sm text-green-400">{monitoringStats.falsePositiveRate}% false positive</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {[
            { id: 'alerts', label: 'Live Alerts', icon: AlertTriangle },
            { id: 'patterns', label: 'Fraud Patterns', icon: Activity },
            { id: 'flagged', label: 'Flagged Accounts', icon: Ban },
            { id: 'settings', label: 'Detection Rules', icon: Shield }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          {activeTab === 'alerts' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Suspicious Activities</h2>
                <div className="text-gray-400 text-sm">
                  {suspiciousActivities.filter(a => a.status === 'pending').length} pending review
                </div>
              </div>

              {suspiciousActivities.map((activity) => (
                <div key={activity.id} className={`rounded-xl p-6 border ${getSeverityColor(activity.severity)}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className={`w-8 h-8 ${activity.severity === 'critical' ? 'text-red-400' : activity.severity === 'high' ? 'text-orange-400' : 'text-yellow-400'}`} />
                      <div>
                        <h3 className="text-xl font-bold text-white">{activity.type}</h3>
                        <p className="text-gray-400 text-sm">{activity.userName} ({activity.userId})</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Risk Score</div>
                      <div className={`text-3xl font-bold ${activity.riskScore >= 90 ? 'text-red-400' : activity.riskScore >= 70 ? 'text-orange-400' : 'text-yellow-400'}`}>
                        {activity.riskScore}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-4">
                    <div className="text-gray-400 text-sm mb-2">Detected Pattern:</div>
                    <div className="text-white font-semibold mb-3">{activity.details.pattern}</div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {Object.entries(activity.details).slice(1).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-gray-400 text-xs capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </div>
                          <div className="text-white text-sm font-medium">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-gray-400 text-sm mb-2">Evidence:</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {activity.evidence.map((evidence, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                          <span className="text-white">{evidence}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold">
                        Recommendation: {activity.recommendation.replace(/_/g, ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="text-gray-400 text-sm">
                      Detected: {activity.timestamp}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleDismiss(activity.id)}
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all flex items-center gap-2"
                      >
                        <XCircle className="w-4 h-4" />
                        Dismiss
                      </button>
                      <button
                        onClick={() => handleInvestigate(activity.id)}
                        className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-all flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        Investigate
                      </button>
                      <button
                        onClick={() => handleBlockUser(activity.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all flex items-center gap-2"
                      >
                        <Ban className="w-4 h-4" />
                        Block User
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'patterns' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Fraud Pattern Analytics</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fraudPatterns.map((pattern, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{pattern.pattern}</h3>
                      <span className={`text-xs px-3 py-1 rounded-full ${getSeverityColor(pattern.severity)}`}>
                        {pattern.severity.toUpperCase()}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="text-gray-400 text-sm">Total Occurrences</div>
                        <div className="text-white font-bold text-2xl">{pattern.occurrences}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="text-gray-400 text-sm">Detected Today</div>
                        <div className="text-white font-bold text-2xl">{pattern.detectedToday}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-400 text-sm">Trend (7 days)</div>
                        <div className={`font-bold text-lg ${getTrendColor(pattern.trend)}`}>
                          {pattern.trend}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-400 text-sm">Blocked</div>
                        <div className="text-green-400 font-bold text-lg">{pattern.totalBlocked}</div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                          style={{ width: `${(pattern.totalBlocked / pattern.occurrences) * 100}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-400 mt-1 text-center">
                        {((pattern.totalBlocked / pattern.occurrences) * 100).toFixed(1)}% prevention rate
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trend Graph Placeholder */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-6">
                <h3 className="text-xl font-bold text-white mb-4">7-Day Fraud Trend</h3>
                <div className="h-64 flex items-end justify-around gap-2">
                  {[12, 15, 18, 14, 22, 19, 18].map((height, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div className="text-white text-sm">{height}</div>
                      <div
                        className="w-full bg-gradient-to-t from-red-500 to-orange-500 rounded-t"
                        style={{ height: `${(height / 22) * 100}%` }}
                      />
                      <div className="text-gray-400 text-xs">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'flagged' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Flagged Accounts</h2>
                <div className="text-gray-400 text-sm">{flaggedAccounts.length} total</div>
              </div>

              {flaggedAccounts.map((account) => (
                <div key={account.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{account.name}</h3>
                      <p className="text-gray-400 text-sm">{account.id}</p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(account.status)}`}>
                      {account.status.replace(/_/g, ' ').toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Risk Score</div>
                      <div className="text-red-400 font-bold text-xl">{account.totalRiskScore}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Violations</div>
                      <div className="text-white font-bold text-xl">{account.violations}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Flagged On</div>
                      <div className="text-white text-sm">{account.flagDate}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Last Activity</div>
                      <div className="text-white text-sm">{account.lastActivity}</div>
                    </div>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4">
                    <div className="text-gray-400 text-sm">Flag Reason:</div>
                    <div className="text-white font-semibold">{account.flagReason}</div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all">
                      Lift Suspension
                    </button>
                    <button className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-all">
                      Permanent Ban
                    </button>
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Detection Rules Configuration</h2>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Multi-Account Detection</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Enabled</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Risk Score Threshold</label>
                    <input type="range" min="50" max="100" defaultValue="85" className="w-full" />
                    <div className="text-white text-sm">85 / 100</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Payment Fraud Detection</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Enabled</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Failed Attempts Limit</label>
                    <input type="number" defaultValue="5" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Automated Actions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white/5 rounded-lg p-3 border border-white/10">
                    <span className="text-white">Auto-block critical threats</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 rounded-lg p-3 border border-white/10">
                    <span className="text-white">Send email notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 rounded-lg p-3 border border-white/10">
                    <span className="text-white">Log all fraud attempts</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all font-semibold">
                Save Configuration
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminFraudDetection;
