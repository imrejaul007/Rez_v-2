import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Users, Calendar, Clock, MapPin, Star, Award, TrendingUp } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function EventsWorkshops() {
  const navigate = useNavigate();

  const workshops = [
    {
      id: 1,
      name: 'Photography Masterclass',
      instructor: 'Raj Malhotra',
      date: 'Jan 26, 2025',
      time: '10:00 AM - 2:00 PM',
      price: 999,
      originalPrice: 1499,
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400',
      attendees: 24,
      rating: 4.8,
      level: 'Beginner',
      category: 'Arts & Crafts',
      location: 'Koramangala, Bangalore'
    },
    {
      id: 2,
      name: 'Italian Cooking Class',
      instructor: 'Chef Maria',
      date: 'Jan 29, 2025',
      time: '3:00 PM - 6:00 PM',
      price: 799,
      originalPrice: 1199,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400',
      attendees: 18,
      rating: 4.9,
      level: 'All Levels',
      category: 'Culinary',
      location: 'Indiranagar, Bangalore'
    },
    {
      id: 3,
      name: 'Digital Marketing Bootcamp',
      instructor: 'Priya Sharma',
      date: 'Feb 2, 2025',
      time: '11:00 AM - 5:00 PM',
      price: 1499,
      originalPrice: 2499,
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400',
      attendees: 32,
      rating: 4.7,
      level: 'Intermediate',
      category: 'Business',
      location: 'HSR Layout, Bangalore'
    },
    {
      id: 4,
      name: 'Pottery & Ceramics',
      instructor: 'Arjun Patel',
      date: 'Feb 5, 2025',
      time: '2:00 PM - 5:00 PM',
      price: 899,
      originalPrice: 1299,
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400',
      attendees: 15,
      rating: 4.6,
      level: 'Beginner',
      category: 'Arts & Crafts',
      location: 'Whitefield, Bangalore'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🎨', color: 'from-blue-500/20 to-cyan-500/20' },
    { id: 'arts', name: 'Arts & Crafts', icon: '🎨', color: 'from-purple-500/20 to-pink-500/20' },
    { id: 'culinary', name: 'Culinary', icon: '👨‍🍳', color: 'from-orange-500/20 to-red-500/20' },
    { id: 'business', name: 'Business', icon: '💼', color: 'from-indigo-500/20 to-blue-500/20' },
    { id: 'wellness', name: 'Wellness', icon: '🧘', color: 'from-green-500/20 to-emerald-500/20' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Themed Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
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
                <BookOpen className="w-6 h-6 text-white" />
                <h1 className="text-2xl font-bold text-white">Workshops</h1>
              </div>
              <p className="text-sm text-white/90">Learn new skills from experts</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">{workshops.length}</p>
              <p className="text-xs text-white/80">Workshops</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">89</p>
              <p className="text-xs text-white/80">Students</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">4.8</p>
              <p className="text-xs text-white/80">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-4">
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
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30">
          <div className="flex items-center gap-3">
            <Award className="w-10 h-10 text-amber-600 dark:text-amber-400" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Earn While You Learn</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get up to 20% cashback + coins on every workshop</p>
            </div>
          </div>
        </div>
      </div>

      {/* Workshops List */}
      <div className="px-4 space-y-4">
        {workshops.map(workshop => (
          <div
            key={workshop.id}
            onClick={() => navigate(`/event/workshop/${workshop.id}`)}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={workshop.image}
                alt={workshop.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/80 text-rez-navy dark:text-white backdrop-blur-sm">
                  {workshop.category}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white">
                  -{Math.round((1 - workshop.price / workshop.originalPrice) * 100)}% OFF
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title & Level */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-rez-navy dark:text-white flex-1">{workshop.name}</h3>
                <span className="px-2 py-1 rounded-lg text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  {workshop.level}
                </span>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-600 dark:text-gray-400">by {workshop.instructor}</p>
              </div>

              {/* Date, Time, Location */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>{workshop.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{workshop.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span>{workshop.location}</span>
                </div>
              </div>

              {/* Rating & Attendees */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-rez-navy dark:text-white">{workshop.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{workshop.attendees} enrolled</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-rez-navy dark:text-white">₹{workshop.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{workshop.originalPrice}</span>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">+ Earn coins & cashback</p>
                </div>
                <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-center">
          <TrendingUp className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">Become a Workshop Host</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Share your skills and earn money by hosting workshops on ReZ
          </p>
          <Link
            to="/host-workshop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Start Hosting
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default EventsWorkshops;
