import { useState } from 'react';
import { Search, Zap, Plus, Clock, TrendingUp, Users, ShoppingCart, DollarSign, Calendar, AlertCircle, Play, Pause, BarChart3, Package } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminFlashSales() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedSale, setSelectedSale] = useState(null);

  const [flashSalesStats] = useState({
    activeSales: 3,
    scheduledSales: 5,
    totalRevenue: 2345678,
    avgConversionRate: 34.5,
    topPerformingSlot: 'Lunch Special (12-2 PM)',
    totalUnitsMoving: 1234
  });

  const [flashSales, setFlashSales] = useState([
    {
      id: 1,
      name: 'Lunch Special Flash Sale',
      description: 'Hot deals for lunch time orders',
      status: 'active',
      products: [
        { id: 1, name: 'Chicken Biryani', merchant: 'The Spice House', originalPrice: 350, flashPrice: 199, stock: 50, sold: 32 },
        { id: 2, name: 'Veg Thali', merchant: 'The Spice House', originalPrice: 200, flashPrice: 129, stock: 30, sold: 28 }
      ],
      startTime: '12:00',
      endTime: '14:00',
      startDate: '2024-01-20',
      endDate: '2024-01-31',
      maxQuantityPerUser: 2,
      totalStock: 80,
      totalSold: 60,
      revenue: 13680,
      participants: 45,
      conversionRate: 42.3,
      urgencyTimer: true,
      lowStockIndicator: 10
    },
    {
      id: 2,
      name: 'Evening Coffee Deals',
      description: 'Premium coffee at unbeatable prices',
      status: 'active',
      products: [
        { id: 3, name: 'Cappuccino', merchant: 'The Coffee House', originalPrice: 150, flashPrice: 99, stock: 100, sold: 67 },
        { id: 4, name: 'Caramel Latte', merchant: 'The Coffee House', originalPrice: 180, flashPrice: 119, stock: 80, sold: 52 }
      ],
      startTime: '16:00',
      endTime: '18:00',
      startDate: '2024-01-20',
      endDate: '2024-01-25',
      maxQuantityPerUser: 3,
      totalStock: 180,
      totalSold: 119,
      revenue: 12831,
      participants: 82,
      conversionRate: 38.7,
      urgencyTimer: true,
      lowStockIndicator: 15
    },
    {
      id: 3,
      name: 'Midnight Snack Attack',
      description: 'Late night cravings sorted',
      status: 'active',
      products: [
        { id: 5, name: 'Large Pizza', merchant: 'Pizza Paradise', originalPrice: 599, flashPrice: 399, stock: 40, sold: 34 },
        { id: 6, name: 'Garlic Bread', merchant: 'Pizza Paradise', originalPrice: 150, flashPrice: 99, stock: 60, sold: 48 }
      ],
      startTime: '22:00',
      endTime: '01:00',
      startDate: '2024-01-19',
      endDate: '2024-01-26',
      maxQuantityPerUser: 1,
      totalStock: 100,
      totalSold: 82,
      revenue: 18318,
      participants: 56,
      conversionRate: 45.2,
      urgencyTimer: true,
      lowStockIndicator: 8
    },
    {
      id: 4,
      name: 'Weekend Brunch Bonanza',
      description: 'Saturday & Sunday special breakfast deals',
      status: 'scheduled',
      products: [
        { id: 7, name: 'English Breakfast', merchant: 'The Breakfast Club', originalPrice: 450, flashPrice: 299, stock: 50, sold: 0 },
        { id: 8, name: 'Pancake Stack', merchant: 'The Breakfast Club', originalPrice: 300, flashPrice: 199, stock: 60, sold: 0 }
      ],
      startTime: '09:00',
      endTime: '12:00',
      startDate: '2024-01-27',
      endDate: '2024-01-28',
      maxQuantityPerUser: 2,
      totalStock: 110,
      totalSold: 0,
      revenue: 0,
      participants: 0,
      conversionRate: 0,
      urgencyTimer: true,
      lowStockIndicator: 10
    },
    {
      id: 5,
      name: 'Fashion Friday',
      description: 'End of season clothing clearance',
      status: 'scheduled',
      products: [
        { id: 9, name: 'Summer T-Shirt', merchant: 'Fashion Boutique', originalPrice: 799, flashPrice: 399, stock: 200, sold: 0 },
        { id: 10, name: 'Denim Jeans', merchant: 'Fashion Boutique', originalPrice: 1999, flashPrice: 1299, stock: 150, sold: 0 }
      ],
      startTime: '10:00',
      endTime: '22:00',
      startDate: '2024-01-26',
      endDate: '2024-01-26',
      maxQuantityPerUser: 5,
      totalStock: 350,
      totalSold: 0,
      revenue: 0,
      participants: 0,
      conversionRate: 0,
      urgencyTimer: true,
      lowStockIndicator: 20
    },
    {
      id: 6,
      name: 'Tech Tuesday',
      description: 'Electronics flash deals',
      status: 'ended',
      products: [
        { id: 11, name: 'Wireless Earbuds', merchant: 'Tech Store', originalPrice: 2999, flashPrice: 1999, stock: 100, sold: 100 },
        { id: 12, name: 'Phone Case', merchant: 'Tech Store', originalPrice: 499, flashPrice: 299, stock: 200, sold: 187 }
      ],
      startTime: '12:00',
      endTime: '18:00',
      startDate: '2024-01-16',
      endDate: '2024-01-16',
      maxQuantityPerUser: 2,
      totalStock: 300,
      totalSold: 287,
      revenue: 255813,
      participants: 178,
      conversionRate: 52.8,
      urgencyTimer: true,
      lowStockIndicator: 15
    }
  ]);

  const [liveMetrics] = useState({
    currentViewers: 234,
    cartAdditions: 45,
    checkouts: 32,
    revenue: 6840,
    avgTimeOnPage: '4m 32s'
  });

  const [timeSlots] = useState([
    { name: 'Breakfast Rush', time: '07:00 - 10:00', performance: 'High', avgConversion: 38.5 },
    { name: 'Lunch Special', time: '12:00 - 14:00', performance: 'Very High', avgConversion: 45.2 },
    { name: 'Tea Time', time: '16:00 - 18:00', performance: 'Medium', avgConversion: 32.8 },
    { name: 'Dinner Peak', time: '19:00 - 21:00', performance: 'High', avgConversion: 41.3 },
    { name: 'Midnight Snack', time: '22:00 - 01:00', performance: 'Medium', avgConversion: 35.7 },
    { name: 'All Day', time: '00:00 - 23:59', performance: 'Variable', avgConversion: 28.4 }
  ]);

  const filteredSales = flashSales.filter(sale =>
    sale.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sale.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateFlashSale = (saleData) => {
    const newSale = {
      id: flashSales.length + 1,
      ...saleData,
      totalSold: 0,
      revenue: 0,
      participants: 0,
      conversionRate: 0
    };
    setFlashSales([newSale, ...flashSales]);
    setShowCreateModal(false);
  };

  const handleToggleStatus = (id) => {
    setFlashSales(prev => prev.map(s =>
      s.id === id ? {
        ...s,
        status: s.status === 'active' ? 'paused' : s.status === 'paused' ? 'active' : s.status
      } : s
    ));
  };

  const handleDeleteSale = (id) => {
    setFlashSales(prev => prev.filter(s => s.id !== id));
    setSelectedSale(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'scheduled': return 'bg-blue-100 text-blue-700';
      case 'paused': return 'bg-orange-100 text-orange-700';
      case 'ended': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const calculateDiscount = (original, flash) => {
    return Math.round(((original - flash) / original) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Flash Sales Manager</h1>
              <p className="text-gray-600 mt-1">Create and manage time-limited flash sale deals</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Flash Sale
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Flash Sales</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{flashSalesStats.activeSales}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-blue-600">
              {flashSalesStats.scheduledSales} scheduled upcoming
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ₹{(flashSalesStats.totalRevenue / 100000).toFixed(2)}L
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                +28.5%
              </span>
              <span className="text-gray-600 text-sm">vs last week</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Avg Conversion Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{flashSalesStats.avgConversionRate}%</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              {flashSalesStats.totalUnitsMoving} units moving
            </div>
          </div>
        </div>

        {/* Live Metrics Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg p-6 mb-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 animate-pulse" />
            <h3 className="text-xl font-bold">Live Flash Sale Metrics</h3>
            <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">Real-time</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <p className="text-orange-100 text-sm">Current Viewers</p>
              <p className="text-2xl font-bold">{liveMetrics.currentViewers}</p>
            </div>
            <div>
              <p className="text-orange-100 text-sm">Cart Additions</p>
              <p className="text-2xl font-bold">{liveMetrics.cartAdditions}</p>
            </div>
            <div>
              <p className="text-orange-100 text-sm">Checkouts</p>
              <p className="text-2xl font-bold">{liveMetrics.checkouts}</p>
            </div>
            <div>
              <p className="text-orange-100 text-sm">Revenue (Now)</p>
              <p className="text-2xl font-bold">₹{liveMetrics.revenue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-orange-100 text-sm">Avg Time on Page</p>
              <p className="text-2xl font-bold">{liveMetrics.avgTimeOnPage}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'overview'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                All Flash Sales
              </button>
              <button
                onClick={() => setActiveTab('performance')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'performance'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Performance Analytics
              </button>
              <button
                onClick={() => setActiveTab('timeslots')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'timeslots'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Time Slot Analysis
              </button>
            </nav>
          </div>

          {/* All Flash Sales Tab */}
          {activeTab === 'overview' && (
            <div className="p-6">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search flash sales by name or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-6">
                {filteredSales.map((sale) => (
                  <div key={sale.id} className={`border-2 rounded-xl overflow-hidden ${
                    sale.status === 'active' ? 'border-green-300 bg-green-50' :
                    sale.status === 'scheduled' ? 'border-blue-300 bg-blue-50' :
                    sale.status === 'paused' ? 'border-orange-300 bg-orange-50' :
                    'border-gray-300 bg-gray-50'
                  }`}>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-4 rounded-lg ${
                            sale.status === 'active' ? 'bg-green-200' :
                            sale.status === 'scheduled' ? 'bg-blue-200' :
                            sale.status === 'paused' ? 'bg-orange-200' :
                            'bg-gray-200'
                          }`}>
                            <Zap className="w-8 h-8 text-gray-900" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{sale.name}</h3>
                            <p className="text-gray-600 mt-1">{sale.description}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {sale.startTime} - {sale.endTime}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {sale.startDate} to {sale.endDate}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-4 py-2 rounded-full text-sm font-bold ${getStatusColor(sale.status)}`}>
                            {sale.status.toUpperCase()}
                          </span>
                          {sale.status === 'active' && (
                            <button
                              onClick={() => handleToggleStatus(sale.id)}
                              className="p-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200"
                              title="Pause Sale"
                            >
                              <Pause className="w-5 h-5" />
                            </button>
                          )}
                          {sale.status === 'paused' && (
                            <button
                              onClick={() => handleToggleStatus(sale.id)}
                              className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200"
                              title="Resume Sale"
                            >
                              <Play className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Performance Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-xs text-gray-600 mb-1">Total Stock</p>
                          <p className="text-2xl font-bold text-gray-900">{sale.totalStock}</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-xs text-gray-600 mb-1">Units Sold</p>
                          <p className="text-2xl font-bold text-green-600">{sale.totalSold}</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-xs text-gray-600 mb-1">Revenue</p>
                          <p className="text-2xl font-bold text-purple-600">₹{sale.revenue.toLocaleString()}</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-xs text-gray-600 mb-1">Participants</p>
                          <p className="text-2xl font-bold text-blue-600">{sale.participants}</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-xs text-gray-600 mb-1">Conversion</p>
                          <p className="text-2xl font-bold text-indigo-600">{sale.conversionRate}%</p>
                        </div>
                      </div>

                      {/* Stock Progress */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Stock Status</span>
                          <span className="text-sm font-medium text-gray-900">
                            {sale.totalSold} / {sale.totalStock} sold ({Math.round((sale.totalSold / sale.totalStock) * 100)}%)
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${
                              (sale.totalStock - sale.totalSold) <= sale.lowStockIndicator
                                ? 'bg-red-500'
                                : 'bg-green-500'
                            }`}
                            style={{ width: `${(sale.totalSold / sale.totalStock) * 100}%` }}
                          />
                        </div>
                        {(sale.totalStock - sale.totalSold) <= sale.lowStockIndicator && (
                          <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            Low stock warning - Only {sale.totalStock - sale.totalSold} units remaining!
                          </div>
                        )}
                      </div>

                      {/* Products */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Products in Flash Sale</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {sale.products.map((product) => (
                            <div key={product.id} className="bg-white border-2 border-gray-200 rounded-lg p-4">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h5 className="font-bold text-gray-900">{product.name}</h5>
                                  <p className="text-sm text-gray-600">{product.merchant}</p>
                                </div>
                                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">
                                  {calculateDiscount(product.originalPrice, product.flashPrice)}% OFF
                                </span>
                              </div>
                              <div className="flex items-center gap-4 mb-3">
                                <div>
                                  <p className="text-xs text-gray-500 line-through">₹{product.originalPrice}</p>
                                  <p className="text-2xl font-bold text-red-600">₹{product.flashPrice}</p>
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-gray-600">Stock: {product.stock - product.sold}/{product.stock}</p>
                                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                    <div
                                      className="bg-indigo-600 h-2 rounded-full"
                                      style={{ width: `${(product.sold / product.stock) * 100}%` }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Settings */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              Max {sale.maxQuantityPerUser} per user
                            </div>
                            {sale.urgencyTimer && (
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Countdown timer enabled
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <AlertCircle className="w-4 h-4" />
                              Low stock at {sale.lowStockIndicator} units
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setSelectedSale(sale)}
                              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
                            >
                              Edit Sale
                            </button>
                            {sale.status === 'ended' && (
                              <button
                                onClick={() => handleDeleteSale(sale.id)}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                              >
                                Delete
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Performance Analytics Tab */}
          {activeTab === 'performance' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Flash Sale Performance Comparison</h3>
              <div className="space-y-4">
                {flashSales.filter(s => s.status !== 'scheduled').map((sale) => (
                  <div key={sale.id} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{sale.name}</h4>
                        <p className="text-sm text-gray-600">{sale.startTime} - {sale.endTime}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-purple-600">{sale.conversionRate}%</p>
                        <p className="text-sm text-gray-600">Conversion Rate</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Package className="w-4 h-4 text-blue-600" />
                          <p className="text-xs text-gray-600">Units Sold</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{sale.totalSold}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {Math.round((sale.totalSold / sale.totalStock) * 100)}% of stock
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <p className="text-xs text-gray-600">Revenue</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">₹{(sale.revenue / 1000).toFixed(1)}K</p>
                        <p className="text-xs text-gray-500 mt-1">
                          ₹{sale.totalSold > 0 ? Math.round(sale.revenue / sale.totalSold) : 0} avg/unit
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-4 h-4 text-purple-600" />
                          <p className="text-xs text-gray-600">Participants</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{sale.participants}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {sale.participants > 0 ? (sale.totalSold / sale.participants).toFixed(1) : 0} items/user
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-indigo-600" />
                          <p className="text-xs text-gray-600">Status</p>
                        </div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(sale.status)}`}>
                          {sale.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Time Slot Analysis Tab */}
          {activeTab === 'timeslots' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Time Slot Performance Analysis</h3>
              <div className="space-y-4">
                {timeSlots.map((slot, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{slot.name}</h4>
                        <p className="text-gray-600 flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4" />
                          {slot.time}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center px-4 py-2 rounded-full font-bold ${
                          slot.performance === 'Very High' ? 'bg-green-100 text-green-700' :
                          slot.performance === 'High' ? 'bg-blue-100 text-blue-700' :
                          slot.performance === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {slot.performance} Performance
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Avg conversion: {slot.avgConversion}%</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-indigo-600 h-3 rounded-full"
                        style={{ width: `${slot.avgConversion}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900">Optimization Tip</p>
                    <p className="text-sm text-blue-700 mt-1">
                      Schedule your flash sales during Lunch Special (12-2 PM) and Dinner Peak (7-9 PM) for maximum conversion rates.
                      These time slots consistently show 40%+ conversion rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Flash Sale Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full my-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Create New Flash Sale</h2>
              <p className="text-sm text-gray-600 mt-1">Set up a time-limited flash sale with discounted products</p>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Flash Sale Name</label>
                    <input
                      type="text"
                      id="saleName"
                      placeholder="Weekend Special Sale"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot</label>
                    <select id="timeSlot" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="breakfast">Breakfast Rush (7-10 AM)</option>
                      <option value="lunch">Lunch Special (12-2 PM)</option>
                      <option value="teatime">Tea Time (4-6 PM)</option>
                      <option value="dinner">Dinner Peak (7-9 PM)</option>
                      <option value="midnight">Midnight Snack (10PM-1AM)</option>
                      <option value="custom">Custom Time Range</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    id="saleDescription"
                    placeholder="Describe your flash sale..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    rows="2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                    <input
                      type="date"
                      id="startDate"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                    <input
                      type="date"
                      id="endDate"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                    <input
                      type="time"
                      id="startTime"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                    <input
                      type="time"
                      id="endTime"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Quantity Per User</label>
                    <input
                      type="number"
                      id="maxQty"
                      placeholder="2"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Low Stock Indicator</label>
                    <input
                      type="number"
                      id="lowStock"
                      placeholder="10"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" id="urgencyTimer" defaultChecked className="rounded" />
                    <span className="text-sm text-gray-700">Enable countdown timer</span>
                  </label>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    After creating the flash sale, you can add products and configure their flash prices in the edit view.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const saleData = {
                    name: document.getElementById('saleName').value,
                    description: document.getElementById('saleDescription').value,
                    startDate: document.getElementById('startDate').value,
                    endDate: document.getElementById('endDate').value,
                    startTime: document.getElementById('startTime').value,
                    endTime: document.getElementById('endTime').value,
                    maxQuantityPerUser: parseInt(document.getElementById('maxQty').value) || 1,
                    lowStockIndicator: parseInt(document.getElementById('lowStock').value) || 10,
                    urgencyTimer: document.getElementById('urgencyTimer').checked,
                    status: 'scheduled',
                    products: [],
                    totalStock: 0
                  };
                  handleCreateFlashSale(saleData);
                }}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Create Flash Sale
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
