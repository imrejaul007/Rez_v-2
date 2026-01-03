import { useState } from 'react';
import { Search, Award, Plus, TrendingUp, Users, DollarSign, Building2, Target, BarChart3, FileText, Coins, CreditCard, AlertCircle, CheckCircle, Edit, Eye } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminSponsoredDeals() {
  const [activeTab, setActiveTab] = useState('sponsored');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const [sponsoredStats] = useState({
    totalBrands: 45,
    activeSponsorships: 28,
    totalBudget: 15000000,
    totalDisbursed: 8750000,
    avgROI: 4.2,
    totalRedemptions: 34567
  });

  const [sponsoredDeals, setSponsoredDeals] = useState([
    {
      id: 1,
      title: 'Tech Galaxy Sponsored Cashback',
      merchant: 'Tech Galaxy',
      brand: 'Samsung India',
      type: 'Sponsored Cashback',
      cashbackPercent: 15,
      sponsorBudget: 500000,
      budgetUsed: 345000,
      budgetRemaining: 155000,
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      status: 'active',
      redemptions: 2345,
      revenue: 4567890,
      roi: 4.5,
      minPurchase: 5000,
      maxCashbackPerUser: 2000,
      category: 'Electronics'
    },
    {
      id: 2,
      title: 'Fashion Week Sponsor Deal',
      merchant: 'Fashion Hub',
      brand: 'Levi\'s India',
      type: 'Brand Funded',
      cashbackPercent: 20,
      sponsorBudget: 300000,
      budgetUsed: 245000,
      budgetRemaining: 55000,
      startDate: '2024-01-20',
      endDate: '2024-01-31',
      status: 'active',
      redemptions: 1876,
      revenue: 2345678,
      roi: 3.8,
      minPurchase: 2000,
      maxCashbackPerUser: 1000,
      category: 'Fashion'
    },
    {
      id: 3,
      title: 'Food Festival Sponsorship',
      merchant: 'Food Paradise',
      brand: 'Nestle India',
      type: 'Sponsored Cashback',
      cashbackPercent: 10,
      sponsorBudget: 200000,
      budgetUsed: 198000,
      budgetRemaining: 2000,
      startDate: '2024-01-10',
      endDate: '2024-01-25',
      status: 'active',
      redemptions: 3456,
      revenue: 1987654,
      roi: 4.9,
      minPurchase: 500,
      maxCashbackPerUser: 500,
      category: 'Food & Dining'
    },
    {
      id: 4,
      title: 'Beauty Bonanza Sponsored',
      merchant: 'Beauty World',
      brand: 'L\'Oreal Paris',
      type: 'Brand Funded',
      cashbackPercent: 25,
      sponsorBudget: 400000,
      budgetUsed: 0,
      budgetRemaining: 400000,
      startDate: '2024-01-28',
      endDate: '2024-02-28',
      status: 'upcoming',
      redemptions: 0,
      revenue: 0,
      roi: 0,
      minPurchase: 1500,
      maxCashbackPerUser: 1500,
      category: 'Beauty'
    },
    {
      id: 5,
      title: 'Home Decor Sponsor Campaign',
      merchant: 'Home Essentials',
      brand: 'Ikea India',
      type: 'Sponsored Cashback',
      cashbackPercent: 12,
      sponsorBudget: 350000,
      budgetUsed: 350000,
      budgetRemaining: 0,
      startDate: '2024-01-01',
      endDate: '2024-01-15',
      status: 'expired',
      redemptions: 1987,
      revenue: 2987654,
      roi: 5.2,
      minPurchase: 3000,
      maxCashbackPerUser: 1200,
      category: 'Home & Living'
    }
  ]);

  const [brandPartners, setBrandPartners] = useState([
    {
      id: 1,
      brandName: 'Samsung India',
      contactPerson: 'Marketing Head',
      email: 'marketing@samsung.in',
      phone: '+91-9876543210',
      totalBudget: 1500000,
      budgetUsed: 890000,
      activeCampaigns: 3,
      totalRedemptions: 5678,
      totalRevenue: 8765432,
      roi: 4.8,
      status: 'active',
      joiningDate: '2023-12-01'
    },
    {
      id: 2,
      brandName: 'Levi\'s India',
      contactPerson: 'Brand Manager',
      email: 'brand@levis.in',
      phone: '+91-9876543211',
      totalBudget: 800000,
      budgetUsed: 456000,
      activeCampaigns: 2,
      totalRedemptions: 3456,
      totalRevenue: 4567890,
      roi: 3.9,
      status: 'active',
      joiningDate: '2024-01-05'
    },
    {
      id: 3,
      brandName: 'Nestle India',
      contactPerson: 'Sponsorship Lead',
      email: 'sponsor@nestle.in',
      phone: '+91-9876543212',
      totalBudget: 600000,
      budgetUsed: 567000,
      activeCampaigns: 4,
      totalRedemptions: 7890,
      totalRevenue: 5678901,
      roi: 5.1,
      status: 'active',
      joiningDate: '2023-11-15'
    },
    {
      id: 4,
      brandName: 'L\'Oreal Paris',
      contactPerson: 'Digital Marketing',
      email: 'digital@loreal.in',
      phone: '+91-9876543213',
      totalBudget: 1000000,
      budgetUsed: 0,
      activeCampaigns: 0,
      totalRedemptions: 0,
      totalRevenue: 0,
      roi: 0,
      status: 'pending',
      joiningDate: '2024-01-20'
    }
  ]);

  const [uploadBillProgram, setUploadBillProgram] = useState({
    config: {
      enabled: true,
      bonusPercent: 5,
      maxBonus: 500,
      verificationTime: '24-48 hours',
      eligibleCategories: ['Groceries', 'Pharmacy', 'Utilities']
    },
    stats: {
      totalUploads: 12345,
      verified: 9876,
      pending: 1234,
      rejected: 1235,
      totalBonusGiven: 3456789
    },
    recentUploads: [
      { id: 1, user: 'Rahul Kumar', merchant: 'Big Bazaar', amount: 2500, bonus: 125, status: 'verified', date: '2024-01-25' },
      { id: 2, user: 'Priya Sharma', merchant: 'Apollo Pharmacy', amount: 1200, bonus: 60, status: 'pending', date: '2024-01-25' },
      { id: 3, user: 'Amit Patel', merchant: 'Reliance Fresh', amount: 3500, bonus: 175, status: 'verified', date: '2024-01-24' }
    ]
  });

  const [paymentReconciliation] = useState([
    {
      id: 1,
      brand: 'Samsung India',
      period: 'Jan 2024',
      totalBudget: 500000,
      totalSpent: 345000,
      pendingPayment: 0,
      status: 'Paid',
      paidDate: '2024-01-15',
      invoiceNumber: 'INV-2024-001'
    },
    {
      id: 2,
      brand: 'Levi\'s India',
      period: 'Jan 2024',
      totalBudget: 300000,
      totalSpent: 245000,
      pendingPayment: 245000,
      status: 'Pending',
      paidDate: null,
      invoiceNumber: 'INV-2024-002'
    },
    {
      id: 3,
      brand: 'Nestle India',
      period: 'Jan 2024',
      totalBudget: 200000,
      totalSpent: 198000,
      pendingPayment: 198000,
      status: 'Pending',
      paidDate: null,
      invoiceNumber: 'INV-2024-003'
    }
  ]);

  const filteredDeals = sponsoredDeals.filter(deal => {
    const matchesSearch = deal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         deal.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         deal.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || deal.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleCreateDeal = (dealData) => {
    const newDeal = {
      id: sponsoredDeals.length + 1,
      ...dealData,
      budgetUsed: 0,
      budgetRemaining: dealData.sponsorBudget,
      redemptions: 0,
      revenue: 0,
      roi: 0
    };
    setSponsoredDeals([newDeal, ...sponsoredDeals]);
    setShowCreateModal(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'upcoming': return 'bg-blue-100 text-blue-700';
      case 'expired': return 'bg-gray-100 text-gray-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Overdue': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Sponsored Deals Manager</h1>
              <p className="text-gray-600 mt-1">Manage sponsored cashback and brand-funded programs</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Sponsored Deal
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Brand Partners</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{sponsoredStats.totalBrands}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              {sponsoredStats.activeSponsorships} active sponsorships
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Budget</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ₹{(sponsoredStats.totalBudget / 10000000).toFixed(1)}Cr
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-green-600">
              ₹{(sponsoredStats.totalDisbursed / 10000000).toFixed(2)}Cr disbursed
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Average ROI</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{sponsoredStats.avgROI}x</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                +12.3%
              </span>
              <span className="text-gray-600 text-sm">vs last month</span>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search deals by title, merchant, or brand..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="upcoming">Upcoming</option>
              <option value="expired">Expired</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab('sponsored')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'sponsored'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Sponsored Deals
              </button>
              <button
                onClick={() => setActiveTab('brands')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'brands'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Brand Partners
              </button>
              <button
                onClick={() => setActiveTab('uploadbill')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'uploadbill'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Upload Bill Program
              </button>
              <button
                onClick={() => setActiveTab('roi')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'roi'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                ROI Tracking
              </button>
              <button
                onClick={() => setActiveTab('payments')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'payments'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Payment Reconciliation
              </button>
            </nav>
          </div>

          {/* Sponsored Deals Tab */}
          {activeTab === 'sponsored' && (
            <div className="p-6">
              <div className="space-y-4">
                {filteredDeals.map((deal) => (
                  <div key={deal.id} className={`border-2 rounded-xl p-6 ${
                    deal.status === 'active' ? 'border-green-300 bg-green-50' :
                    deal.status === 'upcoming' ? 'border-blue-300 bg-blue-50' :
                    'border-gray-300 bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Award className="w-6 h-6 text-purple-600" />
                          <h3 className="text-xl font-bold text-gray-900">{deal.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(deal.status)}`}>
                            {deal.status.toUpperCase()}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
                            {deal.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span><strong>Merchant:</strong> {deal.merchant}</span>
                          <span>•</span>
                          <span><strong>Sponsor:</strong> {deal.brand}</span>
                          <span>•</span>
                          <span>{deal.startDate} - {deal.endDate}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedDeal(deal)}
                        className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                        <Edit className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>

                    {/* Deal Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Cashback %</p>
                        <p className="text-2xl font-bold text-green-600">{deal.cashbackPercent}%</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Min Purchase</p>
                        <p className="text-lg font-bold text-gray-900">₹{deal.minPurchase.toLocaleString()}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Max Cashback/User</p>
                        <p className="text-lg font-bold text-indigo-600">₹{deal.maxCashbackPerUser.toLocaleString()}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Category</p>
                        <p className="text-sm font-medium text-gray-900">{deal.category}</p>
                      </div>
                    </div>

                    {/* Budget Progress */}
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Budget Utilization</span>
                        <span className="text-sm font-medium text-gray-900">
                          ₹{deal.budgetUsed.toLocaleString()} / ₹{deal.sponsorBudget.toLocaleString()} ({Math.round((deal.budgetUsed / deal.sponsorBudget) * 100)}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${
                            deal.budgetRemaining < deal.sponsorBudget * 0.1
                              ? 'bg-red-500'
                              : deal.budgetRemaining < deal.sponsorBudget * 0.3
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                          }`}
                          style={{ width: `${(deal.budgetUsed / deal.sponsorBudget) * 100}%` }}
                        />
                      </div>
                      {deal.budgetRemaining < deal.sponsorBudget * 0.1 && deal.status === 'active' && (
                        <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          Low budget alert - Only ₹{deal.budgetRemaining.toLocaleString()} remaining!
                        </div>
                      )}
                    </div>

                    {/* Performance Metrics */}
                    {deal.status !== 'upcoming' && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Target className="w-4 h-4 text-blue-600" />
                            <p className="text-xs text-gray-600">Redemptions</p>
                          </div>
                          <p className="text-xl font-bold text-gray-900">{deal.redemptions.toLocaleString()}</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <p className="text-xs text-gray-600">Revenue</p>
                          </div>
                          <p className="text-xl font-bold text-gray-900">₹{(deal.revenue / 100000).toFixed(1)}L</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <TrendingUp className="w-4 h-4 text-purple-600" />
                            <p className="text-xs text-gray-600">ROI</p>
                          </div>
                          <p className="text-xl font-bold text-gray-900">{deal.roi}x</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Coins className="w-4 h-4 text-indigo-600" />
                            <p className="text-xs text-gray-600">Budget Left</p>
                          </div>
                          <p className="text-xl font-bold text-gray-900">₹{(deal.budgetRemaining / 1000).toFixed(0)}K</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                {filteredDeals.length === 0 && (
                  <div className="text-center py-12">
                    <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No sponsored deals found</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Brand Partners Tab */}
          {activeTab === 'brands' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Brand Partnership Management</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Brand</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Budget</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Budget Used</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Active Campaigns</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ROI</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {brandPartners.map((brand) => (
                      <tr key={brand.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{brand.brandName}</p>
                            <p className="text-xs text-gray-500">Since {brand.joiningDate}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="text-sm text-gray-900">{brand.contactPerson}</p>
                            <p className="text-xs text-gray-500">{brand.email}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-blue-600">₹{(brand.totalBudget / 100000).toFixed(1)}L</p>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-semibold text-green-600">₹{(brand.budgetUsed / 100000).toFixed(1)}L</p>
                            <p className="text-xs text-gray-500">
                              {brand.totalBudget > 0 ? ((brand.budgetUsed / brand.totalBudget) * 100).toFixed(1) : 0}% utilized
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-purple-600">{brand.activeCampaigns}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-indigo-600">{brand.roi > 0 ? `${brand.roi}x` : '-'}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(brand.status)}`}>
                            {brand.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                            <Eye className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Upload Bill Program Tab */}
          {activeTab === 'uploadbill' && (
            <div className="p-6">
              {/* Configuration */}
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Configuration</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <p className="text-lg font-bold text-gray-900">
                      {uploadBillProgram.config.enabled ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Bonus Percentage</p>
                    <p className="text-lg font-bold text-green-600">{uploadBillProgram.config.bonusPercent}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Max Bonus</p>
                    <p className="text-lg font-bold text-indigo-600">₹{uploadBillProgram.config.maxBonus}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Verification Time</p>
                    <p className="text-lg font-bold text-gray-900">{uploadBillProgram.config.verificationTime}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Total Uploads</p>
                  <p className="text-2xl font-bold text-gray-900">{uploadBillProgram.stats.totalUploads.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Verified</p>
                  <p className="text-2xl font-bold text-green-600">{uploadBillProgram.stats.verified.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">{uploadBillProgram.stats.pending.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Rejected</p>
                  <p className="text-2xl font-bold text-red-600">{uploadBillProgram.stats.rejected.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Total Bonus</p>
                  <p className="text-2xl font-bold text-purple-600">₹{(uploadBillProgram.stats.totalBonusGiven / 100000).toFixed(1)}L</p>
                </div>
              </div>

              {/* Recent Uploads */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Bill Uploads</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merchant</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bill Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bonus</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {uploadBillProgram.recentUploads.map((upload) => (
                      <tr key={upload.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-900">{upload.user}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{upload.merchant}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-gray-900">₹{upload.amount.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-green-600">₹{upload.bonus}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{upload.date}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            upload.status === 'verified' ? 'bg-green-100 text-green-700' :
                            upload.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {upload.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                            <Eye className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ROI Tracking Tab */}
          {activeTab === 'roi' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Sponsor ROI Performance</h3>
              <div className="space-y-4">
                {brandPartners.filter(b => b.status === 'active').map((brand) => (
                  <div key={brand.id} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{brand.brandName}</h4>
                        <p className="text-sm text-gray-600">{brand.activeCampaigns} active campaigns</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-purple-600">{brand.roi}x</p>
                        <p className="text-sm text-gray-600">Return on Investment</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Total Budget</p>
                        <p className="text-xl font-bold text-blue-600">₹{(brand.totalBudget / 100000).toFixed(1)}L</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Budget Used</p>
                        <p className="text-xl font-bold text-green-600">₹{(brand.budgetUsed / 100000).toFixed(1)}L</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Revenue Generated</p>
                        <p className="text-xl font-bold text-purple-600">₹{(brand.totalRevenue / 100000).toFixed(1)}L</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Redemptions</p>
                        <p className="text-xl font-bold text-indigo-600">{brand.totalRedemptions.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Payment Reconciliation Tab */}
          {activeTab === 'payments' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Reconciliation</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Brand</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Period</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Budget</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Spent</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pending Payment</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice No.</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {paymentReconciliation.map((payment) => (
                      <tr key={payment.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-900">{payment.brand}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{payment.period}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-blue-600">₹{payment.totalBudget.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-gray-900">₹{payment.totalSpent.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className={`font-semibold ${payment.pendingPayment > 0 ? 'text-red-600' : 'text-green-600'}`}>
                            ₹{payment.pendingPayment.toLocaleString()}
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{payment.invoiceNumber}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(payment.status)}`}>
                            {payment.status}
                          </span>
                          {payment.paidDate && (
                            <p className="text-xs text-gray-500 mt-1">{payment.paidDate}</p>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                            <FileText className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full my-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Create Sponsored Deal</h2>
              <p className="text-sm text-gray-600 mt-1">Set up a new brand-sponsored cashback deal</p>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deal Title</label>
                    <input
                      type="text"
                      id="dealTitle"
                      placeholder="Tech Galaxy Sponsored Cashback"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Merchant</label>
                    <input
                      type="text"
                      id="merchant"
                      placeholder="Tech Galaxy"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sponsor Brand</label>
                    <select id="brand" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="">Select Brand</option>
                      {brandPartners.filter(b => b.status === 'active').map(b => (
                        <option key={b.id} value={b.brandName}>{b.brandName}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deal Type</label>
                    <select id="dealType" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="Sponsored Cashback">Sponsored Cashback</option>
                      <option value="Brand Funded">Brand Funded</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cashback %</label>
                    <input
                      type="number"
                      id="cashbackPercent"
                      placeholder="15"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Min Purchase</label>
                    <input
                      type="number"
                      id="minPurchase"
                      placeholder="5000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Cashback/User</label>
                    <input
                      type="number"
                      id="maxCashback"
                      placeholder="2000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sponsor Budget</label>
                    <input
                      type="number"
                      id="sponsorBudget"
                      placeholder="500000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select id="category" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="Electronics">Electronics</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Food & Dining">Food & Dining</option>
                      <option value="Beauty">Beauty</option>
                      <option value="Home & Living">Home & Living</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                    <input
                      type="date"
                      id="startDate"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                    <input
                      type="date"
                      id="endDate"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select id="status" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option value="upcoming">Upcoming</option>
                    <option value="active">Active</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const dealData = {
                    title: document.getElementById('dealTitle').value,
                    merchant: document.getElementById('merchant').value,
                    brand: document.getElementById('brand').value,
                    type: document.getElementById('dealType').value,
                    cashbackPercent: parseInt(document.getElementById('cashbackPercent').value),
                    minPurchase: parseInt(document.getElementById('minPurchase').value),
                    maxCashbackPerUser: parseInt(document.getElementById('maxCashback').value),
                    sponsorBudget: parseInt(document.getElementById('sponsorBudget').value),
                    category: document.getElementById('category').value,
                    startDate: document.getElementById('startDate').value,
                    endDate: document.getElementById('endDate').value,
                    status: document.getElementById('status').value
                  };
                  handleCreateDeal(dealData);
                }}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Create Sponsored Deal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
