import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Shield, AlertTriangle, Store, CheckCircle, XCircle,
  Clock, Zap, ChevronRight, Filter, Search, Plus, Edit2, Trash2,
  Lock, Unlock, Eye, Users, TrendingUp, Calendar, MapPin,
  Crown, Building, Tag, Percent, Bell, FileText, Download,
  ToggleLeft, ToggleRight, AlertCircle, Target, Layers
} from 'lucide-react';

const AdminMandatoryOffers = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tabs = [
    { id: 'active', label: 'Active Mandates', count: 8 },
    { id: 'scheduled', label: 'Scheduled', count: 3 },
    { id: 'compliance', label: 'Compliance', count: 156 },
    { id: 'history', label: 'History', count: 45 }
  ];

  // Mandatory offer types
  const mandateTypes = [
    { id: 'minimum-discount', label: 'Minimum Discount', icon: Percent, color: 'green' },
    { id: 'price-cap', label: 'Price Cap', icon: Lock, color: 'blue' },
    { id: 'mandatory-participation', label: 'Event Participation', icon: Calendar, color: 'purple' },
    { id: 'category-coverage', label: 'Category Coverage', icon: Layers, color: 'orange' },
    { id: 'service-standard', label: 'Service Standard', icon: Shield, color: 'cyan' }
  ];

  // Active mandatory rules
  const activeMandates = [
    {
      id: 'MAN001',
      title: 'Diwali Minimum Discount',
      type: 'minimum-discount',
      description: 'All merchants must offer minimum 10% discount during Diwali',
      rule: 'Minimum 10% OFF on all products',
      scope: 'All Categories',
      targetMerchants: 15420,
      compliantMerchants: 14890,
      nonCompliant: 530,
      startDate: '2024-10-20',
      endDate: '2024-11-05',
      priority: 'critical',
      enforcement: 'auto-suspend',
      createdBy: 'HQ Policy Team',
      zones: ['All Zones']
    },
    {
      id: 'MAN002',
      title: 'Essential Goods Price Cap',
      type: 'price-cap',
      description: 'Maximum price limits on essential items during emergency',
      rule: 'Price cannot exceed MRP + 5%',
      scope: 'Grocery, Pharmacy',
      targetMerchants: 4200,
      compliantMerchants: 4150,
      nonCompliant: 50,
      startDate: '2024-01-01',
      endDate: null,
      isEvergreen: true,
      priority: 'critical',
      enforcement: 'auto-flag',
      createdBy: 'Compliance Team',
      zones: ['All Zones']
    },
    {
      id: 'MAN003',
      title: 'Republic Day Sale Participation',
      type: 'mandatory-participation',
      description: 'Gold & Platinum merchants must participate in Republic Day sale',
      rule: 'Must list at least 20% inventory with min 15% discount',
      scope: 'Gold, Platinum Merchants',
      targetMerchants: 2800,
      compliantMerchants: 2650,
      nonCompliant: 150,
      startDate: '2024-01-20',
      endDate: '2024-01-28',
      priority: 'high',
      enforcement: 'tier-downgrade',
      createdBy: 'Marketing Team',
      zones: ['North Zone', 'West Zone']
    },
    {
      id: 'MAN004',
      title: 'Weekend Flash Deal Quota',
      type: 'category-coverage',
      description: 'Each category must have minimum deals during weekends',
      rule: 'Min 5 products per category at 20%+ discount',
      scope: 'All Categories',
      targetMerchants: 8500,
      compliantMerchants: 7900,
      nonCompliant: 600,
      startDate: 'Every Weekend',
      endDate: null,
      isRecurring: true,
      priority: 'medium',
      enforcement: 'visibility-reduce',
      createdBy: 'Category Team',
      zones: ['Metro Cities']
    }
  ];

  // Non-compliant merchants
  const nonCompliantMerchants = [
    {
      id: 'M001',
      name: 'Fashion Hub',
      category: 'Fashion',
      tier: 'Gold',
      mandate: 'Diwali Minimum Discount',
      violation: 'Only 5% discount offered',
      required: '10% minimum',
      daysOverdue: 3,
      action: 'Warning Sent',
      nextAction: 'Auto-suspend in 24h'
    },
    {
      id: 'M002',
      name: 'Grocery Mart',
      category: 'Grocery',
      tier: 'Silver',
      mandate: 'Essential Goods Price Cap',
      violation: 'Rice priced 15% above MRP',
      required: 'Max MRP + 5%',
      daysOverdue: 1,
      action: 'Price Flagged',
      nextAction: 'Manual Review'
    },
    {
      id: 'M003',
      name: 'Tech World',
      category: 'Electronics',
      tier: 'Platinum',
      mandate: 'Republic Day Sale Participation',
      violation: 'Only 10% inventory listed',
      required: '20% minimum',
      daysOverdue: 2,
      action: 'Reminder Sent',
      nextAction: 'Tier Review'
    }
  ];

  const getPriorityColor = (priority) => {
    const colors = {
      critical: 'red',
      high: 'orange',
      medium: 'yellow',
      low: 'blue'
    };
    return colors[priority] || 'gray';
  };

  const getComplianceRate = (mandate) => {
    return Math.round((mandate.compliantMerchants / mandate.targetMerchants) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900/50 via-gray-900 to-red-900/50 border-b border-gray-800">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                  <Shield className="w-6 h-6 text-red-400" />
                  Mandatory Offers Control
                </h1>
                <p className="text-gray-400 text-sm">HQ-enforced rules merchants MUST follow</p>
              </div>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Mandate
            </button>
          </div>
        </div>

        {/* Flow Indicator */}
        <div className="px-4 pb-4">
          <div className="bg-gray-800/50 rounded-xl p-3 border border-red-500/30">
            <div className="flex items-center justify-center gap-2 text-xs">
              <Crown className="w-4 h-4 text-red-400" />
              <span className="text-red-400 font-medium">HQ Creates Mandate</span>
              <ChevronRight className="w-3 h-3 text-gray-500" />
              <Store className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-medium">Merchants MUST Comply</span>
              <ChevronRight className="w-3 h-3 text-gray-500" />
              <Users className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium">Users See Guaranteed Offers</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4 pb-4">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {tab.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id ? 'bg-red-500' : 'bg-gray-700'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-white">8</div>
            <div className="text-gray-400 text-sm">Active Mandates</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-green-400">96.2%</div>
            <div className="text-gray-400 text-sm">Avg Compliance</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-red-400">530</div>
            <div className="text-gray-400 text-sm">Non-Compliant</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-orange-400">12</div>
            <div className="text-gray-400 text-sm">Pending Actions</div>
          </div>
        </div>
      </div>

      {/* Mandate Types Quick Filter */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-gray-600 text-white'
                : 'bg-gray-800 text-gray-400'
            }`}
          >
            All Types
          </button>
          {mandateTypes.map(type => (
            <button
              key={type.id}
              onClick={() => setSelectedCategory(type.id)}
              className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap flex items-center gap-1 ${
                selectedCategory === type.id
                  ? `bg-${type.color}-600 text-white`
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              <type.icon className="w-3 h-3" />
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 space-y-4">
        {activeTab === 'active' && (
          <>
            {/* Active Mandates */}
            {activeMandates.map(mandate => (
              <div
                key={mandate.id}
                className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
              >
                <div className="p-4">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-${getPriorityColor(mandate.priority)}-500/20 rounded-lg`}>
                        <Shield className={`w-5 h-5 text-${getPriorityColor(mandate.priority)}-400`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-white font-semibold">{mandate.title}</h3>
                          <span className={`px-2 py-0.5 bg-${getPriorityColor(mandate.priority)}-500/20 text-${getPriorityColor(mandate.priority)}-400 text-xs rounded-full font-medium uppercase`}>
                            {mandate.priority}
                          </span>
                          {mandate.isEvergreen && (
                            <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                              Evergreen
                            </span>
                          )}
                          {mandate.isRecurring && (
                            <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                              Recurring
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">{mandate.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                        <Edit2 className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                        <Eye className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>

                  {/* Rule Box */}
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Lock className="w-4 h-4 text-red-400" />
                      <span className="text-red-400 font-medium text-sm">Mandatory Rule</span>
                    </div>
                    <div className="text-white font-medium">{mandate.rule}</div>
                    <div className="text-gray-400 text-sm mt-1">Scope: {mandate.scope}</div>
                  </div>

                  {/* Compliance Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="bg-gray-700/50 rounded-lg p-3">
                      <div className="text-gray-400 text-xs mb-1">Target Merchants</div>
                      <div className="text-white font-bold">{mandate.targetMerchants.toLocaleString()}</div>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-3">
                      <div className="text-green-400 text-xs mb-1">Compliant</div>
                      <div className="text-green-400 font-bold">{mandate.compliantMerchants.toLocaleString()}</div>
                    </div>
                    <div className="bg-red-500/10 rounded-lg p-3">
                      <div className="text-red-400 text-xs mb-1">Non-Compliant</div>
                      <div className="text-red-400 font-bold">{mandate.nonCompliant.toLocaleString()}</div>
                    </div>
                  </div>

                  {/* Compliance Bar */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-400 text-sm">Compliance Rate</span>
                      <span className="text-white font-medium">{getComplianceRate(mandate)}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getComplianceRate(mandate) >= 95 ? 'bg-green-500' : getComplianceRate(mandate) >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${getComplianceRate(mandate)}%` }}
                      />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {mandate.isEvergreen ? 'Always Active' : mandate.isRecurring ? mandate.startDate : `${mandate.startDate} - ${mandate.endDate}`}
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        {mandate.zones.join(', ')}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Enforcement:</span>
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">
                        {mandate.enforcement}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="border-t border-gray-700 p-3 bg-gray-800/30 flex items-center justify-between">
                  <button className="text-blue-400 text-sm flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    View Violations
                  </button>
                  <button className="text-orange-400 text-sm flex items-center gap-1">
                    <Bell className="w-4 h-4" />
                    Send Reminders
                  </button>
                  <button className="text-red-400 text-sm flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" />
                    Enforce Now
                  </button>
                </div>
              </div>
            ))}
          </>
        )}

        {activeTab === 'compliance' && (
          <>
            {/* Non-Compliant Merchants */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-medium">530 Merchants Require Attention</span>
              </div>
              <p className="text-gray-400 text-sm">
                These merchants are not complying with mandatory rules. Actions will be auto-enforced based on rule settings.
              </p>
            </div>

            {nonCompliantMerchants.map(merchant => (
              <div
                key={merchant.id}
                className="bg-gray-800/50 rounded-xl border border-red-500/30 p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-semibold">{merchant.name}</h3>
                      <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                        {merchant.tier}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{merchant.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-red-400 font-medium">{merchant.daysOverdue} days overdue</div>
                    <div className="text-gray-500 text-sm">{merchant.mandate}</div>
                  </div>
                </div>

                <div className="bg-red-500/10 rounded-lg p-3 mb-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-gray-400 text-xs mb-1">Violation</div>
                      <div className="text-red-400 font-medium">{merchant.violation}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-1">Required</div>
                      <div className="text-green-400 font-medium">{merchant.required}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">
                      {merchant.action}
                    </span>
                    <span className="text-gray-400 text-sm">→ {merchant.nextAction}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 bg-gray-700 text-white rounded-lg text-sm">
                      Extend
                    </button>
                    <button className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-sm">
                      Enforce
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {activeTab === 'scheduled' && (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <div className="text-gray-400">3 mandates scheduled for upcoming events</div>
            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg">
              View Scheduled
            </button>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <div className="text-gray-400">45 past mandates with compliance records</div>
            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg">
              View History
            </button>
          </div>
        )}
      </div>

      {/* Create Mandate Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Create Mandatory Rule</h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Mandate Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {mandateTypes.map(type => (
                    <button
                      key={type.id}
                      className="p-3 bg-gray-700 rounded-lg text-left hover:bg-gray-600 border border-gray-600"
                    >
                      <type.icon className={`w-5 h-5 text-${type.color}-400 mb-1`} />
                      <div className="text-white text-sm">{type.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Title</label>
                <input
                  type="text"
                  placeholder="e.g., Summer Sale Minimum Discount"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Rule Description</label>
                <textarea
                  placeholder="Describe the mandatory requirement..."
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Priority</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white">
                    <option value="critical">Critical</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Enforcement</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white">
                    <option value="auto-suspend">Auto Suspend</option>
                    <option value="auto-flag">Auto Flag</option>
                    <option value="tier-downgrade">Tier Downgrade</option>
                    <option value="visibility-reduce">Reduce Visibility</option>
                    <option value="manual">Manual Review</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Target Scope</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white">
                  <option>All Merchants</option>
                  <option>Platinum & Gold Only</option>
                  <option>Specific Categories</option>
                  <option>Specific Zones</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Start Date</label>
                  <input
                    type="date"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">End Date</label>
                  <input
                    type="date"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                <div>
                  <div className="text-white font-medium">Evergreen Rule</div>
                  <div className="text-gray-400 text-sm">Always active, no end date</div>
                </div>
                <button className="p-1">
                  <ToggleLeft className="w-8 h-8 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="p-6 border-t border-gray-700 flex gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 py-3 bg-gray-700 text-white rounded-xl font-medium"
              >
                Cancel
              </button>
              <button className="flex-1 py-3 bg-red-600 text-white rounded-xl font-medium flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                Create Mandate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMandatoryOffers;
