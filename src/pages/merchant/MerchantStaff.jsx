import { useState } from 'react';
import {
  Users, UserPlus, Shield, Edit, Trash2, Mail, Lock, Eye,
  EyeOff, Check, X, Search, Plus, Calendar, Clock, Activity,
  Settings, Download, UserCheck, UserX, Key, Filter
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantStaff() {
  const [activeTab, setActiveTab] = useState('staff');
  const [showAddStaff, setShowAddStaff] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const [staffRoles, setStaffRoles] = useState([
    {
      id: 1,
      name: 'Store Manager',
      description: 'Full access to all features',
      permissions: ['all'],
      count: 2,
      color: 'purple'
    },
    {
      id: 2,
      name: 'Cashier',
      description: 'View transactions, process refunds',
      permissions: ['view_transactions', 'process_refunds', 'view_customers'],
      count: 5,
      color: 'blue'
    },
    {
      id: 3,
      name: 'Marketing Manager',
      description: 'Create offers, view analytics',
      permissions: ['create_offers', 'view_analytics', 'manage_marketing', 'view_customers'],
      count: 1,
      color: 'green'
    },
    {
      id: 4,
      name: 'Accountant',
      description: 'View financials and settlements',
      permissions: ['view_financials', 'view_settlements', 'view_transactions', 'export_reports'],
      count: 1,
      color: 'orange'
    }
  ]);

  const [staffMembers, setStaffMembers] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@coffeehouse.com',
      phone: '+91 98765 43210',
      role: 'Store Manager',
      status: 'Active',
      lastLogin: '2 hours ago',
      joinDate: '2023-06-15'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@coffeehouse.com',
      phone: '+91 98765 43211',
      role: 'Cashier',
      status: 'Active',
      lastLogin: '1 day ago',
      joinDate: '2023-08-20'
    },
    {
      id: 3,
      name: 'Carol White',
      email: 'carol@coffeehouse.com',
      phone: '+91 98765 43212',
      role: 'Cashier',
      status: 'Active',
      lastLogin: 'Today',
      joinDate: '2023-09-10'
    },
    {
      id: 4,
      name: 'David Brown',
      email: 'david@coffeehouse.com',
      phone: '+91 98765 43213',
      role: 'Marketing Manager',
      status: 'Active',
      lastLogin: '3 hours ago',
      joinDate: '2023-07-05'
    },
    {
      id: 5,
      name: 'Emily Davis',
      email: 'emily@coffeehouse.com',
      phone: '+91 98765 43214',
      role: 'Accountant',
      status: 'Active',
      lastLogin: '5 hours ago',
      joinDate: '2023-10-12'
    },
    {
      id: 6,
      name: 'Frank Wilson',
      email: 'frank@coffeehouse.com',
      phone: '+91 98765 43215',
      role: 'Cashier',
      status: 'Inactive',
      lastLogin: '30 days ago',
      joinDate: '2023-05-20'
    }
  ]);

  const [activityLog, setActivityLog] = useState([
    {
      id: 1,
      staff: 'Alice Johnson',
      action: 'Created new offer "50% OFF Pizza"',
      timestamp: '2 hours ago',
      type: 'offer'
    },
    {
      id: 2,
      staff: 'Bob Smith',
      action: 'Processed refund for Order #2024-001',
      timestamp: '3 hours ago',
      type: 'transaction'
    },
    {
      id: 3,
      staff: 'David Brown',
      action: 'Updated store marketing campaign',
      timestamp: '5 hours ago',
      type: 'marketing'
    },
    {
      id: 4,
      staff: 'Emily Davis',
      action: 'Exported financial report',
      timestamp: '1 day ago',
      type: 'finance'
    },
    {
      id: 5,
      staff: 'Carol White',
      action: 'Viewed customer details',
      timestamp: '1 day ago',
      type: 'customer'
    }
  ]);

  const [permissions, setPermissions] = useState([
    { id: 'view_dashboard', name: 'View Dashboard', category: 'General' },
    { id: 'view_transactions', name: 'View Transactions', category: 'Transactions' },
    { id: 'process_refunds', name: 'Process Refunds', category: 'Transactions' },
    { id: 'create_offers', name: 'Create Offers', category: 'Marketing' },
    { id: 'view_analytics', name: 'View Analytics', category: 'Analytics' },
    { id: 'manage_marketing', name: 'Manage Marketing', category: 'Marketing' },
    { id: 'view_financials', name: 'View Financials', category: 'Finance' },
    { id: 'view_settlements', name: 'View Settlements', category: 'Finance' },
    { id: 'export_reports', name: 'Export Reports', category: 'Reports' },
    { id: 'view_customers', name: 'View Customers', category: 'Customers' },
    { id: 'manage_staff', name: 'Manage Staff', category: 'Admin' },
    { id: 'manage_settings', name: 'Manage Settings', category: 'Admin' }
  ]);

  const filteredStaff = staffMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || member.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getRoleColor = (roleName) => {
    const role = staffRoles.find(r => r.name === roleName);
    return role?.color || 'gray';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Staff Management</h1>
              <p className="text-gray-600 mt-1">Manage team members, roles, and permissions</p>
            </div>
            <button
              onClick={() => setShowAddStaff(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <UserPlus className="w-5 h-5" />
              Add Staff Member
            </button>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <p className="text-sm text-gray-600 font-medium">Total Staff</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{staffMembers.length}</p>
            <p className="text-sm text-gray-600 mt-1">
              {staffMembers.filter(s => s.status === 'Active').length} active
            </p>
          </div>

          {staffRoles.slice(0, 3).map((role) => (
            <div key={role.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Shield className={`w-5 h-5 text-${role.color}-600`} />
                <p className="text-sm text-gray-600 font-medium">{role.name}s</p>
              </div>
              <p className="text-3xl font-bold text-gray-900">{role.count}</p>
              <p className="text-sm text-gray-600 mt-1">{role.description}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex gap-1 p-1">
            <button
              onClick={() => setActiveTab('staff')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'staff'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users className="w-5 h-5 inline mr-2" />
              Staff Members
            </button>
            <button
              onClick={() => setActiveTab('roles')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'roles'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Shield className="w-5 h-5 inline mr-2" />
              Roles & Permissions
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'activity'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Activity className="w-5 h-5 inline mr-2" />
              Activity Log
            </button>
          </div>
        </div>

        {/* Staff Members Tab */}
        {activeTab === 'staff' && (
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search staff members..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Staff Member</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Login</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Join Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredStaff.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900">{member.name}</p>
                          <p className="text-sm text-gray-500">{member.email}</p>
                          <p className="text-sm text-gray-500">{member.phone}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${getRoleColor(member.role)}-100 text-${getRoleColor(member.role)}-700`}>
                          {member.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900">{member.lastLogin}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600">{member.joinDate}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          member.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {member.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="Edit">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg" title="Reset Password">
                            <Key className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg" title="Deactivate">
                            <UserX className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Roles & Permissions Tab */}
        {activeTab === 'roles' && (
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Staff Roles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {staffRoles.map((role) => (
                  <div key={role.id} className={`bg-gradient-to-br from-${role.color}-50 to-${role.color}-100 rounded-xl p-6 border-2 border-${role.color}-200`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 bg-${role.color}-200 rounded-lg`}>
                          <Shield className={`w-6 h-6 text-${role.color}-700`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{role.name}</h3>
                          <p className="text-sm text-gray-600">{role.description}</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-white rounded-lg">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-700 mb-2">Permissions:</p>
                      <div className="flex flex-wrap gap-2">
                        {role.permissions[0] === 'all' ? (
                          <span className="px-2 py-1 bg-white text-gray-700 text-xs rounded-full font-medium">
                            Full Access
                          </span>
                        ) : (
                          role.permissions.map((perm) => (
                            <span key={perm} className="px-2 py-1 bg-white text-gray-700 text-xs rounded-full">
                              {perm.replace('_', ' ')}
                            </span>
                          ))
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <span className="text-sm text-gray-600">{role.count} staff members</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Permission Matrix */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Permission Matrix</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Permission</th>
                      {staffRoles.map((role) => (
                        <th key={role.id} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                          {role.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {permissions.map((permission) => (
                      <tr key={permission.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{permission.name}</p>
                            <p className="text-xs text-gray-500">{permission.category}</p>
                          </div>
                        </td>
                        {staffRoles.map((role) => (
                          <td key={role.id} className="px-6 py-4 text-center">
                            {role.permissions[0] === 'all' || role.permissions.includes(permission.id) ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
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
        )}

        {/* Activity Log Tab */}
        {activeTab === 'activity' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Staff Activity Log</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  <Download className="w-5 h-5" />
                  Export Log
                </button>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {activityLog.map((log) => (
                <div key={log.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {log.staff.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{log.staff}</p>
                      <p className="text-sm text-gray-600 mt-1">{log.action}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          {log.timestamp}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          log.type === 'offer' ? 'bg-purple-100 text-purple-700' :
                          log.type === 'transaction' ? 'bg-green-100 text-green-700' :
                          log.type === 'marketing' ? 'bg-blue-100 text-blue-700' :
                          log.type === 'finance' ? 'bg-orange-100 text-orange-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {log.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add Staff Modal (simplified, would be a modal in production) */}
        {showAddStaff && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Add Staff Member</h2>
                  <button
                    onClick={() => setShowAddStaff(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      {staffRoles.map(role => (
                        <option key={role.id} value={role.name}>{role.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setShowAddStaff(false)}
                    className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Send Invitation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
