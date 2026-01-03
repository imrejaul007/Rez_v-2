import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Clock, TrendingUp, MapPin, Star, Tag } from 'lucide-react';

function SuperDeals() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Super Deals' },
    { id: 'ending-soon', label: 'Ending Soon' },
    { id: 'nearby', label: 'Near You' },
    { id: 'highest-cashback', label: 'Highest Cashback' }
  ];

  const superDeals = [
    {
      id: 1,
      title: 'Mega Electronics Sale',
      store: 'TechZone',
      discount: 70,
      cashback: 15,
      coins: 500,
      validUntil: '2024-01-20T23:59:00',
      distance: 2.3,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
      trending: true,
      endsIn: '3h 24m'
    },
    {
      id: 2,
      title: 'Fashion Flash Sale',
      store: 'StyleHub',
      discount: 60,
      cashback: 12,
      coins: 400,
      validUntil: '2024-01-21T18:00:00',
      distance: 1.5,
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
      trending: true,
      endsIn: '1 day'
    },
    {
      id: 3,
      title: 'Beauty Bonanza',
      store: 'Glow Beauty',
      discount: 50,
      cashback: 20,
      coins: 600,
      validUntil: '2024-01-22T20:00:00',
      distance: 3.1,
      category: 'Beauty',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
      trending: false,
      endsIn: '2 days'
    },
    {
      id: 4,
      title: 'Grocery Super Saver',
      store: 'FreshMart',
      discount: 40,
      cashback: 10,
      coins: 300,
      validUntil: '2024-01-23T22:00:00',
      distance: 0.8,
      category: 'Grocery',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
      trending: false,
      endsIn: '3 days'
    }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full hover:bg-white/20 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
              <h1 className="text-h3 font-poppins text-white">Super Deals</h1>
            </div>
            <p className="text-xs text-white/80">Limited time offers with max rewards</p>
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
                  ? 'bg-white text-purple-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Stats Banner */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30">
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">₹2.5L</p>
            <p className="text-xs text-rez-gray-700 dark:text-gray-300">Total Saved</p>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30">
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">24</p>
            <p className="text-xs text-rez-gray-700 dark:text-gray-300">Active Deals</p>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">4.8</p>
            <p className="text-xs text-rez-gray-700 dark:text-gray-300">Avg Rating</p>
          </div>
        </div>

        {/* Super Deals List */}
        <div className="space-y-3">
          {superDeals.map(deal => (
            <div
              key={deal.id}
              onClick={() => navigate(`/deal/${deal.id}`)}
              className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-purple-500 transition-all active:scale-98 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-40 object-cover"
                />

                {/* Trending Badge */}
                {deal.trending && (
                  <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-white" />
                    <span className="text-xs font-bold text-white">Trending</span>
                  </div>
                )}

                {/* Ends In Badge */}
                <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-black/70 backdrop-blur-sm flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span className="text-xs font-bold text-white">{deal.endsIn}</span>
                </div>

                {/* Discount Badge */}
                <div className="absolute bottom-2 left-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500">
                  <p className="text-sm font-bold text-white">{deal.discount}% OFF</p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-rez-navy dark:text-white">{deal.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-sm text-rez-gray-600 dark:text-gray-400">{deal.store}</p>
                      <div className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="text-xs text-rez-gray-600 dark:text-gray-400">4.8</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded-lg bg-purple-500/20">
                    <Tag className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>

                {/* Distance */}
                <div className="flex items-center gap-1 mb-3">
                  <MapPin className="w-3 h-3 text-blue-500" />
                  <span className="text-xs text-blue-600 dark:text-blue-400">{deal.distance} km away</span>
                </div>

                {/* Rewards */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      {deal.cashback}% Cashback
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                      +{deal.coins} Coins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <button className="w-full py-3 rounded-xl bg-white dark:bg-dark-800 border-2 border-dashed border-rez-gray-300 dark:border-dark-600 text-rez-gray-600 dark:text-gray-400 font-medium hover:border-purple-500 hover:text-purple-500 transition-all">
          Load More Super Deals
        </button>
      </div>
    </div>
  );
}

export default SuperDeals;
