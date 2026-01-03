import React, { useState } from 'react';
import {
  Heart, Bell, Trash2, Share2, TrendingDown, TrendingUp,
  Clock, Tag, ShoppingCart, ChevronRight, Plus, Filter,
  Star, AlertCircle, Check
} from 'lucide-react';

// TechHunt Wishlist: Saved Products & Price Alerts
// Backend API: GET /api/techhunt/wishlist/:userId
// Backend API: POST /api/techhunt/wishlist/add
// Backend API: DELETE /api/techhunt/wishlist/:productId
// Backend API: PUT /api/techhunt/wishlist/:productId/alert

const TechHuntWishlist = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [editMode, setEditMode] = useState(false);

  const tabs = [
    { id: 'all', name: 'All Items', count: 12 },
    { id: 'alerts', name: 'Price Alerts', count: 5 },
    { id: 'dropped', name: 'Price Drops', count: 3 }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "MacBook Air M3",
      brand: "Apple",
      image: "💻",
      currentPrice: 114900,
      originalPrice: 114900,
      lowestPrice: 99900,
      priceChange: 0,
      hasAlert: true,
      alertPrice: 105000,
      rating: 4.9,
      reviews: 890,
      coins: 400,
      addedDate: "Dec 15",
      inStock: true,
      hasDeal: false
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      brand: "Sony",
      image: "🎧",
      currentPrice: 27990,
      originalPrice: 34990,
      lowestPrice: 26990,
      priceChange: -7000,
      hasAlert: true,
      alertPrice: 28000,
      rating: 4.8,
      reviews: 2340,
      coins: 180,
      addedDate: "Dec 10",
      inStock: true,
      hasDeal: true
    },
    {
      id: 3,
      name: "iPad Pro 12.9\"",
      brand: "Apple",
      image: "📱",
      currentPrice: 119900,
      originalPrice: 112900,
      lowestPrice: 105900,
      priceChange: 7000,
      hasAlert: false,
      rating: 4.9,
      reviews: 567,
      coins: 450,
      addedDate: "Nov 28",
      inStock: true,
      hasDeal: false
    },
    {
      id: 4,
      name: "LG C3 55\" OLED TV",
      brand: "LG",
      image: "📺",
      currentPrice: 129999,
      originalPrice: 154999,
      lowestPrice: 119999,
      priceChange: -25000,
      hasAlert: true,
      alertPrice: 120000,
      rating: 4.8,
      reviews: 456,
      coins: 500,
      addedDate: "Dec 1",
      inStock: true,
      hasDeal: true
    },
    {
      id: 5,
      name: "DJI Mini 4 Pro",
      brand: "DJI",
      image: "🚁",
      currentPrice: 104900,
      originalPrice: 104900,
      lowestPrice: 94900,
      priceChange: 0,
      hasAlert: false,
      rating: 4.7,
      reviews: 234,
      coins: 380,
      addedDate: "Dec 20",
      inStock: false,
      hasDeal: false
    }
  ];

  const priceDrops = wishlistItems.filter(item => item.priceChange < 0);
  const alertItems = wishlistItems.filter(item => item.hasAlert);

  const getDisplayItems = () => {
    switch (activeTab) {
      case 'alerts':
        return alertItems;
      case 'dropped':
        return priceDrops;
      default:
        return wishlistItems;
    }
  };

  const stats = {
    totalItems: wishlistItems.length,
    totalValue: wishlistItems.reduce((sum, item) => sum + item.currentPrice, 0),
    potentialSavings: wishlistItems.reduce((sum, item) => sum + (item.originalPrice - item.currentPrice), 0),
    activeAlerts: alertItems.length
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Wishlist</h1>
          <div className="flex items-center gap-2">
            <button className="bg-white/20 p-2 rounded-lg">
              <Share2 className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => setEditMode(!editMode)}
              className={`px-3 py-2 rounded-lg text-sm font-medium ${
                editMode ? 'bg-white text-pink-600' : 'bg-white/20 text-white'
              }`}
            >
              {editMode ? 'Done' : 'Edit'}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/20 rounded-xl p-3">
            <p className="text-pink-200 text-xs">Total Value</p>
            <p className="text-white font-bold">₹{stats.totalValue.toLocaleString()}</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3">
            <p className="text-pink-200 text-xs">Potential Savings</p>
            <p className="text-green-300 font-bold">₹{stats.potentialSavings.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mt-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-gray-600 shadow-sm'
              }`}
            >
              {tab.name}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeTab === tab.id ? 'bg-white/20' : 'bg-gray-200'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Items */}
      <div className="px-4 mt-4">
        <div className="space-y-3">
          {getDisplayItems().map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-4">
                {editMode && (
                  <button className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 self-center">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                )}

                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-4xl flex-shrink-0 relative">
                  {item.image}
                  {item.hasDeal && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Tag className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-gray-500">{item.brand}</p>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                    </div>
                    {!editMode && (
                      <button className="text-pink-500">
                        <Heart className="w-5 h-5 fill-pink-500" />
                      </button>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold text-gray-800">
                      ₹{item.currentPrice.toLocaleString()}
                    </span>
                    {item.priceChange !== 0 && (
                      <span className={`flex items-center gap-0.5 text-xs font-medium ${
                        item.priceChange < 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.priceChange < 0 ? (
                          <TrendingDown className="w-3 h-3" />
                        ) : (
                          <TrendingUp className="w-3 h-3" />
                        )}
                        ₹{Math.abs(item.priceChange).toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mt-2 text-xs">
                    <span className="flex items-center gap-1 text-gray-500">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      {item.rating}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full ${
                      item.inStock ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                    <span className="text-gray-400">Added {item.addedDate}</span>
                  </div>

                  {/* Alert Status */}
                  {item.hasAlert && (
                    <div className="flex items-center gap-2 mt-2 bg-blue-50 px-2 py-1 rounded-lg">
                      <Bell className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-blue-600">
                        Alert set for ₹{item.alertPrice.toLocaleString()}
                      </span>
                      {item.currentPrice <= item.alertPrice && (
                        <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                          Price Hit!
                        </span>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-3">
                    {item.inStock && (
                      <button className="flex-1 bg-gray-800 text-white text-xs py-2 rounded-lg font-medium flex items-center justify-center gap-1">
                        <ShoppingCart className="w-3 h-3" />
                        Buy Now
                      </button>
                    )}
                    {!item.hasAlert && (
                      <button className="flex-1 bg-blue-100 text-blue-600 text-xs py-2 rounded-lg font-medium flex items-center justify-center gap-1">
                        <Bell className="w-3 h-3" />
                        Set Alert
                      </button>
                    )}
                    <span className="text-yellow-600 text-xs font-medium">+{item.coins}🪙</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price History Info */}
      <div className="px-4 mt-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Smart Price Tracking</h3>
              <p className="text-blue-200 text-sm mt-1">
                We track price history and notify you when items hit your target price or all-time low.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Add */}
      <div className="px-4 mt-6 mb-4">
        <button className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center justify-center gap-2 text-gray-600">
          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
            <Plus className="w-5 h-5 text-pink-500" />
          </div>
          <span className="font-medium">Add more products</span>
        </button>
      </div>

      {/* Summary */}
      <div className="px-4 mb-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Earn when you buy</p>
              <p className="text-lg font-bold text-yellow-600">
                Up to {wishlistItems.reduce((sum, item) => sum + item.coins, 0).toLocaleString()}🪙
              </p>
            </div>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2">
              Buy All In Stock
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechHuntWishlist;
