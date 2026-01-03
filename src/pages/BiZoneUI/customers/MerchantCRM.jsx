import { useState } from 'react';
import { Users, TrendingUp, Star, ShoppingBag, DollarSign, Mail, Phone, MessageSquare, Tag, Filter, Search, Download, Upload, Target, Heart, Clock, Calendar, Gift, Award, Activity, BarChart3, Zap } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantCRM() {
  const [activeTab, setActiveTab] = useState('segments');
  const [selectedSegment, setSelectedSegment] = useState('all');

  // Customer segments with RFM analysis
  const customerSegments = [
    {
      id: 'champions',
      name: 'Champions',
      description: 'Best customers - bought recently, often, and spend the most',
      count: 245,
      totalValue: 1456780,
      avgOrderValue: 5945,
      frequency: 8.2,
      color: 'emerald',
      rfm: { recency: 5, frequency: 5, monetary: 5 },
      growthRate: 12.5,
      churnRisk: 'low'
    },
    {
      id: 'loyal',
      name: 'Loyal Customers',
      description: 'Spend good money with us often. Responsive to promotions',
      count: 389,
      totalValue: 1234560,
      avgOrderValue: 3174,
      frequency: 6.5,
      color: 'blue',
      rfm: { recency: 4, frequency: 4, monetary: 4 },
      growthRate: 8.3,
      churnRisk: 'low'
    },
    {
      id: 'potential',
      name: 'Potential Loyalists',
      description: 'Recent customers with average frequency',
      count: 512,
      totalValue: 892340,
      avgOrderValue: 1743,
      frequency: 3.8,
      color: 'purple',
      rfm: { recency: 5, frequency: 3, monetary: 3 },
      growthRate: 18.7,
      churnRisk: 'medium'
    },
    {
      id: 'at_risk',
      name: 'At Risk',
      description: 'Made big purchases long time ago. Need to bring them back',
      count: 178,
      totalValue: 567890,
      avgOrderValue: 3191,
      frequency: 2.1,
      color: 'yellow',
      rfm: { recency: 2, frequency: 4, monetary: 4 },
      growthRate: -5.2,
      churnRisk: 'high'
    },
    {
      id: 'cant_lose',
      name: "Can't Lose Them",
      description: 'Made biggest purchases but haven\'t returned for long time',
      count: 89,
      totalValue: 445600,
      avgOrderValue: 5006,
      frequency: 1.8,
      color: 'red',
      rfm: { recency: 1, frequency: 5, monetary: 5 },
      growthRate: -12.8,
      churnRisk: 'critical'
    },
    {
      id: 'new',
      name: 'New Customers',
      description: 'Recently acquired, need nurturing',
      count: 678,
      totalValue: 678900,
      avgOrderValue: 1001,
      frequency: 1.2,
      color: 'cyan',
      rfm: { recency: 5, frequency: 1, monetary: 2 },
      growthRate: 24.5,
      churnRisk: 'medium'
    }
  ];

  // Individual customers
  const customers = [
    {
      id: 'cust-001',
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43210',
      segment: 'champions',
      totalSpent: 45678,
      orders: 23,
      avgOrderValue: 1986,
      lastPurchase: '2025-12-25',
      joinDate: '2024-03-15',
      tags: ['VIP', 'Influencer', 'Email Subscriber'],
      ltv: 52340,
      churnProbability: 5,
      nextPurchasePrediction: '2026-01-15',
      favoriteCategories: ['Fashion', 'Electronics'],
      preferredChannel: 'Mobile App'
    },
    {
      id: 'cust-002',
      name: 'Rahul Mehta',
      email: 'rahul.m@email.com',
      phone: '+91 98123 45678',
      segment: 'loyal',
      totalSpent: 32456,
      orders: 18,
      avgOrderValue: 1803,
      lastPurchase: '2025-12-20',
      joinDate: '2024-05-20',
      tags: ['Regular', 'Discount Hunter'],
      ltv: 38900,
      churnProbability: 12,
      nextPurchasePrediction: '2026-01-10',
      favoriteCategories: ['Electronics', 'Books'],
      preferredChannel: 'Web'
    },
    {
      id: 'cust-003',
      name: 'Anjali Desai',
      email: 'anjali.d@email.com',
      phone: '+91 97654 32109',
      segment: 'at_risk',
      totalSpent: 28900,
      orders: 9,
      avgOrderValue: 3211,
      lastPurchase: '2025-10-15',
      joinDate: '2024-01-10',
      tags: ['High Value', 'At Risk'],
      ltv: 31200,
      churnProbability: 68,
      nextPurchasePrediction: 'Unknown',
      favoriteCategories: ['Fashion', 'Beauty'],
      preferredChannel: 'Store'
    }
  ];

  // Campaign recommendations
  const campaignRecommendations = [
    {
      segment: 'at_risk',
      title: 'Win-Back Campaign for At-Risk Customers',
      description: 'Send 20% discount to customers who haven\'t purchased in 60+ days',
      estimatedReach: 178,
      estimatedRevenue: 85400,
      roi: 3.2,
      channels: ['Email', 'SMS', 'WhatsApp']
    },
    {
      segment: 'new',
      title: 'Welcome Series for New Customers',
      description: 'Automated 3-email sequence to nurture new customers',
      estimatedReach: 678,
      estimatedRevenue: 135600,
      roi: 4.8,
      channels: ['Email']
    },
    {
      segment: 'champions',
      title: 'VIP Exclusive Early Access',
      description: 'Give champions first access to new products',
      estimatedReach: 245,
      estimatedRevenue: 292800,
      roi: 5.6,
      channels: ['Email', 'Mobile App', 'SMS']
    }
  ];

  // Performance metrics
  const performanceMetrics = [
    {
      label: 'Total Customers',
      value: '2,091',
      change: '+15.2%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Customer LTV',
      value: '₹42,340',
      change: '+8.7%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Retention Rate',
      value: '68.5%',
      change: '+4.2%',
      trend: 'up',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      label: 'Avg Frequency',
      value: '4.2x',
      change: '+0.8',
      trend: 'up',
      icon: Zap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const getSegmentBadge = (segmentId) => {
    const segment = customerSegments.find(s => s.id === segmentId);
    if (!segment) return null;
    return (
      <span className={`px-2 py-1 text-xs rounded-full font-medium bg-${segment.color}-100 text-${segment.color}-700`}>
        {segment.name}
      </span>
    );
  };

  const getChurnRiskBadge = (risk) => {
    const riskConfig = {
      low: { label: 'Low Risk', className: 'bg-green-100 text-green-700' },
      medium: { label: 'Medium Risk', className: 'bg-yellow-100 text-yellow-700' },
      high: { label: 'High Risk', className: 'bg-orange-100 text-orange-700' },
      critical: { label: 'Critical', className: 'bg-red-100 text-red-700' }
    };
    const config = riskConfig[risk] || riskConfig.medium;
    return <span className={`px-2 py-1 text-xs rounded-full font-medium ${config.className}`}>{config.label}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <MerchantNav />
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Customer Relationship Management</h1>
              </div>
              <p className="text-purple-100">Advanced customer segmentation, lifecycle tracking & predictive analytics</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export
              </button>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Import
              </button>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendingUp className="w-4 h-4" />
                    {metric.change}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            );
          })}
        </div>

        {/* Main Content Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Tabs */}
          <div className="border-b border-gray-200 px-6">
            <div className="flex gap-4">
              {['segments', 'customers', 'campaigns', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 font-semibold text-sm capitalize border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-purple-600 text-purple-600'
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
            {activeTab === 'segments' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {customerSegments.map((segment) => (
                    <div key={segment.id} className={`border-2 border-${segment.color}-200 rounded-lg p-6 hover:border-${segment.color}-400 transition-colors cursor-pointer`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg mb-1">{segment.name}</h3>
                          <p className="text-sm text-gray-600">{segment.description}</p>
                        </div>
                        {getChurnRiskBadge(segment.churnRisk)}
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Customers</p>
                          <p className="text-2xl font-bold text-gray-900">{segment.count}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Total Value</p>
                          <p className="text-xl font-bold text-gray-900">₹{(segment.totalValue / 1000).toFixed(0)}K</p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Avg Order Value:</span>
                          <span className="font-semibold text-gray-900">₹{segment.avgOrderValue.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Frequency:</span>
                          <span className="font-semibold text-gray-900">{segment.frequency}x</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Growth Rate:</span>
                          <span className={`font-semibold ${segment.growthRate > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {segment.growthRate > 0 ? '+' : ''}{segment.growthRate}%
                          </span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-600 mb-2">RFM Score</p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1">
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="text-gray-600">R</span>
                              <span className="font-semibold">{segment.rfm.recency}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1">
                              <div className={`bg-${segment.color}-600 h-1 rounded-full`} style={{ width: `${segment.rfm.recency * 20}%` }} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="text-gray-600">F</span>
                              <span className="font-semibold">{segment.rfm.frequency}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1">
                              <div className={`bg-${segment.color}-600 h-1 rounded-full`} style={{ width: `${segment.rfm.frequency * 20}%` }} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="text-gray-600">M</span>
                              <span className="font-semibold">{segment.rfm.monetary}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1">
                              <div className={`bg-${segment.color}-600 h-1 rounded-full`} style={{ width: `${segment.rfm.monetary * 20}%` }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'customers' && (
              <div className="space-y-4">
                {/* Filters */}
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <select
                    value={selectedSegment}
                    onChange={(e) => setSelectedSegment(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="all">All Segments</option>
                    {customerSegments.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                  <div className="flex-1" />
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search customers..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Customer List */}
                <div className="space-y-3">
                  {customers.map((customer) => (
                    <div key={customer.id} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                            <Users className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-gray-900">{customer.name}</h3>
                              {getSegmentBadge(customer.segment)}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                {customer.email}
                              </span>
                              <span className="flex items-center gap-1">
                                <Phone className="w-4 h-4" />
                                {customer.phone}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              {customer.tags.map((tag, idx) => (
                                <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900">₹{customer.totalSpent.toLocaleString()}</p>
                          <p className="text-sm text-gray-600">{customer.orders} orders</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Lifetime Value</p>
                          <p className="font-semibold text-gray-900">₹{customer.ltv.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Last Purchase</p>
                          <p className="font-semibold text-gray-900">{customer.lastPurchase}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Churn Risk</p>
                          <p className={`font-semibold ${customer.churnProbability > 50 ? 'text-red-600' : 'text-green-600'}`}>
                            {customer.churnProbability}%
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Next Purchase</p>
                          <p className="font-semibold text-gray-900">{customer.nextPurchasePrediction}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          SMS
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                          <ShoppingBag className="w-4 h-4" />
                          View Orders
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                          <Gift className="w-4 h-4" />
                          Send Offer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'campaigns' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">AI-Powered Campaign Recommendations</h3>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Create Custom Campaign
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {campaignRecommendations.map((campaign, index) => (
                    <div key={index} className="border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="w-5 h-5 text-purple-600" />
                            <h4 className="font-bold text-gray-900">{campaign.title}</h4>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{campaign.description}</p>
                          {getSegmentBadge(campaign.segment)}
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Estimated Reach</p>
                          <p className="text-lg font-bold text-gray-900">{campaign.estimatedReach.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Est. Revenue</p>
                          <p className="text-lg font-bold text-green-600">₹{(campaign.estimatedRevenue / 1000).toFixed(0)}K</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Expected ROI</p>
                          <p className="text-lg font-bold text-purple-600">{campaign.roi}x</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Channels</p>
                          <div className="flex items-center gap-1">
                            {campaign.channels.map((ch, idx) => (
                              <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                                {ch}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors">
                          Launch Campaign
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
                          Customize
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Lifecycle</h3>
                    <div className="h-64 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                      <p className="text-gray-600">Customer journey visualization</p>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Churn Prediction</h3>
                    <div className="h-64 flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 rounded-lg">
                      <p className="text-gray-600">ML-powered churn analysis</p>
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
