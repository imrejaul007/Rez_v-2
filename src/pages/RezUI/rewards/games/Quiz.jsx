import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Trophy,
  Clock,
  Coins,
  CheckCircle,
  XCircle,
  Award,
  Zap,
  Star,
  Target,
  TrendingUp,
  Brain
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const Quiz = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState('start'); // start, playing, result
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [streak, setStreak] = useState(0);
  const [todayPlays, setTodayPlays] = useState(2);
  const maxPlays = 5;

  const quizQuestions = [
    {
      id: 1,
      question: 'Which brand offers the highest cashback on electronics?',
      options: ['Amazon', 'Flipkart', 'Croma', 'Reliance Digital'],
      correct: 1,
      coins: 50,
      category: 'Shopping'
    },
    {
      id: 2,
      question: 'What is the minimum order value for free delivery on most food apps?',
      options: ['₹99', '₹149', '₹199', '₹299'],
      correct: 2,
      coins: 50,
      category: 'Food & Dining'
    },
    {
      id: 3,
      question: 'Which ReZ coin can be used to buy gift cards?',
      options: ['ReZ Coin', 'Branded Coin', 'Privé Coin', 'Promo Coin'],
      correct: 2,
      coins: 50,
      category: 'ReZ System'
    },
    {
      id: 4,
      question: 'Best time to book flights for maximum savings?',
      options: ['Monday morning', 'Tuesday afternoon', 'Friday evening', 'Sunday night'],
      correct: 1,
      coins: 50,
      category: 'Travel'
    },
    {
      id: 5,
      question: 'Which payment method gives extra ReZ coins?',
      options: ['Cash', 'Credit Card', 'ReZ Wallet', 'Net Banking'],
      correct: 2,
      coins: 50,
      category: 'ReZ System'
    }
  ];

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0 && selectedAnswer === null) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && selectedAnswer === null) {
      handleAnswer(null);
    }
  }, [timeLeft, gameState, selectedAnswer]);

  const startGame = () => {
    if (todayPlays >= maxPlays) {
      return;
    }
    setGameState('playing');
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setTimeLeft(15);
    setStreak(0);
  };

  const handleAnswer = (answerIndex) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === quizQuestions[currentQuestion].correct;

    if (isCorrect) {
      setScore(score + quizQuestions[currentQuestion].coins);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setTimeLeft(15);
      } else {
        setGameState('result');
        setTodayPlays(todayPlays + 1);
      }
    }, 1500);
  };

  const getStreakBonus = () => {
    if (streak >= 5) return score * 0.5;
    if (streak >= 3) return score * 0.25;
    return 0;
  };

  const totalEarned = score + getStreakBonus();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 dark:from-purple-500/5 dark:via-blue-500/5 dark:to-pink-500/5 pb-24">
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
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white flex items-center gap-2">
              <Brain className="w-6 h-6 text-purple-500" />
              Quiz Master
            </h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Test your knowledge, earn coins</p>
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
          <div className="p-6 rounded-rez-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <Brain className="w-10 h-10" />
            </div>
            <h2 className="text-h3 font-poppins mb-2">Quiz Master</h2>
            <p className="text-body-sm opacity-90 mb-4">Answer 5 questions correctly and earn coins!</p>
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-h4 font-poppins">250</p>
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
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                  <span className="text-caption font-bold text-purple-600 dark:text-purple-400">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-body-sm text-rez-navy dark:text-white font-medium">Answer 5 questions</p>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">Each question has 15 seconds</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <span className="text-caption font-bold text-blue-600 dark:text-blue-400">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-body-sm text-rez-navy dark:text-white font-medium">Earn 50 coins per correct answer</p>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">Plus streak bonuses!</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <span className="text-caption font-bold text-amber-600 dark:text-amber-400">3</span>
                </div>
                <div className="flex-1">
                  <p className="text-body-sm text-rez-navy dark:text-white font-medium">Get streak bonuses</p>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">3+ streak: +25% | 5 streak: +50%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={startGame}
            disabled={todayPlays >= maxPlays}
            className={`w-full py-4 rounded-rez-xl font-bold text-white transition-all ${
              todayPlays >= maxPlays
                ? 'bg-rez-gray-300 dark:bg-white/10 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-rez-card'
            }`}
          >
            {todayPlays >= maxPlays ? 'Come Back Tomorrow' : 'Start Quiz'}
          </button>
        </div>
      )}

      {/* Playing Screen */}
      {gameState === 'playing' && (
        <div className="px-4 py-8 space-y-6">
          {/* Progress */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-caption text-rez-gray-600 dark:text-gray-400">Question {currentQuestion + 1}/5</span>
              {streak > 0 && (
                <div className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-500" />
                  <span className="text-caption font-bold text-amber-600 dark:text-amber-400">{streak} Streak</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Coins className="w-4 h-4 text-emerald-500" />
              <span className="text-body-sm font-bold text-emerald-600 dark:text-emerald-400">{score}</span>
            </div>
          </div>

          {/* Question Card */}
          <div className="p-6 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card">
            <div className="mb-4">
              <span className="px-2 py-1 rounded-full bg-purple-500/20 text-xs font-medium text-purple-600 dark:text-purple-400">
                {quizQuestions[currentQuestion].category}
              </span>
            </div>
            <h2 className="text-h4 font-poppins text-rez-navy dark:text-white mb-6">
              {quizQuestions[currentQuestion].question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-3">
              {quizQuestions[currentQuestion].options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === quizQuestions[currentQuestion].correct;
                const showResult = selectedAnswer !== null;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-rez-lg text-left transition-all ${
                      showResult
                        ? isCorrect
                          ? 'bg-green-500/20 border-2 border-green-500'
                          : isSelected
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-rez-gray-100 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10'
                        : 'bg-rez-gray-100 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 hover:border-purple-500 hover:bg-purple-500/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm text-rez-navy dark:text-white font-medium">{option}</span>
                      {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
                      {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Progress Bar */}
          <div className="h-2 bg-rez-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
              style={{ width: `${(timeLeft / 15) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Result Screen */}
      {gameState === 'result' && (
        <div className="px-4 py-8 space-y-6">
          {/* Result Card */}
          <div className="p-8 rounded-rez-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <Trophy className="w-12 h-12" />
            </div>
            <h2 className="text-h2 font-poppins mb-2">Quiz Complete!</h2>
            <p className="text-body-sm opacity-90 mb-6">You answered {score / 50} out of 5 correctly</p>

            <div className="p-4 rounded-rez-lg bg-white/10 backdrop-blur-sm mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Coins className="w-6 h-6" />
                <span className="text-h2 font-poppins">+{Math.round(totalEarned)}</span>
              </div>
              <p className="text-caption opacity-80">Total Coins Earned</p>
            </div>

            {getStreakBonus() > 0 && (
              <div className="p-3 rounded-rez-lg bg-amber-500/20 border border-amber-300/30">
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span className="text-body-sm font-bold">+{Math.round(getStreakBonus())} Streak Bonus!</span>
                </div>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center">
              <Target className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <p className="text-h4 font-poppins text-rez-navy dark:text-white">{((score / 250) * 100).toFixed(0)}%</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Accuracy</p>
            </div>
            <div className="p-4 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center">
              <Zap className="w-6 h-6 mx-auto mb-2 text-amber-500" />
              <p className="text-h4 font-poppins text-rez-navy dark:text-white">{streak}</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Best Streak</p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={startGame}
              disabled={todayPlays >= maxPlays}
              className={`w-full py-3 rounded-rez-lg font-semibold transition-all ${
                todayPlays >= maxPlays
                  ? 'bg-rez-gray-200 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
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

export default Quiz;
