import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Film, Users, Clock, MapPin, Star, Ticket, Popcorn, TrendingUp } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function EventsMovies() {
  const navigate = useNavigate();

  const movies = [
    {
      id: 1,
      title: 'Mission Impossible: Final Reckoning',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400',
      rating: 4.7,
      votes: 12500,
      language: 'English',
      genre: 'Action, Thriller',
      duration: '2h 45m',
      format: ['IMAX', '4DX', 'Dolby Atmos'],
      censor: 'UA',
      price: 299,
      originalPrice: 450,
      showTimes: ['10:30 AM', '2:15 PM', '6:00 PM', '9:45 PM'],
      theaters: 24
    },
    {
      id: 2,
      title: 'Tu Jhoothi Main Makkaar',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400',
      rating: 4.3,
      votes: 8900,
      language: 'Hindi',
      genre: 'Romance, Comedy',
      duration: '2h 30m',
      format: ['2D', 'Dolby Atmos'],
      censor: 'U',
      price: 199,
      originalPrice: 300,
      showTimes: ['11:00 AM', '3:00 PM', '7:00 PM', '10:30 PM'],
      theaters: 18
    },
    {
      id: 3,
      title: 'Oppenheimer',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400',
      rating: 4.9,
      votes: 25000,
      language: 'English',
      genre: 'Biography, Drama',
      duration: '3h 0m',
      format: ['IMAX', '70mm', 'Dolby Vision'],
      censor: 'UA',
      price: 399,
      originalPrice: 600,
      showTimes: ['10:00 AM', '2:00 PM', '6:30 PM'],
      theaters: 15
    },
    {
      id: 4,
      title: 'Jawan',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400',
      rating: 4.6,
      votes: 18000,
      language: 'Hindi',
      genre: 'Action, Thriller',
      duration: '2h 50m',
      format: ['IMAX', '4DX', '2D'],
      censor: 'UA',
      price: 349,
      originalPrice: 500,
      showTimes: ['11:30 AM', '3:30 PM', '7:30 PM', '10:45 PM'],
      theaters: 28
    }
  ];

  const categories = [
    { id: 'all', name: 'All Movies', icon: '🎬', color: 'from-red-500/20 to-pink-500/20' },
    { id: 'action', name: 'Action', icon: '💥', color: 'from-orange-500/20 to-red-500/20' },
    { id: 'comedy', name: 'Comedy', icon: '😄', color: 'from-yellow-500/20 to-orange-500/20' },
    { id: 'romance', name: 'Romance', icon: '💕', color: 'from-pink-500/20 to-rose-500/20' },
    { id: 'thriller', name: 'Thriller', icon: '🔪', color: 'from-purple-500/20 to-indigo-500/20' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Cinema-Themed Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-red-600 via-pink-600 to-purple-600">
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
                <Film className="w-6 h-6 text-white" />
                <h1 className="text-2xl font-bold text-white">Movies</h1>
              </div>
              <p className="text-sm text-white/90">Now showing in theaters</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">{movies.length}+</p>
              <p className="text-xs text-white/80">Movies</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">85+</p>
              <p className="text-xs text-white/80">Theaters</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">35%</p>
              <p className="text-xs text-white/80">Avg Savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30">
          <div className="flex items-center gap-3">
            <Popcorn className="w-10 h-10 text-amber-500" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Movie Combo Deals!</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get free popcorn & drink with tickets</p>
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
        <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30">
          <div className="flex items-center gap-3">
            <Ticket className="w-10 h-10 text-red-600 dark:text-red-400" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Movie Rewards</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get up to 30% cashback + coins on movie tickets</p>
            </div>
          </div>
        </div>
      </div>

      {/* Movies List */}
      <div className="px-4 space-y-4">
        {movies.map(movie => (
          <div
            key={movie.id}
            onClick={() => navigate(`/event/movie/${movie.id}`)}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white">
                  {movie.censor}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white">
                  -{Math.round((1 - movie.price / movie.originalPrice) * 100)}% OFF
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <h3 className="text-lg font-bold text-white mb-1">{movie.title}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-white">{movie.rating}</span>
                    <span className="text-xs text-white/80">({movie.votes.toLocaleString()})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Genre & Duration */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-gray-700 dark:text-gray-300">{movie.genre}</span>
                <span className="text-gray-400">•</span>
                <div className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{movie.duration}</span>
                </div>
              </div>

              {/* Language */}
              <div className="mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  {movie.language}
                </span>
              </div>

              {/* Formats */}
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.format.map((fmt, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                  >
                    {fmt}
                  </span>
                ))}
              </div>

              {/* Theaters */}
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span>{movie.theaters} theaters nearby</span>
              </div>

              {/* Show Times */}
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Show Times:</p>
                <div className="flex flex-wrap gap-2">
                  {movie.showTimes.map((time, index) => (
                    <button
                      key={index}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-rez-navy dark:text-white">₹{movie.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{movie.originalPrice}</span>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">+ Earn coins & cashback</p>
                </div>
                <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all">
                  Book Tickets
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 text-center">
          <TrendingUp className="w-12 h-12 text-red-600 dark:text-red-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">Movie Buff Rewards</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Watch more, save more with exclusive movie rewards on ReZ
          </p>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Explore More Events
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default EventsMovies;
