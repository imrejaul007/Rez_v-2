import React, { useState } from 'react';
import { Store, TrendingUp, Users, IndianRupee, Package, MapPin, BarChart3, Star, Award, AlertCircle } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantMultiStore = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStore, setSelectedStore] = useState('all');

  // Mock data - Multi-store locations
  const stores = [
    {
      id: 'STORE-001',
      name: 'Phoenix Marketcity',
      location: 'Kurla, Mumbai',
      manager: 'Rajesh Kumar',
      status: 'active',
      openingHours: '10:00 AM - 10:00 PM',
      performance: {
        todayRevenue: 45678,
        todayOrders: 89,
        avgOrderValue: 513,
        rating: 4.7,
        reviewCount: 234,
        staffCount: 12
      },
      metrics: {
        weekRevenue: 312450,
        monthRevenue: 1245600,
        weekGrowth: 12.5,
        monthGrowth: 8.3,
        topCategory: 'Main Course',
        categoryShare: 45
      },
      inventory: {
        totalItems: 156,
        lowStock: 8,
        outOfStock: 3,
        expiringItems: 2
      }
    },
    {
      id: 'STORE-002',
      name: 'Inorbit Mall',
      location: 'Malad, Mumbai',
      manager: 'Priya Sharma',
      status: 'active',
      openingHours: '11:00 AM - 11:00 PM',
      performance: {
        todayRevenue: 38900,
        todayOrders: 67,
        avgOrderValue: 580,
        rating: 4.5,
        reviewCount: 189,
        staffCount: 10
      },
      metrics: {
        weekRevenue: 278340,
        monthRevenue: 1089500,
        weekGrowth: 8.2,
        monthGrowth: 6.7,
        topCategory: 'Beverages',
        categoryShare: 38
      },
      inventory: {
        totalItems: 142,
        lowStock: 12,
        outOfStock: 5,
        expiringItems: 4
      }
    },
    {
      id: 'STORE-003',
      name: 'R City Mall',
      location: 'Ghatkopar, Mumbai',
      manager: 'Amit Patel',
      status: 'active',
      openingHours: '10:30 AM - 10:30 PM',
      performance: {
        todayRevenue: 52100,
        todayOrders: 102,
        avgOrderValue: 510,
        rating: 4.8,
        reviewCount: 312,
        staffCount: 14
      },
      metrics: {
        weekRevenue: 356780,
        monthRevenue: 1398200,
        weekGrowth: 15.3,
        monthGrowth: 11.2,
        topCategory: 'Desserts',
        categoryShare: 42
      },
      inventory: {
        totalItems: 168,
        lowStock: 6,
        outOfStock: 2,
        expiringItems: 1
      }
    },
    {
      id: 'STORE-004',
      name: 'Palladium Mall',
      location: 'Lower Parel, Mumbai',
      manager: 'Sneha Verma',
      status: 'maintenance',
      openingHours: 'Temporarily Closed',
      performance: {
        todayRevenue: 0,
        todayOrders: 0,
        avgOrderValue: 0,
        rating: 4.6,
        reviewCount: 267,
        staffCount: 11
      },
      metrics: {
        weekRevenue: 189500,
        monthRevenue: 1156700,
        weekGrowth: -5.2,
        monthGrowth: 4.1,
        topCategory: 'Main Course',
        categoryShare: 48
      },
      inventory: {
        totalItems: 151,
        lowStock: 15,
        outOfStock: 8,
        expiringItems: 6
      }
    }
  ];

  // Cross-location analytics
  const crossLocationMetrics = {
    totalRevenue: 136678,
    totalOrders: 258,
    avgOrderValue: 530,
    topPerformer: 'R City Mall',
    bottomPerformer: 'Inorbit Mall',
    inventorySync: 87,
    staffUtilization: 82
  };

  // Staff performance across locations
  const staffPerformance = [
    {
      id: 'STAFF-001',
      name: 'Vikram Singh',
      store: 'Phoenix Marketcity',
      role: 'Cashier',
      todayOrders: 45,
      todayRevenue: 23450,
      avgRating: 4.8,
      efficiency: 95
    },
    {
      id: 'STAFF-002',
      name: 'Meera Joshi',
      store: 'R City Mall',
      role: 'Server',
      todayOrders: 52,
      todayRevenue: 26780,
      avgRating: 4.9,
      efficiency: 97
    },
    {
      id: 'STAFF-003',
      name: 'Rahul Kapoor',
      store: 'Inorbit Mall',
      role: 'Chef',
      todayOrders: 38,
      todayRevenue: 19560,
      avgRating: 4.6,
      efficiency: 88
    }
  ];

  // Best & worst performing items across stores
  const productPerformance = {
    topProducts: [
      {
        name: 'Butter Chicken',
        totalSales: 456,
        revenue: 228000,
        bestStore: 'R City Mall',
        worstStore: 'Palladium Mall'
      },
      {
        name: 'Biryani',
        totalSales: 389,
        revenue: 194500,
        bestStore: 'Phoenix Marketcity',
        worstStore: 'Inorbit Mall'
      },
      {
        name: 'Paneer Tikka',
        totalSales: 312,
        revenue: 156000,
        bestStore: 'Phoenix Marketcity',
        worstStore: 'Palladium Mall'
      }
    ],
    underperformers: [
      {
        name: 'Fish Curry',
        totalSales: 23,
        revenue: 11500,
        reason: 'Low demand in vegetarian-heavy areas'
      },
      {
        name: 'Lamb Rogan Josh',
        totalSales: 18,
        revenue: 9000,
        reason: 'Premium pricing, limited audience'
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400';
      case 'maintenance': return 'bg-yellow-500/20 text-yellow-400';
      case 'closed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getGrowthColor = (growth) => {
    if (growth > 0) return 'text-green-400';
    if (growth < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  const filteredStores = selectedStore === 'all' ? stores : stores.filter(s => s.id === selectedStore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-6">
      <MerchantNav />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Store className="w-10 h-10 text-blue-400" />
            Multi-Store Dashboard
          </h1>
          <p className="text-gray-400">Centralized management for all your locations</p>
        </div>

        {/* Store Filter */}
        <div className="mb-6 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <label className="text-gray-400 text-sm mb-2 block">Select Store</label>
          <select
            value={selectedStore}
            onChange={(e) => setSelectedStore(e.target.value)}
            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Stores (Combined View)</option>
            {stores.map((store) => (
              <option key={store.id} value={store.id}>
                {store.name} - {store.location}
              </option>
            ))}
          </select>
        </div>

        {/* Summary Stats (only when all stores selected) */}
        {selectedStore === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <IndianRupee className="w-8 h-8 text-green-400" />
                <span className="text-xs text-gray-400">Today's Revenue</span>
              </div>
              <div className="text-3xl font-bold text-white">₹{crossLocationMetrics.totalRevenue.toLocaleString()}</div>
              <div className="text-sm text-green-400">Across all locations</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <Package className="w-8 h-8 text-blue-400" />
                <span className="text-xs text-gray-400">Total Orders</span>
              </div>
              <div className="text-3xl font-bold text-white">{crossLocationMetrics.totalOrders}</div>
              <div className="text-sm text-blue-400">Avg: ₹{crossLocationMetrics.avgOrderValue}</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-xs text-gray-400">Top Performer</span>
              </div>
              <div className="text-xl font-bold text-white">{crossLocationMetrics.topPerformer}</div>
              <div className="text-sm text-yellow-400">15.3% growth this week</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-8 h-8 text-purple-400" />
                <span className="text-xs text-gray-400">Staff Utilization</span>
              </div>
              <div className="text-3xl font-bold text-white">{crossLocationMetrics.staffUtilization}%</div>
              <div className="text-sm text-purple-400">47 staff members</div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {[
            { id: 'overview', label: 'Store Overview', icon: Store },
            { id: 'performance', label: 'Performance Comparison', icon: BarChart3 },
            { id: 'inventory', label: 'Inventory Sync', icon: Package },
            { id: 'staff', label: 'Staff Analytics', icon: Users }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                {selectedStore === 'all' ? 'All Stores' : filteredStores[0]?.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredStores.map((store) => (
                  <div key={store.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{store.name}</h3>
                        <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4" />
                          {store.location}
                        </p>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(store.status)}`}>
                        {store.status.toUpperCase()}
                      </span>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Manager:</span>
                        <span className="text-white font-semibold">{store.manager}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Hours:</span>
                        <span className="text-white">{store.openingHours}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Staff:</span>
                        <span className="text-white">{store.performance.staffCount} members</span>
                      </div>
                    </div>

                    {/* Today's Performance */}
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-4">
                      <div className="text-gray-400 text-sm mb-3">Today's Performance</div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-gray-400 text-xs">Revenue</div>
                          <div className="text-white font-bold text-lg">₹{store.performance.todayRevenue.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs">Orders</div>
                          <div className="text-white font-bold text-lg">{store.performance.todayOrders}</div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs">Avg Order</div>
                          <div className="text-white font-bold text-lg">₹{store.performance.avgOrderValue}</div>
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-bold text-lg">{store.performance.rating}</span>
                        <span className="text-gray-400 text-sm">({store.performance.reviewCount} reviews)</span>
                      </div>
                    </div>

                    {/* Inventory Alerts */}
                    {(store.inventory.lowStock > 0 || store.inventory.outOfStock > 0) && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>
                            {store.inventory.outOfStock} out of stock, {store.inventory.lowStock} low stock
                          </span>
                        </div>
                      </div>
                    )}

                    <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
                      View Full Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Performance Comparison</h2>

              {/* Revenue Comparison */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Revenue by Store (This Month)</h3>
                <div className="space-y-4">
                  {stores.map((store) => (
                    <div key={store.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">{store.name}</span>
                        <div className="text-right">
                          <span className="text-white font-bold">₹{store.metrics.monthRevenue.toLocaleString()}</span>
                          <span className={`ml-2 text-sm ${getGrowthColor(store.metrics.monthGrowth)}`}>
                            {store.metrics.monthGrowth > 0 ? '+' : ''}{store.metrics.monthGrowth}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                          style={{ width: `${(store.metrics.monthRevenue / 1400000) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Products Across Stores */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Top Products Performance</h3>
                <div className="space-y-4">
                  {productPerformance.topProducts.map((product, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-bold">{product.name}</span>
                        <span className="text-green-400 font-bold">₹{product.revenue.toLocaleString()}</span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {product.totalSales} sales • Best: {product.bestStore} • Needs improvement: {product.worstStore}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-lg font-bold text-white mb-3">Underperformers</h4>
                  <div className="space-y-3">
                    {productPerformance.underperformers.map((product, idx) => (
                      <div key={idx} className="bg-red-500/10 rounded-lg p-3 border border-red-500/30">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white">{product.name}</span>
                          <span className="text-red-400">{product.totalSales} sales</span>
                        </div>
                        <div className="text-gray-400 text-sm">{product.reason}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Inventory Synchronization</h2>
                <div className="flex items-center gap-2">
                  <div className="text-gray-400 text-sm">Sync Status:</div>
                  <div className="text-green-400 font-semibold">{crossLocationMetrics.inventorySync}%</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stores.map((store) => (
                  <div key={store.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-4">{store.name}</h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Total Items:</span>
                        <span className="text-white font-bold">{store.inventory.totalItems}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-400">Low Stock:</span>
                        <span className="text-yellow-400 font-bold">{store.inventory.lowStock}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-red-400">Out of Stock:</span>
                        <span className="text-red-400 font-bold">{store.inventory.outOfStock}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-orange-400">Expiring Soon:</span>
                        <span className="text-orange-400 font-bold">{store.inventory.expiringItems}</span>
                      </div>
                    </div>

                    <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all text-sm">
                      Sync Inventory
                    </button>
                  </div>
                ))}
              </div>

              {/* Critical Alerts */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  Critical Inventory Alerts
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-white font-semibold">Palladium Mall - 8 items out of stock</div>
                    <div className="text-gray-400 text-sm mt-1">Last sync: 2 hours ago</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-white font-semibold">Inorbit Mall - 12 items low stock</div>
                    <div className="text-gray-400 text-sm mt-1">Restock recommended within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'staff' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Staff Performance Analytics</h2>

              {/* Top Performers */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Top Performers Today</h3>
                <div className="space-y-4">
                  {staffPerformance.map((staff, idx) => (
                    <div key={staff.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {idx + 1}
                          </div>
                          <div>
                            <div className="text-white font-bold">{staff.name}</div>
                            <div className="text-gray-400 text-sm">{staff.role} • {staff.store}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-white font-bold">{staff.avgRating}</span>
                          </div>
                          <div className="text-green-400 text-sm">{staff.efficiency}% efficiency</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="text-gray-400 text-xs">Orders Handled</div>
                          <div className="text-white font-bold text-lg">{staff.todayOrders}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="text-gray-400 text-xs">Revenue Generated</div>
                          <div className="text-green-400 font-bold text-lg">₹{staff.todayRevenue.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Staff Distribution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Staff Distribution by Store</h3>
                  <div className="space-y-3">
                    {stores.map((store) => (
                      <div key={store.id}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white">{store.name}</span>
                          <span className="text-gray-400">{store.performance.staffCount} staff</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${(store.performance.staffCount / 14) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Overall Staff Metrics</h3>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="text-gray-400 text-sm">Average Efficiency</div>
                      <div className="text-white font-bold text-2xl">93.3%</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="text-gray-400 text-sm">Average Rating</div>
                      <div className="text-white font-bold text-2xl">4.77 ⭐</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="text-gray-400 text-sm">Total Staff</div>
                      <div className="text-white font-bold text-2xl">47 Members</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MerchantMultiStore;
