import React, { useState } from 'react';
import {
  Wrench, Hammer, Paintbrush, Zap, Droplets, TreePine,
  Star, Clock, Shield, ChevronRight, MapPin, Calendar,
  Phone, CheckCircle2, Award, Users, MessageSquare
} from 'lucide-react';

// HomeHub Services: Home Improvement Services
// Backend API: GET /api/homehub/services
// Backend API: GET /api/homehub/services/:categoryId
// Backend API: POST /api/homehub/services/book
// Backend API: GET /api/homehub/services/bookings/:userId

const HomeHubServices = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Wrench, color: 'bg-gray-600' },
    { id: 'repair', name: 'Repairs', icon: Hammer, color: 'bg-blue-500' },
    { id: 'painting', name: 'Painting', icon: Paintbrush, color: 'bg-pink-500' },
    { id: 'electrical', name: 'Electrical', icon: Zap, color: 'bg-yellow-500' },
    { id: 'plumbing', name: 'Plumbing', icon: Droplets, color: 'bg-cyan-500' },
    { id: 'garden', name: 'Gardening', icon: TreePine, color: 'bg-green-500' }
  ];

  const featuredService = {
    title: "Complete Home Deep Clean",
    description: "Professional cleaning for up to 3BHK",
    originalPrice: 4999,
    offerPrice: 2999,
    discount: "40%",
    rating: 4.8,
    bookings: 12500,
    coins: 200
  };

  const services = [
    {
      id: 1,
      name: "AC Service & Repair",
      category: "repair",
      image: "❄️",
      price: 499,
      rating: 4.7,
      reviews: 3450,
      duration: "1-2 hrs",
      coins: 40,
      popular: true
    },
    {
      id: 2,
      name: "Full Home Painting",
      category: "painting",
      image: "🎨",
      price: 8999,
      rating: 4.6,
      reviews: 890,
      duration: "2-3 days",
      coins: 350,
      popular: true
    },
    {
      id: 3,
      name: "Electrician",
      category: "electrical",
      image: "💡",
      price: 299,
      rating: 4.5,
      reviews: 5670,
      duration: "1 hr",
      coins: 25,
      popular: false
    },
    {
      id: 4,
      name: "Plumber",
      category: "plumbing",
      image: "🔧",
      price: 199,
      rating: 4.4,
      reviews: 4560,
      duration: "1 hr",
      coins: 20,
      popular: false
    },
    {
      id: 5,
      name: "Garden Maintenance",
      category: "garden",
      image: "🌿",
      price: 599,
      rating: 4.6,
      reviews: 1230,
      duration: "2-3 hrs",
      coins: 50,
      popular: false
    },
    {
      id: 6,
      name: "Furniture Assembly",
      category: "repair",
      image: "🪑",
      price: 399,
      rating: 4.5,
      reviews: 2340,
      duration: "1-2 hrs",
      coins: 35,
      popular: true
    }
  ];

  const upcomingBookings = [
    {
      id: 1,
      service: "AC Service",
      provider: "QuickFix Pro",
      date: "Jan 5, 2025",
      time: "10:00 AM",
      status: "confirmed"
    }
  ];

  const topProviders = [
    { id: 1, name: "UrbanClap Pro", avatar: "👷", rating: 4.8, jobs: 5600, verified: true },
    { id: 2, name: "HomeServe", avatar: "🔧", rating: 4.7, jobs: 3400, verified: true },
    { id: 3, name: "QuickFix", avatar: "⚡", rating: 4.6, jobs: 2800, verified: true }
  ];

  const guarantees = [
    { icon: Shield, text: "Verified Professionals" },
    { icon: Clock, text: "On-time Service" },
    { icon: Award, text: "Quality Guarantee" }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Home Services</h1>
          <button className="bg-white/20 px-3 py-1.5 rounded-full text-white text-sm flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Bengaluru
          </button>
        </div>

        {/* Guarantees */}
        <div className="flex gap-4 justify-center">
          {guarantees.map((g, idx) => (
            <div key={idx} className="flex items-center gap-1 text-blue-200 text-xs">
              <g.icon className="w-4 h-4" />
              <span>{g.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 -mt-2">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex flex-col items-center gap-2 min-w-[60px] ${
                  activeCategory === cat.id ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <div className={`w-12 h-12 ${cat.color} rounded-xl flex items-center justify-center ${
                  activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                }`}>
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-600 font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Booking */}
      {upcomingBookings.length > 0 && (
        <div className="px-4 mt-4">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-xs">Upcoming Service</p>
                <h3 className="text-white font-semibold">{upcomingBookings[0].service}</h3>
                <p className="text-green-200 text-sm">{upcomingBookings[0].date} • {upcomingBookings[0].time}</p>
              </div>
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium text-sm">
                Track
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Featured Service */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-8xl opacity-20">🧹</div>
          <div className="relative z-10">
            <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full">
              DEAL OF THE DAY
            </span>
            <h2 className="text-xl font-bold text-white mt-2">{featuredService.title}</h2>
            <p className="text-purple-200 text-sm">{featuredService.description}</p>
            <div className="flex items-center gap-3 mt-3">
              <span className="text-2xl font-bold text-white">₹{featuredService.offerPrice}</span>
              <span className="text-purple-200 line-through">₹{featuredService.originalPrice}</span>
              <span className="bg-yellow-400 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">
                {featuredService.discount} OFF
              </span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  {featuredService.rating}
                </span>
                <span>{featuredService.bookings.toLocaleString()} bookings</span>
              </div>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-xl font-medium text-sm">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">All Services</h2>
          <span className="text-sm text-gray-500">{filteredServices.length} services</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-24 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-5xl relative">
                {service.image}
                {service.popular && (
                  <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Popular
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm">{service.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-bold text-gray-800">₹{service.price}</span>
                  <span className="text-xs text-gray-400">onwards</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {service.rating}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {service.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-600 text-xs font-medium">+{service.coins}🪙</span>
                  <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Providers */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">Top Providers</h2>
          <button className="text-blue-600 text-sm">View All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {topProviders.map((provider) => (
            <div key={provider.id} className="flex-shrink-0 w-36 bg-white rounded-xl p-4 shadow-sm text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-3xl mx-auto relative">
                {provider.avatar}
                {provider.verified && (
                  <CheckCircle2 className="w-5 h-5 text-blue-500 absolute -bottom-1 -right-1 bg-white rounded-full" />
                )}
              </div>
              <h3 className="font-medium text-gray-800 text-sm mt-2">{provider.name}</h3>
              <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mt-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span>{provider.rating}</span>
                <span>•</span>
                <span>{provider.jobs.toLocaleString()} jobs</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Banner */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">Need Help Choosing?</h3>
              <p className="text-amber-100 text-sm">Chat with our home experts</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHubServices;
