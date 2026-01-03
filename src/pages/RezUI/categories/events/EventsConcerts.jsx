import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Music, Users, Calendar, Clock, MapPin, Star, Headphones, Mic2, TrendingUp } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function EventsConcerts() {
  const navigate = useNavigate();

  const concerts = [
    {
      id: 1,
      name: 'Coldplay: Music of the Spheres',
      artist: 'Coldplay',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400',
      date: 'Jan 25, 2025',
      time: '7:00 PM',
      venue: 'DY Patil Stadium, Mumbai',
      price: 4999,
      originalPrice: 7500,
      rating: 4.9,
      attendees: 50000,
      genre: 'Pop Rock',
      type: 'Stadium Concert',
      highlights: ['Live Band', 'Special Effects', 'Opening Act']
    },
    {
      id: 2,
      name: 'Sunburn Arena ft. Martin Garrix',
      artist: 'Martin Garrix',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400',
      date: 'Feb 2, 2025',
      time: '9:00 PM',
      venue: 'Phoenix Marketcity, Bangalore',
      price: 2499,
      originalPrice: 3500,
      rating: 4.8,
      attendees: 8000,
      genre: 'EDM',
      type: 'Club Night',
      highlights: ['DJ Set', 'VIP Lounge', 'After Party']
    },
    {
      id: 3,
      name: 'Rahman Live in Concert',
      artist: 'A.R. Rahman',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400',
      date: 'Feb 10, 2025',
      time: '6:30 PM',
      venue: 'KTPO Convention Center, Bangalore',
      price: 3999,
      originalPrice: 6000,
      rating: 5.0,
      attendees: 15000,
      genre: 'Indian Classical',
      type: 'Live Performance',
      highlights: ['Orchestra', 'Hit Songs', 'Meet & Greet']
    },
    {
      id: 4,
      name: 'Jazz Nights with Louis Banks',
      artist: 'Louis Banks Quartet',
      image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400',
      date: 'Feb 15, 2025',
      time: '8:00 PM',
      venue: 'Blue Frog, Mumbai',
      price: 1499,
      originalPrice: 2000,
      rating: 4.7,
      attendees: 500,
      genre: 'Jazz',
      type: 'Intimate Performance',
      highlights: ['Acoustic Set', 'Premium Seating', 'Complimentary Drinks']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Concerts', icon: '🎵', color: 'from-purple-500/20 to-pink-500/20' },
    { id: 'rock', name: 'Rock', icon: '🎸', color: 'from-red-500/20 to-orange-500/20' },
    { id: 'edm', name: 'EDM', icon: '🎧', color: 'from-blue-500/20 to-cyan-500/20' },
    { id: 'indian', name: 'Indian', icon: '🎤', color: 'from-orange-500/20 to-yellow-500/20' },
    { id: 'jazz', name: 'Jazz', icon: '🎺', color: 'from-indigo-500/20 to-purple-500/20' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Music-Themed Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600">
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
                <Music className="w-6 h-6 text-white" />
                <h1 className="text-2xl font-bold text-white">Live Concerts</h1>
              </div>
              <p className="text-sm text-white/90">Experience live music magic</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">{concerts.length}+</p>
              <p className="text-xs text-white/80">Concerts</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-xs text-white/80">Artists</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">35%</p>
              <p className="text-xs text-white/80">Avg Savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Early Bird Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30">
          <div className="flex items-center gap-3">
            <Headphones className="w-10 h-10 text-pink-500" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Early Bird Specials!</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Book now & get up to 40% off + VIP perks</p>
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
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30">
          <div className="flex items-center gap-3">
            <Mic2 className="w-10 h-10 text-purple-600 dark:text-purple-400" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Music Lover Rewards</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get up to 35% cashback + coins on concert tickets</p>
            </div>
          </div>
        </div>
      </div>

      {/* Concerts List */}
      <div className="px-4 space-y-4">
        {concerts.map(concert => (
          <div
            key={concert.id}
            onClick={() => navigate(`/event/concert/${concert.id}`)}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={concert.image}
                alt={concert.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/80 text-rez-navy dark:text-white backdrop-blur-sm">
                  {concert.type}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-pink-500 text-white">
                  -{Math.round((1 - concert.price / concert.originalPrice) * 100)}% OFF
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <h3 className="text-lg font-bold text-white mb-1">{concert.name}</h3>
                <p className="text-sm text-white/80">{concert.artist}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Genre */}
              <div className="mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                  {concert.genre}
                </span>
              </div>

              {/* Date, Time, Venue */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>{concert.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{concert.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span>{concert.venue}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {concert.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Rating & Attendees */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-rez-navy dark:text-white">{concert.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{concert.attendees.toLocaleString()} attending</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-rez-navy dark:text-white">₹{concert.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{concert.originalPrice}</span>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">+ Earn coins & cashback</p>
                </div>
                <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:scale-105 transition-all">
                  Book Tickets
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-center">
          <TrendingUp className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">Never Miss a Beat</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Get alerts for your favorite artists & exclusive pre-sale access
          </p>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Explore More Events
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default EventsConcerts;
