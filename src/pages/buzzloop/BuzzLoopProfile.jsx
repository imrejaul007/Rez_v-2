import React, { useState } from 'react';
import {
  Settings, Share2, Grid, Bookmark, Heart, Award, Star,
  MapPin, Calendar, Link2, ChevronRight, Users, TrendingUp,
  Coins, Gift, CheckCircle, Edit2, Camera
} from 'lucide-react';

// BuzzLoop Profile: Creator Profile with Stats
// Backend API Required: GET /api/buzzloop/profile/:userId
// Backend API Required: GET /api/buzzloop/profile/:userId/posts
// Backend API Required: GET /api/buzzloop/profile/:userId/stats

const BuzzLoopProfile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const profile = {
    name: "Priya Sharma",
    handle: "@priyafoodie",
    bio: "Food explorer | Savings enthusiast | Sharing the best deals in town 🍕🪙",
    avatar: "👩",
    verified: true,
    followers: 12500,
    following: 234,
    posts: 156,
    location: "Bangalore",
    joinedDate: "January 2024",
    website: "priyafoodie.com",
    tier: "Gold Creator",
    totalCoinsEarned: 15680,
    totalSavingsShared: 125000,
    merchantsReviewed: 89
  };

  const stats = {
    weeklyViews: 45200,
    weeklyGrowth: "+12%",
    engagementRate: "8.5%",
    avgLikes: 342,
    topCategory: "Food & Dining"
  };

  const achievements = [
    { title: "Top Foodie", icon: "🍕", description: "50+ food reviews", earned: true },
    { title: "Coin Master", icon: "🪙", description: "10K+ coins earned", earned: true },
    { title: "Trendsetter", icon: "🔥", description: "5 trending posts", earned: true },
    { title: "Helper", icon: "🤝", description: "Helped 1000+ save", earned: true },
    { title: "Explorer", icon: "🗺️", description: "50+ new discoveries", earned: false },
    { title: "Influencer", icon: "⭐", description: "50K followers", earned: false }
  ];

  const posts = [
    { id: 1, type: 'image', thumbnail: "🍝", likes: 456, comments: 32 },
    { id: 2, type: 'video', thumbnail: "📱", likes: 1234, comments: 89, duration: "1:45" },
    { id: 3, type: 'image', thumbnail: "☕", likes: 678, comments: 45 },
    { id: 4, type: 'image', thumbnail: "🍰", likes: 890, comments: 67 },
    { id: 5, type: 'video', thumbnail: "💅", likes: 567, comments: 34, duration: "2:30" },
    { id: 6, type: 'image', thumbnail: "🍕", likes: 1023, comments: 78 },
    { id: 7, type: 'image', thumbnail: "🧘", likes: 432, comments: 23 },
    { id: 8, type: 'image', thumbnail: "👗", likes: 765, comments: 56 },
    { id: 9, type: 'video', thumbnail: "🎮", likes: 2345, comments: 156, duration: "3:12" }
  ];

  const savedPosts = posts.slice(0, 6);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-500 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Profile</h1>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Share2 className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 -mt-2">
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full flex items-center justify-center text-4xl">
                {profile.avatar}
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </button>
              {profile.verified && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
              </div>
              <p className="text-gray-500">{profile.handle}</p>
              <span className="inline-block mt-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full">
                {profile.tier}
              </span>
            </div>
            <button className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-4 text-gray-700">{profile.bio}</p>

          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {profile.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Joined {profile.joinedDate}
            </span>
          </div>
          {profile.website && (
            <a href="#" className="flex items-center gap-1 mt-2 text-blue-600 text-sm">
              <Link2 className="w-4 h-4" /> {profile.website}
            </a>
          )}

          {/* Stats Row */}
          <div className="flex justify-around mt-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <p className="text-xl font-bold text-gray-900">{profile.posts}</p>
              <p className="text-xs text-gray-500">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-900">{(profile.followers / 1000).toFixed(1)}K</p>
              <p className="text-xs text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-900">{profile.following}</p>
              <p className="text-xs text-gray-500">Following</p>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Stats */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl p-4">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-pink-500" />
            Creator Stats
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-gray-900">{(profile.totalCoinsEarned / 1000).toFixed(1)}K</p>
              <p className="text-xs text-gray-500">Coins Earned</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-gray-900">₹{(profile.totalSavingsShared / 1000).toFixed(0)}K</p>
              <p className="text-xs text-gray-500">Savings Shared</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-gray-900">{profile.merchantsReviewed}</p>
              <p className="text-xs text-gray-500">Reviews</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-pink-100">
            <div className="text-sm">
              <span className="text-gray-600">Weekly views: </span>
              <span className="font-semibold text-gray-900">{(stats.weeklyViews / 1000).toFixed(1)}K</span>
              <span className="text-green-600 ml-1">{stats.weeklyGrowth}</span>
            </div>
            <button className="text-pink-600 text-sm font-medium">View Insights →</button>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            Achievements
          </h3>
          <button className="text-pink-600 text-sm">See All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 w-24 text-center p-3 rounded-xl ${
                achievement.earned ? 'bg-yellow-50' : 'bg-gray-50 opacity-60'
              }`}
            >
              <div className="text-3xl mb-1">{achievement.icon}</div>
              <p className="text-xs font-medium text-gray-800">{achievement.title}</p>
              {achievement.earned && (
                <CheckCircle className="w-4 h-4 text-green-500 mx-auto mt-1" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content Tabs */}
      <div className="mt-4 border-t border-gray-100">
        <div className="flex">
          {[
            { id: 'posts', icon: Grid, label: 'Posts' },
            { id: 'saved', icon: Bookmark, label: 'Saved' },
            { id: 'liked', icon: Heart, label: 'Liked' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 flex items-center justify-center gap-2 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-400'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="text-sm">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-0.5">
          {(activeTab === 'posts' ? posts : savedPosts).map((post) => (
            <div key={post.id} className="relative aspect-square bg-gray-100 flex items-center justify-center text-4xl">
              {post.thumbnail}
              {post.type === 'video' && (
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                  {post.duration}
                </div>
              )}
              <div className="absolute bottom-2 left-2 flex items-center gap-2 text-white text-xs">
                <span className="flex items-center gap-0.5 bg-black/50 px-1.5 py-0.5 rounded">
                  <Heart className="w-3 h-3" /> {post.likes}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuzzLoopProfile;
