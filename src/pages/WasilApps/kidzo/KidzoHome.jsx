import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Heart,
  ShoppingCart, Timer, Zap, TrendingUp, Baby, Gift,
  BookOpen, Gamepad2, Shirt, Utensils, Shield
} from 'lucide-react';

// Kidzo Home: Baby & Kids Products
// Backend API: GET /api/wasil/kidzo/home
// Backend API: GET /api/wasil/kidzo/products
// Backend API: GET /api/wasil/kidzo/categories
// Backend API: GET /api/wasil/kidzo/brands

const KidzoHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeAgeGroup, setActiveAgeGroup] = useState('all');

  const ageGroups = [
    { id: 'all', name: 'All Ages', icon: '👶' },
    { id: '0-1', name: '0-1 Year', icon: '🍼' },
    { id: '1-3', name: '1-3 Years', icon: '🧸' },
    { id: '3-6', name: '3-6 Years', icon: '🎨' },
    { id: '6-12', name: '6-12 Years', icon: '📚' }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '👶', color: 'bg-pink-500' },
    { id: 'diapers', name: 'Diapers', icon: '🩲', color: 'bg-blue-500' },
    { id: 'feeding', name: 'Feeding', icon: '🍼', color: 'bg-yellow-500' },
    { id: 'toys', name: 'Toys', icon: '🧸', color: 'bg-purple-500' },
    { id: 'clothing', name: 'Clothing', icon: '👕', color: 'bg-green-500' },
    { id: 'books', name: 'Books', icon: '📚', color: 'bg-orange-500' },
    { id: 'care', name: 'Baby Care', icon: '🧴', color: 'bg-cyan-500' }
  ];

  const myChild = {
    name: "Aryan",
    age: "2 years",
    image: "👶"
  };

  const flashDeals = [
    {
      id: 1,
      name: "Pampers Premium Diapers",
      description: "Large, 78 Count",
      image: "🩲",
      originalPrice: 1899,
      salePrice: 1299,
      discount: "32%",
      coins: 100,
      endsIn: "2:45:30"
    },
    {
      id: 2,
      name: "LEGO Classic Set",
      description: "Creative Bricks 790pc",
      image: "🧱",
      originalPrice: 2999,
      salePrice: 1999,
      discount: "33%",
      coins: 150,
      endsIn: "4:20:15"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Huggies Wonder Pants",
      description: "Medium, 50 Count",
      image: "🩲",
      price: 799,
      originalPrice: 999,
      rating: 4.6,
      reviews: 12500,
      coins: 60,
      freeDelivery: true
    },
    {
      id: 2,
      name: "Philips Avent Bottle Set",
      description: "3 Pack, Anti-colic",
      image: "🍼",
      price: 1499,
      originalPrice: 1999,
      rating: 4.7,
      reviews: 5600,
      coins: 100,
      freeDelivery: true
    },
    {
      id: 3,
      name: "Fisher-Price Stacking Toy",
      description: "Brilliant Basics",
      image: "🎯",
      price: 599,
      originalPrice: 799,
      rating: 4.5,
      reviews: 3400,
      coins: 45,
      freeDelivery: false
    },
    {
      id: 4,
      name: "Himalaya Baby Lotion",
      description: "400ml, Almond Oil",
      image: "🧴",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 8900,
      coins: 25,
      freeDelivery: true
    }
  ];

  const essentials = [
    { id: 1, name: "Diapers", icon: "🩲", products: 150 },
    { id: 2, name: "Baby Food", icon: "🍲", products: 80 },
    { id: 3, name: "Wipes", icon: "🧻", products: 45 },
    { id: 4, name: "Formula", icon: "🍼", products: 35 }
  ];

  const topBrands = [
    { id: 1, name: "Pampers", logo: "🩲", discount: "Up to 30%" },
    { id: 2, name: "Johnson's", logo: "🧴", discount: "Up to 25%" },
    { id: 3, name: "Fisher-Price", logo: "🎯", discount: "Up to 40%" },
    { id: 4, name: "LEGO", logo: "🧱", discount: "Up to 35%" },
    { id: 5, name: "Huggies", logo: "👶", discount: "Up to 28%" }
  ];

  const safety = [
    { icon: Shield, text: "100% Safe Products" },
    { icon: Star, text: "Top Rated Brands" },
    { icon: Clock, text: "60-Min Delivery" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 pt-6 pb-6">
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
              <span className="text-white font-bold">1,560</span>
            </div>
            <button className="relative bg-white/20 p-2 rounded-full">
              <ShoppingCart className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 text-gray-800 rounded-full text-xs flex items-center justify-center font-bold">4</span>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search diapers, toys, baby food..."
            className="flex-1 outline-none text-gray-800"
          />
        </div>

        {/* Age Group Toggle */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {ageGroups.map((age) => (
            <button
              key={age.id}
              onClick={() => setActiveAgeGroup(age.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeAgeGroup === age.id
                  ? 'bg-white text-pink-600'
                  : 'bg-white/20 text-white'
              }`}
            >
              <span>{age.icon}</span>
              <span>{age.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Safety Guarantees */}
      <div className="bg-white px-4 py-3 flex justify-around border-b border-gray-100">
        {safety.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <item.icon className="w-4 h-4 text-pink-500" />
            <span className="text-xs text-gray-600">{item.text}</span>
          </div>
        ))}
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
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-pink-500' : ''
              }`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-700 font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Essentials */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Daily Essentials</h2>
        <div className="grid grid-cols-4 gap-2">
          {essentials.map((item) => (
            <button key={item.id} className="bg-white rounded-xl p-3 shadow-sm text-center">
              <span className="text-2xl">{item.icon}</span>
              <p className="text-xs font-medium text-gray-800 mt-1">{item.name}</p>
              <p className="text-xs text-gray-500">{item.products} items</p>
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
          <span className="text-red-500 text-sm font-medium">Ends Soon!</span>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {flashDeals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-44 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center text-5xl relative">
                {deal.image}
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                  {deal.discount}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm truncate">{deal.name}</h3>
                <p className="text-xs text-gray-500 truncate">{deal.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-gray-800">₹{deal.salePrice}</span>
                  <span className="text-xs text-gray-400 line-through">₹{deal.originalPrice}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1 text-red-500 text-xs">
                    <Timer className="w-3 h-3" />
                    {deal.endsIn}
                  </div>
                  <span className="text-yellow-600 text-xs">+{deal.coins}🪙</span>
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
          {topBrands.map((brand) => (
            <button key={brand.id} className="flex-shrink-0 bg-white rounded-xl p-4 shadow-sm min-w-[100px] text-center">
              <span className="text-3xl">{brand.logo}</span>
              <p className="font-medium text-gray-800 text-sm mt-2">{brand.name}</p>
              <p className="text-green-600 text-xs">{brand.discount}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Popular Products</h2>
          <button className="text-pink-600 text-sm">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center text-5xl relative">
                {product.image}
                <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
                {product.freeDelivery && (
                  <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                    Free Delivery
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm truncate">{product.name}</h3>
                <p className="text-xs text-gray-500 truncate">{product.description}</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400">({product.reviews.toLocaleString()})</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-gray-800">₹{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-600 text-xs">+{product.coins}🪙</span>
                  <button className="bg-pink-500 text-white px-4 py-1.5 rounded-lg text-xs font-medium">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parent Tips */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
              💡
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">Parenting Tips & Guides</h3>
              <p className="text-pink-100 text-sm">Expert advice for new parents</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidzoHome;
