import { useState } from 'react';
import { TrendingUp, Package, DollarSign, Users, Star, Clock, ThumbsUp, Award, BarChart3, Calendar, ArrowUp, ArrowDown } from 'lucide-react';

export default function MerchantPerformance() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const performanceMetrics = {
    week: {
      sales: { value: 1250000, change: 12.5, trend: 'up' },
      orders: { value: 312, change: 8.3, trend: 'up' },
      customers: { value: 245, change: -3.2, trend: 'down' },
      avgOrderValue: { value: 4006, change: 5.1, trend: 'up' },
      rating: { value: 4.6, change: 0.2, trend: 'up' },
      fulfillmentRate: { value: 96.5, change: 1.2, trend: 'up' },
      responseTime: { value: 28, change: -12.5, trend: 'up' },
      returnRate: { value: 8.5, change: -2.1, trend: 'up' }
    },
    month: {
      sales: { value: 4875000, change: 18.7, trend: 'up' },
      orders: { value: 1245, change: 15.2, trend: 'up' },
      customers: { value: 892, change: 10.5, trend: 'up' },
      avgOrderValue: { value: 3916, change: 3.2, trend: 'up' },
      rating: { value: 4.5, change: 0.1, trend: 'up' },
      fulfillmentRate: { value: 95.8, change: 0.8, trend: 'up' },
      responseTime: { value: 32, change: -8.3, trend: 'up' },
      returnRate: { value: 9.2, change: -1.5, trend: 'up' }
    },
    quarter: {
      sales: { value: 14250000, change: 22.3, trend: 'up' },
      orders: { value: 3650, change: 19.8, trend: 'up' },
      customers: { value: 2456, change: 16.7, trend: 'up' },
      avgOrderValue: { value: 3904, change: 2.1, trend: 'up' },
      rating: { value: 4.4, change: -0.1, trend: 'down' },
      fulfillmentRate: { value: 94.5, change: -1.2, trend: 'down' },
      responseTime: { value: 35, change: -5.4, trend: 'up' },
      returnRate: { value: 10.1, change: 1.2, trend: 'down' }
    }
  };

  const currentMetrics = performanceMetrics[selectedPeriod];

  const scorecard = {
    overall: 87,
    categories: [
      { name: 'Order Fulfillment', score: 96, weight: 30, description: 'On-time acceptance & delivery' },
      { name: 'Customer Satisfaction', score: 92, weight: 25, description: 'Ratings & reviews' },
      { name: 'Product Quality', score: 88, weight: 20, description: 'Returns & complaints' },
      { name: 'Response Time', score: 85, weight: 15, description: 'Order acceptance speed' },
      { name: 'Catalog Quality', score: 78, weight: 10, description: 'Product info & images' }
    ]
  };

  const insights = [
    {
      type: 'positive',
      title: 'Strong Sales Growth',
      description: 'Your sales are up 18.7% this month compared to last month.',
      icon: TrendingUp,
      color: 'green'
    },
    {
      type: 'warning',
      title: 'Catalog Optimization Needed',
      description: 'Your catalog quality score is below average. Add more product images and detailed descriptions.',
      icon: Package,
      color: 'yellow'
    },
    {
      type: 'positive',
      title: 'Excellent Customer Ratings',
      description: 'Your 4.6 rating is in the top 10% of merchants in your category.',
      icon: Star,
      color: 'green'
    },
    {
      type: 'info',
      title: 'Reduce Response Time',
      description: 'Accept orders faster to improve customer experience. Target: <20 mins',
      icon: Clock,
      color: 'blue'
    }
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 75) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <BarChart3 className="w-8 h-8 text-indigo-600" />
              Performance Dashboard & Merchant Scorecard
            </h1>
            <p className="text-gray-600 mt-1">Track your performance metrics, KPIs, and improvement areas</p>
          </div>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
          </select>
        </div>
      </div>

      {/* Merchant Scorecard */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-6 mb-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Your Merchant Score</h2>
            <p className="text-indigo-100 mt-1">Based on performance across 5 categories</p>
          </div>
          <div className="text-right">
            <div className="text-5xl font-bold">{scorecard.overall}</div>
            <div className="text-indigo-100 text-sm">out of 100</div>
          </div>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-indigo-100">Overall Performance</span>
            <span className="text-sm font-medium">{scorecard.overall}%</span>
          </div>
          <div className="w-full bg-white bg-opacity-30 rounded-full h-3">
            <div
              className="bg-white h-3 rounded-full transition-all duration-500"
              style={{ width: `${scorecard.overall}%` }}
            />
          </div>
        </div>
      </div>

      {/* Performance Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {scorecard.categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-700">{category.name}</h3>
              <span className={`text-xl font-bold ${getScoreColor(category.score)}`}>
                {category.score}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className={`h-2 rounded-full ${
                  category.score >= 90 ? 'bg-green-500' :
                  category.score >= 75 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${category.score}%` }}
              />
            </div>
            <p className="text-xs text-gray-500">{category.description}</p>
            <div className="text-xs text-gray-400 mt-2">Weight: {category.weight}%</div>
          </div>
        ))}
      </div>

      {/* KPI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-green-100 p-2 rounded-lg">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <span className={`flex items-center gap-1 text-sm font-medium ${
              currentMetrics.sales.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {currentMetrics.sales.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              {currentMetrics.sales.change}%
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">₹{(currentMetrics.sales.value / 100000).toFixed(1)}L</div>
          <div className="text-sm text-gray-600 mt-1">Total Sales</div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <span className={`flex items-center gap-1 text-sm font-medium ${
              currentMetrics.orders.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {currentMetrics.orders.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              {currentMetrics.orders.change}%
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{currentMetrics.orders.value}</div>
          <div className="text-sm text-gray-600 mt-1">Total Orders</div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <span className={`flex items-center gap-1 text-sm font-medium ${
              currentMetrics.customers.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {currentMetrics.customers.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              {Math.abs(currentMetrics.customers.change)}%
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{currentMetrics.customers.value}</div>
          <div className="text-sm text-gray-600 mt-1">Unique Customers</div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
            </div>
            <span className={`flex items-center gap-1 text-sm font-medium ${
              currentMetrics.avgOrderValue.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {currentMetrics.avgOrderValue.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              {currentMetrics.avgOrderValue.change}%
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">₹{currentMetrics.avgOrderValue.value.toLocaleString()}</div>
          <div className="text-sm text-gray-600 mt-1">Avg Order Value</div>
        </div>
      </div>

      {/* Operational Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-600">Customer Rating</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">{currentMetrics.rating.value}</div>
          <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
            <ArrowUp className="w-3 h-3" />
            +{currentMetrics.rating.change} from last period
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <ThumbsUp className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">Fulfillment Rate</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">{currentMetrics.fulfillmentRate.value}%</div>
          <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
            <ArrowUp className="w-3 h-3" />
            +{currentMetrics.fulfillmentRate.change}% from last period
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <Clock className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">Avg Response Time</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">{currentMetrics.responseTime.value}m</div>
          <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
            <ArrowDown className="w-3 h-3" />
            {Math.abs(currentMetrics.responseTime.change)}% faster
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <Package className="w-5 h-5 text-red-500" />
            <span className="text-sm text-gray-600">Return Rate</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">{currentMetrics.returnRate.value}%</div>
          <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
            <ArrowDown className="w-3 h-3" />
            {Math.abs(currentMetrics.returnRate.change)}% reduction
          </div>
        </div>
      </div>

      {/* Insights & Recommendations */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-indigo-600" />
          Performance Insights & Recommendations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            const colorMap = {
              green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', text: 'text-green-900' },
              yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', icon: 'text-yellow-600', text: 'text-yellow-900' },
              blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', text: 'text-blue-900' },
              red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-600', text: 'text-red-900' }
            };
            const colors = colorMap[insight.color];

            return (
              <div key={index} className={`${colors.bg} border ${colors.border} rounded-lg p-4`}>
                <div className="flex items-start gap-3">
                  <Icon className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                  <div>
                    <h3 className={`font-semibold ${colors.text}`}>{insight.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">{insight.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
