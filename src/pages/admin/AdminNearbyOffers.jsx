import React, { useState } from 'react';
import {
  MapPin, CheckCircle, XCircle, AlertTriangle, Eye, Filter, Search,
  Download, TrendingUp, Users, Target, Clock, Navigation, Shield,
  BarChart3, Map, Crosshair, Globe, Edit, Trash2, Plus, Activity,
  DollarSign, Award, RefreshCw, Settings, ChevronDown, ChevronUp
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminNearbyOffers() {
  const [activeTab, setActiveTab] = useState('pending');
  const [expandedOffer, setExpandedOffer] = useState(null);
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [stats] = useState({
    totalOffers: 2456,
    pendingApproval: 23,
    activeOffers: 1892,
    rejectedToday: 8,
    totalRedemptions: 45670,
    fraudDetected: 12,
    avgRadius: 5.2,
    topCity: 'Mumbai'
  });

  const [pendingOffers] = useState([
    {
      id: 'NBO001',
      merchantId: 'M001',
      merchantName: 'The Coffee House',
      offerTitle: '30% Off All Beverages - Near You',
      offerType: 'nearby_discount',
      discount: 30,
      category: 'Food & Beverage',
      location: {
        name: 'Koramangala, Bangalore',
        lat: 12.9352,
        lng: 77.6245,
        address: '123, 5th Block, Koramangala, Bangalore 560095'
      },
      radius: {
        current: 3,
        requested: 5,
        max: 10
      },
      eligibility: {
        cities: ['Bangalore', 'Mumbai', 'Delhi'],
        regions: ['Karnataka', 'Maharashtra', 'Delhi NCR'],
        minDistance: 0,
        maxDistance: 5
      },
      terms: 'Valid within 5km radius. Show offer on app to redeem. One use per customer.',
      validFrom: '2025-12-28',
      validUntil: '2026-01-15',
      maxRedemptions: 500,
      budget: 50000,
      estimatedReach: 15000,
      submittedAt: '2025-12-27 10:30',
      status: 'pending',
      riskFlags: ['Radius exceeds merchant tier limit'],
      fraudScore: 0.15,
      merchantTier: 'standard',
      previousOffers: 12,
      approvalRate: 92
    },
    {
      id: 'NBO002',
      merchantId: 'M002',
      merchantName: 'FitZone Gym',
      offerTitle: 'Free 1-Week Trial - Walk-In Today',
      offerType: 'nearby_trial',
      discount: 100,
      category: 'Health & Fitness',
      location: {
        name: 'Bandra West, Mumbai',
        lat: 19.0596,
        lng: 72.8295,
        address: 'Plot 45, Linking Road, Bandra West, Mumbai 400050'
      },
      radius: {
        current: 2,
        requested: 2,
        max: 5
      },
      eligibility: {
        cities: ['Mumbai'],
        regions: ['Maharashtra'],
        minDistance: 0,
        maxDistance: 2
      },
      terms: 'Valid for new customers only. Must visit within 2km. ID verification required.',
      validFrom: '2025-12-28',
      validUntil: '2026-02-28',
      maxRedemptions: 200,
      budget: 40000,
      estimatedReach: 8000,
      submittedAt: '2025-12-27 09:15',
      status: 'pending',
      riskFlags: [],
      fraudScore: 0.08,
      merchantTier: 'premium',
      previousOffers: 25,
      approvalRate: 96
    },
    {
      id: 'NBO003',
      merchantId: 'M003',
      merchantName: 'Fashion Hub',
      offerTitle: 'Buy 1 Get 1 Free - Visit Our Store',
      offerType: 'nearby_bogo',
      discount: 50,
      category: 'Fashion',
      location: {
        name: 'Connaught Place, New Delhi',
        lat: 28.6304,
        lng: 77.2177,
        address: 'Shop 12, Inner Circle, Connaught Place, New Delhi 110001'
      },
      radius: {
        current: 7,
        requested: 7,
        max: 10
      },
      eligibility: {
        cities: ['Delhi', 'Noida', 'Gurgaon'],
        regions: ['Delhi NCR'],
        minDistance: 0,
        maxDistance: 7
      },
      terms: 'In-store only. Lower value item free. Valid on fashion apparel only.',
      validFrom: '2025-12-29',
      validUntil: '2026-01-05',
      maxRedemptions: 1000,
      budget: 200000,
      estimatedReach: 45000,
      submittedAt: '2025-12-26 16:45',
      status: 'pending',
      riskFlags: ['High redemption limit', 'Large coverage area'],
      fraudScore: 0.22,
      merchantTier: 'premium',
      previousOffers: 8,
      approvalRate: 87.5
    }
  ]);

  const [activeOffers] = useState([
    {
      id: 'NBO010',
      merchantName: 'Pizza Paradise',
      offerTitle: 'Free Garlic Bread with Any Pizza',
      location: 'Indiranagar, Bangalore',
      radius: 4,
      city: 'Bangalore',
      redemptions: 234,
      maxRedemptions: 500,
      reach: 12000,
      views: 8900,
      clicks: 2340,
      ctr: 26.3,
      fraudAlerts: 2,
      approvedBy: 'Admin Sarah',
      approvedAt: '2025-12-20',
      expiresAt: '2026-01-10',
      revenue: 156000,
      avgDistance: 2.3
    },
    {
      id: 'NBO011',
      merchantName: 'Book Heaven',
      offerTitle: '20% Off All Fiction Books',
      location: 'Malad, Mumbai',
      radius: 3,
      city: 'Mumbai',
      redemptions: 89,
      maxRedemptions: 200,
      reach: 6700,
      views: 3400,
      clicks: 890,
      ctr: 26.2,
      fraudAlerts: 0,
      approvedBy: 'Admin Mike',
      approvedAt: '2025-12-22',
      expiresAt: '2026-01-15',
      revenue: 45000,
      avgDistance: 1.8
    }
  ]);

  const [rejectedOffers] = useState([
    {
      id: 'NBO020',
      merchantName: 'Quick Mart',
      offerTitle: '90% Off Everything',
      location: 'Unknown, Delhi',
      submittedAt: '2025-12-25',
      rejectedAt: '2025-12-25',
      rejectedBy: 'Admin Sarah',
      reason: 'Fraudulent discount percentage and unverified location',
      category: 'fraud_suspected'
    },
    {
      id: 'NBO021',
      merchantName: 'Tech Store',
      offerTitle: 'Free iPhone with Purchase',
      location: 'MG Road, Bangalore',
      submittedAt: '2025-12-24',
      rejectedAt: '2025-12-24',
      rejectedBy: 'Admin Mike',
      reason: 'Misleading offer terms and unrealistic promotion',
      category: 'misleading_content'
    }
  ]);

  const [geographicZones] = useState([
    { id: 1, name: 'Bangalore Metro', radius: 50, merchants: 456, offers: 892, status: 'active' },
    { id: 2, name: 'Mumbai Metro', radius: 60, merchants: 678, offers: 1234, status: 'active' },
    { id: 3, name: 'Delhi NCR', radius: 80, merchants: 534, offers: 1045, status: 'active' },
    { id: 4, name: 'Pune City', radius: 40, merchants: 234, offers: 456, status: 'active' },
    { id: 5, name: 'Hyderabad Metro', radius: 45, merchants: 312, offers: 623, status: 'active' }
  ]);

  const [fraudDetection] = useState([
    {
      id: 1,
      merchantName: 'Fake Store',
      offerId: 'NBO099',
      type: 'fake_location',
      severity: 'high',
      description: 'GPS coordinates do not match merchant address',
      detectedAt: '2025-12-27 08:30',
      status: 'blocked'
    },
    {
      id: 2,
      merchantName: 'Duplicate Deals',
      offerId: 'NBO098',
      type: 'multiple_claims',
      severity: 'medium',
      description: 'Same user claiming offer from 10km away within 5 minutes',
      detectedAt: '2025-12-27 07:15',
      status: 'investigating'
    },
    {
      id: 3,
      merchantName: 'Location Spoofer',
      offerId: 'NBO097',
      type: 'location_spoofing',
      severity: 'high',
      description: 'User location jumping across cities rapidly',
      detectedAt: '2025-12-26 19:45',
      status: 'blocked'
    }
  ]);

  const getRiskColor = (score) => {
    if (score < 0.3) return 'text-green-600 bg-green-100';
    if (score < 0.6) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      active: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      expired: 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Nearby Offers Management</h1>
          <p className="text-gray-600">Manage location-based offers, geographic zones, and fraud detection</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.totalOffers}</p>
            <p className="text-sm text-gray-600">Total Offers</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-yellow-600">{stats.pendingApproval}</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-600">{stats.activeOffers}</p>
            <p className="text-sm text-gray-600">Active</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <p className="text-2xl font-bold text-red-600">{stats.rejectedToday}</p>
            <p className="text-sm text-gray-600">Rejected</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.totalRedemptions.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Redemptions</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <p className="text-2xl font-bold text-orange-600">{stats.fraudDetected}</p>
            <p className="text-sm text-gray-600">Fraud Alerts</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <Crosshair className="w-8 h-8 text-indigo-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.avgRadius} km</p>
            <p className="text-sm text-gray-600">Avg Radius</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <Globe className="w-8 h-8 text-teal-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.topCity}</p>
            <p className="text-sm text-gray-600">Top City</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('pending')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'pending'
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Pending Approval</span>
                  <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    {stats.pendingApproval}
                  </span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('active')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'active'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Active Offers</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('zones')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'zones'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4" />
                  <span>Geographic Zones</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('fraud')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'fraud'
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Fraud Detection</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'analytics'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>Analytics</span>
                </div>
              </button>
            </nav>
          </div>

          {/* Pending Approval Tab */}
          {activeTab === 'pending' && (
            <div className="p-6">
              {/* Filters */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search offers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Cities</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="pune">Pune</option>
                  </select>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
              </div>

              {/* Pending Offers List */}
              <div className="space-y-4">
                {pendingOffers.map((offer) => (
                  <div key={offer.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{offer.offerTitle}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(offer.status)}`}>
                              {offer.status}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(offer.fraudScore)}`}>
                              Risk: {(offer.fraudScore * 100).toFixed(0)}%
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="font-medium">{offer.merchantName}</span>
                            <span>•</span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {offer.location.name}
                            </span>
                            <span>•</span>
                            <span>Submitted {offer.submittedAt}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setExpandedOffer(expandedOffer === offer.id ? null : offer.id)}
                          className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                          {expandedOffer === offer.id ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-5 gap-4 mb-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Discount</p>
                          <p className="text-lg font-bold text-green-600">{offer.discount}%</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Radius</p>
                          <p className="text-lg font-bold text-blue-600">{offer.radius.requested} km</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Budget</p>
                          <p className="text-lg font-bold text-gray-900">₹{offer.budget.toLocaleString()}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Est. Reach</p>
                          <p className="text-lg font-bold text-gray-900">{offer.estimatedReach.toLocaleString()}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Max Uses</p>
                          <p className="text-lg font-bold text-gray-900">{offer.maxRedemptions}</p>
                        </div>
                      </div>

                      {/* Risk Flags */}
                      {offer.riskFlags && offer.riskFlags.length > 0 && (
                        <div className="mb-4">
                          <div className="flex items-start space-x-2 text-sm text-orange-800 bg-orange-50 rounded-lg p-3">
                            <AlertTriangle className="w-4 h-4 mt-0.5" />
                            <div>
                              <p className="font-medium">Risk Flags:</p>
                              <ul className="list-disc list-inside mt-1">
                                {offer.riskFlags.map((flag, idx) => (
                                  <li key={idx}>{flag}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Expanded Details */}
                      {expandedOffer === offer.id && (
                        <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Location Details</h4>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Address:</span>
                                <span className="text-sm font-medium text-gray-900">{offer.location.address}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Coordinates:</span>
                                <span className="text-sm font-medium text-gray-900">
                                  {offer.location.lat}, {offer.location.lng}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Eligibility Zones</h4>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Cities:</span>
                                <span className="text-sm font-medium text-gray-900">
                                  {offer.eligibility.cities.join(', ')}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Regions:</span>
                                <span className="text-sm font-medium text-gray-900">
                                  {offer.eligibility.regions.join(', ')}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Distance Range:</span>
                                <span className="text-sm font-medium text-gray-900">
                                  {offer.eligibility.minDistance} - {offer.eligibility.maxDistance} km
                                </span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Merchant Info</h4>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Tier:</span>
                                <span className="text-sm font-medium text-gray-900">{offer.merchantTier}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Previous Offers:</span>
                                <span className="text-sm font-medium text-gray-900">{offer.previousOffers}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Approval Rate:</span>
                                <span className="text-sm font-medium text-green-600">{offer.approvalRate}%</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Terms & Conditions</h4>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <p className="text-sm text-gray-900">{offer.terms}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3 mt-4">
                        <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Approve</span>
                        </button>
                        <button className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center justify-center space-x-2">
                          <Edit className="w-4 h-4" />
                          <span>Request Changes</span>
                        </button>
                        <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center space-x-2">
                          <XCircle className="w-4 h-4" />
                          <span>Reject</span>
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span>View on Map</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Active Offers Tab */}
          {activeTab === 'active' && (
            <div className="p-6">
              <div className="space-y-4">
                {activeOffers.map((offer) => (
                  <div key={offer.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{offer.offerTitle}</h3>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            Active
                          </span>
                          {offer.fraudAlerts > 0 && (
                            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium flex items-center">
                              <AlertTriangle className="w-3 h-3 mr-1" />
                              {offer.fraudAlerts} Fraud Alerts
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="font-medium">{offer.merchantName}</span>
                          <span>•</span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {offer.location}
                          </span>
                          <span>•</span>
                          <span>{offer.radius} km radius</span>
                        </div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-6 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Redemptions</p>
                        <p className="text-sm font-bold text-gray-900">
                          {offer.redemptions}/{offer.maxRedemptions}
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                          <div
                            className="bg-green-600 h-1.5 rounded-full"
                            style={{ width: `${(offer.redemptions / offer.maxRedemptions) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Reach</p>
                        <p className="text-sm font-bold text-gray-900">{offer.reach.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">CTR</p>
                        <p className="text-sm font-bold text-blue-600">{offer.ctr}%</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Revenue</p>
                        <p className="text-sm font-bold text-green-600">₹{offer.revenue.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Avg Distance</p>
                        <p className="text-sm font-bold text-gray-900">{offer.avgDistance} km</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Expires</p>
                        <p className="text-sm font-bold text-gray-900">{offer.expiresAt}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>View Analytics</span>
                      </button>
                      <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 flex items-center space-x-2">
                        <Edit className="w-4 h-4" />
                        <span>Edit Radius</span>
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center space-x-2">
                        <XCircle className="w-4 h-4" />
                        <span>Deactivate</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Geographic Zones Tab */}
          {activeTab === 'zones' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Manage Geographic Eligibility Zones</h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Plus className="w-4 h-4" />
                  <span>Add Zone</span>
                </button>
              </div>

              <div className="space-y-4">
                {geographicZones.map((zone) => (
                  <div key={zone.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{zone.name}</h4>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            {zone.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mt-4">
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Coverage Radius</p>
                            <p className="text-lg font-bold text-blue-600">{zone.radius} km</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Active Merchants</p>
                            <p className="text-lg font-bold text-gray-900">{zone.merchants}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Active Offers</p>
                            <p className="text-lg font-bold text-green-600">{zone.offers}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Settings className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fraud Detection Tab */}
          {activeTab === 'fraud' && (
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Location Fraud Detection</h3>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-orange-900">
                        {fraudDetection.length} fraud attempts detected in the last 24 hours
                      </p>
                      <p className="text-xs text-orange-700 mt-1">
                        Advanced algorithms monitoring GPS spoofing, fake locations, and multiple claims
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {fraudDetection.map((fraud) => (
                  <div key={fraud.id} className="border-l-4 border-red-500 bg-red-50 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{fraud.merchantName}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            fraud.severity === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {fraud.severity} severity
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            fraud.status === 'blocked' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {fraud.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="font-medium">Type:</span> {fraud.type.replace(/_/g, ' ')}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="font-medium">Offer ID:</span> {fraud.offerId}
                        </p>
                        <p className="text-sm text-gray-700">{fraud.description}</p>
                        <p className="text-xs text-gray-600 mt-2">Detected at {fraud.detectedAt}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                        Block Permanently
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                        View Details
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                        False Positive
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Cities by Redemptions</h3>
                  <div className="space-y-3">
                    {[
                      { city: 'Mumbai', redemptions: 12340, growth: 15.2 },
                      { city: 'Bangalore', redemptions: 10890, growth: 12.8 },
                      { city: 'Delhi', redemptions: 9560, growth: 8.5 },
                      { city: 'Pune', redemptions: 6780, growth: 22.3 },
                      { city: 'Hyderabad', redemptions: 5430, growth: 18.7 }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg font-bold text-gray-400">{idx + 1}</span>
                          <div>
                            <p className="font-medium text-gray-900">{item.city}</p>
                            <p className="text-sm text-gray-600">{item.redemptions.toLocaleString()} redemptions</p>
                          </div>
                        </div>
                        <div className="flex items-center text-green-600">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          <span className="text-sm font-medium">{item.growth}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance by Radius</h3>
                  <div className="space-y-4">
                    {[
                      { range: '0-2 km', offers: 456, redemptions: 8900, ctr: 28.5 },
                      { range: '2-5 km', offers: 892, redemptions: 15600, ctr: 24.2 },
                      { range: '5-10 km', offers: 544, redemptions: 9200, ctr: 18.7 },
                      { range: '10+ km', offers: 234, redemptions: 3100, ctr: 12.3 }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{item.range}</span>
                          <span className="text-sm text-blue-600 font-medium">{item.ctr}% CTR</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Offers</p>
                            <p className="font-bold text-gray-900">{item.offers}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Redemptions</p>
                            <p className="font-bold text-green-600">{item.redemptions.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
