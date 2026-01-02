import React, { useState } from 'react';
import {
  Search, MapPin, Clock, Star, Filter, ChevronRight, Flame,
  Utensils, Coffee, Pizza, Salad, IceCream, Soup, Sandwich,
  Timer, Percent, Heart, ShoppingBag, Zap
} from 'lucide-react';

// Dinezy Home: Food & Dining Discovery
// Backend API: GET /api/wasil/dinezy/home
// Backend API: GET /api/wasil/dinezy/restaurants
// Backend API: GET /api/wasil/dinezy/cuisines
// Backend API: GET /api/wasil/dinezy/deals

const DinezyHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Utensils, color: 'bg-red-500' },
    { id: 'biryani', name: 'Biryani', emoji: '🍚', color: 'bg-orange-500' },
    { id: 'pizza', name: 'Pizza', emoji: '🍕', color: 'bg-yellow-500' },
    { id: 'burger', name: 'Burgers', emoji: '🍔', color: 'bg-green-500' },
    { id: 'chinese', name: 'Chinese', emoji: '🥡', color: 'bg-red-400' },
    { id: 'south', name: 'South Indian', emoji: '🥘', color: 'bg-amber-500' },
    { id: 'dessert', name: 'Desserts', emoji: '🍰', color: 'bg-pink-500' },
    { id: 'healthy', name: 'Healthy', emoji: '🥗', color: 'bg-emerald-500' }
  ];

  const flashDeals = [
    {
      id: 1,
      restaurant: "Biryani Blues",
      offer: "60% OFF up to ₹120",
      image: "🍚",
      rating: 4.3,
      time: "25-30 min",
      minOrder: 199,
      endsIn: "1:45:30"
    },
    {
      id: 2,
      restaurant: "Pizza Hut",
      offer: "Buy 1 Get 1 Free",
      image: "🍕",
      rating: 4.1,
      time: "30-35 min",
      minOrder: 299,
      endsIn: "2:30:15"
    }
  ];

  const restaurants = [
    {
      id: 1,
      name: "Paradise Biryani",
      cuisine: "Biryani, North Indian",
      image: "🍛",
      rating: 4.5,
      reviews: 5600,
      time: "25-30 min",
      distance: "1.2 km",
      priceForTwo: 400,
      offer: "50% OFF up to ₹100",
      promoted: true,
      coins: 40
    },
    {
      id: 2,
      name: "Domino's Pizza",
      cuisine: "Pizza, Italian",
      image: "🍕",
      rating: 4.2,
      reviews: 8900,
      time: "20-25 min",
      distance: "0.8 km",
      priceForTwo: 500,
      offer: "₹75 OFF on ₹299+",
      promoted: false,
      coins: 35
    },
    {
      id: 3,
      name: "Wow Momos",
      cuisine: "Chinese, Fast Food",
      image: "🥟",
      rating: 4.0,
      reviews: 3400,
      time: "15-20 min",
      distance: "0.5 km",
      priceForTwo: 250,
      offer: "20% OFF",
      promoted: false,
      coins: 25
    },
    {
      id: 4,
      name: "Saravana Bhavan",
      cuisine: "South Indian",
      image: "🥘",
      rating: 4.4,
      reviews: 4500,
      time: "30-35 min",
      distance: "2.0 km",
      priceForTwo: 350,
      offer: "Free Delivery",
      promoted: true,
      coins: 30
    }
  ];

  const reorders = [
    { id: 1, name: "Chicken Biryani", restaurant: "Paradise", image: "🍛", price: 299 },
    { id: 2, name: "Margherita Pizza", restaurant: "Domino's", image: "🍕", price: 249 },
    { id: 3, name: "Veg Thali", restaurant: "Saravana", image: "🥘", price: 199 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-1 text-white/80 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Deliver to</span>
            </div>
            <h1 className="text-lg font-bold text-white">HSR Layout, Bengaluru</h1>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
            <span className="text-lg">🪙</span>
            <span className="text-white font-bold">1,250</span>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or dish"
            className="flex-1 outline-none text-gray-800"
          />
          <button className="bg-red-100 p-2 rounded-lg">
            <Filter className="w-4 h-4 text-red-600" />
          </button>
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
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-red-500' : ''
              }`}>
                {cat.emoji || <cat.icon className="w-6 h-6 text-white" />}
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
          <span className="text-red-500 text-sm font-medium">Limited Time</span>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {flashDeals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-64 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-6xl opacity-30">{deal.image}</div>
              <div className="relative z-10">
                <h3 className="text-white font-bold">{deal.restaurant}</h3>
                <p className="text-yellow-200 font-semibold text-lg">{deal.offer}</p>
                <div className="flex items-center gap-3 mt-2 text-white/80 text-xs">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" /> {deal.rating}
                  </span>
                  <span>{deal.time}</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 text-white text-xs">
                    <Timer className="w-3 h-3" />
                    Ends in {deal.endsIn}
                  </div>
                  <button className="bg-white text-red-600 px-3 py-1 rounded-full text-xs font-bold">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reorder */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Order Again</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {reorders.map((item) => (
            <button key={item.id} className="flex-shrink-0 bg-white rounded-xl p-3 shadow-sm flex items-center gap-3 min-w-[180px]">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">
                {item.image}
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.restaurant}</p>
                <p className="text-sm font-bold text-gray-800">₹{item.price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Restaurants */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Restaurants Near You</h2>
          <button className="text-red-500 text-sm">See All</button>
        </div>

        <div className="space-y-4">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative">
                <div className="h-36 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-7xl">
                  {restaurant.image}
                </div>
                {restaurant.promoted && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Promoted
                  </div>
                )}
                {restaurant.offer && (
                  <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {restaurant.offer}
                  </div>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800">{restaurant.name}</h3>
                    <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                    <Star className="w-3 h-3" /> {restaurant.rating}
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {restaurant.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {restaurant.distance}
                  </span>
                  <span>₹{restaurant.priceForTwo} for two</span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <span className="text-yellow-600 text-sm font-medium">+{restaurant.coins}🪙 on order</span>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 60 Min Promise */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Timer className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">60-Minute Delivery Promise</h3>
              <p className="text-green-100 text-sm">Or your delivery is FREE!</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinezyHome;
