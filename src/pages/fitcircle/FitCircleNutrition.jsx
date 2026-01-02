import React, { useState } from 'react';
import {
  Apple, Droplets, Flame, Plus, ChevronRight, Camera,
  Coffee, Utensils, Moon, Target, TrendingUp, Clock,
  BarChart3, CheckCircle2, AlertCircle, Sparkles
} from 'lucide-react';

// FitCircle Nutrition: Food & Hydration Tracking
// Backend API: GET /api/fitcircle/nutrition/daily/:userId
// Backend API: POST /api/fitcircle/nutrition/log
// Backend API: GET /api/fitcircle/nutrition/meals
// Backend API: GET /api/fitcircle/nutrition/recipes

const FitCircleNutrition = () => {
  const [activeTab, setActiveTab] = useState('today');

  const dailyGoals = {
    calories: { current: 1450, target: 2000, unit: 'kcal' },
    protein: { current: 65, target: 120, unit: 'g' },
    carbs: { current: 180, target: 250, unit: 'g' },
    fat: { current: 45, target: 65, unit: 'g' },
    water: { current: 5, target: 8, unit: 'glasses' }
  };

  const meals = [
    {
      id: 1,
      type: 'Breakfast',
      icon: Coffee,
      time: '8:30 AM',
      logged: true,
      items: [
        { name: 'Oatmeal with Banana', calories: 320, protein: 12 },
        { name: 'Green Tea', calories: 0, protein: 0 }
      ],
      totalCalories: 320,
      coins: 10
    },
    {
      id: 2,
      type: 'Lunch',
      icon: Utensils,
      time: '1:00 PM',
      logged: true,
      items: [
        { name: 'Grilled Chicken Salad', calories: 450, protein: 35 },
        { name: 'Whole Wheat Bread', calories: 120, protein: 4 }
      ],
      totalCalories: 570,
      coins: 15
    },
    {
      id: 3,
      type: 'Snack',
      icon: Apple,
      time: '4:30 PM',
      logged: true,
      items: [
        { name: 'Greek Yogurt', calories: 150, protein: 15 },
        { name: 'Mixed Nuts', calories: 180, protein: 5 }
      ],
      totalCalories: 330,
      coins: 5
    },
    {
      id: 4,
      type: 'Dinner',
      icon: Moon,
      time: 'Not logged',
      logged: false,
      items: [],
      totalCalories: 0,
      coins: 20
    }
  ];

  const waterLog = [
    { time: '7:00', logged: true },
    { time: '9:00', logged: true },
    { time: '11:00', logged: true },
    { time: '13:00', logged: true },
    { time: '15:00', logged: true },
    { time: '17:00', logged: false },
    { time: '19:00', logged: false },
    { time: '21:00', logged: false }
  ];

  const suggestedMeals = [
    {
      id: 1,
      name: 'Protein Power Bowl',
      image: '🥗',
      calories: 520,
      protein: 45,
      prepTime: '15 min',
      match: '95%'
    },
    {
      id: 2,
      name: 'Quinoa Veggie Stir Fry',
      image: '🍜',
      calories: 380,
      protein: 18,
      prepTime: '20 min',
      match: '88%'
    },
    {
      id: 3,
      name: 'Salmon with Greens',
      image: '🐟',
      calories: 450,
      protein: 38,
      prepTime: '25 min',
      match: '92%'
    }
  ];

  const getProgressColor = (current, target) => {
    const percent = (current / target) * 100;
    if (percent >= 100) return 'bg-green-500';
    if (percent >= 70) return 'bg-yellow-500';
    return 'bg-blue-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Nutrition</h1>
          <button className="bg-white/20 p-2 rounded-lg">
            <Camera className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Calories Summary */}
        <div className="bg-white/20 backdrop-blur rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-emerald-100 text-sm">Today's Calories</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">
                  {dailyGoals.calories.current}
                </span>
                <span className="text-emerald-200">/ {dailyGoals.calories.target} kcal</span>
              </div>
            </div>
            <div className="w-16 h-16 relative">
              <svg className="w-16 h-16 transform -rotate-90">
                <circle
                  cx="32" cy="32" r="28"
                  className="stroke-white/30"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="32" cy="32" r="28"
                  className="stroke-white"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${(dailyGoals.calories.current / dailyGoals.calories.target) * 176} 176`}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                {Math.round((dailyGoals.calories.current / dailyGoals.calories.target) * 100)}%
              </span>
            </div>
          </div>

          {/* Macros */}
          <div className="grid grid-cols-3 gap-3">
            {['protein', 'carbs', 'fat'].map((macro) => (
              <div key={macro} className="text-center">
                <p className="text-emerald-200 text-xs capitalize">{macro}</p>
                <p className="text-white font-semibold">
                  {dailyGoals[macro].current}/{dailyGoals[macro].target}{dailyGoals[macro].unit}
                </p>
                <div className="h-1.5 bg-white/30 rounded-full mt-1 overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: `${Math.min((dailyGoals[macro].current / dailyGoals[macro].target) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Water Tracking */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-gray-800">Water Intake</span>
            </div>
            <span className="text-blue-600 font-medium">
              {dailyGoals.water.current}/{dailyGoals.water.target} glasses
            </span>
          </div>
          <div className="flex gap-2">
            {waterLog.map((glass, idx) => (
              <button
                key={idx}
                className={`flex-1 h-10 rounded-lg flex items-center justify-center ${
                  glass.logged
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                <Droplets className={`w-4 h-4 ${glass.logged ? 'fill-white' : ''}`} />
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">Tap to log water</p>
        </div>
      </div>

      {/* Meals */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">Today's Meals</h2>
          <span className="text-sm text-gray-500">
            {meals.filter(m => m.logged).length}/{meals.length} logged
          </span>
        </div>

        <div className="space-y-3">
          {meals.map((meal) => (
            <div
              key={meal.id}
              className={`bg-white rounded-xl p-4 shadow-sm ${
                !meal.logged ? 'border-2 border-dashed border-gray-200' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  meal.logged
                    ? 'bg-gradient-to-br from-emerald-100 to-teal-100'
                    : 'bg-gray-100'
                }`}>
                  <meal.icon className={`w-6 h-6 ${
                    meal.logged ? 'text-emerald-600' : 'text-gray-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-800">{meal.type}</h3>
                    {meal.logged ? (
                      <span className="text-emerald-600 font-semibold">
                        {meal.totalCalories} kcal
                      </span>
                    ) : (
                      <span className="text-gray-400 text-sm">{meal.time}</span>
                    )}
                  </div>
                  {meal.logged ? (
                    <>
                      <p className="text-sm text-gray-500">
                        {meal.items.map(i => i.name).join(', ')}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">{meal.time}</span>
                        <span className="text-xs text-yellow-600">+{meal.coins}🪙</span>
                      </div>
                    </>
                  ) : (
                    <button className="flex items-center gap-1 text-emerald-600 text-sm mt-1">
                      <Plus className="w-4 h-4" />
                      Log meal (+{meal.coins}🪙)
                    </button>
                  )}
                </div>
                {meal.logged && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            AI Meal Suggestions
          </h2>
          <button className="text-emerald-600 text-sm">See All</button>
        </div>

        <p className="text-sm text-gray-500 mb-3">
          Based on your remaining macros for dinner
        </p>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {suggestedMeals.map((meal) => (
            <div key={meal.id} className="flex-shrink-0 w-48 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-24 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-5xl">
                {meal.image}
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800 text-sm">{meal.name}</h3>
                  <span className="bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full">
                    {meal.match} match
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span>{meal.calories} kcal</span>
                  <span>{meal.protein}g protein</span>
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  {meal.prepTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Log Button */}
      <div className="fixed bottom-24 right-4">
        <button className="w-14 h-14 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center">
          <Plus className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Daily Tip */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Nutrition Tip</h3>
              <p className="text-amber-100 text-sm mt-1">
                You're 55g short on protein today. Try adding grilled chicken or fish to your dinner!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitCircleNutrition;
