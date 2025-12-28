import { useState } from 'react';
import AdminNav from '../../components/admin/AdminNav';
import {
  Shield, Eye, CheckCircle, XCircle, AlertTriangle, Flag, Image as ImageIcon,
  Video, Star, MessageSquare, ThumbsUp, ThumbsDown, Search, Filter,
  Clock, TrendingUp, Users, Zap, ChevronRight, ExternalLink
} from 'lucide-react';

export default function AdminContentModeration() {
  const [activeTab, setActiveTab] = useState('reviews');
  const [filterStatus, setFilterStatus] = useState('pending');

  // Mock data - Reviews pending moderation
  const pendingReviews = [
    {
      id: 'REV-12345',
      userId: 'USR-45821',
      userName: 'Priya Sharma',
      userTier: 'Gold',
      merchantId: 'MER-7890',
      merchantName: 'The Spice Route Restaurant',
      rating: 5,
      reviewText: 'Absolutely amazing experience! The food was delicious, service was prompt, and the ambiance was perfect for a dinner date. Highly recommended!',
      photos: [
        { id: 'img1', url: '/api/placeholder/200/200', caption: 'Butter Chicken' },
        { id: 'img2', url: '/api/placeholder/200/200', caption: 'Naan Basket' }
      ],
      hasVideo: false,
      submittedAt: new Date(Date.now() - 3600000),
      coinsEarned: 50,
      flags: [],
      aiScore: 95,
      aiFlags: [],
      sentiment: 'positive',
      recommendation: 'approve'
    },
    {
      id: 'REV-12346',
      userId: 'USR-32145',
      userName: 'Rahul Mehta',
      userTier: 'Silver',
      merchantId: 'MER-5678',
      merchantName: 'Fashion Hub',
      rating: 1,
      reviewText: 'Worst experience ever!! The staff was rude, products were fake, and they refused to give refund. Complete scam! DO NOT BUY FROM HERE!!!',
      photos: [],
      hasVideo: false,
      submittedAt: new Date(Date.now() - 7200000),
      coinsEarned: 30,
      flags: [
        { type: 'spam', reason: 'Multiple exclamation marks, all caps', severity: 'medium' },
        { type: 'inappropriate', reason: 'Potentially defamatory language', severity: 'high' }
      ],
      aiScore: 42,
      aiFlags: ['aggressive_language', 'defamatory'],
      sentiment: 'very_negative',
      recommendation: 'review'
    },
    {
      id: 'REV-12347',
      userId: 'USR-67890',
      userName: 'Sneha Patel',
      userTier: 'Platinum',
      merchantId: 'MER-3456',
      merchantName: 'Wellness Spa',
      rating: 4,
      reviewText: 'Great spa experience. The massage was relaxing and the therapists were professional. Only issue was the waiting time.',
      photos: [
        { id: 'img3', url: '/api/placeholder/200/200', caption: 'Spa entrance' }
      ],
      hasVideo: true,
      submittedAt: new Date(Date.now() - 1800000),
      coinsEarned: 75,
      flags: [],
      aiScore: 88,
      aiFlags: [],
      sentiment: 'positive',
      recommendation: 'approve'
    }
  ];

  // Mock data - Photos/Videos pending moderation
  const pendingMedia = [
    {
      id: 'MEDIA-001',
      type: 'photo',
      userId: 'USR-11234',
      userName: 'Arjun Kapoor',
      context: 'Product Review',
      productName: 'Nike Air Max Sneakers',
      merchantName: 'Shoe Palace',
      url: '/api/placeholder/400/400',
      caption: 'Love the new kicks! Perfect fit and super comfortable.',
      submittedAt: new Date(Date.now() - 5400000),
      aiFlags: [],
      aiScore: 92,
      recommendation: 'approve'
    },
    {
      id: 'MEDIA-002',
      type: 'video',
      userId: 'USR-22456',
      userName: 'Anjali Singh',
      context: 'UGC Campaign',
      campaignName: 'Summer Fashion Challenge',
      merchantName: 'Fashion Forward',
      url: '/api/placeholder/400/300',
      caption: 'Summer outfit of the day! #OOTD #SummerVibes',
      duration: '00:45',
      submittedAt: new Date(Date.now() - 3600000),
      aiFlags: [],
      aiScore: 95,
      recommendation: 'approve'
    },
    {
      id: 'MEDIA-003',
      type: 'photo',
      userId: 'USR-33678',
      userName: 'Vikram Desai',
      context: 'Product Review',
      productName: 'Samsung Galaxy S24',
      merchantName: 'Tech World',
      url: '/api/placeholder/400/400',
      caption: 'Camera quality is insane!',
      submittedAt: new Date(Date.now() - 7200000),
      aiFlags: ['inappropriate_content'],
      aiScore: 35,
      recommendation: 'reject'
    }
  ];

  // Mock data - Statistics
  const stats = {
    pending: {
      reviews: 28,
      photos: 15,
      videos: 8,
      total: 51
    },
    today: {
      approved: 145,
      rejected: 12,
      avgProcessingTime: '2.5 min'
    },
    thisWeek: {
      totalProcessed: 1234,
      approvalRate: 92,
      rejectionRate: 8
    }
  };

  const handleApprove = (contentId, type) => {
    console.log('Approving', type, contentId);
    // Implementation would approve content
  };

  const handleReject = (contentId, type, reason) => {
    console.log('Rejecting', type, contentId, 'Reason:', reason);
    // Implementation would reject content
  };

  const handleFlag = (contentId, type, flagReason) => {
    console.log('Flagging', type, contentId, 'for manual review:', flagReason);
    // Implementation would flag for manual review
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'very_positive': return 'text-green-600 bg-green-100';
      case 'positive': return 'text-green-600 bg-green-50';
      case 'neutral': return 'text-gray-600 bg-gray-100';
      case 'negative': return 'text-orange-600 bg-orange-50';
      case 'very_negative': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAIScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const renderReviews = () => (
    <div className="space-y-6">
      {pendingReviews.map((review) => (
        <div key={review.id} className={`bg-white rounded-xl border-2 overflow-hidden ${
          review.flags.length > 0 ? 'border-red-200' : 'border-gray-200'
        }`}>
          {/* Alert Header if flagged */}
          {review.flags.length > 0 && (
            <div className="bg-red-50 border-b border-red-200 px-6 py-3">
              <div className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-semibold">⚠️ Flagged for Review - {review.flags.length} issue(s) detected</span>
              </div>
            </div>
          )}

          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.userName.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{review.userName}</h3>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {review.userTier}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    Review for: <span className="font-medium text-gray-900">{review.merchantName}</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Submitted {new Date(review.submittedAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">ID: {review.id}</p>
              </div>
            </div>

            {/* AI Analysis */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-2">AI Quality Score</p>
                <p className={`text-3xl font-bold ${getAIScoreColor(review.aiScore)}`}>
                  {review.aiScore}
                  <span className="text-sm text-gray-500">/100</span>
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-2">Sentiment</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getSentimentColor(review.sentiment)}`}>
                  {review.sentiment.replace('_', ' ')}
                </span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-2">Coins Earned</p>
                <p className="text-3xl font-bold text-purple-600">{review.coinsEarned}</p>
              </div>
            </div>

            {/* Flags if any */}
            {review.flags.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-semibold text-red-900 mb-3">🚩 Detected Issues</h4>
                <div className="space-y-2">
                  {review.flags.map((flag, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Flag className={`w-4 h-4 mt-0.5 ${
                        flag.severity === 'high' ? 'text-red-600' :
                        flag.severity === 'medium' ? 'text-orange-600' :
                        'text-yellow-600'
                      }`} />
                      <div>
                        <p className="text-sm font-medium text-red-900 capitalize">{flag.type}</p>
                        <p className="text-xs text-red-700">{flag.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Review Text */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-gray-900 leading-relaxed">{review.reviewText}</p>
            </div>

            {/* Photos */}
            {review.photos.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Attached Photos</h4>
                <div className="flex gap-4">
                  {review.photos.map((photo) => (
                    <div key={photo.id} className="relative group">
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-32 h-32 object-cover rounded-lg border border-gray-200"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI Recommendation */}
            <div className={`rounded-lg p-4 mb-6 ${
              review.recommendation === 'approve' ? 'bg-green-50 border border-green-200' :
              review.recommendation === 'reject' ? 'bg-red-50 border border-red-200' :
              'bg-yellow-50 border border-yellow-200'
            }`}>
              <div className="flex items-center gap-2">
                <Zap className={`w-5 h-5 ${
                  review.recommendation === 'approve' ? 'text-green-600' :
                  review.recommendation === 'reject' ? 'text-red-600' :
                  'text-yellow-600'
                }`} />
                <span className="font-semibold text-gray-900">
                  AI Recommendation: <span className="capitalize">{review.recommendation}</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => handleApprove(review.id, 'review')}
                className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Approve & Publish
              </button>
              <button
                onClick={() => handleReject(review.id, 'review', 'inappropriate_content')}
                className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Reject
              </button>
              <button
                onClick={() => handleFlag(review.id, 'review', 'manual_review_needed')}
                className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Flag className="w-5 h-5" />
                Flag
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderMedia = () => (
    <div className="grid grid-cols-2 gap-6">
      {pendingMedia.map((media) => (
        <div key={media.id} className={`bg-white rounded-xl border-2 overflow-hidden ${
          media.aiFlags.length > 0 ? 'border-red-200' : 'border-gray-200'
        }`}>
          {/* Media Preview */}
          <div className="relative aspect-video bg-gray-100">
            <img
              src={media.url}
              alt={media.caption}
              className="w-full h-full object-cover"
            />
            {media.type === 'video' && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black bg-opacity-75 text-white text-xs rounded-full flex items-center gap-2">
                  <Video className="w-3 h-3" />
                  {media.duration}
                </span>
              </div>
            )}
            {media.aiFlags.length > 0 && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  AI Flagged
                </span>
              </div>
            )}
          </div>

          <div className="p-6">
            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {media.userName.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{media.userName}</p>
                <p className="text-xs text-gray-500">
                  {new Date(media.submittedAt).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Context */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <p className="text-xs text-gray-500 mb-1">Context: {media.context}</p>
              {media.productName && (
                <p className="text-sm font-medium text-gray-900">{media.productName}</p>
              )}
              {media.campaignName && (
                <p className="text-sm font-medium text-gray-900">{media.campaignName}</p>
              )}
              <p className="text-xs text-gray-600 mt-1">{media.merchantName}</p>
            </div>

            {/* Caption */}
            <p className="text-gray-900 mb-4">{media.caption}</p>

            {/* AI Score */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">AI Quality Score</span>
              <span className={`text-2xl font-bold ${getAIScoreColor(media.aiScore)}`}>
                {media.aiScore}/100
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => handleApprove(media.id, 'media')}
                className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(media.id, 'media', 'inappropriate')}
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <AdminNav />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Content Moderation</h1>
              <p className="text-gray-600">Review and approve user-generated content</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
              <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                Pending
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.pending.total}</p>
            <p className="text-sm text-gray-600">Awaiting Review</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.today.approved}</p>
            <p className="text-sm text-gray-600">Approved Today</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.today.rejected}</p>
            <p className="text-sm text-gray-600">Rejected Today</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.thisWeek.approvalRate}%</p>
            <p className="text-sm text-gray-600">Approval Rate</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'reviews'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Reviews ({stats.pending.reviews})
              </div>
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'media'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <ImageIcon className="w-5 h-5" />
                Photos & Videos ({stats.pending.photos + stats.pending.videos})
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'reviews' && renderReviews()}
        {activeTab === 'media' && renderMedia()}
      </div>
    </div>
  );
}
