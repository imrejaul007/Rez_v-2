import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Trophy,
  Coins,
  Target,
  TrendingUp,
  Award
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const GuessPrice = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState('start');
  const [currentProduct, setCurrentProduct] = useState(0);
  const [guess, setGuess] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);

  const products = [
    { id: 1, name: 'iPhone 15 Pro', image: '📱', actualPrice: 134900, category: 'Electronics' },
    { id: 2, name: 'Nike Air Max', image: '👟', actualPrice: 12995, category: 'Fashion' },
    { id: 3, name: 'PS5 Console', image: '🎮', actualPrice: 49990, category: 'Gaming' },
    { id: 4, name: 'Starbucks Latte', image: '☕', actualPrice: 320, category: 'Food' },
    { id: 5, name: 'MacBook Air M2', image: '💻', actualPrice: 114900, category: 'Electronics' }
  ];

  const startGame = () => {
    setGameState('playing');
    setCurrentProduct(0);
    setScore(0);
    setGuess('');
    setFeedback(null);
  };

  const submitGuess = () => {
    if (!guess || parseInt(guess) <= 0) return;

    const product = products[currentProduct];
    const guessValue = parseInt(guess);
    const actualPrice = product.actualPrice;
    const difference = Math.abs(guessValue - actualPrice);
    const percentDiff = (difference / actualPrice) * 100;

    let earnedCoins = 0;
    let message = '';

    if (percentDiff <= 5) {
      earnedCoins = 50;
      message = 'Perfect! Within 5%';
    } else if (percentDiff <= 10) {
      earnedCoins = 30;
      message = 'Great! Within 10%';
    } else if (percentDiff <= 20) {
      earnedCoins = 15;
      message = 'Good! Within 20%';
    } else {
      earnedCoins = 5;
      message = 'Try again!';
    }

    setScore(score + earnedCoins);
    setFeedback({
      message,
      earnedCoins,
      actualPrice,
      difference,
      percentDiff: percentDiff.toFixed(1)
    });

    setTimeout(() => {
      if (currentProduct < products.length - 1) {
        setCurrentProduct(currentProduct + 1);
        setGuess('');
        setFeedback(null);
      } else {
        setGameState('result');
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 dark:from-green-500/5 dark:via-blue-500/5 dark:to-purple-500/5 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Guess the Price</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">How well do you know prices?</p>
          </div>
          {gameState === 'playing' && (
            <div className="flex items-center gap-1">
              <Coins className="w-5 h-5 text-emerald-500" />
              <span className="text-h5 font-poppins text-emerald-600 dark:text-emerald-400">{score}</span>
            </div>
          )}
        </div>
      </div>

      {/* Start Screen */}
      {gameState === 'start' && (
        <div className="px-4 py-8 space-y-6">
          <div className="p-6 rounded-rez-xl bg-gradient-to-br from-green-500 to-teal-500 text-white text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-4xl">💰</span>
            </div>
            <h2 className="text-h3 font-poppins mb-2">Guess the Price</h2>
            <p className="text-body-sm opacity-90 mb-4">Guess prices correctly and win coins!</p>
            <div className="p-3 rounded-rez-lg bg-white/10 backdrop-blur-sm">
              <p className="text-h5 font-poppins">Up to 50 coins per guess</p>
              <p className="text-caption opacity-80">Unlimited plays daily</p>
            </div>
          </div>

          <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3">Scoring Rules</h3>
            <div className="space-y-2">
              {[
                { range: 'Within 5%', coins: 50, color: 'text-green-600 dark:text-green-400' },
                { range: 'Within 10%', coins: 30, color: 'text-blue-600 dark:text-blue-400' },
                { range: 'Within 20%', coins: 15, color: 'text-purple-600 dark:text-purple-400' },
                { range: 'Over 20%', coins: 5, color: 'text-orange-600 dark:text-orange-400' }
              ].map((rule, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5">
                  <span className="text-body-sm text-rez-navy dark:text-white">{rule.range}</span>
                  <span className={`text-body-sm font-bold ${rule.color}`}>+{rule.coins} coins</span>
                </div>
              ))}
            </div>
          </div>

          <button onClick={startGame} className="w-full py-4 rounded-rez-xl bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold shadow-rez-card transition-all">
            Start Game
          </button>
        </div>
      )}

      {/* Playing Screen */}
      {gameState === 'playing' && (
        <div className="px-4 py-8 space-y-6">
          <div className="text-center mb-4">
            <span className="text-caption text-rez-gray-600 dark:text-gray-400">Product {currentProduct + 1} of {products.length}</span>
          </div>

          <div className="p-6 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-rez-xl bg-rez-gray-100 dark:bg-white/5 flex items-center justify-center">
                <span className="text-7xl">{products[currentProduct].image}</span>
              </div>
              <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-2">{products[currentProduct].name}</h2>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-xs font-medium text-blue-600 dark:text-blue-400">
                {products[currentProduct].category}
              </span>
            </div>

            {!feedback && (
              <div className="space-y-4">
                <div>
                  <label className="block text-caption text-rez-gray-600 dark:text-gray-400 mb-2">
                    Enter your guess (in ₹)
                  </label>
                  <input
                    type="number"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder="Enter price..."
                    className="w-full px-4 py-3 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 text-rez-navy dark:text-white text-center text-h4 font-poppins focus:outline-none focus:ring-2 focus:ring-green-500/50"
                  />
                </div>
                <button
                  onClick={submitGuess}
                  disabled={!guess || parseInt(guess) <= 0}
                  className="w-full py-3 rounded-rez-lg bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Submit Guess
                </button>
              </div>
            )}

            {feedback && (
              <div className="space-y-4">
                <div className={`p-4 rounded-rez-lg ${
                  feedback.earnedCoins >= 30
                    ? 'bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30'
                    : 'bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/30'
                }`}>
                  <p className={`text-h5 font-poppins ${
                    feedback.earnedCoins >= 30 ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'
                  } mb-2`}>
                    {feedback.message}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <Coins className="w-6 h-6 text-emerald-500" />
                    <span className="text-h4 font-poppins text-emerald-600 dark:text-emerald-400">+{feedback.earnedCoins}</span>
                  </div>
                </div>
                <div className="p-4 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5">
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Actual Price</p>
                  <p className="text-h4 font-poppins text-rez-navy dark:text-white">₹{feedback.actualPrice.toLocaleString()}</p>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-2">You were {feedback.percentDiff}% off</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Result Screen */}
      {gameState === 'result' && (
        <div className="px-4 py-8 space-y-6">
          <div className="p-8 rounded-rez-xl bg-gradient-to-br from-green-500 to-teal-500 text-white text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <Trophy className="w-12 h-12" />
            </div>
            <h2 className="text-h2 font-poppins mb-2">Game Complete!</h2>
            <p className="text-body-sm opacity-90 mb-6">You guessed {products.length} products</p>

            <div className="p-4 rounded-rez-lg bg-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Coins className="w-6 h-6" />
                <span className="text-h2 font-poppins">+{score}</span>
              </div>
              <p className="text-caption opacity-80">Total Coins Earned</p>
            </div>
          </div>

          <div className="space-y-3">
            <button onClick={startGame} className="w-full py-3 rounded-rez-lg bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold transition-all">
              Play Again
            </button>
            <button onClick={() => navigate('/earn')} className="w-full py-3 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white font-semibold hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-all">
              Back to Earn
            </button>
          </div>
        </div>
      )}

      <BottomNavManager />
    </div>
  );
};

export default GuessPrice;
