import { useState } from 'react';
import {
  Brain, Target, Users, TrendingUp, Zap, Settings, BarChart3, Activity,
  Eye, MousePointer, ShoppingCart, DollarSign, Clock, CheckCircle, XCircle,
  Filter, Search, Plus, Edit, Trash2, Copy, Play, Pause, RotateCcw,
  Sliders, AlertCircle, Star, Heart, ThumbsUp, Package, Tag, Award,
  ArrowUpRight, ArrowDownRight, RefreshCw, GitBranch, Users2, Sparkles
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminRecommendations() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showRuleBuilder, setShowRuleBuilder] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);

  const [recommendationStats] = useState({
    totalRecommendations: 12450000,
    clickThroughRate: 18.5,
    conversionRate: 6.2,
    avgOrderValue: 2340,
    revenue: 45600000,
    activeRules: 45,
    runningTests: 8,
    personalizationScore: 87.5
  });

  const [algorithms] = useState([
    {
      id: 1,
      name: 'Collaborative Filtering',
      type: 'collaborative',
      description: 'User-based and item-based collaborative filtering using matrix factorization',
      status: 'active',
      weight: 40,
      performance: {
        ctr: 22.5,
        conversionRate: 8.3,
        accuracy: 84.2,
        coverage: 92.0,
        diversity: 68.5,
        serendipity: 45.2
      },
      config: {
        method: 'matrix_factorization',
        similarityMetric: 'cosine',
        minInteractions: 5,
        numFactors: 50,
        numNeighbors: 20
      },
      lastUpdated: '2025-12-27 08:00:00',
      trainingFrequency: 'daily'
    },
    {
      id: 2,
      name: 'Content-Based Filtering',
      type: 'content',
      description: 'Recommendation based on product features and user preferences',
      status: 'active',
      weight: 35,
      performance: {
        ctr: 18.2,
        conversionRate: 6.8,
        accuracy: 78.5,
        coverage: 98.5,
        diversity: 82.3,
        serendipity: 35.8
      },
      config: {
        features: ['category', 'brand', 'price_range', 'attributes', 'tags'],
        similarityMetric: 'cosine',
        minScore: 0.5,
        maxRecommendations: 20
      },
      lastUpdated: '2025-12-27 08:00:00',
      trainingFrequency: 'realtime'
    },
    {
      id: 3,
      name: 'Hybrid Ensemble',
      type: 'hybrid',
      description: 'Combines collaborative and content-based with deep learning',
      status: 'active',
      weight: 25,
      performance: {
        ctr: 25.8,
        conversionRate: 9.5,
        accuracy: 89.3,
        coverage: 94.2,
        diversity: 75.6,
        serendipity: 58.3
      },
      config: {
        models: ['collaborative', 'content', 'deep_learning'],
        ensembleMethod: 'weighted_average',
        dynamicWeighting: true,
        contextualFactors: ['time', 'location', 'device', 'weather']
      },
      lastUpdated: '2025-12-27 08:00:00',
      trainingFrequency: 'hourly'
    }
  ]);

  const [recommendationRules] = useState([
    {
      id: 1,
      name: 'High-Value Customer Boost',
      description: 'Boost premium products for customers with high lifetime value',
      status: 'active',
      priority: 1,
      conditions: [
        { field: 'user.ltv', operator: '>=', value: 50000 },
        { field: 'user.tier', operator: '==', value: 'premium' }
      ],
      actions: [
        { type: 'boost', category: 'premium', multiplier: 2.0 },
        { type: 'filter', minPrice: 1000 }
      ],
      performance: {
        impressions: 234000,
        clicks: 45600,
        conversions: 3456,
        ctr: 19.5,
        conversionRate: 7.6,
        revenue: 8920000
      },
      createdDate: '2025-11-15',
      lastModified: '2025-12-20'
    },
    {
      id: 2,
      name: 'New User Onboarding',
      description: 'Show popular and highly-rated products to new users',
      status: 'active',
      priority: 2,
      conditions: [
        { field: 'user.signup_date', operator: '<=', value: '7_days_ago' },
        { field: 'user.purchase_count', operator: '==', value: 0 }
      ],
      actions: [
        { type: 'boost', filter: 'popular', multiplier: 1.8 },
        { type: 'boost', filter: 'high_rated', multiplier: 1.5 },
        { type: 'diversify', categories: 5 }
      ],
      performance: {
        impressions: 156000,
        clicks: 28080,
        conversions: 1872,
        ctr: 18.0,
        conversionRate: 6.7,
        revenue: 3456000
      },
      createdDate: '2025-10-01',
      lastModified: '2025-12-15'
    },
    {
      id: 3,
      name: 'Cart Abandonment Recovery',
      description: 'Recommend related products to users who abandoned carts',
      status: 'active',
      priority: 3,
      conditions: [
        { field: 'user.cart_abandoned', operator: '==', value: true },
        { field: 'user.last_cart_update', operator: '<=', value: '24_hours_ago' }
      ],
      actions: [
        { type: 'boost', source: 'cart_items_related', multiplier: 2.5 },
        { type: 'boost', source: 'frequently_bought_together', multiplier: 2.0 },
        { type: 'add_discount', percentage: 10 }
      ],
      performance: {
        impressions: 89200,
        clicks: 17840,
        conversions: 2675,
        ctr: 20.0,
        conversionRate: 15.0,
        revenue: 5892000
      },
      createdDate: '2025-11-01',
      lastModified: '2025-12-10'
    },
    {
      id: 4,
      name: 'Seasonal Trends Boost',
      description: 'Boost trending seasonal products',
      status: 'paused',
      priority: 4,
      conditions: [
        { field: 'product.seasonal', operator: '==', value: true },
        { field: 'product.trend_score', operator: '>=', value: 0.7 }
      ],
      actions: [
        { type: 'boost', filter: 'seasonal', multiplier: 1.5 },
        { type: 'prioritize', sort: 'trend_score' }
      ],
      performance: {
        impressions: 67800,
        clicks: 10170,
        conversions: 814,
        ctr: 15.0,
        conversionRate: 8.0,
        revenue: 1892000
      },
      createdDate: '2025-09-15',
      lastModified: '2025-12-01'
    }
  ]);

  const [abTests] = useState([
    {
      id: 1,
      name: 'Collaborative vs Hybrid Algorithm',
      description: 'Testing performance difference between collaborative filtering and hybrid approach',
      status: 'running',
      startDate: '2025-12-20',
      endDate: '2026-01-05',
      trafficSplit: 50,
      variants: [
        {
          id: 'A',
          name: 'Collaborative Filtering',
          traffic: 50,
          impressions: 456000,
          clicks: 91200,
          conversions: 6384,
          ctr: 20.0,
          conversionRate: 7.0,
          revenue: 14568000,
          avgOrderValue: 2281
        },
        {
          id: 'B',
          name: 'Hybrid Algorithm',
          traffic: 50,
          impressions: 445000,
          clicks: 98900,
          conversions: 8901,
          ctr: 22.2,
          conversionRate: 9.0,
          revenue: 20238000,
          avgOrderValue: 2274
        }
      ],
      winner: 'B',
      confidence: 95.2,
      improvement: 28.5
    },
    {
      id: 2,
      name: '10 vs 20 Recommendations',
      description: 'Testing optimal number of recommendations to display',
      status: 'running',
      startDate: '2025-12-22',
      endDate: '2026-01-08',
      trafficSplit: 50,
      variants: [
        {
          id: 'A',
          name: '10 Recommendations',
          traffic: 50,
          impressions: 234000,
          clicks: 49140,
          conversions: 3744,
          ctr: 21.0,
          conversionRate: 7.6,
          revenue: 8568000,
          avgOrderValue: 2289
        },
        {
          id: 'B',
          name: '20 Recommendations',
          traffic: 50,
          impressions: 228000,
          clicks: 45600,
          conversions: 3648,
          ctr: 20.0,
          conversionRate: 8.0,
          revenue: 8380800,
          avgOrderValue: 2297
        }
      ],
      winner: null,
      confidence: 67.5,
      improvement: null
    },
    {
      id: 3,
      name: 'Personalization Level Test',
      description: 'Testing high vs medium personalization intensity',
      status: 'completed',
      startDate: '2025-12-01',
      endDate: '2025-12-15',
      trafficSplit: 50,
      variants: [
        {
          id: 'A',
          name: 'Medium Personalization',
          traffic: 50,
          impressions: 890000,
          clicks: 160200,
          conversions: 11360,
          ctr: 18.0,
          conversionRate: 7.1,
          revenue: 26048000,
          avgOrderValue: 2293
        },
        {
          id: 'B',
          name: 'High Personalization',
          traffic: 50,
          impressions: 876000,
          clicks: 184380,
          conversions: 14760,
          ctr: 21.0,
          conversionRate: 8.0,
          revenue: 33840000,
          avgOrderValue: 2293
        }
      ],
      winner: 'B',
      confidence: 99.1,
      improvement: 29.9
    }
  ]);

  const [userSegments] = useState([
    {
      id: 1,
      name: 'High-Value Shoppers',
      description: 'Users with LTV > ₹50K',
      size: 12340,
      algorithmWeight: { collaborative: 45, content: 30, hybrid: 25 },
      ctr: 24.5,
      conversionRate: 9.8,
      avgOrderValue: 3456,
      revenue: 41850240
    },
    {
      id: 2,
      name: 'Fashion Enthusiasts',
      description: 'Users primarily shopping fashion',
      size: 34560,
      algorithmWeight: { collaborative: 35, content: 45, hybrid: 20 },
      ctr: 21.2,
      conversionRate: 7.5,
      avgOrderValue: 2340,
      revenue: 60685440
    },
    {
      id: 3,
      name: 'Tech Buyers',
      description: 'Users interested in electronics',
      size: 23450,
      algorithmWeight: { collaborative: 40, content: 35, hybrid: 25 },
      ctr: 19.8,
      conversionRate: 8.2,
      avgOrderValue: 4560,
      revenue: 87586320
    },
    {
      id: 4,
      name: 'New Users',
      description: 'Users signed up in last 30 days',
      size: 8920,
      algorithmWeight: { collaborative: 20, content: 50, hybrid: 30 },
      ctr: 16.5,
      conversionRate: 5.2,
      avgOrderValue: 1890,
      revenue: 8760768
    }
  ]);

  const [topRecommendedProducts] = useState([
    {
      id: 1,
      name: 'Wireless Noise-Cancelling Headphones',
      category: 'Electronics',
      impressions: 456000,
      clicks: 91200,
      conversions: 7296,
      ctr: 20.0,
      conversionRate: 8.0,
      revenue: 17740800,
      avgPrice: 2432
    },
    {
      id: 2,
      name: 'Premium Cotton T-Shirt',
      category: 'Fashion',
      impressions: 389000,
      clicks: 85580,
      conversions: 6846,
      ctr: 22.0,
      conversionRate: 8.0,
      revenue: 2053800,
      avgPrice: 300
    },
    {
      id: 3,
      name: 'Smart Fitness Watch',
      category: 'Electronics',
      impressions: 312000,
      clicks: 62400,
      conversions: 5616,
      ctr: 20.0,
      conversionRate: 9.0,
      revenue: 16848000,
      avgPrice: 3000
    },
    {
      id: 4,
      name: 'Organic Green Tea',
      category: 'Food & Beverage',
      impressions: 278000,
      clicks: 58380,
      conversions: 5838,
      ctr: 21.0,
      conversionRate: 10.0,
      revenue: 1459500,
      avgPrice: 250
    },
    {
      id: 5,
      name: 'Yoga Mat Premium',
      category: 'Sports & Fitness',
      impressions: 234000,
      clicks: 46800,
      conversions: 4212,
      ctr: 20.0,
      conversionRate: 9.0,
      revenue: 3169000,
      avgPrice: 752
    }
  ]);

  const [coldStartConfig] = useState({
    strategy: 'hybrid',
    fallbackRules: [
      { priority: 1, type: 'popular_global', weight: 0.4 },
      { priority: 2, type: 'trending', weight: 0.3 },
      { priority: 3, type: 'high_rated', weight: 0.2 },
      { priority: 4, type: 'new_arrivals', weight: 0.1 }
    ],
    minInteractionsThreshold: 5,
    explorationRate: 0.2,
    diversityBoost: 1.5
  });

  const getAlgorithmColor = (type) => {
    switch(type) {
      case 'collaborative': return 'blue';
      case 'content': return 'green';
      case 'hybrid': return 'purple';
      default: return 'gray';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Recommendation Engine</h1>
              <p className="text-gray-600 mt-1">Configure and optimize product recommendation algorithms</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <RefreshCw className="w-4 h-4" />
                Retrain Models
              </button>
              <button
                onClick={() => setShowRuleBuilder(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                New Rule
              </button>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Recommendations</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {(recommendationStats.totalRecommendations / 1000000).toFixed(1)}M
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-blue-600">
                <Activity className="w-4 h-4 mr-1" />
                Last 30 days
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Click-Through Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {recommendationStats.clickThroughRate}%
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <MousePointer className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-green-600">
                <ArrowUpRight className="w-4 h-4" />
                2.5% vs baseline
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Conversion Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {recommendationStats.conversionRate}%
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-green-600">
                <ArrowUpRight className="w-4 h-4" />
                3.8% vs baseline
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Revenue Generated</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ₹{(recommendationStats.revenue / 10000000).toFixed(1)}Cr
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-orange-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                ₹{recommendationStats.avgOrderValue} avg order
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'algorithms', label: 'Algorithms', icon: Brain },
                { id: 'rules', label: 'Rules', icon: Sliders },
                { id: 'abtests', label: 'A/B Tests', icon: GitBranch },
                { id: 'segments', label: 'User Segments', icon: Users2 },
                { id: 'performance', label: 'Performance', icon: TrendingUp }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Algorithms Tab */}
          {activeTab === 'algorithms' && (
            <div className="p-6">
              <div className="space-y-6">
                {algorithms.map((algorithm) => {
                  const algorithmColor = getAlgorithmColor(algorithm.type);
                  return (
                    <div key={algorithm.id} className="p-6 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">{algorithm.name}</h3>
                            <span className={`px-2 py-1 bg-${algorithmColor}-100 text-${algorithmColor}-700 text-xs font-medium rounded`}>
                              {algorithm.type}
                            </span>
                            <span className={`px-2 py-1 ${
                              algorithm.status === 'active'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-100 text-gray-700'
                            } text-xs font-medium rounded`}>
                              {algorithm.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{algorithm.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                            <Settings className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                            <Edit className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-500">CTR</p>
                          <p className="text-lg font-bold text-gray-900">{algorithm.performance.ctr}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Conversion</p>
                          <p className="text-lg font-bold text-green-600">{algorithm.performance.conversionRate}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Accuracy</p>
                          <p className="text-lg font-bold text-gray-900">{algorithm.performance.accuracy}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Coverage</p>
                          <p className="text-lg font-bold text-gray-900">{algorithm.performance.coverage}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Diversity</p>
                          <p className="text-lg font-bold text-gray-900">{algorithm.performance.diversity}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Serendipity</p>
                          <p className="text-lg font-bold text-gray-900">{algorithm.performance.serendipity}%</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">Algorithm Weight</span>
                          <span className="text-sm font-semibold text-gray-900">{algorithm.weight}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-${algorithmColor}-600 h-2 rounded-full transition-all`}
                            style={{ width: `${algorithm.weight}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <span className="text-gray-600">
                            Training: <span className="font-medium text-gray-900">{algorithm.trainingFrequency}</span>
                          </span>
                          <span className="text-gray-600">
                            Last Updated: <span className="font-medium text-gray-900">{algorithm.lastUpdated}</span>
                          </span>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                          <RefreshCw className="w-4 h-4" />
                          Retrain Now
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Rules Tab */}
          {activeTab === 'rules' && (
            <div className="p-6">
              <div className="space-y-4">
                {recommendationRules.map((rule) => (
                  <div key={rule.id} className="p-6 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{rule.name}</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                            Priority {rule.priority}
                          </span>
                          <span className={`px-2 py-1 ${
                            rule.status === 'active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                          } text-xs font-medium rounded`}>
                            {rule.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{rule.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {rule.status === 'active' ? (
                          <button className="p-2 text-orange-600 hover:text-orange-700 transition-colors">
                            <Pause className="w-5 h-5" />
                          </button>
                        ) : (
                          <button className="p-2 text-green-600 hover:text-green-700 transition-colors">
                            <Play className="w-5 h-5" />
                          </button>
                        )}
                        <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                          <Edit className="w-5 h-5" />
                          </button>
                        <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-xs text-gray-500">Impressions</p>
                        <p className="text-sm font-semibold text-gray-900">{rule.performance.impressions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">CTR</p>
                        <p className="text-sm font-semibold text-gray-900">{rule.performance.ctr}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Conversion</p>
                        <p className="text-sm font-semibold text-green-600">{rule.performance.conversionRate}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Conversions</p>
                        <p className="text-sm font-semibold text-gray-900">{rule.performance.conversions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Revenue</p>
                        <p className="text-sm font-semibold text-green-600">₹{(rule.performance.revenue / 100000).toFixed(1)}L</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Created: {rule.createdDate}</span>
                      <span>Modified: {rule.lastModified}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* A/B Tests Tab */}
          {activeTab === 'abtests' && (
            <div className="p-6">
              <div className="space-y-6">
                {abTests.map((test) => (
                  <div key={test.id} className="p-6 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{test.name}</h3>
                          <span className={`px-2 py-1 ${
                            test.status === 'running'
                              ? 'bg-blue-100 text-blue-700'
                              : test.status === 'completed'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                          } text-xs font-medium rounded`}>
                            {test.status}
                          </span>
                          {test.winner && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
                              Winner: Variant {test.winner}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{test.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {test.variants.map((variant) => (
                        <div key={variant.id} className={`p-4 border-2 rounded-lg ${
                          test.winner === variant.id
                            ? 'border-yellow-400 bg-yellow-50'
                            : 'border-gray-200'
                        }`}>
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-gray-900">Variant {variant.id}: {variant.name}</h4>
                            {test.winner === variant.id && (
                              <Award className="w-5 h-5 text-yellow-500" />
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <p className="text-xs text-gray-500">Impressions</p>
                              <p className="text-sm font-semibold text-gray-900">{variant.impressions.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Clicks</p>
                              <p className="text-sm font-semibold text-gray-900">{variant.clicks.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">CTR</p>
                              <p className="text-sm font-semibold text-blue-600">{variant.ctr}%</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Conversion</p>
                              <p className="text-sm font-semibold text-green-600">{variant.conversionRate}%</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Revenue</p>
                              <p className="text-sm font-semibold text-green-600">₹{(variant.revenue / 100000).toFixed(1)}L</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">AOV</p>
                              <p className="text-sm font-semibold text-gray-900">₹{variant.avgOrderValue}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-6">
                        <span className="text-sm text-gray-600">
                          Duration: <span className="font-medium text-gray-900">{test.startDate} - {test.endDate}</span>
                        </span>
                        {test.confidence && (
                          <span className="text-sm text-gray-600">
                            Confidence: <span className="font-medium text-gray-900">{test.confidence}%</span>
                          </span>
                        )}
                        {test.improvement && (
                          <span className="flex items-center gap-1 text-sm text-green-600">
                            <ArrowUpRight className="w-4 h-4" />
                            <span className="font-medium">{test.improvement}% improvement</span>
                          </span>
                        )}
                      </div>
                      {test.status === 'completed' && test.winner && (
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                          Deploy Winner
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* User Segments Tab */}
          {activeTab === 'segments' && (
            <div className="p-6">
              <div className="space-y-4">
                {userSegments.map((segment) => (
                  <div key={segment.id} className="p-6 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{segment.name}</h3>
                        <p className="text-sm text-gray-600">{segment.description}</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg">
                        <Users className="w-4 h-4" />
                        <span className="font-semibold">{segment.size.toLocaleString()} users</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-xs text-gray-500">CTR</p>
                        <p className="text-sm font-semibold text-gray-900">{segment.ctr}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Conversion</p>
                        <p className="text-sm font-semibold text-green-600">{segment.conversionRate}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Avg Order Value</p>
                        <p className="text-sm font-semibold text-gray-900">₹{segment.avgOrderValue}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Revenue</p>
                        <p className="text-sm font-semibold text-green-600">₹{(segment.revenue / 100000).toFixed(1)}L</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Algorithm Weights</p>
                      <div className="space-y-2">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-600">Collaborative Filtering</span>
                            <span className="text-xs font-semibold text-gray-900">{segment.algorithmWeight.collaborative}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${segment.algorithmWeight.collaborative}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-600">Content-Based</span>
                            <span className="text-xs font-semibold text-gray-900">{segment.algorithmWeight.content}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-green-600 h-1.5 rounded-full" style={{ width: `${segment.algorithmWeight.content}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-600">Hybrid</span>
                            <span className="text-xs font-semibold text-gray-900">{segment.algorithmWeight.hybrid}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: `${segment.algorithmWeight.hybrid}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Performance Tab */}
          {activeTab === 'performance' && (
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Top Recommended Products</h3>
                <div className="space-y-3">
                  {topRecommendedProducts.map((product, index) => (
                    <div key={product.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-600">{product.category}</p>
                      </div>
                      <div className="grid grid-cols-5 gap-4">
                        <div>
                          <p className="text-xs text-gray-500">Impressions</p>
                          <p className="text-sm font-semibold text-gray-900">{(product.impressions / 1000).toFixed(0)}K</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">CTR</p>
                          <p className="text-sm font-semibold text-blue-600">{product.ctr}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Conversion</p>
                          <p className="text-sm font-semibold text-green-600">{product.conversionRate}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Avg Price</p>
                          <p className="text-sm font-semibold text-gray-900">₹{product.avgPrice}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Revenue</p>
                          <p className="text-sm font-semibold text-green-600">₹{(product.revenue / 100000).toFixed(1)}L</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Cold Start Configuration</h3>
                <div className="p-6 border border-gray-200 rounded-lg">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Strategy</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                        {coldStartConfig.strategy}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Min Interactions Threshold</span>
                      <span className="font-semibold text-gray-900">{coldStartConfig.minInteractionsThreshold}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-3">Fallback Rules Priority</p>
                    <div className="space-y-2">
                      {coldStartConfig.fallbackRules.map((rule) => (
                        <div key={rule.priority} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold">
                              {rule.priority}
                            </span>
                            <span className="text-sm text-gray-900">{rule.type.replace(/_/g, ' ').toUpperCase()}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-600">Weight: {(rule.weight * 100).toFixed(0)}%</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${rule.weight * 100}%` }}></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Exploration Rate</p>
                      <p className="text-lg font-semibold text-gray-900">{(coldStartConfig.explorationRate * 100).toFixed(0)}%</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Diversity Boost</p>
                      <p className="text-lg font-semibold text-gray-900">{coldStartConfig.diversityBoost}x</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">System Health</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Personalization Score</span>
                        <span className="text-sm font-bold text-green-600">{recommendationStats.personalizationScore}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: `${recommendationStats.personalizationScore}%` }}></div>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Active Rules</span>
                        <span className="text-sm font-bold text-gray-900">{recommendationStats.activeRules}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Running A/B Tests</span>
                        <span className="text-sm font-bold text-gray-900">{recommendationStats.runningTests}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all">
                      <Brain className="w-5 h-5 text-indigo-600" />
                      <span className="font-medium text-gray-900">Configure Algorithms</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all">
                      <Sliders className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-gray-900">Create New Rule</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all">
                      <GitBranch className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-gray-900">Start A/B Test</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all">
                      <RefreshCw className="w-5 h-5 text-orange-600" />
                      <span className="font-medium text-gray-900">Retrain All Models</span>
                    </button>
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
