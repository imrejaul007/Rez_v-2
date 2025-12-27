import { useState } from 'react';
import {
  Tag, Plus, TrendingDown, Users, Eye, ShoppingCart, DollarSign,
  Play, Pause, CheckCircle, XCircle, AlertCircle, Edit2, Trash2,
  Calendar, Clock, Package, Layers, Target, Sparkles, ArrowDown, Percent
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantClearanceSales() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  const [saleForm, setSaleForm] = useState({
    title: '',
    category: '',
    originalPrice: '',
    quantity: '',
    saleType: 'staged',
    markdownSchedule: [
      { stage: 1, discount: 25, startDate: '', daysActive: 7 },
      { stage: 2, discount: 50, startDate: '', daysActive: 7 },
      { stage: 3, discount: 70, startDate: '', daysActive: 7 }
    ],
    autoMarkdown: true,
    inventoryAge: '',
    description: ''
  });

  const [clearanceSales, setClearanceSales] = useState([
    {
      id: 1,
      title: 'Winter Collection Clearance',
      code: 'CLEAR70WIN',
      category: 'Fashion',
      originalPrice: 2999,
      currentDiscount: 70,
      currentPrice: 899,
      quantity: { total: 200, remaining: 45 },
      saleType: 'staged',
      currentStage: 3,
      status: 'active',
      inventoryAge: 120,
      markdownSchedule: [
        { stage: 1, discount: 25, startDate: '2025-11-01', sold: 50, revenue: 112462 },
        { stage: 2, discount: 50, startDate: '2025-11-15', sold: 75, revenue: 112462 },
        { stage: 3, discount: 70, startDate: '2025-12-01', sold: 30, revenue: 26970 }
      ],
      views: 8765,
      clicks: 2345,
      totalSold: 155,
      totalRevenue: 251894,
      conversionRate: 26.7,
      avgDaysToSell: 18,
      profitMargin: 35
    },
    {
      id: 2,
      title: 'Electronics Clearance Sale',
      code: 'CLEAR50ELEC',
      category: 'Electronics',
      originalPrice: 15999,
      currentDiscount: 50,
      currentPrice: 7999,
      quantity: { total: 50, remaining: 23 },
      saleType: 'staged',
      currentStage: 2,
      status: 'active',
      inventoryAge: 90,
      markdownSchedule: [
        { stage: 1, discount: 30, startDate: '2025-11-20', sold: 12, revenue: 134389 },
        { stage: 2, discount: 50, startDate: '2025-12-05', sold: 15, revenue: 119985 },
        { stage: 3, discount: 65, startDate: '2025-12-20', sold: 0, revenue: 0 }
      ],
      views: 5678,
      clicks: 1456,
      totalSold: 27,
      totalRevenue: 254374,
      conversionRate: 25.6,
      avgDaysToSell: 22,
      profitMargin: 28
    },
    {
      id: 3,
      title: 'Seasonal Decor Final Sale',
      code: 'CLEARFINAL',
      category: 'Home & Living',
      originalPrice: 1499,
      currentDiscount: 80,
      currentPrice: 299,
      quantity: { total: 100, remaining: 8 },
      saleType: 'final',
      currentStage: 'final',
      status: 'active',
      inventoryAge: 180,
      markdownSchedule: [
        { stage: 'final', discount: 80, startDate: '2025-12-15', sold: 92, revenue: 27508 }
      ],
      views: 3456,
      clicks: 890,
      totalSold: 92,
      totalRevenue: 27508,
      conversionRate: 25.8,
      avgDaysToSell: 5,
      profitMargin: 15
    },
    {
      id: 4,
      title: 'Furniture Clearance Event',
      code: 'CLEAR60FURN',
      category: 'Furniture',
      originalPrice: 24999,
      currentDiscount: 60,
      currentPrice: 9999,
      quantity: { total: 30, remaining: 0 },
      saleType: 'staged',
      currentStage: 3,
      status: 'completed',
      inventoryAge: 150,
      markdownSchedule: [
        { stage: 1, discount: 35, startDate: '2025-10-01', sold: 8, revenue: 129993 },
        { stage: 2, discount: 50, startDate: '2025-10-20', sold: 12, revenue: 149988 },
        { stage: 3, discount: 60, startDate: '2025-11-10', sold: 10, revenue: 99990 }
      ],
      views: 4567,
      clicks: 1234,
      totalSold: 30,
      totalRevenue: 379971,
      conversionRate: 27.0,
      avgDaysToSell: 35,
      profitMargin: 22
    }
  ]);

  const [stats, setStats] = useState({
    activeSales: 3,
    totalViews: 22466,
    totalCleared: 304,
    totalRevenue: 913747,
    avgMarkdown: 58
  });

  const categories = [
    'Fashion',
    'Electronics',
    'Home & Living',
    'Furniture',
    'Books',
    'Toys',
    'Sports',
    'Beauty'
  ];

  const saleTypes = [
    { value: 'staged', label: 'Staged Markdown (3 phases)' },
    { value: 'flash', label: 'Flash Clearance (Single discount)' },
    { value: 'final', label: 'Final Sale (Non-returnable)' }
  ];

  const handleCreateSale = (e) => {
    e.preventDefault();
    const code = 'CLEAR' + Math.random().toString(36).substr(2, 6).toUpperCase();

    let markdownSchedule;
    let currentDiscount;

    if (saleForm.saleType === 'staged') {
      markdownSchedule = saleForm.markdownSchedule.map(stage => ({
        ...stage,
        sold: 0,
        revenue: 0
      }));
      currentDiscount = saleForm.markdownSchedule[0].discount;
    } else if (saleForm.saleType === 'final') {
      markdownSchedule = [{ stage: 'final', discount: 80, startDate: new Date().toISOString().split('T')[0], sold: 0, revenue: 0 }];
      currentDiscount = 80;
    } else {
      markdownSchedule = [{ stage: 1, discount: 50, startDate: new Date().toISOString().split('T')[0], sold: 0, revenue: 0 }];
      currentDiscount = 50;
    }

    const newSale = {
      id: clearanceSales.length + 1,
      title: saleForm.title,
      code: code,
      category: saleForm.category,
      originalPrice: parseFloat(saleForm.originalPrice),
      currentDiscount: currentDiscount,
      currentPrice: parseFloat(saleForm.originalPrice) * (1 - currentDiscount / 100),
      quantity: { total: parseInt(saleForm.quantity), remaining: parseInt(saleForm.quantity) },
      saleType: saleForm.saleType,
      currentStage: saleForm.saleType === 'staged' ? 1 : (saleForm.saleType === 'final' ? 'final' : 1),
      status: 'active',
      inventoryAge: parseInt(saleForm.inventoryAge) || 0,
      markdownSchedule: markdownSchedule,
      views: 0,
      clicks: 0,
      totalSold: 0,
      totalRevenue: 0,
      conversionRate: 0,
      avgDaysToSell: 0,
      profitMargin: 0,
      description: saleForm.description
    };

    setClearanceSales([newSale, ...clearanceSales]);
    setShowCreateForm(false);
    setSaleForm({
      title: '',
      category: '',
      originalPrice: '',
      quantity: '',
      saleType: 'staged',
      markdownSchedule: [
        { stage: 1, discount: 25, startDate: '', daysActive: 7 },
        { stage: 2, discount: 50, startDate: '', daysActive: 7 },
        { stage: 3, discount: 70, startDate: '', daysActive: 7 }
      ],
      autoMarkdown: true,
      inventoryAge: '',
      description: ''
    });
  };

  const toggleSaleStatus = (saleId) => {
    setClearanceSales(clearanceSales.map(sale => {
      if (sale.id === saleId && sale.status === 'active') {
        return { ...sale, status: 'paused' };
      } else if (sale.id === saleId && sale.status === 'paused') {
        return { ...sale, status: 'active' };
      }
      return sale;
    }));
  };

  const filteredSales = clearanceSales.filter(sale => {
    if (filterStatus === 'all') return true;
    return sale.status === filterStatus;
  });

  const getStatusConfig = (status) => {
    const configs = {
      active: { color: 'green', icon: Play, label: 'Active' },
      paused: { color: 'orange', icon: Pause, label: 'Paused' },
      completed: { color: 'blue', icon: CheckCircle, label: 'Completed' },
      expired: { color: 'gray', icon: XCircle, label: 'Expired' }
    };
    return configs[status] || configs.active;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Tag className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Clearance Sales Manager</h1>
                  <p className="text-red-100 mt-1">Manage inventory clearance and markdown schedules</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-red-600 rounded-lg hover:bg-red-50 font-semibold shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Create Clearance Sale
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
                <Tag className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Active Sales</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.activeSales}</p>
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
            <p className="text-sm text-blue-600 mt-1">All sales</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Items Cleared</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalCleared}</p>
            <p className="text-sm text-purple-600 mt-1">Total sold</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-100 p-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Revenue</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{(stats.totalRevenue / 1000).toFixed(0)}K</p>
            <p className="text-sm text-orange-600 mt-1">From clearance</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-red-100 p-2 rounded-lg">
                <TrendingDown className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Avg Markdown</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.avgMarkdown}%</p>
            <p className="text-sm text-red-600 mt-1">Discount</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Filter:</span>
            <div className="flex gap-2">
              {['all', 'active', 'paused', 'completed'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filterStatus === status
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status === 'all' ? 'All Sales' : status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Clearance Sales List */}
        <div className="space-y-4">
          {filteredSales.map((sale) => {
            const statusConfig = getStatusConfig(sale.status);
            const StatusIcon = statusConfig.icon;
            const stockPercentage = (sale.quantity.remaining / sale.quantity.total) * 100;

            return (
              <div
                key={sale.id}
                className="bg-white rounded-xl shadow-sm border-2 border-gray-200 overflow-hidden hover:shadow-md transition-all"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{sale.title}</h3>
                        {sale.saleType === 'final' && (
                          <span className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full animate-pulse">
                            <Sparkles className="w-3 h-3" />
                            FINAL SALE
                          </span>
                        )}
                        <span className={`flex items-center gap-1 px-3 py-1 bg-${statusConfig.color}-100 text-${statusConfig.color}-700 text-sm font-medium rounded-full`}>
                          <StatusIcon className="w-4 h-4" />
                          {statusConfig.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Package className="w-4 h-4" />
                          {sale.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {sale.inventoryAge} days old
                        </span>
                        <span className="font-mono bg-gray-100 px-3 py-1 rounded font-semibold text-gray-900">
                          {sale.code}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {(sale.status === 'active' || sale.status === 'paused') && (
                        <button
                          onClick={() => toggleSaleStatus(sale.id)}
                          className={`p-2 rounded-lg ${
                            sale.status === 'active'
                              ? 'text-orange-600 hover:bg-orange-50'
                              : 'text-green-600 hover:bg-green-50'
                          }`}
                        >
                          {sale.status === 'active' ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
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
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Original Price</p>
                      <p className="text-2xl font-bold text-gray-400 line-through">₹{sale.originalPrice.toLocaleString()}</p>
                    </div>
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-200">
                      <p className="text-sm text-gray-600 mb-1">Current Discount</p>
                      <p className="text-3xl font-bold text-red-600">{sale.currentDiscount}% OFF</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p className="text-sm text-gray-600 mb-1">Sale Price</p>
                      <p className="text-3xl font-bold text-green-600">₹{sale.currentPrice.toLocaleString()}</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <p className="text-sm text-gray-600 mb-1">Profit Margin</p>
                      <p className="text-3xl font-bold text-orange-600">{sale.profitMargin}%</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <p className="text-sm text-gray-600 mb-1">Stage</p>
                      <p className="text-3xl font-bold text-purple-600">
                        {sale.currentStage === 'final' ? 'FINAL' : `${sale.currentStage}/3`}
                      </p>
                    </div>
                  </div>

                  {/* Stock Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Stock: {sale.quantity.remaining} / {sale.quantity.total} remaining
                      </span>
                      <span className={`text-sm font-bold ${
                        stockPercentage > 50 ? 'text-orange-600' :
                        stockPercentage > 20 ? 'text-red-600' :
                        'text-green-600'
                      }`}>
                        {(100 - stockPercentage).toFixed(0)}% cleared
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full transition-all bg-green-500"
                        style={{ width: `${100 - stockPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Markdown Schedule */}
                  {sale.saleType === 'staged' && sale.markdownSchedule.length > 1 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Markdown Schedule</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {sale.markdownSchedule.map((stage, idx) => (
                          <div
                            key={idx}
                            className={`rounded-lg p-4 border-2 ${
                              sale.currentStage === stage.stage
                                ? 'bg-red-50 border-red-300'
                                : 'bg-gray-50 border-gray-200'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-medium text-gray-600">Stage {stage.stage}</span>
                              <span className="text-lg font-bold text-red-600">{stage.discount}% OFF</span>
                            </div>
                            <p className="text-xs text-gray-600">Started: {stage.startDate}</p>
                            <p className="text-xs text-gray-600 mt-1">
                              Sold: {stage.sold} | Revenue: ₹{(stage.revenue / 1000).toFixed(0)}K
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-7 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Views</p>
                      <p className="text-lg font-bold text-gray-900">{sale.views.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Clicks</p>
                      <p className="text-lg font-bold text-gray-900">{sale.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Sold</p>
                      <p className="text-lg font-bold text-green-600">{sale.totalSold}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">CVR</p>
                      <p className="text-lg font-bold text-purple-600">{sale.conversionRate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Revenue</p>
                      <p className="text-lg font-bold text-orange-600">₹{(sale.totalRevenue / 1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Avg Days</p>
                      <p className="text-lg font-bold text-indigo-600">{sale.avgDaysToSell}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Inventory Age</p>
                      <p className="text-lg font-bold text-blue-600">{sale.inventoryAge}d</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSales.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Tag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No clearance sales found</h3>
            <p className="text-gray-600 mb-4">Create clearance sales to move old inventory</p>
            <button
              onClick={() => setShowCreateForm(true)}
              className="inline-flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              <Plus className="w-5 h-5" />
              Create Clearance Sale
            </button>
          </div>
        )}
      </div>

      {/* Create Sale Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-red-600 to-pink-600 text-white p-6 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                    <Tag className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Create Clearance Sale</h2>
                </div>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleCreateSale} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sale Title *
                </label>
                <input
                  type="text"
                  required
                  value={saleForm.title}
                  onChange={(e) => setSaleForm({ ...saleForm, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="e.g., Winter Collection Clearance"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    required
                    value={saleForm.category}
                    onChange={(e) => setSaleForm({ ...saleForm, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sale Type *
                  </label>
                  <select
                    required
                    value={saleForm.saleType}
                    onChange={(e) => setSaleForm({ ...saleForm, saleType: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    {saleTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Original Price (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    value={saleForm.originalPrice}
                    onChange={(e) => setSaleForm({ ...saleForm, originalPrice: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="2999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={saleForm.quantity}
                    onChange={(e) => setSaleForm({ ...saleForm, quantity: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Inventory Age (days)
                </label>
                <input
                  type="number"
                  value={saleForm.inventoryAge}
                  onChange={(e) => setSaleForm({ ...saleForm, inventoryAge: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="120"
                />
              </div>

              {saleForm.saleType === 'staged' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Markdown Schedule (3 Stages)
                  </label>
                  <div className="space-y-3">
                    {saleForm.markdownSchedule.map((stage, idx) => (
                      <div key={idx} className="grid grid-cols-3 gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Stage {stage.stage} Discount (%)
                          </label>
                          <input
                            type="number"
                            required
                            min="1"
                            max="99"
                            value={stage.discount}
                            onChange={(e) => {
                              const newSchedule = [...saleForm.markdownSchedule];
                              newSchedule[idx].discount = parseInt(e.target.value);
                              setSaleForm({ ...saleForm, markdownSchedule: newSchedule });
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Start Date
                          </label>
                          <input
                            type="date"
                            value={stage.startDate}
                            onChange={(e) => {
                              const newSchedule = [...saleForm.markdownSchedule];
                              newSchedule[idx].startDate = e.target.value;
                              setSaleForm({ ...saleForm, markdownSchedule: newSchedule });
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Days Active
                          </label>
                          <input
                            type="number"
                            value={stage.daysActive}
                            onChange={(e) => {
                              const newSchedule = [...saleForm.markdownSchedule];
                              newSchedule[idx].daysActive = parseInt(e.target.value);
                              setSaleForm({ ...saleForm, markdownSchedule: newSchedule });
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="autoMarkdown"
                  checked={saleForm.autoMarkdown}
                  onChange={(e) => setSaleForm({ ...saleForm, autoMarkdown: e.target.checked })}
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="autoMarkdown" className="text-sm font-medium text-gray-700">
                  Auto-progress to next markdown stage based on inventory age
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={saleForm.description}
                  onChange={(e) => setSaleForm({ ...saleForm, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Describe your clearance sale..."
                />
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium mb-1">Clearance Sale Tips:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Staged markdowns maximize revenue while clearing stock</li>
                      <li>Final sales (80%+) move inventory fast but at lower margins</li>
                      <li>Auto-markdown rules optimize based on inventory age</li>
                      <li>Track profit margins to ensure profitability</li>
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
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-700 hover:to-pink-700 font-semibold"
                >
                  Launch Clearance Sale
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
