import { useState } from 'react';
import {
  Wallet, Plus, TrendingUp, Users, Eye, ShoppingCart, DollarSign,
  Play, Pause, CheckCircle, XCircle, AlertCircle, Edit2, Crown,
  Target, Percent, Award, BarChart3, ArrowUp, ArrowDown, Sparkles
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantCashbackPrograms() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filterType, setFilterType] = useState('all');

  const [programForm, setProgramForm] = useState({
    title: '',
    cashbackRate: '',
    category: '',
    minSpend: '',
    maxCashback: '',
    budgetAllocation: '',
    isSuperCashback: false,
    description: ''
  });

  const [cashbackPrograms, setCashbackPrograms] = useState([
    {
      id: 1,
      title: 'Super Cashback Program',
      code: 'SUPERCB30',
      cashbackRate: 30,
      category: 'All Categories',
      minSpend: 500,
      maxCashback: 500,
      budgetAllocated: 100000,
      budgetUsed: 45678,
      isSuperCashback: true,
      status: 'active',
      tier: 'platinum',
      views: 12345,
      clicks: 3456,
      transactions: 152,
      totalCashbackGiven: 45678,
      avgCashback: 300,
      repeatRate: 68,
      competitorAvg: 20,
      monthlyPayout: 45678,
      topCategories: [
        { name: 'Food & Beverage', cashback: 18234, count: 67 },
        { name: 'Wellness', cashback: 15432, count: 45 },
        { name: 'Shopping', cashback: 12012, count: 40 }
      ]
    },
    {
      id: 2,
      title: 'Food Category Cashback',
      code: 'FOODCB15',
      cashbackRate: 15,
      category: 'Food & Beverage',
      minSpend: 300,
      maxCashback: 200,
      budgetAllocated: 50000,
      budgetUsed: 28945,
      isSuperCashback: false,
      status: 'active',
      tier: 'gold',
      views: 8765,
      clicks: 2345,
      transactions: 193,
      totalCashbackGiven: 28945,
      avgCashback: 150,
      repeatRate: 72,
      competitorAvg: 12,
      monthlyPayout: 28945,
      topCategories: [
        { name: 'Lunch Deals', cashback: 12456, count: 89 },
        { name: 'Coffee & Snacks', cashback: 9234, count: 67 },
        { name: 'Dinner Specials', cashback: 7255, count: 37 }
      ]
    },
    {
      id: 3,
      title: 'Weekend Wellness Cashback',
      code: 'WEEKCB20',
      cashbackRate: 20,
      category: 'Wellness & Spa',
      minSpend: 1000,
      maxCashback: 400,
      budgetAllocated: 75000,
      budgetUsed: 34567,
      isSuperCashback: false,
      status: 'active',
      tier: 'silver',
      views: 5678,
      clicks: 1456,
      transactions: 86,
      totalCashbackGiven: 34567,
      avgCashback: 402,
      repeatRate: 54,
      competitorAvg: 15,
      monthlyPayout: 34567,
      topCategories: [
        { name: 'Massage', cashback: 18234, count: 45 },
        { name: 'Facial', cashback: 10123, count: 28 },
        { name: 'Body Treatments', cashback: 6210, count: 13 }
      ]
    },
    {
      id: 4,
      title: 'Shopping Spree Cashback',
      code: 'SHOPCB10',
      cashbackRate: 10,
      category: 'Shopping',
      minSpend: 500,
      maxCashback: 300,
      budgetAllocated: 60000,
      budgetUsed: 52340,
      isSuperCashback: false,
      status: 'paused',
      tier: 'bronze',
      views: 9876,
      clicks: 2678,
      transactions: 524,
      totalCashbackGiven: 52340,
      avgCashback: 100,
      repeatRate: 61,
      competitorAvg: 8,
      monthlyPayout: 52340,
      topCategories: [
        { name: 'Fashion', cashback: 26170, count: 234 },
        { name: 'Electronics', cashback: 15702, count: 156 },
        { name: 'Home & Living', cashback: 10468, count: 134 }
      ]
    }
  ]);

  const [stats, setStats] = useState({
    activePrograms: 3,
    totalCashbackGiven: 161530,
    totalTransactions: 955,
    budgetRemaining: 123470,
    avgCashbackRate: 18.75
  });

  const categories = [
    'All Categories',
    'Food & Beverage',
    'Wellness & Spa',
    'Shopping',
    'Fitness',
    'Entertainment',
    'Services'
  ];

  const tierConfig = {
    platinum: { color: 'purple', label: 'Super Cashback', icon: Crown },
    gold: { color: 'yellow', label: 'Gold Program', icon: Award },
    silver: { color: 'gray', label: 'Silver Program', icon: Award },
    bronze: { color: 'orange', label: 'Bronze Program', icon: Award }
  };

  const handleCreateProgram = (e) => {
    e.preventDefault();
    const code = 'CB' + Math.random().toString(36).substr(2, 6).toUpperCase();

    const newProgram = {
      id: cashbackPrograms.length + 1,
      title: programForm.title,
      code: code,
      cashbackRate: parseFloat(programForm.cashbackRate),
      category: programForm.category,
      minSpend: parseFloat(programForm.minSpend),
      maxCashback: parseFloat(programForm.maxCashback),
      budgetAllocated: parseFloat(programForm.budgetAllocation),
      budgetUsed: 0,
      isSuperCashback: programForm.isSuperCashback,
      status: 'active',
      tier: programForm.isSuperCashback ? 'platinum' : 'bronze',
      views: 0,
      clicks: 0,
      transactions: 0,
      totalCashbackGiven: 0,
      avgCashback: 0,
      repeatRate: 0,
      competitorAvg: 10,
      monthlyPayout: 0,
      topCategories: [],
      description: programForm.description
    };

    setCashbackPrograms([newProgram, ...cashbackPrograms]);
    setShowCreateForm(false);
    setProgramForm({
      title: '',
      cashbackRate: '',
      category: '',
      minSpend: '',
      maxCashback: '',
      budgetAllocation: '',
      isSuperCashback: false,
      description: ''
    });
  };

  const toggleProgramStatus = (programId) => {
    setCashbackPrograms(cashbackPrograms.map(program => {
      if (program.id === programId && program.status === 'active') {
        return { ...program, status: 'paused' };
      } else if (program.id === programId && program.status === 'paused') {
        return { ...program, status: 'active' };
      }
      return program;
    }));
  };

  const filteredPrograms = cashbackPrograms.filter(program => {
    if (filterType === 'all') return true;
    if (filterType === 'super') return program.isSuperCashback;
    if (filterType === 'standard') return !program.isSuperCashback;
    return program.status === filterType;
  });

  const getStatusConfig = (status) => {
    const configs = {
      active: { color: 'green', icon: Play, label: 'Active' },
      paused: { color: 'orange', icon: Pause, label: 'Paused' },
      expired: { color: 'gray', icon: XCircle, label: 'Expired' }
    };
    return configs[status] || configs.active;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Wallet className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Cashback Programs Manager</h1>
                  <p className="text-green-100 mt-1">Configure cashback rates and super cashback programs</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 font-semibold shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Create Cashback Program
            </button>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <Wallet className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Active Programs</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.activePrograms}</p>
            <p className="text-sm text-green-600 mt-1">Running now</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Cashback Given</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{(stats.totalCashbackGiven / 1000).toFixed(0)}K</p>
            <p className="text-sm text-blue-600 mt-1">This month</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Transactions</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalTransactions}</p>
            <p className="text-sm text-purple-600 mt-1">With cashback</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Target className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Budget Left</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{(stats.budgetRemaining / 1000).toFixed(0)}K</p>
            <p className="text-sm text-orange-600 mt-1">Remaining</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Percent className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Avg Rate</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.avgCashbackRate}%</p>
            <p className="text-sm text-indigo-600 mt-1">Across programs</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Filter:</span>
            <div className="flex gap-2">
              {['all', 'super', 'standard', 'active', 'paused'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filterType === type
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type === 'all' ? 'All Programs' :
                   type === 'super' ? 'Super Cashback' :
                   type === 'standard' ? 'Standard' :
                   type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cashback Programs List */}
        <div className="space-y-4">
          {filteredPrograms.map((program) => {
            const statusConfig = getStatusConfig(program.status);
            const StatusIcon = statusConfig.icon;
            const tier = tierConfig[program.tier];
            const TierIcon = tier.icon;
            const budgetPercentage = (program.budgetUsed / program.budgetAllocated) * 100;

            return (
              <div
                key={program.id}
                className="bg-white rounded-xl shadow-sm border-2 border-gray-200 overflow-hidden hover:shadow-md transition-all"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                        {program.isSuperCashback && (
                          <span className="flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full animate-pulse">
                            <Crown className="w-3 h-3" />
                            SUPER CASHBACK
                          </span>
                        )}
                        <span className={`flex items-center gap-1 px-3 py-1 bg-${tier.color}-100 text-${tier.color}-700 text-sm font-medium rounded-full`}>
                          <TierIcon className="w-4 h-4" />
                          {tier.label}
                        </span>
                        <span className={`flex items-center gap-1 px-3 py-1 bg-${statusConfig.color}-100 text-${statusConfig.color}-700 text-sm font-medium rounded-full`}>
                          <StatusIcon className="w-4 h-4" />
                          {statusConfig.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {program.category}
                        </span>
                        <span className="font-mono bg-gray-100 px-3 py-1 rounded font-semibold text-gray-900">
                          {program.code}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {(program.status === 'active' || program.status === 'paused') && (
                        <button
                          onClick={() => toggleProgramStatus(program.id)}
                          className={`p-2 rounded-lg ${
                            program.status === 'active'
                              ? 'text-orange-600 hover:bg-orange-50'
                              : 'text-green-600 hover:bg-green-50'
                          }`}
                        >
                          {program.status === 'active' ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </button>
                      )}
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <Edit2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Cashback Details */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                      <p className="text-sm text-gray-600 mb-1">Cashback Rate</p>
                      <p className="text-3xl font-bold text-green-600">{program.cashbackRate}%</p>
                      <div className="flex items-center gap-1 mt-1 text-xs text-green-700">
                        <ArrowUp className="w-3 h-3" />
                        +{program.cashbackRate - program.competitorAvg}% vs competitors
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <p className="text-sm text-gray-600 mb-1">Min Spend</p>
                      <p className="text-2xl font-bold text-purple-600">₹{program.minSpend}</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <p className="text-sm text-gray-600 mb-1">Max Cashback</p>
                      <p className="text-2xl font-bold text-orange-600">₹{program.maxCashback}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <p className="text-sm text-gray-600 mb-1">Avg Cashback</p>
                      <p className="text-2xl font-bold text-blue-600">₹{program.avgCashback}</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                      <p className="text-sm text-gray-600 mb-1">Repeat Rate</p>
                      <p className="text-2xl font-bold text-indigo-600">{program.repeatRate}%</p>
                    </div>
                  </div>

                  {/* Budget Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Budget: ₹{program.budgetUsed.toLocaleString()} / ₹{program.budgetAllocated.toLocaleString()}
                      </span>
                      <span className={`text-sm font-bold ${
                        budgetPercentage < 70 ? 'text-green-600' :
                        budgetPercentage < 90 ? 'text-orange-600' :
                        'text-red-600'
                      }`}>
                        {budgetPercentage.toFixed(0)}% used
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all ${
                          budgetPercentage < 70 ? 'bg-green-500' :
                          budgetPercentage < 90 ? 'bg-orange-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${budgetPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Top Categories */}
                  {program.topCategories.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Top Performing Categories</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {program.topCategories.map((cat, idx) => (
                          <div key={idx} className="bg-green-50 rounded-lg p-3 border border-green-200">
                            <p className="text-sm font-medium text-gray-900">{cat.name}</p>
                            <p className="text-lg font-bold text-green-600">₹{cat.cashback.toLocaleString()}</p>
                            <p className="text-xs text-gray-600 mt-1">{cat.count} transactions</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-6 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Views</p>
                      <p className="text-lg font-bold text-gray-900">{program.views.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Clicks</p>
                      <p className="text-lg font-bold text-gray-900">{program.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Transactions</p>
                      <p className="text-lg font-bold text-green-600">{program.transactions}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Given</p>
                      <p className="text-lg font-bold text-purple-600">₹{(program.totalCashbackGiven / 1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Monthly Payout</p>
                      <p className="text-lg font-bold text-orange-600">₹{(program.monthlyPayout / 1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">vs Competitors</p>
                      <p className="text-lg font-bold text-indigo-600">+{program.cashbackRate - program.competitorAvg}%</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Wallet className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No cashback programs found</h3>
            <p className="text-gray-600 mb-4">Create cashback programs to drive customer loyalty</p>
            <button
              onClick={() => setShowCreateForm(true)}
              className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Plus className="w-5 h-5" />
              Create Cashback Program
            </button>
          </div>
        )}
      </div>

      {/* Create Program Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Create Cashback Program</h2>
                </div>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleCreateProgram} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Program Title *
                </label>
                <input
                  type="text"
                  required
                  value={programForm.title}
                  onChange={(e) => setProgramForm({ ...programForm, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., Food Category Cashback"
                />
              </div>

              <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <input
                  type="checkbox"
                  id="superCashback"
                  checked={programForm.isSuperCashback}
                  onChange={(e) => setProgramForm({ ...programForm, isSuperCashback: e.target.checked })}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor="superCashback" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Crown className="w-5 h-5 text-purple-600" />
                  Join Super Cashback Program (10-30% cashback rates)
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cashback Rate (%) *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    max={programForm.isSuperCashback ? "30" : "20"}
                    value={programForm.cashbackRate}
                    onChange={(e) => setProgramForm({ ...programForm, cashbackRate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={programForm.isSuperCashback ? "10-30" : "1-20"}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {programForm.isSuperCashback ? 'Super: 10-30%' : 'Standard: 1-20%'}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    required
                    value={programForm.category}
                    onChange={(e) => setProgramForm({ ...programForm, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Spend (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    value={programForm.minSpend}
                    onChange={(e) => setProgramForm({ ...programForm, minSpend: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Cashback (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    value={programForm.maxCashback}
                    onChange={(e) => setProgramForm({ ...programForm, maxCashback: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Allocation (₹) *
                </label>
                <input
                  type="number"
                  required
                  value={programForm.budgetAllocation}
                  onChange={(e) => setProgramForm({ ...programForm, budgetAllocation: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="100000"
                />
              </div>

              {programForm.minSpend && programForm.cashbackRate && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Example Cashback</p>
                  <p className="text-3xl font-bold text-green-600">
                    ₹{((parseFloat(programForm.minSpend) * parseFloat(programForm.cashbackRate)) / 100).toFixed(0)}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    On minimum spend of ₹{programForm.minSpend}
                  </p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={programForm.description}
                  onChange={(e) => setProgramForm({ ...programForm, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Describe your cashback program..."
                />
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium mb-1">Cashback Program Tips:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Higher cashback rates drive more customer loyalty</li>
                      <li>Super Cashback programs (10-30%) outperform competitors</li>
                      <li>Set realistic budgets to ensure sustainability</li>
                      <li>Monitor competitor rates to stay competitive</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 font-semibold"
                >
                  Launch Cashback Program
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
