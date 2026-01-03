import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function MyEvents() {
  const [events] = React.useState([
    { id: 1, name: 'Concert', date: 'Jan 15', location: 'Central Park', tickets: 2, status: 'confirmed' },
    { id: 2, name: 'Theater', date: 'Jan 20', location: 'Grand Hall', tickets: 1, status: 'confirmed' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">My Events</h1>

        <div className="space-y-3">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-lg p-4 shadow">
              <p className="font-semibold text-gray-900">{event.name}</p>
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                <span className="flex items-center gap-1"><Calendar size={16} /> {event.date}</span>
                <span className="flex items-center gap-1"><MapPin size={16} /> {event.location}</span>
              </div>
              <p className="text-sm font-semibold text-teal-600 mt-2">{event.tickets} ticket(s)</p>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}