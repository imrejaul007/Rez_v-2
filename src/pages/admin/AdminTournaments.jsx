import { useState } from 'react';
import {
  Trophy, Plus, Users, DollarSign, Calendar, TrendingUp, Target, Award,
  Clock, Play, Pause, Eye, Edit, Trash2, Search, Filter, Download,
  Medal, Star, Crown, BarChart3, CheckCircle, AlertCircle, Zap
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminTournaments() {
  const [activeTab, setActiveTab] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedTournament, setSelectedTournament] = useState(null);

  const [tournamentStats] = useState({
    activeTournaments: 5,
    totalParticipants: 12456,
    totalPrizePool: 485000,
    avgParticipationRate: 34.5,
    upcomingTournaments: 8,
    completedThisMonth: 23
  });

  const [tournaments, setTournaments] = useState([
    {
      id: 1,
      name: 'Weekend Cashback Champions',
      description: 'Compete for the highest cashback earnings this weekend',
      type: 'weekly',
      status: 'active',
      startDate: '2025-12-27 00:00:00',
      endDate: '2025-12-29 23:59:59',
      prizePool: 50000,
      entryFee: 0,
      isFree: true,
      maxParticipants: 1000,
      currentParticipants: 734,
      eligibilityCriteria: {
        minTransactions: 1,
        minSpend: 500,
        membershipTier: 'all',
        regions: ['all']
      },
      leaderboard: {
        scoringRule: 'total_cashback',
        updateFrequency: 'real-time',
        topPerformers: [
          { rank: 1, user: 'john_doe', score: 2450, prize: 20000 },
          { rank: 2, user: 'sarah_smith', score: 2180, prize: 15000 },
          { rank: 3, user: 'mike_jones', score: 1950, prize: 10000 },
          { rank: 4, user: 'emma_wilson', score: 1720, prize: 5000 },
          { rank: 5, user: 'david_brown', score: 1580, prize: 0 }
        ]
      },
      prizeDistribution: [
        { position: '1st', amount: 20000, percentage: 40 },
        { position: '2nd', amount: 15000, percentage: 30 },
        { position: '3rd', amount: 10000, percentage: 20 },
        { position: '4th-10th', amount: 5000, percentage: 10 }
      ],
      participationRate: 73.4,
      engagement: {
        views: 5670,
        entries: 734,
        avgTransactionsPerUser: 3.4
      }
    },
    {
      id: 2,
      name: 'Daily Dining Duel',
      description: 'Daily competition for food lovers',
      type: 'daily',
      status: 'active',
      startDate: '2025-12-27 00:00:00',
      endDate: '2025-12-27 23:59:59',
      prizePool: 10000,
      entryFee: 50,
      isFree: false,
      maxParticipants: 500,
      currentParticipants: 387,
      eligibilityCriteria: {
        minTransactions: 0,
        minSpend: 200,
        membershipTier: 'all',
        regions: ['all']
      },
      leaderboard: {
        scoringRule: 'transaction_count',
        updateFrequency: 'hourly',
        topPerformers: [
          { rank: 1, user: 'foodie_king', score: 12, prize: 4000 },
          { rank: 2, user: 'dine_master', score: 10, prize: 3000 },
          { rank: 3, user: 'taste_hunter', score: 9, prize: 2000 },
          { rank: 4, user: 'meal_warrior', score: 8, prize: 1000 },
          { rank: 5, user: 'chef_lover', score: 7, prize: 0 }
        ]
      },
      prizeDistribution: [
        { position: '1st', amount: 4000, percentage: 40 },
        { position: '2nd', amount: 3000, percentage: 30 },
        { position: '3rd', amount: 2000, percentage: 20 },
        { position: '4th-5th', amount: 1000, percentage: 10 }
      ],
      participationRate: 77.4,
      engagement: {
        views: 2340,
        entries: 387,
        avgTransactionsPerUser: 5.2
      }
    },
    {
      id: 3,
      name: 'Premium Members Mega Event',
      description: 'Exclusive tournament for Prive members',
      type: 'special',
      status: 'active',
      startDate: '2025-12-25 00:00:00',
      endDate: '2025-12-31 23:59:59',
      prizePool: 200000,
      entryFee: 0,
      isFree: true,
      maxParticipants: 2000,
      currentParticipants: 1456,
      eligibilityCriteria: {
        minTransactions: 5,
        minSpend: 5000,
        membershipTier: 'prive',
        regions: ['all']
      },
      leaderboard: {
        scoringRule: 'total_spend',
        updateFrequency: 'real-time',
        topPerformers: [
          { rank: 1, user: 'vip_shopper', score: 45600, prize: 80000 },
          { rank: 2, user: 'premium_buyer', score: 38900, prize: 60000 },
          { rank: 3, user: 'elite_member', score: 32400, prize: 40000 },
          { rank: 4, user: 'gold_user', score: 28700, prize: 20000 },
          { rank: 5, user: 'silver_star', score: 24500, prize: 0 }
        ]
      },
      prizeDistribution: [
        { position: '1st', amount: 80000, percentage: 40 },
        { position: '2nd', amount: 60000, percentage: 30 },
        { position: '3rd', amount: 40000, percentage: 20 },
        { position: '4th-10th', amount: 20000, percentage: 10 }
      ],
      participationRate: 72.8,
      engagement: {
        views: 8920,
        entries: 1456,
        avgTransactionsPerUser: 8.7
      }
    },
    {
      id: 4,
      name: 'New Year Shopping Spree',
      description: 'Grand new year celebration tournament',
      type: 'special',
      status: 'upcoming',
      startDate: '2025-12-31 00:00:00',
      endDate: '2026-01-07 23:59:59',
      prizePool: 500000,
      entryFee: 100,
      isFree: false,
      maxParticipants: 5000,
      currentParticipants: 0,
      eligibilityCriteria: {
        minTransactions: 3,
        minSpend: 1000,
        membershipTier: 'all',
        regions: ['all']
      },
      leaderboard: {
        scoringRule: 'total_spend',
        updateFrequency: 'real-time',
        topPerformers: []
      },
      prizeDistribution: [
        { position: '1st', amount: 200000, percentage: 40 },
        { position: '2nd', amount: 150000, percentage: 30 },
        { position: '3rd', amount: 100000, percentage: 20 },
        { position: '4th-20th', amount: 50000, percentage: 10 }
      ],
      participationRate: 0,
      engagement: {
        views: 15670,
        entries: 0,
        avgTransactionsPerUser: 0
      }
    },
    {
      id: 5,
      name: 'Festive Season Bonanza',
      description: 'Holiday shopping tournament',
      type: 'weekly',
      status: 'upcoming',
      startDate: '2026-01-10 00:00:00',
      endDate: '2026-01-17 23:59:59',
      prizePool: 75000,
      entryFee: 0,
      isFree: true,
      maxParticipants: 1500,
      currentParticipants: 0,
      eligibilityCriteria: {
        minTransactions: 2,
        minSpend: 1000,
        membershipTier: 'all',
        regions: ['all']
      },
      leaderboard: {
        scoringRule: 'total_cashback',
        updateFrequency: 'hourly',
        topPerformers: []
      },
      prizeDistribution: [
        { position: '1st', amount: 30000, percentage: 40 },
        { position: '2nd', amount: 22500, percentage: 30 },
        { position: '3rd', amount: 15000, percentage: 20 },
        { position: '4th-15th', amount: 7500, percentage: 10 }
      ],
      participationRate: 0,
      engagement: {
        views: 3450,
        entries: 0,
        avgTransactionsPerUser: 0
      }
    },
    {
      id: 6,
      name: 'Black Friday Blitz',
      description: 'Biggest shopping tournament of the year',
      type: 'special',
      status: 'ended',
      startDate: '2025-11-29 00:00:00',
      endDate: '2025-12-01 23:59:59',
      prizePool: 1000000,
      entryFee: 200,
      isFree: false,
      maxParticipants: 10000,
      currentParticipants: 8934,
      eligibilityCriteria: {
        minTransactions: 5,
        minSpend: 2000,
        membershipTier: 'all',
        regions: ['all']
      },
      leaderboard: {
        scoringRule: 'total_spend',
        updateFrequency: 'real-time',
        topPerformers: [
          { rank: 1, user: 'shopping_legend', score: 156700, prize: 400000 },
          { rank: 2, user: 'deal_hunter_pro', score: 134500, prize: 300000 },
          { rank: 3, user: 'bargain_master', score: 118900, prize: 200000 },
          { rank: 4, user: 'sale_champion', score: 102300, prize: 100000 },
          { rank: 5, user: 'discount_king', score: 95600, prize: 0 }
        ]
      },
      prizeDistribution: [
        { position: '1st', amount: 400000, percentage: 40 },
        { position: '2nd', amount: 300000, percentage: 30 },
        { position: '3rd', amount: 200000, percentage: 20 },
        { position: '4th-50th', amount: 100000, percentage: 10 }
      ],
      participationRate: 89.34,
      engagement: {
        views: 45670,
        entries: 8934,
        avgTransactionsPerUser: 12.4
      },
      winners: [
        { rank: 1, user: 'shopping_legend', score: 156700, prize: 400000, paid: true },
        { rank: 2, user: 'deal_hunter_pro', score: 134500, prize: 300000, paid: true },
        { rank: 3, user: 'bargain_master', score: 118900, prize: 200000, paid: true }
      ]
    }
  ]);

  const [prizeHistory] = useState([
    {
      id: 1,
      tournamentName: 'Black Friday Blitz',
      date: '2025-12-01',
      totalPaid: 1000000,
      winnersCount: 50,
      status: 'completed'
    },
    {
      id: 2,
      tournamentName: 'Cyber Monday Madness',
      date: '2025-12-02',
      totalPaid: 500000,
      winnersCount: 30,
      status: 'completed'
    },
    {
      id: 3,
      tournamentName: 'Holiday Shopping Week',
      date: '2025-12-15',
      totalPaid: 250000,
      winnersCount: 20,
      status: 'completed'
    }
  ]);

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesSearch = tournament.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tournament.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab =
      (activeTab === 'active' && tournament.status === 'active') ||
      (activeTab === 'upcoming' && tournament.status === 'upcoming') ||
      (activeTab === 'ended' && tournament.status === 'ended') ||
      (activeTab === 'all');
    return matchesSearch && matchesTab;
  });

  const handleDeleteTournament = (id) => {
    setTournaments(prev => prev.filter(t => t.id !== id));
    setSelectedTournament(null);
  };

  const handleToggleStatus = (id) => {
    setTournaments(prev => prev.map(t =>
      t.id === id ? {
        ...t,
        status: t.status === 'active' ? 'paused' : 'active'
      } : t
    ));
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-700',
      upcoming: 'bg-blue-100 text-blue-700',
      ended: 'bg-gray-100 text-gray-700',
      paused: 'bg-orange-100 text-orange-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getTypeColor = (type) => {
    const colors = {
      daily: 'bg-purple-100 text-purple-700',
      weekly: 'bg-blue-100 text-blue-700',
      special: 'bg-yellow-100 text-yellow-700'
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  const getTierBadge = (tier) => {
    switch (tier) {
      case 'prive': return <Crown className="w-4 h-4 text-yellow-600" />;
      case 'gold': return <Medal className="w-4 h-4 text-yellow-600" />;
      case 'silver': return <Medal className="w-4 h-4 text-gray-400" />;
      default: return <Star className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tournaments & Contests</h1>
              <p className="text-gray-600 mt-1">Create and manage competitive tournaments</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Tournament
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{tournamentStats.activeTournaments}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Upcoming</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{tournamentStats.upcomingTournaments}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Participants</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {(tournamentStats.totalParticipants / 1000).toFixed(1)}K
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Prize Pool</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ₹{(tournamentStats.totalPrizePool / 100000).toFixed(1)}L
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Participation</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{tournamentStats.avgParticipationRate}%</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Completed</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{tournamentStats.completedThisMonth}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab('active')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'active'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Active Tournaments
              </button>
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'upcoming'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setActiveTab('ended')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'ended'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Ended
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                All Tournaments
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'analytics'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Analytics
              </button>
              <button
                onClick={() => setActiveTab('prize-history')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'prize-history'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Prize History
              </button>
            </nav>
          </div>

          {/* Tournaments List Tab */}
          {(activeTab === 'active' || activeTab === 'upcoming' || activeTab === 'ended' || activeTab === 'all') && (
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search tournaments..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {filteredTournaments.map((tournament) => (
                  <div
                    key={tournament.id}
                    className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-xl">
                          <Trophy className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{tournament.name}</h3>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tournament.status)}`}>
                              {tournament.status}
                            </span>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(tournament.type)}`}>
                              {tournament.type}
                            </span>
                            {tournament.isFree && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                FREE
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-4">{tournament.description}</p>

                          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-gray-600">Prize Pool</p>
                              <p className="text-lg font-bold text-green-600">₹{(tournament.prizePool / 1000).toFixed(0)}K</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Entry Fee</p>
                              <p className="text-lg font-bold text-gray-900">
                                {tournament.isFree ? 'FREE' : `₹${tournament.entryFee}`}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Participants</p>
                              <p className="text-lg font-bold text-gray-900">
                                {tournament.currentParticipants} / {tournament.maxParticipants}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Duration</p>
                              <p className="text-lg font-bold text-gray-900">
                                {new Date(tournament.startDate).toLocaleDateString()} - {new Date(tournament.endDate).toLocaleDateString()}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Participation Rate</p>
                              <p className="text-lg font-bold text-gray-900">{tournament.participationRate.toFixed(1)}%</p>
                            </div>
                          </div>

                          {tournament.currentParticipants > 0 && (
                            <div className="mb-4">
                              <div className="flex items-center justify-between text-sm mb-2">
                                <span className="text-gray-600">Tournament Progress</span>
                                <span className="font-medium text-gray-900">
                                  {((tournament.currentParticipants / tournament.maxParticipants) * 100).toFixed(1)}% filled
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
                                  style={{ width: `${(tournament.currentParticipants / tournament.maxParticipants) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          )}

                          <div className="bg-white rounded-lg p-4 mb-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Eligibility Criteria</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                              <div>
                                <p className="text-gray-600">Min Transactions</p>
                                <p className="font-medium text-gray-900">{tournament.eligibilityCriteria.minTransactions}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Min Spend</p>
                                <p className="font-medium text-gray-900">₹{tournament.eligibilityCriteria.minSpend}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Membership Tier</p>
                                <p className="font-medium text-gray-900 capitalize flex items-center gap-1">
                                  {getTierBadge(tournament.eligibilityCriteria.membershipTier)}
                                  {tournament.eligibilityCriteria.membershipTier}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">Scoring Rule</p>
                                <p className="font-medium text-gray-900 capitalize">
                                  {tournament.leaderboard.scoringRule.replace(/_/g, ' ')}
                                </p>
                              </div>
                            </div>
                          </div>

                          {tournament.leaderboard.topPerformers.length > 0 && (
                            <div className="bg-white rounded-lg p-4 mb-4">
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <Medal className="w-5 h-5 text-yellow-600" />
                                Current Leaderboard
                              </h4>
                              <div className="space-y-2">
                                {tournament.leaderboard.topPerformers.slice(0, 3).map((performer) => (
                                  <div
                                    key={performer.rank}
                                    className={`flex items-center justify-between p-3 rounded-lg ${
                                      performer.rank === 1 ? 'bg-yellow-50 border-2 border-yellow-300' :
                                      performer.rank === 2 ? 'bg-gray-50 border-2 border-gray-300' :
                                      'bg-orange-50 border-2 border-orange-300'
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                                        performer.rank === 1 ? 'bg-yellow-500' :
                                        performer.rank === 2 ? 'bg-gray-400' :
                                        'bg-orange-500'
                                      }`}>
                                        {performer.rank}
                                      </div>
                                      <div>
                                        <p className="font-medium text-gray-900">{performer.user}</p>
                                        <p className="text-sm text-gray-600">Score: {performer.score.toLocaleString()}</p>
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <p className="font-bold text-green-600">₹{(performer.prize / 1000).toFixed(0)}K</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="bg-white rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Prize Distribution</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              {tournament.prizeDistribution.map((prize, index) => (
                                <div key={index} className="text-center p-3 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                                  <p className="text-sm text-gray-600 mb-1">{prize.position} Place</p>
                                  <p className="text-lg font-bold text-green-600">₹{(prize.amount / 1000).toFixed(0)}K</p>
                                  <p className="text-xs text-gray-500">{prize.percentage}% of pool</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      {tournament.status === 'active' && (
                        <button
                          onClick={() => handleToggleStatus(tournament.id)}
                          className="flex items-center gap-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm"
                        >
                          <Pause className="w-4 h-4" />
                          Pause
                        </button>
                      )}
                      {tournament.status === 'paused' && (
                        <button
                          onClick={() => handleToggleStatus(tournament.id)}
                          className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                        >
                          <Play className="w-4 h-4" />
                          Resume
                        </button>
                      )}
                      <button className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                      <button className="flex items-center gap-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      <button className="flex items-center gap-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm">
                        <BarChart3 className="w-4 h-4" />
                        Analytics
                      </button>
                      {tournament.status === 'ended' && tournament.winners && (
                        <button className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm">
                          <DollarSign className="w-4 h-4" />
                          Process Payouts
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteTournament(tournament.id)}
                        className="flex items-center gap-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Tournament Performance Analytics</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-200">
                  <h4 className="text-sm font-medium text-gray-600 mb-4">Average Participation Rate</h4>
                  <p className="text-4xl font-bold text-gray-900 mb-2">
                    {tournamentStats.avgParticipationRate}%
                  </p>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    +12.3% from last month
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <h4 className="text-sm font-medium text-gray-600 mb-4">Total Prize Money Distributed</h4>
                  <p className="text-4xl font-bold text-gray-900 mb-2">
                    ₹{(tournamentStats.totalPrizePool / 100000).toFixed(2)}L
                  </p>
                  <p className="text-sm text-gray-600">This month</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border border-green-200">
                  <h4 className="text-sm font-medium text-gray-600 mb-4">Avg Transactions per Tournament</h4>
                  <p className="text-4xl font-bold text-gray-900 mb-2">5.7</p>
                  <p className="text-sm text-gray-600">Per participant</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Tournament Type Performance</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Daily Tournaments</span>
                      <span className="text-sm font-bold text-gray-900">45% participation</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Weekly Tournaments</span>
                      <span className="text-sm font-bold text-gray-900">62% participation</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '62%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Special Events</span>
                      <span className="text-sm font-bold text-gray-900">78% participation</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Top Performing Tournaments (All Time)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tournament</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Participants</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Engagement</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prize Pool</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {tournaments
                        .filter(t => t.status === 'ended')
                        .sort((a, b) => b.participationRate - a.participationRate)
                        .slice(0, 5)
                        .map((tournament) => (
                          <tr key={tournament.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-gray-900">{tournament.name}</td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(tournament.type)}`}>
                                {tournament.type}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-gray-900">{tournament.currentParticipants.toLocaleString()}</td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-green-600 h-2 rounded-full"
                                    style={{ width: `${tournament.participationRate}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium text-gray-900">
                                  {tournament.participationRate.toFixed(1)}%
                                </span>
                              </div>
                            </td>
                            <td className="px-4 py-3 font-semibold text-green-600">
                              ₹{(tournament.prizePool / 1000).toFixed(0)}K
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Prize History Tab */}
          {activeTab === 'prize-history' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Prize Distribution History</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Download className="w-4 h-4" />
                  Export Report
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tournament Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Winners</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Paid</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {prizeHistory.map((prize) => (
                      <tr key={prize.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">{prize.tournamentName}</td>
                        <td className="px-4 py-3 text-gray-900">{prize.date}</td>
                        <td className="px-4 py-3 text-gray-900">{prize.winnersCount} users</td>
                        <td className="px-4 py-3 font-bold text-green-600">
                          ₹{(prize.totalPaid / 100000).toFixed(2)}L
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            {prize.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Tournament Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full my-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Create New Tournament</h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tournament Name</label>
                  <input
                    type="text"
                    placeholder="Enter tournament name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    rows="3"
                    placeholder="Tournament description"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tournament Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Special Event</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prize Pool (₹)</label>
                    <input
                      type="number"
                      placeholder="50000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Date & Time</label>
                    <input
                      type="datetime-local"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">End Date & Time</label>
                    <input
                      type="datetime-local"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Entry Fee (₹)</label>
                    <input
                      type="number"
                      placeholder="0 for free"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Participants</label>
                    <input
                      type="number"
                      placeholder="1000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Scoring Rule</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      <option>Total Cashback Earned</option>
                      <option>Total Spend Amount</option>
                      <option>Transaction Count</option>
                      <option>Custom Score</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Membership Tier</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      <option>All Tiers</option>
                      <option>Prive Only</option>
                      <option>Gold & Above</option>
                      <option>Silver & Above</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Create Tournament
                  </button>
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
