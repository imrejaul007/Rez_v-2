import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Coins, Target, Trophy } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CoinHunt = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameStarted(false);
    }
  }, [gameStarted, timeLeft]);

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        const newCoin = {
          id: Date.now(),
          x: Math.random() * 80 + 10,
          y: Math.random() * 60 + 10,
          value: [5, 10, 15, 25][Math.floor(Math.random() * 4)]
        };
        setCoins(prev => [...prev, newCoin]);
        setTimeout(() => {
          setCoins(prev => prev.filter(c => c.id !== newCoin.id));
        }, 2000);
      }, 800);
      return () => clearInterval(interval);
    }
  }, [gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimeLeft(30);
    setCoins([]);
  };

  const catchCoin = (coin) => {
    setScore(prev => prev + coin.value);
    setCoins(prev => prev.filter(c => c.id !== coin.id));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass px-4 py-3">
        <div className="flex items-center gap-3">
          <Link to="/earn" className="p-2 rounded-full hover:bg-white/10 active:scale-95 transition-all">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </Link>
          <div>
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">🪙 Coin Hunt</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Catch falling coins!</p>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="px-4 py-6">
        {/* Score & Timer */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20">
            <Coins className="w-5 h-5 text-amber-400" />
            <span className="text-h4 font-bold text-amber-400">{score}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20">
            <Target className="w-5 h-5 text-blue-400" />
            <span className="text-h4 font-bold text-blue-400">{timeLeft}s</span>
          </div>
        </div>

        {/* Game Container */}
        {!gameStarted && timeLeft === 30 ? (
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 flex flex-col items-center justify-center gap-6">
            <Trophy className="w-20 h-20 text-purple-400" />
            <div className="text-center">
              <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-2">Ready to Hunt?</h2>
              <p className="text-body text-rez-gray-600 dark:text-gray-400 mb-6">
                Tap coins before they disappear!<br/>
                You have 30 seconds
              </p>
            </div>
            <button
              onClick={startGame}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg active:scale-95 transition-transform"
            >
              Start Game
            </button>
          </div>
        ) : (
          <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/20 overflow-hidden">
            {gameStarted && coins.map(coin => (
              <button
                key={coin.id}
                onClick={() => catchCoin(coin)}
                className="absolute animate-bounce"
                style={{ left: `${coin.x}%`, top: `${coin.y}%` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">+{coin.value}</span>
                </div>
              </button>
            ))}
            {timeLeft === 0 && (
              <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-4">
                <Trophy className="w-16 h-16 text-amber-400" />
                <h3 className="text-h3 font-poppins text-white">Game Over!</h3>
                <p className="text-h4 text-amber-400">You earned {score} coins</p>
                <button
                  onClick={startGame}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold"
                >
                  Play Again
                </button>
              </div>
            )}
          </div>
        )}

        {/* Info */}
        <div className="mt-6 p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5">
          <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-2">How to play:</h3>
          <ul className="text-sm text-rez-gray-600 dark:text-gray-400 space-y-1">
            <li>• Tap coins before they disappear</li>
            <li>• Each coin is worth 5-25 points</li>
            <li>• Play unlimited times per day</li>
            <li>• Earn bonus multipliers for streaks</li>
          </ul>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CoinHunt;
