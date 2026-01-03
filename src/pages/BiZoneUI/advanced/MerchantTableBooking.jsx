import React, { useState } from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

export default function MerchantTableBooking() {
  const [bookings, setBookings] = useState([
    { id: 1, name: 'Rajesh Kumar', guests: 4, time: '7:00 PM', date: 'Jan 5, 2025', status: 'confirmed' },
    { id: 2, name: 'Priya Sharma', guests: 2, time: '8:30 PM', date: 'Jan 5, 2025', status: 'pending' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Table Bookings</h1>

      <div className="space-y-3">
        {bookings.map(booking => (
          <div key={booking.id} className="bg-white rounded-lg p-4 shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-semibold text-gray-900">{booking.name}</p>
                <p className={`text-xs font-semibold mt-1 ${booking.status === 'confirmed' ? 'text-green-600' : 'text-amber-600'}`}>
                  {booking.status.toUpperCase()}
                </p>
              </div>
            </div>
            <div className="flex gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1"><Users size={16} /> {booking.guests} guests</span>
              <span className="flex items-center gap-1"><Clock size={16} /> {booking.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}