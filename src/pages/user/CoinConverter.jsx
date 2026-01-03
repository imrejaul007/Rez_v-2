import React, { useState } from 'react';
import { ArrowRightLeft } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function CoinConverter() {
  const [from, setFrom] = useState('cash');
  const [to, setTo] = useState('points');
  const [amount, setAmount] = useState('');

  const exchangeRates = { cash_to_points: 1.2, points_to_cash: 0.9 };
  const converted = amount ? (amount * (from === 'cash' ? exchangeRates.cash_to_points : exchangeRates.points_to_cash)).toFixed(2) : '0';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Coin Converter</h1>

        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">From</label>
            <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2">
              <option value="cash">Cash Coins</option>
              <option value="points">Points Coins</option>
            </select>
          </div>

          <button className="w-full flex justify-center">
            <ArrowRightLeft className="text-purple-500" size={24} />
          </button>

          <div>
            <label className="block text-sm font-semibold mb-2">To</label>
            <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2">
              <option value="points">Points Coins</option>
              <option value="cash">Cash Coins</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Amount</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>

          <div className="bg-purple-50 p-3 rounded">
            <p className="text-sm text-gray-600">You will receive</p>
            <p className="text-2xl font-bold text-purple-600">{converted}</p>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded font-semibold">Convert Now</button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}