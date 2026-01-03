import React from 'react';
import { ArrowLeft, Check, Shield } from 'lucide-react';

// Bizora Service Details
// Backend API: GET /api/wasil/bizora/services/:id

const BizoraServiceDetails = () => {
  const service = {
    name: 'GST Filing & Compliance',
    price: 999,
    period: 'per month',
    coins: 100,
    description: 'Complete GST filing and compliance management for your business',
    includes: ['Monthly GST returns', 'Quarterly statements', 'Annual filing', 'Expert support', 'Penalty protection']
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-64 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-9xl">
        📄
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <span className="text-sm text-blue-700 font-medium">Certified Service</span>
        </div>
        <h1 className="text-xl font-bold text-gray-800">{service.name}</h1>
        <p className="text-3xl font-bold text-gray-800 mt-4">₹{service.price}</p>
        <p className="text-sm text-gray-500">/{service.period}</p>
        <p className="text-yellow-600 mt-2">Earn {service.coins}🪙 coins monthly</p>
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
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default BizoraServiceDetails;
