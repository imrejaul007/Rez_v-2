import React, { useState } from 'react';
import {
  Search, MapPin, Clock, ChevronRight, Upload, Pill,
  Stethoscope, Heart, Calendar, Shield, Percent, Phone,
  FileText, Timer, AlertCircle, Plus, Star
} from 'lucide-react';

// MediEarn Home: Medicines & Healthcare
// Backend API: GET /api/wasil/mediearn/home
// Backend API: GET /api/wasil/mediearn/medicines
// Backend API: POST /api/wasil/mediearn/prescription/upload
// Backend API: GET /api/wasil/mediearn/pharmacies

const MediEarnHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '💊', color: 'bg-blue-500' },
    { id: 'prescription', name: 'Prescription', icon: '📋', color: 'bg-red-500' },
    { id: 'otc', name: 'OTC', icon: '💉', color: 'bg-green-500' },
    { id: 'wellness', name: 'Wellness', icon: '🧴', color: 'bg-purple-500' },
    { id: 'devices', name: 'Devices', icon: '🩺', color: 'bg-teal-500' },
    { id: 'personal', name: 'Personal Care', icon: '🧼', color: 'bg-pink-500' }
  ];

  const quickActions = [
    { id: 1, name: "Upload Prescription", icon: Upload, color: "bg-blue-500" },
    { id: 2, name: "Consult Doctor", icon: Stethoscope, color: "bg-green-500" },
    { id: 3, name: "Lab Tests", icon: FileText, color: "bg-purple-500" },
    { id: 4, name: "Reorder Meds", icon: Pill, color: "bg-orange-500" }
  ];

  const offers = [
    {
      id: 1,
      title: "Flat 25% OFF",
      description: "On all prescription medicines",
      code: "MEDI25",
      validTill: "Jan 31"
    },
    {
      id: 2,
      title: "Free Delivery",
      description: "On orders above ₹499",
      code: "FREEDELIVERY",
      validTill: "Jan 15"
    }
  ];

  const popularMedicines = [
    {
      id: 1,
      name: "Dolo 650",
      composition: "Paracetamol 650mg",
      pack: "15 tablets",
      image: "💊",
      price: 32,
      mrp: 35,
      coins: 3,
      prescription: false
    },
    {
      id: 2,
      name: "Crocin Advance",
      composition: "Paracetamol 500mg",
      pack: "20 tablets",
      image: "💊",
      price: 45,
      mrp: 50,
      coins: 4,
      prescription: false
    },
    {
      id: 3,
      name: "Azithral 500",
      composition: "Azithromycin 500mg",
      pack: "3 tablets",
      image: "💊",
      price: 95,
      mrp: 120,
      coins: 10,
      prescription: true
    },
    {
      id: 4,
      name: "Pan 40",
      composition: "Pantoprazole 40mg",
      pack: "15 tablets",
      image: "💊",
      price: 75,
      mrp: 90,
      coins: 7,
      prescription: false
    }
  ];

  const healthProducts = [
    {
      id: 1,
      name: "Ensure Vanilla",
      description: "Complete nutrition powder",
      image: "🥛",
      price: 750,
      mrp: 850,
      coins: 50
    },
    {
      id: 2,
      name: "Revital H",
      description: "Daily health supplement",
      image: "💊",
      price: 320,
      mrp: 380,
      coins: 25
    },
    {
      id: 3,
      name: "Dr. Morepen BP Monitor",
      description: "Digital BP machine",
      image: "🩺",
      price: 899,
      mrp: 1299,
      coins: 80
    }
  ];

  const nearbyPharmacies = [
    {
      id: 1,
      name: "Apollo Pharmacy",
      distance: "0.5 km",
      rating: 4.5,
      open: true,
      deliveryTime: "20 min"
    },
    {
      id: 2,
      name: "MedPlus",
      distance: "0.8 km",
      rating: 4.3,
      open: true,
      deliveryTime: "25 min"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-1 text-white/80 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Deliver to</span>
            </div>
            <h1 className="text-lg font-bold text-white">HSR Layout, Bengaluru</h1>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
            <span className="text-lg">🪙</span>
            <span className="text-white font-bold">980</span>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search medicines, health products..."
            className="flex-1 outline-none text-gray-800"
          />
        </div>

        {/* 60 Min Promise */}
        <div className="flex items-center gap-2 mt-3 bg-white/20 rounded-lg px-3 py-2">
          <Timer className="w-4 h-4 text-yellow-300" />
          <span className="text-white text-sm font-medium">Get medicines in 60 minutes</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mt-4">
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <button key={action.id} className="flex flex-col items-center gap-2">
              <div className={`w-14 h-14 ${action.color} rounded-2xl flex items-center justify-center`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-700 font-medium text-center">{action.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Prescription Upload Card */}
      <div className="px-4 mt-6">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">Upload Prescription</h3>
              <p className="text-blue-200 text-sm">Get up to 25% OFF on medicines</p>
              <p className="text-blue-100 text-xs mt-1">We deliver within 60 minutes</p>
            </div>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium text-sm">
              Upload
            </button>
          </div>
        </div>
      </div>

      {/* Offers */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Offers for You</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {offers.map((offer) => (
            <div key={offer.id} className="flex-shrink-0 w-64 bg-white border-2 border-dashed border-blue-300 rounded-xl p-4">
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-blue-600">{offer.title}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">
                  {offer.code}
                </span>
                <span className="text-xs text-gray-500">Valid till {offer.validTill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Shop by Category</h2>
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
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''
              }`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-700 font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Medicines */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Popular Medicines</h2>
          <button className="text-blue-600 text-sm">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {popularMedicines.map((medicine) => (
            <div key={medicine.id} className="bg-white rounded-xl p-3 shadow-sm">
              <div className="h-20 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center text-4xl relative">
                {medicine.image}
                {medicine.prescription && (
                  <div className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 rounded">
                    Rx
                  </div>
                )}
              </div>
              <div className="mt-2">
                <h3 className="font-medium text-gray-800 text-sm">{medicine.name}</h3>
                <p className="text-xs text-gray-500">{medicine.composition}</p>
                <p className="text-xs text-gray-400">{medicine.pack}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-bold text-gray-800">₹{medicine.price}</span>
                  <span className="text-xs text-gray-400 line-through">₹{medicine.mrp}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-600 text-xs">+{medicine.coins}🪙</span>
                  <button className="bg-blue-500 text-white px-4 py-1.5 rounded-lg text-xs font-medium">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Health & Wellness */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Health & Wellness</h2>
          <button className="text-blue-600 text-sm">See All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {healthProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-40 bg-white rounded-xl p-3 shadow-sm">
              <div className="h-24 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center text-4xl">
                {product.image}
              </div>
              <div className="mt-2">
                <h3 className="font-medium text-gray-800 text-sm truncate">{product.name}</h3>
                <p className="text-xs text-gray-500 truncate">{product.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-gray-800">₹{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">₹{product.mrp}</span>
                </div>
                <span className="text-yellow-600 text-xs">+{product.coins}🪙</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Pharmacies */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Nearby Pharmacies</h2>
        <div className="space-y-3">
          {nearbyPharmacies.map((pharmacy) => (
            <div key={pharmacy.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Pill className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{pharmacy.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{pharmacy.distance}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      {pharmacy.rating}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  pharmacy.open ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {pharmacy.open ? 'Open' : 'Closed'}
                </span>
                <p className="text-xs text-gray-500 mt-1">{pharmacy.deliveryTime} delivery</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Health Tip */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Health Reminder</h3>
              <p className="text-green-100 text-sm mt-1">
                Stay hydrated! Drink at least 8 glasses of water daily for better health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediEarnHome;
