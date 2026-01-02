import React, { useState } from 'react';
import {
  Search, Filter, Star, Heart, ShoppingCart, ChevronRight,
  Truck, RotateCcw, Shield, Tag, Clock, Zap, TrendingUp,
  Package, ArrowRight, Percent
} from 'lucide-react';

// HomeHub Shop: Home & Living Products Marketplace
// Backend API: GET /api/homehub/shop/products
// Backend API: GET /api/homehub/shop/categories
// Backend API: GET /api/homehub/shop/cart/:userId
// Backend API: POST /api/homehub/shop/cart/add

const HomeHubShop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All', count: 1250 },
    { id: 'furniture', name: 'Furniture', count: 340 },
    { id: 'decor', name: 'Decor', count: 520 },
    { id: 'kitchen', name: 'Kitchen', count: 280 },
    { id: 'lighting', name: 'Lighting', count: 110 }
  ];

  const flashDeals = [
    {
      id: 1,
      name: "Ceramic Vase Set",
      brand: "HomeArt",
      image: "🏺",
      originalPrice: 2499,
      salePrice: 1499,
      discount: "40%",
      coins: 100,
      endsIn: "2:30:45"
    },
    {
      id: 2,
      name: "Wall Art Canvas",
      brand: "ArtDecor",
      image: "🖼️",
      originalPrice: 3999,
      salePrice: 2499,
      discount: "38%",
      coins: 150,
      endsIn: "4:15:20"
    }
  ];

  const products = [
    {
      id: 3,
      name: "Minimalist Side Table",
      brand: "Urban Ladder",
      image: "🪵",
      price: 6999,
      originalPrice: 8999,
      rating: 4.6,
      reviews: 234,
      coins: 55,
      freeShipping: true,
      inStock: true
    },
    {
      id: 4,
      name: "LED Strip Lights 5m",
      brand: "Philips",
      image: "💡",
      price: 1299,
      originalPrice: 1999,
      rating: 4.7,
      reviews: 890,
      coins: 15,
      freeShipping: true,
      inStock: true
    },
    {
      id: 5,
      name: "Cotton Throw Blanket",
      brand: "HomeCentre",
      image: "🧶",
      price: 1899,
      originalPrice: 2499,
      rating: 4.5,
      reviews: 456,
      coins: 20,
      freeShipping: false,
      inStock: true
    },
    {
      id: 6,
      name: "Cast Iron Cookware Set",
      brand: "Lodge",
      image: "🍳",
      price: 7499,
      originalPrice: 9999,
      rating: 4.8,
      reviews: 1230,
      coins: 60,
      freeShipping: true,
      inStock: true
    },
    {
      id: 7,
      name: "Macrame Wall Hanging",
      brand: "BohoDecor",
      image: "🧵",
      price: 999,
      originalPrice: 1499,
      rating: 4.4,
      reviews: 345,
      coins: 10,
      freeShipping: false,
      inStock: true
    },
    {
      id: 8,
      name: "Smart Plant Pot",
      brand: "GreenTech",
      image: "🪴",
      price: 2999,
      originalPrice: 3999,
      rating: 4.6,
      reviews: 567,
      coins: 25,
      freeShipping: true,
      inStock: false
    }
  ];

  const collections = [
    { id: 1, name: "Living Room Essentials", image: "🛋️", products: 45, discount: "Up to 40% off" },
    { id: 2, name: "Kitchen Must-Haves", image: "🍽️", products: 32, discount: "Up to 35% off" },
    { id: 3, name: "Bedroom Comfort", image: "🛏️", products: 28, discount: "Up to 30% off" }
  ];

  const benefits = [
    { icon: Truck, text: "Free Delivery", subtext: "Orders over ₹999" },
    { icon: RotateCcw, text: "Easy Returns", subtext: "7-day returns" },
    { icon: Shield, text: "Warranty", subtext: "1 year coverage" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Shop</h1>
          <div className="flex items-center gap-3">
            <button className="relative">
              <Heart className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-amber-600 rounded-full text-xs flex items-center justify-center font-bold">3</span>
            </button>
            <button className="relative">
              <ShoppingCart className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-amber-600 rounded-full text-xs flex items-center justify-center font-bold">2</span>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 outline-none text-gray-800"
          />
          <button className="bg-amber-100 p-2 rounded-lg">
            <Filter className="w-4 h-4 text-amber-600" />
          </button>
        </div>
      </div>

      {/* Benefits Bar */}
      <div className="bg-white px-4 py-3 flex justify-around border-b border-gray-100">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex items-center gap-2 text-center">
            <benefit.icon className="w-5 h-5 text-amber-500" />
            <div>
              <p className="text-xs font-medium text-gray-800">{benefit.text}</p>
              <p className="text-xs text-gray-500">{benefit.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Flash Deals */}
      <div className="px-4 mt-4">
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
            <div key={deal.id} className="flex-shrink-0 w-44 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-5xl relative">
                {deal.image}
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {deal.discount}
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">{deal.brand}</p>
                <h3 className="font-medium text-gray-800 text-sm truncate">{deal.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-gray-800">₹{deal.salePrice}</span>
                  <span className="text-xs text-gray-400 line-through">₹{deal.originalPrice}</span>
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

      {/* Collections */}
      <div className="px-4 mt-6">
        <h2 className="font-semibold text-gray-800 mb-3">Shop by Collection</h2>
        <div className="space-y-3">
          {collections.map((collection) => (
            <button key={collection.id} className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center text-3xl">
                {collection.image}
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium text-gray-800">{collection.name}</h3>
                <p className="text-sm text-gray-500">{collection.products} products</p>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full">
                  {collection.discount}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Categories Filter */}
      <div className="px-4 mt-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-gray-600 shadow-sm'
              }`}
            >
              {cat.name}
              <span className={`text-xs ${activeCategory === cat.id ? 'text-amber-200' : 'text-gray-400'}`}>
                ({cat.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500">1,250 products</span>
          <button className="flex items-center gap-1 text-sm text-gray-600">
            Sort: Popular
            <ChevronRight className="w-4 h-4 rotate-90" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-5xl relative">
                {product.image}
                <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                    <span className="bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                      Out of Stock
                    </span>
                  </div>
                )}
                {product.freeShipping && product.inStock && (
                  <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Truck className="w-3 h-3" />
                    Free
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">{product.brand}</p>
                <h3 className="font-medium text-gray-800 text-sm truncate">{product.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {product.rating} ({product.reviews})
                  </span>
                  <span className="text-yellow-600 text-xs font-medium">+{product.coins}🪙</span>
                </div>
                <button
                  disabled={!product.inStock}
                  className={`w-full mt-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 ${
                    product.inStock
                      ? 'bg-amber-500 text-white'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="px-4 mt-6 mb-4">
        <button className="w-full bg-white text-amber-600 py-3 rounded-xl font-medium shadow-sm flex items-center justify-center gap-2">
          Load More Products
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HomeHubShop;
