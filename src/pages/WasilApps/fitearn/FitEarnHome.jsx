import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Dumbbell,
  Apple, Pill, Target, Award, Zap, ShoppingCart, Timer,
  Flame, Heart, TrendingUp, Percent
} from 'lucide-react';

// FitEarn Home: Fitness Products & Supplements
// Backend API: GET /api/wasil/fitearn/home
// Backend API: GET /api/wasil/fitearn/products
// Backend API: GET /api/wasil/fitearn/supplements
// Backend API: GET /api/wasil/fitearn/equipment

const FitEarnHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '💪', color: 'bg-orange-500' },
    { id: 'protein', name: 'Protein', icon: '🥛', color: 'bg-blue-500' },
    { id: 'preworkout', name: 'Pre-Workout', icon: '⚡', color: 'bg-yellow-500' },
    { id: 'vitamins', name: 'Vitamins', icon: '💊', color: 'bg-green-500' },
    { id: 'equipment', name: 'Equipment', icon: '🏋️', color: 'bg-purple-500' },
    { id: 'apparel', name: 'Apparel', icon: '👕', color: 'bg-pink-500' },
    { id: 'nutrition', name: 'Nutrition', icon: '🥗', color: 'bg-emerald-500' }
  ];

  const flashDeals = [
    {
      id: 1,
      name: "Optimum Nutrition Whey",
      description: "Gold Standard 100% Whey",
      weight: "2.27kg",
      image: "🥛",
      originalPrice: 5999,
      salePrice: 4299,
      discount: "28%",
      coins: 300,
      endsIn: "3:45:20"
    },
    {
      id: 2,
      name: "MuscleBlaze Pre-Workout",
      description: "Intense Energy Formula",
      weight: "300g",
      image: "⚡",
      originalPrice: 1499,
      salePrice: 999,
      discount: "33%",
      coins: 80,
      endsIn: "5:20:15"
    }
  ];

  const products = [
    {
      id: 1,
      name: "MuscleBlaze Whey Protein",
      description: "Rich Chocolate",
      weight: "1kg",
      image: "🥛",
      price: 2499,
      originalPrice: 3199,
      rating: 4.5,
      reviews: 12500,
      coins: 180,
      bestseller: true
    },
    {
      id: 2,
      name: "GNC Mega Men",
      description: "Multivitamin",
      pack: "180 tablets",
      image: "💊",
      price: 1899,
      originalPrice: 2499,
      rating: 4.4,
      reviews: 5600,
      coins: 120
    },
    {
      id: 3,
      name: "Resistance Bands Set",
      description: "5 Levels",
      pack: "5 bands",
      image: "🎯",
      price: 599,
      originalPrice: 999,
      rating: 4.3,
      reviews: 3400,
      coins: 45
    },
    {
      id: 4,
      name: "MyProtein Creatine",
      description: "Monohydrate",
      weight: "500g",
      image: "💪",
      price: 1299,
      originalPrice: 1699,
      rating: 4.6,
      reviews: 7800,
      coins: 100
    }
  ];

  const fitnessGoals = [
    { id: 1, name: "Build Muscle", icon: "💪", products: 245 },
    { id: 2, name: "Lose Weight", icon: "🔥", products: 180 },
    { id: 3, name: "Gain Energy", icon: "⚡", products: 120 },
    { id: 4, name: "Stay Healthy", icon: "🍏", products: 200 }
  ];

  const brands = [
    { id: 1, name: "Optimum Nutrition", logo: "🥇", discount: "Up to 30% OFF" },
    { id: 2, name: "MuscleBlaze", logo: "💪", discount: "Up to 40% OFF" },
    { id: 3, name: "MyProtein", logo: "🎯", discount: "Up to 35% OFF" },
    { id: 4, name: "GNC", logo: "⭐", discount: "Up to 25% OFF" }
  ];

  const workoutTips = [
    {
      id: 1,
      title: "Pre-Workout Nutrition",
      description: "Eat 2-3 hours before workout for optimal energy",
      icon: "🍌"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-1 text-white/80 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Deliver to</span>
            </div>
            <h1 className="text-lg font-bold text-white">HSR Layout, Bengaluru</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="text-lg">🪙</span>
              <span className="text-white font-bold">1,680</span>
            </div>
            <button className="relative bg-white/20 p-2 rounded-full">
              <ShoppingCart className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 text-gray-800 rounded-full text-xs flex items-center justify-center font-bold">2</span>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search supplements, equipment..."
            className="flex-1 outline-none text-gray-800"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-4">
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
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-orange-500' : ''
              }`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-700 font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Fitness Goals */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Shop by Goal</h2>
        <div className="grid grid-cols-2 gap-3">
          {fitnessGoals.map((goal) => (
            <button key={goal.id} className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 flex items-center gap-3">
              <span className="text-3xl">{goal.icon}</span>
              <div className="text-left">
                <p className="font-medium text-gray-800">{goal.name}</p>
                <p className="text-xs text-gray-500">{goal.products} products</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Flash Deals */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Flash Deals
          </h2>
          <span className="text-red-500 text-sm font-medium">Limited Time</span>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {flashDeals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-64 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-6xl opacity-30">{deal.image}</div>
              <div className="relative z-10">
                <span className="bg-yellow-400 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
                  {deal.discount} OFF
                </span>
                <h3 className="text-white font-bold mt-2">{deal.name}</h3>
                <p className="text-orange-200 text-sm">{deal.description}</p>
                <p className="text-orange-200 text-xs">{deal.weight}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-white font-bold text-lg">₹{deal.salePrice}</span>
                  <span className="text-orange-200 line-through text-sm">₹{deal.originalPrice}</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 text-white text-xs">
                    <Timer className="w-3 h-3" />
                    Ends in {deal.endsIn}
                  </div>
                  <span className="text-yellow-300 text-xs font-bold">+{deal.coins}🪙</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Brands */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Top Brands</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {brands.map((brand) => (
            <button key={brand.id} className="flex-shrink-0 bg-white rounded-xl p-4 shadow-sm min-w-[140px] text-center">
              <span className="text-3xl">{brand.logo}</span>
              <p className="font-medium text-gray-800 text-sm mt-2">{brand.name}</p>
              <p className="text-green-600 text-xs font-medium">{brand.discount}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Bestsellers</h2>
          <button className="text-orange-600 text-sm">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center text-5xl relative">
                {product.image}
                {product.bestseller && (
                  <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                    Bestseller
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm truncate">{product.name}</h3>
                <p className="text-xs text-gray-500">{product.description}</p>
                <p className="text-xs text-gray-400">{product.weight || product.pack}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {product.rating}
                  </span>
                  <span className="text-xs text-gray-400">({product.reviews.toLocaleString()})</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-gray-800">₹{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-600 text-xs">+{product.coins}🪙</span>
                  <button className="bg-orange-500 text-white px-4 py-1.5 rounded-lg text-xs font-medium">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workout Tip */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{workoutTips[0].icon}</span>
            <div>
              <h3 className="text-white font-bold">{workoutTips[0].title}</h3>
              <p className="text-green-100 text-sm">{workoutTips[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitEarnHome;
