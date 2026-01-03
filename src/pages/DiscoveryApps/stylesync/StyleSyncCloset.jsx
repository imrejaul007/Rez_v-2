import React, { useState } from 'react';
import {
  Plus, Camera, Shirt, ShoppingBag, Palette, Grid, List,
  Filter, Search, Heart, Tag, Calendar, Sparkles, ChevronRight,
  RotateCcw, Trash2, Edit3, Share2
} from 'lucide-react';

// StyleSync Closet: Virtual Wardrobe Management
// Backend API: GET /api/stylesync/closet/:userId
// Backend API: POST /api/stylesync/closet/item
// Backend API: PUT /api/stylesync/closet/item/:id
// Backend API: DELETE /api/stylesync/closet/item/:id
// Backend API: POST /api/stylesync/closet/outfit

const StyleSyncCloset = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All', count: 48 },
    { id: 'tops', name: 'Tops', count: 15 },
    { id: 'bottoms', name: 'Bottoms', count: 12 },
    { id: 'dresses', name: 'Dresses', count: 8 },
    { id: 'outerwear', name: 'Outerwear', count: 5 },
    { id: 'accessories', name: 'Accessories', count: 8 }
  ];

  const closetItems = [
    {
      id: 1,
      name: "White Cotton Shirt",
      category: "tops",
      brand: "Zara",
      color: "White",
      image: "👔",
      lastWorn: "3 days ago",
      wearCount: 12,
      favorite: true
    },
    {
      id: 2,
      name: "Blue Denim Jeans",
      category: "bottoms",
      brand: "Levi's",
      color: "Blue",
      image: "👖",
      lastWorn: "Yesterday",
      wearCount: 24,
      favorite: true
    },
    {
      id: 3,
      name: "Floral Summer Dress",
      category: "dresses",
      brand: "H&M",
      color: "Multi",
      image: "👗",
      lastWorn: "1 week ago",
      wearCount: 5,
      favorite: false
    },
    {
      id: 4,
      name: "Black Blazer",
      category: "outerwear",
      brand: "Mango",
      color: "Black",
      image: "🧥",
      lastWorn: "2 weeks ago",
      wearCount: 8,
      favorite: true
    },
    {
      id: 5,
      name: "Red Sneakers",
      category: "accessories",
      brand: "Nike",
      color: "Red",
      image: "👟",
      lastWorn: "5 days ago",
      wearCount: 15,
      favorite: false
    },
    {
      id: 6,
      name: "Striped T-Shirt",
      category: "tops",
      brand: "Uniqlo",
      color: "Navy",
      image: "👕",
      lastWorn: "Today",
      wearCount: 18,
      favorite: false
    }
  ];

  const outfitSuggestions = [
    {
      id: 1,
      name: "Casual Friday",
      items: ["👔", "👖", "👟"],
      occasion: "Work Casual",
      match: 95
    },
    {
      id: 2,
      name: "Weekend Brunch",
      items: ["👗", "👜", "👡"],
      occasion: "Casual",
      match: 88
    },
    {
      id: 3,
      name: "Evening Out",
      items: ["🧥", "👗", "👠"],
      occasion: "Semi-Formal",
      match: 82
    }
  ];

  const stats = {
    totalItems: 48,
    favoriteItems: 12,
    totalWears: 234,
    avgCostPerWear: 156
  };

  const filteredItems = activeTab === 'all'
    ? closetItems
    : closetItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white">My Closet</h1>
            <p className="text-pink-100 text-sm">{stats.totalItems} items</p>
          </div>
          <button className="bg-white text-pink-600 px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Item
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/20 backdrop-blur rounded-xl px-3 py-2 text-center">
            <p className="text-white font-bold">{stats.favoriteItems}</p>
            <p className="text-pink-100 text-xs">Favorites</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl px-3 py-2 text-center">
            <p className="text-white font-bold">{stats.totalWears}</p>
            <p className="text-pink-100 text-xs">Total Wears</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl px-3 py-2 text-center">
            <p className="text-white font-bold">₹{stats.avgCostPerWear}</p>
            <p className="text-pink-100 text-xs">Avg Cost/Wear</p>
          </div>
        </div>
      </div>

      {/* AI Outfit Suggestions */}
      <div className="px-4 -mt-3">
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-800 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-500" />
              Today's Outfit Ideas
            </h2>
            <button className="text-pink-600 text-sm">See All</button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {outfitSuggestions.map((outfit) => (
              <div key={outfit.id} className="flex-shrink-0 w-36 bg-gray-50 rounded-xl p-3">
                <div className="flex justify-center gap-1 mb-2">
                  {outfit.items.map((item, idx) => (
                    <span key={idx} className="text-2xl">{item}</span>
                  ))}
                </div>
                <h3 className="text-sm font-medium text-gray-800 text-center">{outfit.name}</h3>
                <p className="text-xs text-gray-500 text-center">{outfit.occasion}</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <div className="h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-pink-500 rounded-full"
                      style={{ width: `${outfit.match}%` }}
                    />
                  </div>
                  <span className="text-xs text-pink-600">{outfit.match}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 mt-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-1 ${
                activeTab === cat.id
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-gray-600 shadow-sm'
              }`}
            >
              {cat.name}
              <span className={`text-xs ${activeTab === cat.id ? 'text-pink-200' : 'text-gray-400'}`}>
                ({cat.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* View Toggle & Search */}
      <div className="px-4 mt-3 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search closet..."
            className="flex-1 outline-none text-sm"
          />
        </div>
        <button className="bg-white p-2 rounded-xl shadow-sm">
          <Filter className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          className="bg-white p-2 rounded-xl shadow-sm"
        >
          {viewMode === 'grid' ? (
            <List className="w-5 h-5 text-gray-600" />
          ) : (
            <Grid className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Closet Items */}
      <div className="px-4 mt-4">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-3 gap-3">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-24 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-4xl">
                  {item.image}
                  {item.favorite && (
                    <Heart className="absolute top-2 right-2 w-4 h-4 text-pink-500 fill-pink-500" />
                  )}
                </div>
                <div className="p-2">
                  <h3 className="text-xs font-medium text-gray-800 truncate">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.brand}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-3xl">
                  {item.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.brand} • {item.color}</p>
                    </div>
                    {item.favorite && (
                      <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <RotateCcw className="w-3 h-3" />
                      Worn {item.wearCount}x
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.lastWorn}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Item Methods */}
      <div className="px-4 mt-6">
        <h2 className="font-semibold text-gray-800 mb-3">Add to Closet</h2>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Camera className="w-6 h-6 text-pink-500" />
            </div>
            <span className="text-sm font-medium text-gray-800">Take Photo</span>
            <span className="text-xs text-gray-500">Snap your clothes</span>
          </button>
          <button className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-purple-500" />
            </div>
            <span className="text-sm font-medium text-gray-800">From Purchases</span>
            <span className="text-xs text-gray-500">Import from orders</span>
          </button>
        </div>
      </div>

      {/* Insights */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">Closet Insight</h3>
              <p className="text-pink-100 text-sm">You haven't worn 5 items in 30+ days</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSyncCloset;
