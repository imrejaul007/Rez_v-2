import React, { useState } from 'react';
import {
  ArrowLeft, Star, Clock, MapPin, Heart, Share2, Info,
  Search, Plus, Minus, ShoppingBag, ChevronDown, Percent,
  Flame, Leaf, Award, Timer
} from 'lucide-react';

// Dinezy Restaurant: Restaurant Menu & Ordering
// Backend API: GET /api/wasil/dinezy/restaurants/:id
// Backend API: GET /api/wasil/dinezy/restaurants/:id/menu
// Backend API: POST /api/wasil/dinezy/cart/add
// Backend API: GET /api/wasil/dinezy/cart

const DinezyRestaurant = () => {
  const [activeCategory, setActiveCategory] = useState('recommended');
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Chicken Biryani", qty: 1, price: 299 }
  ]);

  const restaurant = {
    name: "Paradise Biryani",
    cuisine: "Biryani, North Indian, Mughlai",
    rating: 4.5,
    reviews: 5600,
    time: "25-30 min",
    distance: "1.2 km",
    priceForTwo: 400,
    address: "HSR Layout, Sector 3, Bengaluru",
    offer: "50% OFF up to ₹100",
    freeDelivery: true,
    coins: 40
  };

  const menuCategories = [
    { id: 'recommended', name: 'Recommended', count: 8 },
    { id: 'biryani', name: 'Biryani', count: 12 },
    { id: 'starters', name: 'Starters', count: 15 },
    { id: 'curries', name: 'Curries', count: 10 },
    { id: 'breads', name: 'Breads', count: 6 },
    { id: 'desserts', name: 'Desserts', count: 5 },
    { id: 'beverages', name: 'Beverages', count: 8 }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Chicken Dum Biryani",
      description: "Aromatic basmati rice layered with tender chicken pieces, slow-cooked with exotic spices",
      price: 299,
      image: "🍛",
      rating: 4.6,
      orders: 2340,
      veg: false,
      bestseller: true,
      spicy: true,
      customizable: true
    },
    {
      id: 2,
      name: "Mutton Dum Biryani",
      description: "Premium mutton pieces slow-cooked with aged basmati rice and signature spices",
      price: 399,
      image: "🍖",
      rating: 4.7,
      orders: 1890,
      veg: false,
      bestseller: true,
      spicy: true,
      customizable: true
    },
    {
      id: 3,
      name: "Veg Dum Biryani",
      description: "Garden fresh vegetables layered with fragrant rice and aromatic spices",
      price: 229,
      image: "🥘",
      rating: 4.4,
      orders: 1230,
      veg: true,
      bestseller: false,
      spicy: false,
      customizable: true
    },
    {
      id: 4,
      name: "Chicken 65",
      description: "Spicy deep-fried chicken chunks, a classic South Indian appetizer",
      price: 249,
      image: "🍗",
      rating: 4.5,
      orders: 1560,
      veg: false,
      bestseller: true,
      spicy: true,
      customizable: false
    },
    {
      id: 5,
      name: "Paneer Tikka",
      description: "Marinated cottage cheese cubes grilled to perfection in tandoor",
      price: 229,
      image: "🧀",
      rating: 4.3,
      orders: 890,
      veg: true,
      bestseller: false,
      spicy: false,
      customizable: true
    }
  ];

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Restaurant Header */}
      <div className="bg-white">
        <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-8xl relative">
          🍛
          <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
              <Heart className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
              <Share2 className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="px-4 py-4">
          <h1 className="text-xl font-bold text-gray-800">{restaurant.name}</h1>
          <p className="text-sm text-gray-500 mt-1">{restaurant.cuisine}</p>

          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1 bg-green-600 text-white text-sm font-bold px-2 py-1 rounded">
              <Star className="w-4 h-4" /> {restaurant.rating}
            </div>
            <span className="text-sm text-gray-500">{restaurant.reviews.toLocaleString()} ratings</span>
            <span className="text-sm text-gray-500">₹{restaurant.priceForTwo} for two</span>
          </div>

          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {restaurant.time}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {restaurant.distance}
            </span>
          </div>

          {/* Offers */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
              <Percent className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-700 font-medium">{restaurant.offer}</span>
            </div>
            {restaurant.freeDelivery && (
              <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
                <Timer className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-700 font-medium">Free Delivery</span>
              </div>
            )}
            <div className="flex items-center gap-2 bg-yellow-50 px-3 py-2 rounded-lg">
              <Award className="w-4 h-4 text-yellow-600" />
              <span className="text-sm text-yellow-700 font-medium">Earn {restaurant.coins}🪙 on this order</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-3 bg-white border-t border-gray-100">
        <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search within menu"
            className="flex-1 bg-transparent outline-none text-gray-800"
          />
        </div>
      </div>

      {/* Menu Categories */}
      <div className="bg-white border-t border-gray-100 sticky top-0 z-10">
        <div className="px-4 py-3 flex gap-3 overflow-x-auto">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-4">Recommended</h2>
        <div className="space-y-4">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 border-2 ${item.veg ? 'border-green-600' : 'border-red-600'} rounded-sm flex items-center justify-center`}>
                      <div className={`w-2 h-2 rounded-full ${item.veg ? 'bg-green-600' : 'bg-red-600'}`} />
                    </div>
                    {item.bestseller && (
                      <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-0.5 rounded">
                        Bestseller
                      </span>
                    )}
                    {item.spicy && <Flame className="w-4 h-4 text-red-500" />}
                  </div>
                  <h3 className="font-medium text-gray-800 mt-2">{item.name}</h3>
                  <p className="text-lg font-bold text-gray-800 mt-1">₹{item.price}</p>
                  <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span>{item.rating}</span>
                    <span>•</span>
                    <span>{item.orders.toLocaleString()} orders</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{item.description}</p>
                  {item.customizable && (
                    <p className="text-xs text-gray-400 mt-1">Customizable</p>
                  )}
                </div>
                <div className="relative">
                  <div className="w-28 h-28 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center text-5xl">
                    {item.image}
                  </div>
                  <button className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white border border-red-500 text-red-500 px-6 py-1.5 rounded-lg text-sm font-bold shadow-sm hover:bg-red-50">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Bar */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-20 left-0 right-0 px-4">
          <div className="bg-green-600 rounded-xl p-4 flex items-center justify-between shadow-lg">
            <div className="text-white">
              <p className="text-sm">{cartCount} item{cartCount > 1 ? 's' : ''}</p>
              <p className="font-bold">₹{cartTotal}</p>
            </div>
            <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-bold flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              View Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DinezyRestaurant;
