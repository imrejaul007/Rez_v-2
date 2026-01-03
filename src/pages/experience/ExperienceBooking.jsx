import { useState } from 'react';
import { Calendar, Users, Clock, MapPin, ArrowRight } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ExperienceBooking = () => {
  const [bookingData, setBookingData] = useState({
    experience: 'Cooking Class',
    date: '2025-01-10',
    time: '14:00',
    guests: 2,
    location: 'Downtown Studio'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Book Experience</h1>
        <p className="text-gray-600 dark:text-gray-400">Reserve your perfect moment</p>
      </div>

      <div className="px-4 py-6 space-y-4">
        <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4">
          <label className="block text-sm font-bold text-rez-navy dark:text-white mb-2">Experience</label>
          <input type="text" value={bookingData.experience} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-rez-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4">
            <label className="block text-sm font-bold text-rez-navy dark:text-white mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Date
            </label>
            <input type="date" value={bookingData.date} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-rez-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4">
            <label className="block text-sm font-bold text-rez-navy dark:text-white mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Time
            </label>
            <input type="time" value={bookingData.time} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-rez-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4">
            <label className="block text-sm font-bold text-rez-navy dark:text-white mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Guests
            </label>
            <input type="number" value={bookingData.guests} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-rez-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4">
            <label className="block text-sm font-bold text-rez-navy dark:text-white mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location
            </label>
            <input type="text" value={bookingData.location} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-rez-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>

        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
          Confirm Booking
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ExperienceBooking;
