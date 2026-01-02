import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Car,
  Wrench, Fuel, Shield, Settings, Sparkles, ShoppingCart,
  Timer, Zap, TrendingUp, Package, CheckCircle2, Calendar
} from 'lucide-react';

// AutoPerks Home: Automobile Accessories & Services
// Backend API: GET /api/wasil/autoperks/home
// Backend API: GET /api/wasil/autoperks/products
// Backend API: GET /api/wasil/autoperks/services
// Backend API: GET /api/wasil/autoperks/garages

const AutoPerksHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [vehicleType, setVehicleType] = useState('car');

  const categories = [
    { id: 'all', name: 'All', icon: '🚗', color: 'bg-blue-500' },
    { id: 'accessories', name: 'Accessories', icon: '🔧', color: 'bg-gray-700' },
    { id: 'tyres', name: 'Tyres', icon: '⭕', color: 'bg-black' },
    { id: 'batteries', name: 'Batteries', icon: '🔋', color: 'bg-green-500' },
    { id: 'care', name: 'Car Care', icon: '✨', color: 'bg-purple-500' },
    { id: 'services', name: 'Services', icon: '🔩', color: 'bg-orange-500' },
    { id: 'fuel', name: 'Fuel', icon: '⛽', color: 'bg-red-500' }
  ];

  const myVehicle = {
    name: "Hyundai Creta",
    year: 2022,
    variant: "SX (O) Diesel",
    lastService: "Nov 15, 2024",
    nextServiceDue: "Feb 15, 2025",
    fuelType: "Diesel"
  };

  const quickServices = [
    { id: 1, name: "Regular Service", icon: "🔧", price: 2999, duration: "4 hrs", coins: 200 },
    { id: 2, name: "AC Service", icon: "❄️", price: 1499, duration: "2 hrs", coins: 100 },
    { id: 3, name: "Car Wash", icon: "🚿", price: 299, duration: "30 min", coins: 25 },
    { id: 4, name: "Wheel Alignment", icon: "⭕", price: 499, duration: "1 hr", coins: 40 }
  ];

  const flashDeals = [
    {
      id: 1,
      name: "3M Car Polish Kit",
      description: "Professional Grade",
      image: "✨",
      originalPrice: 1999,
      salePrice: 1299,
      discount: "35%",
      coins: 100,
      endsIn: "3:45:20"
    },
    {
      id: 2,
      name: "Bosch Wiper Blades",
      description: "Pair - 22\" + 16\"",
      image: "🔧",
      originalPrice: 1299,
      salePrice: 799,
      discount: "38%",
      coins: 60,
      endsIn: "5:20:15"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Exide Car Battery",
      description: "65 AH, 5yr Warranty",
      image: "🔋",
      price: 6499,
      originalPrice: 7999,
      rating: 4.6,
      reviews: 2340,
      coins: 400,
      freeInstall: true
    },
    {
      id: 2,
      name: "MRF ZVTV Tyres",
      description: "205/55 R16 (Set of 4)",
      image: "⭕",
      price: 24999,
      originalPrice: 29999,
      rating: 4.7,
      reviews: 1560,
      coins: 1500,
      freeInstall: true
    },
    {
      id: 3,
      name: "Dash Camera",
      description: "1080P, Night Vision",
      image: "📹",
      price: 2999,
      originalPrice: 4499,
      rating: 4.4,
      reviews: 890,
      coins: 200,
      freeInstall: false
    },
    {
      id: 4,
      name: "Seat Covers Premium",
      description: "Leather, All Seats",
      image: "💺",
      price: 3999,
      originalPrice: 5999,
      rating: 4.5,
      reviews: 1230,
      coins: 250,
      freeInstall: true
    }
  ];

  const nearbyGarages = [
    { id: 1, name: "AutoMax Service Center", rating: 4.8, distance: "1.2 km", type: "Authorized" },
    { id: 2, name: "Quick Wheels Garage", rating: 4.5, distance: "2.5 km", type: "Multi-brand" },
    { id: 3, name: "Pitstop Auto", rating: 4.6, distance: "3.1 km", type: "Multi-brand" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 pt-6 pb-6">
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
              <span className="text-white font-bold">4,120</span>
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
            placeholder="Search accessories, services..."
            className="flex-1 outline-none text-gray-800"
          />
        </div>

        {/* Vehicle Toggle */}
        <div className="flex gap-2 mt-3">
          {['car', 'bike'].map((type) => (
            <button
              key={type}
              onClick={() => setVehicleType(type)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                vehicleType === type
                  ? 'bg-white text-blue-600'
                  : 'bg-white/20 text-white'
              }`}
            >
              {type === 'car' ? '🚗 Car' : '🏍️ Bike'}
            </button>
          ))}
        </div>
      </div>

      {/* My Vehicle Card */}
      <div className="px-4 -mt-2">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                🚗
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{myVehicle.name}</h3>
                <p className="text-xs text-gray-500">{myVehicle.year} • {myVehicle.variant}</p>
              </div>
            </div>
            <button className="text-blue-600 text-sm">Change</button>
          </div>
          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              <span>Last: {myVehicle.lastService}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-orange-600">
              <Calendar className="w-3 h-3" />
              <span>Next Due: {myVehicle.nextServiceDue}</span>
            </div>
          </div>
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

      {/* Quick Services */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Quick Services</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickServices.map((service) => (
            <button key={service.id} className="bg-white rounded-xl p-4 shadow-sm text-left">
              <span className="text-3xl">{service.icon}</span>
              <h3 className="font-medium text-gray-800 mt-2">{service.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-bold text-gray-800">₹{service.price}</span>
                <span className="text-xs text-gray-500">• {service.duration}</span>
              </div>
              <span className="text-yellow-600 text-xs">+{service.coins}🪙</span>
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
              <div className="h-28 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center text-5xl relative">
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Popular Products</h2>
          <button className="text-blue-600 text-sm">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center text-5xl relative">
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
                  <button className="bg-blue-500 text-white px-4 py-1.5 rounded-lg text-xs font-medium">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Garages */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Nearby Garages</h2>
          <button className="text-blue-600 text-sm">View Map</button>
        </div>

        <div className="space-y-2">
          {nearbyGarages.map((garage) => (
            <button key={garage.id} className="w-full bg-white rounded-xl p-3 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium text-gray-800 text-sm">{garage.name}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {garage.rating}
                  </span>
                  <span>•</span>
                  <span>{garage.distance}</span>
                  <span>•</span>
                  <span className="text-blue-600">{garage.type}</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* 60-min Promise */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Timer className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">60-Min Express Delivery</h3>
              <p className="text-blue-200 text-sm">For car care products & accessories</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoPerksHome;
