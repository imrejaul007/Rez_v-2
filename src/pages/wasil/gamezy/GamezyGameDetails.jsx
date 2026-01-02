import React from 'react';
import { ArrowLeft, Users, Trophy, Clock, Star } from 'lucide-react';

// Gamezy Game Details
// Backend API: GET /api/wasil/gamezy/games/:id

const GamezyGameDetails = () => {
  const game = {
    name: 'Cricket Fantasy League',
    players: '1.2M',
    rating: 4.8,
    prize: '₹10 Lakhs',
    entry: 50,
    coins: 100,
    description: 'Create your fantasy cricket team and win real cash prizes',
    features: ['Live matches', 'Daily contests', 'Cash prizes', 'Player statistics']
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-64 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-9xl">
        🏏
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <h1 className="text-xl font-bold text-gray-800">{game.name}</h1>
        <div className="flex items-center gap-4 mt-2">
          <span className="flex items-center gap-1 text-sm">
            <Users className="w-4 h-4" /> {game.players} players
          </span>
          <span className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {game.rating}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <Trophy className="w-5 h-5 text-yellow-600" />
          <span className="font-bold text-yellow-800">Win up to {game.prize}</span>
        </div>
        <p className="text-gray-700 mt-3">{game.description}</p>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Features</h2>
        <div className="grid grid-cols-2 gap-2">
          {game.features.map((feature, idx) => (
            <div key={idx} className="bg-green-50 rounded-lg p-3 text-center">
              <p className="text-sm font-medium text-green-800">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold">
          Join Contest • ₹{game.entry}
        </button>
      </div>
    </div>
  );
};

export default GamezyGameDetails;
