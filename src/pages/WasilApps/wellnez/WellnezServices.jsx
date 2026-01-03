import React from 'react';
import { Search, Heart } from 'lucide-react';

// Wellnez Services: Health & Wellness
// Backend API: GET /api/wasil/wellnez/services

const WellnezServices = () => {
  const services = [
    { id: 1, name: 'Doctor Consultation', icon: '👨‍⚕️', price: '₹499', time: '30 min', coins: 50 },
    { id: 2, name: 'Lab Tests', icon: '🔬', price: '₹999', time: 'Home visit', coins: 100 },
    { id: 3, name: 'Physiotherapy', icon: '💪', price: '₹799', time: '45 min', coins: 80 },
    { id: 4, name: 'Mental Health', icon: '🧠', price: '₹899', time: '60 min', coins: 90 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-4 pt-6 pb-4">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-6 h-6 text-white" />
          <h1 className="text-xl font-bold text-white">Health Services</h1>
        </div>
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
            <p className="text-teal-600 font-bold mt-1">{service.price}</p>
            <p className="text-xs text-gray-500">{service.time}</p>
            <p className="text-xs text-yellow-600 mt-1">+{service.coins}🪙</p>
            <button className="w-full mt-3 bg-teal-500 text-white py-2 rounded-lg text-sm">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WellnezServices;
