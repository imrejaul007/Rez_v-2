import React from 'react';
import { Search, Briefcase } from 'lucide-react';

// Bizora Services: Business Services
// Backend API: GET /api/wasil/bizora/services

const BizoraServices = () => {
  const services = [
    { id: 1, name: 'GST Filing', icon: '📄', price: '₹999/month', coins: 100 },
    { id: 2, name: 'Accounting', icon: '📊', price: '₹2,999/month', coins: 300 },
    { id: 3, name: 'Business Registration', icon: '🏢', price: '₹4,999', coins: 500 },
    { id: 4, name: 'Legal Consultation', icon: '⚖️', price: '₹1,999/session', coins: 200 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-4 pt-6 pb-4">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-6 h-6 text-white" />
          <h1 className="text-xl font-bold text-white">Business Services</h1>
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
            <p className="text-blue-600 font-bold mt-1">{service.price}</p>
            <p className="text-xs text-yellow-600 mt-1">+{service.coins}🪙</p>
            <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg text-sm">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BizoraServices;
