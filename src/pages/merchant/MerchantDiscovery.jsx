import React, { useState } from 'react';
import { Compass, MapPin, Eye, Users, TrendingUp, Search, MousePointer, ShoppingBag, Heart, Share2, Navigation, Building2, Sparkles, Target, TrendingDown, ArrowRight } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantDiscovery = () => {
  const [timeframe, setTimeframe] = useState('week');

  // Mock discovery data
  const discoveryMetrics = {
    week: {
      totalImpressions: 45678,
      impressionsGrowth: 23.4,
      profileViews: 12345,
      viewsGrowth: 18.2,
      clicks: 3456,
      clicksGrowth: 15.7,
      conversions: 876,
      conversionsGrowth: 12.3,
      ctr: 7.57, // Click-through rate
      conversionRate: 25.35 // Conversion rate from clicks
    },
    month: {
      totalImpressions: 198765,
      impressionsGrowth: 28.1,
      profileViews: 54321,
      viewsGrowth: 22.5,
      clicks: 15678,
      clicksGrowth: 19.3,
      conversions: 3890,
      conversionsGrowth: 16.8,
      ctr: 7.89,
      conversionRate: 24.81
    }
  };

  const discoveryChannels = {
    week: [
      {
        channel: 'Near You',
        impressions: 18900,
        views: 5670,
        clicks: 1567,
        conversions: 456,
        ctr: 8.29,
        color: 'blue',
        icon: MapPin,
        description: 'Users discover you based on proximity'
      },
      {
        channel: 'Mall Discovery',
        impressions: 12345,
        views: 3456,
        clicks: 987,
        conversions: 234,
        ctr: 7.99,
        color: 'purple',
        icon: Building2,
        description: 'Users browsing malls where you operate'
      },
      {
        channel: 'Explore Categories',
        impressions: 9876,
        views: 2345,
        clicks: 678,
        conversions: 145,
        ctr: 6.86,
        color: 'pink',
        icon: Compass,
        description: 'Category-based discovery (Pizza, Fast Food, etc.)'
      },
      {
        channel: 'Search Results',
        impressions: 4557,
        views: 876,
        clicks: 224,
        conversions: 41,
        ctr: 4.91,
        color: 'green',
        icon: Search,
        description: 'Direct search for your business or products'
      }
    ],
    month: [
      {
        channel: 'Near You',
        impressions: 82345,
        views: 24678,
        clicks: 7123,
        conversions: 2034,
        ctr: 8.65,
        color: 'blue',
        icon: MapPin,
        description: 'Users discover you based on proximity'
      },
      {
        channel: 'Mall Discovery',
        impressions: 53789,
        views: 15234,
        clicks: 4456,
        conversions: 1123,
        ctr: 8.28,
        color: 'purple',
        icon: Building2,
        description: 'Users browsing malls where you operate'
      },
      {
        channel: 'Explore Categories',
        impressions: 43012,
        views: 10234,
        clicks: 3012,
        conversions: 567,
        ctr: 7.00,
        color: 'pink',
        icon: Compass,
        description: 'Category-based discovery (Pizza, Fast Food, etc.)'
      },
      {
        channel: 'Search Results',
        impressions: 19619,
        views: 4175,
        clicks: 1087,
        conversions: 166,
        ctr: 5.54,
        color: 'green',
        icon: Search,
        description: 'Direct search for your business or products'
      }
    ]
  };

  const locationPerformance = [
    {
      location: 'Koramangala, Bangalore',
      impressions: 25678,
      rank: 3,
      avgPosition: 2.8,
      trend: 'up',
      topCategory: 'Pizza',
      visibility: 'high'
    },
    {
      location: 'Indiranagar, Bangalore',
      impressions: 18900,
      rank: 5,
      avgPosition: 4.2,
      trend: 'up',
      topCategory: 'Fast Food',
      visibility: 'medium'
    },
    {
      location: 'Whitefield, Bangalore',
      impressions: 12456,
      rank: 8,
      avgPosition: 6.5,
      trend: 'down',
      topCategory: 'Pizza',
      visibility: 'medium'
    }
  ];

  const searchKeywords = [
    { keyword: 'pizza near me', impressions: 8976, clicks: 789, position: 2 },
    { keyword: 'best pizza koramangala', impressions: 5432, clicks: 567, position: 1 },
    { keyword: 'italian restaurant', impressions: 3456, clicks: 234, position: 5 },
    { keyword: 'pizza delivery', impressions: 2890, clicks: 198, position: 3 },
    { keyword: 'late night food', impressions: 1876, clicks: 145, position: 7 }
  ];

  const userActions = {
    week: [
      { action: 'Saved to Favorites', count: 567, icon: Heart, color: 'red' },
      { action: 'Shared Profile', count: 234, icon: Share2, color: 'blue' },
      { action: 'Got Directions', count: 876, icon: Navigation, color: 'green' },
      { action: 'Viewed Menu', count: 2345, icon: Eye, color: 'purple' }
    ],
    month: [
      { action: 'Saved to Favorites', count: 2456, icon: Heart, color: 'red' },
      { action: 'Shared Profile', count: 1098, icon: Share2, color: 'blue' },
      { action: 'Got Directions', count: 3890, icon: Navigation, color: 'green' },
      { action: 'Viewed Menu', count: 10234, icon: Eye, color: 'purple' }
    ]
  };

  const currentMetrics = discoveryMetrics[timeframe];
  const currentChannels = discoveryChannels[timeframe];
  const currentActions = userActions[timeframe];
  const topChannel = currentChannels[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <MerchantNav />

      <div className="lg:ml-64 p-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Compass className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Discovery Analytics</h1>
                  <p className="text-white/90 mt-1">How users find you on ReZ</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                  VISIBILITY TRACKING
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                  USER DISCOVERY JOURNEY
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              {['week', 'month'].map(tf => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                    timeframe === tf
                      ? 'bg-white text-purple-600'
                      : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                  }`}
                >
                  {tf.charAt(0).toUpperCase() + tf.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Total Impressions</p>
                  <p className="text-2xl font-bold">{(currentMetrics.totalImpressions / 1000).toFixed(1)}K</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-xs">+{currentMetrics.impressionsGrowth}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Profile Views</p>
                  <p className="text-2xl font-bold">{(currentMetrics.profileViews / 1000).toFixed(1)}K</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-xs">+{currentMetrics.viewsGrowth}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <MousePointer className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Clicks to Action</p>
                  <p className="text-2xl font-bold">{(currentMetrics.clicks / 1000).toFixed(1)}K</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-xs">CTR: {currentMetrics.ctr}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Conversions</p>
                  <p className="text-2xl font-bold">{currentMetrics.conversions}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-xs">{currentMetrics.conversionRate}% rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discovery Funnel */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Discovery Funnel</h2>
          <div className="relative">
            {/* Funnel Visual */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/80">1. Impressions</p>
                      <p className="text-2xl font-bold">{currentMetrics.totalImpressions.toLocaleString()}</p>
                    </div>
                    <Eye className="w-8 h-8" />
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white" style={{width: `${(currentMetrics.profileViews / currentMetrics.totalImpressions) * 100}%`}}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/80">2. Profile Views</p>
                      <p className="text-2xl font-bold">{currentMetrics.profileViews.toLocaleString()}</p>
                      <p className="text-xs text-white/80">{((currentMetrics.profileViews / currentMetrics.totalImpressions) * 100).toFixed(1)}% of impressions</p>
                    </div>
                    <Users className="w-8 h-8" />
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg p-4 text-white" style={{width: `${(currentMetrics.clicks / currentMetrics.totalImpressions) * 100}%`}}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/80">3. Clicks to Action</p>
                      <p className="text-2xl font-bold">{currentMetrics.clicks.toLocaleString()}</p>
                      <p className="text-xs text-white/80">{((currentMetrics.clicks / currentMetrics.profileViews) * 100).toFixed(1)}% of views</p>
                    </div>
                    <MousePointer className="w-8 h-8" />
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1 bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white" style={{width: `${(currentMetrics.conversions / currentMetrics.totalImpressions) * 100}%`}}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/80">4. Conversions (Orders)</p>
                      <p className="text-2xl font-bold">{currentMetrics.conversions.toLocaleString()}</p>
                      <p className="text-xs text-white/80">{((currentMetrics.conversions / currentMetrics.clicks) * 100).toFixed(1)}% of clicks</p>
                    </div>
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discovery Channels */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Discovery Channels Performance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {currentChannels.map((channel, index) => {
              const Icon = channel.icon;
              const isTop = index === 0;
              return (
                <div key={channel.channel} className={`p-6 rounded-xl border-2 ${isTop ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-300' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`bg-${channel.color}-100 p-3 rounded-lg`}>
                        <Icon className={`w-6 h-6 text-${channel.color}-600`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{channel.channel}</h3>
                        <p className="text-xs text-gray-600 mt-1">{channel.description}</p>
                      </div>
                    </div>
                    {isTop && (
                      <div className="bg-yellow-400 px-2 py-1 rounded-full text-xs font-bold">
                        TOP
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Impressions</p>
                      <p className="text-lg font-bold text-gray-800">{channel.impressions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Profile Views</p>
                      <p className="text-lg font-bold text-gray-800">{channel.views.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Clicks</p>
                      <p className="text-lg font-bold text-gray-800">{channel.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">CTR</p>
                      <p className={`text-lg font-bold text-${channel.color}-600`}>{channel.ctr}%</p>
                    </div>
                  </div>

                  {/* Performance Bar */}
                  <div className="mt-4">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-${channel.color}-400 to-${channel.color}-600`}
                        style={{ width: `${(channel.conversions / topChannel.conversions) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{channel.conversions} conversions</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Location Performance */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Location-wise Discovery</h2>
          <div className="space-y-4">
            {locationPerformance.map((location, index) => (
              <div key={location.location} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-gray-400">#{location.rank}</div>
                  <div>
                    <h3 className="font-bold text-gray-800">{location.location}</h3>
                    <p className="text-xs text-gray-600">Top category: {location.topCategory}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Impressions</p>
                    <p className="font-bold text-gray-800">{location.impressions.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Avg Position</p>
                    <p className="font-bold text-gray-800">{location.avgPosition}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Trend</p>
                    <div className={`flex items-center gap-1 ${location.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {location.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    </div>
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      location.visibility === 'high' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {location.visibility.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search Keywords */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Top Search Keywords</h2>
          <div className="space-y-3">
            {searchKeywords.map((keyword, index) => (
              <div key={keyword.keyword} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index < 3 ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-200 text-gray-600'} font-bold text-sm`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">"{keyword.keyword}"</h3>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Impressions</p>
                    <p className="font-bold text-gray-800">{keyword.impressions.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Clicks</p>
                    <p className="font-bold text-gray-800">{keyword.clicks}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Position</p>
                    <p className={`font-bold ${keyword.position <= 3 ? 'text-green-600' : 'text-orange-600'}`}>
                      #{keyword.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Actions */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-xl font-bold mb-6">User Engagement Actions</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {currentActions.map(action => {
              const Icon = action.icon;
              return (
                <div key={action.action} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`bg-${action.color}-100 p-2 rounded-lg`}>
                      <Icon className={`w-5 h-5 text-${action.color}-600`} />
                    </div>
                  </div>
                  <p className="text-xs text-white/80">{action.action}</p>
                  <p className="text-2xl font-bold mt-1">{action.count.toLocaleString()}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantDiscovery;
