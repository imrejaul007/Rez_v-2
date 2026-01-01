import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Store, Users, Shield, Settings, Search, Filter,
  Eye, Edit2, Lock, Unlock, AlertTriangle, CheckCircle, XCircle,
  TrendingUp, DollarSign, Clock, MapPin, Star, MoreVertical,
  Crown, FileText, Activity, Ban, RefreshCw, ChevronDown,
  ChevronRight, UserCog, Building2, Percent, Calendar, Zap
} from 'lucide-react';

const MerchantGovernance = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMerchant, setSelectedMerchant] = useState(null);
  const [showActionModal, setShowActionModal] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Store },
    { id: 'tiers', label: 'Tier Management', icon: Crown },
    { id: 'permissions', label: 'Permission Matrix', icon: Shield },
    { id: 'compliance', label: 'Compliance', icon: FileText },
    { id: 'actions', label: 'Bulk Actions', icon: Zap }
  ];

  // Merchant stats
  const merchantStats = {
    total: 15420,
    active: 12850,
    pending: 1245,
    suspended: 325,
    newThisMonth: 456,
    avgRating: 4.3,
    totalGMV: 450000000,
    avgCommission: 11.2
  };

  // Merchant tiers
  const merchantTiers = [
    {
      id: 'platinum',
      name: 'Platinum',
      icon: '💎',
      color: 'purple',
      criteria: 'GMV > ₹50L/month',
      benefits: ['2% commission discount', 'Priority support', 'Featured placement', 'Early access'],
      merchants: 245,
      avgGMV: 8500000
    },
    {
      id: 'gold',
      name: 'Gold',
      icon: '🥇',
      color: 'yellow',
      criteria: 'GMV > ₹20L/month',
      benefits: ['1% commission discount', 'Dedicated account manager', 'Priority listing'],
      merchants: 890,
      avgGMV: 3200000
    },
    {
      id: 'silver',
      name: 'Silver',
      icon: '🥈',
      color: 'gray',
      criteria: 'GMV > ₹5L/month',
      benefits: ['0.5% commission discount', 'Business insights'],
      merchants: 2450,
      avgGMV: 850000
    },
    {
      id: 'bronze',
      name: 'Bronze',
      icon: '🥉',
      color: 'orange',
      criteria: 'GMV > ₹1L/month',
      benefits: ['Standard support', 'Basic analytics'],
      merchants: 4120,
      avgGMV: 280000
    },
    {
      id: 'starter',
      name: 'Starter',
      icon: '🌱',
      color: 'green',
      criteria: 'All new merchants',
      benefits: ['Onboarding support', 'Training materials'],
      merchants: 5145,
      avgGMV: 45000
    }
  ];

  // Permission categories
  const permissionMatrix = [
    {
      category: 'Products & Catalog',
      permissions: [
        { name: 'Create products', starter: true, bronze: true, silver: true, gold: true, platinum: true },
        { name: 'Unlimited products', starter: false, bronze: true, silver: true, gold: true, platinum: true },
        { name: 'Bulk upload', starter: false, bronze: false, silver: true, gold: true, platinum: true },
        { name: 'API access', starter: false, bronze: false, silver: false, gold: true, platinum: true }
      ]
    },
    {
      category: 'Marketing & Offers',
      permissions: [
        { name: 'Create offers', starter: true, bronze: true, silver: true, gold: true, platinum: true },
        { name: 'Flash sales', starter: false, bronze: true, silver: true, gold: true, platinum: true },
        { name: 'Featured placement', starter: false, bronze: false, silver: true, gold: true, platinum: true },
        { name: 'Push notifications', starter: false, bronze: false, silver: false, gold: true, platinum: true }
      ]
    },
    {
      category: 'Analytics & Reports',
      permissions: [
        { name: 'Basic analytics', starter: true, bronze: true, silver: true, gold: true, platinum: true },
        { name: 'Advanced reports', starter: false, bronze: false, silver: true, gold: true, platinum: true },
        { name: 'Competitor insights', starter: false, bronze: false, silver: false, gold: true, platinum: true },
        { name: 'AI recommendations', starter: false, bronze: false, silver: false, gold: false, platinum: true }
      ]
    },
    {
      category: 'Support & Account',
      permissions: [
        { name: 'Email support', starter: true, bronze: true, silver: true, gold: true, platinum: true },
        { name: 'Chat support', starter: false, bronze: true, silver: true, gold: true, platinum: true },
        { name: 'Phone support', starter: false, bronze: false, silver: true, gold: true, platinum: true },
        { name: 'Dedicated manager', starter: false, bronze: false, silver: false, gold: true, platinum: true }
      ]
    }
  ];

  // Sample merchants
  const merchants = [
    {
      id: 1,
      name: 'Spice Garden Restaurant',
      category: 'Food & Dining',
      zone: 'North Zone',
      tier: 'gold',
      status: 'active',
      gmv: 3500000,
      commission: 12,
      rating: 4.5,
      teamSize: 8,
      joinedDate: '2023-02-15'
    },
    {
      id: 2,
      name: 'Fashion Hub',
      category: 'Fashion',
      zone: 'South Zone',
      tier: 'platinum',
      status: 'active',
      gmv: 9200000,
      commission: 10,
      rating: 4.8,
      teamSize: 15,
      joinedDate: '2022-11-08'
    },
    {
      id: 3,
      name: 'Tech World Electronics',
      category: 'Electronics',
      zone: 'West Zone',
      tier: 'silver',
      status: 'active',
      gmv: 1200000,
      commission: 11.5,
      rating: 4.2,
      teamSize: 5,
      joinedDate: '2023-06-20'
    },
    {
      id: 4,
      name: 'Green Grocers',
      category: 'Grocery',
      zone: 'East Zone',
      tier: 'bronze',
      status: 'pending',
      gmv: 450000,
      commission: 12,
      rating: 4.0,
      teamSize: 3,
      joinedDate: '2024-01-05'
    }
  ];

  const getTierColor = (tier) => {
    const colors = {
      platinum: 'purple',
      gold: 'yellow',
      silver: 'gray',
      bronze: 'orange',
      starter: 'green'
    };
    return colors[tier] || 'gray';
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <Store className="w-5 h-5 text-blue-400" />
            <span className="text-gray-400 text-sm">Total Merchants</span>
          </div>
          <div className="text-2xl font-bold text-white">{merchantStats.total.toLocaleString()}</div>
          <div className="text-green-400 text-sm">+{merchantStats.newThisMonth} this month</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-400 text-sm">Active</span>
          </div>
          <div className="text-2xl font-bold text-green-400">{merchantStats.active.toLocaleString()}</div>
          <div className="text-gray-400 text-sm">{((merchantStats.active/merchantStats.total)*100).toFixed(1)}% of total</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-400 text-sm">Total GMV</span>
          </div>
          <div className="text-2xl font-bold text-white">₹{(merchantStats.totalGMV/10000000).toFixed(0)}Cr</div>
          <div className="text-gray-400 text-sm">Avg commission: {merchantStats.avgCommission}%</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <Star className="w-5 h-5 text-purple-400" />
            <span className="text-gray-400 text-sm">Avg Rating</span>
          </div>
          <div className="text-2xl font-bold text-white">{merchantStats.avgRating}</div>
          <div className="text-gray-400 text-sm">Across all merchants</div>
        </div>
      </div>

      {/* Tier Distribution */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-4">Tier Distribution</h3>
        <div className="flex items-end gap-4 h-40">
          {merchantTiers.map(tier => (
            <div key={tier.id} className="flex-1 flex flex-col items-center">
              <div
                className={`w-full bg-${tier.color}-500/30 rounded-t-lg`}
                style={{ height: `${(tier.merchants / 6000) * 100}%` }}
              ></div>
              <div className="mt-2 text-center">
                <div className="text-lg">{tier.icon}</div>
                <div className="text-white text-sm">{tier.merchants}</div>
                <div className="text-gray-400 text-xs">{tier.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Merchants */}
      <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <h3 className="text-white font-semibold">Merchant Overview</h3>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search merchants..."
                className="bg-gray-900 border border-gray-700 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:border-blue-500 outline-none"
              />
            </div>
            <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
              <Filter className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-gray-900/50">
            <tr>
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Merchant</th>
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Zone</th>
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Tier</th>
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">GMV</th>
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Commission</th>
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Status</th>
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {merchants.map(merchant => (
              <tr key={merchant.id} className="hover:bg-gray-700/30">
                <td className="px-4 py-3">
                  <div>
                    <div className="text-white font-medium">{merchant.name}</div>
                    <div className="text-gray-400 text-sm">{merchant.category}</div>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-300">{merchant.zone}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs bg-${getTierColor(merchant.tier)}-500/20 text-${getTierColor(merchant.tier)}-400 capitalize`}>
                    {merchant.tier}
                  </span>
                </td>
                <td className="px-4 py-3 text-white">₹{(merchant.gmv/100000).toFixed(1)}L</td>
                <td className="px-4 py-3 text-gray-300">{merchant.commission}%</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      merchant.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                    <span className={merchant.status === 'active' ? 'text-green-400' : 'text-yellow-400'}>
                      {merchant.status}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-gray-700 rounded">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-700 rounded">
                      <Settings className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderTiers = () => (
    <div className="space-y-6">
      {/* Tier Cards */}
      <div className="grid grid-cols-5 gap-4">
        {merchantTiers.map(tier => (
          <div key={tier.id} className={`bg-gray-800/50 rounded-xl p-4 border border-${tier.color}-500/30 hover:border-${tier.color}-500 transition-all`}>
            <div className="text-3xl mb-2">{tier.icon}</div>
            <h4 className="text-white font-semibold">{tier.name}</h4>
            <div className="text-gray-400 text-sm mb-3">{tier.criteria}</div>
            <div className="text-2xl font-bold text-white mb-2">{tier.merchants}</div>
            <div className="text-gray-400 text-sm mb-4">merchants</div>
            <div className="space-y-1">
              {tier.benefits.slice(0, 2).map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  {benefit}
                </div>
              ))}
            </div>
            <button className="mt-4 w-full py-2 bg-gray-700 rounded-lg text-gray-300 text-sm hover:bg-gray-600">
              Configure
            </button>
          </div>
        ))}
      </div>

      {/* Tier Rules */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-4">Automatic Tier Upgrades</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-green-400" />
            <div className="flex-1">
              <div className="text-white font-medium">Performance-based Upgrades</div>
              <div className="text-gray-400 text-sm">Merchants are automatically upgraded when they meet tier criteria for 3 consecutive months</div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm">Enabled</span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg">
            <AlertTriangle className="w-8 h-8 text-yellow-400" />
            <div className="flex-1">
              <div className="text-white font-medium">Grace Period for Downgrades</div>
              <div className="text-gray-400 text-sm">Merchants have 2 months grace period before being downgraded for not meeting criteria</div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-yellow-500/20 rounded-full">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm">2 months</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPermissions = () => (
    <div className="space-y-6">
      {/* Permission Matrix Table */}
      <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-white font-semibold">Permission Matrix by Tier</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900/50">
              <tr>
                <th className="text-left text-gray-400 text-sm font-medium px-4 py-3 w-64">Permission</th>
                <th className="text-center text-gray-400 text-sm font-medium px-4 py-3">🌱 Starter</th>
                <th className="text-center text-gray-400 text-sm font-medium px-4 py-3">🥉 Bronze</th>
                <th className="text-center text-gray-400 text-sm font-medium px-4 py-3">🥈 Silver</th>
                <th className="text-center text-gray-400 text-sm font-medium px-4 py-3">🥇 Gold</th>
                <th className="text-center text-gray-400 text-sm font-medium px-4 py-3">💎 Platinum</th>
              </tr>
            </thead>
            <tbody>
              {permissionMatrix.map((category, catIndex) => (
                <React.Fragment key={catIndex}>
                  <tr className="bg-gray-900/30">
                    <td colSpan={6} className="px-4 py-2 text-blue-400 font-medium text-sm">
                      {category.category}
                    </td>
                  </tr>
                  {category.permissions.map((perm, permIndex) => (
                    <tr key={permIndex} className="border-t border-gray-700/50 hover:bg-gray-700/20">
                      <td className="px-4 py-3 text-gray-300">{perm.name}</td>
                      <td className="px-4 py-3 text-center">
                        {perm.starter ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {perm.bronze ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {perm.silver ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {perm.gold ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {perm.platinum ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCompliance = () => (
    <div className="space-y-6">
      {/* Compliance Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">KYC Verified</div>
          <div className="text-2xl font-bold text-green-400">13,850</div>
          <div className="text-gray-400 text-sm">89.8% of active</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">Pending KYC</div>
          <div className="text-2xl font-bold text-yellow-400">1,245</div>
          <div className="text-gray-400 text-sm">Awaiting verification</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">GST Registered</div>
          <div className="text-2xl font-bold text-blue-400">11,200</div>
          <div className="text-gray-400 text-sm">72.6% compliance</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">FSSAI (Food)</div>
          <div className="text-2xl font-bold text-purple-400">3,450</div>
          <div className="text-gray-400 text-sm">100% food merchants</div>
        </div>
      </div>

      {/* Compliance Requirements */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-4">Compliance Requirements</h3>
        <div className="space-y-4">
          {[
            { name: 'KYC Verification', required: true, deadline: 'Before first transaction' },
            { name: 'Bank Account Verification', required: true, deadline: 'Before first payout' },
            { name: 'GST Registration', required: false, deadline: 'If GMV > ₹20L/year' },
            { name: 'FSSAI License', required: true, deadline: 'For food businesses' },
            { name: 'Drug License', required: true, deadline: 'For pharmacy businesses' }
          ].map((req, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  req.required ? 'bg-red-500/20' : 'bg-yellow-500/20'
                }`}>
                  <FileText className={`w-5 h-5 ${req.required ? 'text-red-400' : 'text-yellow-400'}`} />
                </div>
                <div>
                  <div className="text-white font-medium">{req.name}</div>
                  <div className="text-gray-400 text-sm">{req.deadline}</div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs ${
                req.required ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {req.required ? 'Mandatory' : 'Conditional'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBulkActions = () => (
    <div className="space-y-6">
      {/* Bulk Action Cards */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { name: 'Suspend Merchants', icon: Ban, color: 'red', description: 'Temporarily suspend merchant accounts' },
          { name: 'Update Commission', icon: Percent, color: 'green', description: 'Bulk update commission rates' },
          { name: 'Upgrade Tier', icon: Crown, color: 'yellow', description: 'Mass tier upgrades' },
          { name: 'Send Notification', icon: Activity, color: 'blue', description: 'Broadcast to merchants' },
          { name: 'Export Data', icon: FileText, color: 'purple', description: 'Export merchant data' },
          { name: 'Sync Settlements', icon: RefreshCw, color: 'orange', description: 'Force settlement sync' }
        ].map((action, i) => (
          <button
            key={i}
            className={`bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-${action.color}-500/50 transition-all text-left`}
          >
            <action.icon className={`w-8 h-8 text-${action.color}-400 mb-3`} />
            <div className="text-white font-semibold">{action.name}</div>
            <div className="text-gray-400 text-sm mt-1">{action.description}</div>
          </button>
        ))}
      </div>

      {/* Action History */}
      <div className="bg-gray-800/50 rounded-xl border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-white font-semibold">Recent Bulk Actions</h3>
        </div>
        <div className="p-6 text-center text-gray-400">
          No recent bulk actions
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-green-900/20 to-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/admin/hq-command')} className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">Merchant Governance</h1>
                <p className="text-gray-400 text-sm">Control all merchant operations and permissions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 py-2 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'tiers' && renderTiers()}
        {activeTab === 'permissions' && renderPermissions()}
        {activeTab === 'compliance' && renderCompliance()}
        {activeTab === 'actions' && renderBulkActions()}
      </div>
    </div>
  );
};

export default MerchantGovernance;
