import React from 'react';
import { Search, Star } from 'lucide-react';

// Elitezy Services: Premium Services
// Backend API: GET /api/wasil/elitezy/services

const ElitezyServices = () => {
  const services = [
    { id: 1, name: 'Private Chef', icon: '👨‍🍳', price: '₹5,999', duration: '4 hours', rating: 4.9 },
    { id: 2, name: 'Personal Stylist', icon: '👗', price: '₹2,999', duration: '2 hours', rating: 4.8 },
    { id: 3, name: 'Luxury Car Rental', icon: '🚗', price: '₹8,999/day', duration: '24 hours', rating: 5.0 },
    { id: 4, name: 'Event Planning', icon: '🎉', price: '₹15,999', duration: 'Custom', rating: 4.9 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Elite Services</h1>
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search services..." className="flex-1 outline-none" />
        </div>
      </div>

      <div className="px-4 py-4 space-y-3">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-3xl">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{service.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">{service.rating}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{service.duration}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-800">{service.price}</p>
                <button className="mt-2 bg-purple-600 text-white px-4 py-1.5 rounded-lg text-sm">Book</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElitezyServices;
