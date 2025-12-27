import { useState, useEffect } from 'react';
import {
  Zap, Plus, Clock, Tag, TrendingUp, Users, Eye, ShoppingCart, DollarSign,
  Play, Pause, CheckCircle, XCircle, AlertCircle, Copy, Edit2, Trash2,
  BarChart3, Target, Sparkles, Timer, Gift, ArrowUp, ArrowDown, Download
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantFlashDeals() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  const [dealForm, setDealForm] = useState({
    title: '',
    discount: '',
    originalPrice: '',
    quantity: '',
    duration: '30',
    category: '',
    description: ''
  });

  const [flashDeals, setFlashDeals] = useState([
    {
      id: 1,
      title: 'Flash Sale: 70% OFF Premium Coffee',
      code: 'FLASH70COFFEE',
      discount: 70,
      originalPrice: 299,
      finalPrice: 89,
      quantity: { total: 100, remaining: 23 },
      status: 'active',
      duration: 120, // minutes
      startTime: new Date(Date.now() - 45 * 60000),
      endTime: new Date(Date.now() + 75 * 60000),
      category: 'Food & Beverage',
      views: 2345,
      clicks: 567,
      conversions: 77,
      revenue: 6853,
      conversionRate: 13.6,
      trending: true,
      friendRedemptions: 34,
      description: 'Limited time offer on artisan coffee blends'
    },
    {
      id: 2,
      title: 'Lightning Deal: Buy 1 Get 1 Pizza',
      code: 'LIGHTNING2X',
      discount: 50,
      originalPrice: 599,
      finalPrice: 299,
      quantity: { total: 50, remaining: 8 },
      status: 'active',
      duration: 240,
      startTime: new Date(Date.now() - 180 * 60000),
      endTime: new Date(Date.now() + 60 * 60000),
      category: 'Food & Beverage',
      views: 4567,
      clicks: 1234,
      conversions: 42,
      revenue: 12558,
      conversionRate: 3.4,
      trending: true,
      friendRedemptions: 19,
      description: 'Double the taste, half the price'
    },
    {
      id: 3,
      title: '2-Hour Blitz: 60% OFF Spa Package',
      code: 'BLITZ60SPA',
      discount: 60,
      originalPrice: 2500,
      finalPrice: 1000,
      quantity: { total: 20, remaining: 20 },
      status: 'scheduled',
      duration: 120,
      startTime: new Date(Date.now() + 120 * 60000),
      endTime: new Date(Date.now() + 240 * 60000),
      category: 'Wellness',
      views: 0,
      clicks: 0,
      conversions: 0,
      revenue: 0,
      conversionRate: 0,
      trending: false,
      friendRedemptions: 0,
      description: 'Luxury spa experience at budget price'
    },
    {
      id: 4,
      title: 'Flash: 50% OFF Gym Membership',
      code: 'FLASH50GYM',
      discount: 50,
      originalPrice: 4999,
      finalPrice: 2499,
      quantity: { total: 30, remaining: 0 },
      status: 'completed',
      duration: 240,
      startTime: new Date(Date.now() - 300 * 60000),
      endTime: new Date(Date.now() - 60 * 60000),
      category: 'Fitness',
      views: 3456,
      clicks: 890,
      conversions: 30,
      revenue: 74970,
      conversionRate: 3.4,
      trending: false,
      friendRedemptions: 14,
      description: 'Get fit for less this season'
    },
    {
      id: 5,
      title: '1-Hour Special: Burger Combo @ ₹99',
      code: 'HOUR99BURGER',
      discount: 65,
      originalPrice: 283,
      finalPrice: 99,
      quantity: { total: 75, remaining: 13 },
      status: 'paused',
      duration: 60,
      startTime: new Date(Date.now() - 30 * 60000),
      endTime: new Date(Date.now() + 30 * 60000),
      category: 'Food & Beverage',
      views: 1890,
      clicks: 456,
      conversions: 62,
      revenue: 6138,
      conversionRate: 13.6,
      trending: false,
      friendRedemptions: 28,
      description: 'Premium burger combo flash sale'
    }
  ]);

  const [stats, setStats] = useState({
    activeDeals: 2,
    totalViews: 12258,
    totalConversions: 211,
    totalRevenue: 100519,
    avgConversionRate: 8.8
  });

  const durationOptions = [
    { value: '30', label: '30 Minutes' },
    { value: '60', label: '1 Hour' },
    { value: '120', label: '2 Hours' },
    { value: '240', label: '4 Hours' }
  ];

  const categories = [
    'Food & Beverage',
    'Fitness',
    'Wellness',
    'Shopping',
    'Entertainment',
    'Services'
  ];

  const generateDealCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'FLASH';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const getTimeRemaining = (endTime) => {
    const now = new Date();
    const diff = endTime - now;

    if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0, expired: true };

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds, expired: false };
  };

  const CountdownTimer = ({ endTime, status }) => {
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining(endTime));

    useEffect(() => {
      if (status !== 'active') return;

      const timer = setInterval(() => {
        setTimeLeft(getTimeRemaining(endTime));
      }, 1000);

      return () => clearInterval(timer);
    }, [endTime, status]);

    if (status !== 'active') return null;

    return (
      <div className="flex items-center gap-2">
        <Timer className="w-4 h-4 text-red-600" />
        <div className="flex gap-1 font-mono text-sm">
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-red-600">:</span>
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-red-600">:</span>
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>
    );
  };

  const handleCreateDeal = (e) => {
    e.preventDefault();
    const code = generateDealCode();
    const finalPrice = dealForm.originalPrice * (1 - dealForm.discount / 100);
    const durationMinutes = parseInt(dealForm.duration);

    const newDeal = {
      id: flashDeals.length + 1,
      title: dealForm.title,
      code: code,
      discount: parseFloat(dealForm.discount),
      originalPrice: parseFloat(dealForm.originalPrice),
      finalPrice: finalPrice,
      quantity: { total: parseInt(dealForm.quantity), remaining: parseInt(dealForm.quantity) },
      status: 'active',
      duration: durationMinutes,
      startTime: new Date(),
      endTime: new Date(Date.now() + durationMinutes * 60000),
      category: dealForm.category,
      views: 0,
      clicks: 0,
      conversions: 0,
      revenue: 0,
      conversionRate: 0,
      trending: false,
      friendRedemptions: 0,
      description: dealForm.description
    };

    setFlashDeals([newDeal, ...flashDeals]);
    setShowCreateForm(false);
    setDealForm({
      title: '',
      discount: '',
      originalPrice: '',
      quantity: '',
      duration: '30',
      category: '',
      description: ''
    });
  };

  const toggleDealStatus = (dealId) => {
    setFlashDeals(flashDeals.map(deal => {
      if (deal.id === dealId && deal.status === 'active') {
        return { ...deal, status: 'paused' };
      } else if (deal.id === dealId && deal.status === 'paused') {
        return { ...deal, status: 'active' };
      }
      return deal;
    }));
  };

  const filteredDeals = flashDeals.filter(deal => {
    if (filterStatus === 'all') return true;
    return deal.status === filterStatus;
  });

  const getStatusConfig = (status) => {
    const configs = {
      active: { color: 'green', icon: Play, label: 'Live Now' },
      paused: { color: 'orange', icon: Pause, label: 'Paused' },
      scheduled: { color: 'purple', icon: Clock, label: 'Scheduled' },
      completed: { color: 'blue', icon: CheckCircle, label: 'Completed' },
      expired: { color: 'gray', icon: XCircle, label: 'Expired' }
    };
    return configs[status] || configs.active;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Flash Deals Manager</h1>
                  <p className="text-orange-100 mt-1">Create time-limited lightning deals</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-50 font-semibold shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Create Flash Deal
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
                <Zap className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Active Deals</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.activeDeals}</p>
            <p className="text-sm text-green-600 mt-1">Running now</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Total Views</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalViews.toLocaleString()}</p>
            <p className="text-sm text-blue-600 mt-1">All time</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Conversions</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalConversions}</p>
            <p className="text-sm text-purple-600 mt-1">Total redeemed</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-100 p-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Revenue</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{(stats.totalRevenue / 1000).toFixed(0)}K</p>
            <p className="text-sm text-orange-600 mt-1">From flash deals</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Avg CVR</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.avgConversionRate}%</p>
            <p className="text-sm text-indigo-600 mt-1">Conversion rate</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Filter:</span>
            <div className="flex gap-2">
              {['all', 'active', 'scheduled', 'paused', 'completed'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filterStatus === status
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status === 'all' ? 'All Deals' : status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Flash Deals List */}
        <div className="space-y-4">
          {filteredDeals.map((deal) => {
            const statusConfig = getStatusConfig(deal.status);
            const StatusIcon = statusConfig.icon;
            const stockPercentage = (deal.quantity.remaining / deal.quantity.total) * 100;

            return (
              <div
                key={deal.id}
                className="bg-white rounded-xl shadow-sm border-2 border-gray-200 overflow-hidden hover:shadow-md transition-all"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{deal.title}</h3>
                        {deal.trending && (
                          <span className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full animate-pulse">
                            <Sparkles className="w-3 h-3" />
                            TRENDING
                          </span>
                        )}
                        <span className={`flex items-center gap-1 px-3 py-1 bg-${statusConfig.color}-100 text-${statusConfig.color}-700 text-sm font-medium rounded-full`}>
                          <StatusIcon className="w-4 h-4" />
                          {statusConfig.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {deal.category}
                        </span>
                        <span className="font-mono bg-gray-100 px-3 py-1 rounded font-semibold text-gray-900">
                          {deal.code}
                        </span>
                        <button className="text-indigo-600 hover:text-indigo-700">
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {(deal.status === 'active' || deal.status === 'paused') && (
                        <button
                          onClick={() => toggleDealStatus(deal.id)}
                          className={`p-2 rounded-lg ${
                            deal.status === 'active'
                              ? 'text-orange-600 hover:bg-orange-50'
                              : 'text-green-600 hover:bg-green-50'
                          }`}
                        >
                          {deal.status === 'active' ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </button>
                      )}
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Pricing & Timer */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                      <p className="text-sm text-gray-600 mb-1">Discount</p>
                      <p className="text-3xl font-bold text-orange-600">{deal.discount}% OFF</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Original Price</p>
                      <p className="text-2xl font-bold text-gray-400 line-through">₹{deal.originalPrice}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p className="text-sm text-gray-600 mb-1">Flash Price</p>
                      <p className="text-3xl font-bold text-green-600">₹{deal.finalPrice.toFixed(0)}</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                      <p className="text-sm text-gray-600 mb-2">Time Remaining</p>
                      <CountdownTimer endTime={deal.endTime} status={deal.status} />
                      {deal.status === 'scheduled' && (
                        <p className="text-sm text-purple-600 font-medium">
                          Starts in {Math.floor((deal.startTime - new Date()) / 60000)} min
                        </p>
                      )}
                      {deal.status === 'completed' && (
                        <p className="text-sm text-gray-600">Ended</p>
                      )}
                      {deal.status === 'paused' && (
                        <p className="text-sm text-orange-600 font-medium">Deal Paused</p>
                      )}
                    </div>
                  </div>

                  {/* Stock Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Stock: {deal.quantity.remaining} / {deal.quantity.total} remaining
                      </span>
                      <span className={`text-sm font-bold ${
                        stockPercentage > 50 ? 'text-green-600' :
                        stockPercentage > 20 ? 'text-orange-600' :
                        'text-red-600'
                      }`}>
                        {stockPercentage.toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all ${
                          stockPercentage > 50 ? 'bg-green-500' :
                          stockPercentage > 20 ? 'bg-orange-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${stockPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-6 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Views</p>
                      <p className="text-lg font-bold text-gray-900">{deal.views.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Clicks</p>
                      <p className="text-lg font-bold text-gray-900">{deal.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Redeemed</p>
                      <p className="text-lg font-bold text-green-600">{deal.conversions}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">CVR</p>
                      <p className="text-lg font-bold text-purple-600">{deal.conversionRate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Revenue</p>
                      <p className="text-lg font-bold text-orange-600">₹{deal.revenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Friend Network</p>
                      <p className="text-lg font-bold text-indigo-600">{deal.friendRedemptions}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDeals.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Zap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No flash deals found</h3>
            <p className="text-gray-600 mb-4">Create your first lightning deal to drive urgency and sales</p>
            <button
              onClick={() => setShowCreateForm(true)}
              className="inline-flex items-center gap-2 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
            >
              <Plus className="w-5 h-5" />
              Create Flash Deal
            </button>
          </div>
        )}
      </div>

      {/* Create Deal Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Create Flash Deal</h2>
                </div>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleCreateDeal} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deal Title *
                </label>
                <input
                  type="text"
                  required
                  value={dealForm.title}
                  onChange={(e) => setDealForm({ ...dealForm, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., Flash Sale: 70% OFF Premium Coffee"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Original Price (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    value={dealForm.originalPrice}
                    onChange={(e) => setDealForm({ ...dealForm, originalPrice: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="299"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Discount (%) *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="99"
                    value={dealForm.discount}
                    onChange={(e) => setDealForm({ ...dealForm, discount: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="70"
                  />
                </div>
              </div>

              {dealForm.originalPrice && dealForm.discount && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Flash Deal Price</p>
                  <p className="text-3xl font-bold text-green-600">
                    ₹{(dealForm.originalPrice * (1 - dealForm.discount / 100)).toFixed(0)}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Save ₹{(dealForm.originalPrice * (dealForm.discount / 100)).toFixed(0)} ({dealForm.discount}% OFF)
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity Limit *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={dealForm.quantity}
                    onChange={(e) => setDealForm({ ...dealForm, quantity: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration *
                  </label>
                  <select
                    required
                    value={dealForm.duration}
                    onChange={(e) => setDealForm({ ...dealForm, duration: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {durationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  required
                  value={dealForm.category}
                  onChange={(e) => setDealForm({ ...dealForm, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={dealForm.description}
                  onChange={(e) => setDealForm({ ...dealForm, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Describe your flash deal..."
                />
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium mb-1">Flash Deal Tips:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Higher discounts (60%+) drive more urgency</li>
                      <li>Limited quantity creates scarcity</li>
                      <li>Shorter durations increase conversion rates</li>
                      <li>Your deal code will be auto-generated</li>
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
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 font-semibold"
                >
                  Launch Flash Deal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
