import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, Image, Video, Star, Flag, Eye, CheckCircle, XCircle,
  AlertTriangle, TrendingUp, ArrowUpRight, ArrowDownRight, Users,
  ThumbsUp, ThumbsDown, MessageSquare, Camera, Filter, Download,
  RefreshCw, Plus, Edit, Trash2, Ban, Shield, Award, Target,
  Clock, Calendar, MapPin, Tag, Package, Store, Activity
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminContentDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7days');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('pending');

  // Content Metrics
  const [contentMetrics] = useState({
    pendingReview: { count: 234, urgent: 45, overdue: 12, growth: -15.2 },
    reviewsModerated: { total: 12567, today: 156, approved: 89, rejected: 67 },
    ugcSubmissions: { total: 8945, thisWeek: 456, approved: 78.5 },
    flaggedContent: { count: 89, highPriority: 23, resolved: 12 },
    avgModerationTime: { minutes: 8, target: 10, performance: 125 },
    contentQuality: { score: 8.5, target: 8.0, improvement: 5.2 }
  });

  // Pending Content for Review
  const [pendingContent] = useState([
    {
      id: 'CNT-2024-00456',
      type: 'review',
      user: 'Rajesh Kumar',
      merchant: 'Pizza Paradise',
      rating: 5,
      content: 'Amazing food! Best pizza in Mumbai. Delivery was quick and the quality was excellent.',
      media: ['image1.jpg', 'image2.jpg'],
      submittedAt: '2 hours ago',
      priority: 'normal',
      flagReason: null
    },
    {
      id: 'CNT-2024-00455',
      type: 'ugc',
      user: 'Priya Sharma',
      merchant: 'Fashion Studio',
      rating: null,
      content: 'Check out my new outfit from Fashion Studio! #OOTD #Fashion',
      media: ['video1.mp4'],
      submittedAt: '4 hours ago',
      priority: 'normal',
      flagReason: null
    },
    {
      id: 'CNT-2024-00454',
      type: 'review',
      user: 'Amit Patel',
      merchant: 'Glow Spa',
      rating: 1,
      content: 'Terrible service. Staff was rude and unprofessional. Would not recommend.',
      media: [],
      submittedAt: '6 hours ago',
      priority: 'high',
      flagReason: 'negative'
    },
    {
      id: 'CNT-2024-00453',
      type: 'review',
      user: 'Anonymous',
      merchant: 'Fresh Market',
      rating: 5,
      content: 'Great deals! Free promo codes: SAVE50, DISCOUNT100. Click here for more: suspicious-link.com',
      media: [],
      submittedAt: '1 day ago',
      priority: 'urgent',
      flagReason: 'spam'
    }
  ]);

  // Flagged Content
  const [flaggedContent] = useState([
    {
      id: 'FLG-2024-00123',
      contentId: 'CNT-2024-00450',
      type: 'review',
      user: 'John Doe',
      merchant: 'Style Boutique',
      reason: 'inappropriate_language',
      flaggedBy: 'System + 3 users',
      content: 'This store is [REDACTED]. Worst experience ever!',
      severity: 'high',
      status: 'under_review',
      flaggedAt: '3 hours ago'
    },
    {
      id: 'FLG-2024-00122',
      contentId: 'CNT-2024-00449',
      type: 'ugc',
      user: 'Jane Smith',
      merchant: 'Cafe Delight',
      reason: 'fake_content',
      flaggedBy: 'Moderator',
      content: 'Stock photo detected - not authentic user content',
      severity: 'medium',
      status: 'pending',
      flaggedAt: '5 hours ago'
    },
    {
      id: 'FLG-2024-00121',
      contentId: 'CNT-2024-00448',
      type: 'review',
      user: 'Mike Johnson',
      merchant: 'Electronics Hub',
      reason: 'spam',
      flaggedBy: 'System',
      content: 'Promotional spam with external links',
      severity: 'critical',
      status: 'pending',
      flaggedAt: '1 day ago'
    }
  ]);

  // Top Contributors
  const [topContributors] = useState([
    {
      id: 1,
      name: 'Arjun Kapoor',
      avatar: 'AK',
      reviews: 145,
      ugc: 67,
      avgRating: 4.5,
      approvalRate: 95.2,
      badges: ['Top Reviewer', 'Verified User']
    },
    {
      id: 2,
      name: 'Divya Shah',
      avatar: 'DS',
      reviews: 123,
      ugc: 89,
      avgRating: 4.7,
      approvalRate: 92.8,
      badges: ['UGC Creator', 'Influencer']
    },
    {
      id: 3,
      name: 'Karan Malhotra',
      avatar: 'KM',
      reviews: 98,
      ugc: 45,
      avgRating: 4.3,
      approvalRate: 88.5,
      badges: ['Verified User']
    },
    {
      id: 4,
      name: 'Neha Verma',
      avatar: 'NV',
      reviews: 87,
      ugc: 112,
      avgRating: 4.6,
      approvalRate: 94.1,
      badges: ['Top Reviewer', 'UGC Creator']
    }
  ]);

  // Content Type Stats
  const [contentTypeStats] = useState([
    {
      type: 'Reviews',
      icon: Star,
      total: 12567,
      pending: 145,
      approved: 11234,
      rejected: 1188,
      approvalRate: 89.4,
      color: 'yellow'
    },
    {
      type: 'UGC Photos',
      icon: Camera,
      total: 6789,
      pending: 67,
      approved: 6234,
      rejected: 488,
      approvalRate: 91.8,
      color: 'pink'
    },
    {
      type: 'UGC Videos',
      icon: Video,
      total: 2156,
      pending: 22,
      approved: 1987,
      rejected: 147,
      approvalRate: 92.1,
      color: 'purple'
    }
  ]);

  // Recent Moderation Actions
  const [recentActions] = useState([
    {
      id: 1,
      action: 'approved',
      contentType: 'review',
      contentId: 'CNT-2024-00452',
      user: 'Sneha Patel',
      moderator: 'Admin Team',
      timestamp: '5 mins ago'
    },
    {
      id: 2,
      action: 'rejected',
      contentType: 'ugc',
      contentId: 'CNT-2024-00451',
      user: 'Vikram Roy',
      moderator: 'Admin Team',
      reason: 'Low quality content',
      timestamp: '15 mins ago'
    },
    {
      id: 3,
      action: 'flagged',
      contentType: 'review',
      contentId: 'CNT-2024-00450',
      user: 'Rahul Gupta',
      moderator: 'System',
      reason: 'Inappropriate language',
      timestamp: '30 mins ago'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'under_review': return 'bg-blue-100 text-blue-700';
      case 'flagged': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'text-red-600';
      case 'high': return 'text-orange-600';
      case 'normal': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getActionIcon = (action) => {
    switch (action) {
      case 'approved': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'rejected': return <XCircle className="w-4 h-4 text-red-600" />;
      case 'flagged': return <Flag className="w-4 h-4 text-orange-600" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="lg:ml-64">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-8 h-8" />
                  <h1 className="text-3xl font-bold">Content Admin Dashboard</h1>
                </div>
                <p className="text-indigo-100 text-lg">UGC, reviews & content moderation</p>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/admin/ugc-management"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
                >
                  <Eye className="w-5 h-5" />
                  View All Content
                </Link>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                  <RefreshCw className="w-5 h-5" />
                  Refresh
                </button>
              </div>
            </div>

            {/* Time Filter */}
            <div className="flex gap-2 mt-6">
              {['today', '7days', '30days', 'all'].map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => setSelectedTimeframe(timeframe)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTimeframe === timeframe
                      ? 'bg-white text-indigo-600'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {timeframe === 'today' && 'Today'}
                  {timeframe === '7days' && '7 Days'}
                  {timeframe === '30days' && '30 Days'}
                  {timeframe === 'all' && 'All Time'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Pending Review */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-red-600 font-semibold">urgent</p>
                  <p className="text-sm font-bold text-red-600">{contentMetrics.pendingReview.urgent}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Pending Review</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {contentMetrics.pendingReview.count}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex items-center text-sm text-green-600 font-semibold">
                  <ArrowDownRight className="w-4 h-4" />
                  {Math.abs(contentMetrics.pendingReview.growth)}%
                </span>
                <span className="text-gray-600 text-sm">vs last period</span>
              </div>
              <div className="mt-2 text-sm text-orange-600 font-medium">
                {contentMetrics.pendingReview.overdue} overdue
              </div>
            </div>

            {/* Reviews Moderated */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">today</p>
                  <p className="text-sm font-semibold text-green-600">{contentMetrics.reviewsModerated.today}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Reviews Moderated</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {(contentMetrics.reviewsModerated.total / 1000).toFixed(1)}K
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <span className="text-green-600">{contentMetrics.reviewsModerated.approved} approved</span>
                <span className="text-red-600">{contentMetrics.reviewsModerated.rejected} rejected</span>
              </div>
            </div>

            {/* UGC Submissions */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-3 rounded-lg">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">this week</p>
                  <p className="text-sm font-semibold text-pink-600">{contentMetrics.ugcSubmissions.thisWeek}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">UGC Submissions</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {(contentMetrics.ugcSubmissions.total / 1000).toFixed(1)}K
              </p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-600 h-2 rounded-full"
                    style={{ width: `${contentMetrics.ugcSubmissions.approved}%` }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  {contentMetrics.ugcSubmissions.approved}% approval rate
                </p>
              </div>
            </div>

            {/* Flagged Content */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-red-500 to-orange-500 p-3 rounded-lg">
                  <Flag className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">resolved</p>
                  <p className="text-sm font-semibold text-green-600">{contentMetrics.flaggedContent.resolved}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Flagged Content</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {contentMetrics.flaggedContent.count}
              </p>
              <div className="mt-4 text-sm text-red-600 font-medium">
                {contentMetrics.flaggedContent.highPriority} high priority
              </div>
            </div>

            {/* Avg Moderation Time */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">target</p>
                  <p className="text-sm font-semibold text-blue-600">{contentMetrics.avgModerationTime.target}m</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Avg Moderation Time</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {contentMetrics.avgModerationTime.minutes}m
              </p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${Math.min(contentMetrics.avgModerationTime.performance, 100)}%` }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  {contentMetrics.avgModerationTime.performance}% of target met
                </p>
              </div>
            </div>

            {/* Content Quality */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Content Quality Score</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {contentMetrics.contentQuality.score} / 10
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex items-center text-sm text-green-600 font-semibold">
                  <ArrowUpRight className="w-4 h-4" />
                  {contentMetrics.contentQuality.improvement}%
                </span>
                <span className="text-gray-600 text-sm">improvement</span>
              </div>
            </div>
          </div>

          {/* Pending Content Review */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Pending Content Review</h2>
                <div className="flex gap-3">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All Types</option>
                    <option value="review">Reviews</option>
                    <option value="ugc">UGC</option>
                  </select>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {pendingContent.map((content) => (
                <div key={content.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      content.type === 'review' ? 'bg-yellow-100' : 'bg-pink-100'
                    }`}>
                      {content.type === 'review' ? (
                        <Star className={`w-6 h-6 ${content.type === 'review' ? 'text-yellow-600' : 'text-pink-600'}`} />
                      ) : (
                        <Camera className="w-6 h-6 text-pink-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-medium text-gray-900">{content.id}</p>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-semibold uppercase">
                          {content.type}
                        </span>
                        {content.priority !== 'normal' && (
                          <span className={`px-2 py-1 rounded text-xs font-semibold uppercase ${getPriorityColor(content.priority)}`}>
                            {content.priority}
                          </span>
                        )}
                        {content.flagReason && (
                          <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">
                            Flagged: {content.flagReason}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {content.user}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Store className="w-4 h-4" />
                          {content.merchant}
                        </span>
                        {content.rating && (
                          <>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < content.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {content.submittedAt}
                        </span>
                      </div>
                      <p className="text-sm text-gray-900 mb-2">{content.content}</p>
                      {content.media.length > 0 && (
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Image className="w-3 h-3" />
                          {content.media.length} media file(s) attached
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium">
                        <CheckCircle className="w-4 h-4 inline mr-1" />
                        Approve
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium">
                        <XCircle className="w-4 h-4 inline mr-1" />
                        Reject
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                        <Eye className="w-4 h-4 inline mr-1" />
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flagged Content */}
          {flaggedContent.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Flag className="w-6 h-6 text-red-600" />
                    <h2 className="text-xl font-bold text-gray-900">Flagged Content</h2>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                      {flaggedContent.filter(f => f.severity === 'critical' || f.severity === 'high').length} urgent
                    </span>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {flaggedContent.map((flag) => (
                  <div key={flag.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="font-medium text-gray-900">{flag.contentId}</p>
                          <span className={`px-2 py-1 rounded text-xs font-semibold uppercase ${getSeverityColor(flag.severity)}`}>
                            {flag.severity}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(flag.status)}`}>
                            {flag.status.replace('_', ' ')}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <span>User: {flag.user}</span>
                          <span>•</span>
                          <span>Merchant: {flag.merchant}</span>
                          <span>•</span>
                          <span>Flagged by: {flag.flaggedBy}</span>
                          <span>•</span>
                          <span>{flag.flaggedAt}</span>
                        </div>
                        <p className="text-sm text-orange-700 font-medium mb-1">Reason: {flag.reason.replace('_', ' ')}</p>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{flag.content}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
                          Review
                        </button>
                        {flag.severity === 'critical' && (
                          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium">
                            <Ban className="w-4 h-4 inline mr-1" />
                            Ban User
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Top Contributors */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Top Contributors</h2>
              </div>
              <div className="p-6 space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={contributor.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      {contributor.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{contributor.name}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {contributor.badges.map((badge, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                            {badge}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 mt-2">
                        <span>{contributor.reviews} reviews</span>
                        <span>{contributor.ugc} UGC</span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          {contributor.avgRating}
                        </span>
                        <span className="text-green-600 font-semibold">{contributor.approvalRate}% approved</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Type Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Content Type Statistics</h2>
              </div>
              <div className="p-6 space-y-4">
                {contentTypeStats.map((stat, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
                          <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{stat.type}</p>
                          <p className="text-sm text-gray-600">{stat.total.toLocaleString()} total</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">{stat.approvalRate}%</p>
                        <p className="text-xs text-gray-600">approval rate</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 text-xs">Pending</p>
                        <p className="font-semibold text-yellow-600">{stat.pending}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs">Approved</p>
                        <p className="font-semibold text-green-600">{stat.approved.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs">Rejected</p>
                        <p className="font-semibold text-red-600">{stat.rejected.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Moderation Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Recent Moderation Actions</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {recentActions.map((action) => (
                <div key={action.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {getActionIcon(action.action)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{action.moderator}</span>{' '}
                        {action.action} {action.contentType} from{' '}
                        <span className="font-semibold">{action.user}</span>
                      </p>
                      <p className="text-sm text-gray-600 mt-1">{action.contentId}</p>
                      {action.reason && (
                        <p className="text-xs text-orange-600 mt-1">Reason: {action.reason}</p>
                      )}
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {action.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
