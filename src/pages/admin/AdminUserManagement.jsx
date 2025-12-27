import { useState } from 'react';
import {
  Shield, UserCog, Lock, Activity, Search, Plus,
  Edit, Ban, RefreshCw, Eye, Clock, Mail, Phone,
  CheckCircle, XCircle, ToggleLeft, ToggleRight
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminUserManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const [adminUsers, setAdminUsers] = useState([
    {
      id: 1,
      name: 'Rejaul Karim',
      email: 'rejaul@rez.com',
      phone: '+91 98765 43210',
      role: 'Super Admin',
      status: 'active',
      lastLogin: '2 hours ago',
      ipAddress: '192.168.1.100',
      createdAt: '2024-01-01'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya.sharma@rez.com',
      phone: '+91 98765 43211',
      role: 'Operations Manager',
      status: 'active',
      lastLogin: '1 day ago',
      ipAddress: '192.168.1.101',
      createdAt: '2024-01-15'
    },
    {
      id: 3,
      name: 'Amit Patel',
      email: 'amit.patel@rez.com',
      phone: '+91 98765 43212',
      role: 'Marketing Manager',
      status: 'active',
      lastLogin: '3 hours ago',
      ipAddress: '192.168.1.102',
      createdAt: '2024-02-01'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      email: 'sarah.j@rez.com',
      phone: '+91 98765 43213',
      role: 'Finance Manager',
      status: 'active',
      lastLogin: '5 hours ago',
      ipAddress: '192.168.1.103',
      createdAt: '2024-02-10'
    },
    {
      id: 5,
      name: 'Rahul Kumar',
      email: 'rahul.k@rez.com',
      phone: '+91 98765 43214',
      role: 'Support Agent',
      status: 'active',
      lastLogin: '30 mins ago',
      ipAddress: '192.168.1.104',
      createdAt: '2024-03-01'
    },
    {
      id: 6,
      name: 'Michael Chen',
      email: 'michael.chen@rez.com',
      phone: '+91 98765 43215',
      role: 'Content Moderator',
      status: 'inactive',
      lastLogin: '5 days ago',
      ipAddress: '192.168.1.105',
      createdAt: '2024-02-15'
    }
  ]);

  const [activityLogs, setActivityLogs] = useState([
    {
      id: 1,
      user: 'Rejaul Karim',
      action: 'Created new merchant account',
      timestamp: '2025-12-27 14:30:45',
      ipAddress: '192.168.1.100',
      details: 'Merchant: Fresh Foods Pvt Ltd'
    },
    {
      id: 2,
      user: 'Priya Sharma',
      action: 'Updated cashback offer',
      timestamp: '2025-12-27 13:15:22',
      ipAddress: '192.168.1.101',
      details: 'Offer ID: #12345 - Changed cashback from 10% to 15%'
    },
    {
      id: 3,
      user: 'Amit Patel',
      action: 'Approved campaign',
      timestamp: '2025-12-27 12:45:10',
      ipAddress: '192.168.1.102',
      details: 'Campaign: New Year Sale 2025'
    },
    {
      id: 4,
      user: 'Sarah Johnson',
      action: 'Processed withdrawal request',
      timestamp: '2025-12-27 11:20:33',
      ipAddress: '192.168.1.103',
      details: 'User ID: #4567, Amount: ₹5,000'
    },
    {
      id: 5,
      user: 'Rahul Kumar',
      action: 'Resolved support ticket',
      timestamp: '2025-12-27 10:55:18',
      ipAddress: '192.168.1.104',
      details: 'Ticket #8901 - Payment not received issue'
    }
  ]);

  const [newAdmin, setNewAdmin] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Support Agent',
    twoFactorAuth: false,
    permissions: {
      viewUsers: false,
      editUsers: false,
      viewMerchants: false,
      editMerchants: false,
      viewTransactions: false,
      processRefunds: false,
      viewReports: false,
      manageContent: false,
      manageCampaigns: false,
      viewSettings: false,
      editSettings: false
    }
  });

  const roles = [
    'Super Admin',
    'Operations Manager',
    'Marketing Manager',
    'Finance Manager',
    'Support Agent',
    'Content Moderator'
  ];

  const permissionsGrid = {
    'Super Admin': {
      viewUsers: true, editUsers: true, viewMerchants: true, editMerchants: true,
      viewTransactions: true, processRefunds: true, viewReports: true, manageContent: true,
      manageCampaigns: true, viewSettings: true, editSettings: true
    },
    'Operations Manager': {
      viewUsers: true, editUsers: true, viewMerchants: true, editMerchants: true,
      viewTransactions: true, processRefunds: true, viewReports: true, manageContent: false,
      manageCampaigns: false, viewSettings: true, editSettings: false
    },
    'Marketing Manager': {
      viewUsers: true, editUsers: false, viewMerchants: true, editMerchants: false,
      viewTransactions: true, processRefunds: false, viewReports: true, manageContent: true,
      manageCampaigns: true, viewSettings: false, editSettings: false
    },
    'Finance Manager': {
      viewUsers: true, editUsers: false, viewMerchants: true, editMerchants: false,
      viewTransactions: true, processRefunds: true, viewReports: true, manageContent: false,
      manageCampaigns: false, viewSettings: false, editSettings: false
    },
    'Support Agent': {
      viewUsers: true, editUsers: false, viewMerchants: true, editMerchants: false,
      viewTransactions: true, processRefunds: false, viewReports: false, manageContent: false,
      manageCampaigns: false, viewSettings: false, editSettings: false
    },
    'Content Moderator': {
      viewUsers: true, editUsers: false, viewMerchants: false, editMerchants: false,
      viewTransactions: false, processRefunds: false, viewReports: false, manageContent: true,
      manageCampaigns: false, viewSettings: false, editSettings: false
    }
  };

  const filteredAdmins = adminUsers.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         admin.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'all' || admin.role === filterRole;
    const matchesStatus = filterStatus === 'all' || admin.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleCreateAdmin = () => {
    const admin = {
      id: adminUsers.length + 1,
      ...newAdmin,
      status: 'active',
      lastLogin: 'Never',
      ipAddress: '-',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setAdminUsers([...adminUsers, admin]);
    setShowCreateForm(false);
    setNewAdmin({
      name: '',
      email: '',
      phone: '',
      role: 'Support Agent',
      twoFactorAuth: false,
      permissions: {
        viewUsers: false,
        editUsers: false,
        viewMerchants: false,
        editMerchants: false,
        viewTransactions: false,
        processRefunds: false,
        viewReports: false,
        manageContent: false,
        manageCampaigns: false,
        viewSettings: false,
        editSettings: false
      }
    });
  };

  const togglePermission = (permission) => {
    setNewAdmin({
      ...newAdmin,
      permissions: {
        ...newAdmin.permissions,
        [permission]: !newAdmin.permissions[permission]
      }
    });
  };

  const getRoleBadgeColor = (role) => {
    const colors = {
      'Super Admin': 'bg-purple-100 text-purple-700',
      'Operations Manager': 'bg-blue-100 text-blue-700',
      'Marketing Manager': 'bg-pink-100 text-pink-700',
      'Finance Manager': 'bg-green-100 text-green-700',
      'Support Agent': 'bg-yellow-100 text-yellow-700',
      'Content Moderator': 'bg-orange-100 text-orange-700'
    };
    return colors[role] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin User Management</h1>
              <p className="text-gray-600 mt-1">Manage admin users, roles and permissions</p>
            </div>
            <button
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Admin User
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Admins</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{adminUsers.length}</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <UserCog className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Users</p>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {adminUsers.filter(a => a.status === 'active').length}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Super Admins</p>
                <p className="text-3xl font-bold text-purple-600 mt-2">
                  {adminUsers.filter(a => a.role === 'Super Admin').length}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Activity Logs</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">{activityLogs.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Create Admin Form */}
        {showCreateForm && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Create New Admin User</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={newAdmin.name}
                  onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={newAdmin.email}
                  onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="admin@rez.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={newAdmin.phone}
                  onChange={(e) => setNewAdmin({ ...newAdmin, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select
                  value={newAdmin.role}
                  onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  {roles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Permissions */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Permissions</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.keys(newAdmin.permissions).map(permission => (
                  <div key={permission} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm text-gray-700 capitalize">
                      {permission.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <button onClick={() => togglePermission(permission)}>
                      {newAdmin.permissions[permission] ? (
                        <ToggleRight className="w-8 h-8 text-green-600" />
                      ) : (
                        <ToggleLeft className="w-8 h-8 text-gray-400" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg mb-6">
              <div>
                <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600">Require 2FA for enhanced security</p>
              </div>
              <button onClick={() => setNewAdmin({ ...newAdmin, twoFactorAuth: !newAdmin.twoFactorAuth })}>
                {newAdmin.twoFactorAuth ? (
                  <ToggleRight className="w-10 h-10 text-green-600" />
                ) : (
                  <ToggleLeft className="w-10 h-10 text-gray-400" />
                )}
              </button>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCreateAdmin}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Create Admin User
              </button>
              <button
                onClick={() => setShowCreateForm(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Roles</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Admin Users Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">Admin Users</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Admin User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Login</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredAdmins.map(admin => (
                  <tr key={admin.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                          {admin.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{admin.name}</p>
                          <p className="text-sm text-gray-500">ID: #{admin.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="text-gray-900 flex items-center gap-1">
                          <Mail className="w-3 h-3 text-gray-400" />
                          {admin.email}
                        </p>
                        <p className="text-gray-500 flex items-center gap-1 mt-1">
                          <Phone className="w-3 h-3 text-gray-400" />
                          {admin.phone}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(admin.role)}`}>
                        {admin.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="text-gray-900 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          {admin.lastLogin}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">IP: {admin.ipAddress}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        admin.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {admin.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg" title="Deactivate">
                          <Ban className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg" title="Reset Password">
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Logs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">Activity Logs (Audit Trail)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Who</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">IP Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {activityLogs.map(log => (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900">{log.user}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{log.action}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600">{log.timestamp}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600 font-mono">{log.ipAddress}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600">{log.details}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Permissions Grid */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">Role Permissions Matrix</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">View Users</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Edit Users</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">View Merchants</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Edit Merchants</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">View Transactions</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Process Refunds</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">View Reports</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Manage Content</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Manage Campaigns</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">View Settings</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Edit Settings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Object.entries(permissionsGrid).map(([role, permissions]) => (
                  <tr key={role} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(role)}`}>
                        {role}
                      </span>
                    </td>
                    {Object.values(permissions).map((hasPermission, idx) => (
                      <td key={idx} className="px-6 py-4 text-center">
                        {hasPermission ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
