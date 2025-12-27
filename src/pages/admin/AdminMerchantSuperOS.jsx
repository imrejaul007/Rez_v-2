import React, { useState } from 'react';
import { Store, Zap, TrendingUp, TrendingDown, AlertCircle, CheckCircle, Users, DollarSign, Globe, MapPin, Package, ShoppingCart, Heart, Trophy, Target, Filter } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

const AdminMerchantSuperOS = () => {
  const [adminType, setAdminType] = useState('hq'); // hq, regional, category
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeframe, setTimeframe] = useState('week');

  // Mock data for different admin types
  const regions = ['Bangalore', 'Delhi NCR', 'Mumbai', 'Hyderabad', 'Chennai'];
  const categories = ['Pizza & Italian', 'Fast Food', 'Coffee & Cafe', 'Indian', 'Chinese'];

  const merchantSuperOSMetrics = {
    hq: {
      week: {
        totalMerchants: 2456,
        activeMerchants: 2134,
        activeRate: 86.9,
        totalBranches: 5678,
        activeBranches: 4890,
        superOSHealth: 94.2,
        totalRevenue: 45678900,
        revenueGrowth: 23.4,
        totalOrders: 234567,
        ordersGrowth: 18.7,
        avgOrderValue: 194.71,
        rezUsersServed: 187654,
        discoveryViews: 987654,
        coinsDistributed: 2345678,
        totalCommission: 2283945
      },
      month: {
        totalMerchants: 2456,
        activeMerchants: 2234,
        activeRate: 91.0,
        totalBranches: 5678,
        activeBranches: 5123,
        superOSHealth: 95.8,
        totalRevenue: 198765400,
        revenueGrowth: 28.1,
        totalOrders: 1023456,
        ordersGrowth: 22.3,
        avgOrderValue: 194.16,
        rezUsersServed: 812345,
        discoveryViews: 4234567,
        coinsDistributed: 10234567,
        totalCommission: 9938270
      }
    },
    regional: {
      week: {
        totalMerchants: 456,
        activeMerchants: 398,
        activeRate: 87.3,
        totalBranches: 987,
        activeBranches: 856,
        superOSHealth: 93.8,
        totalRevenue: 8765400,
        revenueGrowth: 21.2,
        totalOrders: 45678,
        ordersGrowth: 16.8,
        avgOrderValue: 191.98,
        rezUsersServed: 34567,
        discoveryViews: 178654,
        coinsDistributed: 456789,
        totalCommission: 438270
      },
      month: {
        totalMerchants: 456,
        activeMerchants: 412,
        activeRate: 90.4,
        totalBranches: 987,
        activeBranches: 901,
        superOSHealth: 95.1,
        totalRevenue: 38234500,
        revenueGrowth: 26.7,
        totalOrders: 198765,
        ordersGrowth: 20.9,
        avgOrderValue: 192.37,
        rezUsersServed: 149876,
        discoveryViews: 765432,
        coinsDistributed: 1987654,
        totalCommission: 1911725
      }
    },
    category: {
      week: {
        totalMerchants: 234,
        activeMerchants: 203,
        activeRate: 86.8,
        totalBranches: 567,
        activeBranches: 489,
        superOSHealth: 94.5,
        totalRevenue: 5678900,
        revenueGrowth: 24.1,
        totalOrders: 29876,
        ordersGrowth: 19.3,
        avgOrderValue: 190.11,
        rezUsersServed: 23456,
        discoveryViews: 98765,
        coinsDistributed: 298765,
        totalCommission: 283945
      },
      month: {
        totalMerchants: 234,
        activeMerchants: 214,
        activeRate: 91.5,
        totalBranches: 567,
        activeBranches: 523,
        superOSHealth: 96.2,
        totalRevenue: 24765400,
        revenueGrowth: 29.8,
        totalOrders: 130234,
        ordersGrowth: 23.6,
        avgOrderValue: 190.18,
        rezUsersServed: 101234,
        discoveryViews: 423456,
        coinsDistributed: 1298765,
        totalCommission: 1238270
      }
    }
  };

  const superOSModuleHealth = [
    {
      module: 'POS Engine',
      status: 'excellent',
      uptime: 99.8,
      activeMerchants: 2089,
      totalMerchants: 2134,
      avgResponseTime: 245,
      icon: ShoppingCart,
      color: 'green'
    },
    {
      module: 'Payments',
      status: 'excellent',
      uptime: 99.9,
      activeMerchants: 2098,
      totalMerchants: 2134,
      avgResponseTime: 189,
      icon: DollarSign,
      color: 'green'
    },
    {
      module: 'Loyalty & CRM',
      status: 'good',
      uptime: 98.7,
      activeMerchants: 1876,
      totalMerchants: 2134,
      avgResponseTime: 312,
      icon: Heart,
      color: 'blue'
    },
    {
      module: 'Marketing Manager',
      status: 'good',
      uptime: 99.1,
      activeMerchants: 1654,
      totalMerchants: 2134,
      avgResponseTime: 298,
      icon: Target,
      color: 'blue'
    },
    {
      module: 'Discovery Integration',
      status: 'excellent',
      uptime: 99.7,
      activeMerchants: 2112,
      totalMerchants: 2134,
      avgResponseTime: 201,
      icon: Globe,
      color: 'green'
    },
    {
      module: 'Accounting & GST',
      status: 'warning',
      uptime: 97.2,
      activeMerchants: 1498,
      totalMerchants: 2134,
      avgResponseTime: 456,
      icon: Package,
      color: 'yellow'
    }
  ];

  const problemMerchants = [
    {
      id: 'merchant-045',
      name: 'Pizza Paradise - Koramangala',
      issue: 'POS Engine not syncing',
      severity: 'high',
      duration: '2 hours',
      revenue_impact: 12450,
      region: 'Bangalore',
      category: 'Pizza & Italian'
    },
    {
      id: 'merchant-123',
      name: 'Burger King - Indiranagar',
      issue: 'Payment gateway timeout',
      severity: 'critical',
      duration: '45 mins',
      revenue_impact: 8900,
      region: 'Bangalore',
      category: 'Fast Food'
    },
    {
      id: 'merchant-234',
      name: 'Starbucks - MG Road',
      issue: 'Low inventory sync rate',
      severity: 'medium',
      duration: '1 day',
      revenue_impact: 3200,
      region: 'Bangalore',
      category: 'Coffee & Cafe'
    }
  ];

  const topPerformers = [
    {
      id: 'merchant-001',
      name: 'Pizza Paradise',
      branches: 3,
      revenue: 234567,
      orders: 1234,
      superOSAdoption: 98.5,
      rezIntegration: 96.2,
      region: 'Bangalore',
      category: 'Pizza & Italian'
    },
    {
      id: 'merchant-002',
      name: 'Burger Junction',
      branches: 5,
      revenue: 345678,
      orders: 2345,
      superOSAdoption: 97.8,
      rezIntegration: 95.8,
      region: 'Delhi NCR',
      category: 'Fast Food'
    },
    {
      id: 'merchant-003',
      name: 'Cafe Coffee Day',
      branches: 8,
      revenue: 456789,
      orders: 3456,
      superOSAdoption: 96.4,
      rezIntegration: 94.3,
      region: 'Mumbai',
      category: 'Coffee & Cafe'
    }
  ];

  const getCurrentMetrics = () => {
    return merchantSuperOSMetrics[adminType][timeframe];
  };

  const metrics = getCurrentMetrics();

  const getStatusColor = (status) => {
    switch(status) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-300';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const filterMerchants = (merchants) => {
    return merchants.filter(m => {
      const regionMatch = selectedRegion === 'all' || m.region === selectedRegion;
      const categoryMatch = selectedCategory === 'all' || m.category === selectedCategory;
      return regionMatch && categoryMatch;
    });
  };

  const filteredProblems = filterMerchants(problemMerchants);
  const filteredTopPerformers = filterMerchants(topPerformers);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <AdminNav />

      <div className="lg:ml-64 p-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Store className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Merchant Super OS Dashboard</h1>
                  <p className="text-white/90 mt-1">Monitor all merchant operating systems & ecosystem health</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                  SUPER OS HEALTH: {metrics.superOSHealth}%
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                  {metrics.activeMerchants.toLocaleString()} ACTIVE MERCHANTS
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <select
                value={adminType}
                onChange={(e) => setAdminType(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-4 py-2 rounded-xl font-semibold focus:outline-none cursor-pointer"
              >
                <option value="hq" className="text-gray-800">HQ Admin (All Regions)</option>
                <option value="regional" className="text-gray-800">Regional Admin</option>
                <option value="category" className="text-gray-800">Category Admin</option>
              </select>

              <div className="flex gap-2">
                {['week', 'month'].map(tf => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                      timeframe === tf
                        ? 'bg-white text-purple-600'
                        : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                    }`}
                  >
                    {tf.charAt(0).toUpperCase() + tf.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Filters for Regional/Category Admins */}
          {(adminType === 'regional' || adminType === 'category') && (
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/20">
              <Filter className="w-5 h-5" />
              {adminType === 'regional' && (
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-4 py-2 rounded-xl font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="all" className="text-gray-800">All Regions</option>
                  {regions.map(region => (
                    <option key={region} value={region} className="text-gray-800">{region}</option>
                  ))}
                </select>
              )}
              {adminType === 'category' && (
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-4 py-2 rounded-xl font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="all" className="text-gray-800">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category} className="text-gray-800">{category}</option>
                  ))}
                </select>
              )}
            </div>
          )}

          {/* Key Metrics */}
          <div className="grid grid-cols-5 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Store className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Active Rate</p>
                  <p className="text-2xl font-bold">{metrics.activeRate}%</p>
                  <p className="text-xs text-white/70">{metrics.activeMerchants}/{metrics.totalMerchants}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Total Revenue</p>
                  <p className="text-2xl font-bold">₹{(metrics.totalRevenue / 1000000).toFixed(1)}M</p>
                  <div className="flex items-center gap-1 text-xs">
                    <TrendingUp className="w-3 h-3" />
                    <span>+{metrics.revenueGrowth}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Total Orders</p>
                  <p className="text-2xl font-bold">{(metrics.totalOrders / 1000).toFixed(0)}K</p>
                  <div className="flex items-center gap-1 text-xs">
                    <TrendingUp className="w-3 h-3" />
                    <span>+{metrics.ordersGrowth}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">ReZ Users Served</p>
                  <p className="text-2xl font-bold">{(metrics.rezUsersServed / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-white/70">Ecosystem reach</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Commission</p>
                  <p className="text-2xl font-bold">₹{(metrics.totalCommission / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-white/70">Platform revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Super OS Module Health */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Super OS Module Health Monitor</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {superOSModuleHealth.map(module => {
              const Icon = module.icon;
              const adoptionRate = ((module.activeMerchants / module.totalMerchants) * 100).toFixed(1);
              return (
                <div key={module.module} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`bg-${module.color}-100 p-3 rounded-lg`}>
                        <Icon className={`w-6 h-6 text-${module.color}-600`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{module.module}</h3>
                        <p className="text-xs text-gray-600">Uptime: {module.uptime}%</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(module.status)}`}>
                      {module.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">Merchant Adoption</span>
                        <span className="font-bold text-gray-800">{adoptionRate}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-${module.color}-400 to-${module.color}-600`}
                          style={{ width: `${adoptionRate}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {module.activeMerchants.toLocaleString()} / {module.totalMerchants.toLocaleString()} merchants
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm pt-3 border-t">
                      <span className="text-gray-600">Avg Response Time</span>
                      <span className={`font-bold ${module.avgResponseTime < 300 ? 'text-green-600' : module.avgResponseTime < 400 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {module.avgResponseTime}ms
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Problem Merchants Alert */}
        {filteredProblems.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <h2 className="text-xl font-bold text-gray-800">Problem Merchants Requiring Attention</h2>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-bold">
                {filteredProblems.length} Issues
              </span>
            </div>

            <div className="space-y-4">
              {filteredProblems.map(merchant => (
                <div key={merchant.id} className={`p-4 rounded-xl border-2 ${getSeverityColor(merchant.severity)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-800">{merchant.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${getSeverityColor(merchant.severity)}`}>
                          {merchant.severity.toUpperCase()}
                        </span>
                        <span className="text-xs text-gray-600">
                          {merchant.region} • {merchant.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        <span className="font-semibold">Issue:</span> {merchant.issue}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-600">
                        <span>Duration: {merchant.duration}</span>
                        <span>Revenue Impact: ₹{merchant.revenue_impact.toLocaleString()}</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all">
                      Resolve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Top Performers */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-yellow-600" />
            <h2 className="text-xl font-bold text-gray-800">Top Performing Merchants</h2>
          </div>

          <div className="space-y-4">
            {filteredTopPerformers.map((merchant, index) => (
              <div key={merchant.id} className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{merchant.name}</h3>
                      <p className="text-xs text-gray-600">
                        {merchant.branches} branches • {merchant.region} • {merchant.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Revenue</p>
                      <p className="text-lg font-bold text-gray-800">₹{(merchant.revenue / 1000).toFixed(0)}K</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Orders</p>
                      <p className="text-lg font-bold text-gray-800">{merchant.orders.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Super OS Adoption</p>
                      <p className="text-lg font-bold text-green-600">{merchant.superOSAdoption}%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">ReZ Integration</p>
                      <p className="text-lg font-bold text-purple-600">{merchant.rezIntegration}%</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ReZ Ecosystem Integration */}
        <div className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-xl font-bold mb-4">ReZ Ecosystem Integration Impact</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/80 text-xs mb-1">Total ReZ Users Served</p>
              <p className="text-3xl font-bold">{(metrics.rezUsersServed / 1000).toFixed(0)}K</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/80 text-xs mb-1">Discovery Views</p>
              <p className="text-3xl font-bold">{(metrics.discoveryViews / 1000).toFixed(0)}K</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/80 text-xs mb-1">Coins Distributed</p>
              <p className="text-3xl font-bold">{(metrics.coinsDistributed / 1000).toFixed(0)}K</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/80 text-xs mb-1">Platform Commission</p>
              <p className="text-3xl font-bold">₹{(metrics.totalCommission / 1000).toFixed(0)}K</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMerchantSuperOS;
