import React from 'react';
import { Search } from 'lucide-react';

// Maidzy Services: Home Cleaning Services
// Backend API: GET /api/wasil/maidzy/services

const MaidzyServices = () => {
  const services = [
    { id: 1, name: 'Deep Cleaning', icon: '🧹', price: '₹1,999', time: '4-5 hours', coins: 200 },
    { id: 2, name: 'Regular Cleaning', icon: '🧽', price: '₹799', time: '2-3 hours', coins: 80 },
    { id: 3, name: 'Kitchen Cleaning', icon: '🍳', price: '₹899', time: '2 hours', coins: 90 },
    { id: 4, name: 'Bathroom Cleaning', icon: '🚿', price: '₹599', time: '1 hour', coins: 60 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Home Services</h1>
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

export default MaidzyServices;
