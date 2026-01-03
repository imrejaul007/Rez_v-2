import React, { useState } from 'react';
import {
  Search, MapPin, Star, Users, Crown, ChevronRight, Filter,
  Compass, Coffee, Utensils, ShoppingBag, Dumbbell, Briefcase,
  TreePine, Music, Camera, Zap, TrendingUp
} from 'lucide-react';

// LocalEdge Explore: Discover Places & Check-in Spots
// Backend API: GET /api/localedge/places/explore
// Backend API: GET /api/localedge/places/categories
// Backend API: GET /api/localedge/places/trending

const LocalEdgeExplore = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All', icon: Compass, color: 'bg-blue-500' },
    { id: 'cafe', name: 'Cafes', icon: Coffee, color: 'bg-amber-500' },
    { id: 'restaurant', name: 'Restaurants', icon: Utensils, color: 'bg-red-500' },
    { id: 'shopping', name: 'Shopping', icon: ShoppingBag, color: 'bg-pink-500' },
    { id: 'fitness', name: 'Fitness', icon: Dumbbell, color: 'bg-green-500' },
    { id: 'cowork', name: 'Co-work', icon: Briefcase, color: 'bg-purple-500' },
    { id: 'parks', name: 'Parks', icon: TreePine, color: 'bg-emerald-500' },
    { id: 'entertainment', name: 'Fun', icon: Music, color: 'bg-indigo-500' }
  ];

  const trendingPlaces = [
    {
      id: 1,
      name: "Starbucks Reserve",
      type: "Cafe",
      image: "☕",
      rating: 4.8,
      checkins: 5678,
      distance: "0.5 km",
      currentMayor: { name: "Priya M.", avatar: "👩" },
      coinReward: 30,
      hasBonus: true,
      bonusText: "2x Weekend"
    },
    {
      id: 2,
      name: "Cubbon Park",
      type: "Park",
      image: "🌳",
      rating: 4.9,
      checkins: 12340,
      distance: "1.2 km",
      currentMayor: { name: "Raj K.", avatar: "👨" },
      coinReward: 25,
      hasBonus: false
    },
    {
      id: 3,
      name: "Phoenix Mall",
      type: "Shopping",
      image: "🛍️",
      rating: 4.6,
      checkins: 8920,
      distance: "2.3 km",
      currentMayor: { name: "Anita S.", avatar: "👸" },
      coinReward: 35,
      hasBonus: true,
      bonusText: "Weekend Bonus"
    }
  ];

  const nearbyPlaces = [
    {
      id: 4,
      name: "Coffee House",
      type: "Cafe",
      image: "☕",
      rating: 4.5,
      checkins: 890,
      distance: "0.2 km",
      coinReward: 20,
      isOpen: true
    },
    {
      id: 5,
      name: "Pasta Paradise",
      type: "Restaurant",
      image: "🍝",
      rating: 4.7,
      checkins: 2340,
      distance: "0.4 km",
      coinReward: 25,
      isOpen: true
    },
    {
      id: 6,
      name: "FitZone Gym",
      type: "Fitness",
      image: "🏋️",
      rating: 4.4,
      checkins: 560,
      distance: "0.6 km",
      coinReward: 30,
      isOpen: true
    },
    {
      id: 7,
      name: "Book Cafe",
      type: "Cafe",
      image: "📚",
      rating: 4.8,
      checkins: 1230,
      distance: "0.8 km",
      coinReward: 25,
      isOpen: false
    },
    {
      id: 8,
      name: "WeWork Hub",
      type: "Co-work",
      image: "💼",
      rating: 4.6,
      checkins: 780,
      distance: "1.0 km",
      coinReward: 35,
      isOpen: true
    }
  ];

  const topMayors = [
    { id: 1, name: "Priya M.", avatar: "👩", crowns: 12, checkins: 456 },
    { id: 2, name: "Raj K.", avatar: "👨", crowns: 8, checkins: 389 },
    { id: 3, name: "Anita S.", avatar: "👸", crowns: 6, checkins: 312 },
    { id: 4, name: "Dev P.", avatar: "🧑", crowns: 5, checkins: 278 }
  ];

  const filteredPlaces = activeCategory === 'all'
    ? nearbyPlaces
    : nearbyPlaces.filter(p => p.type.toLowerCase() === activeCategory);

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 pt-6 pb-6">
        <h1 className="text-xl font-bold text-white mb-4">Explore</h1>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search places to check-in..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none text-gray-800"
          />
          <button className="bg-blue-100 p-2 rounded-lg">
            <Filter className="w-4 h-4 text-blue-600" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 -mt-3">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex flex-col items-center gap-2 min-w-[60px] ${
                  activeCategory === cat.id ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <div className={`w-12 h-12 ${cat.color} rounded-xl flex items-center justify-center ${
                  activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                }`}>
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-600 font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Places */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Trending Now
          </h2>
          <button className="text-blue-600 text-sm">See All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {trendingPlaces.map((place) => (
            <div
              key={place.id}
              className="flex-shrink-0 w-64 bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <div className="h-24 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-5xl relative">
                {place.image}
                {place.hasBonus && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {place.bonusText}
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-800">{place.name}</h3>
                <p className="text-sm text-gray-500">{place.type}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {place.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {place.checkins.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {place.distance}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-purple-500" />
                    <span className="text-xs text-gray-600">{place.currentMayor.name}</span>
                  </div>
                  <span className="text-xs text-blue-600 font-medium">+{place.coinReward}🪙</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Mayors */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Crown className="w-5 h-5 text-purple-500" />
            Top Mayors
          </h2>
          <button className="text-blue-600 text-sm">Leaderboard</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {topMayors.map((mayor, idx) => (
            <div key={mayor.id} className="flex-shrink-0 w-28 bg-white rounded-xl p-3 text-center shadow-sm">
              <div className="relative inline-block">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-2xl mx-auto">
                  {mayor.avatar}
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </div>
              </div>
              <p className="text-sm font-medium text-gray-800 mt-2 truncate">{mayor.name}</p>
              <div className="flex items-center justify-center gap-1 text-xs text-purple-600 mt-1">
                <Crown className="w-3 h-3" />
                {mayor.crowns} crowns
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Places */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">Nearby Places</h2>
          <button className="flex items-center gap-1 text-blue-600 text-sm">
            <MapPin className="w-4 h-4" />
            Map View
          </button>
        </div>

        <div className="space-y-3">
          {filteredPlaces.map((place) => (
            <div key={place.id} className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                {place.image}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">{place.name}</h3>
                    <p className="text-sm text-gray-500">{place.type}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    place.isOpen ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {place.isOpen ? 'Open' : 'Closed'}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {place.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {place.checkins.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {place.distance}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-blue-600 font-medium">+{place.coinReward}🪙 on check-in</span>
                  <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    Check In
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Spots */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">Photo Spots Near You</h3>
              <p className="text-pink-100 text-sm">Get bonus coins for photos!</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalEdgeExplore;
