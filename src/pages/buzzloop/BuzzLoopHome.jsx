import React, { useState } from 'react';
import {
  Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Play,
  Camera, Image, MapPin, Gift, Star, TrendingUp, Users, Plus,
  Home, Search, PlusSquare, Bell, User, ChevronRight, Award
} from 'lucide-react';

// BuzzLoop: Social/UGC Discovery Feed
// Clones: ReZ + UGC Features
// Unique: Social shopping discovery with user-generated content

const BuzzLoopHome = () => {
  const [activeTab, setActiveTab] = useState('foryou');

  // Stories/Highlights
  const stories = [
    { id: 1, user: "Your Story", avatar: null, hasNew: false, isOwn: true },
    { id: 2, user: "FoodieKing", avatar: "🍕", hasNew: true, verified: true },
    { id: 3, user: "StyleQueen", avatar: "👗", hasNew: true },
    { id: 4, user: "TechGuru", avatar: "📱", hasNew: true, verified: true },
    { id: 5, user: "FitLife", avatar: "💪", hasNew: true },
    { id: 6, user: "TravelBug", avatar: "✈️", hasNew: false }
  ];

  // Feed posts
  const posts = [
    {
      id: 1,
      user: {
        name: "Priya Sharma",
        handle: "@priyafoodie",
        avatar: "👩",
        verified: true,
        followers: "12.5K"
      },
      type: "review",
      merchant: {
        name: "Pasta Paradise",
        type: "Italian Restaurant",
        rating: 4.8,
        cashback: "20%"
      },
      content: "Best carbonara I've had in the city! 🍝 The truffle oil takes it to another level. Spent ₹1,200 and earned 240 coins. Totally worth it!",
      images: ["🍝", "🍷", "🍰"],
      likes: 342,
      comments: 45,
      shares: 12,
      saves: 89,
      coinsEarned: 50,
      timestamp: "2h ago",
      location: "City Center",
      tags: ["Italian", "DateNight", "PastaLove"]
    },
    {
      id: 2,
      user: {
        name: "Tech Wizard",
        handle: "@techwiz",
        avatar: "🧙‍♂️",
        verified: true,
        followers: "45K"
      },
      type: "haul",
      merchant: {
        name: "Gadget Galaxy",
        type: "Electronics",
        rating: 4.6,
        cashback: "15%"
      },
      content: "Scored these amazing deals during the flash sale! 🔥 Total savings: ₹8,500 + 1,200 coins. Check out my full haul video!",
      video: true,
      thumbnail: "📱",
      duration: "2:34",
      likes: 1250,
      comments: 187,
      shares: 156,
      saves: 423,
      coinsEarned: 150,
      timestamp: "4h ago",
      tags: ["TechDeals", "Unboxing", "SavingsWin"]
    },
    {
      id: 3,
      user: {
        name: "Beauty Buzz",
        handle: "@beautybuzz",
        avatar: "💄",
        verified: false,
        followers: "8.2K"
      },
      type: "tip",
      content: "Pro tip: Visit beauty stores on Tuesdays for double coins! 🪙 I earned 500 coins in just one visit. Here's my routine for maximizing rewards...",
      images: ["💅", "💄", "🧴"],
      likes: 567,
      comments: 78,
      shares: 234,
      saves: 312,
      coinsEarned: 75,
      timestamp: "6h ago",
      tags: ["BeautyHacks", "CoinTips", "SmartShopping"]
    },
    {
      id: 4,
      user: {
        name: "Local Explorer",
        handle: "@localexplorer",
        avatar: "🗺️",
        verified: true,
        followers: "22K"
      },
      type: "discovery",
      merchant: {
        name: "Hidden Gem Cafe",
        type: "Cafe",
        rating: 4.9,
        cashback: "25%",
        isNew: true
      },
      content: "Found this hidden gem near Indiranagar! ☕ Just opened last week. Amazing ambiance, great coffee, and 25% cashback. You're welcome! 😉",
      images: ["☕", "🥐", "📖"],
      likes: 892,
      comments: 123,
      shares: 345,
      saves: 567,
      coinsEarned: 100,
      timestamp: "8h ago",
      location: "Indiranagar",
      tags: ["HiddenGem", "CoffeeLovers", "NewSpot"]
    }
  ];

  // Trending topics
  const trendingTopics = [
    { tag: "WeekendDeals", posts: "12.5K", growth: "+45%" },
    { tag: "FoodieFinds", posts: "8.2K", growth: "+32%" },
    { tag: "CoinChallenge", posts: "5.8K", growth: "+78%" }
  ];

  const renderPost = (post) => (
    <div key={post.id} className="bg-white border-b border-gray-100">
      {/* Post Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-xl">
            {post.user.avatar}
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-900">{post.user.name}</span>
              {post.user.verified && (
                <span className="text-blue-500">✓</span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{post.user.handle}</span>
              <span>•</span>
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-500">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Merchant Tag (if applicable) */}
      {post.merchant && (
        <div className="mx-4 mb-3 bg-gray-50 rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              {post.images?.[0] || "🏪"}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">{post.merchant.name}</span>
                {post.merchant.isNew && (
                  <span className="bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded">NEW</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">{post.merchant.type}</span>
                <span className="flex items-center gap-0.5 text-yellow-600">
                  <Star className="w-3 h-3 fill-yellow-500" />
                  {post.merchant.rating}
                </span>
              </div>
            </div>
          </div>
          <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded-full font-medium">
            {post.merchant.cashback}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="px-4 mb-3">
        <p className="text-gray-900 leading-relaxed">{post.content}</p>
        {post.tags && (
          <div className="flex flex-wrap gap-2 mt-2">
            {post.tags.map((tag, idx) => (
              <span key={idx} className="text-blue-600 text-sm">#{tag}</span>
            ))}
          </div>
        )}
      </div>

      {/* Media */}
      {post.video ? (
        <div className="relative bg-gray-900 aspect-video flex items-center justify-center">
          <div className="text-6xl">{post.thumbnail}</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-white/30 backdrop-blur rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-white fill-white" />
            </button>
          </div>
          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {post.duration}
          </span>
        </div>
      ) : post.images ? (
        <div className="flex gap-1 overflow-hidden">
          {post.images.map((img, idx) => (
            <div
              key={idx}
              className={`bg-gray-100 flex items-center justify-center text-5xl ${
                post.images.length === 1 ? 'w-full aspect-square' :
                post.images.length === 2 ? 'w-1/2 aspect-square' :
                idx === 0 ? 'w-1/2 aspect-square' : 'w-1/4 aspect-square'
              }`}
            >
              {img}
            </div>
          ))}
        </div>
      ) : null}

      {/* Location */}
      {post.location && (
        <div className="px-4 py-2 flex items-center gap-1 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          {post.location}
        </div>
      )}

      {/* Coins Earned Badge */}
      {post.coinsEarned && (
        <div className="mx-4 my-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🪙</span>
            <span className="text-yellow-800 text-sm">
              Creator earned <strong>{post.coinsEarned} coins</strong> from this post
            </span>
          </div>
          <ChevronRight className="w-4 h-4 text-yellow-600" />
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-gray-600">
            <Heart className="w-6 h-6" />
            <span className="text-sm">{post.likes.toLocaleString()}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600">
            <MessageCircle className="w-6 h-6" />
            <span className="text-sm">{post.comments}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600">
            <Share2 className="w-6 h-6" />
            <span className="text-sm">{post.shares}</span>
          </button>
        </div>
        <button className="text-gray-600">
          <Bookmark className="w-6 h-6" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-100 z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            BuzzLoop
          </h1>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>
            <button>
              <MessageCircle className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          {['foryou', 'following', 'trending'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium relative ${
                activeTab === tab ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              {tab === 'foryou' ? 'For You' : tab === 'following' ? 'Following' : 'Trending'}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Stories */}
      <div className="flex gap-4 px-4 py-4 overflow-x-auto bg-gray-50">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-1">
            <div className={`w-16 h-16 rounded-full p-0.5 ${
              story.hasNew
                ? 'bg-gradient-to-r from-pink-500 via-red-500 to-orange-500'
                : 'bg-gray-200'
            }`}>
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-2xl">
                {story.isOwn ? (
                  <div className="relative w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                    <Plus className="w-6 h-6 text-gray-600" />
                  </div>
                ) : (
                  story.avatar
                )}
              </div>
            </div>
            <span className="text-xs text-gray-600 truncate w-16 text-center">
              {story.user}
            </span>
          </div>
        ))}
      </div>

      {/* Trending Topics (if trending tab) */}
      {activeTab === 'trending' && (
        <div className="px-4 py-3 bg-white border-b border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-pink-500" />
            Trending Now
          </h3>
          <div className="flex gap-2 overflow-x-auto">
            {trendingTopics.map((topic, idx) => (
              <div key={idx} className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl px-4 py-2 flex-shrink-0">
                <div className="font-medium text-gray-900">#{topic.tag}</div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{topic.posts} posts</span>
                  <span className="text-green-600">{topic.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Feed */}
      <div>
        {posts.map(renderPost)}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1">
            <Home className="w-6 h-6 text-gray-900" />
          </button>
          <button className="flex flex-col items-center gap-1">
            <Search className="w-6 h-6 text-gray-400" />
          </button>
          <button className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center -mt-4 shadow-lg">
            <Plus className="w-6 h-6 text-white" />
          </button>
          <button className="flex flex-col items-center gap-1 relative">
            <Gift className="w-6 h-6 text-gray-400" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full text-white text-xs flex items-center justify-center">
              2
            </span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <User className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuzzLoopHome;
