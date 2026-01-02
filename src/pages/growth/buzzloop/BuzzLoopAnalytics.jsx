import React from 'react';
import { BarChart3, Eye, Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';

// BuzzLoop Analytics: Creator Analytics
// Backend API: GET /api/growth/buzzloop/analytics
// Backend API: GET /api/growth/buzzloop/analytics/videos

const BuzzLoopAnalytics = () => {
  const stats = {
    totalViews: '1.2M',
    totalLikes: '125K',
    totalComments: '12.5K',
    totalShares: '8.9K',
    followers: '45.2K',
    engagement: '12.5%'
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 pt-6 pb-8">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <BarChart3 className="w-6 h-6" />
          Analytics
        </h1>
      </div>

      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <h2 className="font-bold text-gray-800 mb-4">Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <Eye className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-gray-800">{stats.totalViews}</p>
              <p className="text-xs text-gray-600">Total Views</p>
            </div>
            <div className="text-center p-3 bg-red-50 rounded-lg">
              <Heart className="w-6 h-6 text-red-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-gray-800">{stats.totalLikes}</p>
              <p className="text-xs text-gray-600">Total Likes</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <MessageCircle className="w-6 h-6 text-green-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-gray-800">{stats.totalComments}</p>
              <p className="text-xs text-gray-600">Comments</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <Share2 className="w-6 h-6 text-purple-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-gray-800">{stats.totalShares}</p>
              <p className="text-xs text-gray-600">Shares</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-800">Engagement Rate</h3>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-3xl font-bold text-gray-800">{stats.engagement}</p>
          <p className="text-sm text-gray-600 mt-1">Above average</p>
        </div>
      </div>
    </div>
  );
};

export default BuzzLoopAnalytics;
