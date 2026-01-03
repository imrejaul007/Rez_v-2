import { useState } from 'react';
import { Play, Image, MessageSquare, CheckCircle, XCircle, Flag, Star, Eye, ThumbsUp } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminContent() {
  const [activeTab, setActiveTab] = useState('reels');

  const [reels, setReels] = useState([
    {
      id: 1,
      thumbnail: 'https://via.placeholder.com/200x300',
      user: 'Sarah Johnson',
      store: 'Cafe Delight',
      uploadDate: '2024-01-20',
      views: 12456,
      likes: 1234,
      comments: 89,
      flagged: 0,
      status: 'pending'
    },
    {
      id: 2,
      thumbnail: 'https://via.placeholder.com/200x300',
      user: 'Mike Chen',
      store: 'Fashion Hub',
      uploadDate: '2024-01-20',
      views: 8934,
      likes: 891,
      comments: 45,
      flagged: 2,
      status: 'pending'
    },
    {
      id: 3,
      thumbnail: 'https://via.placeholder.com/200x300',
      user: 'Emily Davis',
      store: 'Fitness Zone',
      uploadDate: '2024-01-19',
      views: 23456,
      likes: 2345,
      comments: 156,
      flagged: 0,
      status: 'approved'
    }
  ]);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: 'John Doe',
      merchant: 'Pizza Palace',
      rating: 5,
      text: 'Amazing food and excellent service! The pizza was fresh and delicious. Highly recommend!',
      photos: 2,
      date: '2024-01-20',
      verified: true,
      helpful: 23,
      flagged: 0,
      status: 'pending'
    },
    {
      id: 2,
      user: 'Jane Smith',
      merchant: 'Tech Store',
      rating: 2,
      text: 'Poor customer service. Product was damaged and they refused to replace it. Very disappointed!',
      photos: 1,
      date: '2024-01-20',
      verified: true,
      helpful: 12,
      flagged: 3,
      status: 'pending'
    },
    {
      id: 3,
      user: 'David Wilson',
      merchant: 'Coffee Corner',
      rating: 4,
      text: 'Good coffee and nice ambience. A bit pricey but worth it for the quality.',
      photos: 0,
      date: '2024-01-19',
      verified: true,
      helpful: 45,
      flagged: 0,
      status: 'approved'
    }
  ]);

  const [banners, setBanners] = useState([
    {
      id: 1,
      title: 'New Year Mega Sale',
      image: 'https://via.placeholder.com/1200x400',
      link: '/offers/new-year',
      priority: 1,
      startDate: '2024-01-15',
      endDate: '2024-01-31',
      active: true,
      clicks: 12456,
      impressions: 123456
    },
    {
      id: 2,
      title: 'Fashion Week Special',
      image: 'https://via.placeholder.com/1200x400',
      link: '/category/fashion',
      priority: 2,
      startDate: '2024-01-20',
      endDate: '2024-01-27',
      active: true,
      clicks: 8934,
      impressions: 89341
    }
  ]);

  const handleApproveReel = (id) => {
    setReels(prev => prev.map(r => r.id === id ? { ...r, status: 'approved' } : r));
  };

  const handleRejectReel = (id) => {
    setReels(prev => prev.map(r => r.id === id ? { ...r, status: 'rejected' } : r));
  };

  const handleApproveReview = (id) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, status: 'approved' } : r));
  };

  const handleRejectReview = (id) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, status: 'rejected' } : r));
  };

  const stats = {
    reels: {
      pending: reels.filter(r => r.status === 'pending').length,
      approved: reels.filter(r => r.status === 'approved').length,
      rejected: reels.filter(r => r.status === 'rejected').length,
      flagged: reels.filter(r => r.flagged > 0).length
    },
    reviews: {
      pending: reviews.filter(r => r.status === 'pending').length,
      approved: reviews.filter(r => r.status === 'approved').length,
      flagged: reviews.filter(r => r.flagged > 0).length
    },
    banners: {
      active: banners.filter(b => b.active).length,
      totalClicks: banners.reduce((sum, b) => sum + b.clicks, 0),
      totalImpressions: banners.reduce((sum, b) => sum + b.impressions, 0)
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-600 mt-1">Manage user-generated content, reviews, and banners</p>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('reels')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'reels'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Reels & Videos
                {stats.reels.pending > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {stats.reels.pending}
                  </span>
                )}
              </div>
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'reviews'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Reviews
                {stats.reviews.pending > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {stats.reviews.pending}
                  </span>
                )}
              </div>
            </button>
            <button
              onClick={() => setActiveTab('banners')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'banners'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Image className="w-5 h-5" />
                Banners
              </div>
            </button>
          </div>

          {activeTab === 'reels' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm text-orange-600 font-medium">Pending Approval</p>
                  <p className="text-2xl font-bold text-orange-900 mt-1">{stats.reels.pending}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-600 font-medium">Approved</p>
                  <p className="text-2xl font-bold text-green-900 mt-1">{stats.reels.approved}</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm text-red-600 font-medium">Rejected</p>
                  <p className="text-2xl font-bold text-red-900 mt-1">{stats.reels.rejected}</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-purple-600 font-medium">Flagged</p>
                  <p className="text-2xl font-bold text-purple-900 mt-1">{stats.reels.flagged}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reels.map((reel) => (
                  <div key={reel.id} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                    <div className="relative aspect-[9/16] bg-gray-300">
                      <img src={reel.thumbnail} alt="Reel" className="w-full h-full object-cover" />
                      <div className="absolute top-2 right-2">
                        <Play className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                      {reel.flagged > 0 && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                          <Flag className="w-3 h-3" />
                          {reel.flagged} flags
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-gray-900">{reel.user}</p>
                      <p className="text-sm text-gray-600">@{reel.store}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {reel.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          {reel.likes.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {reel.comments}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">{reel.uploadDate}</p>

                      {reel.status === 'pending' ? (
                        <div className="flex gap-2 mt-4">
                          <button
                            onClick={() => handleApproveReel(reel.id)}
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Approve
                          </button>
                          <button
                            onClick={() => handleRejectReel(reel.id)}
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                          >
                            <XCircle className="w-4 h-4" />
                            Reject
                          </button>
                        </div>
                      ) : (
                        <div className="mt-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded text-sm font-medium ${
                            reel.status === 'approved'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {reel.status === 'approved' ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                            {reel.status.charAt(0).toUpperCase() + reel.status.slice(1)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm text-orange-600 font-medium">Pending Moderation</p>
                  <p className="text-2xl font-bold text-orange-900 mt-1">{stats.reviews.pending}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-600 font-medium">Approved</p>
                  <p className="text-2xl font-bold text-green-900 mt-1">{stats.reviews.approved}</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm text-red-600 font-medium">Flagged</p>
                  <p className="text-2xl font-bold text-red-900 mt-1">{stats.reviews.flagged}</p>
                </div>
              </div>

              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                          {review.user.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{review.user}</p>
                          <p className="text-sm text-gray-600">{review.merchant}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            {review.verified && (
                              <span className="text-xs text-green-600 font-medium">✓ Verified Purchase</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{review.date}</p>
                        {review.flagged > 0 && (
                          <span className="inline-flex items-center gap-1 mt-2 bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
                            <Flag className="w-3 h-3" />
                            {review.flagged} flags
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{review.text}</p>

                    {review.photos > 0 && (
                      <p className="text-sm text-gray-600 mb-4">📸 {review.photos} photos attached</p>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <ThumbsUp className="w-4 h-4" />
                        {review.helpful} found helpful
                      </div>

                      {review.status === 'pending' ? (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleApproveReview(review.id)}
                            className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Approve
                          </button>
                          <button
                            onClick={() => handleRejectReview(review.id)}
                            className="flex items-center gap-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                          >
                            <XCircle className="w-4 h-4" />
                            Remove
                          </button>
                        </div>
                      ) : (
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded text-sm font-medium ${
                          review.status === 'approved'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {review.status === 'approved' ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                          {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'banners' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <p className="text-sm text-indigo-600 font-medium">Active Banners</p>
                  <p className="text-2xl font-bold text-indigo-900 mt-1">{stats.banners.active}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600 font-medium">Total Clicks</p>
                  <p className="text-2xl font-bold text-blue-900 mt-1">{stats.banners.totalClicks.toLocaleString()}</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-purple-600 font-medium">Total Impressions</p>
                  <p className="text-2xl font-bold text-purple-900 mt-1">{stats.banners.totalImpressions.toLocaleString()}</p>
                </div>
              </div>

              <div className="space-y-4">
                {banners.map((banner) => (
                  <div key={banner.id} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                    <img src={banner.image} alt={banner.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{banner.title}</h3>
                          <p className="text-sm text-gray-600">Priority: #{banner.priority}</p>
                          <p className="text-sm text-gray-600">
                            {banner.startDate} - {banner.endDate}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          banner.active
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {banner.active ? 'Active' : 'Inactive'}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Clicks</p>
                          <p className="text-lg font-bold text-gray-900">{banner.clicks.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Impressions</p>
                          <p className="text-lg font-bold text-gray-900">{banner.impressions.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50">
                          Edit
                        </button>
                        <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                          {banner.active ? 'Deactivate' : 'Activate'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
