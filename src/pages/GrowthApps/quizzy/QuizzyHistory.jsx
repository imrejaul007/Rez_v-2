import React, { useState } from 'react';
import { Clock, CheckCircle, XCircle, Award, TrendingUp, Calendar, Target } from 'lucide-react';

// Quizzy History: Quiz History & Stats
// Backend API: GET /api/growth/quizzy/history
// Backend API: GET /api/growth/quizzy/stats

const QuizzyHistory = () => {
  const [filter, setFilter] = useState('all');

  const stats = {
    totalQuizzes: 156,
    correctAnswers: 892,
    totalQuestions: 1560,
    coinsEarned: 12450,
    avgAccuracy: 85,
    bestStreak: 15
  };

  const recentQuizzes = [
    {
      id: 1,
      title: 'General Knowledge',
      category: 'General',
      icon: '📚',
      score: '8/10',
      accuracy: 80,
      coins: 400,
      date: '2 hours ago',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Sports Trivia',
      category: 'Sports',
      icon: '⚽',
      score: '10/10',
      accuracy: 100,
      coins: 500,
      date: '1 day ago',
      status: 'perfect'
    },
    {
      id: 3,
      title: 'Movie Quiz',
      category: 'Entertainment',
      icon: '🎬',
      score: '6/10',
      accuracy: 60,
      coins: 300,
      date: '2 days ago',
      status: 'completed'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 pt-6 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-6 h-6 text-white" />
          <h1 className="text-xl font-bold text-white">Quiz History</h1>
        </div>
        <p className="text-indigo-100 text-sm">Your quiz journey</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
            <CheckCircle className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-lg font-bold">{stats.totalQuizzes}</p>
            <p className="text-indigo-100 text-xs">Completed</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
            <Target className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-lg font-bold">{stats.avgAccuracy}%</p>
            <p className="text-indigo-100 text-xs">Accuracy</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
            <Award className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-lg font-bold">{stats.coinsEarned}</p>
            <p className="text-indigo-100 text-xs">Coins 🪙</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 mt-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['all', 'perfect', 'completed', 'failed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-full font-medium text-sm capitalize whitespace-nowrap ${
                filter === tab
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : 'bg-white text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Statistics</h2>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Correct Answers</p>
              <p className="text-2xl font-bold text-green-600">
                {stats.correctAnswers}/{stats.totalQuestions}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Best Streak</p>
              <p className="text-2xl font-bold text-orange-600">{stats.bestStreak} 🔥</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Quizzes */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Recent Quizzes</h2>
        <div className="space-y-3">
          {recentQuizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  {quiz.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-800">{quiz.title}</h3>
                    {quiz.status === 'perfect' && (
                      <Award className="w-4 h-4 text-yellow-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{quiz.category}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Score: {quiz.score}
                    </span>
                    <span>{quiz.accuracy}% accuracy</span>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {quiz.date}
                    </span>
                    <span className="text-sm font-bold text-indigo-600">+{quiz.coins} 🪙</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    quiz.accuracy >= 80
                      ? 'bg-green-500'
                      : quiz.accuracy >= 60
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${quiz.accuracy}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizzyHistory;
