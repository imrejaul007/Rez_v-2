import { useState } from 'react';
import {
  Cake, Plus, Gift, Users, Eye, ShoppingCart, DollarSign,
  Play, Pause, CheckCircle, XCircle, AlertCircle, Edit2, Trash2,
  Calendar, Bell, Heart, Sparkles, Award, Mail, Trophy, Star
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantBirthdayOffers() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filterType, setFilterType] = useState('all');

  const [offerForm, setOfferForm] = useState({
    title: '',
    offerType: 'birthday',
    discount: '',
    bonusCoins: '',
    originalPrice: '',
    validityDays: '7',
    autoSend: true,
    minSpend: '',
    giftVoucher: '',
    description: ''
  });

  const [birthdayOffers, setBirthdayOffers] = useState([
    {
      id: 1,
      title: 'Birthday Week Special - 50% OFF',
      code: 'BDAY50OFF',
      offerType: 'birthday',
      discount: 50,
      bonusCoins: 500,
      originalPrice: 1999,
      finalPrice: 999,
      validityDays: 7,
      minSpend: 0,
      giftVoucher: 200,
      status: 'active',
      autoSend: true,
      totalEligible: 1245,
      totalSent: 1245,
      views: 892,
      redemptions: 234,
      revenue: 233766,
      conversionRate: 26.2,
      avgSpend: 999,
      repeatCustomers: 156,
      monthlyBirthdays: [
        { month: 'January', count: 102, redeemed: 28 },
        { month: 'February', count: 98, redeemed: 24 },
        { month: 'March', count: 115, redeemed: 31 }
      ]
    },
    {
      id: 2,
      title: 'Anniversary Celebration Deal',
      code: 'ANNIV40',
      offerType: 'anniversary',
      discount: 40,
      bonusCoins: 1000,
      originalPrice: 2999,
      finalPrice: 1799,
      validityDays: 14,
      minSpend: 1500,
      giftVoucher: 300,
      status: 'active',
      autoSend: true,
      totalEligible: 567,
      totalSent: 567,
      views: 423,
      redemptions: 89,
      revenue: 160111,
      conversionRate: 21.0,
      avgSpend: 1799,
      repeatCustomers: 67,
      monthlyBirthdays: [
        { month: 'January', count: 45, redeemed: 12 },
        { month: 'February', count: 52, redeemed: 9 },
        { month: 'March', count: 48, redeemed: 11 }
      ]
    },
    {
      id: 3,
      title: 'Birthday Bonus Coins Bonanza',
      code: 'BDAYCOINS',
      offerType: 'birthday',
      discount: 0,
      bonusCoins: 1000,
      originalPrice: 0,
      finalPrice: 0,
      validityDays: 30,
      minSpend: 0,
      giftVoucher: 0,
      status: 'active',
      autoSend: true,
      totalEligible: 2345,
      totalSent: 2345,
      views: 1678,
      redemptions: 876,
      revenue: 0,
      conversionRate: 52.2,
      avgSpend: 0,
      repeatCustomers: 567,
      monthlyBirthdays: [
        { month: 'January', count: 198, redeemed: 102 },
        { month: 'February', count: 189, redeemed: 98 },
        { month: 'March', count: 205, redeemed: 112 }
      ]
    },
    {
      id: 4,
      title: 'Special Occasion Gift Voucher',
      code: 'OCCASION500',
      offerType: 'special',
      discount: 30,
      bonusCoins: 300,
      originalPrice: 1499,
      finalPrice: 1049,
      validityDays: 10,
      minSpend: 1000,
      giftVoucher: 500,
      status: 'paused',
      autoSend: false,
      totalEligible: 456,
      totalSent: 234,
      views: 189,
      redemptions: 45,
      revenue: 47205,
      conversionRate: 23.8,
      avgSpend: 1049,
      repeatCustomers: 34,
      monthlyBirthdays: [
        { month: 'January', count: 38, redeemed: 8 },
        { month: 'February', count: 42, redeemed: 10 },
        { month: 'March', count: 35, redeemed: 7 }
      ]
    }
  ]);

  const [stats, setStats] = useState({
    activeOffers: 3,
    totalEligible: 4613,
    totalRedemptions: 1244,
    totalRevenue: 441082,
    avgRedemptionRate: 30.8
  });

  const offerTypes = [
    { value: 'birthday', label: 'Birthday Week Offer', icon: Cake },
    { value: 'anniversary', label: 'Anniversary Celebration', icon: Heart },
    { value: 'special', label: 'Special Occasion', icon: Gift }
  ];

  const validityOptions = [
    { value: '3', label: '3 Days' },
    { value: '7', label: '7 Days (1 Week)' },
    { value: '14', label: '14 Days (2 Weeks)' },
    { value: '30', label: '30 Days (1 Month)' }
  ];

  const handleCreateOffer = (e) => {
    e.preventDefault();
    const code = 'BDAY' + Math.random().toString(36).substr(2, 6).toUpperCase();

    const newOffer = {
      id: birthdayOffers.length + 1,
      title: offerForm.title,
      code: code,
      offerType: offerForm.offerType,
      discount: parseFloat(offerForm.discount) || 0,
      bonusCoins: parseInt(offerForm.bonusCoins) || 0,
      originalPrice: parseFloat(offerForm.originalPrice) || 0,
      finalPrice: offerForm.originalPrice ? parseFloat(offerForm.originalPrice) * (1 - (parseFloat(offerForm.discount) || 0) / 100) : 0,
      validityDays: parseInt(offerForm.validityDays),
      minSpend: parseFloat(offerForm.minSpend) || 0,
      giftVoucher: parseFloat(offerForm.giftVoucher) || 0,
      status: 'active',
      autoSend: offerForm.autoSend,
      totalEligible: 0,
      totalSent: 0,
      views: 0,
      redemptions: 0,
      revenue: 0,
      conversionRate: 0,
      avgSpend: 0,
      repeatCustomers: 0,
      monthlyBirthdays: [],
      description: offerForm.description
    };

    setBirthdayOffers([newOffer, ...birthdayOffers]);
    setShowCreateForm(false);
    setOfferForm({
      title: '',
      offerType: 'birthday',
      discount: '',
      bonusCoins: '',
      originalPrice: '',
      validityDays: '7',
      autoSend: true,
      minSpend: '',
      giftVoucher: '',
      description: ''
    });
  };

  const toggleOfferStatus = (offerId) => {
    setBirthdayOffers(birthdayOffers.map(offer => {
      if (offer.id === offerId && offer.status === 'active') {
        return { ...offer, status: 'paused' };
      } else if (offer.id === offerId && offer.status === 'paused') {
        return { ...offer, status: 'active' };
      }
      return offer;
    }));
  };

  const filteredOffers = birthdayOffers.filter(offer => {
    if (filterType === 'all') return true;
    return offer.offerType === filterType;
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
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Cake className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Birthday & Special Offers Manager</h1>
                  <p className="text-purple-100 mt-1">Create personalized birthday and occasion deals</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 font-semibold shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Create Birthday Offer
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
                <Cake className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Active Offers</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.activeOffers}</p>
            <p className="text-sm text-green-600 mt-1">Running now</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Eligible</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalEligible.toLocaleString()}</p>
            <p className="text-sm text-blue-600 mt-1">This month</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Redemptions</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalRedemptions}</p>
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
            <p className="text-sm text-orange-600 mt-1">From occasions</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Trophy className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Avg Redemption</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.avgRedemptionRate}%</p>
            <p className="text-sm text-indigo-600 mt-1">Success rate</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Filter:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterType === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Offers
              </button>
              {offerTypes.map((type) => {
                const TypeIcon = type.icon;
                return (
                  <button
                    key={type.value}
                    onClick={() => setFilterType(type.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filterType === type.value
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <TypeIcon className="w-4 h-4" />
                    {type.label.split(' ')[0]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Birthday Offers List */}
        <div className="space-y-4">
          {filteredOffers.map((offer) => {
            const statusConfig = getStatusConfig(offer.status);
            const StatusIcon = statusConfig.icon;
            const offerType = offerTypes.find(t => t.value === offer.offerType);
            const OfferIcon = offerType?.icon || Cake;
            const redemptionRate = offer.totalSent > 0 ? (offer.redemptions / offer.totalSent * 100) : 0;

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
                        {offer.autoSend && (
                          <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                            <Bell className="w-3 h-3" />
                            AUTO-SEND
                          </span>
                        )}
                        <span className={`flex items-center gap-1 px-3 py-1 bg-${statusConfig.color}-100 text-${statusConfig.color}-700 text-sm font-medium rounded-full`}>
                          <StatusIcon className="w-4 h-4" />
                          {statusConfig.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <OfferIcon className="w-4 h-4" />
                          {offerType?.label}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Valid {offer.validityDays} days
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

                  {/* Offer Benefits */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    {offer.discount > 0 && (
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                        <p className="text-sm text-gray-600 mb-1">Discount</p>
                        <p className="text-3xl font-bold text-purple-600">{offer.discount}% OFF</p>
                      </div>
                    )}
                    {offer.bonusCoins > 0 && (
                      <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                        <p className="text-sm text-gray-600 mb-1">Bonus Coins</p>
                        <p className="text-3xl font-bold text-amber-600">{offer.bonusCoins}</p>
                      </div>
                    )}
                    {offer.giftVoucher > 0 && (
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <p className="text-sm text-gray-600 mb-1">Gift Voucher</p>
                        <p className="text-3xl font-bold text-green-600">₹{offer.giftVoucher}</p>
                      </div>
                    )}
                    {offer.originalPrice > 0 && (
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <p className="text-sm text-gray-600 mb-1">Special Price</p>
                        <p className="text-2xl font-bold text-blue-600">₹{offer.finalPrice.toFixed(0)}</p>
                        <p className="text-xs text-gray-500 line-through">₹{offer.originalPrice}</p>
                      </div>
                    )}
                  </div>

                  {/* Redemption Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Redemption: {offer.redemptions} / {offer.totalSent} sent
                      </span>
                      <span className="text-sm font-bold text-purple-600">
                        {redemptionRate.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full transition-all bg-purple-500"
                        style={{ width: `${redemptionRate}%` }}
                      />
                    </div>
                  </div>

                  {/* Monthly Breakdown */}
                  {offer.monthlyBirthdays.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Monthly Performance</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {offer.monthlyBirthdays.map((month, idx) => (
                          <div key={idx} className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                            <p className="text-sm font-medium text-gray-900">{month.month}</p>
                            <p className="text-lg font-bold text-purple-600">{month.redeemed} redeemed</p>
                            <p className="text-xs text-gray-600 mt-1">of {month.count} eligible</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-7 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Eligible</p>
                      <p className="text-lg font-bold text-gray-900">{offer.totalEligible}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Sent</p>
                      <p className="text-lg font-bold text-blue-600">{offer.totalSent}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Views</p>
                      <p className="text-lg font-bold text-gray-900">{offer.views}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Redeemed</p>
                      <p className="text-lg font-bold text-green-600">{offer.redemptions}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">CVR</p>
                      <p className="text-lg font-bold text-purple-600">{offer.conversionRate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Revenue</p>
                      <p className="text-lg font-bold text-orange-600">₹{(offer.revenue / 1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Repeats</p>
                      <p className="text-lg font-bold text-indigo-600">{offer.repeatCustomers}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredOffers.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Cake className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No birthday offers found</h3>
            <p className="text-gray-600 mb-4">Create personalized offers to celebrate special occasions</p>
            <button
              onClick={() => setShowCreateForm(true)}
              className="inline-flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              <Plus className="w-5 h-5" />
              Create Birthday Offer
            </button>
          </div>
        )}
      </div>

      {/* Create Offer Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                    <Cake className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Create Birthday Offer</h2>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Birthday Week Special - 50% OFF"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Offer Type *
                </label>
                <select
                  required
                  value={offerForm.offerType}
                  onChange={(e) => setOfferForm({ ...offerForm, offerType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {offerTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Discount (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="99"
                    value={offerForm.discount}
                    onChange={(e) => setOfferForm({ ...offerForm, discount: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bonus Coins
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={offerForm.bonusCoins}
                    onChange={(e) => setOfferForm({ ...offerForm, bonusCoins: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Original Price (₹)
                  </label>
                  <input
                    type="number"
                    value={offerForm.originalPrice}
                    onChange={(e) => setOfferForm({ ...offerForm, originalPrice: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="1999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gift Voucher (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={offerForm.giftVoucher}
                    onChange={(e) => setOfferForm({ ...offerForm, giftVoucher: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Validity Period *
                  </label>
                  <select
                    required
                    value={offerForm.validityDays}
                    onChange={(e) => setOfferForm({ ...offerForm, validityDays: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {validityOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Min Spend (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={offerForm.minSpend}
                    onChange={(e) => setOfferForm({ ...offerForm, minSpend: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="autoSend"
                  checked={offerForm.autoSend}
                  onChange={(e) => setOfferForm({ ...offerForm, autoSend: e.target.checked })}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor="autoSend" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Auto-send to eligible customers on their special day
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Describe your birthday offer..."
                />
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium mb-1">Birthday Offer Tips:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Personalized offers drive strong emotional connection</li>
                      <li>Week-long validity encourages redemption flexibility</li>
                      <li>Combine discounts with bonus coins for maximum impact</li>
                      <li>Auto-send ensures timely delivery on special days</li>
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
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 font-semibold"
                >
                  Launch Birthday Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
