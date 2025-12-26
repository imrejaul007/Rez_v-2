import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Dumbbell, MapPin, Star, Clock, Users, Zap, Award, TrendingUp } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function FitnessGyms() {
  const navigate = useNavigate();

  const gyms = [
    {
      id: 1,
      name: 'Cult.fit Gym',
      location: 'Koramangala, Bangalore',
      distance: 0.8,
      rating: 4.8,
      reviews: 1540,
      members: 450,
      price: 999,
      originalPrice: 1500,
      features: ['Cardio Zone', 'Weight Training', 'Group Classes', 'Personal Training'],
      amenities: ['Showers', 'Locker', 'Parking', 'WiFi'],
      open: '5:00 AM - 11:00 PM',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
      trending: true,
      trialAvailable: true
    },
    {
      id: 2,
      name: 'Gold\'s Gym',
      location: 'Indiranagar, Bangalore',
      distance: 1.5,
      rating: 4.7,
      reviews: 2300,
      members: 620,
      price: 1499,
      originalPrice: 2500,
      features: ['CrossFit Zone', 'Spa & Steam', 'Personal Training', 'Nutrition Counseling'],
      amenities: ['Showers', 'Locker', 'Parking', 'Cafe'],
      open: '6:00 AM - 10:00 PM',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400',
      trending: false,
      trialAvailable: true
    },
    {
      id: 3,
      name: 'Anytime Fitness',
      location: 'HSR Layout, Bangalore',
      distance: 2.1,
      rating: 4.6,
      reviews: 890,
      members: 380,
      price: 1299,
      originalPrice: 2000,
      features: ['24/7 Access', 'Cardio Equipment', 'Free Weights', 'Virtual Classes'],
      amenities: ['Showers', 'Locker', '24/7 Access', 'Security'],
      open: '24 Hours',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400',
      trending: true,
      trialAvailable: false
    },
    {
      id: 4,
      name: 'The Outfit',
      location: 'Whitefield, Bangalore',
      distance: 3.5,
      rating: 4.9,
      reviews: 1120,
      members: 290,
      price: 1999,
      originalPrice: 3000,
      features: ['Premium Equipment', 'Boxing Ring', 'Functional Training', 'Recovery Zone'],
      amenities: ['Showers', 'Locker', 'Parking', 'Cafe', 'Spa'],
      open: '5:00 AM - 11:00 PM',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
      trending: false,
      trialAvailable: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Gyms', icon: '💪', color: 'from-red-500/20 to-orange-500/20' },
    { id: 'nearby', name: 'Nearby', icon: '📍', color: 'from-blue-500/20 to-cyan-500/20' },
    { id: '24x7', name: '24/7 Open', icon: '🕐', color: 'from-purple-500/20 to-pink-500/20' },
    { id: 'premium', name: 'Premium', icon: '⭐', color: 'from-amber-500/20 to-yellow-500/20' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Strength-Themed Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-red-600 via-orange-600 to-amber-600">
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
                <Dumbbell className="w-6 h-6 text-white" />
                <h1 className="text-2xl font-bold text-white">Gyms Near You</h1>
              </div>
              <p className="text-sm text-white/90">Find your perfect fitness home</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">{gyms.length}+</p>
              <p className="text-xs text-white/80">Gyms</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">1740</p>
              <p className="text-xs text-white/80">Members</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">40%</p>
              <p className="text-xs text-white/80">Avg Savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trial Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
          <div className="flex items-center gap-3">
            <Zap className="w-10 h-10 text-green-500" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Free Trial Available!</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Try before you commit - 3 days free trial</p>
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
        <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30">
          <div className="flex items-center gap-3">
            <Award className="w-10 h-10 text-red-600 dark:text-red-400" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Fitness Rewards</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get up to 20% cashback + coins on memberships</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gyms List */}
      <div className="px-4 space-y-4">
        {gyms.map(gym => (
          <div
            key={gym.id}
            onClick={() => navigate(`/fitness/gym/${gym.id}`)}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={gym.image}
                alt={gym.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {gym.trending && (
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </span>
                </div>
              )}
              {gym.trialAvailable && (
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white">
                    Free Trial
                  </span>
                </div>
              )}
              <div className="absolute bottom-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white">
                  -{Math.round((1 - gym.price / gym.originalPrice) * 100)}% OFF
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title & Open Hours */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-rez-navy dark:text-white flex-1">{gym.name}</h3>
              </div>

              {/* Location & Distance */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <span>{gym.location}</span>
                  <span className="text-xs text-gray-500">• {gym.distance} km away</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{gym.open}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-3">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Features:</p>
                <div className="flex flex-wrap gap-2">
                  {gym.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Amenities:</p>
                <div className="flex flex-wrap gap-2">
                  {gym.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-lg text-xs font-medium bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rating & Members */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-rez-navy dark:text-white">{gym.rating}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">({gym.reviews})</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{gym.members} members</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Starting from</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-rez-navy dark:text-white">₹{gym.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{gym.originalPrice}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">/month</span>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">+ Earn coins & cashback</p>
                </div>
                <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold hover:scale-105 transition-all">
                  {gym.trialAvailable ? 'Start Trial' : 'Join Now'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 text-center">
          <TrendingUp className="w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">List Your Gym</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Partner with ReZ and grow your gym membership
          </p>
          <Link
            to="/partner/gym"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Become a Partner
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default FitnessGyms;
