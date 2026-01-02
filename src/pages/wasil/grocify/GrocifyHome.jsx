import React, { useState } from 'react';
import {
  Search, MapPin, Clock, ChevronRight, Zap, Percent,
  Apple, Milk, Carrot, Beef, Fish, Egg, Wheat, Coffee,
  ShoppingCart, Timer, Flame, Star, Plus
} from 'lucide-react';

// Grocify Home: Groceries & Daily Essentials
// Backend API: GET /api/wasil/grocify/home
// Backend API: GET /api/wasil/grocify/categories
// Backend API: GET /api/wasil/grocify/products
// Backend API: GET /api/wasil/grocify/deals

const GrocifyHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '🛒', color: 'bg-green-500' },
    { id: 'fruits', name: 'Fruits', icon: '🍎', color: 'bg-red-400' },
    { id: 'vegetables', name: 'Vegetables', icon: '🥬', color: 'bg-green-400' },
    { id: 'dairy', name: 'Dairy', icon: '🥛', color: 'bg-blue-400' },
    { id: 'meat', name: 'Meat', icon: '🍖', color: 'bg-red-500' },
    { id: 'bread', name: 'Bakery', icon: '🍞', color: 'bg-amber-400' },
    { id: 'snacks', name: 'Snacks', icon: '🍿', color: 'bg-yellow-400' },
    { id: 'beverages', name: 'Drinks', icon: '🧃', color: 'bg-orange-400' }
  ];

  const flashDeals = [
    {
      id: 1,
      name: "Fresh Bananas",
      unit: "1 dozen",
      image: "🍌",
      originalPrice: 60,
      salePrice: 39,
      discount: "35%",
      endsIn: "2:30:00"
    },
    {
      id: 2,
      name: "Amul Butter",
      unit: "500g",
      image: "🧈",
      originalPrice: 285,
      salePrice: 245,
      discount: "14%",
      endsIn: "4:15:00"
    },
    {
      id: 3,
      name: "Tata Salt",
      unit: "1kg",
      image: "🧂",
      originalPrice: 28,
      salePrice: 22,
      discount: "21%",
      endsIn: "1:45:00"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      unit: "500g",
      image: "🍅",
      price: 35,
      originalPrice: 45,
      rating: 4.5,
      coins: 3,
      inStock: true
    },
    {
      id: 2,
      name: "Onions",
      unit: "1kg",
      image: "🧅",
      price: 40,
      originalPrice: 50,
      rating: 4.3,
      coins: 4,
      inStock: true
    },
    {
      id: 3,
      name: "Amul Milk",
      unit: "1L",
      image: "🥛",
      price: 64,
      originalPrice: 64,
      rating: 4.8,
      coins: 5,
      inStock: true
    },
    {
      id: 4,
      name: "Farm Eggs",
      unit: "12 pcs",
      image: "🥚",
      price: 85,
      originalPrice: 95,
      rating: 4.6,
      coins: 8,
      inStock: true
    },
    {
      id: 5,
      name: "Whole Wheat Bread",
      unit: "400g",
      image: "🍞",
      price: 45,
      originalPrice: 50,
      rating: 4.4,
      coins: 4,
      inStock: true
    },
    {
      id: 6,
      name: "Chicken Breast",
      unit: "500g",
      image: "🍗",
      price: 220,
      originalPrice: 260,
      rating: 4.7,
      coins: 20,
      inStock: false
    }
  ];

  const recentOrders = [
    { id: 1, items: "Milk, Bread, Eggs", total: 194, date: "Yesterday" },
    { id: 2, items: "Vegetables basket", total: 345, date: "2 days ago" }
  ];

  const quickLists = [
    { id: 1, name: "Weekly Essentials", items: 12, icon: "📋" },
    { id: 2, name: "Breakfast Items", items: 6, icon: "🍳" },
    { id: 3, name: "Party Snacks", items: 8, icon: "🎉" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 pt-6 pb-6">
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
              <span className="text-white font-bold">850</span>
            </div>
            <button className="relative bg-white/20 p-2 rounded-full">
              <ShoppingCart className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 text-gray-800 rounded-full text-xs flex items-center justify-center font-bold">3</span>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search groceries, fruits, vegetables..."
            className="flex-1 outline-none text-gray-800"
          />
        </div>

        {/* Delivery Promise */}
        <div className="flex items-center gap-2 mt-3 bg-white/20 rounded-lg px-3 py-2">
          <Timer className="w-4 h-4 text-yellow-300" />
          <span className="text-white text-sm font-medium">60-min delivery on all orders</span>
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
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-green-500' : ''
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
            Flash Deals
          </h2>
          <span className="text-green-600 text-sm font-medium">View All</span>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {flashDeals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-36 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-24 bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center text-5xl relative">
                {deal.image}
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                  {deal.discount}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm truncate">{deal.name}</h3>
                <p className="text-xs text-gray-500">{deal.unit}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-gray-800">₹{deal.salePrice}</span>
                  <span className="text-xs text-gray-400 line-through">₹{deal.originalPrice}</span>
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs text-red-500">
                  <Timer className="w-3 h-3" />
                  {deal.endsIn}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Lists */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Your Lists</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {quickLists.map((list) => (
            <button key={list.id} className="flex-shrink-0 bg-white rounded-xl p-4 shadow-sm flex items-center gap-3 min-w-[160px]">
              <span className="text-3xl">{list.icon}</span>
              <div className="text-left">
                <p className="font-medium text-gray-800 text-sm">{list.name}</p>
                <p className="text-xs text-gray-500">{list.items} items</p>
              </div>
            </button>
          ))}
          <button className="flex-shrink-0 bg-green-50 border-2 border-dashed border-green-300 rounded-xl p-4 flex items-center gap-2 min-w-[140px]">
            <Plus className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-medium text-sm">New List</span>
          </button>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Order Again</h2>
        <div className="space-y-3">
          {recentOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">{order.items}</p>
                <p className="text-sm text-gray-500">{order.date} • ₹{order.total}</p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Reorder
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Popular Products</h2>
          <button className="text-green-600 text-sm">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div key={product.id} className={`bg-white rounded-xl shadow-sm overflow-hidden ${!product.inStock ? 'opacity-60' : ''}`}>
              <div className="h-28 bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center text-5xl relative">
                {product.image}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center">
                    <span className="bg-white text-gray-800 text-xs font-medium px-2 py-1 rounded">Out of Stock</span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm truncate">{product.name}</h3>
                <p className="text-xs text-gray-500">{product.unit}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-gray-800">₹{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-600 text-xs">+{product.coins}🪙</span>
                  <button
                    disabled={!product.inStock}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium ${
                      product.inStock
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free Delivery Banner */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🚚</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">Free Delivery</h3>
              <p className="text-green-100 text-sm">On orders above ₹199</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrocifyHome;
