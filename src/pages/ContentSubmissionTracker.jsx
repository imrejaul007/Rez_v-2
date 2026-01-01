import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContentSubmissionTracker = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedContent, setSelectedContent] = useState(null);

  // Mock content submissions
  const [submissions] = useState([
    {
      id: 'CNT-001',
      type: 'review',
      title: 'Review for Fresh Mart',
      merchant: 'Fresh Mart',
      rating: 4,
      status: 'approved',
      submittedAt: '2024-12-26 10:30',
      reviewedAt: '2024-12-26 11:45',
      content: 'Great quality products and fast delivery. The vegetables were fresh and well-packed.',
      images: ['review_img1.jpg'],
      moderationNote: null,
      visibility: 'public',
      engagement: { likes: 12, helpful: 8 }
    },
    {
      id: 'CNT-002',
      type: 'reel',
      title: 'Unboxing Tech World Purchase',
      merchant: 'Tech World',
      status: 'pending',
      submittedAt: '2024-12-27 14:20',
      reviewedAt: null,
      content: 'Check out my new gadget unboxing!',
      thumbnail: 'reel_thumb.jpg',
      duration: '45s',
      moderationNote: null,
      visibility: 'pending',
      estimatedReview: '2-4 hours'
    },
    {
      id: 'CNT-003',
      type: 'review',
      title: 'Review for Quick Bites',
      merchant: 'Quick Bites',
      rating: 2,
      status: 'rejected',
      submittedAt: '2024-12-25 18:00',
      reviewedAt: '2024-12-25 19:30',
      content: 'The food was terrible and cold when arrived.',
      images: [],
      moderationNote: 'Content contains inappropriate language. Please revise and resubmit.',
      rejectionReason: 'inappropriate_language',
      canAppeal: true,
      appealDeadline: '2024-12-30'
    },
    {
      id: 'CNT-004',
      type: 'story',
      title: 'Shopping at Fashion Hub',
      merchant: 'Fashion Hub',
      status: 'expired',
      submittedAt: '2024-12-20 09:00',
      expiredAt: '2024-12-21 09:00',
      content: 'Check out these amazing deals!',
      views: 234,
      moderationNote: null
    },
    {
      id: 'CNT-005',
      type: 'ugc',
      title: 'Brand Campaign: Summer Sale',
      merchant: 'Style Studio',
      status: 'in_review',
      submittedAt: '2024-12-27 16:00',
      content: 'Summer vibes with Style Studio collection',
      images: ['ugc_1.jpg', 'ugc_2.jpg'],
      campaignId: 'CAMP-001',
      reward: 500,
      moderationNote: 'Content is being reviewed for brand guidelines compliance.'
    }
  ]);

  const contentTypes = [
    { id: 'all', label: 'All', icon: '📋' },
    { id: 'review', label: 'Reviews', icon: '⭐' },
    { id: 'reel', label: 'Reels', icon: '🎬' },
    { id: 'story', label: 'Stories', icon: '📷' },
    { id: 'ugc', label: 'UGC', icon: '🎯' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      approved: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      in_review: 'bg-blue-100 text-blue-700',
      rejected: 'bg-red-100 text-red-700',
      expired: 'bg-gray-100 text-gray-700',
      appealed: 'bg-purple-100 text-purple-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getStatusLabel = (status) => {
    const labels = {
      approved: 'Approved',
      pending: 'Pending Review',
      in_review: 'In Review',
      rejected: 'Rejected',
      expired: 'Expired',
      appealed: 'Under Appeal'
    };
    return labels[status] || status;
  };

  const getTypeIcon = (type) => {
    const icons = {
      review: '⭐',
      reel: '🎬',
      story: '📷',
      ugc: '🎯'
    };
    return icons[type] || '📝';
  };

  const filteredSubmissions = activeTab === 'all'
    ? submissions
    : submissions.filter(s => s.type === activeTab);

  const stats = {
    total: submissions.length,
    approved: submissions.filter(s => s.status === 'approved').length,
    pending: submissions.filter(s => ['pending', 'in_review'].includes(s.status)).length,
    rejected: submissions.filter(s => s.status === 'rejected').length
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">My Content</h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold">{stats.total}</div>
            <div className="text-xs text-white/80">Total</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-green-300">{stats.approved}</div>
            <div className="text-xs text-white/80">Approved</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-yellow-300">{stats.pending}</div>
            <div className="text-xs text-white/80">Pending</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-red-300">{stats.rejected}</div>
            <div className="text-xs text-white/80">Rejected</div>
          </div>
        </div>
      </div>

      {/* Type Filter Tabs */}
      <div className="flex overflow-x-auto bg-white border-b sticky top-0 z-10">
        {contentTypes.map(type => (
          <button
            key={type.id}
            onClick={() => setActiveTab(type.id)}
            className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === type.id
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-600'
            }`}
          >
            <span className="mr-1">{type.icon}</span>
            {type.label}
          </button>
        ))}
      </div>

      {/* Content List */}
      <div className="p-4 space-y-4">
        {filteredSubmissions.map(content => (
          <div
            key={content.id}
            onClick={() => setSelectedContent(content)}
            className="bg-white rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                  {getTypeIcon(content.type)}
                </div>
                <div>
                  <p className="font-medium">{content.title}</p>
                  <p className="text-xs text-gray-500">{content.merchant}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(content.status)}`}>
                {getStatusLabel(content.status)}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{content.content}</p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Submitted: {content.submittedAt}</span>
              {content.status === 'pending' && content.estimatedReview && (
                <span className="text-blue-600">Est. review: {content.estimatedReview}</span>
              )}
              {content.status === 'approved' && content.engagement && (
                <span className="text-green-600">
                  {content.engagement.likes} likes • {content.engagement.helpful} helpful
                </span>
              )}
            </div>

            {/* Rejection Warning */}
            {content.status === 'rejected' && content.canAppeal && (
              <div className="mt-3 bg-red-50 rounded-lg p-2 flex items-center justify-between">
                <span className="text-sm text-red-700">Content was rejected</span>
                <button className="text-sm font-medium text-red-800 underline">
                  Appeal by {content.appealDeadline}
                </button>
              </div>
            )}

            {/* UGC Campaign Reward */}
            {content.type === 'ugc' && content.reward && (
              <div className="mt-3 bg-purple-50 rounded-lg p-2 flex items-center justify-between">
                <span className="text-sm text-purple-700">Campaign Reward</span>
                <span className="font-medium text-purple-800">₹{content.reward} coins</span>
              </div>
            )}
          </div>
        ))}

        {filteredSubmissions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-500">No content submissions yet</p>
            <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg">
              Create Your First Content
            </button>
          </div>
        )}
      </div>

      {/* Content Detail Modal */}
      {selectedContent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full max-h-[90vh] rounded-t-2xl overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h2 className="font-bold">Content Details</h2>
              <button onClick={() => setSelectedContent(null)} className="text-2xl">&times;</button>
            </div>

            <div className="p-4 space-y-4">
              {/* Content Info */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-3xl shadow-sm">
                    {getTypeIcon(selectedContent.type)}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{selectedContent.title}</p>
                    <p className="text-sm text-gray-500">{selectedContent.merchant}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(selectedContent.status)}`}>
                    {getStatusLabel(selectedContent.status)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Type</p>
                    <p className="font-medium capitalize">{selectedContent.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Submitted</p>
                    <p className="font-medium">{selectedContent.submittedAt}</p>
                  </div>
                  {selectedContent.reviewedAt && (
                    <div>
                      <p className="text-gray-500">Reviewed</p>
                      <p className="font-medium">{selectedContent.reviewedAt}</p>
                    </div>
                  )}
                  {selectedContent.rating && (
                    <div>
                      <p className="text-gray-500">Rating</p>
                      <p className="font-medium">{'⭐'.repeat(selectedContent.rating)}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Preview */}
              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Content</h3>
                <p className="text-sm text-gray-700">{selectedContent.content}</p>

                {selectedContent.images && selectedContent.images.length > 0 && (
                  <div className="mt-3 flex gap-2 overflow-x-auto">
                    {selectedContent.images.map((img, idx) => (
                      <div key={idx} className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <span className="text-gray-400">📷</span>
                      </div>
                    ))}
                  </div>
                )}

                {selectedContent.type === 'reel' && (
                  <div className="mt-3 bg-gray-100 rounded-lg p-3 flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                      <span className="text-2xl">▶️</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Video Reel</p>
                      <p className="text-xs text-gray-500">Duration: {selectedContent.duration}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Moderation Status */}
              <div className={`rounded-xl p-4 ${
                selectedContent.status === 'approved' ? 'bg-green-50 border border-green-200' :
                selectedContent.status === 'rejected' ? 'bg-red-50 border border-red-200' :
                selectedContent.status === 'pending' || selectedContent.status === 'in_review' ? 'bg-yellow-50 border border-yellow-200' :
                'bg-gray-50 border border-gray-200'
              }`}>
                <h3 className="font-semibold mb-2">Moderation Status</h3>

                {selectedContent.status === 'approved' && (
                  <div className="flex items-center gap-2 text-green-700">
                    <span className="text-xl">✅</span>
                    <span>Your content has been approved and is now live!</span>
                  </div>
                )}

                {selectedContent.status === 'pending' && (
                  <div className="flex items-center gap-2 text-yellow-700">
                    <span className="text-xl">⏳</span>
                    <div>
                      <p>Your content is waiting for review.</p>
                      <p className="text-sm">Estimated time: {selectedContent.estimatedReview}</p>
                    </div>
                  </div>
                )}

                {selectedContent.status === 'in_review' && (
                  <div className="flex items-center gap-2 text-blue-700">
                    <span className="text-xl">🔍</span>
                    <span>Your content is currently being reviewed by our team.</span>
                  </div>
                )}

                {selectedContent.status === 'rejected' && (
                  <div>
                    <div className="flex items-center gap-2 text-red-700 mb-2">
                      <span className="text-xl">❌</span>
                      <span>Your content was not approved.</span>
                    </div>
                    {selectedContent.moderationNote && (
                      <div className="bg-white rounded-lg p-3 text-sm">
                        <p className="font-medium text-red-800 mb-1">Reason:</p>
                        <p className="text-red-700">{selectedContent.moderationNote}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Engagement Stats (for approved content) */}
              {selectedContent.status === 'approved' && selectedContent.engagement && (
                <div className="bg-white border rounded-xl p-4">
                  <h3 className="font-semibold mb-3">Engagement</h3>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-purple-600">{selectedContent.engagement.likes}</div>
                      <div className="text-xs text-gray-500">Likes</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-blue-600">{selectedContent.engagement.helpful}</div>
                      <div className="text-xs text-gray-500">Helpful</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-green-600">{selectedContent.views || 0}</div>
                      <div className="text-xs text-gray-500">Views</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                {selectedContent.status === 'rejected' && selectedContent.canAppeal && (
                  <button className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-medium">
                    Appeal Decision
                  </button>
                )}
                {selectedContent.status === 'rejected' && (
                  <button className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-medium">
                    Edit & Resubmit
                  </button>
                )}
                {selectedContent.status === 'approved' && (
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium">
                    Share Content
                  </button>
                )}
                <button
                  onClick={() => setSelectedContent(null)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Create Button */}
      <button className="fixed bottom-20 right-4 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg flex items-center justify-center text-white text-2xl">
        +
      </button>
    </div>
  );
};

export default ContentSubmissionTracker;
