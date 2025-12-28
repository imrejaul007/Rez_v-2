import React, { useState } from 'react';
import { Video, Image, FileText, CheckCircle, XCircle, AlertCircle, Eye, ThumbsUp, MessageCircle, Share2, TrendingUp } from 'lucide-react';

const AdminCreatorContent = () => {
  const [activeTab, setActiveTab] = useState('pending');

  // Pending creator content for approval
  const pendingContent = [
    {
      id: 'CONTENT-001',
      creatorName: 'Fashion with Priya',
      creatorId: 'CREATOR-456',
      followers: 125000,
      tier: 'Elite',
      contentType: 'video',
      merchantName: 'The Spice Route Restaurant',
      merchantId: 'MERCHANT-789',
      title: 'Authentic Biryani Experience at The Spice Route',
      description: 'Tried their signature Hyderabadi Biryani and it was absolutely amazing! Must-try for all food lovers.',
      uploadDate: '2025-10-28 18:30:00',
      duration: '2:45',
      thumbnailUrl: '/thumbnails/video-001.jpg',
      videoUrl: '/videos/content-001.mp4',
      aiScore: 94,
      aiAnalysis: {
        contentQuality: 'Excellent - High production value',
        brandAlignment: 'Perfect match - Food & dining content',
        engagement: 'High potential - 45K avg views',
        sentiment: 'Very positive',
        brandMentions: 3,
        productShowcase: true,
        callToAction: true
      },
      estimatedReach: 45000,
      potentialEngagement: 4500,
      sponsoredDeal: {
        commission: 2500,
        type: 'Performance-based',
        terms: '5% of sales from tracked links'
      },
      recommendation: 'approve',
      flags: []
    },
    {
      id: 'CONTENT-002',
      creatorName: 'Tech Guru Raj',
      creatorId: 'CREATOR-234',
      followers: 89000,
      tier: 'Verified',
      contentType: 'image',
      merchantName: 'GadgetZone Electronics',
      merchantId: 'MERCHANT-456',
      title: 'Unboxing the latest smartphone from GadgetZone',
      description: 'Check out this amazing deal I found! #ad #sponsored',
      uploadDate: '2025-10-28 16:45:00',
      imageUrls: ['/images/content-002-1.jpg', '/images/content-002-2.jpg'],
      aiScore: 67,
      aiAnalysis: {
        contentQuality: 'Good - Clear images',
        brandAlignment: 'Moderate - Electronics content',
        engagement: 'Medium potential - 12K avg engagement',
        sentiment: 'Positive',
        brandMentions: 1,
        productShowcase: true,
        callToAction: false
      },
      estimatedReach: 12000,
      potentialEngagement: 1200,
      sponsoredDeal: {
        commission: 1500,
        type: 'Fixed fee',
        terms: 'Flat ₹1500 per post'
      },
      recommendation: 'review',
      flags: ['Insufficient disclosure', 'Missing call-to-action']
    },
    {
      id: 'CONTENT-003',
      creatorName: 'Foodie Mumbai',
      creatorId: 'CREATOR-890',
      followers: 234000,
      tier: 'Elite',
      contentType: 'article',
      merchantName: 'Cafe Mocha Chain',
      merchantId: 'MERCHANT-123',
      title: 'Top 10 Coffee Spots in Mumbai',
      description: 'A comprehensive guide to the best coffee experiences in the city, featuring Cafe Mocha and more.',
      uploadDate: '2025-10-28 12:15:00',
      wordCount: 1200,
      aiScore: 88,
      aiAnalysis: {
        contentQuality: 'Excellent - Well-written',
        brandAlignment: 'Perfect - Food & beverage',
        engagement: 'Very high potential - 67K avg reads',
        sentiment: 'Very positive',
        brandMentions: 5,
        productShowcase: true,
        callToAction: true
      },
      estimatedReach: 67000,
      potentialEngagement: 8000,
      sponsoredDeal: {
        commission: 5000,
        type: 'Performance + Fixed',
        terms: '₹3000 flat + 10% tracked sales'
      },
      recommendation: 'approve',
      flags: []
    },
    {
      id: 'CONTENT-004',
      creatorName: 'Budget Deals Pro',
      creatorId: 'CREATOR-567',
      followers: 45000,
      tier: 'Rising Star',
      contentType: 'video',
      merchantName: 'SuperMart Groceries',
      merchantId: 'MERCHANT-345',
      title: 'Insane discounts at SuperMart!!! Must watch!!!',
      description: 'OMG you won\'t believe these prices!!! Link in bio!!!',
      uploadDate: '2025-10-28 14:20:00',
      duration: '1:15',
      aiScore: 42,
      aiAnalysis: {
        contentQuality: 'Poor - Clickbait style',
        brandAlignment: 'Weak - Generic promotion',
        engagement: 'Low quality - Spam-like',
        sentiment: 'Overly promotional',
        brandMentions: 1,
        productShowcase: false,
        callToAction: true
      },
      estimatedReach: 8000,
      potentialEngagement: 400,
      sponsoredDeal: {
        commission: 500,
        type: 'Fixed fee',
        terms: 'Flat ₹500 per post'
      },
      recommendation: 'reject',
      flags: ['Clickbait title', 'Low quality content', 'Excessive promotional language', 'Poor brand alignment']
    }
  ];

  // Approved content performance
  const approvedContent = [
    {
      id: 'CONTENT-101',
      creatorName: 'Fashion with Priya',
      merchantName: 'Silk Stories Boutique',
      contentType: 'video',
      approvalDate: '2025-10-25',
      publishDate: '2025-10-26',
      performance: {
        views: 78900,
        likes: 8234,
        comments: 456,
        shares: 892,
        clickThroughs: 4567,
        conversions: 234,
        revenue: 117000,
        commission: 11700
      },
      roi: 4.68,
      status: 'active'
    },
    {
      id: 'CONTENT-102',
      creatorName: 'Tech Guru Raj',
      merchantName: 'SmartGadgets Hub',
      contentType: 'article',
      approvalDate: '2025-10-24',
      publishDate: '2025-10-24',
      performance: {
        views: 34500,
        likes: 2341,
        comments: 189,
        shares: 234,
        clickThroughs: 1890,
        conversions: 98,
        revenue: 49000,
        commission: 2450
      },
      roi: 1.63,
      status: 'active'
    }
  ];

  // Content analytics
  const contentAnalytics = {
    totalPending: 4,
    totalApproved: 156,
    totalRejected: 23,
    approvalRate: 87.1,
    avgApprovalTime: '4.2 hours',
    avgAIScore: 72.8,
    topPerformingType: 'Video',
    totalReach: 2340000,
    totalEngagement: 234500,
    totalRevenue: 4560000,
    totalCommission: 456000
  };

  const getScoreColor = (score) => {
    if (score >= 85) return 'text-green-400';
    if (score >= 70) return 'text-blue-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getRecommendationColor = (rec) => {
    switch (rec) {
      case 'approve': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'review': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'reject': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleApprove = (contentId) => {
    console.log('Approving content:', contentId);
    alert(`Content ${contentId} approved! It will be published immediately.`);
  };

  const handleReject = (contentId) => {
    console.log('Rejecting content:', contentId);
    alert(`Content ${contentId} rejected. Creator will be notified with improvement suggestions.`);
  };

  const handleReview = (contentId) => {
    console.log('Requesting review for:', contentId);
    alert(`Content ${contentId} flagged for manual review. Creator will be asked to make improvements.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Video className="w-10 h-10 text-purple-400" />
            Creator Content Moderation
          </h1>
          <p className="text-gray-400">Review & approve influencer content before publishing</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="w-8 h-8 text-yellow-400" />
              <span className="text-xs text-gray-400">Pending Review</span>
            </div>
            <div className="text-3xl font-bold text-white">{contentAnalytics.totalPending}</div>
            <div className="text-sm text-yellow-400">Awaiting approval</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <span className="text-xs text-gray-400">Approval Rate</span>
            </div>
            <div className="text-3xl font-bold text-white">{contentAnalytics.approvalRate}%</div>
            <div className="text-sm text-green-400">{contentAnalytics.totalApproved} approved</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <span className="text-xs text-gray-400">Total Reach</span>
            </div>
            <div className="text-3xl font-bold text-white">{(contentAnalytics.totalReach / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-blue-400">{(contentAnalytics.totalEngagement / 1000).toFixed(0)}K engagement</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Share2 className="w-8 h-8 text-purple-400" />
              <span className="text-xs text-gray-400">Revenue Generated</span>
            </div>
            <div className="text-3xl font-bold text-white">₹{(contentAnalytics.totalRevenue / 100000).toFixed(1)}L</div>
            <div className="text-sm text-purple-400">₹{(contentAnalytics.totalCommission / 1000).toFixed(0)}K commission</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {[
            { id: 'pending', label: 'Pending Approval', icon: AlertCircle },
            { id: 'approved', label: 'Approved Content', icon: CheckCircle },
            { id: 'analytics', label: 'Performance Analytics', icon: TrendingUp }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          {activeTab === 'pending' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Pending Creator Content</h2>
                <div className="text-gray-400 text-sm">Avg approval time: {contentAnalytics.avgApprovalTime}</div>
              </div>

              {pendingContent.map((content) => (
                <div key={content.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        {content.contentType === 'video' && <Video className="w-12 h-12 text-white" />}
                        {content.contentType === 'image' && <Image className="w-12 h-12 text-white" />}
                        {content.contentType === 'article' && <FileText className="w-12 h-12 text-white" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{content.title}</h3>
                        <p className="text-gray-400 text-sm mb-2">{content.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-purple-400">{content.creatorName}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400">{content.followers.toLocaleString()} followers</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-blue-400">{content.merchantName}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">AI Score</div>
                      <div className={`text-4xl font-bold ${getScoreColor(content.aiScore)}`}>
                        {content.aiScore}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-xs">Est. Reach</div>
                      <div className="text-white font-bold">{(content.estimatedReach / 1000).toFixed(0)}K</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-xs">Est. Engagement</div>
                      <div className="text-white font-bold">{(content.potentialEngagement / 1000).toFixed(1)}K</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-xs">Commission</div>
                      <div className="text-green-400 font-bold">₹{content.sponsoredDeal.commission}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-xs">Deal Type</div>
                      <div className="text-white text-xs">{content.sponsoredDeal.type}</div>
                    </div>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                    <div className="text-blue-400 font-semibold mb-2">AI Analysis</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-300">Quality: {content.aiAnalysis.contentQuality}</div>
                      <div className="text-gray-300">Brand Fit: {content.aiAnalysis.brandAlignment}</div>
                      <div className="text-gray-300">Engagement: {content.aiAnalysis.engagement}</div>
                      <div className="text-gray-300">Sentiment: {content.aiAnalysis.sentiment}</div>
                    </div>
                  </div>

                  {content.flags.length > 0 && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                      <div className="text-red-400 font-semibold mb-2">⚠️ Issues Detected:</div>
                      <ul className="space-y-1">
                        {content.flags.map((flag, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">• {flag}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm px-4 py-2 rounded-full border ${getRecommendationColor(content.recommendation)}`}>
                      AI Recommendation: {content.recommendation.toUpperCase()}
                    </span>
                    <span className="text-gray-400 text-sm">Uploaded: {content.uploadDate}</span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleApprove(content.id)}
                      className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Approve & Publish
                    </button>
                    <button
                      onClick={() => handleReview(content.id)}
                      className="flex-1 bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition-all flex items-center justify-center gap-2"
                    >
                      <Eye className="w-5 h-5" />
                      Request Changes
                    </button>
                    <button
                      onClick={() => handleReject(content.id)}
                      className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2"
                    >
                      <XCircle className="w-5 h-5" />
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'approved' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Published Content Performance</h2>

              {approvedContent.map((content) => (
                <div key={content.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{content.creatorName} × {content.merchantName}</h3>
                      <p className="text-gray-400 text-sm">Approved: {content.approvalDate} • Published: {content.publishDate}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">ROI</div>
                      <div className="text-green-400 font-bold text-2xl">{content.performance.roi}x</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <Eye className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-400 text-xs">Views</span>
                      </div>
                      <div className="text-white font-bold text-lg">{content.performance.views.toLocaleString()}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <ThumbsUp className="w-4 h-4 text-green-400" />
                        <span className="text-gray-400 text-xs">Engagement</span>
                      </div>
                      <div className="text-white font-bold text-lg">{(content.performance.likes + content.performance.comments + content.performance.shares).toLocaleString()}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <Share2 className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-400 text-xs">Conversions</span>
                      </div>
                      <div className="text-white font-bold text-lg">{content.performance.conversions}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-400 text-xs">Revenue</span>
                      </div>
                      <div className="text-green-400 font-bold text-lg">₹{(content.performance.revenue / 1000).toFixed(0)}K</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-sm">
                      Commission Paid: <span className="text-white font-semibold">₹{content.performance.commission.toLocaleString()}</span>
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                      {content.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Content Performance Analytics</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Content Breakdown</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Videos:</span>
                      <span className="text-white font-bold">89 (57%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Images:</span>
                      <span className="text-white font-bold">45 (29%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Articles:</span>
                      <span className="text-white font-bold">22 (14%)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Top Performing Type</h3>
                  <div className="text-center">
                    <Video className="w-16 h-16 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">Video</div>
                    <div className="text-gray-400 text-sm">3.2x higher engagement</div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Avg Metrics</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">AI Score:</span>
                      <span className="text-white font-bold">{contentAnalytics.avgAIScore}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Approval Rate:</span>
                      <span className="text-green-400 font-bold">{contentAnalytics.approvalRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Approval Time:</span>
                      <span className="text-white font-bold">{contentAnalytics.avgApprovalTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCreatorContent;
