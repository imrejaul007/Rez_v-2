import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Zap,
  Smartphone, Laptop, Watch, Headphones, Camera, Tv,
  ShoppingCart, Timer, Flame, Heart, Percent, Filter
} from 'lucide-react';

// Shopazy Home: Quick Retail & Electronics
// Backend API: GET /api/wasil/shopazy/home
// Backend API: GET /api/wasil/shopazy/products
// Backend API: GET /api/wasil/shopazy/categories
// Backend API: GET /api/wasil/shopazy/deals

const ShopazyHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '🛒', color: 'bg-blue-500' },
    { id: 'mobiles', name: 'Mobiles', icon: '📱', color: 'bg-purple-500' },
    { id: 'laptops', name: 'Laptops', icon: '💻', color: 'bg-gray-700' },
    { id: 'audio', name: 'Audio', icon: '🎧', color: 'bg-red-500' },
    { id: 'watches', name: 'Watches', icon: '⌚', color: 'bg-green-500' },
    { id: 'home', name: 'Home', icon: '🏠', color: 'bg-amber-500' },
    { id: 'fashion', name: 'Fashion', icon: '👕', color: 'bg-pink-500' }
  ];

  const flashDeals = [
    {
      id: 1,
      name: "boAt Airdopes 141",
      description: "True Wireless Earbuds",
      image: "🎧",
      originalPrice: 4990,
      salePrice: 1299,
      discount: "74%",
      coins: 100,
      endsIn: "2:45:30",
      stock: 15
    },
    {
      id: 2,
      name: "Fire-Boltt Phoenix",
      description: "Smart Watch",
      image: "⌚",
      originalPrice: 8999,
      salePrice: 1999,
      discount: "78%",
      coins: 150,
      endsIn: "4:20:15",
      stock: 8
    },
    {
      id: 3,
      name: "Realme Buds Q2",
      description: "Active Noise Cancellation",
      image: "🎧",
      originalPrice: 2999,
      salePrice: 1499,
      discount: "50%",
      coins: 80,
      endsIn: "1:30:45",
      stock: 23
    }
  ];

  const products = [
    {
      id: 1,
      name: "Samsung Galaxy M34",
      description: "5G, 6GB RAM, 128GB",
      image: "📱",
      price: 16999,
      originalPrice: 21999,
      rating: 4.3,
      reviews: 12500,
      coins: 500,
      freeDelivery: true
    },
    {
      id: 2,
      name: "JBL Flip 6",
      description: "Portable Bluetooth Speaker",
      image: "🔊",
      price: 11999,
      originalPrice: 14999,
      rating: 4.6,
      reviews: 5600,
      coins: 350,
      freeDelivery: true
    },
    {
      id: 3,
      name: "OnePlus Nord Buds 2",
      description: "True Wireless Earbuds",
      image: "🎧",
      price: 2999,
      originalPrice: 3999,
      rating: 4.4,
      reviews: 8900,
      coins: 150,
      freeDelivery: false
    },
    {
      id: 4,
      name: "Noise ColorFit Pro 4",
      description: "Smart Watch with AMOLED",
      image: "⌚",
      price: 3999,
      originalPrice: 5999,
      rating: 4.2,
      reviews: 4500,
      coins: 200,
      freeDelivery: true
    }
  ];

  const topBrands = [
    { id: 1, name: "Samsung", logo: "📱", discount: "Up to 40%" },
    { id: 2, name: "Apple", logo: "🍎", discount: "Up to 20%" },
    { id: 3, name: "boAt", logo: "🎧", discount: "Up to 70%" },
    { id: 4, name: "Noise", logo: "⌚", discount: "Up to 60%" },
    { id: 5, name: "OnePlus", logo: "📱", discount: "Up to 30%" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-1 text-white/80 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Deliver to</span>
            </div>
            <h1 className="text-lg font-bold text-white">HSR Layout, Bengaluru</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="text-lg">🪙</span>
              <span className="text-white font-bold">2,340</span>
            </div>
            <button className="relative bg-white/20 p-2 rounded-full">
              <ShoppingCart className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 text-gray-800 rounded-full text-xs flex items-center justify-center font-bold">1</span>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search electronics, fashion..."
            className="flex-1 outline-none text-gray-800"
          />
          <button className="bg-blue-100 p-2 rounded-lg">
            <Filter className="w-4 h-4 text-blue-600" />
          </button>
        </div>

        {/* Quick Delivery */}
        <div className="flex items-center gap-2 mt-3 bg-white/20 rounded-lg px-3 py-2">
          <Timer className="w-4 h-4 text-yellow-300" />
          <span className="text-white text-sm font-medium">60-min express delivery available</span>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-4">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center gap-2 min-w-[70px] ${
                activeCategory === cat.id ? 'opacity-100' : 'opacity-70'
              }`}
            >
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-2xl ${
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''
              }`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-700 font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Flash Deals */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Flash Sale
          </h2>
          <span className="text-red-500 text-sm font-medium">Ends Soon!</span>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {flashDeals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-44 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-5xl relative">
                {deal.image}
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                  {deal.discount}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm truncate">{deal.name}</h3>
                <p className="text-xs text-gray-500 truncate">{deal.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-gray-800">₹{deal.salePrice}</span>
                  <span className="text-xs text-gray-400 line-through">₹{deal.originalPrice}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1 text-red-500 text-xs">
                    <Timer className="w-3 h-3" />
                    {deal.endsIn}
                  </div>
                  <span className="text-yellow-600 text-xs">+{deal.coins}🪙</span>
                </div>
                <p className="text-xs text-orange-600 mt-1">Only {deal.stock} left!</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Brands */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Top Brands</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {topBrands.map((brand) => (
            <button key={brand.id} className="flex-shrink-0 bg-white rounded-xl p-4 shadow-sm min-w-[100px] text-center">
              <span className="text-3xl">{brand.logo}</span>
              <p className="font-medium text-gray-800 text-sm mt-2">{brand.name}</p>
              <p className="text-green-600 text-xs">{brand.discount}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Trending Now</h2>
          <button className="text-blue-600 text-sm">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-5xl relative">
                {product.image}
                <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
                {product.freeDelivery && (
                  <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                    Free Delivery
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm truncate">{product.name}</h3>
                <p className="text-xs text-gray-500 truncate">{product.description}</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400">({product.reviews.toLocaleString()})</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
                  <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-600 text-xs">+{product.coins}🪙</span>
                  <button className="bg-blue-500 text-white px-4 py-1.5 rounded-lg text-xs font-medium">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Express Delivery */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-yellow-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">Express Delivery</h3>
              <p className="text-blue-200 text-sm">Get it in 60 minutes!</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopazyHome;
