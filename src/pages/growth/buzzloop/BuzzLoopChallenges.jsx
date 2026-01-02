import React from 'react';
import { Trophy, Play, Users, Calendar } from 'lucide-react';

// BuzzLoop Challenges: Video Challenges
// Backend API: GET /api/growth/buzzloop/challenges
// Backend API: POST /api/growth/buzzloop/challenges/:id/participate

const BuzzLoopChallenges = () => {
  const challenges = [
    { id: 1, name: 'Dance Challenge 2026', icon: '💃', participants: '1.2M', prize: '₹50K', deadline: '7 days' },
    { id: 2, name: 'Food Hack Challenge', icon: '🍔', participants: '890K', prize: '₹25K', deadline: '5 days' },
    { id: 3, name: 'Comedy Showdown', icon: '😂', participants: '650K', prize: '₹30K', deadline: '10 days' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-orange-500 to-red-600 px-4 pt-6 pb-8">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <Trophy className="w-6 h-6" />
          Video Challenges
        </h1>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-6xl">
              {challenge.icon}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 text-lg mb-2">{challenge.name}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {challenge.participants}
                </span>
                <span className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  {challenge.prize}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {challenge.deadline}
                </span>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-medium">
                Join Challenge
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuzzLoopChallenges;
