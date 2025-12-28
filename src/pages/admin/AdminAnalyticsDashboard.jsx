import { useState } from 'react';
import AdminNav from '../../components/admin/AdminNav';
import {
  BarChart3, TrendingUp, Download, Calendar, Users, Store, CreditCard,
  ShoppingBag, Clock, Target, ArrowUp, ArrowDown, DollarSign, Activity,
  Percent, Eye, MousePointer, RefreshCw, FileText, PieChart, LineChart
} from 'lucide-react';

export default function AdminAnalyticsDashboard() {
  const [timeFilter, setTimeFilter] = useState('7d');

  const [analyticsMetrics] = useState({
    totalReports: { count: 156, thisWeek: 12, lastWeek: 8, growth: 50.0 },
    dataExports: { count: 89, thisWeek: 7, pending: 3 },
    dashboards: { total: 24, active: 18, custom: 6 },
    insights: { generated: 234, actionable: 67, implemented: 23 },
    dataAccuracy: { score: 98.5, errors: 12, fixed: 10 }
  });

  const [keyMetrics] = useState([
    {
      category: 'User Analytics',
      metrics: [
        { name: 'Total Users', value: '156.7K', change: 15.7, trend: 'up', icon: Users },
        { name: 'Active Users (7d)', value: '89.2K', change: 12.3, trend: 'up', icon: Activity },
        { name: 'New Signups', value: '12.4K', change: 8.5, trend: 'up', icon: TrendingUp },
        { name: 'User Retention', value: '73.5%', change: 5.2, trend: 'up', icon: RefreshCw }
      ]
    },
    {
      category: 'Transaction Analytics',
      metrics: [
        { name: 'Total GMV', value: '₹45.6M', change: 23.5, trend: 'up', icon: DollarSign },
        { name: 'Transactions', value: '234.5K', change: 18.2, trend: 'up', icon: CreditCard },
        { name: 'Avg Order Value', value: '₹1,245', change: -2.3, trend: 'down', icon: ShoppingBag },
        { name: 'Conversion Rate', value: '4.8%', change: 0.5, trend: 'up', icon: Target }
      ]
    },
    {
      category: 'Merchant Analytics',
      metrics: [
        { name: 'Active Merchants', value: '8,945', change: 12.3, trend: 'up', icon: Store },
        { name: 'Avg Revenue/Merchant', value: '₹51K', change: 15.7, trend: 'up', icon: TrendingUp },
        { name: 'Merchant Churn', value: '2.3%', change: -0.8, trend: 'up', icon: Percent },
        { name: 'Merchant NPS', value: '72', change: 8.0, trend: 'up', icon: Target }
      ]
    },
    {
      category: 'Engagement Analytics',
      metrics: [
        { name: 'Page Views', value: '2.3M', change: 25.3, trend: 'up', icon: Eye },
        { name: 'Avg Session Duration', value: '8m 32s', change: 12.5, trend: 'up', icon: Clock },
        { name: 'Click-through Rate', value: '6.7%', change: 3.2, trend: 'up', icon: MousePointer },
        { name: 'Bounce Rate', value: '32.5%', change: -4.5, trend: 'up', icon: RefreshCw }
      ]
    }
  ]);

  const [recentReports] = useState([
    {
      name: 'Weekly GMV Report',
      type: 'Revenue',
      frequency: 'Weekly',
      lastGenerated: '2 hours ago',
      status: 'completed',
      size: '2.3 MB',
      subscribers: 45
    },
    {
      name: 'User Cohort Analysis',
      type: 'User Behavior',
      frequency: 'Daily',
      lastGenerated: '5 hours ago',
      status: 'completed',
      size: '1.8 MB',
      subscribers: 32
    },
    {
      name: 'Merchant Performance',
      type: 'Merchant',
      frequency: 'Monthly',
      lastGenerated: '1 day ago',
      status: 'completed',
      size: '4.5 MB',
      subscribers: 28
    },
    {
      name: 'Campaign ROI Analysis',
      type: 'Marketing',
      frequency: 'On-demand',
      lastGenerated: '3 hours ago',
      status: 'processing',
      size: '-',
      subscribers: 18
    },
    {
      name: 'Coin Usage Report',
      type: 'Loyalty',
      frequency: 'Weekly',
      lastGenerated: '12 hours ago',
      status: 'completed',
      size: '3.2 MB',
      subscribers: 22
    },
    {
      name: 'Regional Performance',
      type: 'Regional',
      frequency: 'Daily',
      lastGenerated: '4 hours ago',
      status: 'completed',
      size: '2.7 MB',
      subscribers: 38
    }
  ]);

  const [customDashboards] = useState([
    {
      name: 'Executive Dashboard',
      owner: 'Rajesh Kumar',
      widgets: 12,
      lastViewed: '1 hour ago',
      views: 456,
      shared: true
    },
    {
      name: 'Marketing Performance',
      owner: 'Priya Sharma',
      widgets: 8,
      lastViewed: '2 hours ago',
      views: 234,
      shared: true
    },
    {
      name: 'Finance Overview',
      owner: 'Amit Patel',
      widgets: 10,
      lastViewed: '3 hours ago',
      views: 189,
      shared: false
    },
    {
      name: 'Operations Tracking',
      owner: 'Sneha Reddy',
      widgets: 15,
      lastViewed: '5 hours ago',
      views: 167,
      shared: true
    },
    {
      name: 'Regional Mumbai',
      owner: 'Vikram Singh',
      widgets: 9,
      lastViewed: '6 hours ago',
      views: 145,
      shared: false
    },
    {
      name: 'Customer Support Metrics',
      owner: 'Neha Gupta',
      widgets: 7,
      lastViewed: '1 day ago',
      views: 98,
      shared: true
    }
  ]);

  const [dataExports] = useState([
    {
      exportName: 'User Transaction History',
      requestedBy: 'Finance Team',
      dateRange: 'Jan 1 - Jan 15, 2024',
      format: 'CSV',
      status: 'completed',
      size: '45.2 MB',
      downloadCount: 8
    },
    {
      exportName: 'Merchant Settlement Data',
      requestedBy: 'Amit Patel',
      dateRange: 'Dec 2023',
      format: 'Excel',
      status: 'completed',
      size: '23.7 MB',
      downloadCount: 5
    },
    {
      exportName: 'Campaign Analytics',
      requestedBy: 'Marketing Team',
      dateRange: 'Last 30 days',
      format: 'PDF',
      status: 'processing',
      size: '-',
      downloadCount: 0
    },
    {
      exportName: 'Coin Transaction Ledger',
      requestedBy: 'Operations Team',
      dateRange: 'Q4 2023',
      format: 'CSV',
      status: 'pending',
      size: '-',
      downloadCount: 0
    },
    {
      exportName: 'UGC Content Report',
      requestedBy: 'Content Team',
      dateRange: 'Last 7 days',
      format: 'Excel',
      status: 'completed',
      size: '12.4 MB',
      downloadCount: 12
    }
  ]);

  const [insights] = useState([
    {
      title: 'Mumbai seeing 35% higher transaction volume on weekends',
      category: 'Regional',
      impact: 'high',
      confidence: 95,
      recommendation: 'Increase marketing budget for Mumbai on Fri-Sun',
      status: 'new'
    },
    {
      title: 'Users who upload bills have 2.8x higher retention',
      category: 'User Behavior',
      impact: 'high',
      confidence: 92,
      recommendation: 'Promote bill upload feature in onboarding flow',
      status: 'implemented'
    },
    {
      title: 'Fashion category conversion drops by 18% on mobile',
      category: 'E-commerce',
      impact: 'medium',
      confidence: 88,
      recommendation: 'Optimize mobile checkout flow for fashion',
      status: 'in_progress'
    },
    {
      title: 'Promo Coins drive 45% repeat purchase rate',
      category: 'Loyalty',
      impact: 'high',
      confidence: 94,
      recommendation: 'Increase promo coin allocation for first-time buyers',
      status: 'implemented'
    },
    {
      title: 'Average session time decreases after 6 PM',
      category: 'Engagement',
      impact: 'medium',
      confidence: 85,
      recommendation: 'Send push notifications for flash deals at 5:30 PM',
      status: 'new'
    },
    {
      title: 'Merchants with photos get 3.2x more orders',
      category: 'Merchant',
      impact: 'high',
      confidence: 97,
      recommendation: 'Make merchant photos mandatory during onboarding',
      status: 'under_review'
    }
  ]);

  const getStatusColor = (status) => {
    const colors = {
      completed: 'bg-green-100 text-green-700',
      processing: 'bg-yellow-100 text-yellow-700',
      pending: 'bg-orange-100 text-orange-700',
      failed: 'bg-red-100 text-red-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getImpactColor = (impact) => {
    const colors = {
      high: 'bg-red-100 text-red-700',
      medium: 'bg-yellow-100 text-yellow-700',
      low: 'bg-blue-100 text-blue-700'
    };
    return colors[impact] || 'bg-gray-100 text-gray-700';
  };

  const getInsightStatusColor = (status) => {
    const colors = {
      new: 'bg-blue-100 text-blue-700',
      implemented: 'bg-green-100 text-green-700',
      in_progress: 'bg-yellow-100 text-yellow-700',
      under_review: 'bg-purple-100 text-purple-700',
      rejected: 'bg-red-100 text-red-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Analytics Admin Dashboard</h1>
              <p className="text-purple-100">Reports, insights, and comprehensive analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <Download className="w-5 h-5" />
              Export Dashboard
            </button>
          </div>
        </div>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-5 h-5 text-purple-200" />
              <span className="text-xs text-purple-200">This Week: {analyticsMetrics.totalReports.thisWeek}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{analyticsMetrics.totalReports.count}</div>
            <div className="text-sm text-purple-200">Total Reports</div>
            <div className="flex items-center gap-1 mt-2 text-xs">
              <ArrowUp className="w-3 h-3" />
              <span>{analyticsMetrics.totalReports.growth}% vs last week</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Download className="w-5 h-5 text-purple-200" />
              <span className="text-xs text-purple-200">Pending: {analyticsMetrics.dataExports.pending}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{analyticsMetrics.dataExports.count}</div>
            <div className="text-sm text-purple-200">Data Exports</div>
            <div className="text-xs text-purple-200 mt-2">{analyticsMetrics.dataExports.thisWeek} this week</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <PieChart className="w-5 h-5 text-purple-200" />
              <span className="text-xs text-purple-200">Custom: {analyticsMetrics.dashboards.custom}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{analyticsMetrics.dashboards.active}/{analyticsMetrics.dashboards.total}</div>
            <div className="text-sm text-purple-200">Active Dashboards</div>
            <div className="text-xs text-purple-200 mt-2">Live monitoring</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-5 h-5 text-purple-200" />
              <span className="text-xs text-purple-200">Implemented: {analyticsMetrics.insights.implemented}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{analyticsMetrics.insights.actionable}</div>
            <div className="text-sm text-purple-200">Actionable Insights</div>
            <div className="text-xs text-purple-200 mt-2">From {analyticsMetrics.insights.generated} generated</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-5 h-5 text-purple-200" />
              <span className="text-xs text-purple-200">Errors: {analyticsMetrics.dataAccuracy.errors}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{analyticsMetrics.dataAccuracy.score}%</div>
            <div className="text-sm text-purple-200">Data Accuracy</div>
            <div className="text-xs text-purple-200 mt-2">{analyticsMetrics.dataAccuracy.fixed} errors fixed</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Key Metrics by Category */}
        <div className="space-y-6">
          {keyMetrics.map((category) => (
            <div key={category.category} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {category.metrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div key={metric.name} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <Icon className="w-5 h-5 text-indigo-600" />
                        <div className={`flex items-center gap-1 text-sm ${
                          metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {metric.trend === 'up' ? (
                            <ArrowUp className="w-4 h-4" />
                          ) : (
                            <ArrowDown className="w-4 h-4" />
                          )}
                          <span>{Math.abs(metric.change)}%</span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* AI-Generated Insights */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">AI-Generated Insights</h2>
            <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
              <RefreshCw className="w-4 h-4" />
              Refresh Insights
            </button>
          </div>
          <div className="space-y-3">
            {insights.map((insight, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(insight.impact)}`}>
                        {insight.impact.toUpperCase()} IMPACT
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getInsightStatusColor(insight.status)}`}>
                        {insight.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Category:</span> {insight.category} •
                      <span className="font-medium ml-2">Confidence:</span> {insight.confidence}%
                    </div>
                    <div className="flex items-center gap-2 text-sm text-indigo-600">
                      <Target className="w-4 h-4" />
                      <span className="font-medium">Recommendation:</span>
                      <span>{insight.recommendation}</span>
                    </div>
                  </div>
                  {insight.status === 'new' && (
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                        Implement
                      </button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm">
                        Review Later
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reports & Custom Dashboards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Reports */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Recent Reports</h2>
              <button className="flex items-center gap-2 px-3 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm">
                <FileText className="w-4 h-4" />
                Create New Report
              </button>
            </div>
            <div className="space-y-3">
              {recentReports.map((report, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{report.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                        <span>{report.type}</span>
                        <span>•</span>
                        <span>{report.frequency}</span>
                        <span>•</span>
                        <span>{report.subscribers} subscribers</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Last generated: {report.lastGenerated}</span>
                    {report.status === 'completed' && (
                      <div className="flex items-center gap-3">
                        <span>{report.size}</span>
                        <button className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700">
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Dashboards */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Custom Dashboards</h2>
              <button className="flex items-center gap-2 px-3 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm">
                <PieChart className="w-4 h-4" />
                Create Dashboard
              </button>
            </div>
            <div className="space-y-3">
              {customDashboards.map((dashboard, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{dashboard.name}</h3>
                        {dashboard.shared && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs">
                            Shared
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span>By {dashboard.owner}</span>
                        <span>•</span>
                        <span>{dashboard.widgets} widgets</span>
                        <span>•</span>
                        <span>{dashboard.views} views</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Last viewed: {dashboard.lastViewed}</span>
                    <button className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700">
                      <Eye className="w-4 h-4" />
                      Open
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Exports */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Data Exports</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Download className="w-4 h-4" />
              Request New Export
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Export Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Requested By</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Date Range</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Format</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Downloads</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {dataExports.map((exportItem, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{exportItem.exportName}</td>
                    <td className="py-3 px-4 text-gray-600">{exportItem.requestedBy}</td>
                    <td className="py-3 px-4 text-gray-600">{exportItem.dateRange}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {exportItem.format}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(exportItem.status)}`}>
                        {exportItem.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{exportItem.size}</td>
                    <td className="py-3 px-4 text-gray-600">{exportItem.downloadCount}</td>
                    <td className="py-3 px-4">
                      {exportItem.status === 'completed' ? (
                        <button className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700">
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      ) : (
                        <span className="text-gray-400 text-sm">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
