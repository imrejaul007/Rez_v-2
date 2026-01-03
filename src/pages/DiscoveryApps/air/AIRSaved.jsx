import React, { useState } from 'react';
import {
  Bookmark, Heart, Clock, MapPin, Star, Filter, Search,
  ChevronRight, Trash2, Share2, Grid, List, FolderPlus
} from 'lucide-react';

// AI-R Saved: Bookmarked Items & Collections
// Backend API: GET /api/air/saved/:userId
// Backend API: POST /api/air/saved/collections
// Backend API: DELETE /api/air/saved/:itemId

const AIRSaved = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCollection, setSelectedCollection] = useState(null);

  const collections = [
    { id: 1, name: "Date Night Spots", count: 12, icon: "💕", color: "bg-pink-100" },
    { id: 2, name: "Coffee Shops", count: 8, icon: "☕", color: "bg-amber-100" },
    { id: 3, name: "Weekend Plans", count: 15, icon: "🌴", color: "bg-green-100" },
    { id: 4, name: "Must Try", count: 23, icon: "🔥", color: "bg-orange-100" }
  ];

  const savedItems = [
    {
      id: 1,
      type: 'merchant',
      name: "Pasta Paradise",
      category: "Italian Restaurant",
      image: "🍝",
      rating: 4.8,
      distance: "1.2 km",
      savedAt: "2 days ago",
      hasOffer: true,
      offerText: "25% cashback",
      aiNote: "Perfect for your Italian cravings"
    },
    {
      id: 2,
      type: 'deal',
      name: "50% OFF at Zen Spa",
      category: "Wellness Deal",
      image: "🧘",
      rating: 4.9,
      distance: "2.5 km",
      savedAt: "1 week ago",
      expires: "3 days",
      coinReward: 200
    },
    {
      id: 3,
      type: 'merchant',
      name: "Tech World",
      category: "Electronics",
      image: "📱",
      rating: 4.5,
      distance: "0.8 km",
      savedAt: "3 days ago",
      hasOffer: true,
      offerText: "₹500 OFF",
      aiNote: "Great for gadget shopping"
    },
    {
      id: 4,
      type: 'place',
      name: "Cubbon Park",
      category: "Park & Recreation",
      image: "🌳",
      rating: 4.7,
      distance: "3.2 km",
      savedAt: "1 week ago",
      checkIns: 234
    },
    {
      id: 5,
      type: 'deal',
      name: "BOGO at Fashion Hub",
      category: "Shopping Deal",
      image: "👗",
      rating: 4.4,
      distance: "1.5 km",
      savedAt: "5 days ago",
      expires: "Today",
      coinReward: 150
    },
    {
      id: 6,
      type: 'merchant',
      name: "Coffee Corner",
      category: "Cafe",
      image: "☕",
      rating: 4.6,
      distance: "0.3 km",
      savedAt: "Yesterday",
      hasOffer: true,
      offerText: "Free cookie",
      aiNote: "Your favorite morning spot"
    }
  ];

  const tabs = [
    { id: 'all', label: 'All', count: savedItems.length },
    { id: 'merchants', label: 'Places', count: 3 },
    { id: 'deals', label: 'Deals', count: 2 },
    { id: 'collections', label: 'Collections', count: collections.length }
  ];

  const filteredItems = activeTab === 'all'
    ? savedItems
    : activeTab === 'merchants'
      ? savedItems.filter(i => i.type === 'merchant' || i.type === 'place')
      : activeTab === 'deals'
        ? savedItems.filter(i => i.type === 'deal')
        : savedItems;

  const renderCollections = () => (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-800">My Collections</h2>
        <button className="flex items-center gap-1 text-purple-600 text-sm">
          <FolderPlus className="w-4 h-4" />
          New
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {collections.map((col) => (
          <button
            key={col.id}
            onClick={() => setSelectedCollection(col)}
            className="bg-white rounded-xl p-4 text-left shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 ${col.color} rounded-xl flex items-center justify-center text-2xl mb-3`}>
              {col.icon}
            </div>
            <h3 className="font-medium text-gray-800">{col.name}</h3>
            <p className="text-sm text-gray-500">{col.count} items</p>
          </button>
        ))}
      </div>
    </div>
  );

  const renderGridItem = (item) => (
    <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
      <div className="relative">
        <div className="h-24 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center text-4xl">
          {item.image}
        </div>
        <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
        </button>
        {item.expires && (
          <div className="absolute bottom-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            Expires {item.expires}
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-medium text-gray-800 text-sm truncate">{item.name}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{item.category}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            {item.rating}
          </div>
          {item.hasOffer && (
            <span className="text-xs text-green-600 font-medium">{item.offerText}</span>
          )}
          {item.coinReward && (
            <span className="text-xs text-yellow-600 font-medium">+{item.coinReward}🪙</span>
          )}
        </div>
      </div>
    </div>
  );

  const renderListItem = (item) => (
    <div key={item.id} className="bg-white rounded-xl p-4 flex gap-4 shadow-sm">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
        {item.image}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="min-w-0">
            <h3 className="font-medium text-gray-800 truncate">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.category}</p>
          </div>
          <button className="flex-shrink-0 ml-2">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          </button>
        </div>
        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            {item.rating}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {item.distance}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {item.savedAt}
          </span>
        </div>
        {item.aiNote && (
          <p className="text-xs text-purple-600 mt-2 italic">✨ {item.aiNote}</p>
        )}
        {item.hasOffer && (
          <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
            {item.offerText}
          </span>
        )}
        {item.expires && (
          <span className="inline-block mt-2 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
            Expires {item.expires}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Saved</h1>

        {/* Search */}
        <div className="bg-white/20 backdrop-blur rounded-xl px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-white/70" />
          <input
            type="text"
            placeholder="Search saved items..."
            className="flex-1 bg-transparent outline-none text-white placeholder-white/70"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 px-4 py-2 flex gap-2 overflow-x-auto sticky top-0 z-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-1 ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {tab.label}
            <span className={`text-xs ${activeTab === tab.id ? 'text-purple-200' : 'text-gray-400'}`}>
              ({tab.count})
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'collections' ? (
        renderCollections()
      ) : (
        <div className="px-4 py-4">
          {/* View Toggle & Filter */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">{filteredItems.length} saved items</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'}`}
              >
                <List className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg text-gray-400">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Items */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 gap-3">
              {filteredItems.map(renderGridItem)}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredItems.map(renderListItem)}
            </div>
          )}
        </div>
      )}

      {/* AI Suggestion */}
      <div className="fixed bottom-20 left-4 right-4">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">🤖</span>
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">3 saved deals expiring soon!</p>
              <p className="text-purple-200 text-xs">Use them before they're gone</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRSaved;
