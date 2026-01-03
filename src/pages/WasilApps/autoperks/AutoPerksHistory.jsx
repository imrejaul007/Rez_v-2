import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

// AutoPerks History: View Service History
// Backend API: GET /api/wasil/autoperks/bookings/history

const AutoPerksHistory = () => {
  const bookings = [
    {
      id: 1,
      service: 'Complete Car Wash',
      garage: 'Quick Auto Care',
      date: 'Jan 12, 2026',
      time: '10:00 AM',
      price: 299,
      coinsEarned: 30,
      status: 'completed'
    },
    {
      id: 2,
      service: 'Oil Change',
      garage: 'AutoFix Center',
      date: 'Dec 28, 2025',
      time: '2:00 PM',
      price: 999,
      coinsEarned: 100,
      status: 'completed'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-orange-500 to-red-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white">Service History</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-800">{booking.service}</h3>
                <p className="text-sm text-gray-500">{booking.garage}</p>
              </div>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {booking.date}
              </span>
              <span>{booking.time}</span>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t">
              <p className="font-bold text-gray-800">₹{booking.price}</p>
              <span className="text-green-600 text-sm">+{booking.coinsEarned}🪙</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoPerksHistory;
