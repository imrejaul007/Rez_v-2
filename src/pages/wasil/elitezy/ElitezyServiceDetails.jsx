import React from 'react';
import { ArrowLeft, Clock, Star, Award, Check } from 'lucide-react';

// Elitezy Service Details
// Backend API: GET /api/wasil/elitezy/services/:id

const ElitezyServiceDetails = () => {
  const service = {
    name: 'Private Chef Experience',
    professional: 'Chef Vikas Khanna',
    rating: 4.9,
    experience: '20 years',
    price: 5999,
    duration: '4 hours',
    coins: 600,
    description: 'Michelin-star chef creates a personalized dining experience at your home',
    includes: ['Custom menu planning', 'Fresh ingredients', 'Table service', 'Cleanup']
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-9xl">
        👨‍🍳
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <h1 className="text-xl font-bold text-gray-800">{service.name}</h1>
        <p className="text-sm text-gray-500 mt-1">{service.professional}</p>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-medium">{service.rating}</span>
          </div>
          <span className="text-sm text-gray-500">• {service.experience} experience</span>
          <Award className="w-4 h-4 text-blue-600" />
        </div>
        <p className="text-3xl font-bold text-gray-800 mt-4">₹{service.price.toLocaleString()}</p>
        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
          <Clock className="w-4 h-4" /> {service.duration}
        </p>
        <p className="text-yellow-600 mt-2">Earn {service.coins}🪙 coins</p>
        <p className="text-gray-700 mt-3">{service.description}</p>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Includes</h2>
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
        <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ElitezyServiceDetails;
