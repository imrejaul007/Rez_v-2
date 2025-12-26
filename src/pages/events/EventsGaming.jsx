import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Gamepad2, Users, Clock, MapPin, Star, Trophy, Zap, Target, TrendingUp } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function EventsGaming() {
  const navigate = useNavigate();

  const gamingVenues = [
    {
      id: 1,
      name: 'GameZone Arena',
      type: 'Gaming Cafe',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
      location: 'Koramangala, Bangalore',
      rating: 4.7,
      reviews: 1850,
      openTime: '11:00 AM - 11:00 PM',
      pricePerHour: 150,
      originalPrice: 250,
      capacity: '50 Players',
      highlights: ['30+ PCs', 'PS5 Stations', 'VR Gaming'],
      bestFor: ['PC Gaming', 'Console Gaming'],
      tournaments: 'Weekly Tournaments'
    },
    {
      id: 2,
      name: 'VR World Experience',
      type: 'VR Gaming',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400',
      location: 'Indiranagar, Bangalore',
      rating: 4.9,
      reviews: 2340,
      openTime: '12:00 PM - 10:00 PM',
      pricePerHour: 399,
      originalPrice: 599,
      capacity: '20 Stations',
      highlights: ['10+ VR Games', 'Multiplayer VR', 'Latest Headsets'],
      bestFor: ['VR Enthusiasts', 'Groups'],
      tournaments: 'VR Tournaments'
    },
    {
      id: 3,
      name: 'Retro Arcade Palace',
      type: 'Arcade',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
      location: 'HSR Layout, Bangalore',
      rating: 4.6,
      reviews: 980,
      openTime: '2:00 PM - 11:00 PM',
      pricePerHour: 99,
      originalPrice: 150,
      capacity: '40+ Machines',
      highlights: ['Classic Arcade', 'Racing Simulators', 'Air Hockey'],
      bestFor: ['Families', 'Nostalgia Lovers'],
      tournaments: 'Weekend Challenges'
    },
    {
      id: 4,
      name: 'Esports Hub',
      type: 'Esports Center',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
      location: 'Whitefield, Bangalore',
      rating: 4.8,
      reviews: 3120,
      openTime: '10:00 AM - 12:00 AM',
      pricePerHour: 200,
      originalPrice: 350,
      capacity: '100+ Setups',
      highlights: ['Pro Gaming PCs', 'Streaming Setup', 'Tournament Arena'],
      bestFor: ['Esports', 'Streamers'],
      tournaments: 'Daily Tournaments'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Gaming', icon: '🎮', color: 'from-purple-500/20 to-pink-500/20' },
    { id: 'pc', name: 'PC Gaming', icon: '💻', color: 'from-blue-500/20 to-cyan-500/20' },
    { id: 'console', name: 'Console', icon: '🎮', color: 'from-red-500/20 to-orange-500/20' },
    { id: 'vr', name: 'VR Gaming', icon: '🥽', color: 'from-green-500/20 to-emerald-500/20' },
    { id: 'arcade', name: 'Arcade', icon: '🕹️', color: 'from-yellow-500/20 to-amber-500/20' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Gaming-Themed Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600">
        <div className="px-4 py-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 rounded-full hover:bg-white/20 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Gamepad2 className="w-6 h-6 text-white" />
                <h1 className="text-2xl font-bold text-white">Gaming Venues</h1>
              </div>
              <p className="text-sm text-white/90">Level up your gaming experience</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">{gamingVenues.length}+</p>
              <p className="text-xs text-white/80">Venues</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">200+</p>
              <p className="text-xs text-white/80">Games</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">40%</p>
              <p className="text-xs text-white/80">Avg Savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tournament Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30">
          <div className="flex items-center gap-3">
            <Trophy className="w-10 h-10 text-yellow-500" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Live Tournaments!</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Join daily tournaments & win prizes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full bg-gradient-to-br ${cat.color} border border-white/20 whitespace-nowrap text-sm font-medium text-rez-navy dark:text-white hover:scale-105 transition-all`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Benefit Banner */}
      <div className="px-4 mb-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
          <div className="flex items-center gap-3">
            <Zap className="w-10 h-10 text-purple-600 dark:text-purple-400" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Gamer Rewards</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get up to 30% cashback + coins on gaming sessions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gaming Venues List */}
      <div className="px-4 space-y-4">
        {gamingVenues.map(venue => (
          <div
            key={venue.id}
            onClick={() => navigate(`/event/gaming/${venue.id}`)}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/80 text-rez-navy dark:text-white backdrop-blur-sm">
                  {venue.type}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500 text-white">
                  -{Math.round((1 - venue.pricePerHour / venue.originalPrice) * 100)}% OFF
                </span>
              </div>
              <div className="absolute bottom-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-500 text-white flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  {venue.tournaments}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-rez-navy dark:text-white flex-1">{venue.name}</h3>
              </div>

              {/* Location & Hours */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>{venue.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{venue.openTime}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span>{venue.capacity}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {venue.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Rating & Best For */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-rez-navy dark:text-white">{venue.rating}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">({venue.reviews})</span>
                </div>
              </div>

              {/* Best For Tags */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Best for:</span>
                {venue.bestFor.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-lg text-xs font-medium bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-rez-navy dark:text-white">₹{venue.pricePerHour}</span>
                    <span className="text-sm text-gray-500 line-through">₹{venue.originalPrice}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">/hour</span>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">+ Earn coins & cashback</p>
                </div>
                <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-center">
          <TrendingUp className="w-12 h-12 text-cyan-600 dark:text-cyan-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">Host Gaming Tournaments</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            List your gaming venue and earn from hosting tournaments
          </p>
          <Link
            to="/host-tournament"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Start Hosting
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default EventsGaming;
