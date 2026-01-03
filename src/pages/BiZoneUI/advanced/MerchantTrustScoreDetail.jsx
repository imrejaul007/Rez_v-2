import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MerchantTrustScoreDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock merchant trust score data
  const [trustData] = useState({
    overallScore: 872,
    maxScore: 1000,
    tier: 'Gold',
    tierIcon: '🏆',
    trend: '+15',
    trendPeriod: 'this month',
    scoreBreakdown: {
      orderFulfillment: { score: 185, max: 200, label: 'Order Fulfillment', description: 'On-time delivery, accuracy', icon: '📦' },
      customerRatings: { score: 168, max: 200, label: 'Customer Ratings', description: 'Reviews and ratings', icon: '⭐' },
      responseTime: { score: 145, max: 150, label: 'Response Time', description: 'Query response speed', icon: '⚡' },
      compliance: { score: 140, max: 150, label: 'Compliance', description: 'Policy adherence, documentation', icon: '📋' },
      financialHealth: { score: 120, max: 150, label: 'Financial Health', description: 'Payment behavior, settlements', icon: '💰' },
      qualityMetrics: { score: 114, max: 150, label: 'Quality Metrics', description: 'Product quality, returns', icon: '✅' }
    },
    recentChanges: [
      { date: '2024-12-27', change: '+5', reason: 'Achieved 100% order fulfillment rate this week', type: 'positive' },
      { date: '2024-12-25', change: '+3', reason: 'Received 5-star review from verified customer', type: 'positive' },
      { date: '2024-12-23', change: '-2', reason: 'Delayed response to customer query', type: 'negative' },
      { date: '2024-12-20', change: '+8', reason: 'Completed all pending compliance documents', type: 'positive' },
      { date: '2024-12-18', change: '+5', reason: 'Zero returns this week', type: 'positive' }
    ],
    tierBenefits: {
      Bronze: ['Standard commission rates', 'Basic analytics', 'Email support'],
      Silver: ['5% lower commission', 'Advanced analytics', 'Priority email support', 'Featured in category'],
      Gold: ['10% lower commission', 'Premium analytics', 'Phone support', 'Homepage featuring', 'Early payout option'],
      Platinum: ['15% lower commission', 'Real-time analytics', 'Dedicated account manager', 'Prime positioning', 'Same-day payout'],
      Diamond: ['20% lower commission', 'White-glove service', 'Custom campaigns', 'VIP positioning', 'Instant settlements']
    },
    improvements: [
      { metric: 'Response Time', current: 2.5, target: 1.5, unit: 'hours', potentialPoints: 20 },
      { metric: 'Return Rate', current: 3.2, target: 2.0, unit: '%', potentialPoints: 15 },
      { metric: 'Review Response', current: 75, target: 95, unit: '%', potentialPoints: 10 }
    ],
    competitorComparison: {
      categoryAverage: 750,
      topPerformers: 920,
      yourRank: 12,
      totalInCategory: 156
    },
    penalties: [
      { type: 'Late Delivery', count: 2, impact: -5, period: 'This month' },
      { type: 'Customer Complaint', count: 1, impact: -3, period: 'This month' }
    ]
  });

  const getTierColor = (tier) => {
    const colors = {
      Bronze: 'from-amber-600 to-amber-800',
      Silver: 'from-gray-400 to-gray-600',
      Gold: 'from-yellow-400 to-yellow-600',
      Platinum: 'from-indigo-400 to-indigo-600',
      Diamond: 'from-cyan-300 to-blue-500'
    };
    return colors[tier] || 'from-gray-400 to-gray-600';
  };

  const getScoreColor = (score, max) => {
    const percentage = (score / max) * 100;
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-yellow-500';
    if (percentage >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'breakdown', label: 'Breakdown', icon: '📈' },
    { id: 'improvements', label: 'Improve', icon: '🎯' },
    { id: 'history', label: 'History', icon: '📜' },
    { id: 'benefits', label: 'Benefits', icon: '🎁' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className={`bg-gradient-to-r ${getTierColor(trustData.tier)} text-white p-6`}>
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Trust Score</h1>
        </div>

        {/* Score Card */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/80 text-sm">Your Trust Score</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">{trustData.overallScore}</span>
                <span className="text-white/60">/ {trustData.maxScore}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className={`text-sm px-2 py-0.5 rounded-full ${
                  trustData.trend.startsWith('+') ? 'bg-green-400/30' : 'bg-red-400/30'
                }`}>
                  {trustData.trend} {trustData.trendPeriod}
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-1">{trustData.tierIcon}</div>
              <div className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">
                {trustData.tier} Tier
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/20">
            <div className="text-center">
              <div className="text-lg font-bold">{trustData.competitorComparison.categoryAverage}</div>
              <div className="text-xs text-white/70">Category Avg</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">#{trustData.competitorComparison.yourRank}</div>
              <div className="text-xs text-white/70">Your Rank</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">{trustData.competitorComparison.totalInCategory}</div>
              <div className="text-xs text-white/70">In Category</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto bg-white border-b sticky top-0 z-10">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-yellow-600 text-yellow-600'
                : 'border-transparent text-gray-600'
            }`}
          >
            <span className="mr-1">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl mb-1">📦</div>
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-xs text-gray-500">Fulfillment Rate</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl mb-1">⭐</div>
                <div className="text-2xl font-bold text-yellow-600">4.7</div>
                <div className="text-xs text-gray-500">Avg Rating</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-2xl font-bold text-blue-600">2.5h</div>
                <div className="text-xs text-gray-500">Response Time</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl mb-1">↩️</div>
                <div className="text-2xl font-bold text-purple-600">3.2%</div>
                <div className="text-xs text-gray-500">Return Rate</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-3">Recent Score Changes</h3>
              <div className="space-y-3">
                {trustData.recentChanges.slice(0, 3).map((change, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        change.type === 'positive' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {change.type === 'positive' ? '📈' : '📉'}
                      </div>
                      <div>
                        <p className="text-sm">{change.reason}</p>
                        <p className="text-xs text-gray-500">{change.date}</p>
                      </div>
                    </div>
                    <span className={`font-semibold ${
                      change.type === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {change.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Penalties */}
            {trustData.penalties.length > 0 && (
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <h3 className="font-semibold text-red-800 mb-3">Active Penalties</h3>
                <div className="space-y-2">
                  {trustData.penalties.map((penalty, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-red-700">{penalty.type} ({penalty.count}x)</span>
                      <span className="font-medium text-red-800">{penalty.impact} points</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Breakdown Tab */}
        {activeTab === 'breakdown' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4">Score Components</h3>
              <div className="space-y-4">
                {Object.entries(trustData.scoreBreakdown).map(([key, data]) => (
                  <div key={key}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span>{data.icon}</span>
                        <span className="text-sm font-medium">{data.label}</span>
                      </div>
                      <span className="text-sm font-semibold">{data.score} / {data.max}</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getScoreColor(data.score, data.max)} rounded-full transition-all`}
                        style={{ width: `${(data.score / data.max) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Improvements Tab */}
        {activeTab === 'improvements' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
              <h3 className="font-semibold mb-2">🎯 Score Improvement Opportunities</h3>
              <p className="text-sm text-gray-600">
                Follow these recommendations to boost your trust score.
              </p>
            </div>

            {trustData.improvements.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">{item.metric}</h4>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    +{item.potentialPoints} points
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Current: {item.current}{item.unit}</span>
                      <span className="text-green-600">Target: {item.target}{item.unit}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-500 to-green-500 rounded-full"
                        style={{ width: `${(item.target / item.current) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                <button className="w-full bg-purple-100 text-purple-700 py-2 rounded-lg text-sm font-medium mt-2">
                  View Tips to Improve
                </button>
              </div>
            ))}

            {/* Quick Tips */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-3">💡 Quick Tips</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Respond to customer queries within 1 hour during business hours</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Update inventory regularly to avoid cancellations</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Reply to all reviews, especially negative ones professionally</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Keep product descriptions accurate and detailed</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="space-y-3">
            {trustData.recentChanges.map((change, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-4 shadow-sm border-l-4 ${
                  change.type === 'positive' ? 'border-l-green-500' : 'border-l-red-500'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{change.date}</span>
                  <span className={`font-bold ${
                    change.type === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {change.change} points
                  </span>
                </div>
                <p className="text-sm">{change.reason}</p>
              </div>
            ))}
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="space-y-4">
            {Object.entries(trustData.tierBenefits).map(([tier, benefits]) => (
              <div
                key={tier}
                className={`bg-white rounded-xl p-4 shadow-sm ${
                  tier === trustData.tier ? 'ring-2 ring-yellow-500' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getTierColor(tier)} flex items-center justify-center text-white text-lg`}>
                      {tier === 'Bronze' && '🥉'}
                      {tier === 'Silver' && '🥈'}
                      {tier === 'Gold' && '🥇'}
                      {tier === 'Platinum' && '💎'}
                      {tier === 'Diamond' && '👑'}
                    </div>
                    <span className="font-semibold">{tier}</span>
                  </div>
                  {tier === trustData.tier && (
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchantTrustScoreDetail;
