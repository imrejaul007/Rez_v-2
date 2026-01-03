import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Timer,
  Zap, ShoppingCart, Heart, Package, Truck, RotateCcw,
  Droplets, Battery, Lightbulb, Flame, Wifi, Shield
} from 'lucide-react';

// Essentia+ Home: Home Essentials & Utilities
// Backend API: GET /api/wasil/essentia/home
// Backend API: GET /api/wasil/essentia/products
// Backend API: GET /api/wasil/essentia/bills
// Backend API: POST /api/wasil/essentia/subscribe

const EssentiaHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '🏠', color: 'bg-emerald-500' },
    { id: 'water', name: 'Water', icon: '💧', color: 'bg-blue-500' },
    { id: 'gas', name: 'Gas', icon: '🔥', color: 'bg-orange-500' },
    { id: 'cleaning', name: 'Cleaning', icon: '🧹', color: 'bg-purple-500' },
    { id: 'kitchen', name: 'Kitchen', icon: '🍽️', color: 'bg-yellow-500' },
    { id: 'bathroom', name: 'Bathroom', icon: '🚿', color: 'bg-cyan-500' },
    { id: 'electric', name: 'Electric', icon: '⚡', color: 'bg-amber-500' }
  ];

  const quickReorder = [
    { id: 1, name: "20L Water Can", icon: "💧", price: 60, lastOrder: "3 days ago" },
    { id: 2, name: "LPG Cylinder", icon: "🔥", price: 903, lastOrder: "15 days ago" },
    { id: 3, name: "Bisleri 1L x 12", icon: "🥤", price: 240, lastOrder: "7 days ago" }
  ];

  const subscriptions = [
    {
      id: 1,
      name: "Daily Water Delivery",
      description: "20L can every day",
      price: 1500,
      frequency: "Monthly",
      active: true,
      nextDelivery: "Tomorrow, 7 AM"
    },
    {
      id: 2,
      name: "LPG Auto-Refill",
      description: "Auto-order when low",
      price: 903,
      frequency: "As needed",
      active: true,
      nextDelivery: "~15 days"
    }
  ];

  const flashDeals = [
    {
      id: 1,
      name: "Lizol Floor Cleaner",
      description: "2L Pack",
      image: "🧹",
      originalPrice: 399,
      salePrice: 299,
      discount: "25%",
      coins: 25,
      endsIn: "2:30:45"
    },
    {
      id: 2,
      name: "Harpic 10X Power",
      description: "1L x 2 Pack",
      image: "🚽",
      originalPrice: 349,
      salePrice: 249,
      discount: "29%",
      coins: 20,
      endsIn: "4:15:20"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Aquaguard Water Purifier",
      description: "RO + UV + Mineral",
      image: "💧",
      price: 12999,
      originalPrice: 16999,
      rating: 4.5,
      reviews: 2340,
      coins: 800,
      freeInstall: true
    },
    {
      id: 2,
      name: "Philips LED Bulb Pack",
      description: "9W x 6 Pack",
      image: "💡",
      price: 599,
      originalPrice: 799,
      rating: 4.6,
      reviews: 5670,
      coins: 45,
      freeInstall: false
    },
    {
      id: 3,
      name: "Vim Dishwash Bar",
      description: "500g x 3 Pack",
      image: "🍽️",
      price: 145,
      originalPrice: 180,
      rating: 4.4,
      reviews: 8900,
      coins: 12,
      freeInstall: false
    },
    {
      id: 4,
      name: "Surf Excel Matic",
      description: "4kg Pack",
      image: "🧺",
      price: 699,
      originalPrice: 850,
      rating: 4.7,
      reviews: 12500,
      coins: 55,
      freeInstall: false
    }
  ];

  const billPayments = [
    { id: 1, name: "Electricity", icon: "⚡", provider: "BESCOM", dueDate: "Jan 10", amount: 2450 },
    { id: 2, name: "Water", icon: "💧", provider: "BWSSB", dueDate: "Jan 15", amount: 580 },
    { id: 3, name: "Gas", icon: "🔥", provider: "Indane", dueDate: "On order", amount: 903 }
  ];

  const guarantees = [
    { icon: Truck, text: "Same Day Delivery" },
    { icon: Shield, text: "Genuine Products" },
    { icon: RotateCcw, text: "Easy Returns" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 pt-6 pb-6">
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
              <span className="text-white font-bold">890</span>
            </div>
            <button className="relative bg-white/20 p-2 rounded-full">
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search home essentials..."
            className="flex-1 outline-none text-gray-800"
          />
        </div>
      </div>

      {/* Guarantees */}
      <div className="bg-white px-4 py-3 flex justify-around border-b border-gray-100">
        {guarantees.map((g, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <g.icon className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-gray-600">{g.text}</span>
          </div>
        ))}
      </div>

      {/* Quick Reorder */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Quick Reorder</h2>
          <button className="text-emerald-600 text-sm">History</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {quickReorder.map((item) => (
            <button key={item.id} className="flex-shrink-0 bg-white rounded-xl p-4 shadow-sm min-w-[140px]">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="font-medium text-gray-800 text-sm mt-2">{item.name}</h3>
              <p className="text-emerald-600 font-bold">₹{item.price}</p>
              <p className="text-xs text-gray-500 mt-1">{item.lastOrder}</p>
              <div className="mt-2 bg-emerald-500 text-white text-xs py-1.5 rounded-lg text-center font-medium">
                Reorder
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Subscriptions */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Your Subscriptions</h2>
          <button className="text-emerald-600 text-sm">Manage</button>
        </div>

        <div className="space-y-2">
          {subscriptions.map((sub) => (
            <div key={sub.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-xl">
                {sub.name.includes('Water') ? '💧' : '🔥'}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 text-sm">{sub.name}</h3>
                <p className="text-xs text-gray-500">{sub.description}</p>
                <p className="text-xs text-emerald-600">Next: {sub.nextDelivery}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-800">₹{sub.price}</p>
                <p className="text-xs text-gray-500">{sub.frequency}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bill Payments */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Bill Payments</h2>
          <button className="text-emerald-600 text-sm">View All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {billPayments.map((bill) => (
            <div key={bill.id} className="flex-shrink-0 w-36 bg-white rounded-xl p-4 shadow-sm">
              <span className="text-2xl">{bill.icon}</span>
              <h3 className="font-medium text-gray-800 text-sm mt-2">{bill.name}</h3>
              <p className="text-xs text-gray-500">{bill.provider}</p>
              <p className="font-bold text-gray-800 mt-1">₹{bill.amount}</p>
              <p className="text-xs text-orange-600">Due: {bill.dueDate}</p>
              <button className="mt-2 w-full bg-emerald-500 text-white text-xs py-1.5 rounded-lg font-medium">
                Pay Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-6">
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
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-emerald-500' : ''
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
          <span className="text-red-500 text-sm font-medium">Limited Time</span>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {flashDeals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-44 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center text-5xl relative">
                {deal.image}
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                  {deal.discount}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm truncate">{deal.name}</h3>
                <p className="text-xs text-gray-500">{deal.description}</p>
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Shop Essentials</h2>
          <button className="text-emerald-600 text-sm">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center text-5xl relative">
                {product.image}
                {product.freeInstall && (
                  <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                    Free Install
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
                  <button className="bg-emerald-500 text-white px-4 py-1.5 rounded-lg text-xs font-medium">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Same Day Delivery Banner */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">Same Day Delivery</h3>
              <p className="text-emerald-100 text-sm">Order before 2 PM for today's delivery</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssentiaHome;
