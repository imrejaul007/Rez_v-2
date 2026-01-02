import React, { useState } from 'react';
import { Calendar, MapPin, Users, ChevronRight } from 'lucide-react';

// TravoPay Trips
// Backend API: GET /api/wasil/travopay/bookings

const TravoPayTrips = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcoming = [
    {
      id: 1,
      destination: 'Goa Beach Paradise',
      duration: '3N/4D',
      startDate: 'Feb 15',
      endDate: 'Feb 18',
      travelers: 2,
      price: 25998,
      status: 'confirmed',
      icon: '🏖️'
    }
  ];

  const past = [
    {
      id: 1,
      destination: 'Manali Adventure',
      duration: '4N/5D',
      date: 'Dec 20-24, 2025',
      travelers: 3,
      price: 47997,
      coinsEarned: 4800,
      icon: '⛰️'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white">My Trips</h1>
      </div>

      <div className="bg-white border-b sticky top-0 z-10">
        <div className="flex px-4">
          {['upcoming', 'past'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium capitalize ${
                activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'upcoming' && (
        <div className="px-4 py-4 space-y-4">
          {upcoming.map((trip) => (
            <div key={trip.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-6xl">
                {trip.icon}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-gray-800">{trip.destination}</h3>
                    <p className="text-sm text-gray-500">{trip.duration}</p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                    Confirmed
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{trip.startDate} - {trip.endDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{trip.travelers} travelers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>View booking details</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t">
                  <p className="font-bold text-gray-800">₹{trip.price.toLocaleString()}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1">
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'past' && (
        <div className="px-4 py-4 space-y-4">
          {past.map((trip) => (
            <div key={trip.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-4xl">
                  {trip.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{trip.destination}</h3>
                  <p className="text-sm text-gray-500">{trip.date}</p>
                  <p className="text-sm text-gray-600 mt-1">{trip.travelers} travelers</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t">
                <div>
                  <p className="font-bold text-gray-800">₹{trip.price.toLocaleString()}</p>
                  <p className="text-xs text-green-600">+{trip.coinsEarned}🪙</p>
                </div>
                <button className="text-blue-600 text-sm font-medium">Book Again</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TravoPayTrips;
