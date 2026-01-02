import React, { useState } from 'react';
import { ArrowLeft, Clock, Calendar, MapPin, Check } from 'lucide-react';

// AutoPerks Service Details: View Service & Book
// Backend API: GET /api/wasil/autoperks/services/:id
// Backend API: POST /api/wasil/autoperks/bookings

const AutoPerksServiceDetails = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const service = {
    name: 'Complete Car Wash & Polish',
    price: 299,
    duration: '30 min',
    coins: 30,
    description: 'Exterior wash, interior vacuum, dashboard polish, tire cleaning',
    includes: ['Foam Wash', 'Vacuum Cleaning', 'Dashboard Polish', 'Tire Shine']
  };

  const slots = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-64 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-9xl">
        🚿
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <h1 className="text-xl font-bold text-gray-800">{service.name}</h1>
        <div className="flex items-center gap-4 mt-3">
          <p className="text-2xl font-bold text-gray-800">₹{service.price}</p>
          <span className="flex items-center gap-1 text-sm text-gray-600">
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

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Select Time Slot</h2>
        <div className="grid grid-cols-3 gap-2">
          {slots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`px-3 py-2 rounded-lg border ${
                selectedSlot === slot ? 'border-orange-500 bg-orange-50' : 'border-gray-300'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold">
          Book Service • ₹{service.price}
        </button>
      </div>
    </div>
  );
};

export default AutoPerksServiceDetails;
