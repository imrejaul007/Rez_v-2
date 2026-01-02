import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Sparkles, Calendar, TrendingUp, ShoppingCart, Clock,
  AlertCircle, CheckCircle, Star, Zap, Bell, RefreshCw, Plus,
  BarChart3, Package, DollarSign, Target, ChevronRight, Eye
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const AIPredictiveBuying = () => {
  const navigate = useNavigate();

  const [predictions, setPredictions] = useState([
    {
      id: 1,
      product: 'Organic Milk (1L)',
      category: 'Grocery',
      image: '🥛',
      predictedDate: '2026-01-05',
      confidence: 92,
      avgDaysBetween: 7,
      lastPurchased: '2025-12-29',
      estimatedPrice: 68,
      currentPrice: 68,
      stockStatus: 'in-stock',
      autoOrder: false,
      savingsOpportunity: null
    },
    {
      id: 2,
      product: 'Protein Powder (1kg)',
      category: 'Fitness',
      image: '💪',
      predictedDate: '2026-01-08',
      confidence: 88,
      avgDaysBetween: 30,
      lastPurchased: '2025-12-09',
      estimatedPrice: 1899,
      currentPrice: 1699,
      stockStatus: 'in-stock',
      autoOrder: false,
      savingsOpportunity: 200
    },
    {
      id: 3,
      product: 'Face Moisturizer',
      category: 'Beauty',
      image: '💧',
      predictedDate: '2026-01-12',
      confidence: 85,
      avgDaysBetween: 45,
      lastPurchased: '2025-11-28',
      estimatedPrice: 599,
      currentPrice: 499,
      stockStatus: 'in-stock',
      autoOrder: true,
      savingsOpportunity: 100
    },
    {
      id: 4,
      product: 'Coffee Beans (500g)',
      category: 'Grocery',
      image: '☕',
      predictedDate: '2026-01-06',
      confidence: 95,
      avgDaysBetween: 14,
      lastPurchased: '2025-12-23',
      estimatedPrice: 450,
      currentPrice: 450,
      stockStatus: 'low-stock',
      autoOrder: false,
      savingsOpportunity: null
    }
  ]);

  const [autoOrderSettings, setAutoOrderSettings] = useState({
    enabled: true,
    priceThreshold: 10, // percentage
    stockAlert: true,
    dealAlert: true
  });

  const [savingsStats, setSavingsStats] = useState({
    thisMonth: 1250,
    total: 8900,
    predictedNextMonth: 1800,
    itemsSaved: 12
  });

  const [upcomingOrders, setUpcomingOrders] = useState([
    { date: 'Jan 5', count: 2, total: 518 },
    { date: 'Jan 8', count: 1, total: 1699 },
    { date: 'Jan 12', count: 1, total: 499 }
  ]);

  const [aiInsights, setAiInsights] = useState([
    {
      id: 1,
      type: 'savings',
      title: 'Save ₹200 on Protein Powder',
      description: 'Current price is ₹200 lower than usual. Perfect time to buy!',
      action: 'Buy Now',
      icon: DollarSign,
      color: 'green'
    },
    {
      id: 2,
      type: 'alert',
      title: 'Stock Running Low',
      description: 'Coffee Beans inventory is low. Consider ordering soon.',
      action: 'Order',
      icon: AlertCircle,
      color: 'orange'
    },
    {
      id: 3,
      type: 'trend',
      title: 'Price Trend Analysis',
      description: 'Organic Milk prices stable for next 2 weeks.',
      action: 'View Trend',
      icon: TrendingUp,
      color: 'blue'
    }
  ]);

  const [purchasePatterns, setPurchasePatterns] = useState([
    { category: 'Grocery', frequency: 'Weekly', avgSpend: 850, nextOrder: '3 days' },
    { category: 'Beauty', frequency: 'Monthly', avgSpend: 1200, nextOrder: '12 days' },
    { category: 'Fitness', frequency: 'Monthly', avgSpend: 2500, nextOrder: '8 days' }
  ]);

  // API Comment: GET /api/ai/predictive-buying/predictions
  // ML Model: Time-series forecasting (ARIMA/LSTM) for purchase prediction
  // Response: { predictions: [], confidence: {}, patterns: {} }
  const fetchPredictions = async () => {
    // Fetch AI predictions
  };

  // API Comment: POST /api/ai/predictive-buying/auto-order
  // Payload: { productId: string, schedule: {}, conditions: {} }
  // ML Model: Smart scheduling based on usage patterns
  const setupAutoOrder = (productId, enabled) => {
    setPredictions(predictions.map(p =>
      p.id === productId ? { ...p, autoOrder: enabled } : p
    ));
  };

  // API Comment: GET /api/ai/predictive-buying/price-forecast
  // ML Model: Price prediction using historical pricing data
  // Response: { forecast: [], bestTimeToBuy: date, confidence: number }
  const getPriceForecast = (productId) => {
    // Get price forecast
  };

  // API Comment: POST /api/ai/predictive-buying/optimize-cart
  // Payload: { predictions: [], budget: number, priorities: [] }
  // ML Model: Cart optimization algorithm
  const optimizePurchases = () => {
    // Optimize predicted purchases
  };

  const toggleAutoOrder = (productId) => {
    setupAutoOrder(productId, !predictions.find(p => p.id === productId)?.autoOrder);
  };

  const getDaysUntil = (dateString) => {
    const today = new Date();
    const predictedDate = new Date(dateString);
    const diffTime = predictedDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">AI Predictive Buying</h1>
            <p className="text-xs text-blue-100">Never run out of essentials</p>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        {/* Savings Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-4 h-4" />
              <span className="text-xs">This Month</span>
            </div>
            <p className="text-xl font-bold">₹{savingsStats.thisMonth}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-4 h-4" />
              <span className="text-xs">Total Saved</span>
            </div>
            <p className="text-xl font-bold">₹{savingsStats.total}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs">Next Month</span>
            </div>
            <p className="text-xl font-bold">₹{savingsStats.predictedNextMonth}</p>
          </div>
        </div>
      </div>

      {/* Auto-Order Settings */}
      <div className="p-4 bg-white border-b">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">Auto-Order</h3>
            <p className="text-xs text-gray-600">Automatic replenishment enabled</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={autoOrderSettings.enabled}
              onChange={(e) => setAutoOrderSettings({ ...autoOrderSettings, enabled: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      {/* AI Insights */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <h2 className="font-semibold text-gray-900">AI Insights</h2>
        </div>

        <div className="space-y-2">
          {aiInsights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div
                key={insight.id}
                className={`bg-gradient-to-r ${
                  insight.color === 'green'
                    ? 'from-green-50 to-emerald-50 border-green-200'
                    : insight.color === 'orange'
                    ? 'from-orange-50 to-amber-50 border-orange-200'
                    : 'from-blue-50 to-cyan-50 border-blue-200'
                } rounded-xl p-3 border`}
              >
                <div className="flex gap-3">
                  <Icon
                    className={`w-5 h-5 ${
                      insight.color === 'green'
                        ? 'text-green-600'
                        : insight.color === 'orange'
                        ? 'text-orange-600'
                        : 'text-blue-600'
                    }`}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{insight.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{insight.description}</p>
                    <button
                      className={`px-3 py-1.5 ${
                        insight.color === 'green'
                          ? 'bg-green-600 hover:bg-green-700'
                          : insight.color === 'orange'
                          ? 'bg-orange-600 hover:bg-orange-700'
                          : 'bg-blue-600 hover:bg-blue-700'
                      } text-white text-xs font-medium rounded-lg`}
                    >
                      {insight.action}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Predicted Purchases */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Upcoming Predictions ({predictions.length})</h2>
          <button className="text-sm text-blue-600 font-medium">View All</button>
        </div>

        <div className="space-y-3">
          {predictions.map((prediction) => {
            const daysUntil = getDaysUntil(prediction.predictedDate);
            return (
              <div
                key={prediction.id}
                className={`bg-white rounded-xl border ${
                  prediction.autoOrder ? 'border-blue-300 ring-2 ring-blue-50' : 'border-gray-200'
                }`}
              >
                <div className="p-4">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex gap-3">
                      <span className="text-4xl">{prediction.image}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{prediction.product}</h3>
                        <p className="text-xs text-gray-500">{prediction.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-lg mb-1">
                        <Sparkles className="w-3 h-3 text-blue-600" />
                        <span className="text-xs font-medium text-blue-600">{prediction.confidence}%</span>
                      </div>
                      <p className="text-xs text-gray-500">confidence</p>
                    </div>
                  </div>

                  {/* Prediction Details */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-3 h-3 text-gray-600" />
                        <span className="text-xs text-gray-600">Predicted Date</span>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">
                        {daysUntil === 0 ? 'Today' : daysUntil === 1 ? 'Tomorrow' : `In ${daysUntil} days`}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="flex items-center gap-1 mb-1">
                        <Clock className="w-3 h-3 text-gray-600" />
                        <span className="text-xs text-gray-600">Buy Frequency</span>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">Every {prediction.avgDaysBetween} days</p>
                    </div>
                  </div>

                  {/* Price & Savings */}
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          ₹{prediction.currentPrice}
                        </span>
                        {prediction.savingsOpportunity && (
                          <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded">
                            Save ₹{prediction.savingsOpportunity}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">Current price</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      prediction.stockStatus === 'in-stock'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-orange-50 text-orange-700'
                    }`}>
                      {prediction.stockStatus === 'in-stock' ? 'In Stock' : 'Low Stock'}
                    </div>
                  </div>

                  {/* Auto-Order Toggle */}
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg mb-3">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-900">Auto-Order</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={prediction.autoOrder}
                        onChange={() => toggleAutoOrder(prediction.id)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                      Order Now
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50">
                      Later
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Purchase Patterns */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Your Purchase Patterns</h2>
          <BarChart3 className="w-5 h-5 text-gray-400" />
        </div>

        <div className="bg-white rounded-xl border overflow-hidden">
          {purchasePatterns.map((pattern, index) => (
            <div
              key={index}
              className={`p-4 ${index < purchasePatterns.length - 1 ? 'border-b' : ''}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{pattern.category}</h3>
                  <p className="text-xs text-gray-500">{pattern.frequency} purchases</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">₹{pattern.avgSpend}</p>
                  <p className="text-xs text-gray-500">Avg spend</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Next predicted order:</span>
                <span className="text-blue-600 font-medium">{pattern.nextOrder}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Calendar */}
      <div className="p-4">
        <h2 className="font-semibold text-gray-900 mb-3">Upcoming Orders Calendar</h2>
        <div className="space-y-2">
          {upcomingOrders.map((order, index) => (
            <div key={index} className="bg-white rounded-xl p-4 border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{order.date}</p>
                  <p className="text-sm text-gray-600">{order.count} items</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">₹{order.total}</p>
                <p className="text-xs text-gray-500">Est. total</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 p-4 bg-white border border-blue-200 rounded-xl hover:border-blue-400 transition-all">
            <Plus className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-900">Add Item</span>
          </button>
          <button className="flex items-center justify-center gap-2 p-4 bg-white border border-blue-200 rounded-xl hover:border-blue-400 transition-all">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-900">Analytics</span>
          </button>
        </div>
      </div>

      <BottomNavManager currentPage="home" />
    </div>
  );
};

export default AIPredictiveBuying;
