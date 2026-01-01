import React, { useState } from 'react';
import {
  ArrowLeft, Shield, User, AlertTriangle, Eye, EyeOff, TrendingUp,
  TrendingDown, Ban, Clock, Zap, Activity, Target, BarChart3,
  CheckCircle, XCircle, Upload, MessageSquare, Users, Gift,
  Fingerprint, Ghost, Lock, Unlock, Filter, Search, ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminUserTrustScore = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('flagged');
  const [searchQuery, setSearchQuery] = useState('');

  // Trust score thresholds
  const [thresholds, setThresholds] = useState({
    trusted: 80,
    normal: 50,
    suspicious: 30,
    blocked: 0
  });

  // Shadow throttling rules
  const [throttleRules, setThrottleRules] = useState([
    { id: 1, condition: 'Trust Score < 30', action: 'Reduce earning rate by 50%', enabled: true },
    { id: 2, condition: 'Trust Score < 50', action: 'Add captcha on bill upload', enabled: true },
    { id: 3, condition: 'Referral Abuse Score > 50', action: 'Disable referral earning', enabled: true },
    { id: 4, condition: 'Review Farming Score > 40', action: 'Review coins delayed 7 days', enabled: true },
    { id: 5, condition: 'Coin Farming Score > 60', action: 'Daily earning cap reduced to 100', enabled: true },
  ]);

  // Users data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Rahul Sharma',
      phone: '98765xxxxx',
      trustScore: 92,
      status: 'trusted',
      joinDate: '2023-01-15',
      totalEarned: 45000,
      totalSpent: 38000,
      metrics: {
        billUploadScore: 95,
        reviewScore: 88,
        referralScore: 90,
        coinFarmingScore: 5,
        transactionPattern: 'normal'
      },
      flags: [],
      shadowActions: []
    },
    {
      id: 2,
      name: 'Priya Patel',
      phone: '87654xxxxx',
      trustScore: 65,
      status: 'normal',
      joinDate: '2023-06-20',
      totalEarned: 12000,
      totalSpent: 8500,
      metrics: {
        billUploadScore: 70,
        reviewScore: 60,
        referralScore: 75,
        coinFarmingScore: 25,
        transactionPattern: 'normal'
      },
      flags: ['Unusual referral pattern'],
      shadowActions: []
    },
    {
      id: 3,
      name: 'Amit Kumar',
      phone: '76543xxxxx',
      trustScore: 28,
      status: 'suspicious',
      joinDate: '2024-01-10',
      totalEarned: 85000,
      totalSpent: 2000,
      metrics: {
        billUploadScore: 15,
        reviewScore: 20,
        referralScore: 10,
        coinFarmingScore: 85,
        transactionPattern: 'suspicious'
      },
      flags: ['Fake bill uploads detected', 'Review farming', 'Coin hoarding'],
      shadowActions: ['Earning rate reduced 50%', 'Captcha enabled', 'Under investigation']
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      phone: '65432xxxxx',
      trustScore: 42,
      status: 'suspicious',
      joinDate: '2023-09-05',
      totalEarned: 32000,
      totalSpent: 5000,
      metrics: {
        billUploadScore: 40,
        reviewScore: 35,
        referralScore: 25,
        coinFarmingScore: 55,
        transactionPattern: 'unusual'
      },
      flags: ['Multiple accounts suspected', 'Referral chain abuse'],
      shadowActions: ['Referral earning disabled', 'Daily cap reduced']
    },
    {
      id: 5,
      name: 'Vijay Menon',
      phone: '54321xxxxx',
      trustScore: 78,
      status: 'normal',
      joinDate: '2022-11-30',
      totalEarned: 28000,
      totalSpent: 24000,
      metrics: {
        billUploadScore: 85,
        reviewScore: 75,
        referralScore: 80,
        coinFarmingScore: 15,
        transactionPattern: 'normal'
      },
      flags: [],
      shadowActions: []
    }
  ]);

  // Detection patterns
  const detectionPatterns = {
    billUpload: [
      'Same receipt uploaded multiple times',
      'Receipts from same merchant within 24 hours',
      'Suspicious receipt image patterns',
      'Mismatched amounts',
      'Edited receipt detection'
    ],
    reviewFarming: [
      'Reviews without actual purchase',
      'Copy-paste review content',
      'Unusually fast review submissions',
      'Reviews only on high-coin offers'
    ],
    referralAbuse: [
      'Self-referral patterns',
      'Referral chain loops',
      'Fake accounts in network',
      'Mass signup from same device/IP'
    ],
    coinFarming: [
      'High earning, low spending ratio',
      'Only engaging with highest coin activities',
      'Gaming multiple promotions',
      'Account activity bursts'
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'trusted': return 'bg-green-500';
      case 'normal': return 'bg-blue-500';
      case 'suspicious': return 'bg-yellow-500';
      case 'blocked': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 50) return 'text-blue-400';
    if (score >= 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  const filteredUsers = users.filter(user => {
    if (activeTab === 'flagged') return user.flags.length > 0 || user.trustScore < 50;
    if (activeTab === 'trusted') return user.trustScore >= 80;
    if (activeTab === 'all') return true;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Fingerprint size={24} className="mr-2" />
                User Trust & Abuse Scoring
              </h1>
              <p className="text-cyan-200 text-sm">Silent reputation system</p>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-green-300">{users.filter(u => u.status === 'trusted').length}</p>
            <p className="text-xs">Trusted</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-blue-300">{users.filter(u => u.status === 'normal').length}</p>
            <p className="text-xs">Normal</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-yellow-300">{users.filter(u => u.status === 'suspicious').length}</p>
            <p className="text-xs">Suspicious</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-red-300">{users.filter(u => u.status === 'blocked').length}</p>
            <p className="text-xs">Blocked</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-700">
        {[
          { id: 'flagged', label: 'Flagged Users' },
          { id: 'trusted', label: 'Trusted' },
          { id: 'all', label: 'All Users' },
          { id: 'rules', label: 'Shadow Rules' },
          { id: 'patterns', label: 'Detection' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm whitespace-nowrap ${
              activeTab === tab.id
                ? 'text-cyan-400 border-b-2 border-cyan-400'
                : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        {/* User Lists */}
        {['flagged', 'trusted', 'all'].includes(activeTab) && (
          <div className="space-y-3">
            {/* Search */}
            <div className="relative mb-4">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl"
              />
            </div>

            {filteredUsers.map(user => (
              <div key={user.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                      <User size={24} className="text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium flex items-center">
                        {user.name}
                        <span className={`ml-2 w-2 h-2 rounded-full ${getStatusColor(user.status)}`} />
                      </h3>
                      <p className="text-gray-400 text-xs">{user.phone} • Joined {user.joinDate}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${getScoreColor(user.trustScore)}`}>
                      {user.trustScore}
                    </p>
                    <p className="text-xs text-gray-400 capitalize">{user.status}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-2 mb-3 text-xs">
                  <div className="bg-gray-700/50 rounded p-2 text-center">
                    <Upload size={14} className="mx-auto text-gray-400 mb-1" />
                    <p className={user.metrics.billUploadScore < 50 ? 'text-red-400' : 'text-white'}>
                      {user.metrics.billUploadScore}
                    </p>
                  </div>
                  <div className="bg-gray-700/50 rounded p-2 text-center">
                    <MessageSquare size={14} className="mx-auto text-gray-400 mb-1" />
                    <p className={user.metrics.reviewScore < 50 ? 'text-red-400' : 'text-white'}>
                      {user.metrics.reviewScore}
                    </p>
                  </div>
                  <div className="bg-gray-700/50 rounded p-2 text-center">
                    <Users size={14} className="mx-auto text-gray-400 mb-1" />
                    <p className={user.metrics.referralScore < 50 ? 'text-red-400' : 'text-white'}>
                      {user.metrics.referralScore}
                    </p>
                  </div>
                  <div className="bg-gray-700/50 rounded p-2 text-center">
                    <Activity size={14} className="mx-auto text-gray-400 mb-1" />
                    <p className={user.metrics.coinFarmingScore > 50 ? 'text-red-400' : 'text-white'}>
                      {user.metrics.coinFarmingScore}
                    </p>
                  </div>
                </div>

                {/* Earn vs Spend */}
                <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Earned: <span className="text-green-400">{user.totalEarned.toLocaleString()}</span></span>
                    <span className="text-gray-400">Spent: <span className="text-blue-400">{user.totalSpent.toLocaleString()}</span></span>
                    <span className="text-gray-400">
                      Ratio: <span className={user.totalSpent / user.totalEarned < 0.3 ? 'text-red-400' : 'text-white'}>
                        {((user.totalSpent / user.totalEarned) * 100).toFixed(0)}%
                      </span>
                    </span>
                  </div>
                </div>

                {/* Flags */}
                {user.flags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {user.flags.map((flag, i) => (
                      <span key={i} className="bg-red-900/50 text-red-400 text-xs px-2 py-1 rounded flex items-center">
                        <AlertTriangle size={10} className="mr-1" />
                        {flag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Shadow Actions */}
                {user.shadowActions.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {user.shadowActions.map((action, i) => (
                      <span key={i} className="bg-purple-900/50 text-purple-400 text-xs px-2 py-1 rounded flex items-center">
                        <Ghost size={10} className="mr-1" />
                        {action}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                    <Eye size={16} className="mr-1" />
                    View Details
                  </button>
                  {user.trustScore < 50 && (
                    <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm">
                      Investigate
                    </button>
                  )}
                  {user.trustScore < 30 && (
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm">
                      <Ban size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Shadow Rules Tab */}
        {activeTab === 'rules' && (
          <div className="space-y-4">
            <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-purple-400 font-bold flex items-center mb-2">
                <Ghost size={20} className="mr-2" />
                Shadow Throttling
              </h3>
              <p className="text-gray-400 text-sm">
                These actions are applied silently without notifying the user. Users experience reduced rewards or added friction without knowing they're being throttled.
              </p>
            </div>

            {throttleRules.map(rule => (
              <div key={rule.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-white font-medium">{rule.condition}</p>
                    <p className="text-purple-400 text-sm flex items-center">
                      <Ghost size={14} className="mr-1" />
                      {rule.action}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setThrottleRules(prev => prev.map(r =>
                        r.id === rule.id ? { ...r, enabled: !r.enabled } : r
                      ));
                    }}
                    className={`w-12 h-6 rounded-full ${rule.enabled ? 'bg-purple-500' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${rule.enabled ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            ))}

            <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold">
              + Add Shadow Rule
            </button>

            {/* Progressive Friction */}
            <div className="bg-gray-800 rounded-xl p-4 mt-4">
              <h3 className="text-white font-bold mb-4">Progressive Friction Levels</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div>
                    <p className="text-white">Level 1: Light Friction</p>
                    <p className="text-gray-400 text-xs">Delayed coin credits (24h)</p>
                  </div>
                  <span className="text-yellow-400">Score 40-50</span>
                </div>
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div>
                    <p className="text-white">Level 2: Medium Friction</p>
                    <p className="text-gray-400 text-xs">Captcha + Reduced earning rate</p>
                  </div>
                  <span className="text-orange-400">Score 30-40</span>
                </div>
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div>
                    <p className="text-white">Level 3: Heavy Friction</p>
                    <p className="text-gray-400 text-xs">Manual verification + 7-day delays</p>
                  </div>
                  <span className="text-red-400">Score 20-30</span>
                </div>
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div>
                    <p className="text-white">Level 4: Soft Block</p>
                    <p className="text-gray-400 text-xs">No earning, spending only</p>
                  </div>
                  <span className="text-red-500">Score &lt; 20</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Detection Patterns Tab */}
        {activeTab === 'patterns' && (
          <div className="space-y-4">
            {Object.entries(detectionPatterns).map(([category, patterns]) => (
              <div key={category} className="bg-gray-800 rounded-xl p-4">
                <h3 className="text-white font-bold mb-3 capitalize flex items-center">
                  {category === 'billUpload' && <Upload size={18} className="mr-2 text-blue-400" />}
                  {category === 'reviewFarming' && <MessageSquare size={18} className="mr-2 text-yellow-400" />}
                  {category === 'referralAbuse' && <Users size={18} className="mr-2 text-green-400" />}
                  {category === 'coinFarming' && <Activity size={18} className="mr-2 text-red-400" />}
                  {category.replace(/([A-Z])/g, ' $1')} Detection
                </h3>
                <div className="space-y-2">
                  {patterns.map((pattern, i) => (
                    <div key={i} className="flex items-center bg-gray-700/50 rounded-lg p-3">
                      <CheckCircle size={16} className="text-green-400 mr-3" />
                      <span className="text-gray-300 text-sm">{pattern}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUserTrustScore;
