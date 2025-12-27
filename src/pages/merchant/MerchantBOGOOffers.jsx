import { useState } from 'react';
import {
  Gift, Plus, Tag, TrendingUp, Users, Eye, ShoppingCart, DollarSign,
  Play, Pause, CheckCircle, XCircle, AlertCircle, Edit2, Trash2,
  Package, Layers, Target, Sparkles, ArrowRight, Percent
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantBOGOOffers() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  const [offerForm, setOfferForm] = useState({
    title: '',
    primaryProduct: '',
    secondaryProduct: '',
    bogoType: 'free',
    secondDiscount: '100',
    originalPrice: '',
    maxPerCustomer: '2',
    totalQuantity: '',
    minPurchaseQty: '1',
    description: ''
  });

  const [bogoOffers, setBogoOffers] = useState([
    {
      id: 1,
      title: 'BOGO Free - Premium Pizza',
      code: 'BOGO100PIZZA',
      primaryProduct: 'Large Premium Pizza',
      secondaryProduct: 'Same or Lesser Value',
      bogoType: 'free',
      secondDiscount: 100,
      originalPrice: 599,
      pricePerSet: 599,
      savings: 599,
      maxPerCustomer: 2,
      minPurchaseQty: 1,
      quantity: { total: 100, sets: 50, remaining: 23 },
      status: 'active',
      views: 5678,
      clicks: 1456,
      conversions: 27,
      setsRedeemed: 27,
      revenue: 16173,
      conversionRate: 1.9,
      avgBasketSize: 1.2,
      popularPairings: [
        { combo: 'Margherita + Pepperoni', count: 12 },
        { combo: 'Veggie + BBQ Chicken', count: 8 },
        { combo: 'Cheese + Mexican', count: 7 }
      ]
    },
    {
      id: 2,
      title: 'Buy 1 Get 50% OFF - Coffee',
      code: 'BOGO50COFFEE',
      primaryProduct: 'Specialty Coffee',
      secondaryProduct: 'Any Coffee',
      bogoType: 'discount',
      secondDiscount: 50,
      originalPrice: 249,
      pricePerSet: 373,
      savings: 125,
      maxPerCustomer: 3,
      minPurchaseQty: 1,
      quantity: { total: 200, sets: 100, remaining: 67 },
      status: 'active',
      views: 3456,
      clicks: 890,
      conversions: 33,
      setsRedeemed: 33,
      revenue: 12309,
      conversionRate: 3.7,
      avgBasketSize: 1.5,
      popularPairings: [
        { combo: 'Cappuccino + Latte', count: 15 },
        { combo: 'Americano + Espresso', count: 10 },
        { combo: 'Mocha + Cappuccino', count: 8 }
      ]
    },
    {
      id: 3,
      title: 'BOGO Free - Spa Sessions',
      code: 'BOGOSPA',
      primaryProduct: '60-Min Massage',
      secondaryProduct: '30-Min Facial',
      bogoType: 'free',
      secondDiscount: 100,
      originalPrice: 2999,
      pricePerSet: 2999,
      savings: 1499,
      maxPerCustomer: 1,
      minPurchaseQty: 1,
      quantity: { total: 40, sets: 20, remaining: 11 },
      status: 'active',
      views: 2345,
      clicks: 567,
      conversions: 9,
      setsRedeemed: 9,
      revenue: 26991,
      conversionRate: 1.6,
      avgBasketSize: 1,
      popularPairings: [
        { combo: 'Swedish + Express Facial', count: 5 },
        { combo: 'Deep Tissue + Glow Facial', count: 3 },
        { combo: 'Thai + Anti-aging', count: 1 }
      ]
    },
    {
      id: 4,
      title: 'Buy 2 Get 1 Free - Books',
      code: 'B2G1BOOKS',
      primaryProduct: 'Any Book',
      secondaryProduct: 'Lowest Priced Book',
      bogoType: 'b2g1',
      secondDiscount: 100,
      originalPrice: 399,
      pricePerSet: 798,
      savings: 399,
      maxPerCustomer: 5,
      minPurchaseQty: 2,
      quantity: { total: 150, sets: 50, remaining: 18 },
      status: 'paused',
      views: 4567,
      clicks: 1123,
      conversions: 32,
      setsRedeemed: 32,
      revenue: 25536,
      conversionRate: 2.8,
      avgBasketSize: 3.2,
      popularPairings: [
        { combo: 'Fiction + Fiction + Self-help', count: 14 },
        { combo: 'Business x2 + Biography', count: 10 },
        { combo: 'Cookbook x3', count: 8 }
      ]
    }
  ]);

  const [stats, setStats] = useState({
    activeOffers: 3,
    totalViews: 16046,
    totalSetsRedeemed: 101,
    totalRevenue: 81009,
    avgBasketSize: 1.7
  });

  const bogoTypes = [
    { value: 'free', label: 'Buy 1 Get 1 Free (100% OFF 2nd)', discount: 100 },
    { value: 'discount', label: 'Buy 1 Get 50% OFF 2nd', discount: 50 },
    { value: 'discount-75', label: 'Buy 1 Get 75% OFF 2nd', discount: 75 },
    { value: 'discount-25', label: 'Buy 1 Get 25% OFF 2nd', discount: 25 },
    { value: 'b2g1', label: 'Buy 2 Get 1 Free', discount: 100 },
    { value: 'b3g1', label: 'Buy 3 Get 1 Free', discount: 100 }
  ];

  const handleCreateOffer = (e) => {
    e.preventDefault();
    const code = 'BOGO' + Math.random().toString(36).substr(2, 6).toUpperCase();

    const discount = parseInt(offerForm.secondDiscount);
    const price = parseFloat(offerForm.originalPrice);
    let pricePerSet, savings;

    if (offerForm.bogoType === 'b2g1') {
      pricePerSet = price * 2;
      savings = price;
    } else if (offerForm.bogoType === 'b3g1') {
      pricePerSet = price * 3;
      savings = price;
    } else {
      pricePerSet = price + (price * (1 - discount / 100));
      savings = price * (discount / 100);
    }

    const newOffer = {
      id: bogoOffers.length + 1,
      title: offerForm.title,
      code: code,
      primaryProduct: offerForm.primaryProduct,
      secondaryProduct: offerForm.secondaryProduct,
      bogoType: offerForm.bogoType,
      secondDiscount: discount,
      originalPrice: price,
      pricePerSet: pricePerSet,
      savings: savings,
      maxPerCustomer: parseInt(offerForm.maxPerCustomer),
      minPurchaseQty: parseInt(offerForm.minPurchaseQty),
      quantity: {
        total: parseInt(offerForm.totalQuantity),
        sets: Math.floor(parseInt(offerForm.totalQuantity) / 2),
        remaining: Math.floor(parseInt(offerForm.totalQuantity) / 2)
      },
      status: 'active',
      views: 0,
      clicks: 0,
      conversions: 0,
      setsRedeemed: 0,
      revenue: 0,
      conversionRate: 0,
      avgBasketSize: 0,
      popularPairings: [],
      description: offerForm.description
    };

    setBogoOffers([newOffer, ...bogoOffers]);
    setShowCreateForm(false);
    setOfferForm({
      title: '',
      primaryProduct: '',
      secondaryProduct: '',
      bogoType: 'free',
      secondDiscount: '100',
      originalPrice: '',
      maxPerCustomer: '2',
      totalQuantity: '',
      minPurchaseQty: '1',
      description: ''
    });
  };

  const toggleOfferStatus = (offerId) => {
    setBogoOffers(bogoOffers.map(offer => {
      if (offer.id === offerId && offer.status === 'active') {
        return { ...offer, status: 'paused' };
      } else if (offer.id === offerId && offer.status === 'paused') {
        return { ...offer, status: 'active' };
      }
      return offer;
    }));
  };

  const filteredOffers = bogoOffers.filter(offer => {
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

  const getBOGOLabel = (offer) => {
    if (offer.bogoType === 'b2g1') return 'B2G1 FREE';
    if (offer.bogoType === 'b3g1') return 'B3G1 FREE';
    if (offer.secondDiscount === 100) return 'BOGO FREE';
    return `${offer.secondDiscount}% OFF 2nd`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Gift className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">BOGO Offers Manager</h1>
                  <p className="text-pink-100 mt-1">Create Buy-One-Get-One deals</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-pink-600 rounded-lg hover:bg-pink-50 font-semibold shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Create BOGO Offer
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
                <Gift className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Active BOGO</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.activeOffers}</p>
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
            <p className="text-sm text-blue-600 mt-1">All offers</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Sets Sold</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalSetsRedeemed}</p>
            <p className="text-sm text-purple-600 mt-1">Total pairs</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-100 p-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Revenue</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{(stats.totalRevenue / 1000).toFixed(0)}K</p>
            <p className="text-sm text-orange-600 mt-1">From BOGO</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Layers className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Avg Basket</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.avgBasketSize.toFixed(1)}x</p>
            <p className="text-sm text-indigo-600 mt-1">Items/order</p>
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
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status === 'all' ? 'All Offers' : status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* BOGO Offers List */}
        <div className="space-y-4">
          {filteredOffers.map((offer) => {
            const statusConfig = getStatusConfig(offer.status);
            const StatusIcon = statusConfig.icon;
            const stockPercentage = (offer.quantity.remaining / offer.quantity.sets) * 100;

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
                        <span className="flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-700 text-xs font-bold rounded-full animate-pulse">
                          <Sparkles className="w-3 h-3" />
                          {getBOGOLabel(offer)}
                        </span>
                        <span className={`flex items-center gap-1 px-3 py-1 bg-${statusConfig.color}-100 text-${statusConfig.color}-700 text-sm font-medium rounded-full`}>
                          <StatusIcon className="w-4 h-4" />
                          {statusConfig.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Package className="w-4 h-4" />
                          Max {offer.maxPerCustomer} per customer
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

                  {/* Product Pairing */}
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-4 border border-pink-200 mb-4">
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex-1 text-center">
                        <p className="text-xs text-gray-600 mb-1">Primary Product</p>
                        <p className="font-bold text-gray-900">{offer.primaryProduct}</p>
                        <p className="text-2xl font-bold text-pink-600 mt-1">₹{offer.originalPrice}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-6 h-6 text-pink-600" />
                        <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          +
                        </div>
                        <ArrowRight className="w-6 h-6 text-pink-600" />
                      </div>
                      <div className="flex-1 text-center">
                        <p className="text-xs text-gray-600 mb-1">Secondary Product</p>
                        <p className="font-bold text-gray-900">{offer.secondaryProduct}</p>
                        <p className="text-2xl font-bold text-green-600 mt-1">
                          {offer.secondDiscount === 100 ? 'FREE' : `${offer.secondDiscount}% OFF`}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-2 rounded-full">
                          <p className="text-xs">Total</p>
                          <p className="text-xl font-bold">₹{offer.pricePerSet.toFixed(0)}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Regular Price (2 items)</p>
                      <p className="text-2xl font-bold text-gray-400 line-through">₹{(offer.originalPrice * 2).toFixed(0)}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p className="text-sm text-gray-600 mb-1">BOGO Price</p>
                      <p className="text-3xl font-bold text-green-600">₹{offer.pricePerSet.toFixed(0)}</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <p className="text-sm text-gray-600 mb-1">You Save</p>
                      <p className="text-3xl font-bold text-orange-600">₹{offer.savings.toFixed(0)}</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <p className="text-sm text-gray-600 mb-1">Sets Remaining</p>
                      <p className="text-3xl font-bold text-purple-600">{offer.quantity.remaining}</p>
                      <p className="text-xs text-gray-600 mt-1">of {offer.quantity.sets}</p>
                    </div>
                  </div>

                  {/* Stock Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Stock: {offer.quantity.remaining} / {offer.quantity.sets} sets remaining
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

                  {/* Popular Pairings */}
                  {offer.popularPairings.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Popular Pairings</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {offer.popularPairings.map((pairing, idx) => (
                          <div key={idx} className="bg-pink-50 rounded-lg p-3 border border-pink-200">
                            <p className="text-sm font-medium text-gray-900">{pairing.combo}</p>
                            <p className="text-xs text-gray-600 mt-1">{pairing.count} redemptions</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

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
                      <p className="text-sm text-gray-600 mb-1">Sets Sold</p>
                      <p className="text-lg font-bold text-green-600">{offer.setsRedeemed}</p>
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
                      <p className="text-sm text-gray-600 mb-1">Avg Basket</p>
                      <p className="text-lg font-bold text-indigo-600">{offer.avgBasketSize.toFixed(1)}x</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Max/Customer</p>
                      <p className="text-lg font-bold text-blue-600">{offer.maxPerCustomer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredOffers.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Gift className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No BOGO offers found</h3>
            <p className="text-gray-600 mb-4">Create buy-one-get-one deals to increase basket size</p>
            <button
              onClick={() => setShowCreateForm(true)}
              className="inline-flex items-center gap-2 px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              <Plus className="w-5 h-5" />
              Create BOGO Offer
            </button>
          </div>
        )}
      </div>

      {/* Create Offer Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-pink-600 to-rose-600 text-white p-6 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                    <Gift className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Create BOGO Offer</h2>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="e.g., BOGO Free - Premium Pizza"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  BOGO Type *
                </label>
                <select
                  required
                  value={offerForm.bogoType}
                  onChange={(e) => {
                    const selectedType = bogoTypes.find(t => t.value === e.target.value);
                    setOfferForm({
                      ...offerForm,
                      bogoType: e.target.value,
                      secondDiscount: selectedType?.discount.toString() || '100'
                    });
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {bogoTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Product *
                  </label>
                  <input
                    type="text"
                    required
                    value={offerForm.primaryProduct}
                    onChange={(e) => setOfferForm({ ...offerForm, primaryProduct: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Large Premium Pizza"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Secondary Product *
                  </label>
                  <input
                    type="text"
                    required
                    value={offerForm.secondaryProduct}
                    onChange={(e) => setOfferForm({ ...offerForm, secondaryProduct: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Same or Lesser Value"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Price (₹) *
                </label>
                <input
                  type="number"
                  required
                  value={offerForm.originalPrice}
                  onChange={(e) => setOfferForm({ ...offerForm, originalPrice: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="599"
                />
              </div>

              {offerForm.originalPrice && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">BOGO Deal Price</p>
                  <p className="text-3xl font-bold text-green-600">
                    ₹{(parseFloat(offerForm.originalPrice) + (parseFloat(offerForm.originalPrice) * (1 - parseInt(offerForm.secondDiscount) / 100))).toFixed(0)}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Save ₹{(parseFloat(offerForm.originalPrice) * (parseInt(offerForm.secondDiscount) / 100)).toFixed(0)} per set
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Quantity (items) *
                  </label>
                  <input
                    type="number"
                    required
                    min="2"
                    step="2"
                    value={offerForm.totalQuantity}
                    onChange={(e) => setOfferForm({ ...offerForm, totalQuantity: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Must be even number (pairs)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Sets Per Customer *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={offerForm.maxPerCustomer}
                    onChange={(e) => setOfferForm({ ...offerForm, maxPerCustomer: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="2"
                  />
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Describe your BOGO offer..."
                />
              </div>

              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-pink-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium mb-1">BOGO Offer Tips:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>BOGO deals increase average basket size significantly</li>
                      <li>Track popular pairings to optimize inventory</li>
                      <li>Set reasonable limits to prevent stockouts</li>
                      <li>Great for clearing slow-moving inventory</li>
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
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg hover:from-pink-700 hover:to-rose-700 font-semibold"
                >
                  Launch BOGO Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
