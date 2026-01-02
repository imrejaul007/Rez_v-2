import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Timer,
  Shirt, Package, Truck, Shield, Calendar, CheckCircle2,
  Zap, Sparkles, RotateCcw, Droplets
} from 'lucide-react';

// Washzy Home: Laundry & Dry Cleaning Services
// Backend API: GET /api/wasil/washzy/home
// Backend API: GET /api/wasil/washzy/services
// Backend API: GET /api/wasil/washzy/orders
// Backend API: POST /api/wasil/washzy/pickup

const WashzyHome = () => {
  const [activeService, setActiveService] = useState('all');

  const services = [
    { id: 'all', name: 'All', icon: '👕', color: 'bg-blue-500' },
    { id: 'wash', name: 'Wash & Fold', icon: '🧺', color: 'bg-cyan-500' },
    { id: 'iron', name: 'Iron Only', icon: '♨️', color: 'bg-orange-500' },
    { id: 'dryclean', name: 'Dry Clean', icon: '✨', color: 'bg-purple-500' },
    { id: 'premium', name: 'Premium Care', icon: '💎', color: 'bg-pink-500' },
    { id: 'shoe', name: 'Shoe Care', icon: '👟', color: 'bg-gray-700' }
  ];

  const activeOrder = {
    id: "WZ-12345",
    items: 12,
    status: "In Progress",
    pickupDate: "Jan 2, 2025",
    deliveryDate: "Jan 4, 2025",
    progress: 60
  };

  const quickServices = [
    { id: 1, name: "Wash & Fold", icon: "🧺", pricePerKg: 69, minKg: 5, coins: 50 },
    { id: 2, name: "Wash & Iron", icon: "👔", pricePerKg: 89, minKg: 5, coins: 70 },
    { id: 3, name: "Dry Clean", icon: "🧥", pricePerPc: 199, coins: 30 },
    { id: 4, name: "Steam Iron", icon: "♨️", pricePerPc: 25, coins: 20 }
  ];

  const pricingItems = [
    { name: "Shirt", wash: 30, iron: 15, dryclean: 150 },
    { name: "Trousers", wash: 40, iron: 20, dryclean: 180 },
    { name: "Saree", wash: 80, iron: 50, dryclean: 350 },
    { name: "Suit (2pc)", wash: null, iron: 80, dryclean: 450 },
    { name: "Blanket", wash: 200, iron: null, dryclean: 400 }
  ];

  const subscriptions = [
    {
      id: 1,
      name: "Weekly Wash",
      description: "10 items/week pickup",
      price: 999,
      originalPrice: 1299,
      frequency: "Weekly",
      coins: 200
    },
    {
      id: 2,
      name: "Family Pack",
      description: "30 items/month",
      price: 2499,
      originalPrice: 3499,
      frequency: "Monthly",
      coins: 500,
      popular: true
    }
  ];

  const guarantees = [
    { icon: Shield, text: "Quality Guarantee" },
    { icon: Timer, text: "48hr Delivery" },
    { icon: RotateCcw, text: "Free Re-wash" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-1 text-white/80 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Pickup from</span>
            </div>
            <h1 className="text-lg font-bold text-white">HSR Layout, Bengaluru</h1>
          </div>
          <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="text-lg">🪙</span>
            <span className="text-white font-bold">1,250</span>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search services..."
            className="flex-1 outline-none text-gray-800"
          />
        </div>
      </div>

      {/* Guarantees */}
      <div className="bg-white px-4 py-3 flex justify-around border-b border-gray-100">
        {guarantees.map((g, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <g.icon className="w-4 h-4 text-blue-500" />
            <span className="text-xs text-gray-600">{g.text}</span>
          </div>
        ))}
      </div>

      {/* Active Order Tracker */}
      {activeOrder && (
        <div className="px-4 mt-4">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-blue-100 text-xs">Order #{activeOrder.id}</p>
                <h3 className="text-white font-bold">{activeOrder.items} Items</h3>
              </div>
              <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                {activeOrder.status}
              </span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full"
                style={{ width: `${activeOrder.progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between mt-2 text-white/80 text-xs">
              <span>Pickup: {activeOrder.pickupDate}</span>
              <span>Delivery: {activeOrder.deliveryDate}</span>
            </div>
          </div>
        </div>
      )}

      {/* Services */}
      <div className="px-4 mt-6">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex flex-col items-center gap-2 min-w-[70px] ${
                activeService === service.id ? 'opacity-100' : 'opacity-70'
              }`}
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-2xl ${
                activeService === service.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''
              }`}>
                {service.icon}
              </div>
              <span className="text-xs text-gray-700 font-medium">{service.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Services */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Quick Services</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickServices.map((service) => (
            <button key={service.id} className="bg-white rounded-xl p-4 shadow-sm text-left">
              <span className="text-3xl">{service.icon}</span>
              <h3 className="font-medium text-gray-800 mt-2">{service.name}</h3>
              <div className="mt-1">
                {service.pricePerKg ? (
                  <p className="text-blue-600 font-bold">₹{service.pricePerKg}/kg</p>
                ) : (
                  <p className="text-blue-600 font-bold">₹{service.pricePerPc}/pc</p>
                )}
                {service.minKg && (
                  <p className="text-xs text-gray-500">Min {service.minKg}kg</p>
                )}
              </div>
              <span className="text-yellow-600 text-xs">+{service.coins}🪙</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price List */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Price List</h2>
          <button className="text-blue-600 text-sm">Full List</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-4 gap-2 p-3 bg-gray-50 border-b border-gray-100">
            <span className="text-xs font-medium text-gray-600">Item</span>
            <span className="text-xs font-medium text-gray-600 text-center">Wash</span>
            <span className="text-xs font-medium text-gray-600 text-center">Iron</span>
            <span className="text-xs font-medium text-gray-600 text-center">Dry Clean</span>
          </div>
          {pricingItems.map((item, idx) => (
            <div key={idx} className="grid grid-cols-4 gap-2 p-3 border-b border-gray-50 last:border-0">
              <span className="text-sm text-gray-800">{item.name}</span>
              <span className="text-sm text-gray-600 text-center">
                {item.wash ? `₹${item.wash}` : '-'}
              </span>
              <span className="text-sm text-gray-600 text-center">
                {item.iron ? `₹${item.iron}` : '-'}
              </span>
              <span className="text-sm text-gray-600 text-center">
                {item.dryclean ? `₹${item.dryclean}` : '-'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subscriptions */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Save with Subscriptions</h2>
        </div>

        <div className="space-y-3">
          {subscriptions.map((sub) => (
            <div key={sub.id} className={`bg-white rounded-xl p-4 shadow-sm border ${
              sub.popular ? 'border-blue-500' : 'border-gray-100'
            }`}>
              {sub.popular && (
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3 className="font-bold text-gray-800">{sub.name}</h3>
                  <p className="text-gray-500 text-sm">{sub.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">₹{sub.price}<span className="text-xs text-gray-500">/{sub.frequency.toLowerCase()}</span></p>
                  <p className="text-xs text-gray-400 line-through">₹{sub.originalPrice}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-yellow-600 text-xs">+{sub.coins}🪙/month</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Pickup CTA */}
      <div className="px-4 mt-6 mb-4">
        <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl p-4 flex items-center justify-center gap-2 shadow-lg">
          <Truck className="w-5 h-5" />
          <span className="font-bold">Schedule Pickup</span>
        </button>
      </div>
    </div>
  );
};

export default WashzyHome;
