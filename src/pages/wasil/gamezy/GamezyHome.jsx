import React, { useState } from 'react';
import {
  Search, Star, Clock, ChevronRight, Timer,
  Gamepad2, Trophy, Users, Zap, Gift, Crown,
  Target, Flame, Medal, Coins, Play, Wifi
} from 'lucide-react';

// Gamezy Home: Gaming & Esports Platform
// Backend API: GET /api/wasil/gamezy/home
// Backend API: GET /api/wasil/gamezy/tournaments
// Backend API: GET /api/wasil/gamezy/games
// Backend API: POST /api/wasil/gamezy/join

const GamezyHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '🎮', color: 'bg-purple-600' },
    { id: 'action', name: 'Action', icon: '💥', color: 'bg-red-500' },
    { id: 'sports', name: 'Sports', icon: '⚽', color: 'bg-green-500' },
    { id: 'racing', name: 'Racing', icon: '🏎️', color: 'bg-blue-500' },
    { id: 'strategy', name: 'Strategy', icon: '♟️', color: 'bg-amber-500' },
    { id: 'casual', name: 'Casual', icon: '🎯', color: 'bg-pink-500' },
    { id: 'fantasy', name: 'Fantasy', icon: '🏏', color: 'bg-cyan-500' }
  ];

  const myProfile = {
    username: "ProGamer_99",
    level: 42,
    xp: 8500,
    coins: 15600,
    wins: 234,
    rank: "Diamond"
  };

  const liveTournaments = [
    {
      id: 1,
      name: "BGMI Pro League",
      game: "Battlegrounds Mobile",
      image: "🔫",
      prizePool: 100000,
      entryFee: 50,
      players: 890,
      maxPlayers: 1000,
      startsIn: "2:30:00",
      coins: 500
    },
    {
      id: 2,
      name: "FIFA Masters Cup",
      game: "EA FC 25",
      image: "⚽",
      prizePool: 50000,
      entryFee: 25,
      players: 456,
      maxPlayers: 512,
      startsIn: "1:15:00",
      coins: 250
    }
  ];

  const popularGames = [
    { id: 1, name: "BGMI", icon: "🔫", players: "12.5M", rating: 4.8 },
    { id: 2, name: "Free Fire", icon: "🔥", players: "8.2M", rating: 4.6 },
    { id: 3, name: "COD Mobile", icon: "🎯", players: "5.8M", rating: 4.7 },
    { id: 4, name: "Ludo King", icon: "🎲", players: "15M", rating: 4.5 },
    { id: 5, name: "Clash Royale", icon: "👑", players: "4.2M", rating: 4.4 }
  ];

  const dailyChallenges = [
    { id: 1, name: "Win 3 Matches", progress: 2, total: 3, reward: 100, xp: 50 },
    { id: 2, name: "Play 5 Games", progress: 3, total: 5, reward: 50, xp: 25 },
    { id: 3, name: "Invite a Friend", progress: 0, total: 1, reward: 200, xp: 100 }
  ];

  const leaderboard = [
    { rank: 1, name: "ShadowKing", score: 98500, avatar: "👑" },
    { rank: 2, name: "NightHawk", score: 87200, avatar: "🦅" },
    { rank: 3, name: "StormBreaker", score: 82100, avatar: "⚡" },
    { rank: 4, name: "ProGamer_99", score: 76800, avatar: "🎮", isMe: true }
  ];

  const rewards = [
    { id: 1, name: "Daily Login", coins: 50, claimed: true },
    { id: 2, name: "Watch Ad", coins: 25, claimed: false },
    { id: 3, name: "Share Game", coins: 100, claimed: false }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
              🎮
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">{myProfile.username}</h1>
              <div className="flex items-center gap-2">
                <span className="text-purple-200 text-xs">Level {myProfile.level}</span>
                <span className="bg-amber-400 text-amber-900 text-xs px-2 py-0.5 rounded-full font-bold">
                  {myProfile.rank}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="text-lg">🪙</span>
              <span className="text-white font-bold">{myProfile.coins.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* XP Progress */}
        <div className="bg-white/10 rounded-xl p-3">
          <div className="flex items-center justify-between text-white/80 text-sm mb-1">
            <span>Level {myProfile.level}</span>
            <span>Level {myProfile.level + 1}</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" style={{ width: '65%' }} />
          </div>
          <p className="text-white/60 text-xs mt-1">{myProfile.xp} / 10,000 XP</p>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-4">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center gap-2 min-w-[70px] ${
                activeCategory === cat.id ? 'opacity-100' : 'opacity-60'
              }`}
            >
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-2xl ${
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-purple-400' : ''
              }`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-400 font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Live Tournaments */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            Live Tournaments
          </h2>
          <button className="text-purple-400 text-sm">View All</button>
        </div>

        <div className="space-y-3">
          {liveTournaments.map((tournament) => (
            <div key={tournament.id} className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center text-3xl">
                      {tournament.image}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{tournament.name}</h3>
                      <p className="text-gray-400 text-sm">{tournament.game}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-red-500/20 px-2 py-1 rounded-full">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-red-400 text-xs">LIVE</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <p className="text-gray-500 text-xs">Prize Pool</p>
                    <p className="text-yellow-400 font-bold">₹{tournament.prizePool.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Entry Fee</p>
                    <p className="text-white font-bold">₹{tournament.entryFee}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Starts In</p>
                    <p className="text-orange-400 font-bold">{tournament.startsIn}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <div className="h-2 w-32 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full"
                        style={{ width: `${(tournament.players / tournament.maxPlayers) * 100}%` }}
                      />
                    </div>
                    <p className="text-gray-500 text-xs mt-1">{tournament.players}/{tournament.maxPlayers} joined</p>
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl font-bold text-sm">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Challenges */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-green-400" />
            Daily Challenges
          </h2>
        </div>

        <div className="space-y-2">
          {dailyChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-gray-800 rounded-xl p-4 flex items-center gap-4">
              <div className="flex-1">
                <h3 className="font-medium text-white text-sm">{challenge.name}</h3>
                <div className="h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                  />
                </div>
                <p className="text-gray-500 text-xs mt-1">{challenge.progress}/{challenge.total}</p>
              </div>
              <div className="text-right">
                <p className="text-yellow-400 font-bold">+{challenge.reward}🪙</p>
                <p className="text-purple-400 text-xs">+{challenge.xp} XP</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Games */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-white mb-3">Popular Games</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {popularGames.map((game) => (
            <button key={game.id} className="flex-shrink-0 w-28 bg-gray-800 rounded-xl p-4 text-center">
              <span className="text-4xl">{game.icon}</span>
              <h3 className="font-medium text-white text-sm mt-2">{game.name}</h3>
              <p className="text-gray-500 text-xs">{game.players}</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-yellow-400 text-xs">{game.rating}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-white flex items-center gap-2">
            <Crown className="w-5 h-5 text-yellow-400" />
            Leaderboard
          </h2>
          <button className="text-purple-400 text-sm">Full List</button>
        </div>

        <div className="bg-gray-800 rounded-xl overflow-hidden">
          {leaderboard.map((player, idx) => (
            <div key={player.rank} className={`p-4 flex items-center gap-3 ${
              idx !== leaderboard.length - 1 ? 'border-b border-gray-700' : ''
            } ${player.isMe ? 'bg-purple-500/20' : ''}`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                player.rank === 1 ? 'bg-yellow-500 text-yellow-900' :
                player.rank === 2 ? 'bg-gray-400 text-gray-800' :
                player.rank === 3 ? 'bg-amber-600 text-amber-100' :
                'bg-gray-700 text-gray-300'
              }`}>
                {player.rank}
              </span>
              <span className="text-2xl">{player.avatar}</span>
              <div className="flex-1">
                <h3 className={`font-medium text-sm ${player.isMe ? 'text-purple-300' : 'text-white'}`}>
                  {player.name} {player.isMe && '(You)'}
                </h3>
              </div>
              <span className="text-yellow-400 font-bold">{player.score.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Free Rewards */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">Free Daily Rewards</h3>
              <p className="text-purple-200 text-sm">Claim your bonus coins!</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamezyHome;
