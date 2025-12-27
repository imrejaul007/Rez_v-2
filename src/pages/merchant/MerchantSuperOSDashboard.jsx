import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Users, Tag, ShoppingCart, DollarSign, Eye, Heart,
  AlertCircle, Star, ArrowUpRight, Plus, BarChart3, MapPin, Package,
  Wallet, Award, Receipt, Zap, Target, Megaphone, Coins, Globe, TrendingDown
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';
import { mockMerchant } from '../../data/mock/merchants';
import { mockAnalytics } from '../../data/mock/analytics';
import { mockOrders, getOrderStats } from '../../data/mock/orders';
import { mockProducts, getLowStockProducts } from '../../data/mock/products';

export default function MerchantSuperOSDashboard() {
  const [timeframe, setTimeframe] = useState('today');
  const [merchantInfo] = useState(mockMerchant);
  const lowStockItems = getLowStockProducts();
  const orderStats = getOrderStats();
  const currentStats = mockAnalytics[timeframe];

  // Super OS Metrics
  const superOSMetrics = {
    rezUsersReached: 2345,
    rezUsersGrowth: 23,
    discoveryViews: 8901,
    coinsDistributed: 15600,
    rezCommission: 4200,
    nearYouAppearances: 1234,
    mallVisibility: 567,
    activeOffers: 8,
    campaignROI: 3.2
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        {/* Super OS Header */}
        <div className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white">
          <div className="px-6 py-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl border-2 border-white/20 shadow-xl">
                  🍕
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">{merchantInfo.businessName}</h1>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold border border-white/30">
                      MERCHANT SUPER OS
                    </span>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{merchantInfo.branches[0].name}</span>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-100 text-xs font-medium rounded-full">
                      ● ACTIVE
                    </span>
                    <span className="px-2 py-1 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 text-purple-100 text-xs font-bold rounded-full">
                      ⭐ PREMIUM
                    </span>
                    <span className="px-2 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-100 text-xs font-medium rounded-full">
                      ✓ ReZ Verified
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/merchant/pos"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-all font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Open POS
                </Link>
                <Link
                  to="/merchant/marketing"
                  className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Megaphone className="w-5 h-5" />
                  Marketing
                </Link>
              </div>
            </div>

            {/* ReZ Ecosystem Integration Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <Globe className="w-5 h-5 text-white/80" />
                  <span className="text-green-300 text-xs font-bold">↑ {superOSMetrics.rezUsersGrowth}%</span>
                </div>
                <div className="text-sm text-white/80">ReZ Users Reached</div>
                <div className="text-2xl font-bold mt-1">{superOSMetrics.rezUsersReached.toLocaleString()}</div>
                <div className="text-xs text-white/60 mt-1">Near You + Discovery</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <Eye className="w-5 h-5 text-white/80" />
                  <span className="text-blue-300 text-xs font-bold">Live</span>
                </div>
                <div className="text-sm text-white/80">Discovery Views</div>
                <div className="text-2xl font-bold mt-1">{superOSMetrics.discoveryViews.toLocaleString()}</div>
                <div className="text-xs text-white/60 mt-1">Mall & Explore</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <Coins className="w-5 h-5 text-yellow-300" />
                  <span className="text-yellow-300 text-xs font-bold">Loyalty</span>
                </div>
                <div className="text-sm text-white/80">Coins Distributed</div>
                <div className="text-2xl font-bold mt-1">{(superOSMetrics.coinsDistributed / 1000).toFixed(1)}K</div>
                <div className="text-xs text-white/60 mt-1">Building retention</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <Target className="w-5 h-5 text-white/80" />
                  <span className="text-purple-300 text-xs font-bold">{superOSMetrics.campaignROI}x ROI</span>
                </div>
                <div className="text-sm text-white/80">ReZ Commission</div>
                <div className="text-2xl font-bold mt-1">₹{(superOSMetrics.rezCommission / 1000).toFixed(1)}K</div>
                <div className="text-xs text-white/60 mt-1">5% platform fee</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Timeframe Selector */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              {['today', 'week', 'month'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    timeframe === tf
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {tf === 'today' && 'Today'}
                  {tf === 'week' && 'This Week'}
                  {tf === 'month' && 'This Month'}
                </button>
              ))}
            </div>
            <div className="text-sm text-gray-600">
              Super OS provides complete operating system for your business
            </div>
          </div>

          {/* Low Stock Alert */}
          {lowStockItems.length > 0 && (
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-4 mb-6 shadow-md">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 text-white p-2 rounded-lg">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-yellow-900 text-lg">Inventory Alert</p>
                  <p className="text-sm text-yellow-800">
                    {lowStockItems.length} items need restocking urgently - Auto-reorder available
                  </p>
                </div>
                <Link
                  to="/merchant/inventory"
                  className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-bold shadow-md"
                >
                  Manage Stock
                </Link>
              </div>
            </div>
          )}

          {/* Core Business Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between mb-3">
                <DollarSign className="w-8 h-8" />
                <span className="text-green-100 text-sm font-bold">↑ {currentStats.growth.sales}%</span>
              </div>
              <div className="text-sm text-green-100 mb-1">Total Sales</div>
              <div className="text-3xl font-bold">₹{(currentStats.sales / 1000).toFixed(1)}K</div>
              <div className="text-xs text-green-100 mt-2">POS + Online Orders</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between mb-3">
                <ShoppingCart className="w-8 h-8" />
                <span className="text-blue-100 text-sm font-bold">{orderStats.pending} pending</span>
              </div>
              <div className="text-sm text-blue-100 mb-1">Orders</div>
              <div className="text-3xl font-bold">{currentStats.orders}</div>
              <div className="text-xs text-blue-100 mt-2">{orderStats.completed} completed</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between mb-3">
                <Users className="w-8 h-8" />
                <span className="text-purple-100 text-sm font-bold">↑ {currentStats.growth.customers}%</span>
              </div>
              <div className="text-sm text-purple-100 mb-1">Customers</div>
              <div className="text-3xl font-bold">{currentStats.customers}</div>
              <div className="text-xs text-purple-100 mt-2">Via ReZ ecosystem</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between mb-3">
                <TrendingUp className="w-8 h-8" />
                <span className="text-orange-100 text-sm font-bold">↑ {currentStats.growth.avgOrderValue}%</span>
              </div>
              <div className="text-sm text-orange-100 mb-1">Avg Order Value</div>
              <div className="text-3xl font-bold">₹{currentStats.avgOrderValue}</div>
              <div className="text-xs text-orange-100 mt-2">Increasing with loyalty</div>
            </div>
          </div>

          {/* Super OS Modules */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* POS Engine */}
            <Link to="/merchant/pos" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-orange-500 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors">
                  <ShoppingCart className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">POS Engine</h3>
                  <p className="text-xs text-gray-600">Heart of the OS</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Today's Sales</span>
                  <span className="font-bold text-gray-900">₹{(mockAnalytics.today.sales / 1000).toFixed(1)}K</span>
                </div>
                <div className="flex justify-between">
                  <span>Orders Processed</span>
                  <span className="font-bold text-gray-900">{mockAnalytics.today.orders}</span>
                </div>
                <div className="flex justify-between">
                  <span>Coins Earned</span>
                  <span className="font-bold text-yellow-600">+{(mockAnalytics.today.sales * 0.03).toFixed(0)}</span>
                </div>
              </div>
            </Link>

            {/* Marketing Manager */}
            <Link to="/merchant/marketing" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-pink-500 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-pink-100 p-3 rounded-lg group-hover:bg-pink-200 transition-colors">
                  <Megaphone className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Marketing Manager</h3>
                  <p className="text-xs text-gray-600">Growth lever</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Active Campaigns</span>
                  <span className="font-bold text-gray-900">{superOSMetrics.activeOffers}</span>
                </div>
                <div className="flex justify-between">
                  <span>Campaign ROI</span>
                  <span className="font-bold text-green-600">{superOSMetrics.campaignROI}x</span>
                </div>
                <div className="flex justify-between">
                  <span>Impressions</span>
                  <span className="font-bold text-gray-900">{superOSMetrics.discoveryViews.toLocaleString()}</span>
                </div>
              </div>
            </Link>

            {/* Loyalty & CRM */}
            <Link to="/merchant/customers" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-500 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Loyalty & CRM</h3>
                  <p className="text-xs text-gray-600">Customer retention</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Loyal Customers</span>
                  <span className="font-bold text-gray-900">89%</span>
                </div>
                <div className="flex justify-between">
                  <span>Repeat Rate</span>
                  <span className="font-bold text-green-600">67%</span>
                </div>
                <div className="flex justify-between">
                  <span>Lifetime Value</span>
                  <span className="font-bold text-gray-900">₹4.5K</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
                  <Link to="/merchant/orders" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    View All →
                  </Link>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {mockOrders.slice(0, 4).map((order) => (
                  <div key={order.id} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-orange-100 p-2 rounded">
                          <Receipt className="w-4 h-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{order.orderNumber}</p>
                          <p className="text-sm text-gray-600">{order.customer.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">₹{order.total.toFixed(2)}</p>
                        <span className={`inline-block text-xs px-2 py-1 rounded-full font-medium mt-1 ${
                          order.status === 'completed' ? 'bg-green-100 text-green-700' :
                          order.status === 'preparing' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Health */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Super OS Health</h2>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                    ● All Systems Operational
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">POS Engine</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Payment Gateway</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">Connected</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">ReZ Integration</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">Synced</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Inventory Sync</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">Real-time</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Low Stock Items</span>
                  </div>
                  <span className="text-sm font-medium text-yellow-600">{lowStockItems.length} items</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
