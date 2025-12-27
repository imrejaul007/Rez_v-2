import { useState } from 'react';
import {
  MapPin, Plus, Target, TrendingUp, Users, Eye, ShoppingCart, DollarSign,
  Play, Pause, CheckCircle, XCircle, AlertCircle, Edit2, Trash2,
  Navigation, Radio, Locate, Map, Layers, Activity, ArrowUp, ArrowDown
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantNearbyOffers() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  const [offerForm, setOfferForm] = useState({
    title: '',
    discount: '',
    originalPrice: '',
    radius: '200',
    locationName: '',
    latitude: '',
    longitude: '',
    description: '',
    distanceTiers: [
      { distance: 100, discount: 60 },
      { distance: 200, discount: 50 },
      { distance: 500, discount: 40 }
    ]
  });

  const [nearbyOffers, setNearbyOffers] = useState([
    {
      id: 1,
      title: '60% OFF Within 100 Meters',
      code: 'NEARBY100M',
      baseDiscount: 40,
      maxDiscount: 60,
      originalPrice: 599,
      finalPrice: 239,
      radius: 500,
      locationName: 'Connaught Place Store',
      coordinates: { lat: 28.6315, lng: 77.2167 },
      distanceTiers: [
        { distance: 100, discount: 60, redemptions: 45 },
        { distance: 200, discount: 50, redemptions: 78 },
        { distance: 500, discount: 40, redemptions: 156 }
      ],
      status: 'active',
      nearbyUsers: 234,
      views: 3456,
      clicks: 892,
      conversions: 279,
      revenue: 66681,
      conversionRate: 31.3,
      avgDistance: 285,
      peakHours: '12 PM - 2 PM'
    },
    {
      id: 2,
      title: 'Distance-Based Coffee Deal',
      code: 'NEARBY200M',
      baseDiscount: 30,
      maxDiscount: 50,
      originalPrice: 299,
      finalPrice: 149,
      radius: 300,
      locationName: 'Cafe at Khan Market',
      coordinates: { lat: 28.5513, lng: 77.2274 },
      distanceTiers: [
        { distance: 100, discount: 50, redemptions: 67 },
        { distance: 200, discount: 40, redemptions: 89 },
        { distance: 300, discount: 30, redemptions: 123 }
      ],
      status: 'active',
      nearbyUsers: 567,
      views: 5678,
      clicks: 1456,
      conversions: 279,
      revenue: 41571,
      conversionRate: 19.2,
      avgDistance: 178,
      peakHours: '8 AM - 10 AM'
    },
    {
      id: 3,
      title: 'Proximity Spa Special',
      code: 'NEARBYSPA',
      baseDiscount: 35,
      maxDiscount: 55,
      originalPrice: 2999,
      finalPrice: 1349,
      radius: 1000,
      locationName: 'South Delhi Wellness',
      coordinates: { lat: 28.5244, lng: 77.2066 },
      distanceTiers: [
        { distance: 200, discount: 55, redemptions: 23 },
        { distance: 500, discount: 45, redemptions: 45 },
        { distance: 1000, discount: 35, redemptions: 67 }
      ],
      status: 'active',
      nearbyUsers: 189,
      views: 2345,
      clicks: 567,
      conversions: 135,
      revenue: 182115,
      conversionRate: 23.8,
      avgDistance: 512,
      peakHours: '2 PM - 6 PM'
    },
    {
      id: 4,
      title: 'Geofenced Lunch Special',
      code: 'NEARBYLUNCH',
      baseDiscount: 25,
      maxDiscount: 45,
      originalPrice: 449,
      finalPrice: 247,
      radius: 250,
      locationName: 'Gurgaon Cyber Hub',
      coordinates: { lat: 28.4950, lng: 77.0890 },
      distanceTiers: [
        { distance: 100, discount: 45, redemptions: 89 },
        { distance: 200, discount: 35, redemptions: 134 },
        { distance: 250, discount: 25, redemptions: 98 }
      ],
      status: 'paused',
      nearbyUsers: 890,
      views: 6789,
      clicks: 1789,
      conversions: 321,
      revenue: 79287,
      conversionRate: 17.9,
      avgDistance: 156,
      peakHours: '12 PM - 3 PM'
    }
  ]);

  const [stats, setStats] = useState({
    activeOffers: 3,
    nearbyUsers: 1880,
    totalConversions: 1014,
    totalRevenue: 369654,
    avgDistance: 282
  });

  const radiusOptions = [
    { value: '100', label: '100 Meters' },
    { value: '200', label: '200 Meters' },
    { value: '300', label: '300 Meters' },
    { value: '500', label: '500 Meters' },
    { value: '1000', label: '1 Kilometer' }
  ];

  const handleCreateOffer = (e) => {
    e.preventDefault();
    const code = 'NEARBY' + Math.random().toString(36).substr(2, 6).toUpperCase();

    const newOffer = {
      id: nearbyOffers.length + 1,
      title: offerForm.title,
      code: code,
      baseDiscount: Math.min(...offerForm.distanceTiers.map(t => t.discount)),
      maxDiscount: Math.max(...offerForm.distanceTiers.map(t => t.discount)),
      originalPrice: parseFloat(offerForm.originalPrice),
      finalPrice: parseFloat(offerForm.originalPrice) * (1 - Math.max(...offerForm.distanceTiers.map(t => t.discount)) / 100),
      radius: parseInt(offerForm.radius),
      locationName: offerForm.locationName,
      coordinates: { lat: parseFloat(offerForm.latitude), lng: parseFloat(offerForm.longitude) },
      distanceTiers: offerForm.distanceTiers.map(t => ({ ...t, redemptions: 0 })),
      status: 'active',
      nearbyUsers: Math.floor(Math.random() * 500) + 100,
      views: 0,
      clicks: 0,
      conversions: 0,
      revenue: 0,
      conversionRate: 0,
      avgDistance: 0,
      peakHours: 'TBD',
      description: offerForm.description
    };

    setNearbyOffers([newOffer, ...nearbyOffers]);
    setShowCreateForm(false);
    setOfferForm({
      title: '',
      discount: '',
      originalPrice: '',
      radius: '200',
      locationName: '',
      latitude: '',
      longitude: '',
      description: '',
      distanceTiers: [
        { distance: 100, discount: 60 },
        { distance: 200, discount: 50 },
        { distance: 500, discount: 40 }
      ]
    });
  };

  const toggleOfferStatus = (offerId) => {
    setNearbyOffers(nearbyOffers.map(offer => {
      if (offer.id === offerId && offer.status === 'active') {
        return { ...offer, status: 'paused' };
      } else if (offer.id === offerId && offer.status === 'paused') {
        return { ...offer, status: 'active' };
      }
      return offer;
    }));
  };

  const filteredOffers = nearbyOffers.filter(offer => {
    if (filterStatus === 'all') return true;
    return offer.status === filterStatus;
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Nearby Offers Manager</h1>
                  <p className="text-blue-100 mt-1">Create location-based proximity deals</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Create Nearby Offer
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
                <Target className="w-5 h-5 text-green-600" />
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
              <p className="text-sm text-gray-600 font-medium">Nearby Users</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.nearbyUsers.toLocaleString()}</p>
            <p className="text-sm text-blue-600 mt-1">In range now</p>
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
            <p className="text-sm text-orange-600 mt-1">From nearby</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Navigation className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Avg Distance</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.avgDistance}m</p>
            <p className="text-sm text-indigo-600 mt-1">Per redemption</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Filter:</span>
            <div className="flex gap-2">
              {['all', 'active', 'paused'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filterStatus === status
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status === 'all' ? 'All Offers' : status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Nearby Offers List */}
        <div className="space-y-4">
          {filteredOffers.map((offer) => {
            const statusConfig = getStatusConfig(offer.status);
            const StatusIcon = statusConfig.icon;

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
                        <span className={`flex items-center gap-1 px-3 py-1 bg-${statusConfig.color}-100 text-${statusConfig.color}-700 text-sm font-medium rounded-full`}>
                          <StatusIcon className="w-4 h-4" />
                          {statusConfig.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {offer.locationName}
                        </span>
                        <span className="flex items-center gap-1">
                          <Radio className="w-4 h-4" />
                          {offer.radius}m radius
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

                  {/* Pricing */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                      <p className="text-sm text-gray-600 mb-1">Max Discount</p>
                      <p className="text-3xl font-bold text-blue-600">{offer.maxDiscount}% OFF</p>
                      <p className="text-xs text-gray-600 mt-1">Closest proximity</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Original Price</p>
                      <p className="text-2xl font-bold text-gray-400 line-through">₹{offer.originalPrice}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p className="text-sm text-gray-600 mb-1">Best Price</p>
                      <p className="text-3xl font-bold text-green-600">₹{offer.finalPrice.toFixed(0)}</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <p className="text-sm text-gray-600 mb-1">Nearby Users</p>
                      <p className="text-3xl font-bold text-purple-600">{offer.nearbyUsers}</p>
                      <p className="text-xs text-gray-600 mt-1">In range now</p>
                    </div>
                  </div>

                  {/* Distance Tiers */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Distance-Based Discounts</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {offer.distanceTiers.map((tier, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Target className="w-4 h-4 text-blue-600" />
                              <span className="font-semibold text-gray-900">Within {tier.distance}m</span>
                            </div>
                            <span className="text-lg font-bold text-blue-600">{tier.discount}% OFF</span>
                          </div>
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">{tier.redemptions}</span> redemptions
                          </div>
                        </div>
                      ))}
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
                      <p className="text-lg font-bold text-orange-600">₹{(offer.revenue / 1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Avg Distance</p>
                      <p className="text-lg font-bold text-indigo-600">{offer.avgDistance}m</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Peak Hours</p>
                      <p className="text-lg font-bold text-blue-600">{offer.peakHours}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredOffers.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No nearby offers found</h3>
            <p className="text-gray-600 mb-4">Create location-based offers to attract nearby customers</p>
            <button
              onClick={() => setShowCreateForm(true)}
              className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="w-5 h-5" />
              Create Nearby Offer
            </button>
          </div>
        )}
      </div>

      {/* Create Offer Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Create Nearby Offer</h2>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 60% OFF Within 100 Meters"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={offerForm.locationName}
                    onChange={(e) => setOfferForm({ ...offerForm, locationName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Connaught Place Store"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Radius *
                  </label>
                  <select
                    required
                    value={offerForm.radius}
                    onChange={(e) => setOfferForm({ ...offerForm, radius: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {radiusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Latitude *
                  </label>
                  <input
                    type="number"
                    step="any"
                    required
                    value={offerForm.latitude}
                    onChange={(e) => setOfferForm({ ...offerForm, latitude: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="28.6315"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Longitude *
                  </label>
                  <input
                    type="number"
                    step="any"
                    required
                    value={offerForm.longitude}
                    onChange={(e) => setOfferForm({ ...offerForm, longitude: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="77.2167"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Original Price (₹) *
                </label>
                <input
                  type="number"
                  required
                  value={offerForm.originalPrice}
                  onChange={(e) => setOfferForm({ ...offerForm, originalPrice: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="599"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Distance-Based Discount Tiers *
                </label>
                <div className="space-y-3">
                  {offerForm.distanceTiers.map((tier, idx) => (
                    <div key={idx} className="grid grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Distance (meters)
                        </label>
                        <input
                          type="number"
                          required
                          value={tier.distance}
                          onChange={(e) => {
                            const newTiers = [...offerForm.distanceTiers];
                            newTiers[idx].distance = parseInt(e.target.value);
                            setOfferForm({ ...offerForm, distanceTiers: newTiers });
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="100"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Discount (%)
                        </label>
                        <input
                          type="number"
                          required
                          min="1"
                          max="99"
                          value={tier.discount}
                          onChange={(e) => {
                            const newTiers = [...offerForm.distanceTiers];
                            newTiers[idx].discount = parseInt(e.target.value);
                            setOfferForm({ ...offerForm, distanceTiers: newTiers });
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="60"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={offerForm.description}
                  onChange={(e) => setOfferForm({ ...offerForm, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your proximity offer..."
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium mb-1">Proximity Offer Tips:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Higher discounts for closer proximity drive foot traffic</li>
                      <li>Set realistic radius based on your location type</li>
                      <li>Monitor peak hours to optimize offer timing</li>
                      <li>Use geofencing to target office areas during lunch</li>
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
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 font-semibold"
                >
                  Launch Nearby Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
