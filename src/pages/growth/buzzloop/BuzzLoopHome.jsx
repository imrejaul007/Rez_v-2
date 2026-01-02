import React, { useState } from 'react';
import {
  Play, Heart, MessageCircle, Share2, Bookmark, MoreVertical,
  Music, TrendingUp, Sparkles, User, Search, Plus
} from 'lucide-react';

// BuzzLoop Home: Short Video Feed (TikTok/Reels Clone)
// Backend API: GET /api/growth/buzzloop/feed
// Backend API: POST /api/growth/buzzloop/like
// Backend API: POST /api/growth/buzzloop/share

const BuzzLoopHome = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      id: 1,
      creator: '@foodlover',
      avatar: '👨‍🍳',
      title: 'Amazing street food find!',
      views: '125K',
      likes: '12.5K',
      comments: '234',
      shares: '89',
      music: 'Trending Sound 1',
      isLiked: false,
      isBookmarked: false,
      hashtags: ['#food', '#viral', '#trending']
    },
    {
      id: 2,
      creator: '@techguru',
      avatar: '👨‍💻',
      title: 'Latest gadget review',
      views: '89K',
      likes: '8.9K',
      comments: '156',
      shares: '45',
      music: 'Original Audio',
      isLiked: true,
      isBookmarked: false,
      hashtags: ['#tech', '#review']
    },
    {
      id: 3,
      creator: '@fashionista',
      avatar: '👗',
      title: 'OOTD inspiration',
      views: '200K',
      likes: '20K',
      comments: '567',
      shares: '123',
      music: 'Trending Sound 2',
      isLiked: false,
      isBookmarked: true,
      hashtags: ['#fashion', '#ootd', '#style']
    }
  ];

  const video = videos[currentVideo];

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      {/* Video Container (Placeholder) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center text-white">
          <Play className="w-24 h-24 mx-auto mb-4 opacity-50" />
          <p className="text-lg font-medium opacity-75">Video Player</p>
          <p className="text-sm opacity-50">Swipe up for next video</p>
        </div>
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/60 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button className="text-white font-bold text-lg border-b-2 border-white pb-1">
              For You
            </button>
            <button className="text-white/60 font-bold text-lg">
              Following
            </button>
          </div>
          <button>
            <Search className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Right Sidebar Actions */}
      <div className="absolute right-2 bottom-24 z-10 flex flex-col gap-4">
        {/* Creator Avatar */}
        <div className="relative">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl border-2 border-white">
            {video.avatar}
          </div>
          <button className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
            <Plus className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Like Button */}
        <button className="flex flex-col items-center gap-1">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            video.isLiked ? 'bg-red-500' : 'bg-white/20 backdrop-blur'
          }`}>
            <Heart className={`w-7 h-7 ${video.isLiked ? 'text-white fill-white' : 'text-white'}`} />
          </div>
          <span className="text-white text-xs font-bold">{video.likes}</span>
        </button>

        {/* Comment Button */}
        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          <span className="text-white text-xs font-bold">{video.comments}</span>
        </button>

        {/* Bookmark Button */}
        <button className="flex flex-col items-center gap-1">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            video.isBookmarked ? 'bg-yellow-500' : 'bg-white/20 backdrop-blur'
          }`}>
            <Bookmark className={`w-6 h-6 ${video.isBookmarked ? 'text-white fill-white' : 'text-white'}`} />
          </div>
        </button>

        {/* Share Button */}
        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <Share2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-xs font-bold">{video.shares}</span>
        </button>

        {/* More Options */}
        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <MoreVertical className="w-6 h-6 text-white" />
          </div>
        </button>

        {/* Spinning Music Disc */}
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
            <Music className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-20 z-10 bg-gradient-to-t from-black/80 to-transparent p-4 pb-24">
        {/* Creator Info */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white font-bold">{video.creator}</span>
          <button className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
            Follow
          </button>
        </div>

        {/* Video Title */}
        <p className="text-white text-sm mb-2">{video.title}</p>

        {/* Hashtags */}
        <div className="flex gap-2 mb-2">
          {video.hashtags.map((tag, idx) => (
            <span key={idx} className="text-white text-sm font-bold">
              {tag}
            </span>
          ))}
        </div>

        {/* Music */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-3 py-1 inline-flex">
          <Music className="w-4 h-4 text-white" />
          <span className="text-white text-xs">{video.music}</span>
        </div>

        {/* Views Count */}
        <div className="flex items-center gap-2 mt-2">
          <TrendingUp className="w-4 h-4 text-white" />
          <span className="text-white text-xs">{video.views} views</span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-black border-t border-gray-800">
        <div className="flex items-center justify-around py-3">
          <button className="flex flex-col items-center gap-1">
            <Play className="w-6 h-6 text-white" />
            <span className="text-white text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Sparkles className="w-6 h-6 text-gray-400" />
            <span className="text-gray-400 text-xs">Discover</span>
          </button>
          <button className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center -mt-6">
            <Plus className="w-8 h-8 text-white" />
          </button>
          <button className="flex flex-col items-center gap-1">
            <MessageCircle className="w-6 h-6 text-gray-400" />
            <span className="text-gray-400 text-xs">Inbox</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <User className="w-6 h-6 text-gray-400" />
            <span className="text-gray-400 text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuzzLoopHome;
