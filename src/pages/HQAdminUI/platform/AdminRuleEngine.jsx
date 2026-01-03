import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, FileText, Settings, Shield, Plus, Edit2, Trash2,
  Eye, Play, Pause, Copy, Search, Filter, ChevronDown, ChevronRight,
  DollarSign, Percent, Clock, Users, Store, MapPin, AlertTriangle,
  CheckCircle, XCircle, Zap, Target, Lock, Globe, Layers, Activity,
  Calendar, ToggleLeft, ToggleRight, Save, RefreshCw
} from 'lucide-react';

const AdminRuleEngine = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedRule, setSelectedRule] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', label: 'All Rules', count: 62 },
    { id: 'commission', label: 'Commission', count: 12 },
    { id: 'limits', label: 'Limits & Caps', count: 18 },
    { id: 'compliance', label: 'Compliance', count: 8 },
    { id: 'operations', label: 'Operations', count: 24 }
  ];

  const ruleCategories = [
    {
      id: 'commission',
      name: 'Commission Rules',
      icon: DollarSign,
      color: 'green',
      description: 'Control commission rates, tier-based fees, category-specific rates'
    },
    {
      id: 'limits',
      name: 'Limits & Caps',
      icon: Shield,
      color: 'blue',
      description: 'Set transaction limits, earning caps, redemption limits'
    },
    {
      id: 'compliance',
      name: 'Compliance Rules',
      icon: FileText,
      color: 'purple',
      description: 'KYC requirements, document verification, regulatory rules'
    },
    {
      id: 'operations',
      name: 'Operational Rules',
      icon: Settings,
      color: 'orange',
      description: 'SLAs, processing times, automation triggers'
    }
  ];

  const rules = [
    // Commission Rules
    {
      id: 1,
      name: 'Base Merchant Commission',
      category: 'commission',
      scope: 'global',
      scopeDetails: 'All Merchants',
      value: '10%',
      condition: 'Default rate for all transactions',
      status: 'active',
      priority: 1,
      createdBy: 'HQ',
      lastModified: '2024-01-15',
      overridable: true
    },
    {
      id: 2,
      name: 'Restaurant Commission',
      category: 'commission',
      scope: 'category',
      scopeDetails: 'Food & Dining',
      value: '15%',
      condition: 'All restaurant transactions',
      status: 'active',
      priority: 2,
      createdBy: 'HQ',
      lastModified: '2024-01-10',
      overridable: true
    },
    {
      id: 3,
      name: 'Premium Merchant Discount',
      category: 'commission',
      scope: 'tier',
      scopeDetails: 'Gold & Platinum Merchants',
      value: '-2%',
      condition: 'Merchants with >₹10L monthly GMV',
      status: 'active',
      priority: 3,
      createdBy: 'HQ',
      lastModified: '2024-01-12',
      overridable: false
    },
    // Limit Rules
    {
      id: 4,
      name: 'Daily Coin Earning Cap',
      category: 'limits',
      scope: 'global',
      scopeDetails: 'All Users',
      value: '500 coins',
      condition: 'Per user per day',
      status: 'active',
      priority: 1,
      createdBy: 'HQ',
      lastModified: '2024-01-14',
      overridable: true
    },
    {
      id: 5,
      name: 'Single Transaction Limit',
      category: 'limits',
      scope: 'global',
      scopeDetails: 'All Users',
      value: '₹50,000',
      condition: 'Maximum per transaction',
      status: 'active',
      priority: 1,
      createdBy: 'HQ',
      lastModified: '2024-01-08',
      overridable: false
    },
    {
      id: 6,
      name: 'Flash Sale Duration',
      category: 'limits',
      scope: 'global',
      scopeDetails: 'All Merchants',
      value: '4 hours',
      condition: 'Maximum flash sale duration',
      status: 'active',
      priority: 1,
      createdBy: 'HQ',
      lastModified: '2024-01-05',
      overridable: true
    },
    // Compliance Rules
    {
      id: 7,
      name: 'Merchant KYC Requirement',
      category: 'compliance',
      scope: 'global',
      scopeDetails: 'All Merchants',
      value: 'Mandatory',
      condition: 'Before first transaction',
      status: 'active',
      priority: 1,
      createdBy: 'HQ',
      lastModified: '2024-01-01',
      overridable: false
    },
    {
      id: 8,
      name: 'User Phone Verification',
      category: 'compliance',
      scope: 'global',
      scopeDetails: 'All Users',
      value: 'Required',
      condition: 'OTP verification mandatory',
      status: 'active',
      priority: 1,
      createdBy: 'HQ',
      lastModified: '2024-01-01',
      overridable: false
    },
    // Operational Rules
    {
      id: 9,
      name: 'Refund Window',
      category: 'operations',
      scope: 'global',
      scopeDetails: 'All Orders',
      value: '7 days',
      condition: 'From delivery date',
      status: 'active',
      priority: 1,
      createdBy: 'HQ',
      lastModified: '2024-01-03',
      overridable: true
    },
    {
      id: 10,
      name: 'Merchant Payout Frequency',
      category: 'operations',
      scope: 'global',
      scopeDetails: 'All Merchants',
      value: 'T+2',
      condition: 'Business days after transaction',
      status: 'active',
      priority: 1,
      createdBy: 'HQ',
      lastModified: '2024-01-02',
      overridable: false
    },
    {
      id: 11,
      name: 'Order Auto-Cancellation',
      category: 'operations',
      scope: 'global',
      scopeDetails: 'Unconfirmed Orders',
      value: '30 minutes',
      condition: 'If merchant doesn\'t accept',
      status: 'active',
      priority: 1,
      createdBy: 'HQ',
      lastModified: '2024-01-06',
      overridable: true
    },
    {
      id: 12,
      name: 'North Zone Commission Override',
      category: 'commission',
      scope: 'zone',
      scopeDetails: 'North Zone',
      value: '12%',
      condition: 'Zone-specific base rate',
      status: 'active',
      priority: 4,
      createdBy: 'North Zone Admin',
      lastModified: '2024-01-11',
      overridable: false
    }
  ];

  const filteredRules = rules.filter(rule => {
    const matchesTab = activeTab === 'all' || rule.category === activeTab;
    const matchesSearch = rule.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         rule.scopeDetails.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getScopeIcon = (scope) => {
    switch (scope) {
      case 'global': return Globe;
      case 'zone': return MapPin;
      case 'category': return Layers;
      case 'tier': return Target;
      default: return Globe;
    }
  };

  const getScopeColor = (scope) => {
    switch (scope) {
      case 'global': return 'yellow';
      case 'zone': return 'blue';
      case 'category': return 'purple';
      case 'tier': return 'green';
      default: return 'gray';
    }
  };

  const renderRuleCard = (rule) => {
    const ScopeIcon = getScopeIcon(rule.scope);
    const scopeColor = getScopeColor(rule.scope);

    return (
      <div
        key={rule.id}
        className="bg-gray-800/50 rounded-xl border border-gray-700 p-4 hover:border-blue-500/50 transition-all"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 bg-${rule.category === 'commission' ? 'green' : rule.category === 'limits' ? 'blue' : rule.category === 'compliance' ? 'purple' : 'orange'}-500/20 rounded-lg flex items-center justify-center`}>
              {rule.category === 'commission' && <DollarSign className="w-5 h-5 text-green-400" />}
              {rule.category === 'limits' && <Shield className="w-5 h-5 text-blue-400" />}
              {rule.category === 'compliance' && <FileText className="w-5 h-5 text-purple-400" />}
              {rule.category === 'operations' && <Settings className="w-5 h-5 text-orange-400" />}
            </div>
            <div>
              <h4 className="text-white font-medium">{rule.name}</h4>
              <div className="flex items-center gap-2 mt-1">
                <ScopeIcon className={`w-3 h-3 text-${scopeColor}-400`} />
                <span className={`text-${scopeColor}-400 text-xs`}>{rule.scopeDetails}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {rule.status === 'active' ? (
              <span className="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded text-green-400 text-xs">
                <CheckCircle className="w-3 h-3" /> Active
              </span>
            ) : (
              <span className="flex items-center gap-1 px-2 py-1 bg-gray-500/20 rounded text-gray-400 text-xs">
                <Pause className="w-3 h-3" /> Paused
              </span>
            )}
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-400 text-xs mb-1">Value</div>
              <div className="text-xl font-bold text-white">{rule.value}</div>
            </div>
            <div className="text-right">
              <div className="text-gray-400 text-xs mb-1">Condition</div>
              <div className="text-gray-300 text-sm">{rule.condition}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>Created by: {rule.createdBy}</span>
            <span>Modified: {rule.lastModified}</span>
          </div>
          <div className="flex items-center gap-2">
            {rule.overridable && (
              <span className="text-yellow-400 text-xs">Overridable</span>
            )}
            {!rule.overridable && (
              <Lock className="w-4 h-4 text-gray-500" />
            )}
            <button className="p-1.5 hover:bg-gray-700 rounded">
              <Edit2 className="w-4 h-4 text-gray-400" />
            </button>
            <button className="p-1.5 hover:bg-gray-700 rounded">
              <Copy className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderCreateModal = () => (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-700 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Create New Rule</h2>
          <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-white">
            <XCircle className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Rule Category */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Rule Category</label>
            <div className="grid grid-cols-2 gap-3">
              {ruleCategories.map(cat => (
                <button
                  key={cat.id}
                  className={`p-4 rounded-xl border border-gray-700 hover:border-${cat.color}-500/50 text-left transition-all`}
                >
                  <cat.icon className={`w-6 h-6 text-${cat.color}-400 mb-2`} />
                  <div className="text-white font-medium">{cat.name}</div>
                  <div className="text-gray-400 text-xs mt-1">{cat.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Rule Name */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Rule Name</label>
            <input
              type="text"
              placeholder="e.g., Premium Merchant Discount"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none"
            />
          </div>

          {/* Rule Scope */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Rule Scope</label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: 'global', label: 'Global', icon: Globe, desc: 'All zones' },
                { id: 'zone', label: 'Zone', icon: MapPin, desc: 'Specific zone' },
                { id: 'category', label: 'Category', icon: Layers, desc: 'Business type' },
                { id: 'tier', label: 'Tier', icon: Target, desc: 'Merchant tier' }
              ].map(scope => (
                <button
                  key={scope.id}
                  className="p-3 rounded-lg border border-gray-700 hover:border-blue-500/50 text-center transition-all"
                >
                  <scope.icon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                  <div className="text-white text-sm">{scope.label}</div>
                  <div className="text-gray-500 text-xs">{scope.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Rule Value */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Value</label>
              <input
                type="text"
                placeholder="e.g., 10% or ₹500"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Priority</label>
              <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none">
                <option value="1">1 - Highest</option>
                <option value="2">2 - High</option>
                <option value="3">3 - Medium</option>
                <option value="4">4 - Low</option>
                <option value="5">5 - Lowest</option>
              </select>
            </div>
          </div>

          {/* Condition */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Condition / Description</label>
            <textarea
              rows={3}
              placeholder="When should this rule apply?"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none resize-none"
            />
          </div>

          {/* Options */}
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded bg-gray-900 border-gray-700" defaultChecked />
              <span className="text-gray-300 text-sm">Allow zone override</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded bg-gray-900 border-gray-700" />
              <span className="text-gray-300 text-sm">Active immediately</span>
            </label>
          </div>
        </div>

        <div className="p-6 border-t border-gray-700 flex justify-end gap-3">
          <button
            onClick={() => setShowCreateModal(false)}
            className="px-6 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700"
          >
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700">
            Create Rule
          </button>
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
                <h1 className="text-xl font-bold text-white">Rule Engine</h1>
                <p className="text-gray-400 text-sm">Configure platform-wide rules and policies</p>
              </div>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Rule
            </button>
          </div>
        </div>
      </div>

      {/* Rule Hierarchy Info */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-4 border border-yellow-500/30">
          <div className="flex items-center gap-3 mb-2">
            <Layers className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">Rule Priority Hierarchy</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400">Global (HQ)</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400">Zone Override</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400">Category Override</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <div className="flex items-center gap-2">
              <Store className="w-4 h-4 text-green-400" />
              <span className="text-green-400">Merchant Specific</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search rules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white focus:border-blue-500 outline-none"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700">
            <Filter className="w-4 h-4" />
            Filters
          </button>
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
                {tab.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-gray-700'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Category Overview */}
        {activeTab === 'all' && (
          <div className="grid grid-cols-4 gap-4 mb-6">
            {ruleCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-${cat.color}-500/50 transition-all text-left`}
              >
                <cat.icon className={`w-8 h-8 text-${cat.color}-400 mb-2`} />
                <div className="text-white font-semibold">{cat.name}</div>
                <div className="text-gray-400 text-sm">
                  {rules.filter(r => r.category === cat.id).length} rules
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Rules Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filteredRules.map(rule => renderRuleCard(rule))}
        </div>

        {filteredRules.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <div className="text-gray-400">No rules found</div>
          </div>
        )}
      </div>

      {/* Create Modal */}
      {showCreateModal && renderCreateModal()}
    </div>
  );
};

export default AdminRuleEngine;
