import React, { useState } from 'react';
import {
  ArrowLeft, Smartphone, CreditCard, Wifi, Check, X, RefreshCw,
  Volume2, VolumeX, Settings, Shield, Zap, QrCode, NfcIcon,
  CheckCircle, AlertCircle, Clock, DollarSign, TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantSoftPOS = () => {
  const navigate = useNavigate();
  const [isTerminalActive, setIsTerminalActive] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null); // null, 'waiting', 'processing', 'success', 'failed'
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  const [terminalSettings, setTerminalSettings] = useState({
    acceptNFC: true,
    acceptQR: true,
    acceptChip: false,
    autoReceipt: true,
    tipPrompt: true,
    minAmount: 1,
    maxAmount: 50000
  });

  const [todayStats, setTodayStats] = useState({
    transactions: 47,
    totalAmount: 28450,
    avgTransaction: 605,
    successRate: 98.2
  });

  const [recentTransactions, setRecentTransactions] = useState([
    { id: 1, amount: 850, method: 'NFC', card: '•••• 4521', status: 'success', time: '2 min ago', coins: 85 },
    { id: 2, amount: 1200, method: 'QR', card: 'UPI', status: 'success', time: '8 min ago', coins: 120 },
    { id: 3, amount: 450, method: 'NFC', card: '•••• 8832', status: 'success', time: '15 min ago', coins: 45 },
    { id: 4, amount: 2100, method: 'NFC', card: '•••• 1156', status: 'failed', time: '22 min ago', coins: 0 },
    { id: 5, amount: 680, method: 'QR', card: 'UPI', status: 'success', time: '31 min ago', coins: 68 }
  ]);

  const activateTerminal = () => {
    setIsTerminalActive(true);
    setPaymentStatus(null);
  };

  const deactivateTerminal = () => {
    setIsTerminalActive(false);
    setPaymentStatus(null);
    setPaymentAmount('');
  };

  const startPayment = () => {
    if (!paymentAmount || parseFloat(paymentAmount) <= 0) return;
    setPaymentStatus('waiting');

    // Simulate NFC/QR detection after 3 seconds
    setTimeout(() => {
      setPaymentStatus('processing');

      // Simulate payment processing
      setTimeout(() => {
        const success = Math.random() > 0.1; // 90% success rate
        setPaymentStatus(success ? 'success' : 'failed');

        if (success) {
          // Add to recent transactions
          const newTransaction = {
            id: Date.now(),
            amount: parseFloat(paymentAmount),
            method: Math.random() > 0.5 ? 'NFC' : 'QR',
            card: Math.random() > 0.5 ? `•••• ${Math.floor(1000 + Math.random() * 9000)}` : 'UPI',
            status: 'success',
            time: 'Just now',
            coins: Math.floor(parseFloat(paymentAmount) / 10)
          };
          setRecentTransactions([newTransaction, ...recentTransactions.slice(0, 4)]);
        }
      }, 2000);
    }, 3000);
  };

  const resetTerminal = () => {
    setPaymentStatus(null);
    setPaymentAmount('');
  };

  const quickAmounts = [100, 200, 500, 1000, 2000, 5000];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">SoftPOS Terminal</h1>
              <p className="text-purple-200 text-sm">Accept contactless payments</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 bg-white/20 rounded-full"
            >
              {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 bg-white/20 rounded-full"
            >
              <Settings size={20} />
            </button>
          </div>
        </div>

        {/* Today's Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{todayStats.transactions}</p>
            <p className="text-xs text-purple-200">Txns</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(todayStats.totalAmount/1000).toFixed(1)}K</p>
            <p className="text-xs text-purple-200">Total</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{todayStats.avgTransaction}</p>
            <p className="text-xs text-purple-200">Avg</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{todayStats.successRate}%</p>
            <p className="text-xs text-purple-200">Success</p>
          </div>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="bg-gray-800 p-4 border-b border-gray-700">
          <h3 className="text-white font-semibold mb-3">Terminal Settings</h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-gray-300 flex items-center">
                <Wifi size={18} className="mr-2" /> Accept NFC/Tap
              </span>
              <input
                type="checkbox"
                checked={terminalSettings.acceptNFC}
                onChange={(e) => setTerminalSettings({...terminalSettings, acceptNFC: e.target.checked})}
                className="w-5 h-5 rounded"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-300 flex items-center">
                <QrCode size={18} className="mr-2" /> Accept QR/UPI
              </span>
              <input
                type="checkbox"
                checked={terminalSettings.acceptQR}
                onChange={(e) => setTerminalSettings({...terminalSettings, acceptQR: e.target.checked})}
                className="w-5 h-5 rounded"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-300 flex items-center">
                <DollarSign size={18} className="mr-2" /> Show Tip Prompt
              </span>
              <input
                type="checkbox"
                checked={terminalSettings.tipPrompt}
                onChange={(e) => setTerminalSettings({...terminalSettings, tipPrompt: e.target.checked})}
                className="w-5 h-5 rounded"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-300 flex items-center">
                <CheckCircle size={18} className="mr-2" /> Auto-send Receipt
              </span>
              <input
                type="checkbox"
                checked={terminalSettings.autoReceipt}
                onChange={(e) => setTerminalSettings({...terminalSettings, autoReceipt: e.target.checked})}
                className="w-5 h-5 rounded"
              />
            </label>
          </div>
        </div>
      )}

      <div className="p-4">
        {/* Terminal Status */}
        {!isTerminalActive ? (
          <div className="bg-gray-800 rounded-2xl p-6 text-center mb-6">
            <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Smartphone size={48} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Terminal Inactive</h2>
            <p className="text-gray-400 mb-6">Activate to start accepting contactless payments</p>

            <button
              onClick={activateTerminal}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center"
            >
              <Zap size={24} className="mr-2" />
              Activate Terminal
            </button>

            <div className="mt-6 flex justify-center space-x-6 text-gray-500">
              <div className="flex items-center">
                <Shield size={16} className="mr-1" />
                <span className="text-sm">PCI Compliant</span>
              </div>
              <div className="flex items-center">
                <Wifi size={16} className="mr-1" />
                <span className="text-sm">NFC Ready</span>
              </div>
            </div>
          </div>
        ) : paymentStatus === null ? (
          /* Amount Entry */
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white">Enter Amount</h2>
              <button
                onClick={deactivateTerminal}
                className="text-red-400 text-sm"
              >
                Deactivate
              </button>
            </div>

            <div className="bg-gray-900 rounded-xl p-4 mb-4">
              <div className="flex items-center">
                <span className="text-3xl text-gray-400 mr-2">₹</span>
                <input
                  type="number"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  placeholder="0.00"
                  className="bg-transparent text-4xl font-bold text-white w-full focus:outline-none"
                />
              </div>
            </div>

            {/* Quick Amount Buttons */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {quickAmounts.map(amount => (
                <button
                  key={amount}
                  onClick={() => setPaymentAmount(amount.toString())}
                  className="bg-gray-700 text-white py-2 rounded-lg text-sm hover:bg-gray-600"
                >
                  ₹{amount}
                </button>
              ))}
            </div>

            <button
              onClick={startPayment}
              disabled={!paymentAmount || parseFloat(paymentAmount) <= 0}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg disabled:opacity-50 flex items-center justify-center"
            >
              <CreditCard size={24} className="mr-2" />
              Request Payment
            </button>

            {paymentAmount && parseFloat(paymentAmount) > 0 && (
              <p className="text-center text-green-400 text-sm mt-3">
                Customer earns {Math.floor(parseFloat(paymentAmount) / 10)} RezCoins
              </p>
            )}
          </div>
        ) : paymentStatus === 'waiting' ? (
          /* Waiting for Card/Phone */
          <div className="bg-gray-800 rounded-2xl p-6 text-center mb-6">
            <div className="text-4xl font-bold text-white mb-6">₹{paymentAmount}</div>

            <div className="relative w-40 h-40 mx-auto mb-6">
              {/* Pulsing animation */}
              <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-ping"></div>
              <div className="absolute inset-4 bg-purple-500/30 rounded-full animate-ping animation-delay-200"></div>
              <div className="absolute inset-8 bg-purple-500/40 rounded-full animate-ping animation-delay-400"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full flex items-center justify-center">
                <Wifi size={48} className="text-white" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-white mb-2">Ready to Accept</h2>
            <p className="text-gray-400 mb-4">Tap card or phone on device</p>

            <div className="flex justify-center space-x-4 mb-6">
              <div className="bg-gray-700 px-4 py-2 rounded-full flex items-center">
                <Wifi size={16} className="text-green-400 mr-2" />
                <span className="text-white text-sm">NFC</span>
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-full flex items-center">
                <QrCode size={16} className="text-green-400 mr-2" />
                <span className="text-white text-sm">QR</span>
              </div>
            </div>

            <button
              onClick={resetTerminal}
              className="text-red-400"
            >
              Cancel
            </button>
          </div>
        ) : paymentStatus === 'processing' ? (
          /* Processing */
          <div className="bg-gray-800 rounded-2xl p-6 text-center mb-6">
            <div className="text-4xl font-bold text-white mb-6">₹{paymentAmount}</div>

            <div className="w-24 h-24 mx-auto mb-6">
              <RefreshCw size={64} className="text-yellow-400 animate-spin mx-auto" />
            </div>

            <h2 className="text-xl font-bold text-white mb-2">Processing Payment</h2>
            <p className="text-gray-400">Please wait...</p>
          </div>
        ) : paymentStatus === 'success' ? (
          /* Success */
          <div className="bg-gray-800 rounded-2xl p-6 text-center mb-6">
            <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Check size={48} className="text-white" />
            </div>

            <h2 className="text-2xl font-bold text-green-400 mb-2">Payment Successful!</h2>
            <div className="text-4xl font-bold text-white mb-4">₹{paymentAmount}</div>

            <div className="bg-green-900/30 rounded-xl p-4 mb-6">
              <p className="text-green-400">
                Customer earned <span className="font-bold">{Math.floor(parseFloat(paymentAmount) / 10)} RezCoins</span>
              </p>
            </div>

            <button
              onClick={resetTerminal}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 rounded-xl font-bold"
            >
              New Payment
            </button>
          </div>
        ) : (
          /* Failed */
          <div className="bg-gray-800 rounded-2xl p-6 text-center mb-6">
            <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <X size={48} className="text-white" />
            </div>

            <h2 className="text-2xl font-bold text-red-400 mb-2">Payment Failed</h2>
            <div className="text-4xl font-bold text-white mb-4">₹{paymentAmount}</div>

            <p className="text-gray-400 mb-6">Card declined or connection error</p>

            <div className="flex space-x-3">
              <button
                onClick={() => setPaymentStatus('waiting')}
                className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-xl font-bold"
              >
                Retry
              </button>
              <button
                onClick={resetTerminal}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Accepted Payment Methods */}
        <div className="bg-gray-800 rounded-xl p-4 mb-6">
          <h3 className="text-white font-semibold mb-3">Accepted Methods</h3>
          <div className="flex justify-around">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-1">
                <Wifi size={24} className="text-white" />
              </div>
              <span className="text-gray-400 text-xs">NFC/Tap</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-1">
                <QrCode size={24} className="text-white" />
              </div>
              <span className="text-gray-400 text-xs">UPI/QR</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-1">
                <CreditCard size={24} className="text-white" />
              </div>
              <span className="text-gray-400 text-xs">Cards</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-1">
                <Smartphone size={24} className="text-white" />
              </div>
              <span className="text-gray-400 text-xs">Wallets</span>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Recent Transactions</h3>
            <button className="text-purple-400 text-sm">View All</button>
          </div>

          <div className="space-y-3">
            {recentTransactions.map(txn => (
              <div key={txn.id} className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    txn.status === 'success' ? 'bg-green-900/50' : 'bg-red-900/50'
                  }`}>
                    {txn.status === 'success' ? (
                      <CheckCircle size={20} className="text-green-400" />
                    ) : (
                      <AlertCircle size={20} className="text-red-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium">₹{txn.amount}</p>
                    <p className="text-gray-400 text-xs">{txn.method} • {txn.card}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs">{txn.time}</p>
                  {txn.coins > 0 && (
                    <p className="text-yellow-400 text-xs">+{txn.coins} coins</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 bg-gray-800/50 rounded-xl p-4 flex items-start">
          <Shield size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-green-400 font-medium text-sm">Secure & PCI Compliant</p>
            <p className="text-gray-500 text-xs">All transactions are encrypted end-to-end. Card data never stored on device.</p>
          </div>
        </div>
      </div>

      <BottomNav userType="merchant" />
    </div>
  );
};

export default MerchantSoftPOS;
