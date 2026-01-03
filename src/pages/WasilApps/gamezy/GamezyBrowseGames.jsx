import React from 'react';
import { Search, Star, Users, Trophy } from 'lucide-react';

// Gamezy Browse Games
// Backend API: GET /api/wasil/gamezy/games

const GamezyBrowseGames = () => {
  const games = [
    { id: 1, name: 'Cricket Fantasy League', icon: '🏏', players: '1.2M', rating: 4.8, prize: '₹10 Lakhs', coins: 100 },
    { id: 2, name: 'Football Manager', icon: '⚽', players: '890K', rating: 4.7, prize: '₹5 Lakhs', coins: 50 },
    { id: 3, name: 'Rummy Cash', icon: '🎴', players: '2.5M', rating: 4.9, prize: '₹1 Lakh', coins: 20 },
    { id: 4, name: 'Poker Pro', icon: '🃏', players: '560K', rating: 4.6, prize: '₹50K', coins: 30 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Browse Games</h1>
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search games..." className="flex-1 outline-none" />
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {games.map((game) => (
          <div key={game.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center text-4xl">
                {game.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{game.name}</h3>
                <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> {game.players}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {game.rating}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Trophy className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-bold text-yellow-700">Win up to {game.prize}</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg font-medium">
              Play Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamezyBrowseGames;
