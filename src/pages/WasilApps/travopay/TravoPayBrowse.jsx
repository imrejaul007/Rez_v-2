import React from 'react';
import { Search, MapPin, Star, Calendar } from 'lucide-react';

// TravoPay Browse: Travel Packages
// Backend API: GET /api/wasil/travopay/packages

const TravoPayBrowse = () => {
  const packages = [
    {
      id: 1,
      destination: 'Goa Beach Paradise',
      duration: '3N/4D',
      icon: '🏖️',
      price: 12999,
      rating: 4.8,
      reviews: 2340,
      includes: 'Flights + Hotel + Meals',
      coins: 1300
    },
    {
      id: 2,
      destination: 'Manali Adventure',
      duration: '4N/5D',
      icon: '⛰️',
      price: 15999,
      rating: 4.7,
      reviews: 1890,
      includes: 'Flights + Hotel + Activities',
      coins: 1600
    },
    {
      id: 3,
      destination: 'Kerala Backwaters',
      duration: '5N/6D',
      icon: '🚣',
      price: 18999,
      rating: 4.9,
      reviews: 1560,
      includes: 'Flights + Houseboat + Meals',
      coins: 1900
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Travel Packages</h1>
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search destinations..." className="flex-1 outline-none" />
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-8xl">
              {pkg.icon}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800">{pkg.destination}</h3>
              <p className="text-sm text-gray-500">{pkg.duration} • {pkg.includes}</p>
              <div className="flex items-center gap-2 mt-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium">{pkg.rating}</span>
                <span className="text-sm text-gray-500">({pkg.reviews.toLocaleString()} reviews)</span>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t">
                <div>
                  <p className="text-sm text-gray-500">Starting from</p>
                  <p className="text-xl font-bold text-gray-800">₹{pkg.price.toLocaleString()}</p>
                  <p className="text-xs text-yellow-600">+{pkg.coins}🪙</p>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravoPayBrowse;
