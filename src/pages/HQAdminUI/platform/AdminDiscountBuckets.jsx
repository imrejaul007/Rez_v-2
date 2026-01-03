import { useState } from 'react';
import { Search, Package, Plus, TrendingUp, Users, DollarSign, Target, BarChart3, Award, Zap, Truck, Edit, Eye } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminDiscountBuckets() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [selectedBucket, setSelectedBucket] = useState(null);

  const [bucketsStats] = useState({
    totalDeals: 1234,
    totalRedemptions: 45678,
    totalRevenue: 12345678,
    avgEngagementRate: 56.7,
    mostPopularBucket: '50% Off Bucket',
    userParticipation: 34567
  });

  const [buckets, setBuckets] = useState([
    {
      id: 1,
      name: '25% Off Bucket',
      discountPercent: 25,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      borderColor: 'border-blue-300',
      bgColor: 'bg-blue-50',
      threshold: {
        minSpend: 500,
        minSavings: 100,
        category: 'All'
      },
      dealsCount: 456,
      redemptions: 12345,
      revenue: 3456789,
      engagementRate: 45.3,
      avgBasketSize: 1234,
      autoAssign: true,
      featuredCampaign: null,
      topDeals: [
        { merchant: 'Fashion Hub', deal: '25% Off Summer Collection', redemptions: 2345 },
        { merchant: 'Tech Store', deal: '25% Off Accessories', redemptions: 1987 },
        { merchant: 'Home Decor', deal: '25% Off Furnishings', redemptions: 1654 }
      ]
    },
    {
      id: 2,
      name: '50% Off Bucket',
      discountPercent: 50,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      borderColor: 'border-purple-300',
      bgColor: 'bg-purple-50',
      threshold: {
        minSpend: 1000,
        minSavings: 300,
        category: 'Premium'
      },
      dealsCount: 234,
      redemptions: 18901,
      revenue: 5678901,
      engagementRate: 68.9,
      avgBasketSize: 2345,
      autoAssign: true,
      featuredCampaign: {
        name: 'Weekend Mega Sale',
        startDate: '2024-01-27',
        endDate: '2024-01-28',
        bonusCoins: 500
      },
      topDeals: [
        { merchant: 'Electronics Store', deal: '50% Off Premium Gadgets', redemptions: 4567 },
        { merchant: 'Beauty World', deal: '50% Off Luxury Cosmetics', redemptions: 3456 },
        { merchant: 'Fitness Zone', deal: '50% Off Gym Equipment', redemptions: 2890 }
      ]
    },
    {
      id: 3,
      name: '80% Off Bucket',
      discountPercent: 80,
      color: 'bg-gradient-to-r from-orange-500 to-red-500',
      borderColor: 'border-orange-300',
      bgColor: 'bg-orange-50',
      threshold: {
        minSpend: 2000,
        minSavings: 1000,
        category: 'Super Premium'
      },
      dealsCount: 89,
      redemptions: 8765,
      revenue: 2345678,
      engagementRate: 82.4,
      avgBasketSize: 4567,
      autoAssign: true,
      featuredCampaign: {
        name: 'Flash Clearance',
        startDate: '2024-01-25',
        endDate: '2024-01-31',
        bonusCoins: 1000
      },
      topDeals: [
        { merchant: 'Fashion Boutique', deal: '80% Off End of Season', redemptions: 3456 },
        { merchant: 'Book Store', deal: '80% Off Clearance Sale', redemptions: 2345 },
        { merchant: 'Toy World', deal: '80% Off Last Stock', redemptions: 1876 }
      ]
    },
    {
      id: 4,
      name: 'Free Delivery Bucket',
      discountPercent: 0,
      deliveryType: 'Free',
      color: 'bg-gradient-to-r from-green-500 to-emerald-500',
      borderColor: 'border-green-300',
      bgColor: 'bg-green-50',
      threshold: {
        minSpend: 300,
        minSavings: 0,
        category: 'All'
      },
      dealsCount: 678,
      redemptions: 23456,
      revenue: 4567890,
      engagementRate: 72.1,
      avgBasketSize: 890,
      autoAssign: true,
      featuredCampaign: null,
      topDeals: [
        { merchant: 'Food Paradise', deal: 'Free Delivery on All Orders', redemptions: 5678 },
        { merchant: 'Grocery Mart', deal: 'Free Home Delivery', redemptions: 4567 },
        { merchant: 'Restaurant Chain', deal: 'Zero Delivery Charges', redemptions: 3987 }
      ]
    }
  ]);

  const [bucketPerformance] = useState([
    { month: 'Jan', bucket25: 12000, bucket50: 18000, bucket80: 8000, freeDelivery: 23000 },
    { month: 'Feb', bucket25: 15000, bucket50: 22000, bucket80: 10000, freeDelivery: 27000 },
    { month: 'Mar', bucket25: 18000, bucket50: 28000, bucket80: 12000, freeDelivery: 32000 },
    { month: 'Apr', bucket25: 14000, bucket50: 24000, bucket80: 9000, freeDelivery: 29000 }
  ]);

  const [userEngagement] = useState({
    newUsers: 12345,
    returningUsers: 22456,
    avgDealsPerUser: 3.4,
    bucketSwitchRate: 45.6,
    crossBucketUsers: 8901,
    loyaltyRate: 67.8
  });

  const [featuredCampaigns, setFeaturedCampaigns] = useState([
    {
      id: 1,
      name: 'Super Saver Weekend',
      bucket: '50% Off Bucket',
      startDate: '2024-01-27',
      endDate: '2024-01-28',
      bonusCoins: 500,
      status: 'upcoming',
      participatingDeals: 45,
      projectedRedemptions: 5000
    },
    {
      id: 2,
      name: 'Mega Clearance Event',
      bucket: '80% Off Bucket',
      startDate: '2024-01-25',
      endDate: '2024-01-31',
      bonusCoins: 1000,
      status: 'active',
      participatingDeals: 28,
      actualRedemptions: 3456
    },
    {
      id: 3,
      name: 'Free Delivery Month',
      bucket: 'Free Delivery Bucket',
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      bonusCoins: 100,
      status: 'active',
      participatingDeals: 156,
      actualRedemptions: 12345
    }
  ]);

  const filteredBuckets = buckets.filter(bucket =>
    bucket.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUpdateThreshold = (bucketId, thresholdData) => {
    setBuckets(prev => prev.map(b =>
      b.id === bucketId ? { ...b, threshold: { ...b.threshold, ...thresholdData } } : b
    ));
    setShowConfigModal(false);
    setSelectedBucket(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'upcoming': return 'bg-blue-100 text-blue-700';
      case 'expired': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Discount Buckets Manager</h1>
              <p className="text-gray-600 mt-1">Configure and manage the 4 discount bucket system</p>
            </div>
            <button
              onClick={() => setShowConfigModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Featured Campaign
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
                <p className="text-gray-600 text-sm font-medium">Total Deals</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{bucketsStats.totalDeals.toLocaleString()}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Across all buckets
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Redemptions</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{bucketsStats.totalRedemptions.toLocaleString()}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                +18.5%
              </span>
              <span className="text-gray-600 text-sm">vs last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ₹{(bucketsStats.totalRevenue / 10000000).toFixed(1)}Cr
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Avg engagement: {bucketsStats.avgEngagementRate}%
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search buckets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
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
                Bucket Overview
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
                onClick={() => setActiveTab('engagement')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'engagement'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                User Engagement
              </button>
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'campaigns'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Featured Campaigns
              </button>
            </nav>
          </div>

          {/* Bucket Overview Tab */}
          {activeTab === 'overview' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredBuckets.map((bucket) => (
                  <div key={bucket.id} className={`border-2 ${bucket.borderColor} ${bucket.bgColor} rounded-xl p-6`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`${bucket.color} text-white px-4 py-2 rounded-lg font-bold text-xl`}>
                            {bucket.deliveryType ? bucket.deliveryType : `${bucket.discountPercent}%`}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">{bucket.name}</h3>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedBucket(bucket);
                          setShowConfigModal(true);
                        }}
                        className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                        <Edit className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>

                    {/* Threshold Configuration */}
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Threshold Settings</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs text-gray-600">Min Spend</p>
                          <p className="text-lg font-bold text-gray-900">₹{bucket.threshold.minSpend}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Min Savings</p>
                          <p className="text-lg font-bold text-green-600">₹{bucket.threshold.minSavings}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Category</p>
                          <p className="text-sm font-medium text-gray-900">{bucket.threshold.category}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          bucket.autoAssign ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {bucket.autoAssign ? 'Auto-Assign: ON' : 'Auto-Assign: OFF'}
                        </span>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Package className="w-4 h-4 text-blue-600" />
                          <p className="text-xs text-gray-600">Deals</p>
                        </div>
                        <p className="text-xl font-bold text-gray-900">{bucket.dealsCount}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Target className="w-4 h-4 text-purple-600" />
                          <p className="text-xs text-gray-600">Redemptions</p>
                        </div>
                        <p className="text-xl font-bold text-gray-900">{(bucket.redemptions / 1000).toFixed(1)}K</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <p className="text-xs text-gray-600">Revenue</p>
                        </div>
                        <p className="text-xl font-bold text-gray-900">₹{(bucket.revenue / 100000).toFixed(0)}L</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <BarChart3 className="w-4 h-4 text-indigo-600" />
                          <p className="text-xs text-gray-600">Engagement</p>
                        </div>
                        <p className="text-xl font-bold text-gray-900">{bucket.engagementRate}%</p>
                      </div>
                    </div>

                    {/* Avg Basket Size */}
                    <div className="bg-white rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Avg Basket Size</span>
                        <span className="text-lg font-bold text-indigo-600">₹{bucket.avgBasketSize.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Featured Campaign */}
                    {bucket.featuredCampaign && (
                      <div className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-lg p-4 mb-4 border border-yellow-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-yellow-600" />
                          <p className="font-semibold text-gray-900">Featured Campaign</p>
                        </div>
                        <p className="text-sm text-gray-700 mb-1">{bucket.featuredCampaign.name}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-600">
                          <span>{bucket.featuredCampaign.startDate} - {bucket.featuredCampaign.endDate}</span>
                          <span className="text-green-600 font-semibold">+{bucket.featuredCampaign.bonusCoins} coins</span>
                        </div>
                      </div>
                    )}

                    {/* Top Deals */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Top Performing Deals</h4>
                      <div className="space-y-2">
                        {bucket.topDeals.slice(0, 3).map((deal, idx) => (
                          <div key={idx} className="bg-white rounded-lg p-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{deal.merchant}</p>
                                <p className="text-xs text-gray-600">{deal.deal}</p>
                              </div>
                              <p className="text-sm font-bold text-purple-600">{deal.redemptions.toLocaleString()}</p>
                            </div>
                          </div>
                        ))}
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
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Bucket Performance Trends</h3>

              {/* Monthly Comparison */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Monthly Redemptions by Bucket</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Month</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-blue-600">25% Off</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-purple-600">50% Off</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-orange-600">80% Off</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-green-600">Free Delivery</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {bucketPerformance.map((month, idx) => (
                        <tr key={idx} className="bg-white hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-900">{month.month}</td>
                          <td className="px-4 py-3 text-blue-600">{month.bucket25.toLocaleString()}</td>
                          <td className="px-4 py-3 text-purple-600">{month.bucket50.toLocaleString()}</td>
                          <td className="px-4 py-3 text-orange-600">{month.bucket80.toLocaleString()}</td>
                          <td className="px-4 py-3 text-green-600">{month.freeDelivery.toLocaleString()}</td>
                          <td className="px-4 py-3 font-bold text-gray-900">
                            {(month.bucket25 + month.bucket50 + month.bucket80 + month.freeDelivery).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bucket Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {buckets.map((bucket) => (
                  <div key={bucket.id} className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`${bucket.color} text-white px-3 py-1 rounded font-bold`}>
                        {bucket.deliveryType || `${bucket.discountPercent}%`}
                      </div>
                      <h4 className="font-semibold text-gray-900">{bucket.name}</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Total Deals</span>
                        <span className="font-bold text-gray-900">{bucket.dealsCount}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Redemptions</span>
                        <span className="font-bold text-purple-600">{bucket.redemptions.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Revenue</span>
                        <span className="font-bold text-green-600">₹{(bucket.revenue / 100000).toFixed(1)}L</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Engagement Rate</span>
                        <span className="font-bold text-indigo-600">{bucket.engagementRate}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Avg Basket</span>
                        <span className="font-bold text-orange-600">₹{bucket.avgBasketSize.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* User Engagement Tab */}
          {activeTab === 'engagement' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">User Engagement Metrics</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-8 h-8" />
                    <p className="text-sm font-medium opacity-90">New Users</p>
                  </div>
                  <p className="text-3xl font-bold">{userEngagement.newUsers.toLocaleString()}</p>
                  <p className="text-sm opacity-90 mt-2">First-time bucket users</p>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-8 h-8" />
                    <p className="text-sm font-medium opacity-90">Returning Users</p>
                  </div>
                  <p className="text-3xl font-bold">{userEngagement.returningUsers.toLocaleString()}</p>
                  <p className="text-sm opacity-90 mt-2">Repeat bucket users</p>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-8 h-8" />
                    <p className="text-sm font-medium opacity-90">Avg Deals per User</p>
                  </div>
                  <p className="text-3xl font-bold">{userEngagement.avgDealsPerUser}</p>
                  <p className="text-sm opacity-90 mt-2">Deals redeemed per user</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="w-5 h-5 text-orange-600" />
                    <h4 className="font-semibold text-gray-900">Bucket Switch Rate</h4>
                  </div>
                  <p className="text-3xl font-bold text-orange-600 mb-2">{userEngagement.bucketSwitchRate}%</p>
                  <p className="text-sm text-gray-600">Users switching between buckets</p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-indigo-600" />
                    <h4 className="font-semibold text-gray-900">Cross-Bucket Users</h4>
                  </div>
                  <p className="text-3xl font-bold text-indigo-600 mb-2">{userEngagement.crossBucketUsers.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Using multiple buckets</p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-gray-900">Loyalty Rate</h4>
                  </div>
                  <p className="text-3xl font-bold text-green-600 mb-2">{userEngagement.loyaltyRate}%</p>
                  <p className="text-sm text-gray-600">Consistent bucket users</p>
                </div>
              </div>
            </div>
          )}

          {/* Featured Campaigns Tab */}
          {activeTab === 'campaigns' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Featured Bucket Campaigns</h3>

              <div className="space-y-4">
                {featuredCampaigns.map((campaign) => (
                  <div key={campaign.id} className={`border-2 rounded-xl p-6 ${
                    campaign.status === 'active' ? 'border-green-300 bg-green-50' :
                    campaign.status === 'upcoming' ? 'border-blue-300 bg-blue-50' :
                    'border-gray-300 bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Zap className="w-6 h-6 text-yellow-600" />
                          <h4 className="text-xl font-bold text-gray-900">{campaign.name}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(campaign.status)}`}>
                            {campaign.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2">
                          <span className="font-semibold">Bucket:</span> {campaign.bucket}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{campaign.startDate} - {campaign.endDate}</span>
                          <span className="text-green-600 font-semibold">+{campaign.bonusCoins} bonus coins</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Participating Deals</p>
                        <p className="text-2xl font-bold text-gray-900">{campaign.participatingDeals}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">
                          {campaign.status === 'upcoming' ? 'Projected' : 'Actual'} Redemptions
                        </p>
                        <p className="text-2xl font-bold text-purple-600">
                          {campaign.status === 'upcoming' ? campaign.projectedRedemptions : campaign.actualRedemptions}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Bonus Coins</p>
                        <p className="text-2xl font-bold text-green-600">+{campaign.bonusCoins}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Configuration Modal */}
      {showConfigModal && selectedBucket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Configure {selectedBucket.name}</h2>
              <p className="text-sm text-gray-600 mt-1">Update threshold settings</p>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Spend (₹)</label>
                    <input
                      type="number"
                      id="minSpend"
                      defaultValue={selectedBucket.threshold.minSpend}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Savings (₹)</label>
                    <input
                      type="number"
                      id="minSavings"
                      defaultValue={selectedBucket.threshold.minSavings}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select id="category" defaultValue={selectedBucket.threshold.category} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option value="All">All Categories</option>
                    <option value="Premium">Premium</option>
                    <option value="Super Premium">Super Premium</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="autoAssign" defaultChecked={selectedBucket.autoAssign} className="rounded" />
                  <label htmlFor="autoAssign" className="text-sm text-gray-700">Enable auto-assignment of deals</label>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => {
                  setShowConfigModal(false);
                  setSelectedBucket(null);
                }}
                className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const thresholdData = {
                    minSpend: parseInt(document.getElementById('minSpend').value),
                    minSavings: parseInt(document.getElementById('minSavings').value),
                    category: document.getElementById('category').value
                  };
                  handleUpdateThreshold(selectedBucket.id, thresholdData);
                }}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
