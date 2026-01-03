import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, User, Star, Award, MapPin, Target, BadgeCheck, TrendingUp } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function FitnessTrainers() {
  const navigate = useNavigate();

  const trainers = [
    {
      id: 1,
      name: 'Rahul Sharma',
      specialization: 'Weight Loss & Strength Training',
      location: 'Koramangala, Bangalore',
      experience: 8,
      rating: 4.9,
      reviews: 350,
      clients: 120,
      price: 2000,
      originalPrice: 3000,
      certified: true,
      certifications: ['ACE Certified', 'Nutrition Specialist'],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
      specialties: ['Fat Loss', 'Muscle Building', 'Diet Planning'],
      availability: 'Mon-Sat, 6 AM - 8 PM',
      languages: ['English', 'Hindi']
    },
    {
      id: 2,
      name: 'Priya Verma',
      specialization: 'Yoga & Flexibility',
      location: 'Indiranagar, Bangalore',
      experience: 6,
      rating: 4.8,
      reviews: 280,
      clients: 85,
      price: 1500,
      originalPrice: 2200,
      certified: true,
      certifications: ['RYT 500', 'Pilates Certified'],
      image: 'https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=400',
      specialties: ['Hatha Yoga', 'Ashtanga', 'Meditation'],
      availability: 'Mon-Sun, 5 AM - 9 AM',
      languages: ['English', 'Hindi', 'Kannada']
    },
    {
      id: 3,
      name: 'Amit Patel',
      specialization: 'CrossFit & HIIT',
      location: 'HSR Layout, Bangalore',
      experience: 10,
      rating: 4.9,
      reviews: 520,
      clients: 200,
      price: 2500,
      originalPrice: 3500,
      certified: true,
      certifications: ['CF-L2', 'NSCA-CPT'],
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400',
      specialties: ['CrossFit', 'HIIT', 'Functional Training'],
      availability: 'Mon-Sat, 6 AM - 10 AM, 5 PM - 8 PM',
      languages: ['English', 'Gujarati']
    },
    {
      id: 4,
      name: 'Kavya Iyer',
      specialization: 'Women\'s Fitness & Wellness',
      location: 'Whitefield, Bangalore',
      experience: 7,
      rating: 5.0,
      reviews: 410,
      clients: 150,
      price: 1800,
      originalPrice: 2500,
      certified: true,
      certifications: ['NASM-CPT', 'Pre/Postnatal Specialist'],
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400',
      specialties: ['Prenatal Fitness', 'PCOS Management', 'Toning'],
      availability: 'Mon-Fri, 7 AM - 12 PM, 4 PM - 7 PM',
      languages: ['English', 'Tamil', 'Hindi']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Trainers', icon: '👤', color: 'from-blue-500/20 to-cyan-500/20' },
    { id: 'weight-loss', name: 'Weight Loss', icon: '⚡', color: 'from-red-500/20 to-orange-500/20' },
    { id: 'strength', name: 'Strength', icon: '💪', color: 'from-orange-500/20 to-amber-500/20' },
    { id: 'yoga', name: 'Yoga', icon: '🧘', color: 'from-green-500/20 to-emerald-500/20' },
    { id: 'women', name: 'Women\'s Fitness', icon: '👩', color: 'from-pink-500/20 to-rose-500/20' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Personal Training-Themed Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600">
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
                <User className="w-6 h-6 text-white" />
                <h1 className="text-2xl font-bold text-white">Personal Trainers</h1>
              </div>
              <p className="text-sm text-white/90">Certified fitness experts near you</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">{trainers.length}+</p>
              <p className="text-xs text-white/80">Trainers</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">555</p>
              <p className="text-xs text-white/80">Active Clients</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">4.9</p>
              <p className="text-xs text-white/80">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
          <div className="flex items-center gap-3">
            <BadgeCheck className="w-10 h-10 text-green-500" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">100% Certified Trainers</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">All trainers are verified & certified professionals</p>
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
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
          <div className="flex items-center gap-3">
            <Target className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Training Rewards</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get up to 15% cashback + coins on training sessions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trainers List */}
      <div className="px-4 space-y-4">
        {trainers.map(trainer => (
          <div
            key={trainer.id}
            onClick={() => navigate(`/fitness/trainer/${trainer.id}`)}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              {trainer.certified && (
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white flex items-center gap-1">
                    <BadgeCheck className="w-3 h-3" />
                    Certified
                  </span>
                </div>
              )}
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500 text-white">
                  -{Math.round((1 - trainer.price / trainer.originalPrice) * 100)}% OFF
                </span>
              </div>
              <div className="absolute bottom-3 left-3">
                <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                <p className="text-sm text-white/90">{trainer.specialization}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Location & Experience */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{trainer.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>{trainer.experience} years experience</span>
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-3">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Certifications:</p>
                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-2">
                  {trainer.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-lg text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rating & Clients */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-rez-navy dark:text-white">{trainer.rating}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">({trainer.reviews})</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <User className="w-4 h-4" />
                  <span>{trainer.clients} clients</span>
                </div>
              </div>

              {/* Availability & Languages */}
              <div className="mb-4 space-y-1">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Available:</span> {trainer.availability}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Languages:</span> {trainer.languages.join(', ')}
                </p>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Per session</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-rez-navy dark:text-white">₹{trainer.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{trainer.originalPrice}</span>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">+ Earn coins & cashback</p>
                </div>
                <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:scale-105 transition-all">
                  Book Session
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-center">
          <TrendingUp className="w-12 h-12 text-cyan-600 dark:text-cyan-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">Become a Trainer</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Join ReZ as a certified trainer and grow your client base
          </p>
          <Link
            to="/trainer/register"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Register as Trainer
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default FitnessTrainers;
