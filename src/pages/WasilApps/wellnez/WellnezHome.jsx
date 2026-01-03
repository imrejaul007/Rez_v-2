import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Timer,
  Heart, Activity, Brain, Moon, Apple, Dumbbell,
  Calendar, TrendingUp, Target, Award, Zap, Users
} from 'lucide-react';

// Wellnez Home: Health & Wellness Platform
// Backend API: GET /api/wasil/wellnez/home
// Backend API: GET /api/wasil/wellnez/programs
// Backend API: GET /api/wasil/wellnez/coaches
// Backend API: POST /api/wasil/wellnez/book

const WellnezHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '🧘', color: 'bg-teal-500' },
    { id: 'yoga', name: 'Yoga', icon: '🧘‍♀️', color: 'bg-purple-500' },
    { id: 'meditation', name: 'Meditation', icon: '🧠', color: 'bg-indigo-500' },
    { id: 'nutrition', name: 'Nutrition', icon: '🥗', color: 'bg-green-500' },
    { id: 'fitness', name: 'Fitness', icon: '💪', color: 'bg-orange-500' },
    { id: 'sleep', name: 'Sleep', icon: '😴', color: 'bg-blue-500' },
    { id: 'therapy', name: 'Therapy', icon: '💬', color: 'bg-pink-500' }
  ];

  const myWellness = {
    streak: 15,
    todayMinutes: 45,
    weeklyGoal: 300,
    weeklyProgress: 195,
    mood: "Good",
    steps: 6500
  };

  const todaySchedule = [
    { id: 1, time: "6:30 AM", activity: "Morning Yoga", duration: "30 min", completed: true },
    { id: 2, time: "12:00 PM", activity: "Guided Meditation", duration: "15 min", completed: true },
    { id: 3, time: "6:00 PM", activity: "HIIT Workout", duration: "20 min", completed: false }
  ];

  const programs = [
    {
      id: 1,
      name: "21-Day Yoga Challenge",
      description: "Transform your body & mind",
      image: "🧘‍♀️",
      duration: "21 days",
      level: "Beginner",
      rating: 4.9,
      enrolled: 12500,
      price: 999,
      coins: 500
    },
    {
      id: 2,
      name: "Stress Relief Program",
      description: "Meditation & breathing exercises",
      image: "🧠",
      duration: "14 days",
      level: "All Levels",
      rating: 4.8,
      enrolled: 8900,
      price: 799,
      coins: 400
    },
    {
      id: 3,
      name: "Weight Loss Journey",
      description: "Diet plans + workout routines",
      image: "🏃",
      duration: "30 days",
      level: "Intermediate",
      rating: 4.7,
      enrolled: 15600,
      price: 1499,
      coins: 800
    }
  ];

  const liveClasses = [
    { id: 1, name: "Power Yoga", coach: "Priya Sharma", time: "7:00 AM", spots: 12, image: "🧘‍♀️" },
    { id: 2, name: "HIIT Blast", coach: "Rahul Verma", time: "6:00 PM", spots: 8, image: "💪" },
    { id: 3, name: "Sleep Meditation", coach: "Anjali Rao", time: "10:00 PM", spots: 25, image: "🌙" }
  ];

  const coaches = [
    { id: 1, name: "Dr. Priya Sharma", specialty: "Yoga & Meditation", rating: 4.9, sessions: 2500, avatar: "👩‍⚕️" },
    { id: 2, name: "Rahul Verma", specialty: "Fitness & Nutrition", rating: 4.8, sessions: 1800, avatar: "👨‍🏫" },
    { id: 3, name: "Dr. Anjali Rao", specialty: "Mental Wellness", rating: 4.9, sessions: 3200, avatar: "👩‍💼" }
  ];

  const dailyTips = [
    { id: 1, tip: "Drink 8 glasses of water today", icon: "💧" },
    { id: 2, tip: "Take a 5-min break every hour", icon: "⏰" },
    { id: 3, tip: "Practice deep breathing", icon: "🌬️" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-teal-100 text-sm">Good Morning!</p>
            <h1 className="text-lg font-bold text-white">How are you feeling?</h1>
          </div>
          <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="text-lg">🔥</span>
            <span className="text-white font-bold">{myWellness.streak} day streak</span>
          </div>
        </div>

        {/* Wellness Stats */}
        <div className="bg-white/10 rounded-xl p-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-teal-200 text-xs">Today</p>
            <p className="text-white font-bold text-lg">{myWellness.todayMinutes} min</p>
          </div>
          <div className="text-center border-x border-white/20">
            <p className="text-teal-200 text-xs">Steps</p>
            <p className="text-white font-bold text-lg">{myWellness.steps.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-teal-200 text-xs">Mood</p>
            <p className="text-white font-bold text-lg">😊 {myWellness.mood}</p>
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-white/80 text-sm mb-1">
            <span>Weekly Goal</span>
            <span>{myWellness.weeklyProgress}/{myWellness.weeklyGoal} min</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${(myWellness.weeklyProgress / myWellness.weeklyGoal) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="px-4 -mt-2">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="font-bold text-gray-800 mb-3">Today's Schedule</h3>
          <div className="space-y-3">
            {todaySchedule.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  item.completed ? 'bg-green-100' : 'bg-teal-100'
                }`}>
                  {item.completed ? '✅' : '⏳'}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800 text-sm">{item.activity}</h4>
                  <p className="text-xs text-gray-500">{item.time} • {item.duration}</p>
                </div>
                {!item.completed && (
                  <button className="bg-teal-500 text-white px-3 py-1 rounded-lg text-xs font-medium">
                    Start
                  </button>
                )}
              </div>
            ))}
          </div>
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
                activeCategory === cat.id ? 'opacity-100' : 'opacity-70'
              }`}
            >
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-2xl ${
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-teal-500' : ''
              }`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-700 font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Live Classes */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Live Classes
          </h2>
          <button className="text-teal-600 text-sm">View All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {liveClasses.map((cls) => (
            <div key={cls.id} className="flex-shrink-0 w-48 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-20 bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center text-4xl">
                {cls.image}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm">{cls.name}</h3>
                <p className="text-xs text-gray-500">{cls.coach}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-teal-600 text-xs">{cls.time}</span>
                  <span className="text-gray-500 text-xs">{cls.spots} spots</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Programs */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Featured Programs</h2>
          <button className="text-teal-600 text-sm">See All</button>
        </div>

        <div className="space-y-3">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center text-4xl">
                  {program.image}
                </div>
                <div className="flex-1 p-3">
                  <h3 className="font-medium text-gray-800">{program.name}</h3>
                  <p className="text-xs text-gray-500">{program.description}</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                    <span>{program.duration}</span>
                    <span>•</span>
                    <span>{program.level}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      {program.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <span className="font-bold text-gray-800">₹{program.price}</span>
                      <span className="text-yellow-600 text-xs ml-2">+{program.coins}🪙</span>
                    </div>
                    <button className="bg-teal-500 text-white px-3 py-1 rounded-lg text-xs font-medium">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Coaches */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Top Coaches</h2>
          <button className="text-teal-600 text-sm">View All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {coaches.map((coach) => (
            <div key={coach.id} className="flex-shrink-0 w-36 bg-white rounded-xl p-4 shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-3xl mx-auto">
                {coach.avatar}
              </div>
              <h3 className="font-medium text-gray-800 text-sm mt-2">{coach.name}</h3>
              <p className="text-xs text-teal-600">{coach.specialty}</p>
              <div className="flex items-center justify-center gap-1 mt-1 text-xs text-gray-500">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span>{coach.rating}</span>
                <span>•</span>
                <span>{coach.sessions} sessions</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Tips */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl p-4">
          <h3 className="text-white font-bold mb-3">Daily Wellness Tips</h3>
          <div className="space-y-2">
            {dailyTips.map((tip) => (
              <div key={tip.id} className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
                <span className="text-2xl">{tip.icon}</span>
                <span className="text-white text-sm">{tip.tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnezHome;
