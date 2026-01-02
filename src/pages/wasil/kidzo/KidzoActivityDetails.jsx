import React from 'react';
import { ArrowLeft, Calendar, Clock, Users, Award } from 'lucide-react';

// Kidzo Activity Details
// Backend API: GET /api/wasil/kidzo/activities/:id

const KidzoActivityDetails = () => {
  const activity = {
    name: 'Creative Art Workshop',
    ageGroup: '6-10 years',
    instructor: 'Ms. Priya Singh',
    duration: '60 min',
    price: 499,
    coins: 50,
    description: 'Fun and creative art workshop for kids',
    skills: ['Creativity', 'Motor Skills', 'Color Theory']
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-64 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center text-9xl">
        🎨
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <h1 className="text-xl font-bold text-gray-800">{activity.name}</h1>
        <p className="text-sm text-gray-500 mt-1">Age: {activity.ageGroup}</p>
        <p className="text-gray-700 mt-3">{activity.description}</p>
        <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {activity.duration}
          </span>
          <span className="flex items-center gap-1">
            <Award className="w-4 h-4" /> {activity.instructor}
          </span>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-yellow-400 text-white py-3 rounded-xl font-bold">
          Book Class • ₹{activity.price}
        </button>
      </div>
    </div>
  );
};

export default KidzoActivityDetails;
