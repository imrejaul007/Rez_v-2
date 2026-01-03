import React, { useState } from 'react';
import {
  Search, Home, Sofa, Lamp, UtensilsCrossed, Bath, Flower2,
  Paintbrush, Wrench, Star, TrendingUp, ChevronRight, Zap,
  Gift, Clock, Heart, Filter, Sparkles
} from 'lucide-react';

// HomeHub Home: Home & Living Discovery Hub
// Backend API: GET /api/homehub/home
// Backend API: GET /api/homehub/categories
// Backend API: GET /api/homehub/products/trending
// Backend API: GET /api/homehub/deals

const HomeHubHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Home, color: 'bg-amber-500' },
    { id: 'furniture', name: 'Furniture', icon: Sofa, color: 'bg-blue-500' },
    { id: 'lighting', name: 'Lighting', icon: Lamp, color: 'bg-yellow-500' },
    { id: 'kitchen', name: 'Kitchen', icon: UtensilsCrossed, color: 'bg-red-500' },
    { id: 'bath', name: 'Bath', icon: Bath, color: 'bg-cyan-500' },
    { id: 'garden', name: 'Garden', icon: Flower2, color: 'bg-green-500' },
    { id: 'decor', name: 'Decor', icon: Paintbrush, color: 'bg-pink-500' },
    { id: 'tools', name: 'Tools', icon: Wrench, color: 'bg-gray-600' }
  ];

  const flashDeals = [
    {
      id: 1,
      name: "Modern 3-Seater Sofa",
      brand: "Urban Ladder",
      image: "🛋️",
      originalPrice: 45999,
      dealPrice: 34999,
      discount: "24%",
      rating: 4.6,
      reviews: 890,
      coins: 250,
      endsIn: "3:45:20"
    },
    {
      id: 2,
      name: "Smart LED Ceiling Light",
      brand: "Philips Hue",
      image: "💡",
      originalPrice: 12999,
      dealPrice: 9499,
      discount: "27%",
      rating: 4.8,
      reviews: 1230,
      coins: 80,
      endsIn: "5:12:45"
    },
    {
      id: 3,
      name: "Air Fryer 6.5L",
      brand: "Philips",
      image: "🍳",
      originalPrice: 14999,
      dealPrice: 10999,
      discount: "27%",
      rating: 4.7,
      reviews: 3450,
      coins: 90,
      endsIn: "2:30:15"
    }
  ];

  const trendingProducts = [
    {
      id: 4,
      name: "Velvet Accent Chair",
      brand: "Pepperfry",
      image: "🪑",
      price: 15999,
      rating: 4.5,
      reviews: 567,
      coins: 120,
      trend: "+18%"
    },
    {
      id: 5,
      name: "Indoor Plant Set",
      brand: "Ugaoo",
      image: "🪴",
      price: 2499,
      rating: 4.8,
      reviews: 2340,
      coins: 30,
      trend: "+45%"
    },
    {
      id: 6,
      name: "Coffee Table Oak",
      brand: "IKEA",
      image: "🪵",
      price: 8999,
      rating: 4.6,
      reviews: 890,
      coins: 75,
      trend: "+12%"
    },
    {
      id: 7,
      name: "Bathroom Vanity Set",
      brand: "Hindware",
      image: "🚿",
      price: 24999,
      rating: 4.4,
      reviews: 234,
      coins: 180,
      trend: "+8%"
    }
  ];

  const designIdeas = [
    {
      id: 1,
      title: "Minimalist Living Room",
      image: "🏠",
      products: 12,
      saves: 4560
    },
    {
      id: 2,
      title: "Cozy Bedroom Setup",
      image: "🛏️",
      products: 8,
      saves: 3890
    },
    {
      id: 3,
      title: "Modern Kitchen Design",
      image: "🍽️",
      products: 15,
      saves: 2340
    }
  ];

  const quickLinks = [
    { name: "Room Planner", icon: "📐", color: "bg-blue-100 text-blue-600" },
    { name: "AR Preview", icon: "📱", color: "bg-purple-100 text-purple-600" },
    { name: "Services", icon: "🔧", color: "bg-orange-100 text-orange-600" },
    { name: "Experts", icon: "👷", color: "bg-green-100 text-green-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white">HomeHub</h1>
            <p className="text-amber-200 text-sm">Transform your space</p>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
            <span className="text-xl">🪙</span>
            <span className="text-white font-bold">1,850</span>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search furniture, decor, appliances..."
            className="flex-1 outline-none text-gray-800"
          />
          <button className="bg-amber-100 p-2 rounded-lg">
            <Filter className="w-4 h-4 text-amber-600" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 -mt-3">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex flex-col items-center gap-2 min-w-[60px] ${
                  activeCategory === cat.id ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <div className={`w-12 h-12 ${cat.color} rounded-xl flex items-center justify-center ${
                  activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-amber-500' : ''
                }`}>
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-600 font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-4 mt-4">
        <div className="grid grid-cols-4 gap-2">
          {quickLinks.map((link, idx) => (
            <button key={idx} className="bg-white rounded-xl p-3 shadow-sm text-center">
              <span className="text-2xl">{link.icon}</span>
              <p className="text-xs font-medium text-gray-700 mt-1">{link.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Flash Deals */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Flash Deals
          </h2>
          <button className="text-amber-600 text-sm flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {flashDeals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-52 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-5xl relative">
                {deal.image}
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {deal.discount} OFF
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">{deal.brand}</p>
                <h3 className="font-medium text-gray-800 text-sm truncate">{deal.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-bold text-gray-800">₹{deal.dealPrice.toLocaleString()}</span>
                  <span className="text-xs text-gray-400 line-through">₹{deal.originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-red-500 text-xs">
                    <Clock className="w-3 h-3" />
                    {deal.endsIn}
                  </div>
                  <span className="text-yellow-600 text-xs font-medium">+{deal.coins}🪙</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design Ideas */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            Design Ideas
          </h2>
          <button className="text-amber-600 text-sm">Explore</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {designIdeas.map((idea) => (
            <div key={idea.id} className="flex-shrink-0 w-40 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-24 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-5xl">
                {idea.image}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm">{idea.title}</h3>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <span>{idea.products} products</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {idea.saves.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Products */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            Trending Now
          </h2>
          <button className="text-amber-600 text-sm">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {trendingProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-5xl relative">
                {product.image}
                <div className="absolute top-2 right-2 bg-green-100 text-green-600 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {product.trend}
                </div>
                <button className="absolute top-2 left-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">{product.brand}</p>
                <h3 className="font-medium text-gray-800 text-sm truncate">{product.name}</h3>
                <p className="text-lg font-bold text-gray-800 mt-1">₹{product.price.toLocaleString()}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {product.rating} ({product.reviews})
                  </span>
                  <span className="text-yellow-600 text-xs font-medium">+{product.coins}🪙</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AR Preview Banner */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">Try Before You Buy</h3>
              <p className="text-purple-200 text-sm">Preview furniture in your room with AR</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHubHome;
