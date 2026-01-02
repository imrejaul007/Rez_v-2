import React, { useState } from 'react';
import {
  Play, Heart, MessageCircle, Share2, Bookmark,
  TrendingUp, Clock, Eye, ChevronDown, Filter
} from 'lucide-react';

// BuzzLoop Feed: Curated Video Feed
// Backend API: GET /api/growth/buzzloop/feed
// Backend API: GET /api/growth/buzzloop/feed/following
// Backend API: POST /api/growth/buzzloop/video/:id/view

const BuzzLoopFeed = () => {
  const [feedType, setFeedType] = useState('forYou');

  const videos = [
    {
      id: 1,
      thumbnail: '🍕',
      creator: '@foodlover',
      creatorAvatar: '👨‍🍳',
      title: 'Best pizza in town! You have to try this...',
      views: '125K',
      likes: '12.5K',
      comments: 234,
      duration: '0:15',
      isLiked: false,
      category: 'Food'
    },
    {
      id: 2,
      thumbnail: '💻',
      creator: '@techguru',
      creatorAvatar: '👨‍💻',
      title: 'iPhone 15 Pro Max Review - Is it worth it?',
      views: '89K',
      likes: '8.9K',
      comments: 156,
      duration: '0:45',
      isLiked: true,
      category: 'Tech'
    },
    {
      id: 3,
      thumbnail: '👗',
      creator: '@fashionista',
      creatorAvatar: '👩',
      title: 'OOTD - Summer fashion trends 2026',
      views: '200K',
      likes: '20K',
      comments: 567,
      duration: '0:30',
      isLiked: false,
      category: 'Fashion'
    },
    {
      id: 4,
      thumbnail: '🏋️',
      creator: '@fitpro',
      creatorAvatar: '💪',
      title: '10 min home workout - No equipment needed',
      views: '156K',
      likes: '15.6K',
      comments: 289,
      duration: '10:00',
      isLiked: false,
      category: 'Fitness'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-4 pt-6 pb-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">BuzzLoop</h1>
          <Filter className="w-6 h-6 text-gray-600" />
        </div>

        {/* Feed Type Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setFeedType('forYou')}
            className={`flex-1 py-2 rounded-lg font-medium text-sm ${
              feedType === 'forYou'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            For You
          </button>
          <button
            onClick={() => setFeedType('following')}
            className={`flex-1 py-2 rounded-lg font-medium text-sm ${
              feedType === 'following'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Following
          </button>
        </div>
      </div>

      {/* Video Grid */}
      <div className="px-4 mt-4">
        <div className="grid grid-cols-2 gap-3">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Thumbnail */}
              <div className="relative aspect-[9/16] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-6xl">{video.thumbnail}</div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Play className="w-3 h-3" />
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                  {video.category}
                </div>

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-0 hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Video Info */}
              <div className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm">
                    {video.creatorAvatar}
                  </div>
                  <span className="text-xs font-medium text-gray-600">{video.creator}</span>
                </div>

                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">
                  {video.title}
                </h3>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {video.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className={`w-3 h-3 ${video.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                    {video.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    {video.comments}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="px-4 mt-6">
        <button className="w-full bg-white text-gray-700 py-3 rounded-xl font-medium shadow-sm flex items-center justify-center gap-2">
          Load More Videos
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Trending Section */}
      <div className="px-4 mt-6 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-pink-500" />
            Trending Now
          </h2>
          <button className="text-purple-600 text-sm">View All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {videos.slice(0, 3).map((video) => (
            <div key={video.id} className="flex-shrink-0 w-32">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-2">
                <div className="text-4xl">{video.thumbnail}</div>
                <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-1.5 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>
              <p className="text-xs text-gray-600 line-clamp-2">{video.title}</p>
              <p className="text-xs text-gray-400 mt-1">{video.views} views</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuzzLoopFeed;
