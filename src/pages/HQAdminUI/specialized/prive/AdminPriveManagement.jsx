import { useState } from 'react';
import AdminNav from '../../components/admin/AdminNav';
import {
  Crown, Users, CheckCircle, XCircle, Clock, TrendingUp, Award,
  Filter, Search, ChevronRight, Eye, Star, Target, Zap, AlertTriangle,
  ThumbsUp, ThumbsDown, MessageSquare, Calendar, BarChart3
} from 'lucide-react';

export default function AdminPriveManagement() {
  const [activeTab, setActiveTab] = useState('pending');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data - Pending Privé applications
  const pendingApplications = [
    {
      id: 'APP-001',
      userId: 'USR-45821',
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43210',
      appliedDate: '2024-12-26',
      currentTier: 'Gold',
      eligibilityScore: 87,
      metrics: {
        totalSpend: 125000,
        transactions: 156,
        reviews: 45,
        referrals: 12,
        socialScore: 92,
        engagementRate: 78
      },
      qualifications: [
        { criteria: 'Total Spend ≥ ₹1L', met: true, value: '₹1.25L' },
        { criteria: 'Transactions ≥ 100', met: true, value: '156' },
        { criteria: 'Reviews ≥ 30', met: true, value: '45' },
        { criteria: 'Referrals ≥ 10', met: true, value: '12' },
        { criteria: 'Social Score ≥ 80', met: true, value: '92' },
        { criteria: 'Engagement ≥ 70%', met: true, value: '78%' }
      ],
      recommendation: 'approve',
      notes: 'High-value customer with excellent engagement metrics'
    },
    {
      id: 'APP-002',
      userId: 'USR-32145',
      name: 'Rahul Mehta',
      email: 'rahul.m@email.com',
      phone: '+91 87654 32109',
      appliedDate: '2024-12-25',
      currentTier: 'Silver',
      eligibilityScore: 65,
      metrics: {
        totalSpend: 85000,
        transactions: 89,
        reviews: 22,
        referrals: 6,
        socialScore: 68,
        engagementRate: 55
      },
      qualifications: [
        { criteria: 'Total Spend ≥ ₹1L', met: false, value: '₹85K' },
        { criteria: 'Transactions ≥ 100', met: false, value: '89' },
        { criteria: 'Reviews ≥ 30', met: false, value: '22' },
        { criteria: 'Referrals ≥ 10', met: false, value: '6' },
        { criteria: 'Social Score ≥ 80', met: false, value: '68' },
        { criteria: 'Engagement ≥ 70%', met: false, value: '55%' }
      ],
      recommendation: 'reject',
      notes: 'Does not meet minimum eligibility criteria'
    },
    {
      id: 'APP-003',
      userId: 'USR-67890',
      name: 'Sneha Patel',
      email: 'sneha.patel@email.com',
      phone: '+91 76543 21098',
      appliedDate: '2024-12-27',
      currentTier: 'Platinum',
      eligibilityScore: 94,
      metrics: {
        totalSpend: 285000,
        transactions: 234,
        reviews: 78,
        referrals: 28,
        socialScore: 96,
        engagementRate: 89
      },
      qualifications: [
        { criteria: 'Total Spend ≥ ₹1L', met: true, value: '₹2.85L' },
        { criteria: 'Transactions ≥ 100', met: true, value: '234' },
        { criteria: 'Reviews ≥ 30', met: true, value: '78' },
        { criteria: 'Referrals ≥ 10', met: true, value: '28' },
        { criteria: 'Social Score ≥ 80', met: true, value: '96' },
        { criteria: 'Engagement ≥ 70%', met: true, value: '89%' }
      ],
      recommendation: 'fast-track',
      notes: 'Exceptional candidate - fast-track approval recommended'
    }
  ];

  // Mock data - Current Privé members
  const priveMembers = [
    {
      id: 'PRIVE-001',
      userId: 'USR-11234',
      name: 'Arjun Kapoor',
      email: 'arjun.k@email.com',
      joinedDate: '2024-11-15',
      status: 'active',
      tier: 'Elite',
      authority: 'Influencer',
      lifetimeValue: 456000,
      monthlySpend: 38000,
      impactScore: 92,
      contentCreated: 45,
      campaignsCompleted: 12,
      lastActive: '2 hours ago',
      violations: 0
    },
    {
      id: 'PRIVE-002',
      userId: 'USR-22456',
      name: 'Anjali Singh',
      email: 'anjali.s@email.com',
      joinedDate: '2024-10-20',
      status: 'active',
      tier: 'Elite',
      authority: 'Brand Ambassador',
      lifetimeValue: 678000,
      monthlySpend: 52000,
      impactScore: 88,
      contentCreated: 67,
      campaignsCompleted: 18,
      lastActive: '1 day ago',
      violations: 0
    },
    {
      id: 'PRIVE-003',
      userId: 'USR-33678',
      name: 'Vikram Desai',
      email: 'vikram.d@email.com',
      joinedDate: '2024-12-01',
      status: 'probation',
      tier: 'Rising Star',
      authority: 'Verified',
      lifetimeValue: 145000,
      monthlySpend: 12000,
      impactScore: 65,
      contentCreated: 15,
      campaignsCompleted: 3,
      lastActive: '5 hours ago',
      violations: 2
    }
  ];

  // Mock data - Statistics
  const stats = {
    totalMembers: 342,
    pendingApplications: 28,
    activeMembers: 298,
    onProbation: 15,
    suspended: 11,
    avgEligibilityScore: 84,
    approvalRate: 68,
    monthlyGrowth: 12
  };

  const handleApprove = (applicationId) => {
    console.log('Approving application:', applicationId);
    // Implementation would send approval
  };

  const handleReject = (applicationId) => {
    console.log('Rejecting application:', applicationId);
    // Implementation would send rejection
  };

  const handleSuspend = (memberId) => {
    console.log('Suspending member:', memberId);
    // Implementation would suspend member
  };

  const renderPendingApplications = () => (
    <div className="space-y-4">
      {pendingApplications.map((app) => (
        <div key={app.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Application Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {app.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-gray-900">{app.name}</h3>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {app.currentTier}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{app.email}</p>
                  <p className="text-sm text-gray-500">{app.phone}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    Applied: {new Date(app.appliedDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-gray-900">{app.eligibilityScore}</span>
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Eligibility</p>
                    <p className="text-xs text-gray-500">Score</p>
                  </div>
                </div>
                {app.recommendation === 'approve' && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    ✓ Recommended
                  </span>
                )}
                {app.recommendation === 'reject' && (
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                    ✗ Not Eligible
                  </span>
                )}
                {app.recommendation === 'fast-track' && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                    ⚡ Fast-Track
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="p-6 bg-gray-50 border-b border-gray-100">
            <div className="grid grid-cols-6 gap-4">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Total Spend</p>
                <p className="text-sm font-semibold text-gray-900">₹{(app.metrics.totalSpend / 1000).toFixed(0)}K</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Transactions</p>
                <p className="text-sm font-semibold text-gray-900">{app.metrics.transactions}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Reviews</p>
                <p className="text-sm font-semibold text-gray-900">{app.metrics.reviews}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Referrals</p>
                <p className="text-sm font-semibold text-gray-900">{app.metrics.referrals}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Social Score</p>
                <p className="text-sm font-semibold text-gray-900">{app.metrics.socialScore}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Engagement</p>
                <p className="text-sm font-semibold text-gray-900">{app.metrics.engagementRate}%</p>
              </div>
            </div>
          </div>

          {/* Qualification Checklist */}
          <div className="p-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Eligibility Criteria</h4>
            <div className="grid grid-cols-2 gap-3">
              {app.qualifications.map((qual, idx) => (
                <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg ${
                  qual.met ? 'bg-green-50' : 'bg-red-50'
                }`}>
                  {qual.met ? (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-600">{qual.criteria}</p>
                    <p className={`text-sm font-semibold ${qual.met ? 'text-green-700' : 'text-red-700'}`}>
                      {qual.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Notes */}
          {app.notes && (
            <div className="px-6 pb-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-blue-900">{app.notes}</p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="px-6 pb-6 flex items-center gap-3">
            <button
              onClick={() => handleApprove(app.id)}
              className="flex-1 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <ThumbsUp className="w-4 h-4" />
              Approve & Grant Access
            </button>
            <button
              onClick={() => handleReject(app.id)}
              className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <ThumbsDown className="w-4 h-4" />
              Reject Application
            </button>
            <button className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors flex items-center gap-2">
              <Eye className="w-4 h-4" />
              View Full Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderActiveMembers = () => (
    <div className="space-y-4">
      {priveMembers.map((member) => (
        <div key={member.id} className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative">
                {member.name.charAt(0)}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Crown className="w-3 h-3 text-yellow-900" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    member.status === 'active' ? 'bg-green-100 text-green-700' :
                    member.status === 'probation' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {member.status}
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    {member.tier}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{member.email}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Member since: {new Date(member.joinedDate).toLocaleDateString()} •
                  Last active: {member.lastActive}
                </p>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">{member.authority}</span>
              </div>
              {member.violations > 0 && (
                <div className="flex items-center gap-1 text-red-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-xs">{member.violations} violations</span>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Lifetime Value</p>
              <p className="text-lg font-bold text-gray-900">₹{(member.lifetimeValue / 1000).toFixed(0)}K</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Monthly Spend</p>
              <p className="text-lg font-bold text-gray-900">₹{(member.monthlySpend / 1000).toFixed(0)}K</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Impact Score</p>
              <p className="text-lg font-bold text-gray-900">{member.impactScore}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Content</p>
              <p className="text-lg font-bold text-gray-900">{member.contentCreated}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Campaigns</p>
              <p className="text-lg font-bold text-gray-900">{member.campaignsCompleted}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors">
              View Full Activity
            </button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors">
              Send Message
            </button>
            {member.status === 'active' && (
              <button
                onClick={() => handleSuspend(member.id)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
              >
                Suspend
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <AdminNav />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">ReZ Privé Management</h1>
              <p className="text-gray-600">Manage premium tier applications and members</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-purple-600" />
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                +{stats.monthlyGrowth}%
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.totalMembers}</p>
            <p className="text-sm text-gray-600">Total Privé Members</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-yellow-600" />
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                Pending
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.pendingApplications}</p>
            <p className="text-sm text-gray-600">Pending Applications</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                {stats.approvalRate}%
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.activeMembers}</p>
            <p className="text-sm text-gray-600">Active Members</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Star className="w-8 h-8 text-indigo-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.avgEligibilityScore}</p>
            <p className="text-sm text-gray-600">Avg Eligibility Score</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('pending')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'pending'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Pending Applications ({stats.pendingApplications})
              </div>
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'active'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Active Members ({stats.activeMembers})
              </div>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'analytics'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Analytics
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'pending' && renderPendingApplications()}
        {activeTab === 'active' && renderActiveMembers()}
        {activeTab === 'analytics' && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Analytics dashboard coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
}
