import { useState } from 'react';
import { Search, Plus, TrendingDown, AlertTriangle, Calendar, DollarSign, Package, Trash2, BarChart3, Download, Filter, Clock, X } from 'lucide-react';

export default function MerchantWasteManagement() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddWaste, setShowAddWaste] = useState(false);

  // Waste Categories
  const wasteCategories = [
    { id: 'spoilage', name: 'Spoilage', icon: '🥬', color: 'red', value: 12450 },
    { id: 'expired', name: 'Expired Items', icon: '📅', color: 'orange', value: 8920 },
    { id: 'damaged', name: 'Damaged Goods', icon: '📦', color: 'yellow', value: 6780 },
    { id: 'overproduction', name: 'Overproduction', icon: '🍲', color: 'purple', value: 4560 },
    { id: 'customer_return', name: 'Customer Returns', icon: '↩️', color: 'blue', value: 3210 },
    { id: 'theft', name: 'Theft/Shrinkage', icon: '🔒', color: 'pink', value: 2890 }
  ];

  // Recent Waste Entries
  const wasteEntries = [
    {
      id: 'waste-001',
      date: '2025-12-28',
      time: '14:30',
      category: 'spoilage',
      item: 'Fresh Spinach',
      quantity: 2.5,
      unit: 'kg',
      costPerUnit: 80,
      totalLoss: 200,
      reason: 'Wilted - exceeded shelf life',
      recordedBy: 'Rajesh Kumar',
      location: 'Main Store'
    },
    {
      id: 'waste-002',
      date: '2025-12-28',
      time: '12:15',
      category: 'expired',
      item: 'Milk (Full Cream)',
      quantity: 6,
      unit: 'liters',
      costPerUnit: 65,
      totalLoss: 390,
      reason: 'Expired - Best before 27-12-2025',
      recordedBy: 'Priya Sharma',
      location: 'Main Store'
    },
    {
      id: 'waste-003',
      date: '2025-12-27',
      time: '18:45',
      category: 'overproduction',
      item: 'Paneer Tikka',
      quantity: 12,
      unit: 'portions',
      costPerUnit: 85,
      totalLoss: 1020,
      reason: 'Not sold during lunch service',
      recordedBy: 'Chef Ramesh',
      location: 'Kitchen'
    },
    {
      id: 'waste-004',
      date: '2025-12-27',
      time: '16:20',
      category: 'damaged',
      item: 'Tomato Ketchup Glass Bottle',
      quantity: 4,
      unit: 'bottles',
      costPerUnit: 145,
      totalLoss: 580,
      reason: 'Broken during storage handling',
      recordedBy: 'Vikram Singh',
      location: 'Storage Room'
    },
    {
      id: 'waste-005',
      date: '2025-12-27',
      time: '11:30',
      category: 'spoilage',
      item: 'Chicken Breast',
      quantity: 1.8,
      unit: 'kg',
      costPerUnit: 280,
      totalLoss: 504,
      reason: 'Temperature fluctuation in cold storage',
      recordedBy: 'Chef Ramesh',
      location: 'Kitchen'
    }
  ];

  // Waste Trends (Last 7 days)
  const wasteTrends = [
    { date: '22 Dec', spoilage: 1200, expired: 800, damaged: 450, other: 300 },
    { date: '23 Dec', spoilage: 980, expired: 650, damaged: 520, other: 280 },
    { date: '24 Dec', spoilage: 1450, expired: 920, damaged: 380, other: 420 },
    { date: '25 Dec', spoilage: 1680, expired: 1100, damaged: 680, other: 510 },
    { date: '26 Dec', spoilage: 1320, expired: 890, damaged: 590, other: 380 },
    { date: '27 Dec', spoilage: 1524, expired: 780, damaged: 580, other: 440 },
    { date: '28 Dec', spoilage: 200, expired: 390, damaged: 0, other: 0 }
  ];

  // Top Wasted Items
  const topWastedItems = [
    { item: 'Fresh Vegetables (Mixed)', quantity: 45.6, unit: 'kg', value: 3648, occurrences: 23 },
    { item: 'Milk & Dairy Products', quantity: 78.5, unit: 'liters', value: 5105, occurrences: 18 },
    { item: 'Bread & Bakery Items', quantity: 124, unit: 'pieces', value: 3720, occurrences: 31 },
    { item: 'Prepared Food Items', quantity: 156, unit: 'portions', value: 13260, occurrences: 42 },
    { item: 'Fruits (Seasonal)', quantity: 32.4, unit: 'kg', value: 4536, occurrences: 15 }
  ];

  // Prevention Recommendations
  const recommendations = [
    {
      priority: 'high',
      category: 'Inventory Management',
      suggestion: 'Implement FIFO (First In First Out) strictly for dairy products',
      potentialSaving: 4200,
      effort: 'Low'
    },
    {
      priority: 'high',
      category: 'Demand Forecasting',
      suggestion: 'Reduce prepared food batch size by 15% during weekdays',
      potentialSaving: 8900,
      effort: 'Medium'
    },
    {
      priority: 'medium',
      category: 'Storage',
      suggestion: 'Install temperature monitoring system in cold storage',
      potentialSaving: 3600,
      effort: 'High'
    },
    {
      priority: 'medium',
      category: 'Procurement',
      suggestion: 'Order fresh vegetables 3x per week instead of weekly',
      potentialSaving: 2800,
      effort: 'Low'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      spoilage: 'bg-red-100 text-red-700',
      expired: 'bg-orange-100 text-orange-700',
      damaged: 'bg-yellow-100 text-yellow-700',
      overproduction: 'bg-purple-100 text-purple-700',
      customer_return: 'bg-blue-100 text-blue-700',
      theft: 'bg-pink-100 text-pink-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Waste & Loss Management
            </h1>
            <p className="text-gray-600 mt-1">Track spoilage, expiry & minimize inventory loss</p>
          </div>
          <button
            onClick={() => setShowAddWaste(true)}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Record Waste
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Today's Waste</p>
              <p className="text-3xl font-bold text-gray-900">₹590</p>
              <p className="text-green-600 text-sm mt-1 flex items-center gap-1">
                <TrendingDown className="w-4 h-4" />
                -23% from yesterday
              </p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <Trash2 className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">This Month</p>
              <p className="text-3xl font-bold text-gray-900">₹38,910</p>
              <p className="text-red-600 text-sm mt-1">2.4% of total inventory</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Items at Risk</p>
              <p className="text-3xl font-bold text-gray-900">47</p>
              <p className="text-orange-600 text-sm mt-1">Expiring in 3 days</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Potential Savings</p>
              <p className="text-3xl font-bold text-gray-900">₹19,500</p>
              <p className="text-green-600 text-sm mt-1">From recommendations</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Waste Categories Overview */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Waste Breakdown (This Month)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {wasteCategories.map(category => (
            <div key={category.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-4 text-center hover:shadow-md transition-all">
              <div className="text-3xl mb-2">{category.icon}</div>
              <p className="text-sm text-gray-600 mb-1">{category.name}</p>
              <p className="text-lg font-bold text-gray-900">₹{category.value.toLocaleString('en-IN')}</p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${category.color === 'red' ? 'bg-red-500' : category.color === 'orange' ? 'bg-orange-500' : category.color === 'yellow' ? 'bg-yellow-500' : category.color === 'purple' ? 'bg-purple-500' : category.color === 'blue' ? 'bg-blue-500' : 'bg-pink-500'}`}
                  style={{ width: `${(category.value / 12450) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm mb-6">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'entries', label: 'Waste Entries', icon: Trash2 },
            { id: 'analytics', label: 'Analytics', icon: TrendingDown },
            { id: 'prevention', label: 'Prevention', icon: AlertTriangle }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 font-medium transition-colors flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Waste Trend (Last 7 Days)</h3>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-6">
                <div className="space-y-3">
                  {wasteTrends.map((day, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-16 text-sm font-medium text-gray-600">{day.date}</div>
                      <div className="flex-1 flex items-center gap-1">
                        <div className="flex-1 bg-gray-100 rounded-full h-8 flex overflow-hidden">
                          <div className="bg-red-500 flex items-center justify-center text-white text-xs font-medium" style={{ width: `${(day.spoilage / 2000) * 100}%` }}>
                            {day.spoilage > 100 && `₹${day.spoilage}`}
                          </div>
                          <div className="bg-orange-500 flex items-center justify-center text-white text-xs font-medium" style={{ width: `${(day.expired / 2000) * 100}%` }}>
                            {day.expired > 100 && `₹${day.expired}`}
                          </div>
                          <div className="bg-yellow-500 flex items-center justify-center text-white text-xs font-medium" style={{ width: `${(day.damaged / 2000) * 100}%` }}>
                            {day.damaged > 100 && `₹${day.damaged}`}
                          </div>
                          <div className="bg-purple-500 flex items-center justify-center text-white text-xs font-medium" style={{ width: `${(day.other / 2000) * 100}%` }}>
                            {day.other > 100 && `₹${day.other}`}
                          </div>
                        </div>
                        <span className="text-sm font-bold text-gray-900 w-16 text-right">
                          ₹{(day.spoilage + day.expired + day.damaged + day.other).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    <span className="text-gray-600">Spoilage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    <span className="text-gray-600">Expired</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                    <span className="text-gray-600">Damaged</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span className="text-gray-600">Other</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Wasted Items</h3>
              <div className="space-y-3">
                {topWastedItems.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center font-bold text-red-600">
                        #{idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.item}</p>
                        <p className="text-sm text-gray-600">{item.quantity} {item.unit} • {item.occurrences} occurrences</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-red-600">₹{item.value.toLocaleString('en-IN')}</p>
                      <p className="text-xs text-gray-600">Total loss</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Entries Tab */}
        {activeTab === 'entries' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search waste entries..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <select className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500">
                  <option>All Categories</option>
                  <option>Spoilage</option>
                  <option>Expired</option>
                  <option>Damaged</option>
                </select>
                <button className="px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Export
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {wasteEntries.map(entry => (
                <div key={entry.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <Trash2 className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{entry.item}</h4>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(entry.category)} mt-1`}>
                          {entry.category.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-red-600">₹{entry.totalLoss}</p>
                      <p className="text-xs text-gray-600">{entry.date} • {entry.time}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-3 bg-gray-50 rounded-lg p-3">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Quantity</p>
                      <p className="font-medium text-gray-900">{entry.quantity} {entry.unit}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Cost/Unit</p>
                      <p className="font-medium text-gray-900">₹{entry.costPerUnit}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Location</p>
                      <p className="font-medium text-gray-900">{entry.location}</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-3 mb-3">
                    <p className="text-xs text-gray-600 mb-1">Reason</p>
                    <p className="text-sm text-gray-900">{entry.reason}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Recorded by: <span className="font-medium text-gray-900">{entry.recordedBy}</span></span>
                    <button className="text-red-600 hover:text-red-700 font-medium">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Prevention Tab */}
        {activeTab === 'prevention' && (
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">AI-Powered Waste Prevention Recommendations</h3>
            <div className="space-y-4">
              {recommendations.map((rec, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getPriorityColor(rec.priority)}`}>
                          {rec.priority.toUpperCase()} PRIORITY
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                          {rec.category}
                        </span>
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{rec.suggestion}</h4>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Potential Savings:</span>
                          <span className="ml-2 font-bold text-green-600">₹{rec.potentialSaving.toLocaleString('en-IN')}/month</span>
                        </div>
                        <div>
                          <span className="font-medium">Implementation Effort:</span>
                          <span className={`ml-2 font-bold ${rec.effort === 'Low' ? 'text-green-600' : rec.effort === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>
                            {rec.effort}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium">
                      Implement
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Waste Modal */}
      {showAddWaste && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Record Waste Entry</h3>
              <button onClick={() => setShowAddWaste(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500">
                      <option>Spoilage</option>
                      <option>Expired Items</option>
                      <option>Damaged Goods</option>
                      <option>Overproduction</option>
                      <option>Customer Return</option>
                      <option>Theft/Shrinkage</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500">
                      <option>Main Store</option>
                      <option>Kitchen</option>
                      <option>Storage Room</option>
                      <option>Cold Storage</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
                  <input type="text" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500" placeholder="Enter item name" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                    <input type="number" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500" placeholder="0" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                    <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500">
                      <option>kg</option>
                      <option>liters</option>
                      <option>pieces</option>
                      <option>portions</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cost/Unit (₹)</label>
                    <input type="number" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500" placeholder="0" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                  <textarea className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500" rows="3" placeholder="Describe the reason for waste"></textarea>
                </div>
                <div className="flex gap-3 pt-4">
                  <button onClick={() => setShowAddWaste(false)} className="flex-1 px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium">
                    Cancel
                  </button>
                  <button className="flex-1 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 font-medium">
                    Save Entry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
