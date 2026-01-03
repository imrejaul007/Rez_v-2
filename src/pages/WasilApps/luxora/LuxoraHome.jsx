import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Heart,
  ShoppingCart, Timer, Sparkles, Diamond, Crown, Gift,
  Gem, Watch, ShoppingBag, Truck, Shield, Award
} from 'lucide-react';

// Luxora Home: Premium & Luxury Retail
// Backend API: GET /api/wasil/luxora/home
// Backend API: GET /api/wasil/luxora/products
// Backend API: GET /api/wasil/luxora/brands
// Backend API: GET /api/wasil/luxora/collections

const LuxoraHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '✨', color: 'bg-gradient-to-br from-amber-400 to-yellow-500' },
    { id: 'watches', name: 'Watches', icon: '⌚', color: 'bg-gradient-to-br from-gray-700 to-gray-900' },
    { id: 'jewelry', name: 'Jewelry', icon: '💎', color: 'bg-gradient-to-br from-rose-400 to-pink-500' },
    { id: 'bags', name: 'Bags', icon: '👜', color: 'bg-gradient-to-br from-amber-600 to-orange-700' },
    { id: 'fashion', name: 'Fashion', icon: '👗', color: 'bg-gradient-to-br from-purple-500 to-indigo-600' },
    { id: 'beauty', name: 'Beauty', icon: '💄', color: 'bg-gradient-to-br from-pink-400 to-rose-500' },
    { id: 'home', name: 'Home', icon: '🏡', color: 'bg-gradient-to-br from-emerald-500 to-teal-600' }
  ];

  const membershipTier = {
    name: "Gold Member",
    points: 24500,
    nextTier: "Platinum",
    pointsNeeded: 5500
  };

  const featuredCollection = {
    name: "Winter Luxe Collection",
    description: "Exclusive designer pieces for the season",
    image: "❄️",
    items: 45,
    discount: "Up to 30% OFF"
  };

  const luxuryBrands = [
    { id: 1, name: "Gucci", logo: "👜", tier: "Luxury" },
    { id: 2, name: "Rolex", logo: "⌚", tier: "Ultra Premium" },
    { id: 3, name: "Tiffany & Co", logo: "💎", tier: "Luxury" },
    { id: 4, name: "Louis Vuitton", logo: "👝", tier: "Luxury" },
    { id: 5, name: "Cartier", logo: "💍", tier: "Ultra Premium" }
  ];

  const products = [
    {
      id: 1,
      name: "Tissot PRX Powermatic",
      brand: "Tissot",
      description: "Swiss Automatic Watch",
      image: "⌚",
      price: 52900,
      originalPrice: 62500,
      rating: 4.9,
      reviews: 234,
      coins: 3500,
      exclusive: true,
      certified: true
    },
    {
      id: 2,
      name: "Swarovski Necklace",
      brand: "Swarovski",
      description: "Crystal Pendant",
      image: "💎",
      price: 15900,
      originalPrice: 18500,
      rating: 4.8,
      reviews: 456,
      coins: 1200,
      exclusive: false,
      certified: true
    },
    {
      id: 3,
      name: "Coach Signature Bag",
      brand: "Coach",
      description: "Leather Handbag",
      image: "👜",
      price: 35000,
      originalPrice: 42000,
      rating: 4.7,
      reviews: 189,
      coins: 2500,
      exclusive: true,
      certified: true
    },
    {
      id: 4,
      name: "Montblanc Pen",
      brand: "Montblanc",
      description: "Meisterstück Gold",
      image: "✒️",
      price: 48500,
      originalPrice: 55000,
      rating: 4.9,
      reviews: 123,
      coins: 3200,
      exclusive: false,
      certified: true
    }
  ];

  const newArrivals = [
    { id: 1, name: "Omega Seamaster", brand: "Omega", price: 425000, image: "⌚" },
    { id: 2, name: "Bulgari Ring", brand: "Bulgari", price: 189000, image: "💍" },
    { id: 3, name: "Hermès Scarf", brand: "Hermès", price: 42000, image: "🧣" }
  ];

  const services = [
    { icon: Truck, text: "White Glove Delivery", subtext: "Premium packaging" },
    { icon: Shield, text: "Authenticity Guarantee", subtext: "100% genuine" },
    { icon: Award, text: "Luxury Concierge", subtext: "24/7 support" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header - Premium Gold */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-1 text-white/80 text-sm">
              <Crown className="w-4 h-4" />
              <span>{membershipTier.name}</span>
            </div>
            <h1 className="text-lg font-bold text-white">Luxora</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="text-lg">🪙</span>
              <span className="text-white font-bold">{membershipTier.points.toLocaleString()}</span>
            </div>
            <button className="relative bg-white/20 p-2 rounded-full">
              <ShoppingBag className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white rounded-full text-xs flex items-center justify-center font-bold">1</span>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search luxury brands..."
            className="flex-1 outline-none text-gray-800"
          />
          <Diamond className="w-5 h-5 text-amber-500" />
        </div>

        {/* Membership Progress */}
        <div className="mt-3 bg-white/10 rounded-lg p-3">
          <div className="flex items-center justify-between text-white text-sm mb-2">
            <span>{membershipTier.name}</span>
            <span>{membershipTier.nextTier}</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${(membershipTier.points / (membershipTier.points + membershipTier.pointsNeeded)) * 100}%` }}
            />
          </div>
          <p className="text-white/80 text-xs mt-1">{membershipTier.pointsNeeded.toLocaleString()} points to {membershipTier.nextTier}</p>
        </div>
      </div>

      {/* Premium Services Bar */}
      <div className="bg-black px-4 py-3 flex justify-around">
        {services.map((service, idx) => (
          <div key={idx} className="flex items-center gap-2 text-center">
            <service.icon className="w-4 h-4 text-amber-400" />
            <div>
              <p className="text-xs font-medium text-white">{service.text}</p>
              <p className="text-xs text-gray-400">{service.subtext}</p>
            </div>
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
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg ${
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-amber-500' : ''
              }`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-700 font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Collection */}
      <div className="px-4 mt-6">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-8xl opacity-20">{featuredCollection.image}</div>
          <div className="relative z-10">
            <span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
              EXCLUSIVE
            </span>
            <h2 className="text-xl font-bold text-white mt-3">{featuredCollection.name}</h2>
            <p className="text-gray-400 text-sm mt-1">{featuredCollection.description}</p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-amber-400 font-bold">{featuredCollection.discount}</span>
              <span className="text-gray-500 text-sm">{featuredCollection.items} items</span>
            </div>
            <button className="mt-4 bg-white text-gray-900 px-6 py-2 rounded-xl font-medium text-sm">
              Shop Collection
            </button>
          </div>
        </div>
      </div>

      {/* Luxury Brands */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Featured Brands</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {luxuryBrands.map((brand) => (
            <button key={brand.id} className="flex-shrink-0 bg-white rounded-xl p-4 shadow-sm min-w-[100px] text-center border border-gray-100">
              <span className="text-3xl">{brand.logo}</span>
              <p className="font-medium text-gray-800 text-sm mt-2">{brand.name}</p>
              <p className="text-amber-600 text-xs">{brand.tier}</p>
            </button>
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            New Arrivals
          </h2>
          <button className="text-amber-600 text-sm">View All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {newArrivals.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-40 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-5xl">
                {item.image}
              </div>
              <div className="p-3">
                <p className="text-xs text-amber-600">{item.brand}</p>
                <h3 className="font-medium text-gray-800 text-sm truncate">{item.name}</h3>
                <p className="font-bold text-gray-800 mt-1">₹{item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Curated For You</h2>
          <button className="text-amber-600 text-sm">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-5xl relative">
                {product.image}
                <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
                {product.exclusive && (
                  <div className="absolute top-2 left-2 bg-black text-amber-400 text-xs px-2 py-0.5 rounded flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    Exclusive
                  </div>
                )}
                {product.certified && (
                  <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Certified
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-xs text-amber-600">{product.brand}</p>
                <h3 className="font-medium text-gray-800 text-sm truncate">{product.name}</h3>
                <p className="text-xs text-gray-500 truncate">{product.description}</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
                  <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-amber-600 text-xs">+{product.coins.toLocaleString()}🪙</span>
                  <button className="bg-black text-white px-4 py-1.5 rounded-lg text-xs font-medium">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIP Concierge */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
              <Crown className="w-6 h-6 text-amber-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">Personal Concierge</h3>
              <p className="text-gray-400 text-sm">Get styling advice from experts</p>
            </div>
            <ChevronRight className="w-5 h-5 text-amber-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxoraHome;
