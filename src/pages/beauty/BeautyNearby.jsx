import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, Clock, Navigation, Filter } from 'lucide-react';

function BeautyNearby() {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('distance');

  const sortOptions = [
    { id: 'distance', label: 'Nearest First' },
    { id: 'rating', label: 'Highest Rated' },
    { id: 'popular', label: 'Most Popular' }
  ];

  const nearbyBeautyServices = [
    {
      id: 1,
      name: 'Glow Beauty Salon',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
      rating: 4.9,
      reviews: 234,
      distance: 0.3,
      services: ['Hair', 'Spa', 'Facial'],
      openNow: true,
      closesAt: '8:00 PM',
      price: '₹₹',
      cashback: 15,
      waitTime: '10 mins'
    },
    {
      id: 2,
      name: 'Serenity Spa',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
      rating: 5.0,
      reviews: 187,
      distance: 0.5,
      services: ['Massage', 'Body Spa', 'Aromatherapy'],
      openNow: true,
      closesAt: '9:00 PM',
      price: '₹₹₹',
      cashback: 20,
      waitTime: 'Book in advance'
    },
    {
      id: 3,
      name: 'Urban Hair Studio',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400',
      rating: 4.7,
      reviews: 456,
      distance: 0.8,
      services: ['Haircut', 'Coloring', 'Styling'],
      openNow: true,
      closesAt: '10:00 PM',
      price: '₹₹',
      cashback: 12,
      waitTime: '5 mins'
    },
    {
      id: 4,
      name: 'Radiance Beauty Clinic',
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400',
      rating: 4.8,
      reviews: 312,
      distance: 1.2,
      services: ['Skin Treatment', 'Laser', 'Botox'],
      openNow: true,
      closesAt: '7:00 PM',
      price: '₹₹₹₹',
      cashback: 25,
      waitTime: 'By appointment'
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
              <Navigation className="w-5 h-5 text-white" />
              <h1 className="text-h3 font-poppins text-white">Beauty Near You</h1>
            </div>
            <p className="text-xs text-white/80">Within 2 km radius</p>
          </div>
          <button className="p-2 rounded-full bg-white/20">
            <Filter className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Sort Options */}
        <div className="px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {sortOptions.map(option => (
            <button
              key={option.id}
              onClick={() => setSortBy(option.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                sortBy === option.id
                  ? 'bg-white text-pink-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-4 space-y-3">
        {/* Location Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-rez-navy dark:text-white mb-1">Current Location</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                Indiranagar, Bangalore
              </p>
              <button className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">
                Change Location
              </button>
            </div>
          </div>
        </div>

        {/* Services List */}
        {nearbyBeautyServices.map(service => (
          <div
            key={service.id}
            onClick={() => navigate(`/beauty/clinic/${service.id}`)}
            className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-pink-500 transition-all active:scale-98 cursor-pointer"
          >
            <div className="relative h-40">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="font-bold text-white mb-1">{service.name}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-bold text-white">{service.rating}</span>
                    <span className="text-xs text-white/80">({service.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Distance Badge */}
              <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-blue-500/90 backdrop-blur-sm flex items-center gap-1">
                <MapPin className="w-3 h-3 text-white" />
                <span className="text-xs font-bold text-white">{service.distance} km</span>
              </div>
            </div>

            <div className="p-4">
              {/* Services Tags */}
              <div className="flex gap-2 mb-3 flex-wrap">
                {service.services.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-full bg-pink-500/20 text-xs font-medium text-pink-600 dark:text-pink-400"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Status & Info */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <div>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      {service.openNow ? 'Open' : 'Closed'}
                    </p>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                      {service.closesAt}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-0.5">Price</p>
                  <p className="text-sm font-bold text-rez-navy dark:text-white">{service.price}</p>
                </div>

                <div>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-0.5">Wait Time</p>
                  <p className="text-xs font-semibold text-rez-navy dark:text-white">{service.waitTime}</p>
                </div>
              </div>

              {/* Cashback */}
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 text-center">
                  Earn {service.cashback}% Cashback
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeautyNearby;
