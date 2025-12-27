import { useState } from 'react';
import { TrendingUp, Users, Store, Tag, DollarSign, ShoppingCart, Calendar, Download } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminAnalytics() {
  const [dateRange, setDateRange] = useState('30days');

  const [metrics, setMetrics] = useState({
    revenue: {
      current: 2456789,
      previous: 2123456,
      growth: 15.7
    },
    gmv: {
      current: 3567890,
      previous: 3012345,
      growth: 18.4
    },
    users: {
      current: 45234,
      previous: 40123,
      growth: 12.7
    },
    merchants: {
      current: 1256,
      previous: 1178,
      growth: 6.6
    },
    offers: {
      current: 3456,
      previous: 3012,
      growth: 14.7
    },
    redemptions: {
      current: 23456,
      previous: 19876,
      growth: 18.0
    }
  });

  const [revenueData, setRevenueData] = useState([
    { month: 'Jan', revenue: 185000, gmv: 267000, redemptions: 1890 },
    { month: 'Feb', revenue: 198000, gmv: 289000, redemptions: 2100 },
    { month: 'Mar', revenue: 223000, gmv: 312000, redemptions: 2340 },
    { month: 'Apr', revenue: 245000, gmv: 334000, redemptions: 2567 },
    { month: 'May', revenue: 267000, gmv: 356000, redemptions: 2789 },
    { month: 'Jun', revenue: 289000, gmv: 378000, redemptions: 3012 }
  ]);

  const [topCategories, setTopCategories] = useState([
    { name: 'Food & Dining', revenue: 567890, orders: 8945, growth: 23.4 },
    { name: 'Fashion & Apparel', revenue: 456789, orders: 6734, growth: 18.9 },
    { name: 'Beauty & Wellness', revenue: 345678, orders: 5623, growth: 15.6 },
    { name: 'Electronics', revenue: 234567, orders: 2345, growth: 12.3 },
    { name: 'Home & Living', revenue: 123456, orders: 1890, growth: 9.8 }
  ]);

  const [topMerchants, setTopMerchants] = useState([
    { id: 1, name: 'Pizza Paradise', revenue: 234567, orders: 3456, rating: 4.8 },
    { id: 2, name: 'The Coffee House', revenue: 198765, orders: 4567, rating: 4.7 },
    { id: 3, name: 'Fashion Hub', revenue: 187654, orders: 2345, rating: 4.6 },
    { id: 4, name: 'Tech Store', revenue: 156789, orders: 1567, rating: 4.5 },
    { id: 5, name: 'Beauty Salon', revenue: 145678, orders: 2234, rating: 4.9 }
  ]);

  const [userGrowth, setUserGrowth] = useState([
    { week: 'Week 1', newUsers: 1234, activeUsers: 12345 },
    { week: 'Week 2', newUsers: 1456, activeUsers: 13456 },
    { week: 'Week 3', newUsers: 1678, activeUsers: 14567 },
    { week: 'Week 4', newUsers: 1890, activeUsers: 15678 }
  ]);

  const maxRevenue = Math.max(...revenueData.map(d => d.revenue));
  const maxGMV = Math.max(...revenueData.map(d => d.gmv));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Platform Analytics</h1>
              <p className="text-gray-600 mt-1">Comprehensive insights and performance metrics</p>
            </div>
            <div className="flex gap-3">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="12months">Last 12 Months</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Download className="w-5 h-5" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <p className="text-sm text-gray-600 font-medium">Revenue</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{(metrics.revenue.current / 1000000).toFixed(2)}M</p>
            <p className={`text-sm mt-1 ${metrics.revenue.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              ↑ {metrics.revenue.growth}% vs previous
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <p className="text-sm text-gray-600 font-medium">GMV</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{(metrics.gmv.current / 1000000).toFixed(2)}M</p>
            <p className={`text-sm mt-1 ${metrics.gmv.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              ↑ {metrics.gmv.growth}% vs previous
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-purple-600" />
              <p className="text-sm text-gray-600 font-medium">Total Users</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{metrics.users.current.toLocaleString()}</p>
            <p className={`text-sm mt-1 ${metrics.users.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              ↑ {metrics.users.growth}% vs previous
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Store className="w-5 h-5 text-orange-600" />
              <p className="text-sm text-gray-600 font-medium">Merchants</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{metrics.merchants.current.toLocaleString()}</p>
            <p className={`text-sm mt-1 ${metrics.merchants.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              ↑ {metrics.merchants.growth}% vs previous
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Tag className="w-5 h-5 text-pink-600" />
              <p className="text-sm text-gray-600 font-medium">Active Offers</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{metrics.offers.current.toLocaleString()}</p>
            <p className={`text-sm mt-1 ${metrics.offers.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              ↑ {metrics.offers.growth}% vs previous
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <ShoppingCart className="w-5 h-5 text-indigo-600" />
              <p className="text-sm text-gray-600 font-medium">Redemptions</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{metrics.redemptions.current.toLocaleString()}</p>
            <p className={`text-sm mt-1 ${metrics.redemptions.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              ↑ {metrics.redemptions.growth}% vs previous
            </p>
          </div>
        </div>

        {/* Revenue & GMV Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue & GMV Trends</h2>
          <div className="space-y-4">
            {revenueData.map((data, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{data.month}</span>
                  <div className="flex gap-4 text-sm">
                    <span className="text-green-600">Revenue: ₹{(data.revenue / 1000).toFixed(0)}K</span>
                    <span className="text-blue-600">GMV: ₹{(data.gmv / 1000).toFixed(0)}K</span>
                    <span className="text-gray-600">Orders: {data.redemptions}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-green-500 h-3 rounded-full"
                      style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                    />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-500 h-3 rounded-full"
                      style={{ width: `${(data.gmv / maxGMV) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Categories */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Top Categories</h2>
            <div className="space-y-4">
              {topCategories.map((category, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="font-semibold text-gray-900">{category.name}</p>
                      <p className="text-sm text-gray-600">{category.orders.toLocaleString()} orders</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">₹{(category.revenue / 1000).toFixed(1)}K</p>
                      <p className="text-sm text-green-600">↑ {category.growth}%</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-500 h-2 rounded-full"
                      style={{ width: `${(category.revenue / topCategories[0].revenue) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Merchants */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Top Performing Merchants</h2>
            <div className="space-y-4">
              {topMerchants.map((merchant, index) => (
                <div key={merchant.id} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                        #{index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{merchant.name}</p>
                        <p className="text-sm text-gray-600">{merchant.orders.toLocaleString()} orders • ⭐ {merchant.rating}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">₹{(merchant.revenue / 1000).toFixed(1)}K</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                      style={{ width: `${(merchant.revenue / topMerchants[0].revenue) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Growth */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">User Growth Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {userGrowth.map((week, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200">
                <p className="text-sm font-medium text-purple-900 mb-3">{week.week}</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-purple-700">New Users</p>
                    <p className="text-2xl font-bold text-purple-900">{week.newUsers.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-purple-700">Active Users</p>
                    <p className="text-lg font-semibold text-purple-800">{week.activeUsers.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
