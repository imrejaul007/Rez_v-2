import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Users, Tag, ShoppingCart, DollarSign,
  Eye, Heart, Share2, Clock, CheckCircle, XCircle,
  AlertCircle, Star, ArrowUpRight, ArrowDownRight,
  Plus, BarChart3, Calendar, MapPin
} from 'lucide-react';

export default function MerchantDashboard() {
  const [merchantInfo] = useState({
    name: 'The Coffee House',
    logo: '☕',
    rating: 4.5,
    totalReviews: 230,
    status: 'active',
    package: 'Premium'
  });

  const [stats, setStats] = useState({
    totalOffers: { count: 12, active: 8, pending: 2, expired: 2 },
    totalRedemptions: { count: 1234, growth: 15.2, thisMonth: 234 },
    revenue: { amount: 45678, growth: 12.5, thisMonth: 8900 },
    customers: { total: 456, new: 45, returning: 411 },
    views: { count: 5678, growth: 8.3 },
    saves: { count: 234, growth: 12.1 }
  });

  const [recentOffers, setRecentOffers] = useState([
    {
      id: 1,
      title: '50% OFF on All Pizzas',
      status: 'active',
      views: 1234,
      saves: 89,
      redemptions: 156,
      validUntil: '2024-01-30',
      performance: 'high'
    },
    {
      id: 2,
      title: 'Buy 1 Get 1 Free Coffee',
      status: 'active',
      views: 2345,
      saves: 178,
      redemptions: 245,
      validUntil: '2024-02-15',
      performance: 'high'
    },
    {
      id: 3,
      title: '30% OFF on Burgers',
      status: 'pending',
      views: 0,
      saves: 0,
      redemptions: 0,
      validUntil: '2024-02-28',
      performance: 'pending'
    },
    {
      id: 4,
      title: 'Lunch Special - 40% OFF',
      status: 'active',
      views: 456,
      saves: 34,
      redemptions: 67,
      validUntil: '2024-01-25',
      performance: 'medium'
    }
  ]);

  const [recentTransactions, setRecentTransactions] = useState([
    {
      id: 1,
      orderId: 'ORD-2024-001',
      customer: 'John Doe',
      offer: '50% OFF Pizza',
      amount: 599,
      discount: 300,
      finalAmount: 299,
      coinsEarned: 50,
      time: '2 hours ago',
      status: 'completed'
    },
    {
      id: 2,
      orderId: 'ORD-2024-002',
      customer: 'Jane Smith',
      offer: 'Buy 1 Get 1 Coffee',
      amount: 400,
      discount: 200,
      finalAmount: 200,
      coinsEarned: 40,
      time: '3 hours ago',
      status: 'completed'
    },
    {
      id: 3,
      orderId: 'ORD-2024-003',
      customer: 'Mike Johnson',
      offer: 'Lunch Special',
      amount: 800,
      discount: 320,
      finalAmount: 480,
      coinsEarned: 80,
      time: '5 hours ago',
      status: 'completed'
    }
  ]);

  const [customerInsights, setCustomerInsights] = useState({
    vip: { count: 45, avgSpend: 3456, contribution: 45 },
    regular: { count: 311, avgSpend: 1234, contribution: 40 },
    atRisk: { count: 100, avgSpend: 567, lostRevenue: 56700 }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center text-3xl">
                {merchantInfo.logo}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{merchantInfo.name}</h1>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">{merchantInfo.rating}</span>
                    <span className="text-sm text-gray-500">({merchantInfo.totalReviews} reviews)</span>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    {merchantInfo.status}
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                    {merchantInfo.package}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                to="/merchant/offers/create"
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Create Offer
              </Link>
              <Link
                to="/merchant/analytics"
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <BarChart3 className="w-5 h-5 inline mr-2" />
                Analytics
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Active Offers */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Tag className="w-6 h-6 text-orange-600" />
              </div>
              <Link to="/merchant/offers" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                View All →
              </Link>
            </div>
            <p className="text-gray-600 text-sm font-medium">Active Offers</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {stats.totalOffers.active}
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <span className="text-gray-600">{stats.totalOffers.pending} pending</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{stats.totalOffers.count} total</span>
            </div>
          </div>

          {/* Total Redemptions */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-green-600" />
              </div>
              <span className="flex items-center text-sm text-green-600">
                <ArrowUpRight className="w-4 h-4" />
                {stats.totalRedemptions.growth}%
              </span>
            </div>
            <p className="text-gray-600 text-sm font-medium">Total Redemptions</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {stats.totalRedemptions.count.toLocaleString()}
            </p>
            <div className="mt-4 text-sm text-gray-600">
              {stats.totalRedemptions.thisMonth} this month
            </div>
          </div>

          {/* Revenue */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="flex items-center text-sm text-green-600">
                <ArrowUpRight className="w-4 h-4" />
                {stats.revenue.growth}%
              </span>
            </div>
            <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              ₹{(stats.revenue.amount / 1000).toFixed(1)}K
            </p>
            <div className="mt-4 text-sm text-gray-600">
              ₹{(stats.revenue.thisMonth / 1000).toFixed(1)}K this month
            </div>
          </div>

          {/* Total Customers */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <Link to="/merchant/customers" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                View All →
              </Link>
            </div>
            <p className="text-gray-600 text-sm font-medium">Total Customers</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {stats.customers.total}
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <span className="text-green-600">{stats.customers.new} new</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{stats.customers.returning} returning</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Engagement Stats */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Engagement</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Eye className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Views</p>
                    <p className="text-xl font-bold text-gray-900">{stats.views.count.toLocaleString()}</p>
                  </div>
                </div>
                <span className="flex items-center text-sm text-green-600">
                  <ArrowUpRight className="w-4 h-4" />
                  {stats.views.growth}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Saves</p>
                    <p className="text-xl font-bold text-gray-900">{stats.saves.count}</p>
                  </div>
                </div>
                <span className="flex items-center text-sm text-green-600">
                  <ArrowUpRight className="w-4 h-4" />
                  {stats.saves.growth}%
                </span>
              </div>
            </div>
          </div>

          {/* Customer Insights */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Customer Insights</h3>
              <Link to="/merchant/customers" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                View Details →
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                  <span className="text-sm font-medium text-yellow-900">VIP Customers</span>
                </div>
                <p className="text-2xl font-bold text-yellow-900">{customerInsights.vip.count}</p>
                <p className="text-sm text-yellow-700 mt-1">Avg: ₹{customerInsights.vip.avgSpend}/mo</p>
                <p className="text-xs text-yellow-600 mt-1">{customerInsights.vip.contribution}% of revenue</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Regular</span>
                </div>
                <p className="text-2xl font-bold text-blue-900">{customerInsights.regular.count}</p>
                <p className="text-sm text-blue-700 mt-1">Avg: ₹{customerInsights.regular.avgSpend}/mo</p>
                <p className="text-xs text-blue-600 mt-1">{customerInsights.regular.contribution}% of revenue</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium text-red-900">At-Risk</span>
                </div>
                <p className="text-2xl font-bold text-red-900">{customerInsights.atRisk.count}</p>
                <p className="text-sm text-red-700 mt-1">30+ days inactive</p>
                <button className="mt-2 px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-lg hover:bg-red-700">
                  Send Win-Back Offer
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Offers */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Your Offers</h2>
                <Link to="/merchant/offers" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  Manage All →
                </Link>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {recentOffers.map((offer) => (
                <div key={offer.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{offer.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          offer.status === 'active' ? 'bg-green-100 text-green-700' :
                          offer.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {offer.status}
                        </span>
                        <span className="text-xs text-gray-500">Valid until: {offer.validUntil}</span>
                      </div>
                    </div>
                    {offer.performance !== 'pending' && (
                      <span className={`px-2 py-1 text-xs font-medium rounded-lg ${
                        offer.performance === 'high' ? 'bg-green-50 text-green-700' :
                        'bg-yellow-50 text-yellow-700'
                      }`}>
                        {offer.performance === 'high' ? '🔥 High' : '📊 Medium'}
                      </span>
                    )}
                  </div>
                  {offer.status !== 'pending' && (
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          Views
                        </p>
                        <p className="font-semibold text-gray-900">{offer.views.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          Saves
                        </p>
                        <p className="font-semibold text-gray-900">{offer.saves}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 flex items-center gap-1">
                          <ShoppingCart className="w-3 h-3" />
                          Redeemed
                        </p>
                        <p className="font-semibold text-gray-900">{offer.redemptions}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
                <Link to="/merchant/transactions" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  View All →
                </Link>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {recentTransactions.map((txn) => (
                <div key={txn.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-900">{txn.orderId}</p>
                      <p className="text-sm text-gray-600">{txn.customer}</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      {txn.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{txn.offer}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex gap-4">
                      <span className="text-gray-500">₹{txn.amount}</span>
                      <span className="text-red-600">-₹{txn.discount}</span>
                      <span className="font-semibold text-gray-900">₹{txn.finalAmount}</span>
                    </div>
                    <span className="text-xs text-gray-500">{txn.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/merchant/offers/create"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
            >
              <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200">
                <Plus className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Create Offer</p>
                <p className="text-sm text-gray-600">New promotion</p>
              </div>
            </Link>

            <Link
              to="/merchant/analytics"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all group"
            >
              <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200">
                <BarChart3 className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">View Analytics</p>
                <p className="text-sm text-gray-600">Performance data</p>
              </div>
            </Link>

            <Link
              to="/merchant/customers"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group"
            >
              <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Customers</p>
                <p className="text-sm text-gray-600">View insights</p>
              </div>
            </Link>

            <Link
              to="/merchant/reviews"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition-all group"
            >
              <div className="bg-yellow-100 p-3 rounded-lg group-hover:bg-yellow-200">
                <Star className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Reviews</p>
                <p className="text-sm text-gray-600">{merchantInfo.totalReviews} total</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
