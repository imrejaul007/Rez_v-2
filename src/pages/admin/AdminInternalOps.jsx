import React, { useState } from 'react';
import {
  ArrowLeft, Users, Settings, FileText, AlertTriangle, Shield,
  Search, Eye, Edit, Lock, Unlock, MessageSquare, Flag, Clock,
  CheckCircle, XCircle, MapPin, Store, Coins, RefreshCw, Zap,
  Bookmark, Tag, ChevronRight, ToggleLeft, ToggleRight, User,
  Activity, Terminal, Database, Server, Radio, Bell
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminInternalOps = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('lookup');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEntity, setSelectedEntity] = useState(null);

  // Internal Notes on entities
  const [internalNotes, setInternalNotes] = useState([
    {
      id: 1,
      entityType: 'user',
      entityId: 'U12345',
      entityName: 'Rahul Sharma',
      notes: [
        { id: 1, text: 'VIP customer - handle with care. Has 50K+ followers on Twitter.', author: 'Ops Manager', date: '2024-12-20', priority: 'high' },
        { id: 2, text: 'Approved for manual coin credit after system failure.', author: 'Support L2', date: '2024-12-25', priority: 'normal' },
      ],
      flags: ['VIP', 'Influencer'],
    },
    {
      id: 2,
      entityType: 'merchant',
      entityId: 'M5678',
      entityName: 'Spice Garden Restaurant',
      notes: [
        { id: 1, text: 'Pending legal issue - awaiting compliance clearance.', author: 'Legal Team', date: '2024-12-22', priority: 'critical' },
      ],
      flags: ['Legal Hold', 'Under Review'],
    },
    {
      id: 3,
      entityType: 'user',
      entityId: 'U78901',
      entityName: 'Suspicious User',
      notes: [
        { id: 1, text: 'Multiple fake bill uploads detected. Shadow throttled.', author: 'Fraud Team', date: '2024-12-27', priority: 'high' },
      ],
      flags: ['Fraud Watch', 'Throttled'],
    },
  ]);

  // Risk Flags Configuration
  const riskFlags = [
    { id: 'vip', name: 'VIP', color: 'purple', description: 'High-value customer, priority handling' },
    { id: 'influencer', name: 'Influencer', color: 'pink', description: 'Social media presence, PR risk' },
    { id: 'fraud_watch', name: 'Fraud Watch', color: 'red', description: 'Under fraud investigation' },
    { id: 'legal_hold', name: 'Legal Hold', color: 'orange', description: 'Pending legal action' },
    { id: 'under_review', name: 'Under Review', color: 'yellow', description: 'Manual review required' },
    { id: 'throttled', name: 'Throttled', color: 'gray', description: 'Silently rate-limited' },
    { id: 'verified', name: 'Verified', color: 'green', description: 'Identity verified' },
    { id: 'beta_tester', name: 'Beta Tester', color: 'blue', description: 'Opted into beta features' },
  ];

  // Ops Playbooks
  const [playbooks, setPlaybooks] = useState([
    {
      id: 1,
      name: 'Coin Credit Failure Recovery',
      description: 'Steps to recover when coin credits fail at scale',
      steps: [
        'Check system health dashboard for API failures',
        'Identify affected users from transaction logs',
        'Calculate total coins owed using backup ledger',
        'Create bulk credit batch with admin override',
        'Send apology notification with bonus coins',
        'Log incident in audit trail'
      ],
      lastUsed: '2024-12-20',
      usedCount: 15,
      category: 'Technical'
    },
    {
      id: 2,
      name: 'Merchant Fraud Investigation',
      description: 'SOP for investigating suspected merchant fraud',
      steps: [
        'Freeze merchant coin earning temporarily',
        'Pull transaction patterns for last 90 days',
        'Identify suspicious transaction clusters',
        'Cross-reference with user dispute history',
        'Contact merchant for explanation if needed',
        'Escalate to legal if fraud confirmed'
      ],
      lastUsed: '2024-12-25',
      usedCount: 8,
      category: 'Fraud'
    },
    {
      id: 3,
      name: 'VIP Escalation Handling',
      description: 'Protocol for handling VIP customer issues',
      steps: [
        'Check internal notes for VIP flags',
        'Prioritize in queue - target 2hr resolution',
        'Loop in senior support from start',
        'Offer generous compensation if platform fault',
        'Personal follow-up call within 24hrs',
        'Document everything for PR readiness'
      ],
      lastUsed: '2024-12-28',
      usedCount: 23,
      category: 'Support'
    },
    {
      id: 4,
      name: 'City Launch Checklist',
      description: 'New city expansion ops checklist',
      steps: [
        'Onboard minimum 50 merchants before launch',
        'Set up local ops team (3 minimum)',
        'Configure city-specific coin rules',
        'Test payment integrations with local banks',
        'Create local language support content',
        'Schedule marketing push for D-7 to D+30'
      ],
      lastUsed: '2024-11-15',
      usedCount: 5,
      category: 'Expansion'
    },
  ]);

  // City Ops Override
  const [cityOverrides, setCityOverrides] = useState([
    {
      city: 'Mumbai',
      coinMultiplier: 1.0,
      isActive: true,
      localOpsLead: 'Priya Mehta',
      activeIssues: 2,
      pendingSettlements: 450000,
      specialRules: ['Festival 2x coins active'],
    },
    {
      city: 'Bangalore',
      coinMultiplier: 1.2,
      isActive: true,
      localOpsLead: 'Karthik Reddy',
      activeIssues: 5,
      pendingSettlements: 320000,
      specialRules: ['Tech park merchants get bonus'],
    },
    {
      city: 'Delhi',
      coinMultiplier: 1.0,
      isActive: true,
      localOpsLead: 'Amit Singh',
      activeIssues: 8,
      pendingSettlements: 780000,
      specialRules: [],
    },
    {
      city: 'Jaipur',
      coinMultiplier: 1.5,
      isActive: true,
      localOpsLead: 'Sunita Sharma',
      activeIssues: 1,
      pendingSettlements: 120000,
      specialRules: ['New city launch - boosted earning'],
    },
  ]);

  // Quick Actions Log
  const [actionLog, setActionLog] = useState([
    { id: 1, action: 'Manual coin credit', entity: 'U12345', amount: '+500 coins', by: 'Support L2', time: '2 mins ago' },
    { id: 2, action: 'Merchant suspended', entity: 'M9012', amount: null, by: 'Fraud Team', time: '15 mins ago' },
    { id: 3, action: 'Flag added', entity: 'U78901', amount: 'Fraud Watch', by: 'Ops Manager', time: '1 hour ago' },
    { id: 4, action: 'Settlement override', entity: 'M5678', amount: '₹45,000', by: 'Finance', time: '2 hours ago' },
  ]);

  // Entity Lookup Result (mock)
  const lookupEntity = (query) => {
    // Simulated lookup
    setSelectedEntity({
      type: 'user',
      id: 'U12345',
      name: 'Rahul Sharma',
      phone: '+91 98765 43210',
      email: 'rahul@email.com',
      status: 'active',
      trustScore: 78,
      totalCoins: 15420,
      totalTransactions: 156,
      memberSince: '2024-03-15',
      lastActive: '2024-12-28 14:30',
      flags: ['VIP', 'Influencer'],
      internalNotes: 2,
      pendingDisputes: 1,
    });
  };

  const getFlagColor = (flag) => {
    const found = riskFlags.find(f => f.name === flag);
    if (!found) return 'gray';
    return found.color;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Internal Ops Console</h1>
              <p className="text-gray-300 text-sm">Human tools & overrides</p>
            </div>
          </div>
          <div className="flex items-center bg-red-600/20 px-3 py-1 rounded-full">
            <Lock size={16} className="mr-1 text-red-400" />
            <span className="text-red-300 text-sm">Admin Only</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">12</p>
            <p className="text-xs text-gray-300">Open Issues</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">5</p>
            <p className="text-xs text-gray-300">VIP Alerts</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">3</p>
            <p className="text-xs text-gray-300">Fraud Flags</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">8</p>
            <p className="text-xs text-gray-300">Cities</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 px-4 overflow-x-auto">
        {['lookup', 'notes', 'playbooks', 'city_ops', 'logs'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 text-sm font-medium capitalize whitespace-nowrap ${
              activeTab === tab
                ? 'text-white border-b-2 border-white'
                : 'text-gray-400'
            }`}
          >
            {tab.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Lookup Tab */}
        {activeTab === 'lookup' && (
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by User ID, Phone, Email, or Merchant ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && lookupEntity(searchQuery)}
                className="w-full bg-gray-800 text-white pl-12 pr-4 py-4 rounded-xl"
              />
              <button
                onClick={() => lookupEntity(searchQuery)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Search
              </button>
            </div>

            {/* Entity Card */}
            {selectedEntity && (
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <User size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">{selectedEntity.name}</h3>
                        <p className="text-blue-200">{selectedEntity.id}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      selectedEntity.status === 'active' ? 'bg-green-600' : 'bg-red-600'
                    } text-white`}>
                      {selectedEntity.status}
                    </span>
                  </div>

                  {/* Flags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedEntity.flags.map((flag, idx) => (
                      <span
                        key={idx}
                        className={`bg-${getFlagColor(flag)}-600/30 text-${getFlagColor(flag)}-300 px-2 py-1 rounded text-xs flex items-center`}
                      >
                        <Flag size={12} className="mr-1" /> {flag}
                      </span>
                    ))}
                    <button className="bg-white/20 text-white px-2 py-1 rounded text-xs flex items-center">
                      <Tag size={12} className="mr-1" /> Add Flag
                    </button>
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  {/* Contact Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-xs">Phone</p>
                      <p className="text-white">{selectedEntity.phone}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Email</p>
                      <p className="text-white">{selectedEntity.email}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                      <p className="text-yellow-400 font-bold">{selectedEntity.trustScore}</p>
                      <p className="text-gray-400 text-xs">Trust</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                      <p className="text-white font-bold">{selectedEntity.totalCoins}</p>
                      <p className="text-gray-400 text-xs">Coins</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                      <p className="text-white font-bold">{selectedEntity.totalTransactions}</p>
                      <p className="text-gray-400 text-xs">Txns</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                      <p className="text-red-400 font-bold">{selectedEntity.pendingDisputes}</p>
                      <p className="text-gray-400 text-xs">Disputes</p>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Quick Actions</p>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="bg-green-600/20 text-green-400 p-3 rounded-lg flex items-center justify-center">
                        <Coins size={16} className="mr-2" /> Credit Coins
                      </button>
                      <button className="bg-blue-600/20 text-blue-400 p-3 rounded-lg flex items-center justify-center">
                        <MessageSquare size={16} className="mr-2" /> Add Note
                      </button>
                      <button className="bg-orange-600/20 text-orange-400 p-3 rounded-lg flex items-center justify-center">
                        <RefreshCw size={16} className="mr-2" /> Reset Trust
                      </button>
                      <button className="bg-red-600/20 text-red-400 p-3 rounded-lg flex items-center justify-center">
                        <Lock size={16} className="mr-2" /> Suspend
                      </button>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Recent Activity</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Clock size={14} className="text-gray-500 mr-2" />
                        <span className="text-gray-400">Last active:</span>
                        <span className="text-white ml-2">{selectedEntity.lastActive}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock size={14} className="text-gray-500 mr-2" />
                        <span className="text-gray-400">Member since:</span>
                        <span className="text-white ml-2">{selectedEntity.memberSince}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Recent Lookups */}
            <div>
              <h3 className="text-white font-medium mb-3">Recent Lookups</h3>
              <div className="space-y-2">
                {['U12345 - Rahul Sharma', 'M5678 - Spice Garden', 'U78901 - Suspicious User'].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => lookupEntity(item.split(' - ')[0])}
                    className="w-full bg-gray-800 p-3 rounded-lg flex items-center justify-between"
                  >
                    <span className="text-white">{item}</span>
                    <ChevronRight size={18} className="text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Internal Notes Tab */}
        {activeTab === 'notes' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-medium">Flagged Entities</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                + Add Note
              </button>
            </div>

            {internalNotes.map(entity => (
              <div key={entity.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                      entity.entityType === 'user' ? 'bg-blue-600' : 'bg-purple-600'
                    }`}>
                      {entity.entityType === 'user' ? <User size={20} /> : <Store size={20} />}
                    </div>
                    <div>
                      <p className="text-white font-medium">{entity.entityName}</p>
                      <p className="text-gray-400 text-sm">{entity.entityId}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {entity.flags.map((flag, idx) => (
                      <span key={idx} className="bg-red-600/20 text-red-400 text-xs px-2 py-1 rounded">
                        {flag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {entity.notes.map(note => (
                    <div key={note.id} className={`rounded-lg p-3 ${
                      note.priority === 'critical' ? 'bg-red-900/30 border border-red-500/30' :
                      note.priority === 'high' ? 'bg-orange-900/30 border border-orange-500/30' :
                      'bg-gray-700/50'
                    }`}>
                      <p className="text-white text-sm">{note.text}</p>
                      <p className="text-gray-400 text-xs mt-2">
                        {note.author} • {note.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Risk Flag Legend */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-medium mb-3">Available Risk Flags</h3>
              <div className="grid grid-cols-2 gap-2">
                {riskFlags.map(flag => (
                  <div key={flag.id} className="flex items-center">
                    <span className={`w-3 h-3 rounded-full bg-${flag.color}-500 mr-2`}></span>
                    <span className="text-white text-sm">{flag.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Playbooks Tab */}
        {activeTab === 'playbooks' && (
          <div className="space-y-4">
            {playbooks.map(playbook => (
              <div key={playbook.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded mb-2 inline-block">
                      {playbook.category}
                    </span>
                    <h3 className="text-white font-bold">{playbook.name}</h3>
                    <p className="text-gray-400 text-sm">{playbook.description}</p>
                  </div>
                  <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
                    Run
                  </button>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3 mb-3">
                  <p className="text-gray-400 text-xs mb-2">Steps:</p>
                  <ol className="space-y-1">
                    {playbook.steps.map((step, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-gray-500 mr-2">{idx + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Used {playbook.usedCount} times</span>
                  <span className="text-gray-400">Last: {playbook.lastUsed}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* City Ops Tab */}
        {activeTab === 'city_ops' && (
          <div className="space-y-4">
            {cityOverrides.map(city => (
              <div key={city.city} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{city.city}</h3>
                      <p className="text-gray-400 text-sm">Lead: {city.localOpsLead}</p>
                    </div>
                  </div>
                  <button
                    className={city.isActive ? 'text-green-400' : 'text-gray-500'}
                  >
                    {city.isActive ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{city.coinMultiplier}x</p>
                    <p className="text-gray-400 text-xs">Coin Rate</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-red-400 font-bold">{city.activeIssues}</p>
                    <p className="text-gray-400 text-xs">Issues</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-yellow-400 font-bold">₹{(city.pendingSettlements / 1000).toFixed(0)}K</p>
                    <p className="text-gray-400 text-xs">Pending</p>
                  </div>
                </div>

                {city.specialRules.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {city.specialRules.map((rule, idx) => (
                      <span key={idx} className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded">
                        {rule}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-end mt-3 space-x-2">
                  <button className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm">
                    <Edit size={14} className="inline mr-1" /> Override
                  </button>
                  <button className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm">
                    <Eye size={14} className="inline mr-1" /> View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Logs Tab */}
        {activeTab === 'logs' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-medium">Recent Admin Actions</h3>
              <button className="text-blue-400 text-sm">Export Log</button>
            </div>

            <div className="space-y-2">
              {actionLog.map(log => (
                <div key={log.id} className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                      <Activity size={18} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{log.action}</p>
                      <p className="text-gray-400 text-sm">
                        {log.entity} {log.amount && `• ${log.amount}`}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{log.by}</p>
                    <p className="text-gray-500 text-xs">{log.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* System Status */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-medium mb-3 flex items-center">
                <Server size={18} className="text-green-400 mr-2" />
                System Status
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">API Gateway</span>
                  <span className="flex items-center text-green-400">
                    <Radio size={12} className="mr-1" /> Healthy
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Coin Engine</span>
                  <span className="flex items-center text-green-400">
                    <Radio size={12} className="mr-1" /> Healthy
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Payment Gateway</span>
                  <span className="flex items-center text-green-400">
                    <Radio size={12} className="mr-1" /> Healthy
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Settlement Batch</span>
                  <span className="flex items-center text-yellow-400">
                    <Radio size={12} className="mr-1" /> Delayed
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminInternalOps;
