import React from 'react';
import { Search, Wrench, Droplet, Battery, Shield } from 'lucide-react';

// AutoPerks Services: Browse Auto Services
// Backend API: GET /api/wasil/autoperks/services

const AutoPerksServices = () => {
  const services = [
    { id: 1, name: 'Car Wash', icon: '🚿', price: '₹299', time: '30 min', coins: 30 },
    { id: 2, name: 'Oil Change', icon: '🛢️', price: '₹999', time: '45 min', coins: 100 },
    { id: 3, name: 'Tire Rotation', icon: '🛞', price: '₹599', time: '40 min', coins: 60 },
    { id: 4, name: 'AC Service', icon: '❄️', price: '₹1,499', time: '90 min', coins: 150 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-orange-500 to-red-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Auto Services</h1>
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
            <p className="text-orange-600 font-bold mt-1">{service.price}</p>
            <p className="text-xs text-gray-500">{service.time}</p>
            <p className="text-xs text-yellow-600 mt-2">+{service.coins}🪙</p>
            <button className="w-full mt-3 bg-orange-500 text-white py-2 rounded-lg text-sm">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoPerksServices;
