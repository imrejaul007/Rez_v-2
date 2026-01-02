import React, { useState } from 'react';
import {
  User, Heart, MessageCircle, Share2, Grid, Bookmark,
  Settings, MoreVertical, UserPlus, Play, Lock, Eye
} from 'lucide-react';

// BuzzLoop Profile: User Profile & Videos
// Backend API: GET /api/growth/buzzloop/profile/:userId
// Backend API: GET /api/growth/buzzloop/profile/:userId/videos
// Backend API: POST /api/growth/buzzloop/follow/:userId

const BuzzLoopProfile = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const profile = {
    username: '@creativepro',
    name: 'Creative Pro',
    avatar: '🎨',
    bio: 'Content creator | Designer | Tech enthusiast\n📍 Bangalore, India',
    isVerified: true,
    isFollowing: false,
    stats: {
      followers: '125.5K',
      following: '892',
      likes: '2.5M'
    }
  };

  const myVideos = [
    { id: 1, thumbnail: '🎨', views: '125K', likes: '12.5K', isPrivate: false },
    { id: 2, thumbnail: '💻', views: '89K', likes: '8.9K', isPrivate: false },
    { id: 3, thumbnail: '📸', views: '200K', likes: '20K', isPrivate: false },
    { id: 4, thumbnail: '🎬', views: '156K', likes: '15.6K', isPrivate: false },
    { id: 5, thumbnail: '✨', views: '95K', likes: '9.5K', isPrivate: false },
    { id: 6, thumbnail: '🚀', views: '180K', likes: '18K', isPrivate: false }
  ];

  const likedVideos = [
    { id: 1, thumbnail: '🍕', creator: '@foodlover', views: '250K' },
    { id: 2, thumbnail: '💃', creator: '@dancer', views: '180K' },
    { id: 3, thumbnail: '😂', creator: '@comedian', views: '150K' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-800">{profile.username}</h1>
          <div className="flex gap-2">
            <button>
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
            <button>
              <MoreVertical className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center">
          {/* Avatar */}
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-3 border-4 border-white shadow-lg">
            {profile.avatar}
          </div>

          {/* Name & Verification */}
          <div className="flex items-center justify-center gap-2 mb-1">
            <h2 className="font-bold text-gray-800 text-lg">{profile.name}</h2>
            {profile.isVerified && (
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-600 whitespace-pre-line mb-4">
            {profile.bio}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="text-center">
              <p className="font-bold text-gray-800 text-lg">{profile.stats.following}</p>
              <p className="text-xs text-gray-500">Following</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-800 text-lg">{profile.stats.followers}</p>
              <p className="text-xs text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-800 text-lg">{profile.stats.likes}</p>
              <p className="text-xs text-gray-500">Likes</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {profile.isFollowing ? (
              <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-medium">
                Following
              </button>
            ) : (
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2">
                <UserPlus className="w-5 h-5" />
                Follow
              </button>
            )}
            <button className="flex-1 border border-gray-300 text-gray-800 py-2 rounded-lg font-medium flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Message
            </button>
            <button className="w-10 border border-gray-300 rounded-lg flex items-center justify-center">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-t border-b border-gray-200 sticky top-0 z-10">
        <div className="flex">
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex-1 py-3 flex items-center justify-center gap-2 ${
              activeTab === 'videos'
                ? 'border-b-2 border-purple-600'
                : ''
            }`}
          >
            <Grid className={`w-5 h-5 ${activeTab === 'videos' ? 'text-purple-600' : 'text-gray-400'}`} />
            <span className={`font-medium ${activeTab === 'videos' ? 'text-purple-600' : 'text-gray-600'}`}>
              Videos
            </span>
          </button>
          <button
            onClick={() => setActiveTab('liked')}
            className={`flex-1 py-3 flex items-center justify-center gap-2 ${
              activeTab === 'liked'
                ? 'border-b-2 border-purple-600'
                : ''
            }`}
          >
            <Heart className={`w-5 h-5 ${activeTab === 'liked' ? 'text-purple-600' : 'text-gray-400'}`} />
            <span className={`font-medium ${activeTab === 'liked' ? 'text-purple-600' : 'text-gray-600'}`}>
              Liked
            </span>
          </button>
        </div>
      </div>

      {/* Videos Grid */}
      {activeTab === 'videos' && (
        <div className="p-2">
          <div className="grid grid-cols-3 gap-1">
            {myVideos.map((video) => (
              <div key={video.id} className="relative aspect-[9/16] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-4xl">{video.thumbnail}</div>

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <div className="flex items-center gap-2 text-white text-xs">
                    <span className="flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      {video.views}
                    </span>
                  </div>
                </div>

                {/* Private Badge */}
                {video.isPrivate && (
                  <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1">
                    <Lock className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Empty State */}
          {myVideos.length === 0 && (
            <div className="text-center py-12">
              <Grid className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">No videos yet</p>
              <p className="text-sm text-gray-400 mt-1">Create your first video!</p>
            </div>
          )}
        </div>
      )}

      {/* Liked Videos */}
      {activeTab === 'liked' && (
        <div className="p-2">
          <div className="grid grid-cols-3 gap-1">
            {likedVideos.map((video) => (
              <div key={video.id} className="relative aspect-[9/16] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-4xl">{video.thumbnail}</div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <p className="text-white text-xs truncate">{video.creator}</p>
                  <div className="flex items-center gap-1 text-white text-xs">
                    <Eye className="w-3 h-3" />
                    {video.views}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuzzLoopProfile;
