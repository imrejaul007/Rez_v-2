import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Users, Calendar, Clock, MapPin, Star, Heart, Mountain, TrendingUp } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function EventsExperiences() {
  const navigate = useNavigate();

  const experiences = [
    {
      id: 1,
      name: 'Hot Air Balloon Ride',
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1519981593452-666cf05569a9?w=400',
      location: 'Jaipur, Rajasthan',
      duration: '2 hours',
      rating: 4.9,
      reviews: 1250,
      price: 8999,
      originalPrice: 12000,
      groupSize: 'Up to 6 people',
      highlights: ['Sunrise Views', 'Professional Pilot', 'Photos Included'],
      bestFor: ['Couples', 'Adventure Seekers'],
      nextAvailable: 'Tomorrow 6:00 AM'
    },
    {
      id: 2,
      name: 'Scuba Diving Experience',
      category: 'Water Sports',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
      location: 'Andaman Islands',
      duration: '4 hours',
      rating: 4.8,
      reviews: 890,
      price: 4999,
      originalPrice: 7500,
      groupSize: 'Up to 4 people',
      highlights: ['PADI Certified', 'Equipment Provided', 'Underwater Photos'],
      bestFor: ['Beginners', 'Thrill Seekers'],
      nextAvailable: 'Jan 28, 9:00 AM'
    },
    {
      id: 3,
      name: 'Cooking Class with Chef',
      category: 'Culinary',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400',
      location: 'Bangalore, Karnataka',
      duration: '3 hours',
      rating: 4.7,
      reviews: 650,
      price: 1999,
      originalPrice: 3000,
      groupSize: 'Up to 10 people',
      highlights: ['3-Course Meal', 'Recipes Included', 'Wine Pairing'],
      bestFor: ['Food Lovers', 'Groups'],
      nextAvailable: 'This Weekend'
    },
    {
      id: 4,
      name: 'Paragliding Adventure',
      category: 'Extreme Sports',
      image: 'https://images.unsplash.com/photo-1527570122149-88a3aea50dfd?w=400',
      location: 'bir Billing, Himachal',
      duration: '30 minutes',
      rating: 5.0,
      reviews: 2100,
      price: 2499,
      originalPrice: 3500,
      groupSize: '1 person',
      highlights: ['GoPro Video', 'Certified Instructors', 'Mountain Views'],
      bestFor: ['Solo Travelers', 'Adrenaline Junkies'],
      nextAvailable: 'Jan 30, 10:00 AM'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Experiences', icon: '✨', color: 'from-amber-500/20 to-orange-500/20' },
    { id: 'adventure', name: 'Adventure', icon: '🏔️', color: 'from-orange-500/20 to-red-500/20' },
    { id: 'water', name: 'Water Sports', icon: '🌊', color: 'from-blue-500/20 to-cyan-500/20' },
    { id: 'culinary', name: 'Culinary', icon: '🍳', color: 'from-yellow-500/20 to-amber-500/20' },
    { id: 'wellness', name: 'Wellness', icon: '🧘', color: 'from-green-500/20 to-emerald-500/20' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Adventure-Themed Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600">
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
                <Sparkles className="w-6 h-6 text-white fill-white" />
                <h1 className="text-2xl font-bold text-white">Unique Experiences</h1>
              </div>
              <p className="text-sm text-white/90">Create unforgettable memories</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">{experiences.length}+</p>
              <p className="text-xs text-white/80">Experiences</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-xs text-white/80">Activities</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">4.9</p>
              <p className="text-xs text-white/80">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
          <div className="flex items-center gap-3">
            <Heart className="w-10 h-10 text-green-500" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Safety First!</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">All experiences are certified & insured</p>
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
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
          <div className="flex items-center gap-3">
            <Mountain className="w-10 h-10 text-amber-600 dark:text-amber-400" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Adventure Rewards</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get up to 30% cashback + coins on experiences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Experiences List */}
      <div className="px-4 space-y-4">
        {experiences.map(exp => (
          <div
            key={exp.id}
            onClick={() => navigate(`/event/experience/${exp.id}`)}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={exp.image}
                alt={exp.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/80 text-rez-navy dark:text-white backdrop-blur-sm">
                  {exp.category}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white">
                  -{Math.round((1 - exp.price / exp.originalPrice) * 100)}% OFF
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-rez-navy dark:text-white flex-1">{exp.name}</h3>
              </div>

              {/* Location & Duration */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span>{exp.groupSize}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Rating & Next Available */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-rez-navy dark:text-white">{exp.rating}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">({exp.reviews})</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.nextAvailable}</span>
                </div>
              </div>

              {/* Best For Tags */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Best for:</span>
                {exp.bestFor.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-lg text-xs font-medium bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-rez-navy dark:text-white">₹{exp.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{exp.originalPrice}</span>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">+ Earn coins & cashback</p>
                </div>
                <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold hover:scale-105 transition-all">
                  Book Now
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
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">Become an Experience Host</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Share your unique skills and create memorable experiences for others
          </p>
          <Link
            to="/host-experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Start Hosting
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default EventsExperiences;
