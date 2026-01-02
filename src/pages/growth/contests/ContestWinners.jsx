import React from 'react';
import { Trophy, Award, Gift, Calendar, CheckCircle } from 'lucide-react';

// Contest Winners: Winners Announcement
// Backend API: GET /api/growth/contests/:id/winners
// Backend API: GET /api/growth/contests/past-winners

const ContestWinners = () => {
  const currentWinners = [
    { position: '1st Prize', name: '@grandwinner', avatar: '🏆', prize: '₹30,000', date: 'Jan 11, 2026' },
    { position: '2nd Prize', name: '@secondplace', avatar: '🥈', prize: '₹15,000', date: 'Jan 11, 2026' },
    { position: '3rd Prize', name: '@thirdplace', avatar: '🥉', prize: '₹5,000', date: 'Jan 11, 2026' }
  ];

  const pastWinners = [
    { contest: 'Gadget Giveaway', winner: '@techwin', prize: '₹25K', date: 'Dec 2025' },
    { contest: 'Food Fest', winner: '@foodwin', prize: '₹10K', date: 'Nov 2025' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 px-4 pt-6 pb-8">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <Trophy className="w-6 h-6" />
          Contest Winners
        </h1>
        <p className="text-yellow-100 text-sm mt-1">Congratulations to all winners!</p>
      </div>

      {/* Current Winners */}
      <div className="px-4 mt-4">
        <h2 className="font-bold text-gray-800 mb-3">Latest Winners</h2>
        <div className="space-y-3">
          {currentWinners.map((winner, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${
                idx === 0 ? 'from-yellow-400 to-orange-500' : 'from-white to-gray-50'
              } rounded-xl p-4 shadow-lg`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl ${
                  idx === 0 ? 'bg-white/20' : 'bg-gradient-to-br from-purple-100 to-pink-100'
                }`}>
                  {winner.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className={`font-bold text-lg ${idx === 0 ? 'text-white' : 'text-gray-800'}`}>
                      {winner.position}
                    </p>
                    <CheckCircle className={`w-5 h-5 ${idx === 0 ? 'text-white' : 'text-green-600'}`} />
                  </div>
                  <p className={`font-bold ${idx === 0 ? 'text-white' : 'text-gray-800'}`}>
                    {winner.name}
                  </p>
                  <p className={`text-sm ${idx === 0 ? 'text-white/80' : 'text-gray-600'}`}>
                    Won on {winner.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`text-2xl font-bold ${idx === 0 ? 'text-white' : 'text-purple-600'}`}>
                    {winner.prize}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Winners */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-bold text-gray-800 mb-3">Past Winners</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {pastWinners.map((winner, idx) => (
            <div
              key={idx}
              className={`p-4 flex items-center gap-3 ${
                idx !== pastWinners.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <Award className="w-10 h-10 text-yellow-500" />
              <div className="flex-1">
                <p className="font-bold text-gray-800">{winner.contest}</p>
                <p className="text-sm text-gray-600">{winner.winner}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <Calendar className="w-3 h-3" />
                  {winner.date}
                </div>
              </div>
              <p className="font-bold text-green-600">{winner.prize}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContestWinners;
