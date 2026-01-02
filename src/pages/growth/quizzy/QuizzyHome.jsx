import React, { useState } from 'react';
import {
  Brain, Trophy, Zap, Star, Award, Play, Users,
  Clock, Target, TrendingUp, ChevronRight, Sparkles
} from 'lucide-react';

// Quizzy Home: Quiz Game Platform
// Backend API: GET /api/growth/quizzy/home
// Backend API: GET /api/growth/quizzy/daily-quiz
// Backend API: GET /api/growth/quizzy/user-stats

const QuizzyHome = () => {
  const [activeTab, setActiveTab] = useState('daily');

  const userStats = {
    totalQuizzes: 156,
    correctAnswers: 892,
    coinsEarned: 12450,
    rank: 234,
    accuracy: 85,
    streak: 7
  };

  const dailyQuiz = {
    title: 'General Knowledge Daily',
    questions: 10,
    duration: '5 min',
    reward: 500,
    participants: '12.5K',
    difficulty: 'Medium'
  };

  const featuredQuizzes = [
    { id: 1, title: 'Bollywood Masala', category: 'Entertainment', icon: '🎬', questions: 15, reward: 300, players: '8.9K' },
    { id: 2, title: 'Tech Trivia', category: 'Technology', icon: '💻', questions: 20, reward: 500, players: '6.7K' },
    { id: 3, title: 'Sports Quiz', category: 'Sports', icon: '⚽', questions: 12, reward: 250, players: '5.2K' }
  ];

  const categories = [
    { id: 1, name: 'General', icon: '📚', quizzes: 45 },
    { id: 2, name: 'Sports', icon: '⚽', quizzes: 32 },
    { id: 3, name: 'Movies', icon: '🎬', quizzes: 28 },
    { id: 4, name: 'Tech', icon: '💻', quizzes: 25 },
    { id: 5, name: 'History', icon: '🏛️', quizzes: 18 },
    { id: 6, name: 'Science', icon: '🔬', quizzes: 15 }
  ];

  const achievements = [
    { icon: '🔥', name: '7-Day Streak', unlocked: true },
    { icon: '💯', name: 'Perfect Score', unlocked: true },
    { icon: '⚡', name: 'Speed Master', unlocked: false },
    { icon: '👑', name: 'Quiz King', unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Brain className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">Quizzy</h1>
            </div>
            <p className="text-blue-100 text-sm">Test your knowledge, earn coins!</p>
          </div>
          <div className="text-right">
            <p className="text-blue-100 text-xs">Your Coins</p>
            <p className="text-white text-xl font-bold flex items-center gap-1">
              <span>🪙</span>
              {userStats.coinsEarned.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
            <Trophy className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-sm font-bold">{userStats.totalQuizzes}</p>
            <p className="text-blue-100 text-xs">Played</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
            <Target className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-sm font-bold">{userStats.accuracy}%</p>
            <p className="text-blue-100 text-xs">Accuracy</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
            <Zap className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-sm font-bold">{userStats.streak}</p>
            <p className="text-blue-100 text-xs">Streak</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
            <Star className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-sm font-bold">#{userStats.rank}</p>
            <p className="text-blue-100 text-xs">Rank</p>
          </div>
        </div>
      </div>

      {/* Daily Quiz Banner */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-white" />
            <h2 className="text-white font-bold">Daily Quiz</h2>
          </div>
          <h3 className="text-white text-xl font-bold mb-3">{dailyQuiz.title}</h3>

          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
              <p className="text-white text-xs">Questions</p>
              <p className="text-white font-bold">{dailyQuiz.questions}</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
              <p className="text-white text-xs">Duration</p>
              <p className="text-white font-bold">{dailyQuiz.duration}</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-2 text-center">
              <p className="text-white text-xs">Reward</p>
              <p className="text-white font-bold">+{dailyQuiz.reward} 🪙</p>
            </div>
          </div>

          <button className="w-full bg-white text-orange-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg">
            <Play className="w-5 h-5" />
            Play Daily Quiz
          </button>

          <p className="text-white/80 text-xs text-center mt-2">
            {dailyQuiz.participants} players today
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Browse by Category</h2>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((cat) => (
            <button key={cat.id} className="bg-white rounded-xl p-3 shadow-sm text-center">
              <div className="text-3xl mb-2">{cat.icon}</div>
              <p className="font-medium text-gray-800 text-sm">{cat.name}</p>
              <p className="text-xs text-gray-500">{cat.quizzes} quizzes</p>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Quizzes */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            Featured Quizzes
          </h2>
          <button className="text-blue-600 text-sm">View All</button>
        </div>

        <div className="space-y-3">
          {featuredQuizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-3xl">
                  {quiz.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{quiz.title}</h3>
                  <p className="text-sm text-gray-600">{quiz.category}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                    <span>{quiz.questions} questions</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {quiz.players}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-600">+{quiz.reward}</p>
                  <p className="text-xs text-gray-500">coins</p>
                  <button className="mt-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Play
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-bold text-gray-800 mb-3">Recent Achievements</h2>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="grid grid-cols-4 gap-3">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-3 text-center ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-blue-100 to-indigo-100'
                    : 'bg-gray-100 opacity-50'
                }`}
              >
                <div className="text-3xl mb-1">{achievement.icon}</div>
                <p className="text-xs font-medium text-gray-800">{achievement.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mt-6 mb-4">
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-white rounded-xl p-4 shadow-sm text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="font-bold text-gray-800 text-sm">Leaderboard</p>
          </button>
          <button className="bg-white rounded-xl p-4 shadow-sm text-center">
            <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="font-bold text-gray-800 text-sm">History</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizzyHome;
