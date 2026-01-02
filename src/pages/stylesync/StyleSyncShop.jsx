import React, { useState } from 'react';
import {
  Search, Filter, Heart, ShoppingCart, Star, ChevronRight,
  Sparkles, Tag, Zap, TrendingUp, ArrowRight, Grid, List,
  Camera, Percent, Gift
} from 'lucide-react';

// StyleSync Shop: Fashion & Beauty Shopping
// Backend API: GET /api/stylesync/shop/products
// Backend API: GET /api/stylesync/shop/categories
// Backend API: POST /api/stylesync/shop/cart/add
// Backend API: GET /api/stylesync/shop/recommendations

const StyleSyncShop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All', icon: '✨' },
    { id: 'clothing', name: 'Clothing', icon: '👗' },
    { id: 'shoes', name: 'Shoes', icon: '👠' },
    { id: 'bags', name: 'Bags', icon: '👜' },
    { id: 'beauty', name: 'Beauty', icon: '💄' },
    { id: 'jewelry', name: 'Jewelry', icon: '💍' }
  ];

  const flashDeals = [
    {
      id: 1,
      name: "Designer Handbag",
      brand: "Michael Kors",
      image: "👜",
      originalPrice: 8999,
      salePrice: 4999,
      discount: "44%",
      coins: 250,
      timeLeft: "2:45:30",
      claimed: 67
    },
    {
      id: 2,
      name: "Running Shoes",
      brand: "Nike",
      image: "👟",
      originalPrice: 5999,
      salePrice: 3599,
      discount: "40%",
      coins: 180,
      timeLeft: "4:12:15",
      claimed: 45
    }
  ];

  const products = [
    {
      id: 1,
      name: "Floral Maxi Dress",
      brand: "Zara",
      image: "👗",
      price: 2499,
      originalPrice: 3499,
      rating: 4.8,
      reviews: 234,
      cashback: "15%",
      coins: 100,
      isNew: true
    },
    {
      id: 2,
      name: "Classic White Sneakers",
      brand: "Adidas",
      image: "👟",
      price: 4999,
      originalPrice: null,
      rating: 4.6,
      reviews: 567,
      cashback: "10%",
      coins: 150,
      isBestseller: true
    },
    {
      id: 3,
      name: "Lipstick Set",
      brand: "MAC",
      image: "💄",
      price: 2999,
      originalPrice: 3999,
      rating: 4.9,
      reviews: 890,
      cashback: "20%",
      coins: 120,
      isNew: false
    },
    {
      id: 4,
      name: "Gold Hoop Earrings",
      brand: "Swarovski",
      image: "💍",
      price: 1999,
      originalPrice: 2499,
      rating: 4.7,
      reviews: 156,
      cashback: "12%",
      coins: 80,
      isNew: true
    },
    {
      id: 5,
      name: "Leather Tote Bag",
      brand: "Coach",
      image: "👜",
      price: 12999,
      originalPrice: 15999,
      rating: 4.8,
      reviews: 321,
      cashback: "8%",
      coins: 400,
      isPremium: true
    },
    {
      id: 6,
      name: "Skincare Bundle",
      brand: "The Ordinary",
      image: "🧴",
      price: 1899,
      originalPrice: 2499,
      rating: 4.9,
      reviews: 1234,
      cashback: "25%",
      coins: 95,
      isBestseller: true
    }
  ];

  const aiRecommendations = [
    { text: "Based on your style: Try this boho dress", product: "Floral Maxi Dress" },
    { text: "Complete your look with these earrings", product: "Gold Hoop Earrings" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Shop</h1>
          <div className="flex items-center gap-2">
            <button className="bg-white/20 p-2 rounded-full relative">
              <ShoppingCart className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 text-yellow-800 text-xs font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button className="bg-white/20 p-2 rounded-full">
              <Heart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search fashion & beauty..."
            className="flex-1 outline-none text-gray-800"
          />
          <button className="bg-pink-100 p-1.5 rounded-lg">
            <Camera className="w-4 h-4 text-pink-600" />
          </button>
          <button className="bg-gray-100 p-1.5 rounded-lg">
            <Filter className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-3 flex gap-2 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
              activeCategory === cat.id
                ? 'bg-pink-500 text-white'
                : 'bg-white text-gray-600 shadow-sm'
            }`}
          >
            <span>{cat.icon}</span>
            <span className="text-sm font-medium">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* AI Recommendations */}
      <div className="px-4">
        <div className="space-y-2">
          {aiRecommendations.map((rec, idx) => (
            <div key={idx} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-3 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-pink-500 flex-shrink-0" />
              <p className="flex-1 text-sm text-pink-800">{rec.text}</p>
              <button className="text-pink-600 text-sm font-medium">View</button>
            </div>
          ))}
        </div>
      </div>

      {/* Flash Deals */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Flash Deals
          </h2>
          <button className="text-pink-600 text-sm flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {flashDeals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-52 bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-28 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center text-5xl">
                {deal.image}
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  -{deal.discount}
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">{deal.brand}</p>
                <h3 className="font-medium text-gray-800 text-sm">{deal.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-400 line-through text-sm">₹{deal.originalPrice}</span>
                  <span className="text-pink-600 font-bold">₹{deal.salePrice}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-red-600 font-medium flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {deal.timeLeft}
                  </span>
                  <span className="text-xs text-yellow-600">+{deal.coins}🪙</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">For You</h2>
          <div className="flex items-center gap-2">
            <button className="text-gray-500">
              <TrendingUp className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="text-gray-500"
            >
              {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-3' : 'space-y-3'}>
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-36 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-5xl">
                {product.image}
                <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                )}
                {product.isBestseller && (
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    BESTSELLER
                  </span>
                )}
                {product.isPremium && (
                  <span className="absolute top-2 left-2 bg-purple-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    PREMIUM
                  </span>
                )}
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">{product.brand}</p>
                <h3 className="font-medium text-gray-800 text-sm truncate">{product.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs text-gray-600">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-pink-600 font-bold">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-green-600 flex items-center gap-1">
                    <Percent className="w-3 h-3" />
                    {product.cashback} cashback
                  </span>
                  <span className="text-xs text-yellow-600">+{product.coins}🪙</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shop by Brand */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">New User Offer</h3>
              <p className="text-pink-100 text-sm">Extra 20% off on first purchase</p>
            </div>
            <ArrowRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSyncShop;
