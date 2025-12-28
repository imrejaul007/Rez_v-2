import React, { useState } from 'react';
import { Wallet, TrendingUp, TrendingDown, DollarSign, Users, Repeat, AlertCircle, Award, Target } from 'lucide-react';

const AdminWalletAnalytics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Coin economy health metrics
  const economyHealth = {
    totalCoinsIssued: 45678900,
    totalCoinsRedeemed: 34567800,
    totalCoinsActive: 11111100,
    redemptionRate: 75.7,
    avgCoinsPerUser: 8234,
    avgRedemptionTime: 18, // days
    economyGrowthRate: 12.5,
    burnRate: 8.2,
    healthScore: 87
  };

  // Coin flow analysis
  const coinFlow = {
    todayEarned: 234500,
    todayRedeemed: 189600,
    todayNet: 44900,
    weekEarned: 1567800,
    weekRedeemed: 1234500,
    weekNet: 333300,
    monthEarned: 6789000,
    monthRedeemed: 5123400,
    monthNet: 1665600
  };

  // Top earning sources
  const earningSources = [
    {
      source: 'Purchases',
      coinsIssued: 12345600,
      percentage: 45.2,
      avgPerTransaction: 156,
      trend: '+8%'
    },
    {
      source: 'Social Impact',
      coinsIssued: 5678900,
      percentage: 20.8,
      avgPerActivity: 500,
      trend: '+15%'
    },
    {
      source: 'Games',
      coinsIssued: 4567800,
      percentage: 16.7,
      avgPerGame: 45,
      trend: '+12%'
    },
    {
      source: 'Referrals',
      coinsIssued: 3456700,
      percentage: 12.7,
      avgPerReferral: 1000,
      trend: '+5%'
    },
    {
      source: 'Reviews',
      coinsIssued: 1234500,
      percentage: 4.5,
      avgPerReview: 50,
      trend: '+3%'
    }
  ];

  // Top redemption channels
  const redemptionChannels = [
    {
      channel: 'QR Payments',
      coinsRedeemed: 15678900,
      percentage: 45.4,
      avgPerRedemption: 345,
      trend: '+10%'
    },
    {
      channel: 'Offers & Discounts',
      coinsRedeemed: 8901200,
      percentage: 25.8,
      avgPerRedemption: 234,
      trend: '+7%'
    },
    {
      channel: 'Cash Store',
      coinsRedeemed: 6789000,
      percentage: 19.6,
      avgPerRedemption: 2000,
      trend: '+12%'
    },
    {
      channel: 'Event Tickets',
      coinsRedeemed: 2345600,
      percentage: 6.8,
      avgPerRedemption: 500,
      trend: '+18%'
    },
    {
      channel: 'Exclusive Products',
      coinsRedeemed: 853100,
      percentage: 2.5,
      avgPerRedemption: 1500,
      trend: '+25%'
    }
  ];

  // User segments by wallet health
  const walletSegments = [
    {
      segment: 'Power Redeemers',
      users: 23400,
      avgBalance: 1234,
      avgEarning: 5678,
      avgRedemption: 5432,
      redemptionRate: 95.7,
      healthScore: 98,
      color: 'from-green-500 to-emerald-500'
    },
    {
      segment: 'Active Users',
      users: 67890,
      avgBalance: 4567,
      avgEarning: 3456,
      avgRedemption: 2345,
      redemptionRate: 67.9,
      healthScore: 82,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      segment: 'Hoarders',
      users: 34560,
      avgBalance: 15678,
      avgEarning: 6789,
      avgRedemption: 1234,
      redemptionRate: 18.2,
      healthScore: 45,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      segment: 'Inactive',
      users: 12340,
      avgBalance: 234,
      avgEarning: 456,
      avgRedemption: 123,
      redemptionRate: 27.0,
      healthScore: 35,
      color: 'from-red-500 to-pink-500'
    }
  ];

  // Coin velocity (how fast coins move through economy)
  const velocityMetrics = {
    avgTimeToFirstRedemption: 12, // days
    avgTimeBetweenRedemptions: 8, // days
    avgCoinsPerDay: 45678,
    circulationVelocity: 2.8, // times per month
    stagnantCoins: 2345600,
    stagnantPercentage: 21.1
  };

  // Alerts & recommendations
  const economyAlerts = [
    {
      id: 'ALERT-001',
      severity: 'warning',
      title: 'High Coin Hoarding Detected',
      description: '34,560 users holding coins for 30+ days without redemption',
      impact: '₹15.6L worth of coins not circulating',
      recommendation: 'Launch expiring bonus campaign to encourage redemption',
      action: 'Create Campaign'
    },
    {
      id: 'ALERT-002',
      severity: 'info',
      title: 'Social Impact Coins Trending Up',
      description: 'Social impact activities generating 15% more coins week-over-week',
      impact: 'Positive brand perception & user engagement',
      recommendation: 'Increase social impact coin rewards by 10% to sustain momentum',
      action: 'Adjust Rewards'
    },
    {
      id: 'ALERT-003',
      severity: 'critical',
      title: 'Redemption Rate Below Target',
      description: 'Overall redemption rate at 75.7%, target is 80%',
      impact: 'Reduced merchant sales & user engagement',
      recommendation: 'Introduce time-limited redemption bonuses (2x coins for 48 hours)',
      action: 'Launch Flash Sale'
    }
  ];

  const getHealthScoreColor = (score) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-blue-400';
    if (score >= 40) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'warning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'info': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Wallet className="w-10 h-10 text-green-400" />
            Wallet & Coin Economy Analytics
          </h1>
          <p className="text-gray-400">Deep insights into coin circulation & wallet health</p>
        </div>

        {/* Economy Health Score */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Coin Economy Health Score</h2>
              <p className="text-gray-300">Overall system health based on circulation, redemption & growth metrics</p>
            </div>
            <div className="text-center">
              <div className={`text-6xl font-bold ${getHealthScoreColor(economyHealth.healthScore)}`}>
                {economyHealth.healthScore}
              </div>
              <div className="text-gray-400 text-sm">/ 100</div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8 text-yellow-400" />
              <span className="text-xs text-gray-400">Total Issued</span>
            </div>
            <div className="text-3xl font-bold text-white">{(economyHealth.totalCoinsIssued / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-yellow-400">+{economyHealth.economyGrowthRate}% growth</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Repeat className="w-8 h-8 text-green-400" />
              <span className="text-xs text-gray-400">Redeemed</span>
            </div>
            <div className="text-3xl font-bold text-white">{(economyHealth.totalCoinsRedeemed / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-green-400">{economyHealth.redemptionRate}% rate</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Wallet className="w-8 h-8 text-blue-400" />
              <span className="text-xs text-gray-400">Active Balance</span>
            </div>
            <div className="text-3xl font-bold text-white">{(economyHealth.totalCoinsActive / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-blue-400">In user wallets</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-purple-400" />
              <span className="text-xs text-gray-400">Avg Per User</span>
            </div>
            <div className="text-3xl font-bold text-white">{economyHealth.avgCoinsPerUser.toLocaleString()}</div>
            <div className="text-sm text-purple-400">coins/user</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {[
            { id: 'overview', label: 'Coin Flow', icon: Repeat },
            { id: 'sources', label: 'Earning Sources', icon: TrendingUp },
            { id: 'redemption', label: 'Redemption Channels', icon: DollarSign },
            { id: 'segments', label: 'User Segments', icon: Users },
            { id: 'alerts', label: 'Alerts', icon: AlertCircle }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-lg shadow-green-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Coin Flow Analysis</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Today</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        Earned
                      </span>
                      <span className="text-green-400 font-bold">{coinFlow.todayEarned.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center gap-2">
                        <TrendingDown className="w-4 h-4 text-red-400" />
                        Redeemed
                      </span>
                      <span className="text-red-400 font-bold">{coinFlow.todayRedeemed.toLocaleString()}</span>
                    </div>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-white font-semibold">Net Flow</span>
                      <span className={coinFlow.todayNet > 0 ? 'text-green-400' : 'text-red-400'}>
                        {coinFlow.todayNet > 0 ? '+' : ''}{coinFlow.todayNet.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">This Week</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        Earned
                      </span>
                      <span className="text-green-400 font-bold">{(coinFlow.weekEarned / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center gap-2">
                        <TrendingDown className="w-4 h-4 text-red-400" />
                        Redeemed
                      </span>
                      <span className="text-red-400 font-bold">{(coinFlow.weekRedeemed / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-white font-semibold">Net Flow</span>
                      <span className={coinFlow.weekNet > 0 ? 'text-green-400' : 'text-red-400'}>
                        {coinFlow.weekNet > 0 ? '+' : ''}{(coinFlow.weekNet / 1000).toFixed(0)}K
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">This Month</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        Earned
                      </span>
                      <span className="text-green-400 font-bold">{(coinFlow.monthEarned / 1000000).toFixed(2)}M</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center gap-2">
                        <TrendingDown className="w-4 h-4 text-red-400" />
                        Redeemed
                      </span>
                      <span className="text-red-400 font-bold">{(coinFlow.monthRedeemed / 1000000).toFixed(2)}M</span>
                    </div>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-white font-semibold">Net Flow</span>
                      <span className={coinFlow.monthNet > 0 ? 'text-green-400' : 'text-red-400'}>
                        {coinFlow.monthNet > 0 ? '+' : ''}{(coinFlow.monthNet / 1000000).toFixed(2)}M
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Coin Velocity Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-gray-400 text-sm">Time to First Redemption</div>
                    <div className="text-white font-bold text-xl">{velocityMetrics.avgTimeToFirstRedemption} days</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Time Between Redemptions</div>
                    <div className="text-white font-bold text-xl">{velocityMetrics.avgTimeBetweenRedemptions} days</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Circulation Velocity</div>
                    <div className="text-white font-bold text-xl">{velocityMetrics.circulationVelocity}x/mo</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Stagnant Coins</div>
                    <div className="text-yellow-400 font-bold text-xl">{velocityMetrics.stagnantPercentage}%</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sources' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Top Coin Earning Sources</h2>

              {earningSources.map((source, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{source.source}</h3>
                      <p className="text-gray-400 text-sm">
                        Avg: {source.avgPerTransaction || source.avgPerActivity || source.avgPerGame || source.avgPerReferral || source.avgPerReview} coins per action
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Trend</div>
                      <div className="text-green-400 font-bold">{source.trend}</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">{source.percentage}% of total</span>
                      <span className="text-white font-bold">{source.coinsIssued.toLocaleString()} coins</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'redemption' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Top Redemption Channels</h2>

              {redemptionChannels.map((channel, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{channel.channel}</h3>
                      <p className="text-gray-400 text-sm">Avg: {channel.avgPerRedemption} coins per redemption</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Trend</div>
                      <div className="text-green-400 font-bold">{channel.trend}</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">{channel.percentage}% of total</span>
                      <span className="text-white font-bold">{channel.coinsRedeemed.toLocaleString()} coins</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                        style={{ width: `${channel.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'segments' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">User Segments by Wallet Health</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {walletSegments.map((segment, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${segment.color} flex items-center justify-center`}>
                        <Wallet className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Health Score</div>
                        <div className={`text-2xl font-bold ${getHealthScoreColor(segment.healthScore)}`}>
                          {segment.healthScore}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{segment.segment}</h3>
                    <p className="text-gray-400 text-sm mb-4">{segment.users.toLocaleString()} users</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Avg Balance:</span>
                        <span className="text-white font-bold">{segment.avgBalance.toLocaleString()} coins</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Avg Earning:</span>
                        <span className="text-green-400 font-bold">{segment.avgEarning.toLocaleString()} coins</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Avg Redemption:</span>
                        <span className="text-blue-400 font-bold">{segment.avgRedemption.toLocaleString()} coins</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-white/10">
                        <span className="text-gray-400">Redemption Rate:</span>
                        <span className={`font-bold ${segment.redemptionRate > 60 ? 'text-green-400' : 'text-yellow-400'}`}>
                          {segment.redemptionRate}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'alerts' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Economy Alerts & Recommendations</h2>
                <div className="text-gray-400 text-sm">{economyAlerts.length} active alerts</div>
              </div>

              {economyAlerts.map((alert) => (
                <div key={alert.id} className={`rounded-xl p-6 border ${getSeverityColor(alert.severity)}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-6 h-6" />
                      <div>
                        <h3 className="text-xl font-bold text-white">{alert.title}</h3>
                        <p className="text-gray-400 text-sm">{alert.description}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${getSeverityColor(alert.severity)}`}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-gray-400 text-sm mb-1">Impact:</div>
                    <div className="text-white">{alert.impact}</div>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                    <div className="text-blue-400 font-semibold mb-1">💡 Recommendation:</div>
                    <div className="text-white">{alert.recommendation}</div>
                  </div>

                  <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all font-semibold">
                    {alert.action}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminWalletAnalytics;
