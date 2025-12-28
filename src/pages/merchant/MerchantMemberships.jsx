import { useState } from 'react';
import { Search, Plus, Users, Package, TrendingUp, Calendar, CreditCard, CheckCircle, XCircle, Clock, Download, Filter, ChevronDown, Edit, Trash2, Gift, Crown, Award } from 'lucide-react';

export default function MerchantMemberships() {
  const [activeTab, setActiveTab] = useState('plans');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Membership Plans
  const membershipPlans = [
    {
      id: 'plan-001',
      name: 'Basic Fitness',
      type: 'subscription',
      category: 'Fitness',
      price: 1999,
      duration: '1 Month',
      benefits: ['Gym Access', 'Locker', 'Free Water'],
      activeMembers: 145,
      revenue: 289855,
      renewalRate: 78,
      icon: '🏃',
      color: 'blue'
    },
    {
      id: 'plan-002',
      name: 'Premium Salon Package',
      type: 'package',
      category: 'Salon',
      price: 4999,
      services: [
        { name: 'Haircut', credits: 5, used: 0 },
        { name: 'Hair Spa', credits: 3, used: 0 },
        { name: 'Facial', credits: 2, used: 0 }
      ],
      validity: '6 Months',
      activeMembers: 89,
      revenue: 444911,
      icon: '💇',
      color: 'pink'
    },
    {
      id: 'plan-003',
      name: 'Yoga Plus',
      type: 'subscription',
      category: 'Fitness',
      price: 2499,
      duration: '1 Month',
      benefits: ['All Yoga Classes', 'Meditation Sessions', 'Diet Consultation', 'Free Mat'],
      activeMembers: 234,
      revenue: 584766,
      renewalRate: 85,
      icon: '🧘',
      color: 'purple'
    },
    {
      id: 'plan-004',
      name: 'Spa Wellness Package',
      type: 'package',
      category: 'Beauty',
      price: 8999,
      services: [
        { name: 'Full Body Massage', credits: 4, used: 0 },
        { name: 'Facial', credits: 4, used: 0 },
        { name: 'Manicure & Pedicure', credits: 6, used: 0 }
      ],
      validity: '12 Months',
      activeMembers: 56,
      revenue: 503944,
      icon: '💆',
      color: 'green'
    },
    {
      id: 'plan-005',
      name: 'CrossFit Elite',
      type: 'subscription',
      category: 'Fitness',
      price: 3999,
      duration: '1 Month',
      benefits: ['CrossFit Classes', 'Personal Training 2x/week', 'Nutrition Plan', 'Body Composition Analysis'],
      activeMembers: 67,
      revenue: 267933,
      renewalRate: 92,
      icon: '🏋️',
      color: 'red'
    }
  ];

  // Active Memberships
  const activeMembers = [
    {
      id: 'mem-001',
      customerId: 'CUST-1234',
      customerName: 'Priya Sharma',
      phone: '+91 98765 43210',
      plan: 'Premium Salon Package',
      planType: 'package',
      startDate: '2025-11-15',
      expiryDate: '2026-05-15',
      status: 'active',
      creditsRemaining: [
        { service: 'Haircut', remaining: 3, total: 5 },
        { service: 'Hair Spa', remaining: 2, total: 3 },
        { service: 'Facial', remaining: 2, total: 2 }
      ],
      lastVisit: '2025-12-20',
      totalSpent: 4999,
      autoRenew: true
    },
    {
      id: 'mem-002',
      customerId: 'CUST-5678',
      customerName: 'Rahul Verma',
      phone: '+91 98111 22333',
      plan: 'CrossFit Elite',
      planType: 'subscription',
      startDate: '2025-12-01',
      expiryDate: '2026-01-01',
      status: 'active',
      lastVisit: '2025-12-26',
      totalSpent: 11997,
      autoRenew: true,
      renewalCount: 3
    },
    {
      id: 'mem-003',
      customerId: 'CUST-9012',
      customerName: 'Anjali Desai',
      phone: '+91 97222 44555',
      plan: 'Yoga Plus',
      planType: 'subscription',
      startDate: '2025-11-10',
      expiryDate: '2026-01-10',
      status: 'expiring_soon',
      lastVisit: '2025-12-25',
      totalSpent: 7497,
      autoRenew: false,
      renewalCount: 2
    },
    {
      id: 'mem-004',
      customerId: 'CUST-3456',
      customerName: 'Vikram Singh',
      phone: '+91 96333 55666',
      plan: 'Basic Fitness',
      planType: 'subscription',
      startDate: '2025-12-15',
      expiryDate: '2026-01-15',
      status: 'active',
      lastVisit: '2025-12-27',
      totalSpent: 5997,
      autoRenew: true,
      renewalCount: 2
    },
    {
      id: 'mem-005',
      customerId: 'CUST-7890',
      customerName: 'Sneha Patel',
      phone: '+91 95444 66777',
      plan: 'Spa Wellness Package',
      planType: 'package',
      startDate: '2025-08-20',
      expiryDate: '2026-08-20',
      status: 'active',
      creditsRemaining: [
        { service: 'Full Body Massage', remaining: 2, total: 4 },
        { service: 'Facial', remaining: 3, total: 4 },
        { service: 'Manicure & Pedicure', remaining: 4, total: 6 }
      ],
      lastVisit: '2025-12-18',
      totalSpent: 8999,
      autoRenew: false
    }
  ];

  // Package Usage Analytics
  const packageAnalytics = [
    {
      planName: 'Premium Salon Package',
      totalSold: 89,
      activePackages: 67,
      avgUtilization: 68,
      revenuePerPackage: 4999,
      popularService: 'Haircut'
    },
    {
      planName: 'Spa Wellness Package',
      totalSold: 56,
      activePackages: 42,
      avgUtilization: 54,
      revenuePerPackage: 8999,
      popularService: 'Full Body Massage'
    }
  ];

  // Renewal Tracking
  const upcomingRenewals = [
    { date: '2026-01-02', count: 12, revenue: 23988, status: 'auto-renew' },
    { date: '2026-01-05', count: 8, revenue: 15992, status: 'manual' },
    { date: '2026-01-10', count: 15, revenue: 37485, status: 'auto-renew' },
    { date: '2026-01-15', count: 6, revenue: 11994, status: 'expiring' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'expiring_soon': return 'bg-yellow-100 text-yellow-700';
      case 'expired': return 'bg-red-100 text-red-700';
      case 'suspended': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPlanColor = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700',
      pink: 'bg-pink-100 text-pink-700',
      purple: 'bg-purple-100 text-purple-700',
      green: 'bg-green-100 text-green-700',
      red: 'bg-red-100 text-red-700'
    };
    return colors[color] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Membership & Packages
            </h1>
            <p className="text-gray-600 mt-1">Manage subscriptions, packages & member credits</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Create Plan
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Active Members</p>
              <p className="text-3xl font-bold text-gray-900">591</p>
              <p className="text-green-600 text-sm mt-1 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +12% from last month
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Monthly Recurring</p>
              <p className="text-3xl font-bold text-gray-900">₹15.9L</p>
              <p className="text-green-600 text-sm mt-1 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +8% growth
              </p>
            </div>
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-pink-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Renewal Rate</p>
              <p className="text-3xl font-bold text-gray-900">82%</p>
              <p className="text-green-600 text-sm mt-1">Industry avg: 68%</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Expiring Soon</p>
              <p className="text-3xl font-bold text-gray-900">41</p>
              <p className="text-orange-600 text-sm mt-1">Next 7 days</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm mb-6">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'plans', label: 'Membership Plans', icon: Package },
            { id: 'members', label: 'Active Members', icon: Users },
            { id: 'renewals', label: 'Renewals', icon: Calendar },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 font-medium transition-colors flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Plans Tab */}
        {activeTab === 'plans' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search plans..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <select className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500">
                  <option>All Categories</option>
                  <option>Fitness</option>
                  <option>Salon</option>
                  <option>Beauty</option>
                </select>
                <select className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500">
                  <option>All Types</option>
                  <option>Subscription</option>
                  <option>Package</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {membershipPlans.map(plan => (
                <div key={plan.id} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${getPlanColor(plan.color)} rounded-xl flex items-center justify-center text-2xl`}>
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{plan.name}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getPlanColor(plan.color)} mt-1`}>
                          {plan.type === 'subscription' ? 'Subscription' : 'Package'}
                        </span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm">Price</span>
                      <span className="font-bold text-gray-900">₹{plan.price.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm">{plan.type === 'subscription' ? 'Duration' : 'Validity'}</span>
                      <span className="font-medium text-gray-900">{plan.duration || plan.validity}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm">Active Members</span>
                      <span className="font-medium text-gray-900">{plan.activeMembers}</span>
                    </div>
                    {plan.renewalRate && (
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-600 text-sm">Renewal Rate</span>
                        <span className="font-medium text-green-600">{plan.renewalRate}%</span>
                      </div>
                    )}
                  </div>

                  {plan.type === 'subscription' && (
                    <div className="bg-gray-50 rounded-xl p-3 mb-4">
                      <p className="text-xs font-medium text-gray-600 mb-2">Benefits:</p>
                      <div className="space-y-1">
                        {plan.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {plan.type === 'package' && (
                    <div className="bg-gray-50 rounded-xl p-3 mb-4">
                      <p className="text-xs font-medium text-gray-600 mb-2">Services Included:</p>
                      <div className="space-y-2">
                        {plan.services.map((service, idx) => (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="text-gray-700">{service.name}</span>
                            <span className="font-medium text-purple-600">{service.credits}x</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Total Revenue</span>
                    <span className="font-bold text-gray-900">₹{plan.revenue.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Members Tab */}
        {activeTab === 'members' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search members..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <select className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Expiring Soon</option>
                  <option>Expired</option>
                </select>
                <button className="px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Export
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {activeMembers.map(member => (
                <div key={member.id} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        {member.customerName.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{member.customerName}</h3>
                        <p className="text-sm text-gray-600">{member.phone}</p>
                        <p className="text-xs text-gray-500 mt-1">ID: {member.customerId}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
                      {member.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Plan</p>
                      <p className="font-medium text-gray-900 text-sm">{member.plan}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Start Date</p>
                      <p className="font-medium text-gray-900 text-sm">{new Date(member.startDate).toLocaleDateString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Expiry Date</p>
                      <p className="font-medium text-gray-900 text-sm">{new Date(member.expiryDate).toLocaleDateString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Last Visit</p>
                      <p className="font-medium text-gray-900 text-sm">{new Date(member.lastVisit).toLocaleDateString('en-IN')}</p>
                    </div>
                  </div>

                  {member.creditsRemaining && (
                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <p className="text-xs font-medium text-gray-600 mb-3">Credits Remaining:</p>
                      <div className="space-y-2">
                        {member.creditsRemaining.map((credit, idx) => (
                          <div key={idx}>
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-gray-700">{credit.service}</span>
                              <span className="font-medium text-purple-600">{credit.remaining}/{credit.total}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                                style={{ width: `${(credit.remaining / credit.total) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-xs text-gray-600">Total Spent</p>
                        <p className="font-bold text-gray-900">₹{member.totalSpent.toLocaleString('en-IN')}</p>
                      </div>
                      {member.renewalCount && (
                        <div>
                          <p className="text-xs text-gray-600">Renewals</p>
                          <p className="font-bold text-gray-900">{member.renewalCount}x</p>
                        </div>
                      )}
                      <div>
                        <p className="text-xs text-gray-600">Auto-Renew</p>
                        <p className={`font-medium ${member.autoRenew ? 'text-green-600' : 'text-gray-600'}`}>
                          {member.autoRenew ? 'ON' : 'OFF'}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm">
                        View Details
                      </button>
                      <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm">
                        Extend
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Renewals Tab */}
        {activeTab === 'renewals' && (
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Renewals (Next 30 Days)</h3>
              <div className="space-y-3">
                {upcomingRenewals.map((renewal, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{new Date(renewal.date).toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                        <p className="text-sm text-gray-600">{renewal.count} memberships • ₹{renewal.revenue.toLocaleString('en-IN')} revenue</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      renewal.status === 'auto-renew' ? 'bg-green-100 text-green-700' :
                      renewal.status === 'manual' ? 'bg-blue-100 text-blue-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {renewal.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Package Utilization Analytics</h3>
            <div className="space-y-4">
              {packageAnalytics.map((pkg, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-900">{pkg.planName}</h4>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {pkg.avgUtilization}% Avg Utilization
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Sold</p>
                      <p className="text-2xl font-bold text-gray-900">{pkg.totalSold}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Active</p>
                      <p className="text-2xl font-bold text-gray-900">{pkg.activePackages}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Revenue/Package</p>
                      <p className="text-2xl font-bold text-gray-900">₹{pkg.revenuePerPackage.toLocaleString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Most Popular</p>
                      <p className="text-lg font-bold text-purple-600">{pkg.popularService}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
