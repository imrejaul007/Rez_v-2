import { useState } from 'react';
import { Search, Plus, Eye, Edit2, Trash2, DollarSign, TrendingUp, Users, Store, Award, Calendar, CheckCircle, XCircle, Clock, Building2, Coins, BarChart3, Target, Percent } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminCoPartnerBrands() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [coPartners, setCoPartners] = useState([
    {
      id: 1,
      brandName: 'Zara Fashion Hub',
      logo: '👗',
      category: 'Fashion',
      investmentAmount: 500000,
      equityShare: 50,
      revenueShare: 50,
      status: 'active',
      joinedDate: '2024-01-15',
      contractEndDate: '2026-01-15',
      monthlyRevenue: 125000,
      totalRevenue: 1500000,
      activeUsers: 2340,
      totalTransactions: 8900,
      revenueGrowth: 12.5,
      contact: {
        name: 'Rahul Sharma',
        email: 'rahul@zarafashion.com',
        phone: '+91 98765 43210'
      },
      coins: {
        rezCoin: 8,
        brandedCoin: 7,
        priveCoin: 15
      }
    },
    {
      id: 2,
      brandName: 'FitZone Gym',
      logo: '💪',
      category: 'Fitness',
      investmentAmount: 500000,
      equityShare: 50,
      revenueShare: 50,
      status: 'active',
      joinedDate: '2024-02-01',
      contractEndDate: '2026-02-01',
      monthlyRevenue: 89000,
      totalRevenue: 890000,
      activeUsers: 1230,
      totalTransactions: 5600,
      revenueGrowth: 8.3,
      contact: {
        name: 'Priya Patel',
        email: 'priya@fitzone.com',
        phone: '+91 98765 43211'
      },
      coins: {
        rezCoin: 7,
        brandedCoin: 6,
        priveCoin: 12
      }
    },
    {
      id: 3,
      brandName: 'Green Organic Store',
      logo: '🌿',
      category: 'Grocery',
      investmentAmount: 500000,
      equityShare: 50,
      revenueShare: 50,
      status: 'pending',
      joinedDate: '2024-03-10',
      contractEndDate: '2026-03-10',
      monthlyRevenue: 0,
      totalRevenue: 0,
      activeUsers: 0,
      totalTransactions: 0,
      revenueGrowth: 0,
      contact: {
        name: 'Amit Kumar',
        email: 'amit@greenorganic.com',
        phone: '+91 98765 43212'
      },
      coins: {
        rezCoin: 8,
        brandedCoin: 6,
        priveCoin: 10
      }
    }
  ]);

  const [newPartner, setNewPartner] = useState({
    brandName: '',
    logo: '',
    category: '',
    investmentAmount: 500000,
    equityShare: 50,
    revenueShare: 50,
    contractPeriod: 24,
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    rezCoin: 8,
    brandedCoin: 6,
    priveCoin: 12
  });

  const filteredPartners = coPartners.filter(partner => {
    const matchesSearch = partner.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         partner.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || partner.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    totalPartners: coPartners.length,
    activePartners: coPartners.filter(p => p.status === 'active').length,
    pendingPartners: coPartners.filter(p => p.status === 'pending').length,
    totalInvestment: coPartners.reduce((sum, p) => sum + p.investmentAmount, 0),
    totalRevenue: coPartners.reduce((sum, p) => sum + p.totalRevenue, 0),
    avgRevenueGrowth: coPartners.filter(p => p.status === 'active').reduce((sum, p) => sum + p.revenueGrowth, 0) / coPartners.filter(p => p.status === 'active').length || 0
  };

  const handleCreatePartner = () => {
    const partner = {
      id: coPartners.length + 1,
      brandName: newPartner.brandName,
      logo: newPartner.logo,
      category: newPartner.category,
      investmentAmount: newPartner.investmentAmount,
      equityShare: newPartner.equityShare,
      revenueShare: newPartner.revenueShare,
      status: 'pending',
      joinedDate: new Date().toISOString().split('T')[0],
      contractEndDate: new Date(Date.now() + newPartner.contractPeriod * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      monthlyRevenue: 0,
      totalRevenue: 0,
      activeUsers: 0,
      totalTransactions: 0,
      revenueGrowth: 0,
      contact: {
        name: newPartner.contactName,
        email: newPartner.contactEmail,
        phone: newPartner.contactPhone
      },
      coins: {
        rezCoin: newPartner.rezCoin,
        brandedCoin: newPartner.brandedCoin,
        priveCoin: newPartner.priveCoin
      }
    };
    setCoPartners([...coPartners, partner]);
    setShowCreateModal(false);
    setNewPartner({
      brandName: '',
      logo: '',
      category: '',
      investmentAmount: 500000,
      equityShare: 50,
      revenueShare: 50,
      contractPeriod: 24,
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      rezCoin: 8,
      brandedCoin: 6,
      priveCoin: 12
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Co-Partner Brands</h1>
              <p className="text-gray-600 mt-1">₹5L investment for 50% equity partnership model</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Co-Partner
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="w-5 h-5 text-indigo-600" />
              <p className="text-sm text-gray-600 font-medium">Total Partners</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.totalPartners}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-sm text-gray-600 font-medium">Active</p>
            </div>
            <p className="text-2xl font-bold text-green-600">{stats.activePartners}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <p className="text-sm text-gray-600 font-medium">Pending</p>
            </div>
            <p className="text-2xl font-bold text-orange-600">{stats.pendingPartners}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-purple-600" />
              <p className="text-sm text-gray-600 font-medium">Total Investment</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{(stats.totalInvestment / 100000).toFixed(1)}L</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              <p className="text-sm text-gray-600 font-medium">Total Revenue</p>
            </div>
            <p className="text-2xl font-bold text-blue-600">₹{(stats.totalRevenue / 100000).toFixed(1)}L</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <p className="text-sm text-gray-600 font-medium">Avg Growth</p>
            </div>
            <p className="text-2xl font-bold text-emerald-600">+{stats.avgRevenueGrowth.toFixed(1)}%</p>
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
                  placeholder="Search by brand name or category..."
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
            </select>
          </div>
        </div>

        {/* Co-Partners Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Brand</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Investment Model</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Coin Distribution</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contract</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPartners.map((partner) => (
                  <tr key={partner.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-2xl">
                          {partner.logo}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{partner.brandName}</p>
                          <p className="text-sm text-gray-500">{partner.category}</p>
                          <p className="text-xs text-gray-400">{partner.contact.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className="w-4 h-4 text-purple-600" />
                          <span className="font-semibold text-purple-600">₹{(partner.investmentAmount / 100000).toFixed(1)}L</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Percent className="w-3 h-3 text-gray-500" />
                          <span className="text-gray-600">{partner.equityShare}% Equity Share</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-3 h-3 text-gray-500" />
                          <span className="text-gray-600">{partner.revenueShare}% Revenue Share</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs">💚 ReZ:</span>
                          <span className="text-xs font-medium text-emerald-600">{partner.coins.rezCoin}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs">🔵 Branded:</span>
                          <span className="text-xs font-medium text-blue-600">{partner.coins.brandedCoin}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs">👑 Privé:</span>
                          <span className="text-xs font-medium text-purple-600">{partner.coins.priveCoin}%</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {partner.status === 'active' ? (
                        <div className="text-sm">
                          <p className="font-semibold text-blue-600">₹{(partner.monthlyRevenue / 1000).toFixed(0)}K/mo</p>
                          <p className="text-gray-600">{partner.activeUsers.toLocaleString()} users</p>
                          <p className="text-gray-600">{partner.totalTransactions.toLocaleString()} txns</p>
                          <p className="text-emerald-600 font-medium">+{partner.revenueGrowth}% growth</p>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">Not active yet</p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="text-gray-600">Start: {partner.joinedDate}</p>
                        <p className="text-gray-600">End: {partner.contractEndDate}</p>
                        <p className="text-xs text-gray-500 mt-1">24 months</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        partner.status === 'active' ? 'bg-green-100 text-green-700' :
                        partner.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {partner.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Create Co-Partner Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4">
              <h2 className="text-xl font-bold text-gray-900">Add New Co-Partner Brand</h2>
              <p className="text-sm text-gray-600 mt-1">₹5L investment for 50% equity partnership</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Brand Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Brand Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Brand Name</label>
                    <input
                      type="text"
                      value={newPartner.brandName}
                      onChange={(e) => setNewPartner({ ...newPartner, brandName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter brand name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Logo Emoji</label>
                    <input
                      type="text"
                      value={newPartner.logo}
                      onChange={(e) => setNewPartner({ ...newPartner, logo: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="e.g., 🏪"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={newPartner.category}
                      onChange={(e) => setNewPartner({ ...newPartner, category: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select category</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Fitness">Fitness</option>
                      <option value="Grocery">Grocery</option>
                      <option value="Food">Food & Dining</option>
                      <option value="Beauty">Beauty & Wellness</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Home">Home Services</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Investment Model */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Model</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Investment Amount (₹)</label>
                    <input
                      type="number"
                      value={newPartner.investmentAmount}
                      onChange={(e) => setNewPartner({ ...newPartner, investmentAmount: parseFloat(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Equity Share (%)</label>
                    <input
                      type="number"
                      value={newPartner.equityShare}
                      onChange={(e) => setNewPartner({ ...newPartner, equityShare: parseFloat(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Revenue Share (%)</label>
                    <input
                      type="number"
                      value={newPartner.revenueShare}
                      onChange={(e) => setNewPartner({ ...newPartner, revenueShare: parseFloat(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      disabled
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Standard co-partner model: ₹5L investment for 50% equity and revenue share</p>
              </div>

              {/* Coin Distribution */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Coin Distribution Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">💚 ReZ Coin (%)</label>
                    <input
                      type="number"
                      value={newPartner.rezCoin}
                      onChange={(e) => setNewPartner({ ...newPartner, rezCoin: parseFloat(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      min="0"
                      max="20"
                      step="0.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">🔵 Branded Coin (%)</label>
                    <input
                      type="number"
                      value={newPartner.brandedCoin}
                      onChange={(e) => setNewPartner({ ...newPartner, brandedCoin: parseFloat(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      min="0"
                      max="20"
                      step="0.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">👑 Privé Coin (%)</label>
                    <input
                      type="number"
                      value={newPartner.priveCoin}
                      onChange={(e) => setNewPartner({ ...newPartner, priveCoin: parseFloat(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      min="5"
                      max="100"
                      step="1"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                    <input
                      type="text"
                      value={newPartner.contactName}
                      onChange={(e) => setNewPartner({ ...newPartner, contactName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={newPartner.contactEmail}
                      onChange={(e) => setNewPartner({ ...newPartner, contactEmail: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={newPartner.contactPhone}
                      onChange={(e) => setNewPartner({ ...newPartner, contactPhone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              {/* Contract Period */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contract Period</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contract Duration (months)</label>
                    <input
                      type="number"
                      value={newPartner.contractPeriod}
                      onChange={(e) => setNewPartner({ ...newPartner, contractPeriod: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      min="12"
                      max="60"
                      disabled
                    />
                    <p className="text-xs text-gray-500 mt-1">Standard 24-month partnership period</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreatePartner}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Create Co-Partner
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
