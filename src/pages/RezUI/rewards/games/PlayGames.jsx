import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Coins, Trophy, Flame, Users, Clock, Target,
  Zap, Gift, TrendingUp, Star, GamepadIcon, Sparkles
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const PlayGames = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Games', count: 8 },
    { id: 'popular', name: 'Most Popular', count: 4 },
    { id: 'daily', name: 'Daily Challenges', count: 3 },
    { id: 'tournaments', name: 'Tournaments', count: 2 },
  ];

  const games = [
    {
      id: 1,
      title: 'Daily Quiz Challenge',
      icon: '🧠',
      bgColor: 'from-purple-500/10 to-blue-500/10',
      borderColor: 'border-purple-500/30',
      description: 'Test your knowledge, win coins',
      reward: 50,
      plays: '12.5k',
      difficulty: 'Easy',
      duration: '5 mins',
      popular: true,
      dailyChallenge: true,
      link: '/earn/quiz'
    },
    {
      id: 2,
      title: 'Memory Match',
      icon: '🎯',
      bgColor: 'from-pink-500/10 to-rose-500/10',
      borderColor: 'border-pink-500/30',
      description: 'Match cards and earn rewards',
      reward: 30,
      plays: '8.3k',
      difficulty: 'Medium',
      duration: '3 mins',
      popular: true,
      dailyChallenge: true,
      link: '/earn/memory-match'
    },
    {
      id: 3,
      title: 'Lucky Spin',
      icon: '🎰',
      bgColor: 'from-orange-500/10 to-amber-500/10',
      borderColor: 'border-orange-500/30',
      description: 'Spin the wheel, win big!',
      reward: 100,
      plays: '25.1k',
      difficulty: 'Easy',
      duration: '1 min',
      popular: true,
      link: '/earn/lucky-draw'
    },
    {
      id: 4,
      title: 'Guess the Price',
      icon: '💰',
      bgColor: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'border-emerald-500/30',
      description: 'Guess product prices correctly',
      reward: 40,
      plays: '6.7k',
      difficulty: 'Medium',
      duration: '4 mins',
      dailyChallenge: true,
      link: '/earn/guess-price'
    },
    {
      id: 5,
      title: 'Scratch & Win',
      icon: '🎫',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30',
      description: 'Scratch cards for instant rewards',
      reward: 20,
      plays: '18.9k',
      difficulty: 'Easy',
      duration: '30 sec',
      popular: true,
      link: '/earn/scratch-card'
    },
    {
      id: 6,
      title: 'Coin Hunt',
      icon: '🪙',
      bgColor: 'from-yellow-500/10 to-orange-500/10',
      borderColor: 'border-yellow-500/30',
      description: 'Find hidden coins in the city',
      reward: 80,
      plays: '4.2k',
      difficulty: 'Hard',
      duration: '15 mins',
      link: '/earn/coin-hunt'
    },
    {
      id: 7,
      title: 'Weekly Tournament',
      icon: '🏆',
      bgColor: 'from-indigo-500/10 to-purple-500/10',
      borderColor: 'border-indigo-500/30',
      description: 'Compete for top rewards',
      reward: 500,
      plays: '2.1k',
      difficulty: 'Hard',
      duration: 'Weekly',
      tournament: true,
      link: '/earn/tournaments/1'
    },
    {
      id: 8,
      title: 'Flash Challenge',
      icon: '⚡',
      bgColor: 'from-red-500/10 to-orange-500/10',
      borderColor: 'border-red-500/30',
      description: 'Limited time challenges',
      reward: 150,
      plays: '9.8k',
      difficulty: 'Medium',
      duration: '10 mins',
      tournament: true,
      link: '/earn/tournaments/2'
    }
  ];

  const filteredGames = activeCategory === 'all'
    ? games
    : activeCategory === 'popular'
    ? games.filter(g => g.popular)
    : activeCategory === 'daily'
    ? games.filter(g => g.dailyChallenge)
    : games.filter(g => g.tournament);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Play & Earn</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Win coins while having fun</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30">
            <Coins className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">2,450</span>
          </div>
        </div>
      </div>

      {/* Hero Stats Section */}
      <div className="px-4 py-6">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-purple-500/30">
          <div className="grid grid-cols-4 gap-3">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <p className="text-xl font-bold text-rez-navy dark:text-white">2,450</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Total Won</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <GamepadIcon className="w-6 h-6 text-white" />
              </div>
              <p className="text-xl font-bold text-rez-navy dark:text-white">156</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Games Played</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <p className="text-xl font-bold text-rez-navy dark:text-white">12</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Day Streak</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <p className="text-xl font-bold text-rez-navy dark:text-white">#24</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Rank</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
          <div className="flex items-center gap-3">
            <Sparkles className="w-10 h-10 text-blue-500 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">
                🎮 Play Daily, Earn More
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Complete daily challenges to maintain your streak and unlock bonus rewards!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 mb-6">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2.5 rounded-full whitespace-nowrap text-sm font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-gray-600 dark:text-gray-300'
              }`}
            >
              {category.name}
              <span className="ml-1.5 opacity-75">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Games Grid */}
      <div className="px-4 pb-6 space-y-3">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            onClick={() => navigate(game.link)}
            className={`p-4 rounded-2xl bg-gradient-to-br ${game.bgColor} border-2 ${game.borderColor} hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer`}
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-16 h-16 rounded-2xl bg-white/50 dark:bg-white/10 flex items-center justify-center text-3xl flex-shrink-0">
                {game.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-rez-navy dark:text-white">{game.title}</h3>
                  {game.popular && (
                    <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30">
                      <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400">Popular</span>
                    </span>
                  )}
                  {game.dailyChallenge && (
                    <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">Daily</span>
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{game.description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{game.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{game.plays} plays</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-3.5 h-3.5" />
                    <span>{game.difficulty}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reward Display */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Reward</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">+{game.reward}</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">coins</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 pb-6">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10 border border-emerald-200 dark:border-emerald-500/30 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-2">Join Leaderboard</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Compete with thousands of players for top rewards
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>45.2k players</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>Top prize: 5000 coins</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/earn/leaderboard')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:scale-105 transition-all"
          >
            View Leaderboard
          </button>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PlayGames;
