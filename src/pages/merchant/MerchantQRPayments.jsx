import { useState } from 'react';
import MerchantNav from '../../components/merchant/MerchantNav';
import {
  QrCode, Check, Clock, X, DollarSign, TrendingUp, Users, Zap,
  RefreshCw, Download, Search, Filter, Calendar, ArrowRight,
  Coins, Gift, Tag, Bell, AlertCircle, CheckCircle, Eye, Plus,
  Edit, Trash2, Printer, Car, Utensils, Settings, Copy
} from 'lucide-react';

export default function MerchantQRPayments() {
  const [activeTab, setActiveTab] = useState('live');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [qrType, setQrType] = useState('table'); // 'table' or 'drive-thru'
  const [editingQR, setEditingQR] = useState(null);

  // Mock data - Live payments (pending confirmation)
  const livePayments = [
    {
      id: 'PAY-789012',
      customerName: 'Priya Sharma',
      customerId: 'USR-45821',
      amount: 1250,
      coinsUsed: 250,
      cashbackEarned: 62.5,
      timestamp: new Date(Date.now() - 120000),
      status: 'pending',
      items: [
        { name: 'Chicken Biryani', qty: 2, price: 400 },
        { name: 'Paneer Tikka', qty: 1, price: 300 },
        { name: 'Naan', qty: 3, price: 150 }
      ],
      qrScanned: new Date(Date.now() - 125000),
      offerApplied: 'FIRST50',
      discount: 125
    },
    {
      id: 'PAY-789013',
      customerName: 'Rahul Mehta',
      customerId: 'USR-32145',
      amount: 850,
      coinsUsed: 150,
      cashbackEarned: 42.5,
      timestamp: new Date(Date.now() - 45000),
      status: 'pending',
      items: [
        { name: 'Masala Dosa', qty: 2, price: 500 },
        { name: 'Filter Coffee', qty: 2, price: 200 }
      ],
      qrScanned: new Date(Date.now() - 48000),
      offerApplied: null,
      discount: 0
    }
  ];

  // Mock data - Today's completed payments
  const completedPayments = [
    {
      id: 'PAY-789011',
      customerName: 'Anjali Patel',
      customerId: 'USR-67890',
      amount: 2100,
      coinsUsed: 500,
      cashbackEarned: 105,
      timestamp: new Date(Date.now() - 3600000),
      status: 'completed',
      confirmedBy: 'Store Manager',
      confirmTime: new Date(Date.now() - 3595000)
    },
    {
      id: 'PAY-789010',
      customerName: 'Vikram Singh',
      customerId: 'USR-54321',
      amount: 1650,
      coinsUsed: 300,
      cashbackEarned: 82.5,
      timestamp: new Date(Date.now() - 5400000),
      status: 'completed',
      confirmedBy: 'Cashier 1',
      confirmTime: new Date(Date.now() - 5398000)
    }
  ];

  // Mock data - Statistics
  const stats = {
    today: {
      totalPayments: 45,
      totalRevenue: 67890,
      coinsRedeemed: 12450,
      cashbackGiven: 3395,
      avgTransaction: 1508,
      pendingCount: 2
    },
    thisWeek: {
      totalPayments: 312,
      totalRevenue: 485600,
      coinsRedeemed: 89000,
      cashbackGiven: 24280
    }
  };

  // Mock data - Table QR Codes
  const [tableQRs, setTableQRs] = useState([
    {
      id: 'TBL-001',
      tableNumber: 1,
      section: 'Indoor',
      capacity: 4,
      qrCode: 'https://rez.com/order/table-001',
      status: 'active',
      createdAt: '2025-01-15',
      ordersToday: 12,
      revenueToday: 8450
    },
    {
      id: 'TBL-002',
      tableNumber: 2,
      section: 'Indoor',
      capacity: 6,
      qrCode: 'https://rez.com/order/table-002',
      status: 'active',
      createdAt: '2025-01-15',
      ordersToday: 8,
      revenueToday: 6200
    },
    {
      id: 'TBL-003',
      tableNumber: 3,
      section: 'Outdoor',
      capacity: 4,
      qrCode: 'https://rez.com/order/table-003',
      status: 'active',
      createdAt: '2025-01-15',
      ordersToday: 15,
      revenueToday: 9800
    },
    {
      id: 'TBL-004',
      tableNumber: 4,
      section: 'VIP',
      capacity: 8,
      qrCode: 'https://rez.com/order/table-004',
      status: 'active',
      createdAt: '2025-01-15',
      ordersToday: 5,
      revenueToday: 12500
    }
  ]);

  // Mock data - Drive-Through QR Codes
  const [driveThruQRs, setDriveThruQRs] = useState([
    {
      id: 'DT-001',
      laneNumber: 1,
      laneName: 'Express Lane',
      qrCode: 'https://rez.com/order/drive-001',
      status: 'active',
      createdAt: '2025-01-15',
      ordersToday: 45,
      revenueToday: 23450,
      avgWaitTime: '3.5 mins'
    },
    {
      id: 'DT-002',
      laneNumber: 2,
      laneName: 'Regular Lane',
      qrCode: 'https://rez.com/order/drive-002',
      status: 'active',
      createdAt: '2025-01-15',
      ordersToday: 38,
      revenueToday: 19200,
      avgWaitTime: '4.2 mins'
    },
    {
      id: 'DT-003',
      laneNumber: 3,
      laneName: 'Pre-Order Lane',
      qrCode: 'https://rez.com/order/drive-003',
      status: 'active',
      createdAt: '2025-01-15',
      ordersToday: 52,
      revenueToday: 28900,
      avgWaitTime: '2.8 mins'
    }
  ]);

  const handleConfirmPayment = (paymentId) => {
    console.log('Confirming payment:', paymentId);
    // Implementation would confirm payment
  };

  const handleRejectPayment = (paymentId) => {
    console.log('Rejecting payment:', paymentId);
    // Implementation would reject payment
  };

  const handleCreateTableQR = (data) => {
    const newTable = {
      id: `TBL-${String(tableQRs.length + 1).padStart(3, '0')}`,
      tableNumber: data.tableNumber,
      section: data.section,
      capacity: data.capacity,
      qrCode: `https://rez.com/order/table-${String(tableQRs.length + 1).padStart(3, '0')}`,
      status: 'active',
      createdAt: new Date().toISOString().split('T')[0],
      ordersToday: 0,
      revenueToday: 0
    };
    setTableQRs([...tableQRs, newTable]);
    setShowCreateModal(false);
  };

  const handleCreateDriveThruQR = (data) => {
    const newLane = {
      id: `DT-${String(driveThruQRs.length + 1).padStart(3, '0')}`,
      laneNumber: data.laneNumber,
      laneName: data.laneName,
      qrCode: `https://rez.com/order/drive-${String(driveThruQRs.length + 1).padStart(3, '0')}`,
      status: 'active',
      createdAt: new Date().toISOString().split('T')[0],
      ordersToday: 0,
      revenueToday: 0,
      avgWaitTime: '0 mins'
    };
    setDriveThruQRs([...driveThruQRs, newLane]);
    setShowCreateModal(false);
  };

  const handleDeleteTableQR = (id) => {
    if (window.confirm('Are you sure you want to delete this table QR code?')) {
      setTableQRs(tableQRs.filter(t => t.id !== id));
    }
  };

  const handleDeleteDriveThruQR = (id) => {
    if (window.confirm('Are you sure you want to delete this drive-through QR code?')) {
      setDriveThruQRs(driveThruQRs.filter(d => d.id !== id));
    }
  };

  const handleToggleQRStatus = (id, type) => {
    if (type === 'table') {
      setTableQRs(tableQRs.map(t =>
        t.id === id ? { ...t, status: t.status === 'active' ? 'inactive' : 'active' } : t
      ));
    } else {
      setDriveThruQRs(driveThruQRs.map(d =>
        d.id === id ? { ...d, status: d.status === 'active' ? 'inactive' : 'active' } : d
      ));
    }
  };

  const handlePrintQR = (qrCode, label) => {
    console.log('Printing QR code:', qrCode, label);
    // Implementation would open print dialog with QR code
  };

  const handleDownloadQR = (qrCode, label) => {
    console.log('Downloading QR code:', qrCode, label);
    // Implementation would download QR code as image
  };

  const handleCopyQRLink = (qrCode) => {
    navigator.clipboard.writeText(qrCode);
    alert('QR code link copied to clipboard!');
  };

  const getTimeSince = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };

  const renderLivePayments = () => (
    <div className="space-y-4">
      {livePayments.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Pending Payments</h3>
          <p className="text-gray-600">New QR payments will appear here in real-time</p>
        </div>
      ) : (
        livePayments.map((payment) => (
          <div key={payment.id} className="bg-white rounded-xl border-2 border-orange-200 shadow-lg overflow-hidden animate-pulse-border">
            {/* Urgent Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 animate-bounce" />
                  <span className="font-semibold">⚡ Action Required - Customer Waiting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{getTimeSince(payment.timestamp)}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Customer Info */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {payment.customerName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{payment.customerName}</h3>
                    <p className="text-sm text-gray-600">ID: {payment.customerId}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Scanned QR: {getTimeSince(payment.qrScanned)}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Payment ID</p>
                  <p className="text-sm font-mono font-semibold text-gray-900">{payment.id}</p>
                </div>
              </div>

              {/* Payment Breakdown */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Payment Breakdown</h4>
                <div className="space-y-2">
                  {payment.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.name} × {item.qty}
                      </span>
                      <span className="font-medium text-gray-900">₹{item.price}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{payment.amount + (payment.discount || 0)}</span>
                    </div>
                    {payment.discount > 0 && (
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-green-600 flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          Discount ({payment.offerApplied})
                        </span>
                        <span className="font-medium text-green-600">-₹{payment.discount}</span>
                      </div>
                    )}
                    {payment.coinsUsed > 0 && (
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-purple-600 flex items-center gap-1">
                          <Coins className="w-3 h-3" />
                          ReZ Coins Used
                        </span>
                        <span className="font-medium text-purple-600">-₹{payment.coinsUsed}</span>
                      </div>
                    )}
                    {payment.cashbackEarned > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-600 flex items-center gap-1">
                          <Gift className="w-3 h-3" />
                          Cashback Earned
                        </span>
                        <span className="font-medium text-blue-600">+₹{payment.cashbackEarned}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Final Amount */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Amount to Collect</span>
                  <span className="text-3xl font-bold text-green-600">
                    ₹{payment.amount - payment.coinsUsed}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleConfirmPayment(payment.id)}
                  className="flex-1 px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <CheckCircle className="w-6 h-6" />
                  Confirm Payment Received
                </button>
                <button
                  onClick={() => handleRejectPayment(payment.id)}
                  className="px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <X className="w-5 h-5" />
                  Reject
                </button>
                <button
                  onClick={() => setSelectedPayment(payment)}
                  className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  Details
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );

  const renderCompletedPayments = () => (
    <div className="space-y-4">
      {completedPayments.map((payment) => (
        <div key={payment.id} className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900">{payment.customerName}</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    Completed
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{payment.id}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{getTimeSince(payment.timestamp)}</span>
                  <span>•</span>
                  <span>Confirmed by: {payment.confirmedBy}</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900 mb-2">₹{payment.amount}</p>
              <div className="space-y-1 text-sm">
                <p className="text-purple-600">-₹{payment.coinsUsed} coins</p>
                <p className="text-blue-600">+₹{payment.cashbackEarned} cashback</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderQRManagement = () => (
    <div className="space-y-6">
      {/* QR Type Selector */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setQrType('table')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                qrType === 'table'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Utensils className="w-5 h-5" />
              Table QR Codes ({tableQRs.length})
            </button>
            <button
              onClick={() => setQrType('drive-thru')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                qrType === 'drive-thru'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Car className="w-5 h-5" />
              Drive-Through QR Codes ({driveThruQRs.length})
            </button>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create New {qrType === 'table' ? 'Table' : 'Drive-Through'} QR
          </button>
        </div>
      </div>

      {/* Table QR Codes */}
      {qrType === 'table' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tableQRs.map((table) => (
            <div key={table.id} className="bg-white rounded-xl border border-gray-200 p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Utensils className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Table {table.tableNumber}</h3>
                    <p className="text-sm text-gray-600">{table.section}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  table.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {table.status}
                </span>
              </div>

              {/* QR Code Display */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center">
                <QrCode className="w-24 h-24 text-gray-400" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Capacity</p>
                  <p className="text-lg font-bold text-gray-900">{table.capacity} seats</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Orders Today</p>
                  <p className="text-lg font-bold text-gray-900">{table.ordersToday}</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-600 mb-1">Revenue Today</p>
                <p className="text-xl font-bold text-blue-600">₹{table.revenueToday.toLocaleString()}</p>
              </div>

              {/* QR Code Link */}
              <div className="mb-4">
                <p className="text-xs text-gray-600 mb-1">QR Code Link</p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={table.qrCode}
                    readOnly
                    className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono"
                  />
                  <button
                    onClick={() => handleCopyQRLink(table.qrCode)}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => handlePrintQR(table.qrCode, `Table ${table.tableNumber}`)}
                  className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  Print
                </button>
                <button
                  onClick={() => handleDownloadQR(table.qrCode, `Table ${table.tableNumber}`)}
                  className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button
                  onClick={() => handleToggleQRStatus(table.id, 'table')}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteTableQR(table.id)}
                  className="px-3 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Drive-Through QR Codes */}
      {qrType === 'drive-thru' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {driveThruQRs.map((lane) => (
            <div key={lane.id} className="bg-white rounded-xl border border-gray-200 p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Car className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Lane {lane.laneNumber}</h3>
                    <p className="text-sm text-gray-600">{lane.laneName}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  lane.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {lane.status}
                </span>
              </div>

              {/* QR Code Display */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center">
                <QrCode className="w-24 h-24 text-gray-400" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Avg Wait Time</p>
                  <p className="text-lg font-bold text-gray-900">{lane.avgWaitTime}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Orders Today</p>
                  <p className="text-lg font-bold text-gray-900">{lane.ordersToday}</p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-600 mb-1">Revenue Today</p>
                <p className="text-xl font-bold text-orange-600">₹{lane.revenueToday.toLocaleString()}</p>
              </div>

              {/* QR Code Link */}
              <div className="mb-4">
                <p className="text-xs text-gray-600 mb-1">QR Code Link</p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={lane.qrCode}
                    readOnly
                    className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono"
                  />
                  <button
                    onClick={() => handleCopyQRLink(lane.qrCode)}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => handlePrintQR(lane.qrCode, `Lane ${lane.laneNumber}`)}
                  className="flex-1 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  Print
                </button>
                <button
                  onClick={() => handleDownloadQR(lane.qrCode, `Lane ${lane.laneNumber}`)}
                  className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button
                  onClick={() => handleToggleQRStatus(lane.id, 'drive-thru')}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteDriveThruQR(lane.id)}
                  className="px-3 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      {/* Today's Performance */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Today's QR Payment Performance</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <DollarSign className="w-8 h-8 text-blue-600 mb-3" />
            <p className="text-3xl font-bold text-gray-900 mb-1">₹{stats.today.totalRevenue.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Revenue</p>
            <p className="text-xs text-blue-600 mt-2">{stats.today.totalPayments} transactions</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <Coins className="w-8 h-8 text-purple-600 mb-3" />
            <p className="text-3xl font-bold text-gray-900 mb-1">₹{stats.today.coinsRedeemed.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Coins Redeemed</p>
            <p className="text-xs text-purple-600 mt-2">Net: ₹{(stats.today.totalRevenue - stats.today.coinsRedeemed).toLocaleString()}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <Gift className="w-8 h-8 text-green-600 mb-3" />
            <p className="text-3xl font-bold text-gray-900 mb-1">₹{stats.today.cashbackGiven.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Cashback Given</p>
            <p className="text-xs text-green-600 mt-2">{((stats.today.cashbackGiven / stats.today.totalRevenue) * 100).toFixed(1)}% of revenue</p>
          </div>
        </div>
      </div>

      {/* Weekly Comparison */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">This Week's Performance</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Payments</span>
              <span className="text-2xl font-bold text-gray-900">{stats.thisWeek.totalPayments}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Revenue</span>
              <span className="text-2xl font-bold text-gray-900">₹{stats.thisWeek.totalRevenue.toLocaleString()}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Coins Redeemed</span>
              <span className="text-2xl font-bold text-purple-600">₹{stats.thisWeek.coinsRedeemed.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cashback Given</span>
              <span className="text-2xl font-bold text-blue-600">₹{stats.thisWeek.cashbackGiven.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CreateQRModal = () => {
    const [formData, setFormData] = useState({
      tableNumber: '',
      section: 'Indoor',
      capacity: 4,
      laneNumber: '',
      laneName: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (qrType === 'table') {
        handleCreateTableQR(formData);
      } else {
        handleCreateDriveThruQR(formData);
      }
      setFormData({
        tableNumber: '',
        section: 'Indoor',
        capacity: 4,
        laneNumber: '',
        laneName: ''
      });
    };

    if (!showCreateModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl max-w-md w-full p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Create {qrType === 'table' ? 'Table' : 'Drive-Through'} QR Code
            </h2>
            <button
              onClick={() => setShowCreateModal(false)}
              className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {qrType === 'table' ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Table Number *
                  </label>
                  <input
                    type="number"
                    value={formData.tableNumber}
                    onChange={(e) => setFormData({ ...formData, tableNumber: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section *
                  </label>
                  <select
                    value={formData.section}
                    onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Indoor">Indoor</option>
                    <option value="Outdoor">Outdoor</option>
                    <option value="VIP">VIP</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Poolside">Poolside</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Seating Capacity *
                  </label>
                  <input
                    type="number"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    min="1"
                    max="20"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lane Number *
                  </label>
                  <input
                    type="number"
                    value={formData.laneNumber}
                    onChange={(e) => setFormData({ ...formData, laneNumber: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lane Name *
                  </label>
                  <input
                    type="text"
                    value={formData.laneName}
                    onChange={(e) => setFormData({ ...formData, laneName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., Express Lane, Regular Lane"
                    required
                  />
                </div>
              </>
            )}

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`flex-1 px-4 py-2 ${
                  qrType === 'table' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-orange-600 hover:bg-orange-700'
                } text-white rounded-lg font-medium transition-colors`}
              >
                Create QR Code
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <MerchantNav />
      <CreateQRModal />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">QR Payments</h1>
                <p className="text-gray-600">Real-time payment monitoring & confirmation</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Refresh QR Code
              </button>
            </div>
          </div>
        </div>

        {/* Alert Banner for Pending Payments */}
        {stats.today.pendingCount > 0 && (
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6" />
                <div>
                  <p className="font-semibold">
                    {stats.today.pendingCount} customer{stats.today.pendingCount > 1 ? 's' : ''} waiting for payment confirmation
                  </p>
                  <p className="text-sm opacity-90">Please confirm payments to avoid customer delays</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('live')}
                className="px-4 py-2 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Review Now
              </button>
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">₹{stats.today.avgTransaction.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Avg Transaction</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.today.totalPayments}</p>
            <p className="text-sm text-gray-600">Payments Today</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
              {stats.today.pendingCount > 0 && (
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                  Pending
                </span>
              )}
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.today.pendingCount}</p>
            <p className="text-sm text-gray-600">Awaiting Confirmation</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">₹{stats.today.coinsRedeemed.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Coins Redeemed</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('live')}
              className={`flex-1 px-6 py-4 font-medium transition-colors relative ${
                activeTab === 'live'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Bell className="w-5 h-5" />
                Live Payments
                {stats.today.pendingCount > 0 && (
                  <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    {stats.today.pendingCount}
                  </span>
                )}
              </div>
            </button>
            <button
              onClick={() => setActiveTab('qr-management')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'qr-management'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <QrCode className="w-5 h-5" />
                QR Management
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                  {tableQRs.length + driveThruQRs.length}
                </span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'completed'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Completed Today
              </div>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'analytics'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Analytics
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'live' && renderLivePayments()}
        {activeTab === 'qr-management' && renderQRManagement()}
        {activeTab === 'completed' && renderCompletedPayments()}
        {activeTab === 'analytics' && renderAnalytics()}
      </div>
    </div>
  );
}
