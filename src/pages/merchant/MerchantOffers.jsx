import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Filter, Eye, Edit, Pause, Play, Trash2, Copy, BarChart3, TrendingUp, Users, Heart } from 'lucide-react';

export default function MerchantOffers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const [offers, setOffers] = useState([
    {
      id: 1,
      title: '50% OFF on All Pizzas',
      description: 'Get flat 50% discount on all pizza varieties',
      offerType: 'discount_percent',
      discountValue: 50,
      status: 'active',
      validFrom: '2024-01-15',
      validUntil: '2024-01-30',
      views: 2345,
      saves: 178,
      redemptions: 234,
      revenue: 45600,
      performance: 'high',
      approvalStatus: 'approved'
    },
    {
      id: 2,
      title: 'Buy 1 Get 1 Free Coffee',
      description: 'Purchase any coffee and get another one free',
      offerType: 'bogo',
      discountValue: 0,
      status: 'active',
      validFrom: '2024-01-10',
      validUntil: '2024-02-15',
      views: 3456,
      saves: 289,
      redemptions: 456,
      revenue: 23400,
      performance: 'high',
      approvalStatus: 'approved'
    },
    {
      id: 3,
      title: '30% OFF on Burgers',
      description: 'Flat 30% discount on all burger items',
      offerType: 'discount_percent',
      discountValue: 30,
      status: 'pending',
      validFrom: '2024-01-25',
      validUntil: '2024-02-28',
      views: 0,
      saves: 0,
      redemptions: 0,
      revenue: 0,
      performance: 'pending',
      approvalStatus: 'pending'
    },
    {
      id: 4,
      title: 'Lunch Special - ₹100 OFF',
      description: 'Get ₹100 off on lunch combos',
      offerType: 'discount_fixed',
      discountValue: 100,
      status: 'active',
      validFrom: '2024-01-12',
      validUntil: '2024-01-26',
      views: 1234,
      saves: 89,
      redemptions: 123,
      revenue: 18900,
      performance: 'medium',
      approvalStatus: 'approved'
    },
    {
      id: 5,
      title: 'Weekend Mega Sale',
      description: '40% off on all items - Weekend only',
      offerType: 'discount_percent',
      discountValue: 40,
      status: 'paused',
      validFrom: '2024-01-20',
      validUntil: '2024-02-20',
      views: 5678,
      saves: 234,
      redemptions: 67,
      revenue: 12300,
      performance: 'low',
      approvalStatus: 'approved'
    },
    {
      id: 6,
      title: 'Free Dessert with Meal',
      description: 'Get a free dessert with any main course',
      offerType: 'freebie',
      discountValue: 0,
      status: 'expired',
      validFrom: '2024-01-01',
      validUntil: '2024-01-15',
      views: 4567,
      saves: 345,
      redemptions: 789,
      revenue: 34500,
      performance: 'high',
      approvalStatus: 'approved'
    }
  ]);

  const filteredOffers = offers.filter(offer => {
    const matchesSearch = offer.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || offer.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleToggleStatus = (id) => {
    setOffers(prev => prev.map(offer =>
      offer.id === id ? {
        ...offer,
        status: offer.status === 'active' ? 'paused' : 'active'
      } : offer
    ));
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this offer?')) {
      setOffers(prev => prev.filter(offer => offer.id !== id));
    }
  };

  const handleDuplicate = (id) => {
    const offerToDuplicate = offers.find(o => o.id === id);
    if (offerToDuplicate) {
      const newOffer = {
        ...offerToDuplicate,
        id: Math.max(...offers.map(o => o.id)) + 1,
        title: `${offerToDuplicate.title} (Copy)`,
        status: 'draft',
        views: 0,
        saves: 0,
        redemptions: 0,
        revenue: 0,
        performance: 'pending',
        approvalStatus: 'draft'
      };
      setOffers(prev => [newOffer, ...prev]);
    }
  };

  const stats = {
    total: offers.length,
    active: offers.filter(o => o.status === 'active').length,
    pending: offers.filter(o => o.approvalStatus === 'pending').length,
    paused: offers.filter(o => o.status === 'paused').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Offers</h1>
              <p className="text-gray-600 mt-1">Create and manage your promotional offers</p>
            </div>
            <Link
              to="/merchant/offers/create"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create New Offer
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Total Offers</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Active</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{stats.active}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Pending Approval</p>
            <p className="text-3xl font-bold text-orange-600 mt-2">{stats.pending}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Paused</p>
            <p className="text-3xl font-bold text-gray-600 mt-2">{stats.paused}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search offers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="pending">Pending</option>
              <option value="expired">Expired</option>
            </select>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredOffers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{offer.title}</h3>
                    <p className="text-sm text-gray-600">{offer.description}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    {offer.performance !== 'pending' && (
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        offer.performance === 'high' ? 'bg-green-100 text-green-700' :
                        offer.performance === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {offer.performance === 'high' ? '🔥 High' :
                         offer.performance === 'medium' ? '📊 Medium' :
                         '📉 Low'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Status Badges */}
                <div className="flex gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    offer.status === 'active' ? 'bg-green-100 text-green-700' :
                    offer.status === 'paused' ? 'bg-gray-100 text-gray-700' :
                    offer.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {offer.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    offer.approvalStatus === 'approved' ? 'bg-green-100 text-green-700' :
                    offer.approvalStatus === 'pending' ? 'bg-orange-100 text-orange-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {offer.approvalStatus}
                  </span>
                </div>

                {/* Offer Details */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-600">Offer Type</p>
                      <p className="text-sm font-medium text-gray-900">
                        {offer.offerType === 'discount_percent' ? `${offer.discountValue}% OFF` :
                         offer.offerType === 'discount_fixed' ? `₹${offer.discountValue} OFF` :
                         offer.offerType === 'bogo' ? 'BOGO' :
                         'Free Item'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Valid Until</p>
                      <p className="text-sm font-medium text-gray-900">{offer.validUntil}</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                {offer.status !== 'pending' && (
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                        <Eye className="w-3 h-3" />
                      </div>
                      <p className="text-lg font-bold text-gray-900">{offer.views.toLocaleString()}</p>
                      <p className="text-xs text-gray-600">Views</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                        <Heart className="w-3 h-3" />
                      </div>
                      <p className="text-lg font-bold text-gray-900">{offer.saves}</p>
                      <p className="text-xs text-gray-600">Saves</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                        <Users className="w-3 h-3" />
                      </div>
                      <p className="text-lg font-bold text-gray-900">{offer.redemptions}</p>
                      <p className="text-xs text-gray-600">Redeemed</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                        <TrendingUp className="w-3 h-3" />
                      </div>
                      <p className="text-lg font-bold text-green-600">₹{(offer.revenue / 1000).toFixed(1)}K</p>
                      <p className="text-xs text-gray-600">Revenue</p>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  {offer.status !== 'expired' && offer.status !== 'pending' && (
                    <button
                      onClick={() => handleToggleStatus(offer.id)}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 border rounded-lg text-sm ${
                        offer.status === 'active'
                          ? 'border-orange-300 text-orange-700 hover:bg-orange-50'
                          : 'border-green-300 text-green-700 hover:bg-green-50'
                      }`}
                    >
                      {offer.status === 'active' ? (
                        <>
                          <Pause className="w-4 h-4" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          Resume
                        </>
                      )}
                    </button>
                  )}
                  <button
                    onClick={() => handleDuplicate(offer.id)}
                    className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    title="Duplicate"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(offer.id)}
                    className="px-3 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOffers.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No offers found</h3>
            <p className="text-gray-600 mb-6">Create your first offer to start attracting customers</p>
            <Link
              to="/merchant/offers/create"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Plus className="w-5 h-5" />
              Create Your First Offer
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
