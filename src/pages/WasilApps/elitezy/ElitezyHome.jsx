import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Heart,
  ShoppingCart, Timer, Sparkles, Crown, Gift, Users,
  Shield, Award, Gem, Ticket, Calendar, Lock, Zap
} from 'lucide-react';

// Elitezy Home: Elite Memberships & Exclusive Access
// Backend API: GET /api/wasil/elitezy/home
// Backend API: GET /api/wasil/elitezy/memberships
// Backend API: GET /api/wasil/elitezy/experiences
// Backend API: GET /api/wasil/elitezy/benefits

const ElitezyHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '👑', color: 'bg-gradient-to-br from-purple-600 to-indigo-700' },
    { id: 'clubs', name: 'Club Access', icon: '🏛️', color: 'bg-gradient-to-br from-amber-500 to-yellow-600' },
    { id: 'golf', name: 'Golf', icon: '⛳', color: 'bg-gradient-to-br from-green-500 to-emerald-600' },
    { id: 'spa', name: 'Luxury Spa', icon: '🧖', color: 'bg-gradient-to-br from-pink-400 to-rose-500' },
    { id: 'dining', name: 'Fine Dining', icon: '🍽️', color: 'bg-gradient-to-br from-red-500 to-orange-600' },
    { id: 'travel', name: 'Travel', icon: '✈️', color: 'bg-gradient-to-br from-blue-500 to-cyan-600' },
    { id: 'events', name: 'VIP Events', icon: '🎭', color: 'bg-gradient-to-br from-violet-500 to-purple-600' }
  ];

  const myMembership = {
    tier: "Platinum Elite",
    points: 156000,
    status: "Active",
    validTill: "Dec 2025",
    perks: 24
  };

  const exclusiveExperiences = [
    {
      id: 1,
      name: "Private Jet Experience",
      description: "Mumbai to Goa, 4-seater",
      image: "✈️",
      price: 185000,
      rating: 5.0,
      reviews: 12,
      availableSlots: 2,
      coins: 15000,
      exclusive: true
    },
    {
      id: 2,
      name: "Yacht Party Weekend",
      description: "Gateway of India departure",
      image: "🛥️",
      price: 75000,
      rating: 4.9,
      reviews: 34,
      availableSlots: 8,
      coins: 6000,
      exclusive: true
    }
  ];

  const memberships = [
    {
      id: 1,
      name: "Golf Country Club",
      club: "KGA Golf Course",
      image: "⛳",
      monthlyPrice: 25000,
      yearlyPrice: 250000,
      rating: 4.9,
      members: 450,
      benefits: ["Unlimited rounds", "Pro lessons", "Clubhouse access"],
      coins: 20000
    },
    {
      id: 2,
      name: "Executive Gym & Spa",
      club: "Four Seasons Wellness",
      image: "🏋️",
      monthlyPrice: 15000,
      yearlyPrice: 150000,
      rating: 4.8,
      members: 320,
      benefits: ["24/7 access", "Personal trainer", "Spa credits"],
      coins: 12000
    },
    {
      id: 3,
      name: "Fine Dining Society",
      club: "Culinary Circle",
      image: "🍽️",
      monthlyPrice: 12000,
      yearlyPrice: 120000,
      rating: 4.7,
      members: 280,
      benefits: ["Priority reservations", "Chef's table", "Wine tastings"],
      coins: 10000
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      name: "F1 Watch Party",
      venue: "JW Marriott Lounge",
      date: "Jan 15, 2025",
      time: "7:00 PM",
      image: "🏎️",
      spotsLeft: 15,
      coins: 2000
    },
    {
      id: 2,
      name: "Wine & Art Evening",
      venue: "Gallery Sumukha",
      date: "Jan 20, 2025",
      time: "6:30 PM",
      image: "🍷",
      spotsLeft: 8,
      coins: 3000
    }
  ];

  const eliteBenefits = [
    { icon: Crown, title: "Priority Access", desc: "Skip all queues" },
    { icon: Gift, title: "Exclusive Drops", desc: "Early product access" },
    { icon: Users, title: "Concierge", desc: "24/7 personal service" },
    { icon: Ticket, title: "VIP Events", desc: "Invite-only gatherings" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header - Dark Luxury */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 text-purple-300 text-sm">
              <Crown className="w-4 h-4 text-amber-400" />
              <span>{myMembership.tier}</span>
            </div>
            <h1 className="text-xl font-bold text-white">Elitezy</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 border border-amber-500/30">
              <span className="text-lg">🪙</span>
              <span className="text-white font-bold">{myMembership.points.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Membership Card */}
        <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-2xl p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-amber-900 text-xs font-medium">ELITE MEMBER</p>
                <h3 className="text-xl font-bold text-gray-900">{myMembership.tier}</h3>
              </div>
              <div className="text-right">
                <p className="text-amber-900 text-xs">Valid Till</p>
                <p className="text-gray-900 font-bold">{myMembership.validTill}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div>
                <p className="text-amber-900 text-xs">Points</p>
                <p className="text-gray-900 font-bold">{myMembership.points.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-amber-900 text-xs">Active Perks</p>
                <p className="text-gray-900 font-bold">{myMembership.perks}</p>
              </div>
              <button className="ml-auto bg-gray-900 text-amber-400 px-4 py-2 rounded-xl text-sm font-medium">
                Manage
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Elite Benefits */}
      <div className="px-4 mt-4">
        <div className="grid grid-cols-4 gap-2">
          {eliteBenefits.map((benefit, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-3 text-center border border-gray-700">
              <benefit.icon className="w-6 h-6 text-amber-400 mx-auto" />
              <p className="text-white text-xs font-medium mt-2">{benefit.title}</p>
              <p className="text-gray-400 text-xs">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-6">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center gap-2 min-w-[70px] ${
                activeCategory === cat.id ? 'opacity-100' : 'opacity-60'
              }`}
            >
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg ${
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-amber-400' : ''
              }`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-400 font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Exclusive Experiences */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            Exclusive Experiences
          </h2>
          <button className="text-amber-400 text-sm">View All</button>
        </div>

        <div className="space-y-3">
          {exclusiveExperiences.map((exp) => (
            <div key={exp.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <div className="flex">
                <div className="w-28 h-28 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center text-5xl">
                  {exp.image}
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-white">{exp.name}</h3>
                      <p className="text-gray-400 text-sm">{exp.description}</p>
                    </div>
                    {exp.exclusive && (
                      <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        Elite
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{exp.rating}</span>
                    <span>•</span>
                    <span>{exp.reviews} reviews</span>
                    <span>•</span>
                    <span className="text-amber-400">{exp.availableSlots} slots left</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <span className="text-xl font-bold text-white">₹{exp.price.toLocaleString()}</span>
                      <span className="text-gray-400 text-sm"> / person</span>
                    </div>
                    <span className="text-amber-400 text-sm">+{exp.coins.toLocaleString()}🪙</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Memberships */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-white">Premium Memberships</h2>
          <button className="text-amber-400 text-sm">Compare</button>
        </div>

        <div className="space-y-3">
          {memberships.map((membership) => (
            <div key={membership.id} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center text-3xl">
                  {membership.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white">{membership.name}</h3>
                  <p className="text-amber-400 text-sm">{membership.club}</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{membership.rating}</span>
                    <span>•</span>
                    <Users className="w-3 h-3" />
                    <span>{membership.members} members</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {membership.benefits.map((benefit, idx) => (
                  <span key={idx} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {benefit}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-700">
                <div>
                  <span className="text-lg font-bold text-white">₹{membership.monthlyPrice.toLocaleString()}</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-amber-400 text-xs">+{membership.coins.toLocaleString()}🪙/yr</span>
                  <button className="bg-amber-500 text-gray-900 px-4 py-2 rounded-xl text-sm font-bold">
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming VIP Events */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-400" />
            Upcoming Events
          </h2>
          <button className="text-amber-400 text-sm">View All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex-shrink-0 w-56 bg-gray-800 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center text-2xl">
                  {event.image}
                </div>
                <div>
                  <h3 className="font-medium text-white text-sm">{event.name}</h3>
                  <p className="text-gray-400 text-xs">{event.venue}</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-700">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="w-3 h-3" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-amber-400 text-xs">{event.spotsLeft} spots left</span>
                  <span className="text-amber-400 text-xs">+{event.coins}🪙</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Concierge CTA */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-900/20 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-gray-900" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 font-bold">Personal Concierge</h3>
              <p className="text-amber-800 text-sm">Get bespoke recommendations</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElitezyHome;
