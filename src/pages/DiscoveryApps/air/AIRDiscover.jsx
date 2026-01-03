import React, { useState } from 'react';
import {
  Sparkles, Search, Filter, MapPin, Star, Heart, Clock, Zap,
  TrendingUp, Gift, ChevronRight, ArrowRight, Bookmark, Share2,
  Grid, List, SlidersHorizontal, X
} from 'lucide-react';

// AI-R Discover: AI-Powered Discovery Feed
// Backend API Required: GET /api/air/discover/feed
// Backend API Required: GET /api/air/discover/categories
// Backend API Required: POST /api/air/discover/personalize

const AIRDiscover = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // AI-personalized categories
  const categories = [
    { id: 'all', name: 'For You', icon: '✨', count: 156 },
    { id: 'food', name: 'Food', icon: '🍽️', count: 48 },
    { id: 'shopping', name: 'Shopping', icon: '🛍️', count: 32 },
    { id: 'beauty', name: 'Beauty', icon: '💅', count: 24 },
    { id: 'fitness', name: 'Fitness', icon: '💪', count: 18 },
    { id: 'entertainment', name: 'Fun', icon: '🎮', count: 15 },
    { id: 'services', name: 'Services', icon: '🔧', count: 19 }
  ];

  // AI-curated discovery cards
  const discoveries = [
    {
      id: 1,
      type: 'hot_deal',
      title: "Flash Sale at Tech World",
      subtitle: "Electronics up to 40% off + 15% cashback",
      image: "📱",
      merchant: "Tech World",
      rating: 4.7,
      distance: "2.1 km",
      cashback: "15%",
      endsIn: "2h 30m",
      aiReason: "Based on your recent tech searches",
      saved: false
    },
    {
      id: 2,
      type: 'new_discovery',
      title: "New Italian Place",
      subtitle: "Authentic pasta, just opened nearby",
      image: "🍝",
      merchant: "La Bella Vita",
      rating: 4.9,
      distance: "0.8 km",
      cashback: "20%",
      isNew: true,
      aiReason: "You love Italian food",
      saved: true
    },
    {
      id: 3,
      type: 'coin_opportunity',
      title: "Double Coins Weekend",
      subtitle: "Earn 2x coins at partner stores",
      image: "🪙",
      merchant: "Multiple Stores",
      participants: 45,
      potentialCoins: 500,
      aiReason: "Maximize your earnings",
      saved: false
    },
    {
      id: 4,
      type: 'personalized',
      title: "Your Weekly Coffee Spot",
      subtitle: "Special morning deal just for you",
      image: "☕",
      merchant: "Brew Masters",
      rating: 4.6,
      distance: "0.3 km",
      cashback: "10%",
      personalDiscount: "Extra 5% for regulars",
      aiReason: "You visit every Tuesday",
      saved: true
    },
    {
      id: 5,
      type: 'trending',
      title: "Trending: Spa & Wellness",
      subtitle: "Top rated wellness centers",
      image: "🧘",
      merchant: "Zen Retreat",
      rating: 4.8,
      distance: "3.5 km",
      cashback: "25%",
      trendingRank: 1,
      aiReason: "Trending in your area",
      saved: false
    },
    {
      id: 6,
      type: 'bundle',
      title: "Date Night Bundle",
      subtitle: "Dinner + Movie combo deal",
      image: "🎬",
      merchant: "Multiple",
      includes: ["Fine Dining", "Premium Movie"],
      totalSavings: 850,
      cashback: "18%",
      aiReason: "Perfect for your weekend",
      saved: false
    }
  ];

  // AI insights
  const aiInsights = [
    {
      type: 'saving',
      title: "Potential Savings",
      value: "₹2,340",
      subtitle: "This week from discoveries",
      icon: "💰"
    },
    {
      type: 'coins',
      title: "Coin Opportunities",
      value: "1,250",
      subtitle: "Available to earn today",
      icon: "🪙"
    },
    {
      type: 'matches',
      title: "Perfect Matches",
      value: "12",
      subtitle: "Based on your preferences",
      icon: "🎯"
    }
  ];

  const renderDiscoveryCard = (discovery) => {
    const cardStyles = {
      hot_deal: 'border-l-4 border-l-red-500',
      new_discovery: 'border-l-4 border-l-green-500',
      coin_opportunity: 'border-l-4 border-l-yellow-500',
      personalized: 'border-l-4 border-l-purple-500',
      trending: 'border-l-4 border-l-blue-500',
      bundle: 'border-l-4 border-l-pink-500'
    };

    return (
      <div
        key={discovery.id}
        className={`bg-white rounded-xl shadow-sm overflow-hidden ${cardStyles[discovery.type]} ${
          viewMode === 'grid' ? '' : 'flex'
        }`}
      >
        {/* Card Header */}
        <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="text-4xl">{discovery.image}</div>
              <div>
                <h3 className="font-semibold text-gray-800">{discovery.title}</h3>
                <p className="text-sm text-gray-500">{discovery.subtitle}</p>
              </div>
            </div>
            <button className={`${discovery.saved ? 'text-red-500' : 'text-gray-300'}`}>
              <Heart className={`w-5 h-5 ${discovery.saved ? 'fill-red-500' : ''}`} />
            </button>
          </div>

          {/* Merchant info */}
          {discovery.merchant && (
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span className="font-medium">{discovery.merchant}</span>
              {discovery.rating && (
                <>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {discovery.rating}
                  </span>
                </>
              )}
              {discovery.distance && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {discovery.distance}
                </span>
              )}
            </div>
          )}

          {/* Type-specific content */}
          {discovery.endsIn && (
            <div className="flex items-center gap-1 text-red-600 text-sm mb-2">
              <Clock className="w-4 h-4" />
              <span>Ends in {discovery.endsIn}</span>
            </div>
          )}

          {discovery.isNew && (
            <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full mb-2">
              Just Opened
            </span>
          )}

          {discovery.trendingRank && (
            <div className="flex items-center gap-1 text-blue-600 text-sm mb-2">
              <TrendingUp className="w-4 h-4" />
              <span>#{discovery.trendingRank} Trending</span>
            </div>
          )}

          {discovery.potentialCoins && (
            <div className="flex items-center gap-1 text-yellow-600 text-sm mb-2">
              <span>🪙</span>
              <span>Earn up to {discovery.potentialCoins} coins</span>
            </div>
          )}

          {discovery.includes && (
            <div className="flex gap-2 mb-2">
              {discovery.includes.map((item, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          )}

          {discovery.personalDiscount && (
            <div className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-lg mb-2 inline-block">
              ⭐ {discovery.personalDiscount}
            </div>
          )}

          {/* Cashback badge */}
          {discovery.cashback && (
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                {discovery.cashback} Cashback
              </span>
              <button className="text-purple-600 text-sm font-medium flex items-center gap-1">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {discovery.totalSavings && (
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
              <span className="text-green-600 font-semibold">Save ₹{discovery.totalSavings}</span>
              <button className="text-purple-600 text-sm font-medium flex items-center gap-1">
                Get Bundle <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* AI Reason */}
          <div className="mt-3 flex items-center gap-2 text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-lg">
            <Sparkles className="w-3 h-3" />
            <span>{discovery.aiReason}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Discover
            </h1>
            <p className="text-purple-200 text-sm">AI-curated just for you</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
            >
              {viewMode === 'grid' ? (
                <List className="w-5 h-5 text-white" />
              ) : (
                <Grid className="w-5 h-5 text-white" />
              )}
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
            >
              <SlidersHorizontal className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search discoveries..."
            className="flex-1 outline-none text-gray-800"
          />
          <Filter className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* AI Insights */}
      <div className="px-4 -mt-2">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="grid grid-cols-3 gap-4">
            {aiInsights.map((insight, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl mb-1">{insight.icon}</div>
                <p className="text-lg font-bold text-gray-800">{insight.value}</p>
                <p className="text-xs text-gray-500">{insight.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              <span>{cat.icon}</span>
              <span className="text-sm">{cat.name}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                selectedCategory === cat.id ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Discoveries Grid/List */}
      <div className="px-4 mt-4">
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 gap-4' : 'space-y-4'}>
          {discoveries.map(renderDiscoveryCard)}
        </div>
      </div>

      {/* Load More */}
      <div className="px-4 mt-6 mb-8">
        <button className="w-full bg-white text-purple-600 border border-purple-200 py-3 rounded-xl font-medium flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5" />
          Load More AI Discoveries
        </button>
      </div>

      {/* Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">AI Filters</h2>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Filter options would go here */}
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Cashback Range</h3>
                <div className="flex gap-2">
                  {['5%+', '10%+', '15%+', '20%+'].map((range) => (
                    <button key={range} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-3">Distance</h3>
                <div className="flex gap-2">
                  {['< 1 km', '< 3 km', '< 5 km', 'Any'].map((dist) => (
                    <button key={dist} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                      {dist}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-3">AI Preferences</h3>
                <div className="space-y-2">
                  {[
                    'Prioritize cashback',
                    'Prioritize distance',
                    'Prioritize ratings',
                    'Balance all factors'
                  ].map((pref) => (
                    <label key={pref} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <input type="radio" name="aiPref" className="accent-purple-600" />
                      <span className="text-gray-700">{pref}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-medium mt-6">
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIRDiscover;
