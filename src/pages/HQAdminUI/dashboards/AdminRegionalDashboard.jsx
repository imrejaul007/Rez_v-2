import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Store, Users, DollarSign, TrendingUp, Package, Truck,
  Target, BarChart3, Award, AlertTriangle, CheckCircle, Clock,
  ArrowUpRight, ArrowDownRight, Filter, Download, RefreshCw, Plus,
  Calendar, Eye, Star, Megaphone, Building2, Zap, Activity, ShoppingCart,
  UserPlus, FileText, Settings, Bell, MessageSquare, Coffee, Shirt
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminRegionalDashboard() {
  const [selectedRegion, setSelectedRegion] = useState('mumbai');
  const [selectedTimeframe, setSelectedTimeframe] = useState('7days');

  // Regional Info
  const [regionInfo] = useState({
    name: 'Mumbai',
    icon: '🌆',
    population: '20.4M',
    coverage: '85%',
    zones: 24,
    admin: 'Rajesh Kumar',
    teamSize: 45
  });

  // Regional Metrics
  const [regionalMetrics] = useState({
    gmv: { amount: 15234500, growth: 28.5, target: 18000000, thisMonth: 2345000 },
    merchants: { active: 2345, pending: 45, suspended: 23, growth: 15.2 },
    users: { active: 45678, new: 567, retention: 78.5, growth: 22.3 },
    orders: { total: 78945, completed: 76543, processing: 1234, cancelled: 1168 },
    campaigns: { active: 34, pending: 8, completed: 156, budget: 456789 },
    revenue: { amount: 1234567, commission: 156789, growth: 25.8 }
  });

  // Zone Performance
  const [zones] = useState([
    {
      name: 'South Mumbai',
      merchants: 456,
      users: 12345,
      gmv: 4567890,
      growth: 32.5,
      rating: 4.6,
      status: 'excellent'
    },
    {
      name: 'Andheri',
      merchants: 389,
      users: 10234,
      gmv: 3456789,
      growth: 28.3,
      rating: 4.4,
      status: 'good'
    },
    {
      name: 'Bandra',
      merchants: 345,
      users: 9876,
      gmv: 3234567,
      growth: 25.7,
      rating: 4.5,
      status: 'good'
    },
    {
      name: 'Powai',
      merchants: 298,
      users: 8765,
      gmv: 2987654,
      growth: 22.1,
      rating: 4.3,
      status: 'good'
    },
    {
      name: 'Thane',
      merchants: 234,
      users: 6789,
      gmv: 1987654,
      growth: 18.9,
      rating: 4.1,
      status: 'fair'
    }
  ]);

  // Top Merchants in Region
  const [topMerchants] = useState([
    {
      name: 'Pizza Paradise',
      category: 'Food',
      zone: 'Bandra',
      orders: 1234,
      revenue: 234567,
      rating: 4.7,
      growth: 35.2
    },
    {
      name: 'Fashion Studio',
      category: 'Fashion',
      zone: 'South Mumbai',
      orders: 987,
      revenue: 198765,
      rating: 4.6,
      growth: 28.5
    },
    {
      name: 'Glow Spa',
      category: 'Beauty',
      zone: 'Andheri',
      orders: 876,
      revenue: 165432,
      rating: 4.8,
      growth: 42.1
    },
    {
      name: 'Fresh Market',
      category: 'Groceries',
      zone: 'Powai',
      orders: 1567,
      revenue: 123456,
      rating: 4.4,
      growth: 22.8
    }
  ]);

  // Regional Campaigns
  const [regionalCampaigns] = useState([
    {
      id: 1,
      name: 'Mumbai Food Festival',
      type: 'Multi-zone',
      budget: 150000,
      spent: 98500,
      reach: 67890,
      conversions: 4567,
      status: 'active',
      endDate: '2024-01-25'
    },
    {
      id: 2,
      name: 'Bandra Fashion Week',
      type: 'Zone-specific',
      budget: 75000,
      spent: 65000,
      reach: 34567,
      conversions: 2345,
      status: 'active',
      endDate: '2024-01-22'
    },
    {
      id: 3,
      name: 'Weekend Grocery Deals',
      type: 'City-wide',
      budget: 50000,
      spent: 50000,
      reach: 45678,
      conversions: 3456,
      status: 'completed',
      endDate: '2024-01-20'
    }
  ]);

  // Team Performance
  const [teamMembers] = useState([
    {
      name: 'Amit Sharma',
      role: 'Marketing Lead',
      zone: 'South Mumbai',
      tasksCompleted: 45,
      tasksTotal: 52,
      performance: 92
    },
    {
      name: 'Priya Desai',
      role: 'Operations Manager',
      zone: 'Andheri',
      tasksCompleted: 38,
      tasksTotal: 41,
      performance: 88
    },
    {
      name: 'Rahul Patel',
      role: 'Merchant Relations',
      zone: 'Bandra',
      tasksCompleted: 42,
      tasksTotal: 48,
      performance: 85
    },
    {
      name: 'Sneha Kapoor',
      role: 'Customer Support Lead',
      zone: 'All Zones',
      tasksCompleted: 56,
      tasksTotal: 60,
      performance: 95
    }
  ]);

  // Issues Requiring Attention
  const [regionalIssues] = useState([
    {
      id: 1,
      type: 'merchant',
      title: 'Multiple quality complaints - Spice Garden (Andheri)',
      priority: 'high',
      assignedTo: 'Priya Desai',
      status: 'in_progress',
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      type: 'logistics',
      title: 'Delivery delays in Thane zone - Partner: Dunzo',
      priority: 'medium',
      assignedTo: 'Rahul Patel',
      status: 'pending',
      timeAgo: '5 hours ago'
    },
    {
      id: 3,
      type: 'campaign',
      title: 'Food Festival campaign budget exceeded',
      priority: 'medium',
      assignedTo: 'Amit Sharma',
      status: 'investigating',
      timeAgo: '1 day ago'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'bg-green-100 text-green-700';
      case 'good': return 'bg-blue-100 text-blue-700';
      case 'fair': return 'bg-yellow-100 text-yellow-700';
      case 'active': return 'bg-green-100 text-green-700';
      case 'completed': return 'bg-gray-100 text-gray-700';
      case 'in_progress': return 'bg-blue-100 text-blue-700';
      case 'investigating': return 'bg-orange-100 text-orange-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-orange-600';
      case 'low': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="lg:ml-64">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{regionInfo.icon}</span>
                  <div>
                    <h1 className="text-3xl font-bold">{regionInfo.name} Regional Dashboard</h1>
                    <p className="text-indigo-100 text-sm mt-1">
                      Admin: {regionInfo.admin} • {regionInfo.teamSize} team members • {regionInfo.zones} zones
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 mt-4 text-sm text-indigo-100">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Population: {regionInfo.population}
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Coverage: {regionInfo.coverage}
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium"
                >
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="pune">Pune</option>
                </select>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                  <RefreshCw className="w-5 h-5" />
                  Refresh
                </button>
              </div>
            </div>

            {/* Time Filter */}
            <div className="flex gap-2 mt-6">
              {['today', '7days', '30days', 'quarter'].map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => setSelectedTimeframe(timeframe)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTimeframe === timeframe
                      ? 'bg-white text-indigo-600'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {timeframe === 'today' && 'Today'}
                  {timeframe === '7days' && '7 Days'}
                  {timeframe === '30days' && '30 Days'}
                  {timeframe === 'quarter' && 'Quarter'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Key Regional Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Regional GMV */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-lg">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">of target</p>
                  <p className="text-sm font-semibold text-indigo-600">
                    {((regionalMetrics.gmv.amount / regionalMetrics.gmv.target) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Regional GMV</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                ₹{(regionalMetrics.gmv.amount / 10000000).toFixed(1)}Cr
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex items-center text-sm text-green-600 font-semibold">
                  <ArrowUpRight className="w-4 h-4" />
                  {regionalMetrics.gmv.growth}%
                </span>
                <span className="text-gray-600 text-sm">vs last period</span>
              </div>
            </div>

            {/* Active Merchants */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-lg">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">pending</p>
                  <p className="text-sm font-semibold text-orange-600">
                    {regionalMetrics.merchants.pending}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Active Merchants</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {regionalMetrics.merchants.active.toLocaleString()}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex items-center text-sm text-green-600 font-semibold">
                  <ArrowUpRight className="w-4 h-4" />
                  {regionalMetrics.merchants.growth}%
                </span>
                <span className="text-gray-600 text-sm">vs last period</span>
              </div>
            </div>

            {/* Active Users */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">retention</p>
                  <p className="text-sm font-semibold text-blue-600">
                    {regionalMetrics.users.retention}%
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Active Users</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {(regionalMetrics.users.active / 1000).toFixed(1)}K
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex items-center text-sm text-green-600 font-semibold">
                  <ArrowUpRight className="w-4 h-4" />
                  {regionalMetrics.users.growth}%
                </span>
                <span className="text-gray-600 text-sm">
                  {regionalMetrics.users.new} new today
                </span>
              </div>
            </div>

            {/* Total Orders */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-lg">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">processing</p>
                  <p className="text-sm font-semibold text-orange-600">
                    {regionalMetrics.orders.processing}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Total Orders</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {(regionalMetrics.orders.total / 1000).toFixed(1)}K
              </p>
              <div className="mt-4 text-sm text-gray-600">
                {regionalMetrics.orders.completed.toLocaleString()} completed
              </div>
            </div>

            {/* Active Campaigns */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-3 rounded-lg">
                  <Megaphone className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">budget</p>
                  <p className="text-sm font-semibold text-pink-600">
                    ₹{(regionalMetrics.campaigns.budget / 1000).toFixed(0)}K
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Active Campaigns</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {regionalMetrics.campaigns.active}
              </p>
              <div className="mt-4 text-sm text-gray-600">
                {regionalMetrics.campaigns.pending} pending approval
              </div>
            </div>

            {/* Platform Revenue */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Regional Revenue</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                ₹{(regionalMetrics.revenue.amount / 100000).toFixed(1)}L
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex items-center text-sm text-green-600 font-semibold">
                  <ArrowUpRight className="w-4 h-4" />
                  {regionalMetrics.revenue.growth}%
                </span>
                <span className="text-gray-600 text-sm">vs last period</span>
              </div>
            </div>
          </div>

          {/* Issues Requiring Attention */}
          {regionalIssues.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                    <h2 className="text-xl font-bold text-gray-900">Issues Requiring Attention</h2>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                      {regionalIssues.filter(i => i.priority === 'high').length} high priority
                    </span>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {regionalIssues.map((issue) => (
                  <div key={issue.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-xl font-bold uppercase ${getPriorityColor(issue.priority)}`}>
                            {issue.priority}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(issue.status)}`}>
                            {issue.status.replace('_', ' ')}
                          </span>
                        </div>
                        <p className="text-lg font-medium text-gray-900 mb-2">{issue.title}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <UserPlus className="w-4 h-4" />
                            Assigned to: {issue.assignedTo}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {issue.timeAgo}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
                          Take Action
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Zone Performance */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Zone Performance</h2>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {zones.map((zone, index) => (
                  <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{zone.name}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold text-gray-900">{zone.rating}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(zone.status)}`}>
                        {zone.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">GMV</p>
                        <p className="text-xl font-bold text-gray-900">₹{(zone.gmv / 100000).toFixed(1)}L</p>
                        <div className="flex items-center gap-1 mt-1">
                          <ArrowUpRight className="w-3 h-3 text-green-600" />
                          <span className="text-xs text-green-600 font-semibold">{zone.growth}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Merchants</p>
                        <p className="text-xl font-bold text-gray-900">{zone.merchants}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Users</p>
                        <p className="text-xl font-bold text-gray-900">{(zone.users / 1000).toFixed(1)}K</p>
                      </div>
                      <div>
                        <Link
                          to={`/admin/zones/${zone.name.toLowerCase().replace(' ', '-')}`}
                          className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                        >
                          View Details →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Top Merchants */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Top Performing Merchants</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {topMerchants.map((merchant, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{merchant.name}</p>
                        <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                          <span>{merchant.category}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {merchant.zone}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-indigo-600">₹{(merchant.revenue / 1000).toFixed(0)}K</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm text-gray-900">{merchant.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Regional Campaigns */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Regional Campaigns</h2>
                  <Link
                    to="/admin/campaigns/regional"
                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                  >
                    View All →
                  </Link>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {regionalCampaigns.map((campaign) => (
                  <div key={campaign.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-gray-900">{campaign.name}</p>
                        <p className="text-sm text-gray-600">{campaign.type}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(campaign.status)}`}>
                        {campaign.status}
                      </span>
                    </div>
                    <div className="mb-2">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">Budget</span>
                        <span className="font-semibold text-gray-900">
                          ₹{(campaign.spent / 1000).toFixed(0)}K / ₹{(campaign.budget / 1000).toFixed(0)}K
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-indigo-600 h-1.5 rounded-full"
                          style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Reach</p>
                        <p className="font-semibold text-gray-900">{(campaign.reach / 1000).toFixed(1)}K</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Conversions</p>
                        <p className="font-semibold text-gray-900">{campaign.conversions.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Performance */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Team Performance</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Team Member</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Zone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tasks</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {teamMembers.map((member, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <p className="font-medium text-gray-900">{member.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600">{member.zone}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 max-w-xs bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-600 h-2 rounded-full"
                              style={{ width: `${(member.tasksCompleted / member.tasksTotal) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-900">
                            {member.tasksCompleted}/{member.tasksTotal}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`font-semibold ${
                          member.performance >= 90 ? 'text-green-600' :
                          member.performance >= 80 ? 'text-blue-600' :
                          'text-orange-600'
                        }`}>
                          {member.performance}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
