import React from 'react';
import { ArrowLeft, Clock, Check } from 'lucide-react';

// Maidzy Service Details
// Backend API: GET /api/wasil/maidzy/services/:id

const MaidzyServiceDetails = () => {
  const service = {
    name: 'Deep Cleaning Service',
    price: 1999,
    time: '4-5 hours',
    coins: 200,
    description: 'Complete deep cleaning of your entire home',
    includes: ['All rooms cleaning', 'Kitchen deep clean', 'Bathroom sanitization', 'Dusting & Mopping', 'Balcony cleaning']
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-64 bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center text-9xl">
        🧹
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <h1 className="text-xl font-bold text-gray-800">{service.name}</h1>
        <div className="flex items-center gap-3 mt-3">
          <p className="text-2xl font-bold text-gray-800">₹{service.price}</p>
          <span className="text-sm text-gray-600 flex items-center gap-1">
            <Clock className="w-4 h-4" /> {service.time}
          </span>
        </div>
        <p className="text-yellow-600 mt-2">Earn {service.coins}🪙 coins</p>
        <p className="text-gray-700 mt-3">{service.description}</p>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Service Includes</h2>
        <div className="space-y-2">
          {service.includes.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-teal-500 text-white py-3 rounded-xl font-bold">
          Book Service
        </button>
      </div>
    </div>
  );
};

export default MaidzyServiceDetails;
