import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Trophy,
  Clock,
  Coins,
  Award,
  Star,
  Zap,
  RotateCcw
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const MemoryMatch = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState('start'); // start, playing, result
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [todayPlays, setTodayPlays] = useState(1);
  const maxPlays = 3;

  const cardEmojis = ['🛍️', '💳', '🎁', '⭐', '💰', '🏪', '🎯', '🔥'];

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameState === 'playing') {
      endGame();
    }
  }, [timeLeft, gameState]);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first].emoji === cards[second].emoji) {
        setMatched([...matched, cards[first].emoji]);
        setFlipped([]);
        setScore(score + 25);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
      setMoves(moves + 1);
    }
  }, [flipped]);

  useEffect(() => {
    if (matched.length === cardEmojis.length && gameState === 'playing') {
      endGame();
    }
  }, [matched]);

  const initializeGame = () => {
    const shuffled = [...cardEmojis, ...cardEmojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji }));
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setTimeLeft(60);
    setScore(0);
    setGameState('playing');
  };

  const handleCardClick = (index) => {
    if (
      flipped.length === 2 ||
      flipped.includes(index) ||
      matched.includes(cards[index].emoji)
    ) {
      return;
    }
    setFlipped([...flipped, index]);
  };

  const endGame = () => {
    setGameState('result');
    setTodayPlays(todayPlays + 1);

    // Calculate bonus
    let bonus = 0;
    if (matched.length === cardEmojis.length) {
      bonus = 50; // Completion bonus
      if (timeLeft > 40) bonus += 25; // Speed bonus
      if (moves <= 12) bonus += 25; // Efficiency bonus
    }
    setScore(score + bonus);
  };

  const getPerformanceRating = () => {
    if (matched.length === cardEmojis.length && timeLeft > 40 && moves <= 12) return 'Perfect!';
    if (matched.length === cardEmojis.length && timeLeft > 30) return 'Excellent!';
    if (matched.length === cardEmojis.length) return 'Good!';
    if (matched.length >= 5) return 'Not Bad';
    return 'Try Again';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Memory Match</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Match all cards to win</p>
          </div>
          {gameState === 'playing' && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30">
              <Clock className="w-4 h-4 text-orange-500" />
              <span className="text-body-sm font-bold text-orange-600 dark:text-orange-400">{timeLeft}s</span>
            </div>
          )}
        </div>
      </div>

      {/* Start Screen */}
      {gameState === 'start' && (
        <div className="px-4 py-8 space-y-6">
          {/* Hero */}
          <div className="p-6 rounded-rez-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-4xl">🃏</span>
            </div>
            <h2 className="text-h3 font-poppins mb-2">Memory Match</h2>
            <p className="text-body-sm opacity-90 mb-4">Match all card pairs within 60 seconds!</p>
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-h4 font-poppins">150</p>
                <p className="text-caption opacity-80">Max Coins</p>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div className="text-center">
                <p className="text-h4 font-poppins">{todayPlays}/{maxPlays}</p>
                <p className="text-caption opacity-80">Plays Left</p>
              </div>
            </div>
          </div>

          {/* How to Play */}
          <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3">How to Play</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <span className="text-caption font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-body-sm text-rez-navy dark:text-white font-medium">Tap cards to flip them</p>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">Find matching pairs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                  <span className="text-caption font-bold text-purple-600 dark:text-purple-400">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-body-sm text-rez-navy dark:text-white font-medium">Match all 8 pairs</p>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">25 coins per match</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <span className="text-caption font-bold text-amber-600 dark:text-amber-400">3</span>
                </div>
                <div className="flex-1">
                  <p className="text-body-sm text-rez-navy dark:text-white font-medium">Get bonuses</p>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">Complete in 60s: +50 | Speed: +25 | Efficiency: +25</p>
                </div>
              </div>
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={initializeGame}
            disabled={todayPlays >= maxPlays}
            className={`w-full py-4 rounded-rez-xl font-bold text-white transition-all ${
              todayPlays >= maxPlays
                ? 'bg-rez-gray-300 dark:bg-white/10 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-rez-card'
            }`}
          >
            {todayPlays >= maxPlays ? 'Come Back Tomorrow' : 'Start Game'}
          </button>
        </div>
      )}

      {/* Playing Screen */}
      {gameState === 'playing' && (
        <div className="px-4 py-6 space-y-6">
          {/* Game Stats */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">Moves</p>
                <p className="text-h5 font-poppins text-rez-navy dark:text-white">{moves}</p>
              </div>
              <div className="text-center">
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">Matched</p>
                <p className="text-h5 font-poppins text-rez-navy dark:text-white">{matched.length}/8</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Coins className="w-5 h-5 text-emerald-500" />
              <span className="text-h5 font-poppins text-emerald-600 dark:text-emerald-400">{score}</span>
            </div>
          </div>

          {/* Game Board */}
          <div className="grid grid-cols-4 gap-3">
            {cards.map((card, index) => {
              const isFlipped = flipped.includes(index) || matched.includes(card.emoji);
              return (
                <button
                  key={card.id}
                  onClick={() => handleCardClick(index)}
                  disabled={isFlipped}
                  className="aspect-square"
                >
                  <div className={`w-full h-full rounded-rez-lg transition-all duration-300 ${
                    isFlipped
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                      : 'bg-rez-gray-200 dark:bg-white/10 hover:bg-rez-gray-300 dark:hover:bg-white/20'
                  } flex items-center justify-center text-3xl shadow-rez-card`}>
                    {isFlipped ? card.emoji : '?'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Time Progress Bar */}
          <div className="h-2 bg-rez-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
              style={{ width: `${(timeLeft / 60) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Result Screen */}
      {gameState === 'result' && (
        <div className="px-4 py-8 space-y-6">
          {/* Result Card */}
          <div className="p-8 rounded-rez-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              {matched.length === cardEmojis.length ? (
                <Trophy className="w-12 h-12" />
              ) : (
                <RotateCcw className="w-12 h-12" />
              )}
            </div>
            <h2 className="text-h2 font-poppins mb-2">{getPerformanceRating()}</h2>
            <p className="text-body-sm opacity-90 mb-6">
              You matched {matched.length} out of {cardEmojis.length} pairs
            </p>

            <div className="p-4 rounded-rez-lg bg-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Coins className="w-6 h-6" />
                <span className="text-h2 font-poppins">+{score}</span>
              </div>
              <p className="text-caption opacity-80">Total Coins Earned</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center">
              <Zap className="w-6 h-6 mx-auto mb-2 text-amber-500" />
              <p className="text-h5 font-poppins text-rez-navy dark:text-white">{moves}</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Moves</p>
            </div>
            <div className="p-4 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <p className="text-h5 font-poppins text-rez-navy dark:text-white">{60 - timeLeft}s</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Time Used</p>
            </div>
            <div className="p-4 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center">
              <Star className="w-6 h-6 mx-auto mb-2 text-purple-500" />
              <p className="text-h5 font-poppins text-rez-navy dark:text-white">{matched.length}/{cardEmojis.length}</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Matched</p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={initializeGame}
              disabled={todayPlays >= maxPlays}
              className={`w-full py-3 rounded-rez-lg font-semibold transition-all ${
                todayPlays >= maxPlays
                  ? 'bg-rez-gray-200 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
              }`}
            >
              {todayPlays >= maxPlays ? `No Plays Left (${todayPlays}/${maxPlays})` : `Play Again (${todayPlays}/${maxPlays})`}
            </button>
            <button
              onClick={() => navigate('/earn')}
              className="w-full py-3 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white font-semibold hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-all"
            >
              Back to Earn
            </button>
          </div>
        </div>
      )}

      <BottomNavManager />
    </div>
  );
};

export default MemoryMatch;
