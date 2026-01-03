import React, { useState } from 'react';
import { Gift, Send } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function GiftCoins() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleGift = async () => {
    // Backend API: POST /api/coins/gift
    // { recipientPhone: string, amount: number, message: string }
    setSent(true);
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Gift size={28} /> Gift Coins
        </h1>

        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Recipient Phone</label>
            <input
              type="tel"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="100"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Message (Optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Happy Birthday!"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="3"
            />
          </div>

          <button
            onClick={handleGift}
            disabled={!recipient || !amount}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 rounded font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Send size={18} /> Send Gift
          </button>

          {sent && <p className="text-green-600 text-sm text-center">Gift sent successfully!</p>}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}