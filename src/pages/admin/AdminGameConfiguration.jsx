import { useState } from 'react';
import AdminNav from '../../components/admin/AdminNav';
import {
  Gamepad2, Gift, Zap, DollarSign, Star, Trophy, Target, Settings,
  Plus, Save, Trash2, Copy, Eye, TrendingUp, Users, Coins, AlertCircle
} from 'lucide-react';

export default function AdminGameConfiguration() {
  const [activeTab, setActiveTab] = useState('scratch-cards');
  const [editingItem, setEditingItem] = useState(null);

  // Mock data - Scratch Card Configuration
  const scratchCards = [
    {
      id: 'SCRATCH-001',
      name: 'Daily Lucky Scratch',
      status: 'active',
      frequency: 'once_daily',
      prizes: [
        { tier: 1, value: 100, probability: 5, label: 'Jackpot', icon: '🎁' },
        { tier: 2, value: 50, probability: 10, label: 'Big Win', icon: '💎' },
        { tier: 3, value: 20, probability: 20, label: 'Nice!', icon: '⭐' },
        { tier: 4, value: 10, probability: 30, label: 'Good', icon: '👍' },
        { tier: 5, value: 5, probability: 25, label: 'Small Win', icon: '🪙' },
        { tier: 6, value: 0, probability: 10, label: 'Better Luck Next Time', icon: '💫' }
      ],
      totalPlays: 15234,
      totalCoinsGiven: 156780,
      avgCoinsPerPlay: 10.3,
      playersSatisfaction: 87
    },
    {
      id: 'SCRATCH-002',
      name: 'Weekend Bonanza',
      status: 'active',
      frequency: 'weekends_only',
      prizes: [
        { tier: 1, value: 500, probability: 2, label: 'Mega Jackpot', icon: '💰' },
        { tier: 2, value: 200, probability: 5, label: 'Super Win', icon: '🏆' },
        { tier: 3, value: 100, probability: 10, label: 'Big Win', icon: '💎' },
        { tier: 4, value: 50, probability: 20, label: 'Nice!', icon: '⭐' },
        { tier: 5, value: 20, probability: 30, label: 'Good', icon: '👍' },
        { tier: 6, value: 0, probability: 33, label: 'Try Again', icon: '💫' }
      ],
      totalPlays: 8456,
      totalCoinsGiven: 234500,
      avgCoinsPerPlay: 27.7,
      playersSatisfaction: 92
    }
  ];

  // Mock data - Quiz Configuration
  const quizzes = [
    {
      id: 'QUIZ-001',
      category: 'General Knowledge',
      difficulty: 'medium',
      questionCount: 156,
      coinsPerCorrect: 5,
      coinsPerQuiz: 25,
      timeLimit: 30,
      status: 'active',
      avgScore: 78,
      completionRate: 82
    },
    {
      id: 'QUIZ-002',
      category: 'Movies & Entertainment',
      difficulty: 'easy',
      questionCount: 234,
      coinsPerCorrect: 3,
      coinsPerQuiz: 15,
      timeLimit: 20,
      status: 'active',
      avgScore: 85,
      completionRate: 91
    },
    {
      id: 'QUIZ-003',
      category: 'Science & Technology',
      difficulty: 'hard',
      questionCount: 89,
      coinsPerCorrect: 10,
      coinsPerQuiz: 50,
      timeLimit: 45,
      status: 'draft',
      avgScore: 62,
      completionRate: 67
    }
  ];

  // Mock data - Lucky Draw Configuration
  const luckyDraws = [
    {
      id: 'DRAW-001',
      name: 'Hourly Lucky Draw',
      frequency: 'hourly',
      entryCost: 10,
      prizes: [
        { rank: 1, winners: 1, coins: 1000, label: '1st Prize' },
        { rank: 2, winners: 2, coins: 500, label: '2nd Prize' },
        { rank: 3, winners: 5, coins: 200, label: '3rd Prize' },
        { rank: 4, winners: 10, coins: 50, label: 'Consolation' }
      ],
      maxParticipants: 500,
      status: 'active',
      avgParticipants: 387,
      participationRate: 77
    },
    {
      id: 'DRAW-002',
      name: 'Mega Monthly Draw',
      frequency: 'monthly',
      entryCost: 50,
      prizes: [
        { rank: 1, winners: 1, coins: 50000, label: 'Grand Prize' },
        { rank: 2, winners: 1, coins: 25000, label: '2nd Prize' },
        { rank: 3, winners: 3, coins: 10000, label: '3rd Prize' },
        { rank: 4, winners: 5, coins: 5000, label: '4th Prize' },
        { rank: 5, winners: 10, coins: 1000, label: 'Consolation' }
      ],
      maxParticipants: 10000,
      status: 'active',
      avgParticipants: 8456,
      participationRate: 85
    }
  ];

  // Mock data - Overall Statistics
  const gameStats = {
    totalPlayers: 45678,
    activeGames: 12,
    totalCoinsDistributed: 2456789,
    avgEngagement: 68,
    topGame: 'Scratch Cards',
    topGamePlays: 23690
  };

  const calculateExpectedValue = (prizes) => {
    return prizes.reduce((sum, prize) => {
      return sum + (prize.value * (prize.probability / 100));
    }, 0);
  };

  const renderScratchCards = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Scratch Card Configurations</h3>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create New Card
        </button>
      </div>

      {scratchCards.map((card) => (
        <div key={card.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-semibold text-gray-900">{card.name}</h4>
                  <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                    card.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {card.status}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {card.frequency.replace('_', ' ')}
                  </span>
                </div>
                <p className="text-sm text-gray-600">Expected Value: ₹{calculateExpectedValue(card.prizes).toFixed(2)} coins per play</p>
              </div>

              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Edit
                </button>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="p-6 bg-gray-50 border-b border-gray-100">
            <div className="grid grid-cols-4 gap-6">
              <div>
                <p className="text-xs text-gray-500 mb-1">Total Plays</p>
                <p className="text-2xl font-bold text-gray-900">{card.totalPlays.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Coins Distributed</p>
                <p className="text-2xl font-bold text-purple-600">₹{card.totalCoinsGiven.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Avg Coins/Play</p>
                <p className="text-2xl font-bold text-gray-900">{card.avgCoinsPerPlay}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Player Satisfaction</p>
                <p className="text-2xl font-bold text-green-600">{card.playersSatisfaction}%</p>
              </div>
            </div>
          </div>

          {/* Prize Configuration */}
          <div className="p-6">
            <h5 className="text-sm font-semibold text-gray-900 mb-4">Prize Distribution</h5>
            <div className="space-y-3">
              {card.prizes.map((prize) => (
                <div key={prize.tier} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-3xl">{prize.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{prize.label}</p>
                    <p className="text-sm text-gray-600">Tier {prize.tier}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-purple-600">{prize.value} coins</p>
                    <p className="text-sm text-gray-600">{prize.probability}% chance</p>
                  </div>
                  <div className="w-32">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${prize.probability}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Validation */}
            <div className="mt-4 flex items-center gap-2 text-sm">
              {card.prizes.reduce((sum, p) => sum + p.probability, 0) === 100 ? (
                <>
                  <div className="flex items-center gap-1 text-green-600">
                    <Star className="w-4 h-4" />
                    <span>Probabilities sum to 100% ✓</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-1 text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    <span>Error: Probabilities must sum to 100%</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderQuizzes = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Quiz Configurations</h3>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create New Quiz
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">{quiz.category}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    quiz.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {quiz.status}
                  </span>
                </div>
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  quiz.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                  quiz.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {quiz.difficulty}
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Questions</span>
                <span className="font-semibold text-gray-900">{quiz.questionCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Coins per Correct</span>
                <span className="font-semibold text-purple-600">{quiz.coinsPerCorrect}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Quiz Completion Bonus</span>
                <span className="font-semibold text-purple-600">{quiz.coinsPerQuiz}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Time Limit</span>
                <span className="font-semibold text-gray-900">{quiz.timeLimit}s per question</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Avg Score</p>
                <p className="text-xl font-bold text-gray-900">{quiz.avgScore}%</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Completion</p>
                <p className="text-xl font-bold text-green-600">{quiz.completionRate}%</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Manage Questions
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLuckyDraws = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Lucky Draw Configurations</h3>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create New Draw
        </button>
      </div>

      {luckyDraws.map((draw) => (
        <div key={draw.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-semibold text-gray-900">{draw.name}</h4>
                  <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                    draw.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {draw.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {draw.frequency} • Entry: {draw.entryCost} coins • Max {draw.maxParticipants} participants
                </p>
              </div>

              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Edit Configuration
              </button>
            </div>
          </div>

          <div className="p-6 bg-gray-50 border-b border-gray-100">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-gray-500 mb-1">Avg Participants</p>
                <p className="text-2xl font-bold text-gray-900">{draw.avgParticipants.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Participation Rate</p>
                <p className="text-2xl font-bold text-green-600">{draw.participationRate}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Total Prize Pool</p>
                <p className="text-2xl font-bold text-purple-600">
                  ₹{draw.prizes.reduce((sum, p) => sum + (p.winners * p.coins), 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h5 className="text-sm font-semibold text-gray-900 mb-4">Prize Structure</h5>
            <div className="space-y-3">
              {draw.prizes.map((prize) => (
                <div key={prize.rank} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Trophy className={`w-6 h-6 ${
                        prize.rank === 1 ? 'text-yellow-500' :
                        prize.rank === 2 ? 'text-gray-400' :
                        prize.rank === 3 ? 'text-orange-600' :
                        'text-blue-500'
                      }`} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{prize.label}</p>
                      <p className="text-sm text-gray-600">{prize.winners} winner(s)</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-purple-600">{prize.coins.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">coins each</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <AdminNav />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Game Configuration</h1>
              <p className="text-gray-600">Manage earning games, prizes, and probabilities</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{gameStats.totalPlayers.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Players</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Gamepad2 className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{gameStats.activeGames}</p>
            <p className="text-sm text-gray-600">Active Games</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Coins className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">₹{(gameStats.totalCoinsDistributed / 1000).toFixed(0)}K</p>
            <p className="text-sm text-gray-600">Coins Distributed</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{gameStats.avgEngagement}%</p>
            <p className="text-sm text-gray-600">Avg Engagement</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('scratch-cards')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'scratch-cards'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Gift className="w-5 h-5" />
                Scratch Cards
              </div>
            </button>
            <button
              onClick={() => setActiveTab('quizzes')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'quizzes'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Target className="w-5 h-5" />
                Quizzes
              </div>
            </button>
            <button
              onClick={() => setActiveTab('lucky-draws')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'lucky-draws'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5" />
                Lucky Draws
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'scratch-cards' && renderScratchCards()}
        {activeTab === 'quizzes' && renderQuizzes()}
        {activeTab === 'lucky-draws' && renderLuckyDraws()}
      </div>
    </div>
  );
}
