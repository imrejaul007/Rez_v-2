import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Activity, MapPin, Star, Users, Clock, Heart, Sparkles, TrendingUp } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function FitnessStudios() {
  const navigate = useNavigate();

  const studios = [
    {
      id: 1,
      name: 'Yoga Studio Plus',
      type: 'Yoga & Meditation',
      location: 'Koramangala, Bangalore',
      distance: 0.5,
      rating: 4.9,
      reviews: 980,
      members: 280,
      price: 799,
      originalPrice: 1200,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
      classes: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Pranayama'],
      schedule: ['6:00 AM - 9:00 PM'],
      highlights: ['Expert Instructors', 'Calm Environment', 'Props Included'],
      trialAvailable: true
    },
    {
      id: 2,
      name: 'Zumba Fitness Studio',
      type: 'Dance Fitness',
      location: 'Indiranagar, Bangalore',
      distance: 1.2,
      rating: 4.7,
      reviews: 1250,
      members: 340,
      price: 599,
      originalPrice: 999,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400',
      classes: ['Zumba', 'Dance Cardio', 'Bollywood Dance', 'Hip Hop'],
      schedule: ['7:00 AM - 8:00 PM'],
      highlights: ['Fun Workouts', 'Music & Dance', 'All Levels Welcome'],
      trialAvailable: true
    },
    {
      id: 3,
      name: 'Pilates Power',
      type: 'Pilates Studio',
      location: 'HSR Layout, Bangalore',
      distance: 2.0,
      rating: 4.8,
      reviews: 650,
      members: 190,
      price: 899,
      originalPrice: 1500,
      image: 'https://images.unsplash.com/photo-1518310952931-b1de897abd40?w=400',
      classes: ['Mat Pilates', 'Reformer', 'Core Strength', 'Flexibility'],
      schedule: ['6:30 AM - 7:30 PM'],
      highlights: ['Reformer Equipment', 'Small Groups', 'Personalized Attention'],
      trialAvailable: false
    },
    {
      id: 4,
      name: 'CrossFit Box',
      type: 'CrossFit Studio',
      location: 'Whitefield, Bangalore',
      distance: 3.2,
      rating: 4.9,
      reviews: 1450,
      members: 420,
      price: 1499,
      originalPrice: 2200,
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
      classes: ['CrossFit WOD', 'Olympic Lifting', 'Gymnastics', 'Endurance'],
      schedule: ['5:00 AM - 9:00 PM'],
      highlights: ['Certified Coaches', 'Competition Prep', 'Community Events'],
      trialAvailable: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Studios', icon: '🧘', color: 'from-purple-500/20 to-pink-500/20' },
    { id: 'yoga', name: 'Yoga', icon: '🕉️', color: 'from-green-500/20 to-emerald-500/20' },
    { id: 'dance', name: 'Dance', icon: '💃', color: 'from-pink-500/20 to-rose-500/20' },
    { id: 'pilates', name: 'Pilates', icon: '🤸', color: 'from-blue-500/20 to-cyan-500/20' },
    { id: 'crossfit', name: 'CrossFit', icon: '🏋️', color: 'from-orange-500/20 to-red-500/20' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Wellness-Themed Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600">
        <div className="px-4 py-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 rounded-full hover:bg-white/20 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-6 h-6 text-white" />
                <h1 className="text-2xl font-bold text-white">Fitness Studios</h1>
              </div>
              <p className="text-sm text-white/90">Specialized classes for every goal</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">{studios.length}+</p>
              <p className="text-xs text-white/80">Studios</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">1230</p>
              <p className="text-xs text-white/80">Members</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">4.8</p>
              <p className="text-xs text-white/80">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wellness Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
          <div className="flex items-center gap-3">
            <Heart className="w-10 h-10 text-green-500" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Mind & Body Wellness</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Expert-led classes for holistic fitness</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full bg-gradient-to-br ${cat.color} border border-white/20 whitespace-nowrap text-sm font-medium text-rez-navy dark:text-white hover:scale-105 transition-all`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Benefit Banner */}
      <div className="px-4 mb-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
          <div className="flex items-center gap-3">
            <Sparkles className="w-10 h-10 text-purple-600 dark:text-purple-400" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Studio Rewards</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get up to 25% cashback + coins on studio memberships</p>
            </div>
          </div>
        </div>
      </div>

      {/* Studios List */}
      <div className="px-4 space-y-4">
        {studios.map(studio => (
          <div
            key={studio.id}
            onClick={() => navigate(`/fitness/studio/${studio.id}`)}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={studio.image}
                alt={studio.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/80 text-rez-navy dark:text-white backdrop-blur-sm">
                  {studio.type}
                </span>
              </div>
              {studio.trialAvailable && (
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white">
                    Free Trial
                  </span>
                </div>
              )}
              <div className="absolute bottom-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500 text-white">
                  -{Math.round((1 - studio.price / studio.originalPrice) * 100)}% OFF
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-rez-navy dark:text-white flex-1">{studio.name}</h3>
              </div>

              {/* Location & Distance */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>{studio.location}</span>
                  <span className="text-xs text-gray-500">• {studio.distance} km away</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{studio.schedule[0]}</span>
                </div>
              </div>

              {/* Classes */}
              <div className="mb-3">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Classes Offered:</p>
                <div className="flex flex-wrap gap-2">
                  {studio.classes.map((cls, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                    >
                      {cls}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Highlights:</p>
                <div className="flex flex-wrap gap-2">
                  {studio.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-lg text-xs font-medium bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rating & Members */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-rez-navy dark:text-white">{studio.rating}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">({studio.reviews})</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{studio.members} members</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Starting from</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-rez-navy dark:text-white">₹{studio.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{studio.originalPrice}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">/month</span>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">+ Earn coins & cashback</p>
                </div>
                <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all">
                  View Classes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-center">
          <TrendingUp className="w-12 h-12 text-pink-600 dark:text-pink-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">List Your Studio</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Partner with ReZ and grow your studio community
          </p>
          <Link
            to="/partner/studio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Become a Partner
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default FitnessStudios;
