import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, Star, Share2, Heart } from 'lucide-react';

// Funzy Event Details: View Event & Book Tickets
// Backend API: GET /api/wasil/funzy/events/:id
// Backend API: POST /api/wasil/funzy/bookings

const FunzyEventDetails = () => {
  const [selectedDate, setSelectedDate] = useState('jan16');
  const [selectedSlot, setSelectedSlot] = useState(null);

  const event = {
    name: 'Avengers: Secret Wars',
    type: 'Movie - Action/Sci-Fi',
    rating: 4.8,
    reviews: 12450,
    duration: '2h 45min',
    language: 'English',
    price: 250,
    coins: 25,
    description: 'The Multiverse Saga concludes with an epic battle.',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson']
  };

  const showtimes = [
    { id: 'jan16', date: 'Jan 16, Today', slots: ['10:00 AM', '1:30 PM', '6:00 PM', '9:30 PM'] },
    { id: 'jan17', date: 'Jan 17, Tomorrow', slots: ['10:00 AM', '1:30 PM', '6:00 PM', '9:30 PM'] }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-80 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-9xl">
        🎬
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Share2 className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="bg-white px-4 py-4">
        <h1 className="text-xl font-bold text-gray-800">{event.name}</h1>
        <p className="text-sm text-gray-500 mt-1">{event.type}</p>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1 bg-green-600 text-white text-sm px-2 py-1 rounded">
            <Star className="w-4 h-4" /> {event.rating}
          </div>
          <span className="text-sm text-gray-500">{event.reviews.toLocaleString()} votes</span>
        </div>
        <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {event.duration}
          </span>
          <span>{event.language}</span>
        </div>
        <p className="text-gray-700 mt-3">{event.description}</p>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Select Date & Time</h2>
        {showtimes.map((day) => (
          <div key={day.id} className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">{day.date}</p>
            <div className="grid grid-cols-4 gap-2">
              {day.slots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`px-3 py-2 rounded-lg border text-sm ${
                    selectedSlot === slot ? 'border-purple-500 bg-purple-50' : 'border-gray-300'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-bold">
          Select Seats • ₹{event.price}
        </button>
      </div>
    </div>
  );
};

export default FunzyEventDetails;
