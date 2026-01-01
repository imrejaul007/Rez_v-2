import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Users, Shield, Settings, Crown, Store, MapPin,
  ChevronRight, ChevronDown, Lock, Unlock, Eye, Edit2, Search,
  Filter, CheckCircle, XCircle, AlertTriangle, Activity, Globe,
  Layers, Target, FileText, Key, UserCog, Building2, Zap,
  Bell, DollarSign, ShoppingCart, Gift, Star, Clock
} from 'lucide-react';

const UserAccessGovernance = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('hierarchy');

  const tabs = [
    { id: 'hierarchy', label: 'Access Hierarchy', icon: Layers },
    { id: 'permissions', label: 'User Permissions', icon: Shield },
    { id: 'data-flow', label: 'Data Flow', icon: Activity },
    { id: 'restrictions', label: 'Restrictions', icon: Lock }
  ];

  // Access hierarchy data
  const accessHierarchy = {
    hq: {
      name: 'HQ (Headquarters)',
      icon: Crown,
      color: 'yellow',
      description: 'Supreme authority over entire platform',
      controls: [
        'Global rules & policies',
        'Zone creation & management',
        'Platform-wide settings',
        'Emergency controls',
        'All merchant governance',
        'All user governance'
      ]
    },
    zones: {
      name: 'Zone Admins',
      icon: MapPin,
      color: 'blue',
      description: 'Regional or functional division control',
      controls: [
        'Zone-specific rules (within HQ limits)',
        'Merchant oversight in zone',
        'Regional campaigns',
        'Zone compliance',
        'Zone analytics',
        'Zone support escalations'
      ]
    },
    merchants: {
      name: 'Merchants',
      icon: Store,
      color: 'green',
      description: 'Business operations within their store',
      controls: [
        'Store settings & hours',
        'Product catalog',
        'Pricing (within limits)',
        'Staff management',
        'Local marketing',
        'Customer service'
      ]
    },
    users: {
      name: 'End Users',
      icon: Users,
      color: 'purple',
      description: 'Consumer-level access',
      controls: [
        'Profile & preferences',
        'Order history',
        'Wallet & coins',
        'Wishlist & cart',
        'Reviews & ratings',
        'Support requests'
      ]
    }
  };

  // User permission sources
  const permissionSources = [
    {
      source: 'HQ (Platform-wide)',
      icon: Crown,
      color: 'yellow',
      permissions: [
        { name: 'Coin Earning Rules', description: 'How users earn coins across platform' },
        { name: 'Redemption Limits', description: 'Maximum coins redeemable per transaction' },
        { name: 'KYC Requirements', description: 'Verification requirements for high-value actions' },
        { name: 'Trust Score Algorithm', description: 'How user trust is calculated' },
        { name: 'Referral Rewards', description: 'Bonus for referring new users' },
        { name: 'Gamification Rules', description: 'Missions, challenges, leaderboards' }
      ]
    },
    {
      source: 'Zone Admin',
      icon: MapPin,
      color: 'blue',
      permissions: [
        { name: 'Regional Offers', description: 'Zone-specific deals and discounts' },
        { name: 'Local Compliance', description: 'Region-specific requirements' },
        { name: 'Delivery Options', description: 'Available delivery methods in zone' },
        { name: 'Payment Methods', description: 'Accepted payment types in region' },
        { name: 'Support Channels', description: 'Local language support availability' },
        { name: 'Featured Content', description: 'Region-specific promotions' }
      ]
    },
    {
      source: 'Merchant',
      icon: Store,
      color: 'green',
      permissions: [
        { name: 'Store-specific Offers', description: 'Discounts at this merchant only' },
        { name: 'Loyalty Programs', description: 'Merchant-specific rewards' },
        { name: 'Booking Availability', description: 'When user can book services' },
        { name: 'Product Access', description: 'What products user can view/buy' },
        { name: 'Membership Tiers', description: 'VIP status at this merchant' },
        { name: 'Credit Terms', description: 'Store credit availability' }
      ]
    }
  ];

  // Data flow rules
  const dataFlowRules = [
    {
      from: 'User',
      to: 'Merchant',
      data: ['Order details', 'Contact (masked)', 'Delivery address', 'Preferences'],
      conditions: 'Only when user places order'
    },
    {
      from: 'User',
      to: 'Zone Admin',
      data: ['Aggregated behavior', 'Complaint tickets', 'Anonymized analytics'],
      conditions: 'For regional optimization only'
    },
    {
      from: 'User',
      to: 'HQ',
      data: ['Anonymized usage', 'Platform feedback', 'Aggregated trends'],
      conditions: 'For platform improvement'
    },
    {
      from: 'Merchant',
      to: 'User',
      data: ['Product info', 'Offers', 'Order status', 'Loyalty points'],
      conditions: 'When user interacts with merchant'
    },
    {
      from: 'Zone Admin',
      to: 'User',
      data: ['Regional offers', 'Local events', 'Zone announcements'],
      conditions: 'Based on user location'
    },
    {
      from: 'HQ',
      to: 'User',
      data: ['Platform rules', 'Coin rates', 'Feature access', 'Security alerts'],
      conditions: 'Platform-wide policies'
    }
  ];

  // User restrictions by tier
  const userRestrictions = [
    {
      tier: 'New User',
      color: 'gray',
      restrictions: [
        { name: 'Transaction Limit', value: '₹5,000/day' },
        { name: 'Coin Earning', value: '100/day max' },
        { name: 'Referral Bonus', value: 'Locked until KYC' },
        { name: 'High-value Items', value: 'Require OTP' },
        { name: 'Withdrawal', value: 'Not available' }
      ]
    },
    {
      tier: 'Verified User',
      color: 'blue',
      restrictions: [
        { name: 'Transaction Limit', value: '₹25,000/day' },
        { name: 'Coin Earning', value: '500/day max' },
        { name: 'Referral Bonus', value: 'Enabled' },
        { name: 'High-value Items', value: 'Normal checkout' },
        { name: 'Withdrawal', value: 'To verified bank' }
      ]
    },
    {
      tier: 'Premium User',
      color: 'purple',
      restrictions: [
        { name: 'Transaction Limit', value: '₹1,00,000/day' },
        { name: 'Coin Earning', value: '2,000/day max' },
        { name: 'Referral Bonus', value: '2x bonus' },
        { name: 'High-value Items', value: 'Priority access' },
        { name: 'Withdrawal', value: 'Instant payout' }
      ]
    },
    {
      tier: 'Prive Member',
      color: 'gold',
      restrictions: [
        { name: 'Transaction Limit', value: 'Unlimited' },
        { name: 'Coin Earning', value: '5,000/day max' },
        { name: 'Referral Bonus', value: '5x bonus + rewards' },
        { name: 'High-value Items', value: 'Early access' },
        { name: 'Withdrawal', value: 'Priority processing' }
      ]
    }
  ];

  const renderHierarchy = () => (
    <div className="space-y-6">
      {/* Hierarchy Visual */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-6">Control Hierarchy</h3>
        <div className="space-y-4">
          {Object.entries(accessHierarchy).map(([key, level], index) => {
            const Icon = level.icon;
            return (
              <div key={key}>
                <div className={`flex items-start gap-4 p-4 bg-${level.color}-500/10 rounded-xl border border-${level.color}-500/30`}>
                  <div className={`w-14 h-14 bg-${level.color}-500/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 text-${level.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-white font-semibold text-lg">{level.name}</h4>
                      <span className={`px-2 py-0.5 bg-${level.color}-500/20 rounded text-${level.color}-400 text-xs`}>
                        Level {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-3">{level.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {level.controls.map((control, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800 rounded text-gray-300 text-xs">
                          {control}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {index < Object.keys(accessHierarchy).length - 1 && (
                  <div className="flex justify-center my-2">
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Principle */}
      <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/30">
        <div className="flex items-start gap-4">
          <Shield className="w-8 h-8 text-purple-400 flex-shrink-0" />
          <div>
            <h4 className="text-white font-semibold mb-2">Cascading Permission Principle</h4>
            <p className="text-gray-300">
              Permissions flow downward. HQ sets global rules that Zone Admins can customize (within limits),
              Merchants can further customize for their store (within zone limits), and Users receive
              the final combined permissions based on their location, merchant, and personal tier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPermissions = () => (
    <div className="space-y-6">
      {/* Permission Sources */}
      {permissionSources.map((source, index) => {
        const Icon = source.icon;
        return (
          <div key={index} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
            <div className={`p-4 bg-${source.color}-500/10 border-b border-gray-700 flex items-center gap-3`}>
              <Icon className={`w-6 h-6 text-${source.color}-400`} />
              <h3 className="text-white font-semibold">Permissions from {source.source}</h3>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3">
              {source.permissions.map((perm, i) => (
                <div key={i} className="p-3 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-white font-medium">{perm.name}</span>
                  </div>
                  <p className="text-gray-400 text-sm ml-6">{perm.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderDataFlow = () => (
    <div className="space-y-6">
      {/* Data Flow Rules */}
      <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-white font-semibold">Data Flow Rules</h3>
          <p className="text-gray-400 text-sm mt-1">How data flows between hierarchy levels</p>
        </div>
        <div className="divide-y divide-gray-700">
          {dataFlowRules.map((rule, index) => (
            <div key={index} className="p-4 hover:bg-gray-700/30">
              <div className="flex items-center gap-4 mb-3">
                <div className="px-3 py-1 bg-blue-500/20 rounded text-blue-400 text-sm font-medium">
                  {rule.from}
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
                <div className="px-3 py-1 bg-green-500/20 rounded text-green-400 text-sm font-medium">
                  {rule.to}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {rule.data.map((item, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-700 rounded text-gray-300 text-xs">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
                {rule.conditions}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy Protections */}
      <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-xl p-6 border border-green-500/30">
        <div className="flex items-start gap-4">
          <Lock className="w-8 h-8 text-green-400 flex-shrink-0" />
          <div>
            <h4 className="text-white font-semibold mb-2">Privacy Protections</h4>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span>User phone/email masked from merchants until order confirmed</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span>No personal data shared with Zone Admins - only aggregates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span>HQ sees anonymized platform-wide trends only</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Users can request data deletion (right to be forgotten)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRestrictions = () => (
    <div className="space-y-6">
      {/* User Tier Restrictions */}
      <div className="grid grid-cols-2 gap-4">
        {userRestrictions.map((tier, index) => (
          <div key={index} className={`bg-gray-800/50 rounded-xl border border-${tier.color}-500/30 overflow-hidden`}>
            <div className={`p-4 bg-${tier.color}-500/10 border-b border-gray-700`}>
              <h4 className="text-white font-semibold">{tier.tier}</h4>
            </div>
            <div className="p-4 space-y-3">
              {tier.restrictions.map((restriction, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{restriction.name}</span>
                  <span className="text-white text-sm font-medium">{restriction.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Global Restrictions */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-4">Global User Restrictions (Set by HQ)</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Max Orders/Day', value: '20', icon: ShoppingCart },
            { name: 'Wallet Top-up Limit', value: '₹10,000/day', icon: DollarSign },
            { name: 'Coin Expiry', value: '12 months', icon: Clock },
            { name: 'Review Frequency', value: '1 per order', icon: Star },
            { name: 'Gift Card Purchase', value: '₹25,000/month', icon: Gift },
            { name: 'Referral Limit', value: '50/month', icon: Users }
          ].map((restriction, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg">
              <restriction.icon className="w-6 h-6 text-blue-400" />
              <div>
                <div className="text-white font-medium">{restriction.name}</div>
                <div className="text-gray-400 text-sm">{restriction.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-purple-900/20 to-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/admin/hq-command')} className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">User Access Governance</h1>
                <p className="text-gray-400 text-sm">How users receive permissions from HQ → Zone → Merchant</p>
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
                    ? 'bg-purple-600 text-white'
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
        {activeTab === 'hierarchy' && renderHierarchy()}
        {activeTab === 'permissions' && renderPermissions()}
        {activeTab === 'data-flow' && renderDataFlow()}
        {activeTab === 'restrictions' && renderRestrictions()}
      </div>
    </div>
  );
};

export default UserAccessGovernance;
