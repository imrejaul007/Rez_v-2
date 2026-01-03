import React from 'react';
import { Clock, Users, Trophy, Target, Calendar, ChevronRight, Share2 } from 'lucide-react';

// Contest Details: Individual Contest Page
// Backend API: GET /api/growth/contests/:id
// Backend API: POST /api/growth/contests/:id/enter

const ContestDetails = () => {
  const contest = {
    id: 1,
    title: 'Grand Shopping Spree',
    prize: '₹50,000',
    icon: '🛍️',
    deadline: '5 days left',
    endDate: 'Jan 10, 2026',
    participants: 12500,
    entries: 3,
    maxEntries: 5,
    type: 'Lucky Draw',
    description: 'Win amazing shopping vouchers worth ₹50,000! Enter now for a chance to win.',
    rules: [
      'Must be 18 years or older',
      'Maximum 5 entries per user',
      'Winner announced on Jan 11, 2026',
      'Prize is non-transferable'
    ],
    prizes: [
      { position: '1st Prize', amount: '₹30,000', icon: '🥇' },
      { position: '2nd Prize', amount: '₹15,000', icon: '🥈' },
      { position: '3rd Prize', amount: '₹5,000', icon: '🥉' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header Image */}
      <div className="relative h-64 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
        <div className="text-8xl">{contest.icon}</div>
        <div className="absolute top-4 right-4">
          <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <Share2 className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Contest Info */}
      <div className="px-4 -mt-8">
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{contest.title}</h1>
          <p className="text-gray-600 mb-4">{contest.description}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-purple-50 rounded-lg p-3 text-center">
              <Trophy className="w-5 h-5 text-purple-600 mx-auto mb-1" />
              <p className="font-bold text-gray-800">{contest.prize}</p>
              <p className="text-xs text-gray-600">Prize Pool</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <p className="font-bold text-gray-800">{contest.participants.toLocaleString()}</p>
              <p className="text-xs text-gray-600">Participants</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 text-center">
              <Clock className="w-5 h-5 text-orange-600 mx-auto mb-1" />
              <p className="font-bold text-gray-800">{contest.deadline}</p>
              <p className="text-xs text-gray-600">Remaining</p>
            </div>
          </div>

          {/* Entry Progress */}
          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Your Entries</span>
              <span className="text-sm font-bold text-purple-600">{contest.entries}/{contest.maxEntries}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                style={{ width: `${(contest.entries / contest.maxEntries) * 100}%` }}
              />
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold">
            Enter Contest
          </button>
        </div>
      </div>

      {/* Prize Breakdown */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Prize Breakdown</h2>
        <div className="space-y-2">
          {contest.prizes.map((prize, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
              <div className="text-3xl">{prize.icon}</div>
              <div className="flex-1">
                <p className="font-bold text-gray-800">{prize.position}</p>
              </div>
              <p className="font-bold text-purple-600 text-lg">{prize.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rules */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-bold text-gray-800 mb-3">Rules & Eligibility</h2>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <ul className="space-y-2">
            {contest.rules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                <ChevronRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContestDetails;
