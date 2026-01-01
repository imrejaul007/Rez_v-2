import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Building2, Globe, Shield, Users, Settings,
  Crown, Target, TrendingUp, AlertTriangle, Lock, Key,
  MapPin, Briefcase, Store, UserCog, Database, Activity,
  Bell, Eye, Power, Zap, BarChart3, DollarSign, FileText,
  CheckCircle, XCircle, Clock, RefreshCw, ChevronRight,
  Network, Layers, Command, Terminal, Radio, Wifi
} from 'lucide-react';

const HQCommandCenter = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showEmergencyPanel, setShowEmergencyPanel] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Command Overview', icon: Command },
    { id: 'zones', label: 'Zone Control', icon: MapPin },
    { id: 'rules', label: 'Rule Engine', icon: FileText },
    { id: 'merchants', label: 'Merchant Control', icon: Store },
    { id: 'users', label: 'User Governance', icon: Users },
    { id: 'emergency', label: 'Emergency', icon: AlertTriangle }
  ];

  // Platform-wide stats
  const platformStats = {
    totalZones: 12,
    activeZoneAdmins: 45,
    totalMerchants: 15420,
    activeMerchants: 12850,
    totalUsers: 2450000,
    activeUsers: 890000,
    dailyTransactions: 125000,
    dailyRevenue: 45000000,
    systemHealth: 99.8,
    alertsActive: 3
  };

  // Zone hierarchy
  const zoneHierarchy = [
    {
      id: 1,
      name: 'North Zone',
      type: 'regional',
      admins: 8,
      merchants: 3200,
      users: 520000,
      revenue: 12000000,
      status: 'active',
      cities: ['Delhi', 'Chandigarh', 'Lucknow', 'Jaipur']
    },
    {
      id: 2,
      name: 'South Zone',
      type: 'regional',
      admins: 10,
      merchants: 4500,
      users: 680000,
      revenue: 18000000,
      status: 'active',
      cities: ['Bangalore', 'Chennai', 'Hyderabad', 'Kochi']
    },
    {
      id: 3,
      name: 'West Zone',
      type: 'regional',
      admins: 7,
      merchants: 3800,
      users: 450000,
      revenue: 15000000,
      status: 'active',
      cities: ['Mumbai', 'Pune', 'Ahmedabad', 'Surat']
    },
    {
      id: 4,
      name: 'East Zone',
      type: 'regional',
      admins: 5,
      merchants: 2100,
      users: 320000,
      revenue: 8000000,
      status: 'active',
      cities: ['Kolkata', 'Bhubaneswar', 'Guwahati', 'Patna']
    },
    {
      id: 5,
      name: 'Finance Division',
      type: 'functional',
      admins: 6,
      scope: 'All Zones',
      responsibility: 'Settlements, Payouts, Compliance',
      status: 'active'
    },
    {
      id: 6,
      name: 'Marketing Division',
      type: 'functional',
      admins: 4,
      scope: 'All Zones',
      responsibility: 'Campaigns, Offers, Promotions',
      status: 'active'
    },
    {
      id: 7,
      name: 'Compliance Division',
      type: 'functional',
      admins: 3,
      scope: 'All Zones',
      responsibility: 'KYC, Legal, Regulatory',
      status: 'active'
    },
    {
      id: 8,
      name: 'Support Division',
      type: 'functional',
      admins: 5,
      scope: 'All Zones',
      responsibility: 'Disputes, Tickets, Escalations',
      status: 'active'
    }
  ];

  // Global rules
  const globalRules = [
    { id: 1, name: 'Merchant Commission Cap', value: '15%', scope: 'All', status: 'active' },
    { id: 2, name: 'User Coin Earning Limit', value: '500/day', scope: 'All', status: 'active' },
    { id: 3, name: 'Flash Sale Duration', value: '4 hours max', scope: 'All', status: 'active' },
    { id: 4, name: 'Refund Window', value: '7 days', scope: 'All', status: 'active' },
    { id: 5, name: 'KYC Verification Timeout', value: '48 hours', scope: 'All', status: 'active' },
    { id: 6, name: 'Merchant Payout Frequency', value: 'T+2', scope: 'All', status: 'active' }
  ];

  // Emergency controls
  const emergencyControls = [
    { id: 1, name: 'Platform Shutdown', description: 'Immediately halt all transactions', severity: 'critical', icon: Power },
    { id: 2, name: 'Payment Freeze', description: 'Stop all payment processing', severity: 'high', icon: DollarSign },
    { id: 3, name: 'Zone Lockdown', description: 'Disable specific zone operations', severity: 'high', icon: Lock },
    { id: 4, name: 'Merchant Suspension', description: 'Mass merchant suspension', severity: 'medium', icon: Store },
    { id: 5, name: 'User Registration Block', description: 'Stop new user signups', severity: 'medium', icon: Users },
    { id: 6, name: 'Offer Freeze', description: 'Disable all active offers', severity: 'low', icon: Target }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* HQ Authority Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-6 border border-purple-500/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">HQ Command Authority</h2>
              <p className="text-purple-200">Supreme control over entire ReZ ecosystem</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-white">{platformStats.systemHealth}%</div>
            <div className="text-green-400 text-sm flex items-center gap-1">
              <Activity className="w-4 h-4" /> System Health
            </div>
          </div>
        </div>
      </div>

      {/* Control Hierarchy */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Network className="w-5 h-5 text-purple-400" />
          Control Hierarchy
        </h3>
        <div className="flex items-center justify-center gap-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Crown className="w-10 h-10 text-white" />
            </div>
            <div className="text-white font-semibold">HQ</div>
            <div className="text-gray-400 text-xs">Supreme Authority</div>
          </div>
          <ChevronRight className="w-6 h-6 text-gray-500" />
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-2">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div className="text-white font-semibold">Zone Admins</div>
            <div className="text-gray-400 text-xs">{platformStats.totalZones} Zones</div>
          </div>
          <ChevronRight className="w-6 h-6 text-gray-500" />
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Store className="w-8 h-8 text-white" />
            </div>
            <div className="text-white font-semibold">Merchants</div>
            <div className="text-gray-400 text-xs">{platformStats.totalMerchants.toLocaleString()}</div>
          </div>
          <ChevronRight className="w-6 h-6 text-gray-500" />
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-white font-semibold">Users</div>
            <div className="text-gray-400 text-xs">{(platformStats.totalUsers/1000000).toFixed(1)}M</div>
          </div>
        </div>
      </div>

      {/* Platform Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span className="text-gray-400 text-sm">Active Zones</span>
          </div>
          <div className="text-2xl font-bold text-white">{platformStats.totalZones}</div>
          <div className="text-blue-400 text-sm">{platformStats.activeZoneAdmins} admins</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <Store className="w-5 h-5 text-green-400" />
            <span className="text-gray-400 text-sm">Merchants</span>
          </div>
          <div className="text-2xl font-bold text-white">{platformStats.activeMerchants.toLocaleString()}</div>
          <div className="text-green-400 text-sm">{platformStats.totalMerchants.toLocaleString()} total</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-purple-400" />
            <span className="text-gray-400 text-sm">Users</span>
          </div>
          <div className="text-2xl font-bold text-white">{(platformStats.activeUsers/1000000).toFixed(1)}M</div>
          <div className="text-purple-400 text-sm">{(platformStats.totalUsers/1000000).toFixed(1)}M total</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-400 text-sm">Daily Revenue</span>
          </div>
          <div className="text-2xl font-bold text-white">₹{(platformStats.dailyRevenue/10000000).toFixed(1)}Cr</div>
          <div className="text-yellow-400 text-sm">{platformStats.dailyTransactions.toLocaleString()} txns</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          onClick={() => navigate('/admin/zone-management')}
          className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-blue-500 transition-all text-left"
        >
          <MapPin className="w-8 h-8 text-blue-400 mb-2" />
          <div className="text-white font-semibold">Manage Zones</div>
          <div className="text-gray-400 text-sm">Create & configure zones</div>
        </button>
        <button
          onClick={() => navigate('/admin/rule-engine')}
          className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition-all text-left"
        >
          <FileText className="w-8 h-8 text-purple-400 mb-2" />
          <div className="text-white font-semibold">Rule Engine</div>
          <div className="text-gray-400 text-sm">Platform-wide rules</div>
        </button>
        <button
          onClick={() => navigate('/admin/merchant-governance')}
          className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-green-500 transition-all text-left"
        >
          <Store className="w-8 h-8 text-green-400 mb-2" />
          <div className="text-white font-semibold">Merchant Control</div>
          <div className="text-gray-400 text-sm">Govern all merchants</div>
        </button>
        <button
          onClick={() => setShowEmergencyPanel(true)}
          className="bg-gray-800/50 rounded-xl p-4 border border-red-500/50 hover:border-red-500 transition-all text-left"
        >
          <AlertTriangle className="w-8 h-8 text-red-400 mb-2" />
          <div className="text-white font-semibold">Emergency</div>
          <div className="text-red-400 text-sm">{platformStats.alertsActive} active alerts</div>
        </button>
      </div>

      {/* Active Rules Summary */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-400" />
            Active Global Rules
          </h3>
          <button className="text-blue-400 text-sm hover:text-blue-300">View All</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {globalRules.map(rule => (
            <div key={rule.id} className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
              <div className="text-gray-400 text-xs mb-1">{rule.name}</div>
              <div className="text-white font-semibold">{rule.value}</div>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-400 text-xs">Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderZones = () => (
    <div className="space-y-6">
      {/* Zone Types */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-xl p-6 border border-blue-500/30">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="text-white font-semibold">Regional Zones</h3>
              <p className="text-gray-400 text-sm">Geographic divisions</p>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">4</div>
          <div className="text-blue-400 text-sm">North, South, East, West</div>
        </div>
        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-6 border border-purple-500/30">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-purple-400" />
            <div>
              <h3 className="text-white font-semibold">Functional Zones</h3>
              <p className="text-gray-400 text-sm">Department divisions</p>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">4</div>
          <div className="text-purple-400 text-sm">Finance, Marketing, Compliance, Support</div>
        </div>
      </div>

      {/* Zone List */}
      <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <h3 className="text-white font-semibold">All Zones</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
            + Create Zone
          </button>
        </div>
        <div className="divide-y divide-gray-700">
          {zoneHierarchy.map(zone => (
            <div key={zone.id} className="p-4 hover:bg-gray-700/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    zone.type === 'regional' ? 'bg-blue-500/20' : 'bg-purple-500/20'
                  }`}>
                    {zone.type === 'regional' ? (
                      <MapPin className="w-6 h-6 text-blue-400" />
                    ) : (
                      <Briefcase className="w-6 h-6 text-purple-400" />
                    )}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{zone.name}</div>
                    <div className="text-gray-400 text-sm capitalize">{zone.type} Zone</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-white font-semibold">{zone.admins}</div>
                    <div className="text-gray-400 text-xs">Admins</div>
                  </div>
                  {zone.type === 'regional' && (
                    <>
                      <div className="text-center">
                        <div className="text-white font-semibold">{zone.merchants?.toLocaleString()}</div>
                        <div className="text-gray-400 text-xs">Merchants</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-semibold">{(zone.users/1000).toFixed(0)}K</div>
                        <div className="text-gray-400 text-xs">Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-400 font-semibold">₹{(zone.revenue/10000000).toFixed(1)}Cr</div>
                        <div className="text-gray-400 text-xs">Revenue</div>
                      </div>
                    </>
                  )}
                  {zone.type === 'functional' && (
                    <div className="text-gray-400 text-sm max-w-xs">{zone.responsibility}</div>
                  )}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRules = () => (
    <div className="space-y-6">
      {/* Rule Categories */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { name: 'Commission Rules', count: 12, icon: DollarSign, color: 'green' },
          { name: 'Limit Rules', count: 18, icon: Shield, color: 'blue' },
          { name: 'Compliance Rules', count: 8, icon: FileText, color: 'purple' },
          { name: 'Operational Rules', count: 24, icon: Settings, color: 'orange' }
        ].map((cat, i) => (
          <div key={i} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <cat.icon className={`w-8 h-8 text-${cat.color}-400 mb-2`} />
            <div className="text-white font-semibold">{cat.name}</div>
            <div className="text-gray-400 text-sm">{cat.count} rules active</div>
          </div>
        ))}
      </div>

      {/* Rule Scope */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-4">Rule Application Scope</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
            <Crown className="w-8 h-8 text-yellow-400" />
            <div className="flex-1">
              <div className="text-white font-semibold">Global Rules (HQ)</div>
              <div className="text-gray-400 text-sm">Apply to ALL zones, merchants, and users</div>
            </div>
            <div className="text-yellow-400 font-bold">62 Rules</div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
            <MapPin className="w-8 h-8 text-blue-400" />
            <div className="flex-1">
              <div className="text-white font-semibold">Zone Rules</div>
              <div className="text-gray-400 text-sm">Override global for specific zones</div>
            </div>
            <div className="text-blue-400 font-bold">28 Rules</div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
            <Store className="w-8 h-8 text-green-400" />
            <div className="flex-1">
              <div className="text-white font-semibold">Merchant Rules</div>
              <div className="text-gray-400 text-sm">Merchant-specific configurations</div>
            </div>
            <div className="text-green-400 font-bold">156 Rules</div>
          </div>
        </div>
      </div>

      {/* Create Rule */}
      <button
        onClick={() => navigate('/admin/rule-engine')}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:opacity-90"
      >
        Open Rule Engine →
      </button>
    </div>
  );

  const renderMerchants = () => (
    <div className="space-y-6">
      {/* Merchant Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">Total Merchants</div>
          <div className="text-2xl font-bold text-white">15,420</div>
          <div className="text-green-400 text-sm">+234 this week</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">Active</div>
          <div className="text-2xl font-bold text-green-400">12,850</div>
          <div className="text-gray-400 text-sm">83% of total</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">Pending KYC</div>
          <div className="text-2xl font-bold text-yellow-400">1,245</div>
          <div className="text-gray-400 text-sm">Awaiting verification</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">Suspended</div>
          <div className="text-2xl font-bold text-red-400">325</div>
          <div className="text-gray-400 text-sm">Policy violations</div>
        </div>
      </div>

      {/* Merchant Hierarchy */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-4">Merchant Control Structure</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg">
            <Store className="w-8 h-8 text-green-400" />
            <div className="flex-1">
              <div className="text-white font-semibold">Merchant Owner</div>
              <div className="text-gray-400 text-sm">Full control over their business</div>
            </div>
            <div className="text-gray-400">→</div>
            <div className="text-sm text-gray-400">Creates team members</div>
          </div>
          <div className="ml-8 space-y-2">
            {[
              { role: 'Store Manager', access: 'All operations except finance' },
              { role: 'Sales Staff', access: 'POS, Orders, Customers' },
              { role: 'Inventory Manager', access: 'Stock, Products, Suppliers' },
              { role: 'Marketing Staff', access: 'Campaigns, Offers, Content' },
              { role: 'Accountant', access: 'Finance, Reports, Settlements' }
            ].map((role, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <UserCog className="w-5 h-5 text-blue-400" />
                <div className="flex-1">
                  <div className="text-white text-sm">{role.role}</div>
                  <div className="text-gray-500 text-xs">{role.access}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate('/admin/merchant-governance')}
        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:opacity-90"
      >
        Open Merchant Governance →
      </button>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      {/* User Flow */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-4">User Data Flow</h3>
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Crown className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-white font-semibold">HQ</div>
            <div className="text-gray-400 text-xs">Sets global policies</div>
          </div>
          <div className="text-gray-500">→</div>
          <div className="text-center flex-1">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
              <MapPin className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-white font-semibold">Zone Admin</div>
            <div className="text-gray-400 text-xs">Enforces regional rules</div>
          </div>
          <div className="text-gray-500">→</div>
          <div className="text-center flex-1">
            <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Store className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-white font-semibold">Merchant</div>
            <div className="text-gray-400 text-xs">Provides products/services</div>
          </div>
          <div className="text-gray-500">→</div>
          <div className="text-center flex-1">
            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <div className="text-white font-semibold">User</div>
            <div className="text-gray-400 text-xs">Consumes & transacts</div>
          </div>
        </div>
      </div>

      {/* User Permissions by Source */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-4">User Permissions Source</h3>
        <div className="space-y-4">
          <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
            <div className="flex items-center gap-3 mb-2">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">From HQ</span>
            </div>
            <ul className="text-gray-400 text-sm space-y-1 ml-8">
              <li>• Coin earning limits & rules</li>
              <li>• KYC requirements</li>
              <li>• Platform-wide promotions</li>
              <li>• Trust score algorithm</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-white font-semibold">From Zone Admin</span>
            </div>
            <ul className="text-gray-400 text-sm space-y-1 ml-8">
              <li>• Regional offers & deals</li>
              <li>• Local compliance requirements</li>
              <li>• Zone-specific features</li>
              <li>• Regional support channels</li>
            </ul>
          </div>
          <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
            <div className="flex items-center gap-3 mb-2">
              <Store className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">From Merchant</span>
            </div>
            <ul className="text-gray-400 text-sm space-y-1 ml-8">
              <li>• Store-specific offers</li>
              <li>• Loyalty program access</li>
              <li>• Booking availability</li>
              <li>• Product catalog access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEmergency = () => (
    <div className="space-y-6">
      {/* Emergency Header */}
      <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/50">
        <div className="flex items-center gap-4">
          <AlertTriangle className="w-12 h-12 text-red-400" />
          <div>
            <h3 className="text-xl font-bold text-white">Emergency Control Panel</h3>
            <p className="text-red-200">Use with extreme caution. All actions are logged.</p>
          </div>
        </div>
      </div>

      {/* Emergency Controls */}
      <div className="grid grid-cols-2 gap-4">
        {emergencyControls.map(control => (
          <div
            key={control.id}
            className={`p-6 rounded-xl border ${
              control.severity === 'critical' ? 'bg-red-900/30 border-red-500/50' :
              control.severity === 'high' ? 'bg-orange-900/30 border-orange-500/50' :
              control.severity === 'medium' ? 'bg-yellow-900/30 border-yellow-500/50' :
              'bg-gray-800/50 border-gray-700'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <control.icon className={`w-8 h-8 ${
                control.severity === 'critical' ? 'text-red-400' :
                control.severity === 'high' ? 'text-orange-400' :
                control.severity === 'medium' ? 'text-yellow-400' :
                'text-gray-400'
              }`} />
              <div>
                <div className="text-white font-semibold">{control.name}</div>
                <div className="text-gray-400 text-sm">{control.description}</div>
              </div>
            </div>
            <button className={`w-full py-2 rounded-lg font-semibold ${
              control.severity === 'critical' ? 'bg-red-600 text-white hover:bg-red-700' :
              control.severity === 'high' ? 'bg-orange-600 text-white hover:bg-orange-700' :
              control.severity === 'medium' ? 'bg-yellow-600 text-black hover:bg-yellow-700' :
              'bg-gray-600 text-white hover:bg-gray-700'
            }`}>
              Activate
            </button>
          </div>
        ))}
      </div>

      {/* Audit Log */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-4">Recent Emergency Actions</h3>
        <div className="text-gray-400 text-center py-8">
          No emergency actions in the last 30 days
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
              <button onClick={() => navigate('/admin')} className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">HQ Command Center</h1>
                  <p className="text-gray-400 text-sm">Supreme Platform Control</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 rounded-full">
                <Wifi className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">All Systems Operational</span>
              </div>
              <button
                onClick={() => setShowEmergencyPanel(true)}
                className="p-2 bg-red-500/20 rounded-lg hover:bg-red-500/30"
              >
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
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
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'zones' && renderZones()}
        {activeTab === 'rules' && renderRules()}
        {activeTab === 'merchants' && renderMerchants()}
        {activeTab === 'users' && renderUsers()}
        {activeTab === 'emergency' && renderEmergency()}
      </div>
    </div>
  );
};

export default HQCommandCenter;
