import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tag, Clock, Star, TrendingUp, Sparkles } from 'lucide-react';

function BeautyDeals() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Deals' },
    { id: 'ending-soon', label: 'Ending Soon' },
    { id: 'trending', label: 'Trending' },
    { id: 'new', label: 'New Today' }
  ];

  const beautyDeals = [
    {
      id: 1,
      title: 'Full Body Spa @ 50% Off',
      salon: 'Serenity Spa',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
      originalPrice: 2999,
      dealPrice: 1499,
      discount: 50,
      cashback: 20,
      coins: 200,
      rating: 5.0,
      reviews: 187,
      validUntil: '2024-01-25',
      endsIn: '3 days',
      trending: true,
      isNew: false
    },
    {
      id: 2,
      title: 'Hair Color + Cut Combo',
      salon: 'Urban Hair Studio',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400',
      originalPrice: 3500,
      dealPrice: 2100,
      discount: 40,
      cashback: 15,
      coins: 150,
      rating: 4.7,
      reviews: 456,
      validUntil: '2024-01-20',
      endsIn: '2h 30m',
      trending: false,
      isNew: false
    },
    {
      id: 3,
      title: 'Bridal Makeup Package',
      salon: 'Glow Beauty',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400',
      originalPrice: 15000,
      dealPrice: 10500,
      discount: 30,
      cashback: 25,
      coins: 500,
      rating: 4.9,
      reviews: 234,
      validUntil: '2024-01-28',
      endsIn: '7 days',
      trending: true,
      isNew: true
    },
    {
      id: 4,
      title: 'Mani + Pedi Combo',
      salon: 'Nail Art Studio',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400',
      originalPrice: 1200,
      dealPrice: 720,
      discount: 40,
      cashback: 12,
      coins: 80,
      rating: 4.6,
      reviews: 312,
      validUntil: '2024-01-24',
      endsIn: '5 days',
      trending: false,
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full hover:bg-white/20 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5 text-amber-400" />
              <h1 className="text-h3 font-poppins text-white">Beauty Deals</h1>
            </div>
            <p className="text-xs text-white/80">Limited time offers</p>
          </div>
        </div>

        {/* Filters */}
        <div className="px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeFilter === filter.id
                  ? 'bg-white text-pink-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-4 space-y-3">
        {/* Stats Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{beautyDeals.length}</p>
              <p className="text-sm text-rez-gray-700 dark:text-gray-300">Active Deals</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">₹45K</p>
              <p className="text-sm text-rez-gray-700 dark:text-gray-300">Total Savings</p>
            </div>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 gap-3">
          {beautyDeals.map(deal => (
            <div
              key={deal.id}
              onClick={() => navigate(`/beauty/service/${deal.id}`)}
              className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-pink-500 transition-all active:scale-98 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />

                {/* Badges */}
                <div className="absolute top-2 left-2 flex gap-2">
                  {deal.trending && (
                    <div className="px-2 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-white" />
                      <span className="text-xs font-bold text-white">Trending</span>
                    </div>
                  )}
                  {deal.isNew && (
                    <div className="px-2 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-white fill-white" />
                      <span className="text-xs font-bold text-white">NEW</span>
                    </div>
                  )}
                </div>

                {/* Discount Badge */}
                <div className="absolute bottom-2 left-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500">
                  <p className="text-lg font-bold text-white">{deal.discount}% OFF</p>
                </div>

                {/* Ends In */}
                <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-black/70 backdrop-blur-sm flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span className="text-xs font-bold text-white">{deal.endsIn}</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg text-rez-navy dark:text-white mb-1">{deal.title}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <p className="text-sm text-rez-gray-600 dark:text-gray-400">{deal.salon}</p>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-xs text-rez-gray-600 dark:text-gray-400">{deal.rating} ({deal.reviews})</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-rez-navy dark:text-white">
                    ₹{deal.dealPrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-rez-gray-500 dark:text-gray-400 line-through">
                    ₹{deal.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    Save ₹{(deal.originalPrice - deal.dealPrice).toLocaleString()}
                  </span>
                </div>

                {/* Rewards */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {deal.cashback}% Cashback
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <p className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      +{deal.coins} Coins
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full py-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold hover:shadow-lg transition-all active:scale-95">
                  Grab This Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeautyDeals;
