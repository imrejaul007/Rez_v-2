import React from 'react';
import { Calendar, Clock } from 'lucide-react';

// Kidzo Bookings
// Backend API: GET /api/wasil/kidzo/bookings

const KidzoBookings = () => {
  const bookings = [
    {
      id: 1,
      activity: 'Creative Art Workshop',
      child: 'Aarav',
      date: 'Jan 18, Thu',
      time: '4:00 PM',
      price: 499,
      status: 'upcoming'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white">My Bookings</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-bold text-gray-800">{booking.activity}</h3>
            <p className="text-sm text-gray-500">For: {booking.child}</p>
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
              <button className="bg-yellow-400 text-white px-4 py-2 rounded-lg text-sm">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidzoBookings;
