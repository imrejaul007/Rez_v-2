import React from 'react';
import { ArrowLeft, Clock, Star, Check } from 'lucide-react';

// Society+ Service Details
// Backend API: GET /api/wasil/society/services/:id

const SocietyServiceDetails = () => {
  const service = {
    name: 'Plumbing Services',
    professional: 'Rajesh Kumar',
    rating: 4.9,
    experience: '12 years',
    price: 299,
    coins: 30,
    description: 'Expert plumbing services for all your needs',
    services: ['Tap repair', 'Pipe leak fixing', 'Tank cleaning', 'Drainage issues']
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-64 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-9xl">
        🔧
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <h1 className="text-xl font-bold text-gray-800">{service.name}</h1>
        <p className="text-sm text-gray-500 mt-1">{service.professional}</p>
        <div className="flex items-center gap-2 mt-2">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-medium">{service.rating}</span>
          <span className="text-sm text-gray-500">• {service.experience} experience</span>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <p className="text-2xl font-bold text-gray-800">₹{service.price}</p>
          <span className="text-sm text-gray-500">base charge</span>
        </div>
        <p className="text-gray-700 mt-3">{service.description}</p>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Services Provided</h2>
        <div className="space-y-2">
          {service.services.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold">
          Request Service
        </button>
      </div>
    </div>
  );
};

export default SocietyServiceDetails;
