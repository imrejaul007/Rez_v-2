import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Timer,
  Home, Users, Shield, Calendar, CheckCircle2, Phone,
  Zap, Sparkles, Award, Heart, MessageSquare
} from 'lucide-react';

// Maidzy Home: Home Help & Cleaning Services
// Backend API: GET /api/wasil/maidzy/home
// Backend API: GET /api/wasil/maidzy/services
// Backend API: GET /api/wasil/maidzy/helpers
// Backend API: POST /api/wasil/maidzy/book

const MaidzyHome = () => {
  const [activeService, setActiveService] = useState('all');

  const services = [
    { id: 'all', name: 'All', icon: '🏠', color: 'bg-purple-500' },
    { id: 'cleaning', name: 'Cleaning', icon: '🧹', color: 'bg-blue-500' },
    { id: 'cooking', name: 'Cooking', icon: '👩‍🍳', color: 'bg-orange-500' },
    { id: 'childcare', name: 'Childcare', icon: '👶', color: 'bg-pink-500' },
    { id: 'eldercare', name: 'Elder Care', icon: '👴', color: 'bg-green-500' },
    { id: 'fulltime', name: 'Full-time', icon: '🏡', color: 'bg-amber-500' }
  ];

  const myHelper = {
    name: "Lakshmi Devi",
    role: "House Help",
    rating: 4.8,
    since: "6 months",
    image: "👩",
    verified: true,
    nextVisit: "Today, 9:00 AM"
  };

  const quickServices = [
    { id: 1, name: "Deep Cleaning", icon: "🧹", price: 1499, duration: "4-5 hrs", coins: 100 },
    { id: 2, name: "Kitchen Cleaning", icon: "🍳", price: 799, duration: "2-3 hrs", coins: 60 },
    { id: 3, name: "Bathroom Cleaning", icon: "🚿", price: 499, duration: "1-2 hrs", coins: 40 },
    { id: 4, name: "Cook for Party", icon: "👨‍🍳", price: 1999, duration: "4-6 hrs", coins: 150 }
  ];

  const subscriptionPlans = [
    {
      id: 1,
      name: "Daily Maid",
      description: "Cleaning + Utensils",
      visits: "26 days/month",
      price: 4500,
      originalPrice: 5500,
      coins: 400,
      popular: true
    },
    {
      id: 2,
      name: "Cook + Clean",
      description: "Full home service",
      visits: "26 days/month",
      price: 8000,
      originalPrice: 9500,
      coins: 700
    },
    {
      id: 3,
      name: "Part-time Help",
      description: "2 hrs/day",
      visits: "26 days/month",
      price: 6000,
      originalPrice: 7000,
      coins: 500
    }
  ];

  const availableHelpers = [
    {
      id: 1,
      name: "Sunita Sharma",
      skills: ["Cleaning", "Cooking"],
      experience: "5 years",
      rating: 4.9,
      reviews: 234,
      image: "👩",
      verified: true,
      available: "Immediate"
    },
    {
      id: 2,
      name: "Meena Kumari",
      skills: ["Cleaning", "Childcare"],
      experience: "8 years",
      rating: 4.8,
      reviews: 456,
      image: "👩",
      verified: true,
      available: "From Jan 10"
    },
    {
      id: 3,
      name: "Rani Devi",
      skills: ["Cooking", "Elder Care"],
      experience: "10 years",
      rating: 4.7,
      reviews: 189,
      image: "👩",
      verified: true,
      available: "Immediate"
    }
  ];

  const guarantees = [
    { icon: Shield, text: "Background Verified" },
    { icon: Award, text: "Trained Professionals" },
    { icon: Heart, text: "Replacement Guarantee" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-1 text-white/80 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Service at</span>
            </div>
            <h1 className="text-lg font-bold text-white">HSR Layout, Bengaluru</h1>
          </div>
          <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="text-lg">🪙</span>
            <span className="text-white font-bold">2,340</span>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search home services..."
            className="flex-1 outline-none text-gray-800"
          />
        </div>
      </div>

      {/* Guarantees */}
      <div className="bg-white px-4 py-3 flex justify-around border-b border-gray-100">
        {guarantees.map((g, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <g.icon className="w-4 h-4 text-purple-500" />
            <span className="text-xs text-gray-600">{g.text}</span>
          </div>
        ))}
      </div>

      {/* My Helper Card */}
      {myHelper && (
        <div className="px-4 mt-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-3xl relative">
                  {myHelper.image}
                  {myHelper.verified && (
                    <CheckCircle2 className="w-5 h-5 text-green-500 absolute -bottom-1 -right-1 bg-white rounded-full" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{myHelper.name}</h3>
                  <p className="text-xs text-gray-500">{myHelper.role} • {myHelper.since}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs text-gray-600">{myHelper.rating}</span>
                  </div>
                </div>
              </div>
              <button className="bg-purple-100 p-2 rounded-full">
                <Phone className="w-5 h-5 text-purple-600" />
              </button>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span>Next Visit: {myHelper.nextVisit}</span>
              </div>
              <button className="text-purple-600 text-sm">Manage</button>
            </div>
          </div>
        </div>
      )}

      {/* Services */}
      <div className="px-4 mt-6">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex flex-col items-center gap-2 min-w-[70px] ${
                activeService === service.id ? 'opacity-100' : 'opacity-70'
              }`}
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-2xl ${
                activeService === service.id ? 'ring-2 ring-offset-2 ring-purple-500' : ''
              }`}>
                {service.icon}
              </div>
              <span className="text-xs text-gray-700 font-medium">{service.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Services */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">One-time Services</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickServices.map((service) => (
            <button key={service.id} className="bg-white rounded-xl p-4 shadow-sm text-left">
              <span className="text-3xl">{service.icon}</span>
              <h3 className="font-medium text-gray-800 mt-2">{service.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-bold text-gray-800">₹{service.price}</span>
                <span className="text-xs text-gray-500">• {service.duration}</span>
              </div>
              <span className="text-yellow-600 text-xs">+{service.coins}🪙</span>
            </button>
          ))}
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Monthly Plans</h2>
          <button className="text-purple-600 text-sm">Compare</button>
        </div>

        <div className="space-y-3">
          {subscriptionPlans.map((plan) => (
            <div key={plan.id} className={`bg-white rounded-xl p-4 shadow-sm border ${
              plan.popular ? 'border-purple-500' : 'border-gray-100'
            }`}>
              {plan.popular && (
                <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3 className="font-bold text-gray-800">{plan.name}</h3>
                  <p className="text-gray-500 text-sm">{plan.description}</p>
                  <p className="text-xs text-purple-600 mt-1">{plan.visits}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">₹{plan.price.toLocaleString()}<span className="text-xs text-gray-500">/mo</span></p>
                  <p className="text-xs text-gray-400 line-through">₹{plan.originalPrice.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-yellow-600 text-xs">+{plan.coins}🪙/month</span>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Helpers */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Hire Full-time Help</h2>
          <button className="text-purple-600 text-sm">View All</button>
        </div>

        <div className="space-y-3">
          {availableHelpers.map((helper) => (
            <div key={helper.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-3xl relative">
                  {helper.image}
                  {helper.verified && (
                    <CheckCircle2 className="w-5 h-5 text-green-500 absolute -bottom-1 -right-1 bg-white rounded-full" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{helper.name}</h3>
                  <p className="text-xs text-gray-500">{helper.experience} experience</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {helper.skills.map((skill, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      {helper.rating} ({helper.reviews})
                    </span>
                    <span className="text-green-600">Available: {helper.available}</span>
                  </div>
                </div>
                <button className="bg-purple-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium">
                  Hire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help CTA */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">Need Help Choosing?</h3>
              <p className="text-purple-100 text-sm">Chat with our support team</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaidzyHome;
