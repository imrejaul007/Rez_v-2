import React from 'react';
import { ArrowLeft, Calendar, Users, MapPin, Star, Check, Plane, Hotel, Utensils } from 'lucide-react';

// TravoPay Package Details
// Backend API: GET /api/wasil/travopay/packages/:id

const TravoPayPackageDetails = () => {
  const pkg = {
    destination: 'Goa Beach Paradise',
    duration: '3 Nights / 4 Days',
    price: 12999,
    rating: 4.8,
    reviews: 2340,
    coins: 1300,
    description: 'Experience the best of Goa with pristine beaches, water sports, and vibrant nightlife',
    includes: [
      'Round-trip flights',
      '3-star hotel stay',
      'Daily breakfast',
      'Airport transfers',
      'Water sports package',
      'City tour'
    ],
    itinerary: [
      { day: 'Day 1', activities: 'Arrival • Beach visit • Welcome dinner' },
      { day: 'Day 2', activities: 'Water sports • Fort tour • Sunset cruise' },
      { day: 'Day 3', activities: 'Shopping • Local markets • Night party' },
      { day: 'Day 4', activities: 'Breakfast • Checkout • Departure' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-80 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-9xl">
        🏖️
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <h1 className="text-xl font-bold text-gray-800">{pkg.destination}</h1>
        <p className="text-sm text-gray-500 mt-1">{pkg.duration}</p>
        <div className="flex items-center gap-2 mt-2">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-medium">{pkg.rating}</span>
          <span className="text-sm text-gray-500">({pkg.reviews.toLocaleString()} reviews)</span>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <p className="text-3xl font-bold text-gray-800">₹{pkg.price.toLocaleString()}</p>
          <span className="text-sm text-gray-500">per person</span>
        </div>
        <p className="text-yellow-600 mt-2">Earn {pkg.coins}🪙 coins</p>
        <p className="text-gray-700 mt-3">{pkg.description}</p>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Package Includes</h2>
        <div className="space-y-2">
          {pkg.includes.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Itinerary</h2>
        <div className="space-y-3">
          {pkg.itinerary.map((day, idx) => (
            <div key={idx} className="border-l-2 border-blue-500 pl-4 py-2">
              <p className="font-medium text-gray-800">{day.day}</p>
              <p className="text-sm text-gray-600">{day.activities}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold">
          Book Package • ₹{pkg.price.toLocaleString()}
        </button>
      </div>
    </div>
  );
};

export default TravoPayPackageDetails;
