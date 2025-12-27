import { useState } from 'react';
import {
  BarChart3, TrendingUp, Users, Eye, MousePointer, ShoppingCart, DollarSign,
  Clock, Calendar, Target, Award, Zap, Star, ArrowUp, ArrowDown, Download,
  Filter, Search, Tag, Gift, UserCheck, Share2, Heart, AlertCircle, CheckCircle
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantDealAnalytics() {
  const [dateRange, setDateRange] = useState('30days');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDeal, setSelectedDeal] = useState(null);

  const [overview, setOverview] = useState({
    totalDeals: 45,
    activeDeals: 12,
    totalViews: 234567,
    totalClicks: 45678,
    totalRedemptions: 8934,
    totalRevenue: 4567890,
    avgCTR: 19.5,
    avgConversionRate: 19.6,
    friendRedemptions: 3456,
    competitorBenchmark: 15.2
  });

  const [dealPerformance, setDealPerformance] = useState([
    {
      id: 1,
      name: 'Flash Sale: 70% OFF Coffee',
      category: 'Food & Beverage',
      status: 'active',
      trending: true,
      views: 45678,
      clicks: 8923,
      redemptions: 1567,
      revenue: 139553,
      ctr: 19.5,
      cvr: 17.6,
      friendNetwork: 456,
      avgRating: 4.8,
      reach: 'High',
      timeActive: '5 days',
      peakHour: '12-1 PM',
      growth: 23.5
    },
    {
      id: 2,
      name: 'Buy 1 Get 1 Pizza Deal',
      category: 'Food & Beverage',
      status: 'active',
      trending: true,
      views: 38945,
      clicks: 7234,
      redemptions: 1234,
      revenue: 368926,
      ctr: 18.6,
      cvr: 17.1,
      friendNetwork: 389,
      avgRating: 4.7,
      reach: 'High',
      timeActive: '7 days',
      peakHour: '7-8 PM',
      growth: 18.2
    },
    {
      id: 3,
      name: '50% OFF Gym Membership',
      category: 'Fitness',
      status: 'completed',
      trending: false,
      views: 28934,
      clicks: 5234,
      redemptions: 890,
      revenue: 2223100,
      ctr: 18.1,
      cvr: 17.0,
      friendNetwork: 234,
      avgRating: 4.6,
      reach: 'Medium',
      timeActive: '14 days',
      peakHour: '6-7 AM',
      growth: 12.3
    },
    {
      id: 4,
      name: 'Spa Package Discount',
      category: 'Wellness',
      status: 'active',
      trending: false,
      views: 23456,
      clicks: 4567,
      redemptions: 678,
      revenue: 678000,
      ctr: 19.5,
      cvr: 14.8,
      friendNetwork: 178,
      avgRating: 4.9,
      reach: 'Medium',
      timeActive: '3 days',
      peakHour: '2-3 PM',
      growth: 8.7
    },
    {
      id: 5,
      name: 'Weekend Shopping Special',
      category: 'Shopping',
      status: 'scheduled',
      trending: false,
      views: 0,
      clicks: 0,
      redemptions: 0,
      revenue: 0,
      ctr: 0,
      cvr: 0,
      friendNetwork: 0,
      avgRating: 0,
      reach: 'Projected High',
      timeActive: 'Not started',
      peakHour: '-',
      growth: 0
    }
  ]);

  const [timeOfDayAnalytics, setTimeOfDayAnalytics] = useState([
    { hour: '6-7 AM', views: 2340, clicks: 456, redemptions: 89, revenue: 22340 },
    { hour: '7-8 AM', views: 3450, clicks: 678, redemptions: 123, revenue: 30890 },
    { hour: '8-9 AM', views: 5670, clicks: 1123, redemptions: 234, revenue: 58760 },
    { hour: '9-10 AM', views: 8900, clicks: 1789, redemptions: 345, revenue: 86550 },
    { hour: '10-11 AM', views: 12340, clicks: 2456, redemptions: 456, revenue: 114600 },
    { hour: '11-12 PM', views: 15670, clicks: 3123, redemptions: 589, revenue: 147925 },
    { hour: '12-1 PM', views: 23450, clicks: 4678, redemptions: 890, revenue: 223550 },
    { hour: '1-2 PM', views: 18900, clicks: 3789, redemptions: 678, revenue: 170370 },
    { hour: '2-3 PM', views: 14560, clicks: 2890, redemptions: 534, revenue: 134100 },
    { hour: '3-4 PM', views: 11230, clicks: 2234, redemptions: 423, revenue: 106230 },
    { hour: '4-5 PM', views: 13450, clicks: 2678, redemptions: 501, revenue: 125865 },
    { hour: '5-6 PM', views: 16780, clicks: 3345, redemptions: 623, revenue: 156565 },
    { hour: '6-7 PM', views: 21340, clicks: 4234, redemptions: 789, revenue: 198255 },
    { hour: '7-8 PM', views: 25670, clicks: 5123, redemptions: 956, revenue: 240170 },
    { hour: '8-9 PM', views: 22340, clicks: 4456, redemptions: 834, revenue: 209550 },
    { hour: '9-10 PM', views: 17890, clicks: 3567, redemptions: 667, revenue: 167575 }
  ]);

  const [categoryPerformance, setCategoryPerformance] = useState([
    { category: 'Food & Beverage', deals: 18, views: 123456, redemptions: 4567, revenue: 1234567, avgCVR: 18.9, growth: 23.5 },
    { category: 'Fitness', deals: 8, views: 67890, redemptions: 2345, revenue: 2345678, avgCVR: 17.2, growth: 15.3 },
    { category: 'Wellness', deals: 6, views: 45678, redemptions: 1234, revenue: 890000, avgCVR: 16.8, growth: 12.1 },
    { category: 'Shopping', deals: 7, views: 56789, redemptions: 1890, revenue: 567890, avgCVR: 15.4, growth: 8.7 },
    { category: 'Entertainment', deals: 4, views: 34567, redemptions: 987, revenue: 345678, avgCVR: 14.2, growth: 5.2 },
    { category: 'Services', deals: 2, views: 23456, redemptions: 678, revenue: 234567, avgCVR: 13.8, growth: -2.3 }
  ]);

  const [competitorComparison, setCompetitorComparison] = useState([
    { metric: 'Avg Deal Views', yourValue: 5214, industryAvg: 4567, percentile: 68 },
    { metric: 'Click-Through Rate', yourValue: 19.5, industryAvg: 15.2, percentile: 82 },
    { metric: 'Conversion Rate', yourValue: 19.6, industryAvg: 12.8, percentile: 91 },
    { metric: 'Avg Deal Revenue', yourValue: 101508, industryAvg: 87500, percentile: 73 },
    { metric: 'Friend Redemptions', yourValue: 76.8, industryAvg: 45.3, percentile: 95 }
  ]);

  const [optimizationSuggestions, setOptimizationSuggestions] = useState([
    {
      id: 1,
      type: 'timing',
      priority: 'high',
      title: 'Optimize Deal Launch Time',
      description: 'Your deals perform 34% better when launched between 11 AM - 1 PM. Consider scheduling more deals during this window.',
      expectedImpact: '+15% conversions',
      icon: Clock
    },
    {
      id: 2,
      type: 'pricing',
      priority: 'high',
      title: 'Increase Discount Depth',
      description: 'Deals with 60%+ discounts have 2.3x higher conversion rates. Consider deeper discounts for flash sales.',
      expectedImpact: '+23% revenue',
      icon: Tag
    },
    {
      id: 3,
      type: 'duration',
      priority: 'medium',
      title: 'Reduce Deal Duration',
      description: 'Shorter deals (2-4 hours) create urgency and convert 18% better than longer deals.',
      expectedImpact: '+18% CVR',
      icon: Zap
    },
    {
      id: 4,
      type: 'social',
      priority: 'medium',
      title: 'Leverage Friend Network',
      description: 'Your friend network redemptions are 2x industry average. Create more referral-friendly deals.',
      expectedImpact: '+25% reach',
      icon: Share2
    },
    {
      id: 5,
      type: 'category',
      priority: 'low',
      title: 'Expand Wellness Category',
      description: 'Wellness deals have highest ratings (4.9) but lowest volume. Increase inventory here.',
      expectedImpact: '+12% satisfaction',
      icon: Heart
    }
  ]);

  const [trendingDeals, setTrendingDeals] = useState([
    { name: 'Flash Sale: 70% OFF Coffee', score: 95, trend: 'up', change: 23 },
    { name: 'Buy 1 Get 1 Pizza Deal', score: 89, trend: 'up', change: 18 },
    { name: 'Weekend Brunch Special', score: 78, trend: 'up', change: 12 },
    { name: 'Happy Hour Combo', score: 72, trend: 'stable', change: 2 },
    { name: 'Late Night Munchies', score: 65, trend: 'down', change: -5 }
  ]);

  const maxViews = Math.max(...timeOfDayAnalytics.map(t => t.views));
  const maxCategoryRevenue = Math.max(...categoryPerformance.map(c => c.revenue));

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'red',
      medium: 'orange',
      low: 'blue'
    };
    return colors[priority] || 'gray';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Deal Analytics Dashboard</h1>
                  <p className="text-indigo-100 mt-1">Comprehensive deal performance insights</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 bg-white bg-opacity-20 text-white border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                <option value="7days" className="text-gray-900">Last 7 Days</option>
                <option value="30days" className="text-gray-900">Last 30 Days</option>
                <option value="90days" className="text-gray-900">Last 90 Days</option>
                <option value="12months" className="text-gray-900">Last 12 Months</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 font-medium">
                <Download className="w-5 h-5" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Tag className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Total Deals</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{overview.totalDeals}</p>
            <p className="text-sm text-green-600 mt-1">{overview.activeDeals} active</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Total Views</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{(overview.totalViews / 1000).toFixed(0)}K</p>
            <p className="text-sm text-blue-600 mt-1">All deals</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <MousePointer className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Avg CTR</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{overview.avgCTR}%</p>
            <p className="text-sm text-purple-600 mt-1">Industry: {overview.competitorBenchmark}%</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Avg CVR</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{overview.avgConversionRate}%</p>
            <p className="text-sm text-green-600 mt-1">Redemptions</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-100 p-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Total Revenue</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{(overview.totalRevenue / 1000000).toFixed(1)}M</p>
            <p className="text-sm text-orange-600 mt-1">From deals</p>
          </div>
        </div>

        {/* Top Performing Deals */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Deal Performance Overview</h2>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Categories</option>
              <option value="Food & Beverage">Food & Beverage</option>
              <option value="Fitness">Fitness</option>
              <option value="Wellness">Wellness</option>
              <option value="Shopping">Shopping</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Services">Services</option>
            </select>
          </div>

          <div className="space-y-4">
            {dealPerformance
              .filter(deal => selectedCategory === 'all' || deal.category === selectedCategory)
              .map((deal, index) => (
                <div key={deal.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-gray-400">#{index + 1}</span>
                        <div>
                          <h3 className="font-bold text-gray-900">{deal.name}</h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-sm text-gray-600">{deal.category}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              deal.status === 'active' ? 'bg-green-100 text-green-700' :
                              deal.status === 'scheduled' ? 'bg-purple-100 text-purple-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {deal.status}
                            </span>
                            {deal.trending && (
                              <span className="flex items-center gap-1 text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">
                                <Zap className="w-3 h-3" />
                                Trending
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">₹{deal.revenue.toLocaleString()}</p>
                      {deal.growth > 0 && (
                        <p className="text-sm text-green-600 flex items-center gap-1 justify-end">
                          <ArrowUp className="w-3 h-3" />
                          {deal.growth}%
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-8 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Views</p>
                      <p className="font-semibold text-gray-900">{deal.views.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Clicks</p>
                      <p className="font-semibold text-gray-900">{deal.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Redeemed</p>
                      <p className="font-semibold text-green-600">{deal.redemptions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">CTR</p>
                      <p className="font-semibold text-blue-600">{deal.ctr}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">CVR</p>
                      <p className="font-semibold text-purple-600">{deal.cvr}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Friends</p>
                      <p className="font-semibold text-indigo-600">{deal.friendNetwork}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Rating</p>
                      <p className="font-semibold text-yellow-600 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-500" />
                        {deal.avgRating}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Peak Hour</p>
                      <p className="font-semibold text-gray-900 text-xs">{deal.peakHour}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600">Reach:</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      deal.reach === 'High' ? 'bg-green-100 text-green-700' :
                      deal.reach === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {deal.reach}
                    </span>
                    <span className="text-xs text-gray-600 ml-2">Active: {deal.timeActive}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Time of Day Analytics */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-900">Time-of-Day Performance</h2>
            </div>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {timeOfDayAnalytics.map((time, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700 w-20">{time.hour}</span>
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${(time.views / maxViews) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-right w-40">
                    <span className="text-sm font-semibold text-gray-900">{time.views.toLocaleString()} views</span>
                    <span className="text-xs text-gray-600 ml-2">{time.redemptions} redeemed</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
              <p className="text-sm font-medium text-indigo-900">Peak Performance Window</p>
              <p className="text-xs text-indigo-700 mt-1">12-1 PM and 7-8 PM show highest engagement</p>
            </div>
          </div>

          {/* Category Performance */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-900">Category Performance</h2>
            </div>
            <div className="space-y-4">
              {categoryPerformance.map((cat, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{cat.category}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                        <span>{cat.deals} deals</span>
                        <span>{cat.views.toLocaleString()} views</span>
                        <span>{cat.redemptions.toLocaleString()} redeemed</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">₹{(cat.revenue / 1000).toFixed(0)}K</p>
                      <p className="text-sm text-purple-600">{cat.avgCVR}% CVR</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(cat.revenue / maxCategoryRevenue) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className={`flex items-center gap-1 ${cat.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {cat.growth >= 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                      {Math.abs(cat.growth)}% growth
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Competitor Comparison */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-900">Industry Benchmark Comparison</h2>
            </div>
            <div className="space-y-4">
              {competitorComparison.map((comp, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-900">{comp.metric}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      comp.percentile >= 75 ? 'bg-green-100 text-green-700' :
                      comp.percentile >= 50 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      Top {100 - comp.percentile}%
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Your Performance</p>
                      <p className="text-xl font-bold text-indigo-600">
                        {comp.metric.includes('Rate') ? `${comp.yourValue}%` :
                         comp.metric.includes('Revenue') ? `₹${(comp.yourValue / 1000).toFixed(0)}K` :
                         comp.yourValue.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Industry Average</p>
                      <p className="text-xl font-bold text-gray-600">
                        {comp.metric.includes('Rate') ? `${comp.industryAvg}%` :
                         comp.metric.includes('Revenue') ? `₹${(comp.industryAvg / 1000).toFixed(0)}K` :
                         comp.industryAvg.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        comp.percentile >= 75 ? 'bg-green-500' :
                        comp.percentile >= 50 ? 'bg-yellow-500' :
                        'bg-orange-500'
                      }`}
                      style={{ width: `${comp.percentile}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {((comp.yourValue - comp.industryAvg) / comp.industryAvg * 100).toFixed(1)}% {
                      comp.yourValue > comp.industryAvg ? 'above' : 'below'
                    } average
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Deals */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-900">Trending Status</h2>
            </div>
            <div className="space-y-3">
              {trendingDeals.map((deal, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{deal.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            deal.score >= 80 ? 'bg-green-500' :
                            deal.score >= 60 ? 'bg-yellow-500' :
                            'bg-orange-500'
                          }`}
                          style={{ width: `${deal.score}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-900 w-12">{deal.score}</span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${
                    deal.trend === 'up' ? 'text-green-600' :
                    deal.trend === 'down' ? 'text-red-600' :
                    'text-gray-600'
                  }`}>
                    {deal.trend === 'up' ? <ArrowUp className="w-4 h-4" /> :
                     deal.trend === 'down' ? <ArrowDown className="w-4 h-4" /> :
                     <span className="w-4 h-1 bg-gray-400 rounded" />}
                    {deal.change > 0 ? '+' : ''}{deal.change}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optimization Suggestions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-900">AI-Powered Optimization Suggestions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {optimizationSuggestions.map((suggestion) => {
              const Icon = suggestion.icon;
              const priorityColor = getPriorityColor(suggestion.priority);

              return (
                <div
                  key={suggestion.id}
                  className={`border-2 border-${priorityColor}-200 bg-${priorityColor}-50 rounded-lg p-4 hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`bg-${priorityColor}-100 p-2 rounded-lg`}>
                      <Icon className={`w-5 h-5 text-${priorityColor}-600`} />
                    </div>
                    <span className={`text-xs px-2 py-1 bg-${priorityColor}-100 text-${priorityColor}-700 rounded-full font-medium`}>
                      {suggestion.priority.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{suggestion.title}</h3>
                  <p className="text-sm text-gray-700 mb-3">{suggestion.description}</p>
                  <div className={`bg-${priorityColor}-100 rounded-lg p-2`}>
                    <p className="text-xs font-semibold text-gray-700">Expected Impact</p>
                    <p className={`text-sm font-bold text-${priorityColor}-700`}>{suggestion.expectedImpact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
