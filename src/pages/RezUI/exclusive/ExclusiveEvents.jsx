import { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ExclusiveEvents = () => {
  const [events] = useState([
    { id: 1, name: 'VIP Member Networking', date: '2025-01-15', location: 'Mumbai', attendees: 150, image: '🎉' },
    { id: 2, name: 'Fashion Show Launch', date: '2025-01-20', location: 'Delhi', attendees: 300, image: '👗' },
    { id: 3, name: 'Tech Summit', date: '2025-02-01', location: 'Bangalore', attendees: 500, image: '💻' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Exclusive Events</h1>
        <p className="text-gray-600 dark:text-gray-400">Member-only events</p>
      </div>

      <div className="px-4 py-6 space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 overflow-hidden hover:shadow-md transition-all">
            <div className="p-4">
              <div className="flex gap-4 mb-3">
                <div className="text-4xl">{event.image}</div>
                <div className="flex-1">
                  <p className="font-bold text-rez-navy dark:text-white mb-2">{event.name}</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      {event.attendees} attending
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full py-2 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-700 flex items-center justify-center gap-2 text-sm">
                Register Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ExclusiveEvents;
