import React from 'react';
import { Search } from 'lucide-react';

// Society+ Services: Society Management Services
// Backend API: GET /api/wasil/society/services

const SocietyServices = () => {
  const services = [
    { id: 1, name: 'Plumber', icon: '🔧', price: '₹299', availability: 'Available now', coins: 30 },
    { id: 2, name: 'Electrician', icon: '💡', price: '₹399', availability: 'Available now', coins: 40 },
    { id: 3, name: 'Carpenter', icon: '🪵', price: '₹499', availability: '2 hours', coins: 50 },
    { id: 4, name: 'Painter', icon: '🎨', price: '₹699', availability: 'Tomorrow', coins: 70 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Society Services</h1>
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
            <p className="text-indigo-600 font-bold mt-1">{service.price}</p>
            <p className="text-xs text-green-600">{service.availability}</p>
            <p className="text-xs text-yellow-600 mt-1">+{service.coins}🪙</p>
            <button className="w-full mt-3 bg-indigo-600 text-white py-2 rounded-lg text-sm">Request</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocietyServices;
