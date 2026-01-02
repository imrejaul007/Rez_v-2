import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Heart,
  Crown, Gift, Users, Shield, Award, Gem, Calendar,
  Lock, Zap, Building2, Car, Plane, Wine, Phone
} from 'lucide-react';

// Royale+ Home: Ultra-Premium Concierge Services
// Backend API: GET /api/wasil/royale/home
// Backend API: GET /api/wasil/royale/services
// Backend API: GET /api/wasil/royale/requests
// Backend API: GET /api/wasil/royale/lifestyle

const RoyaleHome = () => {
  const [activeService, setActiveService] = useState('all');

  const services = [
    { id: 'all', name: 'All', icon: '👑' },
    { id: 'travel', name: 'Travel', icon: '✈️' },
    { id: 'dining', name: 'Dining', icon: '🍽️' },
    { id: 'events', name: 'Events', icon: '🎭' },
    { id: 'property', name: 'Property', icon: '🏛️' },
    { id: 'auto', name: 'Auto', icon: '🚘' },
    { id: 'wellness', name: 'Wellness', icon: '🧘' }
  ];

  const memberProfile = {
    tier: "Royale+ Black",
    since: "2022",
    concierge: "Priya Sharma",
    nextCall: "Tomorrow, 10:00 AM",
    activeRequests: 3,
    lifetimeSpend: 45000000 // 4.5 Cr
  };

  const activeRequests = [
    {
      id: 1,
      title: "Private Villa in Maldives",
      status: "In Progress",
      assignedTo: "Travel Desk",
      date: "Feb 10-17, 2025",
      budget: "₹25,00,000",
      progress: 65
    },
    {
      id: 2,
      title: "Vintage Wine Collection",
      status: "Sourcing",
      assignedTo: "Lifestyle Curator",
      date: "Jan 2025",
      budget: "₹8,50,000",
      progress: 40
    }
  ];

  const premiumServices = [
    {
      id: 1,
      name: "Private Jet Charter",
      description: "Door-to-door aviation",
      icon: "✈️",
      category: "travel",
      startingAt: "₹15,00,000",
      availability: "24/7"
    },
    {
      id: 2,
      name: "Yacht Experience",
      description: "Mediterranean to Maldives",
      icon: "🛥️",
      category: "travel",
      startingAt: "₹8,00,000/day",
      availability: "Book 7 days ahead"
    },
    {
      id: 3,
      name: "Chef's Table",
      description: "Michelin-star private dining",
      icon: "👨‍🍳",
      category: "dining",
      startingAt: "₹1,50,000",
      availability: "48hr notice"
    },
    {
      id: 4,
      name: "Luxury Car Concierge",
      description: "Purchase, import, maintenance",
      icon: "🚘",
      category: "auto",
      startingAt: "Consultation",
      availability: "By appointment"
    },
    {
      id: 5,
      name: "Real Estate Advisory",
      description: "Premium properties worldwide",
      icon: "🏰",
      category: "property",
      startingAt: "₹5Cr+",
      availability: "Dedicated advisor"
    },
    {
      id: 6,
      name: "VIP Event Access",
      description: "F1, Fashion Week, Art Basel",
      icon: "🎭",
      category: "events",
      startingAt: "Event-based",
      availability: "Exclusive invites"
    }
  ];

  const lifestyleManagers = [
    { id: 1, name: "Priya Sharma", role: "Personal Concierge", avatar: "👩‍💼", rating: 5.0 },
    { id: 2, name: "Vikram Mehta", role: "Travel Curator", avatar: "👨‍✈️", rating: 4.9 },
    { id: 3, name: "Anjali Rao", role: "Lifestyle Expert", avatar: "👩‍🎨", rating: 4.9 }
  ];

  const exclusivePerks = [
    { icon: Plane, title: "Priority Boarding", desc: "All major airlines" },
    { icon: Building2, title: "Suite Upgrades", desc: "Guaranteed at 50+ hotels" },
    { icon: Car, title: "Luxury Transfers", desc: "Chauffeur service" },
    { icon: Wine, title: "Rare Access", desc: "Limited editions & auctions" }
  ];

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header - Ultra Premium Black & Gold */}
      <div className="bg-gradient-to-b from-gray-900 to-black px-4 pt-6 pb-6 border-b border-amber-500/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-bold text-lg">ROYALE+</span>
            </div>
            <p className="text-gray-400 text-sm">Black Card Member</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-amber-500/10 border border-amber-500/30 p-2 rounded-full">
              <Phone className="w-5 h-5 text-amber-400" />
            </button>
          </div>
        </div>

        {/* Member Card */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-5 border border-amber-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full transform translate-x-10 -translate-y-10" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-amber-400/70 text-xs tracking-widest">BLACK CARD</p>
                <h2 className="text-2xl font-bold text-white mt-1">{memberProfile.tier}</h2>
                <p className="text-gray-400 text-sm">Member since {memberProfile.since}</p>
              </div>
              <div className="text-right">
                <p className="text-amber-400/70 text-xs">LIFETIME VALUE</p>
                <p className="text-xl font-bold text-amber-400">₹{(memberProfile.lifetimeSpend / 10000000).toFixed(1)} Cr</p>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent my-4" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center text-xl">
                  👩‍💼
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{memberProfile.concierge}</p>
                  <p className="text-gray-400 text-xs">Your Personal Concierge</p>
                </div>
              </div>
              <button className="bg-amber-500 text-black px-4 py-2 rounded-xl text-sm font-bold">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Requests */}
      {activeRequests.length > 0 && (
        <div className="px-4 mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              Active Requests
            </h2>
            <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-1 rounded-full">
              {memberProfile.activeRequests} in progress
            </span>
          </div>

          <div className="space-y-3">
            {activeRequests.map((request) => (
              <div key={request.id} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-white">{request.title}</h3>
                    <p className="text-gray-400 text-sm">{request.assignedTo} • {request.date}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    request.status === 'In Progress'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {request.status}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{request.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
                      style={{ width: `${request.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-gray-400 text-sm">Budget: <span className="text-white">{request.budget}</span></span>
                  <button className="text-amber-400 text-sm">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Exclusive Perks */}
      <div className="px-4 mt-6">
        <div className="grid grid-cols-4 gap-2">
          {exclusivePerks.map((perk, idx) => (
            <div key={idx} className="bg-gray-900 rounded-xl p-3 text-center border border-gray-800">
              <perk.icon className="w-6 h-6 text-amber-400 mx-auto" />
              <p className="text-white text-xs font-medium mt-2">{perk.title}</p>
              <p className="text-gray-500 text-xs">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Categories */}
      <div className="px-4 mt-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap border ${
                activeService === service.id
                  ? 'bg-amber-500 text-black border-amber-500'
                  : 'bg-transparent text-gray-400 border-gray-700'
              }`}
            >
              <span>{service.icon}</span>
              <span>{service.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Premium Services */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-white mb-3">Bespoke Services</h2>
        <div className="grid grid-cols-2 gap-3">
          {premiumServices
            .filter(s => activeService === 'all' || s.category === activeService)
            .map((service) => (
            <div key={service.id} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="font-medium text-white text-sm">{service.name}</h3>
              <p className="text-gray-500 text-xs mt-1">{service.description}</p>
              <div className="mt-3 pt-3 border-t border-gray-800">
                <p className="text-amber-400 text-sm font-medium">{service.startingAt}</p>
                <p className="text-gray-500 text-xs">{service.availability}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Lifestyle Team */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-white">Your Lifestyle Team</h2>
          <button className="text-amber-400 text-sm">Message All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {lifestyleManagers.map((manager) => (
            <div key={manager.id} className="flex-shrink-0 w-40 bg-gray-900 rounded-xl p-4 border border-gray-800 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-yellow-500/10 rounded-full flex items-center justify-center text-3xl mx-auto">
                {manager.avatar}
              </div>
              <h3 className="font-medium text-white text-sm mt-3">{manager.name}</h3>
              <p className="text-amber-400 text-xs">{manager.role}</p>
              <div className="flex items-center justify-center gap-1 mt-2 text-xs text-gray-400">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>{manager.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Request */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-amber-500 to-yellow-400 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <div className="flex-1">
              <h3 className="text-black font-bold">New Request</h3>
              <p className="text-amber-800 text-sm">Anything you need, we'll arrange</p>
            </div>
            <ChevronRight className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>

      {/* 24/7 Helpline */}
      <div className="px-4 mb-4">
        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-amber-400" />
            <div>
              <p className="text-white text-sm">24/7 Dedicated Line</p>
              <p className="text-amber-400 font-bold">1800-ROYALE-1</p>
            </div>
          </div>
          <button className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-xl text-sm">
            Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoyaleHome;
