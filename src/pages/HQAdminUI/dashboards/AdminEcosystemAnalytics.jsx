import React, { useState } from 'react';
import { Globe, Users, Store, Coins, TrendingUp, MapPin, Target, Zap, Heart, Eye, MousePointer, ShoppingBag, ArrowRight, Filter, BarChart3, Activity } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

const AdminEcosystemAnalytics = () => {
  const [adminType, setAdminType] = useState('hq');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeframe, setTimeframe] = useState('week');

  const regions = ['Bangalore', 'Delhi NCR', 'Mumbai', 'Hyderabad', 'Chennai'];
  const categories = ['Pizza & Italian', 'Fast Food', 'Coffee & Cafe', 'Indian', 'Chinese'];

  // Mock ecosystem data
  const ecosystemMetrics = {
    hq: {
      week: {
        totalUsers: 456789,
        activeUsers: 234567,
        userGrowth: 18.4,
        totalMerchants: 2456,
        activeMerchants: 2134,
        merchantGrowth: 12.7,
        userMerchantConnections: 1234567,
        avgConnectionsPerUser: 2.7,
        discoveryImpressions: 5678901,
        discoveryClicks: 234567,
        discoveryCTR: 4.13,
        coinsInCirculation: 12345678,
        coinsRedeemed: 2345678,
        coinsEarned: 3456789,
        platformHealth: 96.8,
        ecosystemVelocity: 8.7
      },
      month: {
        totalUsers: 456789,
        activeUsers: 312456,
        userGrowth: 24.3,
        totalMerchants: 2456,
        activeMerchants: 2234,
        merchantGrowth: 15.8,
        userMerchantConnections: 5432109,
        avgConnectionsPerUser: 11.9,
        discoveryImpressions: 24567890,
        discoveryClicks: 1023456,
        discoveryCTR: 4.17,
        coinsInCirculation: 12345678,
        coinsRedeemed: 10234567,
        coinsEarned: 15234567,
        platformHealth: 97.2,
        ecosystemVelocity: 9.2
      }
    }
  };

  const cityHeatmap = [
    {
      city: 'Bangalore',
      users: 123456,
      merchants: 876,
      connections: 456789,
      avgConnectionsPerUser: 3.7,
      health: 97.2,
      topCategory: 'Pizza & Italian',
      growth: 23.4
    },
    {
      city: 'Delhi NCR',
      users: 98765,
      merchants: 654,
      connections: 345678,
      avgConnectionsPerUser: 3.5,
      health: 95.8,
      topCategory: 'Fast Food',
      growth: 19.8
    },
    {
      city: 'Mumbai',
      users: 87654,
      merchants: 543,
      connections: 298765,
      avgConnectionsPerUser: 3.4,
      health: 96.3,
      topCategory: 'Coffee & Cafe',
      growth: 21.2
    },
    {
      city: 'Hyderabad',
      users: 65432,
      merchants: 432,
      connections: 234567,
      avgConnectionsPerUser: 3.6,
      health: 94.5,
      topCategory: 'Indian',
      growth: 17.6
    },
    {
      city: 'Chennai',
      users: 54321,
      merchants: 321,
      connections: 198765,
      avgConnectionsPerUser: 3.7,
      health: 93.9,
      topCategory: 'Chinese',
      growth: 16.2
    }
  ];

  const discoveryPerformance = [
    {
      channel: 'Near You',
      impressions: 2345678,
      clicks: 98765,
      conversions: 23456,
      ctr: 4.21,
      conversionRate: 23.75,
      userEngagement: 'high',
      color: 'blue'
    },
    {
      channel: 'Mall Discovery',
      impressions: 1234567,
      clicks: 54321,
      conversions: 12345,
      ctr: 4.40,
      conversionRate: 22.72,
      userEngagement: 'high',
      color: 'purple'
    },
    {
      channel: 'Explore Categories',
      impressions: 987654,
      clicks: 43210,
      conversions: 9876,
      ctr: 4.37,
      conversionRate: 22.86,
      userEngagement: 'medium',
      color: 'pink'
    },
    {
      channel: 'Search',
      impressions: 654321,
      clicks: 32109,
      conversions: 7654,
      ctr: 4.91,
      conversionRate: 23.84,
      userEngagement: 'high',
      color: 'green'
    }
  ];

  const coinsFlow = {
    week: {
      totalEarned: 3456789,
      promoCoins: 1234567,
      brandedCoins: 876543,
      rezCoins: 1345679,
      totalRedeemed: 2345678,
      redemptionRate: 67.8,
      avgCoinsPerUser: 14.7,
      avgCoinsPerTransaction: 7.8
    },
    month: {
      totalEarned: 15234567,
      promoCoins: 5432109,
      brandedCoins: 3876543,
      rezCoins: 5925915,
      totalRedeemed: 10234567,
      redemptionRate: 67.2,
      avgCoinsPerUser: 32.8,
      avgCoinsPerTransaction: 7.6
    }
  };

  const userJourneyFunnel = {
    week: {
      discovery: 234567,
      profileView: 123456,
      saved: 45678,
      visited: 34567,
      transacted: 23456
    },
    month: {
      discovery: 1023456,
      profileView: 543210,
      saved: 198765,
      visited: 150234,
      transacted: 102345
    }
  };

  const topCategories = [
    { name: 'Pizza & Italian', merchants: 234, users: 98765, connections: 234567, revenue: 4567890 },
    { name: 'Fast Food', merchants: 345, users: 123456, connections: 345678, revenue: 5678901 },
    { name: 'Coffee & Cafe', merchants: 198, users: 87654, connections: 198765, revenue: 3456789 },
    { name: 'Indian', merchants: 176, users: 76543, connections: 176543, revenue: 2987654 },
    { name: 'Chinese', merchants: 154, users: 65432, connections: 154321, revenue: 2345678 }
  ];

  const metrics = ecosystemMetrics[adminType][timeframe];
  const coinsData = coinsFlow[timeframe];
  const journeyData = userJourneyFunnel[timeframe];
  const topCity = cityHeatmap[0];

  const getHealthColor = (health) => {
    if (health >= 95) return 'text-green-600';
    if (health >= 90) return 'text-blue-600';
    if (health >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getEngagementColor = (engagement) => {
    switch(engagement) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <AdminNav />

      <div className="lg:ml-64 p-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">ReZ Ecosystem Analytics</h1>
                  <p className="text-white/90 mt-1">User-Merchant connection metrics & platform health</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                  ECOSYSTEM HEALTH: {metrics.platformHealth}%
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                  VELOCITY: {metrics.ecosystemVelocity}x
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <select
                value={adminType}
                onChange={(e) => setAdminType(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-4 py-2 rounded-xl font-semibold focus:outline-none cursor-pointer"
              >
                <option value="hq" className="text-gray-800">HQ Admin (All Regions)</option>
                <option value="regional" className="text-gray-800">Regional Admin</option>
                <option value="category" className="text-gray-800">Category Admin</option>
              </select>

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
          </div>

          {/* Key Ecosystem Metrics */}
          <div className="grid grid-cols-5 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Active Users</p>
                  <p className="text-2xl font-bold">{(metrics.activeUsers / 1000).toFixed(0)}K</p>
                  <div className="flex items-center gap-1 text-xs">
                    <TrendingUp className="w-3 h-3" />
                    <span>+{metrics.userGrowth}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Store className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Active Merchants</p>
                  <p className="text-2xl font-bold">{(metrics.activeMerchants / 1000).toFixed(1)}K</p>
                  <div className="flex items-center gap-1 text-xs">
                    <TrendingUp className="w-3 h-3" />
                    <span>+{metrics.merchantGrowth}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Connections</p>
                  <p className="text-2xl font-bold">{(metrics.userMerchantConnections / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-white/70">{metrics.avgConnectionsPerUser}/user</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Discovery</p>
                  <p className="text-2xl font-bold">{(metrics.discoveryImpressions / 1000000).toFixed(1)}M</p>
                  <p className="text-xs text-white/70">{metrics.discoveryCTR}% CTR</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Coins className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Coins Redeemed</p>
                  <p className="text-2xl font-bold">{(coinsData.totalRedeemed / 1000000).toFixed(1)}M</p>
                  <p className="text-xs text-white/70">{coinsData.redemptionRate}% rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* City Heatmap */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">City-wise Ecosystem Heatmap</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Sorted by user-merchant connections</span>
            </div>
          </div>

          <div className="space-y-4">
            {cityHeatmap.map((city, index) => {
              const isTop = index === 0;
              const healthScore = city.health;
              return (
                <div key={city.city} className={`p-4 rounded-xl border-2 ${isTop ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {isTop && <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">🏆</div>}
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-gray-800">{city.city}</h3>
                          <span className={`text-sm font-bold ${getHealthColor(healthScore)}`}>
                            {healthScore}% health
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Top category: {city.topCategory}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Users</p>
                        <p className="text-lg font-bold text-gray-800">{(city.users / 1000).toFixed(0)}K</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Merchants</p>
                        <p className="text-lg font-bold text-gray-800">{city.merchants}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Connections</p>
                        <p className="text-lg font-bold text-purple-600">{(city.connections / 1000).toFixed(0)}K</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Avg/User</p>
                        <p className="text-lg font-bold text-blue-600">{city.avgConnectionsPerUser}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Growth</p>
                        <div className="flex items-center gap-1 text-green-600">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-lg font-bold">+{city.growth}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Density Bar */}
                  <div className="mt-3">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${isTop ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-gray-400 to-gray-500'}`}
                        style={{ width: `${(city.connections / topCity.connections) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Discovery Channel Performance */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Discovery Channel Performance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {discoveryPerformance.map(channel => (
              <div key={channel.channel} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{channel.channel}</h3>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold ${getEngagementColor(channel.userEngagement)}`}>
                      {channel.userEngagement.toUpperCase()} ENGAGEMENT
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Impressions</p>
                    <p className="text-lg font-bold text-gray-800">{(channel.impressions / 1000000).toFixed(1)}M</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Clicks</p>
                    <p className="text-lg font-bold text-gray-800">{(channel.clicks / 1000).toFixed(1)}K</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Click-Through Rate</p>
                    <p className={`text-lg font-bold text-${channel.color}-600`}>{channel.ctr}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Conversions</p>
                    <p className="text-lg font-bold text-green-600">{(channel.conversions / 1000).toFixed(1)}K</p>
                  </div>
                </div>

                {/* Conversion Funnel */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">Conversion Rate</span>
                    <span className="font-bold text-gray-800">{channel.conversionRate}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-${channel.color}-400 to-${channel.color}-600`}
                      style={{ width: `${channel.conversionRate}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Journey Funnel */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">User Discovery Journey Funnel</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/80">1. Discovery (Saw merchant)</p>
                    <p className="text-2xl font-bold">{journeyData.discovery.toLocaleString()}</p>
                  </div>
                  <Eye className="w-8 h-8" />
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white" style={{width: `${(journeyData.profileView / journeyData.discovery) * 100}%`}}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/80">2. Profile View (Clicked to see details)</p>
                    <p className="text-2xl font-bold">{journeyData.profileView.toLocaleString()}</p>
                    <p className="text-xs text-white/80">{((journeyData.profileView / journeyData.discovery) * 100).toFixed(1)}% of discoveries</p>
                  </div>
                  <MousePointer className="w-8 h-8" />
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg p-4 text-white" style={{width: `${(journeyData.saved / journeyData.discovery) * 100}%`}}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/80">3. Saved (Added to favorites)</p>
                    <p className="text-2xl font-bold">{journeyData.saved.toLocaleString()}</p>
                    <p className="text-xs text-white/80">{((journeyData.saved / journeyData.profileView) * 100).toFixed(1)}% of views</p>
                  </div>
                  <Heart className="w-8 h-8" />
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white" style={{width: `${(journeyData.visited / journeyData.discovery) * 100}%`}}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/80">4. Visited (Physically went)</p>
                    <p className="text-2xl font-bold">{journeyData.visited.toLocaleString()}</p>
                    <p className="text-xs text-white/80">{((journeyData.visited / journeyData.saved) * 100).toFixed(1)}% of saved</p>
                  </div>
                  <MapPin className="w-8 h-8" />
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white" style={{width: `${(journeyData.transacted / journeyData.discovery) * 100}%`}}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/80">5. Transacted (Made purchase)</p>
                    <p className="text-2xl font-bold">{journeyData.transacted.toLocaleString()}</p>
                    <p className="text-xs text-white/80">{((journeyData.transacted / journeyData.visited) * 100).toFixed(1)}% of visits</p>
                  </div>
                  <ShoppingBag className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coins Flow Analysis */}
        <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 rounded-xl shadow-lg p-6 mb-6 text-white">
          <h2 className="text-xl font-bold mb-6">Coins Flow Analysis</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/80 text-xs mb-1">Total Earned</p>
              <p className="text-3xl font-bold">{(coinsData.totalEarned / 1000000).toFixed(1)}M</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/80 text-xs mb-1">Total Redeemed</p>
              <p className="text-3xl font-bold">{(coinsData.totalRedeemed / 1000000).toFixed(1)}M</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/80 text-xs mb-1">Redemption Rate</p>
              <p className="text-3xl font-bold">{coinsData.redemptionRate}%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/80 text-xs mb-1">In Circulation</p>
              <p className="text-3xl font-bold">{((coinsData.totalEarned - coinsData.totalRedeemed) / 1000000).toFixed(1)}M</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/80 text-xs mb-1">Promo Coins</p>
              <p className="text-2xl font-bold">{(coinsData.promoCoins / 1000000).toFixed(1)}M</p>
              <p className="text-xs text-white/70">{((coinsData.promoCoins / coinsData.totalEarned) * 100).toFixed(1)}% of total</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/80 text-xs mb-1">Branded Coins</p>
              <p className="text-2xl font-bold">{(coinsData.brandedCoins / 1000000).toFixed(1)}M</p>
              <p className="text-xs text-white/70">{((coinsData.brandedCoins / coinsData.totalEarned) * 100).toFixed(1)}% of total</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/80 text-xs mb-1">ReZ Coins</p>
              <p className="text-2xl font-bold">{(coinsData.rezCoins / 1000000).toFixed(1)}M</p>
              <p className="text-xs text-white/70">{((coinsData.rezCoins / coinsData.totalEarned) * 100).toFixed(1)}% of total</p>
            </div>
          </div>
        </div>

        {/* Top Categories */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Top Performing Categories</h2>
          <div className="space-y-4">
            {topCategories.map((category, index) => (
              <div key={category.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${index < 3 ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-200 text-gray-600'} font-bold`}>
                    #{index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{category.name}</h3>
                    <p className="text-xs text-gray-600">{category.merchants} merchants</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Users</p>
                    <p className="font-bold text-gray-800">{(category.users / 1000).toFixed(0)}K</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Connections</p>
                    <p className="font-bold text-purple-600">{(category.connections / 1000).toFixed(0)}K</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Revenue</p>
                    <p className="font-bold text-green-600">₹{(category.revenue / 1000000).toFixed(1)}M</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEcosystemAnalytics;
