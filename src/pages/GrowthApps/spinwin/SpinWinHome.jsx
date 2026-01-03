import React, { useState } from 'react';
import {
  Star, Gift, ChevronRight, Clock, Zap,
  Award, Target, Sparkles, CircleDollarSign,
  Coins, Trophy, Timer, RotateCw
} from 'lucide-react';

// SpinWin Home: Daily Spin Wheel & Instant Rewards
// Backend API: GET /api/growth/spinwin/home
// Backend API: POST /api/growth/spinwin/spin
// Backend API: GET /api/growth/spinwin/history
// Backend API: GET /api/growth/spinwin/prizes

const SpinWinHome = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const myStats = {
    spinsToday: 2,
    maxSpins: 3,
    totalWins: 45,
    biggestWin: 500,
    coinsWon: 3450
  };

  const wheelPrizes = [
    { id: 1, prize: "₹500", color: "#FFD700", probability: "1%" },
    { id: 2, prize: "₹100", color: "#FF6B6B", probability: "5%" },
    { id: 3, prize: "₹50", color: "#4ECDC4", probability: "10%" },
    { id: 4, prize: "50🪙", color: "#9B59B6", probability: "15%" },
    { id: 5, prize: "₹20", color: "#3498DB", probability: "20%" },
    { id: 6, prize: "20🪙", color: "#E74C3C", probability: "25%" },
    { id: 7, prize: "10🪙", color: "#2ECC71", probability: "20%" },
    { id: 8, prize: "Try Again", color: "#95A5A6", probability: "4%" }
  ];

  const recentWins = [
    { id: 1, user: "Priya M.", prize: "₹500", time: "2 min ago", avatar: "👩" },
    { id: 2, user: "Rahul K.", prize: "₹100", time: "5 min ago", avatar: "👨" },
    { id: 3, user: "Sneha R.", prize: "50🪙", time: "8 min ago", avatar: "👩‍💼" },
    { id: 4, user: "Amit S.", prize: "₹50", time: "12 min ago", avatar: "👨‍💻" }
  ];

  const bonusSpins = [
    { id: 1, action: "Daily Login", spins: 1, status: "claimed" },
    { id: 2, action: "Place an Order", spins: 1, status: "available" },
    { id: 3, action: "Refer a Friend", spins: 2, status: "locked" },
    { id: 4, action: "Watch Ads (3)", spins: 1, status: "available" }
  ];

  const jackpotProgress = {
    current: 12500,
    target: 25000,
    nextDraw: "2h 15m"
  };

  const myHistory = [
    { id: 1, prize: "₹50", date: "Today, 2:30 PM", status: "credited" },
    { id: 2, prize: "20🪙", date: "Today, 10:15 AM", status: "credited" },
    { id: 3, prize: "₹100", date: "Yesterday", status: "credited" },
    { id: 4, prize: "10🪙", date: "2 days ago", status: "credited" }
  ];

  const handleSpin = () => {
    if (myStats.spinsToday >= myStats.maxSpins) return;
    setIsSpinning(true);
    const newRotation = rotation + 1800 + Math.random() * 360;
    setRotation(newRotation);
    setTimeout(() => setIsSpinning(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pb-24">
      {/* Header */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <h1 className="text-xl font-bold text-white">SpinWin</h1>
            </div>
            <p className="text-purple-300 text-sm">Spin. Win. Celebrate!</p>
          </div>
          <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="text-lg">🪙</span>
            <span className="text-white font-bold">{myStats.coinsWon.toLocaleString()}</span>
          </div>
        </div>

        {/* Spins Left */}
        <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-purple-200 text-sm">Spins Remaining</p>
            <p className="text-3xl font-bold text-white">
              {myStats.maxSpins - myStats.spinsToday} / {myStats.maxSpins}
            </p>
          </div>
          <div className="text-right">
            <p className="text-purple-200 text-sm">Total Wins</p>
            <p className="text-2xl font-bold text-yellow-400">{myStats.totalWins}</p>
          </div>
        </div>
      </div>

      {/* Spin Wheel */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl p-6 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full" />
            <div className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full" />
            <div className="absolute bottom-4 left-8 w-4 h-4 bg-white rounded-full" />
            <div className="absolute bottom-4 right-8 w-5 h-5 bg-white rounded-full" />
          </div>

          {/* Wheel Container */}
          <div className="relative w-64 h-64 mx-auto">
            {/* Wheel */}
            <div
              className={`w-full h-full rounded-full border-8 border-yellow-300 shadow-2xl relative ${
                isSpinning ? 'transition-transform duration-[4000ms] ease-out' : ''
              }`}
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {wheelPrizes.map((prize, idx) => (
                <div
                  key={prize.id}
                  className="absolute w-full h-full"
                  style={{
                    transform: `rotate(${idx * 45}deg)`,
                    clipPath: 'polygon(50% 50%, 50% 0%, 85.36% 14.64%)'
                  }}
                >
                  <div
                    className="w-full h-full flex items-start justify-center pt-4"
                    style={{ backgroundColor: prize.color }}
                  >
                    <span className="text-white font-bold text-xs transform rotate-[22.5deg]">
                      {prize.prize}
                    </span>
                  </div>
                </div>
              ))}
              {/* Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full border-4 border-yellow-300 flex items-center justify-center z-10">
                <span className="text-2xl">🎰</span>
              </div>
            </div>

            {/* Pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-20">
              <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-purple-800" />
            </div>
          </div>

          {/* Spin Button */}
          <button
            onClick={handleSpin}
            disabled={isSpinning || myStats.spinsToday >= myStats.maxSpins}
            className={`mt-6 w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 ${
              isSpinning || myStats.spinsToday >= myStats.maxSpins
                ? 'bg-gray-400 text-gray-600'
                : 'bg-purple-800 text-white shadow-lg'
            }`}
          >
            {isSpinning ? (
              <>
                <RotateCw className="w-5 h-5 animate-spin" />
                Spinning...
              </>
            ) : myStats.spinsToday >= myStats.maxSpins ? (
              'No Spins Left'
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                SPIN NOW!
              </>
            )}
          </button>
        </div>
      </div>

      {/* Jackpot Progress */}
      <div className="px-4 mt-6">
        <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-yellow-900 font-bold flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Jackpot Pool
            </h3>
            <div className="flex items-center gap-1 text-yellow-900">
              <Timer className="w-4 h-4" />
              <span className="text-sm font-medium">{jackpotProgress.nextDraw}</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-yellow-900">₹{jackpotProgress.current.toLocaleString()}</p>
          <div className="mt-2">
            <div className="h-2 bg-yellow-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-900 rounded-full"
                style={{ width: `${(jackpotProgress.current / jackpotProgress.target) * 100}%` }}
              />
            </div>
            <p className="text-xs text-yellow-800 mt-1">
              ₹{jackpotProgress.target.toLocaleString()} to unlock mega jackpot!
            </p>
          </div>
        </div>
      </div>

      {/* Bonus Spins */}
      <div className="px-4 mt-6">
        <h2 className="text-white font-bold mb-3">Earn More Spins</h2>
        <div className="grid grid-cols-2 gap-3">
          {bonusSpins.map((bonus) => (
            <div key={bonus.id} className={`rounded-xl p-4 ${
              bonus.status === 'claimed'
                ? 'bg-green-500/20 border border-green-500/30'
                : bonus.status === 'available'
                ? 'bg-white/10 border border-white/20'
                : 'bg-white/5 border border-white/10'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-yellow-400 font-bold">+{bonus.spins} Spin</span>
                {bonus.status === 'claimed' && <span className="text-green-400 text-xs">✓ Done</span>}
                {bonus.status === 'locked' && <span className="text-gray-400 text-xs">🔒</span>}
              </div>
              <p className="text-white text-sm">{bonus.action}</p>
              {bonus.status === 'available' && (
                <button className="mt-2 w-full bg-purple-600 text-white py-1.5 rounded-lg text-xs font-medium">
                  Claim
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Live Wins */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Live Wins
          </h2>
        </div>

        <div className="bg-white/10 rounded-xl overflow-hidden">
          {recentWins.map((win, idx) => (
            <div key={win.id} className={`p-3 flex items-center gap-3 ${
              idx !== recentWins.length - 1 ? 'border-b border-white/10' : ''
            }`}>
              <span className="text-2xl">{win.avatar}</span>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{win.user}</p>
                <p className="text-purple-300 text-xs">{win.time}</p>
              </div>
              <span className="text-yellow-400 font-bold">{win.prize}</span>
            </div>
          ))}
        </div>
      </div>

      {/* My History */}
      <div className="px-4 mt-6 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-bold">My Wins</h2>
          <button className="text-purple-300 text-sm">View All</button>
        </div>

        <div className="bg-white/10 rounded-xl overflow-hidden">
          {myHistory.map((item, idx) => (
            <div key={item.id} className={`p-3 flex items-center justify-between ${
              idx !== myHistory.length - 1 ? 'border-b border-white/10' : ''
            }`}>
              <div>
                <p className="text-white font-medium">{item.prize}</p>
                <p className="text-purple-300 text-xs">{item.date}</p>
              </div>
              <span className="text-green-400 text-xs">✓ {item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpinWinHome;
