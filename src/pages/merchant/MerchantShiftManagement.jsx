import React, { useState } from 'react';
import {
  ArrowLeft, Clock, Play, Square, Users, DollarSign, Receipt,
  AlertCircle, CheckCircle, TrendingUp, Banknote, CreditCard,
  Calculator, FileText, ChevronRight, RefreshCw, Lock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantShiftManagement = () => {
  const navigate = useNavigate();
  const [activeShift, setActiveShift] = useState({
    id: 'SHIFT-2024-001',
    startTime: '09:00 AM',
    cashier: 'Rahul Kumar',
    openingCash: 5000,
    status: 'active'
  });
  const [showStartShift, setShowStartShift] = useState(false);
  const [showEndShift, setShowEndShift] = useState(false);
  const [openingAmount, setOpeningAmount] = useState('');
  const [closingCash, setClosingCash] = useState('');

  const shiftSummary = {
    totalSales: 45680,
    cashSales: 18500,
    cardSales: 15200,
    upiSales: 11980,
    orders: 47,
    refunds: 2,
    refundAmount: 850,
    discounts: 1200,
    tips: 650,
    coinRedemptions: 2300
  };

  const recentTransactions = [
    { id: 1, type: 'sale', amount: 1250, method: 'UPI', time: '2 mins ago' },
    { id: 2, type: 'sale', amount: 680, method: 'Cash', time: '8 mins ago' },
    { id: 3, type: 'refund', amount: -350, method: 'Card', time: '15 mins ago' },
    { id: 4, type: 'sale', amount: 2100, method: 'Card', time: '22 mins ago' },
    { id: 5, type: 'sale', amount: 450, method: 'Cash', time: '30 mins ago' }
  ];

  const pastShifts = [
    {
      id: 'SHIFT-2024-000',
      date: 'Yesterday',
      cashier: 'Priya Singh',
      duration: '9:00 AM - 6:00 PM',
      sales: 52340,
      orders: 58,
      variance: 0,
      status: 'balanced'
    },
    {
      id: 'SHIFT-2023-999',
      date: '2 days ago',
      cashier: 'Rahul Kumar',
      duration: '9:00 AM - 6:30 PM',
      sales: 48920,
      orders: 52,
      variance: -150,
      status: 'short'
    },
    {
      id: 'SHIFT-2023-998',
      date: '3 days ago',
      cashier: 'Amit Patel',
      duration: '9:00 AM - 6:00 PM',
      sales: 61200,
      orders: 65,
      variance: 50,
      status: 'over'
    }
  ];

  const handleStartShift = () => {
    if (openingAmount) {
      setActiveShift({
        id: `SHIFT-${Date.now()}`,
        startTime: new Date().toLocaleTimeString(),
        cashier: 'Current User',
        openingCash: parseInt(openingAmount),
        status: 'active'
      });
      setShowStartShift(false);
      setOpeningAmount('');
    }
  };

  const handleEndShift = () => {
    setShowEndShift(false);
    setActiveShift(null);
    setClosingCash('');
  };

  const expectedCash = activeShift ? activeShift.openingCash + shiftSummary.cashSales - 350 : 0;
  const cashVariance = closingCash ? parseInt(closingCash) - expectedCash : 0;

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Shift Management</h1>
              <p className="text-indigo-200 text-sm">Open/close shifts & track cash</p>
            </div>
          </div>
          <Clock size={24} />
        </div>

        {/* Current Shift Status */}
        {activeShift ? (
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2" />
                <span className="font-medium">Shift Active</span>
              </div>
              <span className="text-sm text-indigo-200">{activeShift.id}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-indigo-200 text-xs">Started</p>
                <p className="font-bold">{activeShift.startTime}</p>
              </div>
              <div>
                <p className="text-indigo-200 text-xs">Cashier</p>
                <p className="font-bold">{activeShift.cashier}</p>
              </div>
              <div>
                <p className="text-indigo-200 text-xs">Opening Cash</p>
                <p className="font-bold">₹{activeShift.openingCash}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <Lock size={32} className="mx-auto mb-2 opacity-50" />
            <p className="font-medium">No Active Shift</p>
            <p className="text-sm text-indigo-200">Start a shift to begin transactions</p>
          </div>
        )}
      </div>

      {/* Shift Actions */}
      <div className="p-4">
        <div className="flex space-x-3">
          {!activeShift ? (
            <button
              onClick={() => setShowStartShift(true)}
              className="flex-1 bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center"
            >
              <Play size={20} className="mr-2" />
              Start Shift
            </button>
          ) : (
            <>
              <button
                onClick={() => setShowEndShift(true)}
                className="flex-1 bg-red-600 text-white py-4 rounded-xl font-bold flex items-center justify-center"
              >
                <Square size={20} className="mr-2" />
                End Shift
              </button>
              <button className="bg-gray-700 text-white px-6 py-4 rounded-xl">
                <RefreshCw size={20} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Current Shift Summary */}
      {activeShift && (
        <div className="px-4 pb-4">
          <h2 className="text-white font-bold mb-3">Current Shift Summary</h2>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <DollarSign size={20} className="text-green-400" />
                <span className="text-green-400 text-sm">+12%</span>
              </div>
              <p className="text-2xl font-bold text-white">₹{shiftSummary.totalSales.toLocaleString()}</p>
              <p className="text-gray-400 text-sm">Total Sales</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Receipt size={20} className="text-blue-400" />
              </div>
              <p className="text-2xl font-bold text-white">{shiftSummary.orders}</p>
              <p className="text-gray-400 text-sm">Orders</p>
            </div>
          </div>

          {/* Payment Breakdown */}
          <div className="bg-gray-800 rounded-xl p-4 mb-4">
            <h3 className="text-white font-medium mb-3">Payment Breakdown</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Banknote size={18} className="text-green-400 mr-2" />
                  <span className="text-gray-300">Cash</span>
                </div>
                <span className="text-white font-medium">₹{shiftSummary.cashSales.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CreditCard size={18} className="text-blue-400 mr-2" />
                  <span className="text-gray-300">Card</span>
                </div>
                <span className="text-white font-medium">₹{shiftSummary.cardSales.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded mr-2" />
                  <span className="text-gray-300">UPI</span>
                </div>
                <span className="text-white font-medium">₹{shiftSummary.upiSales.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Other Metrics */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-gray-800 rounded-xl p-3 text-center">
              <p className="text-red-400 font-bold">₹{shiftSummary.refundAmount}</p>
              <p className="text-gray-400 text-xs">Refunds ({shiftSummary.refunds})</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-3 text-center">
              <p className="text-yellow-400 font-bold">₹{shiftSummary.discounts}</p>
              <p className="text-gray-400 text-xs">Discounts</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-3 text-center">
              <p className="text-green-400 font-bold">₹{shiftSummary.tips}</p>
              <p className="text-gray-400 text-xs">Tips</p>
            </div>
          </div>

          {/* Recent Transactions */}
          <h3 className="text-white font-bold mb-3">Recent Transactions</h3>
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            {recentTransactions.map((tx, idx) => (
              <div key={tx.id} className={`p-3 flex items-center justify-between ${idx !== 0 ? 'border-t border-gray-700' : ''}`}>
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    tx.type === 'sale' ? 'bg-green-500/20' : 'bg-red-500/20'
                  }`}>
                    {tx.type === 'sale' ? (
                      <TrendingUp size={16} className="text-green-400" />
                    ) : (
                      <RefreshCw size={16} className="text-red-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium capitalize">{tx.type}</p>
                    <p className="text-gray-400 text-xs">{tx.method} • {tx.time}</p>
                  </div>
                </div>
                <span className={`font-bold ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {tx.amount > 0 ? '+' : ''}₹{Math.abs(tx.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Past Shifts */}
      <div className="px-4 pb-4">
        <h2 className="text-white font-bold mb-3">Past Shifts</h2>
        <div className="space-y-3">
          {pastShifts.map(shift => (
            <div key={shift.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-white font-medium">{shift.date}</p>
                  <p className="text-gray-400 text-sm">{shift.duration}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  shift.status === 'balanced' ? 'bg-green-500/20 text-green-400' :
                  shift.status === 'short' ? 'bg-red-500/20 text-red-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {shift.status === 'balanced' ? 'Balanced' :
                   shift.status === 'short' ? `Short ₹${Math.abs(shift.variance)}` :
                   `Over ₹${shift.variance}`}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{shift.cashier}</span>
                <div className="flex items-center">
                  <span className="text-white font-medium">₹{shift.sales.toLocaleString()}</span>
                  <span className="text-gray-500 mx-2">•</span>
                  <span className="text-gray-400">{shift.orders} orders</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Start Shift Modal */}
      {showStartShift && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-white text-xl font-bold mb-4">Start New Shift</h3>

            <div className="mb-4">
              <label className="text-gray-400 text-sm mb-2 block">Opening Cash Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                <input
                  type="number"
                  value={openingAmount}
                  onChange={(e) => setOpeningAmount(e.target.value)}
                  placeholder="0"
                  className="w-full bg-gray-700 text-white text-2xl pl-8 pr-4 py-4 rounded-xl"
                />
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-start">
                <AlertCircle size={20} className="text-yellow-400 mr-2 mt-0.5" />
                <p className="text-yellow-400 text-sm">
                  Count your cash drawer before starting. This amount will be used for reconciliation at shift end.
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowStartShift(false)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button
                onClick={handleStartShift}
                disabled={!openingAmount}
                className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold disabled:opacity-50"
              >
                Start Shift
              </button>
            </div>
          </div>
        </div>
      )}

      {/* End Shift Modal */}
      {showEndShift && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-white text-xl font-bold mb-4">End Shift</h3>

            <div className="bg-gray-700 rounded-xl p-4 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Opening Cash</span>
                <span className="text-white">₹{activeShift?.openingCash}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Cash Sales</span>
                <span className="text-green-400">+₹{shiftSummary.cashSales}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Cash Refunds</span>
                <span className="text-red-400">-₹350</span>
              </div>
              <div className="border-t border-gray-600 pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="text-white font-medium">Expected Cash</span>
                  <span className="text-white font-bold">₹{expectedCash.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-gray-400 text-sm mb-2 block">Actual Closing Cash</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                <input
                  type="number"
                  value={closingCash}
                  onChange={(e) => setClosingCash(e.target.value)}
                  placeholder="0"
                  className="w-full bg-gray-700 text-white text-2xl pl-8 pr-4 py-4 rounded-xl"
                />
              </div>
            </div>

            {closingCash && (
              <div className={`rounded-xl p-4 mb-4 ${
                cashVariance === 0 ? 'bg-green-500/20' :
                cashVariance < 0 ? 'bg-red-500/20' : 'bg-yellow-500/20'
              }`}>
                <div className="flex items-center justify-between">
                  <span className={
                    cashVariance === 0 ? 'text-green-400' :
                    cashVariance < 0 ? 'text-red-400' : 'text-yellow-400'
                  }>
                    {cashVariance === 0 ? 'Balanced!' :
                     cashVariance < 0 ? 'Cash Short' : 'Cash Over'}
                  </span>
                  <span className={`font-bold ${
                    cashVariance === 0 ? 'text-green-400' :
                    cashVariance < 0 ? 'text-red-400' : 'text-yellow-400'
                  }`}>
                    {cashVariance !== 0 && (cashVariance > 0 ? '+' : '')}
                    ₹{Math.abs(cashVariance)}
                  </span>
                </div>
              </div>
            )}

            <div className="flex space-x-3">
              <button
                onClick={() => setShowEndShift(false)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button
                onClick={handleEndShift}
                disabled={!closingCash}
                className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold disabled:opacity-50"
              >
                End Shift
              </button>
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantShiftManagement;
