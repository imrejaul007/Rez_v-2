import { useState } from 'react';
import { ArrowLeft, Send, Users, Building, IndianRupee, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';

export default function WalletTransfer() {
  const navigate = useNavigate();
  const [transferType, setTransferType] = useState('user'); // user, bank, upi
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [note, setNote] = useState('');
  const [pin, setPin] = useState('');
  const [showPinModal, setShowPinModal] = useState(false);

  // Backend API: POST /api/wallet/transfer
  // Body: { type, amount, recipient, note, pin }
  // Response: { success, transactionId, newBalance }

  const walletBalance = 5420;

  const handleTransfer = () => {
    if (!amount || !recipient) {
      alert('Please fill all required fields');
      return;
    }
    if (parseFloat(amount) > walletBalance) {
      alert('Insufficient balance');
      return;
    }
    setShowPinModal(true);
  };

  const confirmTransfer = () => {
    if (pin.length !== 4) {
      alert('Please enter 4-digit PIN');
      return;
    }
    // API call here
    alert('Transfer successful!');
    navigate('/wallet');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Transfer Money</h1>
        <p className="text-purple-100 mt-1">Available Balance: ₹{walletBalance.toLocaleString()}</p>
      </div>

      {/* Transfer Type Selection */}
      <div className="p-4 bg-white">
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setTransferType('user')}
            className={`p-4 rounded-xl border-2 transition-all ${
              transferType === 'user'
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200'
            }`}
          >
            <Users className={`mx-auto mb-2 ${transferType === 'user' ? 'text-purple-600' : 'text-gray-400'}`} />
            <p className="text-sm font-medium">To User</p>
          </button>
          <button
            onClick={() => setTransferType('bank')}
            className={`p-4 rounded-xl border-2 transition-all ${
              transferType === 'bank'
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200'
            }`}
          >
            <Building className={`mx-auto mb-2 ${transferType === 'bank' ? 'text-purple-600' : 'text-gray-400'}`} />
            <p className="text-sm font-medium">To Bank</p>
          </button>
          <button
            onClick={() => setTransferType('upi')}
            className={`p-4 rounded-xl border-2 transition-all ${
              transferType === 'upi'
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200'
            }`}
          >
            <Send className={`mx-auto mb-2 ${transferType === 'upi' ? 'text-purple-600' : 'text-gray-400'}`} />
            <p className="text-sm font-medium">Via UPI</p>
          </button>
        </div>
      </div>

      {/* Transfer Form */}
      <div className="p-4 space-y-4">
        {/* Recipient */}
        <div className="bg-white p-4 rounded-xl">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {transferType === 'user' ? 'User Phone/Email' : transferType === 'bank' ? 'Account Number' : 'UPI ID'}
          </label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder={
              transferType === 'user'
                ? 'Enter phone or email'
                : transferType === 'bank'
                ? 'Enter account number'
                : 'username@upi'
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Amount */}
        <div className="bg-white p-4 rounded-xl">
          <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
          <div className="relative">
            <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 mt-3">
            {[500, 1000, 2000, 5000].map((amt) => (
              <button
                key={amt}
                onClick={() => setAmount(amt.toString())}
                className="flex-1 px-3 py-2 bg-purple-50 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-100"
              >
                ₹{amt}
              </button>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="bg-white p-4 rounded-xl">
          <label className="block text-sm font-medium text-gray-700 mb-2">Note (Optional)</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add a note..."
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Transfer Info */}
        <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
          <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
          <div className="text-sm text-blue-900">
            <p className="font-medium">Transfer Information</p>
            <p className="mt-1">
              {transferType === 'user' && 'Instant transfer to ReZ wallet. No fees.'}
              {transferType === 'bank' && 'Bank transfers take 1-3 business days. ₹5 fee applies.'}
              {transferType === 'upi' && 'Instant UPI transfer. No fees.'}
            </p>
          </div>
        </div>

        {/* Transfer Button */}
        <button
          onClick={handleTransfer}
          disabled={!amount || !recipient}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
        >
          Transfer ₹{amount || '0'}
        </button>
      </div>

      {/* PIN Modal */}
      {showPinModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">Enter PIN</h3>
            <p className="text-sm text-gray-600 mb-4">Enter your 4-digit PIN to confirm transfer</p>
            <input
              type="password"
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-4"
            />
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowPinModal(false);
                  setPin('');
                }}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmTransfer}
                disabled={pin.length !== 4}
                className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
