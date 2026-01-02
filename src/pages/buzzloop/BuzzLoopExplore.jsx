import React, { useState } from 'react';
import {
  Search, TrendingUp, Flame, Hash, MapPin, Star, Users, Play,
  Heart, MessageCircle, Share2, Bookmark, ChevronRight, Filter,
  Sparkles, Award, Clock
} from 'lucide-react';

// BuzzLoop Explore: Discover Trending Content & Creators
// Backend API: GET /api/buzzloop/explore/trending
// Backend API: GET /api/buzzloop/explore/hashtags
// Backend API: GET /api/buzzloop/explore/creators
// Backend API: GET /api/buzzloop/explore/search

const BuzzLoopExplore = () => {
  const [activeTab, setActiveTab] = useState('foryou');
  const [searchQuery, setSearchQuery] = useState('');

  const trendingHashtags = [
    { id: 1, tag: "#BangaloreEats", posts: "12.5K", trending: true },
    { id: 2, tag: "#WeekendVibes", posts: "8.2K", trending: true },
    { id: 3, tag: "#CafeHopping", posts: "6.8K" },
    { id: 4, tag: "#StreetFood", posts: "5.4K" },
    { id: 5, tag: "#FoodieFinds", posts: "4.9K" }
  ];

  const topCreators = [
    {
      id: 1,
      name: "FoodieRaj",
      avatar: "👨‍🍳",
      followers: "45.2K",
      posts: 234,
      coins: "125K",
      verified: true,
      category: "Food"
    },
    {
      id: 2,
      name: "StyleQueen",
      avatar: "👸",
      followers: "38.7K",
      posts: 189,
      coins: "98K",
      verified: true,
      category: "Fashion"
    },
    {
      id: 3,
      name: "TechGuru",
      avatar: "🤓",
      followers: "29.3K",
      posts: 156,
      coins: "76K",
      verified: false,
      category: "Tech"
    }
  ];

  const trendingPosts = [
    {
      id: 1,
      type: 'review',
      creator: { name: "FoodieRaj", avatar: "👨‍🍳", verified: true },
      merchant: "Pasta Paradise",
      merchantIcon: "🍝",
      content: "Best carbonara in Bangalore! The authentic Italian flavors are unmatched. Must try their tiramisu too!",
      image: true,
      likes: 1234,
      comments: 89,
      shares: 45,
      coins: 150,
      trending: true,
      timestamp: "2h ago"
    },
    {
      id: 2,
      type: 'haul',
      creator: { name: "StyleQueen", avatar: "👸", verified: true },
      merchant: "Fashion Hub",
      merchantIcon: "👗",
      content: "Summer haul from Fashion Hub! Got these amazing pieces all under ₹2000. The BOGO deal is insane!",
      image: true,
      likes: 892,
      comments: 67,
      shares: 34,
      coins: 200,
      timestamp: "4h ago"
    },
    {
      id: 3,
      type: 'tip',
      creator: { name: "BudgetBoss", avatar: "💰", verified: false },
      content: "Pro tip: Order on weekdays between 2-5 PM for extra 10% cashback on most food apps! I saved ₹500 this week alone.",
      likes: 567,
      comments: 45,
      shares: 123,
      coins: 100,
      timestamp: "6h ago"
    }
  ];

  const categories = [
    { id: 'food', name: 'Food', icon: '🍽️', color: 'bg-orange-100' },
    { id: 'fashion', name: 'Fashion', icon: '👗', color: 'bg-pink-100' },
    { id: 'tech', name: 'Tech', icon: '📱', color: 'bg-blue-100' },
    { id: 'wellness', name: 'Wellness', icon: '🧘', color: 'bg-green-100' },
    { id: 'travel', name: 'Travel', icon: '✈️', color: 'bg-purple-100' },
    { id: 'beauty', name: 'Beauty', icon: '💄', color: 'bg-red-100' }
  ];

  const tabs = [
    { id: 'foryou', label: 'For You', icon: Sparkles },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'creators', label: 'Creators', icon: Users },
    { id: 'hashtags', label: 'Hashtags', icon: Hash }
  ];

  const renderForYou = () => (
    <div className="px-4 py-4 space-y-4">
      {/* Categories */}
      <div>
        <h2 className="font-semibold text-gray-800 mb-3">Browse Categories</h2>
        <div className="grid grid-cols-3 gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${cat.color} rounded-xl p-3 text-center`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <p className="text-xs font-medium text-gray-700 mt-1">{cat.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Trending Posts */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">Trending Now</h2>
          <button className="text-pink-600 text-sm flex items-center gap-1">
            See All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {trendingPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl p-4 shadow-sm">
              {/* Creator Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center text-xl">
                  {post.creator.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-gray-800">{post.creator.name}</span>
                    {post.creator.verified && (
                      <span className="text-blue-500 text-xs">✓</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">{post.timestamp}</p>
                </div>
                {post.trending && (
                  <div className="flex items-center gap-1 bg-orange-100 px-2 py-1 rounded-full">
                    <Flame className="w-3 h-3 text-orange-500" />
                    <span className="text-xs text-orange-600 font-medium">Trending</span>
                  </div>
                )}
              </div>

              {/* Merchant Tag */}
              {post.merchant && (
                <div className="flex items-center gap-2 mb-3 bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-lg">{post.merchantIcon}</span>
                  <span className="text-sm text-gray-700">{post.merchant}</span>
                </div>
              )}

              {/* Content */}
              <p className="text-gray-800 text-sm mb-3">{post.content}</p>

              {/* Image Placeholder */}
              {post.image && (
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-3 flex items-center justify-center">
                  <Play className="w-12 h-12 text-gray-400" />
                </div>
              )}

              {/* Engagement */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-gray-500">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500">
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm">{post.shares}</span>
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-600 text-sm font-medium">+{post.coins}🪙</span>
                  <button className="text-gray-400">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTrending = () => (
    <div className="px-4 py-4 space-y-4">
      {/* Trending Hashtags */}
      <div>
        <h2 className="font-semibold text-gray-800 mb-3">Trending Hashtags</h2>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          {trendingHashtags.map((tag, idx) => (
            <div
              key={tag.id}
              className={`flex items-center gap-4 p-4 ${
                idx !== trendingHashtags.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <span className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center text-sm font-bold text-pink-600">
                {idx + 1}
              </span>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{tag.tag}</p>
                <p className="text-sm text-gray-500">{tag.posts} posts</p>
              </div>
              {tag.trending && (
                <TrendingUp className="w-5 h-5 text-green-500" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Hot Topics */}
      <div>
        <h2 className="font-semibold text-gray-800 mb-3">Hot Topics Today</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl p-4 text-white">
            <Flame className="w-6 h-6 mb-2" />
            <h3 className="font-semibold">Weekend Deals</h3>
            <p className="text-sm text-white/80">2.3K posts</p>
          </div>
          <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl p-4 text-white">
            <Star className="w-6 h-6 mb-2" />
            <h3 className="font-semibold">Hidden Gems</h3>
            <p className="text-sm text-white/80">1.8K posts</p>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-xl p-4 text-white">
            <Award className="w-6 h-6 mb-2" />
            <h3 className="font-semibold">Best Reviews</h3>
            <p className="text-sm text-white/80">1.5K posts</p>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl p-4 text-white">
            <Clock className="w-6 h-6 mb-2" />
            <h3 className="font-semibold">Flash Sales</h3>
            <p className="text-sm text-white/80">945 posts</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCreators = () => (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-800">Top Creators</h2>
        <button className="flex items-center gap-1 text-gray-500">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      <div className="space-y-3">
        {topCreators.map((creator, idx) => (
          <div key={creator.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center text-3xl">
                  {creator.avatar}
                </div>
                <span className="absolute -top-1 -left-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-yellow-800">
                  {idx + 1}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-gray-800">{creator.name}</span>
                  {creator.verified && (
                    <span className="text-blue-500">✓</span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{creator.category} Creator</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                  <span>{creator.followers} followers</span>
                  <span>• {creator.posts} posts</span>
                </div>
              </div>
              <button className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Follow
              </button>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm text-gray-500">Total coins earned</span>
              <span className="text-yellow-600 font-semibold">{creator.coins}🪙</span>
            </div>
          </div>
        ))}
      </div>

      {/* Rising Stars */}
      <div className="mt-6">
        <h2 className="font-semibold text-gray-800 mb-3">Rising Stars</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex-shrink-0 w-24 text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center text-2xl border-2 border-green-400">
                {['🎸', '📸', '🎨', '🍜', '🏋️'][i - 1]}
              </div>
              <p className="text-sm font-medium text-gray-800 mt-2">User{i}</p>
              <p className="text-xs text-green-600">+{i * 10}K this week</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHashtags = () => (
    <div className="px-4 py-4">
      <div className="space-y-6">
        {trendingHashtags.map((tag) => (
          <div key={tag.id}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-pink-600">{tag.tag}</h3>
              <span className="text-sm text-gray-500">{tag.posts} posts</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-24 h-24 flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Explore</h1>

        {/* Search */}
        <div className="bg-white/20 backdrop-blur rounded-xl px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-white/70" />
          <input
            type="text"
            placeholder="Search creators, hashtags, places..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white placeholder-white/70"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 px-2 py-2 flex gap-1 overflow-x-auto sticky top-0 z-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === tab.id
                ? 'bg-pink-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'foryou' && renderForYou()}
      {activeTab === 'trending' && renderTrending()}
      {activeTab === 'creators' && renderCreators()}
      {activeTab === 'hashtags' && renderHashtags()}
    </div>
  );
};

export default BuzzLoopExplore;
