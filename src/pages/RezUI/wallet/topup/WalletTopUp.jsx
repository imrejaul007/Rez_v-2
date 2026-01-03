import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet, CreditCard, CheckCircle } from 'lucide-react';

/**
 * WALLET TOP UP - Add Money to Wallet
 *
 * Backend APIs needed:
 * - POST /api/wallet/topup (initiate top-up)
 * - POST /api/wallet/verify-payment (verify payment)
 *
 * Connected to: RTMN_MASTER_DOCUMENTATION/FRONTEND_INVENTORY_TRACKER.md
 * Status: ✅ BUILT (Jan 2, 2026)
 * Priority: HIGH - Wallet functionality
 */

function WalletTopUp() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const quickAmounts = [100, 200, 500, 1000, 2000, 5000];

  const handleAmountSelect = (amt) => {
    setSelectedAmount(amt);
    setAmount(amt.toString());
  };

  const handleTopUp = async (e) => {
    e.preventDefault();
    setError('');

    if (parseFloat(amount) < 10) {
      setError('Minimum top-up amount is ₹10');
      return;
    }

    if (parseFloat(amount) > 50000) {
      setError('Maximum top-up amount is ₹50,000');
      return;
    }

    setLoading(true);

    try {
      // TODO: Connect to backend API
      const response = await fetch('/api/wallet/topup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          paymentMethod
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to payment gateway or show success
        navigate('/wallet');
      } else {
        setError(data.message || 'Failed to initiate top-up');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wallet className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Add Money to Wallet</h1>
            <p className="text-gray-600">Top up your ReZ Wallet for faster checkout</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleTopUp} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Quick Select Amount</label>
              <div className="grid grid-cols-3 gap-3">
                {quickAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => handleAmountSelect(amt)}
                    className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                      selectedAmount === amt
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Enter Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">₹</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="0"
                  min="10"
                  max="50000"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">Min: ₹10 | Max: ₹50,000</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
              <div className="space-y-3">
                {[
                  { value: 'upi', label: 'UPI', icon: '📱' },
                  { value: 'card', label: 'Credit/Debit Card', icon: '💳' },
                  { value: 'netbanking', label: 'Net Banking', icon: '🏦' }
                ].map((method) => (
                  <button
                    key={method.value}
                    type="button"
                    onClick={() => setPaymentMethod(method.value)}
                    className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === method.value
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <span className="text-2xl">{method.icon}</span>
                    <span className="font-medium text-gray-900">{method.label}</span>
                    {paymentMethod === method.value && (
                      <CheckCircle className="w-5 h-5 text-purple-600 ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {amount && parseFloat(amount) >= 10 && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">Amount to Add</span>
                  <span className="font-bold text-gray-900">₹{parseFloat(amount).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="text-gray-600">₹0</span>
                </div>
                <div className="flex items-center justify-between pt-2 mt-2 border-t border-green-300">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-green-700 text-lg">₹{parseFloat(amount).toFixed(2)}</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !amount || parseFloat(amount) < 10}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? 'Processing...' : `Add ₹${amount || '0'} to Wallet`}
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-all"
            >
              Cancel
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default WalletTopUp;
