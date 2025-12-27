import { useState } from 'react';
import { Search, TrendingDown, TrendingUp, Bell, BarChart3, AlertCircle, Clock, Package, Store, DollarSign, Activity, ArrowDownRight, ArrowUpRight, CheckCircle, Eye, Settings, Filter } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminPriceTracking() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [priceTrackingStats] = useState({
    totalTrackedProducts: 1245,
    activeAlerts: 89,
    priceDropsToday: 23,
    alertsSentToday: 156,
    avgPriceDrop: 12.5,
    conversionRate: 34.8
  });

  const [trackedProducts, setTrackedProducts] = useState([
    {
      id: 1,
      productName: 'iPhone 15 Pro Max 256GB',
      productImage: '📱',
      category: 'Electronics',
      merchant: 'TechMart',
      currentPrice: 139900,
      previousPrice: 149900,
      lowestPrice: 134900,
      highestPrice: 154900,
      priceChange: -10000,
      priceChangePercent: -6.67,
      priceTrend: 'decreasing',
      trackingSince: '2024-01-15',
      lastPriceUpdate: '2024-01-28 10:30 AM',
      alertThreshold: 5,
      usersTracking: 234,
      alertsSent: 45,
      status: 'active'
    },
    {
      id: 2,
      productName: 'Nike Air Max 270',
      productImage: '👟',
      category: 'Fashion',
      merchant: 'SportZone',
      currentPrice: 12999,
      previousPrice: 11999,
      lowestPrice: 10999,
      highestPrice: 14999,
      priceChange: 1000,
      priceChangePercent: 8.33,
      priceTrend: 'increasing',
      trackingSince: '2024-01-10',
      lastPriceUpdate: '2024-01-28 09:15 AM',
      alertThreshold: 10,
      usersTracking: 156,
      alertsSent: 23,
      status: 'active'
    },
    {
      id: 3,
      productName: 'Sony WH-1000XM5 Headphones',
      productImage: '🎧',
      category: 'Electronics',
      merchant: 'AudioPro',
      currentPrice: 29990,
      previousPrice: 29990,
      lowestPrice: 24990,
      highestPrice: 32990,
      priceChange: 0,
      priceChangePercent: 0,
      priceTrend: 'stable',
      trackingSince: '2024-01-20',
      lastPriceUpdate: '2024-01-28 08:45 AM',
      alertThreshold: 8,
      usersTracking: 189,
      alertsSent: 12,
      status: 'active'
    },
    {
      id: 4,
      productName: 'Samsung 55" 4K Smart TV',
      productImage: '📺',
      category: 'Electronics',
      merchant: 'ElectroWorld',
      currentPrice: 54990,
      previousPrice: 59990,
      lowestPrice: 49990,
      highestPrice: 64990,
      priceChange: -5000,
      priceChangePercent: -8.33,
      priceTrend: 'decreasing',
      trackingSince: '2024-01-05',
      lastPriceUpdate: '2024-01-28 11:00 AM',
      alertThreshold: 5,
      usersTracking: 312,
      alertsSent: 67,
      status: 'active'
    },
    {
      id: 5,
      productName: 'Adidas Ultraboost 22',
      productImage: '👟',
      category: 'Fashion',
      merchant: 'FitGear',
      currentPrice: 16999,
      previousPrice: 17999,
      lowestPrice: 15999,
      highestPrice: 18999,
      priceChange: -1000,
      priceChangePercent: -5.56,
      priceTrend: 'decreasing',
      trackingSince: '2024-01-12',
      lastPriceUpdate: '2024-01-28 07:30 AM',
      alertThreshold: 10,
      usersTracking: 98,
      alertsSent: 18,
      status: 'active'
    }
  ]);

  const [priceAlerts, setPriceAlerts] = useState([
    {
      id: 1,
      productName: 'iPhone 15 Pro Max 256GB',
      merchant: 'TechMart',
      alertType: 'price_drop',
      oldPrice: 149900,
      newPrice: 139900,
      dropAmount: 10000,
      dropPercent: 6.67,
      usersNotified: 234,
      conversionRate: 38.5,
      timestamp: '2024-01-28 10:30 AM',
      status: 'sent'
    },
    {
      id: 2,
      productName: 'Samsung 55" 4K Smart TV',
      merchant: 'ElectroWorld',
      alertType: 'price_drop',
      oldPrice: 59990,
      newPrice: 54990,
      dropAmount: 5000,
      dropPercent: 8.33,
      usersNotified: 312,
      conversionRate: 42.3,
      timestamp: '2024-01-28 11:00 AM',
      status: 'sent'
    },
    {
      id: 3,
      productName: 'Adidas Ultraboost 22',
      merchant: 'FitGear',
      alertType: 'price_drop',
      oldPrice: 17999,
      newPrice: 16999,
      dropAmount: 1000,
      dropPercent: 5.56,
      usersNotified: 98,
      conversionRate: 28.6,
      timestamp: '2024-01-28 07:30 AM',
      status: 'sent'
    },
    {
      id: 4,
      productName: 'Nike Air Max 270',
      merchant: 'SportZone',
      alertType: 'price_increase',
      oldPrice: 11999,
      newPrice: 12999,
      dropAmount: 1000,
      dropPercent: 8.33,
      usersNotified: 0,
      conversionRate: 0,
      timestamp: '2024-01-28 09:15 AM',
      status: 'suppressed'
    }
  ]);

  const [competitorPrices, setCompetitorPrices] = useState([
    {
      id: 1,
      productName: 'iPhone 15 Pro Max 256GB',
      ourPrice: 139900,
      competitors: [
        { merchant: 'Amazon', price: 141900, difference: 2000, status: 'competitive' },
        { merchant: 'Flipkart', price: 138900, difference: -1000, status: 'underpriced' },
        { merchant: 'Croma', price: 144900, difference: 5000, status: 'competitive' }
      ],
      marketPosition: 'competitive',
      recommendedAction: 'maintain'
    },
    {
      id: 2,
      productName: 'Samsung 55" 4K Smart TV',
      ourPrice: 54990,
      competitors: [
        { merchant: 'Amazon', price: 56990, difference: 2000, status: 'competitive' },
        { merchant: 'Flipkart', price: 52990, difference: -2000, status: 'underpriced' },
        { merchant: 'Vijay Sales', price: 57990, difference: 3000, status: 'competitive' }
      ],
      marketPosition: 'competitive',
      recommendedAction: 'monitor'
    },
    {
      id: 3,
      productName: 'Sony WH-1000XM5 Headphones',
      ourPrice: 29990,
      competitors: [
        { merchant: 'Amazon', price: 28990, difference: -1000, status: 'underpriced' },
        { merchant: 'Flipkart', price: 27990, difference: -2000, status: 'underpriced' },
        { merchant: 'Reliance Digital', price: 29990, difference: 0, status: 'matched' }
      ],
      marketPosition: 'overpriced',
      recommendedAction: 'reduce'
    }
  ]);

  const [priceHistory] = useState([
    { date: '2024-01-01', avgPrice: 45678, priceDrops: 12, priceIncreases: 8 },
    { date: '2024-01-08', avgPrice: 44890, priceDrops: 18, priceIncreases: 5 },
    { date: '2024-01-15', avgPrice: 43567, priceDrops: 23, priceIncreases: 7 },
    { date: '2024-01-22', avgPrice: 42890, priceDrops: 19, priceIncreases: 11 },
    { date: '2024-01-28', avgPrice: 41234, priceDrops: 15, priceIncreases: 9 }
  ]);

  const [alertConfig] = useState({
    priceDropThreshold: 5,
    significantDropThreshold: 10,
    priceIncreaseAlert: false,
    lowestPriceAlert: true,
    competitorPriceAlert: true,
    alertFrequency: 'immediate',
    notificationChannels: ['push', 'email', 'sms']
  });

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Tracked Products</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {priceTrackingStats.totalTrackedProducts.toLocaleString()}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {priceTrackingStats.activeAlerts} active alerts
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Price Drops Today</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {priceTrackingStats.priceDropsToday}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingDown className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="flex items-center text-sm text-green-600">
              <ArrowDownRight className="w-4 h-4" />
              {priceTrackingStats.avgPriceDrop}% avg drop
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Alerts Sent Today</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {priceTrackingStats.alertsSentToday}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Bell className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {priceTrackingStats.conversionRate}% conversion rate
          </div>
        </div>
      </div>

      {/* Price Trend Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Price Trends (Last 30 Days)</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
              7D
            </button>
            <button className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-lg">
              30D
            </button>
            <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
              90D
            </button>
          </div>
        </div>
        <div className="space-y-4">
          {priceHistory.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-24 text-sm text-gray-600">{item.date}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-2 bg-gray-200 rounded-full flex-1">
                    <div
                      className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      style={{ width: `${(item.avgPrice / 50000) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">₹{item.avgPrice.toLocaleString()}</span>
                </div>
                <div className="flex gap-4 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <TrendingDown className="w-3 h-3 text-green-600" />
                    {item.priceDrops} drops
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-red-600" />
                    {item.priceIncreases} increases
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Price Changes */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">Recent Price Changes</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {trackedProducts.slice(0, 5).map((product) => (
            <div key={product.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{product.productImage}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900">{product.productName}</h4>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-gray-600">{product.merchant}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{product.category}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{product.usersTracking} tracking</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    {product.priceChange !== 0 && (
                      <span className="text-xs text-gray-500 line-through">
                        ₹{product.previousPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-lg font-bold text-gray-900">
                      ₹{product.currentPrice.toLocaleString()}
                    </span>
                  </div>
                  {product.priceChange !== 0 && (
                    <div className={`flex items-center gap-1 text-sm mt-1 ${
                      product.priceChange < 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {product.priceChange < 0 ? (
                        <TrendingDown className="w-4 h-4" />
                      ) : (
                        <TrendingUp className="w-4 h-4" />
                      )}
                      {Math.abs(product.priceChangePercent).toFixed(2)}%
                    </div>
                  )}
                  {product.priceChange === 0 && (
                    <span className="text-sm text-gray-500">No change</span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 border border-indigo-600 rounded-lg hover:bg-indigo-50"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTrackedProducts = () => (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search tracked products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </button>
        <button
          onClick={() => setShowConfigModal(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price Change
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trend
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tracking
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Alerts
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {trackedProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{product.productImage}</div>
                      <div>
                        <div className="font-medium text-gray-900">{product.productName}</div>
                        <div className="text-sm text-gray-500">{product.merchant} • {product.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">₹{product.currentPrice.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">
                      Range: ₹{product.lowestPrice.toLocaleString()} - ₹{product.highestPrice.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {product.priceChange !== 0 ? (
                      <div className={`font-medium ${product.priceChange < 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {product.priceChange < 0 ? '-' : '+'}₹{Math.abs(product.priceChange).toLocaleString()}
                        <div className="text-xs">({product.priceChangePercent.toFixed(2)}%)</div>
                      </div>
                    ) : (
                      <span className="text-gray-500">No change</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {product.priceTrend === 'decreasing' && (
                        <>
                          <TrendingDown className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Decreasing</span>
                        </>
                      )}
                      {product.priceTrend === 'increasing' && (
                        <>
                          <TrendingUp className="w-4 h-4 text-red-600" />
                          <span className="text-sm text-red-600">Increasing</span>
                        </>
                      )}
                      {product.priceTrend === 'stable' && (
                        <>
                          <Activity className="w-4 h-4 text-gray-600" />
                          <span className="text-sm text-gray-600">Stable</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{product.usersTracking} users</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{product.alertsSent} sent</div>
                    <div className="text-xs text-gray-500">Threshold: {product.alertThreshold}%</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      product.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAlerts = () => (
    <div className="space-y-6">
      {/* Alert Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Alerts Sent</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
            <Bell className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Price Drop Alerts</p>
              <p className="text-2xl font-bold text-green-600">134</p>
            </div>
            <TrendingDown className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-purple-600">34.8%</p>
            </div>
            <BarChart3 className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg. Response Time</p>
              <p className="text-2xl font-bold text-orange-600">2.5h</p>
            </div>
            <Clock className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Alerts List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Recent Price Alerts</h3>
            <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
              View All
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {priceAlerts.map((alert) => (
            <div key={alert.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${
                  alert.alertType === 'price_drop' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {alert.alertType === 'price_drop' ? (
                    <TrendingDown className="w-5 h-5 text-green-600" />
                  ) : (
                    <TrendingUp className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900">{alert.productName}</h4>
                  <p className="text-sm text-gray-600 mt-1">{alert.merchant}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="text-sm">
                      <span className="text-gray-500 line-through">₹{alert.oldPrice.toLocaleString()}</span>
                      {' → '}
                      <span className={`font-semibold ${
                        alert.alertType === 'price_drop' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        ₹{alert.newPrice.toLocaleString()}
                      </span>
                    </div>
                    <span className={`text-sm font-medium ${
                      alert.alertType === 'price_drop' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      ({alert.dropPercent.toFixed(2)}% {alert.alertType === 'price_drop' ? 'down' : 'up'})
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                    <span>{alert.timestamp}</span>
                    {alert.status === 'sent' && (
                      <>
                        <span>•</span>
                        <span>{alert.usersNotified} users notified</span>
                        <span>•</span>
                        <span>{alert.conversionRate}% conversion</span>
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    alert.status === 'sent'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {alert.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCompetitors = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">Competitive Price Monitoring</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {competitorPrices.map((product) => (
            <div key={product.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{product.productName}</h4>
                  <p className="text-sm text-gray-600 mt-1">Our Price: ₹{product.ourPrice.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    product.marketPosition === 'competitive'
                      ? 'bg-green-100 text-green-800'
                      : product.marketPosition === 'overpriced'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {product.marketPosition}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">Action: {product.recommendedAction}</p>
                </div>
              </div>
              <div className="space-y-3">
                {product.competitors.map((competitor, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Store className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-gray-900">{competitor.merchant}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-900 font-semibold">₹{competitor.price.toLocaleString()}</span>
                      <span className={`text-sm font-medium ${
                        competitor.difference < 0 ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {competitor.difference > 0 ? '+' : ''}₹{competitor.difference.toLocaleString()}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        competitor.status === 'competitive'
                          ? 'bg-green-100 text-green-800'
                          : competitor.status === 'underpriced'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {competitor.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Alert Effectiveness</h3>
            <BarChart3 className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Open Rate</span>
                <span className="font-semibold">87.5%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '87.5%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Click Rate</span>
                <span className="font-semibold">65.3%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-600 rounded-full" style={{ width: '65.3%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Conversion Rate</span>
                <span className="font-semibold">34.8%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-600 rounded-full" style={{ width: '34.8%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Price Tracking Impact</h3>
            <DollarSign className="w-5 h-5 text-green-600" />
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Revenue from Alerts</p>
              <p className="text-2xl font-bold text-gray-900">₹12.4L</p>
              <p className="text-xs text-green-600 mt-1">+18.5% vs last month</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg. Order Value</p>
              <p className="text-2xl font-bold text-gray-900">₹3,567</p>
              <p className="text-xs text-green-600 mt-1">+12.3% vs last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">User Engagement</h3>
            <Activity className="w-5 h-5 text-blue-600" />
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Active Trackers</p>
              <p className="text-2xl font-bold text-gray-900">3,456</p>
              <p className="text-xs text-green-600 mt-1">+23.4% vs last month</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg. Tracked Items/User</p>
              <p className="text-2xl font-bold text-gray-900">4.2</p>
              <p className="text-xs text-green-600 mt-1">+8.7% vs last month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Performance by Category</h3>
        <div className="space-y-4">
          {[
            { category: 'Electronics', tracked: 456, alerts: 234, conversion: 38.5, revenue: 567890 },
            { category: 'Fashion', tracked: 345, alerts: 178, conversion: 32.1, revenue: 345678 },
            { category: 'Home & Kitchen', tracked: 234, alerts: 123, conversion: 28.9, revenue: 234567 },
            { category: 'Sports', tracked: 123, alerts: 67, conversion: 25.4, revenue: 123456 },
            { category: 'Books', tracked: 87, alerts: 45, conversion: 22.3, revenue: 87654 }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{item.category}</h4>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                  <span>{item.tracked} tracked</span>
                  <span>•</span>
                  <span>{item.alerts} alerts</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">₹{(item.revenue / 1000).toFixed(1)}K</p>
                <p className="text-sm text-gray-600">{item.conversion}% conversion</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderConfiguration = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Alert Configuration</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Drop Threshold
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="20"
                value={alertConfig.priceDropThreshold}
                className="flex-1"
              />
              <span className="text-sm font-semibold text-gray-900 w-12 text-right">
                {alertConfig.priceDropThreshold}%
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Notify users when price drops by this percentage
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Significant Drop Threshold
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="5"
                max="30"
                value={alertConfig.significantDropThreshold}
                className="flex-1"
              />
              <span className="text-sm font-semibold text-gray-900 w-12 text-right">
                {alertConfig.significantDropThreshold}%
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Mark as significant price drop for priority alerts
            </p>
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={alertConfig.priceIncreaseAlert}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">Send alerts for price increases</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={alertConfig.lowestPriceAlert}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">Alert when price reaches all-time low</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={alertConfig.competitorPriceAlert}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">Alert when competitor price is lower</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notification Channels
            </label>
            <div className="flex gap-3">
              {['push', 'email', 'sms'].map((channel) => (
                <label key={channel} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={alertConfig.notificationChannels.includes(channel)}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700 capitalize">{channel}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
              Save Configuration
            </button>
          </div>
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
              <h1 className="text-3xl font-bold text-gray-900">Price Tracking & Alerts</h1>
              <p className="text-gray-600 mt-1">Monitor product prices and send automated alerts to users</p>
            </div>
            <button
              onClick={() => setShowConfigModal(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Configure Alerts
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
            onClick={() => setActiveTab('tracked')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'tracked'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Tracked Products
          </button>
          <button
            onClick={() => setActiveTab('alerts')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'alerts'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Alerts History
          </button>
          <button
            onClick={() => setActiveTab('competitors')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'competitors'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Competitor Prices
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
          <button
            onClick={() => setActiveTab('configuration')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'configuration'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Configuration
          </button>
        </div>

        {/* Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'tracked' && renderTrackedProducts()}
        {activeTab === 'alerts' && renderAlerts()}
        {activeTab === 'competitors' && renderCompetitors()}
        {activeTab === 'analytics' && renderAnalytics()}
        {activeTab === 'configuration' && renderConfiguration()}
      </div>
    </div>
  );
}
