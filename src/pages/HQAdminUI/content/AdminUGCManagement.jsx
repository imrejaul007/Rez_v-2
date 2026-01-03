import { useState } from 'react';
import {
  Image, Video, MessageSquare, BookOpen, Eye, ThumbsUp, Share2, TrendingUp,
  Award, DollarSign, CheckCircle, XCircle, AlertTriangle, Flag, Star,
  Filter, Search, Calendar, Users, BarChart3, Hash, Download, Upload,
  Play, Heart, ShoppingCart, Target, Zap, Clock, Edit, Trash2, Copy,
  Shield, FileCheck, User, MapPin, Tag, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminUGCManagement() {
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedContent, setSelectedContent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterQuality, setFilterQuality] = useState('all');
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const [ugcStats] = useState({
    totalSubmissions: 45680,
    pending: 342,
    approved: 38920,
    rejected: 6418,
    avgQualityScore: 8.2,
    totalReach: 12450000,
    totalEngagement: 3456000,
    conversionRate: 4.8,
    revenueGenerated: 2340000,
    activeCreators: 8950,
    featuredContent: 156
  });

  const [ugcContent] = useState([
    {
      id: 1,
      type: 'photo',
      creator: {
        name: 'Sarah Johnson',
        username: '@sarahj_style',
        avatar: 'SJ',
        reputation: 92,
        totalContent: 45,
        followers: 12500
      },
      content: {
        title: 'Unboxing my latest fashion haul!',
        description: 'Absolutely loving these new arrivals from Fashion Paradise! The quality is amazing and the cashback made it such a great deal.',
        url: 'https://example.com/ugc/photo-001.jpg',
        thumbnail: 'https://example.com/ugc/photo-001-thumb.jpg',
        tags: ['fashion', 'unboxing', 'haul', 'cashback'],
        hashtags: ['#ReZCashback', '#FashionFinds', '#SaveMore']
      },
      merchant: 'Fashion Paradise',
      category: 'Fashion & Apparel',
      submittedDate: '2025-12-27 10:30:00',
      status: 'pending',
      qualityScore: 8.5,
      metrics: {
        views: 0,
        likes: 0,
        shares: 0,
        comments: 0,
        conversions: 0,
        revenue: 0
      },
      rights: {
        status: 'granted',
        licenseType: 'perpetual',
        commercialUse: true
      },
      moderation: {
        aiFlags: [],
        manualReview: true
      }
    },
    {
      id: 2,
      type: 'video',
      creator: {
        name: 'Mike Chen',
        username: '@mikecooks',
        avatar: 'MC',
        reputation: 88,
        totalContent: 78,
        followers: 34200
      },
      content: {
        title: 'Testing the Air Fryer from ElectroMart',
        description: 'Full review and cooking demo of the SmartCook Air Fryer. Got amazing cashback through ReZ!',
        url: 'https://example.com/ugc/video-002.mp4',
        thumbnail: 'https://example.com/ugc/video-002-thumb.jpg',
        duration: '05:23',
        tags: ['electronics', 'review', 'cooking', 'airfryer'],
        hashtags: ['#ReZDeals', '#ProductReview', '#CookingGadgets']
      },
      merchant: 'ElectroMart',
      category: 'Electronics',
      submittedDate: '2025-12-27 09:15:00',
      status: 'pending',
      qualityScore: 9.2,
      metrics: {
        views: 0,
        likes: 0,
        shares: 0,
        comments: 0,
        conversions: 0,
        revenue: 0
      },
      rights: {
        status: 'granted',
        licenseType: 'perpetual',
        commercialUse: true
      },
      moderation: {
        aiFlags: [],
        manualReview: true
      }
    },
    {
      id: 3,
      type: 'review',
      creator: {
        name: 'Priya Sharma',
        username: '@priya_reviews',
        avatar: 'PS',
        reputation: 95,
        totalContent: 156,
        followers: 8900
      },
      content: {
        title: 'Best dining experience at The Coffee House!',
        description: 'Amazing ambiance, great food, and the cashback made it even better. Highly recommended for weekend brunch!',
        rating: 5,
        pros: ['Great ambiance', 'Delicious food', 'Excellent service', 'Good cashback'],
        cons: ['Slightly expensive'],
        tags: ['restaurant', 'brunch', 'coffee', 'dining'],
        hashtags: ['#ReZFoodie', '#CoffeeLovers', '#BrunchGoals']
      },
      merchant: 'The Coffee House',
      category: 'Food & Beverage',
      submittedDate: '2025-12-26 18:45:00',
      status: 'approved',
      qualityScore: 9.5,
      metrics: {
        views: 12450,
        likes: 2340,
        shares: 456,
        comments: 89,
        conversions: 67,
        revenue: 45600
      },
      rights: {
        status: 'granted',
        licenseType: 'perpetual',
        commercialUse: true
      },
      moderation: {
        aiFlags: [],
        manualReview: false
      },
      featured: true,
      revenueShare: 450
    },
    {
      id: 4,
      type: 'story',
      creator: {
        name: 'Alex Kumar',
        username: '@alex_adventures',
        avatar: 'AK',
        reputation: 78,
        totalContent: 23,
        followers: 5600
      },
      content: {
        title: 'My ReZ Journey: From Skeptic to Super Saver',
        description: 'I was skeptical about cashback apps, but ReZ changed my mind completely. In just 3 months, I saved over ₹15,000 on purchases I was already making. Here\'s my story...',
        wordCount: 1250,
        tags: ['testimonial', 'savings', 'journey', 'cashback'],
        hashtags: ['#ReZStory', '#SavingsJourney', '#SmartShopping']
      },
      merchant: null,
      category: 'General',
      submittedDate: '2025-12-26 14:20:00',
      status: 'approved',
      qualityScore: 8.8,
      metrics: {
        views: 8920,
        likes: 1890,
        shares: 234,
        comments: 156,
        conversions: 45,
        revenue: 34500
      },
      rights: {
        status: 'granted',
        licenseType: 'perpetual',
        commercialUse: true
      },
      moderation: {
        aiFlags: [],
        manualReview: false
      },
      featured: true,
      revenueShare: 340
    },
    {
      id: 5,
      type: 'photo',
      creator: {
        name: 'Raj Patel',
        username: '@raj_tech',
        avatar: 'RP',
        reputation: 65,
        totalContent: 12,
        followers: 2100
      },
      content: {
        title: 'My new gaming setup!',
        description: 'Check out my new gaming rig! Got everything from TechZone with amazing cashback.',
        url: 'https://example.com/ugc/photo-005.jpg',
        thumbnail: 'https://example.com/ugc/photo-005-thumb.jpg',
        tags: ['gaming', 'setup', 'tech', 'electronics'],
        hashtags: ['#GamingSetup', '#ReZTech', '#GamerLife']
      },
      merchant: 'TechZone',
      category: 'Electronics',
      submittedDate: '2025-12-27 08:00:00',
      status: 'rejected',
      qualityScore: 5.2,
      metrics: {
        views: 0,
        likes: 0,
        shares: 0,
        comments: 0,
        conversions: 0,
        revenue: 0
      },
      rights: {
        status: 'granted',
        licenseType: 'perpetual',
        commercialUse: true
      },
      moderation: {
        aiFlags: ['low_quality_image', 'poor_lighting'],
        manualReview: true,
        rejectionReason: 'Image quality does not meet minimum standards'
      }
    }
  ]);

  const [campaigns] = useState([
    {
      id: 1,
      name: 'Summer Fashion Showcase',
      hashtag: '#ReZSummerStyle',
      status: 'active',
      startDate: '2025-06-01',
      endDate: '2025-08-31',
      submissions: 2340,
      approved: 1890,
      totalReach: 5600000,
      totalEngagement: 890000,
      bounty: 50000,
      topCreators: ['@sarahj_style', '@fashion_guru', '@style_icon']
    },
    {
      id: 2,
      name: 'Tech Unboxing Challenge',
      hashtag: '#ReZUnboxing',
      status: 'active',
      startDate: '2025-07-01',
      endDate: '2025-12-31',
      submissions: 1560,
      approved: 1234,
      totalReach: 3400000,
      totalEngagement: 670000,
      bounty: 75000,
      topCreators: ['@mikecooks', '@tech_reviews', '@gadget_guy']
    }
  ]);

  const [topCreators] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      username: '@sarahj_style',
      avatar: 'SJ',
      reputation: 92,
      content: 45,
      totalReach: 890000,
      totalEngagement: 156000,
      conversions: 890,
      revenue: 234000,
      revenueShare: 11700,
      category: 'Fashion'
    },
    {
      id: 2,
      name: 'Mike Chen',
      username: '@mikecooks',
      avatar: 'MC',
      reputation: 88,
      content: 78,
      totalReach: 1200000,
      totalEngagement: 234000,
      conversions: 1234,
      revenue: 456000,
      revenueShare: 22800,
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      username: '@priya_reviews',
      avatar: 'PS',
      reputation: 95,
      content: 156,
      totalReach: 1560000,
      totalEngagement: 312000,
      conversions: 1560,
      revenue: 567000,
      revenueShare: 28350,
      category: 'Food & Beverage'
    }
  ]);

  const handleApprove = (contentId) => {
    console.log('Approving content:', contentId);
    // Implementation would update content status
  };

  const handleReject = (contentId) => {
    console.log('Rejecting content:', contentId);
    // Implementation would update content status
  };

  const handleFeature = (contentId) => {
    console.log('Featuring content:', contentId);
    // Implementation would feature content
  };

  const handleFlag = (contentId) => {
    console.log('Flagging content:', contentId);
    // Implementation would flag content for review
  };

  const filteredContent = ugcContent.filter(content => {
    const matchesTab = activeTab === 'all' || content.status === activeTab;
    const matchesSearch = content.content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.creator.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || content.type === filterType;
    const matchesQuality = filterQuality === 'all' ||
                          (filterQuality === 'high' && content.qualityScore >= 8) ||
                          (filterQuality === 'medium' && content.qualityScore >= 6 && content.qualityScore < 8) ||
                          (filterQuality === 'low' && content.qualityScore < 6);

    return matchesTab && matchesSearch && matchesType && matchesQuality;
  });

  const getTypeIcon = (type) => {
    switch(type) {
      case 'photo': return Image;
      case 'video': return Video;
      case 'review': return MessageSquare;
      case 'story': return BookOpen;
      default: return FileCheck;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'yellow';
      case 'approved': return 'green';
      case 'rejected': return 'red';
      default: return 'gray';
    }
  };

  const getQualityColor = (score) => {
    if (score >= 8) return 'green';
    if (score >= 6) return 'yellow';
    return 'red';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">UGC Management</h1>
              <p className="text-gray-600 mt-1">Manage user-generated content and creator community</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                Export Report
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Upload className="w-4 h-4" />
                Bulk Upload
              </button>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Submissions</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {ugcStats.totalSubmissions.toLocaleString()}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileCheck className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-yellow-600">
                <Clock className="w-4 h-4 mr-1" />
                {ugcStats.pending} pending review
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Quality Score</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {ugcStats.avgQualityScore.toFixed(1)}/10
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Star className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-1" />
                {ugcStats.approved.toLocaleString()} approved
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Reach</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {(ugcStats.totalReach / 1000000).toFixed(1)}M
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-purple-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                {(ugcStats.totalEngagement / 1000000).toFixed(1)}M engagement
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Revenue Generated</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ₹{(ugcStats.revenueGenerated / 100000).toFixed(1)}L
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-orange-600">
                <ShoppingCart className="w-4 h-4 mr-1" />
                {ugcStats.conversionRate}% conversion rate
              </span>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content or creators..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="photo">Photos</option>
              <option value="video">Videos</option>
              <option value="review">Reviews</option>
              <option value="story">Stories</option>
            </select>
            <select
              value={filterQuality}
              onChange={(e) => setFilterQuality(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">All Quality</option>
              <option value="high">High (8+)</option>
              <option value="medium">Medium (6-7.9)</option>
              <option value="low">Low (&lt;6)</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {[
                { id: 'pending', label: 'Pending Review', count: ugcStats.pending },
                { id: 'approved', label: 'Approved', count: ugcStats.approved },
                { id: 'rejected', label: 'Rejected', count: ugcStats.rejected },
                { id: 'featured', label: 'Featured', count: ugcStats.featuredContent },
                { id: 'all', label: 'All Content', count: ugcStats.totalSubmissions }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label} <span className="text-gray-400">({tab.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content List */}
          <div className="divide-y divide-gray-200">
            {filteredContent.length === 0 ? (
              <div className="p-12 text-center">
                <FileCheck className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No content found matching your filters</p>
              </div>
            ) : (
              filteredContent.map((content) => {
                const TypeIcon = getTypeIcon(content.type);
                const statusColor = getStatusColor(content.status);
                const qualityColor = getQualityColor(content.qualityScore);

                return (
                  <div key={content.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-4">
                      {/* Content Type Icon */}
                      <div className={`bg-${statusColor}-100 p-3 rounded-lg`}>
                        <TypeIcon className={`w-6 h-6 text-${statusColor}-600`} />
                      </div>

                      {/* Content Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {content.content.title}
                              </h3>
                              {content.featured && (
                                <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded">
                                  FEATURED
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              {content.content.description}
                            </p>
                          </div>
                        </div>

                        {/* Creator Info */}
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                              {content.creator.avatar}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{content.creator.name}</p>
                              <p className="text-xs text-gray-500">{content.creator.username}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Award className="w-4 h-4 text-yellow-500" />
                            {content.creator.reputation}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Users className="w-4 h-4" />
                            {content.creator.followers.toLocaleString()} followers
                          </div>
                        </div>

                        {/* Merchant and Category */}
                        {content.merchant && (
                          <div className="flex items-center gap-4 mb-3 text-sm">
                            <span className="flex items-center gap-1 text-gray-600">
                              <Tag className="w-4 h-4" />
                              {content.merchant}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-600">{content.category}</span>
                          </div>
                        )}

                        {/* Hashtags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {content.content.hashtags.map((hashtag, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded">
                              {hashtag}
                            </span>
                          ))}
                        </div>

                        {/* Metrics (for approved content) */}
                        {content.status === 'approved' && (
                          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-3 bg-gray-50 rounded-lg mb-3">
                            <div>
                              <p className="text-xs text-gray-500">Views</p>
                              <p className="text-sm font-semibold text-gray-900">{content.metrics.views.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Likes</p>
                              <p className="text-sm font-semibold text-gray-900">{content.metrics.likes.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Shares</p>
                              <p className="text-sm font-semibold text-gray-900">{content.metrics.shares.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Comments</p>
                              <p className="text-sm font-semibold text-gray-900">{content.metrics.comments.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Conversions</p>
                              <p className="text-sm font-semibold text-green-600">{content.metrics.conversions}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Revenue</p>
                              <p className="text-sm font-semibold text-green-600">₹{(content.metrics.revenue / 1000).toFixed(1)}K</p>
                            </div>
                          </div>
                        )}

                        {/* Quality Score and Status */}
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Quality Score:</span>
                            <div className={`flex items-center gap-1 px-2 py-1 bg-${qualityColor}-100 text-${qualityColor}-700 rounded`}>
                              <Star className="w-4 h-4" />
                              <span className="font-semibold">{content.qualityScore.toFixed(1)}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Rights:</span>
                            <span className={`px-2 py-1 ${
                              content.rights.status === 'granted'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-red-100 text-red-700'
                            } text-xs font-medium rounded`}>
                              {content.rights.status === 'granted' ? 'Granted' : 'Pending'}
                            </span>
                          </div>
                          {content.revenueShare && (
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">Creator Earnings:</span>
                              <span className="text-sm font-semibold text-green-600">₹{content.revenueShare}</span>
                            </div>
                          )}
                        </div>

                        {/* AI Flags */}
                        {content.moderation.aiFlags.length > 0 && (
                          <div className="mt-3 flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-yellow-900">AI Moderation Flags</p>
                              <p className="text-xs text-yellow-700 mt-1">
                                {content.moderation.aiFlags.join(', ')}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Rejection Reason */}
                        {content.status === 'rejected' && content.moderation.rejectionReason && (
                          <div className="mt-3 flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                            <XCircle className="w-4 h-4 text-red-600 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-red-900">Rejection Reason</p>
                              <p className="text-xs text-red-700 mt-1">
                                {content.moderation.rejectionReason}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2">
                        {content.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleApprove(content.id)}
                              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                            >
                              <CheckCircle className="w-4 h-4" />
                              Approve
                            </button>
                            <button
                              onClick={() => handleReject(content.id)}
                              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                            >
                              <XCircle className="w-4 h-4" />
                              Reject
                            </button>
                          </>
                        )}
                        {content.status === 'approved' && (
                          <>
                            {!content.featured && (
                              <button
                                onClick={() => handleFeature(content.id)}
                                className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium"
                              >
                                <Star className="w-4 h-4" />
                                Feature
                              </button>
                            )}
                            <button
                              onClick={() => handleFlag(content.id)}
                              className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
                            >
                              <Flag className="w-4 h-4" />
                              Flag
                            </button>
                          </>
                        )}
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Creators */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Top Creators</h2>
                <Award className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topCreators.map((creator, index) => (
                  <div key={creator.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                      {creator.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900">{creator.name}</p>
                      <p className="text-sm text-gray-600">{creator.username}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <FileCheck className="w-3 h-3" />
                          {creator.content} posts
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <Award className="w-3 h-3 text-yellow-500" />
                          {creator.reputation}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">₹{(creator.revenueShare / 1000).toFixed(1)}K</p>
                      <p className="text-xs text-gray-500">earned</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Campaigns */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Active UGC Campaigns</h2>
                <Hash className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                        <p className="text-sm text-indigo-600 font-medium">{campaign.hashtag}</p>
                      </div>
                      <span className={`px-2 py-1 ${
                        campaign.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      } text-xs font-medium rounded`}>
                        {campaign.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <p className="text-xs text-gray-500">Submissions</p>
                        <p className="text-sm font-semibold text-gray-900">{campaign.submissions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Approved</p>
                        <p className="text-sm font-semibold text-green-600">{campaign.approved.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Total Reach</p>
                        <p className="text-sm font-semibold text-gray-900">{(campaign.totalReach / 1000000).toFixed(1)}M</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Campaign Bounty</p>
                        <p className="text-sm font-semibold text-purple-600">₹{(campaign.bounty / 1000).toFixed(0)}K</p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-2">Top Creators</p>
                      <div className="flex gap-2">
                        {campaign.topCreators.map((creator, index) => (
                          <span key={index} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded">
                            {creator}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Analytics */}
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">UGC Performance Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <p className="text-sm text-gray-600">Active Creators</p>
              </div>
              <p className="text-2xl font-bold text-gray-900">{ugcStats.activeCreators.toLocaleString()}</p>
              <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
                <ArrowUpRight className="w-4 h-4" />
                <span>12.5% vs last month</span>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <p className="text-sm text-gray-600">Avg Engagement Rate</p>
              </div>
              <p className="text-2xl font-bold text-gray-900">27.8%</p>
              <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
                <ArrowUpRight className="w-4 h-4" />
                <span>5.2% vs last month</span>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingCart className="w-5 h-5 text-green-600" />
                <p className="text-sm text-gray-600">UGC Conversion Rate</p>
              </div>
              <p className="text-2xl font-bold text-gray-900">{ugcStats.conversionRate}%</p>
              <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
                <ArrowUpRight className="w-4 h-4" />
                <span>2.3% vs platform avg</span>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-orange-600" />
                <p className="text-sm text-gray-600">Creator Payouts</p>
              </div>
              <p className="text-2xl font-bold text-gray-900">₹{(ugcStats.revenueGenerated * 0.05 / 100000).toFixed(1)}L</p>
              <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
                <span>5% revenue share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
