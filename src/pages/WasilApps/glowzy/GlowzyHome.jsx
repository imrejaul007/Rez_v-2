import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Sparkles,
  Scissors, Heart, Calendar, User, Award, Percent,
  Timer, Phone, Shield
} from 'lucide-react';

// Glowzy Home: Beauty & Wellness Services
// Backend API: GET /api/wasil/glowzy/home
// Backend API: GET /api/wasil/glowzy/salons
// Backend API: GET /api/wasil/glowzy/services
// Backend API: GET /api/wasil/glowzy/appointments

const GlowzyHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '💆', color: 'bg-pink-500' },
    { id: 'hair', name: 'Hair', icon: '💇', color: 'bg-purple-500' },
    { id: 'skin', name: 'Skin', icon: '✨', color: 'bg-rose-400' },
    { id: 'spa', name: 'Spa', icon: '🧖', color: 'bg-teal-500' },
    { id: 'nails', name: 'Nails', icon: '💅', color: 'bg-red-400' },
    { id: 'makeup', name: 'Makeup', icon: '💄', color: 'bg-pink-400' },
    { id: 'men', name: 'Men', icon: '🧔', color: 'bg-blue-500' },
    { id: 'bridal', name: 'Bridal', icon: '👰', color: 'bg-amber-400' }
  ];

  const featuredSalons = [
    {
      id: 1,
      name: "Lakme Salon",
      type: "Premium Salon",
      image: "💇‍♀️",
      rating: 4.8,
      reviews: 2340,
      distance: "0.8 km",
      priceRange: "₹₹₹",
      offer: "20% OFF on first visit",
      coins: 100,
      nextSlot: "Today, 3:00 PM"
    },
    {
      id: 2,
      name: "Naturals Salon",
      type: "Unisex Salon",
      image: "✂️",
      rating: 4.5,
      reviews: 1890,
      distance: "1.2 km",
      priceRange: "₹₹",
      offer: "Free haircut on ₹2000+",
      coins: 80,
      nextSlot: "Today, 4:30 PM"
    },
    {
      id: 3,
      name: "O2 Spa",
      type: "Luxury Spa",
      image: "🧖‍♀️",
      rating: 4.9,
      reviews: 890,
      distance: "2.5 km",
      priceRange: "₹₹₹₹",
      offer: "Couple spa @ ₹3999",
      coins: 200,
      nextSlot: "Tomorrow, 11:00 AM"
    }
  ];

  const popularServices = [
    { id: 1, name: "Haircut & Styling", icon: "✂️", price: "₹299+", time: "30-45 min" },
    { id: 2, name: "Facial", icon: "✨", price: "₹599+", time: "45-60 min" },
    { id: 3, name: "Manicure & Pedicure", icon: "💅", price: "₹499+", time: "60 min" },
    { id: 4, name: "Full Body Massage", icon: "💆", price: "₹999+", time: "60-90 min" },
    { id: 5, name: "Hair Color", icon: "🎨", price: "₹999+", time: "90-120 min" },
    { id: 6, name: "Bridal Makeup", icon: "👰", price: "₹4999+", time: "2-3 hrs" }
  ];

  const deals = [
    {
      id: 1,
      title: "Monsoon Glow Package",
      description: "Facial + Cleanup + Hair Spa",
      originalPrice: 2500,
      salePrice: 1499,
      discount: "40%",
      image: "🌸",
      validTill: "Jan 31"
    },
    {
      id: 2,
      title: "Men's Grooming",
      description: "Haircut + Beard + Facial",
      originalPrice: 1200,
      salePrice: 699,
      discount: "42%",
      image: "🧔",
      validTill: "Jan 15"
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      salon: "Lakme Salon",
      service: "Hair Color + Cut",
      date: "Tomorrow",
      time: "11:00 AM",
      status: "confirmed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-1 text-white/80 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Your Location</span>
            </div>
            <h1 className="text-lg font-bold text-white">HSR Layout, Bengaluru</h1>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
            <span className="text-lg">🪙</span>
            <span className="text-white font-bold">1,450</span>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search salons, spas, services..."
            className="flex-1 outline-none text-gray-800"
          />
        </div>
      </div>

      {/* Upcoming Appointment */}
      {upcomingAppointments.length > 0 && (
        <div className="px-4 mt-4">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-xs">Upcoming Appointment</p>
                <h3 className="text-white font-bold">{upcomingAppointments[0].salon}</h3>
                <p className="text-green-200 text-sm">
                  {upcomingAppointments[0].service} • {upcomingAppointments[0].date}, {upcomingAppointments[0].time}
                </p>
              </div>
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium text-sm">
                View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="px-4 mt-6">
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
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-pink-500' : ''
              }`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-700 font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Services */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Popular Services</h2>
        <div className="grid grid-cols-3 gap-3">
          {popularServices.map((service) => (
            <button key={service.id} className="bg-white rounded-xl p-3 shadow-sm text-center">
              <span className="text-3xl">{service.icon}</span>
              <p className="font-medium text-gray-800 text-sm mt-2">{service.name}</p>
              <p className="text-pink-600 text-xs font-medium mt-1">{service.price}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Deals */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            Special Deals
          </h2>
          <button className="text-pink-600 text-sm">View All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {deals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-64 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-6xl opacity-30">{deal.image}</div>
              <div className="relative z-10">
                <span className="bg-yellow-400 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
                  {deal.discount} OFF
                </span>
                <h3 className="text-white font-bold mt-2">{deal.title}</h3>
                <p className="text-pink-200 text-sm">{deal.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-white font-bold text-lg">₹{deal.salePrice}</span>
                  <span className="text-pink-200 line-through text-sm">₹{deal.originalPrice}</span>
                </div>
                <p className="text-pink-200 text-xs mt-2">Valid till {deal.validTill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Salons */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Top Salons Near You</h2>
          <button className="text-pink-600 text-sm">See All</button>
        </div>

        <div className="space-y-4">
          {featuredSalons.map((salon) => (
            <div key={salon.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center text-6xl relative">
                {salon.image}
                {salon.offer && (
                  <div className="absolute bottom-3 left-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {salon.offer}
                  </div>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800">{salon.name}</h3>
                    <p className="text-sm text-gray-500">{salon.type}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                    <Star className="w-3 h-3" /> {salon.rating}
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {salon.distance}
                  </span>
                  <span>{salon.priceRange}</span>
                  <span>{salon.reviews.toLocaleString()} reviews</span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Next available</p>
                    <p className="text-sm font-medium text-green-600">{salon.nextSlot}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-600 text-sm">+{salon.coins}🪙</span>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* At Home Services */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏠</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">Salon at Home</h3>
              <p className="text-purple-200 text-sm">Get pampered at your doorstep</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowzyHome;
