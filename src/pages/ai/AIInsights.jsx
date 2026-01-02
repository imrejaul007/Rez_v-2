import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Sparkles, TrendingUp, TrendingDown, ShoppingBag, DollarSign,
  Calendar, BarChart3, PieChart, Clock, Target, Award, Zap, Eye,
  Heart, Tag, Package, ArrowUpRight, ArrowDownRight, ChevronRight,
  Download, Share2, Filter, RefreshCw, Star, Users, Percent
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const AIInsights = () => {
  const navigate = useNavigate();

  const [timeRange, setTimeRange] = useState('month'); // week, month, year
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [overviewStats, setOverviewStats] = useState({
    totalSpent: 45680,
    totalSaved: 12340,
    totalOrders: 48,
    avgOrderValue: 951,
    trends: {
      spent: -12, // percentage change
      saved: +24,
      orders: -5,
      avgOrder: +8
    }
  });

  const [spendingBreakdown, setSpendingBreakdown] = useState([
    { category: 'Electronics', amount: 18500, percentage: 40, color: 'blue', items: 12 },
    { category: 'Grocery', amount: 12200, percentage: 27, color: 'green', items: 24 },
    { category: 'Fashion', amount: 8900, percentage: 19, color: 'purple', items: 8 },
    { category: 'Beauty', amount: 4080, percentage: 9, color: 'pink', items: 6 },
    { category: 'Others', amount: 2000, percentage: 5, color: 'gray', items: 4 }
  ]);

  const [savingsInsights, setSavingsInsights] = useState([
    {
      id: 1,
      title: 'Best Deal of the Month',
      description: 'You saved ₹3,500 on Samsung Galaxy Buds',
      amount: 3500,
      percentage: 60,
      icon: Award,
      color: 'green'
    },
    {
      id: 2,
      title: 'Cashback Earned',
      description: 'Total cashback from all purchases',
      amount: 2840,
      percentage: null,
      icon: DollarSign,
      color: 'blue'
    },
    {
      id: 3,
      title: 'Coupon Savings',
      description: 'Savings from applied coupons',
      amount: 1650,
      percentage: null,
      icon: Tag,
      color: 'purple'
    }
  ]);

  const [shoppingPatterns, setShoppingPatterns] = useState({
    mostActiveDay: 'Saturday',
    mostActiveTime: '8:00 PM - 10:00 PM',
    avgItemsPerOrder: 3.2,
    preferredCategories: ['Electronics', 'Grocery'],
    topMerchants: ['Amazon', 'Flipkart', 'Myntra'],
    returnRate: 4.2
  });

  const [monthlyTrend, setMonthlyTrend] = useState([
    { month: 'Aug', spending: 38000, savings: 9200 },
    { month: 'Sep', spending: 42000, savings: 10500 },
    { month: 'Oct', spending: 39500, savings: 11200 },
    { month: 'Nov', spending: 48000, savings: 13800 },
    { month: 'Dec', spending: 45680, savings: 12340 }
  ]);

  const [aiPredictions, setAiPredictions] = useState([
    {
      id: 1,
      type: 'spending',
      title: 'Next Month Forecast',
      prediction: '₹48,500',
      confidence: 87,
      description: 'Based on your purchase patterns',
      icon: TrendingUp
    },
    {
      id: 2,
      type: 'savings',
      title: 'Potential Savings',
      prediction: '₹3,200',
      confidence: 92,
      description: 'Opportunities identified by AI',
      icon: Target
    },
    {
      id: 3,
      type: 'behavior',
      title: 'Shopping Frequency',
      prediction: '12-15 orders',
      confidence: 89,
      description: 'Expected orders next month',
      icon: ShoppingBag
    }
  ]);

  const [topProducts, setTopProducts] = useState([
    { id: 1, name: 'Organic Milk', purchases: 12, spent: 816, image: '🥛' },
    { id: 2, name: 'Coffee Beans', purchases: 8, spent: 3600, image: '☕' },
    { id: 3, name: 'Face Moisturizer', purchases: 4, spent: 2396, image: '💧' },
    { id: 4, name: 'Protein Powder', purchases: 3, spent: 5697, image: '💪' }
  ]);

  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      title: 'Optimize Grocery Shopping',
      description: 'Switch to bulk buying for milk and save ₹240/month',
      impact: 240,
      effort: 'low',
      icon: ShoppingBag,
      color: 'green'
    },
    {
      id: 2,
      title: 'Use Price Alerts',
      description: 'Set alerts for your wishlist items to catch best deals',
      impact: 800,
      effort: 'medium',
      icon: Zap,
      color: 'blue'
    },
    {
      id: 3,
      title: 'Consolidate Orders',
      description: 'Group purchases to reduce delivery fees',
      impact: 120,
      effort: 'low',
      icon: Package,
      color: 'purple'
    }
  ]);

  // API Comment: GET /api/ai/insights/overview
  // ML Model: Statistical analysis + trend detection
  // Response: { spending: {}, savings: {}, patterns: {}, predictions: {} }
  const fetchInsights = async () => {
    // Fetch comprehensive AI insights
  };

  // API Comment: GET /api/ai/insights/predictions
  // ML Model: Time-series forecasting for spending patterns
  // Response: { nextMonth: {}, trends: [], confidence: {} }
  const getPredictions = async () => {
    // Get AI predictions
  };

  // API Comment: GET /api/ai/insights/recommendations
  // ML Model: Optimization algorithm for savings opportunities
  // Response: { recommendations: [], impact: {}, priority: [] }
  const getSavingsRecommendations = async () => {
    // Get personalized recommendations
  };

  // API Comment: POST /api/ai/insights/export
  // Payload: { userId: string, timeRange: string, format: 'pdf'|'csv' }
  const exportInsights = () => {
    // Export insights report
  };

  const getColorClass = (color) => {
    const colors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      pink: 'bg-pink-500',
      gray: 'bg-gray-400'
    };
    return colors[color] || 'bg-gray-500';
  };

  const getTrendIcon = (trend) => {
    if (trend > 0) return <ArrowUpRight className="w-4 h-4 text-green-600" />;
    if (trend < 0) return <ArrowDownRight className="w-4 h-4 text-red-600" />;
    return null;
  };

  const getTrendColor = (trend) => {
    if (trend > 0) return 'text-green-600';
    if (trend < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">AI Shopping Insights</h1>
            <p className="text-xs text-indigo-100">Data-driven shopping analytics</p>
          </div>
          <button onClick={exportInsights} className="p-2 hover:bg-white/10 rounded-lg">
            <Download className="w-5 h-5" />
          </button>
        </div>

        {/* Time Range Selector */}
        <div className="flex gap-2">
          {['week', 'month', 'year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                timeRange === range
                  ? 'bg-white text-indigo-600'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Stats */}
      <div className="p-4">
        <h2 className="font-semibold text-gray-900 mb-3">Overview</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 border">
            <div className="flex items-center justify-between mb-2">
              <ShoppingBag className="w-5 h-5 text-indigo-600" />
              {getTrendIcon(overviewStats.trends.spent)}
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              ₹{overviewStats.totalSpent.toLocaleString()}
            </p>
            <p className="text-xs text-gray-600 mb-1">Total Spent</p>
            <span className={`text-xs font-semibold ${getTrendColor(overviewStats.trends.spent)}`}>
              {Math.abs(overviewStats.trends.spent)}% vs last period
            </span>
          </div>

          <div className="bg-white rounded-xl p-4 border">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              {getTrendIcon(overviewStats.trends.saved)}
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              ₹{overviewStats.totalSaved.toLocaleString()}
            </p>
            <p className="text-xs text-gray-600 mb-1">Total Saved</p>
            <span className={`text-xs font-semibold ${getTrendColor(overviewStats.trends.saved)}`}>
              {Math.abs(overviewStats.trends.saved)}% vs last period
            </span>
          </div>

          <div className="bg-white rounded-xl p-4 border">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-5 h-5 text-blue-600" />
              {getTrendIcon(overviewStats.trends.orders)}
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">{overviewStats.totalOrders}</p>
            <p className="text-xs text-gray-600 mb-1">Total Orders</p>
            <span className={`text-xs font-semibold ${getTrendColor(overviewStats.trends.orders)}`}>
              {Math.abs(overviewStats.trends.orders)}% vs last period
            </span>
          </div>

          <div className="bg-white rounded-xl p-4 border">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              {getTrendIcon(overviewStats.trends.avgOrder)}
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              ₹{overviewStats.avgOrderValue.toLocaleString()}
            </p>
            <p className="text-xs text-gray-600 mb-1">Avg Order Value</p>
            <span className={`text-xs font-semibold ${getTrendColor(overviewStats.trends.avgOrder)}`}>
              {Math.abs(overviewStats.trends.avgOrder)}% vs last period
            </span>
          </div>
        </div>
      </div>

      {/* AI Predictions */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          <h2 className="font-semibold text-gray-900">AI Predictions</h2>
        </div>

        <div className="space-y-3">
          {aiPredictions.map((prediction) => {
            const Icon = prediction.icon;
            return (
              <div key={prediction.id} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200">
                <div className="flex gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg h-fit">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">{prediction.title}</h3>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                        {prediction.confidence}% confident
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-indigo-600 mb-1">{prediction.prediction}</p>
                    <p className="text-xs text-gray-600">{prediction.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Spending Breakdown */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Spending by Category</h2>
          <PieChart className="w-5 h-5 text-gray-400" />
        </div>

        <div className="bg-white rounded-xl border overflow-hidden">
          {spendingBreakdown.map((category, index) => (
            <div
              key={index}
              className={`p-4 ${index < spendingBreakdown.length - 1 ? 'border-b' : ''}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-3 h-3 rounded-full ${getColorClass(category.color)}`} />
                <span className="flex-1 font-medium text-gray-900">{category.category}</span>
                <span className="font-bold text-gray-900">₹{category.amount.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div
                    className={`h-full rounded-full ${getColorClass(category.color)}`}
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-500">{category.percentage}%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{category.items} items purchased</p>
            </div>
          ))}
        </div>
      </div>

      {/* Savings Insights */}
      <div className="p-4">
        <h2 className="font-semibold text-gray-900 mb-3">Savings Breakdown</h2>
        <div className="space-y-3">
          {savingsInsights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div
                key={insight.id}
                className={`bg-white rounded-xl p-4 border border-${insight.color}-200`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 bg-${insight.color}-50 rounded-lg`}>
                    <Icon className={`w-5 h-5 text-${insight.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{insight.title}</h3>
                    <p className="text-xs text-gray-600">{insight.description}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xl font-bold text-${insight.color}-600`}>
                      ₹{insight.amount.toLocaleString()}
                    </p>
                    {insight.percentage && (
                      <p className="text-xs text-gray-500">{insight.percentage}% saved</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Shopping Patterns */}
      <div className="p-4">
        <h2 className="font-semibold text-gray-900 mb-3">Shopping Patterns</h2>
        <div className="bg-white rounded-xl border p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-indigo-600" />
                <span className="text-xs text-gray-600">Most Active Day</span>
              </div>
              <p className="font-semibold text-gray-900">{shoppingPatterns.mostActiveDay}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span className="text-xs text-gray-600">Peak Shopping Time</span>
              </div>
              <p className="font-semibold text-gray-900">{shoppingPatterns.mostActiveTime}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShoppingBag className="w-4 h-4 text-indigo-600" />
                <span className="text-xs text-gray-600">Avg Items/Order</span>
              </div>
              <p className="font-semibold text-gray-900">{shoppingPatterns.avgItemsPerOrder}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Percent className="w-4 h-4 text-indigo-600" />
                <span className="text-xs text-gray-600">Return Rate</span>
              </div>
              <p className="font-semibold text-gray-900">{shoppingPatterns.returnRate}%</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t">
            <p className="text-xs text-gray-600 mb-2">Top Merchants</p>
            <div className="flex flex-wrap gap-2">
              {shoppingPatterns.topMerchants.map((merchant, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                >
                  {merchant}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Most Purchased</h2>
          <button className="text-sm text-indigo-600 font-medium">View All</button>
        </div>

        <div className="space-y-2">
          {topProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl p-3 border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{product.image}</span>
                <div>
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.purchases} purchases</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">₹{product.spent}</p>
                <p className="text-xs text-gray-500">Total spent</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-indigo-600" />
          <h2 className="font-semibold text-gray-900">AI Recommendations</h2>
        </div>

        <div className="space-y-3">
          {recommendations.map((rec) => {
            const Icon = rec.icon;
            return (
              <div
                key={rec.id}
                className={`bg-gradient-to-r ${
                  rec.color === 'green'
                    ? 'from-green-50 to-emerald-50 border-green-200'
                    : rec.color === 'blue'
                    ? 'from-blue-50 to-cyan-50 border-blue-200'
                    : 'from-purple-50 to-pink-50 border-purple-200'
                } rounded-xl p-4 border`}
              >
                <div className="flex gap-3">
                  <Icon
                    className={`w-5 h-5 ${
                      rec.color === 'green'
                        ? 'text-green-600'
                        : rec.color === 'blue'
                        ? 'text-blue-600'
                        : 'text-purple-600'
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{rec.title}</h3>
                      <span className={`px-2 py-0.5 ${
                        rec.effort === 'low' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      } text-xs font-medium rounded-full`}>
                        {rec.effort} effort
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{rec.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-lg font-bold ${
                        rec.color === 'green'
                          ? 'text-green-600'
                          : rec.color === 'blue'
                          ? 'text-blue-600'
                          : 'text-purple-600'
                      }`}>
                        Save ₹{rec.impact}/month
                      </span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Export Actions */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={exportInsights}
            className="flex items-center justify-center gap-2 p-4 bg-white border border-indigo-200 rounded-xl hover:border-indigo-400 transition-all"
          >
            <Download className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-semibold text-gray-900">Export PDF</span>
          </button>
          <button className="flex items-center justify-center gap-2 p-4 bg-white border border-indigo-200 rounded-xl hover:border-indigo-400 transition-all">
            <Share2 className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-semibold text-gray-900">Share</span>
          </button>
        </div>
      </div>

      <BottomNavManager currentPage="profile" />
    </div>
  );
};

export default AIInsights;
