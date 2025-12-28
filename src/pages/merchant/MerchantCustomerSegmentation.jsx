import React, { useState } from 'react';
import { Users, TrendingUp, Target, Gift, Mail, IndianRupee, Clock, Award, Zap, Crown } from 'lucide-react';

const MerchantCustomerSegmentation = () => {
  const [activeTab, setActiveTab] = useState('segments');
  const [selectedSegment, setSelectedSegment] = useState('all');

  // Customer segments based on RFM analysis
  const customerSegments = [
    {
      id: 'champions',
      name: 'Champions',
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      description: 'Best customers - High value, frequent, recent',
      customerCount: 234,
      avgSpend: 8450,
      frequency: 12.5,
      recency: 2,
      totalRevenue: 1977300,
      revenueShare: 28,
      retention: 95,
      recommendedActions: [
        'Exclusive VIP rewards',
        'Early access to new products',
        'Personalized thank-you gifts',
        'Premium loyalty tier'
      ]
    },
    {
      id: 'loyal',
      name: 'Loyal Customers',
      icon: Award,
      color: 'from-blue-500 to-purple-500',
      description: 'Regular customers with consistent spending',
      customerCount: 456,
      avgSpend: 5200,
      frequency: 8.3,
      recency: 5,
      totalRevenue: 2371200,
      revenueShare: 34,
      retention: 88,
      recommendedActions: [
        'Loyalty bonus coins',
        'Birthday special offers',
        'Referral incentives',
        'Exclusive member events'
      ]
    },
    {
      id: 'potential',
      name: 'Potential Loyalists',
      icon: TrendingUp,
      color: 'from-green-500 to-teal-500',
      description: 'Recent customers showing promise',
      customerCount: 312,
      avgSpend: 3800,
      frequency: 4.2,
      recency: 3,
      totalRevenue: 1185600,
      revenueShare: 17,
      retention: 72,
      recommendedActions: [
        'Engagement campaigns',
        'Product recommendations',
        'Limited-time offers',
        'Feedback surveys'
      ]
    },
    {
      id: 'at_risk',
      name: 'At Risk',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      description: 'Used to spend well, but declining activity',
      customerCount: 189,
      avgSpend: 4500,
      frequency: 3.1,
      recency: 45,
      totalRevenue: 850500,
      revenueShare: 12,
      retention: 45,
      recommendedActions: [
        'Win-back campaigns',
        'Special discount offers',
        'Re-engagement emails',
        'Personalized outreach'
      ]
    },
    {
      id: 'hibernating',
      name: 'Hibernating',
      icon: Clock,
      color: 'from-gray-500 to-gray-700',
      description: 'Long time since last purchase',
      customerCount: 278,
      avgSpend: 2300,
      frequency: 2.1,
      recency: 90,
      totalRevenue: 639400,
      revenueShare: 9,
      retention: 25,
      recommendedActions: [
        'Aggressive win-back offers',
        'Product updates',
        'Survey for feedback',
        'Last-chance promotions'
      ]
    }
  ];

  // Sample customers for each segment
  const sampleCustomers = {
    champions: [
      {
        id: 'CUST-001',
        name: 'Priya Sharma',
        totalSpent: 12500,
        visits: 18,
        lastVisit: '2 days ago',
        avgOrderValue: 694,
        favoriteCategory: 'Main Course',
        loyaltyTier: 'Platinum'
      },
      {
        id: 'CUST-002',
        name: 'Rajesh Kumar',
        totalSpent: 10800,
        visits: 15,
        lastVisit: '1 day ago',
        avgOrderValue: 720,
        favoriteCategory: 'Biryani',
        loyaltyTier: 'Platinum'
      }
    ],
    loyal: [
      {
        id: 'CUST-003',
        name: 'Amit Patel',
        totalSpent: 6200,
        visits: 10,
        lastVisit: '4 days ago',
        avgOrderValue: 620,
        favoriteCategory: 'Desserts',
        loyaltyTier: 'Gold'
      }
    ],
    potential: [
      {
        id: 'CUST-004',
        name: 'Sneha Verma',
        totalSpent: 4500,
        visits: 5,
        lastVisit: '3 days ago',
        avgOrderValue: 900,
        favoriteCategory: 'Beverages',
        loyaltyTier: 'Silver'
      }
    ],
    at_risk: [
      {
        id: 'CUST-005',
        name: 'Vikram Singh',
        totalSpent: 5600,
        visits: 8,
        lastVisit: '48 days ago',
        avgOrderValue: 700,
        favoriteCategory: 'Main Course',
        loyaltyTier: 'Gold'
      }
    ],
    hibernating: [
      {
        id: 'CUST-006',
        name: 'Meera Joshi',
        totalSpent: 3200,
        visits: 4,
        lastVisit: '95 days ago',
        avgOrderValue: 800,
        favoriteCategory: 'North Indian',
        loyaltyTier: 'Silver'
      }
    ]
  };

  // Campaign templates
  const campaignTemplates = [
    {
      id: 'CAMP-001',
      name: 'VIP Appreciation Week',
      targetSegments: ['champions'],
      type: 'Reward',
      offer: '500 bonus coins + Free dessert',
      expectedROI: '3.5x',
      estimatedReach: 234,
      cost: 15000
    },
    {
      id: 'CAMP-002',
      name: 'Loyalty Milestone Bonus',
      targetSegments: ['loyal'],
      type: 'Retention',
      offer: '15% discount on next 3 orders',
      expectedROI: '2.8x',
      estimatedReach: 456,
      cost: 28000
    },
    {
      id: 'CAMP-003',
      name: 'Welcome Back Special',
      targetSegments: ['at_risk', 'hibernating'],
      type: 'Win-back',
      offer: '30% off + 200 bonus coins',
      expectedROI: '2.1x',
      estimatedReach: 467,
      cost: 45000
    },
    {
      id: 'CAMP-004',
      name: 'New Member Growth',
      targetSegments: ['potential'],
      type: 'Engagement',
      offer: 'Buy 2 Get 1 Free on selected items',
      expectedROI: '2.5x',
      estimatedReach: 312,
      cost: 22000
    }
  ];

  // RFM Scoring breakdown
  const rfmMetrics = {
    recency: {
      name: 'Recency',
      description: 'Days since last purchase',
      ranges: [
        { score: 5, range: '0-7 days', customers: 234, color: 'bg-green-500' },
        { score: 4, range: '8-14 days', customers: 312, color: 'bg-blue-500' },
        { score: 3, range: '15-30 days', customers: 456, color: 'bg-yellow-500' },
        { score: 2, range: '31-60 days', customers: 189, color: 'bg-orange-500' },
        { score: 1, range: '60+ days', customers: 278, color: 'bg-red-500' }
      ]
    },
    frequency: {
      name: 'Frequency',
      description: 'Number of purchases',
      ranges: [
        { score: 5, range: '10+ orders', customers: 234, color: 'bg-green-500' },
        { score: 4, range: '6-9 orders', customers: 456, color: 'bg-blue-500' },
        { score: 3, range: '4-5 orders', customers: 312, color: 'bg-yellow-500' },
        { score: 2, range: '2-3 orders', customers: 189, color: 'bg-orange-500' },
        { score: 1, range: '1 order', customers: 278, color: 'bg-red-500' }
      ]
    },
    monetary: {
      name: 'Monetary',
      description: 'Total spend amount',
      ranges: [
        { score: 5, range: '₹8000+', customers: 234, color: 'bg-green-500' },
        { score: 4, range: '₹5000-7999', customers: 456, color: 'bg-blue-500' },
        { score: 3, range: '₹3000-4999', customers: 312, color: 'bg-yellow-500' },
        { score: 2, range: '₹1500-2999', customers: 189, color: 'bg-orange-500' },
        { score: 1, range: '< ₹1500', customers: 278, color: 'bg-red-500' }
      ]
    }
  };

  const getSegmentById = (id) => customerSegments.find(s => s.id === id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Users className="w-10 h-10 text-purple-400" />
            Customer Segmentation
          </h1>
          <p className="text-gray-400">RFM Analysis & Targeted Marketing</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-blue-400" />
              <span className="text-xs text-gray-400">Total Customers</span>
            </div>
            <div className="text-3xl font-bold text-white">
              {customerSegments.reduce((sum, seg) => sum + seg.customerCount, 0)}
            </div>
            <div className="text-sm text-blue-400">Across 5 segments</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <IndianRupee className="w-8 h-8 text-green-400" />
              <span className="text-xs text-gray-400">Total Revenue</span>
            </div>
            <div className="text-3xl font-bold text-white">
              ₹{(customerSegments.reduce((sum, seg) => sum + seg.totalRevenue, 0) / 100000).toFixed(2)}L
            </div>
            <div className="text-sm text-green-400">From segmented customers</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Crown className="w-8 h-8 text-yellow-400" />
              <span className="text-xs text-gray-400">Top Segment</span>
            </div>
            <div className="text-2xl font-bold text-white">Champions</div>
            <div className="text-sm text-yellow-400">28% revenue share</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8 text-red-400" />
              <span className="text-xs text-gray-400">At Risk</span>
            </div>
            <div className="text-3xl font-bold text-white">467</div>
            <div className="text-sm text-red-400">Need attention</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {[
            { id: 'segments', label: 'Customer Segments', icon: Users },
            { id: 'rfm', label: 'RFM Analysis', icon: TrendingUp },
            { id: 'campaigns', label: 'Target Campaigns', icon: Target },
            { id: 'customers', label: 'Customer Details', icon: Award }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
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
          {activeTab === 'segments' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Customer Segments Overview</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {customerSegments.map((segment) => {
                  const Icon = segment.icon;
                  return (
                    <div key={segment.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${segment.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{segment.name}</h3>
                          <p className="text-gray-400 text-sm">{segment.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="text-gray-400 text-sm">Customers</div>
                          <div className="text-white font-bold text-xl">{segment.customerCount}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="text-gray-400 text-sm">Avg Spend</div>
                          <div className="text-green-400 font-bold text-xl">₹{segment.avgSpend}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="text-gray-400 text-sm">Frequency</div>
                          <div className="text-white font-bold text-xl">{segment.frequency}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="text-gray-400 text-sm">Recency (days)</div>
                          <div className="text-white font-bold text-xl">{segment.recency}</div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-400 text-sm">Revenue Contribution</span>
                          <span className="text-white font-bold">₹{segment.totalRevenue.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                          <div
                            className={`bg-gradient-to-r ${segment.color} h-2 rounded-full`}
                            style={{ width: `${segment.revenueShare}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">{segment.revenueShare}% of total</span>
                          <span className="text-green-400 text-sm">{segment.retention}% retention</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-gray-400 text-sm mb-2">Recommended Actions:</div>
                        <div className="space-y-2">
                          {segment.recommendedActions.slice(0, 2).map((action, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <Gift className="w-4 h-4 text-purple-400 flex-shrink-0" />
                              <span className="text-white">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all">
                        Create Campaign
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'rfm' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">RFM Analysis Breakdown</h2>

              {Object.entries(rfmMetrics).map(([key, metric]) => (
                <div key={key} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">{metric.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{metric.description}</p>

                  <div className="space-y-3">
                    {metric.ranges.map((range, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-16 text-center">
                          <div className={`${range.color} text-white font-bold py-2 px-3 rounded-lg`}>
                            {range.score}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white font-medium">{range.range}</span>
                            <span className="text-gray-400">{range.customers} customers</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className={`${range.color} h-2 rounded-full`}
                              style={{ width: `${(range.customers / 1469) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-400" />
                  RFM Scoring Guide
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">Champions (5-5-5):</span> Best customers - recent, frequent, high spending
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">Loyal (4-4-4):</span> Consistent performers across all metrics
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">Potential (5-3-3):</span> Recent customers with growth potential
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">At Risk (2-4-4):</span> High value but declining engagement
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">Hibernating (1-1-1):</span> Low scores across all dimensions
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'campaigns' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Targeted Campaign Templates</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all">
                  + Create Custom Campaign
                </button>
              </div>

              {campaignTemplates.map((campaign) => (
                <div key={campaign.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{campaign.name}</h3>
                      <p className="text-gray-400 text-sm">
                        Type: {campaign.type} • Targeting: {campaign.targetSegments.map(s => getSegmentById(s)?.name).join(', ')}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Expected ROI</div>
                      <div className="text-green-400 font-bold text-2xl">{campaign.expectedROI}</div>
                    </div>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-400 font-semibold">Offer Details</span>
                    </div>
                    <div className="text-white font-medium">{campaign.offer}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Estimated Reach</div>
                      <div className="text-white font-bold text-xl">{campaign.estimatedReach} customers</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Campaign Cost</div>
                      <div className="text-yellow-400 font-bold text-xl">₹{campaign.cost.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      Send Campaign
                    </button>
                    <button className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-all">
                      Customize
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Customer Details by Segment</h2>
                <select
                  value={selectedSegment}
                  onChange={(e) => setSelectedSegment(e.target.value)}
                  className="bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white"
                >
                  <option value="all">All Segments</option>
                  {customerSegments.map((seg) => (
                    <option key={seg.id} value={seg.id}>{seg.name}</option>
                  ))}
                </select>
              </div>

              {Object.entries(sampleCustomers)
                .filter(([segmentId]) => selectedSegment === 'all' || selectedSegment === segmentId)
                .map(([segmentId, customers]) => (
                  <div key={segmentId} className="space-y-4">
                    <h3 className="text-lg font-bold text-white">
                      {getSegmentById(segmentId)?.name}
                    </h3>
                    {customers.map((customer) => (
                      <div key={customer.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-white">{customer.name}</h4>
                            <p className="text-gray-400 text-sm">{customer.id}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-400">Loyalty Tier</div>
                            <div className="text-yellow-400 font-bold">{customer.loyaltyTier}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="text-gray-400 text-sm">Total Spent</div>
                            <div className="text-green-400 font-bold">₹{customer.totalSpent}</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="text-gray-400 text-sm">Visits</div>
                            <div className="text-white font-bold">{customer.visits}</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="text-gray-400 text-sm">Avg Order</div>
                            <div className="text-white font-bold">₹{customer.avgOrderValue}</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="text-gray-400 text-sm">Last Visit</div>
                            <div className="text-white font-bold">{customer.lastVisit}</div>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="text-gray-400">
                            Favorite: <span className="text-white">{customer.favoriteCategory}</span>
                          </div>
                          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all text-sm">
                            Send Offer
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MerchantCustomerSegmentation;
