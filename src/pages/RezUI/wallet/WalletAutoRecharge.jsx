import { useState } from 'react';
import { ArrowLeft, Zap, CreditCard, Wallet, Calendar, AlertCircle, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';

export default function WalletAutoRecharge() {
  const navigate = useNavigate();
  const [isEnabled, setIsEnabled] = useState(false);
  const [threshold, setThreshold] = useState(500);
  const [rechargeAmount, setRechargeAmount] = useState(1000);
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Backend API: GET /api/wallet/auto-recharge/settings
  // Backend API: PUT /api/wallet/auto-recharge/settings
  // Backend API: POST /api/wallet/auto-recharge/enable
  // Backend API: POST /api/wallet/auto-recharge/disable

  const handleSave = () => {
    // API call to save settings
    alert('Auto-recharge settings saved!');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Zap className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Auto Recharge</h1>
            <p className="text-purple-100 mt-1">Never run out of wallet balance</p>
          </div>
        </div>
      </div>

      {/* Enable/Disable Toggle */}
      <div className="p-4">
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">Enable Auto Recharge</h3>
              <p className="text-sm text-gray-500 mt-1">
                Automatically recharge wallet when balance is low
              </p>
            </div>
            <button
              onClick={() => setIsEnabled(!isEnabled)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                isEnabled ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  isEnabled ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Settings (shown when enabled) */}
      {isEnabled && (
        <>
          {/* Trigger Threshold */}
          <div className="px-4 mb-4">
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-3">When to Recharge</h3>
              <p className="text-sm text-gray-600 mb-4">
                Auto-recharge will trigger when your balance falls below
              </p>

              <div className="relative">
                <input
                  type="number"
                  value={threshold}
                  onChange={(e) => setThreshold(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-lg font-bold text-center"
                />
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <span className="text-gray-500">₹</span>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                {[100, 200, 500, 1000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setThreshold(amount)}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium ${
                      threshold === amount
                        ? 'bg-purple-600 text-white'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recharge Amount */}
          <div className="px-4 mb-4">
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-3">Recharge Amount</h3>
              <p className="text-sm text-gray-600 mb-4">
                How much to add to your wallet automatically
              </p>

              <div className="relative">
                <input
                  type="number"
                  value={rechargeAmount}
                  onChange={(e) => setRechargeAmount(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-lg font-bold text-center"
                />
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <span className="text-gray-500">₹</span>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                {[500, 1000, 2000, 5000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setRechargeAmount(amount)}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium ${
                      rechargeAmount === amount
                        ? 'bg-purple-600 text-white'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="px-4 mb-4">
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-3">Payment Source</h3>

              <div className="space-y-2">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200'
                  }`}
                >
                  <CreditCard className={paymentMethod === 'card' ? 'text-purple-600' : 'text-gray-400'} />
                  <div className="flex-1 text-left">
                    <p className="font-medium text-gray-900">Credit/Debit Card</p>
                    <p className="text-sm text-gray-500">•••• •••• •••• 4242</p>
                  </div>
                  {paymentMethod === 'card' && (
                    <Check className="text-purple-600" size={20} />
                  )}
                </button>

                <button
                  onClick={() => setPaymentMethod('upi')}
                  className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200'
                  }`}
                >
                  <Wallet className={paymentMethod === 'upi' ? 'text-purple-600' : 'text-gray-400'} />
                  <div className="flex-1 text-left">
                    <p className="font-medium text-gray-900">UPI</p>
                    <p className="text-sm text-gray-500">user@paytm</p>
                  </div>
                  {paymentMethod === 'upi' && (
                    <Check className="text-purple-600" size={20} />
                  )}
                </button>
              </div>

              <button className="w-full mt-3 text-purple-600 text-sm font-medium py-2">
                + Add New Payment Method
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="px-4 mb-4">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-2">Auto Recharge Summary</p>
                  <p className="text-sm text-gray-700">
                    When your wallet balance drops below <span className="font-bold">₹{threshold}</span>,
                    we'll automatically add <span className="font-bold">₹{rechargeAmount}</span> using
                    your {paymentMethod === 'card' ? 'saved card' : 'UPI'}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="px-4 mb-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
              <div className="text-sm text-blue-900">
                <p className="font-medium mb-2">Important Information</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Auto-recharge happens instantly when threshold is reached</li>
                  <li>You'll receive a notification for each auto-recharge</li>
                  <li>You can disable auto-recharge anytime</li>
                  <li>Transaction failures will be notified immediately</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recent Auto Recharges */}
          <div className="px-4 mb-4">
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-3">Recent Auto Recharges</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">₹1,000 Added</p>
                      <p className="text-xs text-gray-500">Dec 28, 2025 • 3:45 PM</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Success</p>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">₹1,000 Added</p>
                      <p className="text-xs text-gray-500">Dec 20, 2025 • 11:20 AM</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Success</p>
                </div>
              </div>

              <button className="w-full mt-3 text-purple-600 text-sm font-medium py-2">
                View All History
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="px-4 mb-4">
            <button
              onClick={handleSave}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg"
            >
              Save Settings
            </button>
          </div>
        </>
      )}

      {/* Info when disabled */}
      {!isEnabled && (
        <div className="px-4">
          <div className="bg-white rounded-xl p-8 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4">
              <Zap className="text-gray-400" size={40} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Auto Recharge is Disabled</h3>
            <p className="text-gray-600 text-sm">
              Enable auto-recharge to never worry about low wallet balance.
              Your wallet will automatically top up when needed.
            </p>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
