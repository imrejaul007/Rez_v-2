import React, { useState } from 'react';
import {
  Heart, Bookmark, Share2, ShoppingBag, MessageCircle, ChevronRight,
  Filter, Grid, LayoutGrid, Star, Plus, Camera, Sparkles, Eye
} from 'lucide-react';

// StyleSync Looks: Browse & Save Style Inspiration
// Backend API: GET /api/stylesync/looks
// Backend API: POST /api/stylesync/looks/:id/like
// Backend API: POST /api/stylesync/looks/:id/save
// Backend API: GET /api/stylesync/looks/:id/products

const StyleSyncLooks = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [viewMode, setViewMode] = useState('grid');

  const tabs = [
    { id: 'trending', label: 'Trending' },
    { id: 'new', label: 'New' },
    { id: 'celebrity', label: 'Celebrity' },
    { id: 'budget', label: 'Budget Friendly' }
  ];

  const looks = [
    {
      id: 1,
      title: "Boho Summer",
      creator: { name: "StyleQueen", avatar: "👸", verified: true },
      image: "👗",
      likes: 3420,
      saves: 890,
      comments: 156,
      products: [
        { name: "Floral Dress", price: 1499, brand: "Zara" },
        { name: "Straw Hat", price: 599, brand: "H&M" },
        { name: "Sandals", price: 899, brand: "Aldo" }
      ],
      totalPrice: 2997,
      coins: 150,
      tags: ["summer", "boho", "casual"]
    },
    {
      id: 2,
      title: "Corporate Chic",
      creator: { name: "OfficeFashion", avatar: "💼", verified: true },
      image: "👔",
      likes: 2890,
      saves: 720,
      comments: 98,
      products: [
        { name: "Blazer", price: 2999, brand: "Mango" },
        { name: "Trousers", price: 1599, brand: "Zara" },
        { name: "Heels", price: 1899, brand: "Clarks" }
      ],
      totalPrice: 6497,
      coins: 200,
      tags: ["office", "formal", "professional"]
    },
    {
      id: 3,
      title: "Street Style",
      creator: { name: "UrbanVibes", avatar: "🎸", verified: false },
      image: "🧥",
      likes: 2156,
      saves: 543,
      comments: 87,
      products: [
        { name: "Oversized Tee", price: 799, brand: "H&M" },
        { name: "Cargo Pants", price: 1299, brand: "Zara" },
        { name: "Sneakers", price: 2499, brand: "Nike" }
      ],
      totalPrice: 4597,
      coins: 120,
      tags: ["street", "urban", "casual"]
    },
    {
      id: 4,
      title: "Date Night Glam",
      creator: { name: "GlamGirl", avatar: "💋", verified: true },
      image: "👠",
      likes: 4120,
      saves: 1230,
      comments: 234,
      products: [
        { name: "Mini Dress", price: 2499, brand: "Forever 21" },
        { name: "Statement Earrings", price: 499, brand: "Accessorize" },
        { name: "Clutch", price: 999, brand: "Charles & Keith" }
      ],
      totalPrice: 3997,
      coins: 180,
      tags: ["date", "glamorous", "evening"]
    },
    {
      id: 5,
      title: "Minimalist Elegance",
      creator: { name: "LessIsMore", avatar: "🤍", verified: true },
      image: "🧥",
      likes: 1890,
      saves: 456,
      comments: 67,
      products: [
        { name: "White Shirt", price: 1299, brand: "Uniqlo" },
        { name: "Black Trousers", price: 1499, brand: "Mango" },
        { name: "Loafers", price: 1999, brand: "Clarks" }
      ],
      totalPrice: 4797,
      coins: 140,
      tags: ["minimal", "elegant", "classic"]
    },
    {
      id: 6,
      title: "Ethnic Fusion",
      creator: { name: "DesiDiva", avatar: "🪷", verified: true },
      image: "👘",
      likes: 3560,
      saves: 980,
      comments: 189,
      products: [
        { name: "Kurta Set", price: 1899, brand: "FabIndia" },
        { name: "Juttis", price: 799, brand: "Needledust" },
        { name: "Oxidized Jewelry", price: 599, brand: "Amrapali" }
      ],
      totalPrice: 3297,
      coins: 160,
      tags: ["ethnic", "fusion", "indian"]
    }
  ];

  const renderLookCard = (look) => (
    <div key={look.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-7xl">
        {look.image}
        <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
          <Heart className="w-5 h-5 text-pink-500" />
        </button>
        <div className="absolute bottom-3 left-3 right-3 flex gap-2">
          {look.tags.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="bg-black/50 text-white text-xs px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Creator */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-sm">
            {look.creator.avatar}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-gray-800">{look.creator.name}</span>
              {look.creator.verified && <span className="text-blue-500 text-xs">✓</span>}
            </div>
          </div>
        </div>

        <h3 className="font-semibold text-gray-800">{look.title}</h3>

        {/* Products Preview */}
        <div className="flex items-center gap-1 mt-2">
          <ShoppingBag className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500">{look.products.length} products</span>
          <span className="text-gray-300 mx-1">•</span>
          <span className="text-sm font-medium text-pink-600">₹{look.totalPrice.toLocaleString()}</span>
        </div>

        {/* Engagement */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-4 text-gray-500">
            <span className="flex items-center gap-1 text-sm">
              <Heart className="w-4 h-4" /> {look.likes}
            </span>
            <span className="flex items-center gap-1 text-sm">
              <MessageCircle className="w-4 h-4" /> {look.comments}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-600 text-sm font-medium">+{look.coins}🪙</span>
            <button className="text-gray-400">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Style Looks</h1>
          <div className="flex items-center gap-2">
            <button className="bg-white/20 p-2 rounded-lg">
              <Filter className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="bg-white/20 p-2 rounded-lg"
            >
              {viewMode === 'grid' ? (
                <LayoutGrid className="w-5 h-5 text-white" />
              ) : (
                <Grid className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white text-pink-600'
                  : 'bg-white/20 text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* AI Suggestion */}
      <div className="px-4 py-3 bg-gradient-to-r from-pink-50 to-purple-50 flex items-center gap-3">
        <Sparkles className="w-5 h-5 text-pink-500" />
        <p className="flex-1 text-sm text-pink-800">Based on your style, you'd love "Boho Summer"</p>
        <button className="text-pink-600 text-sm font-medium">View</button>
      </div>

      {/* Create Look CTA */}
      <div className="px-4 mt-4">
        <button className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
            <Plus className="w-6 h-6 text-pink-500" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-medium text-gray-800">Create Your Look</h3>
            <p className="text-sm text-gray-500">Share your style, earn coins</p>
          </div>
          <div className="flex items-center gap-1 text-yellow-600 text-sm font-medium">
            <span>+100🪙</span>
          </div>
        </button>
      </div>

      {/* Looks Grid */}
      <div className="px-4 mt-4">
        <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-3' : 'space-y-3'}>
          {looks.map(renderLookCard)}
        </div>
      </div>

      {/* Load More */}
      <div className="px-4 mt-6">
        <button className="w-full py-3 text-pink-600 font-medium">
          Load More Looks
        </button>
      </div>
    </div>
  );
};

export default StyleSyncLooks;
