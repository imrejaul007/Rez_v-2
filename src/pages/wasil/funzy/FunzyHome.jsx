import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Ticket,
  Film, Music, Mic2, Trophy, PartyPopper, Calendar,
  Users, Heart, Zap, Timer, TrendingUp, Sparkles
} from 'lucide-react';

// Funzy Home: Entertainment & Event Tickets
// Backend API: GET /api/wasil/funzy/home
// Backend API: GET /api/wasil/funzy/events
// Backend API: GET /api/wasil/funzy/movies
// Backend API: GET /api/wasil/funzy/concerts

const FunzyHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '🎉', color: 'bg-purple-500' },
    { id: 'movies', name: 'Movies', icon: '🎬', color: 'bg-red-500' },
    { id: 'concerts', name: 'Concerts', icon: '🎵', color: 'bg-pink-500' },
    { id: 'sports', name: 'Sports', icon: '🏆', color: 'bg-green-500' },
    { id: 'comedy', name: 'Comedy', icon: '😂', color: 'bg-yellow-500' },
    { id: 'theatre', name: 'Theatre', icon: '🎭', color: 'bg-blue-500' },
    { id: 'events', name: 'Events', icon: '🎊', color: 'bg-orange-500' }
  ];

  const trendingMovies = [
    {
      id: 1,
      name: "Pushpa 2: The Rule",
      language: "Telugu/Hindi",
      image: "🎬",
      rating: 9.2,
      votes: "245K",
      genres: ["Action", "Drama"],
      format: ["2D", "IMAX"],
      coins: 150
    },
    {
      id: 2,
      name: "Fighter",
      language: "Hindi",
      image: "✈️",
      rating: 8.5,
      votes: "180K",
      genres: ["Action", "Patriotic"],
      format: ["2D", "3D", "IMAX"],
      coins: 120
    },
    {
      id: 3,
      name: "Kalki 2898 AD",
      language: "Telugu/Hindi",
      image: "🚀",
      rating: 8.8,
      votes: "320K",
      genres: ["Sci-Fi", "Action"],
      format: ["2D", "3D", "IMAX"],
      coins: 200
    }
  ];

  const liveEvents = [
    {
      id: 1,
      name: "Arijit Singh Live",
      type: "Concert",
      image: "🎤",
      date: "Jan 15, 2025",
      venue: "JLN Stadium, Delhi",
      price: 2499,
      coins: 300,
      soldOut: false,
      trending: true
    },
    {
      id: 2,
      name: "IPL 2025 - RCB vs MI",
      type: "Sports",
      image: "🏏",
      date: "Apr 10, 2025",
      venue: "M. Chinnaswamy Stadium",
      price: 1500,
      coins: 200,
      soldOut: false,
      trending: true
    },
    {
      id: 3,
      name: "Zakir Khan Stand-Up",
      type: "Comedy",
      image: "😂",
      date: "Feb 5, 2025",
      venue: "Phoenix Marketcity",
      price: 999,
      coins: 100,
      soldOut: false,
      trending: false
    }
  ];

  const quickBook = [
    { id: 1, name: "Movie Tonight", icon: "🍿", description: "Book in 2 taps" },
    { id: 2, name: "Weekend Events", icon: "🎉", description: "This Sat-Sun" },
    { id: 3, name: "Near You", icon: "📍", description: "Within 5km" },
    { id: 4, name: "Under ₹500", icon: "💰", description: "Budget picks" }
  ];

  const comingSoon = [
    { id: 1, name: "Dune: Part Three", date: "Mar 2025", image: "🏜️", interested: 45000 },
    { id: 2, name: "Coldplay India Tour", date: "Feb 2025", image: "🎸", interested: 120000 },
    { id: 3, name: "F1 India GP", date: "Oct 2025", image: "🏎️", interested: 89000 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-1 text-white/80 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Bengaluru</span>
            </div>
            <h1 className="text-lg font-bold text-white">What's on today?</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="text-lg">🪙</span>
              <span className="text-white font-bold">3,450</span>
            </div>
            <button className="bg-white/20 p-2 rounded-full">
              <Ticket className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search movies, events, concerts..."
            className="flex-1 outline-none text-gray-800"
          />
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
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-purple-500' : ''
              }`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-700 font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Book */}
      <div className="px-4 mt-6">
        <div className="grid grid-cols-4 gap-2">
          {quickBook.map((item) => (
            <button key={item.id} className="bg-white rounded-xl p-3 shadow-sm text-center">
              <span className="text-2xl">{item.icon}</span>
              <p className="text-xs font-medium text-gray-800 mt-1">{item.name}</p>
              <p className="text-xs text-gray-500">{item.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Trending Movies */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Film className="w-5 h-5 text-red-500" />
            Now Showing
          </h2>
          <button className="text-purple-600 text-sm">See All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {trendingMovies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-36 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-44 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-6xl relative">
                {movie.image}
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  {movie.rating}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm truncate">{movie.name}</h3>
                <p className="text-xs text-gray-500">{movie.language}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {movie.format.map((f, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">
                      {f}
                    </span>
                  ))}
                </div>
                <p className="text-yellow-600 text-xs mt-2">+{movie.coins}🪙 on booking</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Events */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            Live Events
          </h2>
          <button className="text-purple-600 text-sm">See All</button>
        </div>

        <div className="space-y-3">
          {liveEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-4xl">
                  {event.image}
                </div>
                <div className="flex-1 p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">{event.name}</h3>
                      <p className="text-xs text-purple-600">{event.type}</p>
                    </div>
                    {event.trending && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Hot
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <span className="font-bold text-gray-800">₹{event.price}</span>
                      <span className="text-xs text-gray-500"> onwards</span>
                    </div>
                    <span className="text-yellow-600 text-xs">+{event.coins}🪙</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Coming Soon</h2>
          <button className="text-purple-600 text-sm">Notify Me</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {comingSoon.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-5xl opacity-30">{item.image}</div>
              <div className="relative z-10">
                <h3 className="font-bold text-white text-sm">{item.name}</h3>
                <p className="text-purple-200 text-xs mt-1">{item.date}</p>
                <div className="flex items-center gap-1 mt-3 text-white/80 text-xs">
                  <Heart className="w-3 h-3" />
                  <span>{(item.interested / 1000).toFixed(0)}K interested</span>
                </div>
                <button className="mt-2 bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                  Get Notified
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exclusive Offers */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">2X Coins on Weekday Shows!</h3>
              <p className="text-yellow-100 text-sm">Book Mon-Thu for extra rewards</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunzyHome;
