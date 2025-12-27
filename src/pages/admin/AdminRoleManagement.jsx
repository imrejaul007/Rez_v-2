import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Users, Plus, Edit, Trash2, Eye, Search, Filter,
  CheckCircle, XCircle, AlertTriangle, Crown, Star, Target,
  MapPin, DollarSign, Megaphone, Settings, BarChart3, Package,
  Mail, Phone, Calendar, Clock, Award, TrendingUp, Activity,
  UserPlus, UserMinus, Lock, Unlock, Download, RefreshCw
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminRoleManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [showAddAdmin, setShowAddAdmin] = useState(false);

  // Admin Roles Hierarchy
  const roleHierarchy = [
    {
      level: 1,
      name: 'HQ Admin (Super Admin)',
      icon: Crown,
      color: 'purple',
      count: 3,
      description: 'Full access to all systems, regions, and specialized admins',
      permissions: ['All permissions', 'Manage all admin roles', 'Global dashboard access']
    },
    {
      level: 2,
      name: 'Regional Admin',
      icon: MapPin,
      color: 'blue',
      count: 8,
      description: 'City/region level management, oversees specialized admins in their region',
      permissions: ['Regional dashboard', 'Manage region-specific admins', 'Regional reports']
    },
    {
      level: 3,
      name: 'Marketing Admin',
      icon: Megaphone,
      color: 'pink',
      count: 12,
      description: 'Manages campaigns, offers, and marketing initiatives',
      permissions: ['Campaign management', 'Offer approvals', 'Marketing analytics']
    },
    {
      level: 3,
      name: 'Finance Admin',
      icon: DollarSign,
      color: 'green',
      count: 6,
      description: 'Handles payments, settlements, and financial operations',
      permissions: ['Payment processing', 'Settlement management', 'Financial reports']
    },
    {
      level: 3,
      name: 'Operations Admin',
      icon: Settings,
      color: 'orange',
      count: 10,
      description: 'Manages merchants, categories, and day-to-day operations',
      permissions: ['Merchant management', 'Category control', 'Quality monitoring']
    },
    {
      level: 3,
      name: 'Customer Support Admin',
      icon: Users,
      color: 'cyan',
      count: 15,
      description: 'Manages customer issues, tickets, and support operations',
      permissions: ['Ticket management', 'User support', 'Issue resolution']
    },
    {
      level: 3,
      name: 'Content Admin',
      icon: Package,
      color: 'indigo',
      count: 8,
      description: 'Manages content, UGC, reviews, and moderation',
      permissions: ['Content moderation', 'UGC management', 'Review monitoring']
    },
    {
      level: 3,
      name: 'Analytics Admin',
      icon: BarChart3,
      color: 'teal',
      count: 5,
      description: 'Access to all analytics, reports, and insights',
      permissions: ['All analytics', 'Custom reports', 'Data exports']
    }
  ];

  // Current Admins
  const [admins] = useState([
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@rez.com',
      phone: '+91 98765 43210',
      role: 'HQ Admin (Super Admin)',
      region: 'All',
      status: 'active',
      joinedAt: '2023-01-15',
      lastActive: '2 mins ago',
      permissions: 'Full Access',
      avatar: 'RK'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya.sharma@rez.com',
      phone: '+91 98765 43211',
      role: 'Regional Admin',
      region: 'Mumbai',
      status: 'active',
      joinedAt: '2023-02-20',
      lastActive: '5 mins ago',
      permissions: 'Regional Access',
      avatar: 'PS'
    },
    {
      id: 3,
      name: 'Amit Patel',
      email: 'amit.patel@rez.com',
      phone: '+91 98765 43212',
      role: 'Marketing Admin',
      region: 'Mumbai',
      status: 'active',
      joinedAt: '2023-03-10',
      lastActive: '15 mins ago',
      permissions: 'Marketing',
      avatar: 'AP'
    },
    {
      id: 4,
      name: 'Sneha Desai',
      email: 'sneha.desai@rez.com',
      phone: '+91 98765 43213',
      role: 'Finance Admin',
      region: 'Delhi',
      status: 'active',
      joinedAt: '2023-03-15',
      lastActive: '1 hour ago',
      permissions: 'Finance',
      avatar: 'SD'
    },
    {
      id: 5,
      name: 'Rahul Singh',
      email: 'rahul.singh@rez.com',
      phone: '+91 98765 43214',
      role: 'Operations Admin',
      region: 'Bangalore',
      status: 'active',
      joinedAt: '2023-04-01',
      lastActive: '3 hours ago',
      permissions: 'Operations',
      avatar: 'RS'
    },
    {
      id: 6,
      name: 'Neha Gupta',
      email: 'neha.gupta@rez.com',
      phone: '+91 98765 43215',
      role: 'Regional Admin',
      region: 'Delhi',
      status: 'inactive',
      joinedAt: '2023-02-25',
      lastActive: '2 days ago',
      permissions: 'Regional Access',
      avatar: 'NG'
    }
  ]);

  // Activity Log
  const [activityLog] = useState([
    {
      id: 1,
      admin: 'Rajesh Kumar',
      action: 'Created new admin role',
      target: 'Content Admin - Mumbai',
      timestamp: '10 mins ago',
      type: 'create'
    },
    {
      id: 2,
      admin: 'Priya Sharma',
      action: 'Updated permissions',
      target: 'Amit Patel',
      timestamp: '2 hours ago',
      type: 'update'
    },
    {
      id: 3,
      admin: 'Rajesh Kumar',
      action: 'Suspended admin account',
      target: 'Neha Gupta',
      timestamp: '1 day ago',
      type: 'suspend'
    },
    {
      id: 4,
      admin: 'Amit Patel',
      action: 'Approved campaign',
      target: 'Mumbai Food Festival',
      timestamp: '3 hours ago',
      type: 'approval'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'inactive': return 'bg-gray-100 text-gray-700';
      case 'suspended': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getRoleColor = (role) => {
    if (role.includes('HQ Admin')) return 'from-purple-500 to-pink-500';
    if (role.includes('Regional')) return 'from-blue-500 to-cyan-500';
    if (role.includes('Marketing')) return 'from-pink-500 to-rose-500';
    if (role.includes('Finance')) return 'from-green-500 to-emerald-500';
    if (role.includes('Operations')) return 'from-orange-500 to-red-500';
    if (role.includes('Support')) return 'from-cyan-500 to-blue-500';
    if (role.includes('Content')) return 'from-indigo-500 to-purple-500';
    if (role.includes('Analytics')) return 'from-teal-500 to-green-500';
    return 'from-gray-500 to-gray-600';
  };

  const getActionIcon = (type) => {
    switch (type) {
      case 'create': return <UserPlus className="w-4 h-4 text-green-600" />;
      case 'update': return <Edit className="w-4 h-4 text-blue-600" />;
      case 'suspend': return <UserMinus className="w-4 h-4 text-red-600" />;
      case 'approval': return <CheckCircle className="w-4 h-4 text-green-600" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const filteredAdmins = admins.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterRole === 'all' || admin.role === filterRole;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="lg:ml-64">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-8 h-8" />
                  <h1 className="text-3xl font-bold">Admin Role Management</h1>
                </div>
                <p className="text-purple-100 text-lg">Manage admin roles, permissions & hierarchy</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowAddAdmin(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium"
                >
                  <Plus className="w-5 h-5" />
                  Add Admin
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                  <Download className="w-5 h-5" />
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Admin Role Hierarchy */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Admin Role Hierarchy</h2>
              <p className="text-sm text-gray-600 mt-1">
                HQ Admin → Regional Admin → Specialized Admins (Marketing, Finance, Operations, etc.)
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {roleHierarchy.map((role, index) => (
                  <div
                    key={index}
                    className={`p-6 border-2 rounded-lg ${
                      role.level === 1 ? 'border-purple-300 bg-purple-50' :
                      role.level === 2 ? 'border-blue-300 bg-blue-50' :
                      'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${
                          role.color === 'purple' ? 'from-purple-500 to-pink-500' :
                          role.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                          role.color === 'pink' ? 'from-pink-500 to-rose-500' :
                          role.color === 'green' ? 'from-green-500 to-emerald-500' :
                          role.color === 'orange' ? 'from-orange-500 to-red-500' :
                          role.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                          role.color === 'indigo' ? 'from-indigo-500 to-purple-500' :
                          role.color === 'teal' ? 'from-teal-500 to-green-500' :
                          'from-gray-500 to-gray-600'
                        }`}>
                          <role.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-bold text-gray-900">{role.name}</h3>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-semibold">
                              Level {role.level}
                            </span>
                            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-semibold">
                              {role.count} active
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">{role.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {role.permissions.map((permission, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                              >
                                ✓ {permission}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Admins */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Active Admin Accounts</h2>
                <div className="flex gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search admins..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="all">All Roles</option>
                    <option value="HQ Admin (Super Admin)">HQ Admin</option>
                    <option value="Regional Admin">Regional Admin</option>
                    <option value="Marketing Admin">Marketing Admin</option>
                    <option value="Finance Admin">Finance Admin</option>
                    <option value="Operations Admin">Operations Admin</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {filteredAdmins.map((admin) => (
                <div key={admin.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getRoleColor(admin.role)} flex items-center justify-center text-white font-bold text-lg`}>
                        {admin.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{admin.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(admin.status)}`}>
                            {admin.status}
                          </span>
                          <span className="text-xs text-gray-500">Last active: {admin.lastActive}</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Role</p>
                            <p className="font-semibold text-gray-900">{admin.role}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Region</p>
                            <p className="font-semibold text-gray-900">{admin.region}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Email</p>
                            <p className="text-gray-900">{admin.email}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Phone</p>
                            <p className="text-gray-900">{admin.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-3 text-xs text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Joined: {admin.joinedAt}
                          </span>
                          <span className="flex items-center gap-1">
                            <Shield className="w-3 h-3" />
                            Permissions: {admin.permissions}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-blue-600" />
                      </button>
                      {admin.status === 'active' ? (
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Lock className="w-4 h-4 text-orange-600" />
                        </button>
                      ) : (
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Unlock className="w-4 h-4 text-green-600" />
                        </button>
                      )}
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Recent Admin Activity</h2>
                <Link
                  to="/admin/logs"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                >
                  View All Logs →
                </Link>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {activityLog.map((activity) => (
                <div key={activity.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {getActionIcon(activity.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{activity.admin}</span> {activity.action}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">{activity.target}</p>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {activity.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Admin Modal (Placeholder) */}
      {showAddAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Add New Admin</h2>
              <button
                onClick={() => setShowAddAdmin(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="john.doe@rez.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Select Role</option>
                    <option>Regional Admin</option>
                    <option>Marketing Admin</option>
                    <option>Finance Admin</option>
                    <option>Operations Admin</option>
                    <option>Customer Support Admin</option>
                    <option>Content Admin</option>
                    <option>Analytics Admin</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>Select Region</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Pune</option>
                  <option>Hyderabad</option>
                  <option>All Regions</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
                >
                  Create Admin Account
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddAdmin(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
