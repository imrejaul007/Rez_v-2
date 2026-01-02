import React from 'react';
import { Grid, TrendingUp, Star, ChevronRight } from 'lucide-react';

// Quizzy Categories: Browse Quiz Categories
// Backend API: GET /api/growth/quizzy/categories
// Backend API: GET /api/growth/quizzy/categories/:id/quizzes

const QuizzyCategories = () => {
  const categories = [
    { id: 1, name: 'General Knowledge', icon: '📚', quizzes: 45, color: 'from-blue-500 to-indigo-600' },
    { id: 2, name: 'Sports', icon: '⚽', quizzes: 32, color: 'from-green-500 to-emerald-600' },
    { id: 3, name: 'Movies & Entertainment', icon: '🎬', quizzes: 28, color: 'from-purple-500 to-pink-600' },
    { id: 4, name: 'Technology', icon: '💻', quizzes: 25, color: 'from-cyan-500 to-blue-600' },
    { id: 5, name: 'History', icon: '🏛️', quizzes: 18, color: 'from-amber-500 to-orange-600' },
    { id: 6, name: 'Science', icon: '🔬', quizzes: 15, color: 'from-teal-500 to-green-600' },
    { id: 7, name: 'Geography', icon: '🌍', quizzes: 20, color: 'from-lime-500 to-green-600' },
    { id: 8, name: 'Music', icon: '🎵', quizzes: 12, color: 'from-pink-500 to-rose-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 pt-6 pb-8">
        <div className="flex items-center gap-2">
          <Grid className="w-6 h-6 text-white" />
          <h1 className="text-xl font-bold text-white">Categories</h1>
        </div>
        <p className="text-blue-100 text-sm mt-1">Choose your favorite topic</p>
      </div>

      {/* Categories Grid */}
      <div className="px-4 mt-4">
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`bg-gradient-to-br ${category.color} rounded-2xl p-4 shadow-lg text-white relative overflow-hidden`}
            >
              {/* Background Icon */}
              <div className="absolute -right-4 -bottom-4 text-8xl opacity-10">
                {category.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                <p className="text-sm opacity-90">{category.quizzes} quizzes</p>

                <button className="mt-3 bg-white/20 backdrop-blur text-white text-sm px-4 py-2 rounded-lg font-medium flex items-center gap-1">
                  Explore
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Categories */}
      <div className="px-4 mt-6 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            Most Popular
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {categories.slice(0, 3).map((category, idx) => (
            <div
              key={category.id}
              className={`p-4 flex items-center gap-3 ${
                idx !== 2 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl`}>
                {category.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.quizzes} quizzes available</p>
              </div>
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizzyCategories;
