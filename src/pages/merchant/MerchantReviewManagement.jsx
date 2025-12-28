import { useState } from 'react';
import {
  Star, MessageSquare, ThumbsUp, TrendingUp, TrendingDown, AlertCircle,
  Search, Filter, Send, Image as ImageIcon, Eye, Clock, CheckCircle,
  BarChart3, Heart, Flag, User
} from 'lucide-react';

export default function MerchantReviewManagement() {
  const [activeTab, setActiveTab] = useState('pending');
  const [replyText, setReplyText] = useState({});

  // Mock data - Reviews needing response
  const pendingReviews = [
    {
      id: 'REV-001',
      customerId: 'USR-45821',
      customerName: 'Priya Sharma',
      rating: 5,
      reviewText: 'Absolutely loved the experience! The food was amazing and service was top-notch. Will definitely come back again!',
      photos: [
        { id: 'img1', url: '/api/placeholder/150/150' },
        { id: 'img2', url: '/api/placeholder/150/150' }
      ],
      date: new Date(Date.now() - 3600000),
      verified: true,
      sentiment: 'very_positive',
      responseNeeded: true,
      helpfulCount: 12,
      orderValue: 1250
    },
    {
      id: 'REV-002',
      customerId: 'USR-32145',
      customerName: 'Rahul Mehta',
      rating: 2,
      reviewText: 'Food was okay but service was really slow. Had to wait 45 minutes for our order. Not happy with the experience.',
      photos: [],
      date: new Date(Date.now() - 7200000),
      verified: true,
      sentiment: 'negative',
      responseNeeded: true,
      helpfulCount: 5,
      orderValue: 850
    },
    {
      id: 'REV-003',
      customerId: 'USR-67890',
      customerName: 'Sneha Patel',
      rating: 4,
      reviewText: 'Good food and nice ambiance. Slightly expensive but worth it for special occasions.',
      photos: [
        { id: 'img3', url: '/api/placeholder/150/150' }
      ],
      date: new Date(Date.now() - 10800000),
      verified: true,
      sentiment: 'positive',
      responseNeeded: true,
      helpfulCount: 8,
      orderValue: 2100
    }
  ];

  // Mock data - Responded reviews
  const respondedReviews = [
    {
      id: 'REV-004',
      customerName: 'Vikram Singh',
      rating: 5,
      reviewText: 'Best biryani in town! Authentic flavors and generous portions.',
      date: new Date(Date.now() - 86400000),
      merchantReply: 'Thank you so much for your kind words! We\'re thrilled you enjoyed our biryani. Looking forward to serving you again!',
      replyDate: new Date(Date.now() - 82800000),
      repliedBy: 'Store Manager',
      sentiment: 'very_positive'
    }
  ];

  // Mock data - Review analytics
  const analytics = {
    overall: {
      avgRating: 4.3,
      totalReviews: 1234,
      responseRate: 78,
      avgResponseTime: '2.5 hours'
    },
    sentiment: {
      veryPositive: 45,
      positive: 32,
      neutral: 15,
      negative: 6,
      veryNegative: 2
    },
    ratingDistribution: [
      { stars: 5, count: 678, percentage: 55 },
      { stars: 4, count: 345, percentage: 28 },
      { stars: 3, count: 123, percentage: 10 },
      { stars: 2, count: 62, percentage: 5 },
      { stars: 1, count: 26, percentage: 2 }
    ],
    trends: {
      thisWeek: 45,
      lastWeek: 38,
      change: 18.4
    },
    topKeywords: {
      positive: ['delicious', 'amazing', 'great service', 'fresh', 'authentic'],
      negative: ['slow', 'expensive', 'cold', 'waiting time', 'small portions']
    }
  };

  const handleSendReply = (reviewId) => {
    console.log('Sending reply to review:', reviewId, 'Reply:', replyText[reviewId]);
    setReplyText({ ...replyText, [reviewId]: '' });
  };

  const getSentimentColor = (sentiment) => {
    const colors = {
      very_positive: 'text-green-600 bg-green-100',
      positive: 'text-green-600 bg-green-50',
      neutral: 'text-gray-600 bg-gray-100',
      negative: 'text-orange-600 bg-orange-50',
      very_negative: 'text-red-600 bg-red-100'
    };
    return colors[sentiment] || colors.neutral;
  };

  const getSuggestedReply = (rating, sentiment) => {
    if (rating >= 4) {
      return "Thank you so much for your wonderful review! We're thrilled you enjoyed your experience with us. Looking forward to serving you again soon!";
    } else if (rating === 3) {
      return "Thank you for your feedback! We appreciate your honest review and we're always working to improve. We'd love another chance to provide you with a 5-star experience!";
    } else {
      return "We sincerely apologize for not meeting your expectations. Your feedback is important to us and we're taking steps to address these issues. Please reach out to us directly so we can make this right.";
    }
  };

  const renderPendingReviews = () => (
    <div className="space-y-6">
      {pendingReviews.map((review) => (
        <div key={review.id} className={`bg-white rounded-xl border-2 overflow-hidden ${
          review.sentiment === 'negative' || review.sentiment === 'very_negative'
            ? 'border-red-200'
            : 'border-gray-200'
        }`}>
          {/* Urgent flag for negative reviews */}
          {(review.sentiment === 'negative' || review.sentiment === 'very_negative') && (
            <div className="bg-red-50 border-b border-red-200 px-6 py-3">
              <div className="flex items-center gap-2 text-red-700">
                <AlertCircle className="w-5 h-5" />
                <span className="font-semibold">⚠️ Negative Review - Response Recommended</span>
              </div>
            </div>
          )}

          <div className="p-6">
            {/* Review Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.customerName.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900">{review.customerName}</h4>
                    {review.verified && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${getSentimentColor(review.sentiment)}`}>
                      {review.sentiment.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {new Date(review.date).toLocaleDateString()} • Order value: ₹{review.orderValue}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Review ID</p>
                <p className="text-sm font-mono font-semibold text-gray-900">{review.id}</p>
              </div>
            </div>

            {/* Review Text */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-900 leading-relaxed">{review.reviewText}</p>
            </div>

            {/* Photos */}
            {review.photos.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">Customer Photos</p>
                <div className="flex gap-3">
                  {review.photos.map((photo) => (
                    <div key={photo.id} className="relative group">
                      <img
                        src={photo.url}
                        alt="Review"
                        className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Helpful count */}
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" />
                {review.helpfulCount} people found this helpful
              </span>
            </div>

            {/* Suggested Reply */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-blue-900 mb-2">AI-Suggested Reply</p>
                  <p className="text-sm text-blue-800">{getSuggestedReply(review.rating, review.sentiment)}</p>
                </div>
              </div>
              <button
                onClick={() => setReplyText({
                  ...replyText,
                  [review.id]: getSuggestedReply(review.rating, review.sentiment)
                })}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Use this template →
              </button>
            </div>

            {/* Reply Input */}
            <div className="space-y-3">
              <textarea
                value={replyText[review.id] || ''}
                onChange={(e) => setReplyText({ ...replyText, [review.id]: e.target.value })}
                placeholder="Write your response to this review..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  {replyText[review.id]?.length || 0} / 500 characters
                </p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                    Save Draft
                  </button>
                  <button
                    onClick={() => handleSendReply(review.id)}
                    disabled={!replyText[review.id]}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    Send Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderRespondedReviews = () => (
    <div className="space-y-4">
      {respondedReviews.map((review) => (
        <div key={review.id} className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {review.customerName.charAt(0)}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">{review.customerName}</h4>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-900 mb-3">{review.reviewText}</p>

                {/* Merchant Reply */}
                <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 mt-3">
                  <div className="flex items-start gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-blue-900 mb-1">Your Response</p>
                      <p className="text-sm text-gray-700">{review.merchantReply}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        Replied by {review.repliedBy} on {new Date(review.replyDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <Star className="w-8 h-8 text-yellow-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{analytics.overall.avgRating}</p>
          <p className="text-sm text-gray-600">Average Rating</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <MessageSquare className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{analytics.overall.totalReviews}</p>
          <p className="text-sm text-gray-600">Total Reviews</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{analytics.overall.responseRate}%</p>
          <p className="text-sm text-gray-600">Response Rate</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <Clock className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{analytics.overall.avgResponseTime}</p>
          <p className="text-sm text-gray-600">Avg Response Time</p>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Rating Distribution</h3>
        <div className="space-y-3">
          {analytics.ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-4">
              <div className="flex items-center gap-1 w-20">
                <span className="text-sm font-medium text-gray-900">{item.stars}</span>
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900 w-16 text-right">
                {item.count} ({item.percentage}%)
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sentiment Analysis */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Sentiment Analysis</h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-2xl font-bold text-green-600 mb-1">{analytics.sentiment.veryPositive}%</p>
            <p className="text-xs text-gray-600">Very Positive</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-2xl font-bold text-green-600 mb-1">{analytics.sentiment.positive}%</p>
            <p className="text-xs text-gray-600">Positive</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-2xl font-bold text-gray-600 mb-1">{analytics.sentiment.neutral}%</p>
            <p className="text-xs text-gray-600">Neutral</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <p className="text-2xl font-bold text-orange-600 mb-1">{analytics.sentiment.negative}%</p>
            <p className="text-xs text-gray-600">Negative</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <p className="text-2xl font-bold text-red-600 mb-1">{analytics.sentiment.veryNegative}%</p>
            <p className="text-xs text-gray-600">Very Negative</p>
          </div>
        </div>
      </div>

      {/* Top Keywords */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Common Positive Words</h3>
          <div className="flex flex-wrap gap-2">
            {analytics.topKeywords.positive.map((keyword, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm">
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Common Negative Words</h3>
          <div className="flex flex-wrap gap-2">
            {analytics.topKeywords.negative.map((keyword, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-red-100 text-red-700 rounded-full text-sm">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Review Management</h1>
              <p className="text-gray-600">Respond to reviews and track customer sentiment</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('pending')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'pending'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Pending Response ({pendingReviews.length})
              </div>
            </button>
            <button
              onClick={() => setActiveTab('responded')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'responded'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Responded
              </div>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'analytics'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Analytics
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'pending' && renderPendingReviews()}
        {activeTab === 'responded' && renderRespondedReviews()}
        {activeTab === 'analytics' && renderAnalytics()}
      </div>
    </div>
  );
}
