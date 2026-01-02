import React, { useState } from 'react';
import {
  Search, Zap, Star, Clock, TrendingUp, ChevronRight, Filter,
  Smartphone, Laptop, Headphones, Watch, Camera, Gamepad2,
  Tv, Speaker, Cpu, Gift, Flame, Bell
} from 'lucide-react';

// TechHunt Home: Electronics Discovery & Deals Hub
// Backend API: GET /api/techhunt/home
// Backend API: GET /api/techhunt/deals/flash
// Backend API: GET /api/techhunt/products/trending
// Backend API: GET /api/techhunt/categories

const TechHuntHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Cpu, color: 'bg-gray-700' },
    { id: 'phones', name: 'Phones', icon: Smartphone, color: 'bg-blue-500' },
    { id: 'laptops', name: 'Laptops', icon: Laptop, color: 'bg-purple-500' },
    { id: 'audio', name: 'Audio', icon: Headphones, color: 'bg-red-500' },
    { id: 'wearables', name: 'Wearables', icon: Watch, color: 'bg-green-500' },
    { id: 'gaming', name: 'Gaming', icon: Gamepad2, color: 'bg-pink-500' },
    { id: 'tv', name: 'TV & Display', icon: Tv, color: 'bg-indigo-500' }
  ];

  const flashDeals = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      image: "📱",
      originalPrice: 159900,
      dealPrice: 139900,
      discount: "12%",
      rating: 4.9,
      reviews: 2340,
      coins: 500,
      endsIn: "2:45:30",
      stock: 15,
      isHot: true
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      brand: "Sony",
      image: "🎧",
      originalPrice: 34990,
      dealPrice: 27990,
      discount: "20%",
      rating: 4.8,
      reviews: 1890,
      coins: 200,
      endsIn: "4:20:15",
      stock: 8,
      isHot: true
    },
    {
      id: 3,
      name: "MacBook Air M3",
      brand: "Apple",
      image: "💻",
      originalPrice: 114900,
      dealPrice: 99900,
      discount: "13%",
      rating: 4.9,
      reviews: 567,
      coins: 400,
      endsIn: "5:10:45",
      stock: 23
    }
  ];

  const trendingProducts = [
    {
      id: 4,
      name: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      image: "📱",
      price: 134999,
      rating: 4.8,
      reviews: 3450,
      coins: 350,
      trend: "+24%"
    },
    {
      id: 5,
      name: "PS5 Slim Console",
      brand: "Sony",
      image: "🎮",
      price: 49990,
      rating: 4.9,
      reviews: 8920,
      coins: 250,
      trend: "+18%"
    },
    {
      id: 6,
      name: "Apple Watch Ultra 2",
      brand: "Apple",
      image: "⌚",
      price: 89900,
      rating: 4.7,
      reviews: 1230,
      coins: 300,
      trend: "+15%"
    },
    {
      id: 7,
      name: "DJI Mini 4 Pro",
      brand: "DJI",
      image: "🚁",
      price: 104900,
      rating: 4.8,
      reviews: 456,
      coins: 400,
      trend: "+32%"
    }
  ];

  const techNews = [
    {
      id: 1,
      title: "iPhone 16 Launch Date Confirmed",
      source: "TechCrunch",
      time: "2h ago",
      image: "📱"
    },
    {
      id: 2,
      title: "Best Budget Laptops 2025",
      source: "The Verge",
      time: "4h ago",
      image: "💻"
    }
  ];

  const quickLinks = [
    { name: "Compare", icon: "⚖️", color: "bg-blue-100 text-blue-600" },
    { name: "Reviews", icon: "📝", color: "bg-green-100 text-green-600" },
    { name: "Sell/Trade", icon: "🔄", color: "bg-purple-100 text-purple-600" },
    { name: "Warranty", icon: "🛡️", color: "bg-orange-100 text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white">TechHunt</h1>
            <p className="text-gray-400 text-sm">Hunt the best tech deals</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative bg-white/10 p-2 rounded-lg">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search gadgets, brands, deals..."
            className="flex-1 outline-none text-gray-800"
          />
          <button className="bg-gray-100 p-2 rounded-lg">
            <Filter className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Coin Balance */}
        <div className="mt-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-xl">🪙</span>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Your Tech Coins</p>
              <p className="text-white font-bold">2,450 coins</p>
            </div>
          </div>
          <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-medium text-sm">
            Redeem
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
                  activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-gray-800' : ''
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
          <button className="text-gray-600 text-sm flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {flashDeals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-56 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl relative">
                {deal.image}
                {deal.isHot && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <Flame className="w-3 h-3" /> HOT
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                <div className="flex items-center gap-2 mt-2 text-xs">
                  <span className="flex items-center gap-1 text-gray-500">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {deal.rating}
                  </span>
                  <span className="text-gray-400">({deal.reviews})</span>
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-red-500 text-xs">
                    <Clock className="w-3 h-3" />
                    {deal.endsIn}
                  </div>
                  <span className="text-yellow-600 text-xs font-medium">+{deal.coins}🪙</span>
                </div>
                <p className="text-xs text-orange-600 mt-1">Only {deal.stock} left!</p>
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
          <button className="text-gray-600 text-sm">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {trendingProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-5xl relative">
                {product.image}
                <div className="absolute top-2 right-2 bg-green-100 text-green-600 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {product.trend}
                </div>
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

      {/* Tech News */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">Tech News</h2>
          <button className="text-gray-600 text-sm">More</button>
        </div>

        <div className="space-y-3">
          {techNews.map((news) => (
            <div key={news.id} className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                {news.image}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{news.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{news.source} • {news.time}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Exclusive Banner */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">Member Exclusive</h3>
              <p className="text-purple-200 text-sm">Early access to upcoming sales!</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechHuntHome;
