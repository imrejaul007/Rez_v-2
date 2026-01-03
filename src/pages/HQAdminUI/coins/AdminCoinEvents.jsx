import { useState } from 'react';
import { Search, Coins, Plus, Calendar, TrendingUp, Users, DollarSign, Store, AlertCircle, Play, Pause, Edit, Trash2, BarChart3, Award, Target, Zap } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminCoinEvents() {
  const [activeTab, setActiveTab] = useState('multiplier');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const [coinEventsStats] = useState({
    activeEvents: 8,
    totalParticipants: 45678,
    coinsDistributed: 12345678,
    merchantsParticipating: 234,
    avgEngagementRate: 68.5,
    totalSpendImpact: 8765432
  });

  const [multiplierEvents, setMultiplierEvents] = useState([
    {
      id: 1,
      name: 'Weekend Warrior 3X Coins',
      description: 'Triple coins on all purchases this weekend',
      multiplier: '3X',
      multiplierValue: 3,
      coinType: 'rezCoin',
      startDate: '2024-01-27T00:00:00',
      endDate: '2024-01-28T23:59:00',
      status: 'upcoming',
      conditions: {
        minSpend: 500,
        categories: ['All Categories'],
        stores: ['All Stores'],
        maxCoinsPerUser: 5000
      },
      participants: 0,
      coinsDistributed: 0,
      totalSpend: 0,
      engagementRate: 0,
      merchantsParticipating: 234
    },
    {
      id: 2,
      name: 'Electronics Bonanza 5X',
      description: '5X coins on all electronics purchases',
      multiplier: '5X',
      multiplierValue: 5,
      coinType: 'rezCoin',
      startDate: '2024-01-25T00:00:00',
      endDate: '2024-01-31T23:59:00',
      status: 'active',
      conditions: {
        minSpend: 1000,
        categories: ['Electronics', 'Gadgets'],
        stores: ['All Stores'],
        maxCoinsPerUser: 10000
      },
      participants: 3456,
      coinsDistributed: 987654,
      totalSpend: 5432100,
      engagementRate: 72.3,
      merchantsParticipating: 45
    },
    {
      id: 3,
      name: 'Fashion Friday 2X',
      description: 'Double coins on fashion and accessories',
      multiplier: '2X',
      multiplierValue: 2,
      coinType: 'brandedCoin',
      startDate: '2024-01-26T00:00:00',
      endDate: '2024-01-26T23:59:00',
      status: 'upcoming',
      conditions: {
        minSpend: 300,
        categories: ['Fashion', 'Accessories'],
        stores: ['All Stores'],
        maxCoinsPerUser: 3000
      },
      participants: 0,
      coinsDistributed: 0,
      totalSpend: 0,
      engagementRate: 0,
      merchantsParticipating: 89
    },
    {
      id: 4,
      name: 'Mega Monday 10X',
      description: 'Massive 10X coins on selected premium stores',
      multiplier: '10X',
      multiplierValue: 10,
      coinType: 'priveCoin',
      startDate: '2024-01-22T00:00:00',
      endDate: '2024-01-22T23:59:00',
      status: 'expired',
      conditions: {
        minSpend: 2000,
        categories: ['All Categories'],
        stores: ['Premium Store', 'Elite Shop', 'Luxury Boutique'],
        maxCoinsPerUser: 20000
      },
      participants: 8901,
      coinsDistributed: 2345678,
      totalSpend: 12345678,
      engagementRate: 85.6,
      merchantsParticipating: 12
    },
    {
      id: 5,
      name: 'Food Fest 3X',
      description: 'Triple coins on all food orders',
      multiplier: '3X',
      multiplierValue: 3,
      coinType: 'rezCoin',
      startDate: '2024-01-25T12:00:00',
      endDate: '2024-01-25T22:00:00',
      status: 'active',
      conditions: {
        minSpend: 200,
        categories: ['Food & Dining', 'Restaurants'],
        stores: ['All Stores'],
        maxCoinsPerUser: 2000
      },
      participants: 5678,
      coinsDistributed: 456789,
      totalSpend: 2345678,
      engagementRate: 65.4,
      merchantsParticipating: 156
    }
  ]);

  const [doubleCashbackDays, setDoubleCashbackDays] = useState([
    {
      id: 1,
      name: 'Double Cashback Saturday',
      description: 'Get 2X cashback on all purchases',
      date: '2024-01-27',
      status: 'upcoming',
      stores: ['All Stores'],
      categories: ['All Categories'],
      minSpend: 100,
      maxCashbackPerUser: 500,
      participants: 0,
      cashbackDistributed: 0,
      totalSpend: 0
    },
    {
      id: 2,
      name: 'Electronics Double Day',
      description: '2X cashback on electronics',
      date: '2024-01-25',
      status: 'active',
      stores: ['All Stores'],
      categories: ['Electronics'],
      minSpend: 500,
      maxCashbackPerUser: 1000,
      participants: 2345,
      cashbackDistributed: 234567,
      totalSpend: 3456789
    },
    {
      id: 3,
      name: 'Fashion Flash 2X',
      description: 'Double cashback on fashion',
      date: '2024-01-20',
      status: 'expired',
      stores: ['All Stores'],
      categories: ['Fashion', 'Accessories'],
      minSpend: 300,
      maxCashbackPerUser: 750,
      participants: 4567,
      cashbackDistributed: 456789,
      totalSpend: 5678901
    }
  ]);

  const [coinDropCampaigns, setCoinDropCampaigns] = useState([
    {
      id: 1,
      name: 'New Year Mega Drop',
      description: 'Everyone gets 1000 bonus coins',
      status: 'active',
      coinsPerUser: 1000,
      totalUsers: 50000,
      coinsDistributed: 35000000,
      claimed: 35000,
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      conditions: 'Minimum 1 purchase in last 30 days'
    },
    {
      id: 2,
      name: 'First Purchase Bonus',
      description: '500 coins for new users first purchase',
      status: 'active',
      coinsPerUser: 500,
      totalUsers: 10000,
      coinsDistributed: 3500000,
      claimed: 7000,
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      conditions: 'First time users only'
    },
    {
      id: 3,
      name: 'Birthday Coin Blast',
      description: '2000 coins on your birthday',
      status: 'active',
      coinsPerUser: 2000,
      totalUsers: 5000,
      coinsDistributed: 4500000,
      claimed: 2250,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      conditions: 'Users with birthday in current month'
    }
  ]);

  const [merchantParticipation] = useState([
    { merchant: 'Tech Galaxy', events: 12, coinsDistributed: 1234567, revenue: 5432100, roi: 4.4 },
    { merchant: 'Fashion Hub', events: 18, coinsDistributed: 987654, revenue: 4321098, roi: 4.4 },
    { merchant: 'Food Paradise', events: 24, coinsDistributed: 765432, revenue: 3210987, roi: 4.2 },
    { merchant: 'Beauty World', events: 15, coinsDistributed: 654321, revenue: 2345678, roi: 3.6 },
    { merchant: 'Home Essentials', events: 10, coinsDistributed: 543210, revenue: 1987654, roi: 3.7 }
  ]);

  const filteredMultiplierEvents = multiplierEvents.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || event.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const filteredCashbackDays = doubleCashbackDays.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || event.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleCreateEvent = (eventData) => {
    const newEvent = {
      id: multiplierEvents.length + 1,
      ...eventData,
      participants: 0,
      coinsDistributed: 0,
      totalSpend: 0,
      engagementRate: 0
    };
    setMultiplierEvents([newEvent, ...multiplierEvents]);
    setShowCreateModal(false);
  };

  const handleDeleteEvent = (id) => {
    setMultiplierEvents(prev => prev.filter(e => e.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'upcoming': return 'bg-blue-100 text-blue-700';
      case 'expired': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getMultiplierColor = (multiplier) => {
    switch (multiplier) {
      case '10X': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case '5X': return 'bg-gradient-to-r from-orange-500 to-red-500';
      case '3X': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case '2X': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getCoinTypeInfo = (coinType) => {
    const coinTypes = {
      rezCoin: { label: 'ReZ Coin', icon: '💚', bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-300' },
      brandedCoin: { label: 'Branded Coin', icon: '🔵', bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
      priveCoin: { label: 'Privé Coin', icon: '👑', bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' },
      promoCoin: { label: 'Promo Coin', icon: '🎫', bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300' }
    };
    return coinTypes[coinType] || coinTypes.rezCoin;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Coin Events Manager</h1>
              <p className="text-gray-600 mt-1">Manage coin multiplier events and double cashback campaigns</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Coin Event
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Coin Events</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{coinEventsStats.activeEvents}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Coins className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                +22.5%
              </span>
              <span className="text-gray-600 text-sm">vs last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Participants</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{coinEventsStats.totalParticipants.toLocaleString()}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Engagement: {coinEventsStats.avgEngagementRate}%
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Coins Distributed</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {(coinEventsStats.coinsDistributed / 1000000).toFixed(1)}M
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              {coinEventsStats.merchantsParticipating} merchants participating
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="upcoming">Upcoming</option>
              <option value="expired">Expired</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('multiplier')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'multiplier'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Multiplier Events
              </button>
              <button
                onClick={() => setActiveTab('cashback')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'cashback'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Double Cashback Days
              </button>
              <button
                onClick={() => setActiveTab('coindrop')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'coindrop'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Coin Drop Campaigns
              </button>
              <button
                onClick={() => setActiveTab('merchants')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'merchants'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Merchant Participation
              </button>
            </nav>
          </div>

          {/* Multiplier Events Tab */}
          {activeTab === 'multiplier' && (
            <div className="p-6">
              <div className="space-y-4">
                {filteredMultiplierEvents.map((event) => (
                  <div key={event.id} className={`border-2 rounded-xl p-6 ${
                    event.status === 'active' ? 'border-green-300 bg-green-50' :
                    event.status === 'upcoming' ? 'border-blue-300 bg-blue-50' :
                    'border-gray-300 bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`${getMultiplierColor(event.multiplier)} text-white px-4 py-2 rounded-lg font-bold text-xl`}>
                            {event.multiplier} COINS
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">{event.name}</h3>
                          {event.coinType && (
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCoinTypeInfo(event.coinType).bg} ${getCoinTypeInfo(event.coinType).text}`}>
                              {getCoinTypeInfo(event.coinType).icon} {getCoinTypeInfo(event.coinType).label}
                            </span>
                          )}
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(event.status)}`}>
                            {event.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedEvent(event);
                            setShowEditModal(true);
                          }}
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        {event.status !== 'active' && (
                          <button
                            onClick={() => handleDeleteEvent(event.id)}
                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Conditions */}
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Event Conditions</h4>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div>
                          <p className="text-xs text-gray-600">Coin Type</p>
                          <p className={`text-sm font-bold ${getCoinTypeInfo(event.coinType).text}`}>
                            {getCoinTypeInfo(event.coinType).icon} {getCoinTypeInfo(event.coinType).label}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Minimum Spend</p>
                          <p className="text-lg font-bold text-gray-900">₹{event.conditions.minSpend}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Categories</p>
                          <p className="text-sm font-medium text-gray-900">{event.conditions.categories.join(', ')}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Stores</p>
                          <p className="text-sm font-medium text-gray-900">
                            {event.conditions.stores.length > 2 ? 'All Stores' : event.conditions.stores.join(', ')}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Max Coins/User</p>
                          <p className="text-lg font-bold text-indigo-600">{event.conditions.maxCoinsPerUser.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    {event.status !== 'upcoming' && (
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div className="bg-white rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Users className="w-4 h-4 text-blue-600" />
                            <p className="text-xs text-gray-600">Participants</p>
                          </div>
                          <p className="text-xl font-bold text-gray-900">{event.participants.toLocaleString()}</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Coins className="w-4 h-4 text-purple-600" />
                            <p className="text-xs text-gray-600">Coins Given</p>
                          </div>
                          <p className="text-xl font-bold text-gray-900">{(event.coinsDistributed / 1000).toFixed(0)}K</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <p className="text-xs text-gray-600">Total Spend</p>
                          </div>
                          <p className="text-xl font-bold text-gray-900">₹{(event.totalSpend / 100000).toFixed(1)}L</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Target className="w-4 h-4 text-orange-600" />
                            <p className="text-xs text-gray-600">Engagement</p>
                          </div>
                          <p className="text-xl font-bold text-gray-900">{event.engagementRate}%</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Store className="w-4 h-4 text-indigo-600" />
                            <p className="text-xs text-gray-600">Merchants</p>
                          </div>
                          <p className="text-xl font-bold text-gray-900">{event.merchantsParticipating}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                {filteredMultiplierEvents.length === 0 && (
                  <div className="text-center py-12">
                    <Coins className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No multiplier events found</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Double Cashback Days Tab */}
          {activeTab === 'cashback' && (
            <div className="p-6">
              <div className="space-y-4">
                {filteredCashbackDays.map((event) => (
                  <div key={event.id} className={`border-2 rounded-xl p-6 ${
                    event.status === 'active' ? 'border-green-300 bg-green-50' :
                    event.status === 'upcoming' ? 'border-blue-300 bg-blue-50' :
                    'border-gray-300 bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-bold text-xl">
                            2X CASHBACK
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">{event.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(event.status)}`}>
                            {event.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(event.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Conditions */}
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-xs text-gray-600">Min Spend</p>
                          <p className="text-lg font-bold text-gray-900">₹{event.minSpend}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Max Cashback/User</p>
                          <p className="text-lg font-bold text-green-600">₹{event.maxCashbackPerUser}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Categories</p>
                          <p className="text-sm font-medium text-gray-900">{event.categories.join(', ')}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Stores</p>
                          <p className="text-sm font-medium text-gray-900">{event.stores.join(', ')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Performance */}
                    {event.status !== 'upcoming' && (
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Participants</p>
                          <p className="text-2xl font-bold text-gray-900">{event.participants.toLocaleString()}</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Cashback Distributed</p>
                          <p className="text-2xl font-bold text-green-600">₹{(event.cashbackDistributed / 1000).toFixed(0)}K</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Total Spend</p>
                          <p className="text-2xl font-bold text-indigo-600">₹{(event.totalSpend / 100000).toFixed(1)}L</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Coin Drop Campaigns Tab */}
          {activeTab === 'coindrop' && (
            <div className="p-6">
              <div className="space-y-4">
                {coinDropCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border-2 border-purple-300 bg-purple-50 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Zap className="w-8 h-8 text-purple-600" />
                          <h3 className="text-2xl font-bold text-gray-900">{campaign.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(campaign.status)}`}>
                            {campaign.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{campaign.description}</p>
                        <p className="text-sm text-gray-500">Condition: {campaign.conditions}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Coins Per User</p>
                        <p className="text-2xl font-bold text-purple-600">{campaign.coinsPerUser.toLocaleString()}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Eligible Users</p>
                        <p className="text-2xl font-bold text-gray-900">{campaign.totalUsers.toLocaleString()}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Claimed</p>
                        <p className="text-2xl font-bold text-green-600">{campaign.claimed.toLocaleString()}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Coins Distributed</p>
                        <p className="text-2xl font-bold text-indigo-600">
                          {(campaign.coinsDistributed / 1000000).toFixed(1)}M
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Claim Rate</p>
                        <p className="text-2xl font-bold text-orange-600">
                          {Math.round((campaign.claimed / campaign.totalUsers) * 100)}%
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Campaign Progress</span>
                        <span className="text-sm font-medium text-gray-900">
                          {campaign.claimed} / {campaign.totalUsers} users claimed
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-purple-600 h-3 rounded-full"
                          style={{ width: `${(campaign.claimed / campaign.totalUsers) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Merchant Participation Tab */}
          {activeTab === 'merchants' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Merchant Event Performance</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merchant</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Events Participated</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Coins Distributed</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue Generated</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ROI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {merchantParticipation.map((merchant, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-900">{merchant.merchant}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{merchant.events}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-purple-600">
                            {(merchant.coinsDistributed / 1000).toFixed(0)}K coins
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-green-600">₹{(merchant.revenue / 100000).toFixed(1)}L</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-indigo-600">{merchant.roi}x</p>
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

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full my-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Create Coin Event</h2>
              <p className="text-sm text-gray-600 mt-1">Set up a new coin multiplier event</p>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Name</label>
                    <input
                      type="text"
                      id="eventName"
                      placeholder="Weekend Warrior 3X Coins"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Multiplier</label>
                    <select id="multiplier" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="2">2X</option>
                      <option value="3">3X</option>
                      <option value="5">5X</option>
                      <option value="10">10X</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Coin Type</label>
                    <select id="coinType" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="rezCoin">💚 ReZ Coin</option>
                      <option value="brandedCoin">🔵 Branded Coin</option>
                      <option value="priveCoin">👑 Privé Coin</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    id="eventDescription"
                    placeholder="Triple coins on all purchases this weekend"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    rows="2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Date/Time</label>
                    <input
                      type="datetime-local"
                      id="startDate"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">End Date/Time</label>
                    <input
                      type="datetime-local"
                      id="endDate"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Spend</label>
                    <input
                      type="number"
                      id="minSpend"
                      placeholder="500"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Coins Per User</label>
                    <input
                      type="number"
                      id="maxCoins"
                      placeholder="5000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select id="status" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option value="upcoming">Upcoming</option>
                    <option value="active">Active</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const multiplierValue = parseInt(document.getElementById('multiplier').value);
                  const eventData = {
                    name: document.getElementById('eventName').value,
                    description: document.getElementById('eventDescription').value,
                    multiplier: `${multiplierValue}X`,
                    multiplierValue: multiplierValue,
                    coinType: document.getElementById('coinType').value,
                    startDate: document.getElementById('startDate').value,
                    endDate: document.getElementById('endDate').value,
                    status: document.getElementById('status').value,
                    conditions: {
                      minSpend: parseInt(document.getElementById('minSpend').value),
                      categories: ['All Categories'],
                      stores: ['All Stores'],
                      maxCoinsPerUser: parseInt(document.getElementById('maxCoins').value)
                    },
                    merchantsParticipating: 0
                  };
                  handleCreateEvent(eventData);
                }}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Create Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
