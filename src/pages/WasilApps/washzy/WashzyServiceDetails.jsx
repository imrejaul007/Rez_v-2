import React from 'react';
import { ArrowLeft, Clock, Calendar, Check } from 'lucide-react';

// Washzy Service Details
// Backend API: GET /api/wasil/washzy/services/:id

const WashzyServiceDetails = () => {
  const service = {
    name: 'Wash & Iron Service',
    price: 149,
    unit: 'per kg',
    time: '48 hours',
    coins: 15,
    description: 'Professional wash and iron service for your clothes',
    includes: ['Pickup & Delivery', 'Quality Detergent', 'Steam Iron', 'Packing']
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-64 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-9xl">
        🧺
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <h1 className="text-xl font-bold text-gray-800">{service.name}</h1>
        <div className="flex items-center gap-3 mt-3">
          <p className="text-2xl font-bold text-gray-800">₹{service.price}</p>
          <span className="text-gray-500">/{service.unit}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
          <Clock className="w-4 h-4" /> Delivery in {service.time}
        </p>
        <p className="text-yellow-600 mt-2">Earn {service.coins}🪙 coins per kg</p>
        <p className="text-gray-700 mt-3">{service.description}</p>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">What's Included</h2>
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
        <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-bold">
          Schedule Pickup
        </button>
      </div>
    </div>
  );
};

export default WashzyServiceDetails;
