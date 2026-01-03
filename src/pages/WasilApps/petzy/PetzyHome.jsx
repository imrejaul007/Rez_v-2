import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Heart,
  ShoppingCart, Timer, Zap, TrendingUp, Stethoscope,
  Scissors, Home, Calendar, Package, PawPrint
} from 'lucide-react';

// Petzy Home: Pet Food & Accessories
// Backend API: GET /api/wasil/petzy/home
// Backend API: GET /api/wasil/petzy/products
// Backend API: GET /api/wasil/petzy/services
// Backend API: GET /api/wasil/petzy/vets

const PetzyHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePet, setActivePet] = useState('dog');

  const petTypes = [
    { id: 'dog', name: 'Dogs', icon: '🐕' },
    { id: 'cat', name: 'Cats', icon: '🐱' },
    { id: 'bird', name: 'Birds', icon: '🦜' },
    { id: 'fish', name: 'Fish', icon: '🐠' },
    { id: 'other', name: 'Others', icon: '🐰' }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🐾', color: 'bg-amber-500' },
    { id: 'food', name: 'Food', icon: '🥣', color: 'bg-orange-500' },
    { id: 'treats', name: 'Treats', icon: '🦴', color: 'bg-yellow-500' },
    { id: 'toys', name: 'Toys', icon: '🎾', color: 'bg-green-500' },
    { id: 'grooming', name: 'Grooming', icon: '✂️', color: 'bg-pink-500' },
    { id: 'health', name: 'Health', icon: '💊', color: 'bg-blue-500' },
    { id: 'accessories', name: 'Accessories', icon: '🎀', color: 'bg-purple-500' }
  ];

  const myPet = {
    name: "Bruno",
    type: "Golden Retriever",
    age: "3 years",
    weight: "32 kg",
    nextVaccine: "Feb 10, 2025",
    image: "🐕"
  };

  const flashDeals = [
    {
      id: 1,
      name: "Pedigree Adult Dog Food",
      description: "Chicken & Vegetables",
      weight: "10kg",
      image: "🥣",
      originalPrice: 2499,
      salePrice: 1799,
      discount: "28%",
      coins: 150,
      endsIn: "2:45:30"
    },
    {
      id: 2,
      name: "Interactive Dog Toy Set",
      description: "5 Piece Set",
      image: "🎾",
      originalPrice: 999,
      salePrice: 599,
      discount: "40%",
      coins: 50,
      endsIn: "4:20:15"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Royal Canin Maxi",
      description: "Adult Large Breed",
      weight: "15kg",
      image: "🥣",
      price: 5999,
      originalPrice: 6999,
      rating: 4.8,
      reviews: 3450,
      coins: 400,
      bestseller: true
    },
    {
      id: 2,
      name: "FURminator Brush",
      description: "De-shedding Tool",
      image: "✂️",
      price: 1499,
      originalPrice: 2199,
      rating: 4.6,
      reviews: 1230,
      coins: 100,
      bestseller: false
    },
    {
      id: 3,
      name: "Drools Treats",
      description: "Chicken Biscuits 500g",
      image: "🦴",
      price: 299,
      originalPrice: 399,
      rating: 4.5,
      reviews: 2340,
      coins: 25,
      bestseller: true
    },
    {
      id: 4,
      name: "Orthopedic Dog Bed",
      description: "Large, Memory Foam",
      image: "🛏️",
      price: 2999,
      originalPrice: 4499,
      rating: 4.7,
      reviews: 890,
      coins: 200,
      bestseller: false
    }
  ];

  const services = [
    { id: 1, name: "Pet Grooming", icon: "✂️", price: 599, duration: "1-2 hrs", rating: 4.8 },
    { id: 2, name: "Vet Consultation", icon: "🩺", price: 299, duration: "30 min", rating: 4.9 },
    { id: 3, name: "Dog Walking", icon: "🚶", price: 199, duration: "1 hr", rating: 4.6 },
    { id: 4, name: "Pet Boarding", icon: "🏠", price: 799, duration: "per day", rating: 4.7 }
  ];

  const nearbyVets = [
    { id: 1, name: "PawCare Clinic", rating: 4.9, distance: "0.8 km", open: true },
    { id: 2, name: "Happy Tails Vet", rating: 4.7, distance: "1.5 km", open: true },
    { id: 3, name: "Pet Health Center", rating: 4.8, distance: "2.2 km", open: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 pt-6 pb-6">
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
              <span className="text-white font-bold">2,890</span>
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
            placeholder="Search pet food, toys, grooming..."
            className="flex-1 outline-none text-gray-800"
          />
        </div>

        {/* Pet Type Toggle */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {petTypes.map((pet) => (
            <button
              key={pet.id}
              onClick={() => setActivePet(pet.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activePet === pet.id
                  ? 'bg-white text-amber-600'
                  : 'bg-white/20 text-white'
              }`}
            >
              <span>{pet.icon}</span>
              <span>{pet.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* My Pet Card */}
      <div className="px-4 -mt-2">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-3xl">
                {myPet.image}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{myPet.name}</h3>
                <p className="text-xs text-gray-500">{myPet.type} • {myPet.age}</p>
              </div>
            </div>
            <button className="text-amber-600 text-sm">Edit Profile</button>
          </div>
          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Package className="w-3 h-3" />
              <span>Weight: {myPet.weight}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-orange-600">
              <Calendar className="w-3 h-3" />
              <span>Vaccine: {myPet.nextVaccine}</span>
            </div>
          </div>
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
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-amber-500' : ''
              }`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-700 font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Pet Services */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Pet Services</h2>
        <div className="grid grid-cols-2 gap-3">
          {services.map((service) => (
            <button key={service.id} className="bg-white rounded-xl p-4 shadow-sm text-left">
              <span className="text-3xl">{service.icon}</span>
              <h3 className="font-medium text-gray-800 mt-2">{service.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-bold text-gray-800">₹{service.price}</span>
                <span className="text-xs text-gray-500">• {service.duration}</span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span>{service.rating}</span>
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
            <div key={deal.id} className="flex-shrink-0 w-44 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-5xl relative">
                {deal.image}
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                  {deal.discount}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm truncate">{deal.name}</h3>
                <p className="text-xs text-gray-500 truncate">{deal.description}</p>
                {deal.weight && <p className="text-xs text-gray-400">{deal.weight}</p>}
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

      {/* Products Grid */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Popular Products</h2>
          <button className="text-amber-600 text-sm">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-5xl relative">
                {product.image}
                <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
                {product.bestseller && (
                  <div className="absolute bottom-2 left-2 bg-amber-500 text-white text-xs px-2 py-0.5 rounded">
                    Bestseller
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm truncate">{product.name}</h3>
                <p className="text-xs text-gray-500 truncate">{product.description}</p>
                {product.weight && <p className="text-xs text-gray-400">{product.weight}</p>}
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400">({product.reviews.toLocaleString()})</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
                  <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-600 text-xs">+{product.coins}🪙</span>
                  <button className="bg-amber-500 text-white px-4 py-1.5 rounded-lg text-xs font-medium">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Vets */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Nearby Vets</h2>
          <button className="text-amber-600 text-sm">View All</button>
        </div>

        <div className="space-y-2">
          {nearbyVets.map((vet) => (
            <button key={vet.id} className="w-full bg-white rounded-xl p-3 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium text-gray-800 text-sm">{vet.name}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {vet.rating}
                  </span>
                  <span>•</span>
                  <span>{vet.distance}</span>
                  <span>•</span>
                  <span className={vet.open ? 'text-green-600' : 'text-red-500'}>
                    {vet.open ? 'Open Now' : 'Closed'}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* 60-min Delivery */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Timer className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">60-Min Pet Essentials</h3>
              <p className="text-amber-100 text-sm">Food, treats & supplies delivered fast!</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetzyHome;
