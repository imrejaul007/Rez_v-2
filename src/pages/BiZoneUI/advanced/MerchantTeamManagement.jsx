import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Users, UserPlus, Edit2, Trash2, Shield, Settings,
  Eye, EyeOff, Lock, Unlock, Mail, Phone, Clock, CheckCircle,
  XCircle, AlertTriangle, Search, Filter, MoreVertical, Key,
  Store, DollarSign, Package, ShoppingCart, BarChart3, Megaphone,
  Calendar, FileText, UserCog, Crown, ChevronDown, ChevronRight,
  Activity, Bell, LogOut
} from 'lucide-react';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantTeamManagement = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('team');
  const [showAddMember, setShowAddMember] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showPermissions, setShowPermissions] = useState(false);

  const tabs = [
    { id: 'team', label: 'Team Members', icon: Users },
    { id: 'roles', label: 'Roles', icon: Shield },
    { id: 'activity', label: 'Activity Log', icon: Activity }
  ];

  // Team members
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh@store.com',
      phone: '+91 98765 43210',
      role: 'owner',
      roleName: 'Store Owner',
      status: 'active',
      lastActive: 'Now',
      avatar: 'RK',
      joinedDate: '2023-01-15',
      permissions: 'all'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya@store.com',
      phone: '+91 98765 43211',
      role: 'manager',
      roleName: 'Store Manager',
      status: 'active',
      lastActive: '5 mins ago',
      avatar: 'PS',
      joinedDate: '2023-03-20',
      permissions: 'manager'
    },
    {
      id: 3,
      name: 'Amit Singh',
      email: 'amit@store.com',
      phone: '+91 98765 43212',
      role: 'sales',
      roleName: 'Sales Staff',
      status: 'active',
      lastActive: '15 mins ago',
      avatar: 'AS',
      joinedDate: '2023-06-10',
      permissions: 'sales'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      email: 'neha@store.com',
      phone: '+91 98765 43213',
      role: 'inventory',
      roleName: 'Inventory Manager',
      status: 'active',
      lastActive: '1 hour ago',
      avatar: 'NG',
      joinedDate: '2023-08-05',
      permissions: 'inventory'
    },
    {
      id: 5,
      name: 'Vikram Mehta',
      email: 'vikram@store.com',
      phone: '+91 98765 43214',
      role: 'marketing',
      roleName: 'Marketing Lead',
      status: 'active',
      lastActive: '30 mins ago',
      avatar: 'VM',
      joinedDate: '2023-09-12',
      permissions: 'marketing'
    },
    {
      id: 6,
      name: 'Sunita Verma',
      email: 'sunita@store.com',
      phone: '+91 98765 43215',
      role: 'accountant',
      roleName: 'Accountant',
      status: 'active',
      lastActive: '2 hours ago',
      avatar: 'SV',
      joinedDate: '2023-10-01',
      permissions: 'finance'
    },
    {
      id: 7,
      name: 'Ravi Patel',
      email: 'ravi@store.com',
      phone: '+91 98765 43216',
      role: 'sales',
      roleName: 'Sales Staff',
      status: 'inactive',
      lastActive: '3 days ago',
      avatar: 'RP',
      joinedDate: '2023-11-15',
      permissions: 'sales'
    }
  ];

  // Predefined roles
  const roles = [
    {
      id: 'owner',
      name: 'Store Owner',
      description: 'Full access to all features',
      members: 1,
      color: 'yellow',
      permissions: {
        dashboard: true,
        pos: true,
        orders: true,
        products: true,
        inventory: true,
        customers: true,
        marketing: true,
        finance: true,
        reports: true,
        settings: true,
        team: true
      }
    },
    {
      id: 'manager',
      name: 'Store Manager',
      description: 'Manage daily operations',
      members: 1,
      color: 'blue',
      permissions: {
        dashboard: true,
        pos: true,
        orders: true,
        products: true,
        inventory: true,
        customers: true,
        marketing: true,
        finance: false,
        reports: true,
        settings: false,
        team: false
      }
    },
    {
      id: 'sales',
      name: 'Sales Staff',
      description: 'Handle sales and customers',
      members: 2,
      color: 'green',
      permissions: {
        dashboard: true,
        pos: true,
        orders: true,
        products: false,
        inventory: false,
        customers: true,
        marketing: false,
        finance: false,
        reports: false,
        settings: false,
        team: false
      }
    },
    {
      id: 'inventory',
      name: 'Inventory Manager',
      description: 'Manage stock and products',
      members: 1,
      color: 'purple',
      permissions: {
        dashboard: true,
        pos: false,
        orders: true,
        products: true,
        inventory: true,
        customers: false,
        marketing: false,
        finance: false,
        reports: true,
        settings: false,
        team: false
      }
    },
    {
      id: 'marketing',
      name: 'Marketing Lead',
      description: 'Handle promotions and campaigns',
      members: 1,
      color: 'pink',
      permissions: {
        dashboard: true,
        pos: false,
        orders: false,
        products: true,
        inventory: false,
        customers: true,
        marketing: true,
        finance: false,
        reports: true,
        settings: false,
        team: false
      }
    },
    {
      id: 'accountant',
      name: 'Accountant',
      description: 'Handle finances and reports',
      members: 1,
      color: 'orange',
      permissions: {
        dashboard: true,
        pos: false,
        orders: true,
        products: false,
        inventory: false,
        customers: false,
        marketing: false,
        finance: true,
        reports: true,
        settings: false,
        team: false
      }
    }
  ];

  // Activity log
  const activityLog = [
    { id: 1, user: 'Priya Sharma', action: 'Created new offer "Weekend Sale"', time: '5 mins ago', type: 'marketing' },
    { id: 2, user: 'Amit Singh', action: 'Processed order #12345', time: '15 mins ago', type: 'order' },
    { id: 3, user: 'Neha Gupta', action: 'Updated stock for 25 products', time: '30 mins ago', type: 'inventory' },
    { id: 4, user: 'Vikram Mehta', action: 'Launched Instagram campaign', time: '1 hour ago', type: 'marketing' },
    { id: 5, user: 'Sunita Verma', action: 'Generated monthly P&L report', time: '2 hours ago', type: 'finance' },
    { id: 6, user: 'Rajesh Kumar', action: 'Added new team member', time: '3 hours ago', type: 'team' },
    { id: 7, user: 'Priya Sharma', action: 'Updated store hours', time: '5 hours ago', type: 'settings' }
  ];

  const getRoleColor = (role) => {
    const colors = {
      owner: 'yellow',
      manager: 'blue',
      sales: 'green',
      inventory: 'purple',
      marketing: 'pink',
      accountant: 'orange'
    };
    return colors[role] || 'gray';
  };

  const renderTeam = () => (
    <div className="space-y-4">
      {/* Team Stats */}
      <div className="grid grid-cols-4 gap-3">
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm">Total Members</div>
          <div className="text-2xl font-bold text-white">{teamMembers.length}</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm">Active Now</div>
          <div className="text-2xl font-bold text-green-400">
            {teamMembers.filter(m => m.status === 'active').length}
          </div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm">Roles</div>
          <div className="text-2xl font-bold text-blue-400">{roles.length}</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="text-gray-400 text-sm">Pending Invites</div>
          <div className="text-2xl font-bold text-yellow-400">2</div>
        </div>
      </div>

      {/* Team List */}
      <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <h3 className="text-white font-semibold">Team Members</h3>
          <button
            onClick={() => setShowAddMember(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            Add Member
          </button>
        </div>
        <div className="divide-y divide-gray-700">
          {teamMembers.map(member => (
            <div key={member.id} className="p-4 hover:bg-gray-700/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${getRoleColor(member.role)}-500 to-${getRoleColor(member.role)}-600 rounded-full flex items-center justify-center`}>
                    <span className="text-white font-semibold">{member.avatar}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">{member.name}</span>
                      {member.role === 'owner' && (
                        <Crown className="w-4 h-4 text-yellow-400" />
                      )}
                    </div>
                    <div className="text-gray-400 text-sm">{member.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs bg-${getRoleColor(member.role)}-500/20 text-${getRoleColor(member.role)}-400`}>
                      {member.roleName}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        member.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                      }`}></div>
                      <span className={member.status === 'active' ? 'text-green-400' : 'text-gray-400'}>
                        {member.lastActive}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedMember(member);
                        setShowPermissions(true);
                      }}
                      className="p-2 hover:bg-gray-700 rounded-lg"
                    >
                      <Shield className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-700 rounded-lg">
                      <Edit2 className="w-4 h-4 text-gray-400" />
                    </button>
                    {member.role !== 'owner' && (
                      <button className="p-2 hover:bg-gray-700 rounded-lg">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRoles = () => (
    <div className="space-y-4">
      {/* Roles Grid */}
      <div className="grid grid-cols-2 gap-4">
        {roles.map(role => (
          <div key={role.id} className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 bg-${role.color}-500/20 rounded-xl flex items-center justify-center`}>
                  {role.id === 'owner' && <Crown className={`w-6 h-6 text-${role.color}-400`} />}
                  {role.id === 'manager' && <UserCog className={`w-6 h-6 text-${role.color}-400`} />}
                  {role.id === 'sales' && <ShoppingCart className={`w-6 h-6 text-${role.color}-400`} />}
                  {role.id === 'inventory' && <Package className={`w-6 h-6 text-${role.color}-400`} />}
                  {role.id === 'marketing' && <Megaphone className={`w-6 h-6 text-${role.color}-400`} />}
                  {role.id === 'accountant' && <DollarSign className={`w-6 h-6 text-${role.color}-400`} />}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{role.name}</h4>
                  <p className="text-gray-400 text-sm">{role.description}</p>
                </div>
              </div>
              <div className="text-gray-400 text-sm">{role.members} member(s)</div>
            </div>

            <div className="space-y-2">
              <div className="text-gray-400 text-xs mb-2">Permissions</div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(role.permissions).map(([perm, allowed]) => (
                  <span
                    key={perm}
                    className={`px-2 py-1 rounded text-xs ${
                      allowed
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-gray-700/50 text-gray-500'
                    }`}
                  >
                    {allowed ? '✓' : '✗'} {perm}
                  </span>
                ))}
              </div>
            </div>

            {role.id !== 'owner' && (
              <button className="mt-4 w-full py-2 border border-gray-600 rounded-lg text-gray-400 hover:bg-gray-700 text-sm">
                Edit Role Permissions
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Create Custom Role */}
      <button className="w-full py-4 border-2 border-dashed border-gray-700 rounded-xl text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-all flex items-center justify-center gap-2">
        <Shield className="w-5 h-5" />
        Create Custom Role
      </button>
    </div>
  );

  const renderActivity = () => (
    <div className="space-y-4">
      {/* Activity Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {['All', 'Orders', 'Inventory', 'Marketing', 'Finance', 'Settings'].map(filter => (
          <button
            key={filter}
            className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 whitespace-nowrap text-sm"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Activity Log */}
      <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-white font-semibold">Activity Log</h3>
        </div>
        <div className="divide-y divide-gray-700">
          {activityLog.map(activity => (
            <div key={activity.id} className="p-4 hover:bg-gray-700/30">
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.type === 'order' ? 'bg-blue-500/20' :
                  activity.type === 'inventory' ? 'bg-purple-500/20' :
                  activity.type === 'marketing' ? 'bg-pink-500/20' :
                  activity.type === 'finance' ? 'bg-green-500/20' :
                  activity.type === 'team' ? 'bg-yellow-500/20' :
                  'bg-gray-500/20'
                }`}>
                  {activity.type === 'order' && <ShoppingCart className="w-5 h-5 text-blue-400" />}
                  {activity.type === 'inventory' && <Package className="w-5 h-5 text-purple-400" />}
                  {activity.type === 'marketing' && <Megaphone className="w-5 h-5 text-pink-400" />}
                  {activity.type === 'finance' && <DollarSign className="w-5 h-5 text-green-400" />}
                  {activity.type === 'team' && <Users className="w-5 h-5 text-yellow-400" />}
                  {activity.type === 'settings' && <Settings className="w-5 h-5 text-gray-400" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">{activity.user}</span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm">{activity.time}</span>
                  </div>
                  <div className="text-gray-300">{activity.action}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Add Member Modal
  const renderAddMemberModal = () => (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl max-w-lg w-full">
        <div className="p-6 border-b border-gray-700 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Add Team Member</h2>
          <button onClick={() => setShowAddMember(false)} className="text-gray-400 hover:text-white">
            <XCircle className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-gray-400 text-sm mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Phone</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Role</label>
            <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none">
              <option value="">Select role</option>
              {roles.filter(r => r.id !== 'owner').map(role => (
                <option key={role.id} value={role.id}>{role.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-6 border-t border-gray-700 flex justify-end gap-3">
          <button
            onClick={() => setShowAddMember(false)}
            className="px-6 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700"
          >
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700">
            Send Invite
          </button>
        </div>
      </div>
    </div>
  );

  // Permissions Modal
  const renderPermissionsModal = () => {
    if (!selectedMember) return null;

    const memberRole = roles.find(r => r.id === selectedMember.role);

    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-2xl max-w-lg w-full">
          <div className="p-6 border-b border-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 bg-gradient-to-br from-${getRoleColor(selectedMember.role)}-500 to-${getRoleColor(selectedMember.role)}-600 rounded-full flex items-center justify-center`}>
                <span className="text-white font-semibold">{selectedMember.avatar}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{selectedMember.name}</h2>
                <p className="text-gray-400">{selectedMember.roleName}</p>
              </div>
            </div>
            <button onClick={() => setShowPermissions(false)} className="text-gray-400 hover:text-white">
              <XCircle className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            <h3 className="text-white font-semibold mb-4">Permissions</h3>
            <div className="space-y-3">
              {memberRole && Object.entries(memberRole.permissions).map(([perm, allowed]) => (
                <div key={perm} className="flex items-center justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-300 capitalize">{perm}</span>
                  <div className={`px-3 py-1 rounded-full text-xs ${
                    allowed ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {allowed ? 'Allowed' : 'Denied'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 border-t border-gray-700 flex justify-end">
            <button
              onClick={() => setShowPermissions(false)}
              className="px-6 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900/20 to-gray-900 border-b border-gray-800">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/merchant')} className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">Team Management</h1>
                <p className="text-gray-400 text-sm">Manage your store team</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800">
        <div className="px-4">
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
      <div className="px-4 py-6">
        {activeTab === 'team' && renderTeam()}
        {activeTab === 'roles' && renderRoles()}
        {activeTab === 'activity' && renderActivity()}
      </div>

      {/* Modals */}
      {showAddMember && renderAddMemberModal()}
      {showPermissions && renderPermissionsModal()}

      <MerchantNav />
    </div>
  );
};

export default MerchantTeamManagement;
