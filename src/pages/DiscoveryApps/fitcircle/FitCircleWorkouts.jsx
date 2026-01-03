import React, { useState } from 'react';
import {
  Play, Clock, Flame, Star, Filter, ChevronRight, Heart,
  Bookmark, Share2, Dumbbell, Timer, Target, Award,
  BarChart3, Users, Zap
} from 'lucide-react';

// FitCircle Workouts: Workout Library & Plans
// Backend API: GET /api/fitcircle/workouts
// Backend API: GET /api/fitcircle/workouts/:id
// Backend API: POST /api/fitcircle/workouts/:id/start
// Backend API: POST /api/fitcircle/workouts/:id/complete

const FitCircleWorkouts = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '🏃' },
    { id: 'strength', name: 'Strength', icon: '💪' },
    { id: 'cardio', name: 'Cardio', icon: '❤️' },
    { id: 'yoga', name: 'Yoga', icon: '🧘' },
    { id: 'hiit', name: 'HIIT', icon: '⚡' },
    { id: 'stretch', name: 'Stretch', icon: '🤸' }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const featuredWorkout = {
    id: 0,
    title: "30-Day Full Body Challenge",
    instructor: "Coach Mike",
    duration: "30 days",
    workouts: 30,
    enrolled: 12450,
    rating: 4.9,
    image: "🔥",
    coins: 500,
    isPremium: false
  };

  const workouts = [
    {
      id: 1,
      title: "Full Body Burn",
      instructor: "Coach Sarah",
      duration: "30 min",
      category: "strength",
      level: "intermediate",
      calories: 350,
      rating: 4.8,
      reviews: 234,
      coins: 50,
      image: "💪",
      exercises: 12
    },
    {
      id: 2,
      title: "Morning Yoga Flow",
      instructor: "Yogi Priya",
      duration: "20 min",
      category: "yoga",
      level: "beginner",
      calories: 150,
      rating: 4.9,
      reviews: 567,
      coins: 30,
      image: "🧘",
      exercises: 8
    },
    {
      id: 3,
      title: "HIIT Cardio Blast",
      instructor: "Coach Mike",
      duration: "25 min",
      category: "hiit",
      level: "advanced",
      calories: 400,
      rating: 4.7,
      reviews: 321,
      coins: 60,
      image: "⚡",
      exercises: 15
    },
    {
      id: 4,
      title: "Core Crusher",
      instructor: "Coach Lisa",
      duration: "15 min",
      category: "strength",
      level: "intermediate",
      calories: 200,
      rating: 4.6,
      reviews: 189,
      coins: 35,
      image: "🎯",
      exercises: 10
    },
    {
      id: 5,
      title: "Beginner Stretch",
      instructor: "Coach Emma",
      duration: "10 min",
      category: "stretch",
      level: "beginner",
      calories: 50,
      rating: 4.8,
      reviews: 890,
      coins: 20,
      image: "🤸",
      exercises: 6
    },
    {
      id: 6,
      title: "Fat Burning Cardio",
      instructor: "Coach Alex",
      duration: "35 min",
      category: "cardio",
      level: "intermediate",
      calories: 450,
      rating: 4.7,
      reviews: 456,
      coins: 55,
      image: "🔥",
      exercises: 14
    }
  ];

  const recentWorkouts = [
    { id: 1, title: "Morning Yoga", completed: "Today", duration: "20 min", coins: 30 },
    { id: 2, title: "HIIT Cardio", completed: "Yesterday", duration: "25 min", coins: 60 },
    { id: 3, title: "Core Crusher", completed: "2 days ago", duration: "15 min", coins: 35 }
  ];

  const filteredWorkouts = workouts.filter(w => {
    const categoryMatch = activeCategory === 'all' || w.category === activeCategory;
    const levelMatch = activeLevel === 'all' || w.level === activeLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Workouts</h1>
          <button className="bg-white/20 p-2 rounded-lg">
            <Filter className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-white text-green-600'
                  : 'bg-white/20 text-white'
              }`}
            >
              <span>{cat.icon}</span>
              <span className="text-sm font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Level Filter */}
      <div className="px-4 py-3 flex gap-2 overflow-x-auto">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => setActiveLevel(level.id)}
            className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
              activeLevel === level.id
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-600 shadow-sm'
            }`}
          >
            {level.name}
          </button>
        ))}
      </div>

      {/* Featured Challenge */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-8xl opacity-20">
            {featuredWorkout.image}
          </div>
          <div className="relative z-10">
            <span className="bg-white/20 text-white text-xs font-medium px-2 py-1 rounded-full">
              Featured Challenge
            </span>
            <h2 className="text-xl font-bold text-white mt-2">{featuredWorkout.title}</h2>
            <p className="text-orange-100 text-sm">{featuredWorkout.instructor}</p>
            <div className="flex items-center gap-4 mt-3 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {featuredWorkout.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" /> {featuredWorkout.enrolled.toLocaleString()}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> {featuredWorkout.rating}
              </span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-yellow-300 font-bold">+{featuredWorkout.coins}🪙 on completion</span>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-xl font-medium text-sm">
                Join Challenge
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Workouts */}
      {recentWorkouts.length > 0 && (
        <div className="px-4 mt-6">
          <h2 className="font-semibold text-gray-800 mb-3">Continue Training</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {recentWorkouts.map((workout) => (
              <div key={workout.id} className="flex-shrink-0 w-48 bg-white rounded-xl p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-800">{workout.title}</span>
                  <button className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <span>{workout.completed}</span>
                  <span>•</span>
                  <span>{workout.duration}</span>
                </div>
                <span className="text-xs text-yellow-600 font-medium">+{workout.coins}🪙</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Workout Library */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">Workout Library</h2>
          <span className="text-sm text-gray-500">{filteredWorkouts.length} workouts</span>
        </div>

        <div className="space-y-3">
          {filteredWorkouts.map((workout) => (
            <div key={workout.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl flex items-center justify-center text-4xl relative">
                  {workout.image}
                  <button className="absolute bottom-1 right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </button>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">{workout.title}</h3>
                      <p className="text-sm text-gray-500">{workout.instructor}</p>
                    </div>
                    <button className="text-gray-400">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {workout.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-3 h-3 text-orange-500" /> {workout.calories} cal
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="w-3 h-3" /> {workout.exercises} exercises
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-xs">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        {workout.rating}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        workout.level === 'beginner' ? 'bg-green-100 text-green-700' :
                        workout.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {workout.level.charAt(0).toUpperCase() + workout.level.slice(1)}
                      </span>
                    </div>
                    <span className="text-yellow-600 text-sm font-medium">+{workout.coins}🪙</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-4">
          <h3 className="text-white font-semibold mb-3">Your Stats</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-white">24</p>
              <p className="text-green-200 text-xs">Workouts</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-white">8.5h</p>
              <p className="text-green-200 text-xs">Total Time</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-white">1.2K</p>
              <p className="text-green-200 text-xs">Coins Earned</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitCircleWorkouts;
