import React, { useState } from 'react';
import {
  ArrowLeft, MapPin, RefreshCw, CheckCircle, XCircle, Link2,
  Star, Clock, Image, MessageSquare, TrendingUp, AlertCircle,
  ExternalLink, Search, Filter, Eye, Edit, Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminGMBSync = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('listings');

  const stats = {
    totalListings: 4234,
    verified: 3890,
    pendingVerification: 234,
    syncErrors: 110,
    avgRating: 4.2
  };

  const listings = [
    {
      id: 1,
      businessName: 'Spice Garden Restaurant',
      category: 'Restaurant',
      address: 'Koramangala, Bangalore',
      rating: 4.5,
      reviews: 234,
      verified: true,
      syncStatus: 'synced',
      lastSync: '5 mins ago',
      photos: 45,
      postsThisMonth: 8
    },
    {
      id: 2,
      businessName: 'Glam Studio Salon',
      category: 'Beauty Salon',
      address: 'Indiranagar, Bangalore',
      rating: 4.3,
      reviews: 156,
      verified: true,
      syncStatus: 'synced',
      lastSync: '12 mins ago',
      photos: 32,
      postsThisMonth: 5
    },
    {
      id: 3,
      businessName: 'PowerFit Gym',
      category: 'Fitness Center',
      address: 'HSR Layout, Bangalore',
      rating: 4.1,
      reviews: 89,
      verified: false,
      syncStatus: 'pending_verification',
      lastSync: null,
      photos: 18,
      postsThisMonth: 2
    },
    {
      id: 4,
      businessName: 'Fresh Mart Grocery',
      category: 'Grocery Store',
      address: 'Whitefield, Bangalore',
      rating: 3.9,
      reviews: 67,
      verified: true,
      syncStatus: 'error',
      lastSync: '2 days ago',
      error: 'Address mismatch detected',
      photos: 12,
      postsThisMonth: 0
    }
  ];

  const syncActions = [
    { action: 'Hours Updated', merchant: 'Spice Garden', time: '5 mins ago', status: 'success' },
    { action: 'Photos Added', merchant: 'Glam Studio', time: '12 mins ago', status: 'success' },
    { action: 'Post Published', merchant: 'PowerFit Gym', time: '1 hour ago', status: 'success' },
    { action: 'Info Update', merchant: 'Fresh Mart', time: '2 hours ago', status: 'failed', error: 'API timeout' }
  ];

  const bulkActions = [
    { id: 'sync_hours', label: 'Sync Business Hours', count: 4234 },
    { id: 'sync_photos', label: 'Sync Photos', count: 3456 },
    { id: 'sync_posts', label: 'Publish Posts', count: 890 },
    { id: 'sync_reviews', label: 'Fetch Reviews', count: 4234 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'synced': return 'bg-green-500/20 text-green-400';
      case 'pending_verification': return 'bg-yellow-500/20 text-yellow-400';
      case 'error': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Globe size={24} className="mr-2" />
                Google My Business Sync
              </h1>
              <p className="text-blue-200 text-sm">Manage merchant GMB listings</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg">
            <RefreshCw size={24} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{(stats.totalListings/1000).toFixed(1)}K</p>
            <p className="text-xs text-blue-200">Listings</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-400">{stats.verified}</p>
            <p className="text-xs text-blue-200">Verified</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-yellow-400">{stats.pendingVerification}</p>
            <p className="text-xs text-blue-200">Pending</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <div className="flex items-center justify-center">
              <Star size={14} className="text-yellow-400 mr-1" />
              <span className="text-lg font-bold">{stats.avgRating}</span>
            </div>
            <p className="text-xs text-blue-200">Avg Rating</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('listings')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'listings' ? 'bg-blue-600 text-white' : 'text-gray-400'
            }`}
          >
            Listings
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'activity' ? 'bg-blue-600 text-white' : 'text-gray-400'
            }`}
          >
            Activity
          </button>
          <button
            onClick={() => setActiveTab('bulk')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'bulk' ? 'bg-blue-600 text-white' : 'text-gray-400'
            }`}
          >
            Bulk Actions
          </button>
        </div>
      </div>

      {/* Search */}
      {activeTab === 'listings' && (
        <div className="px-4 pb-4">
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search merchants..."
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl"
              />
            </div>
            <button className="bg-gray-800 text-white px-4 rounded-xl">
              <Filter size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Listings */}
      {activeTab === 'listings' && (
        <div className="px-4 space-y-3">
          {listings.map(listing => (
            <div key={listing.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center">
                    <p className="text-white font-bold">{listing.businessName}</p>
                    {listing.verified && (
                      <CheckCircle size={16} className="text-blue-400 ml-2" />
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">{listing.category}</p>
                  <div className="flex items-center text-gray-500 text-xs mt-1">
                    <MapPin size={12} className="mr-1" />
                    {listing.address}
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(listing.syncStatus)}`}>
                  {listing.syncStatus.replace('_', ' ')}
                </span>
              </div>

              {listing.error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2 mb-3">
                  <p className="text-red-400 text-sm flex items-center">
                    <AlertCircle size={14} className="mr-2" />
                    {listing.error}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-4 gap-2 mb-3 text-sm">
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <div className="flex items-center justify-center">
                    <Star size={12} className="text-yellow-400 mr-1" />
                    <span className="text-white font-bold">{listing.rating}</span>
                  </div>
                  <p className="text-gray-400 text-xs">Rating</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">{listing.reviews}</p>
                  <p className="text-gray-400 text-xs">Reviews</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">{listing.photos}</p>
                  <p className="text-gray-400 text-xs">Photos</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">{listing.postsThisMonth}</p>
                  <p className="text-gray-400 text-xs">Posts</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                {listing.lastSync && (
                  <span className="text-gray-500">Last sync: {listing.lastSync}</span>
                )}
                <div className="flex space-x-2">
                  <button className="text-blue-400 flex items-center">
                    <ExternalLink size={14} className="mr-1" />
                    View GMB
                  </button>
                  <button className="text-gray-400">
                    <RefreshCw size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Activity */}
      {activeTab === 'activity' && (
        <div className="px-4 space-y-3">
          {syncActions.map((action, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  action.status === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'
                }`}>
                  {action.status === 'success' ? (
                    <CheckCircle size={20} className="text-green-400" />
                  ) : (
                    <XCircle size={20} className="text-red-400" />
                  )}
                </div>
                <div>
                  <p className="text-white font-medium">{action.action}</p>
                  <p className="text-gray-400 text-sm">{action.merchant}</p>
                  {action.error && (
                    <p className="text-red-400 text-xs">{action.error}</p>
                  )}
                </div>
              </div>
              <span className="text-gray-500 text-sm">{action.time}</span>
            </div>
          ))}
        </div>
      )}

      {/* Bulk Actions */}
      {activeTab === 'bulk' && (
        <div className="px-4 space-y-4">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <p className="text-blue-400 font-medium">Bulk Sync Actions</p>
            <p className="text-gray-300 text-sm">Update multiple GMB listings at once</p>
          </div>

          <div className="space-y-3">
            {bulkActions.map(action => (
              <div key={action.id} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold">{action.label}</p>
                  <p className="text-gray-400 text-sm">{action.count} merchants affected</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Run
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Sync Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Auto-sync frequency</span>
                <select className="bg-gray-700 text-white px-3 py-2 rounded-lg">
                  <option>Every hour</option>
                  <option>Every 6 hours</option>
                  <option>Daily</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Sync photos automatically</span>
                <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Sync business hours</span>
                <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminGMBSync;
