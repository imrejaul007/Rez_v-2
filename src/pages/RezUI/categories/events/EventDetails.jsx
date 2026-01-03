import React from 'react';
import { MapPin, Clock, Users, Share2 } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function EventDetails() {
  const event = {
    name: 'Music Festival 2025',
    date: 'Jan 15, 2025',
    time: '6:00 PM - 11:00 PM',
    location: 'Central Park',
    attendees: 5234,
    description: 'Join us for an amazing music festival featuring top artists!',
    image: 'bg-gradient-to-r from-purple-400 to-pink-500',
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <div className={`w-full h-48 ${event.image} flex items-center justify-center`}>
        <h1 className="text-3xl font-bold text-white">{event.name}</h1>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <div className="flex items-center gap-3">
            <Clock className="text-blue-600" size={20} />
            <div>
              <p className="text-sm text-gray-600">Date & Time</p>
              <p className="font-semibold text-gray-900">{event.date} at {event.time}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-red-600" size={20} />
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <p className="font-semibold text-gray-900">{event.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="text-green-600" size={20} />
            <div>
              <p className="text-sm text-gray-600">Attendees</p>
              <p className="font-semibold text-gray-900">{event.attendees.toLocaleString()}</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">About</p>
            <p className="text-gray-900">{event.description}</p>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold">
            Get Tickets
          </button>

          <button className="w-full border-2 border-gray-300 text-gray-900 py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
            <Share2 size={18} /> Share Event
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}