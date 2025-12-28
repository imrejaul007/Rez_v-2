import { useState } from 'react';
import {
  Heart, CheckCircle, XCircle, Clock, Users, TrendingUp, Award,
  MapPin, Calendar, Image as ImageIcon, Eye, Flag, MessageSquare,
  ThumbsUp, ThumbsDown, Filter, Search, Download, ExternalLink
} from 'lucide-react';

export default function AdminSocialImpactVerification() {
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Mock data - Pending verification activities
  const pendingActivities = [
    {
      id: 'IMPACT-001',
      userId: 'USR-45821',
      userName: 'Priya Sharma',
      userTier: 'Gold',
      activityType: 'Tree Plantation',
      ngoName: 'Green Earth Foundation',
      ngoId: 'NGO-123',
      location: 'Cubbon Park, Bangalore',
      date: '2024-12-27',
      participants: 1,
      trees: 5,
      coinsEarned: 500,
      proofPhotos: [
        { id: 'img1', url: '/api/placeholder/300/300', caption: 'Planting saplings' },
        { id: 'img2', url: '/api/placeholder/300/300', caption: 'Watering plants' }
      ],
      description: 'Participated in tree plantation drive. Planted 5 saplings with the Green Earth team.',
      submittedAt: new Date(Date.now() - 3600000),
      ngoVerified: true,
      aiScore: 92,
      recommendation: 'approve'
    },
    {
      id: 'IMPACT-002',
      userId: 'USR-32145',
      userName: 'Rahul Mehta',
      userTier: 'Silver',
      activityType: 'Beach Cleanup',
      ngoName: 'Ocean Warriors',
      ngoId: 'NGO-456',
      location: 'Marina Beach, Chennai',
      date: '2024-12-26',
      participants: 1,
      wasteCollected: '15 kg',
      coinsEarned: 300,
      proofPhotos: [
        { id: 'img3', url: '/api/placeholder/300/300', caption: 'Collected waste' }
      ],
      description: 'Beach cleanup activity. Collected 15kg of plastic waste.',
      submittedAt: new Date(Date.now() - 7200000),
      ngoVerified: false,
      aiScore: 65,
      recommendation: 'review'
    },
    {
      id: 'IMPACT-003',
      userId: 'USR-67890',
      userName: 'Sneha Patel',
      userTier: 'Platinum',
      activityType: 'Food Donation',
      ngoName: 'Feed the Hungry',
      ngoId: 'NGO-789',
      location: 'Andheri, Mumbai',
      date: '2024-12-28',
      participants: 3,
      mealsProvided: 50,
      coinsEarned: 750,
      proofPhotos: [
        { id: 'img4', url: '/api/placeholder/300/300', caption: 'Distributing meals' },
        { id: 'img5', url: '/api/placeholder/300/300', caption: 'With NGO team' }
      ],
      description: 'Volunteered at food distribution drive. Helped serve 50 meals to underprivileged families.',
      submittedAt: new Date(Date.now() - 1800000),
      ngoVerified: true,
      aiScore: 95,
      recommendation: 'approve'
    }
  ];

  // Mock data - Verified activities
  const verifiedActivities = [
    {
      id: 'IMPACT-004',
      userId: 'USR-11234',
      userName: 'Arjun Kapoor',
      activityType: 'Blood Donation',
      ngoName: 'Red Cross',
      location: 'Delhi',
      date: '2024-12-25',
      coinsEarned: 1000,
      verifiedAt: new Date(Date.now() - 86400000),
      verifiedBy: 'Admin - Priya'
    },
    {
      id: 'IMPACT-005',
      userId: 'USR-22456',
      userName: 'Anjali Singh',
      activityType: 'Old Age Home Visit',
      ngoName: 'Care & Share Foundation',
      location: 'Pune',
      date: '2024-12-24',
      coinsEarned: 400,
      verifiedAt: new Date(Date.now() - 172800000),
      verifiedBy: 'Admin - Rahul'
    }
  ];

  // Mock data - NGO partners
  const ngoPartners = [
    {
      id: 'NGO-123',
      name: 'Green Earth Foundation',
      category: 'Environment',
      verified: true,
      activitiesCompleted: 234,
      participantsImpacted: 1567,
      status: 'active'
    },
    {
      id: 'NGO-456',
      name: 'Ocean Warriors',
      category: 'Environment',
      verified: true,
      activitiesCompleted: 156,
      participantsImpacted: 892,
      status: 'active'
    },
    {
      id: 'NGO-789',
      name: 'Feed the Hungry',
      category: 'Hunger Relief',
      verified: true,
      activitiesCompleted: 412,
      participantsImpacted: 3421,
      status: 'active'
    }
  ];

  // Mock data - Statistics
  const stats = {
    pendingVerification: 18,
    verifiedToday: 12,
    rejectedToday: 2,
    totalImpact: 15678,
    coinsDistributed: 2345678,
    activeNGOs: 34,
    avgVerificationTime: '1.5 hours'
  };

  const handleApprove = (activityId) => {
    console.log('Approving activity:', activityId);
  };

  const handleReject = (activityId, reason) => {
    console.log('Rejecting activity:', activityId, 'Reason:', reason);
  };

  const getActivityIcon = (type) => {
    const icons = {
      'Tree Plantation': '🌳',
      'Beach Cleanup': '🏖️',
      'Food Donation': '🍲',
      'Blood Donation': '🩸',
      'Old Age Home Visit': '👴',
      'Animal Shelter': '🐕',
      'Teaching': '📚'
    };
    return icons[type] || '💚';
  };

  const renderPendingActivities = () => (
    <div className="space-y-6">
      {pendingActivities.map((activity) => (
        <div key={activity.id} className={`bg-white rounded-xl border-2 overflow-hidden ${
          !activity.ngoVerified ? 'border-yellow-200' : 'border-gray-200'
        }`}>
          {/* Alert if NGO not verified */}
          {!activity.ngoVerified && (
            <div className="bg-yellow-50 border-b border-yellow-200 px-6 py-3">
              <div className="flex items-center gap-2 text-yellow-700">
                <Flag className="w-5 h-5" />
                <span className="font-semibold">⚠️ Pending NGO Verification</span>
              </div>
            </div>
          )}

          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {activity.userName.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{activity.userName}</h3>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {activity.userTier}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{getActivityIcon(activity.activityType)}</span>
                    <p className="font-medium text-gray-900">{activity.activityType}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {activity.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(activity.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Activity ID</p>
                <p className="text-sm font-mono font-semibold text-gray-900">{activity.id}</p>
              </div>
            </div>

            {/* NGO Info */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">NGO Partner</p>
                  <p className="font-semibold text-gray-900">{activity.ngoName}</p>
                </div>
                {activity.ngoVerified ? (
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    NGO Verified
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                    Pending NGO Verification
                  </span>
                )}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">AI Score</p>
                <p className={`text-2xl font-bold ${
                  activity.aiScore >= 80 ? 'text-green-600' :
                  activity.aiScore >= 60 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {activity.aiScore}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Participants</p>
                <p className="text-2xl font-bold text-gray-900">{activity.participants}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Impact</p>
                <p className="text-sm font-bold text-gray-900">
                  {activity.trees && `${activity.trees} trees`}
                  {activity.wasteCollected && activity.wasteCollected}
                  {activity.mealsProvided && `${activity.mealsProvided} meals`}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Coins</p>
                <p className="text-2xl font-bold text-purple-600">{activity.coinsEarned}</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-gray-900">{activity.description}</p>
            </div>

            {/* Proof Photos */}
            <div className="mb-6">
              <h5 className="text-sm font-semibold text-gray-900 mb-3">Proof of Participation</h5>
              <div className="flex gap-4">
                {activity.proofPhotos.map((photo) => (
                  <div key={photo.id} className="relative group">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-40 h-40 object-cover rounded-lg border border-gray-200"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{photo.caption}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Recommendation */}
            <div className={`rounded-lg p-4 mb-6 ${
              activity.recommendation === 'approve' ? 'bg-green-50 border border-green-200' :
              'bg-yellow-50 border border-yellow-200'
            }`}>
              <div className="flex items-center gap-2">
                <Award className={`w-5 h-5 ${
                  activity.recommendation === 'approve' ? 'text-green-600' : 'text-yellow-600'
                }`} />
                <span className="font-semibold text-gray-900">
                  AI Recommendation: <span className="capitalize">{activity.recommendation}</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => handleApprove(activity.id)}
                className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <ThumbsUp className="w-5 h-5" />
                Approve & Award Coins
              </button>
              <button
                onClick={() => handleReject(activity.id, 'insufficient_proof')}
                className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <ThumbsDown className="w-5 h-5" />
                Reject
              </button>
              <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Request More Info
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderVerifiedActivities = () => (
    <div className="space-y-4">
      {verifiedActivities.map((activity) => (
        <div key={activity.id} className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{getActivityIcon(activity.activityType)}</span>
                  <h3 className="font-semibold text-gray-900">{activity.activityType}</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    Verified
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {activity.userName} • {activity.ngoName}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{activity.location}</span>
                  <span>•</span>
                  <span>{new Date(activity.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>Verified by: {activity.verifiedBy}</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold text-purple-600 mb-1">+{activity.coinsEarned}</p>
              <p className="text-xs text-gray-500">coins awarded</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderNGOPartners = () => (
    <div className="grid grid-cols-2 gap-6">
      {ngoPartners.map((ngo) => (
        <div key={ngo.id} className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-lg font-semibold text-gray-900">{ngo.name}</h4>
                {ngo.verified && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
              </div>
              <p className="text-sm text-gray-600">{ngo.category}</p>
            </div>
            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
              ngo.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
            }`}>
              {ngo.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Activities</p>
              <p className="text-xl font-bold text-gray-900">{ngo.activitiesCompleted}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Participants</p>
              <p className="text-xl font-bold text-blue-600">{ngo.participantsImpacted}</p>
            </div>
          </div>

          <button className="w-full mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
            View Details
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Social Impact Verification</h1>
              <p className="text-gray-600">Verify and approve community service activities</p>
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
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.pendingVerification}</p>
            <p className="text-sm text-gray-600">Awaiting Verification</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.verifiedToday}</p>
            <p className="text-sm text-gray-600">Verified Today</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.totalImpact.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Impact Activities</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">₹{(stats.coinsDistributed / 1000).toFixed(0)}K</p>
            <p className="text-sm text-gray-600">Coins Distributed</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('pending')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'pending'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Pending Verification ({stats.pendingVerification})
              </div>
            </button>
            <button
              onClick={() => setActiveTab('verified')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'verified'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Verified Activities
              </div>
            </button>
            <button
              onClick={() => setActiveTab('ngos')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'ngos'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                NGO Partners ({stats.activeNGOs})
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'pending' && renderPendingActivities()}
        {activeTab === 'verified' && renderVerifiedActivities()}
        {activeTab === 'ngos' && renderNGOPartners()}
      </div>
    </div>
  );
}
