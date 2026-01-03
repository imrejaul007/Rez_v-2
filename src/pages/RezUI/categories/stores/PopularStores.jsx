import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Star, MapPin, Users, Clock, Tag, Heart } from 'lucide-react';

function PopularStores() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Popular' },
    { id: 'nearby', label: 'Near You' },
    { id: 'trending', label: 'Trending' },
    { id: 'top-rated', label: 'Top Rated' }
  ];

  const popularStores = [
    {
      id: 1,
      name: 'TechZone',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
      rating: 4.9,
      reviews: 2543,
      distance: 1.2,
      visits: 15234,
      trending: true,
      openNow: true,
      closesAt: '10:00 PM',
      offers: '20% off on all gadgets',
      cashback: 15,
      tags: ['Verified', 'Fast Service']
    },
    {
      id: 2,
      name: 'StyleHub',
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
      rating: 4.8,
      reviews: 1876,
      distance: 2.5,
      visits: 12456,
      trending: true,
      openNow: true,
      closesAt: '9:00 PM',
      offers: 'Buy 2 Get 1 Free',
      cashback: 12,
      tags: ['Premium', 'Latest Collection']
    },
    {
      id: 3,
      name: 'Glow Beauty',
      category: 'Beauty & Wellness',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
      rating: 5.0,
      reviews: 987,
      distance: 0.8,
      visits: 8234,
      trending: false,
      openNow: true,
      closesAt: '8:00 PM',
      offers: 'Free facial with spa package',
      cashback: 20,
      tags: ['Award Winner', 'Expert Staff']
    },
    {
      id: 4,
      name: 'FreshMart',
      category: 'Grocery',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
      rating: 4.7,
      reviews: 3456,
      distance: 0.5,
      visits: 23456,
      trending: true,
      openNow: true,
      closesAt: '11:00 PM',
      offers: 'Free delivery on ₹500+',
      cashback: 8,
      tags: ['Organic', '24/7 Available']
    },
    {
      id: 5,
      name: 'Fitness First',
      category: 'Fitness',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
      rating: 4.8,
      reviews: 1234,
      distance: 1.8,
      visits: 6789,
      trending: false,
      openNow: true,
      closesAt: '10:00 PM',
      offers: '3 months @ price of 2',
      cashback: 10,
      tags: ['Certified', 'Modern Equipment']
    },
    {
      id: 6,
      name: 'Book Haven',
      category: 'Books & Stationery',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400',
      rating: 4.9,
      reviews: 876,
      distance: 3.2,
      visits: 4567,
      trending: false,
      openNow: false,
      opensAt: '10:00 AM',
      offers: '30% off on bestsellers',
      cashback: 5,
      tags: ['Wide Collection', 'Rare Finds']
    }
  ];

  const filteredStores = popularStores.filter(store => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'nearby') return store.distance < 2;
    if (activeFilter === 'trending') return store.trending;
    if (activeFilter === 'top-rated') return store.rating >= 4.8;
    return true;
  });

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full hover:bg-white/20 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              <h1 className="text-h3 font-poppins text-white">Popular Stores</h1>
            </div>
            <p className="text-xs text-white/80">Most loved by ReZ community</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeFilter === filter.id
                  ? 'bg-white text-rose-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <TrendingUp className="w-5 h-5 text-purple-500 mb-1" />
            <p className="text-lg font-bold text-purple-600 dark:text-purple-400">{filteredStores.length}</p>
            <p className="text-xs text-rez-gray-700 dark:text-gray-300">Stores</p>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30">
            <Star className="w-5 h-5 text-amber-500 mb-1" />
            <p className="text-lg font-bold text-amber-600 dark:text-amber-400">4.8</p>
            <p className="text-xs text-rez-gray-700 dark:text-gray-300">Avg Rating</p>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30">
            <Users className="w-5 h-5 text-blue-500 mb-1" />
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400">70K+</p>
            <p className="text-xs text-rez-gray-700 dark:text-gray-300">Visits</p>
          </div>
        </div>

        {/* Stores List */}
        <div className="space-y-3">
          {filteredStores.map((store, index) => (
            <div
              key={store.id}
              onClick={() => navigate(`/store/${store.id}`)}
              className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-rose-500 transition-all active:scale-98 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-48 object-cover"
                />

                {/* Rank Badge */}
                <div className="absolute top-2 left-2 w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">#{index + 1}</span>
                </div>

                {/* Trending Badge */}
                {store.trending && (
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-white" />
                    <span className="text-xs font-bold text-white">Trending</span>
                  </div>
                )}

                {/* Wishlist Button */}
                <button className="absolute bottom-2 right-2 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all active:scale-95">
                  <Heart className="w-5 h-5 text-rez-gray-600" />
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-rez-navy dark:text-white">{store.name}</h3>
                    <p className="text-sm text-rez-gray-600 dark:text-gray-400">{store.category}</p>
                  </div>
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-bold text-rez-gray-700 dark:text-gray-300">{store.rating}</span>
                    <span className="text-xs text-rez-gray-500 dark:text-gray-400">
                      ({store.reviews.toLocaleString()})
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-xs text-blue-600 dark:text-blue-400">
                      {store.visits.toLocaleString()} visits
                    </span>
                  </div>
                </div>

                {/* Distance & Status */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-blue-600 dark:text-blue-400">{store.distance} km away</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    <span className={`text-sm font-medium ${
                      store.openNow
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      {store.openNow ? `Open • Closes ${store.closesAt}` : `Opens ${store.opensAt}`}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-3">
                  {store.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-full bg-purple-500/20 text-xs font-medium text-purple-600 dark:text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Offer */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 mb-3">
                  <div className="flex items-start gap-2">
                    <Tag className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                      {store.offers}
                    </p>
                  </div>
                </div>

                {/* Cashback Badge */}
                <div className="flex items-center justify-between">
                  <div className="px-3 py-1 rounded-lg bg-amber-500/20">
                    <span className="text-sm font-bold text-amber-600 dark:text-amber-400">
                      {store.cashback}% Cashback
                    </span>
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold hover:shadow-lg transition-all active:scale-95">
                    Visit Store
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularStores;
