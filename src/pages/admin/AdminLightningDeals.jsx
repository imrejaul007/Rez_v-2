import { useState } from 'react';
import { Search, Zap, Plus, Clock, TrendingUp, Users, DollarSign, Calendar, AlertCircle, Play, Pause, Edit, Trash2, BarChart3, Package, Target, Award } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminLightningDeals() {
  const [activeTab, setActiveTab] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const [lightningDealsStats] = useState({
    activeDeals: 12,
    totalRedemptions: 3456,
    totalRevenue: 4567890,
    avgConversionRate: 42.5,
    avgTimeToSellOut: '18 minutes',
    mostPopularCategory: 'Electronics'
  });

  const [lightningDeals, setLightningDeals] = useState([
    {
      id: 1,
      title: 'iPhone 15 Lightning Deal',
      merchant: 'Tech Galaxy',
      category: 'Electronics',
      originalPrice: 79900,
      dealPrice: 69900,
      discountPercent: 13,
      discountCode: 'LIGHTNING15',
      totalQuantity: 100,
      redeemedCount: 67,
      expiryTime: '2024-01-25T18:00:00',
      createdAt: '2024-01-25T12:00:00',
      status: 'active',
      views: 2345,
      cartAdds: 234,
      conversionRate: 28.6,
      revenue: 4683300,
      urgencyLevel: 'high',
      stockAlert: 10
    },
    {
      id: 2,
      title: 'Premium Headphones Flash',
      merchant: 'Audio World',
      category: 'Electronics',
      originalPrice: 12999,
      dealPrice: 7999,
      discountPercent: 38,
      discountCode: 'AUDIO38',
      totalQuantity: 50,
      redeemedCount: 50,
      expiryTime: '2024-01-24T20:00:00',
      createdAt: '2024-01-24T18:00:00',
      status: 'expired',
      views: 1876,
      cartAdds: 189,
      conversionRate: 26.5,
      revenue: 399950,
      urgencyLevel: 'medium',
      stockAlert: 5
    },
    {
      id: 3,
      title: 'Designer Sunglasses Deal',
      merchant: 'Fashion Hub',
      category: 'Fashion',
      originalPrice: 5999,
      dealPrice: 2999,
      discountPercent: 50,
      discountCode: 'SUN50',
      totalQuantity: 200,
      redeemedCount: 145,
      expiryTime: '2024-01-25T22:00:00',
      createdAt: '2024-01-25T10:00:00',
      status: 'active',
      views: 4567,
      cartAdds: 567,
      conversionRate: 25.6,
      revenue: 434855,
      urgencyLevel: 'high',
      stockAlert: 20
    },
    {
      id: 4,
      title: 'Smart Watch Lightning',
      merchant: 'Gadget Store',
      category: 'Electronics',
      originalPrice: 24999,
      dealPrice: 17999,
      discountPercent: 28,
      discountCode: 'WATCH28',
      totalQuantity: 75,
      redeemedCount: 8,
      expiryTime: '2024-01-25T16:30:00',
      createdAt: '2024-01-25T14:00:00',
      status: 'active',
      views: 892,
      cartAdds: 67,
      conversionRate: 11.9,
      revenue: 143992,
      urgencyLevel: 'low',
      stockAlert: 10
    },
    {
      id: 5,
      title: 'Luxury Perfume Deal',
      merchant: 'Beauty Paradise',
      category: 'Beauty',
      originalPrice: 8999,
      dealPrice: 4999,
      discountPercent: 44,
      discountCode: 'SCENT44',
      totalQuantity: 150,
      redeemedCount: 0,
      expiryTime: '2024-01-28T12:00:00',
      createdAt: '2024-01-26T09:00:00',
      status: 'upcoming',
      views: 0,
      cartAdds: 0,
      conversionRate: 0,
      revenue: 0,
      urgencyLevel: 'medium',
      stockAlert: 15
    },
    {
      id: 6,
      title: 'Gaming Console Bundle',
      merchant: 'Game Zone',
      category: 'Gaming',
      originalPrice: 54999,
      dealPrice: 44999,
      discountPercent: 18,
      discountCode: 'GAME18',
      totalQuantity: 30,
      redeemedCount: 30,
      expiryTime: '2024-01-23T23:59:00',
      createdAt: '2024-01-23T12:00:00',
      status: 'expired',
      views: 3456,
      cartAdds: 234,
      conversionRate: 12.8,
      revenue: 1349970,
      urgencyLevel: 'high',
      stockAlert: 5
    },
    {
      id: 7,
      title: 'Premium Coffee Maker',
      merchant: 'Kitchen Pro',
      category: 'Home',
      originalPrice: 15999,
      dealPrice: 9999,
      discountPercent: 38,
      discountCode: 'COFFEE38',
      totalQuantity: 80,
      redeemedCount: 23,
      expiryTime: '2024-01-25T19:00:00',
      createdAt: '2024-01-25T11:00:00',
      status: 'active',
      views: 1234,
      cartAdds: 123,
      conversionRate: 18.7,
      revenue: 229977,
      urgencyLevel: 'medium',
      stockAlert: 10
    },
    {
      id: 8,
      title: 'Fitness Tracker Flash',
      merchant: 'Fit Life',
      category: 'Fitness',
      originalPrice: 4999,
      dealPrice: 2499,
      discountPercent: 50,
      discountCode: 'FIT50',
      totalQuantity: 120,
      redeemedCount: 5,
      expiryTime: '2024-01-25T15:00:00',
      createdAt: '2024-01-25T13:30:00',
      status: 'active',
      views: 456,
      cartAdds: 34,
      conversionRate: 14.7,
      revenue: 12495,
      urgencyLevel: 'low',
      stockAlert: 12
    },
    {
      id: 9,
      title: 'Premium Backpack Deal',
      merchant: 'Travel Gear',
      category: 'Travel',
      originalPrice: 3999,
      dealPrice: 1999,
      discountPercent: 50,
      discountCode: 'TRAVEL50',
      totalQuantity: 100,
      redeemedCount: 0,
      expiryTime: '2024-01-27T10:00:00',
      createdAt: '2024-01-26T08:00:00',
      status: 'upcoming',
      views: 0,
      cartAdds: 0,
      conversionRate: 0,
      revenue: 0,
      urgencyLevel: 'medium',
      stockAlert: 10
    },
    {
      id: 10,
      title: 'Wireless Earbuds Lightning',
      merchant: 'Audio World',
      category: 'Electronics',
      originalPrice: 6999,
      dealPrice: 3999,
      discountPercent: 43,
      discountCode: 'EARBUD43',
      totalQuantity: 150,
      redeemedCount: 98,
      expiryTime: '2024-01-25T21:00:00',
      createdAt: '2024-01-25T09:00:00',
      status: 'active',
      views: 3456,
      cartAdds: 456,
      conversionRate: 21.5,
      revenue: 391902,
      urgencyLevel: 'high',
      stockAlert: 15
    }
  ]);

  const [performanceMetrics] = useState({
    hourlyRedemptions: [12, 18, 24, 35, 42, 38, 45, 52, 48, 55, 62, 58],
    categoryPerformance: [
      { category: 'Electronics', deals: 45, redemptions: 1234, revenue: 2345678, avgConversion: 28.5 },
      { category: 'Fashion', deals: 32, redemptions: 987, revenue: 1234567, avgConversion: 32.1 },
      { category: 'Beauty', deals: 28, redemptions: 765, revenue: 987654, avgConversion: 25.4 },
      { category: 'Home', deals: 21, redemptions: 543, revenue: 765432, avgConversion: 22.8 },
      { category: 'Gaming', deals: 15, redemptions: 432, revenue: 654321, avgConversion: 30.2 }
    ]
  });

  const filteredDeals = lightningDeals.filter(deal => {
    const matchesSearch = deal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         deal.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         deal.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || deal.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const activeDealsList = filteredDeals.filter(d => d.status === 'active');
  const upcomingDealsList = filteredDeals.filter(d => d.status === 'upcoming');
  const expiredDealsList = filteredDeals.filter(d => d.status === 'expired');

  const handleCreateDeal = (dealData) => {
    const newDeal = {
      id: lightningDeals.length + 1,
      ...dealData,
      redeemedCount: 0,
      views: 0,
      cartAdds: 0,
      conversionRate: 0,
      revenue: 0,
      createdAt: new Date().toISOString()
    };
    setLightningDeals([newDeal, ...lightningDeals]);
    setShowCreateModal(false);
  };

  const handleEditDeal = (dealData) => {
    setLightningDeals(prev => prev.map(d =>
      d.id === selectedDeal.id ? { ...d, ...dealData } : d
    ));
    setShowEditModal(false);
    setSelectedDeal(null);
  };

  const handleToggleStatus = (id) => {
    setLightningDeals(prev => prev.map(d =>
      d.id === id ? {
        ...d,
        status: d.status === 'active' ? 'paused' : d.status === 'paused' ? 'active' : d.status
      } : d
    ));
  };

  const handleDeleteDeal = (id) => {
    setLightningDeals(prev => prev.filter(d => d.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'upcoming': return 'bg-blue-100 text-blue-700';
      case 'paused': return 'bg-orange-100 text-orange-700';
      case 'expired': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getUrgencyColor = (level) => {
    switch (level) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getRemainingTime = (expiryTime) => {
    const now = new Date();
    const expiry = new Date(expiryTime);
    const diff = expiry - now;
    if (diff < 0) return 'Expired';
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Lightning Deals Manager</h1>
              <p className="text-gray-600 mt-1">Manage time-limited quantity-based flash deals</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Lightning Deal
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
                <p className="text-gray-600 text-sm font-medium">Active Lightning Deals</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{lightningDealsStats.activeDeals}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                +15.3%
              </span>
              <span className="text-gray-600 text-sm">vs last week</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Redemptions</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{lightningDealsStats.totalRedemptions.toLocaleString()}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Avg: {lightningDealsStats.avgTimeToSellOut} to sell out
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ₹{(lightningDealsStats.totalRevenue / 100000).toFixed(2)}L
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Avg conversion: {lightningDealsStats.avgConversionRate}%
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search deals by title, merchant, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="upcoming">Upcoming</option>
              <option value="expired">Expired</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('active')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'active'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Active Deals ({activeDealsList.length})
              </button>
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'upcoming'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Upcoming ({upcomingDealsList.length})
              </button>
              <button
                onClick={() => setActiveTab('expired')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'expired'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Expired ({expiredDealsList.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'analytics'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Performance Analytics
              </button>
            </nav>
          </div>

          {/* Active Deals Tab */}
          {activeTab === 'active' && (
            <div className="p-6">
              <div className="space-y-4">
                {activeDealsList.map((deal) => (
                  <div key={deal.id} className="border-2 border-green-300 bg-green-50 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{deal.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(deal.status)}`}>
                            {deal.status.toUpperCase()}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getUrgencyColor(deal.urgencyLevel)}`}>
                            {deal.urgencyLevel.toUpperCase()} URGENCY
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{deal.merchant}</span>
                          <span>•</span>
                          <span>{deal.category}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            Expires in {getRemainingTime(deal.expiryTime)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleToggleStatus(deal.id)}
                          className="p-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200"
                          title="Pause Deal"
                        >
                          <Pause className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedDeal(deal);
                            setShowEditModal(true);
                          }}
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                          title="Edit Deal"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Price and Discount */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Original Price</p>
                        <p className="text-lg font-bold text-gray-400 line-through">₹{deal.originalPrice.toLocaleString()}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Deal Price</p>
                        <p className="text-lg font-bold text-red-600">₹{deal.dealPrice.toLocaleString()}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Discount</p>
                        <p className="text-lg font-bold text-green-600">{deal.discountPercent}% OFF</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Discount Code</p>
                        <p className="text-lg font-bold text-indigo-600">{deal.discountCode}</p>
                      </div>
                    </div>

                    {/* Stock Progress */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Stock Redemption</span>
                        <span className="text-sm font-medium text-gray-900">
                          {deal.redeemedCount} / {deal.totalQuantity} redeemed ({Math.round((deal.redeemedCount / deal.totalQuantity) * 100)}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${
                            (deal.totalQuantity - deal.redeemedCount) <= deal.stockAlert
                              ? 'bg-red-500'
                              : 'bg-green-500'
                          }`}
                          style={{ width: `${(deal.redeemedCount / deal.totalQuantity) * 100}%` }}
                        />
                      </div>
                      {(deal.totalQuantity - deal.redeemedCount) <= deal.stockAlert && (
                        <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          Low stock alert - Only {deal.totalQuantity - deal.redeemedCount} units remaining!
                        </div>
                      )}
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Users className="w-4 h-4 text-blue-600" />
                          <p className="text-xs text-gray-600">Views</p>
                        </div>
                        <p className="text-xl font-bold text-gray-900">{deal.views.toLocaleString()}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Package className="w-4 h-4 text-purple-600" />
                          <p className="text-xs text-gray-600">Cart Adds</p>
                        </div>
                        <p className="text-xl font-bold text-gray-900">{deal.cartAdds}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Target className="w-4 h-4 text-green-600" />
                          <p className="text-xs text-gray-600">Conversion</p>
                        </div>
                        <p className="text-xl font-bold text-gray-900">{deal.conversionRate}%</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Award className="w-4 h-4 text-orange-600" />
                          <p className="text-xs text-gray-600">Redeemed</p>
                        </div>
                        <p className="text-xl font-bold text-gray-900">{deal.redeemedCount}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className="w-4 h-4 text-indigo-600" />
                          <p className="text-xs text-gray-600">Revenue</p>
                        </div>
                        <p className="text-xl font-bold text-gray-900">₹{(deal.revenue / 1000).toFixed(0)}K</p>
                      </div>
                    </div>
                  </div>
                ))}
                {activeDealsList.length === 0 && (
                  <div className="text-center py-12">
                    <Zap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No active lightning deals found</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Upcoming Deals Tab */}
          {activeTab === 'upcoming' && (
            <div className="p-6">
              <div className="space-y-4">
                {upcomingDealsList.map((deal) => (
                  <div key={deal.id} className="border-2 border-blue-300 bg-blue-50 rounded-xl p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{deal.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(deal.status)}`}>
                            {deal.status.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <span>{deal.merchant}</span>
                          <span>•</span>
                          <span>{deal.category}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Starts: {new Date(deal.expiryTime).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-6">
                          <div>
                            <p className="text-xs text-gray-600">Deal Price</p>
                            <p className="text-2xl font-bold text-red-600">₹{deal.dealPrice.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Discount</p>
                            <p className="text-2xl font-bold text-green-600">{deal.discountPercent}% OFF</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Total Quantity</p>
                            <p className="text-2xl font-bold text-indigo-600">{deal.totalQuantity}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Code</p>
                            <p className="text-xl font-bold text-purple-600">{deal.discountCode}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedDeal(deal);
                            setShowEditModal(true);
                          }}
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteDeal(deal.id)}
                          className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {upcomingDealsList.length === 0 && (
                  <div className="text-center py-12">
                    <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No upcoming lightning deals scheduled</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Expired Deals Tab */}
          {activeTab === 'expired' && (
            <div className="p-6">
              <div className="space-y-4">
                {expiredDealsList.map((deal) => (
                  <div key={deal.id} className="border border-gray-300 bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{deal.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(deal.status)}`}>
                            {deal.status.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{deal.merchant}</span>
                          <span>•</span>
                          <span>{deal.category}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Total Quantity</p>
                        <p className="text-lg font-bold text-gray-900">{deal.totalQuantity}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Redeemed</p>
                        <p className="text-lg font-bold text-green-600">{deal.redeemedCount}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Redemption %</p>
                        <p className="text-lg font-bold text-blue-600">
                          {Math.round((deal.redeemedCount / deal.totalQuantity) * 100)}%
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Views</p>
                        <p className="text-lg font-bold text-purple-600">{deal.views.toLocaleString()}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Conversion</p>
                        <p className="text-lg font-bold text-orange-600">{deal.conversionRate}%</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Revenue</p>
                        <p className="text-lg font-bold text-indigo-600">₹{(deal.revenue / 1000).toFixed(0)}K</p>
                      </div>
                    </div>
                  </div>
                ))}
                {expiredDealsList.length === 0 && (
                  <div className="text-center py-12">
                    <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No expired lightning deals</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Performance Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Category Performance</h3>
              <div className="space-y-4">
                {performanceMetrics.categoryPerformance.map((cat, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{cat.category}</h4>
                        <p className="text-sm text-gray-600">{cat.deals} lightning deals</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-purple-600">{cat.avgConversion}%</p>
                        <p className="text-sm text-gray-600">Avg Conversion</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-blue-600" />
                          <p className="text-xs text-gray-600">Redemptions</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{cat.redemptions.toLocaleString()}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <p className="text-xs text-gray-600">Revenue</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">₹{(cat.revenue / 100000).toFixed(1)}L</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-purple-600" />
                          <p className="text-xs text-gray-600">Avg Per Deal</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">
                          ₹{((cat.revenue / cat.deals) / 1000).toFixed(0)}K
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full my-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Create Lightning Deal</h2>
              <p className="text-sm text-gray-600 mt-1">Set up a time-limited quantity-based deal</p>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deal Title</label>
                    <input
                      type="text"
                      id="dealTitle"
                      placeholder="iPhone 15 Lightning Deal"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Merchant</label>
                    <input
                      type="text"
                      id="merchant"
                      placeholder="Tech Galaxy"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select id="category" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="Electronics">Electronics</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Beauty">Beauty</option>
                      <option value="Home">Home</option>
                      <option value="Gaming">Gaming</option>
                      <option value="Fitness">Fitness</option>
                      <option value="Travel">Travel</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                    <select id="urgencyLevel" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Original Price</label>
                    <input
                      type="number"
                      id="originalPrice"
                      placeholder="79900"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deal Price</label>
                    <input
                      type="number"
                      id="dealPrice"
                      placeholder="69900"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Discount Code</label>
                    <input
                      type="text"
                      id="discountCode"
                      placeholder="LIGHTNING15"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Total Quantity</label>
                    <input
                      type="number"
                      id="totalQuantity"
                      placeholder="100"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Stock Alert Threshold</label>
                    <input
                      type="number"
                      id="stockAlert"
                      placeholder="10"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date/Time</label>
                    <input
                      type="datetime-local"
                      id="expiryTime"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select id="status" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option value="upcoming">Upcoming</option>
                    <option value="active">Active</option>
                  </select>
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
                  const originalPrice = parseFloat(document.getElementById('originalPrice').value);
                  const dealPrice = parseFloat(document.getElementById('dealPrice').value);
                  const dealData = {
                    title: document.getElementById('dealTitle').value,
                    merchant: document.getElementById('merchant').value,
                    category: document.getElementById('category').value,
                    originalPrice: originalPrice,
                    dealPrice: dealPrice,
                    discountPercent: Math.round(((originalPrice - dealPrice) / originalPrice) * 100),
                    discountCode: document.getElementById('discountCode').value,
                    totalQuantity: parseInt(document.getElementById('totalQuantity').value),
                    stockAlert: parseInt(document.getElementById('stockAlert').value),
                    expiryTime: document.getElementById('expiryTime').value,
                    status: document.getElementById('status').value,
                    urgencyLevel: document.getElementById('urgencyLevel').value
                  };
                  handleCreateDeal(dealData);
                }}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Create Lightning Deal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedDeal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full my-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Edit Lightning Deal</h2>
              <p className="text-sm text-gray-600 mt-1">Update deal details</p>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deal Title</label>
                    <input
                      type="text"
                      id="editDealTitle"
                      defaultValue={selectedDeal.title}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Total Quantity</label>
                    <input
                      type="number"
                      id="editTotalQuantity"
                      defaultValue={selectedDeal.totalQuantity}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deal Price</label>
                    <input
                      type="number"
                      id="editDealPrice"
                      defaultValue={selectedDeal.dealPrice}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date/Time</label>
                    <input
                      type="datetime-local"
                      id="editExpiryTime"
                      defaultValue={selectedDeal.expiryTime.slice(0, 16)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setSelectedDeal(null);
                }}
                className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const dealData = {
                    title: document.getElementById('editDealTitle').value,
                    totalQuantity: parseInt(document.getElementById('editTotalQuantity').value),
                    dealPrice: parseFloat(document.getElementById('editDealPrice').value),
                    expiryTime: document.getElementById('editExpiryTime').value
                  };
                  handleEditDeal(dealData);
                }}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Update Deal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
