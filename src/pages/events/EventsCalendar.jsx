import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function EventsCalendar() {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [events] = useState([
    { date: 5, title: 'Concert Night', time: '7 PM' },
    { date: 15, title: 'Comedy Show', time: '8 PM' },
    { date: 22, title: 'Festival', time: '10 AM' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Calendar size={28} /> Events Calendar
        </h1>

        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex justify-between items-center mb-4">
            <button className="text-blue-600 hover:text-blue-800">
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-lg font-bold text-gray-900">January 2025</h2>
            <button className="text-blue-600 hover:text-blue-800">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <p key={day} className="text-center text-sm font-bold text-gray-600">{day}</p>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 31 }, (_, i) => {
              const hasEvent = events.some(e => e.date === i + 1);
              return (
                <div
                  key={i}
                  className={`aspect-square flex items-center justify-center rounded text-sm font-semibold ${
                    hasEvent ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {events.map((event, i) => (
            <div key={i} className="bg-white rounded-lg p-3 shadow">
              <p className="font-semibold text-gray-900">{event.title}</p>
              <p className="text-sm text-gray-600">Jan {event.date} at {event.time}</p>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}