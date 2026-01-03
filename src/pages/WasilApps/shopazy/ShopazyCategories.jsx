import React, { useState } from 'react';
import { Search, Filter, Star, Heart, TrendingUp, Zap } from 'lucide-react';

// Shopazy Categories: Browse Shopping Categories
// Backend API: GET /api/wasil/shopazy/categories
// Backend API: GET /api/wasil/shopazy/products?category=

const ShopazyCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('electronics');

  const categories = [
    { id: 'electronics', name: 'Electronics', icon: '📱', count: 2340 },
    { id: 'fashion', name: 'Fashion', icon: '👗', count: 5670 },
    { id: 'home', name: 'Home & Living', icon: '🏠', count: 1890 },
    { id: 'sports', name: 'Sports', icon: '⚽', count: 890 },
    { id: 'books', name: 'Books', icon: '📚', count: 1200 },
    { id: 'toys', name: 'Toys', icon: '🧸', count: 780 }
  ];

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      image: '📱',
      price: 134900,
      originalPrice: 144900,
      rating: 4.8,
      reviews: 2340,
      discount: '7%',
      coins: 1349,
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      brand: 'Samsung',
      image: '📱',
      price: 79999,
      originalPrice: 89999,
      rating: 4.6,
      reviews: 1890,
      discount: '11%',
      coins: 800,
      badge: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Categories</h1>
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search products..." className="flex-1 outline-none" />
          <Filter className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 p-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`p-4 rounded-xl text-center ${
              selectedCategory === cat.id ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
          >
            <span className="text-3xl block mb-2">{cat.icon}</span>
            <p className="font-medium text-sm">{cat.name}</p>
            <p className="text-xs opacity-70">{cat.count} items</p>
          </button>
        ))}
      </div>

      <div className="px-4">
        <h2 className="font-bold text-gray-800 mb-3">Popular in {categories.find(c => c.id === selectedCategory)?.name}</h2>
        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative h-32 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-5xl">
                {product.image}
                {product.badge && (
                  <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.badge}
                  </div>
                )}
                <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
                <div className="absolute bottom-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount} OFF
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">{product.brand}</p>
                <h3 className="font-medium text-gray-800 text-sm line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs text-gray-600">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>
                <div className="mt-2">
                  <p className="font-bold text-gray-800">₹{product.price.toLocaleString()}</p>
                  <p className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</p>
                </div>
                <p className="text-xs text-yellow-600 mt-1">+{product.coins}🪙</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopazyCategories;
