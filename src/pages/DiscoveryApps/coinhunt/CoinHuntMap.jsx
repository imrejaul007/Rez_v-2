import React, { useState } from 'react';
import {
  MapPin, Navigation, Layers, Filter, ChevronDown, Star, Coins,
  Gift, Clock, Zap, X, ChevronRight, ArrowRight, Target, Compass
} from 'lucide-react';

// CoinHunt Map: Location-based Deal Discovery
// Backend API Required: GET /api/coinhunt/deals/nearby
// Backend API Required: GET /api/coinhunt/deals/map-bounds
// Backend API Required: POST /api/coinhunt/deals/claim

const CoinHuntMap = () => {
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Nearby deals on map (mock data - would come from API based on map bounds)
  const nearbyDeals = [
    {
      id: 1,
      merchant: "Pasta Paradise",
      category: "food",
      deal: "25% OFF",
      lat: 12.9716,
      lng: 77.5946,
      distance: "0.2 km",
      rating: 4.8,
      coinReward: 100,
      image: "🍝",
      expires: "Today",
      claimed: 45
    },
    {
      id: 2,
      merchant: "Coffee Corner",
      category: "cafe",
      deal: "Free Cookie",
      lat: 12.9720,
      lng: 77.5960,
      distance: "0.5 km",
      rating: 4.6,
      coinReward: 50,
      image: "☕",
      expires: "3 days",
      claimed: 120,
      hot: true
    },
    {
      id: 3,
      merchant: "Tech Store",
      category: "shopping",
      deal: "₹500 OFF",
      lat: 12.9700,
      lng: 77.5980,
      distance: "0.8 km",
      rating: 4.5,
      coinReward: 200,
      image: "📱",
      expires: "Week",
      claimed: 23
    },
    {
      id: 4,
      merchant: "Zen Spa",
      category: "wellness",
      deal: "40% OFF",
      lat: 12.9690,
      lng: 77.5920,
      distance: "1.2 km",
      rating: 4.9,
      coinReward: 300,
      image: "🧘",
      expires: "Today",
      claimed: 8,
      flash: true
    },
    {
      id: 5,
      merchant: "Fashion Hub",
      category: "shopping",
      deal: "BOGO",
      lat: 12.9740,
      lng: 77.5900,
      distance: "0.6 km",
      rating: 4.4,
      coinReward: 150,
      image: "👗",
      expires: "5 days",
      claimed: 67
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🔥' },
    { id: 'food', name: 'Food', icon: '🍽️' },
    { id: 'shopping', name: 'Shopping', icon: '🛍️' },
    { id: 'wellness', name: 'Wellness', icon: '🧘' },
    { id: 'cafe', name: 'Cafes', icon: '☕' }
  ];

  const filteredDeals = filterCategory === 'all'
    ? nearbyDeals
    : nearbyDeals.filter(d => d.category === filterCategory);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Map Area (Placeholder - would be actual map component) */}
      <div className="h-[60vh] bg-gradient-to-b from-green-100 to-green-200 relative">
        {/* Map controls */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <div className="bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-orange-500" />
            <input
              type="text"
              placeholder="Search location..."
              className="flex-1 outline-none text-gray-800"
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-orange-100 p-2 rounded-lg"
            >
              <Filter className="w-5 h-5 text-orange-600" />
            </button>
          </div>

          {/* Category filters */}
          <div className="flex gap-2 mt-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm ${
                  filterCategory === cat.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700'
                }`}
              >
                <span>{cat.icon}</span>
                <span className="text-sm">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Map markers (simulated) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 text-sm">[ Interactive Map Would Render Here ]</p>
        </div>

        {/* Deal markers on map */}
        {filteredDeals.map((deal, idx) => (
          <button
            key={deal.id}
            onClick={() => setSelectedDeal(deal)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
              deal.flash ? 'animate-pulse' : ''
            }`}
            style={{
              left: `${20 + (idx * 15)}%`,
              top: `${30 + (idx * 10)}%`
            }}
          >
            <div className={`relative ${selectedDeal?.id === deal.id ? 'scale-125' : ''} transition-transform`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg ${
                deal.flash
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                  : deal.hot
                    ? 'bg-gradient-to-r from-pink-500 to-red-500'
                    : 'bg-white'
              }`}>
                {deal.image}
              </div>
              {deal.flash && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Zap className="w-3 h-3 text-yellow-800" />
                </div>
              )}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                +{deal.coinReward}🪙
              </div>
            </div>
          </button>
        ))}

        {/* Current location button */}
        <button className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <Navigation className="w-6 h-6 text-orange-500" />
        </button>

        {/* Layers button */}
        <button className="absolute bottom-20 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <Layers className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Bottom Sheet - Deal List */}
      <div className="bg-white rounded-t-3xl -mt-6 relative z-10 min-h-[40vh]">
        <div className="flex justify-center py-3">
          <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
        </div>

        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">
              {filteredDeals.length} Deals Nearby
            </h2>
            <button className="text-orange-600 text-sm flex items-center gap-1">
              Sort by <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Deal Cards */}
          <div className="space-y-3">
            {filteredDeals.map((deal) => (
              <button
                key={deal.id}
                onClick={() => setSelectedDeal(deal)}
                className={`w-full bg-gray-50 rounded-xl p-4 flex gap-4 text-left transition-all ${
                  selectedDeal?.id === deal.id ? 'ring-2 ring-orange-400 bg-orange-50' : ''
                }`}
              >
                <div className="relative">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-3xl shadow-sm">
                    {deal.image}
                  </div>
                  {deal.flash && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 text-yellow-800" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">{deal.merchant}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-0.5">
                        <span className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          {deal.rating}
                        </span>
                        <span>•</span>
                        <span>{deal.distance}</span>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-700 font-medium px-2 py-1 rounded-lg text-sm">
                      {deal.deal}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {deal.expires}
                      </span>
                      <span>• {deal.claimed} claimed</span>
                    </div>
                    <span className="flex items-center gap-1 text-yellow-600 text-sm font-medium">
                      <Coins className="w-4 h-4" />
                      +{deal.coinReward}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Deal Modal */}
      {selectedDeal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-semibold text-gray-800">Deal Details</h2>
              <button onClick={() => setSelectedDeal(null)}>
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="p-4">
              {/* Merchant Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center text-5xl">
                  {selectedDeal.image}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{selectedDeal.merchant}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      {selectedDeal.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedDeal.distance}
                    </span>
                  </div>
                </div>
              </div>

              {/* Deal Card */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-orange-600">{selectedDeal.deal}</p>
                    <p className="text-sm text-gray-600 mt-1">Valid till {selectedDeal.expires}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-yellow-600">
                      <Coins className="w-5 h-5" />
                      <span className="text-xl font-bold">+{selectedDeal.coinReward}</span>
                    </div>
                    <p className="text-xs text-gray-500">coins on claim</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-gray-800">{selectedDeal.claimed}</p>
                  <p className="text-xs text-gray-500">Claimed</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-gray-800">{selectedDeal.distance}</p>
                  <p className="text-xs text-gray-500">Distance</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-gray-800">{selectedDeal.rating}</p>
                  <p className="text-xs text-gray-500">Rating</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium flex items-center justify-center gap-2">
                  <Compass className="w-5 h-5" />
                  Directions
                </button>
                <button className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2">
                  <Gift className="w-5 h-5" />
                  Claim Deal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinHuntMap;
