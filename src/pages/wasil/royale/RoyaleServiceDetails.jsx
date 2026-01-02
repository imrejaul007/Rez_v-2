import React from 'react';
import { ArrowLeft, Users, MapPin, Crown, Check } from 'lucide-react';

// Royale+ Service Details
// Backend API: GET /api/wasil/royale/clubs/:id

const RoyaleServiceDetails = () => {
  const club = {
    name: 'Bangalore Golf Club',
    location: 'Indiranagar, Bangalore',
    members: 2340,
    price: 50000,
    period: 'per year',
    coins: 5000,
    description: 'Premier golf club with 18-hole championship course',
    amenities: ['18-hole golf course', 'Pro shop', 'Clubhouse', 'Restaurant & Bar', 'Swimming pool', 'Tennis courts']
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-64 bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center text-9xl">
        ⛳
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <div className="flex items-center gap-2 mb-2">
          <Crown className="w-5 h-5 text-yellow-600" />
          <span className="text-sm text-yellow-700 font-medium">Premium Club</span>
        </div>
        <h1 className="text-xl font-bold text-gray-800">{club.name}</h1>
        <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
          <MapPin className="w-4 h-4" /> {club.location}
        </p>
        <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
          <Users className="w-4 h-4" /> {club.members.toLocaleString()} members
        </p>
        <p className="text-3xl font-bold text-gray-800 mt-4">₹{club.price.toLocaleString()}</p>
        <p className="text-sm text-gray-500">/{club.period}</p>
        <p className="text-yellow-600 mt-2">Earn {club.coins.toLocaleString()}🪙 coins</p>
        <p className="text-gray-700 mt-3">{club.description}</p>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Amenities</h2>
        <div className="space-y-2">
          {club.amenities.map((amenity, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-yellow-600 text-white py-3 rounded-xl font-bold">
          Apply for Membership
        </button>
      </div>
    </div>
  );
};

export default RoyaleServiceDetails;
