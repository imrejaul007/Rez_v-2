import React, { useState } from 'react';
import { Calendar, MapPin, Clock, QrCode, ChevronRight } from 'lucide-react';

// Funzy Bookings: View Past & Upcoming Bookings
// Backend API: GET /api/wasil/funzy/bookings/history
// Backend API: GET /api/wasil/funzy/bookings/upcoming

const FunzyBookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcoming = [
    {
      id: 1,
      event: 'Avengers: Secret Wars',
      type: 'Movie',
      venue: 'INOX Multiplex',
      date: 'Jan 16, Today',
      time: '6:00 PM',
      seats: ['F10', 'F11', 'F12'],
      total: 795,
      image: '🎬'
    }
  ];

  const past = [
    {
      id: 1,
      event: 'Coldplay Live',
      type: 'Concert',
      venue: 'Bangalore Stadium',
      date: 'Jan 10',
      time: '7:00 PM',
      total: 3999,
      coinsEarned: 400,
      image: '🎵'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white">My Bookings</h1>
      </div>

      <div className="bg-white border-b sticky top-0 z-10">
        <div className="flex px-4">
          {['upcoming', 'past'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium capitalize ${
                activeTab === tab ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'upcoming' && (
        <div className="px-4 py-4 space-y-4">
          {upcoming.map((booking) => (
            <div key={booking.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-4xl">
                    {booking.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{booking.event}</h3>
                    <p className="text-sm text-gray-500">{booking.type}</p>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{booking.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{booking.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Seats: {booking.seats.join(', ')}</p>
                    <p className="font-bold text-gray-800">₹{booking.total}</p>
                  </div>
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <QrCode className="w-5 h-5" />
                    View Ticket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'past' && (
        <div className="px-4 py-4 space-y-4">
          {past.map((booking) => (
            <div key={booking.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-3xl">
                  {booking.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{booking.event}</h3>
                  <p className="text-sm text-gray-500">{booking.type}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span>{booking.date}</span>
                    <span>{booking.time}</span>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t">
                    <p className="text-sm text-gray-500">₹{booking.total}</p>
                    {booking.coinsEarned && (
                      <span className="text-green-600 text-sm">+{booking.coinsEarned}🪙</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FunzyBookings;
