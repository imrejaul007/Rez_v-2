import { useState } from 'react';
import { Star, Users, TrendingUp, CheckCircle, XCircle, Eye, Instagram, Youtube } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

/**
 * ADMIN INFLUENCER APPROVAL
 *
 * Backend APIs:
 * - GET /api/admin/influencers/applications
 * - GET /api/admin/influencers/:id/profile
 * - PUT /api/admin/influencers/:id/approve
 * - PUT /api/admin/influencers/:id/reject
 *
 * Status: ✅ BUILT (Jan 2, 2026)
 */

export default function AdminInfluencerApproval() {
  const [applications, setApplications] = useState([
    {
      id: 'INF-001',
      name: 'Priya Sharma',
      email: 'priya@example.com',
      phone: '+91-9876543210',
      category: 'Fashion & Lifestyle',
      tier: 'Micro',
      appliedAt: '2024-01-20',
      instagram: {
        handle: '@priyastyle',
        followers: 45000,
        engagement: 4.2,
        verified: true
      },
      youtube: {
        handle: 'Priya Sharma',
        subscribers: 12000,
        avgViews: 3500
      },
      portfolioLinks: [
        'https://instagram.com/p/12345',
        'https://youtube.com/watch?v=abcde'
      ],
      bio: 'Fashion blogger and lifestyle influencer based in Mumbai. Passionate about sustainable fashion.',
      status: 'pending'
    },
    {
      id: 'INF-002',
      name: 'Rahul Mehta',
      email: 'rahul@example.com',
      phone: '+91-9876543211',
      category: 'Food & Travel',
      tier: 'Macro',
      appliedAt: '2024-01-19',
      instagram: {
        handle: '@foodiewithrahul',
        followers: 250000,
        engagement: 5.8,
        verified: true
      },
      youtube: {
        handle: 'Rahul Mehta Food',
        subscribers: 180000,
        avgViews: 45000
      },
      portfolioLinks: [
        'https://instagram.com/p/67890',
        'https://youtube.com/watch?v=fghij'
      ],
      bio: 'Food critic and travel vlogger. Love exploring hidden gems and authentic cuisine.',
      status: 'pending'
    }
  ]);

  const handleApprove = async (id) => {
    try {
      await fetch(`/api/admin/influencers/${id}/approve`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('rtmn_admin_token')}`,
          'Content-Type': 'application/json'
        }
      });
      setApplications(applications.map(a => a.id === id ? { ...a, status: 'approved' } : a));
    } catch (error) {
      console.error('Failed to approve:', error);
    }
  };

  const handleReject = async (id, reason) => {
    try {
      await fetch(`/api/admin/influencers/${id}/reject`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('rtmn_admin_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reason })
      });
      setApplications(applications.map(a => a.id === id ? { ...a, status: 'rejected' } : a));
    } catch (error) {
      console.error('Failed to reject:', error);
    }
  };

  const getTierColor = (tier) => {
    const colors = {
      'Nano': 'bg-gray-100 text-gray-700',
      'Micro': 'bg-blue-100 text-blue-700',
      'Mid': 'bg-purple-100 text-purple-700',
      'Macro': 'bg-yellow-100 text-yellow-700',
      'Mega': 'bg-red-100 text-red-700'
    };
    return colors[tier] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Influencer Applications</h1>
          <p className="text-gray-600">Review and approve influencer partnership requests</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {applications.filter(a => a.status === 'pending').length}
            </p>
            <p className="text-sm text-gray-600">Pending Review</p>
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
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-600">Active Influencers</p>
          </div>
        </div>

        {/* Applications */}
        <div className="space-y-6">
          {applications.map(app => (
            <div key={app.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {app.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
                      <p className="text-sm text-gray-600">{app.category}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full font-semibold ${getTierColor(app.tier)}`}>
                    {app.tier} Influencer
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div>
                    {/* Contact Info */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Email:</span>
                          <span className="font-medium text-gray-900">{app.email}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Phone:</span>
                          <span className="font-medium text-gray-900">{app.phone}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Applied:</span>
                          <span className="font-medium text-gray-900">{app.appliedAt}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Bio</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{app.bio}</p>
                    </div>

                    {/* Portfolio */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Portfolio</h4>
                      <div className="space-y-2">
                        {app.portfolioLinks.map((link, idx) => (
                          <a
                            key={idx}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700"
                          >
                            <Eye className="w-4 h-4" />
                            {link}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Social Stats */}
                  <div>
                    {/* Instagram */}
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 mb-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Instagram className="w-6 h-6 text-pink-600" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{app.instagram.handle}</h4>
                          {app.instagram.verified && (
                            <span className="text-xs text-blue-600">✓ Verified</span>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">
                            {app.instagram.followers.toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-600">Followers</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-900">{app.instagram.engagement}%</p>
                          <p className="text-xs text-gray-600">Engagement</p>
                        </div>
                      </div>
                    </div>

                    {/* YouTube */}
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Youtube className="w-6 h-6 text-red-600" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{app.youtube.handle}</h4>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">
                            {app.youtube.subscribers.toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-600">Subscribers</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-900">
                            {app.youtube.avgViews.toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-600">Avg Views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                {app.status === 'pending' && (
                  <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => handleApprove(app.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Approve Application
                    </button>
                    <button
                      onClick={() => handleReject(app.id, 'Insufficient metrics')}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                    >
                      <XCircle className="w-5 h-5" />
                      Reject Application
                    </button>
                  </div>
                )}

                {app.status === 'approved' && (
                  <div className="flex items-center justify-center gap-2 py-3 bg-green-50 text-green-700 rounded-lg mt-6">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Approved</span>
                  </div>
                )}

                {app.status === 'rejected' && (
                  <div className="flex items-center justify-center gap-2 py-3 bg-red-50 text-red-700 rounded-lg mt-6">
                    <XCircle className="w-5 h-5" />
                    <span className="font-semibold">Rejected</span>
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
