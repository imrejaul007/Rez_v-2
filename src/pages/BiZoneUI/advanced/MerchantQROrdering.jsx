import { useState } from 'react';
import MerchantNav from '../../components/merchant/MerchantNav';
import {
  QrCode, Utensils, Car, Printer, Download, Settings, Eye,
  Plus, Edit, Trash2, RefreshCw, CheckCircle, Clock, DollarSign,
  MapPin, Users, ChefHat, TrendingUp, AlertCircle, Grid3x3,
  Wifi, WifiOff, Bell, Package, ShoppingCart, Receipt
} from 'lucide-react';

const MerchantQROrdering = () => {
  const [activeTab, setActiveTab] = useState('tables');
  const [selectedTable, setSelectedTable] = useState(null);

  // Table QR codes
  const tableQRCodes = [
    {
      id: 'TBL-001',
      tableNumber: 1,
      section: 'Indoor',
      capacity: 4,
      qrCode: 'https://rez.com/order/table-001',
      status: 'active',
      currentOrders: 2,
      totalRevenue: 1250,
      lastOrder: '10 mins ago',
      isOccupied: true
    },
    {
      id: 'TBL-002',
      tableNumber: 2,
      section: 'Indoor',
      capacity: 2,
      qrCode: 'https://rez.com/order/table-002',
      status: 'active',
      currentOrders: 0,
      totalRevenue: 0,
      lastOrder: 'None',
      isOccupied: false
    },
    {
      id: 'TBL-003',
      tableNumber: 3,
      section: 'Outdoor',
      capacity: 6,
      qrCode: 'https://rez.com/order/table-003',
      status: 'active',
      currentOrders: 1,
      totalRevenue: 2340,
      lastOrder: '5 mins ago',
      isOccupied: true
    },
    {
      id: 'TBL-004',
      tableNumber: 4,
      section: 'Outdoor',
      capacity: 4,
      qrCode: 'https://rez.com/order/table-004',
      status: 'inactive',
      currentOrders: 0,
      totalRevenue: 0,
      lastOrder: 'None',
      isOccupied: false
    },
    {
      id: 'TBL-005',
      tableNumber: 5,
      section: 'VIP',
      capacity: 8,
      qrCode: 'https://rez.com/order/table-005',
      status: 'active',
      currentOrders: 3,
      totalRevenue: 4560,
      lastOrder: '2 mins ago',
      isOccupied: true
    }
  ];

  // Drive-through QR lanes
  const driveThruLanes = [
    {
      id: 'DT-001',
      laneNumber: 1,
      qrCode: 'https://rez.com/order/drive-001',
      status: 'active',
      currentQueue: 3,
      avgWaitTime: '4 mins',
      ordersToday: 45,
      revenueToday: 23450,
      lastOrder: '30 secs ago'
    },
    {
      id: 'DT-002',
      laneNumber: 2,
      qrCode: 'https://rez.com/order/drive-002',
      status: 'active',
      currentQueue: 1,
      avgWaitTime: '2 mins',
      ordersToday: 38,
      revenueToday: 19800,
      lastOrder: '1 min ago'
    },
    {
      id: 'DT-003',
      laneNumber: 3,
      qrCode: 'https://rez.com/order/drive-003',
      status: 'inactive',
      currentQueue: 0,
      avgWaitTime: 'N/A',
      ordersToday: 0,
      revenueToday: 0,
      lastOrder: 'None'
    }
  ];

  // Live orders from QR
  const liveQROrders = [
    {
      id: 'ORD-1234',
      type: 'table',
      source: 'Table 1',
      tableId: 'TBL-001',
      customer: 'John Doe',
      items: 3,
      total: 450,
      status: 'preparing',
      orderTime: '5 mins ago',
      estimatedTime: '10 mins'
    },
    {
      id: 'ORD-1235',
      type: 'table',
      source: 'Table 5',
      tableId: 'TBL-005',
      customer: 'Jane Smith',
      items: 5,
      total: 890,
      status: 'pending',
      orderTime: '2 mins ago',
      estimatedTime: '15 mins'
    },
    {
      id: 'ORD-1236',
      type: 'drive-thru',
      source: 'Drive Lane 1',
      laneId: 'DT-001',
      customer: 'Mike Johnson',
      items: 2,
      total: 340,
      status: 'ready',
      orderTime: '8 mins ago',
      estimatedTime: '0 mins'
    },
    {
      id: 'ORD-1237',
      type: 'drive-thru',
      source: 'Drive Lane 2',
      laneId: 'DT-002',
      customer: 'Sarah Wilson',
      items: 4,
      total: 680,
      status: 'preparing',
      orderTime: '3 mins ago',
      estimatedTime: '5 mins'
    }
  ];

  // Analytics
  const qrAnalytics = {
    today: {
      tableOrders: 67,
      driveThruOrders: 83,
      totalRevenue: 87650,
      avgOrderValue: 584,
      peakHour: '1:00 PM - 2:00 PM'
    },
    performance: {
      tableConversionRate: 78,
      driveThruConversionRate: 92,
      avgTableTurnover: '45 mins',
      avgDriveThruTime: '3.5 mins',
      customerSatisfaction: 4.6
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'inactive': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'preparing': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'ready': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handlePrintQR = (id, type) => {
    alert(`Printing QR code for ${type} ${id}`);
  };

  const handleDownloadQR = (id, type) => {
    alert(`Downloading QR code for ${type} ${id}`);
  };

  const handleToggleStatus = (id, type) => {
    alert(`Toggling status for ${type} ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 p-6">
      <MerchantNav />

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500/20 backdrop-blur-lg rounded-2xl border border-orange-500/30 flex items-center justify-center">
              <QrCode className="w-6 h-6 text-orange-300" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">QR Ordering System</h1>
              <p className="text-orange-200">Table QR & Drive-Through Integration with POS</p>
            </div>
          </div>
          <button className="px-6 py-3 bg-orange-500/20 backdrop-blur-lg border border-orange-500/30 rounded-xl text-orange-300 hover:bg-orange-500/30 transition-all flex items-center gap-2">
            <Settings className="w-5 h-5" />
            QR Settings
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
            <div className="flex items-center justify-between mb-2">
              <Utensils className="w-5 h-5 text-blue-400" />
              <span className="text-xs text-white/60">Today</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{qrAnalytics.today.tableOrders}</div>
            <div className="text-sm text-white/70">Table Orders</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
            <div className="flex items-center justify-between mb-2">
              <Car className="w-5 h-5 text-green-400" />
              <span className="text-xs text-white/60">Today</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{qrAnalytics.today.driveThruOrders}</div>
            <div className="text-sm text-white/70">Drive-Thru Orders</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-5 h-5 text-yellow-400" />
              <span className="text-xs text-white/60">Today</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">₹{(qrAnalytics.today.totalRevenue / 1000).toFixed(1)}K</div>
            <div className="text-sm text-white/70">Total Revenue</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <span className="text-xs text-white/60">Average</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">₹{qrAnalytics.today.avgOrderValue}</div>
            <div className="text-sm text-white/70">Order Value</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-white/5 backdrop-blur-lg rounded-xl p-1 border border-white/10">
        {['tables', 'drive-thru', 'live-orders', 'analytics'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-4 py-3 rounded-lg transition-all ${
              activeTab === tab
                ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                : 'text-white/60 hover:text-white/80'
            }`}
          >
            {tab === 'tables' && <Utensils className="w-4 h-4 inline mr-2" />}
            {tab === 'drive-thru' && <Car className="w-4 h-4 inline mr-2" />}
            {tab === 'live-orders' && <ShoppingCart className="w-4 h-4 inline mr-2" />}
            {tab === 'analytics' && <TrendingUp className="w-4 h-4 inline mr-2" />}
            {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </button>
        ))}
      </div>

      {/* Table QR Codes */}
      {activeTab === 'tables' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Table QR Codes</h2>
            <button className="px-4 py-2 bg-green-500/20 backdrop-blur-lg border border-green-500/30 rounded-xl text-green-300 hover:bg-green-500/30 transition-all flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Table
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tableQRCodes.map((table) => (
              <div key={table.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">Table {table.tableNumber}</div>
                    <div className="text-sm text-white/60">{table.section} • {table.capacity} seats</div>
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-lg text-xs border ${getStatusColor(table.status)}`}>
                      {table.status}
                    </span>
                    {table.isOccupied && (
                      <span className="px-3 py-1 rounded-lg text-xs border bg-red-500/20 text-red-400 border-red-500/30">
                        Occupied
                      </span>
                    )}
                  </div>
                </div>

                {/* QR Code Display */}
                <div className="bg-white rounded-lg p-4 mb-4 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                    <QrCode className="w-24 h-24 text-gray-600" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-xs text-white/60 mb-1">Current Orders</div>
                    <div className="text-lg font-bold text-white">{table.currentOrders}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-xs text-white/60 mb-1">Revenue Today</div>
                    <div className="text-lg font-bold text-white">₹{table.totalRevenue}</div>
                  </div>
                </div>

                <div className="text-xs text-white/60 mb-4">
                  Last order: {table.lastOrder}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handlePrintQR(table.id, 'Table')}
                    className="flex-1 px-3 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 hover:bg-blue-500/30 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Printer className="w-4 h-4" />
                    Print
                  </button>
                  <button
                    onClick={() => handleDownloadQR(table.id, 'Table')}
                    className="flex-1 px-3 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 hover:bg-green-500/30 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button
                    onClick={() => handleToggleStatus(table.id, 'Table')}
                    className="px-3 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-all"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Drive-Through QR */}
      {activeTab === 'drive-thru' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Drive-Through QR Lanes</h2>
            <button className="px-4 py-2 bg-green-500/20 backdrop-blur-lg border border-green-500/30 rounded-xl text-green-300 hover:bg-green-500/30 transition-all flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Lane
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {driveThruLanes.map((lane) => (
              <div key={lane.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">Lane {lane.laneNumber}</div>
                    <div className="text-sm text-white/60">Drive-Through</div>
                  </div>
                  <span className={`px-3 py-1 rounded-lg text-xs border ${getStatusColor(lane.status)}`}>
                    {lane.status}
                  </span>
                </div>

                {/* QR Code */}
                <div className="bg-white rounded-lg p-4 mb-4 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                    <QrCode className="w-24 h-24 text-gray-600" />
                  </div>
                </div>

                {/* Live Stats */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/60">Current Queue:</span>
                    <span className="text-lg font-bold text-white">{lane.currentQueue} cars</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/60">Avg Wait Time:</span>
                    <span className="text-sm font-semibold text-green-400">{lane.avgWaitTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/60">Orders Today:</span>
                    <span className="text-sm font-semibold text-blue-400">{lane.ordersToday}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/60">Revenue Today:</span>
                    <span className="text-sm font-semibold text-yellow-400">₹{(lane.revenueToday / 1000).toFixed(1)}K</span>
                  </div>
                </div>

                <div className="text-xs text-white/60 mb-4">
                  Last order: {lane.lastOrder}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handlePrintQR(lane.id, 'Lane')}
                    className="flex-1 px-3 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 hover:bg-blue-500/30 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Printer className="w-4 h-4" />
                    Print
                  </button>
                  <button
                    onClick={() => handleDownloadQR(lane.id, 'Lane')}
                    className="flex-1 px-3 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 hover:bg-green-500/30 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Live Orders */}
      {activeTab === 'live-orders' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4">Live QR Orders (POS Integration)</h2>

          <div className="grid grid-cols-1 gap-4">
            {liveQROrders.map((order) => (
              <div key={order.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      order.type === 'table' ? 'bg-blue-500/20' : 'bg-green-500/20'
                    }`}>
                      {order.type === 'table' ? <Utensils className="w-6 h-6 text-blue-300" /> : <Car className="w-6 h-6 text-green-300" />}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white mb-1">{order.id}</div>
                      <div className="text-sm text-white/60">{order.source} • {order.customer}</div>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-lg text-sm border font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <div className="text-xs text-white/60 mb-1">Items</div>
                    <div className="text-lg font-bold text-white">{order.items}</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/60 mb-1">Total</div>
                    <div className="text-lg font-bold text-white">₹{order.total}</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/60 mb-1">Order Time</div>
                    <div className="text-sm text-white/80">{order.orderTime}</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/60 mb-1">Est. Ready</div>
                    <div className="text-sm text-green-400">{order.estimatedTime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Analytics */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-4">QR Ordering Analytics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Performance Metrics */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Table Conversion Rate</span>
                  <span className="text-xl font-bold text-green-400">{qrAnalytics.performance.tableConversionRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Drive-Thru Conversion Rate</span>
                  <span className="text-xl font-bold text-green-400">{qrAnalytics.performance.driveThruConversionRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Avg Table Turnover</span>
                  <span className="text-xl font-bold text-blue-400">{qrAnalytics.performance.avgTableTurnover}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Avg Drive-Thru Time</span>
                  <span className="text-xl font-bold text-blue-400">{qrAnalytics.performance.avgDriveThruTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Customer Satisfaction</span>
                  <span className="text-xl font-bold text-yellow-400">{qrAnalytics.performance.customerSatisfaction}/5.0</span>
                </div>
              </div>
            </div>

            {/* Peak Hours */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Today's Highlights</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-white/60 mb-2">Peak Hour</div>
                  <div className="text-2xl font-bold text-white">{qrAnalytics.today.peakHour}</div>
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-2">Total Orders</div>
                  <div className="text-2xl font-bold text-white">{qrAnalytics.today.tableOrders + qrAnalytics.today.driveThruOrders}</div>
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-2">Revenue</div>
                  <div className="text-2xl font-bold text-white">₹{(qrAnalytics.today.totalRevenue / 1000).toFixed(1)}K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantQROrdering;
