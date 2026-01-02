import React from 'react';
import { ArrowLeft, Clock, Star, Award, Check } from 'lucide-react';

// Wellnez Service Details
// Backend API: GET /api/wasil/wellnez/services/:id

const WellnezServiceDetails = () => {
  const service = {
    name: 'Doctor Video Consultation',
    doctor: 'Dr. Ramesh Kumar',
    specialization: 'General Physician',
    experience: '15 years',
    rating: 4.9,
    price: 499,
    duration: '30 min',
    coins: 50,
    description: 'Get expert medical advice from qualified doctors via video call',
    includes: ['Video consultation', 'Digital prescription', 'Follow-up support', 'Health records']
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-64 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center text-9xl">
        👨‍⚕️
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <h1 className="text-xl font-bold text-gray-800">{service.name}</h1>
        <p className="text-sm text-gray-500 mt-1">{service.doctor} • {service.specialization}</p>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-medium">{service.rating}</span>
          </div>
          <span className="text-sm text-gray-500">• {service.experience} experience</span>
          <Award className="w-4 h-4 text-blue-600" />
        </div>
        <div className="flex items-center gap-3 mt-4">
          <p className="text-2xl font-bold text-gray-800">₹{service.price}</p>
          <span className="text-sm text-gray-600 flex items-center gap-1">
            <Clock className="w-4 h-4" /> {service.duration}
          </span>
        </div>
        <p className="text-yellow-600 mt-2">Earn {service.coins}🪙 coins</p>
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
        <button className="w-full bg-teal-500 text-white py-3 rounded-xl font-bold">
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default WellnezServiceDetails;
