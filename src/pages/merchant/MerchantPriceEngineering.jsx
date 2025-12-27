import { useState } from 'react';
import {
  DollarSign, TrendingUp, Target, Zap, Clock, Users, BarChart3,
  Settings, Plus, Edit, Download, ArrowUpRight, ArrowDownRight,
  Percent, ShoppingCart, Calendar, Brain, LineChart, PieChart,
  AlertCircle, CheckCircle, Activity, Sparkles, Trophy, Eye,
  Filter, TrendingDown, Star, Crown, Package, Tag, TimerReset
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantPriceEngineering() {
  const [activeTab, setActiveTab] = useState('strategies');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [pricingStats, setPricingStats] = useState({
    avgMargin: 42.5,
    priceOptimizationScore: 78,
    competitiveIndex: 85,
    conversionRate: 23.4,
    revenueImpact: 156789,
    elasticity: -1.8
  });

  const [pricingStrategies, setPricingStrategies] = useState([
    {
      id: 1,
      name: 'Weekend Surge Pricing',
      type: 'dynamic',
      status: 'active',
      strategy: 'Demand-based',
      appliedTo: 'All items',
      priceAdjustment: '+15%',
      schedule: 'Fri-Sun',
      revenue: 234567,
      margin: 45.2,
      conversionRate: 21.3,
      performance: 'excellent'
    },
    {
      id: 2,
      name: 'Happy Hour Special',
      type: 'time_based',
      status: 'active',
      strategy: 'Time-based discount',
      appliedTo: 'Beverages',
      priceAdjustment: '-20%',
      schedule: '3-5 PM',
      revenue: 123456,
      margin: 38.5,
      conversionRate: 34.7,
      performance: 'good'
    },
    {
      id: 3,
      name: 'Bundle Deal - Combo',
      type: 'bundle',
      status: 'active',
      strategy: 'Buy 2 Get 1 at 50% off',
      appliedTo: 'Main Course + Drink + Dessert',
      priceAdjustment: 'Variable',
      schedule: 'All day',
      revenue: 345678,
      margin: 41.3,
      conversionRate: 28.9,
      performance: 'excellent'
    },
    {
      id: 4,
      name: 'Psychological Pricing',
      type: 'psychological',
      status: 'active',
      strategy: '₹99, ₹199, ₹999 endings',
      appliedTo: 'All menu items',
      priceAdjustment: 'Optimized',
      schedule: 'Always on',
      revenue: 567890,
      margin: 43.7,
      conversionRate: 25.8,
      performance: 'excellent'
    },
    {
      id: 5,
      name: 'New Customer Discount',
      type: 'penetration',
      status: 'active',
      strategy: 'First order 25% off',
      appliedTo: 'All items',
      priceAdjustment: '-25%',
      schedule: 'First order only',
      revenue: 89456,
      margin: 28.4,
      conversionRate: 45.6,
      performance: 'good'
    },
    {
      id: 6,
      name: 'Premium Positioning',
      type: 'premium',
      status: 'testing',
      strategy: 'Luxury pricing',
      appliedTo: 'Chef Specials',
      priceAdjustment: '+30%',
      schedule: 'Always on',
      revenue: 156789,
      margin: 58.3,
      conversionRate: 12.4,
      performance: 'testing'
    }
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Margherita Pizza',
      category: 'Main Course',
      currentPrice: 399,
      costPrice: 180,
      aiSuggestedPrice: 449,
      competitorAvg: 425,
      demand: 'high',
      elasticity: -1.5,
      margin: 54.9,
      sales: 567,
      revenue: 226233,
      conversionRate: 28.4,
      priceHistory: [
        { date: 'Week 1', price: 349, sales: 489, revenue: 170661 },
        { date: 'Week 2', price: 379, sales: 523, revenue: 198217 },
        { date: 'Week 3', price: 399, sales: 567, revenue: 226233 },
        { date: 'Week 4', price: 399, sales: 534, revenue: 213066 }
      ]
    },
    {
      id: 2,
      name: 'Cappuccino',
      category: 'Beverages',
      currentPrice: 199,
      costPrice: 65,
      aiSuggestedPrice: 229,
      competitorAvg: 215,
      demand: 'very_high',
      elasticity: -0.9,
      margin: 67.3,
      sales: 1234,
      revenue: 245566,
      conversionRate: 42.1,
      priceHistory: [
        { date: 'Week 1', price: 179, sales: 1123, revenue: 201017 },
        { date: 'Week 2', price: 189, sales: 1189, revenue: 224721 },
        { date: 'Week 3', price: 199, sales: 1234, revenue: 245566 },
        { date: 'Week 4', price: 199, sales: 1198, revenue: 238402 }
      ]
    },
    {
      id: 3,
      name: 'Caesar Salad',
      category: 'Starters',
      currentPrice: 249,
      costPrice: 95,
      aiSuggestedPrice: 279,
      competitorAvg: 265,
      demand: 'medium',
      elasticity: -2.1,
      margin: 61.8,
      sales: 345,
      revenue: 85905,
      conversionRate: 18.7,
      priceHistory: [
        { date: 'Week 1', price: 229, sales: 389, revenue: 89081 },
        { date: 'Week 2', price: 239, sales: 367, revenue: 87713 },
        { date: 'Week 3', price: 249, sales: 345, revenue: 85905 },
        { date: 'Week 4', price: 249, sales: 356, revenue: 88644 }
      ]
    },
    {
      id: 4,
      name: 'Chocolate Lava Cake',
      category: 'Desserts',
      currentPrice: 179,
      costPrice: 55,
      aiSuggestedPrice: 199,
      competitorAvg: 189,
      demand: 'high',
      elasticity: -1.3,
      margin: 69.3,
      sales: 456,
      revenue: 81624,
      conversionRate: 31.2,
      priceHistory: [
        { date: 'Week 1', price: 159, sales: 489, revenue: 77751 },
        { date: 'Week 2', price: 169, sales: 467, revenue: 78923 },
        { date: 'Week 3', price: 179, sales: 456, revenue: 81624 },
        { date: 'Week 4', price: 179, sales: 478, revenue: 85562 }
      ]
    }
  ]);

  const [timeBasedPricing, setTimeBasedPricing] = useState([
    {
      id: 1,
      name: 'Breakfast Boost',
      timeSlot: '7 AM - 10 AM',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      adjustment: '-15%',
      items: ['Breakfast items'],
      performance: { sales: 234, revenue: 34567, uplift: 28 }
    },
    {
      id: 2,
      name: 'Lunch Rush Pricing',
      timeSlot: '12 PM - 2 PM',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      adjustment: '+10%',
      items: ['All items'],
      performance: { sales: 567, revenue: 89456, uplift: 15 }
    },
    {
      id: 3,
      name: 'Dinner Premium',
      timeSlot: '7 PM - 10 PM',
      days: ['Fri', 'Sat', 'Sun'],
      adjustment: '+20%',
      items: ['Main Course, Desserts'],
      performance: { sales: 456, revenue: 123456, uplift: 32 }
    },
    {
      id: 4,
      name: 'Late Night Deals',
      timeSlot: '10 PM - 12 AM',
      days: ['All days'],
      adjustment: '-25%',
      items: ['Selected items'],
      performance: { sales: 189, revenue: 23456, uplift: 45 }
    }
  ]);

  const [segmentPricing, setSegmentPricing] = useState([
    {
      segment: 'New Customers',
      discount: '25%',
      conditions: 'First order',
      active: 2345,
      conversion: 45.6,
      ltv: 8456
    },
    {
      segment: 'VIP Members',
      discount: '15%',
      conditions: 'Always on',
      active: 456,
      conversion: 67.8,
      ltv: 45678
    },
    {
      segment: 'Students',
      discount: '20%',
      conditions: 'Valid ID',
      active: 789,
      conversion: 34.2,
      ltv: 6789
    },
    {
      segment: 'Corporate Accounts',
      discount: '10%',
      conditions: 'Bulk orders (10+)',
      active: 123,
      conversion: 78.9,
      ltv: 234567
    },
    {
      segment: 'Senior Citizens',
      discount: '15%',
      conditions: 'Age 60+',
      active: 234,
      conversion: 56.7,
      ltv: 12345
    }
  ]);

  const [abTests, setAbTests] = useState([
    {
      id: 1,
      name: 'Pizza Price Test',
      item: 'Margherita Pizza',
      priceA: 399,
      priceB: 449,
      status: 'running',
      duration: 14,
      results: {
        a: { sales: 567, revenue: 226233, conversion: 28.4 },
        b: { sales: 489, revenue: 219561, conversion: 24.5 }
      },
      winner: 'A',
      confidence: 78
    },
    {
      id: 2,
      name: 'Coffee Bundle Test',
      item: 'Coffee + Pastry',
      priceA: 249,
      priceB: 279,
      status: 'completed',
      duration: 30,
      results: {
        a: { sales: 456, revenue: 113544, conversion: 31.2 },
        b: { sales: 523, revenue: 145917, conversion: 35.8 }
      },
      winner: 'B',
      confidence: 95
    }
  ]);

  const [competitorPrices, setCompetitorPrices] = useState([
    {
      item: 'Margherita Pizza',
      yourPrice: 399,
      competitor1: 425,
      competitor2: 399,
      competitor3: 450,
      marketAvg: 425,
      position: 'competitive'
    },
    {
      item: 'Cappuccino',
      yourPrice: 199,
      competitor1: 220,
      competitor2: 210,
      competitor3: 215,
      marketAvg: 215,
      position: 'below_market'
    },
    {
      item: 'Caesar Salad',
      yourPrice: 249,
      competitor1: 260,
      competitor2: 255,
      competitor3: 280,
      marketAvg: 265,
      position: 'competitive'
    }
  ]);

  const getStrategyColor = (type) => {
    switch (type) {
      case 'dynamic': return 'bg-blue-100 text-blue-700';
      case 'time_based': return 'bg-green-100 text-green-700';
      case 'bundle': return 'bg-purple-100 text-purple-700';
      case 'psychological': return 'bg-pink-100 text-pink-700';
      case 'penetration': return 'bg-orange-100 text-orange-700';
      case 'premium': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPerformanceBadge = (performance) => {
    switch (performance) {
      case 'excellent': return { color: 'bg-green-100 text-green-700', icon: CheckCircle };
      case 'good': return { color: 'bg-blue-100 text-blue-700', icon: TrendingUp };
      case 'testing': return { color: 'bg-yellow-100 text-yellow-700', icon: Activity };
      default: return { color: 'bg-gray-100 text-gray-700', icon: AlertCircle };
    }
  };

  const getDemandColor = (demand) => {
    switch (demand) {
      case 'very_high': return 'text-green-600';
      case 'high': return 'text-blue-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  const getCompetitivePosition = (position) => {
    switch (position) {
      case 'below_market': return { text: 'Below Market', color: 'text-orange-600', bg: 'bg-orange-50' };
      case 'competitive': return { text: 'Competitive', color: 'text-green-600', bg: 'bg-green-50' };
      case 'above_market': return { text: 'Above Market', color: 'text-red-600', bg: 'bg-red-50' };
      default: return { text: 'Unknown', color: 'text-gray-600', bg: 'bg-gray-50' };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Price Engineering & Optimization</h1>
              <p className="text-gray-600 mt-1">AI-powered dynamic pricing to maximize revenue and margins</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                <Brain className="w-5 h-5" />
                AI Recommendations
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Plus className="w-5 h-5" />
                New Strategy
              </button>
            </div>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Percent className="w-5 h-5 text-green-600" />
              <p className="text-sm text-gray-600 font-medium">Avg Margin</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{pricingStats.avgMargin}%</p>
            <p className="text-sm text-green-600 mt-1">
              <ArrowUpRight className="w-3 h-3 inline" /> 2.3%
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <p className="text-sm text-gray-600 font-medium">Optimization Score</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{pricingStats.priceOptimizationScore}</p>
            <p className="text-sm text-gray-600 mt-1">out of 100</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-purple-600" />
              <p className="text-sm text-gray-600 font-medium">Competitive Index</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{pricingStats.competitiveIndex}</p>
            <p className="text-sm text-green-600 mt-1">
              <ArrowUpRight className="w-3 h-3 inline" /> 5.2%
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
              <p className="text-sm text-gray-600 font-medium">Conversion Rate</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{pricingStats.conversionRate}%</p>
            <p className="text-sm text-green-600 mt-1">
              <ArrowUpRight className="w-3 h-3 inline" /> 1.8%
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <p className="text-sm text-gray-600 font-medium">Revenue Impact</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{(pricingStats.revenueImpact / 1000).toFixed(0)}K</p>
            <p className="text-sm text-gray-600 mt-1">this month</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-orange-600" />
              <p className="text-sm text-gray-600 font-medium">Price Elasticity</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{pricingStats.elasticity}</p>
            <p className="text-sm text-gray-600 mt-1">avg coefficient</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <div className="flex gap-4 px-6 overflow-x-auto">
              {[
                { id: 'strategies', label: 'Pricing Strategies', icon: Target },
                { id: 'optimization', label: 'Price Optimization', icon: Brain },
                { id: 'time_based', label: 'Time-Based Pricing', icon: Clock },
                { id: 'segments', label: 'Segment Pricing', icon: Users },
                { id: 'testing', label: 'A/B Testing', icon: Activity },
                { id: 'analytics', label: 'Pricing Analytics', icon: BarChart3 }
              ].map(tab => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-4 border-b-2 font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <TabIcon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pricing Strategies Tab */}
          {activeTab === 'strategies' && (
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6">
                {pricingStrategies.map(strategy => {
                  const badge = getPerformanceBadge(strategy.performance);
                  const PerformanceIcon = badge.icon;

                  return (
                    <div key={strategy.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">{strategy.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStrategyColor(strategy.type)}`}>
                              {strategy.type}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${badge.color} flex items-center gap-1`}>
                              <PerformanceIcon className="w-3 h-3" />
                              {strategy.performance}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              strategy.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {strategy.status}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                            <div>
                              <span className="font-medium text-gray-700">Strategy:</span> {strategy.strategy}
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Applied To:</span> {strategy.appliedTo}
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Price Adjustment:</span>{' '}
                              <span className={`font-bold ${
                                strategy.priceAdjustment.startsWith('+') ? 'text-green-600' :
                                strategy.priceAdjustment.startsWith('-') ? 'text-orange-600' :
                                'text-gray-900'
                              }`}>
                                {strategy.priceAdjustment}
                              </span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Schedule:</span> {strategy.schedule}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button className="p-2 text-gray-600 hover:bg-white rounded-lg">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-white rounded-lg">
                            <Settings className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Revenue</p>
                          <p className="text-lg font-bold text-green-600">₹{(strategy.revenue / 1000).toFixed(0)}K</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Margin</p>
                          <p className="text-lg font-bold text-indigo-600">{strategy.margin}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Conversion Rate</p>
                          <p className="text-lg font-bold text-blue-600">{strategy.conversionRate}%</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Price Optimization Tab */}
          {activeTab === 'optimization' && (
            <div className="p-6">
              <div className="mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Brain className="w-6 h-6 text-indigo-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-indigo-900 mb-1">AI-Powered Price Recommendations</h4>
                    <p className="text-sm text-indigo-700">
                      Our AI analyzes demand patterns, competitor prices, elasticity, and historical data to suggest optimal prices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {products.map(product => (
                  <div key={product.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                            {product.category}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${getDemandColor(product.demand)}`}>
                            {product.demand.replace('_', ' ')} demand
                          </span>
                        </div>

                        <div className="grid grid-cols-5 gap-4 mb-4">
                          <div className="bg-white rounded-lg p-3 border border-gray-200">
                            <p className="text-xs text-gray-600 mb-1">Current Price</p>
                            <p className="text-xl font-bold text-gray-900">₹{product.currentPrice}</p>
                          </div>
                          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-3 border-2 border-indigo-300">
                            <p className="text-xs text-indigo-700 mb-1 flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              AI Suggested
                            </p>
                            <p className="text-xl font-bold text-indigo-600">₹{product.aiSuggestedPrice}</p>
                            <p className="text-xs text-green-600 font-medium">
                              +{Math.round(((product.aiSuggestedPrice - product.currentPrice) / product.currentPrice) * 100)}%
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-3 border border-gray-200">
                            <p className="text-xs text-gray-600 mb-1">Competitor Avg</p>
                            <p className="text-xl font-bold text-orange-600">₹{product.competitorAvg}</p>
                          </div>
                          <div className="bg-white rounded-lg p-3 border border-gray-200">
                            <p className="text-xs text-gray-600 mb-1">Margin</p>
                            <p className="text-xl font-bold text-green-600">{product.margin.toFixed(1)}%</p>
                          </div>
                          <div className="bg-white rounded-lg p-3 border border-gray-200">
                            <p className="text-xs text-gray-600 mb-1">Elasticity</p>
                            <p className="text-xl font-bold text-gray-900">{product.elasticity}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="bg-white rounded-lg p-3 border border-gray-200">
                            <p className="text-xs text-gray-600 mb-1">Weekly Sales</p>
                            <p className="text-lg font-bold text-gray-900">{product.sales} orders</p>
                          </div>
                          <div className="bg-white rounded-lg p-3 border border-gray-200">
                            <p className="text-xs text-gray-600 mb-1">Weekly Revenue</p>
                            <p className="text-lg font-bold text-green-600">₹{product.revenue.toLocaleString()}</p>
                          </div>
                          <div className="bg-white rounded-lg p-3 border border-gray-200">
                            <p className="text-xs text-gray-600 mb-1">Conversion Rate</p>
                            <p className="text-lg font-bold text-blue-600">{product.conversionRate}%</p>
                          </div>
                        </div>

                        {/* Price History Mini Chart */}
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <LineChart className="w-4 h-4 text-indigo-600" />
                            4-Week Price Performance
                          </h4>
                          <div className="flex items-end justify-between gap-2 h-24">
                            {product.priceHistory.map((week, idx) => {
                              const maxRevenue = Math.max(...product.priceHistory.map(w => w.revenue));
                              const height = (week.revenue / maxRevenue) * 100;
                              return (
                                <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                                  <div className="w-full bg-gray-100 rounded-t relative" style={{ height: `${height}%` }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t" />
                                  </div>
                                  <div className="text-center">
                                    <p className="text-xs font-semibold text-gray-900">₹{week.price}</p>
                                    <p className="text-xs text-gray-600">{week.sales}</p>
                                    <p className="text-xs text-gray-500">{week.date}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="ml-6">
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2 mb-2">
                          <CheckCircle className="w-5 h-5" />
                          Apply AI Price
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                          <Activity className="w-5 h-5" />
                          Run A/B Test
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Time-Based Pricing Tab */}
          {activeTab === 'time_based' && (
            <div className="p-6">
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">Time-Based Dynamic Pricing</h4>
                    <p className="text-sm text-green-700">
                      Automatically adjust prices based on time of day, day of week, and demand patterns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {timeBasedPricing.map(pricing => (
                  <div key={pricing.id} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="w-6 h-6 text-blue-600" />
                          <h3 className="text-lg font-bold text-gray-900">{pricing.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                            pricing.adjustment.startsWith('-') ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {pricing.adjustment}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                          <div>
                            <span className="text-gray-600">Time Slot:</span>
                            <p className="font-bold text-gray-900">{pricing.timeSlot}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Days:</span>
                            <p className="font-bold text-gray-900">{pricing.days.join(', ')}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Applied To:</span>
                            <p className="font-bold text-gray-900">{pricing.items.join(', ')}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-blue-200">
                          <div className="bg-white rounded-lg p-3">
                            <p className="text-xs text-gray-600 mb-1">Sales</p>
                            <p className="text-xl font-bold text-gray-900">{pricing.performance.sales}</p>
                          </div>
                          <div className="bg-white rounded-lg p-3">
                            <p className="text-xs text-gray-600 mb-1">Revenue</p>
                            <p className="text-xl font-bold text-green-600">₹{(pricing.performance.revenue / 1000).toFixed(0)}K</p>
                          </div>
                          <div className="bg-white rounded-lg p-3">
                            <p className="text-xs text-gray-600 mb-1">Uplift</p>
                            <p className="text-xl font-bold text-blue-600">+{pricing.performance.uplift}%</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="p-2 text-blue-600 hover:bg-white rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-blue-600 hover:bg-white rounded-lg">
                          <Settings className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Segment Pricing Tab */}
          {activeTab === 'segments' && (
            <div className="p-6">
              <div className="mb-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-1">Customer Segment Pricing</h4>
                    <p className="text-sm text-purple-700">
                      Offer targeted discounts to specific customer segments to maximize acquisition and retention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Segment</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Discount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conditions</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Active Users</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conversion</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">LTV</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {segmentPricing.map((segment, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-indigo-600" />
                            <span className="font-semibold text-gray-900">{segment.segment}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 rounded-full text-sm font-bold bg-orange-100 text-orange-700">
                            {segment.discount} OFF
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">{segment.conditions}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-gray-900">{segment.active.toLocaleString()}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-blue-600">{segment.conversion}%</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2 w-16">
                              <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: `${segment.conversion}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-green-600">₹{segment.ltv.toLocaleString()}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Edit className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* A/B Testing Tab */}
          {activeTab === 'testing' && (
            <div className="p-6">
              <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-1">A/B Price Testing</h4>
                    <p className="text-sm text-yellow-700">
                      Test different price points to find the optimal price that maximizes revenue and conversion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {abTests.map(test => (
                  <div key={test.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Activity className="w-6 h-6 text-indigo-600" />
                          <h3 className="text-lg font-bold text-gray-900">{test.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            test.status === 'running' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {test.status}
                          </span>
                          {test.winner && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                              Winner: Variant {test.winner}
                            </span>
                          )}
                        </div>

                        <p className="text-sm text-gray-600 mb-4">
                          Testing: {test.item} • Duration: {test.duration} days • Confidence: {test.confidence}%
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                          {/* Variant A */}
                          <div className={`bg-white rounded-lg p-4 border-2 ${
                            test.winner === 'A' ? 'border-green-500' : 'border-gray-200'
                          }`}>
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-bold text-gray-900">Variant A</h4>
                              {test.winner === 'A' && (
                                <Trophy className="w-5 h-5 text-green-600" />
                              )}
                            </div>
                            <p className="text-2xl font-bold text-indigo-600 mb-3">₹{test.priceA}</p>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Sales:</span>
                                <span className="font-bold text-gray-900">{test.results.a.sales}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Revenue:</span>
                                <span className="font-bold text-green-600">₹{test.results.a.revenue.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Conversion:</span>
                                <span className="font-bold text-blue-600">{test.results.a.conversion}%</span>
                              </div>
                            </div>
                          </div>

                          {/* Variant B */}
                          <div className={`bg-white rounded-lg p-4 border-2 ${
                            test.winner === 'B' ? 'border-green-500' : 'border-gray-200'
                          }`}>
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-bold text-gray-900">Variant B</h4>
                              {test.winner === 'B' && (
                                <Trophy className="w-5 h-5 text-green-600" />
                              )}
                            </div>
                            <p className="text-2xl font-bold text-purple-600 mb-3">₹{test.priceB}</p>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Sales:</span>
                                <span className="font-bold text-gray-900">{test.results.b.sales}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Revenue:</span>
                                <span className="font-bold text-green-600">₹{test.results.b.revenue.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Conversion:</span>
                                <span className="font-bold text-blue-600">{test.results.b.conversion}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="ml-6">
                        {test.status === 'completed' && test.winner && (
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Apply Winner
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Revenue Impact */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-900">Revenue Impact Analysis</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Monthly Revenue from Price Optimization</p>
                      <p className="text-3xl font-bold text-green-600">₹{pricingStats.revenueImpact.toLocaleString()}</p>
                      <p className="text-sm text-green-700 mt-1 flex items-center gap-1">
                        <ArrowUpRight className="w-4 h-4" />
                        +18.5% vs baseline pricing
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Margin Improvement</p>
                      <p className="text-3xl font-bold text-indigo-600">+5.2%</p>
                      <p className="text-sm text-indigo-700 mt-1">Average margin increase</p>
                    </div>
                  </div>
                </div>

                {/* Competitor Comparison */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-6 h-6 text-purple-600" />
                    <h3 className="text-lg font-bold text-gray-900">Competitive Positioning</h3>
                  </div>
                  <div className="space-y-3">
                    {competitorPrices.map((item, idx) => {
                      const position = getCompetitivePosition(item.position);
                      return (
                        <div key={idx} className={`rounded-lg p-3 ${position.bg}`}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-gray-900">{item.item}</span>
                            <span className={`text-xs font-medium ${position.color}`}>{position.text}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div>
                              <span className="text-gray-600">You:</span>
                              <span className="font-bold text-gray-900 ml-1">₹{item.yourPrice}</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Market Avg:</span>
                              <span className="font-bold text-gray-900 ml-1">₹{item.marketAvg}</span>
                            </div>
                            <div>
                              <span className={`font-bold ${
                                item.yourPrice < item.marketAvg ? 'text-green-600' : 'text-red-600'
                              }`}>
                                {item.yourPrice < item.marketAvg ? '-' : '+'}
                                {Math.abs(Math.round(((item.yourPrice - item.marketAvg) / item.marketAvg) * 100))}%
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Price Elasticity Analysis */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="w-6 h-6 text-orange-600" />
                  <h3 className="text-lg font-bold text-gray-900">Price Elasticity by Category</h3>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-gray-600 mb-2">Beverages</p>
                    <p className="text-2xl font-bold text-blue-600">-0.9</p>
                    <p className="text-xs text-blue-700 mt-1">Low elasticity - price increase opportunity</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                    <p className="text-sm text-gray-600 mb-2">Main Course</p>
                    <p className="text-2xl font-bold text-green-600">-1.5</p>
                    <p className="text-xs text-green-700 mt-1">Moderate - optimal pricing</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                    <p className="text-sm text-gray-600 mb-2">Starters</p>
                    <p className="text-2xl font-bold text-orange-600">-2.1</p>
                    <p className="text-xs text-orange-700 mt-1">High elasticity - price sensitive</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                    <p className="text-sm text-gray-600 mb-2">Desserts</p>
                    <p className="text-2xl font-bold text-purple-600">-1.3</p>
                    <p className="text-xs text-purple-700 mt-1">Moderate - balanced pricing</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
