import React, { useState } from 'react';
import {
  Sparkles, Heart, ShoppingBag, Palette, Camera, TrendingUp,
  Star, ChevronRight, Filter, Search, Bookmark, Share2,
  Eye, Scissors, Crown, Gift, Zap
} from 'lucide-react';

// StyleSync: Fashion & Beauty Vertical
// Backend API: GET /api/stylesync/home
// Backend API: GET /api/stylesync/trends
// Backend API: GET /api/stylesync/looks

const StyleSyncHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'For You', icon: Sparkles },
    { id: 'fashion', name: 'Fashion', icon: ShoppingBag },
    { id: 'beauty', name: 'Beauty', icon: Palette },
    { id: 'skincare', name: 'Skincare', icon: Heart },
    { id: 'hair', name: 'Hair', icon: Scissors }
  ];

  const trendingLooks = [
    {
      id: 1,
      title: "Summer Chic",
      creator: { name: "StyleQueen", avatar: "👸", verified: true },
      image: "👗",
      likes: 2340,
      saves: 567,
      products: 5,
      coins: 150
    },
    {
      id: 2,
      title: "Office Glam",
      creator: { name: "FashionPro", avatar: "💄", verified: true },
      image: "👔",
      likes: 1890,
      saves: 432,
      products: 4,
      coins: 120
    },
    {
      id: 3,
      title: "Weekend Casual",
      creator: { name: "TrendSetter", avatar: "🌟", verified: false },
      image: "👕",
      likes: 1560,
      saves: 321,
      products: 3,
      coins: 100
    }
  ];

  const featuredBrands = [
    { id: 1, name: "Zara", logo: "🛍️", cashback: "15%", newArrivals: 45 },
    { id: 2, name: "H&M", logo: "👗", cashback: "12%", newArrivals: 38 },
    { id: 3, name: "Nykaa", logo: "💄", cashback: "20%", newArrivals: 120 },
    { id: 4, name: "Myntra", logo: "👠", cashback: "10%", newArrivals: 89 }
  ];

  const beautyDeals = [
    {
      id: 1,
      brand: "MAC",
      product: "Lipstick Bundle",
      discount: "30% OFF",
      image: "💄",
      originalPrice: 2500,
      salePrice: 1750,
      coins: 100,
      flash: true
    },
    {
      id: 2,
      brand: "The Ordinary",
      product: "Skincare Set",
      discount: "25% OFF",
      image: "🧴",
      originalPrice: 1800,
      salePrice: 1350,
      coins: 80
    },
    {
      id: 3,
      brand: "Maybelline",
      product: "Eye Palette",
      discount: "40% OFF",
      image: "🎨",
      originalPrice: 1200,
      salePrice: 720,
      coins: 60
    }
  ];

  const styleInsights = [
    { text: "Your skin tone suits warm colors - try coral lipstick!", action: "Shop Now" },
    { text: "Based on your style: Check out boho dresses", action: "Explore" }
  ];

  const virtualTryOn = [
    { id: 1, type: "Lipstick", icon: "💋", available: true },
    { id: 2, type: "Sunglasses", icon: "🕶️", available: true },
    { id: 3, type: "Hair Color", icon: "💇", available: true },
    { id: 4, type: "Makeup", icon: "💄", available: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white">StyleSync</h1>
            <p className="text-pink-100 text-sm">Fashion & Beauty</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-white/20 p-2 rounded-full">
              <Camera className="w-5 h-5 text-white" />
            </button>
            <button className="bg-white/20 p-2 rounded-full">
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white/20 backdrop-blur rounded-xl px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-white/70" />
          <input
            type="text"
            placeholder="Search styles, products, brands..."
            className="flex-1 bg-transparent outline-none text-white placeholder-white/70"
          />
          <button className="bg-white/20 p-1.5 rounded-lg">
            <Filter className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 -mt-3">
        <div className="bg-white rounded-xl shadow-sm p-3 flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* AI Style Insights */}
      <div className="px-4 mt-4">
        <div className="space-y-2">
          {styleInsights.map((insight, idx) => (
            <div key={idx} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-pink-500 flex-shrink-0" />
              <p className="flex-1 text-sm text-pink-800">{insight.text}</p>
              <button className="text-pink-600 text-sm font-medium whitespace-nowrap">
                {insight.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Virtual Try-On */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Camera className="w-5 h-5 text-pink-500" />
            Virtual Try-On
          </h2>
          <button className="text-pink-600 text-sm">Try Now</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {virtualTryOn.map((item) => (
            <div
              key={item.id}
              className={`flex-shrink-0 w-20 text-center ${!item.available ? 'opacity-50' : ''}`}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <p className="text-xs text-gray-600 mt-2">{item.type}</p>
              {!item.available && (
                <span className="text-xs text-gray-400">Soon</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Trending Looks */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-pink-500" />
            Trending Looks
          </h2>
          <button className="text-pink-600 text-sm flex items-center gap-1">
            See All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {trendingLooks.map((look) => (
            <div key={look.id} className="flex-shrink-0 w-48 bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-32 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-6xl relative">
                {look.image}
                <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-pink-500" />
                </button>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800">{look.title}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-sm">{look.creator.avatar}</span>
                  <span className="text-xs text-gray-500">{look.creator.name}</span>
                  {look.creator.verified && <span className="text-blue-500 text-xs">✓</span>}
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" /> {look.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <ShoppingBag className="w-3 h-3" /> {look.products} items
                  </span>
                  <span className="text-pink-600 font-medium">+{look.coins}🪙</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Brands */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">Featured Brands</h2>
          <button className="text-pink-600 text-sm">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {featuredBrands.map((brand) => (
            <div key={brand.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-2xl">
                  {brand.logo}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{brand.name}</h3>
                  <p className="text-xs text-green-600">{brand.cashback} cashback</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">{brand.newArrivals} new arrivals</p>
            </div>
          ))}
        </div>
      </div>

      {/* Beauty Deals */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Gift className="w-5 h-5 text-pink-500" />
            Beauty Deals
          </h2>
          <button className="text-pink-600 text-sm">Shop All</button>
        </div>
        <div className="space-y-3">
          {beautyDeals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center text-4xl">
                  {deal.image}
                </div>
                {deal.flash && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-yellow-800" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-gray-500">{deal.brand}</p>
                    <h3 className="font-medium text-gray-800">{deal.product}</h3>
                  </div>
                  <span className="bg-pink-100 text-pink-700 text-xs font-bold px-2 py-1 rounded-full">
                    {deal.discount}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-400 line-through text-sm">₹{deal.originalPrice}</span>
                  <span className="text-pink-600 font-bold">₹{deal.salePrice}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-yellow-600">+{deal.coins}🪙</span>
                  <button className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Style Quiz CTA */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <Crown className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">Take the Style Quiz</h3>
              <p className="text-pink-100 text-sm">Get personalized recommendations</p>
            </div>
            <ChevronRight className="w-6 h-6 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSyncHome;
