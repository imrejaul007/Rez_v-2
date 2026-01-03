import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Trophy,
  Coins,
  Gift,
  Sparkles,
  Zap,
  Star
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const LuckyDraw = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState('start'); // start, spinning, result
  const [spinning, setSpinning] = useState(false);
  const [prize, setPrize] = useState(null);
  const [todayPlays, setTodayPlays] = useState(0);
  const maxPlays = 1;

  const prizes = [
    { id: 1, name: '1000 Coins', value: 1000, icon: '💰', chance: 5, color: 'from-amber-500 to-yellow-500' },
    { id: 2, name: '500 Coins', value: 500, icon: '🪙', chance: 10, color: 'from-emerald-500 to-green-500' },
    { id: 3, name: '250 Coins', value: 250, icon: '💵', chance: 20, color: 'from-blue-500 to-cyan-500' },
    { id: 4, name: '100 Coins', value: 100, icon: '💳', chance: 30, color: 'from-purple-500 to-pink-500' },
    { id: 5, name: '50 Coins', value: 50, icon: '🎁', chance: 35, color: 'from-orange-500 to-red-500' }
  ];

  const spin = () => {
    if (todayPlays >= maxPlays || spinning) return;

    setSpinning(true);
    setGameState('spinning');

    // Simulate spinning for 3 seconds
    setTimeout(() => {
      const random = Math.random() * 100;
      let cumulative = 0;
      let wonPrize = prizes[prizes.length - 1];

      for (const p of prizes) {
        cumulative += p.chance;
        if (random <= cumulative) {
          wonPrize = p;
          break;
        }
      }

      setPrize(wonPrize);
      setSpinning(false);
      setGameState('result');
      setTodayPlays(todayPlays + 1);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 dark:from-amber-500/5 dark:via-orange-500/5 dark:to-red-500/5 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Lucky Draw</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Spin once daily, win big!</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-8 space-y-6">
        {/* Hero */}
        <div className="p-6 rounded-rez-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-4xl">🎰</span>
          </div>
          <h2 className="text-h3 font-poppins mb-2">Daily Lucky Draw</h2>
          <p className="text-body-sm opacity-90 mb-4">One free spin every day!</p>
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <p className="text-h4 font-poppins">1000</p>
              <p className="text-caption opacity-80">Max Prize</p>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <p className="text-h4 font-poppins">{todayPlays}/{maxPlays}</p>
              <p className="text-caption opacity-80">Spins Left</p>
            </div>
          </div>
        </div>

        {/* Wheel */}
        {gameState !== 'result' && (
          <div className="relative">
            <div className={`w-full aspect-square rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-500/20 dark:to-orange-500/20 border-8 border-white dark:border-white/10 shadow-rez-card flex items-center justify-center ${spinning ? 'animate-spin' : ''}`}>
              <div className="text-center">
                <span className="text-6xl">🎰</span>
                {!spinning && (
                  <p className="text-h5 font-poppins text-rez-navy dark:text-white mt-2">
                    Tap to Spin!
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={spin}
              disabled={todayPlays >= maxPlays || spinning}
              className={`absolute inset-0 w-full h-full rounded-full ${
                todayPlays >= maxPlays || spinning ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            />
          </div>
        )}

        {/* Result */}
        {gameState === 'result' && prize && (
          <div className="space-y-6">
            <div className={`p-8 rounded-rez-xl bg-gradient-to-br ${prize.color} text-white text-center`}>
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-5xl">{prize.icon}</span>
              </div>
              <h2 className="text-h2 font-poppins mb-2">Congratulations!</h2>
              <p className="text-h3 font-poppins mb-2">You Won!</p>
              <div className="p-4 rounded-rez-lg bg-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2">
                  <Coins className="w-8 h-8" />
                  <span className="text-h1 font-poppins">+{prize.value}</span>
                </div>
              </div>
            </div>

            <button onClick={() => navigate('/earn')} className="w-full py-3 rounded-rez-lg bg-white dark:bg-bg-card text-rez-navy dark:text-white font-semibold hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-all border border-rez-gray-200 dark:border-white/10">
              Back to Earn
            </button>
          </div>
        )}

        {/* Prize Table */}
        {gameState === 'start' && (
          <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3">Possible Prizes</h3>
            <div className="space-y-2">
              {prizes.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-3 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{p.icon}</span>
                    <span className="text-body-sm font-medium text-rez-navy dark:text-white">{p.name}</span>
                  </div>
                  <span className="text-caption text-rez-gray-600 dark:text-gray-400">{p.chance}% chance</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Spin Button */}
        {gameState === 'start' && (
          <button
            onClick={spin}
            disabled={todayPlays >= maxPlays}
            className={`w-full py-4 rounded-rez-xl font-bold text-white transition-all ${
              todayPlays >= maxPlays
                ? 'bg-rez-gray-300 dark:bg-white/10 cursor-not-allowed'
                : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-rez-card'
            }`}
          >
            {todayPlays >= maxPlays ? 'Come Back Tomorrow' : 'Spin Now!'}
          </button>
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default LuckyDraw;
