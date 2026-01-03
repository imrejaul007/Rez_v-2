import React, { useState } from 'react';
import {
  Clock, Zap, Filter, Star, ChevronDown, Flame, Bell,
  TrendingUp, Tag, Percent, Gift, ArrowRight, Heart
} from 'lucide-react';

// TechHunt Deals: Active Deals & Flash Sales
// Backend API: GET /api/techhunt/deals
// Backend API: GET /api/techhunt/deals/flash
// Backend API: GET /api/techhunt/deals/upcoming
// Backend API: POST /api/techhunt/deals/:id/alert

const TechHuntDeals = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const filters = [
    { id: 'all', name: 'All Deals' },
    { id: 'flash', name: 'Flash Sale' },
    { id: 'daily', name: 'Daily Deals' },
    { id: 'clearance', name: 'Clearance' },
    { id: 'bundle', name: 'Bundles' }
  ];

  const flashSaleTimer = {
    hours: 5,
    minutes: 42,
    seconds: 18
  };

  const flashDeals = [
    {
      id: 1,
      name: "AirPods Pro 2nd Gen",
      brand: "Apple",
      image: "🎧",
      originalPrice: 26900,
      dealPrice: 21999,
      discount: "18%",
      rating: 4.9,
      reviews: 4560,
      coins: 150,
      stock: 12,
      claimed: 88
    },
    {
      id: 2,
      name: "Samsung 55\" QLED TV",
      brand: "Samsung",
      image: "📺",
      originalPrice: 89999,
      dealPrice: 64999,
      discount: "28%",
      rating: 4.7,
      reviews: 890,
      coins: 350,
      stock: 5,
      claimed: 95
    },
    {
      id: 3,
      name: "iPad Air M2",
      brand: "Apple",
      image: "📱",
      originalPrice: 69900,
      dealPrice: 59900,
      discount: "14%",
      rating: 4.8,
      reviews: 1230,
      coins: 280,
      stock: 18,
      claimed: 72
    }
  ];

  const allDeals = [
    {
      id: 4,
      name: "Logitech MX Master 3S",
      brand: "Logitech",
      category: "Accessories",
      image: "🖱️",
      originalPrice: 10995,
      dealPrice: 8499,
      discount: "23%",
      rating: 4.8,
      reviews: 2340,
      coins: 80,
      endsIn: "2 days",
      type: "daily"
    },
    {
      id: 5,
      name: "Nintendo Switch OLED",
      brand: "Nintendo",
      category: "Gaming",
      image: "🎮",
      originalPrice: 34999,
      dealPrice: 29999,
      discount: "14%",
      rating: 4.9,
      reviews: 5670,
      coins: 180,
      endsIn: "1 day",
      type: "daily"
    },
    {
      id: 6,
      name: "Canon EOS R50",
      brand: "Canon",
      category: "Camera",
      image: "📷",
      originalPrice: 72999,
      dealPrice: 59999,
      discount: "18%",
      rating: 4.7,
      reviews: 456,
      coins: 320,
      endsIn: "3 days",
      type: "clearance"
    },
    {
      id: 7,
      name: "Dell UltraSharp 27\" 4K",
      brand: "Dell",
      category: "Monitor",
      image: "🖥️",
      originalPrice: 54999,
      dealPrice: 44999,
      discount: "18%",
      rating: 4.8,
      reviews: 789,
      coins: 250,
      endsIn: "4 days",
      type: "daily"
    },
    {
      id: 8,
      name: "Bose QuietComfort Ultra",
      brand: "Bose",
      category: "Audio",
      image: "🎧",
      originalPrice: 42900,
      dealPrice: 35900,
      discount: "16%",
      rating: 4.8,
      reviews: 1890,
      coins: 200,
      endsIn: "5 days",
      type: "bundle"
    }
  ];

  const upcomingDeals = [
    {
      id: 9,
      name: "MacBook Pro 14\" M3",
      brand: "Apple",
      image: "💻",
      estimatedDiscount: "15-20%",
      startsIn: "Tomorrow 12 PM",
      interested: 2340
    },
    {
      id: 10,
      name: "Sony A7 IV",
      brand: "Sony",
      image: "📷",
      estimatedDiscount: "12-18%",
      startsIn: "Jan 5, 10 AM",
      interested: 890
    }
  ];

  const filteredDeals = activeFilter === 'all'
    ? allDeals
    : activeFilter === 'flash'
    ? []
    : allDeals.filter(d => d.type === activeFilter);

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Deals</h1>
          <button className="bg-white/20 p-2 rounded-lg relative">
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full text-xs text-gray-800 flex items-center justify-center font-bold">5</span>
          </button>
        </div>

        {/* Flash Sale Timer */}
        <div className="bg-white/20 backdrop-blur rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-300" />
              <span className="text-white font-bold">Flash Sale Ends In</span>
            </div>
            <div className="flex gap-2">
              <div className="bg-white text-gray-800 px-2 py-1 rounded font-mono font-bold">
                {String(flashSaleTimer.hours).padStart(2, '0')}
              </div>
              <span className="text-white font-bold">:</span>
              <div className="bg-white text-gray-800 px-2 py-1 rounded font-mono font-bold">
                {String(flashSaleTimer.minutes).padStart(2, '0')}
              </div>
              <span className="text-white font-bold">:</span>
              <div className="bg-white text-gray-800 px-2 py-1 rounded font-mono font-bold">
                {String(flashSaleTimer.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flash Deals Carousel */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Flame className="w-5 h-5 text-red-500" />
            Lightning Deals
          </h2>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {flashDeals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-52 bg-white rounded-xl shadow-sm overflow-hidden relative">
              {/* Claimed Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
                <div
                  className="h-full bg-red-500"
                  style={{ width: `${deal.claimed}%` }}
                />
              </div>

              <div className="h-28 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-5xl relative pt-2">
                {deal.image}
                <button className="absolute top-3 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">{deal.brand}</p>
                <h3 className="font-medium text-gray-800 text-sm truncate">{deal.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-bold text-red-600">₹{deal.dealPrice.toLocaleString()}</span>
                  <span className="text-xs text-gray-400 line-through">₹{deal.originalPrice.toLocaleString()}</span>
                </div>
                <div className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full inline-block mt-2">
                  {deal.discount} OFF
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-orange-600">{deal.claimed}% claimed</span>
                  <span className="text-xs text-gray-500">{deal.stock} left</span>
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {deal.rating}
                  </span>
                  <span className="text-yellow-600 text-xs font-medium">+{deal.coins}🪙</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 mt-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeFilter === filter.id
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-600 shadow-sm'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-500">{filteredDeals.length} deals</span>
          <button className="flex items-center gap-2 text-sm text-gray-600">
            Sort: {sortBy}
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* All Deals */}
      <div className="px-4 mt-4">
        <div className="space-y-3">
          {filteredDeals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-5xl flex-shrink-0 relative">
                {deal.image}
                <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {deal.discount}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-gray-500">{deal.brand} • {deal.category}</p>
                    <h3 className="font-medium text-gray-800">{deal.name}</h3>
                  </div>
                  <button>
                    <Heart className="w-5 h-5 text-gray-300" />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-bold text-gray-800">₹{deal.dealPrice.toLocaleString()}</span>
                  <span className="text-sm text-gray-400 line-through">₹{deal.originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-3 mt-2 text-xs">
                  <span className="flex items-center gap-1 text-gray-500">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {deal.rating} ({deal.reviews})
                  </span>
                  <span className="flex items-center gap-1 text-red-500">
                    <Clock className="w-3 h-3" />
                    Ends in {deal.endsIn}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    deal.type === 'flash' ? 'bg-red-100 text-red-600' :
                    deal.type === 'daily' ? 'bg-blue-100 text-blue-600' :
                    deal.type === 'clearance' ? 'bg-orange-100 text-orange-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {deal.type.charAt(0).toUpperCase() + deal.type.slice(1)}
                  </span>
                  <span className="text-yellow-600 text-sm font-medium">+{deal.coins}🪙</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Deals */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">Upcoming Deals</h2>
          <button className="text-gray-600 text-sm">See All</button>
        </div>

        <div className="space-y-3">
          {upcomingDeals.map((deal) => (
            <div key={deal.id} className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 flex gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-4xl">
                {deal.image}
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400">{deal.brand}</p>
                <h3 className="font-medium text-white">{deal.name}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-green-400 text-sm font-medium">
                    Est. {deal.estimatedDiscount} OFF
                  </span>
                  <span className="text-gray-400 text-xs">
                    {deal.interested.toLocaleString()} interested
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Starts</p>
                <p className="text-yellow-400 text-sm font-medium">{deal.startsIn}</p>
                <button className="mt-2 bg-yellow-500 text-gray-900 text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                  <Bell className="w-3 h-3" />
                  Alert
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Drop Alerts */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">Price Drop Alerts</h3>
              <p className="text-blue-200 text-sm">Get notified when prices fall</p>
            </div>
            <ArrowRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechHuntDeals;
