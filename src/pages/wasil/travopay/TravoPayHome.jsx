import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Timer,
  Plane, Train, Bus, Hotel, Car, Palmtree, Ticket,
  Calendar, Users, ArrowRight, Shield, Zap, Wallet
} from 'lucide-react';

// TravoPay Home: Travel Bookings & Payments
// Backend API: GET /api/wasil/travopay/home
// Backend API: GET /api/wasil/travopay/flights
// Backend API: GET /api/wasil/travopay/hotels
// Backend API: POST /api/wasil/travopay/book

const TravoPayHome = () => {
  const [activeService, setActiveService] = useState('flights');

  const services = [
    { id: 'flights', name: 'Flights', icon: Plane, color: 'bg-blue-500' },
    { id: 'trains', name: 'Trains', icon: Train, color: 'bg-green-500' },
    { id: 'buses', name: 'Buses', icon: Bus, color: 'bg-red-500' },
    { id: 'hotels', name: 'Hotels', icon: Hotel, color: 'bg-purple-500' },
    { id: 'cabs', name: 'Cabs', icon: Car, color: 'bg-yellow-500' },
    { id: 'holidays', name: 'Holidays', icon: Palmtree, color: 'bg-teal-500' }
  ];

  const upcomingTrips = [
    {
      id: 1,
      type: "Flight",
      from: "BLR",
      to: "DEL",
      date: "Jan 15, 2025",
      time: "06:30 AM",
      airline: "IndiGo",
      pnr: "ABC123",
      status: "Confirmed"
    }
  ];

  const deals = [
    {
      id: 1,
      title: "Goa Getaway",
      description: "Flight + 3N Hotel",
      image: "🏖️",
      originalPrice: 15999,
      price: 9999,
      discount: "38%",
      coins: 800,
      validTill: "Jan 31"
    },
    {
      id: 2,
      title: "Manali Adventure",
      description: "Bus + 4N Stay + Activities",
      image: "🏔️",
      originalPrice: 12999,
      price: 7999,
      discount: "38%",
      coins: 600,
      validTill: "Feb 15"
    },
    {
      id: 3,
      title: "Rajasthan Heritage",
      description: "Train + 5N Hotels + Tours",
      image: "🏰",
      originalPrice: 24999,
      price: 18999,
      discount: "24%",
      coins: 1500,
      validTill: "Mar 31"
    }
  ];

  const popularRoutes = [
    { id: 1, from: "Delhi", to: "Mumbai", price: 4299, type: "flight" },
    { id: 2, from: "Bangalore", to: "Goa", price: 2999, type: "flight" },
    { id: 3, from: "Chennai", to: "Hyderabad", price: 599, type: "train" },
    { id: 4, from: "Mumbai", to: "Pune", price: 399, type: "bus" }
  ];

  const topHotels = [
    {
      id: 1,
      name: "Taj Exotica, Goa",
      location: "South Goa",
      image: "🏨",
      rating: 4.9,
      reviews: 2340,
      price: 12999,
      coins: 1000
    },
    {
      id: 2,
      name: "The Oberoi, Udaipur",
      location: "Udaipur",
      image: "🏰",
      rating: 4.8,
      reviews: 1890,
      price: 18999,
      coins: 1500
    }
  ];

  const quickActions = [
    { id: 1, name: "Web Check-in", icon: "✈️" },
    { id: 2, name: "PNR Status", icon: "🔍" },
    { id: 3, name: "Cancel Booking", icon: "❌" },
    { id: 4, name: "Support", icon: "💬" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 pt-6 pb-20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white">TravoPay</h1>
            <p className="text-blue-200 text-sm">Book. Travel. Earn.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="text-lg">🪙</span>
              <span className="text-white font-bold">8,450</span>
            </div>
          </div>
        </div>

        {/* Service Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeService === service.id
                  ? 'bg-white text-blue-600'
                  : 'bg-white/20 text-white'
              }`}
            >
              <service.icon className="w-4 h-4" />
              <span>{service.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search Card */}
      <div className="px-4 -mt-12">
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="text-xs text-gray-500">From</label>
                <input
                  type="text"
                  placeholder="City or Airport"
                  className="w-full text-gray-800 font-medium outline-none"
                />
              </div>
              <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-blue-600 rotate-90" />
              </button>
              <div className="flex-1">
                <label className="text-xs text-gray-500">To</label>
                <input
                  type="text"
                  placeholder="City or Airport"
                  className="w-full text-gray-800 font-medium outline-none"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-1">
                <label className="text-xs text-gray-500">Departure</label>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-800 font-medium">Select Date</span>
                </div>
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-500">Travellers</label>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-800 font-medium">1 Adult</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold">
              Search {services.find(s => s.id === activeService)?.name}
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Trip */}
      {upcomingTrips.length > 0 && (
        <div className="px-4 mt-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-xs">Upcoming Trip</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-white font-bold text-lg">{upcomingTrips[0].from}</span>
                  <Plane className="w-4 h-4 text-white" />
                  <span className="text-white font-bold text-lg">{upcomingTrips[0].to}</span>
                </div>
                <p className="text-green-200 text-sm">{upcomingTrips[0].date} • {upcomingTrips[0].time}</p>
              </div>
              <button className="bg-white text-green-600 px-4 py-2 rounded-xl font-medium text-sm">
                View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="px-4 mt-6">
        <div className="grid grid-cols-4 gap-2">
          {quickActions.map((action) => (
            <button key={action.id} className="bg-white rounded-xl p-3 shadow-sm text-center">
              <span className="text-2xl">{action.icon}</span>
              <p className="text-xs text-gray-700 mt-1">{action.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Travel Deals */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Holiday Deals
          </h2>
          <button className="text-blue-600 text-sm">View All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {deals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-64 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-6xl relative">
                {deal.image}
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {deal.discount} OFF
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800">{deal.title}</h3>
                <p className="text-gray-500 text-sm">{deal.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-gray-800">₹{deal.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-400 line-through">₹{deal.originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-600 text-xs">+{deal.coins}🪙</span>
                  <span className="text-gray-500 text-xs">Valid till {deal.validTill}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Routes */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Popular Routes</h2>
        <div className="grid grid-cols-2 gap-3">
          {popularRoutes.map((route) => (
            <button key={route.id} className="bg-white rounded-xl p-4 shadow-sm text-left">
              <div className="flex items-center gap-2">
                <span className="text-gray-800 font-medium">{route.from}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <span className="text-gray-800 font-medium">{route.to}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-blue-600 font-bold">₹{route.price}</span>
                <span className="text-xs text-gray-500 capitalize">{route.type}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Top Hotels */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Top Hotels</h2>
          <button className="text-blue-600 text-sm">View All</button>
        </div>

        <div className="space-y-3">
          {topHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-28 h-28 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-5xl">
                  {hotel.image}
                </div>
                <div className="flex-1 p-3">
                  <h3 className="font-medium text-gray-800">{hotel.name}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {hotel.location}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span>{hotel.rating}</span>
                    <span>({hotel.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <span className="font-bold text-gray-800">₹{hotel.price.toLocaleString()}</span>
                      <span className="text-gray-500 text-xs">/night</span>
                    </div>
                    <span className="text-yellow-600 text-xs">+{hotel.coins}🪙</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Insurance */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">Travel Insurance</h3>
              <p className="text-blue-200 text-sm">Secure your trip from ₹99</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravoPayHome;
