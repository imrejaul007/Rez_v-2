import React, { useState } from 'react';
import {
  Search, MapPin, Filter, Star, Clock, Users, Dumbbell,
  Heart, ChevronRight, Award, Zap, Calendar, TrendingUp
} from 'lucide-react';

// FitEarn Browse: Browse Gyms, Classes & Trainers
// Backend API: GET /api/wasil/fitearn/gyms
// Backend API: GET /api/wasil/fitearn/classes
// Backend API: GET /api/wasil/fitearn/trainers
// Backend API: GET /api/wasil/fitearn/categories

const FitEarnBrowse = () => {
  const [activeTab, setActiveTab] = useState('gyms');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'nearby', name: 'Nearby' },
    { id: 'popular', name: 'Popular' },
    { id: 'offers', name: 'Offers' },
    { id: 'certified', name: 'Certified' }
  ];

  const gyms = [
    {
      id: 1,
      name: "Cult.fit Gym",
      type: "Premium Gym",
      image: "🏋️",
      rating: 4.8,
      reviews: 3400,
      distance: "0.5 km",
      priceRange: "₹₹₹",
      offer: "50% OFF on 3-month plan",
      coins: 150,
      facilities: ["AC", "Locker", "Trainer", "Shower"]
    },
    {
      id: 2,
      name: "Gold's Gym",
      type: "International Chain",
      image: "💪",
      rating: 4.7,
      reviews: 5600,
      distance: "1.2 km",
      priceRange: "₹₹₹₹",
      offer: "Free personal training session",
      coins: 200,
      facilities: ["AC", "Steam", "Spa", "Pool"]
    },
    {
      id: 3,
      name: "Fitness First",
      type: "Budget Friendly",
      image: "🏃",
      rating: 4.5,
      reviews: 2100,
      distance: "0.8 km",
      priceRange: "₹₹",
      offer: "₹500 OFF on annual plan",
      coins: 100,
      facilities: ["AC", "Locker", "WiFi"]
    }
  ];

  const classes = [
    {
      id: 1,
      name: "Zumba Dance",
      instructor: "Sarah Khan",
      image: "💃",
      rating: 4.9,
      participants: 45,
      time: "Today, 6:00 PM",
      duration: "60 min",
      level: "Beginner",
      price: 299,
      coins: 30
    },
    {
      id: 2,
      name: "Power Yoga",
      instructor: "Ramesh Kumar",
      image: "🧘",
      rating: 4.8,
      participants: 30,
      time: "Tomorrow, 7:00 AM",
      duration: "45 min",
      level: "Intermediate",
      price: 399,
      coins: 40
    },
    {
      id: 3,
      name: "CrossFit",
      instructor: "Mike Johnson",
      image: "🏋️",
      rating: 4.7,
      participants: 25,
      time: "Today, 5:30 PM",
      duration: "90 min",
      level: "Advanced",
      price: 599,
      coins: 60
    }
  ];

  const trainers = [
    {
      id: 1,
      name: "Rahul Sharma",
      specialization: "Weight Loss & Strength",
      image: "👨‍🏫",
      rating: 4.9,
      experience: "8 years",
      clients: 450,
      price: "₹2000/month",
      coins: 200,
      certified: true
    },
    {
      id: 2,
      name: "Priya Mehta",
      specialization: "Yoga & Flexibility",
      image: "👩‍🏫",
      rating: 4.8,
      experience: "5 years",
      clients: 280,
      price: "₹1500/month",
      coins: 150,
      certified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white">Browse</h1>
            <div className="flex items-center gap-1 text-white/80 text-sm mt-1">
              <MapPin className="w-4 h-4" />
              <span>HSR Layout, Bengaluru</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="text-lg">🪙</span>
              <span className="text-white font-bold">2,340</span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search gyms, classes, trainers..."
            className="flex-1 outline-none text-gray-800"
          />
          <button className="bg-orange-100 p-2 rounded-lg">
            <Filter className="w-4 h-4 text-orange-600" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="flex px-4">
          {['gyms', 'classes', 'trainers'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium capitalize ${
                activeTab === tab
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 py-3 bg-white border-b border-gray-100">
        <div className="flex gap-2 overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeFilter === filter.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Gyms List */}
      {activeTab === 'gyms' && (
        <div className="px-4 py-4 space-y-4">
          {gyms.map((gym) => (
            <div key={gym.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-36 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-7xl relative">
                {gym.image}
                {gym.offer && (
                  <div className="absolute bottom-3 left-3 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {gym.offer}
                  </div>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800">{gym.name}</h3>
                    <p className="text-sm text-gray-500">{gym.type}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                    <Star className="w-3 h-3" /> {gym.rating}
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {gym.distance}
                  </span>
                  <span>{gym.priceRange}</span>
                  <span>{gym.reviews.toLocaleString()} reviews</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {gym.facilities.map((facility) => (
                    <span key={facility} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      {facility}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <span className="text-yellow-600 text-sm font-medium">+{gym.coins}🪙 on signup</span>
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Classes List */}
      {activeTab === 'classes' && (
        <div className="px-4 py-4 space-y-4">
          {classes.map((cls) => (
            <div key={cls.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center text-4xl">
                  {cls.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800">{cls.name}</h3>
                      <p className="text-sm text-gray-500">{cls.instructor}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      <Star className="w-3 h-3" /> {cls.rating}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {cls.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> {cls.participants}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="text-sm text-gray-500">{cls.time}</p>
                      <p className="font-bold text-gray-800">₹{cls.price}</p>
                    </div>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Book Class
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Trainers List */}
      {activeTab === 'trainers' && (
        <div className="px-4 py-4 space-y-4">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center text-4xl">
                  {trainer.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-800">{trainer.name}</h3>
                        {trainer.certified && (
                          <Award className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{trainer.specialization}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      <Star className="w-3 h-3" /> {trainer.rating}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span>{trainer.experience} exp</span>
                    <span>•</span>
                    <span>{trainer.clients} clients</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="font-bold text-gray-800">{trainer.price}</p>
                    </div>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Hire Trainer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FitEarnBrowse;
