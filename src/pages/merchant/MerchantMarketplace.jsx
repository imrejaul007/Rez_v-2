import { useState } from 'react';
import { ShoppingBag, TrendingUp, Package, DollarSign, Eye, Users, MapPin, Star, ShoppingCart, ArrowRight, Filter, Truck, BarChart3, AlertCircle, CheckCircle, Clock, Upload, Image as ImageIcon } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantMarketplace() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for marketplace listings
  const marketplaceListings = [
    {
      id: 'ml-001',
      productName: 'Organic Cotton T-Shirt',
      category: 'Fashion',
      price: 799,
      discount: 15,
      stock: 245,
      views: 3425,
      orders: 128,
      revenue: 102272,
      rating: 4.6,
      reviews: 89,
      status: 'active',
      visibility: 'nationwide',
      lastUpdated: '2025-12-27'
    },
    {
      id: 'ml-002',
      productName: 'Handmade Leather Wallet',
      category: 'Accessories',
      price: 1299,
      discount: 20,
      stock: 78,
      views: 2156,
      orders: 67,
      revenue: 87033,
      rating: 4.8,
      reviews: 54,
      status: 'active',
      visibility: 'regional',
      lastUpdated: '2025-12-26'
    },
    {
      id: 'ml-003',
      productName: 'Artisan Coffee Beans 500g',
      category: 'Food & Beverage',
      price: 499,
      discount: 10,
      stock: 0,
      views: 1234,
      orders: 45,
      revenue: 22455,
      rating: 4.5,
      reviews: 32,
      status: 'out_of_stock',
      visibility: 'city',
      lastUpdated: '2025-12-25'
    },
    {
      id: 'ml-004',
      productName: 'Handcrafted Pottery Set',
      category: 'Home Decor',
      price: 2499,
      discount: 25,
      stock: 34,
      views: 1876,
      orders: 28,
      revenue: 69972,
      rating: 4.9,
      reviews: 23,
      status: 'active',
      visibility: 'nationwide',
      lastUpdated: '2025-12-24'
    }
  ];

  // Marketplace performance stats
  const performanceStats = [
    {
      label: 'Total Revenue',
      value: '₹2,81,732',
      change: '+18.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Total Orders',
      value: '268',
      change: '+12.5%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Active Listings',
      value: '42',
      change: '+5',
      trend: 'up',
      icon: Package,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Avg. Rating',
      value: '4.7',
      change: '+0.2',
      trend: 'up',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  // Distribution channels
  const distributionChannels = [
    { channel: 'ReZ Mall', orders: 145, revenue: 156420, percentage: 55.6 },
    { channel: 'Brand Direct', orders: 78, revenue: 89234, percentage: 31.7 },
    { channel: 'Partner Stores', orders: 45, revenue: 36078, percentage: 12.7 }
  ];

  // Top performing products
  const topProducts = [
    { name: 'Organic Cotton T-Shirt', orders: 128, revenue: 102272 },
    { name: 'Handmade Leather Wallet', orders: 67, revenue: 87033 },
    { name: 'Handcrafted Pottery Set', orders: 28, revenue: 69972 },
    { name: 'Artisan Coffee Beans', orders: 45, revenue: 22455 }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { label: 'Active', className: 'bg-green-100 text-green-700' },
      out_of_stock: { label: 'Out of Stock', className: 'bg-red-100 text-red-700' },
      inactive: { label: 'Inactive', className: 'bg-gray-100 text-gray-700' }
    };
    const config = statusConfig[status] || statusConfig.inactive;
    return <span className={`px-2 py-1 text-xs rounded-full font-medium ${config.className}`}>{config.label}</span>;
  };

  const getVisibilityBadge = (visibility) => {
    const visibilityConfig = {
      nationwide: { label: 'Nationwide', className: 'bg-purple-100 text-purple-700' },
      regional: { label: 'Regional', className: 'bg-blue-100 text-blue-700' },
      city: { label: 'City Only', className: 'bg-cyan-100 text-cyan-700' }
    };
    const config = visibilityConfig[visibility] || visibilityConfig.city;
    return <span className={`px-2 py-1 text-xs rounded-full font-medium ${config.className}`}>{config.label}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <MerchantNav />
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <ShoppingBag className="w-8 h-8" />
                <h1 className="text-3xl font-bold">D2C Marketplace</h1>
              </div>
              <p className="text-indigo-100">Sell your products directly to customers across the ReZ ecosystem</p>
            </div>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Add New Product
            </button>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendingUp className="w-4 h-4" />
                    {stat.change}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Main Content Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Tabs */}
          <div className="border-b border-gray-200 px-6">
            <div className="flex gap-4 overflow-x-auto">
              {['overview', 'listings', 'analytics', 'settings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 font-semibold text-sm capitalize whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Distribution Channels */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribution Channels</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {distributionChannels.map((channel, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">{channel.channel}</h4>
                          <span className="text-sm text-gray-600">{channel.percentage}%</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Orders:</span>
                            <span className="font-semibold text-gray-900">{channel.orders}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Revenue:</span>
                            <span className="font-semibold text-gray-900">₹{channel.revenue.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Performing Products */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Products</h3>
                  <div className="space-y-3">
                    {topProducts.map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                            <Package className="w-6 h-6 text-indigo-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{product.name}</p>
                            <p className="text-sm text-gray-600">{product.orders} orders</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">₹{product.revenue.toLocaleString()}</p>
                          <p className="text-sm text-gray-600">Revenue</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'listings' && (
              <div className="space-y-4">
                {/* Filters */}
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    <option value="fashion">Fashion</option>
                    <option value="accessories">Accessories</option>
                    <option value="food">Food & Beverage</option>
                    <option value="home">Home Decor</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Out of Stock</option>
                    <option>Inactive</option>
                  </select>
                </div>

                {/* Listings Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Product</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Category</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Price</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Stock</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Performance</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Visibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketplaceListings.map((listing) => (
                        <tr key={listing.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                                <ImageIcon className="w-5 h-5 text-gray-500" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{listing.productName}</p>
                                <p className="text-xs text-gray-600">ID: {listing.id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-700">{listing.category}</td>
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-semibold text-gray-900">₹{listing.price}</p>
                              {listing.discount > 0 && (
                                <p className="text-xs text-green-600">{listing.discount}% off</p>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`font-semibold ${listing.stock > 0 ? 'text-gray-900' : 'text-red-600'}`}>
                              {listing.stock}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm">
                                <Eye className="w-4 h-4 text-gray-500" />
                                <span className="text-gray-700">{listing.views.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <ShoppingCart className="w-4 h-4 text-gray-500" />
                                <span className="text-gray-700">{listing.orders} orders</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                <span className="text-gray-700">{listing.rating} ({listing.reviews})</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">{getStatusBadge(listing.status)}</td>
                          <td className="py-4 px-4">{getVisibilityBadge(listing.visibility)}</td>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
                    <div className="h-48 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                      <p className="text-gray-600">Revenue chart visualization</p>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Volume</h3>
                    <div className="h-48 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                      <p className="text-gray-600">Order volume chart</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Marketplace Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Default Visibility</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                        <option>Nationwide</option>
                        <option>Regional</option>
                        <option>City Only</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Shipping Methods</label>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded text-indigo-600" checked readOnly />
                          <span className="text-sm text-gray-700">Standard Delivery (3-5 days)</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded text-indigo-600" checked readOnly />
                          <span className="text-sm text-gray-700">Express Delivery (1-2 days)</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded text-indigo-600" />
                          <span className="text-sm text-gray-700">Same Day Delivery</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Return Policy</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                        <option>7 Days Return</option>
                        <option>14 Days Return</option>
                        <option>30 Days Return</option>
                        <option>No Returns</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
