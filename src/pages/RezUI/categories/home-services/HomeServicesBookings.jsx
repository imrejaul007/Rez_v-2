import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Phone } from 'lucide-react';

function HomeServicesBookings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');

  const bookings = {
    upcoming: [
      { id: 1, service: 'AC Repair', provider: 'Rajesh Kumar', date: '2024-02-15', time: '10:00 AM', status: 'Confirmed', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400' }
    ],
    completed: [
      { id: 2, service: 'Home Cleaning', provider: 'Amit Singh', date: '2024-01-20', time: '2:00 PM', status: 'Completed', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400' }
    ]
  };

  const currentBookings = bookings[activeTab] || [];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Calendar className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">My Bookings</h1></div><p className="text-xs text-white/80">Track your services</p></div>
        </div>
      </div>
      <div className="px-4 py-3 border-b border-rez-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800">
        <div className="flex gap-2">
          <button onClick={() => setActiveTab('upcoming')} className={`flex-1 py-2 rounded-lg font-bold text-sm ${activeTab === 'upcoming' ? 'bg-purple-500 text-white' : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-600 dark:text-gray-400'}`}>Upcoming</button>
          <button onClick={() => setActiveTab('completed')} className={`flex-1 py-2 rounded-lg font-bold text-sm ${activeTab === 'completed' ? 'bg-purple-500 text-white' : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-600 dark:text-gray-400'}`}>Completed</button>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {currentBookings.length === 0 ? (
          <div className="text-center py-12"><Calendar className="w-16 h-16 text-rez-gray-400 mx-auto mb-4" /><p className="text-rez-gray-600 dark:text-gray-400">No {activeTab} bookings</p></div>
        ) : (
          currentBookings.map(booking => (
            <div key={booking.id} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
              <div className="flex gap-3 mb-3">
                <img src={booking.image} alt={booking.service} className="w-20 h-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <h3 className="font-bold text-rez-navy dark:text-white mb-1">{booking.service}</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">by {booking.provider}</p>
                  <div className="flex items-center gap-3 text-sm text-rez-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{booking.date}</div>
                    <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{booking.time}</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {activeTab === 'upcoming' ? (
                  <>
                    <button className="flex-1 py-2 rounded-lg border-2 border-red-500 text-red-600 dark:text-red-400 font-bold text-sm">Cancel</button>
                    <button className="flex-1 py-2 rounded-lg bg-purple-500 text-white font-bold text-sm">Reschedule</button>
                  </>
                ) : (
                  <button className="flex-1 py-2 rounded-lg bg-purple-500 text-white font-bold text-sm">Book Again</button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomeServicesBookings;
