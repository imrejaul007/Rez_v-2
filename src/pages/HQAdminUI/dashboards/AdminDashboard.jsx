import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Store, Tag, ShoppingCart, TrendingUp,
  DollarSign, Activity, AlertCircle, CheckCircle,
  Clock, BarChart3, PieChart, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: { total: 45234, growth: 12.5, new: 234 },
    merchants: { total: 1256, growth: 8.3, pending: 45 },
    offers: { total: 3421, growth: 15.2, pending: 23 },
    orders: { total: 12543, growth: 18.7, today: 456 },
    revenue: { total: 2345678, growth: 22.1, today: 45678 },
    activeUsers: { total: 12345, growth: 5.4 }
  });

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: 'merchant_signup', merchant: 'The Coffee House', time: '5 mins ago', status: 'pending' },
    { id: 2, type: 'offer_submitted', merchant: 'Pizza Paradise', offer: '50% OFF', time: '12 mins ago', status: 'pending' },
    { id: 3, type: 'user_signup', user: 'John Doe', time: '18 mins ago', status: 'completed' },
    { id: 4, type: 'merchant_approved', merchant: 'Burger King', time: '23 mins ago', status: 'completed' },
    { id: 5, type: 'offer_approved', merchant: 'Starbucks', offer: 'Buy 1 Get 1', time: '35 mins ago', status: 'completed' }
  ]);

  const [topMerchants, setTopMerchants] = useState([
    { id: 1, name: 'The Coffee House', orders: 456, revenue: 45678, growth: 23.5 },
    { id: 2, name: 'Pizza Paradise', orders: 423, revenue: 42300, growth: 18.2 },
    { id: 3, name: 'Burger King', orders: 389, revenue: 38900, growth: 15.7 },
    { id: 4, name: 'Starbucks', orders: 345, revenue: 34500, growth: 12.3 },
    { id: 5, name: 'Dominos', orders: 312, revenue: 31200, growth: 10.5 }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/admin/users"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Manage Users
              </Link>
              <Link
                to="/admin/merchants"
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Manage Merchants
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Total Users */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.users.total.toLocaleString()}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`flex items-center text-sm ${stats.users.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stats.users.growth > 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {Math.abs(stats.users.growth)}%
              </span>
              <span className="text-gray-600 text-sm">vs last month</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              {stats.users.new} new users today
            </div>
          </div>

          {/* Total Merchants */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Merchants</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.merchants.total.toLocaleString()}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Store className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`flex items-center text-sm ${stats.merchants.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stats.merchants.growth > 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {Math.abs(stats.merchants.growth)}%
              </span>
              <span className="text-gray-600 text-sm">vs last month</span>
            </div>
            <div className="mt-2">
              <Link to="/admin/merchants?status=pending" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                {stats.merchants.pending} pending approval →
              </Link>
            </div>
          </div>

          {/* Total Offers */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Offers</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.offers.total.toLocaleString()}
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Tag className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`flex items-center text-sm ${stats.offers.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stats.offers.growth > 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {Math.abs(stats.offers.growth)}%
              </span>
              <span className="text-gray-600 text-sm">vs last month</span>
            </div>
            <div className="mt-2">
              <Link to="/admin/offers?status=pending" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                {stats.offers.pending} pending review →
              </Link>
            </div>
          </div>

          {/* Total Orders */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.orders.total.toLocaleString()}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`flex items-center text-sm ${stats.orders.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stats.orders.growth > 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {Math.abs(stats.orders.growth)}%
              </span>
              <span className="text-gray-600 text-sm">vs last month</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              {stats.orders.today} orders today
            </div>
          </div>

          {/* Total Revenue */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ₹{(stats.revenue.total / 100000).toFixed(1)}L
                </p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`flex items-center text-sm ${stats.revenue.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stats.revenue.growth > 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {Math.abs(stats.revenue.growth)}%
              </span>
              <span className="text-gray-600 text-sm">vs last month</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              ₹{(stats.revenue.today / 1000).toFixed(1)}K today
            </div>
          </div>

          {/* Active Users */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.activeUsers.total.toLocaleString()}
                </p>
              </div>
              <div className="bg-teal-100 p-3 rounded-lg">
                <Activity className="w-6 h-6 text-teal-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`flex items-center text-sm ${stats.activeUsers.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stats.activeUsers.growth > 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {Math.abs(stats.activeUsers.growth)}%
              </span>
              <span className="text-gray-600 text-sm">vs last week</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              Last 7 days
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                <Link to="/admin/activity" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  View All →
                </Link>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      activity.status === 'pending' ? 'bg-yellow-100' : 'bg-green-100'
                    }`}>
                      {activity.status === 'pending' ? (
                        <Clock className="w-4 h-4 text-yellow-600" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.type === 'merchant_signup' && `New merchant: ${activity.merchant}`}
                        {activity.type === 'offer_submitted' && `Offer submitted: ${activity.offer} by ${activity.merchant}`}
                        {activity.type === 'user_signup' && `New user: ${activity.user}`}
                        {activity.type === 'merchant_approved' && `Merchant approved: ${activity.merchant}`}
                        {activity.type === 'offer_approved' && `Offer approved: ${activity.offer} from ${activity.merchant}`}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                    {activity.status === 'pending' && (
                      <button className="px-3 py-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 rounded-lg">
                        Review
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Merchants */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Top Merchants</h2>
                <Link to="/admin/analytics" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  View Analytics →
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topMerchants.map((merchant, index) => (
                  <div key={merchant.id} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900">{merchant.name}</p>
                      <p className="text-sm text-gray-600">{merchant.orders} orders</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">₹{(merchant.revenue / 1000).toFixed(1)}K</p>
                      <div className="flex items-center gap-1 text-sm text-green-600">
                        <TrendingUp className="w-3 h-3" />
                        {merchant.growth}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/admin/merchants/approve"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
            >
              <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200">
                <Store className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Approve Merchants</p>
                <p className="text-sm text-gray-600">{stats.merchants.pending} pending</p>
              </div>
            </Link>

            <Link
              to="/admin/offers/review"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all group"
            >
              <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200">
                <Tag className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Review Offers</p>
                <p className="text-sm text-gray-600">{stats.offers.pending} pending</p>
              </div>
            </Link>

            <Link
              to="/admin/analytics"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all group"
            >
              <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200">
                <BarChart3 className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">View Analytics</p>
                <p className="text-sm text-gray-600">Platform insights</p>
              </div>
            </Link>

            <Link
              to="/admin/campaigns"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all group"
            >
              <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200">
                <PieChart className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Campaigns</p>
                <p className="text-sm text-gray-600">Create & manage</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
