import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Trees, Users, Clock, MapPin, Star, Ticket, Sun, Droplets, TrendingUp } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function EventsParks() {
  const navigate = useNavigate();

  const parks = [
    {
      id: 1,
      name: 'Wonderla Amusement Park',
      type: 'Theme Park',
      image: 'https://images.unsplash.com/photo-1594748696081-2b6d5a7b6e1a?w=400',
      location: 'Bidadi, Bangalore',
      rating: 4.5,
      reviews: 2340,
      openTime: '11:00 AM - 6:00 PM',
      entryFee: 999,
      originalFee: 1299,
      visitors: 'Family Friendly',
      highlights: ['60+ Rides', 'Water Park', 'Rain Disco'],
      bestFor: ['Families', 'Thrill Seekers']
    },
    {
      id: 2,
      name: 'Cubbon Park',
      type: 'City Park',
      image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=400',
      location: 'MG Road, Bangalore',
      rating: 4.7,
      reviews: 5680,
      openTime: '6:00 AM - 6:00 PM',
      entryFee: 0,
      originalFee: 0,
      visitors: 'All Ages',
      highlights: ['300 Acres', 'Walking Trails', 'Dog Friendly'],
      bestFor: ['Joggers', 'Nature Lovers']
    },
    {
      id: 3,
      name: 'Lumbini Gardens',
      type: 'Lake Park',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      location: 'Nagawara, Bangalore',
      rating: 4.3,
      reviews: 1890,
      openTime: '10:00 AM - 8:00 PM',
      entryFee: 50,
      originalFee: 100,
      visitors: 'Family Friendly',
      highlights: ['Boating', 'Kids Play Area', 'Restaurants'],
      bestFor: ['Families', 'Couples']
    },
    {
      id: 4,
      name: 'Innovative Film City',
      type: 'Entertainment Park',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400',
      location: 'Bidadi, Bangalore',
      rating: 4.4,
      reviews: 3210,
      openTime: '10:30 AM - 6:30 PM',
      entryFee: 699,
      originalFee: 899,
      visitors: 'All Ages',
      highlights: ['Mini Golf', 'Museums', 'Haunted House'],
      bestFor: ['Families', 'Groups']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Parks', icon: '🌳', color: 'from-green-500/20 to-emerald-500/20' },
    { id: 'theme', name: 'Theme Parks', icon: '🎢', color: 'from-purple-500/20 to-pink-500/20' },
    { id: 'water', name: 'Water Parks', icon: '💦', color: 'from-blue-500/20 to-cyan-500/20' },
    { id: 'nature', name: 'Nature Parks', icon: '🌿', color: 'from-green-500/20 to-lime-500/20' },
    { id: 'adventure', name: 'Adventure', icon: '⛰️', color: 'from-orange-500/20 to-red-500/20' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Nature-Themed Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
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
                <Trees className="w-6 h-6 text-white" />
                <h1 className="text-2xl font-bold text-white">Parks & Recreation</h1>
              </div>
              <p className="text-sm text-white/90">Explore outdoor fun & nature</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">{parks.length}+</p>
              <p className="text-xs text-white/80">Parks</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">300+</p>
              <p className="text-xs text-white/80">Activities</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">50%</p>
              <p className="text-xs text-white/80">Avg Savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Info Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
          <div className="flex items-center gap-3">
            <Sun className="w-10 h-10 text-yellow-500" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Perfect Weather Today!</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">28°C, Sunny - Great day for outdoor fun</p>
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
        <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
          <div className="flex items-center gap-3">
            <Ticket className="w-10 h-10 text-green-600 dark:text-green-400" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Family Fun Rewards</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get up to 25% cashback on park tickets + coins</p>
            </div>
          </div>
        </div>
      </div>

      {/* Parks List */}
      <div className="px-4 space-y-4">
        {parks.map(park => (
          <div
            key={park.id}
            onClick={() => navigate(`/event/park/${park.id}`)}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={park.image}
                alt={park.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/80 text-rez-navy dark:text-white backdrop-blur-sm">
                  {park.type}
                </span>
              </div>
              {park.entryFee > 0 && (
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white">
                    {park.originalFee > 0 ? `-${Math.round((1 - park.entryFee / park.originalFee) * 100)}% OFF` : 'FREE'}
                  </span>
                </div>
              )}
              {park.entryFee === 0 && (
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white">
                    FREE ENTRY
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title & Rating */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-rez-navy dark:text-white flex-1">{park.name}</h3>
              </div>

              {/* Location & Hours */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span>{park.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{park.openTime}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {park.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Rating & Best For */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-rez-navy dark:text-white">{park.rating}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">({park.reviews})</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{park.visitors}</span>
                </div>
              </div>

              {/* Best For Tags */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Best for:</span>
                {park.bestFor.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-lg text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  {park.entryFee > 0 ? (
                    <>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-rez-navy dark:text-white">₹{park.entryFee}</span>
                        {park.originalFee > 0 && (
                          <span className="text-sm text-gray-500 line-through">₹{park.originalFee}</span>
                        )}
                      </div>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">+ Earn coins & cashback</p>
                    </>
                  ) : (
                    <>
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">FREE</span>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">No entry fee</p>
                    </>
                  )}
                </div>
                <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:scale-105 transition-all">
                  {park.entryFee > 0 ? 'Book Now' : 'View Details'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 text-center">
          <TrendingUp className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">Plan a Perfect Day Out</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Save up to 50% on park tickets when you book through ReZ
          </p>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Explore More Events
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default EventsParks;
