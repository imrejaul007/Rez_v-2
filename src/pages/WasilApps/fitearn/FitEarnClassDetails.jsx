import React, { useState } from 'react';
import {
  ArrowLeft, Star, Clock, Users, Calendar, MapPin, Heart,
  Share2, Award, TrendingUp, Flame, Check, ChevronRight
} from 'lucide-react';

// FitEarn Class Details: View Class Information & Book
// Backend API: GET /api/wasil/fitearn/classes/:id
// Backend API: POST /api/wasil/fitearn/classes/:id/book
// Backend API: GET /api/wasil/fitearn/classes/:id/reviews

const FitEarnClassDetails = () => {
  const [selectedDate, setSelectedDate] = useState('today');
  const [selectedSlot, setSelectedSlot] = useState(null);

  const classInfo = {
    name: "Zumba Dance Fitness",
    instructor: "Sarah Khan",
    gym: "Cult.fit Studio",
    image: "💃",
    rating: 4.9,
    reviews: 850,
    participants: 45,
    duration: "60 min",
    level: "Beginner",
    price: 299,
    coins: 30,
    description: "High-energy dance workout that combines Latin and international music with fun, effective movements. Perfect for burning calories while having fun!",
    benefits: ["Burns 500+ calories", "Full body workout", "Improves coordination", "Stress relief"],
    requirements: ["Comfortable clothes", "Water bottle", "Towel", "Dance shoes (optional)"]
  };

  const schedule = [
    { id: 1, day: 'Today', date: 'Jan 15', slots: ['6:00 AM', '6:00 PM', '7:30 PM'] },
    { id: 2, day: 'Tomorrow', date: 'Jan 16', slots: ['6:00 AM', '5:30 PM', '7:00 PM'] },
    { id: 3, day: 'Thu', date: 'Jan 17', slots: ['6:00 AM', '6:00 PM'] }
  ];

  const reviews = [
    {
      id: 1,
      name: "Priya M.",
      rating: 5,
      date: "2 days ago",
      comment: "Amazing class! Sarah is such an energetic instructor. Lost 3 kgs in a month!",
      helpful: 24
    },
    {
      id: 2,
      name: "Rahul S.",
      rating: 5,
      date: "1 week ago",
      comment: "Best workout ever. The music and moves are so fun, you don't even feel like exercising!",
      helpful: 18
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header Image */}
      <div className="relative">
        <div className="h-64 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-9xl">
          {classInfo.image}
        </div>
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
            <Heart className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
            <Share2 className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div className="bg-white/95 backdrop-blur px-3 py-2 rounded-lg">
            <p className="text-xs text-gray-500">Difficulty</p>
            <p className="font-bold text-orange-600">{classInfo.level}</p>
          </div>
          <div className="bg-white/95 backdrop-blur px-3 py-2 rounded-lg">
            <p className="text-xs text-gray-500">Duration</p>
            <p className="font-bold text-gray-800">{classInfo.duration}</p>
          </div>
          <div className="bg-white/95 backdrop-blur px-3 py-2 rounded-lg">
            <p className="text-xs text-gray-500">Participants</p>
            <p className="font-bold text-gray-800">{classInfo.participants}</p>
          </div>
        </div>
      </div>

      {/* Class Info */}
      <div className="bg-white px-4 py-4">
        <h1 className="text-xl font-bold text-gray-800">{classInfo.name}</h1>
        <p className="text-sm text-gray-500 mt-1">with {classInfo.instructor} at {classInfo.gym}</p>

        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1 bg-green-600 text-white text-sm font-bold px-2 py-1 rounded">
            <Star className="w-4 h-4" /> {classInfo.rating}
          </div>
          <span className="text-sm text-gray-500">{classInfo.reviews} reviews</span>
          <span className="text-sm text-gray-500">•</span>
          <span className="text-orange-600 text-sm font-medium">+{classInfo.coins}🪙 per class</span>
        </div>

        <div className="mt-4">
          <p className="text-gray-700">{classInfo.description}</p>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Benefits</h2>
        <div className="space-y-2">
          {classInfo.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* What to Bring */}
      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">What to Bring</h2>
        <div className="space-y-2">
          {classInfo.requirements.map((req, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-gray-700">{req}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule */}
      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Select Date & Time</h2>
        <div className="space-y-3">
          {schedule.map((day) => (
            <div key={day.id}>
              <p className="text-sm font-medium text-gray-700 mb-2">
                {day.day}, {day.date}
              </p>
              <div className="flex gap-2 flex-wrap">
                {day.slots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSlot(`${day.id}-${slot}`)}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedSlot === `${day.id}-${slot}`
                        ? 'bg-orange-500 text-white border-orange-500'
                        : 'bg-white text-gray-700 border-gray-300'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor */}
      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Instructor</h2>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center text-3xl">
            👩‍🏫
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-gray-800">{classInfo.instructor}</h3>
              <Award className="w-4 h-4 text-blue-600" />
            </div>
            <p className="text-sm text-gray-500">Certified Zumba Instructor</p>
            <p className="text-xs text-gray-400 mt-1">5 years experience • 850 students</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white mt-2 px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Reviews</h2>
          <button className="text-orange-600 text-sm">See All</button>
        </div>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-4 last:border-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">{review.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-2">{review.comment}</p>
              <button className="text-xs text-gray-500 mt-2">
                👍 Helpful ({review.helpful})
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-sm text-gray-500">Price per class</p>
            <p className="text-2xl font-bold text-gray-800">₹{classInfo.price}</p>
          </div>
          <button
            disabled={!selectedSlot}
            className={`px-8 py-3 rounded-xl font-bold ${
              selectedSlot
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-400'
            }`}
          >
            Book Class
          </button>
        </div>
        {selectedSlot && (
          <p className="text-xs text-green-600 text-center">
            ✓ You'll earn {classInfo.coins}🪙 after attending this class
          </p>
        )}
      </div>
    </div>
  );
};

export default FitEarnClassDetails;
