import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, MapPin, Users, Store, DollarSign, Settings,
  Plus, Edit2, Trash2, Eye, Shield, Activity, TrendingUp,
  Building2, Briefcase, Globe, Clock, CheckCircle, XCircle,
  AlertTriangle, Search, Filter, MoreVertical, UserPlus,
  Lock, Unlock, ChevronDown, ChevronRight, Crown, BarChart3
} from 'lucide-react';

const ZoneManagement = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('regional');
  const [selectedZone, setSelectedZone] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);

  const tabs = [
    { id: 'regional', label: 'Regional Zones', icon: MapPin },
    { id: 'functional', label: 'Functional Zones', icon: Briefcase },
    { id: 'admins', label: 'Zone Admins', icon: Users }
  ];

  // Regional zones
  const regionalZones = [
    {
      id: 1,
      name: 'North Zone',
      code: 'NZ',
      status: 'active',
      head: 'Rajesh Kumar',
      admins: [
        { id: 1, name: 'Amit Sharma', role: 'Zone Head', permissions: 'full' },
        { id: 2, name: 'Priya Singh', role: 'Operations Manager', permissions: 'operations' },
        { id: 3, name: 'Vikram Mehta', role: 'Finance Manager', permissions: 'finance' },
        { id: 4, name: 'Neha Gupta', role: 'Marketing Lead', permissions: 'marketing' }
      ],
      cities: ['Delhi', 'Chandigarh', 'Lucknow', 'Jaipur', 'Noida', 'Gurgaon'],
      merchants: 3200,
      users: 520000,
      revenue: 12000000,
      growth: 12.5,
      rules: 8
    },
    {
      id: 2,
      name: 'South Zone',
      code: 'SZ',
      status: 'active',
      head: 'Lakshmi Rao',
      admins: [
        { id: 1, name: 'Lakshmi Rao', role: 'Zone Head', permissions: 'full' },
        { id: 2, name: 'Krishna Murthy', role: 'Operations Manager', permissions: 'operations' },
        { id: 3, name: 'Arun Kumar', role: 'Finance Manager', permissions: 'finance' }
      ],
      cities: ['Bangalore', 'Chennai', 'Hyderabad', 'Kochi', 'Mysore', 'Coimbatore'],
      merchants: 4500,
      users: 680000,
      revenue: 18000000,
      growth: 18.2,
      rules: 6
    },
    {
      id: 3,
      name: 'West Zone',
      code: 'WZ',
      status: 'active',
      head: 'Sanjay Patel',
      admins: [
        { id: 1, name: 'Sanjay Patel', role: 'Zone Head', permissions: 'full' },
        { id: 2, name: 'Meera Shah', role: 'Operations Manager', permissions: 'operations' }
      ],
      cities: ['Mumbai', 'Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Nagpur'],
      merchants: 3800,
      users: 450000,
      revenue: 15000000,
      growth: 15.8,
      rules: 5
    },
    {
      id: 4,
      name: 'East Zone',
      code: 'EZ',
      status: 'active',
      head: 'Anita Das',
      admins: [
        { id: 1, name: 'Anita Das', role: 'Zone Head', permissions: 'full' },
        { id: 2, name: 'Bikash Roy', role: 'Operations Manager', permissions: 'operations' }
      ],
      cities: ['Kolkata', 'Bhubaneswar', 'Guwahati', 'Patna', 'Ranchi'],
      merchants: 2100,
      users: 320000,
      revenue: 8000000,
      growth: 22.1,
      rules: 4
    }
  ];

  // Functional zones
  const functionalZones = [
    {
      id: 5,
      name: 'Finance Division',
      code: 'FIN',
      status: 'active',
      head: 'Ravi Agarwal',
      scope: 'All Regional Zones',
      responsibilities: ['Settlements', 'Payouts', 'Commission', 'Tax Compliance', 'Reconciliation'],
      admins: 6,
      activeTasks: 145,
      pendingApprovals: 23
    },
    {
      id: 6,
      name: 'Marketing Division',
      code: 'MKT',
      status: 'active',
      head: 'Sunita Verma',
      scope: 'All Regional Zones',
      responsibilities: ['Campaigns', 'Offers', 'Promotions', 'Brand Partnerships', 'Content'],
      admins: 4,
      activeTasks: 89,
      pendingApprovals: 12
    },
    {
      id: 7,
      name: 'Compliance Division',
      code: 'CMP',
      status: 'active',
      head: 'Deepak Joshi',
      scope: 'All Regional Zones',
      responsibilities: ['KYC', 'Legal', 'Regulatory', 'Policy Enforcement', 'Audits'],
      admins: 3,
      activeTasks: 67,
      pendingApprovals: 45
    },
    {
      id: 8,
      name: 'Support Division',
      code: 'SUP',
      status: 'active',
      head: 'Kavitha Nair',
      scope: 'All Regional Zones',
      responsibilities: ['Disputes', 'Tickets', 'Escalations', 'Refunds', 'Feedback'],
      admins: 5,
      activeTasks: 234,
      pendingApprovals: 18
    },
    {
      id: 9,
      name: 'Technology Division',
      code: 'TECH',
      status: 'active',
      head: 'Arjun Reddy',
      scope: 'Platform-wide',
      responsibilities: ['System Health', 'Integrations', 'API Management', 'Security', 'Performance'],
      admins: 4,
      activeTasks: 56,
      pendingApprovals: 8
    }
  ];

  // All zone admins
  const allAdmins = [
    { id: 1, name: 'Rajesh Kumar', zone: 'North Zone', role: 'Zone Head', status: 'active', lastActive: '2 mins ago' },
    { id: 2, name: 'Amit Sharma', zone: 'North Zone', role: 'Operations', status: 'active', lastActive: '15 mins ago' },
    { id: 3, name: 'Lakshmi Rao', zone: 'South Zone', role: 'Zone Head', status: 'active', lastActive: '5 mins ago' },
    { id: 4, name: 'Sanjay Patel', zone: 'West Zone', role: 'Zone Head', status: 'active', lastActive: '1 hour ago' },
    { id: 5, name: 'Anita Das', zone: 'East Zone', role: 'Zone Head', status: 'active', lastActive: '30 mins ago' },
    { id: 6, name: 'Ravi Agarwal', zone: 'Finance Division', role: 'Division Head', status: 'active', lastActive: '10 mins ago' },
    { id: 7, name: 'Sunita Verma', zone: 'Marketing Division', role: 'Division Head', status: 'active', lastActive: '45 mins ago' },
    { id: 8, name: 'Deepak Joshi', zone: 'Compliance Division', role: 'Division Head', status: 'away', lastActive: '2 hours ago' }
  ];

  const renderRegionalZones = () => (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">Total Zones</div>
          <div className="text-2xl font-bold text-white">{regionalZones.length}</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">Total Merchants</div>
          <div className="text-2xl font-bold text-white">
            {regionalZones.reduce((sum, z) => sum + z.merchants, 0).toLocaleString()}
          </div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">Total Users</div>
          <div className="text-2xl font-bold text-white">
            {(regionalZones.reduce((sum, z) => sum + z.users, 0) / 1000000).toFixed(2)}M
          </div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">Total Revenue</div>
          <div className="text-2xl font-bold text-green-400">
            ₹{(regionalZones.reduce((sum, z) => sum + z.revenue, 0) / 10000000).toFixed(1)}Cr
          </div>
        </div>
      </div>

      {/* Zone Cards */}
      <div className="grid grid-cols-2 gap-6">
        {regionalZones.map(zone => (
          <div
            key={zone.id}
            className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{zone.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">{zone.code}</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-400 text-xs">Active</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-700 rounded-lg">
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="text-gray-400 text-xs mb-1">Merchants</div>
                  <div className="text-white font-semibold">{zone.merchants.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Users</div>
                  <div className="text-white font-semibold">{(zone.users/1000).toFixed(0)}K</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Revenue</div>
                  <div className="text-green-400 font-semibold">₹{(zone.revenue/10000000).toFixed(1)}Cr</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-gray-400 text-xs mb-2">Cities</div>
                <div className="flex flex-wrap gap-1">
                  {zone.cities.slice(0, 4).map((city, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-700 rounded text-gray-300 text-xs">
                      {city}
                    </span>
                  ))}
                  {zone.cities.length > 4 && (
                    <span className="px-2 py-1 bg-gray-700 rounded text-gray-400 text-xs">
                      +{zone.cities.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">{zone.admins.length} Admins</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">+{zone.growth}%</span>
                </div>
                <button
                  onClick={() => setSelectedZone(zone)}
                  className="text-blue-400 text-sm hover:text-blue-300"
                >
                  Manage →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Zone Button */}
      <button
        onClick={() => setShowCreateModal(true)}
        className="w-full py-4 border-2 border-dashed border-gray-700 rounded-xl text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-all flex items-center justify-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Create New Regional Zone
      </button>
    </div>
  );

  const renderFunctionalZones = () => (
    <div className="space-y-6">
      {/* Functional Zone Cards */}
      <div className="space-y-4">
        {functionalZones.map(zone => (
          <div
            key={zone.id}
            className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-purple-500/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{zone.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-sm">{zone.code}</span>
                    <span className="text-purple-400 text-sm">• {zone.scope}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-white font-semibold">{zone.admins}</div>
                  <div className="text-gray-400 text-xs">Admins</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-400 font-semibold">{zone.activeTasks}</div>
                  <div className="text-gray-400 text-xs">Active Tasks</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-400 font-semibold">{zone.pendingApprovals}</div>
                  <div className="text-gray-400 text-xs">Pending</div>
                </div>
                <button className="p-2 hover:bg-gray-700 rounded-lg">
                  <Settings className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {zone.responsibilities.map((resp, i) => (
                <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                  {resp}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">Head: </span>
                <span className="text-white">{zone.head}</span>
              </div>
              <button className="text-purple-400 text-sm hover:text-purple-300">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Division Button */}
      <button
        onClick={() => setShowCreateModal(true)}
        className="w-full py-4 border-2 border-dashed border-gray-700 rounded-xl text-gray-400 hover:border-purple-500 hover:text-purple-400 transition-all flex items-center justify-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Create New Functional Division
      </button>
    </div>
  );

  const renderAdmins = () => (
    <div className="space-y-6">
      {/* Admin Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">Total Admins</div>
          <div className="text-2xl font-bold text-white">{allAdmins.length}</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">Active Now</div>
          <div className="text-2xl font-bold text-green-400">
            {allAdmins.filter(a => a.status === 'active').length}
          </div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">Zone Heads</div>
          <div className="text-2xl font-bold text-blue-400">
            {allAdmins.filter(a => a.role.includes('Head')).length}
          </div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm mb-1">Away</div>
          <div className="text-2xl font-bold text-yellow-400">
            {allAdmins.filter(a => a.status === 'away').length}
          </div>
        </div>
      </div>

      {/* Admin List */}
      <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <h3 className="text-white font-semibold">All Zone Admins</h3>
          <button
            onClick={() => setShowAdminModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            Add Admin
          </button>
        </div>
        <table className="w-full">
          <thead className="bg-gray-900/50">
            <tr>
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Admin</th>
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Zone</th>
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Role</th>
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Status</th>
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Last Active</th>
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {allAdmins.map(admin => (
              <tr key={admin.id} className="hover:bg-gray-700/30">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{admin.name.charAt(0)}</span>
                    </div>
                    <span className="text-white">{admin.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-300">{admin.zone}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs ${
                    admin.role.includes('Head') ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-700 text-gray-300'
                  }`}>
                    {admin.role}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      admin.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                    <span className={admin.status === 'active' ? 'text-green-400' : 'text-yellow-400'}>
                      {admin.status}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-400">{admin.lastActive}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-gray-700 rounded">
                      <Edit2 className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-700 rounded">
                      <Lock className="w-4 h-4 text-gray-400" />
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

  // Zone Detail Modal
  const renderZoneDetail = () => {
    if (!selectedZone) return null;

    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{selectedZone.name}</h2>
                <p className="text-gray-400">Zone Management</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedZone(null)}
              className="text-gray-400 hover:text-white"
            >
              <XCircle className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Zone Stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-900/50 rounded-xl p-4">
                <div className="text-gray-400 text-sm">Merchants</div>
                <div className="text-2xl font-bold text-white">{selectedZone.merchants.toLocaleString()}</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4">
                <div className="text-gray-400 text-sm">Users</div>
                <div className="text-2xl font-bold text-white">{(selectedZone.users/1000).toFixed(0)}K</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4">
                <div className="text-gray-400 text-sm">Revenue</div>
                <div className="text-2xl font-bold text-green-400">₹{(selectedZone.revenue/10000000).toFixed(1)}Cr</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4">
                <div className="text-gray-400 text-sm">Growth</div>
                <div className="text-2xl font-bold text-blue-400">+{selectedZone.growth}%</div>
              </div>
            </div>

            {/* Zone Admins */}
            <div>
              <h3 className="text-white font-semibold mb-4">Zone Admins</h3>
              <div className="space-y-3">
                {selectedZone.admins.map(admin => (
                  <div key={admin.id} className="flex items-center justify-between bg-gray-900/50 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">{admin.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="text-white">{admin.name}</div>
                        <div className="text-gray-400 text-sm">{admin.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        admin.permissions === 'full' ? 'bg-green-500/20 text-green-400' :
                        admin.permissions === 'operations' ? 'bg-blue-500/20 text-blue-400' :
                        admin.permissions === 'finance' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {admin.permissions} access
                      </span>
                      <button className="text-gray-400 hover:text-white">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Zone Rules */}
            <div>
              <h3 className="text-white font-semibold mb-4">Zone-Specific Rules ({selectedZone.rules})</h3>
              <button
                onClick={() => navigate('/admin/rule-engine')}
                className="w-full py-3 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600"
              >
                Configure Zone Rules →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900/20 to-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/admin/hq-command')} className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">Zone Management</h1>
                <p className="text-gray-400 text-sm">Regional & Functional Zone Control</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 py-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
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
        {activeTab === 'regional' && renderRegionalZones()}
        {activeTab === 'functional' && renderFunctionalZones()}
        {activeTab === 'admins' && renderAdmins()}
      </div>

      {/* Zone Detail Modal */}
      {selectedZone && renderZoneDetail()}
    </div>
  );
};

export default ZoneManagement;
