import { useState } from 'react';
import { Search, Filter, Download, MoreVertical, Eye, CheckCircle, XCircle, Clock, Store, MapPin, Phone, Mail, Star, TrendingUp, Edit2, X, Save, Coins } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminMerchants() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPackage, setFilterPackage] = useState('all');
  const [showCommissionModal, setShowCommissionModal] = useState(false);
  const [selectedMerchant, setSelectedMerchant] = useState(null);
  const [customCommission, setCustomCommission] = useState({
    useCustom: false,
    total: 20,
    rezCoin: 7,
    brandedCoin: 5,
    priveCoin: 10,
    toReZ: 8
  });

  const [merchants, setMerchants] = useState([
    {
      id: 1,
      businessName: 'The Coffee House',
      logo: '☕',
      contactPerson: 'John Smith',
      email: 'john@coffeehouse.com',
      phone: '+91 98765 43210',
      city: 'Mumbai',
      address: '123 Main Street, Bandra',
      status: 'active',
      packageTier: 'premium',
      tier: 'basic',
      verified: true,
      rating: 4.5,
      totalReviews: 230,
      activeOffers: 8,
      totalRedemptions: 1234,
      revenue: 45678,
      joinedDate: '2024-01-15',
      customCommission: null
    },
    {
      id: 2,
      businessName: 'Pizza Paradise',
      logo: '🍕',
      contactPerson: 'Jane Doe',
      email: 'jane@pizzaparadise.com',
      phone: '+91 98765 43211',
      city: 'Delhi',
      address: '456 Park Avenue, CP',
      status: 'pending',
      packageTier: 'plus',
      tier: 'free',
      verified: false,
      rating: 0,
      totalReviews: 0,
      activeOffers: 0,
      totalRedemptions: 0,
      revenue: 0,
      joinedDate: '2024-01-20',
      customCommission: null
    },
    {
      id: 3,
      businessName: 'Burger King',
      logo: '🍔',
      contactPerson: 'Mike Johnson',
      email: 'mike@burgerking.com',
      phone: '+91 98765 43212',
      city: 'Bangalore',
      address: '789 MG Road',
      status: 'active',
      packageTier: 'premium',
      tier: 'golden',
      verified: true,
      rating: 4.3,
      totalReviews: 189,
      activeOffers: 12,
      totalRedemptions: 2345,
      revenue: 67890,
      joinedDate: '2024-01-10',
      customCommission: {
        useCustom: true,
        total: 16,
        rezCoin: 6,
        brandedCoin: 5,
        priveCoin: 12,
        toReZ: 5
      }
    },
    {
      id: 4,
      businessName: 'Fashion Boutique',
      logo: '👗',
      contactPerson: 'Sarah Williams',
      email: 'sarah@fashionboutique.com',
      phone: '+91 98765 43213',
      city: 'Mumbai',
      address: '321 Fashion Street',
      status: 'suspended',
      packageTier: 'basic',
      tier: 'diamond',
      verified: true,
      rating: 3.8,
      totalReviews: 145,
      activeOffers: 0,
      totalRedemptions: 567,
      revenue: 23456,
      joinedDate: '2024-01-05',
      customCommission: null
    }
  ]);

  const filteredMerchants = merchants.filter(merchant => {
    const matchesSearch = merchant.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         merchant.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         merchant.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || merchant.status === filterStatus;
    const matchesPackage = filterPackage === 'all' || merchant.packageTier === filterPackage;

    return matchesSearch && matchesStatus && matchesPackage;
  });

  const handleApprove = (id) => {
    setMerchants(prev => prev.map(m =>
      m.id === id ? { ...m, status: 'active', verified: true } : m
    ));
  };

  const handleReject = (id) => {
    setMerchants(prev => prev.map(m =>
      m.id === id ? { ...m, status: 'rejected' } : m
    ));
  };

  const handleSuspend = (id) => {
    setMerchants(prev => prev.map(m =>
      m.id === id ? { ...m, status: 'suspended' } : m
    ));
  };

  const handleOpenCommissionModal = (merchant) => {
    setSelectedMerchant(merchant);
    if (merchant.customCommission) {
      setCustomCommission(merchant.customCommission);
    } else {
      // Set tier defaults
      const tierDefaults = {
        free: { total: 20, rezCoin: 7, brandedCoin: 5, priveCoin: 10, toReZ: 8 },
        basic: { total: 18, rezCoin: 8, brandedCoin: 6, priveCoin: 12, toReZ: 4 },
        golden: { total: 17, rezCoin: 9, brandedCoin: 6, priveCoin: 15, toReZ: 2 },
        diamond: { total: 15, rezCoin: 10, brandedCoin: 7, priveCoin: 20, toReZ: -2 }
      };
      const defaults = tierDefaults[merchant.tier] || tierDefaults.free;
      setCustomCommission({
        useCustom: false,
        ...defaults
      });
    }
    setShowCommissionModal(true);
  };

  const handleSaveCommission = () => {
    setMerchants(prev => prev.map(m =>
      m.id === selectedMerchant.id
        ? { ...m, customCommission: customCommission.useCustom ? customCommission : null }
        : m
    ));
    setShowCommissionModal(false);
  };

  const handleCommissionChange = (field, value) => {
    const parsedValue = parseFloat(value);
    setCustomCommission(prev => {
      const updated = { ...prev, [field]: parsedValue };

      // Recalculate toReZ
      if (field === 'total' || field === 'rezCoin' || field === 'brandedCoin') {
        updated.toReZ = updated.total - updated.rezCoin - updated.brandedCoin;
      }

      return updated;
    });
  };

  const getTierBadge = (tier) => {
    const colors = {
      free: 'bg-gray-100 text-gray-700',
      basic: 'bg-blue-100 text-blue-700',
      golden: 'bg-yellow-100 text-yellow-700',
      diamond: 'bg-purple-100 text-purple-700'
    };
    return colors[tier] || colors.free;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Merchant Management</h1>
              <p className="text-gray-600 mt-1">Approve, manage and monitor all merchants</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Download className="w-5 h-5" />
              Export Merchants
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Total Merchants</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">1,256</p>
            <p className="text-sm text-green-600 mt-2">+8.3% from last month</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Active Merchants</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">1,123</p>
            <p className="text-sm text-gray-600 mt-2">89% of total</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Pending Approval</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">45</p>
            <p className="text-sm text-orange-600 mt-2">Requires action</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Premium Partners</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">234</p>
            <p className="text-sm text-gray-600 mt-2">18% of total</p>
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
                  placeholder="Search by name, email, or contact..."
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
              <option value="pending">Pending</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
              <option value="rejected">Rejected</option>
            </select>

            <select
              value={filterPackage}
              onChange={(e) => setFilterPackage(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Packages</option>
              <option value="basic">Basic</option>
              <option value="plus">Plus</option>
              <option value="premium">Premium</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>
        </div>

        {/* Merchants Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merchant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tier</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Commission</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredMerchants.map((merchant) => (
                  <tr key={merchant.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-2xl">
                          {merchant.logo}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{merchant.businessName}</p>
                          <p className="text-sm text-gray-500">Joined {merchant.joinedDate}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">{merchant.contactPerson}</p>
                        <p className="text-gray-500 flex items-center gap-1 mt-1">
                          <Mail className="w-3 h-3" />
                          {merchant.email}
                        </p>
                        <p className="text-gray-500 flex items-center gap-1 mt-1">
                          <Phone className="w-3 h-3" />
                          {merchant.phone}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="font-medium text-gray-900 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {merchant.city}
                        </p>
                        <p className="text-gray-500">{merchant.address}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTierBadge(merchant.tier)}`}>
                        {merchant.tier}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenCommissionModal(merchant)}
                          className="flex items-center gap-1 px-2 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors"
                        >
                          <Coins className="w-3 h-3" />
                          {merchant.customCommission ? `${merchant.customCommission.total}%` : 'Default'}
                        </button>
                        {merchant.customCommission?.useCustom && (
                          <span className="px-1.5 py-0.5 bg-orange-100 text-orange-700 text-xs rounded">Custom</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {merchant.status === 'active' ? (
                        <div className="text-sm">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            <span className="font-medium">{merchant.rating}</span>
                            <span className="text-gray-500">({merchant.totalReviews})</span>
                          </div>
                          <p className="text-gray-600">{merchant.activeOffers} active offers</p>
                          <p className="text-gray-600">{merchant.totalRedemptions} redemptions</p>
                          <p className="font-semibold text-green-600">₹{(merchant.revenue / 1000).toFixed(1)}K revenue</p>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No data yet</p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          merchant.status === 'active' ? 'bg-green-100 text-green-700' :
                          merchant.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          merchant.status === 'suspended' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {merchant.status}
                        </span>
                        {merchant.verified && (
                          <span className="inline-flex items-center gap-1 text-xs text-green-600">
                            <CheckCircle className="w-3 h-3" />
                            Verified
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                          <Eye className="w-4 h-4" />
                        </button>
                        {merchant.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleApprove(merchant.id)}
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                              title="Approve"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleReject(merchant.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                              title="Reject"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </>
                        )}
                        {merchant.status === 'active' && (
                          <button
                            onClick={() => handleSuspend(merchant.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            title="Suspend"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        )}
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{filteredMerchants.length}</span> of <span className="font-medium">{merchants.length}</span> results
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>

        {/* Commission Override Modal */}
        {showCommissionModal && selectedMerchant && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Commission Configuration</h2>
                  <p className="text-sm text-gray-600 mt-1">{selectedMerchant.businessName}</p>
                </div>
                <button
                  onClick={() => setShowCommissionModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Tier Info */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Current Tier</p>
                      <p className="text-lg font-bold text-gray-900 capitalize">{selectedMerchant.tier} Tier</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTierBadge(selectedMerchant.tier)}`}>
                      {selectedMerchant.tier}
                    </span>
                  </div>
                </div>

                {/* Custom Commission Toggle */}
                <div className="mb-6">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={customCommission.useCustom}
                      onChange={(e) => setCustomCommission(prev => ({ ...prev, useCustom: e.target.checked }))}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Use Custom Commission</p>
                      <p className="text-sm text-gray-600">Override tier defaults with merchant-specific rates</p>
                    </div>
                  </label>
                </div>

                {/* Commission Breakdown */}
                <div className="space-y-4">
                  {/* Total Commission */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Commission (%)
                    </label>
                    <input
                      type="number"
                      value={customCommission.total}
                      onChange={(e) => handleCommissionChange('total', e.target.value)}
                      disabled={!customCommission.useCustom}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      step="0.1"
                      min="0"
                      max="30"
                    />
                  </div>

                  {/* ReZ Coin % */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      💚 ReZ Coin Distribution (%)
                    </label>
                    <input
                      type="number"
                      value={customCommission.rezCoin}
                      onChange={(e) => handleCommissionChange('rezCoin', e.target.value)}
                      disabled={!customCommission.useCustom}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      step="0.1"
                      min="0"
                      max="20"
                    />
                  </div>

                  {/* Branded Coin % */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      🔵 Branded Coin Distribution (%)
                    </label>
                    <input
                      type="number"
                      value={customCommission.brandedCoin}
                      onChange={(e) => handleCommissionChange('brandedCoin', e.target.value)}
                      disabled={!customCommission.useCustom}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      step="0.1"
                      min="0"
                      max="20"
                    />
                  </div>

                  {/* Privé Coin % */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      👑 Privé Coin Eligibility (% merchant pays)
                    </label>
                    <input
                      type="number"
                      value={customCommission.priveCoin}
                      onChange={(e) => setCustomCommission(prev => ({ ...prev, priveCoin: parseFloat(e.target.value) }))}
                      disabled={!customCommission.useCustom}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      step="0.1"
                      min="5"
                      max="100"
                    />
                    <p className="text-xs text-gray-500 mt-1">Merchant contribution for Privé coin rewards (5-100%)</p>
                  </div>

                  {/* Platform Revenue (Auto-calculated) */}
                  <div className="bg-green-50 rounded-lg p-4">
                    <label className="block text-sm font-medium text-green-900 mb-2">
                      Platform Revenue (toReZ) - Auto-calculated
                    </label>
                    <div className="text-2xl font-bold text-green-700">
                      {customCommission.toReZ.toFixed(1)}%
                    </div>
                    <p className="text-xs text-green-700 mt-1">
                      = Total ({customCommission.total}%) - ReZ Coin ({customCommission.rezCoin}%) - Branded Coin ({customCommission.brandedCoin}%)
                    </p>
                  </div>
                </div>

                {/* Warning */}
                {customCommission.useCustom && (
                  <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-sm text-orange-800">
                      <strong>Warning:</strong> Custom commission rates will override the tier defaults. This merchant will maintain these rates even if tier configuration changes.
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowCommissionModal(false)}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveCommission}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  Save Commission
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
