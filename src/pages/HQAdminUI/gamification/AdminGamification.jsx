import { useState } from 'react';
import {
  Gamepad2, Gift, Trophy, Target, Calendar, Zap, Sparkles, Coins,
  CheckCircle, Star, Users, TrendingUp, Award, Crown, Medal,
  Plus, Edit, ToggleLeft, ToggleRight, Eye, Settings
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminGamification() {
  const [activeTab, setActiveTab] = useState('games');

  const [games, setGames] = useState([
    {
      id: 1,
      name: 'Daily Check-In',
      icon: 'Calendar',
      type: 'daily',
      description: 'Users check in daily to earn coins',
      enabled: true,
      baseReward: 10,
      streakBonus: 5,
      maxStreak: 30,
      activeUsers: 12456,
      totalCoinsGiven: 234567,
      avgEngagement: 78.5
    },
    {
      id: 2,
      name: 'Spin the Wheel',
      icon: 'Target',
      type: 'chance',
      description: 'Spin to win coins and rewards',
      enabled: true,
      minReward: 5,
      maxReward: 500,
      freeSpins: 1,
      activeUsers: 8934,
      totalCoinsGiven: 156789,
      avgEngagement: 65.2
    },
    {
      id: 3,
      name: 'Scratch Card',
      icon: 'Sparkles',
      type: 'chance',
      description: 'Scratch to reveal instant prizes',
      enabled: true,
      minReward: 10,
      maxReward: 1000,
      dailyCards: 2,
      activeUsers: 7845,
      totalCoinsGiven: 198765,
      avgEngagement: 58.9
    },
    {
      id: 4,
      name: 'Coin Hunt',
      icon: 'Coins',
      type: 'interactive',
      description: 'Find hidden coins in the app',
      enabled: true,
      coinsPerHunt: 20,
      huntsPerDay: 3,
      activeUsers: 5632,
      totalCoinsGiven: 112340,
      avgEngagement: 45.3
    },
    {
      id: 5,
      name: 'Daily Quiz',
      icon: 'Zap',
      type: 'knowledge',
      description: 'Answer questions to earn coins',
      enabled: false,
      coinsPerQuestion: 5,
      questionsPerDay: 5,
      activeUsers: 3421,
      totalCoinsGiven: 85605,
      avgEngagement: 32.1
    }
  ]);

  const [achievements, setAchievements] = useState([
    {
      id: 1,
      name: 'First Purchase',
      icon: 'Star',
      description: 'Complete your first purchase',
      category: 'Shopping',
      reward: 50,
      unlocked: 8934,
      rarity: 'common'
    },
    {
      id: 2,
      name: 'Referral Master',
      icon: 'Users',
      description: 'Refer 10 friends',
      category: 'Social',
      reward: 200,
      unlocked: 1234,
      rarity: 'rare'
    },
    {
      id: 3,
      name: 'Big Spender',
      icon: 'Crown',
      description: 'Spend over ₹10,000',
      category: 'Shopping',
      reward: 500,
      unlocked: 567,
      rarity: 'epic'
    },
    {
      id: 4,
      name: 'Streak Master',
      icon: 'Trophy',
      description: '30-day check-in streak',
      category: 'Engagement',
      reward: 300,
      unlocked: 2345,
      rarity: 'rare'
    },
    {
      id: 5,
      name: 'Explorer',
      icon: 'Target',
      description: 'Visit 20 different stores',
      category: 'Discovery',
      reward: 100,
      unlocked: 4567,
      rarity: 'uncommon'
    }
  ]);

  const [leaderboard, setLeaderboard] = useState([
    { id: 1, rank: 1, user: 'CoinMaster2024', coins: 45678, avatar: '👑', streak: 45, level: 28 },
    { id: 2, rank: 2, user: 'ShopQueen', coins: 38945, avatar: '💎', streak: 32, level: 24 },
    { id: 3, rank: 3, user: 'DealHunter99', coins: 32567, avatar: '🎯', streak: 28, level: 21 },
    { id: 4, rank: 4, user: 'SaverPro', coins: 28934, avatar: '⭐', streak: 25, level: 19 },
    { id: 5, rank: 5, user: 'RewardSeeker', coins: 25678, avatar: '🏆', streak: 22, level: 18 }
  ]);

  const [tournaments, setTournaments] = useState([
    {
      id: 1,
      name: 'Weekend Shopping Spree',
      description: 'Top 10 shoppers win extra cashback',
      startDate: '2024-01-27',
      endDate: '2024-01-28',
      participants: 1234,
      prizePool: 10000,
      status: 'active'
    },
    {
      id: 2,
      name: 'Referral Challenge',
      description: 'Refer the most friends this month',
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      participants: 2345,
      prizePool: 25000,
      status: 'active'
    },
    {
      id: 3,
      name: 'Check-in Marathon',
      description: 'Perfect attendance for January',
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      participants: 3456,
      prizePool: 15000,
      status: 'active'
    }
  ]);

  const toggleGameStatus = (id) => {
    setGames(prev => prev.map(game =>
      game.id === id ? { ...game, enabled: !game.enabled } : game
    ));
  };

  const stats = {
    totalGames: games.length,
    activeGames: games.filter(g => g.enabled).length,
    totalAchievements: achievements.length,
    totalPlayers: 15234,
    coinsDistributed: games.reduce((sum, g) => sum + g.totalCoinsGiven, 0),
    avgEngagement: (games.reduce((sum, g) => sum + g.avgEngagement, 0) / games.length).toFixed(1)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gamification Management</h1>
              <p className="text-gray-600 mt-1">Manage games, achievements, leaderboards, and tournaments</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Plus className="w-5 h-5" />
              Create Tournament
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Games</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalGames}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Gamepad2 className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Games</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{stats.activeGames}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Achievements</p>
                <p className="text-3xl font-bold text-yellow-600 mt-2">{stats.totalAchievements}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Players</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">{stats.totalPlayers.toLocaleString()}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Coins Given</p>
                <p className="text-3xl font-bold text-orange-600 mt-2">{(stats.coinsDistributed / 1000).toFixed(0)}K</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Coins className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Engagement</p>
                <p className="text-3xl font-bold text-indigo-600 mt-2">{stats.avgEngagement}%</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('games')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'games'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Gamepad2 className="w-5 h-5" />
                Games
              </div>
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'achievements'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5" />
                Achievements
              </div>
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'leaderboard'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Award className="w-5 h-5" />
                Leaderboard
              </div>
            </button>
            <button
              onClick={() => setActiveTab('tournaments')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'tournaments'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Crown className="w-5 h-5" />
                Tournaments
              </div>
            </button>
          </div>

          {/* Games Tab */}
          {activeTab === 'games' && (
            <div className="p-6">
              <div className="space-y-6">
                {games.map((game) => (
                  <div key={game.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-lg">
                          {game.icon === 'Calendar' && <Calendar className="w-8 h-8 text-white" />}
                          {game.icon === 'Target' && <Target className="w-8 h-8 text-white" />}
                          {game.icon === 'Sparkles' && <Sparkles className="w-8 h-8 text-white" />}
                          {game.icon === 'Coins' && <Coins className="w-8 h-8 text-white" />}
                          {game.icon === 'Zap' && <Zap className="w-8 h-8 text-white" />}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{game.name}</h3>
                          <p className="text-gray-600 mt-1">{game.description}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-sm text-gray-600">
                              Type: <span className="font-medium capitalize text-gray-900">{game.type}</span>
                            </span>
                            <span className="text-sm text-gray-600">
                              Active Users: <span className="font-medium text-blue-600">{game.activeUsers.toLocaleString()}</span>
                            </span>
                            <span className="text-sm text-gray-600">
                              Engagement: <span className="font-medium text-green-600">{game.avgEngagement}%</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleGameStatus(game.id)}
                        className="flex items-center gap-2"
                      >
                        {game.enabled ? (
                          <ToggleRight className="w-10 h-10 text-green-600" />
                        ) : (
                          <ToggleLeft className="w-10 h-10 text-gray-400" />
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600">Base Reward</p>
                        <p className="text-2xl font-bold text-orange-600">
                          {game.baseReward || game.minReward || game.coinsPerHunt || game.coinsPerQuestion} coins
                        </p>
                      </div>
                      {game.maxReward && (
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm text-gray-600">Max Reward</p>
                          <p className="text-2xl font-bold text-green-600">{game.maxReward} coins</p>
                        </div>
                      )}
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600">Total Coins Given</p>
                        <p className="text-2xl font-bold text-indigo-600">{(game.totalCoinsGiven / 1000).toFixed(0)}K</p>
                      </div>
                      <div className={`bg-white rounded-lg p-4 ${!game.enabled && 'opacity-50'}`}>
                        <p className="text-sm text-gray-600">Status</p>
                        <p className={`text-lg font-bold ${game.enabled ? 'text-green-600' : 'text-gray-400'}`}>
                          {game.enabled ? 'Active' : 'Disabled'}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
                        <Edit className="w-4 h-4" />
                        Edit Settings
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                        <Eye className="w-4 h-4" />
                        View Analytics
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-200 hover:border-indigo-300 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          achievement.rarity === 'common' ? 'bg-gray-200' :
                          achievement.rarity === 'uncommon' ? 'bg-green-200' :
                          achievement.rarity === 'rare' ? 'bg-blue-200' :
                          'bg-purple-200'
                        }`}>
                          {achievement.icon === 'Star' && <Star className="w-6 h-6 text-gray-700" />}
                          {achievement.icon === 'Users' && <Users className="w-6 h-6 text-gray-700" />}
                          {achievement.icon === 'Crown' && <Crown className="w-6 h-6 text-gray-700" />}
                          {achievement.icon === 'Trophy' && <Trophy className="w-6 h-6 text-gray-700" />}
                          {achievement.icon === 'Target' && <Target className="w-6 h-6 text-gray-700" />}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900">{achievement.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-xs text-gray-600">Reward</p>
                          <p className="text-lg font-bold text-orange-600">{achievement.reward} coins</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Unlocked By</p>
                          <p className="text-lg font-bold text-blue-600">{achievement.unlocked.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Rarity</p>
                          <p className={`text-sm font-bold capitalize ${
                            achievement.rarity === 'common' ? 'text-gray-600' :
                            achievement.rarity === 'uncommon' ? 'text-green-600' :
                            achievement.rarity === 'rare' ? 'text-blue-600' :
                            'text-purple-600'
                          }`}>
                            {achievement.rarity}
                          </p>
                        </div>
                      </div>
                      <button className="px-3 py-1 text-sm font-medium text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button className="w-full px-4 py-3 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-indigo-500 hover:text-indigo-600 font-medium">
                  + Add New Achievement
                </button>
              </div>
            </div>
          )}

          {/* Leaderboard Tab */}
          {activeTab === 'leaderboard' && (
            <div className="p-6">
              <div className="space-y-4">
                {leaderboard.map((player) => (
                  <div key={player.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-6">
                      <div className={`flex items-center justify-center w-16 h-16 rounded-full font-bold text-2xl ${
                        player.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
                        player.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white' :
                        player.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' :
                        'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700'
                      }`}>
                        #{player.rank}
                      </div>
                      <div className="flex items-center gap-3 flex-1">
                        <div className="text-4xl">{player.avatar}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900">{player.user}</h3>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-sm text-gray-600">
                              Level <span className="font-bold text-indigo-600">{player.level}</span>
                            </span>
                            <span className="text-sm text-gray-600">
                              Streak: <span className="font-bold text-orange-600">{player.streak} days</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <Coins className="w-5 h-5 text-orange-500" />
                          <span className="text-2xl font-bold text-gray-900">{player.coins.toLocaleString()}</span>
                        </div>
                        <p className="text-sm text-gray-600">Total Coins</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tournaments Tab */}
          {activeTab === 'tournaments' && (
            <div className="p-6">
              <div className="space-y-6">
                {tournaments.map((tournament) => (
                  <div key={tournament.id} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-lg">
                          <Crown className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{tournament.name}</h3>
                          <p className="text-gray-600 mt-1">{tournament.description}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-sm text-gray-600">
                              Duration: <span className="font-medium text-gray-900">{tournament.startDate} to {tournament.endDate}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        tournament.status === 'active' ? 'bg-green-100 text-green-700' :
                        tournament.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {tournament.status.charAt(0).toUpperCase() + tournament.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/80 rounded-lg p-4">
                        <p className="text-sm text-gray-600">Participants</p>
                        <p className="text-2xl font-bold text-blue-600">{tournament.participants.toLocaleString()}</p>
                      </div>
                      <div className="bg-white/80 rounded-lg p-4">
                        <p className="text-sm text-gray-600">Prize Pool</p>
                        <p className="text-2xl font-bold text-green-600">₹{tournament.prizePool.toLocaleString()}</p>
                      </div>
                      <div className="bg-white/80 rounded-lg p-4 flex items-center gap-2">
                        <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                          View Details
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-white">
                          <Settings className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
