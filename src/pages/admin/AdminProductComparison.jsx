import { useState } from 'react';
import { Search, GitCompare, Plus, TrendingUp, Eye, Users, BarChart3, Grid3x3, CheckCircle, XCircle, Edit, Star, ArrowRightLeft, Package, Tag } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminProductComparison() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedComparison, setSelectedComparison] = useState(null);

  const [comparisonStats] = useState({
    totalComparisons: 3456,
    comparisonGroups: 89,
    avgComparisonPerUser: 2.3,
    conversionRate: 42.5,
    topCategory: 'Electronics',
    popularComparisons: 234
  });

  const [comparisonGroups, setComparisonGroups] = useState([
    {
      id: 1,
      name: 'Flagship Smartphones',
      category: 'Electronics',
      subcategory: 'Mobile Phones',
      products: 8,
      features: 15,
      comparisons: 456,
      conversions: 189,
      conversionRate: 41.4,
      status: 'active',
      featured: true
    },
    {
      id: 2,
      name: 'Premium Headphones',
      category: 'Electronics',
      subcategory: 'Audio',
      products: 6,
      features: 12,
      comparisons: 234,
      conversions: 98,
      conversionRate: 41.9,
      status: 'active',
      featured: true
    },
    {
      id: 3,
      name: 'Running Shoes',
      category: 'Fashion',
      subcategory: 'Sports Footwear',
      products: 10,
      features: 10,
      comparisons: 345,
      conversions: 156,
      conversionRate: 45.2,
      status: 'active',
      featured: false
    },
    {
      id: 4,
      name: 'Gaming Laptops',
      category: 'Electronics',
      subcategory: 'Computers',
      products: 7,
      features: 18,
      comparisons: 289,
      conversions: 112,
      conversionRate: 38.8,
      status: 'active',
      featured: true
    },
    {
      id: 5,
      name: 'Smart Watches',
      category: 'Electronics',
      subcategory: 'Wearables',
      products: 9,
      features: 14,
      comparisons: 198,
      conversions: 87,
      conversionRate: 43.9,
      status: 'active',
      featured: false
    }
  ]);

  const [featureTemplates, setFeatureTemplates] = useState([
    {
      id: 1,
      name: 'Electronics - Smartphones',
      category: 'Electronics',
      features: [
        { name: 'Display Size', type: 'number', unit: 'inches' },
        { name: 'RAM', type: 'number', unit: 'GB' },
        { name: 'Storage', type: 'number', unit: 'GB' },
        { name: 'Camera', type: 'text', unit: 'MP' },
        { name: 'Battery', type: 'number', unit: 'mAh' },
        { name: 'Processor', type: 'text', unit: '' },
        { name: '5G Support', type: 'boolean', unit: '' },
        { name: 'Fast Charging', type: 'boolean', unit: '' },
        { name: 'Wireless Charging', type: 'boolean', unit: '' },
        { name: 'Water Resistance', type: 'text', unit: '' }
      ],
      usage: 456,
      lastUsed: '2024-01-28'
    },
    {
      id: 2,
      name: 'Electronics - Laptops',
      category: 'Electronics',
      features: [
        { name: 'Screen Size', type: 'number', unit: 'inches' },
        { name: 'Processor', type: 'text', unit: '' },
        { name: 'RAM', type: 'number', unit: 'GB' },
        { name: 'Storage', type: 'text', unit: '' },
        { name: 'Graphics Card', type: 'text', unit: '' },
        { name: 'Battery Life', type: 'number', unit: 'hours' },
        { name: 'Weight', type: 'number', unit: 'kg' },
        { name: 'Operating System', type: 'text', unit: '' }
      ],
      usage: 289,
      lastUsed: '2024-01-27'
    },
    {
      id: 3,
      name: 'Fashion - Footwear',
      category: 'Fashion',
      features: [
        { name: 'Brand', type: 'text', unit: '' },
        { name: 'Material', type: 'text', unit: '' },
        { name: 'Sole Type', type: 'text', unit: '' },
        { name: 'Weight', type: 'number', unit: 'grams' },
        { name: 'Water Resistant', type: 'boolean', unit: '' },
        { name: 'Cushioning', type: 'text', unit: '' },
        { name: 'Breathability', type: 'rating', unit: '/5' },
        { name: 'Durability', type: 'rating', unit: '/5' }
      ],
      usage: 345,
      lastUsed: '2024-01-28'
    }
  ]);

  const [popularComparisons, setPopularComparisons] = useState([
    {
      id: 1,
      products: ['iPhone 15 Pro Max', 'Samsung Galaxy S24 Ultra', 'Google Pixel 8 Pro'],
      category: 'Electronics',
      comparisons: 456,
      conversions: 189,
      avgViewTime: '4:32',
      winnerProduct: 'iPhone 15 Pro Max',
      winRate: 45.2
    },
    {
      id: 2,
      products: ['Nike Air Zoom Pegasus', 'Adidas Ultraboost', 'New Balance 1080'],
      category: 'Fashion',
      comparisons: 345,
      conversions: 156,
      avgViewTime: '3:45',
      winnerProduct: 'Adidas Ultraboost',
      winRate: 48.7
    },
    {
      id: 3,
      products: ['Sony WH-1000XM5', 'Bose QC45', 'Apple AirPods Max'],
      category: 'Electronics',
      comparisons: 234,
      conversions: 98,
      avgViewTime: '3:12',
      winnerProduct: 'Sony WH-1000XM5',
      winRate: 52.1
    },
    {
      id: 4,
      products: ['MacBook Pro M3', 'Dell XPS 15', 'Lenovo ThinkPad X1'],
      category: 'Electronics',
      comparisons: 289,
      conversions: 112,
      avgViewTime: '5:18',
      winnerProduct: 'MacBook Pro M3',
      winRate: 49.8
    }
  ]);

  const [comparisonAnalytics] = useState({
    mostComparedCategory: 'Electronics',
    avgComparisonPerSession: 2.3,
    avgViewTime: '4:15',
    comparisonToConversion: 42.5,
    topComparisonHours: ['10-11 AM', '2-3 PM', '8-9 PM'],
    deviceSplit: {
      mobile: 58,
      desktop: 35,
      tablet: 7
    }
  });

  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      category: 'Electronics',
      image: '📱',
      price: 139900,
      rating: 4.8,
      comparisons: 567,
      featured: true
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      category: 'Electronics',
      image: '📱',
      price: 129900,
      rating: 4.7,
      comparisons: 489,
      featured: true
    },
    {
      id: 3,
      name: 'Sony WH-1000XM5',
      category: 'Electronics',
      image: '🎧',
      price: 29990,
      rating: 4.9,
      comparisons: 234,
      featured: true
    }
  ]);

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Comparisons</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {comparisonStats.totalComparisons.toLocaleString()}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <GitCompare className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {comparisonStats.comparisonGroups} comparison groups
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Conversion Rate</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {comparisonStats.conversionRate}%
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {comparisonStats.popularComparisons} popular pairs
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Avg Per User</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {comparisonStats.avgComparisonPerUser}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Top: {comparisonStats.topCategory}
          </div>
        </div>
      </div>

      {/* Comparison Groups */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Active Comparison Groups</h3>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Group
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {comparisonGroups.map((group) => (
            <div key={group.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-gray-900">{group.name}</h4>
                    {group.featured && (
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                    <span>{group.category} • {group.subcategory}</span>
                    <span>•</span>
                    <span>{group.products} products</span>
                    <span>•</span>
                    <span>{group.features} features</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">
                    {group.comparisons} comparisons
                  </div>
                  <div className="text-sm font-semibold text-green-600">
                    {group.conversionRate}% conversion
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    group.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {group.status}
                  </span>
                  <button
                    onClick={() => setSelectedComparison(group)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Comparisons */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">Most Popular Comparisons</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {popularComparisons.map((comparison) => (
            <div key={comparison.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <ArrowRightLeft className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900">
                    {comparison.products.join(' vs ')}
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span>{comparison.comparisons} comparisons</span>
                    <span>•</span>
                    <span>{comparison.conversions} conversions</span>
                    <span>•</span>
                    <span>Avg view: {comparison.avgViewTime}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">
                      Most chosen: <span className="font-medium">{comparison.winnerProduct}</span> ({comparison.winRate}%)
                    </span>
                  </div>
                </div>
                <div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {comparison.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderComparisonGroups = () => (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search comparison groups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Create Group
        </button>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {comparisonGroups.map((group) => (
          <div key={group.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{group.name}</h3>
                    {group.featured && (
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{group.category} • {group.subcategory}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  group.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {group.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Package className="w-4 h-4 text-gray-600" />
                    <span className="text-xs text-gray-600">Products</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900">{group.products}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Grid3x3 className="w-4 h-4 text-gray-600" />
                    <span className="text-xs text-gray-600">Features</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900">{group.features}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Comparisons</span>
                  <span className="font-semibold text-gray-900">{group.comparisons}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Conversions</span>
                  <span className="font-semibold text-green-600">{group.conversions} ({group.conversionRate}%)</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedComparison(group)}
                  className="flex-1 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 font-medium"
                >
                  Edit
                </button>
                <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFeatureTemplates = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Feature Templates</h3>
          <p className="text-sm text-gray-600 mt-1">Reusable feature sets for different product categories</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Create Template
        </button>
      </div>

      <div className="space-y-4">
        {featureTemplates.map((template) => (
          <div key={template.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{template.name}</h4>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                  <span>{template.category}</span>
                  <span>•</span>
                  <span>{template.features.length} features</span>
                  <span>•</span>
                  <span>Used {template.usage} times</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-indigo-600 hover:text-indigo-900">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {template.features.map((feature, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{feature.name}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {feature.type}{feature.unit ? ` (${feature.unit})` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFeaturedProducts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Featured Products</h3>
          <p className="text-sm text-gray-600 mt-1">Products highlighted on the comparison page</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{product.image}</div>
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{product.category}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Comparisons</span>
                  <span className="font-semibold text-gray-900">{product.comparisons}</span>
                </div>
              </div>
              <button className="w-full px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 font-medium">
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Most Compared</p>
          <p className="text-xl font-bold text-gray-900">{comparisonAnalytics.mostComparedCategory}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Avg Per Session</p>
          <p className="text-xl font-bold text-gray-900">{comparisonAnalytics.avgComparisonPerSession}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Avg View Time</p>
          <p className="text-xl font-bold text-gray-900">{comparisonAnalytics.avgViewTime}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
          <p className="text-xl font-bold text-green-600">{comparisonAnalytics.comparisonToConversion}%</p>
        </div>
      </div>

      {/* Device Split */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Device Distribution</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Mobile</span>
              <span className="font-semibold text-gray-900">{comparisonAnalytics.deviceSplit.mobile}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-indigo-600 rounded-full"
                style={{ width: `${comparisonAnalytics.deviceSplit.mobile}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Desktop</span>
              <span className="font-semibold text-gray-900">{comparisonAnalytics.deviceSplit.desktop}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-purple-600 rounded-full"
                style={{ width: `${comparisonAnalytics.deviceSplit.desktop}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Tablet</span>
              <span className="font-semibold text-gray-900">{comparisonAnalytics.deviceSplit.tablet}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-green-600 rounded-full"
                style={{ width: `${comparisonAnalytics.deviceSplit.tablet}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Peak Hours */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Peak Comparison Hours</h3>
        <div className="flex gap-3">
          {comparisonAnalytics.topComparisonHours.map((hour, idx) => (
            <div key={idx} className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">{hour}</p>
              <p className="text-xs opacity-90 mt-1">Peak Time</p>
            </div>
          ))}
        </div>
      </div>

      {/* Category Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Performance by Category</h3>
        <div className="space-y-4">
          {[
            { category: 'Electronics', comparisons: 1234, conversions: 523, rate: 42.4 },
            { category: 'Fashion', comparisons: 987, conversions: 445, rate: 45.1 },
            { category: 'Home & Kitchen', comparisons: 654, conversions: 267, rate: 40.8 },
            { category: 'Sports', comparisons: 432, conversions: 189, rate: 43.8 },
            { category: 'Books', comparisons: 149, conversions: 58, rate: 38.9 }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{item.category}</h4>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                  <span>{item.comparisons} comparisons</span>
                  <span>•</span>
                  <span>{item.conversions} conversions</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-green-600">{item.rate}%</p>
                <p className="text-xs text-gray-600">conversion</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Product Comparison Management</h1>
              <p className="text-gray-600 mt-1">Configure comparison tools and track user behavior</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create New
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('groups')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'groups'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Comparison Groups
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'templates'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Feature Templates
          </button>
          <button
            onClick={() => setActiveTab('featured')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'featured'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Featured Products
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'analytics'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Analytics
          </button>
        </div>

        {/* Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'groups' && renderComparisonGroups()}
        {activeTab === 'templates' && renderFeatureTemplates()}
        {activeTab === 'featured' && renderFeaturedProducts()}
        {activeTab === 'analytics' && renderAnalytics()}
      </div>
    </div>
  );
}
