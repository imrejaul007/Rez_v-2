import { useState } from 'react';
import {
  TrendingUp, TrendingDown, BarChart3, Star, Users, DollarSign,
  Award, Target, Lightbulb, Trophy, ArrowUpRight, ArrowDownRight,
  CheckCircle, AlertCircle, Eye, Heart, ShoppingCart, Calendar,
  Zap, Crown, Medal, ChevronRight, Download, Info
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantBenchmarks() {
  const [selectedCategory, setSelectedCategory] = useState('restaurant');
  const [timeRange, setTimeRange] = useState('30days');

  const [yourPerformance, setYourPerformance] = useState({
    revenue: 456789,
    rating: 4.7,
    repeatRate: 52,
    aov: 1234,
    redemptionRate: 67.8,
    customerSatisfaction: 89
  });

  const [categoryAverage, setCategoryAverage] = useState({
    revenue: 398654,
    rating: 4.5,
    repeatRate: 45,
    aov: 1000,
    redemptionRate: 58.3,
    customerSatisfaction: 82
  });

  const [benchmarkMetrics, setBenchmarkMetrics] = useState([
    {
      id: 1,
      metric: 'Monthly Revenue',
      yourValue: 456789,
      avgValue: 398654,
      topValue: 1234567,
      unit: '₹',
      format: 'currency',
      difference: 15,
      status: 'above'
    },
    {
      id: 2,
      metric: 'Customer Rating',
      yourValue: 4.7,
      avgValue: 4.5,
      topValue: 4.9,
      unit: '⭐',
      format: 'rating',
      difference: 4.4,
      status: 'above'
    },
    {
      id: 3,
      metric: 'Repeat Customer Rate',
      yourValue: 52,
      avgValue: 45,
      topValue: 78,
      unit: '%',
      format: 'percentage',
      difference: 15.6,
      status: 'above'
    },
    {
      id: 4,
      metric: 'Average Order Value',
      yourValue: 1234,
      avgValue: 1000,
      topValue: 2456,
      unit: '₹',
      format: 'currency',
      difference: 23.4,
      status: 'above'
    },
    {
      id: 5,
      metric: 'Offer Redemption Rate',
      yourValue: 67.8,
      avgValue: 58.3,
      topValue: 85.2,
      unit: '%',
      format: 'percentage',
      difference: 16.3,
      status: 'above'
    },
    {
      id: 6,
      metric: 'Customer Satisfaction',
      yourValue: 89,
      avgValue: 82,
      topValue: 96,
      unit: '%',
      format: 'percentage',
      difference: 8.5,
      status: 'above'
    }
  ]);

  const [topPerformers, setTopPerformers] = useState([
    {
      id: 1,
      rank: 1,
      name: 'Restaurant #1',
      revenue: 1234567,
      rating: 4.9,
      repeatRate: 78,
      location: 'Same Category'
    },
    {
      id: 2,
      rank: 2,
      name: 'Restaurant #2',
      revenue: 987654,
      rating: 4.8,
      repeatRate: 72,
      location: 'Same Category'
    },
    {
      id: 3,
      rank: 3,
      name: 'Restaurant #3',
      revenue: 876543,
      rating: 4.8,
      repeatRate: 68,
      location: 'Same Category'
    }
  ]);

  const [bestPractices, setBestPractices] = useState([
    {
      id: 1,
      title: 'Optimize Peak Hours',
      description: 'Top performers run special promotions during 12-2 PM and 7-9 PM to maximize foot traffic.',
      impact: 'High',
      category: 'Operations',
      icon: Clock
    },
    {
      id: 2,
      title: 'Loyalty Program Engagement',
      description: 'Successful merchants actively promote their loyalty programs, achieving 70%+ enrollment rates.',
      impact: 'High',
      category: 'Marketing',
      icon: Gift
    },
    {
      id: 3,
      title: 'Quick Response to Reviews',
      description: 'Responding to reviews within 24 hours improves ratings by an average of 0.3 stars.',
      impact: 'Medium',
      category: 'Customer Service',
      icon: MessageSquare
    },
    {
      id: 4,
      title: 'High-Quality Photos',
      description: 'Merchants with 10+ professional photos see 40% more profile views and engagement.',
      impact: 'High',
      category: 'Content',
      icon: Camera
    },
    {
      id: 5,
      title: 'Limited-Time Offers',
      description: 'Creating urgency with time-limited deals increases redemption rates by 25%.',
      impact: 'Medium',
      category: 'Marketing',
      icon: Timer
    },
    {
      id: 6,
      title: 'Consistent Menu Updates',
      description: 'Updating your catalog monthly keeps customers engaged and interested.',
      impact: 'Low',
      category: 'Content',
      icon: RefreshCw
    }
  ]);

  const [performanceTrends, setPerformanceTrends] = useState([
    { week: 'Week 1', yourRevenue: 98765, avgRevenue: 85432, yourRating: 4.6, avgRating: 4.4 },
    { week: 'Week 2', yourRevenue: 105432, avgRevenue: 89876, yourRating: 4.65, avgRating: 4.45 },
    { week: 'Week 3', yourRevenue: 112345, avgRevenue: 95432, yourRating: 4.68, avgRating: 4.48 },
    { week: 'Week 4', yourRevenue: 120567, avgRevenue: 102345, yourRating: 4.7, avgRating: 4.5 }
  ]);

  const formatValue = (value, format) => {
    if (format === 'currency') {
      return `₹${(value / 1000).toFixed(1)}K`;
    } else if (format === 'percentage') {
      return `${value}%`;
    } else if (format === 'rating') {
      return value.toFixed(1);
    }
    return value;
  };

  const maxTrendRevenue = Math.max(...performanceTrends.map(t => Math.max(t.yourRevenue, t.avgRevenue)));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Performance Benchmarks</h1>
              <p className="text-gray-600 mt-1">Compare your performance with industry standards</p>
            </div>
            <div className="flex gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="restaurant">Restaurant</option>
                <option value="cafe">Cafe</option>
                <option value="retail">Retail</option>
                <option value="salon">Salon & Spa</option>
              </select>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Download className="w-5 h-5" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Performance Overview */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 mb-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Your Performance Summary</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-indigo-100 mb-2">Overall Ranking</p>
              <p className="text-4xl font-bold mb-1">Top 15%</p>
              <p className="text-sm text-indigo-100">In your category</p>
            </div>
            <div>
              <p className="text-indigo-100 mb-2">Above Average In</p>
              <p className="text-4xl font-bold mb-1">5/6</p>
              <p className="text-sm text-indigo-100">Key metrics</p>
            </div>
            <div>
              <p className="text-indigo-100 mb-2">Improvement Potential</p>
              <p className="text-4xl font-bold mb-1">+23%</p>
              <p className="text-sm text-indigo-100">Revenue opportunity</p>
            </div>
          </div>
        </div>

        {/* Benchmark Comparison */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Compare with Category Average</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benchmarkMetrics.map((metric) => (
              <div key={metric.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{metric.metric}</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatValue(metric.yourValue, metric.format)}
                    </p>
                  </div>
                  <div className={`p-2 rounded-lg ${
                    metric.status === 'above' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {metric.status === 'above' ? (
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Category Avg:</span>
                    <span className="font-semibold text-gray-700">
                      {formatValue(metric.avgValue, metric.format)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Top Performer:</span>
                    <span className="font-semibold text-gray-700">
                      {formatValue(metric.topValue, metric.format)}
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    {metric.status === 'above' ? (
                      <>
                        <ArrowUpRight className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-600">
                          +{metric.difference}% above average
                        </span>
                      </>
                    ) : (
                      <>
                        <ArrowDownRight className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-semibold text-red-600">
                          -{metric.difference}% below average
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        metric.status === 'above' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.min((metric.yourValue / metric.topValue) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-6 h-6 text-yellow-600" />
            <h2 className="text-xl font-bold text-gray-900">Top Performers (Anonymous)</h2>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <div className="space-y-4">
            {topPerformers.map((performer) => (
              <div key={performer.id} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                    performer.rank === 1 ? 'bg-yellow-500' :
                    performer.rank === 2 ? 'bg-gray-400' :
                    'bg-orange-600'
                  }`}>
                    {performer.rank === 1 ? <Crown className="w-6 h-6" /> : `#${performer.rank}`}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{performer.name}</h3>
                    <p className="text-sm text-gray-600">{performer.location}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Revenue</p>
                    <p className="text-lg font-bold text-green-600">₹{(performer.revenue / 1000).toFixed(0)}K</p>
                    <div className="bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${(performer.revenue / topPerformers[0].revenue) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Rating</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <p className="text-lg font-bold text-gray-900">{performer.rating}</p>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: `${(performer.rating / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Repeat Rate</p>
                    <p className="text-lg font-bold text-blue-600">{performer.repeatRate}%</p>
                    <div className="bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${performer.repeatRate}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Performance Trends: You vs Category Average</h2>
          <div className="space-y-4">
            {performanceTrends.map((trend, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{trend.week}</span>
                  <div className="flex gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                      <span className="text-indigo-600 font-semibold">You: ₹{(trend.yourRevenue / 1000).toFixed(1)}K</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600">Avg: ₹{(trend.avgRevenue / 1000).toFixed(1)}K</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-full h-4 relative">
                  <div
                    className="bg-gray-400 h-4 rounded-full absolute"
                    style={{ width: `${(trend.avgRevenue / maxTrendRevenue) * 100}%` }}
                  />
                  <div
                    className="bg-indigo-500 h-4 rounded-full absolute"
                    style={{ width: `${(trend.yourRevenue / maxTrendRevenue) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="w-6 h-6 text-yellow-600" />
            <h2 className="text-xl font-bold text-gray-900">Best Practices from Top Performers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bestPractices.map((practice) => {
              const IconComponent = practice.icon;
              return (
                <div key={practice.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-gray-900">{practice.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          practice.impact === 'High' ? 'bg-red-100 text-red-700' :
                          practice.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {practice.impact} Impact
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{practice.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{practice.category}</span>
                        <button className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                          Learn More
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Improvement Suggestions */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Suggested Focus Areas</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>Increase AOV:</strong> You're 23% above average, but there's still 50% upside to match top performers.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>Boost Repeat Rate:</strong> Implement a loyalty program to move from 52% to the top performer level of 78%.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>Improve Rating:</strong> Focus on customer service to reach 4.9 stars like the top merchant.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Additional icon imports needed
import { Clock, Gift, MessageSquare, Camera, Timer, RefreshCw } from 'lucide-react';
