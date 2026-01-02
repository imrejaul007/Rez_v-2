import React, { useState } from 'react';
import { Search, Calendar, MapPin, Star, Users, Filter } from 'lucide-react';

// Funzy Browse: Browse Entertainment & Events
// Backend API: GET /api/wasil/funzy/events
// Backend API: GET /api/wasil/funzy/categories

const FunzyBrowse = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '🎉' },
    { id: 'movies', name: 'Movies', icon: '🎬' },
    { id: 'concerts', name: 'Concerts', icon: '🎵' },
    { id: 'comedy', name: 'Comedy', icon: '😂' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
    { id: 'theater', name: 'Theater', icon: '🎭' }
  ];

  const events = [
    {
      id: 1,
      name: 'Avengers: Secret Wars',
      type: 'Movie',
      image: '🎬',
      rating: 4.8,
      venue: 'INOX Multiplex',
      date: 'Jan 16-20',
      price: 250,
      coins: 25
    },
    {
      id: 2,
      name: 'AR Rahman Live',
      type: 'Concert',
      image: '🎵',
      rating: 4.9,
      venue: 'Palace Grounds',
      date: 'Jan 25',
      price: 1999,
      coins: 200
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Events & Entertainment</h1>
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search events..." className="flex-1 outline-none" />
          <Filter className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="px-4 mt-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === cat.id ? 'bg-purple-500 text-white' : 'bg-white text-gray-700'
              }`}
            >
              <span>{cat.icon}</span>
              <span className="text-sm font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-8xl">
              {event.image}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800">{event.name}</h3>
              <p className="text-sm text-gray-500">{event.type}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {event.venue}
                </span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <p className="text-sm text-gray-500">Starting from</p>
                  <p className="font-bold text-gray-800">₹{event.price}</p>
                </div>
                <button className="bg-purple-500 text-white px-6 py-2 rounded-lg">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunzyBrowse;
