import React from 'react';
import { Search, Sparkles } from 'lucide-react';

// Washzy Services: Laundry Services
// Backend API: GET /api/wasil/washzy/services

const WashzyServices = () => {
  const services = [
    { id: 1, name: 'Wash & Fold', icon: '👕', price: '₹99/kg', time: '24 hours', coins: 10 },
    { id: 2, name: 'Wash & Iron', icon: '🧺', price: '₹149/kg', time: '48 hours', coins: 15 },
    { id: 3, name: 'Dry Cleaning', icon: '✨', price: '₹299/item', time: '72 hours', coins: 30 },
    { id: 4, name: 'Steam Iron', icon: '🔥', price: '₹49/item', time: '12 hours', coins: 5 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Laundry Services</h1>
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search services..." className="flex-1 outline-none" />
        </div>
      </div>

      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-xl p-4 shadow-sm text-center">
            <span className="text-4xl">{service.icon}</span>
            <h3 className="font-bold text-gray-800 mt-2">{service.name}</h3>
            <p className="text-blue-600 font-bold mt-1">{service.price}</p>
            <p className="text-xs text-gray-500">{service.time}</p>
            <p className="text-xs text-yellow-600 mt-1">+{service.coins}🪙</p>
            <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg text-sm">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WashzyServices;
