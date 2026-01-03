import { useState } from 'react';
import AdminNav from '../../components/admin/AdminNav';
import {
  Shield, Users, Settings, Lock, Eye, Edit, Trash2, Plus,
  Search, Filter, UserCheck, Globe, MapPin, Briefcase,
  CheckCircle, XCircle, AlertTriangle, Crown, Star, UserCog
} from 'lucide-react';

const AdminRoleBasedAccess = () => {
  const [activeTab, setActiveTab] = useState('roles');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState(null);

  // Role hierarchy data
  const roleHierarchy = {
    admin: {
      hq_admin: {
        id: 'hq_admin',
        name: 'HQ Admin',
        icon: Crown,
        color: 'purple',
        count: 5,
        level: 1,
        permissions: ['all'],
        description: 'Full platform control - all features, all regions',
        features: {
          accessible: 98,
          restricted: 0
        }
      },
      regional_admin: {
        id: 'regional_admin',
        name: 'Regional Admin',
        icon: Globe,
        color: 'blue',
        count: 23,
        level: 2,
        permissions: ['region_management', 'regional_analytics', 'regional_merchants'],
        description: 'Regional control - designated region only',
        features: {
          accessible: 76,
          restricted: 22
        }
      },
      specialist_roles: [
        {
          id: 'finance_admin',
          name: 'Finance Admin',
          icon: Briefcase,
          color: 'green',
          count: 8,
          level: 3,
          department: 'Finance',
          permissions: ['transactions', 'settlements', 'reconciliation', 'financial_reports'],
          description: 'Finance department - payments, settlements, reconciliation',
          features: {
            accessible: 18,
            restricted: 80
          }
        },
        {
          id: 'marketing_admin',
          name: 'Marketing Admin',
          icon: Star,
          color: 'pink',
          count: 12,
          level: 3,
          department: 'Marketing',
          permissions: ['campaigns', 'offers', 'email_marketing', 'sms_campaigns'],
          description: 'Marketing department - campaigns, offers, promotions',
          features: {
            accessible: 24,
            restricted: 74
          }
        },
        {
          id: 'operations_admin',
          name: 'Operations Admin',
          icon: Settings,
          color: 'orange',
          count: 15,
          level: 3,
          department: 'Operations',
          permissions: ['merchant_onboarding', 'kyc', 'compliance', 'support'],
          description: 'Operations department - merchant support, KYC, compliance',
          features: {
            accessible: 28,
            restricted: 70
          }
        },
        {
          id: 'content_admin',
          name: 'Content Admin',
          icon: Edit,
          color: 'indigo',
          count: 6,
          level: 3,
          department: 'Content',
          permissions: ['content_moderation', 'ugc_approval', 'banners', 'creator_content'],
          description: 'Content department - moderation, creator content, banners',
          features: {
            accessible: 12,
            restricted: 86
          }
        },
        {
          id: 'analytics_admin',
          name: 'Analytics Admin',
          icon: Eye,
          color: 'cyan',
          count: 4,
          level: 3,
          department: 'Analytics',
          permissions: ['analytics', 'reports', 'insights', 'dashboards'],
          description: 'Analytics department - data insights, reports, dashboards',
          features: {
            accessible: 22,
            restricted: 76
          }
        },
        {
          id: 'fraud_admin',
          name: 'Fraud & Security Admin',
          icon: Shield,
          color: 'red',
          count: 7,
          level: 3,
          department: 'Security',
          permissions: ['fraud_detection', 'risk_management', 'security_logs'],
          description: 'Security department - fraud detection, risk management',
          features: {
            accessible: 8,
            restricted: 90
          }
        }
      ]
    }
  };

  // Active admin users with roles
  const adminUsers = [
    {
      id: 'ADM-001',
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@rez.com',
      role: 'hq_admin',
      region: 'All India',
      status: 'active',
      lastActive: '2 minutes ago',
      actionsToday: 145,
      department: 'Executive'
    },
    {
      id: 'ADM-002',
      name: 'Priya Sharma',
      email: 'priya.sharma@rez.com',
      role: 'hq_admin',
      region: 'All India',
      status: 'active',
      lastActive: '15 minutes ago',
      actionsToday: 89,
      department: 'Executive'
    },
    {
      id: 'ADM-023',
      name: 'Amit Patel',
      email: 'amit.patel@rez.com',
      role: 'regional_admin',
      region: 'West India (Mumbai, Pune)',
      status: 'active',
      lastActive: '5 minutes ago',
      actionsToday: 67,
      department: 'Regional Operations'
    },
    {
      id: 'ADM-024',
      name: 'Neha Reddy',
      email: 'neha.reddy@rez.com',
      role: 'regional_admin',
      region: 'South India (Bangalore, Chennai)',
      status: 'active',
      lastActive: '32 minutes ago',
      actionsToday: 54,
      department: 'Regional Operations'
    },
    {
      id: 'ADM-045',
      name: 'Vikram Singh',
      email: 'vikram.singh@rez.com',
      role: 'finance_admin',
      region: 'All India',
      status: 'active',
      lastActive: '1 hour ago',
      actionsToday: 123,
      department: 'Finance'
    },
    {
      id: 'ADM-056',
      name: 'Anjali Mehta',
      email: 'anjali.mehta@rez.com',
      role: 'marketing_admin',
      region: 'All India',
      status: 'active',
      lastActive: '25 minutes ago',
      actionsToday: 78,
      department: 'Marketing'
    },
    {
      id: 'ADM-067',
      name: 'Suresh Nair',
      email: 'suresh.nair@rez.com',
      role: 'operations_admin',
      region: 'All India',
      status: 'active',
      lastActive: '10 minutes ago',
      actionsToday: 92,
      department: 'Operations'
    },
    {
      id: 'ADM-078',
      name: 'Kavita Joshi',
      email: 'kavita.joshi@rez.com',
      role: 'content_admin',
      region: 'All India',
      status: 'active',
      lastActive: '45 minutes ago',
      actionsToday: 156,
      department: 'Content'
    }
  ];

  // Permission categories with detailed access control
  const permissionCategories = [
    {
      category: 'Merchant Management',
      permissions: [
        { id: 'merchant_onboarding', name: 'Merchant Onboarding', critical: true },
        { id: 'merchant_approval', name: 'Merchant Approval', critical: true },
        { id: 'merchant_analytics', name: 'Merchant Analytics', critical: false },
        { id: 'merchant_settlements', name: 'Merchant Settlements', critical: true },
        { id: 'merchant_tier_config', name: 'Merchant Tier Configuration', critical: false }
      ]
    },
    {
      category: 'User Management',
      permissions: [
        { id: 'user_data_access', name: 'User Data Access', critical: true },
        { id: 'user_verification', name: 'User Verification', critical: false },
        { id: 'user_support', name: 'User Support', critical: false },
        { id: 'user_analytics', name: 'User Analytics', critical: false }
      ]
    },
    {
      category: 'Financial Operations',
      permissions: [
        { id: 'transactions_view', name: 'View Transactions', critical: false },
        { id: 'settlements_processing', name: 'Process Settlements', critical: true },
        { id: 'refunds_processing', name: 'Process Refunds', critical: true },
        { id: 'coin_issuance', name: 'Coin Issuance Control', critical: true },
        { id: 'financial_reports', name: 'Financial Reports', critical: false }
      ]
    },
    {
      category: 'Marketing & Campaigns',
      permissions: [
        { id: 'campaign_create', name: 'Create Campaigns', critical: false },
        { id: 'campaign_approve', name: 'Approve Campaigns', critical: true },
        { id: 'offers_management', name: 'Offers Management', critical: false },
        { id: 'email_marketing', name: 'Email Marketing', critical: false },
        { id: 'sms_campaigns', name: 'SMS Campaigns', critical: false }
      ]
    },
    {
      category: 'Content & Moderation',
      permissions: [
        { id: 'content_moderation', name: 'Content Moderation', critical: true },
        { id: 'ugc_approval', name: 'UGC Approval', critical: true },
        { id: 'creator_content_review', name: 'Creator Content Review', critical: true },
        { id: 'banners_management', name: 'Banners Management', critical: false }
      ]
    },
    {
      category: 'Platform Configuration',
      permissions: [
        { id: 'system_settings', name: 'System Settings', critical: true },
        { id: 'integration_config', name: 'Integration Configuration', critical: true },
        { id: 'api_keys', name: 'API Keys Management', critical: true },
        { id: 'role_management', name: 'Role Management', critical: true }
      ]
    },
    {
      category: 'Security & Compliance',
      permissions: [
        { id: 'fraud_detection', name: 'Fraud Detection', critical: true },
        { id: 'kyc_verification', name: 'KYC Verification', critical: true },
        { id: 'compliance_reports', name: 'Compliance Reports', critical: true },
        { id: 'security_logs', name: 'Security Logs', critical: false }
      ]
    }
  ];

  // Role permission matrix
  const rolePermissions = {
    hq_admin: 'all',
    regional_admin: [
      'merchant_analytics', 'merchant_tier_config', 'user_analytics',
      'user_support', 'transactions_view', 'offers_management',
      'content_moderation', 'ugc_approval'
    ],
    finance_admin: [
      'transactions_view', 'settlements_processing', 'refunds_processing',
      'coin_issuance', 'financial_reports', 'merchant_settlements'
    ],
    marketing_admin: [
      'campaign_create', 'campaign_approve', 'offers_management',
      'email_marketing', 'sms_campaigns', 'banners_management'
    ],
    operations_admin: [
      'merchant_onboarding', 'merchant_approval', 'user_verification',
      'user_support', 'kyc_verification', 'compliance_reports'
    ],
    content_admin: [
      'content_moderation', 'ugc_approval', 'creator_content_review',
      'banners_management'
    ],
    analytics_admin: [
      'merchant_analytics', 'user_analytics', 'financial_reports',
      'compliance_reports', 'transactions_view'
    ],
    fraud_admin: [
      'fraud_detection', 'security_logs', 'kyc_verification',
      'compliance_reports', 'user_data_access'
    ]
  };

  // Recent role activity
  const recentActivity = [
    {
      id: 1,
      admin: 'Rajesh Kumar',
      role: 'HQ Admin',
      action: 'Created new Regional Admin role',
      target: 'North India Region',
      timestamp: '2 minutes ago',
      type: 'role_create'
    },
    {
      id: 2,
      admin: 'Kavita Joshi',
      role: 'Content Admin',
      action: 'Approved 15 creator content pieces',
      target: 'Creator Content Module',
      timestamp: '15 minutes ago',
      type: 'content_approval'
    },
    {
      id: 3,
      admin: 'Vikram Singh',
      role: 'Finance Admin',
      action: 'Processed settlements',
      target: '₹12.4L to 234 merchants',
      timestamp: '32 minutes ago',
      type: 'settlement'
    },
    {
      id: 4,
      admin: 'Amit Patel',
      role: 'Regional Admin',
      action: 'Approved 8 merchant applications',
      target: 'West India Region',
      timestamp: '1 hour ago',
      type: 'merchant_approval'
    },
    {
      id: 5,
      admin: 'Priya Sharma',
      role: 'HQ Admin',
      action: 'Updated permission matrix',
      target: 'Marketing Admin role',
      timestamp: '2 hours ago',
      type: 'permission_update'
    }
  ];

  // Regional assignments
  const regionalAssignments = [
    {
      id: 1,
      region: 'West India',
      cities: ['Mumbai', 'Pune', 'Ahmedabad', 'Surat'],
      admin: 'Amit Patel',
      merchants: 2456,
      users: 345678,
      status: 'active'
    },
    {
      id: 2,
      region: 'South India',
      cities: ['Bangalore', 'Chennai', 'Hyderabad', 'Kochi'],
      admin: 'Neha Reddy',
      merchants: 3234,
      users: 456789,
      status: 'active'
    },
    {
      id: 3,
      region: 'North India',
      cities: ['Delhi', 'Noida', 'Gurgaon', 'Chandigarh'],
      admin: 'Rohit Kapoor',
      merchants: 2890,
      users: 398765,
      status: 'active'
    },
    {
      id: 4,
      region: 'East India',
      cities: ['Kolkata', 'Bhubaneswar', 'Guwahati'],
      admin: 'Sanjay Das',
      merchants: 1234,
      users: 189456,
      status: 'active'
    }
  ];

  const getRoleColor = (roleId) => {
    if (roleId === 'hq_admin') return 'purple';
    if (roleId === 'regional_admin') return 'blue';
    const specialist = roleHierarchy.admin.specialist_roles.find(r => r.id === roleId);
    return specialist?.color || 'gray';
  };

  const getRoleIcon = (roleId) => {
    if (roleId === 'hq_admin') return Crown;
    if (roleId === 'regional_admin') return Globe;
    const specialist = roleHierarchy.admin.specialist_roles.find(r => r.id === roleId);
    return specialist?.icon || UserCog;
  };

  const hasPermission = (roleId, permissionId) => {
    const permissions = rolePermissions[roleId];
    if (permissions === 'all') return true;
    return permissions?.includes(permissionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6">
      <AdminNav />
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-purple-500/20 backdrop-blur-lg rounded-2xl border border-purple-500/30 flex items-center justify-center">
            <Shield className="w-6 h-6 text-purple-300" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Role-Based Access Control</h1>
            <p className="text-purple-200">Manage admin roles, permissions & regional assignments</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Crown className="w-8 h-8 text-purple-300" />
            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-200 text-xs font-medium">
              Level 1
            </span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">5</div>
          <div className="text-purple-200 text-sm">HQ Admins</div>
          <div className="text-xs text-purple-300 mt-2">Full platform control</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Globe className="w-8 h-8 text-blue-300" />
            <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-200 text-xs font-medium">
              Level 2
            </span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">23</div>
          <div className="text-blue-200 text-sm">Regional Admins</div>
          <div className="text-xs text-blue-300 mt-2">4 regions covered</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-green-300" />
            <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-200 text-xs font-medium">
              Level 3
            </span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">52</div>
          <div className="text-green-200 text-sm">Specialist Admins</div>
          <div className="text-xs text-green-300 mt-2">6 departments</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Shield className="w-8 h-8 text-orange-300" />
            <span className="px-3 py-1 bg-orange-500/20 rounded-full text-orange-200 text-xs font-medium">
              Active
            </span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">80</div>
          <div className="text-orange-200 text-sm">Total Admin Users</div>
          <div className="text-xs text-orange-300 mt-2">98% active today</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10">
        {[
          { id: 'roles', label: 'Role Hierarchy', icon: Shield },
          { id: 'users', label: 'Admin Users', icon: Users },
          { id: 'permissions', label: 'Permissions Matrix', icon: Lock },
          { id: 'regions', label: 'Regional Assignments', icon: MapPin },
          { id: 'activity', label: 'Activity Log', icon: Eye }
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

      {/* Role Hierarchy Tab */}
      {activeTab === 'roles' && (
        <div className="space-y-6">
          {/* HQ Admin */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-purple-500/30 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                  <Crown className="w-8 h-8 text-purple-300" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">HQ Admin</h3>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-200 text-xs font-medium">
                      Level 1 - Supreme
                    </span>
                  </div>
                  <p className="text-purple-200 mb-3">Full platform control - all features, all regions</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-300" />
                      <span className="text-white font-medium">5 admins</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white font-medium">98 features accessible</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-xl text-purple-200 transition-all">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-sm text-purple-300 mb-1">All Permissions</div>
                <div className="text-white font-medium">Unrestricted Access</div>
              </div>
              <div>
                <div className="text-sm text-purple-300 mb-1">Regional Scope</div>
                <div className="text-white font-medium">All India</div>
              </div>
              <div>
                <div className="text-sm text-purple-300 mb-1">Department</div>
                <div className="text-white font-medium">Executive Leadership</div>
              </div>
            </div>
          </div>

          {/* Regional Admin */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-blue-500/30 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-blue-300" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">Regional Admin</h3>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-200 text-xs font-medium">
                      Level 2 - Regional
                    </span>
                  </div>
                  <p className="text-blue-200 mb-3">Regional control - designated region only</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-300" />
                      <span className="text-white font-medium">23 admins</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white font-medium">76 features accessible</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span className="text-white/60 font-medium">22 restricted</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-xl text-blue-200 transition-all">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-sm text-blue-300 mb-1">Permissions</div>
                <div className="text-white font-medium">Regional Management</div>
              </div>
              <div>
                <div className="text-sm text-blue-300 mb-1">Regional Scope</div>
                <div className="text-white font-medium">Designated Region Only</div>
              </div>
              <div>
                <div className="text-sm text-blue-300 mb-1">Department</div>
                <div className="text-white font-medium">Regional Operations</div>
              </div>
            </div>
          </div>

          {/* Specialist Roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roleHierarchy.admin.specialist_roles.map((role) => {
              const IconComponent = role.icon;
              return (
                <div
                  key={role.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-${role.color}-500/30 p-6 hover:bg-white/15 transition-all cursor-pointer`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-${role.color}-500/20 rounded-xl flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 text-${role.color}-300`} />
                    </div>
                    <span className={`px-3 py-1 bg-${role.color}-500/20 rounded-full text-${role.color}-200 text-xs font-medium`}>
                      Level 3
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{role.name}</h4>
                  <p className={`text-${role.color}-200 text-sm mb-3`}>{role.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Users className={`w-4 h-4 text-${role.color}-300`} />
                      <span className="text-white text-sm">{role.count} admins</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">{role.features.accessible} features</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span className="text-white/60 text-sm">{role.features.restricted} restricted</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-xs text-white/60 mb-1">Department</div>
                    <div className="text-white font-medium">{role.department}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Admin Users Tab */}
      {activeTab === 'users' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search admin users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
              />
            </div>
            <button className="ml-4 px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-xl text-purple-200 flex items-center gap-2 transition-all">
              <Plus className="w-5 h-5" />
              <span>Add Admin</span>
            </button>
          </div>

          <div className="space-y-3">
            {adminUsers.map((user) => {
              const RoleIcon = getRoleIcon(user.role);
              const roleColor = getRoleColor(user.role);

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
                          <span className="px-2 py-1 bg-green-500/20 rounded-full text-green-300 text-xs">
                            {user.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-white/60">
                          <span>{user.email}</span>
                          <span>•</span>
                          <span className="capitalize">{user.role.replace('_', ' ')}</span>
                          <span>•</span>
                          <span>{user.region}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-medium mb-1">{user.actionsToday} actions today</div>
                        <div className="text-xs text-white/60">Last active: {user.lastActive}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all">
                        <Edit className="w-4 h-4 text-white/60" />
                      </button>
                      <button className="p-2 bg-white/5 hover:bg-red-500/20 rounded-lg transition-all">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Permissions Matrix Tab */}
      {activeTab === 'permissions' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Permission Matrix</h3>
            <p className="text-white/60">Role-based permission mapping across platform features</p>
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
                        {/* HQ Admin */}
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                          </div>
                          <span className="text-sm text-white/80">HQ Admin</span>
                        </div>

                        {/* Regional Admin */}
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            {hasPermission('regional_admin', permission.id) ? (
                              <CheckCircle className="w-5 h-5 text-green-400" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-400" />
                            )}
                          </div>
                          <span className="text-sm text-white/80">Regional</span>
                        </div>

                        {/* Show 2 relevant specialist roles */}
                        {roleHierarchy.admin.specialist_roles.slice(0, 2).map((role) => (
                          <div key={role.id} className="flex items-center gap-2">
                            <div className={`w-8 h-8 bg-${role.color}-500/20 rounded-lg flex items-center justify-center`}>
                              {hasPermission(role.id, permission.id) ? (
                                <CheckCircle className="w-5 h-5 text-green-400" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-400" />
                              )}
                            </div>
                            <span className="text-sm text-white/80">{role.name.split(' ')[0]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regional Assignments Tab */}
      {activeTab === 'regions' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {regionalAssignments.map((region) => (
            <div key={region.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{region.region}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {region.cities.map((city) => (
                        <span key={city} className="px-3 py-1 bg-white/10 rounded-lg text-white/80 text-sm">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-300 text-xs">
                  {region.status}
                </span>
              </div>

              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{region.admin}</div>
                    <div className="text-xs text-white/60">Regional Admin</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-sm text-white/60 mb-1">Merchants</div>
                  <div className="text-2xl font-bold text-white">{region.merchants.toLocaleString()}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-sm text-white/60 mb-1">Users</div>
                  <div className="text-2xl font-bold text-white">{region.users.toLocaleString()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Activity Log Tab */}
      {activeTab === 'activity' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Recent Activity</h3>
            <p className="text-white/60">Real-time admin actions and role changes</p>
          </div>

          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activity.type === 'role_create' ? 'bg-purple-500/20' :
                    activity.type === 'content_approval' ? 'bg-blue-500/20' :
                    activity.type === 'settlement' ? 'bg-green-500/20' :
                    activity.type === 'merchant_approval' ? 'bg-orange-500/20' :
                    'bg-gray-500/20'
                  }`}>
                    {activity.type === 'role_create' && <Shield className="w-5 h-5 text-purple-300" />}
                    {activity.type === 'content_approval' && <CheckCircle className="w-5 h-5 text-blue-300" />}
                    {activity.type === 'settlement' && <Briefcase className="w-5 h-5 text-green-300" />}
                    {activity.type === 'merchant_approval' && <UserCheck className="w-5 h-5 text-orange-300" />}
                    {activity.type === 'permission_update' && <Settings className="w-5 h-5 text-gray-300" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-medium">{activity.admin}</span>
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

export default AdminRoleBasedAccess;
