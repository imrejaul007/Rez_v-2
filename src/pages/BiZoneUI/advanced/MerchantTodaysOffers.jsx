import { useState, useEffect } from 'react';
import {
  Sun, Plus, Clock, TrendingUp, Users, Eye, ShoppingCart, DollarSign,
  Play, Pause, CheckCircle, XCircle, AlertCircle, Edit2, Trash2,
  Sunrise, Coffee, UtensilsCrossed, Moon, Timer, Calendar, Sparkles
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantTodaysOffers() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filterTimeSlot, setFilterTimeSlot] = useState('all');

  const [offerForm, setOfferForm] = useState({
    title: '',
    discount: '',
    originalPrice: '',
    timeSlot: 'all-day',
    startTime: '',
    endTime: '',
    quantity: '',
    recurring: false,
    description: ''
  });

  const [todaysOffers, setTodaysOffers] = useState([
    {
      id: 1,
      title: 'Breakfast Blast - 60% OFF',
      code: 'TODAY60BF',
      discount: 60,
      originalPrice: 299,
      finalPrice: 119,
      timeSlot: 'breakfast',
      startTime: '07:00',
      endTime: '11:00',
      quantity: { total: 100, remaining: 34 },
      status: 'active',
      expiresAt: new Date().setHours(11, 0, 0, 0),
      autoExpire: true,
      recurring: true,
      views: 2345,
      clicks: 678,
      conversions: 66,
      revenue: 7854,
      conversionRate: 9.7,
      peakTime: '08:30 AM',
      timeRemaining: '2h 15m'
    },
    {
      id: 2,
      title: 'Lunch Special - 50% OFF',
      code: 'TODAY50LN',
      discount: 50,
      originalPrice: 499,
      finalPrice: 249,
      timeSlot: 'lunch',
      startTime: '12:00',
      endTime: '15:00',
      quantity: { total: 150, remaining: 87 },
      status: 'active',
      expiresAt: new Date().setHours(15, 0, 0, 0),
      autoExpire: true,
      recurring: true,
      views: 4567,
      clicks: 1234,
      conversions: 63,
      revenue: 15687,
      conversionRate: 5.1,
      peakTime: '01:00 PM',
      timeRemaining: '5h 45m'
    },
    {
      id: 3,
      title: 'Tea Time Treat - 40% OFF',
      code: 'TODAYTEA',
      discount: 40,
      originalPrice: 199,
      finalPrice: 119,
      timeSlot: 'evening',
      startTime: '16:00',
      endTime: '19:00',
      quantity: { total: 75, remaining: 75 },
      status: 'scheduled',
      expiresAt: new Date().setHours(19, 0, 0, 0),
      autoExpire: true,
      recurring: false,
      views: 0,
      clicks: 0,
      conversions: 0,
      revenue: 0,
      conversionRate: 0,
      peakTime: 'TBD',
      timeRemaining: 'Starts in 6h'
    },
    {
      id: 4,
      title: 'All-Day Coffee Deal - 35% OFF',
      code: 'TODAYCOFFEE',
      discount: 35,
      originalPrice: 249,
      finalPrice: 161,
      timeSlot: 'all-day',
      startTime: '09:00',
      endTime: '23:59',
      quantity: { total: 200, remaining: 123 },
      status: 'active',
      expiresAt: new Date().setHours(23, 59, 59, 999),
      autoExpire: true,
      recurring: true,
      views: 3456,
      clicks: 890,
      conversions: 77,
      revenue: 12397,
      conversionRate: 8.7,
      peakTime: '10:30 AM',
      timeRemaining: '14h 30m'
    },
    {
      id: 5,
      title: 'Yesterday: Dinner Deal',
      code: 'YEST50DIN',
      discount: 50,
      originalPrice: 699,
      finalPrice: 349,
      timeSlot: 'dinner',
      startTime: '19:00',
      endTime: '23:00',
      quantity: { total: 100, remaining: 0 },
      status: 'expired',
      expiresAt: new Date(Date.now() - 24 * 60 * 60 * 1000).setHours(23, 0, 0, 0),
      autoExpire: true,
      recurring: true,
      views: 5678,
      clicks: 1456,
      conversions: 100,
      revenue: 34900,
      conversionRate: 6.9,
      peakTime: '08:30 PM',
      timeRemaining: 'Expired'
    }
  ]);

  const [stats, setStats] = useState({
    activeOffers: 3,
    todayViews: 10368,
    todayConversions: 206,
    todayRevenue: 35938,
    expiringToday: 4
  });

  const timeSlots = [
    { value: 'breakfast', label: 'Breakfast (7-11 AM)', icon: Sunrise, start: '07:00', end: '11:00' },
    { value: 'lunch', label: 'Lunch (12-3 PM)', icon: UtensilsCrossed, start: '12:00', end: '15:00' },
    { value: 'evening', label: 'Tea Time (4-7 PM)', icon: Coffee, start: '16:00', end: '19:00' },
    { value: 'dinner', label: 'Dinner (7-11 PM)', icon: Moon, start: '19:00', end: '23:00' },
    { value: 'all-day', label: 'All Day', icon: Sun, start: '00:00', end: '23:59' }
  ];

  const CountdownTimer = ({ expiresAt, status }) => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
      if (status !== 'active') return;

      const updateTimer = () => {
        const now = new Date();
        const diff = expiresAt - now;

        if (diff <= 0) {
          setTimeLeft('Expired');
          return;
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft(`${hours}h ${minutes}m`);
      };

      updateTimer();
      const timer = setInterval(updateTimer, 60000);

      return () => clearInterval(timer);
    }, [expiresAt, status]);

    if (status !== 'active') return null;

    return (
      <div className="flex items-center gap-2">
        <Timer className="w-4 h-4 text-red-600" />
        <span className="font-semibold text-red-600">{timeLeft}</span>
      </div>
    );
  };

  const handleCreateOffer = (e) => {
    e.preventDefault();
    const code = 'TODAY' + Math.random().toString(36).substr(2, 6).toUpperCase();

    const selectedSlot = timeSlots.find(s => s.value === offerForm.timeSlot);
    const endHour = offerForm.endTime ? parseInt(offerForm.endTime.split(':')[0]) : 23;
    const endMinute = offerForm.endTime ? parseInt(offerForm.endTime.split(':')[1]) : 59;

    const newOffer = {
      id: todaysOffers.length + 1,
      title: offerForm.title,
      code: code,
      discount: parseFloat(offerForm.discount),
      originalPrice: parseFloat(offerForm.originalPrice),
      finalPrice: parseFloat(offerForm.originalPrice) * (1 - parseFloat(offerForm.discount) / 100),
      timeSlot: offerForm.timeSlot,
      startTime: offerForm.startTime || selectedSlot.start,
      endTime: offerForm.endTime || selectedSlot.end,
      quantity: { total: parseInt(offerForm.quantity), remaining: parseInt(offerForm.quantity) },
      status: 'active',
      expiresAt: new Date().setHours(endHour, endMinute, 0, 0),
      autoExpire: true,
      recurring: offerForm.recurring,
      views: 0,
      clicks: 0,
      conversions: 0,
      revenue: 0,
      conversionRate: 0,
      peakTime: 'TBD',
      timeRemaining: 'Active',
      description: offerForm.description
    };

    setTodaysOffers([newOffer, ...todaysOffers]);
    setShowCreateForm(false);
    setOfferForm({
      title: '',
      discount: '',
      originalPrice: '',
      timeSlot: 'all-day',
      startTime: '',
      endTime: '',
      quantity: '',
      recurring: false,
      description: ''
    });
  };

  const toggleOfferStatus = (offerId) => {
    setTodaysOffers(todaysOffers.map(offer => {
      if (offer.id === offerId && offer.status === 'active') {
        return { ...offer, status: 'paused' };
      } else if (offer.id === offerId && offer.status === 'paused') {
        return { ...offer, status: 'active' };
      }
      return offer;
    }));
  };

  const filteredOffers = todaysOffers.filter(offer => {
    if (filterTimeSlot === 'all') return true;
    return offer.timeSlot === filterTimeSlot;
  });

  const getStatusConfig = (status) => {
    const configs = {
      active: { color: 'green', icon: Play, label: 'Active' },
      paused: { color: 'orange', icon: Pause, label: 'Paused' },
      scheduled: { color: 'purple', icon: Clock, label: 'Scheduled' },
      expired: { color: 'gray', icon: XCircle, label: 'Expired' }
    };
    return configs[status] || configs.active;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Sun className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Today's Offers Manager</h1>
                  <p className="text-amber-100 mt-1">Create daily expiring time-slot deals</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-amber-600 rounded-lg hover:bg-amber-50 font-semibold shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Create Today's Offer
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
                <Sun className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Active Today</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.activeOffers}</p>
            <p className="text-sm text-green-600 mt-1">Running now</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Today's Views</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.todayViews.toLocaleString()}</p>
            <p className="text-sm text-blue-600 mt-1">Since midnight</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Today's Sales</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.todayConversions}</p>
            <p className="text-sm text-purple-600 mt-1">Redeemed</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-100 p-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Today's Revenue</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{(stats.todayRevenue / 1000).toFixed(0)}K</p>
            <p className="text-sm text-orange-600 mt-1">From daily deals</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-red-100 p-2 rounded-lg">
                <Timer className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Expiring Today</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.expiringToday}</p>
            <p className="text-sm text-red-600 mt-1">Auto-expire</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-sm font-medium text-gray-700">Time Slot:</span>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilterTimeSlot('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterTimeSlot === 'all'
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Times
              </button>
              {timeSlots.map((slot) => {
                const SlotIcon = slot.icon;
                return (
                  <button
                    key={slot.value}
                    onClick={() => setFilterTimeSlot(slot.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filterTimeSlot === slot.value
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <SlotIcon className="w-4 h-4" />
                    {slot.label.split(' ')[0]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Today's Offers List */}
        <div className="space-y-4">
          {filteredOffers.map((offer) => {
            const statusConfig = getStatusConfig(offer.status);
            const StatusIcon = statusConfig.icon;
            const stockPercentage = (offer.quantity.remaining / offer.quantity.total) * 100;
            const timeSlot = timeSlots.find(s => s.value === offer.timeSlot);
            const TimeSlotIcon = timeSlot?.icon || Sun;

            return (
              <div
                key={offer.id}
                className="bg-white rounded-xl shadow-sm border-2 border-gray-200 overflow-hidden hover:shadow-md transition-all"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{offer.title}</h3>
                        {offer.recurring && (
                          <span className="flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
                            <Calendar className="w-3 h-3" />
                            DAILY
                          </span>
                        )}
                        <span className={`flex items-center gap-1 px-3 py-1 bg-${statusConfig.color}-100 text-${statusConfig.color}-700 text-sm font-medium rounded-full`}>
                          <StatusIcon className="w-4 h-4" />
                          {statusConfig.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <TimeSlotIcon className="w-4 h-4" />
                          {offer.startTime} - {offer.endTime}
                        </span>
                        <span className="font-mono bg-gray-100 px-3 py-1 rounded font-semibold text-gray-900">
                          {offer.code}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {(offer.status === 'active' || offer.status === 'paused') && (
                        <button
                          onClick={() => toggleOfferStatus(offer.id)}
                          className={`p-2 rounded-lg ${
                            offer.status === 'active'
                              ? 'text-orange-600 hover:bg-orange-50'
                              : 'text-green-600 hover:bg-green-50'
                          }`}
                        >
                          {offer.status === 'active' ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
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
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200">
                      <p className="text-sm text-gray-600 mb-1">Discount</p>
                      <p className="text-3xl font-bold text-amber-600">{offer.discount}% OFF</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Original Price</p>
                      <p className="text-2xl font-bold text-gray-400 line-through">₹{offer.originalPrice}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p className="text-sm text-gray-600 mb-1">Today's Price</p>
                      <p className="text-3xl font-bold text-green-600">₹{offer.finalPrice.toFixed(0)}</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                      <p className="text-sm text-gray-600 mb-2">
                        {offer.autoExpire ? 'Auto-Expires' : 'Time Remaining'}
                      </p>
                      <CountdownTimer expiresAt={offer.expiresAt} status={offer.status} />
                      {offer.status === 'scheduled' && (
                        <p className="text-sm text-purple-600 font-medium">{offer.timeRemaining}</p>
                      )}
                      {offer.status === 'expired' && (
                        <p className="text-sm text-gray-600 font-medium">Deal Ended</p>
                      )}
                      {offer.status === 'paused' && (
                        <p className="text-sm text-orange-600 font-medium">Paused</p>
                      )}
                    </div>
                  </div>

                  {/* Stock Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Stock: {offer.quantity.remaining} / {offer.quantity.total} remaining
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
                  <div className="grid grid-cols-7 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Views</p>
                      <p className="text-lg font-bold text-gray-900">{offer.views.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Clicks</p>
                      <p className="text-lg font-bold text-gray-900">{offer.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Redeemed</p>
                      <p className="text-lg font-bold text-green-600">{offer.conversions}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">CVR</p>
                      <p className="text-lg font-bold text-purple-600">{offer.conversionRate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Revenue</p>
                      <p className="text-lg font-bold text-orange-600">₹{(offer.revenue / 1000).toFixed(1)}K</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Peak Time</p>
                      <p className="text-lg font-bold text-indigo-600">{offer.peakTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Recurring</p>
                      <p className="text-lg font-bold text-blue-600">{offer.recurring ? 'Yes' : 'No'}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredOffers.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Sun className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No today's offers found</h3>
            <p className="text-gray-600 mb-4">Create daily expiring deals to drive urgency</p>
            <button
              onClick={() => setShowCreateForm(true)}
              className="inline-flex items-center gap-2 px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
            >
              <Plus className="w-5 h-5" />
              Create Today's Offer
            </button>
          </div>
        )}
      </div>

      {/* Create Offer Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                    <Sun className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Create Today's Offer</h2>
                </div>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleCreateOffer} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Offer Title *
                </label>
                <input
                  type="text"
                  required
                  value={offerForm.title}
                  onChange={(e) => setOfferForm({ ...offerForm, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="e.g., Breakfast Blast - 60% OFF"
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
                    value={offerForm.originalPrice}
                    onChange={(e) => setOfferForm({ ...offerForm, originalPrice: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                    value={offerForm.discount}
                    onChange={(e) => setOfferForm({ ...offerForm, discount: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="60"
                  />
                </div>
              </div>

              {offerForm.originalPrice && offerForm.discount && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Today's Special Price</p>
                  <p className="text-3xl font-bold text-green-600">
                    ₹{(offerForm.originalPrice * (1 - offerForm.discount / 100)).toFixed(0)}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Save ₹{(offerForm.originalPrice * (offerForm.discount / 100)).toFixed(0)} ({offerForm.discount}% OFF)
                  </p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Slot *
                </label>
                <select
                  required
                  value={offerForm.timeSlot}
                  onChange={(e) => setOfferForm({ ...offerForm, timeSlot: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value}>{slot.label}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom Start Time (Optional)
                  </label>
                  <input
                    type="time"
                    value={offerForm.startTime}
                    onChange={(e) => setOfferForm({ ...offerForm, startTime: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom End Time (Optional)
                  </label>
                  <input
                    type="time"
                    value={offerForm.endTime}
                    onChange={(e) => setOfferForm({ ...offerForm, endTime: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Daily Quantity Limit *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={offerForm.quantity}
                  onChange={(e) => setOfferForm({ ...offerForm, quantity: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="100"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="recurring"
                  checked={offerForm.recurring}
                  onChange={(e) => setOfferForm({ ...offerForm, recurring: e.target.checked })}
                  className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                />
                <label htmlFor="recurring" className="text-sm font-medium text-gray-700">
                  Repeat this offer daily (auto-renew at midnight)
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={offerForm.description}
                  onChange={(e) => setOfferForm({ ...offerForm, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Describe your daily offer..."
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium mb-1">Daily Offer Tips:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Offers auto-expire at the end of selected time slot</li>
                      <li>Recurring deals renew daily with same settings</li>
                      <li>Time slots help target specific customer behaviors</li>
                      <li>Daily limits create urgency and manage inventory</li>
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
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:from-amber-700 hover:to-orange-700 font-semibold"
                >
                  Launch Today's Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
