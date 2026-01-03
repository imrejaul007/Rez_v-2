import { useState } from 'react';
import { Search, Tag, Plus, Download, Copy, Clock, CheckCircle, XCircle, TrendingUp, Users, ShoppingCart, Gift, Percent, Truck, Zap } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminVouchers() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState(null);

  const [voucherStats] = useState({
    totalVouchers: 1234,
    activeVouchers: 567,
    totalRedemptions: 8934,
    redemptionValue: 456789,
    avgDiscountValue: 145,
    topPerformingCategory: 'Percentage Discount'
  });

  const [vouchers, setVouchers] = useState([
    {
      id: 1,
      code: 'WELCOME50',
      type: 'percentage',
      discount: 50,
      maxDiscount: 200,
      minPurchase: 500,
      description: 'Welcome offer for new users',
      validFrom: '2024-01-01',
      validTo: '2024-12-31',
      totalLimit: 1000,
      usedCount: 456,
      userLimit: 1,
      status: 'active',
      isPublic: true,
      categories: ['All'],
      merchants: ['All'],
      userGroups: ['New Users']
    },
    {
      id: 2,
      code: 'FLAT100',
      type: 'fixed',
      discount: 100,
      maxDiscount: 100,
      minPurchase: 1000,
      description: 'Flat Rs.100 off on orders above Rs.1000',
      validFrom: '2024-01-15',
      validTo: '2024-02-15',
      totalLimit: 500,
      usedCount: 278,
      userLimit: 2,
      status: 'active',
      isPublic: true,
      categories: ['Food & Dining'],
      merchants: ['All'],
      userGroups: ['All']
    },
    {
      id: 3,
      code: 'FREESHIP',
      type: 'free_shipping',
      discount: 0,
      maxDiscount: 50,
      minPurchase: 300,
      description: 'Free shipping on all orders',
      validFrom: '2024-01-10',
      validTo: '2024-01-25',
      totalLimit: 2000,
      usedCount: 1845,
      userLimit: 5,
      status: 'active',
      isPublic: true,
      categories: ['Shopping', 'Groceries'],
      merchants: ['All'],
      userGroups: ['All']
    },
    {
      id: 4,
      code: 'BOGO2024',
      type: 'bogo',
      discount: 50,
      maxDiscount: 500,
      minPurchase: 800,
      description: 'Buy One Get One - 50% off on second item',
      validFrom: '2023-12-01',
      validTo: '2024-01-10',
      totalLimit: 300,
      usedCount: 300,
      userLimit: 1,
      status: 'expired',
      isPublic: true,
      categories: ['Shopping'],
      merchants: ['Fashion Boutique', 'Tech Store'],
      userGroups: ['All']
    },
    {
      id: 5,
      code: 'PREMIUM30',
      type: 'percentage',
      discount: 30,
      maxDiscount: 300,
      minPurchase: 1500,
      description: 'Exclusive for premium members',
      validFrom: '2024-01-01',
      validTo: '2024-06-30',
      totalLimit: 5000,
      usedCount: 892,
      userLimit: 10,
      status: 'active',
      isPublic: false,
      categories: ['All'],
      merchants: ['All'],
      userGroups: ['Premium Members']
    },
    {
      id: 6,
      code: 'STUDENT20',
      type: 'percentage',
      discount: 20,
      maxDiscount: 150,
      minPurchase: 400,
      description: 'Student special discount',
      validFrom: '2024-01-01',
      validTo: '2024-12-31',
      totalLimit: 10000,
      usedCount: 3456,
      userLimit: 0,
      status: 'active',
      isPublic: false,
      categories: ['Food & Dining', 'Entertainment'],
      merchants: ['All'],
      userGroups: ['Students']
    }
  ]);

  const [redemptionHistory, setRedemptionHistory] = useState([
    {
      id: 1,
      voucherCode: 'WELCOME50',
      userName: 'John Doe',
      userEmail: 'john@example.com',
      orderValue: 890,
      discountGiven: 200,
      finalAmount: 690,
      date: '2024-01-20 14:35:22',
      merchantName: 'The Coffee House'
    },
    {
      id: 2,
      voucherCode: 'FLAT100',
      userName: 'Jane Smith',
      userEmail: 'jane@example.com',
      orderValue: 1200,
      discountGiven: 100,
      finalAmount: 1100,
      date: '2024-01-20 12:15:00',
      merchantName: 'Pizza Paradise'
    },
    {
      id: 3,
      voucherCode: 'FREESHIP',
      userName: 'Mike Johnson',
      userEmail: 'mike@example.com',
      orderValue: 450,
      discountGiven: 40,
      finalAmount: 410,
      date: '2024-01-19 18:45:30',
      merchantName: 'Fashion Boutique'
    },
    {
      id: 4,
      voucherCode: 'PREMIUM30',
      userName: 'Sarah Williams',
      userEmail: 'sarah@example.com',
      orderValue: 2500,
      discountGiven: 300,
      finalAmount: 2200,
      date: '2024-01-19 10:20:15',
      merchantName: 'Tech Store'
    },
    {
      id: 5,
      voucherCode: 'STUDENT20',
      userName: 'David Brown',
      userEmail: 'david@example.com',
      orderValue: 650,
      discountGiven: 130,
      finalAmount: 520,
      date: '2024-01-18 16:30:45',
      merchantName: 'Burger King'
    }
  ]);

  const [performanceMetrics] = useState([
    { code: 'WELCOME50', redemptions: 456, revenue: 228000, avgOrderValue: 750, conversionRate: 45.6 },
    { code: 'STUDENT20', redemptions: 3456, revenue: 1728000, avgOrderValue: 625, conversionRate: 34.2 },
    { code: 'FREESHIP', redemptions: 1845, revenue: 738000, avgOrderValue: 480, conversionRate: 28.5 },
    { code: 'PREMIUM30', redemptions: 892, revenue: 534000, avgOrderValue: 1850, conversionRate: 52.3 },
    { code: 'FLAT100', redemptions: 278, revenue: 195000, avgOrderValue: 1150, conversionRate: 38.7 }
  ]);

  const filteredVouchers = vouchers.filter(voucher =>
    voucher.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    voucher.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateVoucher = (voucherData) => {
    const newVoucher = {
      id: vouchers.length + 1,
      ...voucherData,
      usedCount: 0,
      status: 'active'
    };
    setVouchers([newVoucher, ...vouchers]);
    setShowCreateModal(false);
  };

  const handleToggleStatus = (id) => {
    setVouchers(prev => prev.map(v =>
      v.id === id ? { ...v, status: v.status === 'active' ? 'paused' : 'active' } : v
    ));
  };

  const handleDeleteVoucher = (id) => {
    setVouchers(prev => prev.filter(v => v.id !== id));
    setSelectedVoucher(null);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const getVoucherTypeIcon = (type) => {
    switch (type) {
      case 'percentage': return <Percent className="w-4 h-4" />;
      case 'fixed': return <Tag className="w-4 h-4" />;
      case 'free_shipping': return <Truck className="w-4 h-4" />;
      case 'bogo': return <Gift className="w-4 h-4" />;
      default: return <Tag className="w-4 h-4" />;
    }
  };

  const getVoucherTypeLabel = (type) => {
    switch (type) {
      case 'percentage': return 'Percentage';
      case 'fixed': return 'Fixed Amount';
      case 'free_shipping': return 'Free Shipping';
      case 'bogo': return 'BOGO';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Vouchers & Coupons Management</h1>
              <p className="text-gray-600 mt-1">Create and manage discount vouchers for your platform</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Create Voucher
              </button>
              <button
                onClick={() => setShowBulkModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Zap className="w-5 h-5" />
                Bulk Generate
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-5 h-5" />
                Export Codes
              </button>
            </div>
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
                <p className="text-gray-600 text-sm font-medium">Total Vouchers</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{voucherStats.totalVouchers}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Tag className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-green-600">
              {voucherStats.activeVouchers} currently active
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Redemptions</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {voucherStats.totalRedemptions.toLocaleString()}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <ShoppingCart className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Avg: {voucherStats.avgDiscountValue} per redemption
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Redemption Value</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ₹{(voucherStats.redemptionValue / 1000).toFixed(1)}K
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-green-600">
              +23.5% vs last month
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'overview'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                All Vouchers
              </button>
              <button
                onClick={() => setActiveTab('redemptions')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'redemptions'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Redemption History
              </button>
              <button
                onClick={() => setActiveTab('performance')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'performance'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Performance Analytics
              </button>
            </nav>
          </div>

          {/* All Vouchers Tab */}
          {activeTab === 'overview' && (
            <div className="p-6">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search vouchers by code or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredVouchers.map((voucher) => (
                  <div key={voucher.id} className={`border-2 rounded-xl p-6 ${
                    voucher.status === 'active' ? 'border-green-200 bg-green-50' :
                    voucher.status === 'expired' ? 'border-gray-200 bg-gray-50' :
                    'border-orange-200 bg-orange-50'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg ${
                          voucher.type === 'percentage' ? 'bg-purple-100' :
                          voucher.type === 'fixed' ? 'bg-blue-100' :
                          voucher.type === 'free_shipping' ? 'bg-green-100' :
                          'bg-orange-100'
                        }`}>
                          {getVoucherTypeIcon(voucher.type)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-xl text-gray-900">{voucher.code}</h3>
                            <button
                              onClick={() => copyToClipboard(voucher.code)}
                              className="p-1 hover:bg-white rounded"
                              title="Copy code"
                            >
                              <Copy className="w-4 h-4 text-gray-500" />
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{getVoucherTypeLabel(voucher.type)}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        voucher.status === 'active' ? 'bg-green-100 text-green-700' :
                        voucher.status === 'expired' ? 'bg-gray-100 text-gray-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {voucher.status}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-4">{voucher.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Discount:</span>
                        <span className="font-semibold text-gray-900">
                          {voucher.type === 'percentage' ? `${voucher.discount}%` : `₹${voucher.discount}`}
                          {voucher.maxDiscount > 0 && ` (max ₹${voucher.maxDiscount})`}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Min Purchase:</span>
                        <span className="font-semibold text-gray-900">₹{voucher.minPurchase}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Valid Period:</span>
                        <span className="font-semibold text-gray-900">{voucher.validFrom} to {voucher.validTo}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Usage:</span>
                        <span className="font-semibold text-gray-900">
                          {voucher.usedCount} / {voucher.totalLimit}
                        </span>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${(voucher.usedCount / voucher.totalLimit) * 100}%` }}
                      />
                    </div>

                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      {voucher.isPublic ? (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Public</span>
                      ) : (
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Private</span>
                      )}
                      {voucher.userGroups.map((group, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {group}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedVoucher(voucher)}
                        className="flex-1 px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
                      >
                        View Details
                      </button>
                      {voucher.status === 'active' && (
                        <button
                          onClick={() => handleToggleStatus(voucher.id)}
                          className="flex-1 px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm"
                        >
                          Pause
                        </button>
                      )}
                      {voucher.status === 'paused' && (
                        <button
                          onClick={() => handleToggleStatus(voucher.id)}
                          className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                        >
                          Activate
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Redemption History Tab */}
          {activeTab === 'redemptions' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Voucher Redemption History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Voucher Code</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merchant</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order Value</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Discount Given</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Final Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {redemptionHistory.map((redemption) => (
                      <tr key={redemption.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1 text-sm text-gray-900">
                            <Clock className="w-3 h-3 text-gray-400" />
                            {redemption.date}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-indigo-600">{redemption.voucherCode}</span>
                            <button
                              onClick={() => copyToClipboard(redemption.voucherCode)}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              <Copy className="w-3 h-3 text-gray-400" />
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{redemption.userName}</p>
                            <p className="text-xs text-gray-500">{redemption.userEmail}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{redemption.merchantName}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-900">₹{redemption.orderValue.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-bold text-green-600">-₹{redemption.discountGiven.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-bold text-gray-900">₹{redemption.finalAmount.toLocaleString()}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Performance Analytics Tab */}
          {activeTab === 'performance' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Voucher Performance Metrics</h3>
              <div className="space-y-4">
                {performanceMetrics.map((metric, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{metric.code}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {vouchers.find(v => v.code === metric.code)?.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-indigo-600">{metric.conversionRate}%</p>
                        <p className="text-sm text-gray-600">Conversion Rate</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-4 h-4 text-blue-600" />
                          <p className="text-xs text-gray-600">Total Redemptions</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{metric.redemptions}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          <p className="text-xs text-gray-600">Revenue Generated</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">₹{(metric.revenue / 1000).toFixed(0)}K</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <ShoppingCart className="w-4 h-4 text-purple-600" />
                          <p className="text-xs text-gray-600">Avg Order Value</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">₹{metric.avgOrderValue}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Voucher Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-3xl w-full my-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Create New Voucher</h2>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Voucher Code</label>
                  <input
                    type="text"
                    id="voucherCode"
                    placeholder="SUMMER2024"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg uppercase"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Voucher Type</label>
                  <select id="voucherType" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option value="percentage">Percentage Discount</option>
                    <option value="fixed">Fixed Amount</option>
                    <option value="free_shipping">Free Shipping</option>
                    <option value="bogo">Buy One Get One</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Discount Value</label>
                  <input
                    type="number"
                    id="discountValue"
                    placeholder="20"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Discount (₹)</label>
                  <input
                    type="number"
                    id="maxDiscount"
                    placeholder="200"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min Purchase (₹)</label>
                  <input
                    type="number"
                    id="minPurchase"
                    placeholder="500"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total Limit</label>
                  <input
                    type="number"
                    id="totalLimit"
                    placeholder="1000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">User Limit (0 = unlimited)</label>
                  <input
                    type="number"
                    id="userLimit"
                    placeholder="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Valid From</label>
                  <input
                    type="date"
                    id="validFrom"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Valid To</label>
                  <input
                    type="date"
                    id="validTo"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Visibility</label>
                  <select id="isPublic" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option value="true">Public</option>
                    <option value="false">Private</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    id="description"
                    placeholder="Describe the voucher offer..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    rows="3"
                  />
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
                  const voucherData = {
                    code: document.getElementById('voucherCode').value.toUpperCase(),
                    type: document.getElementById('voucherType').value,
                    discount: parseInt(document.getElementById('discountValue').value),
                    maxDiscount: parseInt(document.getElementById('maxDiscount').value),
                    minPurchase: parseInt(document.getElementById('minPurchase').value),
                    totalLimit: parseInt(document.getElementById('totalLimit').value),
                    userLimit: parseInt(document.getElementById('userLimit').value),
                    validFrom: document.getElementById('validFrom').value,
                    validTo: document.getElementById('validTo').value,
                    isPublic: document.getElementById('isPublic').value === 'true',
                    description: document.getElementById('description').value,
                    categories: ['All'],
                    merchants: ['All'],
                    userGroups: ['All']
                  };
                  handleCreateVoucher(voucherData);
                }}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Create Voucher
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Generate Modal */}
      {showBulkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-xl w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Bulk Voucher Generation</h2>
              <p className="text-sm text-gray-600 mt-1">Generate multiple unique voucher codes at once</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Base Code Prefix</label>
                  <input
                    type="text"
                    placeholder="NEWYEAR"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg uppercase"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Codes</label>
                  <input
                    type="number"
                    placeholder="100"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Discount Type & Value</label>
                  <div className="grid grid-cols-2 gap-3">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="percentage">Percentage</option>
                      <option value="fixed">Fixed Amount</option>
                    </select>
                    <input
                      type="number"
                      placeholder="20"
                      className="px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    Codes will be generated as: NEWYEAR-XXXX where XXXX is a unique random code
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowBulkModal(false)}
                className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Generate Codes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
