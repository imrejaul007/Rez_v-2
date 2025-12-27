import React, { useState } from 'react';
import { Store, MapPin, Users, DollarSign, TrendingUp, TrendingDown, CheckCircle, AlertCircle, Clock, Plus, Edit, Settings, BarChart3, Package, ShoppingCart, Star, Navigation } from 'lucide-react';
import MerchantNav from '../../components/MerchantNav';

const MerchantBranchManager = () => {
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [timeframe, setTimeframe] = useState('today');

  // Mock branches data
  const mockBranches = [
    {
      id: 'branch-001',
      name: 'Koramangala Branch',
      location: '5th Block, Koramangala, Bangalore',
      isPrimary: true,
      status: 'active',
      manager: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      openingHours: {
        weekday: '10:00 AM - 10:00 PM',
        weekend: '10:00 AM - 11:00 PM'
      },
      staff: 12,
      activeStaff: 8,
      metrics: {
        today: { sales: 45678, orders: 123, customers: 98, avgOrder: 371 },
        week: { sales: 234567, orders: 567, customers: 423, avgOrder: 414 },
        month: { sales: 987654, orders: 2345, customers: 1876, avgOrder: 421 }
      },
      inventory: {
        totalProducts: 45,
        lowStock: 3,
        outOfStock: 0
      },
      rezMetrics: {
        rezUsersServed: 2345,
        discoveryViews: 8901,
        coinsDistributed: 15600,
        rating: 4.6
      }
    },
    {
      id: 'branch-002',
      name: 'Indiranagar Branch',
      location: '100 Feet Road, Indiranagar, Bangalore',
      isPrimary: false,
      status: 'active',
      manager: 'Priya Sharma',
      phone: '+91 98765 43211',
      openingHours: {
        weekday: '11:00 AM - 10:00 PM',
        weekend: '11:00 AM - 11:00 PM'
      },
      staff: 10,
      activeStaff: 7,
      metrics: {
        today: { sales: 38900, orders: 98, customers: 76, avgOrder: 397 },
        week: { sales: 198765, orders: 489, customers: 367, avgOrder: 407 },
        month: { sales: 823456, orders: 2012, customers: 1598, avgOrder: 409 }
      },
      inventory: {
        totalProducts: 42,
        lowStock: 5,
        outOfStock: 1
      },
      rezMetrics: {
        rezUsersServed: 1987,
        discoveryViews: 7234,
        coinsDistributed: 12890,
        rating: 4.5
      }
    },
    {
      id: 'branch-003',
      name: 'Whitefield Branch',
      location: 'ITPL Main Road, Whitefield, Bangalore',
      isPrimary: false,
      status: 'active',
      manager: 'Amit Patel',
      phone: '+91 98765 43212',
      openingHours: {
        weekday: '10:00 AM - 9:00 PM',
        weekend: '10:00 AM - 10:00 PM'
      },
      staff: 8,
      activeStaff: 6,
      metrics: {
        today: { sales: 29800, orders: 76, customers: 61, avgOrder: 392 },
        week: { sales: 156789, orders: 398, customers: 298, avgOrder: 394 },
        month: { sales: 678901, orders: 1678, customers: 1345, avgOrder: 405 }
      },
      inventory: {
        totalProducts: 38,
        lowStock: 2,
        outOfStock: 0
      },
      rezMetrics: {
        rezUsersServed: 1654,
        discoveryViews: 5678,
        coinsDistributed: 10234,
        rating: 4.4
      }
    }
  ];

  const getAggregateMetrics = () => {
    if (selectedBranch === 'all') {
      const aggregate = mockBranches.reduce((acc, branch) => ({
        sales: acc.sales + branch.metrics[timeframe].sales,
        orders: acc.orders + branch.metrics[timeframe].orders,
        customers: acc.customers + branch.metrics[timeframe].customers,
        staff: acc.staff + branch.staff,
        activeStaff: acc.activeStaff + branch.activeStaff,
        rezUsersServed: acc.rezUsersServed + branch.rezMetrics.rezUsersServed,
        discoveryViews: acc.discoveryViews + branch.rezMetrics.discoveryViews,
        coinsDistributed: acc.coinsDistributed + branch.rezMetrics.coinsDistributed
      }), {
        sales: 0, orders: 0, customers: 0, staff: 0, activeStaff: 0,
        rezUsersServed: 0, discoveryViews: 0, coinsDistributed: 0
      });
      aggregate.avgOrder = aggregate.sales / aggregate.orders;
      return aggregate;
    } else {
      const branch = mockBranches.find(b => b.id === selectedBranch);
      return {
        ...branch.metrics[timeframe],
        staff: branch.staff,
        activeStaff: branch.activeStaff,
        ...branch.rezMetrics
      };
    }
  };

  const metrics = getAggregateMetrics();

  const getBranchComparison = () => {
    return mockBranches.map(branch => ({
      ...branch,
      performance: branch.metrics[timeframe].sales,
      growth: ((branch.metrics[timeframe].sales - branch.metrics.today.sales) / branch.metrics.today.sales * 100).toFixed(1)
    })).sort((a, b) => b.performance - a.performance);
  };

  const branchComparison = getBranchComparison();
  const topBranch = branchComparison[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <MerchantNav />

      <div className="lg:ml-64 p-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Store className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Multi-Branch Manager</h1>
                  <p className="text-white/90 mt-1">Manage all locations from one dashboard</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                  {mockBranches.length} ACTIVE BRANCHES
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                  UNIFIED MANAGEMENT
                </span>
              </div>
            </div>

            <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all flex items-center gap-2 shadow-lg">
              <Plus className="w-5 h-5" />
              Add Branch
            </button>
          </div>

          {/* Branch Selector & Timeframe */}
          <div className="flex items-center gap-4 mt-8">
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-4 py-2 rounded-xl font-semibold focus:outline-none focus:border-white/40 cursor-pointer"
            >
              <option value="all" className="text-gray-800">All Branches</option>
              {mockBranches.map(branch => (
                <option key={branch.id} value={branch.id} className="text-gray-800">
                  {branch.name} {branch.isPrimary ? '⭐' : ''}
                </option>
              ))}
            </select>

            <div className="flex gap-2">
              {['today', 'week', 'month'].map(tf => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                    timeframe === tf
                      ? 'bg-white text-indigo-600'
                      : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                  }`}
                >
                  {tf.charAt(0).toUpperCase() + tf.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Aggregate Metrics */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Total Sales</p>
                  <p className="text-2xl font-bold">₹{(metrics.sales / 1000).toFixed(1)}K</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Total Orders</p>
                  <p className="text-2xl font-bold">{metrics.orders}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">ReZ Users Served</p>
                  <p className="text-2xl font-bold">{metrics.rezUsersServed.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Staff Active</p>
                  <p className="text-2xl font-bold">{metrics.activeStaff}/{metrics.staff}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Performance Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Branch Performance Comparison</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <BarChart3 className="w-4 h-4" />
              <span>Sorted by {timeframe} sales</span>
            </div>
          </div>

          <div className="space-y-4">
            {branchComparison.map((branch, index) => {
              const isTop = index === 0;
              const salesPercent = (branch.performance / topBranch.performance) * 100;

              return (
                <div key={branch.id} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {isTop && <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs">🏆</div>}
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-gray-800">{branch.name}</h3>
                          {branch.isPrimary && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                              PRIMARY
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">{branch.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Sales</p>
                        <p className="text-lg font-bold text-gray-800">₹{(branch.performance / 1000).toFixed(1)}K</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Orders</p>
                        <p className="text-lg font-bold text-gray-800">{branch.metrics[timeframe].orders}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Avg Order</p>
                        <p className="text-lg font-bold text-gray-800">₹{branch.metrics[timeframe].avgOrder}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Rating</p>
                        <p className="text-lg font-bold text-yellow-600 flex items-center gap-1">
                          <Star className="w-4 h-4 fill-current" />
                          {branch.rezMetrics.rating}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Performance Bar */}
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${isTop ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-blue-400 to-indigo-400'} transition-all`}
                      style={{ width: `${salesPercent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Branch Details Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {mockBranches.map(branch => (
            <div key={branch.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              {/* Branch Header */}
              <div className={`p-4 ${branch.isPrimary ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gradient-to-r from-gray-700 to-gray-800'} text-white`}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{branch.name}</h3>
                    <p className="text-xs text-white/80 mt-1">{branch.manager}</p>
                  </div>
                  {branch.isPrimary && (
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                      PRIMARY
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <MapPin className="w-3 h-3" />
                  <span>{branch.location}</span>
                </div>
              </div>

              {/* Branch Metrics */}
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Today's Sales</p>
                    <p className="text-lg font-bold text-green-600">₹{(branch.metrics.today.sales / 1000).toFixed(1)}K</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Orders</p>
                    <p className="text-lg font-bold text-blue-600">{branch.metrics.today.orders}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">ReZ Users</p>
                    <p className="text-lg font-bold text-purple-600">{branch.rezMetrics.rezUsersServed}</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Rating</p>
                    <p className="text-lg font-bold text-orange-600 flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      {branch.rezMetrics.rating}
                    </p>
                  </div>
                </div>

                {/* Staff & Inventory Status */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Staff Active</span>
                    <span className="font-semibold text-gray-800">{branch.activeStaff}/{branch.staff}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Low Stock Items</span>
                    <span className={`font-semibold ${branch.inventory.lowStock > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                      {branch.inventory.lowStock}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Out of Stock</span>
                    <span className={`font-semibold ${branch.inventory.outOfStock > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {branch.inventory.outOfStock}
                    </span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    branch.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {branch.status.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Clock className="w-3 h-3" />
                    <span>{branch.openingHours.weekday}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedBranch(branch.id)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    View Details
                  </button>
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all">
                    <Settings className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ReZ Ecosystem Performance */}
        <div className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-xl font-bold mb-4">ReZ Ecosystem Performance (All Branches)</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/80 text-xs mb-1">Total ReZ Users Served</p>
              <p className="text-3xl font-bold">
                {mockBranches.reduce((sum, b) => sum + b.rezMetrics.rezUsersServed, 0).toLocaleString()}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/80 text-xs mb-1">Total Discovery Views</p>
              <p className="text-3xl font-bold">
                {mockBranches.reduce((sum, b) => sum + b.rezMetrics.discoveryViews, 0).toLocaleString()}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/80 text-xs mb-1">Total Coins Distributed</p>
              <p className="text-3xl font-bold">
                {mockBranches.reduce((sum, b) => sum + b.rezMetrics.coinsDistributed, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantBranchManager;
