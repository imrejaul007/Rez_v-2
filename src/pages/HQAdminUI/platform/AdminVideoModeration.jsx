import { useState } from 'react';
import { Video, Play, Pause, CheckCircle, XCircle, Flag, AlertTriangle, Eye, Clock } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

/**
 * ADMIN VIDEO MODERATION
 *
 * Backend APIs:
 * - GET /api/admin/videos/moderation-queue
 * - GET /api/admin/videos/:id/details
 * - PUT /api/admin/videos/:id/approve
 * - PUT /api/admin/videos/:id/reject
 * - POST /api/admin/videos/:id/flag
 *
 * Status: ✅ BUILT (Jan 2, 2026)
 */

export default function AdminVideoModeration() {
  const [videos, setVideos] = useState([
    {
      id: 'VID-001',
      thumbnail: 'https://via.placeholder.com/400x300',
      title: 'Product Unboxing - Nike Air Max',
      creator: 'Sarah Johnson',
      creatorId: 'USR-123',
      duration: '02:15',
      uploadedAt: '2024-01-20 14:30',
      views: 0,
      category: 'Product Review',
      merchant: 'Shoe Palace',
      aiFlags: [],
      manualFlags: 0,
      aiScore: 95,
      status: 'pending'
    },
    {
      id: 'VID-002',
      thumbnail: 'https://via.placeholder.com/400x300',
      title: 'Restaurant Tour',
      creator: 'Mike Chen',
      creatorId: 'USR-456',
      duration: '04:32',
      uploadedAt: '2024-01-20 12:15',
      views: 0,
      category: 'Food & Dining',
      merchant: 'The Spice Route',
      aiFlags: [],
      manualFlags: 0,
      aiScore: 88,
      status: 'pending'
    },
    {
      id: 'VID-003',
      thumbnail: 'https://via.placeholder.com/400x300',
      title: 'Fashion Haul',
      creator: 'Priya Sharma',
      creatorId: 'USR-789',
      duration: '05:45',
      uploadedAt: '2024-01-20 10:00',
      views: 0,
      category: 'Fashion',
      merchant: 'Fashion Hub',
      aiFlags: ['inappropriate_content', 'nudity'],
      manualFlags: 3,
      aiScore: 35,
      status: 'pending'
    }
  ]);

  const handleApprove = async (id) => {
    try {
      await fetch(`/api/admin/videos/${id}/approve`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('rtmn_admin_token')}`,
          'Content-Type': 'application/json'
        }
      });
      setVideos(videos.map(v => v.id === id ? { ...v, status: 'approved' } : v));
    } catch (error) {
      console.error('Failed to approve:', error);
    }
  };

  const handleReject = async (id, reason) => {
    try {
      await fetch(`/api/admin/videos/${id}/reject`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('rtmn_admin_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reason })
      });
      setVideos(videos.map(v => v.id === id ? { ...v, status: 'rejected' } : v));
    } catch (error) {
      console.error('Failed to reject:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Video Moderation</h1>
          <p className="text-gray-600">Review and moderate video content</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{videos.filter(v => v.status === 'pending').length}</p>
            <p className="text-sm text-gray-600">Pending Review</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Flag className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {videos.reduce((sum, v) => sum + v.manualFlags, 0)}
            </p>
            <p className="text-sm text-gray-600">Total Flags</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-600">Approved Today</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-600">Rejected Today</p>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map(video => (
            <div
              key={video.id}
              className={`bg-white rounded-xl shadow-sm border-2 overflow-hidden ${
                video.aiFlags.length > 0 ? 'border-red-300' : 'border-gray-200'
              }`}
            >
              {/* AI Flag Alert */}
              {video.aiFlags.length > 0 && (
                <div className="bg-red-50 border-b border-red-200 px-4 py-3">
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="font-semibold">AI Flagged: {video.aiFlags.join(', ')}</span>
                  </div>
                </div>
              )}

              {/* Video Preview */}
              <div className="relative aspect-video bg-gray-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-1 bg-black bg-opacity-75 text-white text-xs rounded">
                    {video.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="font-bold text-gray-900 text-lg mb-3">{video.title}</h3>

                {/* Creator Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {video.creator.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{video.creator}</p>
                    <p className="text-xs text-gray-500">ID: {video.creatorId}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium text-gray-900">{video.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Merchant:</span>
                    <span className="font-medium text-gray-900">{video.merchant}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Uploaded:</span>
                    <span className="font-medium text-gray-900">{video.uploadedAt}</span>
                  </div>
                  {video.manualFlags > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">User Reports:</span>
                      <span className="font-medium text-red-600">{video.manualFlags} flags</span>
                    </div>
                  )}
                </div>

                {/* AI Score */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">AI Quality Score</span>
                    <span className={`text-2xl font-bold ${
                      video.aiScore >= 80 ? 'text-green-600' :
                      video.aiScore >= 60 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {video.aiScore}/100
                    </span>
                  </div>
                </div>

                {/* Actions */}
                {video.status === 'pending' && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleApprove(video.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(video.id, 'inappropriate_content')}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <XCircle className="w-5 h-5" />
                      Reject
                    </button>
                  </div>
                )}

                {video.status === 'approved' && (
                  <div className="flex items-center justify-center gap-2 py-3 bg-green-50 text-green-700 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    Approved
                  </div>
                )}

                {video.status === 'rejected' && (
                  <div className="flex items-center justify-center gap-2 py-3 bg-red-50 text-red-700 rounded-lg">
                    <XCircle className="w-5 h-5" />
                    Rejected
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
