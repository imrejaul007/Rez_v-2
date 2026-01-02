import React from 'react';
import { Hash, TrendingUp, Play, Eye } from 'lucide-react';

// BuzzLoop Hashtags: Explore Hashtags
// Backend API: GET /api/growth/buzzloop/hashtags/trending
// Backend API: GET /api/growth/buzzloop/hashtags/:tag/videos

const BuzzLoopHashtags = () => {
  const hashtags = [
    { tag: '#viral', posts: '12.5M', views: '2.5B', trending: '+45%', icon: '🔥' },
    { tag: '#food', posts: '8.9M', views: '1.8B', trending: '+32%', icon: '🍔' },
    { tag: '#dance', posts: '6.7M', views: '1.2B', trending: '+28%', icon: '💃' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-6 pb-8">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <Hash className="w-6 h-6" />
          Trending Hashtags
        </h1>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {hashtags.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{item.icon}</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg">{item.tag}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                  <span>{item.posts} posts</span>
                  <span>•</span>
                  <span>{item.views} views</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-green-600 mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-bold">{item.trending}</span>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-4 py-1 rounded-full">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuzzLoopHashtags;
