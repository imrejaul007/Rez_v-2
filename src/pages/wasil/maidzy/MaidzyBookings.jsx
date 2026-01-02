import React from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

// Maidzy Bookings
// Backend API: GET /api/wasil/maidzy/bookings

const MaidzyBookings = () => {
  const bookings = [
    {
      id: 1,
      service: 'Deep Cleaning',
      professional: 'Ramesh Kumar',
      date: 'Jan 18, Thu',
      time: '10:00 AM',
      price: 1999,
      status: 'upcoming',
      coinsEarned: 200
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white">My Bookings</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-800">{booking.service}</h3>
                <p className="text-sm text-gray-500">{booking.professional}</p>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                Confirmed
              </span>
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {booking.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {booking.time}
              </span>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t">
              <p className="font-bold text-gray-800">₹{booking.price}</p>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaidzyBookings;
