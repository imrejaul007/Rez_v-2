import React, { useState } from 'react';
import {
  TrendingUp, Flame, Hash, Music, Play, Eye,
  Heart, ChevronRight, Clock, Award
} from 'lucide-react';

// BuzzLoop Trending: Trending Videos & Hashtags
// Backend API: GET /api/growth/buzzloop/trending
// Backend API: GET /api/growth/buzzloop/trending/hashtags
// Backend API: GET /api/growth/buzzloop/trending/sounds

const BuzzLoopTrending = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const trendingVideos = [
    { id: 1, thumbnail: '🍕', title: 'Amazing food hack!', creator: '@foodlover', views: '2.5M', likes: '250K', trend: '+125%' },
    { id: 2, thumbnail: '💃', title: 'Viral dance challenge', creator: '@dancer', views: '1.8M', likes: '180K', trend: '+98%' },
    { id: 3, thumbnail: '😂', title: 'Funniest moment ever', creator: '@comedian', views: '1.5M', likes: '150K', trend: '+85%' }
  ];

  const trendingHashtags = [
    { tag: '#viral', posts: '12.5M', growth: '+45%', icon: '🔥' },
    { tag: '#food', posts: '8.9M', growth: '+32%', icon: '🍔' },
    { tag: '#dance', posts: '6.7M', growth: '+28%', icon: '💃' },
    { tag: '#comedy', posts: '5.2M', growth: '+22%', icon: '😂' },
    { tag: '#fashion', posts: '4.8M', growth: '+18%', icon: '👗' }
  ];

  const trendingSounds = [
    { id: 1, name: 'Viral Beat 2026', artist: 'DJ Mix', uses: '1.2M', duration: '0:15' },
    { id: 2, name: 'Dance Challenge', artist: 'Popular', uses: '890K', duration: '0:30' },
    { id: 3, name: 'Chill Vibes', artist: 'Lofi', uses: '650K', duration: '0:20' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 pt-6 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-6 h-6 text-white" />
          <h1 className="text-xl font-bold text-white">Trending</h1>
        </div>
        <p className="text-pink-100 text-sm">What's hot right now</p>
      </div>

      {/* Tabs */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-2 flex gap-2 shadow-sm">
          {['videos', 'hashtags', 'sounds'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-lg font-medium text-sm capitalize ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Trending Videos */}
      {activeTab === 'videos' && (
        <div className="px-4 mt-6">
          <div className="space-y-3">
            {trendingVideos.map((video, idx) => (
              <div key={video.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="flex gap-3 p-3">
                  {/* Rank Badge */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    idx === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                    idx === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500' :
                    idx === 2 ? 'bg-gradient-to-br from-amber-600 to-amber-800' :
                    'bg-gray-200'
                  }`}>
                    <span className="text-white font-bold">#{idx + 1}</span>
                  </div>

                  {/* Thumbnail */}
                  <div className="w-20 h-28 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center text-3xl flex-shrink-0 relative">
                    {video.thumbnail}
                    <Play className="absolute w-8 h-8 text-white opacity-75" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 truncate">{video.title}</h3>
                    <p className="text-xs text-gray-500 mb-2">{video.creator}</p>

                    <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {video.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {video.likes}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-orange-500" />
                      <span className="text-xs font-bold text-orange-600">{video.trend} trending</span>
                    </div>
                  </div>

                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trending Hashtags */}
      {activeTab === 'hashtags' && (
        <div className="px-4 mt-6">
          <div className="space-y-3">
            {trendingHashtags.map((hashtag, idx) => (
              <div key={hashtag.tag} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                    idx === 0 ? 'bg-gradient-to-br from-pink-100 to-purple-100' : 'bg-gray-100'
                  }`}>
                    {hashtag.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg">{hashtag.tag}</h3>
                    <p className="text-sm text-gray-600">{hashtag.posts} posts</p>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-1 text-green-600 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-bold">{hashtag.growth}</span>
                    </div>
                    <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trending Sounds */}
      {activeTab === 'sounds' && (
        <div className="px-4 mt-6">
          <div className="space-y-3">
            {trendingSounds.map((sound) => (
              <div key={sound.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center animate-pulse">
                    <Music className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{sound.name}</h3>
                    <p className="text-sm text-gray-600">{sound.artist}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                      <span>{sound.uses} videos</span>
                      <span>•</span>
                      <span>{sound.duration}</span>
                    </div>
                  </div>

                  <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-full font-medium">
                    Use Sound
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuzzLoopTrending;
