import { useState } from 'react';
import {
  Users, Crown, UserCog, ShoppingCart, BarChart3, Settings,
  Shield, Plus, Edit, Trash2, Eye, Lock, CheckCircle, XCircle,
  Award, Target, Clock, Activity, Search, Filter, AlertTriangle
} from 'lucide-react';

const MerchantUserRoles = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddUser, setShowAddUser] = useState(false);

  // Merchant role definitions
  const roleDefinitions = {
    owner: {
      id: 'owner',
      name: 'Owner',
      icon: Crown,
      color: 'purple',
      level: 1,
      description: 'Full business control - all features, all permissions',
      permissions: ['all'],
      features: {
        accessible: 87,
        restricted: 0
      },
      count: 1
    },
    manager: {
      id: 'manager',
      name: 'Store Manager',
      icon: UserCog,
      color: 'blue',
      level: 2,
      description: 'Operations management - daily operations, staff, inventory',
      permissions: [
        'view_dashboard', 'manage_inventory', 'manage_staff', 'view_analytics',
        'manage_orders', 'customer_support', 'view_transactions'
      ],
      features: {
        accessible: 56,
        restricted: 31
      },
      count: 8
    },
    pos_operator: {
      id: 'pos_operator',
      name: 'POS Operator',
      icon: ShoppingCart,
      color: 'green',
      level: 3,
      description: 'Point of sale - process transactions, handle orders',
      permissions: [
        'process_sales', 'apply_discounts', 'handle_returns', 'view_products'
      ],
      features: {
        accessible: 12,
        restricted: 75
      },
      count: 15
    },
    accountant: {
      id: 'accountant',
      name: 'Accountant',
      icon: BarChart3,
      color: 'orange',
      level: 3,
      description: 'Financial management - reports, settlements, reconciliation',
      permissions: [
        'view_financials', 'manage_accounting', 'view_settlements',
        'export_reports', 'view_transactions'
      ],
      features: {
        accessible: 18,
        restricted: 69
      },
      count: 3
    },
    marketing_manager: {
      id: 'marketing_manager',
      name: 'Marketing Manager',
      icon: Target,
      color: 'pink',
      level: 3,
      description: 'Marketing operations - campaigns, offers, promotions',
      permissions: [
        'create_offers', 'manage_campaigns', 'view_analytics',
        'customer_segmentation', 'loyalty_programs'
      ],
      features: {
        accessible: 22,
        restricted: 65
      },
      count: 4
    },
    inventory_manager: {
      id: 'inventory_manager',
      name: 'Inventory Manager',
      icon: Settings,
      color: 'cyan',
      level: 3,
      description: 'Inventory control - stock, suppliers, procurement',
      permissions: [
        'manage_inventory', 'manage_suppliers', 'stock_transfers',
        'view_inventory_reports', 'manage_products'
      ],
      features: {
        accessible: 16,
        restricted: 71
      },
      count: 5
    },
    cashier: {
      id: 'cashier',
      name: 'Cashier',
      icon: ShoppingCart,
      color: 'emerald',
      level: 4,
      description: 'Basic sales - process payments, handle cash',
      permissions: [
        'process_sales', 'handle_cash', 'basic_returns'
      ],
      features: {
        accessible: 8,
        restricted: 79
      },
      count: 22
    },
    support_agent: {
      id: 'support_agent',
      name: 'Support Agent',
      icon: Shield,
      color: 'indigo',
      level: 4,
      description: 'Customer support - queries, complaints, reviews',
      permissions: [
        'customer_support', 'view_orders', 'handle_reviews', 'view_customers'
      ],
      features: {
        accessible: 10,
        restricted: 77
      },
      count: 6
    }
  };

  // Merchant users with roles
  const merchantUsers = [
    {
      id: 'USR-001',
      name: 'Rajesh Sharma',
      email: 'rajesh@fashionparadise.com',
      phone: '+91 98765 12345',
      role: 'owner',
      status: 'active',
      joinedDate: '2024-01-15',
      lastActive: '5 minutes ago',
      actionsToday: 87,
      branch: 'All Branches',
      createdBy: 'System'
    },
    {
      id: 'USR-002',
      name: 'Priya Patel',
      email: 'priya@fashionparadise.com',
      phone: '+91 98765 12346',
      role: 'manager',
      status: 'active',
      joinedDate: '2024-02-01',
      lastActive: '15 minutes ago',
      actionsToday: 124,
      branch: 'Mumbai Main',
      createdBy: 'Rajesh Sharma'
    },
    {
      id: 'USR-003',
      name: 'Amit Kumar',
      email: 'amit@fashionparadise.com',
      phone: '+91 98765 12347',
      role: 'manager',
      status: 'active',
      joinedDate: '2024-02-01',
      lastActive: '32 minutes ago',
      actionsToday: 98,
      branch: 'Pune Branch',
      createdBy: 'Rajesh Sharma'
    },
    {
      id: 'USR-004',
      name: 'Sneha Desai',
      email: 'sneha@fashionparadise.com',
      phone: '+91 98765 12348',
      role: 'accountant',
      status: 'active',
      joinedDate: '2024-02-10',
      lastActive: '1 hour ago',
      actionsToday: 45,
      branch: 'All Branches',
      createdBy: 'Rajesh Sharma'
    },
    {
      id: 'USR-005',
      name: 'Vikram Singh',
      email: 'vikram@fashionparadise.com',
      phone: '+91 98765 12349',
      role: 'marketing_manager',
      status: 'active',
      joinedDate: '2024-02-15',
      lastActive: '45 minutes ago',
      actionsToday: 67,
      branch: 'All Branches',
      createdBy: 'Rajesh Sharma'
    },
    {
      id: 'USR-006',
      name: 'Kavita Joshi',
      email: 'kavita.pos@fashionparadise.com',
      phone: '+91 98765 12350',
      role: 'pos_operator',
      status: 'active',
      joinedDate: '2024-03-01',
      lastActive: '2 minutes ago',
      actionsToday: 156,
      branch: 'Mumbai Main',
      createdBy: 'Priya Patel'
    },
    {
      id: 'USR-007',
      name: 'Rahul Mehta',
      email: 'rahul.pos@fashionparadise.com',
      phone: '+91 98765 12351',
      role: 'pos_operator',
      status: 'active',
      joinedDate: '2024-03-01',
      lastActive: '8 minutes ago',
      actionsToday: 142,
      branch: 'Mumbai Main',
      createdBy: 'Priya Patel'
    },
    {
      id: 'USR-008',
      name: 'Anjali Nair',
      email: 'anjali@fashionparadise.com',
      phone: '+91 98765 12352',
      role: 'inventory_manager',
      status: 'active',
      joinedDate: '2024-03-05',
      lastActive: '25 minutes ago',
      actionsToday: 78,
      branch: 'All Branches',
      createdBy: 'Rajesh Sharma'
    }
  ];

  // Permission categories
  const permissionCategories = [
    {
      category: 'Sales & Orders',
      permissions: [
        { id: 'process_sales', name: 'Process Sales', critical: true },
        { id: 'apply_discounts', name: 'Apply Discounts', critical: false },
        { id: 'handle_returns', name: 'Handle Returns', critical: false },
        { id: 'manage_orders', name: 'Manage Orders', critical: false },
        { id: 'cancel_orders', name: 'Cancel Orders', critical: true }
      ]
    },
    {
      category: 'Inventory Management',
      permissions: [
        { id: 'manage_inventory', name: 'Manage Inventory', critical: false },
        { id: 'manage_products', name: 'Manage Products', critical: false },
        { id: 'stock_transfers', name: 'Stock Transfers', critical: false },
        { id: 'manage_suppliers', name: 'Manage Suppliers', critical: false },
        { id: 'view_inventory_reports', name: 'View Inventory Reports', critical: false }
      ]
    },
    {
      category: 'Staff & Operations',
      permissions: [
        { id: 'manage_staff', name: 'Manage Staff', critical: true },
        { id: 'view_staff_performance', name: 'View Staff Performance', critical: false },
        { id: 'manage_schedules', name: 'Manage Schedules', critical: false },
        { id: 'approve_leaves', name: 'Approve Leaves', critical: false }
      ]
    },
    {
      category: 'Financial',
      permissions: [
        { id: 'view_financials', name: 'View Financials', critical: false },
        { id: 'manage_accounting', name: 'Manage Accounting', critical: true },
        { id: 'view_settlements', name: 'View Settlements', critical: false },
        { id: 'export_reports', name: 'Export Reports', critical: false },
        { id: 'view_transactions', name: 'View Transactions', critical: false }
      ]
    },
    {
      category: 'Marketing & Campaigns',
      permissions: [
        { id: 'create_offers', name: 'Create Offers', critical: false },
        { id: 'manage_campaigns', name: 'Manage Campaigns', critical: false },
        { id: 'customer_segmentation', name: 'Customer Segmentation', critical: false },
        { id: 'loyalty_programs', name: 'Loyalty Programs', critical: false }
      ]
    },
    {
      category: 'Analytics & Reports',
      permissions: [
        { id: 'view_dashboard', name: 'View Dashboard', critical: false },
        { id: 'view_analytics', name: 'View Analytics', critical: false },
        { id: 'custom_reports', name: 'Custom Reports', critical: false }
      ]
    },
    {
      category: 'Customer Management',
      permissions: [
        { id: 'view_customers', name: 'View Customers', critical: false },
        { id: 'customer_support', name: 'Customer Support', critical: false },
        { id: 'handle_reviews', name: 'Handle Reviews', critical: false }
      ]
    },
    {
      category: 'Settings & Configuration',
      permissions: [
        { id: 'manage_settings', name: 'Manage Settings', critical: true },
        { id: 'manage_integrations', name: 'Manage Integrations', critical: true },
        { id: 'manage_roles', name: 'Manage User Roles', critical: true }
      ]
    }
  ];

  // Role activity log
  const activityLog = [
    {
      id: 1,
      user: 'Priya Patel',
      role: 'Store Manager',
      action: 'Created new POS Operator',
      target: 'Kavita Joshi',
      timestamp: '2 hours ago',
      type: 'user_create'
    },
    {
      id: 2,
      user: 'Rajesh Sharma',
      role: 'Owner',
      action: 'Updated permissions',
      target: 'Marketing Manager role',
      timestamp: '5 hours ago',
      type: 'permission_update'
    },
    {
      id: 3,
      user: 'Amit Kumar',
      role: 'Store Manager',
      action: 'Deactivated user',
      target: 'Old POS Operator',
      timestamp: '1 day ago',
      type: 'user_deactivate'
    },
    {
      id: 4,
      user: 'Rajesh Sharma',
      role: 'Owner',
      action: 'Created new role',
      target: 'Support Agent',
      timestamp: '2 days ago',
      type: 'role_create'
    }
  ];

  const getRoleColor = (roleId) => {
    return roleDefinitions[roleId]?.color || 'gray';
  };

  const getRoleIcon = (roleId) => {
    return roleDefinitions[roleId]?.icon || Users;
  };

  const hasPermission = (roleId, permissionId) => {
    const role = roleDefinitions[roleId];
    if (!role) return false;
    if (role.permissions.includes('all')) return true;
    return role.permissions.includes(permissionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-purple-500/20 backdrop-blur-lg rounded-2xl border border-purple-500/30 flex items-center justify-center">
            <Users className="w-6 h-6 text-purple-300" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">User & Role Management</h1>
            <p className="text-purple-200">Create and manage user roles for your business</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-purple-300" />
            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-200 text-xs font-medium">
              Total
            </span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {merchantUsers.length}
          </div>
          <div className="text-purple-200 text-sm">Total Users</div>
          <div className="text-xs text-purple-300 mt-2">
            {merchantUsers.filter(u => u.status === 'active').length} active
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Shield className="w-8 h-8 text-blue-300" />
            <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-200 text-xs font-medium">
              Roles
            </span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {Object.keys(roleDefinitions).length}
          </div>
          <div className="text-blue-200 text-sm">Available Roles</div>
          <div className="text-xs text-blue-300 mt-2">4 permission levels</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Activity className="w-8 h-8 text-green-300" />
            <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-200 text-xs font-medium">
              Today
            </span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">847</div>
          <div className="text-green-200 text-sm">Total Actions</div>
          <div className="text-xs text-green-300 mt-2">Across all users</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Crown className="w-8 h-8 text-orange-300" />
            <span className="px-3 py-1 bg-orange-500/20 rounded-full text-orange-200 text-xs font-medium">
              Level 1
            </span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">1</div>
          <div className="text-orange-200 text-sm">Business Owner</div>
          <div className="text-xs text-orange-300 mt-2">Full access</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10">
        {[
          { id: 'users', label: 'Users', icon: Users },
          { id: 'roles', label: 'Role Definitions', icon: Shield },
          { id: 'permissions', label: 'Permissions Matrix', icon: Lock },
          { id: 'activity', label: 'Activity Log', icon: Activity }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all ${
              activeTab === tab.id
                ? 'bg-white/20 text-white shadow-lg'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
              />
            </div>
            <button
              onClick={() => setShowAddUser(true)}
              className="ml-4 px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-xl text-purple-200 flex items-center gap-2 transition-all"
            >
              <Plus className="w-5 h-5" />
              <span>Add User</span>
            </button>
          </div>

          <div className="space-y-3">
            {merchantUsers.map((user) => {
              const RoleIcon = getRoleIcon(user.role);
              const roleColor = getRoleColor(user.role);
              const roleDef = roleDefinitions[user.role];

              return (
                <div key={user.id} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-12 h-12 bg-${roleColor}-500/20 rounded-xl flex items-center justify-center`}>
                        <RoleIcon className={`w-6 h-6 text-${roleColor}-300`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="text-white font-medium">{user.name}</h4>
                          <span className="text-xs text-white/60">{user.id}</span>
                          {user.role === 'owner' && (
                            <Crown className="w-4 h-4 text-yellow-400" />
                          )}
                          <span className="px-2 py-1 bg-green-500/20 rounded-full text-green-300 text-xs">
                            {user.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-white/60">
                          <span>{user.email}</span>
                          <span>•</span>
                          <span>{roleDef?.name}</span>
                          <span>•</span>
                          <span>{user.branch}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-medium mb-1">{user.actionsToday} actions today</div>
                        <div className="text-xs text-white/60">Last active: {user.lastActive}</div>
                      </div>
                    </div>
                    {user.role !== 'owner' && (
                      <div className="flex items-center gap-2 ml-4">
                        <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all">
                          <Edit className="w-4 h-4 text-white/60" />
                        </button>
                        <button className="p-2 bg-white/5 hover:bg-red-500/20 rounded-lg transition-all">
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Roles Tab */}
      {activeTab === 'roles' && (
        <div className="space-y-4">
          {Object.values(roleDefinitions).map((role) => {
            const IconComponent = role.icon;
            return (
              <div
                key={role.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-16 h-16 bg-${role.color}-500/20 rounded-2xl flex items-center justify-center`}>
                      <IconComponent className={`w-8 h-8 text-${role.color}-300`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{role.name}</h3>
                        <span className={`px-3 py-1 bg-${role.color}-500/20 rounded-full text-${role.color}-200 text-xs font-medium`}>
                          Level {role.level}
                        </span>
                        {role.id === 'owner' && (
                          <Crown className="w-5 h-5 text-yellow-400" />
                        )}
                      </div>
                      <p className="text-white/60 mb-4">{role.description}</p>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="bg-white/5 rounded-xl p-3">
                          <div className="text-sm text-white/60 mb-1">Users</div>
                          <div className="text-xl font-bold text-white">{role.count}</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3">
                          <div className="text-sm text-white/60 mb-1">Accessible Features</div>
                          <div className="text-xl font-bold text-green-400">{role.features.accessible}</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3">
                          <div className="text-sm text-white/60 mb-1">Restricted</div>
                          <div className="text-xl font-bold text-red-400">{role.features.restricted}</div>
                        </div>
                      </div>

                      {role.permissions[0] !== 'all' && (
                        <div className="flex flex-wrap gap-2">
                          {role.permissions.map((permission) => (
                            <span
                              key={permission}
                              className={`px-3 py-1 bg-${role.color}-500/10 border border-${role.color}-500/30 rounded-lg text-${role.color}-200 text-xs`}
                            >
                              {permission.replace(/_/g, ' ')}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {role.id !== 'owner' && (
                    <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-white/60 hover:text-white transition-all">
                      <Edit className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Permissions Matrix Tab */}
      {activeTab === 'permissions' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Permission Matrix</h3>
            <p className="text-white/60">Role-based permission mapping for merchant users</p>
          </div>

          <div className="space-y-6">
            {permissionCategories.map((category) => (
              <div key={category.category} className="bg-white/5 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">{category.category}</h4>
                <div className="space-y-3">
                  {category.permissions.map((permission) => (
                    <div key={permission.id} className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-white font-medium">{permission.name}</span>
                          {permission.critical && (
                            <span className="px-2 py-1 bg-red-500/20 rounded-full text-red-300 text-xs">
                              Critical
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-3">
                        {/* Show top 4 roles */}
                        {Object.values(roleDefinitions).slice(0, 4).map((role) => {
                          const hasAccess = hasPermission(role.id, permission.id);
                          return (
                            <div key={role.id} className="flex items-center gap-2">
                              <div className={`w-8 h-8 bg-${role.color}-500/20 rounded-lg flex items-center justify-center`}>
                                {hasAccess ? (
                                  <CheckCircle className="w-5 h-5 text-green-400" />
                                ) : (
                                  <XCircle className="w-5 h-5 text-red-400" />
                                )}
                              </div>
                              <span className="text-sm text-white/80">{role.name.split(' ')[0]}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Activity Log Tab */}
      {activeTab === 'activity' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Recent Activity</h3>
            <p className="text-white/60">User and role management actions</p>
          </div>

          <div className="space-y-3">
            {activityLog.map((activity) => (
              <div key={activity.id} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activity.type === 'user_create' ? 'bg-green-500/20' :
                    activity.type === 'permission_update' ? 'bg-blue-500/20' :
                    activity.type === 'user_deactivate' ? 'bg-red-500/20' :
                    'bg-purple-500/20'
                  }`}>
                    {activity.type === 'user_create' && <Plus className="w-5 h-5 text-green-300" />}
                    {activity.type === 'permission_update' && <Settings className="w-5 h-5 text-blue-300" />}
                    {activity.type === 'user_deactivate' && <XCircle className="w-5 h-5 text-red-300" />}
                    {activity.type === 'role_create' && <Shield className="w-5 h-5 text-purple-300" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-medium">{activity.user}</span>
                      <span className="text-xs text-white/40">•</span>
                      <span className="text-sm text-white/60">{activity.role}</span>
                    </div>
                    <div className="text-white/80 mb-1">{activity.action}</div>
                    <div className="text-sm text-white/60">{activity.target}</div>
                  </div>
                  <div className="text-sm text-white/40">{activity.timestamp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantUserRoles;
