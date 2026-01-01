import React, { useState } from 'react';
import {
  ArrowLeft,
  Banknote,
  Wallet,
  Clock,
  User,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Plus,
  Minus,
  RefreshCw,
  Lock,
  Unlock,
  DollarSign,
  TrendingUp,
  TrendingDown,
  FileText,
  Printer,
  Save,
  Eye,
  EyeOff,
  Shield,
  AlertCircle,
  Users,
  Calendar,
  Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MerchantCashDrawer = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('drawer');
  const [showDenomination, setShowDenomination] = useState(false);

  // ============================================
  // CURRENT SHIFT DATA
  // ============================================

  const [currentShift, setCurrentShift] = useState({
    id: 'SHIFT001',
    staff: 'Amit Kumar',
    staffId: 'S001',
    startTime: '2024-01-15 09:00:00',
    endTime: null,
    status: 'active', // 'active', 'closed'

    // Opening
    openingCash: 5000,
    openingVerified: true,
    openingVerifiedBy: 'Manager',

    // Current State
    expectedCash: 23450,
    actualCash: null,
    cashVariance: null,

    // Transactions Summary
    cashReceived: 18500,
    cashRefunds: 450,
    cashPayouts: 1200, // petty cash, supplier payments
    coinRedemptions: 0, // ReZ coins redeemed for cash value

    // Breakdown
    transactions: {
      sales: 18500,
      refunds: 450,
      payouts: 1200,
      petty: 400
    }
  });

  // ============================================
  // DENOMINATION ENTRY
  // ============================================

  const [denominations, setDenominations] = useState({
    2000: 0,
    500: 0,
    200: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0
  });

  // ============================================
  // CASH MOVEMENTS (Payout/Pay-in)
  // ============================================

  const [cashMovements, setCashMovements] = useState([
    {
      id: 'CM001',
      type: 'payout',
      amount: 500,
      reason: 'Supplier payment - Milk',
      category: 'supplier',
      approvedBy: 'Manager',
      timestamp: '2024-01-15 10:30:00',
      staff: 'Amit Kumar',
      receiptNumber: 'RCP001'
    },
    {
      id: 'CM002',
      type: 'payout',
      amount: 300,
      reason: 'Petty cash - Cleaning supplies',
      category: 'petty',
      approvedBy: 'Manager',
      timestamp: '2024-01-15 12:15:00',
      staff: 'Amit Kumar',
      receiptNumber: 'RCP002'
    },
    {
      id: 'CM003',
      type: 'payout',
      amount: 400,
      reason: 'Employee advance - Delivery boy',
      category: 'employee',
      approvedBy: 'Owner',
      timestamp: '2024-01-15 14:00:00',
      staff: 'Priya Singh',
      receiptNumber: 'RCP003'
    }
  ]);

  // ============================================
  // STAFF CASH RESPONSIBILITY
  // ============================================

  const [staffCashLog, setStaffCashLog] = useState([
    {
      staffId: 'S001',
      name: 'Amit Kumar',
      shiftsThisMonth: 22,
      totalCashHandled: 456000,
      shortages: 2,
      shortageAmount: 350,
      excesses: 1,
      excessAmount: 50,
      netVariance: -300,
      status: 'good' // 'good', 'warning', 'flagged'
    },
    {
      staffId: 'S002',
      name: 'Priya Singh',
      shiftsThisMonth: 18,
      totalCashHandled: 342000,
      shortages: 0,
      shortageAmount: 0,
      excesses: 0,
      excessAmount: 0,
      netVariance: 0,
      status: 'excellent'
    },
    {
      staffId: 'S003',
      name: 'Rajesh Verma',
      shiftsThisMonth: 20,
      totalCashHandled: 380000,
      shortages: 5,
      shortageAmount: 1200,
      excesses: 0,
      excessAmount: 0,
      netVariance: -1200,
      status: 'flagged'
    }
  ]);

  // ============================================
  // SHIFT HISTORY
  // ============================================

  const [shiftHistory, setShiftHistory] = useState([
    {
      id: 'SHIFT000',
      date: '2024-01-14',
      staff: 'Priya Singh',
      startTime: '09:00',
      endTime: '18:00',
      openingCash: 5000,
      closingCash: 22300,
      expectedCash: 22300,
      variance: 0,
      status: 'balanced'
    },
    {
      id: 'SHIFT-1',
      date: '2024-01-13',
      staff: 'Amit Kumar',
      startTime: '09:00',
      endTime: '18:00',
      openingCash: 5000,
      closingCash: 19800,
      expectedCash: 20000,
      variance: -200,
      status: 'short'
    },
    {
      id: 'SHIFT-2',
      date: '2024-01-12',
      staff: 'Rajesh Verma',
      startTime: '09:00',
      endTime: '18:00',
      openingCash: 5000,
      closingCash: 18450,
      expectedCash: 18950,
      variance: -500,
      status: 'short'
    }
  ]);

  // ============================================
  // PAYOUT CATEGORIES
  // ============================================

  const payoutCategories = [
    { id: 'supplier', label: 'Supplier Payment', requiresApproval: true, limit: 5000 },
    { id: 'petty', label: 'Petty Cash', requiresApproval: true, limit: 1000 },
    { id: 'employee', label: 'Employee Advance', requiresApproval: true, limit: 2000 },
    { id: 'refund', label: 'Customer Refund', requiresApproval: false, limit: 500 },
    { id: 'utility', label: 'Utility Payment', requiresApproval: true, limit: 10000 },
    { id: 'other', label: 'Other', requiresApproval: true, limit: 1000 }
  ];

  // ============================================
  // THEFT DETECTION FLAGS
  // ============================================

  const [theftFlags, setTheftFlags] = useState([
    {
      id: 'TF001',
      type: 'pattern',
      description: 'Repeated small shortages (₹50-200) during Rajesh\'s shifts',
      severity: 'high',
      date: '2024-01-15',
      status: 'investigating'
    },
    {
      id: 'TF002',
      type: 'anomaly',
      description: 'Unusual refund pattern - 5 cash refunds in 1 hour',
      severity: 'medium',
      date: '2024-01-14',
      status: 'resolved'
    }
  ]);

  // ============================================
  // FUNCTIONS
  // ============================================

  const calculateDenominationTotal = () => {
    return Object.entries(denominations).reduce((sum, [denom, count]) => {
      return sum + (parseInt(denom) * count);
    }, 0);
  };

  const handleDenominationChange = (denom, value) => {
    setDenominations(prev => ({
      ...prev,
      [denom]: Math.max(0, parseInt(value) || 0)
    }));
  };

  const closeShift = () => {
    const actualCash = calculateDenominationTotal();
    const variance = actualCash - currentShift.expectedCash;
    setCurrentShift(prev => ({
      ...prev,
      actualCash,
      cashVariance: variance,
      status: 'closed',
      endTime: new Date().toISOString()
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/merchant')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </button>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Banknote size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Cash Drawer Management</h1>
                <p className="text-white/80 mt-1">Cash Balancing, Staff Tracking & Theft Detection</p>
              </div>
            </div>

            {/* Current Shift Badge */}
            <div className={`px-6 py-3 rounded-xl ${
              currentShift.status === 'active' ? 'bg-emerald-500/30' : 'bg-gray-500/30'
            }`}>
              <div className="text-sm text-white/70">Current Shift</div>
              <div className="font-bold">{currentShift.staff}</div>
              <div className="text-sm text-white/70">Since {formatTime(currentShift.startTime)}</div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Opening Cash</div>
              <div className="text-2xl font-bold">{formatCurrency(currentShift.openingCash)}</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Cash Received</div>
              <div className="text-2xl font-bold text-emerald-300">+{formatCurrency(currentShift.cashReceived)}</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Payouts</div>
              <div className="text-2xl font-bold text-red-300">-{formatCurrency(currentShift.cashPayouts)}</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Refunds</div>
              <div className="text-2xl font-bold text-orange-300">-{formatCurrency(currentShift.cashRefunds)}</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border-2 border-white/30">
              <div className="text-white/70 text-sm">Expected in Drawer</div>
              <div className="text-2xl font-bold">{formatCurrency(currentShift.expectedCash)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            { id: 'drawer', label: 'Cash Drawer', icon: Banknote },
            { id: 'movements', label: 'Cash Movements', icon: RefreshCw },
            { id: 'staff', label: 'Staff Tracking', icon: Users },
            { id: 'history', label: 'Shift History', icon: Clock },
            { id: 'security', label: 'Theft Detection', icon: Shield }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
              {tab.id === 'security' && theftFlags.filter(f => f.status === 'investigating').length > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {theftFlags.filter(f => f.status === 'investigating').length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-8">

        {/* Cash Drawer Tab */}
        {activeTab === 'drawer' && (
          <div className="space-y-6">
            {/* Denomination Entry */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-800 text-lg">Cash Count</h3>
                <button
                  onClick={() => setShowDenomination(!showDenomination)}
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
                >
                  {showDenomination ? <EyeOff size={18} /> : <Eye size={18} />}
                  {showDenomination ? 'Hide' : 'Show'} Denomination
                </button>
              </div>

              {showDenomination && (
                <div className="grid grid-cols-5 gap-4 mb-6">
                  {Object.keys(denominations).map(denom => (
                    <div key={denom} className="text-center">
                      <div className="text-lg font-bold text-gray-800 mb-2">₹{denom}</div>
                      <input
                        type="number"
                        min="0"
                        value={denominations[denom]}
                        onChange={(e) => handleDenominationChange(denom, e.target.value)}
                        className="w-full p-3 border rounded-lg text-center text-xl font-bold"
                      />
                      <div className="text-sm text-gray-500 mt-1">
                        = ₹{parseInt(denom) * denominations[denom]}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quick Count */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or enter total cash directly
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Enter total cash amount"
                      className="flex-1 p-4 border rounded-lg text-xl"
                    />
                    <button className="px-6 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                      Set
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Counted Cash</span>
                    <span className="text-3xl font-bold">{formatCurrency(calculateDenominationTotal())}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Expected Cash</span>
                    <span className="text-xl font-medium">{formatCurrency(currentShift.expectedCash)}</span>
                  </div>
                  <div className={`flex justify-between items-center p-3 rounded-lg ${
                    calculateDenominationTotal() - currentShift.expectedCash === 0 ? 'bg-emerald-100' :
                    calculateDenominationTotal() - currentShift.expectedCash > 0 ? 'bg-blue-100' :
                    'bg-red-100'
                  }`}>
                    <span className="font-medium">Variance</span>
                    <span className={`text-xl font-bold ${
                      calculateDenominationTotal() - currentShift.expectedCash === 0 ? 'text-emerald-600' :
                      calculateDenominationTotal() - currentShift.expectedCash > 0 ? 'text-blue-600' :
                      'text-red-600'
                    }`}>
                      {calculateDenominationTotal() - currentShift.expectedCash >= 0 ? '+' : ''}
                      {formatCurrency(calculateDenominationTotal() - currentShift.expectedCash)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Close Shift Button */}
              <div className="mt-6 flex justify-end gap-4">
                <button className="px-6 py-3 border rounded-lg hover:bg-gray-50 flex items-center gap-2">
                  <Printer size={18} />
                  Print Report
                </button>
                <button
                  onClick={closeShift}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2"
                >
                  <Lock size={18} />
                  Close Shift
                </button>
              </div>
            </div>

            {/* Today's Summary */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Today's Cash Flow</h3>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="flex items-center gap-2">
                    <Plus className="text-emerald-600" size={16} /> Opening Balance
                  </span>
                  <span className="font-medium">{formatCurrency(currentShift.openingCash)}</span>
                </div>
                <div className="flex justify-between p-3 bg-emerald-50 rounded-lg">
                  <span className="flex items-center gap-2">
                    <Plus className="text-emerald-600" size={16} /> Cash Sales
                  </span>
                  <span className="font-medium text-emerald-600">+{formatCurrency(currentShift.transactions.sales)}</span>
                </div>
                <div className="flex justify-between p-3 bg-red-50 rounded-lg">
                  <span className="flex items-center gap-2">
                    <Minus className="text-red-600" size={16} /> Refunds
                  </span>
                  <span className="font-medium text-red-600">-{formatCurrency(currentShift.transactions.refunds)}</span>
                </div>
                <div className="flex justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="flex items-center gap-2">
                    <Minus className="text-orange-600" size={16} /> Payouts
                  </span>
                  <span className="font-medium text-orange-600">-{formatCurrency(currentShift.transactions.payouts)}</span>
                </div>
                <div className="flex justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="flex items-center gap-2">
                    <Minus className="text-yellow-600" size={16} /> Petty Cash
                  </span>
                  <span className="font-medium text-yellow-600">-{formatCurrency(currentShift.transactions.petty)}</span>
                </div>
                <div className="flex justify-between p-4 bg-emerald-100 rounded-lg border-2 border-emerald-500">
                  <span className="font-bold">Expected in Drawer</span>
                  <span className="font-bold text-emerald-700">{formatCurrency(currentShift.expectedCash)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cash Movements Tab */}
        {activeTab === 'movements' && (
          <div className="space-y-6">
            {/* Add Payout/Pay-in */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Record Cash Movement</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <select className="p-3 border rounded-lg">
                  <option value="">Select Type</option>
                  <option value="payout">Cash Payout</option>
                  <option value="payin">Cash Pay-in</option>
                </select>
                <select className="p-3 border rounded-lg">
                  <option value="">Select Category</option>
                  {payoutCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Amount"
                  className="p-3 border rounded-lg"
                />
                <button className="bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                  Record
                </button>
              </div>
              <input
                type="text"
                placeholder="Reason / Description"
                className="w-full p-3 border rounded-lg mt-4"
              />
            </div>

            {/* Movement History */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Today's Cash Movements</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Time</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Type</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Category</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Amount</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Reason</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Staff</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Approved By</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cashMovements.map(movement => (
                      <tr key={movement.id} className="border-t hover:bg-gray-50">
                        <td className="p-4 text-gray-600">{formatTime(movement.timestamp)}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            movement.type === 'payout' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'
                          }`}>
                            {movement.type.toUpperCase()}
                          </span>
                        </td>
                        <td className="p-4 text-gray-600 capitalize">{movement.category}</td>
                        <td className="p-4">
                          <span className={`font-medium ${
                            movement.type === 'payout' ? 'text-red-600' : 'text-emerald-600'
                          }`}>
                            {movement.type === 'payout' ? '-' : '+'}{formatCurrency(movement.amount)}
                          </span>
                        </td>
                        <td className="p-4 text-gray-600">{movement.reason}</td>
                        <td className="p-4 text-gray-600">{movement.staff}</td>
                        <td className="p-4 text-gray-600">{movement.approvedBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Staff Tracking Tab */}
        {activeTab === 'staff' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Staff Cash Responsibility</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Staff</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Shifts</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Cash Handled</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Shortages</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Excesses</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Net Variance</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffCashLog.map(staff => (
                      <tr key={staff.staffId} className={`border-t hover:bg-gray-50 ${
                        staff.status === 'flagged' ? 'bg-red-50' : ''
                      }`}>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                              staff.status === 'excellent' ? 'bg-emerald-500' :
                              staff.status === 'good' ? 'bg-blue-500' :
                              staff.status === 'warning' ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}>
                              {staff.name.charAt(0)}
                            </div>
                            <span className="font-medium text-gray-800">{staff.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-gray-600">{staff.shiftsThisMonth}</td>
                        <td className="p-4 font-medium">{formatCurrency(staff.totalCashHandled)}</td>
                        <td className="p-4">
                          {staff.shortages > 0 ? (
                            <span className="text-red-600">
                              {staff.shortages}x ({formatCurrency(staff.shortageAmount)})
                            </span>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="p-4">
                          {staff.excesses > 0 ? (
                            <span className="text-blue-600">
                              {staff.excesses}x ({formatCurrency(staff.excessAmount)})
                            </span>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="p-4">
                          <span className={`font-medium ${
                            staff.netVariance === 0 ? 'text-emerald-600' :
                            staff.netVariance > 0 ? 'text-blue-600' :
                            'text-red-600'
                          }`}>
                            {staff.netVariance >= 0 ? '+' : ''}{formatCurrency(staff.netVariance)}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            staff.status === 'excellent' ? 'bg-emerald-100 text-emerald-700' :
                            staff.status === 'good' ? 'bg-blue-100 text-blue-700' :
                            staff.status === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {staff.status.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Shift History Tab */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">Shift History</h3>
              <input type="date" className="px-4 py-2 border rounded-lg" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Date</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Staff</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Time</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Opening</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Closing</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Expected</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Variance</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {shiftHistory.map(shift => (
                    <tr key={shift.id} className={`border-t hover:bg-gray-50 ${
                      shift.status === 'short' ? 'bg-red-50' : ''
                    }`}>
                      <td className="p-4 text-gray-800">{shift.date}</td>
                      <td className="p-4 font-medium text-gray-800">{shift.staff}</td>
                      <td className="p-4 text-gray-600">{shift.startTime} - {shift.endTime}</td>
                      <td className="p-4">{formatCurrency(shift.openingCash)}</td>
                      <td className="p-4">{formatCurrency(shift.closingCash)}</td>
                      <td className="p-4">{formatCurrency(shift.expectedCash)}</td>
                      <td className="p-4">
                        <span className={`font-medium ${
                          shift.variance === 0 ? 'text-emerald-600' :
                          shift.variance > 0 ? 'text-blue-600' :
                          'text-red-600'
                        }`}>
                          {shift.variance >= 0 ? '+' : ''}{formatCurrency(shift.variance)}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          shift.status === 'balanced' ? 'bg-emerald-100 text-emerald-700' :
                          shift.status === 'excess' ? 'bg-blue-100 text-blue-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {shift.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Theft Detection Tab */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            {/* Alerts */}
            {theftFlags.filter(f => f.status === 'investigating').map(flag => (
              <div key={flag.id} className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="text-red-600 mt-1" size={24} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-red-800">
                          {flag.type === 'pattern' ? 'Pattern Detected' : 'Anomaly Detected'}
                        </h4>
                        <p className="text-red-700 mt-1">{flag.description}</p>
                        <p className="text-sm text-red-600 mt-2">Detected: {flag.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        flag.severity === 'high' ? 'bg-red-200 text-red-800' :
                        flag.severity === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                        'bg-blue-200 text-blue-800'
                      }`}>
                        {flag.severity.toUpperCase()} SEVERITY
                      </span>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                        Investigate
                      </button>
                      <button className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-100">
                        Mark Resolved
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Detection Rules */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Theft Detection Rules</h3>
              <div className="space-y-4">
                {[
                  { rule: 'Repeated small shortages', threshold: '3+ shortages of ₹50-200 in a week', enabled: true },
                  { rule: 'Unusual refund patterns', threshold: '5+ cash refunds in 1 hour', enabled: true },
                  { rule: 'Large single shortage', threshold: 'Single shortage > ₹500', enabled: true },
                  { rule: 'Consistent staff variance', threshold: 'Same staff short 5+ times in month', enabled: true },
                  { rule: 'Void after payment', threshold: 'Bill voided within 5 mins of payment', enabled: false }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium text-gray-800">{item.rule}</div>
                      <div className="text-sm text-gray-500">{item.threshold}</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={item.enabled} className="sr-only peer" readOnly />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchantCashDrawer;
