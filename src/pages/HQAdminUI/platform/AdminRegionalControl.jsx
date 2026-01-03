import { useState } from 'react';
import AdminNav from '../../components/admin/AdminNav';
import {
  Globe, MapPin, Users, Store, TrendingUp, DollarSign,
  Calendar, Activity, CheckCircle, XCircle, AlertTriangle,
  BarChart3, PieChart, Clock, Award, Target, Zap
} from 'lucide-react';

const AdminRegionalControl = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRegion, setSelectedRegion] = useState('west_india');

  // Regional admin data
  const regionalData = {
    west_india: {
      id: 'west_india',
      name: 'West India',
      admin: {
        name: 'Amit Patel',
        email: 'amit.patel@rez.com',
        phone: '+91 98765 43210',
        joinedDate: 'Jan 2024'
      },
      cities: [
        { name: 'Mumbai', merchants: 1234, users: 156789, gmv: 4567890 },
        { name: 'Pune', merchants: 678, users: 89456, gmv: 2345678 },
        { name: 'Ahmedabad', merchants: 345, users: 56789, gmv: 1234567 },
        { name: 'Surat', merchants: 199, users: 42976, gmv: 987654 }
      ],
      totalMerchants: 2456,
      totalUsers: 345678,
      monthlyGMV: 9135789,
      growthRate: 18.5,
      activeDeals: 456,
      pendingApprovals: 23,
      topCategories: [
        { category: 'Fashion', merchants: 567, gmv: 2456789 },
        { category: 'Food & Dining', merchants: 445, gmv: 2123456 },
        { category: 'Electronics', merchants: 234, gmv: 1789012 },
        { category: 'Grocery', merchants: 389, gmv: 1456789 }
      ]
    },
    south_india: {
      id: 'south_india',
      name: 'South India',
      admin: {
        name: 'Neha Reddy',
        email: 'neha.reddy@rez.com',
        phone: '+91 98765 43211',
        joinedDate: 'Feb 2024'
      },
      cities: [
        { name: 'Bangalore', merchants: 1567, users: 198765, gmv: 5678901 },
        { name: 'Chennai', merchants: 890, users: 123456, gmv: 3456789 },
        { name: 'Hyderabad', merchants: 567, users: 98765, gmv: 2789012 },
        { name: 'Kochi', merchants: 210, users: 45678, gmv: 1234567 }
      ],
      totalMerchants: 3234,
      totalUsers: 456789,
      monthlyGMV: 13159269,
      growthRate: 22.3,
      activeDeals: 567,
      pendingApprovals: 34,
      topCategories: [
        { category: 'Electronics', merchants: 678, gmv: 3456789 },
        { category: 'Food & Dining', merchants: 589, gmv: 2987654 },
        { category: 'Fashion', merchants: 456, gmv: 2345678 },
        { category: 'Health & Wellness', merchants: 345, gmv: 1789012 }
      ]
    },
    north_india: {
      id: 'north_india',
      name: 'North India',
      admin: {
        name: 'Rohit Kapoor',
        email: 'rohit.kapoor@rez.com',
        phone: '+91 98765 43212',
        joinedDate: 'Jan 2024'
      },
      cities: [
        { name: 'Delhi', merchants: 1345, users: 187654, gmv: 4987654 },
        { name: 'Gurgaon', merchants: 789, users: 123456, gmv: 3456789 },
        { name: 'Noida', merchants: 567, users: 78901, gmv: 2345678 },
        { name: 'Chandigarh', merchants: 189, users: 34567, gmv: 987654 }
      ],
      totalMerchants: 2890,
      totalUsers: 398765,
      monthlyGMV: 11777775,
      growthRate: 16.7,
      activeDeals: 489,
      pendingApprovals: 28,
      topCategories: [
        { category: 'Fashion', merchants: 634, gmv: 2987654 },
        { category: 'Food & Dining', merchants: 512, gmv: 2567890 },
        { category: 'Electronics', merchants: 389, gmv: 2123456 },
        { category: 'Home & Lifestyle', merchants: 298, gmv: 1678901 }
      ]
    },
    east_india: {
      id: 'east_india',
      name: 'East India',
      admin: {
        name: 'Sanjay Das',
        email: 'sanjay.das@rez.com',
        phone: '+91 98765 43213',
        joinedDate: 'Mar 2024'
      },
      cities: [
        { name: 'Kolkata', merchants: 789, users: 123456, gmv: 3456789 },
        { name: 'Bhubaneswar', merchants: 267, users: 45678, gmv: 1234567 },
        { name: 'Guwahati', merchants: 178, users: 20322, gmv: 789012 }
      ],
      totalMerchants: 1234,
      totalUsers: 189456,
      monthlyGMV: 5480368,
      growthRate: 14.2,
      activeDeals: 234,
      pendingApprovals: 15,
      topCategories: [
        { category: 'Food & Dining', merchants: 345, gmv: 1567890 },
        { category: 'Fashion', merchants: 278, gmv: 1234567 },
        { category: 'Grocery', merchants: 234, gmv: 987654 },
        { category: 'Electronics', merchants: 189, gmv: 789012 }
      ]
    }
  };

  const region = regionalData[selectedRegion];

  // Pending merchant approvals
  const pendingMerchants = [
    {
      id: 'MER-2345',
      businessName: 'Fashion Paradise',
      owner: 'Rahul Shah',
      category: 'Fashion',
      city: 'Mumbai',
      submittedDate: '2 hours ago',
      documentsStatus: 'complete',
      kycStatus: 'verified',
      estimatedGMV: 150000
    },
    {
      id: 'MER-2346',
      businessName: 'Spice Junction Restaurant',
      owner: 'Meera Kulkarni',
      category: 'Food & Dining',
      city: 'Pune',
      submittedDate: '5 hours ago',
      documentsStatus: 'complete',
      kycStatus: 'verified',
      estimatedGMV: 250000
    },
    {
      id: 'MER-2347',
      businessName: 'Tech Hub Electronics',
      owner: 'Sandeep Desai',
      category: 'Electronics',
      city: 'Ahmedabad',
      submittedDate: '1 day ago',
      documentsStatus: 'pending',
      kycStatus: 'under_review',
      estimatedGMV: 450000
    }
  ];

  // Regional campaigns
  const regionalCampaigns = [
    {
      id: 'CAMP-345',
      name: 'Mumbai Monsoon Sale',
      type: 'Flash Sale',
      startDate: '2024-07-15',
      endDate: '2024-07-31',
      merchants: 234,
      targetGMV: 2500000,
      currentGMV: 1875000,
      status: 'active'
    },
    {
      id: 'CAMP-346',
      name: 'Pune Food Festival',
      type: 'Category Event',
      startDate: '2024-07-20',
      endDate: '2024-08-05',
      merchants: 89,
      targetGMV: 1200000,
      currentGMV: 450000,
      status: 'active'
    },
    {
      id: 'CAMP-347',
      name: 'Ahmedabad Fashion Week',
      type: 'Seasonal Campaign',
      startDate: '2024-08-01',
      endDate: '2024-08-15',
      merchants: 145,
      targetGMV: 1800000,
      currentGMV: 0,
      status: 'scheduled'
    }
  ];

  // Regional performance metrics
  const performanceMetrics = [
    {
      metric: 'Merchant Onboarding',
      current: 23,
      target: 30,
      unit: 'merchants/week',
      trend: 'up',
      change: 12.5
    },
    {
      metric: 'User Acquisition',
      current: 4567,
      target: 5000,
      unit: 'users/week',
      trend: 'up',
      change: 18.3
    },
    {
      metric: 'GMV Growth',
      current: 18.5,
      target: 20,
      unit: '% MoM',
      trend: 'up',
      change: 2.3
    },
    {
      metric: 'Merchant Satisfaction',
      current: 4.6,
      target: 4.5,
      unit: '/5.0',
      trend: 'up',
      change: 4.5
    },
    {
      metric: 'Avg Response Time',
      current: 2.3,
      target: 3,
      unit: 'hours',
      trend: 'down',
      change: -15.2
    }
  ];

  // Support tickets
  const supportTickets = [
    {
      id: 'TKT-1234',
      merchant: 'Café Mumbai',
      issue: 'Payment settlement delay',
      priority: 'high',
      assignedTo: 'me',
      status: 'in_progress',
      createdAt: '3 hours ago'
    },
    {
      id: 'TKT-1235',
      merchant: 'Fashion Boutique Pune',
      issue: 'Profile verification pending',
      priority: 'medium',
      assignedTo: 'me',
      status: 'new',
      createdAt: '5 hours ago'
    },
    {
      id: 'TKT-1236',
      merchant: 'Electronics Store',
      issue: 'Dashboard access issue',
      priority: 'low',
      assignedTo: 'me',
      status: 'new',
      createdAt: '1 day ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-6">
      <AdminNav />
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-lg rounded-2xl border border-blue-500/30 flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-300" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Regional Admin Control</h1>
              <p className="text-blue-200">Manage your designated region - merchants, campaigns & operations</p>
            </div>
          </div>

          {/* Region Selector */}
          <div className="flex items-center gap-3">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-500/50 backdrop-blur-lg"
            >
              {Object.values(regionalData).map((reg) => (
                <option key={reg.id} value={reg.id} className="bg-gray-900">
                  {reg.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Admin Info Banner */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-medium">{region.admin.name}</div>
                <div className="text-sm text-white/60">Regional Admin - {region.name}</div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="text-white/60">Email: </span>
                <span className="text-white">{region.admin.email}</span>
              </div>
              <div>
                <span className="text-white/60">Phone: </span>
                <span className="text-white">{region.admin.phone}</span>
              </div>
              <div>
                <span className="text-white/60">Since: </span>
                <span className="text-white">{region.admin.joinedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Store className="w-8 h-8 text-blue-300" />
            <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-200 text-xs">
              +{region.growthRate}% MoM
            </span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">{region.totalMerchants.toLocaleString()}</div>
          <div className="text-blue-200 text-sm">Total Merchants</div>
          <div className="text-xs text-blue-300 mt-2">{region.pendingApprovals} pending approval</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-green-300" />
            <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-200 text-xs">
              Active
            </span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">{region.totalUsers.toLocaleString()}</div>
          <div className="text-green-200 text-sm">Total Users</div>
          <div className="text-xs text-green-300 mt-2">{region.cities.length} cities covered</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="w-8 h-8 text-purple-300" />
            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-200 text-xs">
              This Month
            </span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">₹{(region.monthlyGMV / 100000).toFixed(1)}L</div>
          <div className="text-purple-200 text-sm">Monthly GMV</div>
          <div className="text-xs text-purple-300 mt-2">Target: ₹{((region.monthlyGMV * 1.2) / 100000).toFixed(1)}L</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Activity className="w-8 h-8 text-orange-300" />
            <span className="px-3 py-1 bg-orange-500/20 rounded-full text-orange-200 text-xs">
              Live
            </span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">{region.activeDeals}</div>
          <div className="text-orange-200 text-sm">Active Deals</div>
          <div className="text-xs text-orange-300 mt-2">Across all categories</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'cities', label: 'City Breakdown', icon: MapPin },
          { id: 'merchants', label: 'Merchant Approvals', icon: Store },
          { id: 'campaigns', label: 'Regional Campaigns', icon: Zap },
          { id: 'performance', label: 'Performance', icon: Target },
          { id: 'support', label: 'Support Tickets', icon: AlertTriangle }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all ${
              activeTab === tab.id
                ? 'bg-white/20 text-white shadow-lg'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="font-medium text-sm">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Categories */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Top Categories</h3>
            <div className="space-y-3">
              {region.topCategories.map((category, index) => (
                <div key={category.category} className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">#{index + 1}</span>
                      </div>
                      <span className="text-white font-medium">{category.category}</span>
                    </div>
                    <span className="text-green-300 text-sm">₹{(category.gmv / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>{category.merchants} merchants</span>
                    <span>{((category.gmv / region.monthlyGMV) * 100).toFixed(1)}% of total GMV</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* City Performance */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-white mb-4">City Performance</h3>
            <div className="space-y-3">
              {region.cities.map((city) => (
                <div key={city.name} className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-blue-300" />
                      <span className="text-white font-medium">{city.name}</span>
                    </div>
                    <span className="text-green-300 font-medium">₹{(city.gmv / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-white/60">Merchants: </span>
                      <span className="text-white">{city.merchants}</span>
                    </div>
                    <div>
                      <span className="text-white/60">Users: </span>
                      <span className="text-white">{city.users.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Cities Tab */}
      {activeTab === 'cities' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {region.cities.map((city) => (
            <div key={city.name} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{city.name}</h3>
                  <p className="text-blue-200 text-sm">{region.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <Store className="w-6 h-6 text-blue-300 mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{city.merchants}</div>
                  <div className="text-xs text-white/60">Merchants</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <Users className="w-6 h-6 text-green-300 mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{city.users.toLocaleString()}</div>
                  <div className="text-xs text-white/60">Users</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <DollarSign className="w-6 h-6 text-purple-300 mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">₹{(city.gmv / 100000).toFixed(1)}L</div>
                  <div className="text-xs text-white/60">Monthly GMV</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Contribution to Region</span>
                  <span className="text-white font-medium">
                    {((city.gmv / region.monthlyGMV) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Merchant Approvals Tab */}
      {activeTab === 'merchants' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Pending Merchant Approvals</h3>
              <p className="text-white/60">Review and approve merchant applications in your region</p>
            </div>
            <span className="px-4 py-2 bg-orange-500/20 rounded-xl text-orange-200 font-medium">
              {pendingMerchants.length} Pending
            </span>
          </div>

          <div className="space-y-4">
            {pendingMerchants.map((merchant) => (
              <div key={merchant.id} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-bold text-white">{merchant.businessName}</h4>
                      <span className="text-xs text-white/60">{merchant.id}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                      <span>Owner: {merchant.owner}</span>
                      <span>•</span>
                      <span>{merchant.category}</span>
                      <span>•</span>
                      <span>{merchant.city}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-lg text-xs ${
                        merchant.documentsStatus === 'complete'
                          ? 'bg-green-500/20 text-green-300'
                          : 'bg-orange-500/20 text-orange-300'
                      }`}>
                        Docs: {merchant.documentsStatus}
                      </span>
                      <span className={`px-3 py-1 rounded-lg text-xs ${
                        merchant.kycStatus === 'verified'
                          ? 'bg-green-500/20 text-green-300'
                          : 'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        KYC: {merchant.kycStatus}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 rounded-lg text-blue-300 text-xs">
                        Est. GMV: ₹{(merchant.estimatedGMV / 1000).toFixed(0)}K/mo
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="px-6 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-xl text-green-300 flex items-center gap-2 transition-all">
                      <CheckCircle className="w-4 h-4" />
                      Approve
                    </button>
                    <button className="px-6 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-xl text-red-300 flex items-center gap-2 transition-all">
                      <XCircle className="w-4 h-4" />
                      Reject
                    </button>
                  </div>
                </div>
                <div className="text-xs text-white/40">Submitted: {merchant.submittedDate}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Campaigns Tab */}
      {activeTab === 'campaigns' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Regional Campaigns</h3>
              <p className="text-white/60">Manage marketing campaigns for {region.name}</p>
            </div>
          </div>

          <div className="space-y-4">
            {regionalCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white/5 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-bold text-white">{campaign.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        campaign.status === 'active'
                          ? 'bg-green-500/20 text-green-300'
                          : 'bg-blue-500/20 text-blue-300'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                      <span>{campaign.type}</span>
                      <span>•</span>
                      <span>{campaign.merchants} merchants</span>
                      <span>•</span>
                      <span>{campaign.startDate} to {campaign.endDate}</span>
                    </div>

                    {/* Progress Bar */}
                    {campaign.status === 'active' && (
                      <div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-white/60">GMV Progress</span>
                          <span className="text-white font-medium">
                            ₹{(campaign.currentGMV / 100000).toFixed(1)}L / ₹{(campaign.targetGMV / 100000).toFixed(1)}L
                          </span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                            style={{ width: `${(campaign.currentGMV / campaign.targetGMV) * 100}%` }}
                          />
                        </div>
                        <div className="text-xs text-white/60 mt-1">
                          {((campaign.currentGMV / campaign.targetGMV) * 100).toFixed(1)}% complete
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Performance Tab */}
      {activeTab === 'performance' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {performanceMetrics.map((metric) => (
            <div key={metric.metric} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-2">{metric.metric}</h4>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-bold text-white">{metric.current}</span>
                    <span className="text-white/60">{metric.unit}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className={`w-4 h-4 ${
                      metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`} />
                    <span className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {metric.change > 0 ? '+' : ''}{metric.change}%
                    </span>
                    <span className="text-white/60 text-sm">vs last period</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/60 mb-1">Target</div>
                  <div className="text-2xl font-bold text-white">{metric.target}</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    (metric.current / metric.target) >= 1
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                      : 'bg-gradient-to-r from-yellow-500 to-orange-500'
                  }`}
                  style={{ width: `${Math.min((metric.current / metric.target) * 100, 100)}%` }}
                />
              </div>
              <div className="text-xs text-white/60 mt-2">
                {((metric.current / metric.target) * 100).toFixed(1)}% of target achieved
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Support Tickets Tab */}
      {activeTab === 'support' && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Support Tickets</h3>
              <p className="text-white/60">Merchant support requests in your region</p>
            </div>
            <span className="px-4 py-2 bg-orange-500/20 rounded-xl text-orange-200 font-medium">
              {supportTickets.filter(t => t.status === 'new').length} New
            </span>
          </div>

          <div className="space-y-3">
            {supportTickets.map((ticket) => (
              <div key={ticket.id} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`w-2 h-2 rounded-full ${
                        ticket.priority === 'high' ? 'bg-red-400' :
                        ticket.priority === 'medium' ? 'bg-yellow-400' :
                        'bg-green-400'
                      }`} />
                      <span className="text-white font-medium">{ticket.merchant}</span>
                      <span className="text-xs text-white/60">{ticket.id}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        ticket.status === 'new' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {ticket.status}
                      </span>
                    </div>
                    <div className="text-white/80 mb-1">{ticket.issue}</div>
                    <div className="text-xs text-white/40">{ticket.createdAt}</div>
                  </div>
                  <button className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-xl text-blue-200 transition-all">
                    Resolve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminRegionalControl;
