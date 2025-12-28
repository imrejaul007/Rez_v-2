import { useState } from 'react';
import { Repeat, TrendingUp, Users, DollarSign, Calendar, Package, Play, Pause, X, Plus, Edit, Clock, CheckCircle, AlertCircle, Gift, Percent } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantSubscriptions() {
  const [activeTab, setActiveTab] = useState('active');
  const [showAddModal, setShowAddModal] = useState(false);

  // Mock subscription data
  const subscriptionPlans = [
    {
      id: 'sub-001',
      productName: 'Organic Coffee Beans - Monthly',
      frequency: 'monthly',
      price: 499,
      discount: 10,
      activeSubscribers: 245,
      revenue: 122255,
      churnRate: 4.2,
      avgLifetime: 8.5,
      status: 'active',
      deliveryDay: 1,
      createdDate: '2025-01-15'
    },
    {
      id: 'sub-002',
      productName: 'Fresh Vegetables Box - Weekly',
      frequency: 'weekly',
      price: 299,
      discount: 15,
      activeSubscribers: 178,
      revenue: 53222,
      churnRate: 6.8,
      avgLifetime: 12.3,
      status: 'active',
      deliveryDay: 'Saturday',
      createdDate: '2024-11-20'
    },
    {
      id: 'sub-003',
      productName: 'Premium Tea Collection - Bi-weekly',
      frequency: 'bi-weekly',
      price: 699,
      discount: 12,
      activeSubscribers: 89,
      revenue: 62211,
      churnRate: 5.1,
      avgLifetime: 10.2,
      status: 'active',
      deliveryDay: 'Monday',
      createdDate: '2024-12-01'
    },
    {
      id: 'sub-004',
      productName: 'Snack Box - Monthly',
      frequency: 'monthly',
      price: 399,
      discount: 8,
      activeSubscribers: 0,
      revenue: 0,
      churnRate: 0,
      avgLifetime: 0,
      status: 'paused',
      deliveryDay: 15,
      createdDate: '2025-01-01'
    }
  ];

  // Active subscriptions (customer view)
  const activeSubscriptions = [
    {
      id: 'as-001',
      customer: 'Priya Sharma',
      plan: 'Organic Coffee Beans - Monthly',
      startDate: '2024-06-15',
      nextDelivery: '2026-01-15',
      totalOrders: 7,
      lifetimeValue: 3493,
      status: 'active',
      paymentMethod: 'Card •••• 4532'
    },
    {
      id: 'as-002',
      customer: 'Rahul Mehta',
      plan: 'Fresh Vegetables Box - Weekly',
      startDate: '2024-10-01',
      nextDelivery: '2026-01-04',
      totalOrders: 13,
      lifetimeValue: 3887,
      status: 'active',
      paymentMethod: 'UPI - rahul@paytm'
    },
    {
      id: 'as-003',
      customer: 'Anjali Desai',
      plan: 'Premium Tea Collection - Bi-weekly',
      startDate: '2024-12-15',
      nextDelivery: '2026-01-12',
      totalOrders: 2,
      lifetimeValue: 1398,
      status: 'active',
      paymentMethod: 'Card •••• 8765'
    },
    {
      id: 'as-004',
      customer: 'Vikram Singh',
      plan: 'Organic Coffee Beans - Monthly',
      startDate: '2024-08-20',
      nextDelivery: '2026-01-20',
      totalOrders: 5,
      lifetimeValue: 2495,
      status: 'paused',
      paymentMethod: 'Wallet'
    }
  ];

  // Performance metrics
  const performanceMetrics = [
    {
      label: 'Active Subscribers',
      value: '512',
      change: '+23.4%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Monthly Recurring Revenue',
      value: '₹2,37,688',
      change: '+15.8%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Avg. Churn Rate',
      value: '5.4%',
      change: '-1.2%',
      trend: 'down',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Avg. Lifetime Value',
      value: '₹8,245',
      change: '+12.3%',
      trend: 'up',
      icon: Package,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const getFrequencyBadge = (frequency) => {
    const frequencyConfig = {
      weekly: { label: 'Weekly', className: 'bg-cyan-100 text-cyan-700' },
      'bi-weekly': { label: 'Bi-weekly', className: 'bg-blue-100 text-blue-700' },
      monthly: { label: 'Monthly', className: 'bg-purple-100 text-purple-700' },
      quarterly: { label: 'Quarterly', className: 'bg-indigo-100 text-indigo-700' }
    };
    const config = frequencyConfig[frequency] || frequencyConfig.monthly;
    return <span className={`px-2 py-1 text-xs rounded-full font-medium ${config.className}`}>{config.label}</span>;
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { label: 'Active', className: 'bg-green-100 text-green-700' },
      paused: { label: 'Paused', className: 'bg-yellow-100 text-yellow-700' },
      cancelled: { label: 'Cancelled', className: 'bg-red-100 text-red-700' }
    };
    const config = statusConfig[status] || statusConfig.active;
    return <span className={`px-2 py-1 text-xs rounded-full font-medium ${config.className}`}>{config.label}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <MerchantNav />
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Repeat className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Subscription Management</h1>
              </div>
              <p className="text-purple-100">Manage recurring orders and subscription plans for D2C products</p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Create Plan
            </button>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendingUp className={`w-4 h-4 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                    {metric.change}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Tabs */}
          <div className="border-b border-gray-200 px-6">
            <div className="flex gap-4">
              {['plans', 'active', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 font-semibold text-sm capitalize border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-purple-600 text-purple-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab === 'active' ? 'Active Subscriptions' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'plans' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subscriptionPlans.map((plan) => (
                    <div key={plan.id} className="border border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{plan.productName}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            {getFrequencyBadge(plan.frequency)}
                            {getStatusBadge(plan.status)}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Edit className="w-5 h-5 text-gray-600" />
                          </button>
                          {plan.status === 'active' ? (
                            <button className="p-2 hover:bg-yellow-100 rounded-lg">
                              <Pause className="w-5 h-5 text-yellow-600" />
                            </button>
                          ) : (
                            <button className="p-2 hover:bg-green-100 rounded-lg">
                              <Play className="w-5 h-5 text-green-600" />
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Price</p>
                          <p className="text-lg font-bold text-gray-900">₹{plan.price}</p>
                          {plan.discount > 0 && (
                            <p className="text-xs text-green-600">{plan.discount}% off retail</p>
                          )}
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Active Subscribers</p>
                          <p className="text-lg font-bold text-gray-900">{plan.activeSubscribers}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">MRR</p>
                          <p className="font-semibold text-gray-900">₹{plan.revenue.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Churn Rate</p>
                          <p className="font-semibold text-gray-900">{plan.churnRate}%</p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Avg. Lifetime:</span>
                          <span className="font-semibold text-gray-900">{plan.avgLifetime} months</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-2">
                          <span className="text-gray-600">Delivery Day:</span>
                          <span className="font-semibold text-gray-900">{plan.deliveryDay}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'active' && (
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Customer</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Plan</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Start Date</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Next Delivery</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Orders</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">LTV</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeSubscriptions.map((subscription) => (
                        <tr key={subscription.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-semibold text-gray-900">{subscription.customer}</p>
                              <p className="text-xs text-gray-600">{subscription.paymentMethod}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-700">{subscription.plan}</td>
                          <td className="py-4 px-4 text-sm text-gray-700">{subscription.startDate}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="w-4 h-4 text-purple-600" />
                              <span className="font-semibold text-gray-900">{subscription.nextDelivery}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm font-semibold text-gray-900">{subscription.totalOrders}</td>
                          <td className="py-4 px-4 text-sm font-semibold text-gray-900">₹{subscription.lifetimeValue.toLocaleString()}</td>
                          <td className="py-4 px-4">{getStatusBadge(subscription.status)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Growth</h3>
                    <div className="h-48 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                      <p className="text-gray-600">MRR growth chart</p>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscriber Retention</h3>
                    <div className="h-48 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                      <p className="text-gray-600">Retention curve</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Cohort Analysis</h3>
                  <div className="h-64 flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-50 rounded-lg">
                    <p className="text-gray-600">Cohort retention table</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscription Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Predictable Revenue</p>
                <p className="text-sm text-gray-600">Steady monthly recurring revenue stream</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Customer Loyalty</p>
                <p className="text-sm text-gray-600">Build long-term relationships with subscribers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Higher LTV</p>
                <p className="text-sm text-gray-600">Increase customer lifetime value</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Plan Modal (placeholder) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Create Subscription Plan</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Plan creation form would go here...</p>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Create Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
