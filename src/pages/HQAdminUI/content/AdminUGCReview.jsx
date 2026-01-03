import { useState } from 'react';
import { Video, Image, ThumbsUp, Eye, CheckCircle, XCircle, Star, TrendingUp, Award } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

/**
 * ADMIN UGC REVIEW
 *
 * Backend APIs:
 * - GET /api/admin/ugc/campaigns
 * - GET /api/admin/ugc/:campaignId/submissions
 * - PUT /api/admin/ugc/:submissionId/approve
 * - PUT /api/admin/ugc/:submissionId/reject
 * - POST /api/admin/ugc/:submissionId/feature
 *
 * Status: ✅ BUILT (Jan 2, 2026)
 */

export default function AdminUGCReview() {
  const [activeCampaign, setActiveCampaign] = useState('all');

  const [campaigns, setCampaigns] = useState([
    {
      id: 'UGC-001',
      name: 'Summer Fashion Challenge',
      brand: 'Fashion Forward',
      startDate: '2024-01-15',
      endDate: '2024-01-31',
      totalSubmissions: 245,
      pending: 45,
      approved: 180,
      rejected: 20,
      featured: 12,
      totalCoins: 245000
    },
    {
      id: 'UGC-002',
      name: 'Foodie Adventure',
      brand: 'Restaurant Group',
      startDate: '2024-01-10',
      endDate: '2024-01-25',
      totalSubmissions: 189,
      pending: 28,
      approved: 145,
      rejected: 16,
      featured: 8,
      totalCoins: 189000
    }
  ]);

  const [submissions, setSubmissions] = useState([
    {
      id: 'SUB-001',
      campaign: 'Summer Fashion Challenge',
      campaignId: 'UGC-001',
      user: 'Priya Sharma',
      userId: 'USR-123',
      userTier: 'Gold',
      type: 'video',
      thumbnail: 'https://via.placeholder.com/400x300',
      caption: 'My summer OOTD! Loving these colors 🌸',
      hashtags: ['#SummerFashion', '#OOTD', '#FashionForward'],
      submittedAt: '2024-01-20 14:30',
      views: 1245,
      likes: 234,
      shares: 45,
      coinsEarned: 1000,
      qualityScore: 92,
      status: 'pending'
    },
    {
      id: 'SUB-002',
      campaign: 'Foodie Adventure',
      campaignId: 'UGC-002',
      user: 'Rahul Mehta',
      userId: 'USR-456',
      userTier: 'Platinum',
      type: 'image',
      thumbnail: 'https://via.placeholder.com/400x400',
      caption: 'Best pizza in town! 🍕',
      hashtags: ['#FoodieAdventure', '#PizzaLover'],
      submittedAt: '2024-01-20 12:15',
      views: 892,
      likes: 156,
      shares: 23,
      coinsEarned: 1000,
      qualityScore: 88,
      status: 'pending'
    },
    {
      id: 'SUB-003',
      campaign: 'Summer Fashion Challenge',
      campaignId: 'UGC-001',
      user: 'Sneha Patel',
      userId: 'USR-789',
      userTier: 'Silver',
      type: 'video',
      thumbnail: 'https://via.placeholder.com/400x300',
      caption: 'Beach vibes ☀️',
      hashtags: ['#SummerFashion', '#BeachStyle'],
      submittedAt: '2024-01-19 18:45',
      views: 2341,
      likes: 445,
      shares: 89,
      coinsEarned: 1000,
      qualityScore: 95,
      status: 'pending',
      featured: false
    }
  ]);

  const handleApprove = async (id) => {
    try {
      await fetch(`/api/admin/ugc/${id}/approve`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('rtmn_admin_token')}`,
          'Content-Type': 'application/json'
        }
      });
      setSubmissions(submissions.map(s => s.id === id ? { ...s, status: 'approved' } : s));
    } catch (error) {
      console.error('Failed to approve:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await fetch(`/api/admin/ugc/${id}/reject`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('rtmn_admin_token')}`,
          'Content-Type': 'application/json'
        }
      });
      setSubmissions(submissions.map(s => s.id === id ? { ...s, status: 'rejected' } : s));
    } catch (error) {
      console.error('Failed to reject:', error);
    }
  };

  const handleFeature = async (id) => {
    try {
      await fetch(`/api/admin/ugc/${id}/feature`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('rtmn_admin_token')}`,
          'Content-Type': 'application/json'
        }
      });
      setSubmissions(submissions.map(s => s.id === id ? { ...s, featured: true } : s));
    } catch (error) {
      console.error('Failed to feature:', error);
    }
  };

  const filteredSubmissions = activeCampaign === 'all'
    ? submissions
    : submissions.filter(s => s.campaignId === activeCampaign);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">UGC Campaign Review</h1>
          <p className="text-gray-600">Review and manage user-generated content submissions</p>
        </div>

        {/* Campaign Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {campaigns.map(campaign => (
            <div
              key={campaign.id}
              className={`bg-white rounded-xl shadow-sm border-2 p-6 cursor-pointer transition-all ${
                activeCampaign === campaign.id
                  ? 'border-purple-500'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
              onClick={() => setActiveCampaign(campaign.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{campaign.name}</h3>
                  <p className="text-sm text-gray-600">{campaign.brand}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {campaign.startDate} - {campaign.endDate}
                  </p>
                </div>
                <Award className="w-8 h-8 text-purple-500" />
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{campaign.totalSubmissions}</p>
                  <p className="text-xs text-gray-600">Total</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600">{campaign.pending}</p>
                  <p className="text-xs text-gray-600">Pending</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{campaign.approved}</p>
                  <p className="text-xs text-gray-600">Approved</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">{campaign.rejected}</p>
                  <p className="text-xs text-gray-600">Rejected</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-600">{campaign.featured}</p>
                  <p className="text-xs text-gray-600">Featured</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">Total Coins Distributed</p>
                <p className="text-xl font-bold text-purple-600">{campaign.totalCoins.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Button */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveCampaign('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeCampaign === 'all'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Campaigns
          </button>
        </div>

        {/* Submissions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredSubmissions.map(submission => (
            <div key={submission.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Media Preview */}
              <div className="relative aspect-video bg-gray-100">
                <img
                  src={submission.thumbnail}
                  alt={submission.caption}
                  className="w-full h-full object-cover"
                />
                {submission.type === 'video' && (
                  <div className="absolute top-3 left-3">
                    <Video className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                )}
                {submission.featured && (
                  <div className="absolute top-3 right-3">
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                {/* User Info */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {submission.user.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{submission.user}</p>
                    <p className="text-xs text-gray-500">{submission.userTier}</p>
                  </div>
                </div>

                {/* Caption */}
                <p className="text-gray-900 text-sm mb-2">{submission.caption}</p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {submission.hashtags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-3 py-3 border-y border-gray-200">
                  <div className="text-center">
                    <Eye className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-gray-900">{submission.views}</p>
                  </div>
                  <div className="text-center">
                    <ThumbsUp className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-gray-900">{submission.likes}</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-gray-900">{submission.shares}</p>
                  </div>
                </div>

                {/* Quality Score */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-600">Quality Score</span>
                  <span className={`text-lg font-bold ${
                    submission.qualityScore >= 90 ? 'text-green-600' :
                    submission.qualityScore >= 75 ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {submission.qualityScore}/100
                  </span>
                </div>

                {/* Coins */}
                <div className="bg-purple-50 rounded-lg p-2 mb-3">
                  <p className="text-xs text-center text-purple-900">
                    Coins Earned: <span className="font-bold">{submission.coinsEarned}</span>
                  </p>
                </div>

                {/* Actions */}
                {submission.status === 'pending' && (
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(submission.id)}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(submission.id)}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                      >
                        <XCircle className="w-4 h-4" />
                        Reject
                      </button>
                    </div>
                    {submission.qualityScore >= 90 && (
                      <button
                        onClick={() => handleFeature(submission.id)}
                        className="w-full flex items-center justify-center gap-1 px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm"
                      >
                        <Star className="w-4 h-4" />
                        Feature Content
                      </button>
                    )}
                  </div>
                )}

                {submission.status === 'approved' && (
                  <div className="flex items-center justify-center gap-2 py-2 bg-green-50 text-green-700 rounded-lg text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Approved
                  </div>
                )}

                {submission.status === 'rejected' && (
                  <div className="flex items-center justify-center gap-2 py-2 bg-red-50 text-red-700 rounded-lg text-sm">
                    <XCircle className="w-4 h-4" />
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
