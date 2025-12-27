import { useState } from 'react';
import { Search, Instagram, Facebook, Twitter, Share2, TrendingUp, Users, BarChart3, Link2, CheckCircle, XCircle, AlertCircle, Settings, ShoppingBag, Tag, Eye, MessageCircle, Heart, ArrowUpRight } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminSocialIntegration() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [showConfigModal, setShowConfigModal] = useState(false);

  const [socialStats] = useState({
    totalConnections: 3,
    activeConnections: 2,
    totalReach: 456789,
    socialTraffic: 12.5,
    socialConversions: 234,
    conversionRate: 8.7
  });

  const [platforms, setPlatforms] = useState([
    {
      id: 1,
      name: 'Instagram',
      icon: Instagram,
      status: 'connected',
      accountName: '@rez_official',
      followers: 45678,
      lastSync: '2024-01-28 10:30 AM',
      features: ['Shopping', 'Feed', 'Stories', 'Auto-post'],
      traffic: 5678,
      conversions: 156,
      conversionRate: 2.7,
      reach: 234567,
      engagement: 4.5,
      color: 'pink'
    },
    {
      id: 2,
      name: 'Facebook',
      icon: Facebook,
      status: 'connected',
      accountName: 'ReZ Shopping',
      followers: 89123,
      lastSync: '2024-01-28 10:25 AM',
      features: ['Catalog', 'Page', 'Shop', 'Auto-post'],
      traffic: 4567,
      conversions: 98,
      conversionRate: 2.1,
      reach: 156789,
      engagement: 3.2,
      color: 'blue'
    },
    {
      id: 3,
      name: 'Twitter',
      icon: Twitter,
      status: 'disconnected',
      accountName: null,
      followers: 0,
      lastSync: null,
      features: [],
      traffic: 0,
      conversions: 0,
      conversionRate: 0,
      reach: 0,
      engagement: 0,
      color: 'sky'
    }
  ]);

  const [socialFeed, setSocialFeed] = useState([
    {
      id: 1,
      platform: 'Instagram',
      icon: Instagram,
      type: 'post',
      content: 'New Flash Sale Alert! 50% off on all electronics this weekend only!',
      image: '🎉',
      timestamp: '2024-01-28 09:30 AM',
      likes: 1234,
      comments: 89,
      shares: 45,
      reach: 23456,
      engagement: 5.8,
      clicks: 234,
      conversions: 12
    },
    {
      id: 2,
      platform: 'Facebook',
      icon: Facebook,
      type: 'product',
      content: 'iPhone 15 Pro Max - Limited Stock Available',
      image: '📱',
      timestamp: '2024-01-28 08:15 AM',
      likes: 876,
      comments: 54,
      shares: 23,
      reach: 18234,
      engagement: 5.2,
      clicks: 189,
      conversions: 8
    },
    {
      id: 3,
      platform: 'Instagram',
      icon: Instagram,
      type: 'story',
      content: 'Daily Deals Update - Swipe up for exclusive offers',
      image: '⚡',
      timestamp: '2024-01-27 06:00 PM',
      likes: 567,
      comments: 23,
      shares: 12,
      reach: 12345,
      engagement: 4.9,
      clicks: 145,
      conversions: 6
    },
    {
      id: 4,
      platform: 'Facebook',
      icon: Facebook,
      type: 'offer',
      content: 'Bank Offer: Extra 10% off with HDFC Cards',
      image: '💳',
      timestamp: '2024-01-27 02:30 PM',
      likes: 654,
      comments: 34,
      shares: 18,
      reach: 15678,
      engagement: 4.5,
      clicks: 167,
      conversions: 7
    }
  ]);

  const [shoppingIntegration, setShoppingIntegration] = useState({
    instagram: {
      enabled: true,
      connectedCatalog: 'ReZ Product Catalog',
      totalProducts: 1245,
      taggedProducts: 456,
      productViews: 12345,
      productClicks: 2345,
      purchases: 156,
      revenue: 456789,
      lastSync: '2024-01-28 10:30 AM'
    },
    facebook: {
      enabled: true,
      connectedCatalog: 'ReZ FB Catalog',
      totalProducts: 1245,
      taggedProducts: 389,
      productViews: 8976,
      productClicks: 1876,
      purchases: 98,
      revenue: 289012,
      lastSync: '2024-01-28 10:25 AM'
    }
  });

  const [autoPostConfig, setAutoPostConfig] = useState({
    newProducts: {
      enabled: true,
      platforms: ['Instagram', 'Facebook'],
      schedule: 'immediate',
      template: 'New Arrival Alert'
    },
    offers: {
      enabled: true,
      platforms: ['Instagram', 'Facebook'],
      schedule: 'scheduled',
      time: '09:00 AM',
      template: 'Special Offer'
    },
    flashSales: {
      enabled: true,
      platforms: ['Instagram', 'Facebook'],
      schedule: 'immediate',
      template: 'Flash Sale Alert'
    },
    dailyDeals: {
      enabled: false,
      platforms: ['Instagram'],
      schedule: 'daily',
      time: '08:00 AM',
      template: 'Daily Deals'
    }
  });

  const [hashtagTracking, setHashtagTracking] = useState([
    {
      id: 1,
      hashtag: '#ReZShopping',
      platform: 'Instagram',
      uses: 2345,
      reach: 45678,
      engagement: 5.6,
      posts: 234
    },
    {
      id: 2,
      hashtag: '#ReZDeals',
      platform: 'Instagram',
      uses: 1876,
      reach: 34567,
      engagement: 4.8,
      posts: 187
    },
    {
      id: 3,
      hashtag: '#ShopReZ',
      platform: 'Facebook',
      uses: 1234,
      reach: 23456,
      engagement: 4.2,
      posts: 145
    },
    {
      id: 4,
      hashtag: '#ReZOffers',
      platform: 'Instagram',
      uses: 987,
      reach: 18234,
      engagement: 3.9,
      posts: 98
    }
  ]);

  const [socialAnalytics] = useState({
    topPerformingPlatform: 'Instagram',
    bestPostingTime: '09:00 AM - 11:00 AM',
    avgEngagementRate: 4.5,
    totalSocialRevenue: 745801,
    topPerformingContent: 'Flash Sales',
    audienceGrowthRate: 12.5
  });

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Connected Platforms</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {socialStats.activeConnections}/{socialStats.totalConnections}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Link2 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            All platforms synced
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Reach</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {(socialStats.totalReach / 1000).toFixed(0)}K
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              12.5% growth
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Social Conversions</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {socialStats.socialConversions}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {socialStats.conversionRate}% conversion rate
          </div>
        </div>
      </div>

      {/* Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {platforms.map((platform) => {
          const PlatformIcon = platform.icon;
          return (
            <div key={platform.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-${platform.color}-100 p-3 rounded-lg`}>
                    <PlatformIcon className={`w-6 h-6 text-${platform.color}-600`} />
                  </div>
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                    platform.status === 'connected'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {platform.status === 'connected' ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <XCircle className="w-3 h-3" />
                    )}
                    {platform.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">{platform.name}</h3>
                {platform.accountName && (
                  <p className="text-sm text-gray-600 mb-3">{platform.accountName}</p>
                )}

                {platform.status === 'connected' ? (
                  <>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Followers</span>
                        <span className="font-semibold text-gray-900">{platform.followers.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Traffic</span>
                        <span className="font-semibold text-gray-900">{platform.traffic.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Conversions</span>
                        <span className="font-semibold text-green-600">{platform.conversions}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Engagement</span>
                        <span className="font-semibold text-purple-600">{platform.engagement}%</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {platform.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="text-xs text-gray-500 mb-3">
                      Last sync: {platform.lastSync}
                    </div>

                    <button className="w-full px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 font-medium">
                      Manage
                    </button>
                  </>
                ) : (
                  <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
                    Connect {platform.name}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Social Commerce Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900">₹{(socialAnalytics.totalSocialRevenue / 1000).toFixed(0)}K</p>
            <p className="text-xs text-green-600 mt-1">From social platforms</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Top Platform</p>
            <p className="text-2xl font-bold text-gray-900">{socialAnalytics.topPerformingPlatform}</p>
            <p className="text-xs text-gray-600 mt-1">Highest conversions</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Avg Engagement</p>
            <p className="text-2xl font-bold text-gray-900">{socialAnalytics.avgEngagementRate}%</p>
            <p className="text-xs text-gray-600 mt-1">Across all platforms</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Best Time</p>
            <p className="text-2xl font-bold text-gray-900">{socialAnalytics.bestPostingTime}</p>
            <p className="text-xs text-gray-600 mt-1">For posting content</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSocialFeed = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Social Media Feed</h3>
          <p className="text-sm text-gray-600 mt-1">Aggregated feed from all connected platforms</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Search className="w-4 h-4" />
            Filter
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Create Post
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {socialFeed.map((post) => {
          const PlatformIcon = post.icon;
          return (
            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <PlatformIcon className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-900">{post.platform}</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                      {post.type}
                    </span>
                    <span className="text-sm text-gray-500">• {post.timestamp}</span>
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{post.image}</div>
                    <p className="text-gray-900 flex-1">{post.content}</p>
                  </div>

                  {/* Engagement Stats */}
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{post.likes.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">Likes</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-blue-500" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{post.comments}</p>
                        <p className="text-xs text-gray-500">Comments</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-green-500" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{post.shares}</p>
                        <p className="text-xs text-gray-500">Shares</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-purple-500" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{post.reach.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">Reach</p>
                      </div>
                    </div>
                  </div>

                  {/* Performance Stats */}
                  <div className="flex items-center gap-6 p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-xs text-gray-600">Engagement Rate</p>
                      <p className="text-sm font-semibold text-purple-600">{post.engagement}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Clicks</p>
                      <p className="text-sm font-semibold text-gray-900">{post.clicks}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Conversions</p>
                      <p className="text-sm font-semibold text-green-600">{post.conversions}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderShoppingIntegration = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Instagram Shopping */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-pink-100 p-3 rounded-lg">
              <Instagram className="w-6 h-6 text-pink-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Instagram Shopping</h3>
              <p className="text-sm text-gray-600">Product catalog integration</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={shoppingIntegration.instagram.enabled}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Catalog</span>
              <span className="text-sm font-semibold text-gray-900">{shoppingIntegration.instagram.connectedCatalog}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Total Products</p>
                <p className="text-xl font-bold text-gray-900">{shoppingIntegration.instagram.totalProducts}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Tagged Products</p>
                <p className="text-xl font-bold text-gray-900">{shoppingIntegration.instagram.taggedProducts}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Product Views</span>
                <span className="font-semibold text-gray-900">{shoppingIntegration.instagram.productViews.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Product Clicks</span>
                <span className="font-semibold text-gray-900">{shoppingIntegration.instagram.productClicks.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Purchases</span>
                <span className="font-semibold text-green-600">{shoppingIntegration.instagram.purchases}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Revenue</span>
                <span className="font-semibold text-green-600">₹{shoppingIntegration.instagram.revenue.toLocaleString()}</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-200 text-xs text-gray-500">
              Last sync: {shoppingIntegration.instagram.lastSync}
            </div>
            <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
              Sync Catalog
            </button>
          </div>
        </div>

        {/* Facebook Catalog */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Facebook className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Facebook Catalog</h3>
              <p className="text-sm text-gray-600">Shop integration</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={shoppingIntegration.facebook.enabled}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Catalog</span>
              <span className="text-sm font-semibold text-gray-900">{shoppingIntegration.facebook.connectedCatalog}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Total Products</p>
                <p className="text-xl font-bold text-gray-900">{shoppingIntegration.facebook.totalProducts}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Tagged Products</p>
                <p className="text-xl font-bold text-gray-900">{shoppingIntegration.facebook.taggedProducts}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Product Views</span>
                <span className="font-semibold text-gray-900">{shoppingIntegration.facebook.productViews.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Product Clicks</span>
                <span className="font-semibold text-gray-900">{shoppingIntegration.facebook.productClicks.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Purchases</span>
                <span className="font-semibold text-green-600">{shoppingIntegration.facebook.purchases}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Revenue</span>
                <span className="font-semibold text-green-600">₹{shoppingIntegration.facebook.revenue.toLocaleString()}</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-200 text-xs text-gray-500">
              Last sync: {shoppingIntegration.facebook.lastSync}
            </div>
            <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
              Sync Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAutoPosting = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Auto-Posting Configuration</h3>
          <p className="text-sm text-gray-600 mt-1">Automatically share content to social platforms</p>
        </div>
      </div>

      <div className="space-y-4">
        {Object.entries(autoPostConfig).map(([key, config]) => (
          <div key={key} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.enabled}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600">Template: {config.template}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Platforms</label>
                <div className="space-y-2">
                  {config.platforms.map((platform, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-900">{platform}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Schedule</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                  <option value="immediate">Immediate</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="daily">Daily</option>
                </select>
              </div>
              {config.time && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <input
                    type="time"
                    value={config.time}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
          Save Configuration
        </button>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      {/* Platform Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Performance by Platform</h3>
        <div className="space-y-4">
          {platforms.filter(p => p.status === 'connected').map((platform) => {
            const PlatformIcon = platform.icon;
            return (
              <div key={platform.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4 mb-3">
                  <PlatformIcon className={`w-5 h-5 text-${platform.color}-600`} />
                  <h4 className="font-semibold text-gray-900 flex-1">{platform.name}</h4>
                  <span className="text-sm text-gray-600">{platform.accountName}</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Reach</p>
                    <p className="text-lg font-bold text-gray-900">{(platform.reach / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Traffic</p>
                    <p className="text-lg font-bold text-gray-900">{platform.traffic.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Conversions</p>
                    <p className="text-lg font-bold text-green-600">{platform.conversions}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Engagement</p>
                    <p className="text-lg font-bold text-purple-600">{platform.engagement}%</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hashtag Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Hashtag Performance</h3>
        <div className="space-y-3">
          {hashtagTracking.map((hashtag) => (
            <div key={hashtag.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Tag className="w-5 h-5 text-indigo-600" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-900">{hashtag.hashtag}</span>
                  <span className="text-xs text-gray-500">• {hashtag.platform}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{hashtag.uses.toLocaleString()} uses</span>
                  <span>•</span>
                  <span>{(hashtag.reach / 1000).toFixed(0)}K reach</span>
                  <span>•</span>
                  <span>{hashtag.posts} posts</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Engagement</p>
                <p className="text-lg font-bold text-purple-600">{hashtag.engagement}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Attribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Revenue Attribution</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Instagram</span>
                <span className="font-semibold text-gray-900">₹{(shoppingIntegration.instagram.revenue / 1000).toFixed(0)}K</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-pink-600 rounded-full"
                  style={{ width: `${(shoppingIntegration.instagram.revenue / socialAnalytics.totalSocialRevenue) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Facebook</span>
                <span className="font-semibold text-gray-900">₹{(shoppingIntegration.facebook.revenue / 1000).toFixed(0)}K</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-600 rounded-full"
                  style={{ width: `${(shoppingIntegration.facebook.revenue / socialAnalytics.totalSocialRevenue) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Growth Metrics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Audience Growth</span>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-green-600">+{socialAnalytics.audienceGrowthRate}%</span>
                <ArrowUpRight className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Avg Engagement Rate</span>
              <span className="text-lg font-bold text-purple-600">{socialAnalytics.avgEngagementRate}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Top Content Type</span>
              <span className="text-lg font-bold text-gray-900">{socialAnalytics.topPerformingContent}</span>
            </div>
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
              <h1 className="text-3xl font-bold text-gray-900">Social Media Integration</h1>
              <p className="text-gray-600 mt-1">Manage social platforms and track social commerce performance</p>
            </div>
            <button
              onClick={() => setShowConfigModal(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Configure
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
            onClick={() => setActiveTab('feed')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'feed'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Social Feed
          </button>
          <button
            onClick={() => setActiveTab('shopping')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'shopping'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Shopping Integration
          </button>
          <button
            onClick={() => setActiveTab('autopost')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'autopost'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Auto-Posting
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
        {activeTab === 'feed' && renderSocialFeed()}
        {activeTab === 'shopping' && renderShoppingIntegration()}
        {activeTab === 'autopost' && renderAutoPosting()}
        {activeTab === 'analytics' && renderAnalytics()}
      </div>
    </div>
  );
}
