import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Coins, Zap, Gift, TrendingUp, Clock, Star } from 'lucide-react';

const prizes = [
  { id: 1, label: '₹10', value: 10, color: 'bg-emerald-500', probability: 0.3 },
  { id: 2, label: '₹25', value: 25, color: 'bg-blue-500', probability: 0.25 },
  { id: 3, label: '₹50', value: 50, color: 'bg-purple-500', probability: 0.2 },
  { id: 4, label: '₹5', value: 5, color: 'bg-amber-500', probability: 0.15 },
  { id: 5, label: '₹100', value: 100, color: 'bg-pink-500', probability: 0.05 },
  { id: 6, label: '₹15', value: 15, color: 'bg-orange-500', probability: 0.05 },
];

const SpinWinPage = () => {
  const navigate = useNavigate();
  const [spinning, setSpinning] = useState(false);
  const [wonPrize, setWonPrize] = useState(null);
  const [spinsLeft, setSpinsLeft] = useState(3);
  const [totalWon, setTotalWon] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    if (spinsLeft <= 0 || spinning) return;

    setSpinning(true);
    setWonPrize(null);

    // Random prize selection weighted by probability
    const random = Math.random();
    let cumulativeProbability = 0;
    let selectedPrize = prizes[0];

    for (const prize of prizes) {
      cumulativeProbability += prize.probability;
      if (random <= cumulativeProbability) {
        selectedPrize = prize;
        break;
      }
    }

    // Calculate rotation (multiple full spins + prize position)
    const prizeIndex = prizes.findIndex(p => p.id === selectedPrize.id);
    const degreesPerSlice = 360 / prizes.length;
    const prizeAngle = prizeIndex * degreesPerSlice;
    const fullSpins = 5;
    const newRotation = rotation + (fullSpins * 360) + (360 - prizeAngle);

    setRotation(newRotation);

    setTimeout(() => {
      setSpinning(false);
      setWonPrize(selectedPrize);
      setSpinsLeft(prev => prev - 1);
      setTotalWon(prev => prev + selectedPrize.value);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-rez-gray-200 dark:border-white/10">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-h3 font-poppins text-rez-navy dark:text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                Spin & Win
              </h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                Spin daily to earn ReZ Coins
              </p>
            </div>
            <div className="px-3 py-1.5 bg-amber-500/20 rounded-full flex items-center gap-1">
              <Coins className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-bold text-rez-navy dark:text-white">
                ₹{totalWon}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-center">
            <Zap className="w-5 h-5 text-blue-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">{spinsLeft}</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Spins left</p>
          </div>
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
            <TrendingUp className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">₹{totalWon}</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Won today</p>
          </div>
          <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-center">
            <Clock className="w-5 h-5 text-purple-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">3</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Resets in</p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-white" />
            <h3 className="text-sm font-bold text-white">Daily Free Spins</h3>
          </div>
          <p className="text-xs text-white/90">
            Get 3 free spins every day! Win up to ₹100 in ReZ Coins instantly.
          </p>
        </div>
      </div>

      {/* Spin Wheel */}
      <div className="px-4 mb-6">
        <div className="relative aspect-square max-w-sm mx-auto">
          {/* Wheel Container */}
          <div className="absolute inset-0 rounded-full bg-white dark:bg-white/10 border-8 border-rez-gray-200 dark:border-white/20 shadow-2xl overflow-hidden">
            {/* Wheel */}
            <div
              className="absolute inset-0 transition-transform duration-[4000ms] ease-out"
              style={{
                transform: `rotate(${rotation}deg)`,
                transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
              }}
            >
              {prizes.map((prize, index) => {
                const rotation = (360 / prizes.length) * index;
                return (
                  <div
                    key={prize.id}
                    className={`absolute inset-0 ${prize.color}`}
                    style={{
                      clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.sin((rotation + 60) * Math.PI / 180)}% ${50 - 50 * Math.cos((rotation + 60) * Math.PI / 180)}%)`,
                      transform: `rotate(${rotation}deg)`,
                      transformOrigin: 'center'
                    }}
                  >
                    <div
                      className="absolute top-12 left-1/2 -translate-x-1/2 text-white font-bold text-lg"
                      style={{ transform: 'rotate(30deg)' }}
                    >
                      {prize.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center Button */}
          <button
            onClick={handleSpin}
            disabled={spinning || spinsLeft <= 0}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full ${
              spinning || spinsLeft <= 0
                ? 'bg-rez-gray-400 cursor-not-allowed'
                : 'bg-rez-green-500 hover:bg-rez-green-600 active:scale-95'
            } text-white font-bold text-sm shadow-xl transition-all z-10 flex items-center justify-center`}
          >
            {spinning ? (
              <Zap className="w-6 h-6 animate-pulse" />
            ) : spinsLeft > 0 ? (
              'SPIN'
            ) : (
              'Done'
            )}
          </button>

          {/* Pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20">
            <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[25px] border-l-transparent border-r-transparent border-t-red-500 drop-shadow-lg" />
          </div>
        </div>
      </div>

      {/* Result */}
      {wonPrize && (
        <div className="px-4 mb-6">
          <div className="p-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl text-center animate-bounce">
            <Star className="w-12 h-12 text-white mx-auto mb-3 fill-white" />
            <h3 className="text-2xl font-bold text-white mb-2">
              You Won {wonPrize.label}!
            </h3>
            <p className="text-white/90 text-sm">
              ReZ Coins added to your wallet
            </p>
          </div>
        </div>
      )}

      {/* Prize Table */}
      <div className="px-4">
        <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
          Prize Distribution
        </h3>
        <div className="space-y-2">
          {prizes.map((prize) => (
            <div
              key={prize.id}
              className="flex items-center justify-between p-3 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${prize.color} rounded-lg`} />
                <span className="text-sm font-semibold text-rez-navy dark:text-white">
                  {prize.label}
                </span>
              </div>
              <span className="text-xs text-rez-gray-600 dark:text-gray-400">
                {(prize.probability * 100).toFixed(0)}% chance
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* How to Get More Spins */}
      <div className="px-4 py-6">
        <div className="p-4 bg-rez-gray-50 dark:bg-white/5 rounded-2xl">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
            Get More Spins
          </h3>
          <div className="space-y-2 text-sm text-rez-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-rez-green-500 mt-1.5" />
              <p>Make a purchase to earn 1 bonus spin</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-rez-green-500 mt-1.5" />
              <p>Invite a friend to get 5 spins instantly</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-rez-green-500 mt-1.5" />
              <p>Complete daily check-in for extra spins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinWinPage;
