import { useState } from 'react';
import { Users, TrendingUp, Award, DollarSign, ShoppingCart, Target, Trophy, Star } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

// Backend API: GET /api/merchant/staff/performance
// Backend API: GET /api/merchant/staff/sales
// Backend API: GET /api/merchant/staff/targets

export default function MerchantStaffSales() {
  const [period, setPeriod] = useState('month');
  const [sortBy, setSortBy] = useState('revenue');

  const staffPerformance = [
    {
      id: 1,
      name: 'Amit Sharma',
      role: 'Senior Sales',
      avatar: '👨',
      sales: { count: 245, revenue: 456000, target: 500000 },
      metrics: { avgOrderValue: 1861, conversionRate: 78, customerRating: 4.8 },
      achievements: ['Top Seller', 'Customer Favorite'],
      trend: 'up',
      growth: 23
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Sales Associate',
      avatar: '👩',
      sales: { count: 198, revenue: 378000, target: 400000 },
      metrics: { avgOrderValue: 1909, conversionRate: 82, customerRating: 4.9 },
      achievements: ['High Conversion', 'Rising Star'],
      trend: 'up',
      growth: 35
    },
    {
      id: 3,
      name: 'Rahul Singh',
      role: 'Sales Executive',
      avatar: '👨',
      sales: { count: 167, revenue: 312000, target: 350000 },
      metrics: { avgOrderValue: 1868, conversionRate: 71, customerRating: 4.6 },
      achievements: ['Consistent Performer'],
      trend: 'up',
      growth: 12
    },
    {
      id: 4,
      name: 'Sneha Gupta',
      role: 'Junior Sales',
      avatar: '👩',
      sales: { count: 134, revenue: 245000, target: 300000 },
      metrics: { avgOrderValue: 1828, conversionRate: 68, customerRating: 4.7 },
      achievements: ['Fast Learner'],
      trend: 'down',
      growth: -5
    },
    {
      id: 5,
      name: 'Vikram Reddy',
      role: 'Sales Manager',
      avatar: '👨',
      sales: { count: 289, revenue: 523000, target: 550000 },
      metrics: { avgOrderValue: 1810, conversionRate: 85, customerRating: 4.9 },
      achievements: ['Team Leader', 'Top Seller', 'Customer Champion'],
      trend: 'up',
      growth: 18
    }
  ];

  const teamStats = {
    totalSales: 1033,
    totalRevenue: 1914000,
    totalTarget: 2100000,
    avgConversion: 76.8,
    topPerformer: 'Vikram Reddy'
  };

  const getTargetProgress = (revenue, target) => {
    return Math.min((revenue / target) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Staff Sales Performance</h1>
          <p className="text-blue-200">Track individual staff sales and performance metrics</p>
        </div>

        {/* Team Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <p className="text-blue-200 text-sm">Total Sales</p>
                <p className="text-2xl font-bold text-white">{teamStats.totalSales}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm">+18% from last period</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <p className="text-blue-200 text-sm">Total Revenue</p>
                <p className="text-2xl font-bold text-white">₹{(teamStats.totalRevenue / 1000).toFixed(0)}K</p>
              </div>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full"
                style={{ width: `${getTargetProgress(teamStats.totalRevenue, teamStats.totalTarget)}%` }}
              />
            </div>
            <p className="text-blue-200 text-sm mt-2">
              {getTargetProgress(teamStats.totalRevenue, teamStats.totalTarget).toFixed(1)}% of ₹{(teamStats.totalTarget / 1000).toFixed(0)}K target
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Target className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <p className="text-blue-200 text-sm">Avg Conversion</p>
                <p className="text-2xl font-bold text-white">{teamStats.avgConversion}%</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm">+5% improvement</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-500/20 p-3 rounded-lg">
                <Trophy className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <p className="text-blue-200 text-sm">Top Performer</p>
                <p className="text-lg font-bold text-white">{teamStats.topPerformer}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm">3 achievements</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-6">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">Period</label>
              <div className="flex gap-2">
                {['week', 'month', 'quarter', 'year'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      period === p
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/10 text-blue-200 hover:bg-white/20'
                    }`}
                  >
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg"
              >
                <option value="revenue">Revenue</option>
                <option value="sales">Sales Count</option>
                <option value="conversion">Conversion Rate</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Staff Performance List */}
        <div className="space-y-4">
          {staffPerformance.map((staff, index) => (
            <div key={staff.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="text-4xl">{staff.avatar}</div>
                    {index < 3 && (
                      <div className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{staff.name}</h3>
                    <p className="text-blue-200 text-sm">{staff.role}</p>
                    <div className="flex items-center gap-2 mt-2">
                      {staff.achievements.map((achievement, i) => (
                        <span key={i} className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`flex items-center gap-2 ${staff.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    <TrendingUp className={`w-5 h-5 ${staff.trend === 'down' ? 'rotate-180' : ''}`} />
                    <span className="text-xl font-bold">{staff.growth > 0 ? '+' : ''}{staff.growth}%</span>
                  </div>
                  <p className="text-blue-200 text-sm mt-1">vs last period</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-200 text-sm">Sales Count</span>
                    <ShoppingCart className="w-4 h-4 text-blue-300" />
                  </div>
                  <p className="text-3xl font-bold text-white">{staff.sales.count}</p>
                  <p className="text-blue-200 text-xs mt-1">orders completed</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-200 text-sm">Revenue Generated</span>
                    <DollarSign className="w-4 h-4 text-green-300" />
                  </div>
                  <p className="text-3xl font-bold text-white">₹{(staff.sales.revenue / 1000).toFixed(0)}K</p>
                  <div className="mt-2">
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full"
                        style={{ width: `${getTargetProgress(staff.sales.revenue, staff.sales.target)}%` }}
                      />
                    </div>
                    <p className="text-blue-200 text-xs mt-1">
                      {getTargetProgress(staff.sales.revenue, staff.sales.target).toFixed(1)}% of target
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-200 text-sm">Avg Order Value</span>
                    <DollarSign className="w-4 h-4 text-purple-300" />
                  </div>
                  <p className="text-3xl font-bold text-white">₹{staff.metrics.avgOrderValue}</p>
                  <p className="text-blue-200 text-xs mt-1">per transaction</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-blue-200 text-sm mb-1">Conversion Rate</p>
                  <p className="text-xl font-bold text-white">{staff.metrics.conversionRate}%</p>
                </div>

                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-blue-200 text-sm mb-1">Customer Rating</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <p className="text-xl font-bold text-white">{staff.metrics.customerRating}</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3 text-center col-span-2 md:col-span-1">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
